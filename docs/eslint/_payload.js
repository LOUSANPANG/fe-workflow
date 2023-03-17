export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai){return {data:{"content-query-s8rSW3hKR8":{_path:"\u002Fdocs\u002Feslint",_dir:"docs",_draft:H,_partial:H,_locale:"en",_empty:H,title:"ESlint",description:"ESlint配置使用指南",body:{type:"root",children:[{type:a,tag:"h1",props:{id:y},children:[{type:b,value:"ESLint"}]},{type:a,tag:z,props:{id:P},children:[{type:b,value:Q}]},{type:a,tag:k,props:{code:"# 安装\npnpm add -D eslint\n\n# 初始化\nnpx eslint --init\n",language:I,meta:v},children:[{type:a,tag:w,props:{},children:[{type:a,tag:k,props:{__ignoreMap:q},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:B},children:[{type:b,value:"# 安装"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:x},children:[{type:b,value:"pnpm"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"add"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:"-D"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:y}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:B},children:[{type:b,value:"# 初始化"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:x},children:[{type:b,value:J}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:y}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:"--init"}]}]}]}]}]},{type:a,tag:K,props:{id:R},children:[{type:b,value:R}]},{type:a,tag:S,props:{type:T},children:[{type:a,tag:r,props:{},children:[{type:b,value:"How would you like to use ESLint? # 如何使用 ESLint"}]},{type:a,tag:s,props:{},children:[{type:a,tag:j,props:{},children:[{type:b,value:"仅检查语法"}]},{type:a,tag:j,props:{},children:[{type:b,value:"检查语法，发现错误 ✅"}]},{type:a,tag:j,props:{},children:[{type:b,value:"检查语法，发现错误，强制代码风格"}]}]},{type:a,tag:r,props:{},children:[{type:b,value:"What type of modules does your project use？ # 应用的模块"}]},{type:a,tag:s,props:{},children:[{type:a,tag:j,props:{},children:[{type:b,value:"import\u002Fexport ✅"}]},{type:a,tag:j,props:{},children:[{type:b,value:"require\u002Fexports"}]},{type:a,tag:j,props:{},children:[{type:b,value:U}]}]},{type:a,tag:r,props:{},children:[{type:b,value:"Which framework does your project use？ # 应用的框架"}]},{type:a,tag:s,props:{},children:[{type:a,tag:j,props:{},children:[{type:b,value:"React"}]},{type:a,tag:j,props:{},children:[{type:b,value:"Vue"}]},{type:a,tag:j,props:{},children:[{type:b,value:U}]}]},{type:a,tag:r,props:{},children:[{type:b,value:"Dose your project use TypeScript? # 是否应用 TS"}]},{type:a,tag:s,props:{},children:[{type:a,tag:j,props:{},children:[{type:b,value:"Y ✅"}]},{type:a,tag:j,props:{},children:[{type:b,value:"N"}]}]},{type:a,tag:r,props:{},children:[{type:b,value:"Where does your code run? # 应用的运行环境（可多选）"}]},{type:a,tag:s,props:{},children:[{type:a,tag:j,props:{},children:[{type:b,value:"Browser ✅"}]},{type:a,tag:j,props:{},children:[{type:b,value:"Node ✅"}]}]},{type:a,tag:r,props:{},children:[{type:b,value:"What format do you want your config file to be in? # 希望以什么格式的文件保存配置"}]},{type:a,tag:s,props:{},children:[{type:a,tag:j,props:{},children:[{type:b,value:"JavaScript ✅"}]},{type:a,tag:j,props:{},children:[{type:b,value:"YAML"}]},{type:a,tag:j,props:{},children:[{type:b,value:"JSON"}]}]}]},{type:a,tag:z,props:{id:C},children:[{type:b,value:C}]},{type:a,tag:k,props:{code:"# 对 src 所有文件夹下的所有 js,jsx,ts,tsx 文件进行检查\nnpx eslint src\u002F**\u002F*.{js,jsx,ts,tsx}\n\n# --fix 参数，对部分错误进行修复（eg. 双引号改为单引号）\nnpx eslint src\u002F**\u002F*.{js,jsx,ts,tsx} --fix\n",language:I,meta:v},children:[{type:a,tag:w,props:{},children:[{type:a,tag:k,props:{__ignoreMap:q},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:B},children:[{type:b,value:"# 对 src 所有文件夹下的所有 js,jsx,ts,tsx 文件进行检查"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:x},children:[{type:b,value:J}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:y}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:V}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:W}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:X}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:Y}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:Z}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:B},children:[{type:b,value:"# --fix 参数，对部分错误进行修复（eg. 双引号改为单引号）"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:x},children:[{type:b,value:J}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:y}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:V}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:W}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:X}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:Y}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:Z}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:"--fix"}]}]}]}]}]},{type:a,tag:z,props:{id:D},children:[{type:b,value:D}]},{type:a,tag:K,props:{id:"packagejson-中的配置"},children:[{type:b,value:"package.json 中的配置"}]},{type:a,tag:k,props:{code:"{\n  \"scripts\": {\n    \"lint\": \"npx eslint --ext .js,.jsx,.ts,.tsx src\",\n    \"lint-fix\": \"npx eslint --fix --ext .js,.jsx,.ts,.tsx src\"\n  }\n}\n",language:L,meta:v},children:[{type:a,tag:w,props:{},children:[{type:a,tag:k,props:{__ignoreMap:q},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:M}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\"scripts\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:A}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\"lint\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"\"npx eslint --ext .js,.jsx,.ts,.tsx src\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\"lint-fix\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"\"npx eslint --fix --ext .js,.jsx,.ts,.tsx src\""}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:N}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:O}]}]}]}]}]},{type:a,tag:K,props:{id:"for-vscode"},children:[{type:b,value:"For VScode"}]},{type:a,tag:S,props:{type:T},children:[{type:a,tag:r,props:{},children:[{type:b,value:"添加 ESLint 插件\n"},{type:a,tag:_,props:{},children:[]},{type:a,tag:_,props:{},children:[]},{type:b,value:"\n首选项 -\u003E 设置 -\u003E 拓展 -\u003E ESLint 配置个人喜好规则"}]},{type:a,tag:s,props:{},children:[{type:a,tag:j,props:{},children:[{type:b,value:"文本编辑器 -\u003E editor.formatOnSave = false"}]},{type:a,tag:j,props:{},children:[{type:b,value:"eslint -\u003E eslint.autoFixOnSave = true"}]}]}]},{type:a,tag:k,props:{code:"{\n  \"editor.formatOnSave\": true,\n  \"editor.codeActionsOnSave\": {\n    \"source.fixAll.eslint\": true\n  }\n}\n",language:L,meta:v},children:[{type:a,tag:w,props:{},children:[{type:a,tag:k,props:{__ignoreMap:q},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:M}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\"editor.formatOnSave\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:E}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\"editor.codeActionsOnSave\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:A}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\"source.fixAll.eslint\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:E}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:N}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:O}]}]}]}]}]},{type:a,tag:z,props:{id:$},children:[{type:b,value:aa}]},{type:a,tag:k,props:{code:"dist\nnode_modules\n",language:I,meta:v},children:[{type:a,tag:w,props:{},children:[{type:a,tag:k,props:{__ignoreMap:q},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:x},children:[{type:b,value:"dist"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:x},children:[{type:b,value:"node_modules"}]}]}]}]}]},{type:a,tag:z,props:{id:F},children:[{type:b,value:F}]},{type:a,tag:k,props:{code:"{\n  \"root\": true,\n  \"env\": {},\n\n  \"globals\": {},\n\n  \"parser\": \"\",\n\n  \"parserOptions\": {\n    \"ecmaFeatures\": {\n      \"jsx\": true\n    }\n  },\n\n  \"plugins\": [],\n\n  \"extends\": [],\n\n  \"rules\": {\n    \"semi\": \"off\",\n    \"comma-dangle\": \"off\",\n    \"no-console\": process.env.NODE_ENV === \"production\" ? \"warn\" : \"off\",\n    \"no-debugger\": process.env.NODE_ENV === \"production\" ? \"warn\" : \"off\"\n  }\n}\n",language:L,meta:v},children:[{type:a,tag:w,props:{},children:[{type:a,tag:k,props:{__ignoreMap:q},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:M}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\"root\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:E}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\"env\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:ab}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\"globals\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:ab}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\"parser\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"\"\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\"parserOptions\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:A}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\"ecmaFeatures\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:A}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"      "}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\"jsx\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:E}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"    }"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"  },"}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\"plugins\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:ac}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\"extends\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:ac}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\"rules\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:A}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\"semi\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:G}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\"comma-dangle\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:G}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\"no-console\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:p},children:[{type:b,value:ad}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:p},children:[{type:b,value:ae}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:af}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:p},children:[{type:b,value:ag}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:ah}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:p},children:[{type:b,value:ai}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:G}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\"no-debugger\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:p},children:[{type:b,value:ad}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:p},children:[{type:b,value:ae}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:af}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:p},children:[{type:b,value:ag}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:ah}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:p},children:[{type:b,value:ai}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:G}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:N}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:O}]}]}]}]}]},{type:a,tag:"style",children:[{type:b,value:".ct-3e01fc{color:#FF938A}\n.ct-0fd0ff{color:#8DDB8C}\n.ct-7bf34d{color:#6CB6FF}\n.ct-fab2a1{color:#96D0FF}\n.ct-0e926a{color:#ADBAC7}\n.ct-155fd8{color:#F69D50}\n.ct-783478{color:#768390}"}]}],toc:{title:q,searchDepth:u,depth:u,links:[{id:P,depth:u,text:Q},{id:C,depth:u,text:C},{id:D,depth:u,text:D},{id:$,depth:u,text:aa},{id:F,depth:u,text:F}]}},_type:"markdown",_id:"content:docs:21.eslint.md",_source:"content",_file:"docs\u002F21.eslint.md",_extension:"md"}},prerenderedAt:1679018695969}}("element","text","span","ct-0e926a","div","line"," ","ct-fab2a1","ct-0fd0ff","li","code","ct-7bf34d","  ",": ","    ","ct-3e01fc","","p","ul",",",2,null,"pre","ct-155fd8","eslint","h2",": {","ct-783478","静态检查","常见项目自动化配置","true","常见项目自定义规则","\"off\"",false,"bash","npx","h4","json","{","  }","}","安装初始化","安装&初始化","初始化配置选择","alert","output","都不是","src\u002F","**","\u002F","*",".{js,jsx,ts,tsx}","br","配置-eslintignore-忽略文件","配置 .eslintignore 忽略文件",": {},",": [],","process.env.NODE_ENV","===","\"production\"","?","\"warn\"",":"))