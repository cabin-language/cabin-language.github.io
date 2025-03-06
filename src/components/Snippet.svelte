<script lang="ts">
	let { children } = $props();

	function unindent(text: string): string {
		text = text.replace('\t', '    ').trim();
		let min_indent = Infinity;
		text.split('\n').forEach((line) => {
			min_indent = Math.min(min_indent, line.match(/^\s+/)?.[0].length ?? 0);
		});
		return text
			.split('\n')
			.map((line) => line.substring(min_indent))
			.join('\n');
	}
</script>

<code>{@render children()}</code>

<style>
	code {
		background-color: #28283d;
		color: white;
		border-radius: 0.5rem;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		width: 100%;

		:global(> *) {
			padding: 0px;
		}

		:global(> div) {
			display: flex;
			flex-direction: row;
		}
	}
</style>
