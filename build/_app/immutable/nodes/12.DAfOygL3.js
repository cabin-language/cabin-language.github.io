import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{$ as f,q as o,o as y,z as $}from"../chunks/DneM_Zg5.js";import{h as P}from"../chunks/DhpMl-z_.js";import{t as r,a}from"../chunks/Ke2h0E31.js";import{D as w}from"../chunks/7eKlL1Ym.js";import{S as i}from"../chunks/BHDJhEEB.js";var x=r(`<pre>let Person = group &lbrace;
    first_name: Text,
    last_name: Text,
    age: Number
&rbrace;;
</pre>`),T=r(`<pre>let tucker = new Person &lbrace;
    first_name = "tucker",
    last_name = "foley",
    age = 14
&rbrace;;
</pre>`),k=r(`<pre>let Person = group &lbrace;
    first_name: Text,
    middle_name: Optional&lt;Text&gt; = nothing,
    last_name: Text,
    age: Number
&rbrace;;

# no need to specify middle name
let tucker = new Person &lbrace;
    first_name = "tucker",
    last_name = "foley",
    age = 14
&rbrace;;
</pre>`),N=r(`<pre>let Point = group &lbrace; x: Number, y: Number &rbrace;;
let Position = group &lbrace; x: Number, y: Number &rbrace;;

# this isn't allowed!
let point: Point = Position &lbrace; x = 10, y = 10 &rbrace;
</pre>`),D=r(`<pre>let Person = group &lbrace;
    #[editable] first_name: Text,
    last_name: Text,
    age: Number
&rbrace;;

let tucker = new Person &lbrace;
    first_name = "tucker",
    last_name = "foley",
    age = 14
&rbrace;;

tucker.first_name = "tuck";
</pre>`),G=r(`<pre>let Person = group &lbrace;
    #[visible] first_name: Text,

    middle_name: Optional&lt;Text&gt; = nothing,
    last_name: Text,
    age: Number
&rbrace;;
</pre>`),C=r(`<pre>let Node = group&lt;Data: Anything&gt; &lbrace;
    data: Data,
    children: List&lt;Node&lt;Data&gt;&gt;
&rbrace;;
</pre>`),A=r(`<pre>let node = new Node&lt;Text&gt; &lbrace;
    data = "node",
    children: []
&rbrace;;
</pre>`),I=r(`<pre>let Node = group&lt;Data&gt; &lbrace;
    data: Data,
    children: List&lt;Node&lt;Data&gt;&gt;
&rbrace;;
</pre>`),W=r(`<h1>Groups</h1> <p>In this section you'll learn about <b>groups</b> , a core part of Cabin programming.</p> <h2 id="introduction">Introduction</h2> <p>Groups are a foundational part of Cabin's type system. A <code>group</code> is analagous to a <code>struct</code> in other languages. Groups are declared with <code>let</code> just like any other top-level binding:</p> <!> <p><code>groups</code> are instantiated with the <code>new</code> keyword:</p> <!> <p>The bindings inside a group (in this case <code>first_name</code> , <code>last_name</code> , and <code>age</code> ) are called <b>properties</b> . Properties can have default values specified in the group definition:</p> <!> <h2 id="nominality">Nominality</h2> <p>Groups in Cabin are <b>nominal</b> , which means that even if two groups have the same structure, you can't use them interchangeably:</p> <!> <h2 id="mutability">Mutability</h2> <p>Group properties are <b>immutable by default</b> . To mark a property as mutable, use the <code>#[editable]</code> tag:</p> <!> <h2 id="visibility">Visibility</h2> <p>By default, group properties are only visible in the file that the group is declared. To make a
		property visible elsewhere, use the <code>#[visible]</code> tag:</p> <!> <h2 id="compile-time-parameters">Compile-Time Parameters</h2> <p>Groups can take something known as <b>compile-time parameters</b> . We'll talk in more detail about these in the next section on <code>actions</code> , but the idea is that they're parameters on the group definition, similar to a function.</p> <!> <p>Then, when using this group, we want to pass a value to this parameter:</p> <!> <p>The important thing to understand about these parameters is that the value of the parameter must
		be a <b>type</b> . "Type" is a somewhat confusing term because it means something different in Cabin than it does
		in most other languages; In Cabin, a "type" is just a value that is 1. fully known at compile-time
		and 2. not marked <code>#[editable]</code> . Typical examples of types are <code>Text</code> and <code>Number</code> , but <code>"hello"</code> is a type, <code>10</code> is a type, and even an <code>if</code> expression can be a type, as long as its fully resolveable at compile-time.</p> <p>With that in mind, compile-time parameters have a nice shorthand where we can omit their type:</p> <!> <p>When ommitting the type of a compile-time parameter, it is automatically inferred as <code>Anything</code> .</p>`,1);function V(_){P(s=>{f.title="Groups  •  Cabin Docs"}),w(_,{page:"Groups",children:(s,j)=>{var p=W(),l=o(y(p),8);i(l,{children:(e,n)=>{var t=x();a(e,t)}});var c=o(l,4);i(c,{children:(e,n)=>{var t=T();a(e,t)}});var d=o(c,4);i(d,{children:(e,n)=>{var t=k();a(e,t)}});var m=o(d,6);i(m,{children:(e,n)=>{var t=N();a(e,t)}});var h=o(m,6);i(h,{children:(e,n)=>{var t=D();a(e,t)}});var u=o(h,6);i(u,{children:(e,n)=>{var t=G();a(e,t)}});var b=o(u,6);i(b,{children:(e,n)=>{var t=C();a(e,t)}});var g=o(b,4);i(g,{children:(e,n)=>{var t=A();a(e,t)}});var v=o(g,6);i(v,{children:(e,n)=>{var t=I();a(e,t)}}),$(2),a(s,p)},$$slots:{default:!0}})}export{V as component};
