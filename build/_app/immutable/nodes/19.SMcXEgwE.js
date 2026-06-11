import"../chunks/CWj6FrbW.js";import"../chunks/wPM4U2Nx.js";import{$ as l,s as o,f as d,n as c}from"../chunks/ChQ8i3mT.js";import{h}from"../chunks/3l18Sfkq.js";import{t as m,a as f}from"../chunks/CwLvwI_u.js";import{S as e}from"../chunks/7Ikl-ixd.js";import{T as u}from"../chunks/CU_wdFVd.js";var g=m(`<h1>Loops</h1> <h2 id="foreach">ForLoops</h2> <p>The first and most common type of loop is the <code>for</code> loop. The <code>for</code> loop allows looping over a list:</p> <!> <p>Just like <code>if</code> expressions, loops are terminated with a semicolon. This is a statement, and statements end with
		a semicolon.</p> <p>A traditional range-based loop can be made with the <code>.to()</code> action that exists on <code>Number</code> :</p> <!> <h2 id="while">While Loops</h2> <p>The other type of loop is the <code>while</code> loop. Like in other languages, it runs the body while its condition is true.</p> <!> <h2 id="expressions">Loops as Expressions</h2> <p>Just like <code>if</code> s, loops can be used as expressions. Typically you'll do this by putting an <code>if</code> inside the loop:</p> <!> <p>Once again, this syntax might look a little strange, but it'll be explained in the next section
		on <a href="/learn/control-flow" class="svelte-fzl0hv">Control Flow</a> . The takeaway from this example is that loops can be used as expressions. In this case, we iterate
		over a list of people, and if we find one with the first name <code>"danny"</code> , we break from the loop and assign that person to <code>danny</code> .</p>`,1);function L(r){h(n=>{l.title="Loops • Cabin Docs"}),u(r,{page:"Loops",children:(n,b)=>{var t=g(),i=o(d(t),6);e(i,{language:"cabin",code:`
			for ghost in ["skulker", "johnny", "ember"] {
				print(ghost);
			};
		`,output:`
			skulker
			johnny
			ember
		`});var a=o(i,6);e(a,{language:"cabin",code:`
			for number in 1.to(10) {
				print(number);
			}
		`,output:`
			1
			2
			3
			4
			5
			6
			7
			8
			9
			10
		`});var s=o(a,6);e(s,{language:"cabin",code:`
			let editable confirm = "";

			while confirm != "yes" and confirm != "no" {
				confirm = input("Enter yes or no: ");
			};
		`});var p=o(s,6);e(p,{language:"cabin",code:`
			let danny = for person in people {
				if person.first_name == "danny" {
					it is person;
				};
			};
		`}),c(2),f(n,t)}})}export{L as component};
