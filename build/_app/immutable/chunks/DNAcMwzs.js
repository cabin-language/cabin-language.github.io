import{S as _,C as L,D as M,F as h,G as Y,I as N,U as v,J as I,K as A,z as j,M as q,w as B,N as C,b as H,h as E,B as U,E as z,i as G,O as J,P as Q,l as V,k as S,Q as k,a as m,R as o,e as W,V as X,W as Z,v as $,X as x}from"./DXkR1yX0.js";function T(i,c=null,d){if(typeof i!="object"||i===null||_ in i)return i;const l=B(i);if(l!==L&&l!==M)return i;var f=new Map,u=C(i),y=h(0);u&&f.set("length",h(i.length));var g;return new Proxy(i,{defineProperty(a,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&q();var s=f.get(e);return s===void 0?(s=h(t.value),f.set(e,s)):I(s,T(t.value,g)),!0},deleteProperty(a,e){var t=f.get(e);if(t===void 0)e in a&&f.set(e,h(v));else{if(u&&typeof e=="string"){var s=f.get("length"),r=Number(e);Number.isInteger(r)&&r<s.v&&I(s,r)}I(t,v),F(y)}return!0},get(a,e,t){var b;if(e===_)return i;var s=f.get(e),r=e in a;if(s===void 0&&(!r||(b=A(a,e))!=null&&b.writable)&&(s=h(T(r?a[e]:v,g)),f.set(e,s)),s!==void 0){var n=N(s);return n===v?void 0:n}return Reflect.get(a,e,t)},getOwnPropertyDescriptor(a,e){var t=Reflect.getOwnPropertyDescriptor(a,e);if(t&&"value"in t){var s=f.get(e);s&&(t.value=N(s))}else if(t===void 0){var r=f.get(e),n=r==null?void 0:r.v;if(r!==void 0&&n!==v)return{enumerable:!0,configurable:!0,value:n,writable:!0}}return t},has(a,e){var n;if(e===_)return!0;var t=f.get(e),s=t!==void 0&&t.v!==v||Reflect.has(a,e);if(t!==void 0||j!==null&&(!s||(n=A(a,e))!=null&&n.writable)){t===void 0&&(t=h(s?T(a[e],g):v),f.set(e,t));var r=N(t);if(r===v)return!1}return s},set(a,e,t,s){var D;var r=f.get(e),n=e in a;if(u&&e==="length")for(var b=t;b<r.v;b+=1){var R=f.get(b+"");R!==void 0?I(R,v):b in a&&(R=h(v),f.set(b+"",R))}r===void 0?(!n||(D=A(a,e))!=null&&D.writable)&&(r=h(void 0),I(r,T(t,g)),f.set(e,r)):(n=r.v!==v,I(r,T(t,g)));var w=Reflect.getOwnPropertyDescriptor(a,e);if(w!=null&&w.set&&w.set.call(s,t),!n){if(u&&typeof e=="string"){var O=f.get("length"),P=Number(e);Number.isInteger(P)&&P>=O.v&&I(O,P+1)}F(y)}return!0},ownKeys(a){N(y);var e=Reflect.ownKeys(a).filter(r=>{var n=f.get(r);return n===void 0||n.v!==v});for(var[t,s]of f)s.v!==v&&!(t in a)&&e.push(t);return e},setPrototypeOf(){Y()}})}function F(i,c=1){I(i,i.v+c)}function ee(i,c,[d,l]=[0,0]){E&&d===0&&U();var f=i,u=null,y=null,g=v,a=d>0?z:0,e=!1;const t=(r,n=!0)=>{e=!0,s(n,r)},s=(r,n)=>{if(g===(g=r))return;let b=!1;if(E&&l!==-1){if(d===0){const w=f.data;w===G?l=0:w===J?l=1/0:(l=parseInt(w.substring(1)),l!==l&&(l=g?1/0:-1))}const R=l>d;!!g===R&&(f=Q(),V(f),S(!1),b=!0,l=-1)}g?(u?k(u):n&&(u=m(()=>n(f))),y&&o(y,()=>{y=null})):(y?k(y):n&&(y=m(()=>n(f,[d+1,l]))),u&&o(u,()=>{u=null})),b&&S(!0)};H(()=>{e=!1,c(t),e||s(null,null)},a),E&&(f=W)}function K(i,c){return i===c||(i==null?void 0:i[_])===c}function te(i={},c,d,l){return X(()=>{var f,u;return Z(()=>{f=u,u=[],$(()=>{i!==d(...u)&&(c(i,...u),f&&K(d(...f),i)&&c(null,...f))})}),()=>{x(()=>{u&&K(d(...u),i)&&c(null,...u)})}}),i}export{te as b,ee as i,T as p};
