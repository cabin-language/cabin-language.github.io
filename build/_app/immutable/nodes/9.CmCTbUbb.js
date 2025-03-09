import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{s as e,f as l}from"../chunks/DAmSNls5.js";import{t as p,a as h}from"../chunks/CNq40Ifi.js";import"../chunks/DhhaE22m.js";import{S as o}from"../chunks/DIwq8TxL.js";import{T as b}from"../chunks/DTF7GliJ.js";var u=p(`<h1>Eithers</h1> <p><b>Eithers</b> are how Cabin implements "closed polymorphism", similar to an <code>enum</code> in many other languages.</p> <h2 id="basic">Basic Eithers</h2> <p>Eithers are declared with the <code>either</code> keyword:</p> <!> <p>The inside bits ( <code>red</code> , <code>green</code> , and <code>blue</code> in this case) are called <b>variants</b> . Variants are usually accessed with the <b>dot</b> ( <code>.</code> ) operator:</p> <!> <p>Either's are incredibly useful for defining closed choice types. For example, this is how <code>Boolean</code> is defined in the standard library:</p> <!> <p><code>true</code> and <code>false</code> aren't keywords or even reserved identifiers; They're just <code>either</code> variants. These can still be accessed with <code>Boolean.true</code> and <code>Boolean.false</code> , but for convenience, they are automatically brought into the global scope as <code>let true = Boolean.true</code> and <code>let false = Boolean.false</code> .</p> <h2 id="subtypes">Subtypes</h2> <p>Eithers can have <b>subtypes</b> . This allows attaching data to an <code>either</code> variant:</p> <!> <p>Subtypes are insantiated with parentheses, similar to action calls:</p> <!>`,1);function E(n){b(n,{page:"Eithers",children:(s,m)=>{var a=u(),r=e(l(a),8);o(r,{language:"cabin",code:`
			let PrimaryColor = either {
				red,
				green,
				blue
			};
		`});var t=e(r,4);o(t,{language:"cabin",code:`
			let color = PrimaryColor.red;
		`});var i=e(t,4);o(i,{language:"cabin",code:`
			let Boolean = either {
				true,
				false
			};
		`});var d=e(i,8);o(d,{language:"cabin",code:`
			let Color = either {
				red,
				green,
				blue,
				rgb: group { r: Number, g: Number, b: Number }
			};
		`});var c=e(d,4);o(c,{language:"cabin",code:`
			let purple = Color.rgb(new { r = 255, g = 0, b = 255 });
		`}),h(s,a)}})}export{E as component};
