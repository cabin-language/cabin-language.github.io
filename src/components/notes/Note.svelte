<script lang="ts">
	let { type, Icon, children, color, color2 } = $props();
</script>

<p style:background-image={`linear-gradient(to bottom right, ${color}, ${color2})`}>
	<Icon stroke="#11111b" style="width: 1rem;" />
	<span>
		<b>{type}:</b>
		<span class="content">{@render children()}</span>
	</span>
</p>

<style>
	p {
		color: #11111b;
		padding-left: 0.5rem;
		padding-bottom: 0.5rem;
		padding-top: 0.5rem;
		border-radius: 0.5rem;
		font-size: 0.75rem;
		display: flex;
		align-items: center;
		gap: 0.25rem;

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
