"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5572],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=l,y=m["".concat(u,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8004:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),i=["components"],o={title:"\ud83e\udd1d \u96c6\u7fa4",sidebar_position:10},u=void 0,c={unversionedId:"mysql/cluster",id:"mysql/cluster",isDocsHomePage:!1,title:"\ud83e\udd1d \u96c6\u7fa4",description:"----",source:"@site/source/mysql/cluster.mdx",sourceDirName:"mysql",slug:"/mysql/cluster",permalink:"/mysql/cluster",version:"current",lastUpdatedAt:1629107600,formattedLastUpdatedAt:"2021/8/16",sidebarPosition:10,frontMatter:{title:"\ud83e\udd1d \u96c6\u7fa4",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc42 \u89c6\u56fe",permalink:"/mysql/view"},next:{title:"\ud83d\ude47\u200d\u2642\ufe0f Redis \u57fa\u7840",permalink:"/redis/redis-basic"}},p=[{value:"MySQL \u96c6\u7fa4\u6709\u54ea\u51e0\u79cd\u65b9\u5f0f\uff0c\u5206\u522b\u9002\u7528\u4e8e\u4ec0\u4e48\u573a\u666f\uff1f",id:"mysql-\u96c6\u7fa4\u6709\u54ea\u51e0\u79cd\u65b9\u5f0f\uff0c\u5206\u522b\u9002\u7528\u4e8e\u4ec0\u4e48\u573a\u666f\uff1f",children:[]},{value:"MySQL \u96c6\u7fa4\u5982\u4f55\u4fdd\u8bc1\u4e3b\u4ece\u53ef\u7528\u6027\uff1f",id:"mysql-\u96c6\u7fa4\u5982\u4f55\u4fdd\u8bc1\u4e3b\u4ece\u53ef\u7528\u6027\uff1f",children:[]},{value:"MySQL \u4e3b\u4ece\u590d\u5236\u7684\u539f\u7406\uff1f",id:"mysql-\u4e3b\u4ece\u590d\u5236\u7684\u539f\u7406\uff1f",children:[]},{value:"MySQL \u4e3b\u4ece\u6a21\u5f0f\u5982\u4f55\u4fdd\u8bc1\u4e3b\u4ece\u5f3a\u4e00\u81f4\u6027\uff1f",id:"mysql-\u4e3b\u4ece\u6a21\u5f0f\u5982\u4f55\u4fdd\u8bc1\u4e3b\u4ece\u5f3a\u4e00\u81f4\u6027\uff1f",children:[{value:"\u4e3b\u670d\u52a1\u5668",id:"\u4e3b\u670d\u52a1\u5668",children:[]},{value:"\u4ece\u670d\u52a1\u5668",id:"\u4ece\u670d\u52a1\u5668",children:[]}]},{value:"MySQL \u8bfb\u5199\u5206\u79bb\u6709\u54ea\u4e9b\u89e3\u51b3\u529e\u6cd5\uff1f",id:"mysql-\u8bfb\u5199\u5206\u79bb\u6709\u54ea\u4e9b\u89e3\u51b3\u529e\u6cd5\uff1f",children:[]}],s={toc:p};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"mysql-\u96c6\u7fa4\u6709\u54ea\u51e0\u79cd\u65b9\u5f0f\uff0c\u5206\u522b\u9002\u7528\u4e8e\u4ec0\u4e48\u573a\u666f\uff1f"},"MySQL \u96c6\u7fa4\u6709\u54ea\u51e0\u79cd\u65b9\u5f0f\uff0c\u5206\u522b\u9002\u7528\u4e8e\u4ec0\u4e48\u573a\u666f\uff1f"),(0,a.kt)("p",null,"\u7ec4\u5efa MySQL \u96c6\u7fa4\u7684\u65b9\u5f0f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"LVS + Keepalived + MySQL"),(0,a.kt)("li",{parentName:"ul"},"DRBD + Heartbeat + MySQL"),(0,a.kt)("li",{parentName:"ul"},"MySQL + Proxy"),(0,a.kt)("li",{parentName:"ul"},"MySQL Cluster"),(0,a.kt)("li",{parentName:"ul"},"MySQL + MHA"),(0,a.kt)("li",{parentName:"ul"},"MySQL + MMM")),(0,a.kt)("p",null,"\u4f7f\u7528\u573a\u666f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u53cc\u4e3b\u590d\u5236\uff0c\u4e0d\u9700\u8981\u6570\u636e\u62c6\u5206\uff0c\u53ef\u4ee5\u4f7f\u7528 MHA \u6216 Keepalived \u6216 Heartbeat"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u53cc\u4e3b\u590d\u5236\uff0c\u9700\u8981\u6570\u636e\u62c6\u5206\uff0c\u91c7\u7528 Cobar"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u53cc\u4e3b\u590d\u5236 + Slave\uff0c\u8fd8\u505a\u4e86\u6570\u636e\u62c6\u5206\uff0c\u9700\u8981\u8bfb\u5199\u5206\u79bb\uff0c\u91c7\u7528 Amoeba")),(0,a.kt)("h2",{id:"mysql-\u96c6\u7fa4\u5982\u4f55\u4fdd\u8bc1\u4e3b\u4ece\u53ef\u7528\u6027\uff1f"},"MySQL \u96c6\u7fa4\u5982\u4f55\u4fdd\u8bc1\u4e3b\u4ece\u53ef\u7528\u6027\uff1f"),(0,a.kt)("p",null,"\u4f7f\u7528 HA\uff08High Availability\uff09 \u68c0\u6d4b\u5de5\u5177\u3002HA \u5de5\u5177\u90e8\u7f72\u5728\u7b2c\u4e09\u53f0\u670d\u52a1\u5668\u4e0a\uff0c\u540c\u65f6\u8fde\u63a5\u4e3b\u4ece\uff0c\u68c0\u6d4b\u4e3b\u4ece\u662f\u5426\u5b58\u6d3b\u3002\u5982\u679c\u4e3b\u5e93\u5b95\u673a\u5219\u53ca\u65f6\u5c06\u4ece\u5e93\u5347\u7ea7\u4e3a\u4e3b\u5e93\uff0c\u5c06\u539f\u6765\u7684\u4e3b\u5e93\u964d\u7ea7\u4e3a\u4ece\u5e93\u3002"),(0,a.kt)("h2",{id:"mysql-\u4e3b\u4ece\u590d\u5236\u7684\u539f\u7406\uff1f"},"MySQL \u4e3b\u4ece\u590d\u5236\u7684\u539f\u7406\uff1f"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.loli.net/2021/07/30/cwYKFULqp7zToQ8.png",alt:"MySQL\u4e3b\u4ece.png"})),(0,a.kt)("h2",{id:"mysql-\u4e3b\u4ece\u6a21\u5f0f\u5982\u4f55\u4fdd\u8bc1\u4e3b\u4ece\u5f3a\u4e00\u81f4\u6027\uff1f"},"MySQL \u4e3b\u4ece\u6a21\u5f0f\u5982\u4f55\u4fdd\u8bc1\u4e3b\u4ece\u5f3a\u4e00\u81f4\u6027\uff1f"),(0,a.kt)("p",null,"\u4e3b\u4ece\u590d\u5236\u7684\u539f\u7406\u662f\uff1a\u4e3b\u670d\u52a1\u5668\u5199\u6570\u636e\u7559\u4e0b\u5199\u5165\u65e5\u5fd7\uff08Binary log\uff09\uff0c\u4ece\u670d\u52a1\u5668\u6839\u636e\u4e3b\u670d\u52a1\u5668\u7559\u4e0b\u7684\u65e5\u5fd7\uff08Relay log\uff09\u6a21\u4eff\u6570\u636e\u6267\u884c\u8fc7\u7a0b\u5199\u5165\u3002\u6240\u4ee5\u6709\u4e24\u4e2a\u6b65\u9aa4\u53ef\u80fd\u5bfc\u81f4\u4e3b\u4ece\u590d\u5236\u4e0d\u4e00\u81f4\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u670d\u52a1\u5668\u5199\u65e5\u5fd7\u4e0d\u6210\u529f"),(0,a.kt)("li",{parentName:"ul"},"\u4ece\u670d\u52a1\u5668\u6839\u636e\u65e5\u5fd7\u6062\u590d\u4e0d\u6210\u529f")),(0,a.kt)("h3",{id:"\u4e3b\u670d\u52a1\u5668"},"\u4e3b\u670d\u52a1\u5668"),(0,a.kt)("p",null,"\u4fee\u6539\u914d\u7f6e\uff0c\u4fdd\u8bc1\u6bcf\u6b21\u4e8b\u52a1\u63d0\u4ea4\u540e\uff0c\u90fd\u80fd\u5b9e\u65f6\u5237\u65b0\u5230\u78c1\u76d8\u4e2d\uff0c\u5c24\u5176\u662f\u786e\u4fdd\u6bcf\u6b21\u4e8b\u52a1\u5bf9\u5e94\u7684 binlog \u90fd\u80fd\u53ca\u65f6\u5237\u65b0\u5230\u78c1\u76d8\u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"innodb_flush_log_at_trx_commit = 1\nsync_binlog = 1\n")),(0,a.kt)("h3",{id:"\u4ece\u670d\u52a1\u5668"},"\u4ece\u670d\u52a1\u5668"),(0,a.kt)("p",null,"\u4fee\u6539\u914d\u7f6e\uff0c\u786e\u4fdd\u5728\u4ece\u670d\u52a1\u5668\u4e0a\u548c\u590d\u5236\u76f8\u5173\u7684\u5143\u6570\u636e\u8868\u4e5f\u91c7\u7528 InnoDB \u5f15\u64ce\uff0c\u53d7\u5230 InnoDB \u4e8b\u52a1\u5b89\u5168\u7684\u4fdd\u62a4\u3002\u540e\u4e00\u4e2a\u9009\u9879\u7684\u4f5c\u7528\u662f\u5f00\u542f relay log \u81ea\u52a8\u4fee\u590d\u673a\u5236\uff0c\u53d1\u751f crash \u65f6\uff0c\u4f1a\u81ea\u52a8\u5224\u65ad\u54ea\u4e9b relay log \u9700\u8981\u91cd\u65b0\u4ece\u4e3b\u670d\u52a1\u5668\u4e0a\u6293\u53d6\u56de\u6765\u518d\u6b21\u5e94\u7528\uff0c\u4ee5\u6b64\u907f\u514d\u90e8\u5206\u6570\u636e\u4e22\u5931\u7684\u53ef\u80fd\u6027\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'master_info_repository = "TABLE"\nrelay_log_info_repository = "TABLE"\nrelay_log_recovery = 1\n')),(0,a.kt)("h2",{id:"mysql-\u8bfb\u5199\u5206\u79bb\u6709\u54ea\u4e9b\u89e3\u51b3\u529e\u6cd5\uff1f"},"MySQL \u8bfb\u5199\u5206\u79bb\u6709\u54ea\u4e9b\u89e3\u51b3\u529e\u6cd5\uff1f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u591a\u6570\u636e\u6e90"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4e2d\u95f4\u4ef6\u4ee3\u7406")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u72ec\u5199\u5206\u79bb\u7684\u76ee\u7684")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u4ece\u670d\u52a1\u5668\u8d1f\u8d23\u5404\u81ea\u7684\u8bfb\u548c\u5199\uff0c\u6781\u5927\u7a0b\u5ea6\u7f13\u89e3\u4e86\u9501\u7684\u4e89\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u4ece\u670d\u52a1\u5668\u53ef\u4ee5\u4f7f\u7528 MyISAM\uff0c\u63d0\u5347\u67e5\u8be2\u6027\u80fd\u4ee5\u53ca\u8282\u7ea6\u7cfb\u7edf\u5f00\u9500"),(0,a.kt)("li",{parentName:"ul"},"\u589e\u52a0\u5197\u4f59\uff0c\u63d0\u9ad8\u53ef\u7528\u6027")))))}m.isMDXComponent=!0}}]);