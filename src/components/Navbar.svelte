<script lang="ts">
	import { onMount } from 'svelte';
	import logo from '../assets/images/logo.png';
	import DocumentIcon from './icons/DocumentIcon.svelte';
	import PackageIcon from './icons/PackageIcon.svelte';
	import PeopleIcon from './icons/PeopleIcon.svelte';
	import MenuIcon from './icons/MenuIcon.svelte';
	import CloseIcon from './icons/CloseIcon.svelte';
	import LearnIcon from './icons/LearnIcon.svelte';
	import TestIcon from './icons/TestIcon.svelte';

	let desktop = $state(true);

	let { sidebar = null } = $props();

	onMount(() => {
		let media = matchMedia('(min-width: 800px');
		desktop = media.matches;
		media.addEventListener('change', (event) => (desktop = event.matches));
	});

	let showingSidebar = $state(false);
</script>

<nav>
	<a href="/" style:margin-right={sidebar && !desktop ? undefined : 'auto'}>
		<img src={logo} alt="Cabin" />
		{#if desktop}
			Cabin
		{/if}
	</a>
	{#if sidebar && !desktop}
		<button
			onclick={() => {
				sidebar();
				showingSidebar = !showingSidebar;
			}}
			style:margin-right="auto"
			style:margin-left="-1rem"
		>
			{#if showingSidebar}
				<CloseIcon stroke="#CDD6F4" style="width: 2rem; height: 2rem;" />
			{:else}
				<MenuIcon stroke="#CDD6F4" style="width: 2rem; height: 2rem;" />
			{/if}
		</button>
	{/if}
	<a href="/learn">
		{#if desktop}
			Learn
		{:else}
			<LearnIcon stroke="#CDD6F4" style="width: 2rem; height: 2rem;" />
		{/if}
	</a>
	<a href="/reference">
		{#if desktop}
			Reference
		{:else}
			<DocumentIcon stroke="#CDD6F4" style="width: 2rem; height: 2rem;" />
		{/if}
	</a>
	<a href="/playground">
		{#if desktop}
			Playground
		{:else}
			<TestIcon stroke="#CDD6F4" style="width: 2rem; height: 2rem;" />
		{/if}
	</a>
	<a href="/libraries">
		{#if desktop}
			Libraries
		{:else}
			<PackageIcon stroke="#CDD6F4" style="width: 2rem; height: 2rem;" />
		{/if}
	</a>
	<a href="/community">
		{#if desktop}
			Community
		{:else}
			<PeopleIcon stroke="#CDD6F4" style="width: 2rem; height: 2rem;" />
		{/if}
	</a>
</nav>

<style>
	nav {
		display: flex;
		color: #cdd6f4;
		gap: min(1vw, 2rem);
		background-color: #11111b;
		padding-right: 1rem;

		> * {
			padding-left: 1rem;
			padding-right: 1rem;
			padding-top: 1rem;
			padding-bottom: 1rem;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			gap: 0.5rem;

			img {
				width: 2rem;
			}
		}

		> *:first-child {
			font-weight: bold;
			font-size: 1.5rem;
		}
	}
</style>
