<script>
	import Snippet from '../../../components/Snippet.svelte';
	import TutorialDocument from '../TutorialDocument.svelte';
	import ret_1 from '../../../assets/images/RET_1.png';
</script>

<TutorialDocument page="Runtime Evaluation">
	<h1>Runtime Evaluation</h1>

	<p>
		Up until now, all of our code has been executing at <i>compile-time</i>
		. This is great because it allows us to catch errors early and keep our production code optimized
		and safe. However, our code currently doesn't
		<i>do</i>
		anything for the user, which is a bit silly. So, it's time to talk about
		<b>runtime evaluation</b>
		.
	</p>

	<h2 id="run-expressions">
		<code>run</code>
		expressions
	</h2>

	<p>
		<code>run</code>
		expressions
		<b>force an expression to be evaluated at runtime</b>
		. For example, let's look at the following code:
	</p>

	<Snippet
		language="cabin"
		code={`
			print("Hello!");
		`}
	/>

	<p>
		This will print <code>Hello!</code>
		at compile-time, and will be reduced to nothing at runtime. But what if we want to print this to
		the user? That's where
		<code>run</code>
		comes in:
	</p>

	<Snippet
		language="cabin"
		code={`
			run(print("Hello!"));
		`}
	/>

	<p>This time, our message will be printed at runtime instead of compile-time!</p>

	<p>
		It's important to note that <code>run</code>
		isn't an action, it's a special syntax. Unlike an action, the argument inside
		<code>run</code>
		is evaluated lazily, not eagerly. You can think of
		<code>run</code>
		as analgous to being a function-like macro. Additionally, with
		<code>run</code>
		being a special syntax, you can't do things like this:
	</p>

	<Snippet
		language="cabin"
		code={`
			let stored_run = run; # invalid
		`}
	/>

	<p>
		The syntax is always <code>run(&lt;expression&gt;)</code>
		. . The parentheses are required to avoid ambiguity to the programmer.
	</p>

	<p>
		It's important to note that the <i>sub-expressions</i>
		to the expression passed to
		<code>run</code>
		<i>are</i>
		evaluated at compile-time. For example, let's look at this run expression:
	</p>

	<Snippet
		language="cabin"
		code={`
			run(print(2 + 3));
		`}
	/>

	<p>
		The inner expression <code>2 + 3</code>
		will still be evaluated at compile-time, meaning at compile-time the above code will be transformed
		into:
	</p>

	<Snippet
		language="cabin"
		code={`
			run(print(5));
		`}
	/>

	<p>
		To also force the sub-expressions to be evaluated at runtime, we can nest <code>run</code>
		expressions:
	</p>

	<Snippet
		language="cabin"
		code={`
			run(print(run(2 + 3)));
		`}
	/>

	<p>
		This might seem tedious, but you'll come to find that it's actually quite rare that you need to
		nest <code>run</code>
		expressions.
	</p>

	<h2 id="runtime-evaluation-tree">The Runtime-Evaluation Tree</h2>

	<p>
		Let's get a little more detailed about how runtime evaluation works. Cabin models runtime
		evaluation with what's called the <b>runtime evaluation tree</b>
		(RET). The idea is that expressions that depend on runtime values are themselves forced to be evaluated
		at runtime, and expressions that depend on
		<i>those</i>
		expressions are evaluated at runtime, and so on. Let's look at some examples.
	</p>

	<p>
		Consider this code that uses <code>run</code>
		expressions:
	</p>

	<Snippet
		language="cabin"
		code={`
			let a = run(10 + 10);
			let b = run(5 + 5);
			let c = a + 2;
			let d = a + b;
		`}
	/>

	<p>
		In this code, the definitions for <code>y</code>
		and
		<code>z</code>
		don't use
		<code>run</code>
		expressions, yet, they are still evaluated at runtime. Why? Because they
		<i>depend</i>
		on the value of
		<code>x</code>
		, which isn't known until runtime. In this example, the RET looks something like this:
	</p>

	<img src={ret_1} alt="runtime expression tree" />

	<p>
		In this diagram, an arrow from a parent node P to a child node C means "the result of C depends
		on knowing the result of P, and P is only known at runtime, therefore C can only be known at
		runtime". For example, looking at the bottom-left-most node <code>c</code>
		, the diagram is showing that the value of
		<code>c</code>
		depends on its parent node
		<code>a + 2</code>
		, and
		<code>a + 2</code>
		is only known at runtime, so
		<code>c</code>
		can only be known at runtime.
	</p>

	<h2 id="command-line-arguments">Command-Line Arguments</h2>

	<p>
		In Cabin, there's a built-in action called <code>command_line_arguments()</code>
		that returns a list of arguments passed to the program. Like all actions, it can be called at compile-time.
		When calling
		<code>command_line_arguments()</code>
		at compile-time, it'll give the arguments passed to the compiler. For example:
	</p>

	<Snippet
		language="cabin"
		code={`
			let args = command_line_arguments();
			debug(args);
		`}
	/>

	<p>
		When running with <code>cabin run -- some arg --flag -o</code>
		gives:
	</p>

	<Snippet>["some", "arg", "--flag", "-o"]</Snippet>

	<p>
		The <code>--</code>
		argument is used to tell the compiler that you're passing arguments to the program, not the compiler.
	</p>

	<p>
		But what about runtime arguments? Often we want users to be able to pass arguments to our
		programs. In this case, we simply call the action at runtime:
	</p>

	<Snippet
		language="cabin"
		code={`
			let compile_time_args = command_line_arguments();
			debug(compile_time_args);

			let runtime_args = run(command_line_arguments());
			print(runtime_args);
		`}
	/>

	<p>
		However, if we run this with the same command as above, an empty list will be printed. This is
		because the arguments after <code>--</code>
		are passed to the program at compile-time, not at runtime. To pass runtime arguments, we use an additional
		<code>--</code>
		that separates our compile-time arguments from runtime arguments:
	</p>

	<Snippet
		language="bash"
		code={`
			cabin run -- some arg --flag -o -- some2 arg2 --flag2 -i
		`}
	/>

	<p>At compile-time, this will output:</p>

	<Snippet>["some", "arg", "--flag", "-o"]</Snippet>

	<p>And at runtime:</p>

	<Snippet>["some2", "arg2", "--flag2", "-i"]</Snippet>

	<p>So, to pass runtime arguments without any compile-time arguments, we can do:</p>

	<Snippet
		language="bash"
		code={`
			cabin run -- -- some2 arg2 --flag2 -i
		`}
	/>

	<p>
		The Cabin compiler has a shorthand for this, which is using the <code>---</code>
		argument:
	</p>

	<Snippet
		language="bash"
		code={`
			cabin run --- some2 arg2 --flag2 -i
		`}
	/>

	<p>
		This will pass the arguments as runtime arguments and pass no compile-time arguments, completely
		equivalent to using <code>-- --</code>
		.
	</p>
</TutorialDocument>
