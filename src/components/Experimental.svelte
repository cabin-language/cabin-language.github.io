<script lang="ts">
	import BeakerIcon from './icons/BeakerIcon.svelte';
</script>

<p>
	<BeakerIcon stroke="#11111b" style="width: 1rem;" />
	<span>
		<span class="content">This feature is still experimental and may not function properly</span>
	</span>
</p>

<style>
	p {
		color: #11111b;
		background-image: linear-gradient(to bottom right, #94e2d5, #a6e3a1);
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
