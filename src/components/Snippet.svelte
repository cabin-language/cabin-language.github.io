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
	import treeSitterEbnf from '../assets/parsers/ebnf/tree-sitter-ebnf.wasm?url';
	import treeSitterEbnfHighlights from '../assets/parsers/ebnf/queries/ebnf/highlights.scm?raw';
	import treeSitterJs from '../assets/parsers/javascript/tree-sitter-javascript.wasm?url';
	import treeSitterJsHighlights from '../assets/parsers/javascript/queries/highlights.scm?raw';
	import treeSitterBnf from '../assets/parsers/bnf/tree-sitter-bnf.wasm?url';
	import treeSitterBnfHighlights from '../assets/parsers/bnf/queries/highlights.scm?raw';
	import CopyIcon from './icons/CopyIcon.svelte';
	import CheckIcon from './icons/CheckIcon.svelte';
	import PlayOutlineIcon from './icons/PlayOutlineIcon.svelte';
	import CloseIcon from './icons/CloseIcon.svelte';

	const languages = {
		lua: { wasm: treeSitterLua, highlights: treeSitterLuaHighlights },
		cabin: { wasm: treeSitterCabin, highlights: treeSitterCabinHighlights },
		bash: { wasm: treeSitterBash, highlights: treeSitterBashHighlights },
		ebnf: { wasm: treeSitterEbnf, highlights: treeSitterEbnfHighlights },
		bnf: { wasm: treeSitterBnf, highlights: treeSitterBnfHighlights },
		javascript: { wasm: treeSitterJs, highlights: treeSitterJsHighlights },
		js: { wasm: treeSitterJs, highlights: treeSitterJsHighlights }
	} as const satisfies { [key: string]: { wasm: string; highlights: string } };

	type Language = keyof typeof languages;

	type RawCode = {
		children: () => any;
	};

	type HighlightedCode = {
		language?: Language;
		code: string;
	};

	const props: (RawCode | HighlightedCode) & {
		inline?: boolean;
		lineNumbers?: boolean;
		onclick?: (event: MouseEvent) => void;
		height?: string;
		cursor?: number;
		input?: boolean;
		copyable?: boolean;
		output?: string;
	} = $props();

	const children = (props as any).children;
	const code = $state((props as any).code);
	const language = $state((props as any).language);

	const inline = props.inline;
	const height = props.height;
	const input = $derived(props.input);
	const copyable = props.copyable ?? !!code;
	const output = props.output ? unindent(props.output) : null;
	const runnable = !!output;

	async function highlight(text: string, language: Language): Promise<string> {
		const highlightGroups: { [key: string]: { highlight: string; child?: number } } = {
			variable: { highlight: '#cdd6f4' },

			'keyword.return': { highlight: '#cba6f7', child: 0 },
			'keyword.conditional': { highlight: '#cba6f7' },
			'keyword.function': { highlight: '#cba6f7' },
			keyword: { highlight: '#cba6f7' },
			'string.grammar': { highlight: '#cba6f7' },

			number: { highlight: '#fab387' },
			boolean: { highlight: '#fab387' },
			'lsp.type.enumMember': { highlight: '#fab387' },
			'constant.builtin': { highlight: '#fab387' },

			'function.call': { highlight: '#89b4fa' },
			'function.method': { highlight: '#89b4fa' },
			'function.call.lua': { highlight: '#89b4fa' },
			function: { highlight: '#89b4fa' },

			'variable.member': { highlight: '#b4befe' },
			property: { highlight: '#b4befe' },

			type: { highlight: '#f9e2af' },
			'symbol.grammar': { highlight: '#f9e2af' },
			'symbol.grammar.camel': { highlight: '#f9e2af' },
			'symbol.grammar.lower': { highlight: '#f9e2af' },

			string: { highlight: '#a6e3a1' },
			'variable.parameter': { highlight: '#eba0ac' },
			'variable.builtin': { highlight: '#f38ba8' },
			'punctuation.special': { highlight: '#f5c2e7' },
			'string.special': { highlight: '#f5c2e7' },
			'string.special.grammar': { highlight: '#f5c2e7' },
			label: { highlight: '#74c7ec' },

			'punctuation.bracket': { highlight: '#9399b2' },
			punctuation: { highlight: '#9399b2' },
			'punctuation.delimiter': { highlight: '#9399b2' },
			operator: { highlight: '#9399b2' },
			comment: { highlight: '#9399b2' },
			'keyword.operator': { highlight: '#9399b2' },
			'comment.block': { highlight: '#9399b2' }
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
				const ast = parser.parse(text, null)!;
				console.log(ast.rootNode.toString());

				const highlights: { name: string; start: number; end: number; child?: number }[] = [];

				const query = new Query(language, parserLanguage.highlights);
				query.matches(ast.rootNode).forEach((queryMatch) => {
					queryMatch.captures.forEach((capture) => {
						const start = capture.node.startIndex;
						const name = capture.name;
						const info = highlightGroups[name];
						if (info) {
							const { highlight, child } = info;
							const end =
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
				const column = 1;
				for (let index = 0; index < text.length; index++) {
					let highlight = highlights.find((highlight) => highlight.start == index);

					if (highlight) {
						highlights.shift();
						result += `<span style="color: ${highlight.name};">`;
						end = highlight.end;
					}

					const char = text.charAt(index);
					if (char === '<') {
						result += '&lt;';
					} else if (char === '>') {
						result += '&gt;';
					} else {
						result += char;
					}

					if (text.charAt(index) === '\n' && input) {
						line++;
					}

					if (end !== null && index === end) {
						result += `</span>`;
					}
				}

				result = result.replaceAll(/^(    )+/gm, (match) =>
					'<span style="color: #45475a;">│</span>   '.repeat(match.length / 4)
				);

				return result;
			} catch (error) {
				console.error(error);
				return text.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
			}
		}

		return text;
	}

	function unindent(text: string): string {
		text = text
			.replace(/^[\r\n]+/g, '')
			.replace(/[\r\n]+\s*$/g, '')
			.replace(/\t/g, '    ');
		const indent = /^[^ \n\r]/m.test(text)
			? 0
			: Math.min(...[...(text.match(/^ +/gm) ?? [])].map((match) => match.length));
		return text.replace(new RegExp(`^ {${indent}}`, 'gm'), '');
	}

	const unindented = $derived(code ? unindent(code) : null);
	const highlighted = $derived(language && unindented ? highlight(unindented, language) : null);

	function copy() {
		if (!copyable) return;
		window.navigator.clipboard.writeText(unindented!);
		didCopy = true;
		setTimeout(() => (didCopy = false), 1500);
	}

	let didCopy = $state(false);

	let outputCode: string | null = $state(null);

	function run() {
		if (output) {
			outputCode = output;
		}
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div>
	<code class:block={!inline} style:height>
		<!-- Code -->
		{#if code}
			<pre>{#if highlighted}{#await highlighted then highlighted}{@html highlighted}{/await}{:else}{unindented}{/if}</pre>
		{:else}
			{@render children!()}
		{/if}

		<!-- Run Button	 -->
		{#if runnable}
			<button
				style="width: 2rem; height: 2rem; z-index: 999; position: absolute; top: 0px; right: 1.5rem; padding: 0px;"
				title="click to run"
				onclick={run}
			>
				<PlayOutlineIcon stroke="#7f849c" style="width: 100%; height: 100%;" />
			</button>
		{/if}

		<!-- Copy Button	 -->
		{#if copyable}
			<button
				style="width: 2rem; height: 2rem; z-index: 999; position: absolute; top: 0px; right: 0px; padding: 0px;"
				title="click to copy"
				onclick={copy}
			>
				{#if didCopy}
					<CheckIcon stroke="#7f849c" style="width: 100%; height: 100%;" />
				{:else}
					<CopyIcon stroke="#7f849c" style="width: 100%; height: 100%;" />
				{/if}
			</button>
		{/if}
	</code>

	{#if outputCode}
		<p>Output:</p>
		<code class="block">
			<pre>{output}</pre>
			<button
				style="width: 2rem; height: 2rem; z-index: 999; position: absolute; top: 0px; right: 0px; padding: 0px;"
				title="hide output"
				onclick={() => (outputCode = null)}
			>
				<CloseIcon stroke="#7f849c" style="width: 100%; height: 100%;" />
			</button>
		</code>
	{/if}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.block {
		width: 100%;
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
