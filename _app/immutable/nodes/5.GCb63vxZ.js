import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{$ as s,s as e,f as h,n as c}from"../chunks/CLrxCXow.js";import{h as p}from"../chunks/DR8CSxid.js";import{t as m,a as u}from"../chunks/DB0DeKnA.js";import{S as t}from"../chunks/C-fuNUsz.js";import{T as d}from"../chunks/DDh1FhEA.js";var g=m(`<h1>Actions</h1> <p><b>Actions</b> are ways to store a block of Cabin code without running it eagerly; They are analagous to a function
		in other languages:</p> <!> <p>This code will <b>not</b> print anything; Instead, it stores the <i>action</i> of printing in a binding (in this case <code>say_hello</code> ).</p> <p>To run the code in an action, we use parentheses after the action name:</p> <!> <h2 id="return-values">Return Values</h2> <p>Actions can specify a "return value". This is a value that the action "returns" to the caller.</p> <!> <h2 id="parameters">Parameters</h2> <h2 id="compile-time-parameters">Compile-Time Parameters</h2>`,1);function w(r){p(a=>{s.title="Actions  •  Cabin Docs"}),d(r,{page:"Actions",children:(a,f)=>{var o=g(),n=e(h(o),4);t(n,{language:"cabin",code:`
			let say_hello = action {
				print("hello");
			};
		`});var i=e(n,6);t(i,{language:"cabin",code:`
			let say_hello = action {
				print("hello");
			};

			say_hello(); # prints "hello"
		`});var l=e(i,6);t(l,{language:"cabin",code:`
			let get_hello = action: Text {
				return is "hello";
			};

			let hello = get_hello();
			print(hello);
		`}),c(4),u(a,o)}})}export{w as component};
