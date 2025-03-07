import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{$ as d,q as a,o as u,z as _}from"../chunks/DneM_Zg5.js";import{h as b}from"../chunks/DhpMl-z_.js";import{t as o,a as t}from"../chunks/Ke2h0E31.js";import{D as f}from"../chunks/CbiU2ppx.js";import{S as i}from"../chunks/Dfsqygma.js";var g=o(`<pre>let say_hello = action &lbrace;
    print("hello");
&rbrace;;
</pre>`),v=o(`<pre>let say_hello = action &lbrace;
    print("hello");
&rbrace;;

say_hello(); # prints "hello"
</pre>`),$=o(`<pre>let get_hello = action: Text &lbrace;
    return is "hello";
&rbrace;;

let hello = get_hello();
print(hello);
</pre>`),y=o(`<h1>Actions</h1> <p><b>Actions</b> are ways to store a block of Cabin code without running it eagerly; They are analagous to a function
		in other languages:</p> <!> <p>This code will <b>not</b> print anything; Instead, it stores the <i>action</i> of printing in a binding (in this case <code>say_hello</code> ).</p> <p>To run the code in an action, we use parentheses after the action name:</p> <!> <h2 id="return-values">Return Values</h2> <p>Actions can specify a "return value". This is a value that the action "returns" to the caller.</p> <!> <h2 id="parameters">Parameters</h2> <h2 id="compile-time-parameters">Compile-Time Parameters</h2>`,1);function k(c){b(n=>{d.title="Actions  •  Cabin Docs"}),f(c,{page:"Actions",children:(n,P)=>{var l=y(),s=a(u(l),4);i(s,{children:(e,h)=>{var r=g();t(e,r)}});var p=a(s,6);i(p,{children:(e,h)=>{var r=v();t(e,r)}});var m=a(p,6);i(m,{children:(e,h)=>{var r=$();t(e,r)}}),_(4),t(n,l)},$$slots:{default:!0}})}export{k as component};
