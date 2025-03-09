<script>
	import Navbar from '../../../components/Navbar.svelte';
	import Snippet from '../../../components/Snippet.svelte';
	import TutorialDocument from '../TutorialDocument.svelte';
</script>

<TutorialDocument page="Eithers">
	<h1>Eithers</h1>

	<p>
		<b>Eithers</b>
		are how Cabin implements "closed polymorphism", similar to an
		<code>enum</code>
		in many other languages.
	</p>

	<h2 id="basic">Basic Eithers</h2>

	<p>
		Eithers are declared with the <code>either</code>
		keyword:
	</p>

	<Snippet
		language="cabin"
		code={`
			let PrimaryColor = either {
				red,
				green,
				blue
			};
		`}
	/>

	<p>
		The inside bits (
		<code>red</code>
		,
		<code>green</code>
		, and
		<code>blue</code>
		in this case) are called
		<b>variants</b>
		. Variants are usually accessed with the
		<b>dot</b>
		(
		<code>.</code>
		) operator:
	</p>

	<Snippet
		language="cabin"
		code={`
			let color = PrimaryColor.red;
		`}
	/>

	<p>
		Either's are incredibly useful for defining closed choice types. For example, this is how <code>
			Boolean
		</code>
		is defined in the standard library:
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
		<code>true</code>
		and
		<code>false</code>
		aren't keywords or even reserved identifiers; They're just
		<code>either</code>
		variants. These can still be accessed with
		<code>Boolean.true</code>
		and
		<code>Boolean.false</code>
		, but for convenience, they are automatically brought into the global scope as
		<code>let true = Boolean.true</code>
		and
		<code>let false = Boolean.false</code>
		.
	</p>

	<h2 id="subtypes">Subtypes</h2>

	<p>
		Eithers can have <b>subtypes</b>
		. This allows attaching data to an
		<code>either</code>
		variant:
	</p>

	<Snippet
		language="cabin"
		code={`
			let Color = either {
				red,
				green,
				blue,
				rgb: group { r: Number, g: Number, b: Number }
			};
		`}
	/>

	<p>Subtypes are insantiated with parentheses, similar to action calls:</p>

	<Snippet
		language="cabin"
		code={`
			let purple = Color.rgb(new { r = 255, g = 0, b = 255 });
		`}
	/>
</TutorialDocument>
