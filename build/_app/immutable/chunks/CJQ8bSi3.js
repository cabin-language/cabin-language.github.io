import"./CWj6FrbW.js";import{u as j,x as z,a1 as d,aa as A,ap as k,s as h,J as g,a2 as f,a3 as M}from"./ChQ8i3mT.js";import{s as O}from"./ZH7Bqwyt.js";import{i as J,a as L}from"./DTE6UjiL.js";import{t as N,a as P}from"./CwLvwI_u.js";import{s as B}from"./BajSixIv.js";import{c as G}from"./D5qvKZgf.js";import{s as W}from"./BBBwdkJ2.js";import{b as S}from"./5rUHwaZ0.js";import{o as F}from"./BpABP35b.js";import{N as H}from"./B9cGN4M3.js";var K=N('<a class="svelte-1pbfawa"><span class="svelte-1pbfawa">Previous</span> <span class="svelte-1pbfawa"> </span></a>'),Q=N('<a class="svelte-1pbfawa"><span class="svelte-1pbfawa">Next</span> <span class="svelte-1pbfawa"> </span></a>'),R=N('<div class="wrapper svelte-1pbfawa"><!> <div class="inner svelte-1pbfawa"><!> <main class="svelte-1pbfawa"><!> <span class="navigation-buttons svelte-1pbfawa"><!> <!></span></main></div></div>');function ne(q,o){j(o,!0);let n,w=k(null),C=k(null),i=k(null),_=k(null);F(()=>{let a=n.next();A(w,L((a==null?void 0:a.label)??null)),A(C,L((a==null?void 0:a.path)??null));let r=n.previous();A(i,L((r==null?void 0:r.label)??null)),A(_,L((r==null?void 0:r.path)??null))});let v;function D(){v.style.display=v.style.display==="none"?"flex":"none"}var p=R(),b=d(p);H(b,{sidebar:()=>{n.toggle(),D()}});var E=h(b,2),e=d(E);G(e,()=>o.Sidebar,(a,r)=>{S(r(a,{get page(){return o.page}}),u=>n=u,()=>n)});var s=h(e,2),t=d(s);B(t,()=>o.children);var l=h(t,2),c=d(l);{var y=a=>{var r=K(),u=h(d(r),2),I=d(u,!0);f(u),f(r),M(()=>{W(r,"href",g(_)),O(I,g(i))}),P(a,r)};J(c,a=>{g(i)&&a(y)})}var m=h(c,2);{var x=a=>{var r=Q(),u=h(d(r),2),I=d(u,!0);f(u),f(r),M(()=>{W(r,"href",g(C)),O(I,g(w))}),P(a,r)};J(m,a=>{g(w)&&a(x)})}f(l),f(s),S(s,a=>v=a,()=>v),f(E),f(p),P(q,p),z()}var T=N('<section class="sidebar svelte-1vidt9m"><h1 class="svelte-1vidt9m">Contents</h1> <ul><!></ul></section>');function se(q,o){j(o,!0);let n;F(()=>{Array.from(n.children).forEach(l=>{var c;((c=l.firstElementChild)==null?void 0:c.textContent.toLowerCase())===o.page.toLowerCase()&&(Array.from(l.children).forEach(y=>{y.style.display="block"}),l.firstElementChild.style.fontWeight="bold",l.firstElementChild.style.color="white")});const e=document.querySelectorAll("h2, h3"),s=document.querySelectorAll(".sidebar ul > li > ul > li > a"),t=new IntersectionObserver(l=>{l.forEach(c=>{c.isIntersecting&&s.forEach(y=>{const m=y;m.style.color="#9399b2",m.parentElement.style.setProperty("--diamond-border","#585b70"),m.parentElement.style.setProperty("--diamond-background","#181825");let x=y.getAttribute("href");x.substring(x.indexOf("#")+1)===c.target.id&&(m.style.color="white",m.parentElement.style.setProperty("--diamond-border","white"),m.parentElement.style.setProperty("--diamond-background","#b4befe"))})})},{threshold:.9});e.forEach(l=>t.observe(l))});function w(){var s;let e=Array.from(n.children);for(let t=0;t<e.length;t++){let l=e[t];if(t===e.length-1)return null;if(((s=l.firstElementChild)==null?void 0:s.textContent.toLowerCase())===o.page.toLowerCase())return{path:e[t+1].firstElementChild.getAttribute("href"),label:e[t+1].firstElementChild.textContent}}return null}function C(){var s;let e=Array.from(n.children);for(let t=0;t<e.length;t++)if(((s=e[t].firstElementChild)==null?void 0:s.textContent.toLowerCase())===o.page.toLowerCase())return t===0?null:{path:e[t-1].firstElementChild.getAttribute("href"),label:e[t-1].firstElementChild.textContent};return null}let i;function _(){i.style.display="block"}function v(){i.style.display="none"}function D(){i.style.display=["","none"].includes(i.style.display)?"block":"none"}var p=T(),b=h(d(p),2),E=d(b);return B(E,()=>o.children),f(b),S(b,e=>n=e,()=>n),f(p),S(p,e=>i=e,()=>i),P(q,p),z({next:w,previous:C,show:_,hide:v,toggle:D})}export{ne as D,se as S};
