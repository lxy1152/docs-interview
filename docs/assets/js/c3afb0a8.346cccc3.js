"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9047],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,v=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(v,o(o({ref:t},s),{},{components:n})):a.createElement(v,o({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2188:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={title:"\ud83d\ude01 Object \u7c7b",sidebar_position:4},p=void 0,c={unversionedId:"java-basic/object-class",id:"java-basic/object-class",isDocsHomePage:!1,title:"\ud83d\ude01 Object \u7c7b",description:"----",source:"@site/source/java-basic/object-class.mdx",sourceDirName:"java-basic",slug:"/java-basic/object-class",permalink:"/java-basic/object-class",version:"current",lastUpdatedAt:1629107600,formattedLastUpdatedAt:"2021/8/16",sidebarPosition:4,frontMatter:{title:"\ud83d\ude01 Object \u7c7b",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd2a \u5305\u88c5\u7c7b\u548c\u7f13\u5b58\u6c60",permalink:"/java-basic/datatype-wrapper-cache"},next:{title:"\ud83d\ude06 String \u7c7b",permalink:"/java-basic/string-class"}},s=[{value:"\u4ecb\u7ecd\u4e00\u4e0b equals() \u65b9\u6cd5\uff1f",id:"\u4ecb\u7ecd\u4e00\u4e0b-equals-\u65b9\u6cd5\uff1f",children:[]},{value:"\u4ecb\u7ecd\u4e00\u4e0b hashcode() \u65b9\u6cd5\uff1f",id:"\u4ecb\u7ecd\u4e00\u4e0b-hashcode-\u65b9\u6cd5\uff1f",children:[]},{value:"\u4ecb\u7ecd\u4e00\u4e0b toString() \u65b9\u6cd5\uff1f",id:"\u4ecb\u7ecd\u4e00\u4e0b-tostring-\u65b9\u6cd5\uff1f",children:[]},{value:"\u4ecb\u7ecd\u4e00\u4e0b clone() \u65b9\u6cd5\uff1f",id:"\u4ecb\u7ecd\u4e00\u4e0b-clone-\u65b9\u6cd5\uff1f",children:[]}],d={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u4ecb\u7ecd\u4e00\u4e0b-equals-\u65b9\u6cd5\uff1f"},"\u4ecb\u7ecd\u4e00\u4e0b equals() \u65b9\u6cd5\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u81ea\u53cd\u6027\uff1a\u81ea\u8eab\u548c\u81ea\u8eab\u662f\u76f8\u540c\u7684"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u79f0\u6027\uff1aa \u548c b \u76f8\u540c\uff0c\u540c\u65f6 b \u548c a \u4e5f\u662f\u76f8\u540c\u7684\uff08\u8c03\u6362\u524d\u540e\u987a\u5e8f\u4e0d\u5f71\u54cd\u7ed3\u679c\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u4f20\u9012\u6027\uff1aa \u548c b \u76f8\u540c\u4e14 b \u548c c \u76f8\u540c\uff0c\u53ef\u4ee5\u5f97\u5230 a \u548c c \u76f8\u540c"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u81f4\u6027\uff1a\u591a\u6b21\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"equals()")," \u65b9\u6cd5\uff0c\u7ed3\u679c\u662f\u4e0d\u53d8\u7684"),(0,r.kt)("li",{parentName:"ul"},"\u4e0e ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," \u7684\u6bd4\u8f83\uff1a\u7ed3\u679c\u4e00\u5b9a\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"false"))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7b49\u4ef7\u4e0e\u76f8\u7b49")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u57fa\u672c\u7c7b\u578b\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"==")," \u5224\u65ad\u4e24\u4e2a\u503c\u662f\u5426\u76f8\u7b49\uff0c\u57fa\u672c\u7c7b\u578b\u6ca1\u6709 ",(0,r.kt)("inlineCode",{parentName:"li"},"equals()")," \u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5f15\u7528\u7c7b\u578b\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"==")," \u5224\u65ad\u4e24\u4e2a\u53d8\u91cf\u662f\u5426\u5f15\u7528\u540c\u4e00\u4e2a\u5bf9\u8c61\uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"li"},"equals()")," \u5224\u65ad\u5f15\u7528\u7684\u5bf9\u8c61\u662f\u5426\u7b49\u4ef7\uff08\u9ed8\u8ba4\u4e5f\u662f\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"==")," \u6765\u8fdb\u884c\u6bd4\u8f83\uff0c\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u9700\u8981\u91cd\u5199\u8fd9\u4e2a\u65b9\u6cd5\uff09")))),(0,r.kt)("h2",{id:"\u4ecb\u7ecd\u4e00\u4e0b-hashcode-\u65b9\u6cd5\uff1f"},"\u4ecb\u7ecd\u4e00\u4e0b hashcode() \u65b9\u6cd5\uff1f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"hashCode()")," \u65b9\u6cd5\u5c06\u8fd4\u56de\u8fd9\u4e2a\u5bf9\u8c61\u5bf9\u5e94\u7684\u54c8\u5e0c\u503c\uff0c\u7b49\u4ef7\u7684\u4e24\u4e2a\u5bf9\u8c61\u6563\u5217\u503c\u4e00\u5b9a\u76f8\u540c\uff0c\u4f46\u662f\u6563\u5217\u503c\u76f8\u540c\u7684\u4e24\u4e2a\u5bf9\u8c61\u4e0d\u4e00\u5b9a\u7b49\u4ef7\uff0c\u8fd9\u662f\u56e0\u4e3a\u8ba1\u7b97\u54c8\u5e0c\u503c\u5177\u6709\u968f\u673a\u6027\uff0c\u4e24\u4e2a\u503c\u4e0d\u540c\u7684\u5bf9\u8c61\u53ef\u80fd\u8ba1\u7b97\u51fa\u76f8\u540c\u7684\u54c8\u5e0c\u503c\u3002 \u5728\u8986\u76d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"equals()")," \u65b9\u6cd5\u65f6\u5e94\u5f53\u603b\u662f\u8986\u76d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"hashCode()")," \u65b9\u6cd5\uff0c\u4fdd\u8bc1\u7b49\u4ef7\u7684\u4e24\u4e2a\u5bf9\u8c61\u54c8\u5e0c\u503c\u4e5f\u76f8\u7b49\u3002"),(0,r.kt)("h2",{id:"\u4ecb\u7ecd\u4e00\u4e0b-tostring-\u65b9\u6cd5\uff1f"},"\u4ecb\u7ecd\u4e00\u4e0b toString() \u65b9\u6cd5\uff1f"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"ClassName@30dae81")," \u8fd9\u79cd\u5f62\u5f0f\uff0c\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," \u540e\u9762\u7684\u6570\u503c\u4e3a\u54c8\u5e0c\u503c\u7684\u65e0\u7b26\u53f7\u5341\u516d\u8fdb\u5236\u8868\u793a\u3002"),(0,r.kt)("h2",{id:"\u4ecb\u7ecd\u4e00\u4e0b-clone-\u65b9\u6cd5\uff1f"},"\u4ecb\u7ecd\u4e00\u4e0b clone() \u65b9\u6cd5\uff1f"),(0,r.kt)("p",null,"\u867d\u7136 ",(0,r.kt)("inlineCode",{parentName:"p"},"clone()")," \u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")," \u7c7b\u4e2d\u7684\u65b9\u6cd5\uff0c\u4f46\u76f4\u63a5\u91cd\u5199\uff08\u56e0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"clone()")," \u65b9\u6cd5\u7684\u6743\u9650\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"protected"),"\uff0c\u9700\u8981\u91cd\u5199\u5e76\u5c06\u6743\u9650\u653e\u5927\uff0c\u8981\u4e0d\u7136\u65e0\u6cd5\u8c03\u7528\uff09\u5e76\u8c03\u7528\u4f1a\u629b\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"CloneNotSupportedException")," \u5f02\u5e38\u3002\u8fd9\u662f\u56e0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Cloneable")," \u63a5\u53e3\u7684\u89c4\u5b9a\uff1a\u5982\u679c\u4e00\u4e2a\u7c7b\u6ca1\u6709\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Cloneable")," \u63a5\u53e3\u53c8\u8c03\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"clone()")," \u65b9\u6cd5\uff0c\u5c31\u4f1a\u629b\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"CloneNotSupportedException")," \u5f02\u5e38\u3002"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6d45\u62f7\u8d1d")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u76f4\u63a5\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"super.clone()")," \u6240\u5f97\u5230\u5bf9\u8c61\u7684\u662f\u6d45\u62f7\u8d1d\u5bf9\u8c61\u3002"))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"clone \u7684\u66ff\u4ee3\u65b9\u6848")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"clone()")," \u65b9\u6cd5\u6765\u62f7\u8d1d\u4e00\u4e2a\u5bf9\u8c61\u5373\u590d\u6742\u53c8\u6709\u98ce\u9669\uff0c\u5b83\u4f1a\u629b\u51fa\u5f02\u5e38\uff0c\u5e76\u4e14\u8fd8\u9700\u8981\u7c7b\u578b\u8f6c\u6362\u3002\u66ff\u4ee3\u65b9\u6848\u6709\uff1a"),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"\u63d0\u4f9b\u62f7\u8d1d\u6784\u9020\u51fd\u6570\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"public MyClass(MyClass clazz)")),(0,r.kt)("li",{parentName:"ol"},"\u63d0\u4f9b\u62f7\u8d1d\u5de5\u5382"),(0,r.kt)("li",{parentName:"ol"},"\u5b9e\u73b0\u5e8f\u5217\u5316\u63a5\u53e3")))))}m.isMDXComponent=!0}}]);