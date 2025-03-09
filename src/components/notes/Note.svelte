<script lang="ts">
	let { type, Icon, children } = $props();
</script>

<p>
	<Icon stroke="#11111b" style="width: 1rem;" />
	<span>
		<b>{type}:</b>
		<span class="content">{@render children()}</span>
	</span>
</p>

<style>
	p {
		color: #11111b;
		background-color: #94e2d5;
		padding-left: 0.5rem;
		padding-bottom: 0.5rem;
		padding-top: 0.5rem;
		border-radius: 0.5rem;
		font-size: 0.75rem;
		display: flex;
		align-items: center;
		gap: 0.25rem;
		border: 3px solid rgba(255, 255, 255, 50%);

		span {
			display: flex;
			align-items: center;
			gap: 0.25rem;
		}

		.content :global(svg) {
			width: 1rem;
			height: 1rem;
		}

		.content :global(a) {
			text-decoration: underline;
			color: #11111b;
		}
	}
</style>
