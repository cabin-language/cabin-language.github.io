import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{$ as v,s as e,f as T,n as N}from"../chunks/DAmSNls5.js";import{h as V}from"../chunks/ijsLc-5c.js";import{t as C,a as S}from"../chunks/CNq40Ifi.js";import{S as t}from"../chunks/DIwq8TxL.js";import{T as E}from"../chunks/DTF7GliJ.js";var k=C(`<h1>Extensions</h1> <p><b>Extensions</b> are how Cabin implements polymorphism, as well as allowing foreign types to be extended with additional
		functionality.</p> <h2 id="basic-extensions">Basic Extensions</h2> <p>To create a basic extension, we use the <code>extensionof</code> keyword with the type we want to extend.</p> <!> <p>Once an extension is created, the properties of the extension are available on the type being
		extended:</p> <!> <p><b>The properties in an extension can only be accessed if the extension is visible in the current
			scope.</b> For example, if this extension is declared in a file <code>text.cabin</code> , then to use it in another file, the extension needs to be brought into scope:</p> <!> <h2 id="polymorphic-extensions">Polymorphic Extensions</h2> <p>Extensions can also extend one type <b>"to be"</b> another type. This is the primary way that polymorphism and interfaces are implemented in Cabin.
		Consider the following groups:</p> <!> <p>Now, lets say we want an action that takes parameters that could be any shape, and just needs to
		calculate their areas. What do we make the type of this parameter? One way is to use an <code>either</code> , but it ends up being a bit verbose:</p> <!> <p>Gross! What's more, if we ever want to add new shapes, it's gonna be a pain. Thankfully,
		extensions can simplify this for us. Instead of defining <code>Shape</code> as an <code>either</code> , we define it as a <code>group</code> :</p> <!> <p>Now, we can <b>extend</b> our subtypes <b>"to be"</b> a <code>Shape</code> :</p> <!> <p>This also allows removing the <code>area</code> actions from our <code>Rectangle</code> and <code>Circle</code> groups, and just using the extension implementation instead. Now, these can safely be passed to <code>surface_area</code> as-is:</p> <!> <h2 id="operator-overloading">Operator Overloading</h2> <p>Cabin allows operator overloading through several built-in groups. For example, this is the
		defintition for the built-in <code>Addable</code> group:</p> <!> <p>Let's say we have some type that's reasonable to add, such as a <code>Vector</code></p> <!> <p>We can implement <code>Addable</code> for <code>Vector</code> with an extension:</p> <!> <p>Now, we can add vectors with the <code>+</code> operator:</p> <!> <p>This desugars exactly to:</p> <!> <p>The <code>.plus()</code> method can be called manually like this, but it's not idiomatic and will trigger a warning.</p> <h2 id="default-extensions">Default Extensions</h2> <p>One annoyance you might notice with the above implementation is that you have to bring <code>AddVectors</code> into scope whenever you want to be able to add them. This is where the <code>#[default]</code> tag comes in:</p> <!> <p>Tagging this extension as <code>#[default]</code> means that <b>it will automatically be brought into scope when the type its extending is in scope</b> . For example, in this case, whenever <code>Vector</code> is in scope, the <code>AddVectors</code> extension will automatically be in scopel means that <b>it will automatically be brought into scope when the type its extending is in scope</b> . For example, in this case, whenever <code>Vector</code> is in scope, the <code>AddVectors</code> extension will automatically be in scope.</p> <p>Note the following important things about using <code>#[default]</code></p> <ul><li><code>#[default]</code> can only be used on <b>polymorphic extensions</b> &mdash;Extensions of one type <i>to be</i> another.</li> <li><code>#[default]</code> can only be used on an extension that's declared in the same scope as the type it's extending;
			i.e., you cannot make an extension default for a foreign type.</li> <li>Multiple of the same type of extension (such as two implementations of <code>Vector</code> to be <code>Addable</code> ) cannot be marked <code>#[default]</code> ; Only at most one.</li></ul> <h2 id="getters">Extension Getters</h2> <p>Extensions support a feature called <b>getters</b> . Getters can cause confusion, so use them sparingly.</p> <p>So here's the situation: Let's say we have the following <code>Coordinate</code> group:</p> <!> <p>Now, maybe we want to make another way to represent coordinates:</p> <!> <p>Now, what happens if we want to make an <code>extensionof Polar tobe Coordinate</code> ? There's nothing we can use for the <code>x</code> and <code>y</code> properties. This is where <b>getters</b> come in. Getters allow using an <code>action</code> instead of the property directly:</p> <!> <p>It's important to note that from the outside, these properties are opaque, meaning the caller
		doesn't <i>know</i> they're actions, they're simply referenced as a property and automatically called.</p> <p>Some important points about extension getters:</p> <ul><li>The signature of the getter must exactly match <code>action(this: This): PropertyType</code></li> <li>All getters are automatically marked with <code>#[no_side_effects]</code> . This means you cannot interact with the system in any way from getters, such as printing to the
			console, taking user input, writing files, etc. While this helps avoid hidden behavior, note that
			there's no way for the compiler to prevent getters from entering an infinite loop or recursing
			indefinitely.</li></ul>`,1);function I(w){V(a=>{v.title="Extensions  •  Cabin Docs"}),E(w,{page:"Extensions",children:(a,A)=>{var o=k(),n=e(T(o),8);t(n,{language:"cabin",code:`
			let TextExtension = extensionof Text {
				is_danny = action(this: Text): Boolean {
					is_danny is this == "danny";
				}
			};
		`});var i=e(n,4);t(i,{language:"cabin",code:`
			let danny_is_danny = "danny".is_danny(); # true
			let sam_is_danny = "sam".is_danny(); # false
		`});var s=e(i,4);t(s,{language:"cabin",code:`
			let DannyExtension = text.TextExtension; # required

			let danny_is_danny = "danny".is_danny(); # true
		`});var r=e(s,6);t(r,{language:"cabin",code:`
			let Rectangle = group {
				width: Number,
				height: Number,

				area: action(this: This): Number {
					area is this.width * this.height;
				}
			};

			let Circle = group {
				radius: Number,

				area: action(this: This): Number {
					area is pi * this.radius ^ 2;
				}
			};
		`});var c=e(r,4);t(c,{language:"cabin",code:`
			let Shape = either {
				rectangle: Rectangle,
				circle: Circle
			};

			let surface_area = action(faces: List<Shape>) {
				#[editable] let total = 0;
				foreach shape in faces {
					total = total + match shape {
						rectangle: Rectangle { it is rectangle.area(); }
						circle: Circle { it is circle.area(); }
					};
				};
				surface_area is total;
			}

			let rectangle = new Rectangle {
				width = 10,
				height = 10
			};

			let area = surface_area(Shape.rectangle(rectangle));
		`});var d=e(c,4);t(d,{language:"cabin",code:`
			let Shape = group {
				area: action(this: This): Number
			};
		`});var l=e(d,4);t(l,{code:`
			let RectangleIsShape = extensionof Rectangle tobe Shape {
				area = action(this: This): Number {
					area is this.width * this.height;
				}
			};

			let CircleIsShape = extensionof Circle tobe Shape {
				area = action(this: This): Number {
					area is pi * this.radius ^ 2;
				}
			};
		`});var h=e(l,4);t(h,{language:"cabin",code:`
			let surface_area = action(faces: Shape[]) {
				#[editable] let total = 0;
				foreach shape in faces {
					total = total + shape.area();
				};
				surface_area is total;
			}

			let rectangle = new Rectangle {
				width = 10,
				height = 10
			};

			let area = surface_area(rectangle);
		`});var p=e(h,6);t(p,{language:"cabin",code:`
			let Addable = group {
				plus: action(this: This, other: This): This
			};
		`});var u=e(p,4);t(u,{language:"cabin",code:`
			let Vector = group {
				x: Number,
				y: Number
			};
		`});var g=e(u,4);t(g,{language:"cabin",code:`
			let AddVectors = extensionof Vector tobe Addable {
				plus = action(this: This, other: This): This {
					it is new Vector { x = this.x + other.x, y = this.y + other.y };
				}
			};
		`});var b=e(g,4);t(b,{language:"cabin",code:`
			let a = new Vector { x = 10, y = 20 };
			let b = new Vector { x = 15, y = 5 };

			let sum = a + b;
		`});var m=e(b,4);t(m,{language:"cabin",code:`
			let a = new Vector { x = 10, y = 20 };
			let b = new Vector { x = 15, y = 5 };

			let sum = a.plus(b);
		`});var y=e(m,8);t(y,{language:"cabin",code:`
			#[default]
			let AddVectors = extensionof Vector tobe Addable {
				plus = action(this: This, other: This): This {
					it is new Vector { x = this.x + other.x, y = this.y + other.y };
				}
			};
		`});var f=e(y,14);t(f,{language:"cabin",code:`
			let Coordinate = group {
				x: Number,
				y: Number,
			};
		`});var x=e(f,4);t(x,{language:"cabin",code:`
			let Coordinate = group {
				x: Number,
				y: Number,
			};

			let Polar = group {
				r: Number,
				theta: Number,
			};
		`});var _=e(x,4);t(_,{language:"cabin",code:`
			let PolarToCoordinate = extensionof Polar tobe Coordinate {
				x = action(this: This): Number {
					x is this.r * this.theta.cos();
				},
				y = action(this: This): Number {
					y is this.r * this.theta.sin();
				}
			};
		`}),N(6),S(a,o)}})}export{I as component};
