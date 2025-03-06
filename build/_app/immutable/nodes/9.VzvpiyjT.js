import"../chunks/CWj6FrbW.js";import"../chunks/DTuzj3NS.js";import{$ as m,s as n,f as u,n as b}from"../chunks/D2R92oOg.js";import{h as y}from"../chunks/ChMeJBU0.js";import{t,a}from"../chunks/hktnC11W.js";import{D as w}from"../chunks/waNSgNVq.js";import{S as r}from"../chunks/Dbf8J8IC.js";var $=t(`<pre>let name = "danny";

if name == "danny" &lbrace;
    print("hi danny");
&rbrace;
</pre>`),v=t(`<pre>let name = "danny";

if name == "danny" &lbrace;
    print("hi danny");
&rbrace; 

otherwise &lbrace;
    print("hi... someone else...");
&rbrace;;
</pre>`),_=t(`<pre>let name = "danny";

if name == "danny" &lbrace;
    print("hi danny");
&rbrace; 

otherwise if name == "sam" &lbrace;
    print("hi sam");
&rbrace;

otherwise &lbrace;
    print("hi... someone else...");
&rbrace;;
</pre>`),g=t(`<pre>let name = "danny";

let last_name = if name == "danny" &lbrace;
    it is "fenton";
&rbrace; otherwise &lbrace;
    it is "manson";
&rbrace;;
</pre>`),x=t(`<h1>If Expressions</h1> <p>Similar to most languages, the <code>if</code> keyword is used to declare a conditional block that
		is only evaluated if a condition is true:</p> <!> <p>Note that no parentheses are required around the <code>if</code> condition, but the braces aroud
		the body of the <code>if</code> <i>are</i> required.</p> <p>Additionally, note the semicolon after the <code>if</code>; it's required. This is a statement
		just like any other, and statements end with a semicolon.</p> <p>Also, Cabin has no concept of "truthy" or "falsy"; <code>if</code> conditions expect a <code>Boolean</code> and only a <code>Boolean</code>.</p> <h2 id="otherwise">Otherwise Blocks</h2> <p>An <code>if</code> expression can have an accompanying <code>otherwise</code> block, which runs
		if the condition is <code>false</code>:</p> <!> <p><code>otherwise</code> may also be followed by another <code>if</code> condition:</p> <!> <h2 id="expressions">Ifs as expressions</h2> <p><code>if</code> can actually be used as an expression, similar to what you might find in a more functional
		language. Here's an example of what that looks like:</p> <!> <p>This syntax may look a lttle strange; We'll explain it more soon in the section on <a href="/docs/control-flow" class="svelte-172a08r">Control Flow</a>. For now, just understand that the value after <code>it is</code> is what gets assigned to <code>last_name</code>, depending on whether the condition is true.</p> <p>Note that when using an <code>if</code> as an expression like this, it <i>must</i> have an <code>otherwise</code> block without a condition. It may also contain conditional <code>otherwise if</code> blocks in between, but it needs to have a final catch-all <code>otherwise</code> block.</p>`,1);function E(p){y(s=>{m.title="If Expressions • Cabin Docs"}),w(p,{page:"If Expressions",children:(s,k)=>{var d=x(),c=n(u(d),4);r(c,{children:(e,i)=>{var o=$();a(e,o)},$$slots:{default:!0}});var l=n(c,12);r(l,{children:(e,i)=>{var o=v();a(e,o)},$$slots:{default:!0}});var h=n(l,4);r(h,{children:(e,i)=>{var o=_();a(e,o)},$$slots:{default:!0}});var f=n(h,6);r(f,{children:(e,i)=>{var o=g();a(e,o)},$$slots:{default:!0}}),b(4),a(s,d)},$$slots:{default:!0}})}export{E as component};
