import{Y as H,Z as O,_ as A,N as M,a0 as P,z as k,a1 as E,m as j,i as B,j as C,a2 as T,k as y,l as D,B as $,e as g,a3 as q,a4 as z,a5 as W,a6 as Z,a7 as F,a8 as G,g as J,a as K,p as Q,t as U,h as b,o as X}from"./DXkR1yX0.js";import{r as x}from"./CusXyDLi.js";import{d as rr}from"./BldIr1EY.js";const ar=["touchstart","touchmove"];function er(r){return ar.includes(r)}const I=new Set,N=new Set;function ir(r){for(var a=0;a<r.length;a++)I.add(r[a]);for(var t of N)t(r)}function m(r){var R;var a=this,t=a.ownerDocument,c=r.type,i=((R=r.composedPath)==null?void 0:R.call(r))||[],e=i[0]||r.target,f=0,_=r.__root;if(_){var u=i.indexOf(_);if(u!==-1&&(a===document||a===window)){r.__root=a;return}var h=i.indexOf(a);if(h===-1)return;u<=h&&(f=u)}if(e=i[f]||r.target,e!==a){H(r,"currentTarget",{configurable:!0,get(){return e||t}});var w=P,o=k;O(null),A(null);try{for(var s,n=[];e!==null;){var d=e.assignedSlot||e.parentNode||e.host||null;try{var l=e["__"+c];if(l!==void 0&&(!e.disabled||r.target===e))if(M(l)){var[V,...Y]=l;V.apply(e,[r,...Y])}else l.call(e,r)}catch(v){s?n.push(v):s=v}if(r.cancelBubble||d===a||d===null)break;e=d}if(s){for(let v of n)queueMicrotask(()=>{throw v});throw s}}finally{r.__root=a,delete r.currentTarget,O(w),A(o)}}}function dr(r,a){var t=a==null?"":typeof a=="object"?a+"":a;t!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=t,r.nodeValue=t+"")}function tr(r,a){return L(r,a)}function fr(r,a){E(),a.intro=a.intro??!1;const t=a.target,c=b,i=g;try{for(var e=j(t);e&&(e.nodeType!==8||e.data!==B);)e=C(e);if(!e)throw T;y(!0),D(e),$();const f=L(r,{...a,anchor:e});if(g===null||g.nodeType!==8||g.data!==q)throw z(),T;return y(!1),f}catch(f){if(f===T)return a.recover===!1&&W(),E(),Z(t),y(!1),tr(r,a);throw f}finally{y(c),D(i),x()}}const p=new Map;function L(r,{target:a,anchor:t,props:c={},events:i,context:e,intro:f=!0}){E();var _=new Set,u=o=>{for(var s=0;s<o.length;s++){var n=o[s];if(!_.has(n)){_.add(n);var d=er(n);a.addEventListener(n,m,{passive:d});var l=p.get(n);l===void 0?(document.addEventListener(n,m,{passive:d}),p.set(n,1)):p.set(n,l+1)}}};u(F(I)),N.add(u);var h=void 0,w=G(()=>{var o=t??a.appendChild(J());return K(()=>{if(e){Q({});var s=U;s.c=e}i&&(c.$$events=i),b&&rr(o,null),h=r(o,c)||{},b&&(k.nodes_end=g),e&&X()}),()=>{var d;for(var s of _){a.removeEventListener(s,m);var n=p.get(s);--n===0?(document.removeEventListener(s,m),p.delete(s)):p.set(s,n)}N.delete(u),o!==t&&((d=o.parentNode)==null||d.removeChild(o))}});return S.set(h,w),h}let S=new WeakMap;function ur(r,a){const t=S.get(r);return t?(S.delete(r),t(a)):Promise.resolve()}export{ir as d,fr as h,tr as m,dr as s,ur as u};
