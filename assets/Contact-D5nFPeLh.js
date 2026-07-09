import{r as a,j as o,z as m}from"./index-mkR39ZQ7.js";/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=(...e)=>e.filter((t,r,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,s)=>s?s.toUpperCase():r.toLowerCase());/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=e=>{const t=v(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},A=a.createContext({}),L=()=>a.useContext(A),W=a.forwardRef(({color:e,size:t,strokeWidth:r,absoluteStrokeWidth:s,className:n="",children:c,iconNode:p,...d},f)=>{const{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:C=!1,color:w="currentColor",className:y=""}=L()??{},b=s??C?Number(r??u)*24/Number(t??l):r??u;return a.createElement("svg",{ref:f,...i,width:t??l??i.width,height:t??l??i.height,stroke:e??w,strokeWidth:b,className:h("lucide",y,n),...!c&&!N(d)&&{"aria-hidden":"true"},...d},[...p.map(([g,j])=>a.createElement(g,j)),...Array.isArray(c)?c:[c]])});/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=(e,t)=>{const r=a.forwardRef(({className:s,...n},c)=>a.createElement(W,{ref:c,iconNode:t,className:h(`lucide-${k(x(e))}`,`lucide-${e}`,s),...n}));return r.displayName=x(e),r};/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],z=E("copy",S),$=[{name:"email",value:"leulshawell@gmail.com",href:"mailto:leul@example.com"}];function _(){return o.jsxs("section",{id:"contact",children:[o.jsx("h2",{className:"text-2xl font-bold text-heading border-b border-border pb-4 mb-8",children:"Contact"}),o.jsxs("div",{className:"",children:[o.jsx("p",{className:"text-muted mb-4 text-sm",children:"Free consultation, pay some for research, pay real for builds"}),o.jsx("div",{className:"space-y-2",children:$.map(e=>o.jsxs("div",{onClick:async()=>{try{await navigator.clipboard.writeText(e.value),m.success("copied")}catch{m.error("copy failed copy manialy")}},className:"flex items-center w-full gap-3 text-sm group",children:[o.jsx("span",{className:"text-muted w-20",children:e.name}),o.jsx("span",{className:"text-link group-hover:underline",children:e.value}),o.jsx(z,{})]}))})]})]})}export{_ as default};
