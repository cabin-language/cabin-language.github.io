import"../chunks/CWj6FrbW.js";import"../chunks/wPM4U2Nx.js";import{s as e,f as l,n as m}from"../chunks/ChQ8i3mT.js";import{t as h,a as u}from"../chunks/CwLvwI_u.js";import{S as t}from"../chunks/DCmLAtqY.js";import{T as g}from"../chunks/BuuoEnqP.js";var b=h(`<h1>Optionals &amp; Errors</h1> <p>Optionals and erorrs are an important part of writing safe Cabin code. Conveniently, they are
		mostly just implemented as bindings in the standard library, with very little of their own
		special syntax to learn.</p> <h2>Optionals</h2> <p>We'll begin with the <code>Optional</code> either. The <code>Optional</code> either is defined like so in the standard library:</p> <!> <p>As we can see here, <code>Optional</code> is a simple either that can be either some data, or <code>nothing</code> . For conenience, <code>Optional.nothing</code> and <code>Optional.some</code> are automatically defined in the global scope as <code>nothing</code> and <code>some</code> .</p> <p>The purpose of <code>Optional</code> is to indicate that a value may or may not be present. For example, let's say we want to have a <code>Person</code> group that may or may not have a middle name. We can represent that using <code>Optional</code> like so:</p> <!> <h2>Attempts</h2> <p>An <code>Attempt</code> is a value that may be an error. It is defined like so:</p> <!> <p>Similar to <code>Optional</code> , The <code>Attempt.success</code> and <code>Attempt.error</code> variants are automatically added to the global scope for convenience.</p> <p>Typically, <code>Attempts</code> are used as action return types when something could go wrong. For example, let's say we wanted to
		make an action that takes two integers and divides them. What do we do when the denominator is 0?
		Do we just return 0? Or a really big number? This is where <code>Attempt</code> can come in handy to signify that an error might happen:</p> <!> <h2>The <code>?</code> and <code>!</code> Operators</h2> <p>Often, an action will return an <code>Attempt</code> or <code>Optional</code> that relies on several sub-actions resolving to <code>some</code> or <code>success</code> . For example, here's a loose outline of a declaration parse function:</p> <!> <p>Yikes! That's a mess. This is where the <code>!</code> operator comes in. The <code>!</code> operator is a postfix operator that returns an attempt from the current action if it's an error.
		So, our above action would look like this instead:</p> <!> <p>Much better! The <code>!</code> operator helps reduce boilerplate code for error handling.</p>`,1);function T(c){g(c,{page:"Optionals & Errors",children:(d,f)=>{var o=b(),a=e(l(o),8);t(a,{language:"cabin",code:`
			let Optional = either<Data> {
				some: Data,
				nothing
			};
		`});var r=e(a,6);t(r,{language:"cabin",code:`
			let Person = group {
				first_name: Text,
				last_name: Text,

				middle_name: Optional<Text>
			};

			let john = new Person {
				first_name = "john",
				last_name = "doe",
				middle_name = nothing
			};

			let jane = new Person {
				first_name = "jane",
				last_name = "doe",
				middle_name = some("marie")
			};
		`});var n=e(r,6);t(n,{language:"cabin",code:`
			let Attempt = either<Data, Error> {
				success: Data,
				error: Error,
			};
		`});var i=e(n,6);t(i,{language:"cabin",code:`
			let divide = action(a: Number, b: Number): Attempt<Number, Text> {
				if b == 0 {
					it is error("Attempted to divide by 0");
				};

				it is a / b;
			};
		`});var s=e(i,6);t(s,{language:"cabin",code:`
			let parse_declaration = action(tokens: TokenList): Attempt<Declaration, Text> {
				match tokens.pop("let") { 
					Attempt.error(error) { 
						return is error; 
					}, 
					otherwise {} 
				};
				let name = match tokens.pop("identifier") { 
					Attempt.error(error) { 
						return is error; 
					} 
					Attempt.success(value) {
						it is value;
					}
				};
				match tokens.pop("=") { 
					Attempt.error(error) { 
						return is error; 
					}, 
					otherwise {} 
				};
				let value = match parse_expression(tokens) { 
					Attempt.error(error) { 
						return is error; 
					} 
					Attempt.success(expression) {
						it is expression;
					}
				};

				return is success(new Declaration { name = name, value = value });
			};
		`});var p=e(s,4);t(p,{language:"cabin",code:`
			let parse_declaration = action(#[editable] tokens: TokenList): Attempt<Declaration, Text> {
				tokens.pop("let")!;
				let name = tokens.pop("identifier")!;
				tokens.pop("=")!;
				let value = parse_expression(tokens)!;

				return is success(new Declaration { name = name, value = value });
			};
		`}),m(2),u(d,o)}})}export{T as component};
