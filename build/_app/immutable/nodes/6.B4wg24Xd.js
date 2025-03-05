import{t as C,a as g,b as w}from"../chunks/Do8b9Fsz.js";import{s as r,f as T,C as c,l as s,B as O,j as h,n as e,D as p,ao as S,o as Y}from"../chunks/BFVeUpzy.js";import{d as j}from"../chunks/DUt-oLC0.js";import{D as A,s as b}from"../chunks/Cj5kn2Hk.js";import{S as $,s as f}from"../chunks/tNQputWa.js";import{p as B}from"../chunks/DOwd126u.js";const E=""+new URL("../assets/windows.DRwY9kpx.png",import.meta.url).href,H=""+new URL("../assets/mac.LENrtIPb.png",import.meta.url).href,K=""+new URL("../assets/linux.UfK4sZQY.png",import.meta.url).href;var M=C(`<h1>Installation</h1> <span class="os-buttons svelte-8aax36"><button class="svelte-8aax36"><img class="svelte-8aax36">Windows</button> <button class="svelte-8aax36"><img class="svelte-8aax36">Mac</button> <button class="svelte-8aax36"><img class="svelte-8aax36">Linux</button></span> <p>Cabin can be installed through <code>cargo</code>:</p> <!> <h2>Testing</h2> <p>Once Cabin is installed, you can test that it's working with the <code>cabin</code> command:</p> <!> <h2>Troubleshooting</h2> <p>If running <code>cabin</code> gives an error, make sure that the installation location is in
		your <code>PATH</code> environment variable.</p>`,1);function G(k){let i=S("windows");function u(d){return function(){Y(i,B(d))}}A(k,{page:"Installation",children:(d,N)=>{var _=M(),m=r(T(_),2),n=c(m),y=h(()=>u("windows"));n.__click=function(...a){var t;(t=s(y))==null||t.apply(this,a)};var I=c(n);b(I,"src",E),e(),p(n);var o=r(n,2),L=h(()=>u("mac"));o.__click=function(...a){var t;(t=s(L))==null||t.apply(this,a)};var P=c(o);b(P,"src",H),e(),p(o);var l=r(o,2),D=h(()=>u("linux"));l.__click=function(...a){var t;(t=s(D))==null||t.apply(this,a)};var R=c(l);b(R,"src",K),e(),p(l),p(m);var x=r(m,4);$(x,{children:(a,t)=>{e();var v=w("cargo install cabin-language");g(a,v)},$$slots:{default:!0}});var U=r(x,6);$(U,{children:(a,t)=>{e();var v=w("cabin");g(a,v)},$$slots:{default:!0}}),e(4),O(()=>{f(n,"background",s(i)==="windows"?"#28283d":"#181825"),f(o,"background",s(i)==="mac"?"#28283d":"#181825"),f(l,"background",s(i)==="linux"?"#28283d":"#181825")}),g(d,_)},$$slots:{default:!0}})}j(["click"]);export{G as component};
