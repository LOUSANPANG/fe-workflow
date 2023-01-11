import{p as O,q as c,s as g,t as T,v as A,_ as r,x as L,y as D,a as m,r as E,z as R,A as I,B as S,b as y,C as P,j as f,D as V,d as i,E as b,i as B,F as j,G as N,H as C,h as k,I as $}from"./entry.f9630702.js";import"./ContentSlot.e0504822.js";import"./ContentList.729c04b4.js";import"./DocumentDrivenEmpty.f1d58b8b.js";import"./DocumentDrivenNotFound.a42ec672.js";import"./Markdown.db1bd37a.js";import"./ProseCode.c2d77262.js";const w=async t=>{var o,_;const{content:e}=O().public,n=typeof(t==null?void 0:t.params)=="function"?t.params():t||{};e.locales.length&&((_=(o=n.where)==null?void 0:o.find(u=>u._locale))!=null&&_._locale||(n.where=n.where||[],n.where.push({_locale:e.defaultLocale})));const a=e.experimental.stripQueryParameters?c(`/navigation/${`${g(n)}.${e.integrity}`}/${T(n)}.json`):c(`/navigation/${g(n)}.${e.integrity}.json`);if(A())return(await r(()=>import("./client-db.bf602b6f.js"),["client-db.bf602b6f.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(u=>u.generateNavigation))(n);const l=await $fetch(a,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:L(n),previewToken:D("previewToken").value}});if(typeof l=="string"&&l.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return l};const x=m({emits:{error(t){return!0}},setup(t,{slots:e,emit:n}){const a=E(null),l=R();return I(o=>{if(!l.isHydrating)return n("error",o),a.value=o,!1}),()=>{var o,_;return a.value?(o=e.error)==null?void 0:o.call(e,{error:a}):(_=e.default)==null?void 0:_.call(e)}}}),M=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"})),z=m({name:"ClientOnly",props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e}){const n=E(!1);return S(()=>{n.value=!0}),a=>{var p;if(n.value)return(p=e.default)==null?void 0:p.call(e);const l=e.fallback||e.placeholder;if(l)return l();const o=a.fallback||a.placeholder||"",_=a.fallbackTag||a.placeholderTag||"span";return y(_,null,o)}}}),v=new WeakMap;function H(t){if(v.has(t))return v.get(t);const e={...t};return e.render?e.render=(n,...a)=>{var l;if(n.mounted$){const o=t.render(n,...a);return o.children===null||typeof o.children=="string"?P(o.type,o.props,o.children,o.patchFlag,o.dynamicProps,o.shapeFlag):f(o)}else return f("div",(l=n.$attrs)!=null?l:n._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(n,a)=>{var o;const l=E(!1);return S(()=>{l.value=!0}),Promise.resolve(((o=t.setup)==null?void 0:o.call(t,n,a))||{}).then(_=>typeof _!="function"?{..._,mounted$:l}:(...p)=>{if(l.value){const u=_(...p);return u.children===null||typeof u.children=="string"?P(u.type,u.props,u.children,u.patchFlag,u.dynamicProps,u.shapeFlag):f(u)}else return f("div",a.attrs)})},v.set(t,e),e}const q=Object.freeze(Object.defineProperty({__proto__:null,default:z,createClientOnly:H},Symbol.toStringTag,{value:"Module"})),F=m({name:"ServerPlaceholder",render(){return y("div")}}),Q=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),U=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),s=(t,e)=>(n,a)=>(V(()=>t({...U(n),...a.attrs},a)),()=>{var l,o;return e?(o=(l=a.slots).default)==null?void 0:o.call(l):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},G=m({name:"Script",inheritAttrs:!1,props:{...h,async:Boolean,crossorigin:{type:[Boolean,String],default:void 0},defer:Boolean,fetchpriority:String,integrity:String,nomodule:Boolean,nonce:String,referrerpolicy:String,src:String,type:String,charset:String,language:String,body:Boolean,renderPriority:[String,Number]},setup:s((t,{slots:e})=>{var l;const n={...t},a=(((l=e.default)==null?void 0:l.call(e))||[]).filter(({children:o})=>o).map(({children:o})=>o).join("");return a&&(n.children=a),{script:[n]}})}),W=m({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:s((t,{slots:e})=>{var l;const n={...t},a=(((l=e.default)==null?void 0:l.call(e))||[]).filter(({children:o})=>o).map(({children:o})=>o).join("");return a&&(n.children=a),{noscript:[n]}})}),Y=m({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:s(t=>({link:[t]}))}),J=m({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:s(t=>({base:t}))}),K=m({name:"Title",inheritAttrs:!1,setup:s((t,{slots:e})=>{var a,l,o;return{title:((o=(l=(a=e.default)==null?void 0:a.call(e))==null?void 0:l[0])==null?void 0:o.children)||null}})}),X=m({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:s(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),Z=m({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:s((t,{slots:e})=>{var l,o,_;const n={...t},a=(_=(o=(l=e.default)==null?void 0:l.call(e))==null?void 0:o[0])==null?void 0:_.children;return a&&(n.children=a),{style:[n]}})}),tt=m({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var n,a;return(a=(n=e.slots).default)==null?void 0:a.call(n)}}),et=m({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:s(t=>({htmlAttrs:t}),!0)}),rt=m({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:s(t=>({bodyAttrs:t}),!0)}),d=Object.freeze(Object.defineProperty({__proto__:null,Script:G,NoScript:W,Link:Y,Base:J,Title:K,Meta:X,Style:Z,Head:tt,Html:et,Body:rt},Symbol.toStringTag,{value:"Module"}));i(()=>r(()=>import("./Alert.72341129.js"),["Alert.72341129.js","ContentSlot.e0504822.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocsLayoutLeft.2ed66d76.js"),["DocsLayoutLeft.2ed66d76.js","DocsLayoutLeft.vue_vue_type_script_setup_true_lang.dd5b956d.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./TheHeader.3747a73c.js"),["TheHeader.3747a73c.js","TheHeader.vue_vue_type_script_setup_true_lang.3ccbe446.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.f9630702.js").then(t=>t.af),["entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentList.729c04b4.js"),["ContentList.729c04b4.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>nt),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.f9630702.js").then(t=>t.ae),["entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.f9630702.js").then(t=>t.ad),["entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.f9630702.js").then(t=>t.ac),["entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentSlot.e0504822.js"),["ContentSlot.e0504822.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenEmpty.f1d58b8b.js"),["DocumentDrivenEmpty.f1d58b8b.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenNotFound.a42ec672.js"),["DocumentDrivenNotFound.a42ec672.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Markdown.db1bd37a.js"),["Markdown.db1bd37a.js","ContentSlot.e0504822.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseA.08f4c1fe.js"),["ProseA.08f4c1fe.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseBlockquote.aaa749fd.js"),["ProseBlockquote.aaa749fd.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCode.c2d77262.js"),["ProseCode.c2d77262.js","ProseCode.e63e49c6.css","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCodeInline.0a43bf86.js"),["ProseCodeInline.0a43bf86.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseEm.9fb945b3.js"),["ProseEm.9fb945b3.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH1.d6461e6d.js"),["ProseH1.d6461e6d.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH2.fe0f9a75.js"),["ProseH2.fe0f9a75.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH3.2db28d60.js"),["ProseH3.2db28d60.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH4.a1ebdc42.js"),["ProseH4.a1ebdc42.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH5.1f99ed56.js"),["ProseH5.1f99ed56.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH6.a2dfe686.js"),["ProseH6.a2dfe686.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseHr.3803bd14.js"),["ProseHr.3803bd14.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseImg.d523b6cc.js"),["ProseImg.d523b6cc.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseLi.261b3e90.js"),["ProseLi.261b3e90.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseOl.6473f54c.js"),["ProseOl.6473f54c.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseP.d2eb6c36.js"),["ProseP.d2eb6c36.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseStrong.91fa5ea1.js"),["ProseStrong.91fa5ea1.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTable.3ea9027c.js"),["ProseTable.3ea9027c.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTbody.9af07661.js"),["ProseTbody.9af07661.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTd.67da5635.js"),["ProseTd.67da5635.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTh.060b62cb.js"),["ProseTh.060b62cb.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseThead.65350639.js"),["ProseThead.65350639.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTr.4283b57c.js"),["ProseTr.4283b57c.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseUl.0d2409a1.js"),["ProseUl.0d2409a1.js","entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./welcome.b4a6b2e6.js"),["welcome.b4a6b2e6.js","entry.f9630702.js","entry.cf141aaa.css","ContentSlot.e0504822.js","ContentList.729c04b4.js","DocumentDrivenEmpty.f1d58b8b.js","DocumentDrivenNotFound.a42ec672.js","Markdown.db1bd37a.js","ProseCode.c2d77262.js","ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.f9630702.js").then(t=>t.ah),["entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>M),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>q),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>Q),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.f9630702.js").then(t=>t.aa),["entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.f9630702.js").then(t=>t.ag),["entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.f9630702.js").then(t=>t.ab),["entry.f9630702.js","entry.cf141aaa.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Script));i(()=>r(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.NoScript));i(()=>r(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Link));i(()=>r(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Base));i(()=>r(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Title));i(()=>r(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Meta));i(()=>r(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Style));i(()=>r(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Head));i(()=>r(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Html));i(()=>r(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Body));const it=m({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=b(t),n=B(()=>{var l;return typeof((l=e.value)==null?void 0:l.params)=="function"?e.value.params():e.value});if(!n.value&&j("dd-navigation").value){const{navigation:l}=N();return{navigation:l}}const{data:a}=await C(`content-navigation-${g(n.value)}`,()=>w(n.value));return{navigation:a}},render(t){const e=k(),{navigation:n}=t,a=_=>f($,{to:_._path},()=>_.title),l=(_,p)=>f("ul",p?{"data-level":p}:null,_.map(u=>u.children?f("li",null,[a(u),l(u.children,p+1)]):f("li",null,a(u)))),o=_=>l(_,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):o(n)}}),nt=Object.freeze(Object.defineProperty({__proto__:null,default:it},Symbol.toStringTag,{value:"Module"}));export{it as default};