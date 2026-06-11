<script>
	import Snippet from '../../../components/Snippet.svelte';
	import TutorialDocument from '../TutorialDocument.svelte';
</script>

<svelte:head>
	<title>Extensions&nbsp;&nbsp;•&nbsp;&nbsp;Cabin Docs</title>
</svelte:head>

<TutorialDocument page="Extensions">
	<h1>Extensions</h1>

	<p>
		<b>Extensions</b>
		are how Cabin implements polymorphism, as well as allowing foreign types to be extended with additional
		functionality.
	</p>

	<h2 id="basic-extensions">Basic Extensions</h2>

	<p>
		To create a basic extension, we use the <code>extend</code>
		keyword with the type we want to extend.
	</p>

	<Snippet
		language="cabin"
		code={`
			let text_extension = extend Text {
				is_danny = action(this: Text): Boolean {
					return is this == "danny";
				}
			};
		`}
	/>

	<p>
		Once an extension is created, the properties of the extension are available on the type being
		extended:
	</p>

	<Snippet
		language="cabin"
		code={`
			let danny_is_danny = "danny".is_danny(); # true
			let sam_is_danny = "sam".is_danny(); # false
		`}
	/>

	<p>
		<b>
			The properties in an extension can only be accessed if the extension is visible in the current
			scope.
		</b>
		For example, if this extension is declared in a file
		<code>text.cabin</code>
		, then to use it in another file, the extension needs to be brought into scope:
	</p>

	<Snippet
		language="cabin"
		code={`
			let _ = text.text_extension; # required

			let danny_is_danny = "danny".is_danny(); # true
		`}
	/>

	<h2 id="polymorphic-extensions">Polymorphic Extensions</h2>

	<p>
		Extensions can also extend one type to "be" another type. This is the primary way that
		polymorphism and interfaces are implemented in Cabin. Let's say we have this group and action:
	</p>

	<Snippet
		language="cabin"
		code={`
			let Shape = group {
				area: action(this: This): Number
			};

			let takes_shape = action(shape: Shape) {};
		`}
	/>

	<p>
		Now, we can <b>extend</b>
		our subtypes to be a
		<code>Shape</code>
		:
	</p>

	<Snippet
		language="cabin"
		code={`
			let RectangleIsShape = extend Rectangle as Shape {
				area = action(this: This): Number {
					area is this.width * this.height;
				}
			};

			let CircleIsShape = extend Circle as Shape {
				area = action(this: This): Number {
					area is pi * this.radius ^ 2;
				}
			};
		`}
	/>

	<p>
		Now, we can assign these to parameters of <code>Shape</code>
		.
	</p>

	<Snippet
		language="cabin"
		code={`
			takes_shape(rectangle);
			takes_shape(circle);
		`}
	/>

	<h2 id="operator-overloading">Operator Overloading</h2>

	<p>
		Cabin allows operator overloading through several built-in groups. For example, this is the
		defintition for the built-in <code>Addable</code>
		group:
	</p>

	<Snippet
		language="cabin"
		code={`
			let Addable = group {
				visible plus: action(this: This, other: This): This
			};
		`}
	/>

	<p>
		Let's say we have some type that's reasonable to add, such as a <code>Vector</code>
	</p>

	<Snippet
		language="cabin"
		code={`
			let Vector = group {
				x: Number,
				y: Number
			};
		`}
	/>

	<p>
		We can implement <code>Addable</code>
		for
		<code>Vector</code>
		with an extension:
	</p>

	<Snippet
		language="cabin"
		code={`
			let AddVectors = extend Vector as Addable {
				plus = action(this: This, other: This): This {
					it is new Vector { x = this.x + other.x, y = this.y + other.y };
				}
			};
		`}
	/>

	<p>
		Now, we can add vectors with the <code>+</code>
		operator:
	</p>

	<Snippet
		language="cabin"
		code={`
			let a = new Vector { x = 10, y = 20 };
			let b = new Vector { x = 15, y = 5 };

			let sum = a + b;
		`}
	/>

	<p>This desugars exactly to:</p>

	<Snippet
		language="cabin"
		code={`
			let a = new Vector { x = 10, y = 20 };
			let b = new Vector { x = 15, y = 5 };

			let sum = a.plus(b);
		`}
	/>

	<p>
		The <code>.plus()</code>
		method can be called manually like this, but it's not idiomatic and will trigger a warning.
	</p>

	<h2 id="default-extensions">Default Extensions</h2>

	<p>
		One annoyance you might notice with the above implementation is that you have to bring <code>
			AddVectors
		</code>
		into scope whenever you want to be able to add them. This is where the
		<code>#[default]</code>
		tag comes in:
	</p>

	<Snippet
		language="cabin"
		code={`
			#[default]
			let AddVectors = extend Vector as Addable {
				plus = action(this: This, other: This): This {
					it is new Vector { x = this.x + other.x, y = this.y + other.y };
				}
			};
		`}
	/>

	<p>
		Tagging this extension as <code>#[default]</code>
		means that
		<b>it will automatically be brought into scope when the type its extending is in scope</b>
		. For example, in this case, whenever
		<code>Vector</code>
		is in scope, the
		<code>AddVectors</code>
		extension will automatically be in scope.
	</p>

	<p>
		Note the following important things about using <code>#[default]</code>
	</p>

	<ul>
		<li>
			<code>#[default]</code>
			can only be used on
			<b>polymorphic extensions</b>
			&mdash;Extensions of one type
			<code>as</code>
			another.
		</li>
		<li>
			<code>#[default]</code>
			can only be used on an extension that's declared in the same file as the type it's extending; i.e.,
			you cannot make an extension default for a foreign type.
		</li>
		<li>
			Multiple of the same type of extension (such as two implementations of <code>Vector</code>
			to be
			<code>Addable</code>
			) cannot be marked
			<code>#[default]</code>
			; Only at most one.
		</li>
	</ul>
</TutorialDocument>
