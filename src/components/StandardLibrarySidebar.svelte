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

		// Highlight headers as the user scrolls
		const headers = document.querySelectorAll('h2, h3');
		const headerLinks = document.querySelectorAll('.sidebar ul > li > ul > li > a');
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						headerLinks.forEach((link) => {
							const linkElement = link as HTMLElement;
							linkElement.style.color = '#9399b2';
							linkElement.parentElement!.style.setProperty('--diamond-border', '#585b70');
							linkElement.parentElement!.style.setProperty('--diamond-background', '#181825');
							let href = link.getAttribute('href')!;
							if (href.substring(href.indexOf('#') + 1) === entry.target.id) {
								linkElement.style.color = 'white';
								linkElement.parentElement!.style.setProperty('--diamond-border', 'white');
								linkElement.parentElement!.style.setProperty('--diamond-background', '#b4befe');
							}
						});
					}
				});
			},
			{ threshold: 0.9 } // Trigger when 50% of the section is visible
		);

		headers.forEach((header) => observer.observe(header));
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

	let sidebar: HTMLElement;

	export function show() {
		sidebar.style.display = 'block';
	}

	export function hide() {
		sidebar.style.display = 'none';
	}

	export function toggle() {
		sidebar.style.display = ['', 'none'].includes(sidebar.style.display) ? 'block' : 'none';
	}
</script>

<section class="sidebar" bind:this={sidebar}>
	<h1>Contents</h1>

	<ul bind:this={list}>
		<li>
			<a href="/reference/standard-library/list">Action</a>
		</li>
		<li>
			<a href="/reference/standard-library/list">Addable</a>
		</li>
		<li>
			<a href="/reference/standard-library/list">Anything</a>
		</li>
		<li>
			<a href="/reference/standard-library/list">Attempt</a>
		</li>
		<li>
			<a href="/reference/standard-library/list">Boolean</a>
		</li>
		<li>
			<a href="/reference/standard-library/map">Compareable</a>
		</li>
		<li>
			<a href="/reference/standard-library/list">default</a>
		</li>
		<li>
			<a href="/reference/standard-library/map">Divideable</a>
		</li>
		<li>
			<a href="/reference/standard-library/list">editable</a>
		</li>
		<li>
			<a href="/reference/standard-library/list">Either</a>
		</li>
		<li>
			<a href="/reference/standard-library/map">Exponentiable</a>
		</li>
		<li>
			<a href="/reference/standard-library/list">Extension</a>
		</li>
		<li>
			<a href="/reference/standard-library/list">Group</a>
		</li>
		<li>
			<a href="/reference/standard-library/list">input</a>
		</li>
		<li>
			<a href="/reference/standard-library/list">List</a>
		</li>
		<li>
			<a href="/reference/standard-library/map">Map</a>
		</li>
		<li>
			<a href="/reference/standard-library/map">Multipliable</a>
		</li>
		<li>
			<a href="/reference/standard-library/number">Number</a>
		</li>
		<li>
			<a href="/reference/standard-library/list">Object</a>
		</li>
		<li>
			<a href="/reference/standard-library/list">Optional</a>
		</li>
		<li>
			<a href="/reference/standard-library/list">print</a>
		</li>
		<li>
			<a href="/reference/standard-library/list">Subtractable</a>
		</li>
		<li>
			<a href="/reference/standard-library/list">system</a>
		</li>
		<li>
			<a href="/reference/standard-library/text">Text</a>
			<ul>
				<li>
					<a href="/reference/standard-library/text#properties">Properties</a>
					<ul>
						<li><a href="/reference/standard-library/text#bytes">bytes</a></li>
						<li><a href="/reference/standard-library/text#ends_with">ends_with</a></li>
						<li><a href="/reference/standard-library/text#length">length</a></li>
						<li><a href="/reference/standard-library/text#lines">lines</a></li>
						<li><a href="/reference/standard-library/text#replace">replace</a></li>
						<li><a href="/reference/standard-library/text#split">split</a></li>
						<li><a href="/reference/standard-library/text#split_any">split_any</a></li>
						<li><a href="/reference/standard-library/text#starts_with">starts_with</a></li>
						<li><a href="/reference/standard-library/text#trim">trim</a></li>
						<li><a href="/reference/standard-library/text#trim_end">trim_end</a></li>
						<li><a href="/reference/standard-library/text#trim_start">trim_start</a></li>
					</ul>
				</li>
				<li>
					<a href="/reference/standard-library/text#extensions">Extensions</a>
					<ul>
						<li>
							<a href="/reference/standard-library/text#extensions">
								extensionof Text tobe List&lt;Letter&gt;
							</a>
						</li>
						<li>
							<a href="/reference/standard-library/text#extensions">
								extensionof Text tobe Addable
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</li>
		<li>
			<a href="/reference/standard-library/list">visible</a>
		</li>
	</ul>
</section>

<style>
	@media (max-width: 800px) {
		section {
			display: none;
			width: 100%;
		}
	}

	@media (min-width: 800px) {
		section {
			display: block;
			width: 18rem;
		}
	}

	section {
		color: #cdd6f4;
		overflow-y: auto;
		padding-top: 1rem;
		padding-left: 1rem;
		height: calc(100% - 5rem);
		overflow-y: auto;
		padding-right: 1rem;

		> ul > li > ul {
			display: none;
		}

		> ul > li > ul > li > ul {
			font-size: 0.75rem;
		}
	}

	h1 {
		padding-left: 1rem;
		padding-bottom: 1rem;
	}

	li {
		margin-left: 1.2rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
	}

	*::marker {
		content: '';
	}

	ul ul ul li {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		--diamond-border: #585b70;
		--diamond-background: #181825;
	}

	ul ul ul li::after {
		content: '';
		background-color: var(--diamond-background);
		border: 1px solid var(--diamond-border);
		box-sizing: border-box;
		width: 0.5rem;
		height: 0.5rem;
		position: absolute;
		left: -1.2rem;
		rotate: 45deg;
	}

	ul ul ul li:first-child::before {
		content: '';
		display: block;
		background: #585b70;
		width: 1px;
		height: calc(100% - 0.5rem);
		position: absolute;
		left: -1rem;
		top: 0.5rem;
	}

	ul ul ul li:not(:last-child):not(:first-child)::before {
		content: '';
		display: block;
		background: #585b70;
		width: 1px;
		height: 100%;
		position: absolute;
		left: -1rem;
	}

	ul ul ul li:last-child::before {
		content: '';
		display: block;
		width: 0.5rem;
		border-left: 2px solid #585b70;
		border-bottom: 2px solid #585b70;
		height: 0.95rem;
		position: absolute;
		left: -1rem;
		top: 0rem;
	}

	ul ul li a {
		color: #9399b2;
		font-family: monospace;
	}
</style>
