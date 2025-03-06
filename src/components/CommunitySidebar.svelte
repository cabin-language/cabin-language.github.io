<script lang="ts">
	import { onMount } from 'svelte';

	let list: HTMLUListElement;

	let { page }: { page: string } = $props();

	onMount(() => {
		Array.from(list.children).forEach((element) => {
			if (element.firstElementChild?.textContent!.toLowerCase() === page.toLowerCase()) {
				Array.from(element.children).forEach((subElement) => {
					(subElement as HTMLElement).style.display = 'block';
				});
				(element.firstElementChild as HTMLElement).style.fontWeight = 'bold';
				(element.firstElementChild as HTMLElement).style.color = 'white';
			}
		});
	});

	export function next(): { path: string; label: string } | null {
		let items = Array.from(list.children);
		for (let index = 0; index < items.length; index++) {
			let element = items[index];
			if (index === items.length - 1) return null;
			if (element.firstElementChild?.textContent!.toLowerCase() === page.toLowerCase()) {
				return {
					path: items[index + 1].firstElementChild!.getAttribute('href')!,
					label: items[index + 1].firstElementChild!.textContent!
				};
			}
		}

		return null;
	}

	export function previous(): { path: string; label: string } | null {
		let items = Array.from(list.children);
		for (let index = 0; index < items.length; index++) {
			let element = items[index];
			if (element.firstElementChild?.textContent!.toLowerCase() === page.toLowerCase()) {
				if (index === 0) return null;
				return {
					path: items[index - 1].firstElementChild!.getAttribute('href')!,
					label: items[index - 1].firstElementChild!.textContent!
				};
			}
		}

		return null;
	}
</script>

<section>
	<h1>Contents</h1>

	<ul bind:this={list}>
		<li><a href="/community#discord">Discord</a></li>
		<li><a href="/community#github">GitHub</a></li>
		<li><a href="/community#help-wanted">Help Wanted</a></li>
	</ul>
</section>

<style>
	section {
		color: #cdd6f4;
		overflow-y: auto;
		width: 20%;
		padding-top: 1rem;
	}

	h1 {
		padding-left: 2rem;
		padding-bottom: 1rem;
	}

	li {
		margin-left: 2rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
	}

	*::marker {
		content: '';
	}

	ul ul {
		display: none;
	}

	ul ul li {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	ul ul li:first-child::before {
		content: '';
		display: block;
		background: #585b70;
		width: 1px;
		height: calc(100% - 0.5rem);
		position: absolute;
		left: -1rem;
		top: 0.5rem;
	}

	ul ul li:not(:last-child):not(:first-child)::before {
		content: '';
		display: block;
		background: #585b70;
		width: 1px;
		height: 100%;
		position: absolute;
		left: -1rem;
	}

	ul ul li:last-child::before {
		content: '';
		display: block;
		width: 0.5rem;
		border-left: 1px solid #585b70;
		border-bottom: 1px solid #585b70;
		height: 50%;
		position: absolute;
		left: -1rem;
		top: 0rem;
	}

	ul ul li a {
		color: #9399b2;
	}
</style>
