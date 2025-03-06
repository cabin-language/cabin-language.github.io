import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{$ as m,s as o,f as d,n as $}from"../chunks/DXkR1yX0.js";import{h as f}from"../chunks/CusXyDLi.js";import{t as a,a as r}from"../chunks/BldIr1EY.js";import{D as _}from"../chunks/DrpqESHN.js";import{S as n}from"../chunks/9HPpsEv7.js";var b=a(`<pre>let say_hello = action &lbrace;
    print("hello");
&rbrace;;
</pre>`),g=a(`<pre>let say_hello = action &lbrace;
    print("hello");
&rbrace;;

say_hello(); # prints "hello"
</pre>`),v=a(`<pre>let get_hello = action: Text &lbrace;
    return is "hello";
&rbrace;;

let hello = get_hello();
print(hello);
</pre>`),y=a(`<h1>Actions</h1> <p><b>Actions</b> are ways to store a block of Cabin code without running it eagerly; They are analagous to a function
		in other languages:</p> <!> <p>This code will <b>not</b> print anything; Instead, it stores the <i>action</i> of printing in a binding (in this case <code>say_hello</code> ).</p> <p>To run the code in an action, we use parentheses after the action name:</p> <!> <h2 id="return-values">Return Values</h2> <p>Actions can specify a "return value". This is a value that the action "returns" to the caller.</p> <!> <h2 id="parameters">Parameters</h2> <h2 id="compile-time-parameters">Compile-Time Parameters</h2>`,1);function k(c){f(i=>{m.title="Actions  •  Cabin Docs"}),_(c,{page:"Actions",children:(i,P)=>{var l=y(),s=o(d(l),4);n(s,{children:(e,h)=>{var t=b();r(e,t)},$$slots:{default:!0}});var p=o(s,6);n(p,{children:(e,h)=>{var t=g();r(e,t)},$$slots:{default:!0}});var u=o(p,6);n(u,{children:(e,h)=>{var t=v();r(e,t)},$$slots:{default:!0}}),$(4),r(i,l)},$$slots:{default:!0}})}export{k as component};
