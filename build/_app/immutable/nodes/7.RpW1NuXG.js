import"../chunks/CWj6FrbW.js";import"../chunks/wPM4U2Nx.js";import{s as e,f as g,n as m}from"../chunks/ChQ8i3mT.js";import{t as b,a as f}from"../chunks/CwLvwI_u.js";import{S as t}from"../chunks/DCmLAtqY.js";import{T as y}from"../chunks/BuuoEnqP.js";var v=b(`<h1>Basic Types &amp; Operations</h1> <p>We're going to take some time to go over the basic types and operations you can perform on them
		in Cabin.</p> <h2 id="basic-types">Basic Types</h2> <p>There are a types built into Cabin that you'll end up using frequently.</p> <h3 id="text">Text</h3> <p>First, let's look at <code>Text</code> . <code>Text</code> represents a sequence of characters; It's analagous to a <code>String</code> in some other languages. Text can be concatenated with the <code>+</code> operator:</p> <!> <p>An easier way of doing this is by using text formatting. In Cabin, Text literals are
		automatically formatted, using curly braces. So, the above is equivalent to this:</p> <!> <p>Text cannot be multiplied. To repeat a segment of text, use the <code>repeat()</code> action:</p> <!> <h3 id="numbers">Numberic Types</h3> <h3 id="boolean">Boolean</h3> <p><code>Boolean</code> is an <a href="/learn/eithers">either</a> defined as a Cabin built-in simply as:</p> <!> <p>We'll learn more about <code>eithers</code> later. For now, just understand that its a simple type that can be either <code>true</code> or <code>false</code> .</p> <h2 id="basic-operations">Basic Operations</h2> <h3 id="boolean-combinators">Boolean Combinators</h3> <h3 id="double-colon">The Double-Colon Operator</h3> <p>The <b>double-colon</b> ( <code>::</code> ) operator (or "direct property access operator") returns the property on an object with the name
		of the right operand. For example, all <code>Text</code> objects have a <code>repeat</code> field on them, so this is one way to bind and call it:</p> <!> <p>Note that in this case, the left operand to <code>::</code> ends up unused. That's because the value of <code>repeat</code> is the same for all instances of <code>Text</code> .</p> <h3 id="dot">The Dot Operator</h3> <p>The <b>dot</b> ( <code>.</code> ) operator (or "indirect property access operator") is one of the most subtly complex operations
		in Cabin. It operates differently depending on the type of it's left operand. Below is a thorough
		explanation of the dot operator. Note that a lot of the material here hasn't been discussed yet;
		It might be a good idea to come back to this after understanding these topics.</p> <p>If the left operand to <b>dot</b> is an <b>either</b> , the either variant with the name of the dot's right operand is returned. In terms of the direct
		property access operator ( <code>::</code> ), the following expressions are equivalent:</p> <!> <p>If the left operand to dot is a <b>group</b> , the group field with the name of the dot's right operand is returned. In terms of the direct property
		access operator ( <code>::</code> ), the following expressions are equivalent:</p> <!> <p>In any other case, the property with the name of the dot's right operand is returned, completely
		equivalent to the <code>::</code> operator:</p> <!> <p>The one exception to this is that if the value of the property is an action and the first
		parameter to the action is <code>this: This</code> , a <b>bound action</b> is returned where the left operand to the dot is passed as the first argument to the action:</p> <!> <p>Overall, the <b>dot</b> operator is complex, but often more-or-less "does what you expect it to". It ends up being used more
		commonly than the double colon.</p>`,1);function q(c){y(c,{page:"Basic Types & Operations",children:(h,_)=>{var o=v(),a=e(g(o),12);t(a,{language:"cabin",code:`
			let greeting = "Hello";
			let name = "Jack";
			
			debug(greeting + " " + name);
		`,output:"Hello Jack"});var n=e(a,4);t(n,{language:"cabin",code:`
			let greeting = "Hello";
			let name = "Jack";
			
			debug("{greeting} {name}");
		`,output:"Hello Jack"});var r=e(n,4);t(r,{language:"cabin",code:`
			debug("Cabin is {"so ".repeat(3)}awesome!");
		`,output:"Cabin is so so so awesome!"});var i=e(r,8);t(i,{language:"cabin",code:`
			let Boolean = either {
				true,
				false
			};
		`});var s=e(i,12);t(s,{language:"cabin",code:`
			let repeat = "some text"::repeat;
			debug("Cabin is {repeat("so ", 3)}awesome!");
		`,output:"Cabin is so so so awesome!"});var d=e(s,10);t(d,{language:"cabin",code:`
			let Direction = either {
				left,
				right,
			};

			# these are equivalent 
			let left = either.left;
			let left = Direction::variants.find(action(variant: Direction) { it is variant.name == "left"; }));
		`});var l=e(d,4);t(l,{language:"cabin",code:`
			let Person = group {
				name: Text,
				age: Number,
			};

			# these are equivalent 
			let age = Person.age;
			let age = Person::fields.find(action(field: Field) { it is field.name == "age"; })).default_value;
		`});var p=e(l,4);t(p,{language:"cabin",code:`
			let Person = group {
				name: Text,
				age: Number,
			};

			let jazz = new Person {
				name = "jazz fenton",
				age = 16
			};

			# these are equivalent 
			let name = jazz.name;
			let age = jazz::name;
		`});var u=e(p,4);t(u,{language:"cabin",code:`
			let Person = group {
				name: Text,
				age: Number,

				is_same_age_as = action(this: This, other: Person): Boolean {
					return is this.age == other.age;
				}
			};

			let jazz = new Person {
				name = "jazz fenton",
				age = 16
			};

			# these are equivalent 
			let is_same_age_as = jazz.is_same_age_as;
			let is_same_age_as = action(other: Person) { it is jazz::is_same_age_as(jazz, other); };
		`}),m(2),f(h,o)}})}export{q as component};
