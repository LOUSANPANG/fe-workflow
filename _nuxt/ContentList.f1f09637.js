import{a as n,h as c,j as o,m as h}from"./entry.34f5bcc4.js";const l=n({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(r){const t=c(),{path:p,query:u}=r,d={...u||{},path:p||(u==null?void 0:u.path)||"/"},f=(e,a)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:e,data:a},null,2));return o(h,d,{default:t!=null&&t.default?({data:e,refresh:a,isPartial:m})=>t==null?void 0:t.default({list:e,refresh:a,isPartial:m,...this.$attrs}):({data:e})=>f("default",e),empty:e=>t!=null&&t.empty?t.empty(e):f("default",e==null?void 0:e.data),"not-found":e=>{var a;return t!=null&&t["not-found"]?(a=t==null?void 0:t["not-found"])==null?void 0:a.call(t,e):f("not-found",e==null?void 0:e.data)}})}});export{l as default};
