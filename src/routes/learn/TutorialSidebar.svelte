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
		<a href="/learn">Introduction</a>
		<ul>
			<li><a href="/learn#what-is-cabin">What is Cabin?</a></li>
			<li><a href="/learn#navigating-these-docs">Navigating These Docs</a></li>
			<li><a href="/learn#additional-support">Additional Support</a></li>
			<li><a href="/learn#final-remarks">Final Remarks</a></li>
		</ul>
	</li>
	<li>
		<a href="/learn/installation">Installation</a>
		<ul>
			<li><a href="/learn/installation#testing">Testing</a></li>
			<li><a href="/learn/installation#troubleshooting">Troubleshooting</a></li>
			<li><a href="/learn/installation#editor-setup">Editor Setup</a></li>
		</ul>
	</li>
	<li>
		<a href="/learn/declarations">Declarations</a>
		<ul>
			<li><a href="/learn/declarations#mutability">Mutability</a></li>
			<li><a href="/learn/declarations#visibility">Visibility</a></li>
		</ul>
	</li>
	<li>
		<a href="/learn/if-expressions">If Expressions</a>
		<ul>
			<li>
				<a href="/learn/if-expressions#otherwise">
					<code>otherwise</code>
					Blocks
				</a>
			</li>
			<li>
				<a href="/learn/if-expressions#expressions">
					<code>if</code>
					as Expressions
				</a>
			</li>
		</ul>
	</li>
	<li>
		<a href="/learn/loops">Loops</a>
		<ul>
			<li>
				<a href="/learn/loops#foreach">
					<code>foreach</code>
					Loops
				</a>
			</li>
			<li>
				<a href="/learn/loops#while">
					<code>while</code>
					Loops
				</a>
			</li>
			<li><a href="/learn/loops#expressions">Loops as Expressions</a></li>
		</ul>
	</li>
	<li>
		<a href="/learn/control-flow">Control Flow</a>
		<ul>
			<li>
				<a href="/learn/control-flow#labels">
					Labels & <code>is</code>
					Statements
				</a>
			</li>
			<li>
				<a href="/learn/control-flow#reserved-labels">Reserved labels</a>
				<ul>
					<li>
						<a href="/learn/control-flow#it">
							The <code>it</code>
							Label
						</a>
					</li>
					<li>
						<a href="/learn/control-flow#return">
							The <code>return</code>
							Label
						</a>
					</li>
					<li>
						<a href="/learn/control-flow#loop">
							The <code>loop</code>
							Label
						</a>
					</li>
					<li>
						<a href="/learn/control-flow#done">
							The <code>done</code>
							Value
						</a>
					</li>
					<li>
						<a href="/learn/control-flow#iteration">
							The <code>iteration</code>
							Label
						</a>
					</li>
				</ul>
			</li>
		</ul>
	</li>
	<li>
		<a href="/learn/groups">Groups</a>
		<ul>
			<li><a href="/learn/groups#introduction">Introduction</a></li>
			<li><a href="/learn/groups#nominality">Nominality</a></li>
			<li><a href="/learn/groups#mutability">Mutability</a></li>
			<li><a href="/learn/groups#visibility">Visibility</a></li>
			<li><a href="/learn/groups#compile-time-parameters">Compile-Time Parameters</a></li>
		</ul>
	</li>
	<li>
		<a href="/learn/actions">Actions</a>
		<ul>
			<li><a href="/learn/actions#return-values">Return Values</a></li>
			<li><a href="/learn/actions#parameters">Parameters</a></li>
			<li><a href="/learn/actions#compile-time-parameters">Compile-Time Parameters</a></li>
		</ul>
	</li>
	<li>
		<a href="/learn/eithers">Eithers</a>
		<ul>
			<li><a href="/learn/eithers#basic">Basic Eithers</a></li>
			<li><a href="/learn/eithers#subtypes">Subtypes</a></li>
		</ul>
	</li>
	<li>
		<a href="/learn/runtime-evaluation">Runtime Evaluation</a>
		<ul>
			<li>Command-Line Arguments</li>
			<li>
				The <code>run</code>
				Action
			</li>
		</ul>
	</li>
	<li>
		<a href="/learn/extensions">Extensions</a>
		<ul>
			<li><a href="/learn/extensions#basic-extensions">Basic extensions</a></li>
			<li><a href="/learn/extensions#polymorphic-extensions">Polymorphic extensions</a></li>
			<li><a href="/learn/extensions#operator-overloading">Operator Overloading</a></li>
			<li><a href="/learn/extensions#default-extensions">Default Extensions</a></li>
			<li><a href="/learn/extensions#getters">Extension Getters</a></li>
		</ul>
	</li>
	<li>
		<a href="/learn/tags">Tags</a>
		<ul>
			<li><a href="/learn/tags#introduction">Introduction</a></li>
			<li><a href="/learn/tags#mutation">Mutation</a></li>
		</ul>
	</li>
	<li>
		<a href="/learn/optionals-and-errors">Optionals &amp; Errors</a>
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
	<li><a href="/learn/external-libraries">External Libraries</a></li>
	<li><a href="/learn/conclusion">Conclusion</a></li>
</Sidebar>
