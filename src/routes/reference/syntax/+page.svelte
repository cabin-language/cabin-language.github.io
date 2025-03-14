<script lang="ts">
	import Navbar from '../../../components/Navbar.svelte';
	import ebnfGrammar from '../../../assets/text/grammar.ebnf?raw';
	import bnfGrammar from '../../../assets/text/grammar.bnf?raw';
	import treesitterGrammar from '../../../assets/text/tree_sitter_cabin.js?raw';
	import Snippet from '../../../components/Snippet.svelte';

	type GrammarType = 'ebnf' | 'treesitter' | 'bnf';
	let grammarType: GrammarType = $state('ebnf');
</script>

<Navbar />

<main>
	<section>
		<h1>Cabin Syntax Reference</h1>

		<p>
			Below is a comprehensive reference to the syntax specification for the Cabin programming
			language.
		</p>

		<h2>Keyword Reference</h2>

		<p>
			Cabin only has 15 keywords. Here you'll find a complete list of them, as well as a brief
			description of their usage and a link to the documentation that explains them.
		</p>

		<table>
			<thead>
				<tr>
					<th>Keyword</th>
					<th>Documentation</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th><code>action</code></th>
					<th><a href="/learn/actions">Actions</a></th>
					<th>Defines a callable sequence of statements.</th>
				</tr>
				<tr>
					<th><code>and</code></th>
					<th>TODO</th>
					<th>
						Returns whether both boolean operands are <code>true</code>
						, lazily evaluating its operands and short-circuiting if necessary.
					</th>
				</tr>
				<tr>
					<th><code>either</code></th>
					<th><a href="/learn/eithers">Eithers</a></th>
					<th>Creates a tagged union.</th>
				</tr>
				<tr>
					<th><code>extensionof</code></th>
					<th><a href="/learn/extensions">Extensions</a></th>
					<th>Extends a type by adding additional properties onto it.</th>
				</tr>
				<tr>
					<th><code>if</code></th>
					<th><a href="/learn/if-expressions">If Expressions</a></th>
					<th>Conditionally runs code if a boolean condition is true.</th>
				</tr>
				<tr>
					<th><code>is</code></th>
					<th><a href="/learn/control-flow">Control Flow</a></th>
					<th>Jumps to a label, setting it to the given value.</th>
				</tr>
				<tr>
					<th><code>foreach</code></th>
					<th><a href="/learn/loops">Loops</a></th>
					<th>Runs a block of code for each element in a list.</th>
				</tr>
				<tr>
					<th><code>group</code></th>
					<th><a href="/learn/groups">Groups</a></th>
					<th>Creates an instantiable type representing a group of values.</th>
				</tr>
				<tr>
					<th><code>let</code></th>
					<th><a href="/learn/declarations">Declarations</a></th>
					<th>Binds a name to a value</th>
				</tr>
				<tr>
					<th><code>not</code></th>
					<th>TODO</th>
					<th>Negates a boolean value.</th>
				</tr>
				<tr>
					<th><code>or</code></th>
					<th>TODO</th>
					<th>
						Returns whether either of the boolean operands are <code>true</code>
						, lazily evaluating its operands and short-circuiting if necessary.
					</th>
				</tr>
				<tr>
					<th><code>otherwise</code></th>
					<th><a href="/learn/if-expressions">If Expressions</a></th>
					<th>Runs a block of code conditionally if a condition is not true.</th>
				</tr>
				<tr>
					<th><code>run</code></th>
					<th><a href="/learn/runtime-evaluation">Runtime Evaluation</a></th>
					<th>Forces an expression to be evaluated at runtime.</th>
				</tr>
				<tr>
					<th><code>tobe</code></th>
					<th><a href="/learn/extensions">Extensions</a></th>
					<th>Extends one type to be another.</th>
				</tr>
				<tr>
					<th><code>while</code></th>
					<th><a href="/learn/loops">Loops</a></th>
					<th>Runs a block of code while a boolean condition is true.</th>
				</tr>
			</tbody>
		</table>

		<h2>Formal Grammar</h2>

		<p>
			Below is the formal grammar specification for the Cabin programming language, available in a
			variety of formats.
		</p>

		<span>
			<button onclick={() => (grammarType = 'bnf')}>Backus-Naur Form</button>
			<button onclick={() => (grammarType = 'ebnf')}>Extended Backus-Naur Form</button>
			<button onclick={() => (grammarType = 'treesitter')}>Tree-Sitter</button>
			<button>Pest</button>
		</span>

		{#if grammarType === 'ebnf'}
			<Snippet language="ebnf" code={ebnfGrammar} />
		{:else if grammarType === 'bnf'}
			<Snippet language="bnf" code={bnfGrammar} />
		{:else if grammarType === 'treesitter'}
			<Snippet language="javascript" code={treesitterGrammar} />
		{/if}
	</section>
</main>

<style>
	section {
		color: #cdd6f4;
		display: flex;
		justify-content: center;
		overflow-y: auto;
		padding-top: 2rem;
		padding-bottom: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: max(20rem, 60%);
		margin-left: auto;
		margin-right: auto;

		span {
			display: flex;
			gap: 2rem;
		}

		button {
			color: inherit;
		}
	}

	table {
		text-align: left;
		border-collapse: collapse;

		th {
			border: 1px solid #45475a;
			padding: 1rem;
		}

		:not(thead > tr > th) {
			font-weight: normal;
		}

		a {
			color: cornflowerblue;
		}
	}
</style>
