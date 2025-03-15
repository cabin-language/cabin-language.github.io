import"../chunks/CWj6FrbW.js";import"../chunks/wPM4U2Nx.js";import{$ as f,s as e,f as y}from"../chunks/ChQ8i3mT.js";import{h as _}from"../chunks/3l18Sfkq.js";import{t as v,a as w}from"../chunks/CwLvwI_u.js";import{S as a}from"../chunks/DCmLAtqY.js";import{T}from"../chunks/BuuoEnqP.js";var A=v(`<h1>Actions</h1> <p><b>Actions</b> are ways to store a block of Cabin code without running it eagerly; They are analagous to a function
		in other languages:</p> <!> <p>This code will <b>not</b> print anything; Instead, it stores the <i>action</i> of printing in a binding (in this case <code>say_hello</code> ).</p> <p>To run the code in an action, we use parentheses after the action name:</p> <!> <h2 id="return-values">Return Values</h2> <p>Actions can specify a "return value". This is a value that the action "returns" to the caller.</p> <!> <h2 id="parameters">Parameters</h2> <p>Actions can take what's called <b>parameters</b> . Parameters are values in the action that aren't known until the action is called. To add parameters
		to an action, surround them with parentheses:</p> <!> <p>Now, when the action is called, it needs to be passed an <b>argument</b> to the corresponding <b>parameters</b> using parentheses: :</p> <!> <h2 id="compile-time-parameters">Compile-Time Parameters</h2> <p><b>Compile-time parameters</b> are just like regular parameters, except that when the action is called, the argument passed to the
		parameter needs to be <b>known at compile-time</b> . These are declared with angle brackets ( <code>&lt;</code> and <code>&gt;</code> ):</p> <!> <p>Calling it is the same, just with angle brackets:</p> <!> <p>The difference here is subtle; In this case, these two expressions are exactly the same.
		However, with our compile-time action, this isn't valid:</p> <!> <p>We haven't talked about <code>run</code> yet, but the point is just that if the argument to a compile-time parameter isn't known at compile-time,
		an error is thrown.</p> <p>Actions can also have both regular and compile-time parameters. The compile-time parameters <b>must come before</b> the regular parameters:</p> <!> <p>Additionally, compile-time parameters can be used as types for regular parameters:</p> <!> <p>As a shorthand, when using <code>Anything</code> as the type for a compile-time parameter, the type can be ommitted and it will automatically be set
		to <code>Anything</code> . So, the above can be shortened to:</p> <!> <p>Lastly, when calling an action where a compile-time parameter is used as a regular parameter's
		type, the compile-time argument can often be inferred:</p> <!>`,1);function D(g){_(t=>{f.title="Actions  •  Cabin Docs"}),T(g,{page:"Actions",children:(t,k)=>{var n=A(),o=e(y(n),4);a(o,{language:"cabin",code:`
			let say_hello = action {
				print("hello");
			};
		`,output:""});var r=e(o,6);a(r,{language:"cabin",code:`
			let say_hello = action {
				print("hello");
			};

			say_hello();
		`,output:"hello"});var i=e(r,6);a(i,{language:"cabin",code:`
			let get_hello = action: Text {
				return is "hello";
			};

			let hello = get_hello();
			print(hello);
		`,output:"hello"});var l=e(i,6);a(l,{language:"cabin",code:`
			let add_10 = action(number: Number): Number {
				return is number + 10;
			};
		`});var s=e(l,4);a(s,{language:"cabin",code:`
			let fifteen = add_10(5);
		`});var c=e(s,6);a(c,{language:"cabin",code:`
			let add_10 = action<number: Number>: Number {
				return is number + 10;
			};
		`});var p=e(c,4);a(p,{language:"cabin",code:`
			let fifteen = add_10<5>;
		`});var m=e(p,4);a(m,{language:"cabin",code:`
			let fifteen = add_10<run(5)>;
		`});var d=e(m,6);a(d,{language:"cabin",code:`
			let add = action<a: Number>(b: Number): Number {
				return is a + b;
			};
		`});var h=e(d,4);a(h,{language:"cabin",code:`
			let log = action<Type: Anything>(argument: Type) {
				print(argument);
			};
		`});var u=e(h,4);a(u,{language:"cabin",code:`
			let log = action<Type>(argument: Type) {
				print(argument);
			};
		`});var b=e(u,4);a(b,{language:"cabin",code:`
			let log = action<Type>(argument: Type) {
				print(argument);
			};

			log("Hello"); # Type is inferred
		`}),w(t,n)}})}export{D as component};
