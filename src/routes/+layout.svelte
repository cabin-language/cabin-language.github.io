<script lang="ts">
	import logo from '../assets/images/logo.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={logo} />
</svelte:head>

{@render children()}
