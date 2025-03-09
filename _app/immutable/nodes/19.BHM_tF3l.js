import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{$ as h,s as o,f as b,n as g}from"../chunks/CfSNqnEh.js";import{h as u}from"../chunks/CSexOY7A.js";import{t as r,a as t}from"../chunks/k3PStlUg.js";import{D as f}from"../chunks/AvcqC-dp.js";import{S as n}from"../chunks/CKKAmHVQ.js";var _=r(`<pre>let friend = new Object &lbrace;&rbrace;

#[friend]
let tucker = new Person &lbrace;
    first_name = "tucker",
    last_name = "foley"
&rbrace;;
</pre>`),v=r(`<pre>let is_friend = tucker.has_tag(friend);
</pre>`),$=r(`<pre>let friend = new Object &lbrace;&rbrace;

#[editable, friend]
let person = new Person &lbrace;
    first_name = "tucker",
    last_name = "foley"
&rbrace;;

print(person.has_tag(friend)) # true

person = new Person &lbrace;
    first_name = "dash",
    last_name = "baxter"
&rbrace;;

print(person.has_tag(friend)) # false
</pre>`),w=r(`<h1>Tags</h1> <p><b>Tags</b> are a dead simple way to "mark" a value with another value</p> <h2 id="introduction">Introduction</h2> <p>A "tag" is just an object, and tags can be applied to values with the <code>#[]</code> syntax:</p> <!> <p>The only purpose of tagging an object is to later check if an object <i>has</i> a tag. All values have a <code>.has_tag()</code> action on them:</p> <!> <p>Some tags, such as <code>#[editable]</code> and <code>#[visible]</code> , are checked by the compiler.</p> <h2 id="mutation">Mutation</h2> <p>Tags are applied to <i>values</i> , not <i>names</i> . This means that reassigning a name will <i>not</i> keep its tags. For example:</p> <!> <p>This is <i>almost</i> true, but there are some notable exceptions&mdash;The two built-in tags mentioned earlier get special
		handling. They're bound to <i>names</i> , not values. So, reassigning a name marked <code>#[visible]</code> or <code>#[editable]</code> will not remove those tags.</p>`,1);function A(d){u(i=>{h.title="Tags  •  Cabin Docs"}),f(d,{page:"Tags",children:(i,T)=>{var s=w(),l=o(b(s),8);n(l,{children:(e,c)=>{var a=_();t(e,a)}});var p=o(l,4);n(p,{children:(e,c)=>{var a=v();t(e,a)}});var m=o(p,8);n(m,{children:(e,c)=>{var a=$();t(e,a)}}),g(2),t(i,s)},$$slots:{default:!0}})}export{A as component};
