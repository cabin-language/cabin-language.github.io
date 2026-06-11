import"../chunks/CWj6FrbW.js";import"../chunks/wPM4U2Nx.js";import{$ as i,s as n,f as s,n as r}from"../chunks/ChQ8i3mT.js";import{h as c}from"../chunks/3l18Sfkq.js";import{t as d,a as p}from"../chunks/CwLvwI_u.js";import{S as m}from"../chunks/7Ikl-ixd.js";import{T as g}from"../chunks/CU_wdFVd.js";var l=d(`<h1>Tags</h1> <p><b>Tags</b> are a dead simple way to "mark" a name with a value</p> <h2 id="introduction">Introduction</h2> <p>A "tag" is just an object, and tags can be applied to bindings with the <code>#[]</code> syntax:</p> <!> <p>Tagging currently is only used to give hints to the compiler. For example, builtin actions are
		tagged with <code>#[builtin()]</code> , and system actions are tagged with <code>#[system_side_effects]</code> , etc.</p>`,1);function $(a){c(e=>{i.title="Tags  •  Cabin Docs"}),g(a,{page:"Tags",children:(e,h)=>{var t=l(),o=n(s(t),8);m(o,{language:"cabin",code:`
			let friend = new Object {};

			#[friend]
			let tucker = new Person {
				first_name = "tucker",
				last_name = "foley"
			};
		`}),r(2),p(e,t)}})}export{$ as component};
