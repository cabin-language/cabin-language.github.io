<script>
	import Snippet from '../../../components/Snippet.svelte';
	import TutorialDocument from '../TutorialDocument.svelte';
</script>

<TutorialDocument page="System Interaction">
	<h1>System Interaction</h1>

	<h2 id="terminal-input-output">Terminal Input &amp; Output</h2>

	<p>
		We can print to the terminal with <code>builtin.system.terminal.print</code>
		from the Cabin builtins:
	</p>

	<Snippet
		language="cabin"
		code={`
			builtin.system.terminal.print("Hello world!");
		`}
		output="Hello world!"
	/>

	<p>
		For convenience, the standard Cabin prelude automatically defines a global called <code>
			print
		</code>
		that's assigned to
		<code>builtin.system.terminal.print</code>
		. So, the above could simply be written as:
	</p>

	<Snippet
		language="cabin"
		code={`
			print("Hello world!");
		`}
		output="Hello world!"
	/>

	<p>
		You may notice a warning when you run this&mdash;Don't worry about that for now, we'll talk
		about it in the next section.
	</p>

	<p>
		<code>print</code>
		takes an optional second argument, which is a list of options. For example, to print without the
		trailing newline, set
		<code>newline = false</code>
		:
	</p>

	<Snippet
		language="cabin"
		code={`
			print("Hello world! ", new { newline = false });
			print(":D");
		`}
		output="Hello world! :D"
	/>

	<p>
		Don't worry too much about the <code>new</code>
		syntax here; It'll be discussed more in the section on groups.
	</p>

	<p>
		The spiritual mirror to <code>print</code>
		is
		<code>input</code>
		.
		<code>input</code>
		(fully qualified as
		<code>builtin.system.termial.input</code>
		) reads a line of input from the system's standard input stream.
	</p>

	<Snippet
		language="cabin"
		code={`
			let name = input();
			print("Hello {name}!");
		`}
	/>

	<p>
		Similar to <code>print</code>
		,
		<code>input</code>
		takes an optional argument. In the case of
		<code>input</code>
		, the argument is a string to print before taking user input:
	</p>

	<Snippet
		language="cabin"
		code={`
			let name = input("Enter your name: ");
			print("Hello {name}!");
		`}
	/>

	<p>
		Some other useful terminal actions are <code>terminal.clear()</code>
		.
	</p>

	<h2 id="file-input-output">File Input &amp; Output</h2>

	<p>
		There are several useful file operations built into Cabin in <code>builtin.system.files</code>
		(aliased as
		<code>files</code>
		). To read a file, we use
		<code>files.read</code>
		:
	</p>

	<Snippet
		language="cabin"
		code={`
			let contents = files.read("data.txt");
		`}
	/>

	<p>
		Similarly, you could guess what <code>files.write</code>
		does:
	</p>

	<Snippet
		language="cabin"
		code={`
			files.write("data.txt", "some_data");
		`}
	/>

	<p>
		Other useful file actions are <code>files.delete</code>
		,
		<code>files.create</code>
		,
		<code>files.append</code>
		,
		<code>files.exists</code>
		, and
		<code>files.directory_contents</code>
		. For a full list of file operations, see
		<a href="/reference/standard-library/system">
			the reference page for <code>builtin.system.files</code>
		</a>
		.
	</p>

	<h2 id="other-system-interactions">Other System Interactions</h2>

	<p>Below are some other useful ways to interact with the system:</p>

	<ul>
		<li>
			<code>system.environment_variables</code>
			<ul>
				<li><code>system.environment_variables.get</code></li>
				<li><code>system.environment_variables.set</code></li>
			</ul>
		</li>
	</ul>
</TutorialDocument>

<style>
	a {
		color: cornflowerblue;
	}
</style>
