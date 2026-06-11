<script>
	import Snippet from '../../../components/Snippet.svelte';
	import TutorialDocument from '../TutorialDocument.svelte';
</script>

<TutorialDocument page="Basic Types & Operations">
	<h1>Basic Types &amp; Operations</h1>

	<p>
		We're going to take some time to go over the basic types and operations you can perform on them
		in Cabin.
	</p>

	<h2 id="basic-types">Basic Types</h2>

	<p>There are a types built into Cabin that you'll end up using frequently.</p>

	<h3 id="text">Text</h3>

	<p>
		First, let's look at <code>Text</code>
		.
		<code>Text</code>
		represents a sequence of characters; It's analagous to a
		<code>String</code>
		in some other languages. Text can be concatenated with the
		<code>+</code>
		operator:
	</p>

	<Snippet
		language="cabin"
		code={`
			let greeting = "Hello";
			let name = "Jack";
			
			debug(greeting + " " + name);
		`}
		output="Hello Jack"
	/>

	<p>
		An easier way of doing this is by using text formatting. In Cabin, Text literals are
		automatically formatted, using curly braces. So, the above is equivalent to this:
	</p>

	<Snippet
		language="cabin"
		code={`
			let greeting = "Hello";
			let name = "Jack";
			
			debug("{greeting} {name}");
		`}
		output="Hello Jack"
	/>

	<p>
		Text cannot be multiplied. To repeat a segment of text, use the <code>repeat()</code>
		action:
	</p>

	<Snippet
		language="cabin"
		code={`
			debug("Cabin is {"so ".repeat(3)}awesome!");
		`}
		output="Cabin is so so so awesome!"
	/>

	<h3 id="numbers">Numberic Types</h3>

	<h3 id="boolean">Boolean</h3>

	<p>
		<code>Boolean</code>
		is an
		<a href="/learn/eithers">either</a>
		defined as a Cabin built-in simply as:
	</p>

	<Snippet
		language="cabin"
		code={`
			let Boolean = either {
				true,
				false
			};
		`}
	/>

	<p>
		We'll learn more about <code>eithers</code>
		later. For now, just understand that its a simple type that can be either
		<code>true</code>
		or
		<code>false</code>
		.
	</p>

	<h2 id="basic-operations">Basic Operations</h2>

	<h3 id="boolean-combinators">Boolean Combinators</h3>

	<h3 id="double-colon">The Double-Colon Operator</h3>

	<p>
		The <b>double colon</b>
		(
		<code>::</code>
		) operator (or "direct property access operator") returns the property on an object with the name
		of the right operand.
	</p>

	<Snippet
		language="cabin"
		code={`
			let length = "some text".length;
		`}
	/>

	<p>
		The <code>::</code>
		operator always gives the
		<b>direct property value</b>
		. This isn't necessarily what you always want. More often than not you'll use the dot operator instead.
	</p>

	<h3 id="dot">The Dot Operator</h3>

	<p>
		The <b>dot</b>
		(
		<code>::</code>
		) operator is a little bit more nuanced. It operates differently depending on the type of it's left
		operand. Below is a thorough explanation of the double colon operator. Note that a lot of the material
		here hasn't been discussed yet; It might be a good idea to come back to this after understanding
		these topics.
	</p>

	<p>
		If the left operand is an
		<b>either</b>
		, the either variant with the name of the right operand is returned. In terms of the
		<code>::</code>
		operator, the following expressions are equivalent:
	</p>

	<Snippet
		language="cabin"
		code={`
			let Direction = either {
				left,
				right,
			};

			# these are equivalent 
			let left = Direction.left;
			let left = Direction::variants.find(action(variant: Direction) { it is variant.name == "left"; }));
		`}
	/>

	<p>
		If the left operand is a <b>group</b>
		, the group field with the name of the right operand is returned. In terms of the
		<code>::</code>
		operator, the following expressions are equivalent:
	</p>

	<Snippet
		language="cabin"
		code={`
			let Person = group {
				name: Text,
				age: Number,
			};

			# these are equivalent 
			let age = Person.age;
			let age = Person::properties.find(action(field: Field) { it is field.name == "age"; })).default_value;
		`}
	/>

	<p>
		Otherwise, if the left operand has a property with the name of the right operand and that
		property is an <code>action</code>
		with the first argument being
		<code>this: This</code>
		, then a
		<b>partial action</b>
		is returned with the first argument set to the left operand:
	</p>

	<Snippet
		language="cabin"
		code={`
			let Person = group {
				name: Text,
				age: Number,

				is_teen = action(this: This): Boolean {
					return is this.age.is_in(13.to(20));
				}
			};

			let jack = new Person {
				name = "Jack",
				age = 22
			};

			# these are equivalent 
			let teen = jack.is_teen;
			let teen = action: Boolean { return is jack::is_teen(jack); };
		`}
	/>

	<p>
		Overall, the <code>.</code>
		operator is complex, but often more-or-less "does what you expect it to".
	</p>
</TutorialDocument>
