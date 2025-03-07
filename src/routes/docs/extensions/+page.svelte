<script>
	import Code from '../../../components/Code.svelte';
	import Documentation from '../../../components/Documentation.svelte';
	import Snippet from '../../../components/Snippet.svelte';
</script>

<svelte:head>
	<title>Extensions&nbsp;&nbsp;•&nbsp;&nbsp;Cabin Docs</title>
</svelte:head>

<Documentation page="Extensions">
	<h1>Extensions</h1>

	<p>
		<b>Extensions</b>
		are how Cabin implements polymorphism, as well as allowing foreign types to be extended with additional
		functionality.
	</p>

	<h2 id="basic-extensions">Basic Extensions</h2>

	<p>
		To create a basic extension, we use the <code>extensionof</code>
		keyword with the type we want to extend.
	</p>

	<Snippet>
		<pre>
let TextExtension = extensionof Text &lbrace;
    is_danny = action(this: Text): Boolean &lbrace;
        is_danny is this == "danny";
    &rbrace;
&rbrace;;
</pre>
	</Snippet>

	<p>
		Once an extension is created, the properties of the extension are available on the type being
		extended:
	</p>

	<Snippet>
		<pre>
let danny_is_danny = "danny".is_danny(); # true
let sam_is_danny = "sam".is_danny(); # false
</pre>
	</Snippet>

	<p>
		<b>
			The properties in an extension can only be accessed if the extension is visible in the current
			scope.
		</b>
		For example, if this extension is declared in a file
		<code>text.cabin</code>
		, then to use it in another file, the extension needs to be brought into scope:
	</p>

	<Snippet>
		<pre>
let DannyExtension = text.TextExtension; # required

let danny_is_danny = "danny".is_danny(); # true
</pre>
	</Snippet>

	<h2 id="polymorphic-extensions">Polymorphic Extensions</h2>

	<p>
		Extensions can also extend one type <b>"to be"</b>
		another type. This is the primary way that polymorphism and interfaces are implemented in Cabin.
		Consider the following groups:
	</p>

	<Snippet>
		<pre>
let Rectangle = group &lbrace;
    width: Number,
    height: Number,

    area: action(this: This): Number &lbrace;
        area is this.width * this.height;
    &rbrace;
&rbrace;;

let Circle = group &lbrace;
    radius: Number,

    area: action(this: This): Number &lbrace;
        area is pi * this.radius ^ 2;
    &rbrace;
&rbrace;;
</pre>
	</Snippet>

	<p>
		Now, lets say we want an action that takes parameters that could be any shape, and just needs to
		calculate their areas. What do we make the type of this parameter? One way is to use an <code>
			either
		</code>
		, but it ends up being a bit verbose:
	</p>

	<Snippet>
		<pre>
let Shape = either &lbrace;
    rectangle: Rectangle,
    circle: Circle
&rbrace;;

let surface_area = action(faces: Shape[]) &lbrace;
    #[editable] let total = 0;
    foreach shape in faces &lbrace;
        total = total + match shape &lbrace;
            rectangle: Rectangle &lbrace; it is rectangle.area(); &rbrace;
            circle: Circle &lbrace; it is circle.area(); &rbrace;
        &rbrace;;
    &rbrace;;
    surface_area is total;
&rbrace;

let rectangle = new Rectangle &lbrace;
    width = 10,
    height = 10
&rbrace;;

let area = surface_area(Shape.rectangle(rectangle));
</pre>
	</Snippet>

	<p>
		Gross! What's more, if we ever want to add new shapes, it's gonna be a pain. Thankfully,
		extensions can simplify this for us. Instead of defining <code>Shape</code>
		as an
		<code>either</code>
		, we define it as a
		<code>group</code>
		:
	</p>

	<Snippet>
		<pre>
let Shape = group &lbrace;
    area: action(this: This): Number
&rbrace;;
</pre>
	</Snippet>

	<p>
		Now, we can <b>extend</b>
		our subtypes
		<b>"to be"</b>
		a
		<code>Shape</code>
		:
	</p>

	<Snippet>
		<pre>
let RectangleIsShape = extensionof Rectangle tobe Shape &lbrace;
    area = action(this: This): Number &lbrace;
        area is this.width * this.height;
    &rbrace;
&rbrace;;

let CircleIsShape = extensionof Circle tobe Shape &lbrace;
    area = action(this: This): Number &lbrace;
        area is pi * this.radius ^ 2;
    &rbrace;
&rbrace;;
</pre>
	</Snippet>

	<p>
		This also allows removing the <code>area</code>
		actions from our
		<code>Rectangle</code>
		and
		<code>Circle</code>
		groups, and just using the extension implementation instead. Now, these can safely be passed to
		<code>surface_area</code>
		as-is:
	</p>

	<Snippet>
		<pre>
let surface_area = action(faces: Shape[]) &lbrace;
    #[editable] let total = 0;
    foreach shape in faces &lbrace;
        total = total + shape.area();
    &rbrace;;
    surface_area is total;
&rbrace;

let rectangle = new Rectangle &lbrace;
    width = 10,
    height = 10
&rbrace;;

let area = surface_area(rectangle);
</pre>
	</Snippet>

	<h2 id="operator-overloading">Operator Overloading</h2>

	<p>
		Cabin allows operator overloading through several built-in groups. For example, this is the
		defintition for the built-in <code>Addable</code>
		group:
	</p>

	<Snippet>
		<pre>
let Addable = group &lbrace;
    plus: action(this: This, other: This): This
&rbrace;;
</pre>
	</Snippet>

	<p>
		Let's say we have some type that's reasonable to add, such as a <code>Vector</code>
	</p>

	<Snippet>
		<pre>
let Vector = group &lbrace;
    x: Number,
    y: Number
&rbrace;;
</pre>
	</Snippet>

	<p>
		We can implement <code>Addable</code>
		for
		<code>Vector</code>
		with an extension:
	</p>

	<Snippet>
		<pre>
let AddVectors = extensionof Vector tobe Addable &lbrace;
    plus = action(this: This, other: This): This &lbrace;
        it is new Vector &lbrace; x = this.x + other.x, y = this.y + other.y &rbrace;;
    &rbrace;
&rbrace;;
</pre>
	</Snippet>

	<p>
		Now, we can add vectors with the <code>+</code>
		operator:
	</p>

	<Snippet>
		<pre>
let a = new Vector &lbrace; x = 10, y = 20 &rbrace;;
let b = new Vector &lbrace; x = 15, y = 5 &rbrace;;

let sum = a + b;
</pre>
	</Snippet>

	<p>This desugars exactly to:</p>

	<Snippet>
		<pre>
let a = new Vector &lbrace; x = 10, y = 20 &rbrace;;
let b = new Vector &lbrace; x = 15, y = 5 &rbrace;;

let sum = a.plus(b);
</pre>
	</Snippet>

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

	<Snippet>
		<pre>
#[default]
let AddVectors = extensionof Vector tobe Addable &lbrace;
    plus = action(this: This, other: This): This &lbrace;
        it is new Vector &lbrace; x = this.x + other.x, y = this.y + other.y &rbrace;;
    &rbrace;
&rbrace;;
</pre>
	</Snippet>

	<p>
		Tagging this extension as <code>#[default]</code>
		means that
		<b>it will automatically be brought into scope when the type its extending is in scope</b>
		. For example, in this case, whenever
		<code>Vector</code>
		is in scope, the
		<code>AddVectors</code>
		extension will automatically be in scopel means that
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
			<i>to be</i>
			another.
		</li>
		<li>
			<code>#[default]</code>
			can only be used on an extension that's declared in the same scope as the type it's extending;
			i.e., you cannot make an extension default for a foreign type.
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

	<h2 id="getters">Extension Getters</h2>

	<p>
		Extensions support a feature called <b>getters</b>
		. Getters can cause confusion, so use them sparingly.
	</p>

	<p>
		So here's the situation: Let's say we have the following <code>Coordinate</code>
		group:
	</p>

	<Code
		code={`
		let Coordinate = group {
			x: Number,
			y: Number,
		};
	`}
	/>

	<p>Now, maybe we want to make another way to represent coordinates:</p>

	<Code
		code={`
		let Coordinate = group {
			x: Number,
			y: Number,
		};

		let Polar = group {
			r: Number,
			theta: Number,
		};
	`}
	/>

	<p>
		Now, what happens if we want to make an <code>extensionof Polar tobe Coordinate</code>
		? There's nothing we can use for the
		<code>x</code>
		and
		<code>y</code>
		properties. This is where
		<b>getters</b>
		come in. Getters allow using an
		<code>action</code>
		instead of the property directly:
	</p>

	<Code
		code={`
		let PolarToCoordinate = extensionof Polar tobe Coordinate {
			x = action(this: This): Number {
				x is this.r * this.theta.cos();
			},
			y = action(this: This): Number {
				y is this.r * this.theta.sin();
			}
		};
	`}
	/>

	<p>
		It's important to note that from the outside, these properties are opaque, meaning the caller
		doesn't <i>know</i>
		they're actions, they're simply referenced as a property and automatically called.
	</p>

	<p>Some important points about extension getters:</p>

	<ul>
		<li>
			The signature of the getter must exactly match <code>action(this: This): PropertyType</code>
		</li>
		<li>
			All getters are automatically marked with <code>#[no_side_effects]</code>
			. This means you cannot interact with the system in any way from getters, such as printing to the
			console, taking user input, writing files, etc. While this helps avoid hidden behavior, note that
			there's no way for the compiler to prevent getters from entering an infinite loop or recursing
			indefinitely.
		</li>
	</ul>
</Documentation>
