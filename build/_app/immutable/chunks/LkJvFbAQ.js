import{S as N,Q as G,R as V,T as y,U as $,O as P,V as b,M as R,W as L,A as z,X as J,Y as Q,Z as W,b as X,h as M,o as x,E as k,H as p,_ as ee,a0 as re,m as ae,l as B,a1 as K,a as C,D as H,e as ne,J as Z,a2 as te,a3 as se,a4 as j,a5 as ie,a6 as fe,a7 as ue,a8 as le,a9 as ve,aa as _e,ab as ce,ac as de,ad as oe,ae as be}from"./DTfYqeGc.js";import{l as ge}from"./DIeogL5L.js";function h(r,s=null,g){if(typeof r!="object"||r===null||N in r)return r;const l=Q(r);if(l!==G&&l!==V)return r;var i=new Map,_=W(r),o=y(0);_&&i.set("length",y(r.length));var m;return new Proxy(r,{defineProperty(f,e,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&J();var t=i.get(e);return t===void 0?(t=y(a.value),i.set(e,t)):R(t,h(a.value,m)),!0},deleteProperty(f,e){var a=i.get(e);if(a===void 0)e in f&&i.set(e,y(b));else{if(_&&typeof e=="string"){var t=i.get("length"),n=Number(e);Number.isInteger(n)&&n<t.v&&R(t,n)}R(a,b),F(o)}return!0},get(f,e,a){var d;if(e===N)return r;var t=i.get(e),n=e in f;if(t===void 0&&(!n||(d=L(f,e))!=null&&d.writable)&&(t=y(h(n?f[e]:b,m)),i.set(e,t)),t!==void 0){var u=P(t);return u===b?void 0:u}return Reflect.get(f,e,a)},getOwnPropertyDescriptor(f,e){var a=Reflect.getOwnPropertyDescriptor(f,e);if(a&&"value"in a){var t=i.get(e);t&&(a.value=P(t))}else if(a===void 0){var n=i.get(e),u=n==null?void 0:n.v;if(n!==void 0&&u!==b)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return a},has(f,e){var u;if(e===N)return!0;var a=i.get(e),t=a!==void 0&&a.v!==b||Reflect.has(f,e);if(a!==void 0||z!==null&&(!t||(u=L(f,e))!=null&&u.writable)){a===void 0&&(a=y(t?h(f[e],m):b),i.set(e,a));var n=P(a);if(n===b)return!1}return t},set(f,e,a,t){var w;var n=i.get(e),u=e in f;if(_&&e==="length")for(var d=a;d<n.v;d+=1){var I=i.get(d+"");I!==void 0?R(I,b):d in f&&(I=y(b),i.set(d+"",I))}n===void 0?(!u||(w=L(f,e))!=null&&w.writable)&&(n=y(void 0),R(n,h(a,m)),i.set(e,n)):(u=n.v!==b,R(n,h(a,m)));var c=Reflect.getOwnPropertyDescriptor(f,e);if(c!=null&&c.set&&c.set.call(t,a),!u){if(_&&typeof e=="string"){var A=i.get("length"),E=Number(e);Number.isInteger(E)&&E>=A.v&&R(A,E+1)}F(o)}return!0},ownKeys(f){P(o);var e=Reflect.ownKeys(f).filter(n=>{var u=i.get(n);return u===void 0||u.v!==b});for(var[a,t]of i)t.v!==b&&!(a in f)&&e.push(a);return e},setPrototypeOf(){$()}})}function F(r,s=1){R(r,r.v+s)}function ye(r,s,[g,l]=[0,0]){M&&g===0&&x();var i=r,_=null,o=null,m=b,f=g>0?k:0,e=!1;const a=(n,u=!0)=>{e=!0,t(u,n)},t=(n,u)=>{if(m===(m=n))return;let d=!1;if(M&&l!==-1){if(g===0){const c=i.data;c===p?l=0:c===ee?l=1/0:(l=parseInt(c.substring(1)),l!==l&&(l=m?1/0:-1))}const I=l>g;!!m===I&&(i=re(),ae(i),B(!1),d=!0,l=-1)}m?(_?K(_):u&&(_=C(()=>u(i))),o&&H(o,()=>{o=null})):(o?K(o):u&&(o=C(()=>u(i,[g+1,l]))),_&&H(_,()=>{_=null})),d&&B(!0)};X(()=>{e=!1,s(a),e||t(null,null)},f),M&&(i=ne)}let D=!1;function me(r){var s=D;try{return D=!1,[r(),D]}finally{D=s}}const Pe={get(r,s){if(!r.exclude.includes(s))return r.props[s]},set(r,s){return!1},getOwnPropertyDescriptor(r,s){if(!r.exclude.includes(s)&&s in r.props)return{enumerable:!0,configurable:!0,value:r.props[s]}},has(r,s){return r.exclude.includes(s)?!1:s in r.props},ownKeys(r){return Reflect.ownKeys(r.props).filter(s=>!r.exclude.includes(s))}};function we(r,s,g){return new Proxy({props:r,exclude:s},Pe)}function Se(r,s,g,l){var U;var i=(g&be)!==0,_=!ge||(g&oe)!==0,o=(g&_e)!==0,m=(g&de)!==0,f=!1,e;o?[e,f]=me(()=>r[s]):e=r[s];var a=N in r||ce in r,t=o&&(((U=L(r,s))==null?void 0:U.set)??(a&&s in r&&(v=>r[s]=v)))||void 0,n=l,u=!0,d=!1,I=()=>(d=!0,u&&(u=!1,m?n=Z(l):n=l),n);e===void 0&&l!==void 0&&(t&&_&&te(),e=I(),t&&t(e));var c;if(_)c=()=>{var v=r[s];return v===void 0?I():(u=!0,d=!1,v)};else{var A=(i?j:ie)(()=>r[s]);A.f|=se,c=()=>{var v=P(A);return v!==void 0&&(n=void 0),v===void 0?n:v}}if((g&fe)===0)return c;if(t){var E=r.$$legacy;return function(v,S){return arguments.length>0?((!_||!S||E||f)&&t(S?c():v),v):c()}}var w=!1,Y=!1,T=ve(e),O=j(()=>{var v=c(),S=P(T);return w?(w=!1,Y=!0,S):(Y=!1,T.v=v)});return i||(O.equals=ue),function(v,S){if(le!==null&&(w=Y,c(),P(T)),arguments.length>0){const q=S?P(O):_&&o?h(v):v;return O.equals(q)||(w=!0,R(T,q),d&&n!==void 0&&(n=q),Z(()=>P(O))),v}return P(O)}}export{Se as a,ye as i,h as p,we as r};
