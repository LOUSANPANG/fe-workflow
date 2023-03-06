export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z){return {data:{"content-query-wXS1YKTxWZ":{_path:"\u002Fdocs\u002Ficon-component",_dir:"docs",_draft:y,_partial:y,_locale:"en",_empty:y,title:z,description:z,body:{type:"root",children:[{type:a,tag:"h1",props:{id:"优雅使用icon"},children:[{type:c,value:z}]},{type:a,tag:"h2",props:{id:t},children:[{type:c,value:t}]},{type:a,tag:A,props:{id:J},children:[{type:c,value:J}]},{type:a,tag:k,props:{code:"├─src\u002Fcomponents\n│  └─SvgIcon.vue\n├─src\u002Fassets\n│  └─icons\n│  │  └─xxx.svg\n",language:"bash",meta:r},children:[{type:a,tag:s,props:{},children:[{type:a,tag:k,props:{__ignoreMap:p},children:[{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:i},children:[{type:c,value:"├─src\u002Fcomponents"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:i},children:[{type:c,value:u}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:l}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"└─SvgIcon.vue"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:i},children:[{type:c,value:"├─src\u002Fassets"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:i},children:[{type:c,value:u}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:l}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"└─icons"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:i},children:[{type:c,value:u}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:l}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:u}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:l}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"└─xxx.svg"}]}]}]}]}]},{type:a,tag:A,props:{id:K},children:[{type:c,value:K}]},{type:a,tag:k,props:{code:"\u003C!-- components\u002FSvgIcon.vue --\u003E\n\u003Cscript setup lang=\"ts\"\u003E\nimport { computed, withDefaults } from 'vue'\n\ninterface Props {\n  prefix?: string;\n  name?: string;\n  color?: string;\n}\n\nconst props = withDefaults(defineProps\u003CProps\u003E(), {\n  prefix: 'icon',\n  name: '',\n  color: '#000',\n})\n\nconst symbolId = computed(() =\u003E `#${props.prefix}-${props.name}`)\n\u003C\u002Fscript\u003E\n\n\u003Ctemplate\u003E\n  \u003Csvg aria-hidden=\"true\"\u003E\n    \u003Cuse :xlink:href=\"symbolId\" :fill=\"color\" \u002F\u003E\n  \u003C\u002Fsvg\u003E\n\u003C\u002Ftemplate\u003E\n",language:L,meta:r},children:[{type:a,tag:s,props:{},children:[{type:a,tag:k,props:{__ignoreMap:p},children:[{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:v},children:[{type:c,value:"\u003C!-- components\u002FSvgIcon.vue --\u003E"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:w}]},{type:a,tag:b,props:{class:m},children:[{type:c,value:M}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:f}]},{type:a,tag:b,props:{class:j},children:[{type:c,value:"setup"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:f}]},{type:a,tag:b,props:{class:j},children:[{type:c,value:"lang"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:n}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"\"ts\""}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:q}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:h},children:[{type:c,value:x}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:" { computed, withDefaults } "}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:B}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:f}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"'vue'"}]}]},{type:a,tag:b,props:{class:e},children:[]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:h},children:[{type:c,value:"interface"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:f}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:N}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:" {"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:l}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:O}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:C}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:f}]},{type:a,tag:b,props:{class:j},children:[{type:c,value:D}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:E}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:l}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:F}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:C}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:f}]},{type:a,tag:b,props:{class:j},children:[{type:c,value:D}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:E}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:l}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:"color"}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:C}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:f}]},{type:a,tag:b,props:{class:j},children:[{type:c,value:D}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:E}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:P}]}]},{type:a,tag:b,props:{class:e},children:[]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:h},children:[{type:c,value:Q}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:f}]},{type:a,tag:b,props:{class:j},children:[{type:c,value:G}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:f}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:n}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:f}]},{type:a,tag:b,props:{class:o},children:[{type:c,value:"withDefaults"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:"("}]},{type:a,tag:b,props:{class:o},children:[{type:c,value:"defineProps"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:w}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:N}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:"\u003E(), {"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"  prefix: "}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"'icon'"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:H}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"  name: "}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"''"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:H}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"  color: "}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"'#000'"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:H}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"})"}]}]},{type:a,tag:b,props:{class:e},children:[]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:h},children:[{type:c,value:Q}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:f}]},{type:a,tag:b,props:{class:j},children:[{type:c,value:"symbolId"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:f}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:n}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:f}]},{type:a,tag:b,props:{class:o},children:[{type:c,value:"computed"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:"(() "}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:R}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:f}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"`#${"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:G}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:S}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:O}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"}-${"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:G}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:S}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:F}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"}`"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:")"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:T}]},{type:a,tag:b,props:{class:m},children:[{type:c,value:M}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:q}]}]},{type:a,tag:b,props:{class:e},children:[]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:w}]},{type:a,tag:b,props:{class:m},children:[{type:c,value:U}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:q}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"  \u003C"}]},{type:a,tag:b,props:{class:m},children:[{type:c,value:V}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:f}]},{type:a,tag:b,props:{class:j},children:[{type:c,value:"aria-hidden"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:n}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"\"true\""}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:q}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"    \u003C"}]},{type:a,tag:b,props:{class:m},children:[{type:c,value:"use"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:f}]},{type:a,tag:b,props:{class:j},children:[{type:c,value:":xlink:href"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:n}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"\"symbolId\""}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:f}]},{type:a,tag:b,props:{class:j},children:[{type:c,value:":fill"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:n}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"\"color\""}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:W}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"  \u003C\u002F"}]},{type:a,tag:b,props:{class:m},children:[{type:c,value:V}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:q}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:T}]},{type:a,tag:b,props:{class:m},children:[{type:c,value:U}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:q}]}]}]}]}]},{type:a,tag:A,props:{id:X},children:[{type:c,value:X}]},{type:a,tag:k,props:{code:"\u002F\u002F vite.config.ts\nimport viteSvgIcons from 'vite-plugin-svg-icons'\nimport { resolve } from 'path'\n\nexport default ({ mode }) =\u003E {\n  return defineConfig({\n    plugins: [\n      viteSvgIcons({\n        iconDirs: [resolve(process.cwd(), 'src\u002Fassets\u002Ficons')],\n        symbolId: 'icon-[dir]-[name]'\n      })\n    ]\n  })\n}\n",language:Y,meta:r},children:[{type:a,tag:s,props:{},children:[{type:a,tag:k,props:{__ignoreMap:p},children:[{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:v},children:[{type:c,value:"\u002F\u002F vite.config.ts"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:h},children:[{type:c,value:x}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:" viteSvgIcons "}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:B}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:f}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"'vite-plugin-svg-icons'"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:h},children:[{type:c,value:x}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:" { resolve } "}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:B}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:f}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"'path'"}]}]},{type:a,tag:b,props:{class:e},children:[]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:h},children:[{type:c,value:"export"}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:f}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:"default"}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:" ({ mode }) "}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:R}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:f}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:"{"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:l}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:"return"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:f}]},{type:a,tag:b,props:{class:o},children:[{type:c,value:"defineConfig"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:Z}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"    plugins: ["}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"      "}]},{type:a,tag:b,props:{class:o},children:[{type:c,value:"viteSvgIcons"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:Z}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"        iconDirs: ["}]},{type:a,tag:b,props:{class:o},children:[{type:c,value:"resolve"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:"(process."}]},{type:a,tag:b,props:{class:o},children:[{type:c,value:"cwd"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:"(), "}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"'src\u002Fassets\u002Ficons'"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:")],"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"        symbolId: "}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"'icon-[dir]-[name]'"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"      })"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"    ]"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"  })"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:P}]}]}]}]}]},{type:a,tag:k,props:{code:"\u002F\u002F main.ts\nimport 'virtual:svg-icons-register'\n\n\u002F\u002F 使用 unplugin-vue-components 自动化导入 SvgIcon\n",language:Y,meta:r},children:[{type:a,tag:s,props:{},children:[{type:a,tag:k,props:{__ignoreMap:p},children:[{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:v},children:[{type:c,value:"\u002F\u002F main.ts"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:h},children:[{type:c,value:x}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:f}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"'virtual:svg-icons-register'"}]}]},{type:a,tag:b,props:{class:e},children:[]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:v},children:[{type:c,value:"\u002F\u002F 使用 unplugin-vue-components 自动化导入 SvgIcon"}]}]}]}]}]},{type:a,tag:k,props:{code:"\u003CSvgIcon name=\"xxx\" \u002F\u003E\n",language:L,meta:r},children:[{type:a,tag:s,props:{},children:[{type:a,tag:k,props:{__ignoreMap:p},children:[{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:w}]},{type:a,tag:b,props:{class:m},children:[{type:c,value:"SvgIcon"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:f}]},{type:a,tag:b,props:{class:j},children:[{type:c,value:F}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:n}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"\"xxx\""}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:W}]}]}]}]}]},{type:a,tag:"style",children:[{type:c,value:".ct-7eb089{color:#DCBDFB}\n.ct-7a2e48{color:#F47067}\n.ct-f9479b{color:#6CB6FF}\n.ct-9fca3c{color:#8DDB8C}\n.ct-9d02f1{color:#768390}\n.ct-0bdf99{color:#96D0FF}\n.ct-58cf7d{color:#ADBAC7}\n.ct-f5dda9{color:#F69D50}"}]}],toc:{title:p,searchDepth:I,depth:I,links:[{id:t,depth:I,text:t}]}},_type:"markdown",_id:"content:docs:62.icon-component.md",_source:"content",_file:"docs\u002F62.icon-component.md",_extension:"md"}},prerenderedAt:1678090661075}}("element","span","text","ct-58cf7d","line"," ","ct-0bdf99","ct-7a2e48","ct-f5dda9","ct-f9479b","code","  ","ct-9fca3c","=","ct-7eb089","","\u003E",null,"pre","svg-icon","│","ct-9d02f1","\u003C","import",false,"优雅使用Icon","h4","from","?:","string",";","name","props",",",2,"目录","创建组件","vue","script","Props","prefix","}","const","=\u003E",".","\u003C\u002F","template","svg"," \u002F\u003E","配置应用","ts","({"))