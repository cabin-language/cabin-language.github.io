<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from './Navbar.svelte';
	import CommunitySidebar from './CommunitySidebar.svelte';

	let { children, page } = $props();

	let sidebar: CommunitySidebar;

	let next_label: string | null = $state(null);
	let next_path: string | null = $state(null);
	let previous_label: string | null = $state(null);
	let previous_path: string | null = $state(null);

	onMount(() => {
		let next = sidebar.next();
		next_label = next?.label ?? null;
		next_path = next?.path ?? null;

		let previous = sidebar.previous();
		previous_label = previous?.label ?? null;
		previous_path = previous?.path ?? null;
	});
</script>

<div class="wrapper">
	<Navbar />
	<div class="inner">
		<CommunitySidebar {page} bind:this={sidebar} />
		<main>
			{@render children()}
			<span class="navigation-buttons">
				{#if previous_label}
					<a href={previous_path}>
						<span>Previous</span>
						<span>{previous_label}</span>
					</a>
				{/if}
				{#if next_label}
					<a href={next_path}>
						<span>Next</span>
						<span>{next_label}</span>
					</a>
				{/if}
			</span>
		</main>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}

	.inner {
		display: flex;
		width: 100%;
		height: 100%;
	}

	main {
		width: 60%;
		background-color: #1e1e2e;
		color: #cdd6f4;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		padding: 3rem;
		padding-top: 1rem;
		padding-bottom: 7rem;
		overflow-y: auto;
		height: 100%;

		:global(h2) {
			padding-top: 1rem;
		}

		.navigation-buttons {
			margin-left: auto;
			margin-right: auto;
			display: flex;
			gap: 5rem;
			margin-top: 3rem;

			> a {
				color: black;
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 10rem;
				border-radius: 0.5rem;
				box-shadow: 0px 0px 0.75rem black;
				padding-top: 0.5rem;
				padding-bottom: 0.5rem;
				border: 2px solid rgba(255, 255, 255, 40%);

				&:first-child {
					background-image: linear-gradient(to bottom right, #f9e2af, #f38ba8);
				}

				&:last-child {
					background-image: linear-gradient(to bottom right, #89dceb, #b4befe);
				}

				> *:first-child {
					font-weight: bold;
				}

				> *:last-child {
					color: rgba(0, 0, 0, 50%);
					font-size: 0.75em;
				}
			}
		}
	}
</style>
