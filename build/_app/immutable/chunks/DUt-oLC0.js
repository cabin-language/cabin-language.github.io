import{a0 as M,a1 as R,a2 as A,N as P,a3 as Y,J as V,a4 as b,a5 as C,Q as W,a6 as $,a7 as T,W as y,V as D,O as j,e as p,a8 as q,a9 as B,aa as J,ab as Q,ac as z,ad as F,ae as G,a as K,af as U,A as X,h as E,ag as Z}from"./BFVeUpzy.js";import{d as x}from"./Do8b9Fsz.js";const aa=["touchstart","touchmove"];function ra(a){return aa.includes(a)}const I=new Set,N=new Set;function sa(a){for(var r=0;r<a.length;r++)I.add(a[r]);for(var t of N)t(a)}function m(a){var O;var r=this,t=r.ownerDocument,c=a.type,i=((O=a.composedPath)==null?void 0:O.call(a))||[],e=i[0]||a.target,f=0,_=a.__root;if(_){var u=i.indexOf(_);if(u!==-1&&(r===document||r===window)){a.__root=r;return}var h=i.indexOf(r);if(h===-1)return;u<=h&&(f=u)}if(e=i[f]||a.target,e!==r){M(a,"currentTarget",{configurable:!0,get(){return e||t}});var w=Y,o=V;R(null),A(null);try{for(var n,s=[];e!==null;){var d=e.assignedSlot||e.parentNode||e.host||null;try{var l=e["__"+c];if(l!==void 0&&(!e.disabled||a.target===e))if(P(l)){var[k,...H]=l;k.apply(e,[a,...H])}else l.call(e,a)}catch(v){n?s.push(v):n=v}if(a.cancelBubble||d===r||d===null)break;e=d}if(n){for(let v of s)queueMicrotask(()=>{throw v});throw n}}finally{a.__root=r,delete a.currentTarget,R(w),A(o)}}}function oa(a,r){var t=r==null?"":typeof r=="object"?r+"":r;t!==(a.__t??(a.__t=a.nodeValue))&&(a.__t=t,a.nodeValue=t+"")}function ea(a,r){return L(a,r)}function ia(a,r){b(),r.intro=r.intro??!1;const t=r.target,c=E,i=p;try{for(var e=C(t);e&&(e.nodeType!==8||e.data!==W);)e=$(e);if(!e)throw T;y(!0),D(e),j();const f=L(a,{...r,anchor:e});if(p===null||p.nodeType!==8||p.data!==q)throw B(),T;return y(!1),f}catch(f){if(f===T)return r.recover===!1&&J(),b(),Q(t),y(!1),ea(a,r);throw f}finally{y(c),D(i)}}const g=new Map;function L(a,{target:r,anchor:t,props:c={},events:i,context:e,intro:f=!0}){b();var _=new Set,u=o=>{for(var n=0;n<o.length;n++){var s=o[n];if(!_.has(s)){_.add(s);var d=ra(s);r.addEventListener(s,m,{passive:d});var l=g.get(s);l===void 0?(document.addEventListener(s,m,{passive:d}),g.set(s,1)):g.set(s,l+1)}}};u(z(I)),N.add(u);var h=void 0,w=F(()=>{var o=t??r.appendChild(G());return K(()=>{if(e){U({});var n=X;n.c=e}i&&(c.$$events=i),E&&x(o,null),h=a(o,c)||{},E&&(V.nodes_end=p),e&&Z()}),()=>{var d;for(var n of _){r.removeEventListener(n,m);var s=g.get(n);--s===0?(document.removeEventListener(n,m),g.delete(n)):g.set(n,s)}N.delete(u),o!==t&&((d=o.parentNode)==null||d.removeChild(o))}});return S.set(h,w),h}let S=new WeakMap;function da(a,r){const t=S.get(a);return t?(S.delete(a),t(r)):Promise.resolve()}export{sa as d,ia as h,ea as m,oa as s,da as u};
