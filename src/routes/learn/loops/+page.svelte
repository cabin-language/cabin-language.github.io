<script>
	import Snippet from '../../../components/Snippet.svelte';
	import TutorialDocument from '../TutorialDocument.svelte';
</script>

<svelte:head>
	<title>Loops • Cabin Docs</title>
</svelte:head>

<TutorialDocument page="Loops">
	<h1>Loops</h1>

	<h2 id="foreach">For-Each Loops</h2>

	<p>
		The first and most common type of loop is the <code>foreach</code>
		loop. The
		<code>foreach</code>
		loop allows looping over a list:
	</p>

	<Snippet
		language="cabin"
		code={`
			foreach ghost in ["skulker", "johnny", "ember"] {
				print(ghost);
			};
		`}
	/>

	<p>
		Just like <code>if</code>
		expressions, loops are terminated with a semicolon. This is a statement, and statements end with
		a semicolon.
	</p>

	<p>
		A traditional range-based loop can be made with the <code>.to()</code>
		action that exists on
		<code>Number</code>
		:
	</p>

	<Snippet
		language="cabin"
		code={`
			foreach number in 1.to(10) {
				print(number);
			}
		`}
	/>

	<p>
		Cabin doesn't have a dedicated syntax for ranges; It simply reuses existing syntax with the <code
		>
			.to()
		</code>
		action.
	</p>

	<h2 id="while">While Loops</h2>

	<p>
		The other type of loop is the <code>while</code>
		loop. Like in other languages, it runs the body while its condition is true.
	</p>

	<Snippet
		language="cabin"
		code={`
			#[editable] let confirm = "";

			while confirm != "yes" and confirm != "no" {
				confirm = input("Enter yes or no: ");
			};
		`}
	/>

	<h2 id="expressions">Loops as Expressions</h2>

	<p>
		Just like <code>if</code>
		s, loops can be used as expressions. Typically you'll do this by putting an
		<code>if</code>
		inside the loop:
	</p>

	<Snippet
		language="cabin"
		code={`
			let danny = foreach person in people {
				if person.first_name == "danny" {
					it is danny;
				};
			};
		`}
	/>

	<p>
		Once again, this syntax might look a little strange, but it'll be explained in the next section
		on <a href="/learn/control-flow">Control Flow</a>
		. The takeaway from this example is that loops can be used as expressions. In this case, we iterate
		over a list of people, and if we find one with the first name
		<code>"danny"</code>
		, we break from the loop and assign that person to
		<code>danny</code>
		.
	</p>
</TutorialDocument>

<style>
	a {
		color: dodgerblue;
	}
</style>
