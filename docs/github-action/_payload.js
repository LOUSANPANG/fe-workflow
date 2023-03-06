export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L){return {data:{"content-query-is8X1JNEVK":{_path:"\u002Fdocs\u002Fgithub-action",_dir:"docs",_draft:t,_partial:t,_locale:"en",_empty:t,title:y,description:y,body:{type:"root",children:[{type:a,tag:"h1",props:{id:"github-actions-自动化部署"},children:[{type:c,value:"GitHub Actions 自动化部署"}]},{type:a,tag:"p",props:{},children:[{type:a,tag:"a",props:{class:"doclink",href:"https:\u002F\u002Fgithub.com\u002Fmarketplace?type=actions",rel:["nofollow"]},children:[{type:c,value:"Actions 市场"}]}]},{type:a,tag:u,props:{id:o},children:[{type:c,value:o}]},{type:a,tag:v,props:{},children:[{type:a,tag:i,props:{},children:[{type:c,value:"在项目仓库找到 Settings\u002FSecrets\u002FActions"}]},{type:a,tag:i,props:{},children:[{type:c,value:"New repository secret"}]},{type:a,tag:i,props:{},children:[{type:c,value:"填写 New secret 的 Name* 和 Secret*"}]}]},{type:a,tag:u,props:{id:p},children:[{type:c,value:p}]},{type:a,tag:v,props:{},children:[{type:a,tag:i,props:{},children:[{type:c,value:"package.json 添加 homepage 字段"}]},{type:a,tag:i,props:{},children:[{type:c,value:"\"homepage\": \"https:\u002F\u002F"},{type:a,tag:b,props:{},children:[{type:c,value:z}]},{type:c,value:".github.io\u002F"},{type:a,tag:b,props:{},children:[{type:c,value:A}]},{type:c,value:"\""}]},{type:a,tag:i,props:{},children:[{type:a,tag:b,props:{},children:[{type:c,value:z}]},{type:c,value:" 为你的 GitHub 用户名"}]},{type:a,tag:i,props:{},children:[{type:a,tag:b,props:{},children:[{type:c,value:A}]},{type:c,value:" 项目路由 例如 fe-workflow"}]}]},{type:a,tag:u,props:{id:B},children:[{type:c,value:C}]},{type:a,tag:v,props:{},children:[{type:a,tag:i,props:{},children:[{type:c,value:"创建 .github\u002Fworkflows 目录，新增 ci.yml"}]},{type:a,tag:i,props:{},children:[{type:c,value:"选用 JamesIves\u002Fgithub-pages-deploy-action 范例文件"}]}]},{type:a,tag:D,props:{code:"name: fe-workflow Deploy\n\n# 整个流程在master分支发生push事件时触发\non:\n  push:\n    branches: [master]\n  pull_request:\n    branches: [master]\n\njobs:\n  # 只有一个job，运行在虚拟机环境 ubuntu-latest\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n      # 第一步是获取源码，使用 actions\u002Fcheckout命令\n      - name: Checkout\n        uses: actions\u002Fcheckout@v2\n        with:\n          persist-credentials: false\n\n      # 第二步 打包构建项目\n      - name: Generate\n        run: |\n          npm install\n          npm run build\n          npm run generate\n\n      # 第三步是构建和部署，使用 amesIves\u002Fgithub-pages-deploy-action@releases\u002Fv3 命令\n      # 需要三个环境变量，分别为 GitHub 密钥、发布分支、构建成果所在目录。其中，只有 GitHub 密钥是秘密变量，需要写在双括号里面，其余都可以直接写在文件里\n      - name: Deploy\n        uses: JamesIves\u002Fgithub-pages-deploy-action@releases\u002Fv3\n        with:\n          ACCESS_TOKEN: ${{ secrets.xxx }}\n          BRANCH: gh-pages\n          FOLDER: dist\n",language:"bash",meta:null},children:[{type:a,tag:"pre",props:{},children:[{type:a,tag:D,props:{__ignoreMap:E},children:[{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:f},children:[{type:c,value:q}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:"fe-workflow"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:F}]}]},{type:a,tag:b,props:{class:e},children:[]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:l},children:[{type:c,value:"# 整个流程在master分支发生push事件时触发"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:f},children:[{type:c,value:"on:"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:r}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"push:"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:s}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:G}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:H}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:r}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"pull_request:"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:s}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:G}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:H}]}]},{type:a,tag:b,props:{class:e},children:[]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:I},children:[{type:c,value:"jobs"}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:":"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:r}]},{type:a,tag:b,props:{class:l},children:[{type:c,value:"# 只有一个job，运行在虚拟机环境 ubuntu-latest"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:r}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"build-and-deploy:"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:s}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"runs-on:"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:"ubuntu-latest"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:s}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"steps:"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:j}]},{type:a,tag:b,props:{class:l},children:[{type:c,value:"# 第一步是获取源码，使用 actions\u002Fcheckout命令"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:j}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:w}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:q}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:"Checkout"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:J}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:"actions\u002Fcheckout@v2"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:K}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:k}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"persist-credentials:"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:I},children:[{type:c,value:"false"}]}]},{type:a,tag:b,props:{class:e},children:[]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:j}]},{type:a,tag:b,props:{class:l},children:[{type:c,value:"# 第二步 打包构建项目"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:j}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:w}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:q}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:"Generate"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"run:"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:"ct-4cff2b"},children:[{type:c,value:"|"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:k}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:x}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:"install"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:k}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:x}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:L}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:"build"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:k}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:x}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:L}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:"generate"}]}]},{type:a,tag:b,props:{class:e},children:[]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:j}]},{type:a,tag:b,props:{class:l},children:[{type:c,value:"# 第三步是构建和部署，使用 amesIves\u002Fgithub-pages-deploy-action@releases\u002Fv3 命令"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:j}]},{type:a,tag:b,props:{class:l},children:[{type:c,value:"# 需要三个环境变量，分别为 GitHub 密钥、发布分支、构建成果所在目录。其中，只有 GitHub 密钥是秘密变量，需要写在双括号里面，其余都可以直接写在文件里"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:j}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:w}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:q}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:F}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:J}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:"JamesIves\u002Fgithub-pages-deploy-action@releases\u002Fv3"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:K}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:k}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"ACCESS_TOKEN:"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:" ${{ secrets.xxx }"}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:"}"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:k}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"BRANCH:"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:"gh-pages"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:k}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"FOLDER:"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:"dist"}]}]}]}]}]},{type:a,tag:"style",children:[{type:c,value:".ct-4cff2b{color:#F47067}\n.ct-08c120{color:#6CB6FF}\n.ct-d7f3f1{color:#768390}\n.ct-961661{color:#96D0FF}\n.ct-ac3fd8{color:#ADBAC7}\n.ct-836cce{color:#F69D50}"}]}],toc:{title:E,searchDepth:n,depth:n,links:[{id:o,depth:n,text:o},{id:p,depth:n,text:p},{id:B,depth:n,text:C}]}},_type:"markdown",_id:"content:docs:152.github-action.md",_source:"content",_file:"docs\u002F152.github-action.md",_extension:"md"}},prerenderedAt:1678090661487}}("element","span","text","ct-ac3fd8","line","ct-836cce"," ","ct-961661","li","      ","          ","ct-d7f3f1","        ",2,"设置仓库密钥","配置域名地址","name:","  ","    ",false,"h2","ul","-","npm","Github自动化部署","username","route","配置-ci","配置 CI","code","","Deploy","branches:"," [master]","ct-08c120","uses:","with:","run"))