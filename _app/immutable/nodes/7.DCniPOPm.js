import"../chunks/CWj6FrbW.js";import"../chunks/wPM4U2Nx.js";import{$ as v,s as e,f as w,n as _}from"../chunks/ChQ8i3mT.js";import{h as T}from"../chunks/3l18Sfkq.js";import{t as k,a as A}from"../chunks/CwLvwI_u.js";import{S as t}from"../chunks/7Ikl-ixd.js";import{T as x}from"../chunks/CU_wdFVd.js";var N=k(`<h1>Actions</h1> <p><b>Actions</b> are ways to store a block of Cabin code without running it eagerly; They are analagous to a function
		in other languages:</p> <!> <p>This code will <b>not</b> print anything; Instead, it stores the <i>action</i> of printing in a binding (in this case <code>say_hello</code> ).</p> <p>To run the code in an action, we use parentheses after the action name:</p> <!> <h2 id="return-values">Return Values</h2> <p>Actions can specify a "return value". This is a value that the action "returns" to the caller.</p> <!> <h2 id="parameters">Parameters</h2> <p>Actions can take what's called <b>parameters</b> . Parameters are values in the action that aren't known until the action is called. To add parameters
		to an action, surround them with parentheses:</p> <!> <p>Now, when the action is called, it needs to be passed an <b>argument</b> to the corresponding <b>parameters</b> using parentheses: :</p> <!> <h2 id="compile-time-parameters">Compile-Time Parameters</h2> <p><b>Compile-time parameters</b> are just like regular parameters, except that when the action is called, the argument passed to the
		parameter needs to be <b>known at compile-time</b> . These are declared with angle brackets ( <code>&lt;</code> and <code>&gt;</code> ):</p> <!> <p>Calling it is the same, just with angle brackets:</p> <!> <p>The difference here is subtle; In this case, these two expressions are exactly the same.
		However, with our compile-time action, this isn't valid:</p> <!> <p>We haven't talked about <code>run</code> yet, but it forces its inner expression to delay evaluation until runtime. In the above case, an
		error will be thrown, because the value being passed isn't resolved at compile-time.</p> <p>Actions can also have both regular and compile-time parameters. The compile-time parameters <b>must come before</b> the regular parameters:</p> <!> <p>Additionally, compile-time parameters can be used as types for regular parameters:</p> <!> <p>As a shorthand, when using <code>Any</code> as the type for a compile-time parameter, the type can be ommitted and it will automatically be set
		to <code>Any</code> . So, the above can be shortened to:</p> <!> <p>Lastly, when calling an action where a compile-time parameter is used as a regular parameter's
		type, the compile-time argument can often be inferred:</p> <!> <p>Type inference in cabin is tricky. When a compile-time parameter's type is inferred, it gets
		inferred to be the <b>most narrow group possible</b> . For example, let's look at this signature:</p> <!> <p>And, for example, this call:</p> <!> <p>Should this be allowed? You might intuitively think yes (and you'd be right), but it's more
		subtle than you might think: The variables <code>"Hello"</code> and <code>"world!"</code> <b>have different types</b> . The type of <code>"Hello"</code> is the literal string <code>"Hello"</code> (as in, that's the only possible value it could take) and <code>"world!"</code> is the literal string <code>"world!"</code> . These are <b>distinct</b> .</p> <p>However, Cabin still allows this call&mdash;even though these are of different types, when the
		compiler has to infer a type parameter like this, it uses the most narrow <b>group</b> possible (or <code>either</code> , etc.). In this case, that's <code>Text</code> .</p>`,1);function W(y){T(a=>{v.title="Actions  •  Cabin Docs"}),x(y,{page:"Actions",children:(a,H)=>{var o=N(),n=e(w(o),4);t(n,{language:"cabin",code:`
			let say_hello = action {
				print("hello");
			};
		`,output:""});var i=e(n,6);t(i,{language:"cabin",code:`
			let say_hello = action {
				print("hello");
			};

			say_hello();
		`,output:"hello"});var r=e(i,6);t(r,{language:"cabin",code:`
			let get_hello = action: Text {
				return is "hello";
			};

			let hello = get_hello();
			print(hello);
		`,output:"hello"});var l=e(r,6);t(l,{language:"cabin",code:`
			let add_10 = action(number: Number): Number {
				return is number + 10;
			};
		`});var s=e(l,4);t(s,{language:"cabin",code:`
			let fifteen = add_10(5);
		`});var c=e(s,6);t(c,{language:"cabin",code:`
			let add_10 = action<number: Number>: Number {
				return is number + 10;
			};
		`});var p=e(c,4);t(p,{language:"cabin",code:`
			let fifteen = add_10<5>;
		`});var d=e(p,4);t(d,{language:"cabin",code:`
			let fifteen = add_10<run(5)>;
		`});var h=e(d,6);t(h,{language:"cabin",code:`
			let add = action<a: Number>(b: Number): Number {
				return is a + b;
			};
		`});var u=e(h,4);t(u,{language:"cabin",code:`
			let log = action<Type: Any>(argument: Type) {
				print(argument);
			};
		`});var m=e(u,4);t(m,{language:"cabin",code:`
			let log = action<Type>(argument: Type) {
				print(argument);
			};
		`});var b=e(m,4);t(b,{language:"cabin",code:`
			let log = action<Type>(argument: Type) {
				print(argument);
			};

			log("Hello"); # Type is inferred
		`});var g=e(b,4);t(g,{language:"cabin",code:`
			let func = action<Type>(a: Type, b: Type) {};
		`});var f=e(g,4);t(f,{language:"cabin",code:`
			func("Hello", "world!");
		`}),_(4),A(a,o)}})}export{W as component};
