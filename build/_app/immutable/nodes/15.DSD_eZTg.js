import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{$ as f,q as a,o as b,z as u}from"../chunks/DneM_Zg5.js";import{h as y}from"../chunks/DhpMl-z_.js";import{t,a as r}from"../chunks/Ke2h0E31.js";import{D as v}from"../chunks/CbiU2ppx.js";import{S as s}from"../chunks/Dfsqygma.js";var g=t(`<pre>foreach ghost in ["skulker", "johnny", "ember"] &lbrace;
    print(ghost);
&rbrace;;
</pre>`),w=t(`<pre>foreach number in 1.to(10) &lbrace;
    print(number);
&rbrace;;
</pre>`),$=t(`<pre>#[editable] let confirm = "";

while confirm != "yes" and confirm != "no" &lbrace;
    confirm = input("Enter yes or no: ");
&rbrace;;
</pre>`),x=t(`<pre>let danny = foreach person in people &lbrace;
    if person.first_name == "danny" &lbrace;
        it is danny;
    &rbrace;;
&rbrace;;
</pre>`),_=t(`<h1>Loops</h1> <h2 id="foreach">For-Each Loops</h2> <p>The first and most common type of loop is the <code>foreach</code> loop. The <code>foreach</code> loop allows looping over a list:</p> <!> <p>Just like <code>if</code> expressions, loops are terminated with a semicolon. This is a statement,
		and statements end with a semicolon.</p> <p>A traditional range-based loop can be made with the <code>.to()</code> action that exists on <code>Number</code>:</p> <!> <p>Cabin doesn't have a dedicated syntax for ranges; It simply reuses existing syntax with the <code>.to()</code> action.</p> <h2 id="while">While Loops</h2> <p>The other type of loop is the <code>while</code> loop. Like in other languages, it runs the body
		while its condition is true.</p> <!> <h2 id="expressions">Loops as Expressions</h2> <p>Just like <code>if</code>s, loops can be used as expressions. Typically you'll do this by
		putting an <code>if</code> inside the loop:</p> <!> <p>Once again, this syntax might look a little strange, but it'll be explained in the next section
		on <a href="/docs/control-flow" class="svelte-172a08r">Control Flow</a>. The takeaway from this example is that loops
		can be used as expressions. In this case, we iterate over a list of people, and if we find one
		with the first name <code>"danny"</code>, we break from the loop and assign that person to <code>danny</code>.</p>`,1);function I(h){y(i=>{f.title="Loops • Cabin Docs"}),v(h,{page:"Loops",children:(i,k)=>{var p=_(),c=a(b(p),6);s(c,{children:(e,n)=>{var o=g();r(e,o)}});var l=a(c,6);s(l,{children:(e,n)=>{var o=w();r(e,o)}});var d=a(l,8);s(d,{children:(e,n)=>{var o=$();r(e,o)}});var m=a(d,6);s(m,{children:(e,n)=>{var o=x();r(e,o)}}),u(2),r(i,p)},$$slots:{default:!0}})}export{I as component};
