<script>
	import Snippet from '../../../components/Snippet.svelte';
	import TutorialDocument from '../TutorialDocument.svelte';
</script>

<svelte:head>
	<title>Actions&nbsp;&nbsp;•&nbsp;&nbsp;Cabin Docs</title>
</svelte:head>

<TutorialDocument page="Actions">
	<h1>Actions</h1>

	<p>
		<b>Actions</b>
		are ways to store a block of Cabin code without running it eagerly; They are analagous to a function
		in other languages:
	</p>

	<Snippet
		language="cabin"
		code={`
			let say_hello = action {
				print("hello");
			};
		`}
		output=""
	/>

	<p>
		This code will <b>not</b>
		print anything; Instead, it stores the
		<i>action</i>
		of printing in a binding (in this case
		<code>say_hello</code>
		).
	</p>

	<p>To run the code in an action, we use parentheses after the action name:</p>

	<Snippet
		language="cabin"
		code={`
			let say_hello = action {
				print("hello");
			};

			say_hello();
		`}
		output="hello"
	/>

	<h2 id="return-values">Return Values</h2>

	<p>
		Actions can specify a "return value". This is a value that the action "returns" to the caller.
	</p>

	<Snippet
		language="cabin"
		code={`
			let get_hello = action: Text {
				return is "hello";
			};

			let hello = get_hello();
			print(hello);
		`}
		output="hello"
	/>

	<h2 id="parameters">Parameters</h2>

	<p>
		Actions can take what's called <b>parameters</b>
		. Parameters are values in the action that aren't known until the action is called. To add parameters
		to an action, surround them with parentheses:
	</p>

	<Snippet
		language="cabin"
		code={`
			let add_10 = action(number: Number): Number {
				return is number + 10;
			};
		`}
	/>

	<p>
		Now, when the action is called, it needs to be passed an <b>argument</b>
		to the corresponding
		<b>parameters</b>
		using parentheses: :
	</p>

	<Snippet
		language="cabin"
		code={`
			let fifteen = add_10(5);
		`}
	/>

	<h2 id="compile-time-parameters">Compile-Time Parameters</h2>

	<p>
		<b>Compile-time parameters</b>
		are just like regular parameters, except that when the action is called, the argument passed to the
		parameter needs to be
		<b>known at compile-time</b>
		. These are declared with angle brackets (
		<code>&lt;</code>
		and
		<code>&gt;</code>
		):
	</p>

	<Snippet
		language="cabin"
		code={`
			let add_10 = action<number: Number>: Number {
				return is number + 10;
			};
		`}
	/>

	<p>Calling it is the same, just with angle brackets:</p>

	<Snippet
		language="cabin"
		code={`
			let fifteen = add_10<5>;
		`}
	/>

	<p>
		The difference here is subtle; In this case, these two expressions are exactly the same.
		However, with our compile-time action, this isn't valid:
	</p>

	<Snippet
		language="cabin"
		code={`
			let fifteen = add_10<run(5)>;
		`}
	/>

	<p>
		We haven't talked about <code>run</code>
		yet, but it forces its inner expression to delay evaluation until runtime. In the above case, an
		error will be thrown, because the value being passed isn't resolved at compile-time.
	</p>

	<p>
		Actions can also have both regular and compile-time parameters. The compile-time parameters <b>
			must come before
		</b>
		the regular parameters:
	</p>

	<Snippet
		language="cabin"
		code={`
			let add = action<a: Number>(b: Number): Number {
				return is a + b;
			};
		`}
	/>

	<p>Additionally, compile-time parameters can be used as types for regular parameters:</p>

	<Snippet
		language="cabin"
		code={`
			let log = action<Type: Any>(argument: Type) {
				print(argument);
			};
		`}
	/>

	<p>
		As a shorthand, when using <code>Any</code>
		as the type for a compile-time parameter, the type can be ommitted and it will automatically be set
		to
		<code>Any</code>
		. So, the above can be shortened to:
	</p>

	<Snippet
		language="cabin"
		code={`
			let log = action<Type>(argument: Type) {
				print(argument);
			};
		`}
	/>

	<p>
		Lastly, when calling an action where a compile-time parameter is used as a regular parameter's
		type, the compile-time argument can often be inferred:
	</p>

	<Snippet
		language="cabin"
		code={`
			let log = action<Type>(argument: Type) {
				print(argument);
			};

			log("Hello"); # Type is inferred
		`}
	/>

	<p>
		Type inference in cabin is tricky. When a compile-time parameter's type is inferred, it gets
		inferred to be the <b>most narrow group possible</b>
		. For example, let's look at this signature:
	</p>

	<Snippet
		language="cabin"
		code={`
			let func = action<Type>(a: Type, b: Type) {};
		`}
	/>

	<p>And, for example, this call:</p>

	<Snippet
		language="cabin"
		code={`
			func("Hello", "world!");
		`}
	/>

	<p>
		Should this be allowed? You might intuitively think yes (and you'd be right), but it's more
		subtle than you might think: The variables <code>"Hello"</code>
		and
		<code>"world!"</code>
		<b>have different types</b>
		. The type of
		<code>"Hello"</code>
		is the literal string
		<code>"Hello"</code>
		(as in, that's the only possible value it could take) and
		<code>"world!"</code>
		is the literal string
		<code>"world!"</code>
		. These are
		<b>distinct</b>
		.
	</p>

	<p>
		However, Cabin still allows this call&mdash;even though these are of different types, when the
		compiler has to infer a type parameter like this, it uses the most narrow
		<b>group</b>
		possible (or
		<code>either</code>
		, etc.). In this case, that's
		<code>Text</code>
		.
	</p>
</TutorialDocument>
