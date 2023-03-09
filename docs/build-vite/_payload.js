export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){return {data:{"content-query-CpnCw56AbW":{_path:"\u002Fdocs\u002Fbuild-vite",_dir:"docs",_draft:q,_partial:q,_locale:"en",_empty:q,title:u,description:u,body:{type:"root",children:[{type:a,tag:"h1",props:{id:"构建工具-vite"},children:[{type:b,value:"构建工具 Vite"}]},{type:a,tag:v,props:{code:"\u002F\u002F https:\u002F\u002Fvitejs.dev\u002Fconfig\u002F\nimport { defineConfig } from 'vite'\nimport vue from '@vitejs\u002Fplugin-vue'\nimport { resolve } from 'path' \u002F\u002F path 模块找不到，安装 pnpm add @types\u002Fnode -D\n\n\nexport default defineConfig({\n  base: '.\u002F', \u002F\u002F 设置打包路径\n  server: {\n    port: 4000, \u002F\u002F 设置服务启动端口号\n    open: true, \u002F\u002F 设置服务启动时是否自动打开浏览器\n    cors: true \u002F\u002F 允许跨域\n\n    \u002F\u002F 设置代理，根据我们项目实际情况配置\n    proxy: {\n      '\u002Fapi': {\n        target: 'http:\u002F\u002Fxxx',\n        changeOrigin: true,\n        secure: false,\n        rewrite: (path) =\u003E path.replace('\u002Fapi\u002F', '\u002F')\n      }\n    }\n  },\n\n  resolve: {\n    alias: {\n      '@': resolve(__dirname, 'src') \u002F\u002F 设置 `@` 指向 `src` 目录\n    }\n  },\n\n  plugins: [\n    vue()\n  ],\n})\n",language:"ts",meta:null},children:[{type:a,tag:"pre",props:{},children:[{type:a,tag:v,props:{__ignoreMap:w},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:j},children:[{type:b,value:"\u002F\u002F https:\u002F\u002Fvitejs.dev\u002Fconfig\u002F"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:i},children:[{type:b,value:r}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" { defineConfig } "}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:s}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"'vite'"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:i},children:[{type:b,value:r}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" vue "}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:s}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"'@vitejs\u002Fplugin-vue'"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:i},children:[{type:b,value:r}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" { resolve } "}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:s}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"'path'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:"\u002F\u002F path 模块找不到，安装 pnpm add @types\u002Fnode -D"}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:i},children:[{type:b,value:"export"}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"default"}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:m},children:[{type:b,value:"defineConfig"}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"({"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"base: "}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"'.\u002F'"}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:"\u002F\u002F 设置打包路径"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"server: {"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"    port: "}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:"4000"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:"\u002F\u002F 设置服务启动端口号"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"    open: "}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:t}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:"\u002F\u002F 设置服务启动时是否自动打开浏览器"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"    cors: "}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:t}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:"\u002F\u002F 允许跨域"}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:x}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:"\u002F\u002F 设置代理，根据我们项目实际情况配置"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"    proxy: {"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:y}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"'\u002Fapi'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:": {"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        target: "}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"'http:\u002F\u002Fxxx'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        changeOrigin: "}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:t}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        secure: "}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:"false"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        "}]},{type:a,tag:c,props:{class:m},children:[{type:b,value:"rewrite"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:": ("}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"path"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:z}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"=\u003E"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" path."}]},{type:a,tag:c,props:{class:m},children:[{type:b,value:"replace"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"("}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"'\u002Fapi\u002F'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"'\u002F'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:")"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"      }"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:A}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:B}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:l}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"resolve: {"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"    alias: {"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:y}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"'@'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:": "}]},{type:a,tag:c,props:{class:m},children:[{type:b,value:"resolve"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"(__dirname, "}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"'src'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:z}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:"\u002F\u002F 设置 `@` 指向 `src` 目录"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:A}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:B}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:l}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"plugins: ["}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:x}]},{type:a,tag:c,props:{class:m},children:[{type:b,value:"vue"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"()"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"  ]"}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:l}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:"})"}]}]}]}]}]},{type:a,tag:"style",children:[{type:b,value:".ct-153db1{color:#6CB6FF}\n.ct-ffb47b{color:#DCBDFB}\n.ct-1bdfb8{color:#F69D50}\n.ct-2dbfa4{color:#96D0FF}\n.ct-63ccc4{color:#ADBAC7}\n.ct-5b2025{color:#F47067}\n.ct-7aba44{color:#768390}"}]}],toc:{title:w,searchDepth:C,depth:C,links:[]}},_type:"markdown",_id:"content:docs:203.build-vite.md",_source:"content",_file:"docs\u002F203.build-vite.md",_extension:"md"}},prerenderedAt:1678345226404}}("element","text","span","ct-63ccc4","div","line","ct-1bdfb8","ct-2dbfa4","ct-5b2025","ct-7aba44"," ",",","ct-ffb47b","ct-153db1","  ",", ",false,"import","from","true","构建工具配置","code","","    ","      ",") ","    }","  }",2))