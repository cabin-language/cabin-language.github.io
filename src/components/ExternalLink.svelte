<script lang="ts">
	import ExternalLinkIcon from './icons/ExternalLinkIcon.svelte';

	let {
		href,
		children,
		color = 'cornflowerblue'
	}: { href: string; children: () => any; color?: string } = $props();
</script>

<a style:color {href} target="_blank" rel="noopener noreferrer">
	{@render children()}<ExternalLinkIcon stroke={color} style="width: 1em;" />
</a>

<style>
	a {
		display: inline-flex;
		gap: 0.25em;
		align-items: center;
	}
</style>
