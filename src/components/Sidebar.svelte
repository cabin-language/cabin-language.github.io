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
			Runtime Evaluation
			<ul>
				<li>Command-Line Arguments</li>
				<li>
					The <code>run</code>
					Action
				</li>
			</ul>
		</li>
		<li>
			Extensions
			<ul>
				<li>Basic extensions</li>
				<li>Polymorphic extensions</li>
				<li>Operator Overloading</li>
			</ul>
		</li>
		<li>Tags</li>
		<li>
			Optionals & Errors
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
		<li>
			Standard Library
			<ul>
				<li>Text</li>
				<li>Boolean</li>
				<li>Number</li>
				<li>List</li>
				<li>Map</li>
				<li>system</li>
				<li>Operators</li>
				<ul>
					<li><code>Addable</code></li>
					<li><code>Subtractable</code></li>
					<li><code>Multpliable</code></li>
					<li><code>Dividable</code></li>
					<li><code>Fallible</code></li>
				</ul>
			</ul>
		</li>
		<li><a href="/docs/external-libraries">External Libraries</a></li>
		<li><a href="/docs/conclusion">Conclusion</a></li>
	</ul>
</section>

<style>
	section {
		color: #cdd6f4;
		overflow-y: auto;
		width: 20%;
		padding-top: 1rem;
		padding-left: 1rem;

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
		border-bottom-left-radius: 0.2rem;
		height: 0.9rem;
		position: absolute;
		left: -1rem;
		top: 0rem;
	}

	ul ul li a {
		color: #9399b2;
	}
</style>
