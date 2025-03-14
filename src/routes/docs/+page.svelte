<script>
	import Navbar from '../../components/Navbar.svelte';
</script>

<Navbar />

<main>
	<h1>Documentation</h1>

	<p>
		Here you'll find an index of documentation for the Cabin programming language. If you're not
		sure where to start, it's recommended to start with <a href="/learn">The Cabin tutorial</a>
		.
	</p>

	<h2>The Cabin Tutorial</h2>

	<p>
		<a href="/learn">The Cabin tutorial</a>
		should be your first starting point with Cabin. It'll walk you through what the language is, how
		to get it installed on your system and set up in your editor, and how to get started programming
		with Cabin, going over all of the language's features and syntax, as well as important built-ins
		and libraries to be aware of.
	</p>

	<h2>The Cabin Reference</h2>

	<p>
		<a href="/reference">The Cabin reference page</a>
		provides exhaustive overviews of all aspects of the language, including syntax, builtins, compiler
		usage, and more. It's a reference document meant for quick lookups and information,
		<i>not</i>
		learning the language or end-to-end reading. For general language usage, it's recommended to view
		<a href="/learn">The Cabin tutorial</a>
		instead.
	</p>

	<div class="reference">
		<h3><a href="/reference/compiler">Compiler Command Reference</a></h3>

		<p>
			The <a href="/reference/compiler">compiler command reference</a>
			is a list of all options, arguments, and flags that can be passed to the Cabin compiler, with comprehensive
			descriptions for what they all do and when to use them.
		</p>

		<h3><a href="/reference/standard-library">Standard Library Reference</a></h3>

		<p>
			The <a href="/reference/standard-library">standard library reference</a>
			is a fully exhaustive reference for every exposed binding built into the language.
		</p>

		<h3><a href="/reference/syntax">Language Syntax Reference</a></h3>

		<p>
			The <a href="/reference/syntax">language syntax reference</a>
			contains various representations of Cabin's grammar, as well as lists of keywords, reserved identifiers,
			etc.
		</p>
	</div>
</main>

<style>
	main {
		color: #cdd6f4;
		width: max(60%, 20rem);
		margin-left: auto;
		margin-right: auto;
		padding-top: 2rem;
		padding-bottom: 3rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		p a {
			color: cornflowerblue;
		}

		h2 {
			padding-top: 2rem;
		}
	}

	.reference {
		margin-top: 1rem;
		margin-left: 3rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		h3 {
			padding-top: 1rem;
		}
	}
</style>
