"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[306],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,y=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4147:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],a={title:"\ud83e\udd3e Vector",sidebar_position:2},c=void 0,p={unversionedId:"java-collection/list/vector",id:"java-collection/list/vector",isDocsHomePage:!1,title:"\ud83e\udd3e Vector",description:"----",source:"@site/source/java-collection/list/vector.mdx",sourceDirName:"java-collection/list",slug:"/java-collection/list/vector",permalink:"/docs/java-collection/list/vector",version:"current",sidebarPosition:2,frontMatter:{title:"\ud83e\udd3e Vector",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd38 ArrayList",permalink:"/docs/java-collection/list/arraylist"},next:{title:"\ud83e\udd39 LinkedList",permalink:"/docs/java-collection/list/linkedlist"}},u=[{value:"Vector \u662f\u5982\u4f55\u4fdd\u8bc1\u7ebf\u7a0b\u5b89\u5168\u7684\uff1f",id:"vector-\u662f\u5982\u4f55\u4fdd\u8bc1\u7ebf\u7a0b\u5b89\u5168\u7684\uff1f",children:[]},{value:"Vector \u7684\u6269\u5bb9\u673a\u5236\uff1f",id:"vector-\u7684\u6269\u5bb9\u673a\u5236\uff1f",children:[]},{value:"Vector \u7684\u66ff\u4ee3\u65b9\u6848\u6709\u54ea\u4e9b\uff1f",id:"vector-\u7684\u66ff\u4ee3\u65b9\u6848\u6709\u54ea\u4e9b\uff1f",children:[{value:"Collections.synchronizedList()",id:"collectionssynchronizedlist",children:[]},{value:"CopyOnWriteArrayList",id:"copyonwritearraylist",children:[]}]}],s={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"vector-\u662f\u5982\u4f55\u4fdd\u8bc1\u7ebf\u7a0b\u5b89\u5168\u7684\uff1f"},"Vector \u662f\u5982\u4f55\u4fdd\u8bc1\u7ebf\u7a0b\u5b89\u5168\u7684\uff1f"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Vector")," \u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"synchronized")," \u5173\u952e\u5b57\u5b9e\u73b0\u540c\u6b65\uff0c\u4f46\u540c\u6b65\u7684\u662f\u65b9\u6cd5\uff0c\u6240\u4ee5\u6548\u7387\u5f88\u4f4e\u3002"),(0,o.kt)("h2",{id:"vector-\u7684\u6269\u5bb9\u673a\u5236\uff1f"},"Vector \u7684\u6269\u5bb9\u673a\u5236\uff1f"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"Vector")," \u7684\u6784\u9020\u5668\u4f20\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"capacityIncrement"),"\uff0c\u8868\u793a\u6269\u5bb9\u65f6\u7684\u589e\u957f\u5927\u5c0f\u3002\u8fd9\u4e2a\u53c2\u6570\u9ed8\u8ba4\u4e3a 0\uff0c\u8868\u793a\u6bcf\u6b21\u90fd\u5c06\u5bb9\u91cf\u7ffb\u500d\u3002"),(0,o.kt)("h2",{id:"vector-\u7684\u66ff\u4ee3\u65b9\u6848\u6709\u54ea\u4e9b\uff1f"},"Vector \u7684\u66ff\u4ee3\u65b9\u6848\u6709\u54ea\u4e9b\uff1f"),(0,o.kt)("h3",{id:"collectionssynchronizedlist"},"Collections.synchronizedList()"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Collections.synchronizedList()")," \u65b9\u6cd5\u4f1a\u5bf9\u4f20\u5165\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"List")," \u63a5\u53e3\u5b9e\u73b0\u7c7b\u505a\u5305\u88c5\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u7ebf\u7a0b\u5b89\u5168\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"SynchronizedRandomAccessList")," \u6216\u8005 ",(0,o.kt)("inlineCode",{parentName:"p"},"SynchronizedList"),"\uff08\u53d6\u51b3\u4e8e\u662f\u5426\u5b9e\u73b0\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"RandomAccess")," \u63a5\u53e3\uff09\u3002"),(0,o.kt)("p",null,"\u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"Vector")," \u7684\u5bf9\u6bd4\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u53ea\u8981\u5b9e\u73b0\u4e86 ",(0,o.kt)("inlineCode",{parentName:"li"},"List")," \u63a5\u53e3\u5c31\u53ef\u4ee5\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u7ebf\u7a0b\u5b89\u5168\u7684\u5305\u88c5\u7c7b"),(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u540c\u6b65\u4ee3\u7801\u5757\u5b9e\u73b0\u52a0\u9501\uff08",(0,o.kt)("inlineCode",{parentName:"li"},"Vector")," \u662f\u540c\u6b65\u65b9\u6cd5\uff09\uff0c\u9ed8\u8ba4\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"this"),"\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u6307\u5b9a\u5176\u4ed6\u7684\u5bf9\u8c61"),(0,o.kt)("li",{parentName:"ul"},"\u8fed\u4ee3\u662f\u975e\u540c\u6b65\u7684\uff0c\u6240\u4ee5\u8fed\u4ee3\u65f6\u9700\u8981\u624b\u52a8\u52a0\u9501\uff08\u5982\u679c\u9700\u8981\uff09")),(0,o.kt)("h3",{id:"copyonwritearraylist"},"CopyOnWriteArrayList"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CopyOnWriteArrayList")," \u662f J.U.C \u5305\u4e0b\u7684\u4e00\u4e2a\u7c7b\uff0c\u5b83\u5c06\u8bfb\u5199\u64cd\u4f5c\u8fdb\u884c\u4e86\u5206\u79bb\uff0c\u5199\u64cd\u4f5c\u5728\u4e00\u4e2a\u65b0\u590d\u5236\u7684\u6570\u7ec4\u4e2d\u8fdb\u884c\uff0c\u8bfb\u64cd\u4f5c\u8fd8\u662f\u5728\u539f\u59cb\u6570\u7ec4\u4e2d\u8fdb\u884c\uff0c\u4e92\u4e0d\u5f71\u54cd\u3002\u8fd9\u6837\u5c31\u5141\u8bb8\u4e86\u5728\u5199\u64cd\u4f5c\u7684\u540c\u65f6\u8fdb\u884c\u8bfb\u64cd\u4f5c\uff0c\u5927\u5927\u63d0\u9ad8\u4e86\u8bfb\u64cd\u4f5c\u7684\u6027\u80fd\uff0c\u5f88\u9002\u5408\u8bfb\u591a\u5199\u5c11\u7684\u5e94\u7528\u573a\u666f\u3002"),(0,o.kt)("p",null,"\u4f46\u662f\u8fd9\u79cd\u8bbe\u8ba1\u4f1a\u5bfc\u81f4\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5185\u5b58\u5360\u7528\u589e\u5927\uff1a\u5728\u5199\u64cd\u4f5c\u65f6\u9700\u8981\u590d\u5236\u4e00\u4e2a\u65b0\u7684\u6570\u7ec4\uff0c\u4f7f\u5f97\u5185\u5b58\u5360\u7528\u4e3a\u539f\u6765\u7684\u4e24\u500d\u5de6\u53f3"),(0,o.kt)("li",{parentName:"ul"},"\u6570\u636e\u4e0d\u4e00\u81f4\uff1a\u8bfb\u64cd\u4f5c\u4e0d\u80fd\u8bfb\u53d6\u5b9e\u65f6\u6027\u7684\u6570\u636e\uff0c\u56e0\u4e3a\u90e8\u5206\u5199\u64cd\u4f5c\u7684\u6570\u636e\u8fd8\u672a\u540c\u6b65\u5230\u8bfb\u6570\u7ec4\u4e2d")),(0,o.kt)("p",null,"\u6240\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"CopyOnWriteArrayList")," \u4e0d\u9002\u5408\u5185\u5b58\u654f\u611f\u4ee5\u53ca\u5bf9\u5b9e\u65f6\u6027\u8981\u6c42\u5f88\u9ad8\u7684\u573a\u666f\uff0c\u53e6\u5916\u9700\u8981\u6ce8\u610f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5199\u64cd\u4f5c\u65f6\u9700\u8981\u52a0\u9501\uff0c\u9632\u6b62\u5e76\u53d1\u5199\u5165\u65f6\u5bfc\u81f4\u5199\u5165\u6570\u636e\u4e22\u5931"),(0,o.kt)("li",{parentName:"ul"},"\u5199\u64cd\u4f5c\u7ed3\u675f\u4e4b\u540e\u9700\u8981\u628a\u539f\u59cb\u6570\u7ec4\u6307\u5411\u65b0\u7684\u590d\u5236\u6570\u7ec4")))}d.isMDXComponent=!0}}]);