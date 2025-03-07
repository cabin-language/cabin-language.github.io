<script lang="ts">
	let { code } = $props();

	function unindent(text: string): string {
		text = text
			.replace(/^[\r\n]+/g, '')
			.replace(/[\r\n]+\s*$/g, '')
			.replace(/\t/g, '    ');
		let indent = Math.min(...[...(text.match(/^ +/gm) ?? [''])].map((match) => match.length));
		return text.replace(new RegExp(`^ {${indent}}`, 'gm'), '');
	}
</script>

<code><pre>{unindent(code)}</pre></code>

<style>
	code {
		background-color: #28283d;
		color: white;
		border-radius: 0.5rem;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		width: 100%;
		font-size: 1rem;
		text-wrap: nowrap;

		> * {
			padding: 0px;
			overflow-x: auto;
			width: 100%;
			text-wrap: nowrap;
		}
	}
</style>
