<script>
	import Snippet from '../../../components/Snippet.svelte';
	import TutorialDocument from '../TutorialDocument.svelte';
</script>

<svelte:head>
	<title>Groups&nbsp;&nbsp;•&nbsp;&nbsp;Cabin Docs</title>
</svelte:head>

<TutorialDocument page="Groups">
	<h1>Groups</h1>

	<p>
		In this section you'll learn about <b>groups</b>
		, a core part of Cabin programming.
	</p>

	<h2 id="introduction">Introduction</h2>

	<p>
		Groups are a foundational part of Cabin's type system. A <code>group</code>
		is analagous to a
		<code>struct</code>
		in other languages. Groups are declared with
		<code>let</code>
		just like any other top-level binding:
	</p>

	<Snippet
		language="cabin"
		code={`
			let Person = group {
				first_name: Text,
				last_name: Text,
				age: Number
			};
		`}
	/>

	<p>
		<code>groups</code>
		are instantiated with the
		<code>new</code>
		keyword:
	</p>

	<Snippet
		language="cabin"
		code={`
			let tucker = new Person {
				first_name = "tucker",
				last_name = "foley",
				age = 14
			};
		`}
	/>

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

	<Snippet
		language="cabin"
		code={`
			let Person = group {
				first_name: Text,
				middle_name: Optional<Text> = nothing,
				last_name: Text,
				age: Number
			};

			# no need to specify middle name
			let tucker = new Person {
				first_name = "tucker",
				last_name = "foley",
				age = 14
			};
		`}
	/>

	<h2 id="nominality">Nominality</h2>

	<p>
		Groups in Cabin are <b>nominal</b>
		, which means that even if two groups have the same structure, you can't use them interchangeably:
	</p>

	<Snippet
		language="cabin"
		code={`
			let Point = group { x: Number, y: Number };
			let Position = group { x: Number, y: Number };

			# this isn't allowed!
			let point: Point = new Position { x = 10, y = 10 };
		`}
	/>

	<p>
		That being said, if the type is known, the type name can be omitted when the group is
		instantiated, and it will be inferred:
	</p>

	<Snippet
		language="cabin"
		code={`
			let Point = group { x: Number, y: Number };

			let point: Point = new { x = 10, y = 10 };
		`}
	/>

	<h2 id="mutability">Mutability</h2>

	<p>
		Group properties are <b>immutable by default</b>
		. To mark a property as mutable, use the
		<code>#[editable]</code>
		tag:
	</p>

	<Snippet
		language="cabin"
		code={`
			let Person = group {
				#[editable] first_name: Text,
				last_name: Text,
				age: Number
			};

			let tucker = new Person {
				first_name = "tucker",
				last_name = "foley",
				age = 14
			};

			tucker.first_name = "tuck";
		`}
	/>

	<h2 id="visibility">Visibility</h2>

	<p>
		By default, group properties are only visible in the file that the group is declared. To make a
		property visible elsewhere, use the <code>#[visible]</code>
		tag:
	</p>

	<Snippet
		language="cabin"
		code={`
			let Person = group {
				#[visible] first_name: Text,

				middle_name: Optional<Text> = nothing,
				last_name: Text,
				age: Number
			};
		`}
	/>

	<h2 id="compile-time-parameters">Compile-Time Parameters</h2>

	<p>
		Groups can take something known as <b>compile-time parameters</b>
		. We'll talk in more detail about these in the next section on
		<code>actions</code>
		, but the idea is that they're parameters on the group definition, similar to a function.
	</p>

	<Snippet
		language="cabin"
		code={`
			let Node = group<Data: Anything> {
				data: Data,
				children: List<Node<Data>>
			};
		`}
	/>

	<p>Then, when using this group, we want to pass a value to this parameter:</p>

	<Snippet
		language="cabin"
		code={`
			let node = new Node<Text> {
				data = "node",
				children = []
			};
		`}
	/>

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

	<Snippet
		language="cabin"
		code={`
			let Node = group<Data> {
				data: Data,
				children: List<Node<Data>>
			};
		`}
	/>

	<p>
		When ommitting the type of a compile-time parameter, it is automatically inferred as <code>
			Anything
		</code>
		.
	</p>
</TutorialDocument>
