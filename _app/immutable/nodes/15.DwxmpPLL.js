import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{$ as d,s as e,f as c,n as l}from"../chunks/CoInYexW.js";import{h}from"../chunks/eUedGi1i.js";import{t as m,a as f}from"../chunks/CZgyuwJY.js";import{S as o}from"../chunks/DOGuWRaC.js";import{T as g}from"../chunks/BAhHPTym.js";var u=m(`<h1>Loops</h1> <h2 id="foreach">For-Each Loops</h2> <p>The first and most common type of loop is the <code>foreach</code> loop. The <code>foreach</code> loop allows looping over a list:</p> <!> <p>Just like <code>if</code> expressions, loops are terminated with a semicolon. This is a statement, and statements end with
		a semicolon.</p> <p>A traditional range-based loop can be made with the <code>.to()</code> action that exists on <code>Number</code> :</p> <!> <p>Cabin doesn't have a dedicated syntax for ranges; It simply reuses existing syntax with the <code>.to()</code> action.</p> <h2 id="while">While Loops</h2> <p>The other type of loop is the <code>while</code> loop. Like in other languages, it runs the body while its condition is true.</p> <!> <h2 id="expressions">Loops as Expressions</h2> <p>Just like <code>if</code> s, loops can be used as expressions. Typically you'll do this by putting an <code>if</code> inside the loop:</p> <!> <p>Once again, this syntax might look a little strange, but it'll be explained in the next section
		on <a href="/docs/control-flow" class="svelte-172a08r">Control Flow</a> . The takeaway from this example is that loops can be used as expressions. In this case, we iterate
		over a list of people, and if we find one with the first name <code>"danny"</code> , we break from the loop and assign that person to <code>danny</code> .</p>`,1);function L(r){h(n=>{d.title="Loops • Cabin Docs"}),g(r,{page:"Loops",children:(n,b)=>{var t=u(),a=e(c(t),6);o(a,{language:"cabin",code:`
			foreach ghost in ["skulker", "johnny", "ember"] {
				print(ghost);
			};
		`});var i=e(a,6);o(i,{language:"cabin",code:`
			foreach number in 1.to(10) {
				print(number);
			}
		`});var s=e(i,8);o(s,{language:"cabin",code:`
			#[editable] let confirm = "";

			while confirm != "yes" and confirm != "no" {
				confirm = input("Enter yes or no: ");
			};
		`});var p=e(s,6);o(p,{language:"cabin",code:`
			let danny = foreach person in people {
				if person.first_name == "danny" {
					it is danny;
				};
			};
		`}),l(2),f(n,t)}})}export{L as component};
