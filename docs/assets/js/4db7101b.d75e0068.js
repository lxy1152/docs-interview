"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5612],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=d(r),m=n,h=k["".concat(p,".").concat(m)]||k[m]||c[m]||l;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},8825:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return k}});var a=r(7462),n=r(3366),l=(r(7294),r(3905)),i=["components"],o={title:"\ud83d\udea5 ZooKeeper",sidebar_position:2},p=void 0,d={unversionedId:"middleware/zookeeper",id:"middleware/zookeeper",isDocsHomePage:!1,title:"\ud83d\udea5 ZooKeeper",description:"----",source:"@site/source/middleware/zookeeper.mdx",sourceDirName:"middleware",slug:"/middleware/zookeeper",permalink:"/middleware/zookeeper",version:"current",lastUpdatedAt:1629168193,formattedLastUpdatedAt:"2021/8/17",sidebarPosition:2,frontMatter:{title:"\ud83d\udea5 ZooKeeper",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\ude80 Kafka",permalink:"/middleware/kafka"},next:{title:"\ud83d\udc63 IP \u534f\u8bae\u57fa\u7840",permalink:"/network/ip/ip-basic"}},u=[{value:"\u4ecb\u7ecd\u4e00\u4e0b CAP \u7406\u8bba\uff1f",id:"\u4ecb\u7ecd\u4e00\u4e0b-cap-\u7406\u8bba\uff1f",children:[{value:"\u4e00\u81f4\u6027\uff08Consistency\uff09",id:"\u4e00\u81f4\u6027\uff08consistency\uff09",children:[]},{value:"\u53ef\u7528\u6027\uff08Availability\uff09",id:"\u53ef\u7528\u6027\uff08availability\uff09",children:[]},{value:"\u5206\u533a\u5bb9\u9519\u6027\uff08Partition tolerance\uff09",id:"\u5206\u533a\u5bb9\u9519\u6027\uff08partition-tolerance\uff09",children:[]}]},{value:"\u4ec0\u4e48\u662f ZooKeeper\uff1f",id:"\u4ec0\u4e48\u662f-zookeeper\uff1f",children:[]},{value:"\u4ecb\u7ecd\u4e00\u4e0b ZooKeeper \u7684\u6587\u4ef6\u7cfb\u7edf\uff1f",id:"\u4ecb\u7ecd\u4e00\u4e0b-zookeeper-\u7684\u6587\u4ef6\u7cfb\u7edf\uff1f",children:[]},{value:"ZNode \u6709\u54ea\u56db\u79cd\u7c7b\u578b\uff1f",id:"znode-\u6709\u54ea\u56db\u79cd\u7c7b\u578b\uff1f",children:[{value:"PERSISTENT-\u6301\u4e45\u8282\u70b9",id:"persistent-\u6301\u4e45\u8282\u70b9",children:[]},{value:"EPHEMERAL-\u4e34\u65f6\u8282\u70b9",id:"ephemeral-\u4e34\u65f6\u8282\u70b9",children:[]},{value:"PERSISTENT_SEQUENTIAL-\u6301\u4e45\u987a\u5e8f\u8282\u70b9",id:"persistent_sequential-\u6301\u4e45\u987a\u5e8f\u8282\u70b9",children:[]},{value:"EPHEMERAL_SEQUENTIAL-\u4e34\u65f6\u987a\u5e8f\u8282\u70b9",id:"ephemeral_sequential-\u4e34\u65f6\u987a\u5e8f\u8282\u70b9",children:[]}]},{value:"\u4ec0\u4e48\u662f ZAB \u534f\u8bae\uff1f",id:"\u4ec0\u4e48\u662f-zab-\u534f\u8bae\uff1f",children:[]},{value:"\u4ec0\u4e48\u662f ZooKeeper Watcher \u673a\u5236\uff1f",id:"\u4ec0\u4e48\u662f-zookeeper-watcher-\u673a\u5236\uff1f",children:[]},{value:"Watcher \u673a\u5236\u7684\u7279\u6027\u6709\u54ea\u4e9b\uff1f",id:"watcher-\u673a\u5236\u7684\u7279\u6027\u6709\u54ea\u4e9b\uff1f",children:[{value:"\u4e00\u6b21\u6027",id:"\u4e00\u6b21\u6027",children:[]},{value:"\u5ba2\u6237\u7aef\u4e32\u884c\u6267\u884c",id:"\u5ba2\u6237\u7aef\u4e32\u884c\u6267\u884c",children:[]},{value:"\u8f7b\u91cf",id:"\u8f7b\u91cf",children:[]},{value:"Watcher Event \u5f02\u6b65\u53d1\u9001 Watcher \u7684\u901a\u77e5\u4e8b\u4ef6",id:"watcher-event-\u5f02\u6b65\u53d1\u9001-watcher-\u7684\u901a\u77e5\u4e8b\u4ef6",children:[]},{value:"\u6ce8\u518c Watcher \u7684\u65b9\u5f0f",id:"\u6ce8\u518c-watcher-\u7684\u65b9\u5f0f",children:[]},{value:"\u89e6\u53d1 Watcher \u7684\u65b9\u5f0f",id:"\u89e6\u53d1-watcher-\u7684\u65b9\u5f0f",children:[]}]},{value:"Server \u7684\u72b6\u6001\u7684\u6709\u54ea\u4e9b\uff1f",id:"server-\u7684\u72b6\u6001\u7684\u6709\u54ea\u4e9b\uff1f",children:[]},{value:"\u4ecb\u7ecd\u4e00\u4e0b ZooKeeper \u7684\u9009\u4e3e\u673a\u5236\uff1f",id:"\u4ecb\u7ecd\u4e00\u4e0b-zookeeper-\u7684\u9009\u4e3e\u673a\u5236\uff1f",children:[]},{value:"\u6570\u636e\u540c\u6b65\u7684\u6d41\u7a0b\u662f\u4ec0\u4e48\uff1f",id:"\u6570\u636e\u540c\u6b65\u7684\u6d41\u7a0b\u662f\u4ec0\u4e48\uff1f",children:[]},{value:"ZooKeeper \u5982\u4f55\u4fdd\u8bc1\u4e8b\u52a1\u7684\u987a\u5e8f\u4e00\u81f4\u6027\uff1f",id:"zookeeper-\u5982\u4f55\u4fdd\u8bc1\u4e8b\u52a1\u7684\u987a\u5e8f\u4e00\u81f4\u6027\uff1f",children:[]},{value:"ZooKeeper \u8282\u70b9\u5b95\u673a\u600e\u4e48\u5904\u7406\uff1f",id:"zookeeper-\u8282\u70b9\u5b95\u673a\u600e\u4e48\u5904\u7406\uff1f",children:[]},{value:"\u4e3a\u4ec0\u4e48\u96c6\u7fa4\u6570\u91cf\u662f\u5947\u6570\uff1f",id:"\u4e3a\u4ec0\u4e48\u96c6\u7fa4\u6570\u91cf\u662f\u5947\u6570\uff1f",children:[{value:"\u9632\u6b62\u7531\u8111\u88c2\u9020\u6210\u7684\u96c6\u7fa4\u4e0d\u53ef\u7528",id:"\u9632\u6b62\u7531\u8111\u88c2\u9020\u6210\u7684\u96c6\u7fa4\u4e0d\u53ef\u7528",children:[]},{value:"\u5728\u5bb9\u9519\u80fd\u529b\u76f8\u540c\u7684\u60c5\u51b5\u4e0b\uff0c\u5947\u6570\u53f0\u66f4\u8282\u7701\u8d44\u6e90",id:"\u5728\u5bb9\u9519\u80fd\u529b\u76f8\u540c\u7684\u60c5\u51b5\u4e0b\uff0c\u5947\u6570\u53f0\u66f4\u8282\u7701\u8d44\u6e90",children:[]}]}],c={toc:u};function k(e){var t=e.components,r=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u4ecb\u7ecd\u4e00\u4e0b-cap-\u7406\u8bba\uff1f"},"\u4ecb\u7ecd\u4e00\u4e0b CAP \u7406\u8bba\uff1f"),(0,l.kt)("p",null,"CAP\u7406\u8bba\u4f5c\u4e3a\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u57fa\u7840\u7406\u8bba\uff0c\u5b83\u63cf\u8ff0\u7684\u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u7cfb\u7edf\u5728\u4ee5\u4e0b\u4e09\u4e2a\u7279\u6027\u4e2d\u6700\u591a\u540c\u65f6\u6ee1\u8db3\u5176\u4e2d\u4e24\u4e2a\u3002\u5206\u5e03\u5f0f\u7cfb\u7edf\u8981\u4e48\u6ee1\u8db3 CA\uff0c\u8981\u4e48\u6ee1\u8db3 CP\uff0c\u8981\u4e48\u6ee1\u8db3 AP\uff0c\u65e0\u6cd5\u540c\u65f6\u6ee1\u8db3 CAP\u3002"),(0,l.kt)("h3",{id:"\u4e00\u81f4\u6027\uff08consistency\uff09"},"\u4e00\u81f4\u6027\uff08Consistency\uff09"),(0,l.kt)("p",null,"\u5728\u5206\u5e03\u5f0f\u7cfb\u7edf\u5b8c\u6210\u67d0\u5199\u64cd\u4f5c\u540e\uff0c\u5bf9\u4e8e\u4efb\u610f\u7684\u8bfb\u64cd\u4f5c\u90fd\u5e94\u8be5\u83b7\u53d6\u5230\u8be5\u5199\u64cd\u4f5c\u5199\u5165\u7684\u90a3\u4e2a\u6700\u65b0\u7684\u503c\uff0c\u76f8\u5f53\u4e8e\u8981\u6c42\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u7684\u5404\u8282\u70b9\u65f6\u65f6\u523b\u523b\u4fdd\u6301\u6570\u636e\u7684\u4e00\u81f4\u6027\u3002"),(0,l.kt)("h3",{id:"\u53ef\u7528\u6027\uff08availability\uff09"},"\u53ef\u7528\u6027\uff08Availability\uff09"),(0,l.kt)("p",null,"\u53ef\u7528\u6027\u6307\u53ef\u4ee5\u8fdb\u884c\u6b63\u5e38\u7684\u505a\u8bfb\u5199\u64cd\u4f5c\uff0c\u7b80\u5355\u800c\u8a00\u5c31\u662f\u5ba2\u6237\u7aef\u4e00\u76f4\u53ef\u4ee5\u6b63\u5e38\u8bbf\u95ee\u5e76\u5f97\u5230\u7cfb\u7edf\u7684\u6b63\u5e38\u54cd\u5e94\uff0c\u4ece\u7528\u6237\u89d2\u5ea6\u6765\u770b\u5c31\u662f\u4e0d\u4f1a\u51fa\u73b0\u7cfb\u7edf\u64cd\u4f5c\u5931\u8d25\u6216\u8005\u8bbf\u95ee\u8d85\u65f6\u7b49\u95ee\u9898\u3002"),(0,l.kt)("h3",{id:"\u5206\u533a\u5bb9\u9519\u6027\uff08partition-tolerance\uff09"},"\u5206\u533a\u5bb9\u9519\u6027\uff08Partition tolerance\uff09"),(0,l.kt)("p",null,"\u5206\u533a\u5bb9\u9519\u6027\u6307\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u7684\u67d0\u4e2a\u8282\u70b9\u6216\u8005\u7f51\u7edc\u5206\u533a\u51fa\u73b0\u4e86\u6545\u969c\u7684\u65f6\u5019\uff0c\u6574\u4e2a\u7cfb\u7edf\u4ecd\u7136\u80fd\u5bf9\u5916\u63d0\u4f9b\u6ee1\u8db3\u4e00\u81f4\u6027\u548c\u53ef\u7528\u6027\u7684\u670d\u52a1\uff0c\u4e5f\u5c31\u662f\u8bf4\u90e8\u5206\u6545\u969c\u4e0d\u5f71\u54cd\u6574\u4f53\u4f7f\u7528\u3002"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"CAP \u7684\u4e24\u4e24\u7ec4\u5408")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"CA\uff1a\u4f18\u5148\u4fdd\u8bc1\u4e00\u81f4\u6027\u548c\u53ef\u7528\u6027\uff0c\u653e\u5f03\u5206\u533a\u5bb9\u9519\u3002\u8fd9\u4e5f\u610f\u5473\u7740\u653e\u5f03\u7cfb\u7edf\u7684\u6269\u5c55\u6027\uff0c\u7cfb\u7edf\u4e0d\u518d\u662f\u5206\u5e03\u5f0f\u7684\uff0c\u6709\u8fdd\u8bbe\u8ba1\u7684\u521d\u8877\u3002"),(0,l.kt)("li",{parentName:"ul"},"CP\uff1a\u4f18\u5148\u4fdd\u8bc1\u4e00\u81f4\u6027\u548c\u5206\u533a\u5bb9\u9519\u6027\uff0c\u653e\u5f03\u53ef\u7528\u6027\u3002\u5728\u6570\u636e\u4e00\u81f4\u6027\u8981\u6c42\u6bd4\u8f83\u9ad8\u7684\u573a\u5408\uff08\u6bd4\u5982 ZooKeeper\u3001Hbase) \u662f\u6bd4\u8f83\u5e38\u89c1\u7684\u505a\u6cd5\uff0c\u4e00\u65e6\u53d1\u751f\u7f51\u7edc\u6545\u969c\u6216\u8005\u6d88\u606f\u4e22\u5931\uff0c\u5c31\u4f1a\u727a\u7272\u7528\u6237\u4f53\u9a8c\uff0c\u7b49\u6062\u590d\u4e4b\u540e\u7528\u6237\u624d\u9010\u6e10\u80fd\u8bbf\u95ee\u3002"),(0,l.kt)("li",{parentName:"ul"},"AP\uff1a\u4f18\u5148\u4fdd\u8bc1\u53ef\u7528\u6027\u548c\u5206\u533a\u5bb9\u9519\u6027\uff0c\u653e\u5f03\u4e00\u81f4\u6027\u3002NoSQL \u4e2d\u7684 Cassandra \u5c31\u662f\u8fd9\u79cd\u67b6\u6784\u3002\u8ddf CP \u4e00\u6837\uff0c\u653e\u5f03\u4e00\u81f4\u6027\u4e0d\u662f\u8bf4\u4e00\u81f4\u6027\u5c31\u4e0d\u4fdd\u8bc1\u4e86\uff0c\u800c\u662f\u9010\u6e10\u7684\u53d8\u5f97\u4e00\u81f4\u3002")))),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662f-zookeeper\uff1f"},"\u4ec0\u4e48\u662f ZooKeeper\uff1f"),(0,l.kt)("p",null,"ZooKeeper\u662f\u4e00\u4e2a\u5f00\u653e\u6e90\u7801\u7684\u5206\u5e03\u5f0f\u534f\u8c03\u670d\u52a1\uff0c\u5b83\u662f\u96c6\u7fa4\u7684\u7ba1\u7406\u8005\uff0c\u76d1\u89c6\u7740\u96c6\u7fa4\u4e2d\u5404\u4e2a\u8282\u70b9\u7684\u72b6\u6001\u6839\u636e\u8282\u70b9\u63d0\u4ea4\u7684\u53cd\u9988\u8fdb\u884c\u4e0b\u4e00\u6b65\u5408\u7406\u64cd\u4f5c\u3002\u6700\u7ec8\u5c06\u7b80\u5355\u6613\u7528\u7684\u63a5\u53e3\u548c\u6027\u80fd\u9ad8\u6548\u3001\u529f\u80fd\u7a33\u5b9a\u7684\u7cfb\u7edf\u63d0\u4f9b\u7ed9\u7528\u6237\u3002"),(0,l.kt)("p",null,"\u5206\u5e03\u5f0f\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u57fa\u4e8e ZooKeeper \u5b9e\u73b0\uff1a\u6570\u636e\u53d1\u5e03/\u8ba2\u9605\u3001\u8d1f\u8f7d\u5747\u8861\u3001\u547d\u540d\u670d\u52a1\u3001\u5206\u5e03\u5f0f\u534f\u8c03/\u901a\u77e5\u3001\u96c6\u7fa4\u7ba1\u7406\u3001Master \u9009\u4e3e\u3001\u5206\u5e03\u5f0f\u9501\u548c\u5206\u5e03\u5f0f\u961f\u5217\u7b49\u529f\u80fd\u3002"),(0,l.kt)("p",null,"Zookeeper\u4fdd\u8bc1\u4e86\u5982\u4e0b\u7684\u5206\u5e03\u5f0f\u4e00\u81f4\u6027\u7279\u6027\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u987a\u5e8f\u4e00\u81f4\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u539f\u5b50\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u5355\u4e00\u89c6\u56fe"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u9760\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u65f6\u6027\uff08\u6700\u7ec8\u4e00\u81f4\u6027\uff09")),(0,l.kt)("p",null,"\u5ba2\u6237\u7aef\u7684\u8bfb\u8bf7\u6c42\u53ef\u4ee5\u88ab\u96c6\u7fa4\u4e2d\u7684\u4efb\u610f\u4e00\u53f0\u673a\u5668\u5904\u7406\uff0c\u5982\u679c\u8bfb\u8bf7\u6c42\u5728\u8282\u70b9\u4e0a\u6ce8\u518c\u4e86\u76d1\u542c\u5668\uff0c\u8fd9\u4e2a\u76d1\u542c\u5668\u4e5f\u662f\u7531\u6240\u8fde\u63a5\u7684 ZooKeeper \u673a\u5668\u6765\u5904\u7406\u3002\u5bf9\u4e8e\u5199\u8bf7\u6c42\uff0c\u8fd9\u4e9b\u8bf7\u6c42\u4f1a\u540c\u65f6\u53d1\u7ed9\u5176\u4ed6 ZooKeeper \u673a\u5668\u5e76\u4e14\u8fbe\u6210\u4e00\u81f4\u540e\uff0c\u8bf7\u6c42\u624d\u4f1a\u8fd4\u56de\u6210\u529f\u3002\u56e0\u6b64\u968f\u7740 ZooKeeper \u7684\u96c6\u7fa4\u673a\u5668\u589e\u591a\uff0c\u8bfb\u8bf7\u6c42\u7684\u541e\u5410\u4f1a\u63d0\u9ad8\u4f46\u662f\u5199\u8bf7\u6c42\u7684\u541e\u5410\u4f1a\u4e0b\u964d\u3002"),(0,l.kt)("p",null,"\u6709\u5e8f\u6027\u662f ZooKeeper \u4e2d\u975e\u5e38\u91cd\u8981\u7684\u4e00\u4e2a\u7279\u6027\uff0c\u6240\u6709\u7684\u66f4\u65b0\u90fd\u662f\u5168\u5c40\u6709\u5e8f\u7684\uff0c\u6bcf\u4e2a\u66f4\u65b0\u90fd\u6709\u4e00\u4e2a\u552f\u4e00\u7684\u65f6\u95f4\u6233\uff0c\u8fd9\u4e2a\u65f6\u95f4\u6233\u79f0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"zxid"),"\uff08Zookeeper Transaction Id\uff09\u3002\u800c\u8bfb\u8bf7\u6c42\u53ea\u4f1a\u76f8\u5bf9\u4e8e\u66f4\u65b0\u6709\u5e8f\uff0c\u4e5f\u5c31\u662f\u8bfb\u8bf7\u6c42\u7684\u8fd4\u56de\u7ed3\u679c\u4e2d\u4f1a\u5e26\u6709\u8fd9\u4e2a ZooKeeper \u6700\u65b0\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"zxid"),"\u3002"),(0,l.kt)("h2",{id:"\u4ecb\u7ecd\u4e00\u4e0b-zookeeper-\u7684\u6587\u4ef6\u7cfb\u7edf\uff1f"},"\u4ecb\u7ecd\u4e00\u4e0b ZooKeeper \u7684\u6587\u4ef6\u7cfb\u7edf\uff1f"),(0,l.kt)("p",null,"ZooKeeper \u63d0\u4f9b\u4e00\u4e2a\u591a\u5c42\u7ea7\u7684\u8282\u70b9\u547d\u540d\u7a7a\u95f4\uff08\u8282\u70b9\u79f0\u4e3a Znode\uff09\uff0c\u4e0e\u6587\u4ef6\u7cfb\u7edf\u4e0d\u540c\u7684\u662f\uff0c\u8fd9\u4e9b\u8282\u70b9\u90fd\u53ef\u4ee5\u8bbe\u7f6e\u5173\u8054\u7684\u6570\u636e\uff0c\u800c\u6587\u4ef6\u7cfb\u7edf\u4e2d\u53ea\u6709\u6587\u4ef6\u8282\u70b9\u53ef\u4ee5\u5b58\u653e\u6570\u636e\u800c\u76ee\u5f55\u8282\u70b9\u4e0d\u884c\u3002ZooKeeper \u4e3a\u4e86\u4fdd\u8bc1\u9ad8\u541e\u5410\u548c\u4f4e\u5ef6\u8fdf\uff0c\u5728\u5185\u5b58\u4e2d\u7ef4\u62a4\u4e86\u8fd9\u4e2a\u6811\u72b6\u7684\u76ee\u5f55\u7ed3\u6784\uff0c\u8fd9\u79cd\u7279\u6027\u4f7f\u5f97 ZooKeeper \u4e0d\u80fd\u7528\u4e8e\u5b58\u653e\u5927\u91cf\u7684\u6570\u636e\uff0c\u6bcf\u4e2a\u8282\u70b9\u7684\u5b58\u653e\u6570\u636e\u4e0a\u9650\u4e3a 1M\u3002"),(0,l.kt)("h2",{id:"znode-\u6709\u54ea\u56db\u79cd\u7c7b\u578b\uff1f"},"ZNode \u6709\u54ea\u56db\u79cd\u7c7b\u578b\uff1f"),(0,l.kt)("h3",{id:"persistent-\u6301\u4e45\u8282\u70b9"},"PERSISTENT-\u6301\u4e45\u8282\u70b9"),(0,l.kt)("p",null,"\u9664\u975e\u624b\u52a8\u5220\u9664\uff0c\u5426\u5219\u8282\u70b9\u4e00\u76f4\u5b58\u5728\u4e8e ZooKeeper \u4e0a\u3002"),(0,l.kt)("h3",{id:"ephemeral-\u4e34\u65f6\u8282\u70b9"},"EPHEMERAL-\u4e34\u65f6\u8282\u70b9"),(0,l.kt)("p",null,"\u4e34\u65f6\u8282\u70b9\u7684\u751f\u547d\u5468\u671f\u4e0e\u5ba2\u6237\u7aef\u4f1a\u8bdd\u7ed1\u5b9a\uff0c\u4e00\u65e6\u5ba2\u6237\u7aef\u4f1a\u8bdd\u5931\u6548\uff08\u5ba2\u6237\u7aef\u4e0e ZooKeeper \u8fde\u63a5\u65ad\u5f00\u4e0d\u4e00\u5b9a\u4f1a\u8bdd\u5931\u6548\uff09\uff0c\u90a3\u4e48\u8fd9\u4e2a\u5ba2\u6237\u7aef\u521b\u5efa\u7684\u6240\u6709\u4e34\u65f6\u8282\u70b9\u90fd\u4f1a\u88ab\u79fb\u9664\u3002"),(0,l.kt)("h3",{id:"persistent_sequential-\u6301\u4e45\u987a\u5e8f\u8282\u70b9"},"PERSISTENT_SEQUENTIAL-\u6301\u4e45\u987a\u5e8f\u8282\u70b9"),(0,l.kt)("p",null,"\u57fa\u672c\u7279\u6027\u540c\u6301\u4e45\u8282\u70b9\uff0c\u53ea\u662f\u589e\u52a0\u4e86\u987a\u5e8f\u5c5e\u6027\uff0c\u8282\u70b9\u540d\u540e\u8fb9\u4f1a\u8ffd\u52a0\u4e00\u4e2a\u7531\u7236\u8282\u70b9\u7ef4\u62a4\u7684\u81ea\u589e\u6574\u578b\u6570\u5b57\u3002"),(0,l.kt)("h3",{id:"ephemeral_sequential-\u4e34\u65f6\u987a\u5e8f\u8282\u70b9"},"EPHEMERAL_SEQUENTIAL-\u4e34\u65f6\u987a\u5e8f\u8282\u70b9"),(0,l.kt)("p",null,"\u57fa\u672c\u7279\u6027\u540c\u4e34\u65f6\u8282\u70b9\uff0c\u589e\u52a0\u4e86\u987a\u5e8f\u5c5e\u6027\uff0c\u8282\u70b9\u540d\u540e\u8fb9\u4f1a\u8ffd\u52a0\u4e00\u4e2a\u7531\u7236\u8282\u70b9\u7ef4\u62a4\u7684\u81ea\u589e\u6574\u578b\u6570\u5b57\u3002"),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662f-zab-\u534f\u8bae\uff1f"},"\u4ec0\u4e48\u662f ZAB \u534f\u8bae\uff1f"),(0,l.kt)("p",null,"ZAB \u534f\u8bae\u4e00\u79cd\u652f\u6301\u5d29\u6e83\u6062\u590d\u7684\u539f\u5b50\u5e7f\u64ad\u534f\u8bae\uff0c\u5b83\u5305\u62ec\u4e24\u79cd\u57fa\u672c\u7684\u6a21\u5f0f\uff1a\u5d29\u6e83\u6062\u590d\u548c\u6d88\u606f\u5e7f\u64ad\u3002\u5728 ZooKeeper \u96c6\u7fa4\u521a\u521a\u542f\u52a8\u6216\u8005 leader \u670d\u52a1\u5668\u5b95\u673a\u3001\u91cd\u542f\u6216\u8005\u7f51\u7edc\u6545\u969c\u5bfc\u81f4\u4e0d\u5b58\u5728\u8fc7\u534a\u7684\u670d\u52a1\u5668\u4e0e leader \u670d\u52a1\u5668\u4fdd\u6301\u6b63\u5e38\u901a\u4fe1\u65f6\uff0c\u6240\u6709\u670d\u52a1\u5668\u8fdb\u5165\u5d29\u6e83\u6062\u590d\u6a21\u5f0f\uff1a"),(0,l.kt)("p",null,"\u9996\u5148\u9009\u4e3e\u4ea7\u751f\u65b0\u7684 leader \u670d\u52a1\u5668\uff0c\u7136\u540e\u96c6\u7fa4\u4e2d follower \u670d\u52a1\u5668\u5f00\u59cb\u4e0e\u65b0\u7684 leader \u670d\u52a1\u5668\u8fdb\u884c\u6570\u636e\u540c\u6b65\uff0c\u5f53\u96c6\u7fa4\u4e2d\u8d85\u8fc7\u534a\u6570\u673a\u5668\u4e0e\u8be5 leader \u670d\u52a1\u5668\u5b8c\u6210\u6570\u636e\u540c\u6b65\u4e4b\u540e\uff0c\u9000\u51fa\u6062\u590d\u6a21\u5f0f\u8fdb\u5165\u6d88\u606f\u5e7f\u64ad\u6a21\u5f0f\uff0cleader \u670d\u52a1\u5668\u5f00\u59cb\u63a5\u6536\u5ba2\u6237\u7aef\u7684\u4e8b\u52a1\u8bf7\u6c42\u751f\u6210\u4e8b\u52a1\u63d0\u6848\u6765\u8fdb\u884c\u4e8b\u52a1\u8bf7\u6c42\u5904\u7406\u3002"),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662f-zookeeper-watcher-\u673a\u5236\uff1f"},"\u4ec0\u4e48\u662f ZooKeeper Watcher \u673a\u5236\uff1f"),(0,l.kt)("p",null,"ZooKeeper \u5141\u8bb8\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u7aef\u7684\u67d0\u4e2a Znode \u6ce8\u518c\u4e00\u4e2a Watcher \u76d1\u542c\uff0c\u5f53\u670d\u52a1\u7aef\u7684\u4e00\u4e9b\u6307\u5b9a\u4e8b\u4ef6\u89e6\u53d1\u4e86\u8fd9\u4e2a Watcher\uff0c\u670d\u52a1\u7aef\u4f1a\u5411\u6307\u5b9a\u5ba2\u6237\u7aef\u53d1\u9001\u4e00\u4e2a\u4e8b\u4ef6\u901a\u77e5\u6765\u5b9e\u73b0\u5206\u5e03\u5f0f\u7684\u901a\u77e5\u529f\u80fd\uff0c\u7136\u540e\u5ba2\u6237\u7aef\u6839\u636e Watcher \u901a\u77e5\u72b6\u6001\u548c\u4e8b\u4ef6\u7c7b\u578b\u505a\u51fa\u4e1a\u52a1\u4e0a\u7684\u6539\u53d8\u3002"),(0,l.kt)("p",null,"\u5de5\u4f5c\u673a\u5236\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u6ce8\u518c Watcher"),(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u5904\u7406 Watcher"),(0,l.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u56de\u8c03 Watcher")),(0,l.kt)("h2",{id:"watcher-\u673a\u5236\u7684\u7279\u6027\u6709\u54ea\u4e9b\uff1f"},"Watcher \u673a\u5236\u7684\u7279\u6027\u6709\u54ea\u4e9b\uff1f"),(0,l.kt)("h3",{id:"\u4e00\u6b21\u6027"},"\u4e00\u6b21\u6027"),(0,l.kt)("p",null,"\u65e0\u8bba\u662f\u670d\u52a1\u7aef\u8fd8\u662f\u5ba2\u6237\u7aef\uff0c\u4e00\u65e6\u4e00\u4e2a Watcher \u88ab\u89e6\u53d1\uff0cZooKeeper \u90fd\u4f1a\u5c06\u5176\u4ece\u76f8\u5e94\u7684\u5b58\u50a8\u4e2d\u79fb\u9664\u3002\u8fd9\u6837\u7684\u8bbe\u8ba1\u6709\u6548\u7684\u51cf\u8f7b\u4e86\u670d\u52a1\u7aef\u7684\u538b\u529b\uff0c\u4e0d\u7136\u5bf9\u4e8e\u66f4\u65b0\u975e\u5e38\u9891\u7e41\u7684\u8282\u70b9\uff0c\u670d\u52a1\u7aef\u4f1a\u4e0d\u65ad\u7684\u5411\u5ba2\u6237\u7aef\u53d1\u9001\u4e8b\u4ef6\u901a\u77e5\uff0c\u5bf9\u4e8e\u7f51\u7edc\u4ee5\u53ca\u670d\u52a1\u7aef\u7684\u538b\u529b\u90fd\u975e\u5e38\u5927\u3002"),(0,l.kt)("h3",{id:"\u5ba2\u6237\u7aef\u4e32\u884c\u6267\u884c"},"\u5ba2\u6237\u7aef\u4e32\u884c\u6267\u884c"),(0,l.kt)("p",null,"\u5ba2\u6237\u7aef Watcher \u56de\u8c03\u7684\u8fc7\u7a0b\u662f\u4e00\u4e2a\u4e32\u884c\u540c\u6b65\u7684\u8fc7\u7a0b\u3002"),(0,l.kt)("h3",{id:"\u8f7b\u91cf"},"\u8f7b\u91cf"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Watcher \u901a\u77e5\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u4f1a\u544a\u8bc9\u5ba2\u6237\u7aef\u53d1\u751f\u4e86\u4e8b\u4ef6\uff0c\u800c\u4e0d\u4f1a\u8bf4\u660e\u4e8b\u4ef6\u7684\u5177\u4f53\u5185\u5bb9"),(0,l.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u7aef\u6ce8\u518c Watcher \u7684\u65f6\u5019\uff0c\u5e76\u4e0d\u4f1a\u628a\u5ba2\u6237\u7aef\u771f\u5b9e\u7684 Watcher \u5bf9\u8c61\u5b9e\u4f53\u4f20\u9012\u5230\u670d\u52a1\u7aef\uff0c\u4ec5\u4ec5\u662f\u5728\u5ba2\u6237\u7aef\u8bf7\u6c42\u4e2d\u4f7f\u7528 boolean \u7c7b\u578b\u5c5e\u6027\u8fdb\u884c\u4e86\u6807\u8bb0")),(0,l.kt)("h3",{id:"watcher-event-\u5f02\u6b65\u53d1\u9001-watcher-\u7684\u901a\u77e5\u4e8b\u4ef6"},"Watcher Event \u5f02\u6b65\u53d1\u9001 Watcher \u7684\u901a\u77e5\u4e8b\u4ef6"),(0,l.kt)("p",null,"ZooKeeper \u4e0d\u80fd\u4fdd\u8bc1\u76d1\u63a7\u5230\u8282\u70b9\u6bcf\u6b21\u7684\u53d8\u5316\uff0cZookeeper\u53ea\u80fd\u4fdd\u8bc1\u6700\u7ec8\u7684\u4e00\u81f4\u6027\uff0c\u800c\u65e0\u6cd5\u4fdd\u8bc1\u5f3a\u4e00\u81f4\u6027\u3002"),(0,l.kt)("h3",{id:"\u6ce8\u518c-watcher-\u7684\u65b9\u5f0f"},"\u6ce8\u518c Watcher \u7684\u65b9\u5f0f"),(0,l.kt)("p",null,"\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"getData()"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"exists()"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"getChildren()")," \u8fd9\u4e09\u4e2a\u65b9\u6cd5\u4f20\u5165 Watcher \u5bf9\u8c61\u3002"),(0,l.kt)("h3",{id:"\u89e6\u53d1-watcher-\u7684\u65b9\u5f0f"},"\u89e6\u53d1 Watcher \u7684\u65b9\u5f0f"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"create()"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"delete()"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"setData()"),"\u3002"),(0,l.kt)("h2",{id:"server-\u7684\u72b6\u6001\u7684\u6709\u54ea\u4e9b\uff1f"},"Server \u7684\u72b6\u6001\u7684\u6709\u54ea\u4e9b\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"LOOKING\uff1a\u5f53\u670d\u52a1\u5668\u5904\u4e8e\u8be5\u72b6\u6001\u65f6\uff0c\u5b83\u4f1a\u8ba4\u4e3a\u5f53\u524d\u96c6\u7fa4\u4e2d\u6ca1\u6709 leader\uff0c\u56e0\u6b64\u9700\u8981\u8fdb\u5165 leader \u9009\u4e3e\u72b6\u6001"),(0,l.kt)("li",{parentName:"ul"},"FOLLOWING\uff1a\u8ddf\u968f\u8005\u72b6\u6001\uff0c\u8868\u660e\u5f53\u524d\u670d\u52a1\u5668\u89d2\u8272\u662f follower"),(0,l.kt)("li",{parentName:"ul"},"LEADING\uff1a\u9886\u5bfc\u8005\u72b6\u6001\uff0c\u8868\u660e\u5f53\u524d\u670d\u52a1\u5668\u89d2\u8272\u662f leader"),(0,l.kt)("li",{parentName:"ul"},"OBSERVING\uff1a\u89c2\u5bdf\u8005\u72b6\u6001\uff0c\u8868\u660e\u5f53\u524d\u670d\u52a1\u5668\u89d2\u8272\u662f observer\u3002")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u89c2\u5bdf\u8005")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u89c2\u5bdf\u8005\u662f ZooKeeper 3.3.0 \u7248\u672c\u540e\u5f15\u5165\u7684\u4e00\u79cd\u89d2\u8272\uff0c\u65e8\u5728\u4e0d\u5f71\u54cd\u96c6\u7fa4\u4e8b\u52a1\u5904\u7406\u80fd\u529b\u7684\u57fa\u7840\u4e0a\u63d0\u5347\u96c6\u7fa4\u7684\u975e\u4e8b\u52a1\u5904\u7406\u80fd\u529b\uff1a"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u5904\u7406\u5ba2\u6237\u7aef\u7684\u975e\u4e8b\u52a1\u8bf7\u6c42\uff0c\u8f6c\u53d1\u4e8b\u52a1\u8bf7\u6c42 leader \u670d\u52a1\u5668"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u53c2\u4e0e\u4efb\u4f55\u5f62\u5f0f\u7684\u6295\u7968")))),(0,l.kt)("h2",{id:"\u4ecb\u7ecd\u4e00\u4e0b-zookeeper-\u7684\u9009\u4e3e\u673a\u5236\uff1f"},"\u4ecb\u7ecd\u4e00\u4e0b ZooKeeper \u7684\u9009\u4e3e\u673a\u5236\uff1f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a Server \u53d1\u51fa\u4e00\u4e2a\u6295\u7968\uff0c\u6295\u7968\u4fe1\u606f\u5305\u62ec\uff1aid \u548c ZXID\uff0c\u4f7f\u7528\uff08id\uff0cZXID\uff09\u6765\u8868\u793a"),(0,l.kt)("li",{parentName:"ol"},"\u63a5\u53d7\u6765\u81ea\u5404\u4e2a\u670d\u52a1\u5668\u7684\u6295\u7968\uff0c\u9996\u5148\u5224\u65ad\u68c0\u67e5\u6295\u7968\u7684\u5408\u6cd5\u6027\uff08\u662f\u5426\u662f\u672c\u8f6e\u7684\u6295\u7968\u3001\u662f\u5426\u6765\u81ea LOOKING \u72b6\u6001\u7684\u670d\u52a1\u5668\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u670d\u52a1\u5668\u90fd\u4f1a\u5904\u7406\u6295\u7968\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5148\u68c0\u67e5 ZXID\uff0cZXID \u8f83\u5927\u7684\u4f1a\u4f5c\u4e3a leader"),(0,l.kt)("li",{parentName:"ul"},"\u5f53 ZXID \u76f8\u540c\u65f6\uff0cid \u8f83\u5927\u7684\u4f1a\u4f5c\u4e3a leader"))),(0,l.kt)("li",{parentName:"ol"},"\u670d\u52a1\u5668\u4f1a\u7edf\u8ba1\u6295\u7968\u4fe1\u606f\uff0c\u5224\u65ad\u5f53\u524d\u662f\u5426\u5df2\u7ecf\u6709\u8fc7\u534a\u7684\u670d\u52a1\u5668\u63a5\u6536\u5230\u76f8\u540c\u7684\u6295\u7968\u4fe1\u606f\u5c31\u8ba4\u4e3a\u5df2\u7ecf\u9009\u51fa\u4e86 leader"),(0,l.kt)("li",{parentName:"ol"},"\u4e00\u65e6\u786e\u5b9a\u4e86 leader\uff0c\u6bcf\u4e2a\u670d\u52a1\u5668\u5c31\u4f1a\u66f4\u65b0\u81ea\u5df1\u7684\u72b6\u6001\u4e3a LEADING/FOLLOWING")),(0,l.kt)("p",null,"\u4e0a\u8ff0\u6b65\u9aa4\u4e2d\u7b2c\u4e8c\u6b65\u81f3\u7b2c\u56db\u6b65\u4f1a\u53cd\u590d\u6267\u884c\u76f4\u5230\u9009\u51fa leader\u3002"),(0,l.kt)("h2",{id:"\u6570\u636e\u540c\u6b65\u7684\u6d41\u7a0b\u662f\u4ec0\u4e48\uff1f"},"\u6570\u636e\u540c\u6b65\u7684\u6d41\u7a0b\u662f\u4ec0\u4e48\uff1f"),(0,l.kt)("p",null,"\u96c6\u7fa4\u5728\u5b8c\u6210 leader \u9009\u4e3e\u4e4b\u540e\uff0clearner\uff08follower \u548c observer \u7684\u7edf\u79f0\uff09\u4f1a\u5411 leader \u670d\u52a1\u5668\u8fdb\u884c\u6ce8\u518c\u3002\u5f53 learner \u670d\u52a1\u5668\u5411 leader \u670d\u52a1\u5668\u5b8c\u6210\u6ce8\u518c\u540e\uff0c\u8fdb\u5165\u6570\u636e\u540c\u6b65\u73af\u8282\u3002"),(0,l.kt)("p",null,"\u6570\u636e\u540c\u6b65\u6d41\u7a0b\uff1a\uff08\u5747\u4ee5\u6d88\u606f\u4f20\u9012\u7684\u65b9\u5f0f\u8fdb\u884c\uff09"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"learner \u5411 leader \u6ce8\u518c"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u540c\u6b65"),(0,l.kt)("li",{parentName:"ul"},"\u540c\u6b65\u786e\u8ba4")),(0,l.kt)("p",null,"\u6570\u636e\u540c\u6b65\u7684\u65b9\u5f0f\u901a\u5e38\u5206\u4e3a\u4ee5\u4e0b\u56db\u7c7b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u5dee\u5f02\u5316\u540c\u6b65\uff08DIFF \u540c\u6b65\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u5148\u56de\u6eda\u518d\u5dee\u5f02\u5316\u540c\u6b65\uff08TRUNC + DIFF \u540c\u6b65\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u4ec5\u56de\u6eda\u540c\u6b65\uff08TRUNC \u540c\u6b65\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u5168\u91cf\u540c\u6b65\uff08SNAP \u540c\u6b65\uff09")),(0,l.kt)("h2",{id:"zookeeper-\u5982\u4f55\u4fdd\u8bc1\u4e8b\u52a1\u7684\u987a\u5e8f\u4e00\u81f4\u6027\uff1f"},"ZooKeeper \u5982\u4f55\u4fdd\u8bc1\u4e8b\u52a1\u7684\u987a\u5e8f\u4e00\u81f4\u6027\uff1f"),(0,l.kt)("p",null,"ZooKeeper \u91c7\u7528\u4e86\u5168\u5c40\u9012\u589e\u7684\u4e8b\u52a1 Id \u6765\u6807\u8bc6\uff0c\u6240\u6709\u7684 Proposal\uff08\u63d0\u8bae\uff09\u90fd\u5728\u88ab\u63d0\u51fa\u7684\u65f6\u5019\u52a0\u4e0a\u4e86 ZXID\u3002ZXID \u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a 64 \u4f4d\u7684\u6570\u5b57\uff0c\u9ad8 32 \u4f4d\u662f epoch \u7528\u6765\u6807\u8bc6 leader \u7684\u5468\u671f\uff0c\u5982\u679c\u6709\u65b0\u7684 leader \u4ea7\u751f\u51fa\u6765\uff0cepoch \u4f1a\u81ea\u589e\uff1b\u4f4e 32 \u4f4d\u7528\u6765\u9012\u589e\u8ba1\u6570\u3002\u5f53\u65b0\u4ea7\u751f Proposal \u7684\u65f6\u5019\uff0c\u4f1a\u5411\u5176\u4ed6\u7684 Server \u53d1\u51fa\u4e8b\u52a1\u6267\u884c\u8bf7\u6c42\uff0c\u5982\u679c\u8d85\u8fc7\u534a\u6570\u7684\u673a\u5668\u90fd\u80fd\u6267\u884c\u5e76\u4e14\u80fd\u591f\u6210\u529f\uff0c\u90a3\u4e48\u5c31\u4f1a\u5f00\u59cb\u6267\u884c\u3002"),(0,l.kt)("h2",{id:"zookeeper-\u8282\u70b9\u5b95\u673a\u600e\u4e48\u5904\u7406\uff1f"},"ZooKeeper \u8282\u70b9\u5b95\u673a\u600e\u4e48\u5904\u7406\uff1f"),(0,l.kt)("p",null,"ZooKeeper \u96c6\u7fa4\u7684\u673a\u5236\u662f\u53ea\u8981\u8d85\u8fc7\u534a\u6570\u7684\u8282\u70b9\u6b63\u5e38\uff0c\u96c6\u7fa4\u5c31\u80fd\u6b63\u5e38\u63d0\u4f9b\u670d\u52a1\u3002\u53ea\u6709\u5728 ZooKeeper \u8282\u70b9\u6302\u5f97\u592a\u591a\uff0c\u53ea\u5269\u4e00\u534a\u6216\u4e0d\u5230\u4e00\u534a\u8282\u70b9\u80fd\u5de5\u4f5c\uff0c\u96c6\u7fa4\u624d\u5931\u6548\u3002"),(0,l.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u96c6\u7fa4\u6570\u91cf\u662f\u5947\u6570\uff1f"},"\u4e3a\u4ec0\u4e48\u96c6\u7fa4\u6570\u91cf\u662f\u5947\u6570\uff1f"),(0,l.kt)("h3",{id:"\u9632\u6b62\u7531\u8111\u88c2\u9020\u6210\u7684\u96c6\u7fa4\u4e0d\u53ef\u7528"},"\u9632\u6b62\u7531\u8111\u88c2\u9020\u6210\u7684\u96c6\u7fa4\u4e0d\u53ef\u7528"),(0,l.kt)("p",null,"\u96c6\u7fa4\u7684\u8111\u88c2\u901a\u5e38\u662f\u53d1\u751f\u5728\u8282\u70b9\u4e4b\u95f4\u901a\u4fe1\u4e0d\u53ef\u8fbe\u7684\u60c5\u51b5\u4e0b\uff0c\u8fd9\u65f6\u96c6\u7fa4\u4f1a\u5206\u88c2\u6210\u4e0d\u540c\u7684\u5c0f\u96c6\u7fa4\uff0c\u5c0f\u96c6\u7fa4\u5404\u81ea\u9009\u51fa\u81ea\u5df1\u7684 master \u8282\u70b9\uff0c\u5bfc\u81f4\u539f\u6709\u7684\u96c6\u7fa4\u51fa\u73b0\u591a\u4e2a master \u8282\u70b9\uff0c\u8fd9\u5c31\u662f\u8111\u88c2\u3002\u5047\u5982 ZooKeeper \u96c6\u7fa4\u6709 4 \u4e2a\u8282\u70b9\uff0c\u8111\u88c2\u6210\u4e86 A\u3001B \u4e24\u4e2a\u5c0f\u96c6\u7fa4\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"A\uff1a1\u4e2a\u8282\u70b9\uff0c B\uff1a3\u4e2a\u8282\u70b9"),(0,l.kt)("li",{parentName:"ol"},"A\uff1a2\u4e2a\u8282\u70b9\uff0c B\uff1a2\u4e2a\u8282\u70b9")),(0,l.kt)("p",null,"\u60c5\u51b5 1 \u662f\u6ee1\u8db3\u9009\u4e3e\u6761\u4ef6\u7684\uff0c\u4f46\u662f\u60c5\u51b5 2 \u5c31\u4e0d\u540c\u4e86\uff0c\u56e0\u4e3a A \u548c B \u90fd\u662f 2 \u4e2a\u8282\u70b9\uff0c\u90fd\u4e0d\u6ee1\u8db3\u53ef\u7528\u8282\u70b9\u6570\u91cf > \u603b\u8282\u70b9\u6570\u91cf\u4e00\u534a\u7684\u9009\u4e3e\u6761\u4ef6\uff0c\u6240\u4ee5\u6b64\u65f6 ZooKeeper \u5c31\u5f7b\u5e95\u4e0d\u80fd\u63d0\u4f9b\u670d\u52a1\u4e86\u3002"),(0,l.kt)("h3",{id:"\u5728\u5bb9\u9519\u80fd\u529b\u76f8\u540c\u7684\u60c5\u51b5\u4e0b\uff0c\u5947\u6570\u53f0\u66f4\u8282\u7701\u8d44\u6e90"},"\u5728\u5bb9\u9519\u80fd\u529b\u76f8\u540c\u7684\u60c5\u51b5\u4e0b\uff0c\u5947\u6570\u53f0\u66f4\u8282\u7701\u8d44\u6e90"),(0,l.kt)("p",null,"\u6709 3 \u4e2a\u8282\u70b9\u7684\u96c6\u7fa4\uff0c\u81f3\u5c11\u9700\u8981 2 \u4e2a\u8282\u70b9\u662f\u6b63\u5e38\u7684\u3002\u6709 4 \u4e2a\u8282\u70b9\u7684\u96c6\u7fa4\uff0c\u81f3\u5c11\u9700\u8981 3 \u4e2a\u8282\u70b9\u662f\u6b63\u5e38\u7684\u3002\u8fd9\u4e24\u4e2a\u96c6\u7fa4\u90fd\u53ea\u5141\u8bb8\u4e00\u4e2a\u8282\u70b9\u5b95\u673a\uff0c\u4f46\u540e\u4e00\u4e2a\u96c6\u7fa4\u6240\u9700\u8981\u7684\u8282\u70b9\u6570\u91cf\u8fd8\u66f4\u591a\u3002\u6240\u4ee5\u4f7f\u7528\u5947\u6570\u4e2a\u66f4\u597d\u3002"))}k.isMDXComponent=!0}}]);