<script lang="ts">
	let { type, Icon, children, color, color2 } = $props();
</script>

<div style:background-image={`linear-gradient(to bottom right, ${color}, ${color2})`}>
	<span><Icon stroke="#11111b" style="width: 1rem;" /></span>
	<b>{type}:</b>
	<span class="content">{@render children()}</span>
</div>

<style>
	div {
		color: #11111b;
		padding-left: 0.5rem;
		padding-bottom: 0.5rem;
		padding-top: 0.5rem;
		border-radius: 0.5rem;
		font-size: 0.75rem;

		> span:not(.content) {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			width: fit-content;
			height: 1lh;
			position: relative;
			top: 2px;
		}

		.content,
		b {
			position: relative;
			top: -2px;
		}

		.content :global(svg) {
			width: 1rem;
			height: 1rem;
		}

		.content :global(a) {
			text-decoration: underline;
		}
	}
</style>
