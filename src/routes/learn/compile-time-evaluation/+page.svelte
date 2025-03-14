<script>
	import Snippet from '../../../components/Snippet.svelte';
	import TutorialDocument from '../TutorialDocument.svelte';
</script>

<TutorialDocument page="Compile-Time Evaluation">
	<h1>Compile-Time Evaluation</h1>

	<h2 id="compile-time-vs-runtime">Compile-Time vs Run-Time</h2>

	<p>
		So, what's meant by "compile-time" and "run-time" (or "runtime")? To understand what these terms
		mean, we need to dive a little bit into how compilers work. Don't worry, it's less complicated
		than it seems.
	</p>

	<p>
		Computers can only run what's called <b>machine language</b>
		. Machine language is raw binary data that's not readable by humans&amp;Think of a file full of just
		1s and 0s. Computer's don't understand actual programming language like Cabin source code.
	</p>

	<p>
		So how is it possible for our computers to run Cabin code? That's where the Cabin compiler comes
		in. When you run <code>cabin run</code>
		, the Cabin compiler converts your source code into machine code, and
		<i>then</i>
		your computer runs that machine code.
	</p>

	<p>
		This method breaks the process of running Cabin code into two distinct steps&mdash;
		<b>converting</b>
		the Cabin code into machine code, and
		<b>running</b>
		the actual machine code. We call these phases
		<b>"compile-time"</b>
		and
		<b>"run-time"</b>
		.
	</p>

	<p>
		In most programming languages, your code won't actually <i>do</i>
		anything during compile-time; It's simply getting translated into machine code. Then, at run-time,
		your code will actually execute. An important difference here is what computer the code is running
		on; Generally, you'll
		<i>compile</i>
		the code on
		<i>your</i>
		machine, and then distribute the compiled program to
		<i>run</i>
		on the
		<i>user's</i>
		machine.
	</p>

	<h2 id="compile-time-as-the-default">Compile-Time as the Default</h2>

	<p>
		Cabin is unique in that code is automatically run at compile-time <i>by default</i>
		. This means, for example, when you call
		<code>print</code>
		, it'll print to
		<i>you</i>
		during compilation, not the
		<i>user</i>
		at runtime. This is relatively unique to Cabin and might take some time to get used to, but it comes
		with incredible benefits.
	</p>

	<p>Let's take a look at our earlier program from system interaction:</p>

	<Snippet
		language="cabin"
		code={`
			print("Hello world!");
		`}
		output="Hello world!"
	/>

	<p>
		When you run this, it'll print <code>Hello world!</code>
		to the terminal. However, if you look at the compiler's debug messages, you can actually see that
		this is being printed at
		<i>compile-time</i>
		, not runtime.
	</p>

	<p>
		An easier way to see this is by building and running as separate steps. Instead of running <code
		>
			cabin run
		</code>
		, run
		<code>cabin build</code>
		. You'll see
		<code>Hello world!</code>
		be printed. Then, run the built executable (In
		<code>builds/&lt;project-name&gt;</code>
		), and you'll see that it doesn't print anything.
	</p>

	<p>
		In this case, you'll actually notice that you get a warning when you run this code&mdash;
		<i>because</i>
		it's being run at compile-time.
		<code>print</code>
		is really meant to be used at runtime to display information to the user. To print at compile-time,
		we generally prefer to use
		<code>debug</code>
		, which does the same thing:
	</p>

	<Snippet
		language="cabin"
		code={`
			debug("Hello world!");
		`}
		output="Hello world!"
	/>

	<h2 id="runtime-evaluation">Runtime Evaluation</h2>

	<p>
		As you might expect, there are often cases where you want to run code at runtime instead of
		compile-time. There's an entire section in the book on this called runtime evaluation.
	</p>
</TutorialDocument>
