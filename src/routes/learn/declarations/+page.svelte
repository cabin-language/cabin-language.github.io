<script>
	import Snippet from '../../../components/Snippet.svelte';
	import TutorialDocument from '../TutorialDocument.svelte';
</script>

<svelte:head>
	<title>Declarations • Cabin Docs</title>
</svelte:head>

<TutorialDocument page="Declarations">
	<h1>Declarations</h1>

	<p>
		In Cabin, bindings are declared with the&nbsp;
		<code>let</code>
		keyword:
	</p>

	<Snippet language="cabin" code={`let x = 10;`} />

	<p>
		Declarations&nbsp;
		<i>must</i>
		be assigned an initial value. This isn't ever allowed:
	</p>

	<Snippet language="cabin" code={`let x;`} />

	<h2 id="mutability">Mutability</h2>

	<p>
		By default, declarations create an&nbsp;
		<b>immutable unassignable binding</b>
		. This means the value cannot be changed. To declare a value as assignable, use the&nbsp;
		<code>editable</code>
		keyword:
	</p>

	<Snippet
		language="cabin"
		code={`
		let editable circle = some_circle;
		circle = other_circle;
	`}
	/>

	<p>
		To declare a value as mutable, specify that the <b>type itself</b>
		must be
		<code>editable</code>
		:
	</p>

	<Snippet
		language="cabin"
		code={`
		let circle: editable Circle = some_circle;
		circle.radius = 10;
	`}
	/>

	<p>In this case, if the type can be inferred, it may be omitted:</p>

	<Snippet
		language="cabin"
		code={`
		let circle: editable = some_circle;
		circle.radius = 10;
	`}
	/>

	<p>To create a value which is both assignable and mutable, use both:</p>

	<Snippet
		language="cabin"
		code={`
		let editable circle: editable = some_circle;
		circle = other_circle;
		circle.radius = 10;
	`}
	/>

	<p>
		Values marked as <code>editable</code>
		cannot be used as types. We'll talk more about types later.
	</p>

	<h2 id="visibility">Visibility</h2>

	<p>
		By default, declarations are hidden from other files. To expose them, use the <code>
			visible
		</code>
		 keyword:
	</p>

	<Snippet
		language="cabin"
		code={`
		let visible x = 10;
	`}
	/>

	<p>
		Note that <code>#[visible]</code>
		isn't valid for local variables, only top-level declarations and group fields, which we'll talk about
		later.
	</p>
</TutorialDocument>
