<script>
	import Snippet from '../../../components/Snippet.svelte';
	import TutorialDocument from '../TutorialDocument.svelte';
</script>

<svelte:head>
	<title>Pattern Matching&nbsp;&nbsp;•&nbsp;&nbsp;Cabin Docs</title>
</svelte:head>

<TutorialDocument page="Pattern Matching">
	<h1>Pattern Matching</h1>

	<h2 id="is-variant">
		The <code>is_variant</code>
		Action
	</h2>

	<p>
		When using <code>eithers</code>
		, we need a way to check if a value is a certain variant. All either's come with an
		<code>is_variant</code>
		action that can check if a value is a certain variant.
	</p>

	<p>
		Let's look at this <code>either</code>
		:
	</p>

	<Snippet
		language="cabin"
		code={`
			let Shape = either {
				rectangle: Rectangle,
				circle: Circle,
				triangle: Triangle
			};
		`}
	/>

	<p>
		Using <code>is_variant</code>
		looks like this:
	</p>

	<Snippet
		language="cabin"
		code={`
			if shape.is_variant(Shape.circle) {
				print("It's a circle!");
			};
		`}
	/>

	<h2 id="conditional-let-bindings">
		Conditional <code>let</code>
		Bindings
	</h2>

	<p>
		<code>is_variant</code>
		is lovely, but when checking if a value is a certain variant, sometimes we need to create a
		<i>binding</i>
		to the inner type. This fundamentally requires its own syntax.
	</p>

	<p>
		The syntax uses <code>let</code>
		in an
		<code>if</code>
		expression to bind the inner variant to a name:
	</p>

	<Snippet
		language="cabin"
		code={`
			if shape == Shape.rectangle(let rectangle) {
				print("Area: {rectangle.area()}");
			};
		`}
	/>

	<p>
		This syntax is only valid in the context of <code>
			if &lt;expression&gt; == &lt;either-variant&gt;
		</code>
		(and
		<code>match</code>
		blocks, which we're about to discuss).
	</p>

	<h2 id="match-blocks">
		<code>match</code>
		Blocks
	</h2>

	<p>
		<code>match</code>
		blocks are syntactic sugar for chained
		<code>if ... otherwise if</code>
		blocks. Let's say we want to handle each case separately. Using what we already know, we might try
		to do this with chained
		<code>if</code>
		expressions:
	</p>

	<Snippet
		language="cabin"
		code={`
			let area = if shape == Shape.rectangle(let rectangle) {
				it is rectangle.area();
			} otherwise if shape == Shape.circle(let circle) {
				it is circle.area();
			} otherwise if shape == Shape.triangle(let triangle) {
				it is triangle.area();
			} otherwise {
				# unreachable
				it is 0;
			};
		`}
	/>

	<p>
		It's ugly, and worse, we can't enforce that that catch-all <code>otherwise</code>
		block is unreachable. Instead, we can use a
		<code>match</code>
		block:
	</p>

	<Snippet
		language="cabin"
		code={`
			let area = match shape {
				Shape.rectangle(let rectangle) => rectangle.area(),
				Shape.circle(let circle) => circle.area(),
				Shape.triangle(let triangle) => triangle.area(),
			};
		`}
	/>

	<p>
		<code>otherwise</code>
		can be used as a catch-all case:
	</p>

	<Snippet
		language="cabin"
		code={`
			let area = match shape {
				Shape.rectangle(let rectangle) => rectangle.area(),
				Shape.circle(let circle) => circle.area(),
				otherwise => 0
			};
		`}
	/>

	<p>
		Remember, blocks are expressions in Cabin, so we can run arbitrary statements in a match branch
		using a block:
	</p>

	<Snippet
		language="cabin"
		code={`
			let value = match attempt {
				error(let err) => {
					print("Error: {err}");
					return is error(err);
				},
				success(let success_value) => success_value
			};
		`}
	/>
</TutorialDocument>
