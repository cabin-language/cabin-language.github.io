<script>
	import Documentation from '../../../components/Documentation.svelte';
	import Snippet from '../../../components/Snippet.svelte';
</script>

<svelte:head>
	<title>Groups&nbsp;&nbsp;•&nbsp;&nbsp;Cabin Docs</title>
</svelte:head>

<Documentation page="Groups">
	<h1>Groups</h1>

	<p>
		Groups are a foundational part of Cabin's type system. A <code>group</code>
		is analagous to a
		<code>struct</code>
		in other languages. Groups are declared with
		<code>let</code>
		just like any other top-level binding:
	</p>

	<Snippet>
		<pre>
let Person = group &lbrace;
    first_name: Text,
    last_name: Text,
    age: Number
&rbrace;;
</pre>
	</Snippet>

	<p>
		<code>groups</code>
		are instantiated with the
		<code>new</code>
		keyword:
	</p>

	<Snippet>
		<pre>
let tucker = new Person &lbrace;
    first_name = "tucker",
    last_name = "foley",
    age = 14
&rbrace;;
</pre>
	</Snippet>

	<p>
		The bindings inside a group (in this case <code>first_name</code>
		,
		<code>last_name</code>
		, and
		<code>age</code>
		) are called
		<b>properties</b>
		. Properties can have default values specified in the group definition:
	</p>
	<Snippet>
		<pre>
let Person = group &lbrace;
    first_name: Text,
    middle_name: Optional&lt;Text&gt; = nothing,
    last_name: Text,
    age: Number
&rbrace;;

# no need to specify middle name
let tucker = new Person &lbrace;
    first_name = "tucker",
    last_name = "foley",
    age = 14
&rbrace;;
</pre>
	</Snippet>

	<h2 id="nominality">Nominality</h2>

	<p>
		Groups in Cabin are <b>nominal</b>
		, which means that even if two groups have the same structure, you can't use them interchangeably:
	</p>

	<Snippet>
		<pre>
let Point = group &lbrace; x: Number, y: Number &rbrace;;
let Position = group &lbrace; x: Number, y: Number &rbrace;;

# this isn't allowed!
let point: Point = Position &lbrace; x = 10, y = 10 &rbrace;
</pre>
	</Snippet>

	<h2 id="mutability">Mutability</h2>

	<p>
		Group properties are <b>immutable by default</b>
		. To mark a property as mutable, use the
		<code>#[editable]</code>
		tag:
	</p>

	<Snippet>
		<pre>
let Person = group &lbrace;
    #[editable] first_name: Text,
    last_name: Text,
    age: Number
&rbrace;;

let tucker = new Person &lbrace;
    first_name = "tucker",
    last_name = "foley",
    age = 14
&rbrace;;

tucker.first_name = "tuck";
</pre>
	</Snippet>

	<h2 id="visibility">Visibility</h2>

	<p>
		By default, group properties are only visible in the file that the group is declared. To make a
		property visible elsewhere, use the <code>#[visible]</code>
		tag:
	</p>

	<Snippet>
		<pre>
let Person = group &lbrace;
    #[visible] first_name: Text,

    middle_name: Optional&lt;Text&gt; = nothing,
    last_name: Text,
    age: Number
&rbrace;;
</pre>
	</Snippet>

	<h2 id="compile-time-parameters">Compile-Time Parameters</h2>

	<p>
		Groups can take something known as <b>compile-time parameters</b>
		. We'll talk in more detail about these in the next section on
		<code>actions</code>
		, but the idea is that they're parameters on the group definition, similar to a function.
	</p>

	<Snippet>
		<pre>
let Node = group&lt;Data: Anything&gt; &lbrace;
    data: Data,
    children: List&lt;Node&lt;Data&gt;&gt;
&rbrace;;
</pre>
	</Snippet>

	<p>Then, when using this group, we want to pass a value to this parameter:</p>

	<Snippet>
		<pre>
let node = new Node&lt;Text&gt; &lbrace;
    data = "node",
    children: []
&rbrace;;
</pre>
	</Snippet>

	<p>
		The important thing to understand about these parameters is that the value of the parameter must
		be a <b>type</b>
		. "Type" is a somewhat confusing term because it means something different in Cabin than it does
		in most other languages; In Cabin, a "type" is just a value that is 1. fully known at compile-time
		and 2. not marked
		<code>#[editable]</code>
		. Typical examples of types are
		<code>Text</code>
		and
		<code>Number</code>
		, but
		<code>"hello"</code>
		is a type,
		<code>10</code>
		is a type, and even an
		<code>if</code>
		expression can be a type, as long as its fully resolveable at compile-time.
	</p>

	<p>
		With that in mind, compile-time parameters have a nice shorthand where we can omit their type:
	</p>

	<Snippet>
		<pre>
let Node = group&lt;Data&gt; &lbrace;
    data: Data,
    children: List&lt;Node&lt;Data&gt;&gt;
&rbrace;;
</pre>
	</Snippet>

	<p>
		When ommitting the type of a compile-time parameter, it is automatically inferred as <code>
			Anything
		</code>
		.
	</p>
</Documentation>
