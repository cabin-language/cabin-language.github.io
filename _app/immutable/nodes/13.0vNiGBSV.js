import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{$ as r,s as e,f as l,n as h}from"../chunks/DAmSNls5.js";import{h as p}from"../chunks/ijsLc-5c.js";import{t as m,a as f}from"../chunks/CNq40Ifi.js";import{S as o}from"../chunks/DIwq8TxL.js";import{T as u}from"../chunks/DTF7GliJ.js";var y=m(`<h1>If Expressions</h1> <p>Similar to most languages, the <code>if</code> keyword is used to declare a conditional block that is only evaluated if a condition is true:</p> <!> <p>Note that no parentheses are required around the <code>if</code> condition, but the braces aroud the body of the <code>if</code> <i>are</i> required.</p> <p>Additionally, note the semicolon after the <code>if</code> ; it's required. This is a statement just like any other, and statements end with a semicolon.</p> <p>Also, Cabin has no concept of "truthy" or "falsy"; <code>if</code> conditions expect a <code>Boolean</code> and only a <code>Boolean</code> .</p> <h2 id="otherwise">Otherwise Blocks</h2> <p>An <code>if</code> expression can have an accompanying <code>otherwise</code> block, which runs if the condition is <code>false</code> :</p> <!> <p><code>otherwise</code> may also be followed by another <code>if</code> condition:</p> <!> <h2 id="expressions">Ifs as expressions</h2> <p><code>if</code> can actually be used as an expression, similar to what you might find in a more functional language.
		Here's an example of what that looks like:</p> <!> <p>This syntax may look a lttle strange; We'll explain it more soon in the section on <a href="/learn/control-flow" class="svelte-172a08r">Control Flow</a> . For now, just understand that the value after <code>it is</code> is what gets assigned to <code>last_name</code> , depending on whether the condition is true.</p> <p>Note that when using an <code>if</code> as an expression like this, it <i>must</i> have an <code>otherwise</code> block without a condition. It may also contain conditional <code>otherwise if</code> blocks in between, but it needs to have a final catch-all <code>otherwise</code> block.</p>`,1);function I(d){p(n=>{r.title="If Expressions • Cabin Docs"}),u(d,{page:"If Expressions",children:(n,w)=>{var a=y(),i=e(l(a),4);o(i,{language:"cabin",code:`
			let name = "danny";

			if name == "danny" {
				print("hi danny");
			}
		`});var t=e(i,12);o(t,{language:"cabin",code:`
			let name = "danny";

			if name == "danny" {
				print("hi danny");
			}

			otherwise {
				print("hi... someone else...");
			};
		`});var s=e(t,4);o(s,{language:"cabin",code:`
			let name = "danny";

			if name == "danny" {
				print("hi danny");
			}

			otherwise if name == "sam" {
				print("hi sam");
			}

			otherwise {
				print("hi... someone else...");
			};
		`});var c=e(s,6);o(c,{language:"cabin",code:`
			let name = "danny";

			let last_name = if name == "danny" {
				it is "fenton";
			} otherwise {
				it is "manson";
			};
		`}),h(4),f(n,a)}})}export{I as component};
