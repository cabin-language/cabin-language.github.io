<script>
	import Documentation from '../../../components/Documentation.svelte';
	import Snippet from '../../../components/Snippet.svelte';
</script>

<svelte:head>
	<title>Loops • Cabin Docs</title>
</svelte:head>

<Documentation page="Loops">
	<h1>Loops</h1>

	<h2 id="foreach">For-Each Loops</h2>

	<p>
		The first and most common type of loop is the <code>foreach</code> loop. The
		<code>foreach</code> loop allows looping over a list:
	</p>

	<Snippet>
		<pre>
foreach ghost in ["skulker", "johnny", "ember"] &lbrace;
    print(ghost);
&rbrace;;
</pre>
	</Snippet>

	<p>
		Just like <code>if</code> expressions, loops are terminated with a semicolon. This is a statement,
		and statements end with a semicolon.
	</p>

	<p>
		A traditional range-based loop can be made with the <code>.to()</code> action that exists on
		<code>Number</code>:
	</p>

	<Snippet>
		<pre>
foreach number in 1.to(10) &lbrace;
    print(number);
&rbrace;;
</pre>
	</Snippet>

	<p>
		Cabin doesn't have a dedicated syntax for ranges; It simply reuses existing syntax with the <code
			>.to()</code
		> action.
	</p>

	<h2 id="while">While Loops</h2>

	<p>
		The other type of loop is the <code>while</code> loop. Like in other languages, it runs the body
		while its condition is true.
	</p>

	<Snippet>
		<pre>
#[editable] let confirm = "";

while confirm != "yes" and confirm != "no" &lbrace;
    confirm = input("Enter yes or no: ");
&rbrace;;
</pre>
	</Snippet>

	<h2 id="expressions">Loops as Expressions</h2>

	<p>
		Just like <code>if</code>s, loops can be used as expressions. Typically you'll do this by
		putting an <code>if</code> inside the loop:
	</p>

	<Snippet>
		<pre>
let danny = foreach person in people &lbrace;
    if person.first_name == "danny" &lbrace;
        it is danny;
    &rbrace;;
&rbrace;;
</pre>
	</Snippet>

	<p>
		Once again, this syntax might look a little strange, but it'll be explained in the next section
		on <a href="/docs/control-flow">Control Flow</a>. The takeaway from this example is that loops
		can be used as expressions. In this case, we iterate over a list of people, and if we find one
		with the first name <code>"danny"</code>, we break from the loop and assign that person to
		<code>danny</code>.
	</p>
</Documentation>

<style>
	a {
		color: dodgerblue;
	}
</style>
