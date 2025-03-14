<script>
	import Snippet from '../../../components/Snippet.svelte';
	import TutorialDocument from '../TutorialDocument.svelte';
</script>

<svelte:head>
	<title>Libraries&nbsp;&nbsp;•&nbsp;&nbsp;Cabin Docs</title>
</svelte:head>

<TutorialDocument page="External Libraries">
	<h1>External Libraries</h1>

	<p>
		Cabin has a centralized <a href="/libraries">package manager</a>
		for community-made libraries. These can be easy added to your project using
		<code>cabin add</code>
		:
	</p>

	<Snippet language="bash" code="cabin add json" />

	<p>
		This, for example, will add the <code>json</code>
		library to your project. The name
		<code>json</code>
		will be now available in the global
		<code>library</code>
		object:
	</p>

	<Snippet language="cabin" code={`let object = library.json.parse(\`{}\`);`} />
</TutorialDocument>

<style>
	a {
		color: cornflowerblue;
	}
</style>
