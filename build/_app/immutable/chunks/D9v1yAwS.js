import"./CWj6FrbW.js";import{y as j,B as z,L as d,M as A,N as L,s as p,O as g,P as c,t as D}from"./DTfYqeGc.js";import{s as I}from"./aeY7Nn0d.js";import{i as B,p as k}from"./LkJvFbAQ.js";import{t as N,a as P}from"./BCn_RDvH.js";import{s as F}from"./ClIRNkCr.js";import{c as H,b as S}from"./BOwvYHP_.js";import{a as W}from"./B4rKqoCf.js";import{o as G}from"./m25ecaQ0.js";import{N as J}from"./Caxe_L4i.js";var K=N('<a class="svelte-5sd3w1"><span class="svelte-5sd3w1">Previous</span> <span class="svelte-5sd3w1"> </span></a>'),Q=N('<a class="svelte-5sd3w1"><span class="svelte-5sd3w1">Next</span> <span class="svelte-5sd3w1"> </span></a>'),R=N('<div class="wrapper svelte-5sd3w1"><!> <div class="inner svelte-5sd3w1"><!> <main class="svelte-5sd3w1"><!> <span class="navigation-buttons svelte-5sd3w1"><!> <!></span></main></div></div>');function se(M,o){j(o,!0);let a,w=L(null),C=L(null),i=L(null),_=L(null);G(()=>{let l=a.next();A(w,k((l==null?void 0:l.label)??null)),A(C,k((l==null?void 0:l.path)??null));let r=a.previous();A(i,k((r==null?void 0:r.label)??null)),A(_,k((r==null?void 0:r.path)??null))});let v;function O(){v.style.display=v.style.display==="none"?"flex":"none"}var f=R(),b=d(f);J(b,{sidebar:()=>{a.toggle(),O()}});var E=p(b,2),e=d(E);H(e,()=>o.Sidebar,(l,r)=>{S(r(l,{get page(){return o.page}}),h=>a=h,()=>a)});var n=p(e,2),t=d(n);F(t,()=>o.children);var s=p(t,2),m=d(s);{var y=l=>{var r=K(),h=p(d(r),2),q=d(h,!0);c(h),c(r),D(()=>{W(r,"href",g(_)),I(q,g(i))}),P(l,r)};B(m,l=>{g(i)&&l(y)})}var u=p(m,2);{var x=l=>{var r=Q(),h=p(d(r),2),q=d(h,!0);c(h),c(r),D(()=>{W(r,"href",g(C)),I(q,g(w))}),P(l,r)};B(u,l=>{g(w)&&l(x)})}c(s),c(n),S(n,l=>v=l,()=>v),c(E),c(f),P(M,f),z()}var T=N('<section class="sidebar svelte-1vidt9m"><h1 class="svelte-1vidt9m">Contents</h1> <ul><!></ul></section>');function ae(M,o){j(o,!0);let a;G(()=>{Array.from(a.children).forEach(s=>{var m;((m=s.firstElementChild)==null?void 0:m.textContent.toLowerCase())===o.page.toLowerCase()&&(Array.from(s.children).forEach(y=>{y.style.display="block"}),s.firstElementChild.style.fontWeight="bold",s.firstElementChild.style.color="white")});const e=document.querySelectorAll("h2, h3"),n=document.querySelectorAll(".sidebar ul > li > ul > li > a"),t=new IntersectionObserver(s=>{s.forEach(m=>{m.isIntersecting&&n.forEach(y=>{const u=y;u.style.color="#9399b2",u.parentElement.style.setProperty("--diamond-border","#585b70"),u.parentElement.style.setProperty("--diamond-background","#181825");let x=y.getAttribute("href");x.substring(x.indexOf("#")+1)===m.target.id&&(u.style.color="white",u.parentElement.style.setProperty("--diamond-border","white"),u.parentElement.style.setProperty("--diamond-background","#b4befe"))})})},{threshold:.9});e.forEach(s=>t.observe(s))});function w(){var n;let e=Array.from(a.children);for(let t=0;t<e.length;t++){let s=e[t];if(t===e.length-1)return null;if(((n=s.firstElementChild)==null?void 0:n.textContent.toLowerCase())===o.page.toLowerCase())return{path:e[t+1].firstElementChild.getAttribute("href"),label:e[t+1].firstElementChild.textContent}}return null}function C(){var n;let e=Array.from(a.children);for(let t=0;t<e.length;t++)if(((n=e[t].firstElementChild)==null?void 0:n.textContent.toLowerCase())===o.page.toLowerCase())return t===0?null:{path:e[t-1].firstElementChild.getAttribute("href"),label:e[t-1].firstElementChild.textContent};return null}let i;function _(){i.style.display="block"}function v(){i.style.display="none"}function O(){i.style.display=["","none"].includes(i.style.display)?"block":"none"}var f=T(),b=p(d(f),2),E=d(b);return F(E,()=>o.children),c(b),S(b,e=>a=e,()=>a),c(f),S(f,e=>i=e,()=>i),P(M,f),z({next:w,previous:C,show:_,hide:v,toggle:O})}export{se as D,ae as S};
