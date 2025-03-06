<script lang="ts">
	import Documentation from '../../../components/Documentation.svelte';
	import Snippet from '../../../components/Snippet.svelte';
</script>

<svelte:head>
	<title>If Expressions • Cabin Docs</title>
</svelte:head>

<Documentation page="If Expressions">
	<h1>If Expressions</h1>

	<p>
		Similar to most languages, the <code>if</code> keyword is used to declare a conditional block that
		is only evaluated if a condition is true:
	</p>

	<Snippet>
		<pre>
let name = "danny";

if name == "danny" &lbrace;
    print("hi danny");
&rbrace;
</pre>
	</Snippet>

	<p>
		Note that no parentheses are required around the <code>if</code> condition, but the braces aroud
		the body of the <code>if</code> <i>are</i> required.
	</p>

	<p>
		Additionally, note the semicolon after the <code>if</code>; it's required. This is a statement
		just like any other, and statements end with a semicolon.
	</p>

	<p>
		Also, Cabin has no concept of "truthy" or "falsy"; <code>if</code> conditions expect a
		<code>Boolean</code> and only a <code>Boolean</code>.
	</p>

	<h2 id="otherwise">Otherwise Blocks</h2>

	<p>
		An <code>if</code> expression can have an accompanying <code>otherwise</code> block, which runs
		if the condition is <code>false</code>:
	</p>

	<Snippet>
		<pre>
let name = "danny";

if name == "danny" &lbrace;
    print("hi danny");
&rbrace; 

otherwise &lbrace;
    print("hi... someone else...");
&rbrace;;
</pre>
	</Snippet>

	<p>
		<code>otherwise</code> may also be followed by another <code>if</code> condition:
	</p>

	<Snippet>
		<pre>
let name = "danny";

if name == "danny" &lbrace;
    print("hi danny");
&rbrace; 

otherwise if name == "sam" &lbrace;
    print("hi sam");
&rbrace;

otherwise &lbrace;
    print("hi... someone else...");
&rbrace;;
</pre>
	</Snippet>

	<h2 id="expressions">Ifs as expressions</h2>

	<p>
		<code>if</code> can actually be used as an expression, similar to what you might find in a more functional
		language. Here's an example of what that looks like:
	</p>

	<Snippet>
		<pre>
let name = "danny";

let last_name = if name == "danny" &lbrace;
    it is "fenton";
&rbrace; otherwise &lbrace;
    it is "manson";
&rbrace;;
</pre>
	</Snippet>

	<p>
		This syntax may look a lttle strange; We'll explain it more soon in the section on <a
			href="/docs/control-flow">Control Flow</a
		>. For now, just understand that the value after <code>it is</code> is what gets assigned to
		<code>last_name</code>, depending on whether the condition is true.
	</p>

	<p>
		Note that when using an <code>if</code> as an expression like this, it <i>must</i> have an
		<code>otherwise</code> block without a condition. It may also contain conditional
		<code>otherwise if</code> blocks in between, but it needs to have a final catch-all
		<code>otherwise</code> block.
	</p>
</Documentation>

<style>
	a {
		color: dodgerblue;
	}
</style>
