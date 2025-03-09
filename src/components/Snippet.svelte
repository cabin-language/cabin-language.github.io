<!--
@component

A snippet of code.

Snippets support two types: Raw and highlighted. 

Highlighted code is automatically colored using Tree-Sitter. To create highlighted code,
pass a language name to `language` and a string of source code to `code`. The source code
is automatically unindented. If you don't pass a language, the code will be rendered without
highlighting.

Raw code is usually used when you want to highlight it manually. To create raw code, pass
child content to `<Snippet />`, and don't pass a `language` or `code` property. The children
will be rendered as-is, without any kind of unindenting or anything. This can be useful for
manual highlighting with `spans`. Usually when creating raw code, you'll want to wrap your
code in `<pre>`.
-->
<script lang="ts">
	import { Parser, Language, Query } from 'web-tree-sitter';
	import treeSitterWasm from '../assets/parsers/tree-sitter.wasm?url';
	import treeSitterCabin from '../assets/parsers/cabin/tree-sitter-cabin.wasm?url';
	import treeSitterCabinHighlights from '../assets/parsers/cabin/queries/highlights.scm?raw';
	import treeSitterLua from '../assets/parsers/lua/tree-sitter-lua.wasm?url';
	import treeSitterLuaHighlights from '../assets/parsers/lua/queries/lua/highlights.scm?raw';
	import treeSitterBash from '../assets/parsers/bash/tree-sitter-bash.wasm?url';
	import treeSitterBashHighlights from '../assets/parsers/bash/queries/highlights.scm?raw';
	import CopyIcon from './icons/CopyIcon.svelte';
	import CheckIcon from './icons/CheckIcon.svelte';

	const languages = {
		lua: { wasm: treeSitterLua, highlights: treeSitterLuaHighlights },
		cabin: { wasm: treeSitterCabin, highlights: treeSitterCabinHighlights },
		bash: { wasm: treeSitterBash, highlights: treeSitterBashHighlights }
	} as const satisfies { [key: string]: { wasm: string; highlights: string } };

	type Language = keyof typeof languages;

	type RawCode = {
		children: () => any;
	};

	type HighlightedCode = {
		language?: Language;
		code: string;
	};

	let props: (RawCode | HighlightedCode) & {
		inline?: boolean;
		lineNumbers?: boolean;
		onclick?: (event: MouseEvent) => void;
		height?: string;
		cursor?: number;
		input?: boolean;
		copyable?: boolean;
	} = $props();
	let inline = props.inline;
	let children = (props as any).children;
	let code = $state((props as any).code);
	let language = (props as any).language;
	let height = (props as any).height;
	let input = $derived((props as any).input);
	let copyable = (props as any).copyable ?? !!code;

	async function highlight(text: string, language: Language): Promise<string> {
		const highlightGroups: { [key: string]: { highlight: string; child?: number } } = {
			'keyword.return': { highlight: '#cba6f7', child: 0 },
			'keyword.conditional': { highlight: '#cba6f7' },
			'keyword.function': { highlight: '#cba6f7' },
			keyword: { highlight: '#cba6f7' },
			number: { highlight: '#fab387' },
			'lsp.type.enumMember': { highlight: '#fab387' },
			string: { highlight: '#a6e3a1' },
			variable: { highlight: '#b4befe' },
			'variable.member': { highlight: '#b4befe' },
			'variable.parameter': { highlight: '#eba0ac' },
			'function.call': { highlight: '#89b4fa' },
			'function.call.lua': { highlight: '#89b4fa' },
			function: { highlight: '#89b4fa' },
			property: { highlight: '#b4befe' },
			'punctuation.bracket': { highlight: '#9399b2' },
			punctuation: { highlight: '#9399b2' },
			'punctuation.delimiter': { highlight: '#9399b2' },
			'punctuation.special': { highlight: '#f5c2e7' },
			label: { highlight: '#74c7ec' },
			operator: { highlight: '#9399b2' },
			comment: { highlight: '#9399b2' },
			type: { highlight: '#f9e2af' }
		};

		const parserLanguage = languages[language];
		if (parserLanguage) {
			try {
				// treesitter is so dumb and seemingly struggles so much to find the location of this WASM file; this is the only
				// solution ive found to work with both `bun run dev` and `bun run build`. its unbelievably hacky but seems to get
				// the job done.
				//
				// the issue here is actually more with vite than treesitter (i think). when vite does a URL import, it makes it
				// relative to the project root, so the wasm file url becomes something like /app/whatever, and so treesitter looks
				// for it at my system root instead of the project root (only in build mode for some reason; this doesn't cause issues
				// in dev mode). so, in build mode, we just be very explicit by feeding it the absolute file path.
				//
				// hours_wasted_here = too many
				await Parser.init({
					locateFile() {
						return VITE_MODE === 'dev'
							? treeSitterWasm
							: `${import.meta.url.substring(0, import.meta.url.lastIndexOf('/')).replace('.svelte-kit/output/server/chunks', 'build')}${treeSitterWasm}`.replace(
									/.*chunkshttp/,
									'http'
								);
					}
				});

				const parser = new Parser();
				const language = await Language.load(parserLanguage.wasm);
				parser.setLanguage(language);
				let ast = parser.parse(text, null)!;

				let highlights: { name: string; start: number; end: number; child?: number }[] = [];

				let query = new Query(language, parserLanguage.highlights);
				query.matches(ast.rootNode).forEach((queryMatch) => {
					queryMatch.captures.forEach((capture) => {
						let start = capture.node.startIndex;
						let name = capture.name;
						let info = highlightGroups[name];
						if (info) {
							let { highlight, child } = info;
							let end =
								child !== undefined
									? capture.node.children[child]!.endIndex - 1
									: capture.node.endIndex - 1;
							highlights.push({ name: highlight, start, end });
						} else {
							console.warn(`No highlight group for ${name}`);
						}
					});
				});

				let result = '';
				let end = null;
				let line = 1;
				let column = 1;
				for (let index = 0; index < text.length; index++) {
					let highlight = highlights.find((highlight) => highlight.start == index);

					if (highlight) {
						highlights.shift();
						result += `<span style="color: ${highlight.name};">`;
						end = highlight.end;
					}

					result += text.charAt(index);
					if (text.charAt(index) === '\n' && input) {
						line++;
					}

					if (end !== null && index === end) {
						result += `</span>`;
					}
				}

				return result;
			} catch (error) {
				console.error(error);
				return text;
			}
		}

		return text;
	}

	function unindent(text: string): string {
		text = text
			.replace(/^[\r\n]+/g, '')
			.replace(/[\r\n]+\s*$/g, '')
			.replace(/\t/g, '    ');
		let indent = Math.min(...[...(text.match(/^ +/gm) ?? [''])].map((match) => match.length));
		return text.replace(new RegExp(`^ {${indent}}`, 'gm'), '');
	}

	let unindented = $derived(code ? unindent(code) : null);
	let highlighted = $derived(language && unindented ? highlight(unindented, language) : null);

	function copy() {
		if (!copyable) return;
		window.navigator.clipboard.writeText(unindented!);
		didCopy = true;
		setTimeout(() => (didCopy = false), 1500);
	}

	let didCopy = $state(false);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<code class:block={!inline} style:height>
	{#if code}
		<pre>{#if highlighted}{#await highlighted then highlighted}{@html highlighted}{/await}{:else}{unindented}{/if}</pre>
	{:else}
		{@render children!()}
	{/if}
	<button
		style="width: 2rem; height: 2rem; z-index: 999; position: absolute; top: 0px; right: 0px; padding: 0px;"
		onclick={copy}
	>
		{#if copyable}
			{#if didCopy}
				<CheckIcon stroke="#7f849c" style="width: 100%; height: 100%;" />
			{:else}
				<CopyIcon stroke="#7f849c" style="width: 100%; height: 100%;" />
			{/if}
		{/if}
	</button>
</code>

<style>
	.block {
		width: 100%;
	}

	.cursor {
		position: absolute;
		width: 2px;
		padding: 0px;
		border-radius: 100vmax;
		height: 1lh;
		background-color: white;
		border-radius: 0px;
		top: 1rem;
	}

	code {
		position: relative;
		background-color: #28283d;
		color: #cdd6f4;
		border-radius: 0.5rem;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		font-size: 0.85rem;
		text-wrap: nowrap;

		:global(pre) {
			padding: 0px;
			overflow-x: auto;
			width: 100%;
			text-wrap: nowrap;

			:global(span) {
				padding: 0px;
			}
		}
	}
</style>
