<script>
	import Documentation from '../../../components/Documentation.svelte';
	import Snippet from '../../../components/Snippet.svelte';
</script>

<svelte:head>
	<title>Actions&nbsp;&nbsp;•&nbsp;&nbsp;Cabin Docs</title>
</svelte:head>

<Documentation page="Actions">
	<h1>Actions</h1>

	<p>
		<b>Actions</b>
		are ways to store a block of Cabin code without running it eagerly; They are analagous to a function
		in other languages:
	</p>

	<Snippet>
		<pre>
let say_hello = action &lbrace;
    print("hello");
&rbrace;;
</pre>
	</Snippet>

	<p>
		This code will <b>not</b>
		print anything; Instead, it stores the
		<i>action</i>
		of printing in a binding (in this case
		<code>say_hello</code>
		).
	</p>

	<p>To run the code in an action, we use parentheses after the action name:</p>

	<Snippet>
		<pre>
let say_hello = action &lbrace;
    print("hello");
&rbrace;;

say_hello(); # prints "hello"
</pre>
	</Snippet>

	<h2 id="return-values">Return Values</h2>

	<p>
		Actions can specify a "return value". This is a value that the action "returns" to the caller.
	</p>

	<Snippet>
		<pre>
let get_hello = action: Text &lbrace;
    return is "hello";
&rbrace;;

let hello = get_hello();
print(hello);
</pre>
	</Snippet>

	<h2 id="parameters">Parameters</h2>
	<h2 id="compile-time-parameters">Compile-Time Parameters</h2>
</Documentation>
