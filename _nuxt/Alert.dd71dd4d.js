import o from"./ContentSlot.c63e69af.js";import{a as r,r as l,w as c,o as p,b as u,e as m,f}from"./entry.785cf103.js";const _=r({__name:"Alert",props:{type:{type:String,default:"warning"}},setup(t){const a=t,e=l([""]);return c(()=>{switch(a.type){case"warning":e.value=["bg-amber-50","text-amber-600"];break;case"info":e.value=["bg-sky-50","text-sky-600"];break;case"output":e.value=["bg-slate-50","text-slate-500","font-medium"];break}}),(s,i)=>{const n=o;return p(),u("div",{class:f(["p-4","my-4","rounded-lg","text-sm",e.value])},[m(n,{use:s.$slots.default,unwrap:"p"},null,8,["use"])],2)}}});export{_ as default};
