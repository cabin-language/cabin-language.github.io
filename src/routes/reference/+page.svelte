<script>
	import Navbar from '../../components/Navbar.svelte';
</script>

<Navbar />
<main>
	<h1>Cabin Reference</h1>
	<p>
		On this page you'll find a few quick references relating to the Cabin language. These are more
		like records and data than pages worth reading through in their entirety. For learning the
		language, it's recommended to read through <a href="/learn">the tutorial</a>
		instead.
	</p>

	<h2><a href="/reference/compiler">Compiler Command Reference</a></h2>

	<p>
		The <a href="/reference/compiler">compiler command reference</a>
		is a list of all options, arguments, and flags that can be passed to the Cabin compiler, with comprehensive
		descriptions for what they all do and when to use them.
	</p>

	<h2><a href="/reference/standard-library">Standard Library Reference</a></h2>

	<p>
		The <a href="/reference/standard-library">standard library reference</a>
		is a fully exhaustive reference for every exposed binding built into the language.
	</p>

	<h2><a href="/reference/syntax">Language Syntax Reference</a></h2>

	<p>
		The <a href="/reference/syntax">language syntax reference</a>
		contains various representations of Cabin's grammar, as well as lists of keywords, reserved identifiers,
		etc.
	</p>
</main>

<style>
	main {
		color: #cdd6f4;
		width: 60%;
		margin-left: auto;
		margin-right: auto;
		padding-top: 2rem;
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
</style>
