import"../chunks/CWj6FrbW.js";import"../chunks/wPM4U2Nx.js";import{$ as x,s as e,f as y,n as f}from"../chunks/ChQ8i3mT.js";import{h as w}from"../chunks/3l18Sfkq.js";import{t as _,a as v}from"../chunks/CwLvwI_u.js";import{S as t}from"../chunks/7Ikl-ixd.js";import{T}from"../chunks/CU_wdFVd.js";var V=_(`<h1>Extensions</h1> <p><b>Extensions</b> are how Cabin implements polymorphism, as well as allowing foreign types to be extended with additional
		functionality.</p> <h2 id="basic-extensions">Basic Extensions</h2> <p>To create a basic extension, we use the <code>extend</code> keyword with the type we want to extend.</p> <!> <p>Once an extension is created, the properties of the extension are available on the type being
		extended:</p> <!> <p><b>The properties in an extension can only be accessed if the extension is visible in the current
			scope.</b> For example, if this extension is declared in a file <code>text.cabin</code> , then to use it in another file, the extension needs to be brought into scope:</p> <!> <h2 id="polymorphic-extensions">Polymorphic Extensions</h2> <p>Extensions can also extend one type to "be" another type. This is the primary way that
		polymorphism and interfaces are implemented in Cabin. Let's say we have this group and action:</p> <!> <p>Now, we can <b>extend</b> our subtypes to be a <code>Shape</code> :</p> <!> <p>Now, we can assign these to parameters of <code>Shape</code> .</p> <!> <h2 id="operator-overloading">Operator Overloading</h2> <p>Cabin allows operator overloading through several built-in groups. For example, this is the
		defintition for the built-in <code>Addable</code> group:</p> <!> <p>Let's say we have some type that's reasonable to add, such as a <code>Vector</code></p> <!> <p>We can implement <code>Addable</code> for <code>Vector</code> with an extension:</p> <!> <p>Now, we can add vectors with the <code>+</code> operator:</p> <!> <p>This desugars exactly to:</p> <!> <p>The <code>.plus()</code> method can be called manually like this, but it's not idiomatic and will trigger a warning.</p> <h2 id="default-extensions">Default Extensions</h2> <p>One annoyance you might notice with the above implementation is that you have to bring <code>AddVectors</code> into scope whenever you want to be able to add them. This is where the <code>#[default]</code> tag comes in:</p> <!> <p>Tagging this extension as <code>#[default]</code> means that <b>it will automatically be brought into scope when the type its extending is in scope</b> . For example, in this case, whenever <code>Vector</code> is in scope, the <code>AddVectors</code> extension will automatically be in scope.</p> <p>Note the following important things about using <code>#[default]</code></p> <ul><li><code>#[default]</code> can only be used on <b>polymorphic extensions</b> &mdash;Extensions of one type <code>as</code> another.</li> <li><code>#[default]</code> can only be used on an extension that's declared in the same file as the type it's extending; i.e.,
			you cannot make an extension default for a foreign type.</li> <li>Multiple of the same type of extension (such as two implementations of <code>Vector</code> to be <code>Addable</code> ) cannot be marked <code>#[default]</code> ; Only at most one.</li></ul>`,1);function D(m){w(o=>{x.title="Extensions  •  Cabin Docs"}),T(m,{page:"Extensions",children:(o,A)=>{var a=V(),n=e(y(a),8);t(n,{language:"cabin",code:`
			let text_extension = extend Text {
				is_danny = action(this: Text): Boolean {
					return is this == "danny";
				}
			};
		`});var i=e(n,4);t(i,{language:"cabin",code:`
			let danny_is_danny = "danny".is_danny(); # true
			let sam_is_danny = "sam".is_danny(); # false
		`});var s=e(i,4);t(s,{language:"cabin",code:`
			let _ = text.text_extension; # required

			let danny_is_danny = "danny".is_danny(); # true
		`});var d=e(s,6);t(d,{language:"cabin",code:`
			let Shape = group {
				area: action(this: This): Number
			};

			let takes_shape = action(shape: Shape) {};
		`});var c=e(d,4);t(c,{language:"cabin",code:`
			let RectangleIsShape = extend Rectangle as Shape {
				area = action(this: This): Number {
					area is this.width * this.height;
				}
			};

			let CircleIsShape = extend Circle as Shape {
				area = action(this: This): Number {
					area is pi * this.radius ^ 2;
				}
			};
		`});var r=e(c,4);t(r,{language:"cabin",code:`
			takes_shape(rectangle);
			takes_shape(circle);
		`});var l=e(r,6);t(l,{language:"cabin",code:`
			let Addable = group {
				visible plus: action(this: This, other: This): This
			};
		`});var h=e(l,4);t(h,{language:"cabin",code:`
			let Vector = group {
				x: Number,
				y: Number
			};
		`});var p=e(h,4);t(p,{language:"cabin",code:`
			let AddVectors = extend Vector as Addable {
				plus = action(this: This, other: This): This {
					it is new Vector { x = this.x + other.x, y = this.y + other.y };
				}
			};
		`});var u=e(p,4);t(u,{language:"cabin",code:`
			let a = new Vector { x = 10, y = 20 };
			let b = new Vector { x = 15, y = 5 };

			let sum = a + b;
		`});var b=e(u,4);t(b,{language:"cabin",code:`
			let a = new Vector { x = 10, y = 20 };
			let b = new Vector { x = 15, y = 5 };

			let sum = a.plus(b);
		`});var g=e(b,8);t(g,{language:"cabin",code:`
			#[default]
			let AddVectors = extend Vector as Addable {
				plus = action(this: This, other: This): This {
					it is new Vector { x = this.x + other.x, y = this.y + other.y };
				}
			};
		`}),f(6),v(o,a)}})}export{D as component};
