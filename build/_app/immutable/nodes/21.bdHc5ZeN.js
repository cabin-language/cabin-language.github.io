import"../chunks/CWj6FrbW.js";import"../chunks/wPM4U2Nx.js";import{$ as p,s as e,f as g}from"../chunks/ChQ8i3mT.js";import{h as u}from"../chunks/3l18Sfkq.js";import{t as m,a as b}from"../chunks/CwLvwI_u.js";import{S as a}from"../chunks/7Ikl-ixd.js";import{T as f}from"../chunks/CU_wdFVd.js";var w=m(`<h1>Pattern Matching</h1> <h2 id="is-variant"><code>is</code> Expressions</h2> <p>When using <code>eithers</code> , we need a way to check if a value is a certain variant. We can use the <code>is</code> keyword for this.</p> <p>Let's look at this <code>either</code> :</p> <!> <p>Using <code>is</code> looks like this:</p> <!> <p>Don't confuse this with using <code>is</code> for control flow. Some expression <code>a is b</code> will be interpreted as a control flow statement if and only if it's being used as a top-level statement.
		In any other case, this expression is interpreted as a pattern match.</p> <h2 id="conditional-let-bindings">Conditional Bindings</h2> <p>After the <code>is</code> check, we can use <code>as</code> to <b>bind</b> to the subtype:</p> <!> <p>This syntax is only valid in the context of <code>if &lt;expression&gt; == &lt;either-variant&gt;</code> (and <code>match</code> blocks, which we're about to discuss).</p> <h2 id="match-blocks"><code>match</code> Blocks</h2> <p><code>match</code> blocks are syntactic sugar for chained <code>if ... otherwise if</code> blocks. Let's say we want to handle each case separately. Using what we already know, we might try
		to do this with chained <code>if</code> expressions:</p> <!> <p>It's ugly, and worse, we can't enforce that that catch-all <code>otherwise</code> block is unreachable. Instead, we can use a <code>match</code> block:</p> <!> <p><code>otherwise</code> can be used as a catch-all case:</p> <!> <p>Remember, blocks are expressions in Cabin, so we can run arbitrary statements in a match branch
		using a block:</p> <!>`,1);function I(h){u(t=>{p.title="Pattern Matching  •  Cabin Docs"}),f(h,{page:"Pattern Matching",children:(t,v)=>{var c=w(),i=e(g(c),8);a(i,{language:"cabin",code:`
			let Shape = either {
				rectangle: Rectangle,
				circle: Circle,
				triangle: Triangle
			};
		`});var r=e(i,4);a(r,{language:"cabin",code:`
			if shape is Shape.circle {
				print("It's a circle!");
			};
		`});var o=e(r,8);a(o,{language:"cabin",code:`
			if shape is Shape.rectangle as rectangle {
				print("Area: {rectangle.area()}");
			};
		`});var s=e(o,8);a(s,{language:"cabin",code:`
			let area = if shape == Shape.rectangle as rectangle {
				it is rectangle.area();
			} otherwise if shape == Shape.circle as circle {
				it is circle.area();
			} otherwise if shape == Shape.triangle as triangle {
				it is triangle.area();
			} otherwise {
				# unreachable
				it is 0;
			};
		`});var n=e(s,4);a(n,{language:"cabin",code:`
			let area = match shape {
				Shape.rectangle as rectangle => rectangle.area(),
				Shape.circle as circle => circle.area(),
				Shape.triangle as triangle => triangle.area(),
			};
		`});var l=e(n,4);a(l,{language:"cabin",code:`
			let area = match shape {
				Shape.rectangle as rectangle => rectangle.area(),
				Shape.circle as circle => circle.area(),
				otherwise => 0
			};
		`});var d=e(l,4);a(d,{language:"cabin",code:`
			let value = match attempt {
				error as err => {
					print("Error: {err}");
					return is error(err);
				},
				success as success_value => success_value
			};
		`}),b(t,c)}})}export{I as component};
