<script>
	import Code from '../../../components/Code.svelte';
	import PreviewFeatureWarning from '../../../components/PreviewFeatureWarning.svelte';
	import Snippet from '../../../components/Snippet.svelte';
	import StandardLibraryPage from '../../../components/StandardLibraryPage.svelte';
	import WarningIcon from '../../../components/icons/WarningIcon.svelte';

	const features = [
		{
			signature: 'bytes: action(this: This): Number',
			id: 'bytes',
			shortDescription: 'Gets the length of the string, in bytes.',
			longDescription:
				'Gets the length of the string, in bytes. To get the length of the string in graphemes, use <a href="#text-byte_count"><code>length()</code></a>.',
			example: '"hello!".length(); # 5\n"😀😘😁".length(); # 6',
			preview: true,
			expanded: false
		},
		{
			signature: 'ends_with: action(this: This, pattern: This): Boolean',
			id: 'ends_with',
			shortDescription: 'Returns whether this text ends with the given suffix.',
			longDescription:
				'Returns whether this text ends with the givent suffix. If the given suffix is empty, this returns <code>true</code>, even if this text being checked is empty as well.',
			example: '"hello!".length(); # 5\n"😀😘😁".length(); # 3',
			preview: true,
			expanded: false
		},
		{
			signature: 'length: action(this: This): Number',
			id: 'length',
			shortDescription: 'Gets the length of the string, in graphemes.',
			longDescription:
				'Gets the length of the string, in graphemes. Graphemes are what you can think of as a single "character", including regular ASCII characters, emojis, and other unicode characters; These all count as one unit in the length calculation. To get the length of the string in bytes, use <a href="#text-byte_count"><code>bytes()</code></a>.',
			example: '"hello!".length(); # 5\n"😀😘😁".length(); # 3',
			preview: true,
			expanded: false
		},
		{
			signature: 'lines: action(this: This): List<This>',
			id: 'lines',
			shortDescription: 'Splits this text into lines.',
			longDescription:
				'Splits this text into lines. Equivalent to <code>text.split_where(["\\r", "\\n"])</code>',
			example: '"hes a    phantom".split(); # ["hes", "a", "phantom"]',
			preview: true,
			expanded: false
		},
		{
			signature: 'replace: action(this: This, pattern: This, replacement: This): List<This>',
			id: 'replace',
			shortDescription: 'Replaces substrings with a given replacement.',
			longDescription:
				'Replaces all occurrences of <code>pattern</code> with <code>replacement</code>.',
			example: '"hes a    phantom".split(); # ["hes", "a", "phantom"]',
			preview: true,
			expanded: false
		},
		{
			signature: 'split: action(this: This): List<This>',
			id: 'split',
			shortDescription: 'Splits this text by whitespace.',
			longDescription:
				'Splits this text by whitespace, returning the result as a list of substrings, without including the delimiters.',
			example: '"hes a    phantom".split(); # ["hes", "a", "phantom"]',
			preview: true,
			expanded: false
		},
		{
			signature: 'split_any: action(this: This, delimiters: List<This>): List<This>',
			id: 'split_any',
			shortDescription: 'Splits this text by the given delimiters.',
			longDescription:
				'Splits this text by whitespace, returning the result as a list of substrings, without including the delimiters.',
			example: '"hes a    phantom".split(); # ["hes", "a", "phantom"]',
			preview: true,
			expanded: false
		},
		{
			signature: 'starts_with: action(this: This, pattern: This): Boolean',
			id: 'starts_with',
			shortDescription: 'Returns whether this text starts with the given prefix.',
			longDescription:
				'Returns whether this text starts with the givent prefix. If the given prefix is empty, this returns <code>true</code>, even if this text being checked is empty as well.',
			example: '"hello!".length(); # 5\n"😀😘😁".length(); # 3',
			preview: true,
			expanded: false
		},
		{
			signature: 'trim: action(this: This): This',
			id: 'trim',
			shortDescription: 'Removes whitespace from the beginning and end of this text.',
			longDescription:
				'Splits this text into lines. Equivalent to <code>text.split_where(["\\r", "\\n"])</code>',
			example: '"hes a    phantom".split(); # ["hes", "a", "phantom"]',
			preview: true,
			expanded: false
		},
		{
			signature: 'trim_end: action(this: This): This',
			id: 'trim_end',
			shortDescription: 'Removes whitespace from the end of this text.',
			longDescription:
				'Removes all whitespace from the end of this text, as defined in <a href="https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt">the Unicode whitespace spec</a>. This includes spaces, tabs, newlines, carriage returns, and other unicode characters considered "whitespace". All such characters at the <i>end</i> of this text are removed.',
			example: '"  he was just 14    \\n\\r".trim_end(); # "  he was just 14"',
			preview: true,
			expanded: false
		},
		{
			signature: 'trim_start: action(this: This): This',
			id: 'trim_start',
			shortDescription: 'Removes whitespace from the beginning of this text.',
			longDescription:
				'Splits this text into lines. Equivalent to <code>text.split_where(["\\r", "\\n"])</code>',
			example: '"hes a    phantom".split(); # ["hes", "a", "phantom"]',
			preview: true,
			expanded: false
		}
	];

	const extensions = [
		{
			signature: 'extend Text tobe List<Letter>'
		},
		{
			signature: 'extend Text tobe Addable'
		}
	];
</script>

<svelte:head>
	<title>Standard Library&nbsp;&nbsp;•&nbsp;&nbsp;Cabin Docs</title>
</svelte:head>

<StandardLibraryPage page="Text">
	<h1 id="text"><code>Text</code></h1>

	<p>
		<code>Text</code>
		is Cabin's equivalent to
		<code>String</code>
		in most languages. It represents... well, text.
		<code>Text</code>
		is a group, but it's a special group that can't be instantiated with the standard
		<code>new</code>
		syntax; Instead, quoted text literals are used to instantiate it:
	</p>

	<Snippet>
		<pre>
let text = "hello!"; # instance of Text
</pre>
	</Snippet>

	<h2 id="properties">Properties</h2>

	{#each features as property}
		<hr />

		<span>
			<WarningIcon stroke="#f9e2af" style="width: 1rem; height: 1rem;" />
			<h2 id={property.id}>
				<code>{property.signature}</code>
			</h2>
			<button class="detail-button" onclick={() => (property.expanded = !property.expanded)}>
				{#if property.expanded}
					Less
				{:else}
					More
				{/if}
			</button>
		</span>

		{#if property.expanded && property.preview}
			<PreviewFeatureWarning />
		{/if}

		<p>
			{#if property.expanded}
				{@html property.longDescription}
			{:else}
				{@html property.shortDescription}
			{/if}
		</p>

		{#if property.expanded}
			<h3>Example:</h3>

			<Code code={property.example} />
		{/if}
	{/each}

	<hr />

	<h2 id="extensions">Extensions</h2>

	{#each extensions as extension}
		<hr />
		<h2><code>{extension.signature}</code></h2>
	{/each}

	<hr />
</StandardLibraryPage>

<style>
	span {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.detail-button {
		background-image: linear-gradient(to bottom right, #89dceb, #b4befe);
		height: fit-content;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		border-radius: 0.5rem;
		margin-left: auto;
		box-shadow: 0px 0px 1rem black;
	}

	h2:has(code) {
		padding-top: 0px;
		font-size: 0.85rem;
	}
</style>
