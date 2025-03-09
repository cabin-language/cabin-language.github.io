<script>
	import Code from '../../../components/Code.svelte';
	import Documentation from '../../../components/Documentation.svelte';
	import Snippet from '../../../components/Snippet.svelte';
</script>

<svelte:head>
	<title>Declarations • Cabin Docs</title>
</svelte:head>

<Documentation page="Declarations">
	<h1>Declarations</h1>

	<p>
		In Cabin, bindings are declared with the&nbsp;
		<code>let</code>
		keyword:
	</p>

	<Code language="cabin" code={`let x = 10;`} />

	<p>
		Declarations&nbsp;
		<i>must</i>
		be assigned an initial value. This isn't ever allowed:
	</p>

	<Code language="cabin" code={`let x;`} />

	<h2 id="mutability">Mutability</h2>

	<p>
		By default, declarations create an&nbsp;
		<b>immutable binding</b>
		. This means the value cannot be changed. To declare a value as mutable, use the&nbsp;
		<code>#[editable]</code>
		tag:
	</p>

	<Code
		language="cabin"
		code={`
		#[editable]
		let x = 10;
	`}
	/>

	<p>We'll talk more about tags later. For now, just note the syntax.</p>

	<p>
		Values marked as <code>#[editable]</code>
		cannot be used as types.
	</p>

	<h2 id="visibility">Visibility</h2>

	<p>
		By default, declarations are hidden from other files. Similarly to
		<code>editable</code>
		, we do this with tags. In this case, the
		<code>#[visible]</code>
		tag is used:
	</p>

	<Code
		language="cabin"
		code={`
		#[visible]
		let x = 10;
	`}
	/>

	<p>
		Note that <code>#[visible]</code>
		isn't valid for local variables, only top-level declarations and group fields, which we'll talk about
		later.
	</p>
</Documentation>
