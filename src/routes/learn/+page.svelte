<script>
	import TutorialDocument from './TutorialDocument.svelte';
</script>

<svelte:head>
	<title>Docs&nbsp;&nbsp;•&nbsp;&nbsp;Cabin</title>
</svelte:head>

<TutorialDocument page="Introduction">
	<h1>Introduction</h1>

	<p>
		Welcome to Cabin! This documentation is designed for newcomers to the language. It'll walk you
		through the basics of Cabin and how to get started with the language, all the way from your
		first "Hello world" program to complex programs with external libraries.
	</p>

	<h2 id="what-is-cabin">What is Cabin?</h2>

	<p>
		Cabin is a programming language designed to be <b>safe</b>
		,
		<b>simple</b>
		, and
		<b>speedy</b>
		. To be specific, it's a memory-safe, statically typed, compiled, multi-paradigm programming language.
	</p>

	<p>
		Cabin has a number of features that makes it unique, but most notably is it's treatment of
		<i>compile-time evaluation</i>
		. Cabin allows arbitrary expressions to be evaluated at compile-time, similar to other modern languages
		such as Zig and Jai. However, Cabin takes this a step further by
		<i>always</i>
		evaluating expressions at compile-time by
		<i>default</i>
		if it is able to be. This leads to a superb developer experience where complex bugs can be caught
		at compile-time and displayed in real-time in an editor.
	</p>

	<h2 id="navigating-these-docs">Navigating These Docs</h2>

	<p>
		On the left side of these docs you'll see the sidebar with the book's contents. You may notice
		that it's quite short, and that's because Cabin is quite simple. You could very easily learn the
		entire language in a day.
	</p>

	<h2 id="additional-support">Additional Support</h2>

	<p>
		For additional support on using Cabin and specfic errors you're getting in your Cabin code,
		check out <a href="/community">the community</a>
		. We're a friendly and accepting bunch, and are happy to help out beginners with their struggles
		learning the language.
	</p>

	<h2 id="final-remarks">Final Remarks</h2>

	<p>Good luck, have fun, and stay cozy!</p>
</TutorialDocument>

<style>
	a {
		color: dodgerblue;
	}
</style>
