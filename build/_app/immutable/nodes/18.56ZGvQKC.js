import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{$ as d,s as e,f as l,n as c}from"../chunks/CoInYexW.js";import{h as p}from"../chunks/eUedGi1i.js";import{t as m,a as h}from"../chunks/CZgyuwJY.js";import{S as a}from"../chunks/DOGuWRaC.js";import{T as g}from"../chunks/BAhHPTym.js";var u=m(`<h1>Tags</h1> <p><b>Tags</b> are a dead simple way to "mark" a value with another value</p> <h2 id="introduction">Introduction</h2> <p>A "tag" is just an object, and tags can be applied to values with the <code>#[]</code> syntax:</p> <!> <p>The only purpose of tagging an object is to later check if an object <i>has</i> a tag. All values have a <code>.has_tag()</code> action on them:</p> <!> <p>Some tags, such as <code>#[editable]</code> and <code>#[visible]</code> , are checked by the compiler.</p> <h2 id="mutation">Mutation</h2> <p>Tags are applied to <i>values</i> , not <i>names</i> . This means that reassigning a name will <i>not</i> keep its tags. For example:</p> <!> <p>This is <i>almost</i> true, but there are some notable exceptions&mdash;The two built-in tags mentioned earlier get special
		handling. They're bound to <i>names</i> , not values. So, reassigning a name marked <code>#[visible]</code> or <code>#[editable]</code> will not remove those tags.</p>`,1);function j(s){p(t=>{d.title="Tags  •  Cabin Docs"}),g(s,{page:"Tags",children:(t,f)=>{var n=u(),o=e(l(n),8);a(o,{language:"cabin",code:`
			let friend = new Object {};

			#[friend]
			let tucker = new Person {
				first_name = "tucker",
				last_name = "foley"
			};
		`});var i=e(o,4);a(i,{language:"cabin",code:`
			let is_friend = tucker.has_tag(friend);
		`});var r=e(i,8);a(r,{language:"cabin",code:`
			let friend = new Object {};

			#[editable, friend]
			let person = new Person {
				first_name = "tucker",
				last_name = "foley"
			};

			print(person.has_tag(friend)); # true

			person = new Person {
				first_name = "dash",
				last_name = "baxter"
			};

			print(person.has_tag(friend)); # false
		`}),c(2),h(t,n)}})}export{j as component};
