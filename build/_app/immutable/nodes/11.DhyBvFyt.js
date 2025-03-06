import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{$ as v,s as o,f as $,n as y}from"../chunks/DXkR1yX0.js";import{h as P}from"../chunks/CusXyDLi.js";import{t as r,a}from"../chunks/BldIr1EY.js";import{D as w}from"../chunks/uttUc3sb.js";import{S as i}from"../chunks/9HPpsEv7.js";var x=r(`<pre>let Person = group &lbrace;
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
</pre>`),W=r(`<pre>let Node = group&lt;Data&gt; &lbrace;
    data: Data,
    children: List&lt;Node&lt;Data&gt;&gt;
&rbrace;;
</pre>`),j=r(`<h1>Groups</h1> <p>Groups are a foundational part of Cabin's type system. A <code>group</code> is analagous to a <code>struct</code> in other languages. Groups are declared with <code>let</code> just like any other top-level binding:</p> <!> <p><code>groups</code> are instantiated with the <code>new</code> keyword:</p> <!> <p>The bindings inside a group (in this case <code>first_name</code> , <code>last_name</code> , and <code>age</code> ) are called <b>properties</b> . Properties can have default values specified in the group definition:</p> <!> <h2 id="nominality">Nominality</h2> <p>Groups in Cabin are <b>nominal</b> , which means that even if two groups have the same structure, you can't use them interchangeably:</p> <!> <h2 id="mutability">Mutability</h2> <p>Group properties are <b>immutable by default</b> . To mark a property as mutable, use the <code>#[editable]</code> tag:</p> <!> <h2 id="visibility">Visibility</h2> <p>By default, group properties are only visible in the file that the group is declared. To make a
		property visible elsewhere, use the <code>#[visible]</code> tag:</p> <!> <h2 id="compile-time-parameters">Compile-Time Parameters</h2> <p>Groups can take something known as <b>compile-time parameters</b> . We'll talk in more detail about these in the next section on <code>actions</code> , but the idea is that they're parameters on the group definition, similar to a function.</p> <!> <p>Then, when using this group, we want to pass a value to this parameter:</p> <!> <p>The important thing to understand about these parameters is that the value of the parameter must
		be a <b>type</b> . "Type" is a somewhat confusing term because it means something different in Cabin than it does
		in most other languages; In Cabin, a "type" is just a value that is 1. fully known at compile-time
		and 2. not marked <code>#[editable]</code> . Typical examples of types are <code>Text</code> and <code>Number</code> , but <code>"hello"</code> is a type, <code>10</code> is a type, and even an <code>if</code> expression can be a type, as long as its fully resolveable at compile-time.</p> <p>With that in mind, compile-time parameters have a nice shorthand where we can omit their type:</p> <!> <p>When ommitting the type of a compile-time parameter, it is automatically inferred as <code>Anything</code> .</p>`,1);function z(f){P(s=>{v.title="Groups  •  Cabin Docs"}),w(f,{page:"Groups",children:(s,L)=>{var l=j(),p=o($(l),4);i(p,{children:(e,n)=>{var t=x();a(e,t)},$$slots:{default:!0}});var d=o(p,4);i(d,{children:(e,n)=>{var t=T();a(e,t)},$$slots:{default:!0}});var c=o(d,4);i(c,{children:(e,n)=>{var t=k();a(e,t)},$$slots:{default:!0}});var m=o(c,6);i(m,{children:(e,n)=>{var t=N();a(e,t)},$$slots:{default:!0}});var u=o(m,6);i(u,{children:(e,n)=>{var t=D();a(e,t)},$$slots:{default:!0}});var h=o(u,6);i(h,{children:(e,n)=>{var t=G();a(e,t)},$$slots:{default:!0}});var b=o(h,6);i(b,{children:(e,n)=>{var t=C();a(e,t)},$$slots:{default:!0}});var g=o(b,4);i(g,{children:(e,n)=>{var t=A();a(e,t)},$$slots:{default:!0}});var _=o(g,6);i(_,{children:(e,n)=>{var t=W();a(e,t)},$$slots:{default:!0}}),y(2),a(s,l)},$$slots:{default:!0}})}export{z as component};
