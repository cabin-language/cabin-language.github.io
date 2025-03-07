<script lang="ts">
	let { children } = $props();
</script>

<code>{@render children()}</code>

<style>
	code {
		background-color: #28283d;
		color: white;
		border-radius: 0.5rem;
		padding: clamp(1vw, 0.75rem, 1rem);
		display: flex;
		flex-direction: column;
		width: 100%;
		font-size: 0.75rem;
		text-wrap: nowrap;

		:global(> *) {
			padding: 0px;
			overflow-x: auto;
			width: 100%;
			text-wrap: nowrap;
		}

		:global(> div) {
			display: flex;
			flex-direction: row;
		}
	}
</style>
