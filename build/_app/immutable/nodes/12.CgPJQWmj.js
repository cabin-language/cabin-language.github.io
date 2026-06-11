import"../chunks/CWj6FrbW.js";import"../chunks/wPM4U2Nx.js";import{$ as p,s as e,f as u,n as h}from"../chunks/ChQ8i3mT.js";import{h as m}from"../chunks/3l18Sfkq.js";import{t as g,a as v}from"../chunks/CwLvwI_u.js";import{S as a}from"../chunks/7Ikl-ixd.js";import{T as f}from"../chunks/CU_wdFVd.js";var y=g(`<h1>Declarations</h1> <p>In Cabin, bindings are declared with the&nbsp; <code>let</code> keyword:</p> <!> <p>Declarations&nbsp; <i>must</i> be assigned an initial value. This isn't ever allowed:</p> <!> <h2 id="mutability">Mutability</h2> <p>By default, declarations create an&nbsp; <b>immutable unassignable binding</b> . This means the value cannot be changed. To declare a value as assignable, use the&nbsp; <code>editable</code> keyword:</p> <!> <p>To declare a value as mutable, specify that the <b>type itself</b> must be <code>editable</code> :</p> <!> <p>In this case, if the type can be inferred, it may be omitted:</p> <!> <p>To create a value which is both assignable and mutable, use both:</p> <!> <p>Values marked as <code>editable</code> cannot be used as types. We'll talk more about types later.</p> <h2 id="visibility">Visibility</h2> <p>By default, declarations are hidden from other files. To expose them, use the <code>visible</code> keyword:</p> <!> <p>Note that <code>#[visible]</code> isn't valid for local variables, only top-level declarations and group fields, which we'll talk about
		later.</p>`,1);function B(d){m(i=>{p.title="Declarations • Cabin Docs"}),f(d,{page:"Declarations",children:(i,_)=>{var t=y(),l=e(u(t),4);a(l,{language:"cabin",code:"let x = 10;"});var o=e(l,4);a(o,{language:"cabin",code:"let x;"});var c=e(o,6);a(c,{language:"cabin",code:`
		let editable circle = some_circle;
		circle = other_circle;
	`});var r=e(c,4);a(r,{language:"cabin",code:`
		let circle: editable Circle = some_circle;
		circle.radius = 10;
	`});var n=e(r,4);a(n,{language:"cabin",code:`
		let circle: editable = some_circle;
		circle.radius = 10;
	`});var s=e(n,4);a(s,{language:"cabin",code:`
		let editable circle: editable = some_circle;
		circle = other_circle;
		circle.radius = 10;
	`});var b=e(s,8);a(b,{language:"cabin",code:`
		let visible x = 10;
	`}),h(2),v(i,t)}})}export{B as component};
