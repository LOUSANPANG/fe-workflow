import{w as O,f as s,j as T,i as A,a as p,r as v,k as D,l as L,m as h,p as P,h as m,F as E,d as e,_ as r,t as R,q as I,s as V,v as g,x as y,b,y as c}from"./entry.28628678.js";import"./ContentList.76c05e45.js";import"./ContentSlot.b34c5615.js";import"./DocumentDrivenEmpty.4c027048.js";import"./DocumentDrivenNotFound.0782c1d4.js";import"./Markdown.400ec5ab.js";import"./ProseCode.097efab6.js";const j=t=>{let a=t;typeof(a==null?void 0:a.params)=="function"&&(a=a.params());const _=O(a?`/navigation/${s(a)}.json`:"/navigation");return $fetch(_,{method:"GET",responseType:"json",params:{_params:T(a||{}),previewToken:A("previewToken").value}})};const $=p({emits:{error(t){return!0}},setup(t,{slots:a,emit:_}){const o=v(null),u=D();return L(i=>{if(!u.isHydrating)return _("error",i),o.value=i,!1}),()=>{var i,n;return o.value?(i=a.error)==null?void 0:i.call(a,{error:o}):(n=a.default)==null?void 0:n.call(a)}}}),k=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"})),C=p({name:"ClientOnly",props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:a}){const _=v(!1);return h(()=>{_.value=!0}),o=>{var l;if(_.value)return(l=a.default)==null?void 0:l.call(a);const u=a.fallback||a.placeholder;if(u)return u();const i=o.fallback||o.placeholder||"",n=o.fallbackTag||o.placeholderTag||"span";return P(n,null,i)}}}),f=new WeakMap;function S(t){if(f.has(t))return f.get(t);const a={...t};return a.render?a.render=(_,...o)=>{var u,i;return _.mounted$?m(E,(u=_.$attrs)!=null?u:_._.attrs,t.render(_,...o)):m("div",(i=_.$attrs)!=null?i:_._.attrs)}:a.template&&(a.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),a.setup=(_,o)=>{var i;const u=v(!1);return h(()=>{u.value=!0}),Promise.resolve(((i=t.setup)==null?void 0:i.call(t,_,o))||{}).then(n=>typeof n!="function"?{...n,mounted$:u}:(...l)=>u.value?m(E,o.attrs,n(...l)):m("div",o.attrs))},f.set(t,a),a}const w=Object.freeze(Object.defineProperty({__proto__:null,default:C,createClientOnly:S},Symbol.toStringTag,{value:"Module"})),M=p({name:"ServerPlaceholder",render(){return P("div")}}),q=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));e(()=>r(()=>import("./MarkAlert.c659135d.js"),[],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./MarkCode.09ec7c75.js"),[],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocsLayoutLeft.57c0c8bf.js"),["DocsLayoutLeft.57c0c8bf.js","DocsLayoutLeft.vue_vue_type_script_setup_true_lang.1ae1183e.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./TheHeader.463bfd42.js"),["TheHeader.463bfd42.js","TheHeader.vue_vue_type_script_setup_true_lang.44fde976.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.28628678.js").then(t=>t.aa),["entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentList.76c05e45.js"),["ContentList.76c05e45.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>N),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.28628678.js").then(t=>t.a9),["entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.28628678.js").then(t=>t.a8),["entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.28628678.js").then(t=>t.a7),["entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentSlot.b34c5615.js"),["ContentSlot.b34c5615.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocumentDrivenEmpty.4c027048.js"),["DocumentDrivenEmpty.4c027048.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocumentDrivenNotFound.0782c1d4.js"),["DocumentDrivenNotFound.0782c1d4.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Markdown.400ec5ab.js"),["Markdown.400ec5ab.js","ContentSlot.b34c5615.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseA.7b9f38c2.js"),["ProseA.7b9f38c2.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseBlockquote.17377034.js"),["ProseBlockquote.17377034.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCode.097efab6.js"),["ProseCode.097efab6.js","ProseCode.e63e49c6.css","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCodeInline.54405eaa.js"),["ProseCodeInline.54405eaa.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseEm.0708920d.js"),["ProseEm.0708920d.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH1.b8af8299.js"),["ProseH1.b8af8299.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH2.b3a972f3.js"),["ProseH2.b3a972f3.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH3.4edda872.js"),["ProseH3.4edda872.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH4.b21d70b7.js"),["ProseH4.b21d70b7.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH5.eea90486.js"),["ProseH5.eea90486.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH6.5b5eebbc.js"),["ProseH6.5b5eebbc.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseHr.ade351d8.js"),["ProseHr.ade351d8.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseImg.33383679.js"),["ProseImg.33383679.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseLi.b81c3aa4.js"),["ProseLi.b81c3aa4.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseOl.ce11f260.js"),["ProseOl.ce11f260.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseP.ceee2919.js"),["ProseP.ceee2919.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseStrong.c5aa1fec.js"),["ProseStrong.c5aa1fec.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTable.4891c451.js"),["ProseTable.4891c451.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTbody.0c197751.js"),["ProseTbody.0c197751.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTd.e3bad178.js"),["ProseTd.e3bad178.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTh.16569d3e.js"),["ProseTh.16569d3e.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseThead.075dd150.js"),["ProseThead.075dd150.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTr.679a7dd8.js"),["ProseTr.679a7dd8.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseUl.709c3c35.js"),["ProseUl.709c3c35.js","entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./welcome.2eba9e87.js"),["welcome.2eba9e87.js","entry.28628678.js","entry.4abb7517.css","ContentList.76c05e45.js","ContentSlot.b34c5615.js","DocumentDrivenEmpty.4c027048.js","DocumentDrivenNotFound.0782c1d4.js","Markdown.400ec5ab.js","ProseCode.097efab6.js","ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.28628678.js").then(t=>t.ac),["entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>k),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>w),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>q),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.28628678.js").then(t=>t.a6),["entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.28628678.js").then(t=>t.ab),["entry.28628678.js","entry.4abb7517.css"],import.meta.url).then(t=>t.default||t));const B=p({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:a}=R(t),_=I(()=>{var u;return typeof((u=a.value)==null?void 0:u.params)=="function"?a.value.params():a.value});if(!_.value&&V("dd-navigation").value){const{navigation:u}=g();return{navigation:u}}const{data:o}=await y(`content-navigation-${s(_.value)}`,()=>j(_.value));return{navigation:o}},render(t){const a=b(),{navigation:_}=t,o=n=>m(c,{to:n._path},()=>n.title),u=(n,l)=>m("ul",l?{"data-level":l}:null,n.map(d=>d.children?m("li",null,[o(d),u(d.children,l+1)]):m("li",null,o(d)))),i=n=>u(n,0);return a!=null&&a.default?a.default({navigation:_,...this.$attrs}):i(_)}}),N=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));export{B as default};
