import{f as p,r as f,v as h,B as I,C as E,D as T,i as m,F as v,E as A,p as c,d as r,_ as o,t as D,G as R,h as V,H as y}from"./entry.3b466047.js";import{u as b}from"./asyncData.b2de0ba5.js";import{h as P,j as $,u as j}from"./ContentQuery.bef53404.js";import{w as S,u as C}from"./utils.7e2b3dd8.js";import"./ContentDoc.58e32328.js";import"./ContentList.40272b59.js";import"./ContentRenderer.553abf21.js";import"./ContentRendererMarkdown.49b7df6c.js";import"./ContentSlot.d42aec4b.js";import"./DocumentDrivenEmpty.ba54fc4a.js";import"./DocumentDrivenNotFound.1e44b926.js";import"./Markdown.893f5a9c.js";import"./ProseCode.dcdb76ff.js";const k=t=>{let e=t;typeof(e==null?void 0:e.params)=="function"&&(e=e.params());const i=S(e?`/navigation/${P(e)}.json`:"/navigation");return $fetch(i,{method:"GET",responseType:"json",params:{_params:$(e||{}),previewToken:j("previewToken").value}})};const w=p({emits:{error(t){return!0}},setup(t,{slots:e,emit:i}){const _=f(null),a=h();return I(u=>{if(!a.isHydrating)return i("error",u),_.value=u,!1}),()=>{var u,n;return _.value?(u=e.error)==null?void 0:u.call(e,{error:_}):(n=e.default)==null?void 0:n.call(e)}}}),N=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),x=p({name:"ClientOnly",props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e}){const i=f(!1);return E(()=>{i.value=!0}),_=>{var l;if(i.value)return(l=e.default)==null?void 0:l.call(e);const a=e.fallback||e.placeholder;if(a)return a();const u=_.fallback||_.placeholder||"",n=_.fallbackTag||_.placeholderTag||"span";return T(n,null,u)}}});function B(t){const{setup:e,render:i,template:_}=t;return i?t.render=(a,...u)=>{var n,l;return a.mounted$?m(v,null,[m(i(a,...u),(n=a.$attrs)!=null?n:a._.attrs)]):m("div",(l=a.$attrs)!=null?l:a._.attrs)}:_&&(t.template=`
      <template v-if="mounted$">${_}</template>
      <template v-else><div></div></template>
    `),p({...t,setup(a,u){const n=f(!1);return E(()=>{n.value=!0}),Promise.resolve((e==null?void 0:e(a,u))||{}).then(l=>typeof l!="function"?{...l,mounted$:n}:(...d)=>n.value?m(v,null,[m(l(...d),u.attrs)]):m("div",u.attrs))}})}const z=Object.freeze(Object.defineProperty({__proto__:null,default:x,createClientOnly:B},Symbol.toStringTag,{value:"Module"})),M=p({name:"ServerPlaceholder",render(){return T("div")}}),q=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),F=p({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t){const e=G({duration:t.duration,throttle:t.throttle}),i=h();return i.hook("page:start",e.start),i.hook("page:finish",e.finish),A(()=>e.clear),()=>m("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${e.progress.value}%`,height:`${t.height}px`,opacity:e.isLoading.value?1:0,background:t.color,backgroundSize:`${100/e.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}})}});function G(t){const e=f(0),i=f(!1),_=c(()=>1e4/t.duration);let a=null,u=null;function n(){d(),e.value=0,i.value=!0,t.throttle?u=setTimeout(s,t.throttle):s()}function l(){e.value=100,g()}function d(){clearInterval(a),clearTimeout(u),a=null,u=null}function O(L){e.value=Math.min(100,e.value+L)}function g(){d(),setTimeout(()=>{i.value=!1,setTimeout(()=>{e.value=0},400)},500)}function s(){a=setInterval(()=>{O(_.value)},100)}return{progress:e,isLoading:i,start:n,finish:l,clear:d}}const H=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));r(()=>o(()=>import("./TheHeader.208d2d83.js"),["TheHeader.208d2d83.js","TheHeader.vue_vue_type_script_setup_true_lang.9e4f22fd.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ContentDoc.58e32328.js"),["ContentDoc.58e32328.js","entry.3b466047.js","entry.7a5b56db.css","ContentRenderer.553abf21.js","ContentRendererMarkdown.49b7df6c.js","ContentQuery.bef53404.js","asyncData.b2de0ba5.js","utils.7e2b3dd8.js"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ContentList.40272b59.js"),["ContentList.40272b59.js","ContentQuery.bef53404.js","entry.3b466047.js","entry.7a5b56db.css","asyncData.b2de0ba5.js","utils.7e2b3dd8.js"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>Promise.resolve().then(()=>X),void 0,import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ContentQuery.bef53404.js").then(t=>t.C),["ContentQuery.bef53404.js","entry.3b466047.js","entry.7a5b56db.css","asyncData.b2de0ba5.js","utils.7e2b3dd8.js"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ContentRenderer.553abf21.js"),["ContentRenderer.553abf21.js","ContentRendererMarkdown.49b7df6c.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ContentRendererMarkdown.49b7df6c.js"),["ContentRendererMarkdown.49b7df6c.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ContentSlot.d42aec4b.js"),["ContentSlot.d42aec4b.js","utils.7e2b3dd8.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./DocumentDrivenEmpty.ba54fc4a.js"),["DocumentDrivenEmpty.ba54fc4a.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./DocumentDrivenNotFound.1e44b926.js"),["DocumentDrivenNotFound.1e44b926.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./Markdown.893f5a9c.js"),["Markdown.893f5a9c.js","ContentSlot.d42aec4b.js","utils.7e2b3dd8.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseA.05029448.js"),["ProseA.05029448.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseBlockquote.1cfe44c4.js"),["ProseBlockquote.1cfe44c4.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseCode.dcdb76ff.js"),["ProseCode.dcdb76ff.js","ProseCode.e63e49c6.css","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseCodeInline.223c4f71.js"),["ProseCodeInline.223c4f71.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseEm.23b65a06.js"),["ProseEm.23b65a06.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseH1.81a892ec.js"),["ProseH1.81a892ec.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseH2.92243749.js"),["ProseH2.92243749.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseH3.3d45a8f7.js"),["ProseH3.3d45a8f7.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseH4.c8ff8962.js"),["ProseH4.c8ff8962.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseH5.7860bfd1.js"),["ProseH5.7860bfd1.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseH6.47a044cd.js"),["ProseH6.47a044cd.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseHr.8f1cb019.js"),["ProseHr.8f1cb019.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseImg.a0b653f0.js"),["ProseImg.a0b653f0.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseLi.ca79852c.js"),["ProseLi.ca79852c.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseOl.be41156e.js"),["ProseOl.be41156e.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseP.8d7b8386.js"),["ProseP.8d7b8386.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseStrong.dde5d826.js"),["ProseStrong.dde5d826.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseTable.c4b3edd3.js"),["ProseTable.c4b3edd3.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseTbody.e2c0f4d2.js"),["ProseTbody.e2c0f4d2.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseTd.a8beb7e8.js"),["ProseTd.a8beb7e8.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseTh.6ff79880.js"),["ProseTh.6ff79880.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseThead.f4408861.js"),["ProseThead.f4408861.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseTr.cb84d48d.js"),["ProseTr.cb84d48d.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseUl.312bcae2.js"),["ProseUl.312bcae2.js","entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./welcome.38b3f4ba.js"),["welcome.38b3f4ba.js","entry.3b466047.js","entry.7a5b56db.css","asyncData.b2de0ba5.js","ContentQuery.bef53404.js","utils.7e2b3dd8.js","ContentDoc.58e32328.js","ContentRenderer.553abf21.js","ContentRendererMarkdown.49b7df6c.js","ContentList.40272b59.js","ContentSlot.d42aec4b.js","DocumentDrivenEmpty.ba54fc4a.js","DocumentDrivenNotFound.1e44b926.js","Markdown.893f5a9c.js","ProseCode.dcdb76ff.js","ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./entry.3b466047.js").then(t=>t.X),["entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>Promise.resolve().then(()=>N),void 0,import.meta.url).then(t=>t.default||t));r(()=>o(()=>Promise.resolve().then(()=>z),void 0,import.meta.url).then(t=>t.default||t));r(()=>o(()=>Promise.resolve().then(()=>q),void 0,import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./entry.3b466047.js").then(t=>t.W),["entry.3b466047.js","entry.7a5b56db.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>Promise.resolve().then(()=>H),void 0,import.meta.url).then(t=>t.default||t));const W=p({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=D(t),i=c(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!i.value&&R("dd-navigation","$X9s2D0PBpW").value){const{navigation:a}=C();return{navigation:a}}const{data:_}=await b(`content-navigation-${P(i.value)}`,()=>k(i.value),"$qwqtCbrR7R");return{navigation:_}},render(t){const e=V(),{navigation:i}=t,_=n=>m(y,{to:n._path},()=>n.title),a=(n,l)=>m("ul",l?{"data-level":l}:null,n.map(d=>d.children?m("li",null,[_(d),a(d.children,l+1)]):m("li",null,_(d)))),u=n=>a(n,0);return e!=null&&e.default?e.default({navigation:i,...this.$attrs}):u(i)}}),X=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));export{W as default};
