import{t as r,a as o,b}from"../chunks/Do8b9Fsz.js";import"../chunks/BVgGkzlK.js";import{s as l,f as v,n as a}from"../chunks/BFVeUpzy.js";import{D as f}from"../chunks/Cj5kn2Hk.js";import{S as i}from"../chunks/tNQputWa.js";var $=r("#[editable]<br>let x = 10;",1),g=r("#[visible]<br>let x = 10;",1),_=r(`<h1>Declarations</h1> <p>In Cabin, bindings are declared with the&nbsp;<code>let</code> keyword:</p> <!> <p>Declarations&nbsp;<i>must</i> be assigned an initial value. This isn't ever allowed:</p> <!> <h2 id="mutability">Mutability</h2> <p>By default, declarations create an&nbsp;<b>immutable binding</b>. This means the value cannot be
		changed. To declare a value as mutable, use the&nbsp;<code>#[editable]</code> tag:</p> <!> <p>We'll talk more about tags later. For now, just note the syntax.</p> <p>Values marked as <code>#[editable]</code> cannot be used as types.</p> <h2 id="visibility">Visibility</h2> <p>By default, declarations are hidden from other files. Similarly to<code>editable</code>, we do
		this with tags. In this case, the <code>#[visible]</code> tag is used:</p> <!> <p>Note that <code>#[visible]</code> isn't valid for local variables, only top-level declarations and
		group fields, which we'll talk about later.</p>`,1);function S(u){f(u,{page:"Declarations",children:(h,y)=>{var n=_(),d=l(v(n),4);i(d,{children:(e,s)=>{a();var t=b("let x = 10;");o(e,t)},$$slots:{default:!0}});var p=l(d,4);i(p,{children:(e,s)=>{a();var t=b("let x;");o(e,t)},$$slots:{default:!0}});var c=l(p,6);i(c,{children:(e,s)=>{a();var t=$();a(2),o(e,t)},$$slots:{default:!0}});var m=l(c,10);i(m,{children:(e,s)=>{a();var t=g();a(2),o(e,t)},$$slots:{default:!0}}),a(2),o(h,n)},$$slots:{default:!0}})}export{S as component};
