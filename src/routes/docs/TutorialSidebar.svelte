<script lang="ts">
	import Sidebar from '../../components/Sidebar.svelte';

	let { page } = $props();

	let sidebar: Sidebar;

	export function next() {
		return sidebar.next();
	}

	export function previous() {
		return sidebar.previous();
	}
</script>

<Sidebar {page} bind:this={sidebar}>
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
			<li><a href="/docs/installation#editor-setup">Editor Setup</a></li>
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
</Sidebar>
