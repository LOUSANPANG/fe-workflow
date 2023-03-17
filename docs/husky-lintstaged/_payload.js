export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X){return {data:{"content-query-eRV1YLPJBQ":{_path:"\u002Fdocs\u002Fhusky-lintstaged",_dir:"docs",_draft:w,_partial:w,_locale:"en",_empty:w,title:"Husky&Lintstaged",description:"Husky&Lintstaged配置使用指南",body:{type:"root",children:[{type:a,tag:"h1",props:{id:"husky-lintstaged"},children:[{type:b,value:"Husky & Lintstaged"}]},{type:a,tag:s,props:{id:"husky-配置-git-hooks在代码提交不同阶段进行质量检测"},children:[{type:b,value:"Husky 配置 Git Hooks，在代码提交不同阶段进行质量检测。"}]},{type:a,tag:s,props:{id:"lint-staged-取消全量检测整个仓库对待提交区做到增量代码检测"},children:[{type:b,value:"lint-staged 取消全量检测整个仓库，对待提交区做到增量代码检测。"}]},{type:a,tag:s,props:{id:"配合-husky由-husky-触发-lint-staged再由-lint-staged-执行检测脚本"},children:[{type:b,value:"配合 husky，由 husky 触发 lint-staged，再由 lint-staged 执行检测脚本。"}]},{type:a,tag:"alert",props:{type:"info"},children:[{type:a,tag:"p",props:{},children:[{type:b,value:"不同阶段 Git Hooks\n"},{type:a,tag:m,props:{},children:[]},{type:b,value:h},{type:a,tag:m,props:{},children:[]},{type:b,value:"\npre-commit # git commit 执行前\n"},{type:a,tag:m,props:{},children:[]},{type:b,value:h},{type:a,tag:m,props:{},children:[]},{type:b,value:"\ncommit-msg # git commit 执行前（检测 commit 信息）\n"},{type:a,tag:m,props:{},children:[]},{type:b,value:h},{type:a,tag:m,props:{},children:[]},{type:b,value:"\npre-push # git push 执行前"}]}]},{type:a,tag:x,props:{id:t},children:[{type:b,value:t}]},{type:a,tag:j,props:{code:"pnpm add husky lint-staged -D\n",language:D,meta:p},children:[{type:a,tag:q,props:{},children:[{type:a,tag:j,props:{__ignoreMap:n},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:y},children:[{type:b,value:E}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:F}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:G}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"lint-staged"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:"ct-e48928"},children:[{type:b,value:"-D"}]}]}]}]}]},{type:a,tag:x,props:{id:H},children:[{type:b,value:I}]},{type:a,tag:j,props:{code:"# 在 package.json 中添加脚本\n{\n  \"scripts\": {\n    \"prepare\": \"husky install\"\n  }\n}\n",language:z,meta:p},children:[{type:a,tag:q,props:{},children:[{type:a,tag:j,props:{__ignoreMap:n},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"# 在 package.json 中添加脚本"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:J}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\"scripts\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:u}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\"prepare\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:K}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"\"husky install\""}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:L}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:A}]}]}]}]}]},{type:a,tag:j,props:{code:"# 初始化 husky，husky 代替 git hooks (根目录创建 .husky 文件夹)\npnpm prepare\n\n# .husky\u002Fpre-commit 添加触发命令（提交代码时会执行 lint-staged 进行暂存代码检查）\nnpx husky add .husky\u002Fpre-commit'echo \\\"git commit trigger husky pre-commit hook\\\" && npx lint-staged'\n",language:D,meta:p},children:[{type:a,tag:q,props:{},children:[{type:a,tag:j,props:{__ignoreMap:n},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:M},children:[{type:b,value:"# 初始化 husky，husky 代替 git hooks (根目录创建 .husky 文件夹)"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:y},children:[{type:b,value:E}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"prepare"}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:M},children:[{type:b,value:"# .husky\u002Fpre-commit 添加触发命令（提交代码时会执行 lint-staged 进行暂存代码检查）"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:y},children:[{type:b,value:"npx"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:G}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:F}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:".husky\u002Fpre-commit'echo \\\"git commit trigger husky pre-commit hook\\\" && npx lint-staged'"}]}]}]}]}]},{type:a,tag:s,props:{id:"创建-lintstagedrc"},children:[{type:b,value:"创建 .lintstagedrc"}]},{type:a,tag:j,props:{code:"{\n  \"*.vue\": [\"prettier --write .\", \"eslint  --fix\", \"stylelint --fix\"],\n  \"*.{js,jsx,ts,tsx}\": [\"prettier --write .\", \"eslint  --fix\"],\n  \"*.md\": [\"prettier --write\"],\n  \"*.{htm,html,css,sss,less,scss,sass}\": [\"stylelint --fix\"]\n}\n",language:z,meta:p},children:[{type:a,tag:q,props:{},children:[{type:a,tag:j,props:{__ignoreMap:n},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:J}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:N}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:O}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:B}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:P}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:B}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:v}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:C}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:Q}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:O}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:B}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:P}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:C}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\"*.md\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"\"prettier --write\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:C}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:R}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:v}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"]"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:A}]}]}]}]}]},{type:a,tag:x,props:{id:S},children:[{type:b,value:T}]},{type:a,tag:j,props:{code:"\"husky\": {\n  \"hooks\": {\n    \"pre-commit\": \"lint-staged\",\n  }\n},\n\"lint-staged\": {\n  \"*.vue\": [\n    \"eslint --fix\",\n    \"stylelint --fix\"\n  ],\n  \"*.{js,jsx,ts,tsx}\": [\n    \"eslint --fix\"\n  ],\n  \"*.{htm,html,css,sss,less,scss,sass}\": [\n    \"stylelint --fix\"\n  ]\n}\n",language:z,meta:p},children:[{type:a,tag:q,props:{},children:[{type:a,tag:j,props:{__ignoreMap:n},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:"\"husky\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:u}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\"hooks\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:u}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\"pre-commit\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:K}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:U}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:V}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:L}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"},"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:U}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:u}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:N}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:W}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:V}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:v}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:X}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:Q}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:W}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:X}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:R}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:v}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"  ]"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:A}]}]}]}]}]},{type:a,tag:"style",children:[{type:b,value:".ct-8a1356{color:#768390}\n.ct-7d8694{color:#8DDB8C}\n.ct-e48928{color:#6CB6FF}\n.ct-ce77ae{color:#96D0FF}\n.ct-75fc0a{color:#ADBAC7}\n.ct-c4654e{color:#F69D50}"}]}],toc:{title:n,searchDepth:r,depth:r,links:[{id:t,depth:r,text:t},{id:H,depth:r,text:I},{id:S,depth:r,text:T}]}},_type:"markdown",_id:"content:docs:31.husky-lintstaged.md",_source:"content",_file:"docs\u002F31.husky-lintstaged.md",_extension:"md"}},prerenderedAt:1679018696200}}("element","text","span","ct-75fc0a","div","line","ct-ce77ae"," ","ct-7d8694","code","  ",": [","br","","    ",null,"pre",2,"h4","安装",": {","\"stylelint --fix\"",false,"h2","ct-c4654e","json","}",", ","],","bash","pnpm","add","husky","配置方法一通过配置脚本","【配置方法一】通过配置脚本","{",": ","  }","ct-8a1356","\"*.vue\"","\"prettier --write .\"","\"eslint  --fix\"","\"*.{js,jsx,ts,tsx}\"","\"*.{htm,html,css,sss,less,scss,sass}\"","配置方法二通过配置-packagejson","【配置方法二】通过配置 package.json","\"lint-staged\"",",","\"eslint --fix\"","  ],"))