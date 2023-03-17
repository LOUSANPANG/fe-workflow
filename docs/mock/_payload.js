export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U){return {data:{"content-query-Ta2NtHVI5t":{_path:"\u002Fdocs\u002Fmock",_dir:"docs",_draft:x,_partial:x,_locale:"en",_empty:x,title:H,description:"Mock开发使用指南",body:{type:"root",children:[{type:a,tag:"h1",props:{id:I},children:[{type:b,value:H}]},{type:a,tag:u,props:{id:J},children:[{type:b,value:K}]},{type:a,tag:i,props:{},children:[{type:a,tag:j,props:{class:k,href:"https:\u002F\u002Fwww.apifox.cn\u002F?utm_source=zhihu&utm_medium=article_10001&utm_content=141425111",rel:[l]},children:[{type:b,value:"apifox 🌟"}]}]},{type:a,tag:i,props:{},children:[{type:a,tag:j,props:{class:k,href:"https:\u002F\u002Fmock.presstime.cn\u002F",rel:[l]},children:[{type:b,value:"easy-mock 🌟"}]}]},{type:a,tag:i,props:{},children:[{type:a,tag:j,props:{class:k,href:"https:\u002F\u002Fhellosean1025.github.io\u002Fyapi\u002Fdocuments\u002Findex.html",rel:[l]},children:[{type:b,value:"yapi 接口文档"}]}]},{type:a,tag:i,props:{},children:[{type:a,tag:j,props:{class:k,href:"https:\u002F\u002Fswagger.io\u002F",rel:[l]},children:[{type:b,value:"Swagger 接口文档"}]}]},{type:a,tag:i,props:{},children:[{type:a,tag:j,props:{class:k,href:"https:\u002F\u002Fwww.postman.com\u002F",rel:[l]},children:[{type:b,value:"Postman 接口测试"}]}]},{type:a,tag:u,props:{id:L},children:[{type:b,value:M}]},{type:a,tag:i,props:{},children:[{type:a,tag:j,props:{class:k,href:"http:\u002F\u002Fmockjs.com\u002F",rel:[l]},children:[{type:b,value:"mock.js"}]}]},{type:a,tag:"br",props:{},children:[]},{type:a,tag:r,props:{id:"配置-mock-环境"},children:[{type:b,value:"配置 Mock 环境"}]},{type:a,tag:v,props:{code:"# 安装\npnpm add -D mockjs\n# OR\n\u003Cscript src=\"http:\u002F\u002Fmockjs.com\u002Fdist\u002Fmock.js\"\u003E\u003C\u002Fscript\u003E\n\n# 目录\n├─mock\n│  ├─test\n│  │  └─index.ts\n",language:"bash",meta:N},children:[{type:a,tag:O,props:{},children:[{type:a,tag:v,props:{__ignoreMap:y},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:o},children:[{type:b,value:"# 安装"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:m},children:[{type:b,value:"pnpm"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:s}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"add"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:s}]},{type:a,tag:c,props:{class:z},children:[{type:b,value:"-D"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:s}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"mockjs"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:o},children:[{type:b,value:"# OR"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:n},children:[{type:b,value:"\u003C"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"script src"}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:"="}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"\"http:\u002F\u002Fmockjs.com\u002Fdist\u002Fmock.js\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"\u003E\u003C"}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"\u002Fscrip"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"t"}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:"\u003E"}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:o},children:[{type:b,value:"# 目录"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:m},children:[{type:b,value:"├─mock"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:m},children:[{type:b,value:A}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"├─test"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:m},children:[{type:b,value:A}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:A}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"└─index.ts"}]}]}]}]}]},{type:a,tag:r,props:{id:P},children:[{type:b,value:P}]},{type:a,tag:v,props:{code:"\u002F\u002F 配置 Mock\nimport Mock from 'mockjs'\n\n\u002F\u002F 数据随机规则 http:\u002F\u002Fmockjs.com\u002Fexamples.html\nMock.mock('\u002Fapi\u002Fnews\u002Flist', 'get', () =\u003E {\n  status: 200,\n  'data|1-10': [{\n    'id|+1': 1,\n    'title': '@string',\n    'date': 'Mock.Random.date(\"yyyy-MM-dd\")'\n  }],\n  message: '获取新闻列表数据成功'\n})\n\n\u002F\u002F 使用\naxios.get('\u002Fapi\u002Fnews\u002Flist')\n  .then(res =\u003E console.log(res))\n",language:"js",meta:N},children:[{type:a,tag:O,props:{},children:[{type:a,tag:v,props:{__ignoreMap:y},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:o},children:[{type:b,value:"\u002F\u002F 配置 Mock"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:n},children:[{type:b,value:"import"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" Mock "}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:"from"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:s}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"'mockjs'"}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:o},children:[{type:b,value:"\u002F\u002F 数据随机规则 http:\u002F\u002Fmockjs.com\u002Fexamples.html"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"Mock."}]},{type:a,tag:c,props:{class:w},children:[{type:b,value:I}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:B}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:Q}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:", "}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"'get'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:", () "}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:R}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" {"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:m},children:[{type:b,value:"status"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]},{type:a,tag:c,props:{class:z},children:[{type:b,value:"200"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:C}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"'data|1-10'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:": [{"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:D}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"'id|+1'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]},{type:a,tag:c,props:{class:z},children:[{type:b,value:"1"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:C}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:D}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"'title'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"'@string'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:C}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:D}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"'date'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"'Mock.Random.date(\"yyyy-MM-dd\")'"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"  }],"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:m},children:[{type:b,value:"message"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"'获取新闻列表数据成功'"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"})"}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:o},children:[{type:b,value:"\u002F\u002F 使用"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"axios."}]},{type:a,tag:c,props:{class:w},children:[{type:b,value:"get"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:B}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:Q}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:")"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"  ."}]},{type:a,tag:c,props:{class:w},children:[{type:b,value:"then"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:B}]},{type:a,tag:c,props:{class:m},children:[{type:b,value:"res"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:s}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:R}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" console."}]},{type:a,tag:c,props:{class:w},children:[{type:b,value:"log"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"(res))"}]}]}]}]}]},{type:a,tag:u,props:{id:S},children:[{type:b,value:E}]},{type:a,tag:i,props:{},children:[{type:a,tag:j,props:{class:k,href:"https:\u002F\u002Fwww.charlesproxy.com\u002F",rel:[l]},children:[{type:b,value:E}]}]},{type:a,tag:r,props:{id:"charles-设置成系统代理"},children:[{type:b,value:"Charles 设置成系统代理"}]},{type:a,tag:F,props:{},children:[{type:a,tag:h,props:{},children:[{type:b,value:"菜单 Proxy –\u003E macOS Proxy"}]},{type:a,tag:h,props:{},children:[{type:b,value:"默认情况下无法截取 Chrome 和 Firefox 浏览器的网络通讯内容。"}]},{type:a,tag:h,props:{},children:[{type:b,value:"如果你需要截取的话，在 Chrome 中设置成使用系统的代理服务器设置即可，或者直接将代理服务器设置成 127.0.0.1:8888 也可达到相同效果。"}]}]},{type:a,tag:r,props:{id:"iphone-手机上的网络封包"},children:[{type:b,value:"iPhone 手机上的网络封包"}]},{type:a,tag:F,props:{},children:[{type:a,tag:h,props:{},children:[{type:b,value:"菜单 Proxy –\u003E Proxy Settings"}]},{type:a,tag:h,props:{},children:[{type:b,value:"填入代理端口 8888"}]},{type:a,tag:h,props:{},children:[{type:b,value:"勾上 \"Enable transparent HTTP proxying\""}]},{type:a,tag:h,props:{},children:[{type:b,value:"菜单 Help –\u003E Local IP Address，复制 IP 地址"}]},{type:a,tag:h,props:{},children:[{type:b,value:"iPhone 的 设置 –\u003E 无线局域网，当前连接的 wifi 名，通过点击右边的详情键，最下边 HTTP 代理切换成手动，填上 Charles 运行所在的电脑的 IP，以及端口号 8888"}]},{type:a,tag:h,props:{},children:[{type:b,value:"Allow Charles 请求连接"}]}]},{type:a,tag:r,props:{id:T},children:[{type:b,value:T}]},{type:a,tag:F,props:{},children:[{type:a,tag:h,props:{},children:[{type:b,value:"支持重发网络请求，方便后端调试"}]},{type:a,tag:h,props:{},children:[{type:b,value:"支持修改网络请求参数"}]},{type:a,tag:h,props:{},children:[{type:b,value:"支持网络请求的截获并动态修改"}]},{type:a,tag:h,props:{},children:[{type:b,value:"支持模拟慢速网络"}]},{type:a,tag:h,props:{},children:[{type:b,value:"Structure 视图将网络请求按访问的域名分类"}]},{type:a,tag:h,props:{},children:[{type:b,value:"Sequence 视图将网络请求按访问的时间排序"}]},{type:a,tag:h,props:{},children:[{type:b,value:"Map 功能适合长期地将某一些请求重定向到另一个网络地址或本地文件"}]},{type:a,tag:h,props:{},children:[{type:b,value:"Rewrite 功能适合对网络请求进行一些正则替换"}]},{type:a,tag:h,props:{},children:[{type:b,value:"Breakpoints 功能适合做一些临时性的修改"}]}]},{type:a,tag:u,props:{id:U},children:[{type:b,value:G}]},{type:a,tag:i,props:{},children:[{type:a,tag:j,props:{class:k,href:"http:\u002F\u002Fwproxy.org\u002Fwhistle\u002F",rel:[l]},children:[{type:b,value:G}]}]},{type:a,tag:"style",children:[{type:b,value:".ct-c37d54{color:#DCBDFB}\n.ct-d19269{color:#F47067}\n.ct-0aee6e{color:#6CB6FF}\n.ct-625d0a{color:#96D0FF}\n.ct-7695d5{color:#ADBAC7}\n.ct-2eb178{color:#F69D50}\n.ct-942705{color:#768390}"}]}],toc:{title:y,searchDepth:q,depth:q,links:[{id:J,depth:q,text:K},{id:L,depth:q,text:M},{id:S,depth:q,text:E},{id:U,depth:q,text:G}]}},_type:"markdown",_id:"content:docs:54.mock.md",_source:"content",_file:"docs\u002F54.mock.md",_extension:"md"}},prerenderedAt:1679018696408}}("element","text","span","ct-7695d5","div","line","ct-625d0a","li","p","a","doclink","nofollow","ct-2eb178","ct-d19269","ct-942705","  ",2,"h4"," ",": ","h2","code","ct-c37d54",false,"","ct-0aee6e","│","(",",","    ","charles 抓包工具","ul","whistle 抓包工具","Mock","mock","mock方案1使用接口管理平台","MOCK方案1：使用接口管理平台，","mock方案2手动-mock-模拟并拦截-ajax-请求","MOCK方案2：手动 Mock 模拟并拦截 Ajax 请求",null,"pre","使用","'\u002Fapi\u002Fnews\u002Flist'","=\u003E","charles-抓包工具","其他","whistle-抓包工具"))