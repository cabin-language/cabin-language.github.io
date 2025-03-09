import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{$ as d,s as o,f as u,n as _}from"../chunks/BydpiCg8.js";import{h as b}from"../chunks/Bn7yGRp9.js";import{t as a,a as t}from"../chunks/Dt90oPg1.js";import{D as f}from"../chunks/BzOU4ukw.js";import{S as n}from"../chunks/CShp_DQN.js";var g=a(`<pre>let say_hello = action &lbrace;
    print("hello");
&rbrace;;
</pre>`),v=a(`<pre>let say_hello = action &lbrace;
    print("hello");
&rbrace;;

say_hello(); # prints "hello"
</pre>`),$=a(`<pre>let get_hello = action: Text &lbrace;
    return is "hello";
&rbrace;;

let hello = get_hello();
print(hello);
</pre>`),y=a(`<h1>Actions</h1> <p><b>Actions</b> are ways to store a block of Cabin code without running it eagerly; They are analagous to a function
		in other languages:</p> <!> <p>This code will <b>not</b> print anything; Instead, it stores the <i>action</i> of printing in a binding (in this case <code>say_hello</code> ).</p> <p>To run the code in an action, we use parentheses after the action name:</p> <!> <h2 id="return-values">Return Values</h2> <p>Actions can specify a "return value". This is a value that the action "returns" to the caller.</p> <!> <h2 id="parameters">Parameters</h2> <h2 id="compile-time-parameters">Compile-Time Parameters</h2>`,1);function k(c){b(i=>{d.title="Actions  •  Cabin Docs"}),f(c,{page:"Actions",children:(i,P)=>{var l=y(),s=o(u(l),4);n(s,{children:(e,h)=>{var r=g();t(e,r)}});var p=o(s,6);n(p,{children:(e,h)=>{var r=v();t(e,r)}});var m=o(p,6);n(m,{children:(e,h)=>{var r=$();t(e,r)}}),_(4),t(i,l)},$$slots:{default:!0}})}export{k as component};
