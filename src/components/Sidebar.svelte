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
			<a href="/docs">Introduction</a>
			<ul>
				<li><a href="/docs#what-is-cabin">What is Cabin?</a></li>
				<li><a href="/docs#navigating-these-docs">Navigating These Docs</a></li>
				<li><a href="/docs#additional-support">Additional Support</a></li>
				<li><a href="/docs#final-remarks">Final Remarks</a></li>
			</ul>
		</li>
		<li>
			<a href="/docs/installation">Installation</a>
			<ul>
				<li><a href="/docs/installation#testing">Testing</a></li>
				<li><a href="/docs/installation#troubleshooting">Troubleshooting</a></li>
			</ul>
		</li>
		<li>
			<a href="/docs/declarations">Declarations</a>
			<ul>
				<li><a href="/docs/declarations#mutability">Mutability</a></li>
				<li><a href="/docs/declarations#visibility">Visibility</a></li>
			</ul>
		</li>
		<li>
			<a href="/docs/if-expressions">If Expressions</a>
			<ul>
				<li>
					<a href="/docs/if-expressions#otherwise">
						<code>otherwise</code>
						Blocks
					</a>
				</li>
				<li>
					<a href="/docs/if-expressions#expressions">
						<code>if</code>
						as Expressions
					</a>
				</li>
			</ul>
		</li>
		<li>
			<a href="/docs/loops">Loops</a>
			<ul>
				<li>
					<a href="/docs/loops#foreach">
						<code>foreach</code>
						Loops
					</a>
				</li>
				<li>
					<a href="/docs/loops#while">
						<code>while</code>
						Loops
					</a>
				</li>
				<li><a href="/docs/loops#expressions">Loops as Expressions</a></li>
			</ul>
		</li>
		<li>
			<a href="/docs/control-flow">Control Flow</a>
			<ul>
				<li>
					<a href="/docs/control-flow#labels">
						Labels & <code>is</code>
						Statements
					</a>
				</li>
				<li>
					<a href="/docs/control-flow#reserved-labels">Reserved labels</a>
					<ul>
						<li>
							<a href="/docs/control-flow#it">
								The <code>it</code>
								Label
							</a>
						</li>
						<li>
							<a href="/docs/control-flow#return">
								The <code>return</code>
								Label
							</a>
						</li>
						<li>
							<a href="/docs/control-flow#loop">
								The <code>loop</code>
								Label
							</a>
						</li>
						<li>
							<a href="/docs/control-flow#done">
								The <code>done</code>
								Value
							</a>
						</li>
						<li>
							<a href="/docs/control-flow#iteration">
								The <code>iteration</code>
								Label
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</li>
		<li>
			<a href="/docs/groups">Groups</a>
			<ul>
				<li><a href="/docs/groups#introduction">Introduction</a></li>
				<li><a href="/docs/groups#nominality">Nominality</a></li>
				<li><a href="/docs/groups#mutability">Mutability</a></li>
				<li><a href="/docs/groups#visibility">Visibility</a></li>
				<li><a href="/docs/groups#compile-time-parameters">Compile-Time Parameters</a></li>
			</ul>
		</li>
		<li>
			<a href="/docs/actions">Actions</a>
			<ul>
				<li><a href="/docs/actions#return-values">Return Values</a></li>
				<li><a href="/docs/actions#parameters">Parameters</a></li>
				<li><a href="/docs/actions#compile-time-parameters">Compile-Time Parameters</a></li>
			</ul>
		</li>
		<li>
			<a href="/docs/eithers">Eithers</a>
			<ul>
				<li>Subtypes</li>
			</ul>
		</li>
		<li>
			<a href="/docs/runtime-evaluation">Runtime Evaluation</a>
			<ul>
				<li>Command-Line Arguments</li>
				<li>
					The <code>run</code>
					Action
				</li>
			</ul>
		</li>
		<li>
			<a href="/docs/extensions">Extensions</a>
			<ul>
				<li><a href="/docs/extensions#basic-extensions">Basic extensions</a></li>
				<li><a href="/docs/extensions#polymorphic-extensions">Polymorphic extensions</a></li>
				<li><a href="/docs/extensions#operator-overloading">Operator Overloading</a></li>
				<li><a href="/docs/extensions#default-extensions">Default Extensions</a></li>
				<li><a href="/docs/extensions#getters">Extension Getters</a></li>
			</ul>
		</li>
		<li>
			<a href="/docs/tags">Tags</a>
			<ul>
				<li><a href="/docs/tags#introduction">Introduction</a></li>
				<li><a href="/docs/tags#mutation">Mutation</a></li>
			</ul>
		</li>
		<li>
			<a href="/docs/optionals-and-errors">Optionals &amp; Errors</a>
			<ul>
				<li>
					The <code>Optional</code>
					either
				</li>
				<li>
					The <code>Attempt</code>
					either
				</li>
				<li>
					The <code>?</code>
					and
					<code>!</code>
					operators
				</li>
			</ul>
		</li>
		<li><a href="/docs/external-libraries">External Libraries</a></li>
		<li><a href="/docs/conclusion">Conclusion</a></li>
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

	ul ul li {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		--diamond-border: #585b70;
		--diamond-background: #181825;
	}

	ul ul li:not(:has(ul))::after {
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
		border-left: 2px solid #585b70;
		border-bottom: 2px solid #585b70;
		height: 0.95rem;
		position: absolute;
		left: -1rem;
		top: 0rem;
	}

	ul ul li a {
		color: #9399b2;
	}
</style>
