import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{$ as T,q as o,o as V,z as P}from"../chunks/DneM_Zg5.js";import{h as N}from"../chunks/DhpMl-z_.js";import{t as r,a as t}from"../chunks/Ke2h0E31.js";import{D as S}from"../chunks/CbiU2ppx.js";import{S as i}from"../chunks/Dfsqygma.js";var E=r(`<pre>let TextExtension = extensionof Text &lbrace;
    is_danny = action(this: Text): Boolean &lbrace;
        is_danny is this == "danny";
    &rbrace;
&rbrace;;
</pre>`),A=r(`<pre>let danny_is_danny = "danny".is_danny(); # true
let sam_is_danny = "sam".is_danny(); # false
</pre>`),C=r(`<pre>let DannyExtension = text.TextExtension; # required

let danny_is_danny = "danny".is_danny(); # true
</pre>`),R=r(`<pre>let Rectangle = group &lbrace;
    width: Number,
    height: Number,

    area: action(this: This): Number &lbrace;
        area is this.width * this.height;
    &rbrace;
&rbrace;;

let Circle = group &lbrace;
    radius: Number,

    area: action(this: This): Number &lbrace;
        area is pi * this.radius ^ 2;
    &rbrace;
&rbrace;;
</pre>`),k=r(`<pre>let Shape = either &lbrace;
    rectangle: Rectangle,
    circle: Circle
&rbrace;;

let surface_area = action(faces: Shape[]) &lbrace;
    #[editable] let total = 0;
    foreach shape in faces &lbrace;
        total = total + match shape &lbrace;
            rectangle: Rectangle &lbrace; it is rectangle.area(); &rbrace;
            circle: Circle &lbrace; it is circle.area(); &rbrace;
        &rbrace;;
    &rbrace;;
    surface_area is total;
&rbrace;

let rectangle = new Rectangle &lbrace;
    width = 10,
    height = 10
&rbrace;;

let area = surface_area(Shape.rectangle(rectangle));
</pre>`),O=r(`<pre>let Shape = group &lbrace;
    area: action(this: This): Number
&rbrace;;
</pre>`),D=r(`<pre>let RectangleIsShape = extensionof Rectangle tobe Shape &lbrace;
    area = action(this: This): Number &lbrace;
        area is this.width * this.height;
    &rbrace;
&rbrace;;

let CircleIsShape = extensionof Circle tobe Shape &lbrace;
    area = action(this: This): Number &lbrace;
        area is pi * this.radius ^ 2;
    &rbrace;
&rbrace;;
</pre>`),F=r(`<pre>let surface_area = action(faces: Shape[]) &lbrace;
    #[editable] let total = 0;
    foreach shape in faces &lbrace;
        total = total + shape.area();
    &rbrace;;
    surface_area is total;
&rbrace;

let rectangle = new Rectangle &lbrace;
    width = 10,
    height = 10
&rbrace;;

let area = surface_area(rectangle);
</pre>`),I=r(`<pre>let Addable = group &lbrace;
    plus: action(this: This, other: This): This
&rbrace;;
</pre>`),W=r(`<pre>let Vector = group &lbrace;
    x: Number,
    y: Number
&rbrace;;
</pre>`),j=r(`<pre>let AddVectors = extensionof Vector tobe Addable &lbrace;
    plus = action(this: This, other: This): This &lbrace;
        it is new Vector &lbrace; x = this.x + other.x, y = this.y + other.y &rbrace;;
    &rbrace;
&rbrace;;
</pre>`),q=r(`<pre>let a = new Vector &lbrace; x = 10, y = 20 &rbrace;;
let b = new Vector &lbrace; x = 15, y = 5 &rbrace;;

let sum = a + b;
</pre>`),B=r(`<pre>let a = new Vector &lbrace; x = 10, y = 20 &rbrace;;
let b = new Vector &lbrace; x = 15, y = 5 &rbrace;;

let sum = a.plus(b);
</pre>`),z=r(`<pre>#[default]
let AddVectors = extensionof Vector tobe Addable &lbrace;
    plus = action(this: This, other: This): This &lbrace;
        it is new Vector &lbrace; x = this.x + other.x, y = this.y + other.y &rbrace;;
    &rbrace;
&rbrace;;
</pre>`),G=r(`<h1>Extensions</h1> <p><b>Extensions</b> are how Cabin implements polymorphism, as well as allowing foreign types to be extended with additional
		functionality.</p> <h2 id="basic-extensions">Basic Extensions</h2> <p>To create a basic extension, we use the <code>extensionof</code> keyword with the type we want to extend.</p> <!> <p>Once an extension is created, the properties of the extension are available on the type being
		extended:</p> <!> <p><b>The properties in an extension can only be accessed if the extension is visible in the current
			scope.</b> For example, if this extension is declared in a file <code>text.cabin</code> , then to use it in another file, the extension needs to be brought into scope:</p> <!> <h2 id="polymorphic-extensions">Polymorphic Extensions</h2> <p>Extensions can also extend one type <b>"to be"</b> another type. This is the primary way that polymorphism and interfaces are implemented in Cabin.
		Consider the following groups:</p> <!> <p>Now, lets say we want an action that takes parameters that could be any shape, and just needs to
		calculate their areas. What do we make the type of this parameter? One way is to use an <code>either</code> , but it ends up being a bit verbose:</p> <!> <p>Gross! What's more, if we ever want to add new shapes, it's gonna be a pain. Thankfully,
		extensions can simplify this for us. Instead of defining <code>Shape</code> as an <code>either</code> , we define it as a <code>group</code> :</p> <!> <p>Now, we can <b>extend</b> our subtypes <b>"to be"</b> a <code>Shape</code> :</p> <!> <p>This also allows removing the <code>area</code> actions from our <code>Rectangle</code> and <code>Circle</code> groups, and just using the extension implementation instead. Now, these can safely be passed to <code>surface_area</code> as-is:</p> <!> <h2 id="operator-overloading">Operator Overloading</h2> <p>Cabin allows operator overloading through several built-in groups. For example, this is the
		defintition for the built-in <code>Addable</code> group:</p> <!> <p>Let's say we have some type that's reasonable to add, such as a <code>Vector</code></p> <!> <p>We can implement <code>Addable</code> for <code>Vector</code> with an extension:</p> <!> <p>Now, we can add vectors with the <code>+</code> operator:</p> <!> <p>This desugars exactly to:</p> <!> <p>The <code>.plus()</code> method can be called manually like this, but it's not idiomatic and will trigger a warning.</p> <h2 id="default-extensions">Default Extensions</h2> <p>One annoyance you might notice with the above implementation is that you have to bring <code>AddVectors</code> into scope whenever you want to be able to add them. This is where the <code>#[default]</code> tag comes in:</p> <!> <p>Tagging this extension as <code>#[default]</code> means that <b>it will automatically be brought into scope when the type its extending is in scope</b> . For example, in this case, whenever <code>Vector</code> is in scope, the <code>AddVectors</code> extension will automatically be in scopel means that <b>it will automatically be brought into scope when the type its extending is in scope</b> . For example, in this case, whenever <code>Vector</code> is in scope, the <code>AddVectors</code> extension will automatically be in scope.</p> <p>Note the following important things about using <code>#[default]</code></p> <ul><li><code>#[default]</code> can only be used on <b>polymorphic extensions</b> &mdash;Extensions of one type <i>to be</i> another.</li> <li><code>#[default]</code> can only be used on an extension that's declared in the same scope as the type it's extending;
			i.e., you cannot make an extension default for a foreign type.</li> <li>Multiple of the same type of extension (such as two implementations of <code>Vector</code> to be <code>Addable</code> ) cannot be marked <code>#[default]</code> ; Only at most one.</li></ul>`,1);function Y(w){N(s=>{T.title="Extensions  •  Cabin Docs"}),S(w,{page:"Extensions",children:(s,L)=>{var c=G(),l=o(V(c),8);i(l,{children:(e,n)=>{var a=E();t(e,a)}});var d=o(l,4);i(d,{children:(e,n)=>{var a=A();t(e,a)}});var p=o(d,4);i(p,{children:(e,n)=>{var a=C();t(e,a)}});var h=o(p,6);i(h,{children:(e,n)=>{var a=R();t(e,a)}});var b=o(h,4);i(b,{children:(e,n)=>{var a=k();t(e,a)}});var u=o(b,4);i(u,{children:(e,n)=>{var a=O();t(e,a)}});var m=o(u,4);i(m,{children:(e,n)=>{var a=D();t(e,a)}});var x=o(m,4);i(x,{children:(e,n)=>{var a=F();t(e,a)}});var y=o(x,6);i(y,{children:(e,n)=>{var a=I();t(e,a)}});var f=o(y,4);i(f,{children:(e,n)=>{var a=W();t(e,a)}});var g=o(f,4);i(g,{children:(e,n)=>{var a=j();t(e,a)}});var _=o(g,4);i(_,{children:(e,n)=>{var a=q();t(e,a)}});var v=o(_,4);i(v,{children:(e,n)=>{var a=B();t(e,a)}});var $=o(v,8);i($,{children:(e,n)=>{var a=z();t(e,a)}}),P(6),t(s,c)},$$slots:{default:!0}})}export{Y as component};
