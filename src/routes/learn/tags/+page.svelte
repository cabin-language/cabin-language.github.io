<script>
	import Snippet from '../../../components/Snippet.svelte';
	import TutorialDocument from '../TutorialDocument.svelte';
</script>

<svelte:head>
	<title>Tags&nbsp;&nbsp;•&nbsp;&nbsp;Cabin Docs</title>
</svelte:head>

<TutorialDocument page="Tags">
	<h1>Tags</h1>

	<p>
		<b>Tags</b>
		are a dead simple way to "mark" a name with a value
	</p>

	<h2 id="introduction">Introduction</h2>

	<p>
		A "tag" is just an object, and tags can be applied to bindings with the
		<code>#[]</code>
		syntax:
	</p>

	<Snippet
		language="cabin"
		code={`
			let friend = new Object {};

			#[friend]
			let tucker = new Person {
				first_name = "tucker",
				last_name = "foley"
			};
		`}
	/>

	<p>
		Tagging currently is only used to give hints to the compiler. For example, builtin actions are
		tagged with <code>#[builtin()]</code>
		, and system actions are tagged with
		<code>#[system_side_effects]</code>
		, etc.
	</p>
</TutorialDocument>
