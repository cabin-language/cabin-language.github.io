import"../chunks/CWj6FrbW.js";import"../chunks/wPM4U2Nx.js";import{$ as g,s as e,f as b,n as y}from"../chunks/ChQ8i3mT.js";import{h as f}from"../chunks/3l18Sfkq.js";import{t as _,a as v}from"../chunks/CwLvwI_u.js";import{S as a}from"../chunks/7Ikl-ixd.js";import{T as w}from"../chunks/CU_wdFVd.js";var T=_(`<h1>Groups</h1> <p>In this section you'll learn about <b>groups</b> , a core part of Cabin programming.</p> <h2 id="introduction">Introduction</h2> <p>Groups are a foundational part of Cabin's type system. A <code>group</code> is analagous to a <code>struct</code> in other languages. Groups are declared with <code>let</code> just like any other top-level binding:</p> <!> <p><code>groups</code> are instantiated with the <code>new</code> keyword:</p> <!> <p>The bindings inside a group (in this case <code>first_name</code> , <code>last_name</code> , and <code>age</code> ) are called <b>properties</b> . Properties can have default values specified in the group definition:</p> <!> <h2 id="nominality">Nominality</h2> <p>Groups in Cabin are <b>nominal</b> , which means that even if two groups have the same structure, you can't use them interchangeably:</p> <!> <p>That being said, if the type is known, the type name can be omitted when the group is
		instantiated, and it will be inferred:</p> <!> <h2 id="mutability">Mutability</h2> <p>Group properties are <b>immutable and unassignable by default</b> . To mark a property as assignable, use the <code>editable</code> keyword:</p> <!> <h2 id="visibility">Visibility</h2> <p>By default, group properties are only visible in the file that the group is declared. To make a
		property visible elsewhere, use the <code>visible</code> keyword:</p> <!> <h2 id="compile-time-parameters">Compile-Time Parameters</h2> <p>Groups can take something known as <b>compile-time parameters</b> . We'll talk in more detail about these in the next section on <code>actions</code> , but the idea is that they're parameters on the group definition, similar to a function.</p> <!> <p>Then, when using this group, we want to pass a value to this parameter:</p> <!> <p>The important thing to understand about these parameters is that the value of the parameter must
		be a <b>type</b> . "Type" is a somewhat confusing term because it means something different in Cabin than it does
		in most other languages; In Cabin, a "type" is just a value that is 1. fully known at compile-time
		and 2. not marked <code>editable</code> . Typical examples of types are <code>Text</code> and <code>Number</code> , but <code>"hello"</code> is a type, <code>10</code> is a type, and even an <code>if</code> expression can be a type, as long as its fully resolveable at compile-time.</p> <p>With that in mind, compile-time parameters have a nice shorthand where we can omit their type:</p> <!> <p>When ommitting the type of a compile-time parameter, it is automatically inferred to be <code>Any</code> .</p>`,1);function A(u){f(t=>{g.title="Groups  •  Cabin Docs"}),w(u,{page:"Groups",children:(t,x)=>{var o=T(),n=e(b(o),8);a(n,{language:"cabin",code:`
			let Person = group {
				first_name: Text,
				last_name: Text,
				age: Number
			};
		`});var i=e(n,4);a(i,{language:"cabin",code:`
			let tucker = new Person {
				first_name = "tucker",
				last_name = "foley",
				age = 14
			};
		`});var r=e(i,4);a(r,{language:"cabin",code:`
			let Person = group {
				first_name: Text,
				middle_name: Optional<Text> = none,
				last_name: Text,
				age: Number
			};

			# no need to specify middle name
			let tucker = new Person {
				first_name = "tucker",
				last_name = "foley",
				age = 14
			};
		`});var s=e(r,6);a(s,{language:"cabin",code:`
			let Point = group { x: Number, y: Number };
			let Position = group { x: Number, y: Number };

			# this isn't allowed!
			let point: Point = new Position { x = 10, y = 10 };
		`});var d=e(s,4);a(d,{language:"cabin",code:`
			let Point = group { x: Number, y: Number };

			let point: Point = new { x = 10, y = 10 };
		`});var p=e(d,6);a(p,{language:"cabin",code:`
			let Person = group {
				editable first_name: Text,
				last_name: Text,
				age: Number
			};

			let tucker = new Person {
				first_name = "tucker",
				last_name = "foley",
				age = 14
			};

			tucker.first_name = "tuck";
		`});var l=e(p,6);a(l,{language:"cabin",code:`
			let Person = group {
				visible first_name: Text,

				middle_name: Optional<Text> = none,
				last_name: Text,
				age: Number
			};
		`});var c=e(l,6);a(c,{language:"cabin",code:`
			let Node = group<Data: Any> {
				data: Data,
				children: List<Node<Data>>
			};
		`});var m=e(c,4);a(m,{language:"cabin",code:`
			let node = new Node<Text> {
				data = "node",
				children = []
			};
		`});var h=e(m,6);a(h,{language:"cabin",code:`
			let Node = group<Data> {
				data: Data,
				children: Node<Data>[]
			};
		`}),y(2),v(t,o)}})}export{A as component};
