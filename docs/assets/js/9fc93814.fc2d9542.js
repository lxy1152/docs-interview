"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2336],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return k}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var m=n.createContext({}),l=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},o=function(e){var t=l(e.components);return n.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,m=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),N=l(a),k=i,c=N["".concat(m,".").concat(k)]||N[k]||d[k]||r;return a?n.createElement(c,s(s({ref:t},o),{},{components:a})):n.createElement(c,s({ref:t},o))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=N;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:i,s[1]=p;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},816:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return o},default:function(){return N}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),s=["components"],p={title:"\ud83d\ude4b\u200d\u2642\ufe0f Redis \u5e95\u5c42\u5b9e\u73b0",sidebar_position:2},m=void 0,l={unversionedId:"redis/redis-implemention",id:"redis/redis-implemention",isDocsHomePage:!1,title:"\ud83d\ude4b\u200d\u2642\ufe0f Redis \u5e95\u5c42\u5b9e\u73b0",description:"----",source:"@site/source/redis/redis-implemention.mdx",sourceDirName:"redis",slug:"/redis/redis-implemention",permalink:"/redis/redis-implemention",version:"current",lastUpdatedAt:1629107600,formattedLastUpdatedAt:"2021/8/16",sidebarPosition:2,frontMatter:{title:"\ud83d\ude4b\u200d\u2642\ufe0f Redis \u5e95\u5c42\u5b9e\u73b0",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\ude47\u200d\u2642\ufe0f Redis \u57fa\u7840",permalink:"/redis/redis-basic"},next:{title:"\ud83d\ude45\u200d\u2642\ufe0f Redis \u6dd8\u6c70\u7b56\u7565",permalink:"/redis/redis-elimination"}},o=[{value:"Redis \u662f\u5982\u4f55\u5b9e\u73b0\u5b57\u7b26\u4e32\u7684\uff1f",id:"redis-\u662f\u5982\u4f55\u5b9e\u73b0\u5b57\u7b26\u4e32\u7684\uff1f",children:[]},{value:"SDS \u7684\u6269\u5bb9\u673a\u5236\uff1f",id:"sds-\u7684\u6269\u5bb9\u673a\u5236\uff1f",children:[]},{value:"Redis \u7684\u5b57\u5178\u662f\u5982\u4f55\u5b9e\u73b0\u7684\uff1f",id:"redis-\u7684\u5b57\u5178\u662f\u5982\u4f55\u5b9e\u73b0\u7684\uff1f",children:[{value:"\u89e3\u51b3\u54c8\u5e0c\u51b2\u7a81",id:"\u89e3\u51b3\u54c8\u5e0c\u51b2\u7a81",children:[]},{value:"rehash",id:"rehash",children:[]}]},{value:"Redis \u7684\u8df3\u8dc3\u8868\u662f\u5982\u4f55\u5b9e\u73b0\u7684\uff1f",id:"redis-\u7684\u8df3\u8dc3\u8868\u662f\u5982\u4f55\u5b9e\u73b0\u7684\uff1f",children:[]},{value:"\u4ecb\u7ecd\u4e00\u4e0b Redis \u7684\u7ebf\u7a0b\u6a21\u578b\uff1f",id:"\u4ecb\u7ecd\u4e00\u4e0b-redis-\u7684\u7ebf\u7a0b\u6a21\u578b\uff1f",children:[]}],d={toc:o};function N(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"redis-\u662f\u5982\u4f55\u5b9e\u73b0\u5b57\u7b26\u4e32\u7684\uff1f"},"Redis \u662f\u5982\u4f55\u5b9e\u73b0\u5b57\u7b26\u4e32\u7684\uff1f"),(0,r.kt)("p",null,"SDS\uff08Simple Dynamic String\uff09\u7b80\u5355\u52a8\u6001\u5b57\u7b26\u4e32\u662f Redis \u5e95\u5c42\u5b9e\u73b0\u7684\u4e00\u79cd\u53ef\u4fee\u6539\u5b57\u7b26\u4e32\u3002\u7c7b\u4f3c\u4e8e Java \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ArrayList"),"\uff0c\u5b83\u91c7\u7528\u9884\u5206\u914d\u5197\u4f59\u7a7a\u95f4\u7684\u65b9\u5f0f\u6765\u51cf\u5c11\u5185\u5b58\u7684\u9891\u7e41\u5206\u914d\u3002SDS \u6bd4 C \u8bed\u8a00\u7684\u5b57\u7b26\u4e32\u591a\u4e86\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"SDSHDR")," \u8868\u5934\uff0c\u91cc\u9762\u5b58\u653e ",(0,r.kt)("inlineCode",{parentName:"p"},"free"),"\uff08\u7a7a\u95f2\u957f\u5ea6\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"len"),"\uff08\u5df2\u4f7f\u7528\u957f\u5ea6\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"buf"),"\uff08\u771f\u6b63\u4fdd\u5b58\u7684\u90a3\u4e2a\u5b57\u7b26\u4e32\uff09\u3002\u6e90\u7801\u4e2d\u63d0\u4f9b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"sds")," \u7c7b\u578b\u5b9e\u9645\u4e0a\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"char *")," \u7684\u522b\u540d\uff0c\u5b83\u771f\u6b63\u6307\u5411\u7684\u662f buf \u6570\u7ec4\u3002"),(0,r.kt)("p",null,"\u4f18\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u5b57\u7b26\u4e32\u957f\u5ea6\u66f4\u5feb\uff1aC \u8bed\u8a00\u83b7\u53d6\u5b57\u7b26\u4e32\u957f\u5ea6\u9700\u8981\u904d\u5386\u6574\u4e2a\u5b57\u7b26\u4e32\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"N"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(N)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\uff0cSDS \u7684\u8868\u5934 ",(0,r.kt)("inlineCode",{parentName:"li"},"len")," \u6210\u5458\u5b58\u653e\u4e86\u5f53\u524d\u5df2\u4f7f\u7528\u957f\u5ea6\uff0c\u83b7\u53d6\u5b57\u7b26\u4e32\u957f\u5ea6\u590d\u6742\u5ea6\u4e3a ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("li",{parentName:"ul"},"\u675c\u7edd\u7f13\u51b2\u533a\u6ea2\u51fa\uff1aC \u8bed\u8a00\u5b57\u7b26\u4e32\u672c\u8eab\u4e0d\u8bb0\u5f55\u81ea\u8eab\u957f\u5ea6\u548c\u7a7a\u95f2\u7a7a\u95f4\uff0c\u5bb9\u6613\u9020\u6210\u7f13\u51b2\u533a\u6ea2\u51fa\uff0cSDS \u8868\u5934\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"free")," \u6210\u5458\u5b58\u653e\u4e86\u7a7a\u95f2\u7a7a\u95f4\uff0c\u62fc\u63a5\u5b57\u7b26\u4e32\u524d\u4f1a\u5148\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"free")," \u5b57\u6bb5\u68c0\u6d4b\u5269\u4f59\u7a7a\u95f4\u662f\u5426\u80fd\u6ee1\u8db3\uff0c\u5982\u679c\u7a7a\u95f4\u4e0d\u591f\u5c31\u4f1a\u6269\u5bb9"),(0,r.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u5185\u5b58\u5206\u914d\u6b21\u6570\uff1aC \u8bed\u8a00\u5bf9\u5b57\u7b26\u4e32\u8fdb\u884c\u589e\u957f\u6216\u7f29\u77ed\u64cd\u4f5c\uff0c\u90fd\u9700\u8981\u91cd\u65b0\u5206\u914d\u5185\u5b58\uff0cSDS \u4f7f\u7528\u4e86\u7a7a\u95f4\u9884\u5206\u914d\u548c\u60f0\u6027\u7a7a\u95f4\u91ca\u653e\u7b56\u7565\uff0c\u51cf\u5c11\u4e86\u5185\u5b58\u5206\u914d\u6b21\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u4e8c\u8fdb\u5236\u5b89\u5168\uff1aC \u8bed\u8a00\u5b57\u7b26\u4e32\u9047 ",(0,r.kt)("inlineCode",{parentName:"li"},"\\0")," \u5219\u6b62\uff0c\u4f1a\u5bf9\u5b57\u7b26\u4e32\u8fdb\u884c\u622a\u65ad\uff0c\u800c SDS \u5224\u65ad\u5b57\u7b26\u4e32\u662f\u5426\u7ed3\u5c3e\u7684\u4f9d\u636e\u662f\u5934\u4fe1\u606f\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"len")," \u5c5e\u6027\uff0c\u5373\u4f7f SDS \u4e2d\u95f4\u4fdd\u5b58\u4e86 ",(0,r.kt)("inlineCode",{parentName:"li"},"\\0")," \u4e5f\u4e0d\u5f71\u54cd")),(0,r.kt)("h2",{id:"sds-\u7684\u6269\u5bb9\u673a\u5236\uff1f"},"SDS \u7684\u6269\u5bb9\u673a\u5236\uff1f"),(0,r.kt)("p",null,"SDS \u6e90\u7801\u63d0\u4f9b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"sdsMakeRoomFor()")," \u51fd\u6570\u6765\u8fdb\u884c\u6269\u5bb9\uff0c\u5b83\u7684\u53c2\u6570\u6709\u4e24\u4e2a\uff0c\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"sds")," \u7c7b\u578b\u7684\u5b57\u7b26\u4e32\u6570\u7ec4\uff0c\u53e6\u4e00\u4e2a\u662f\u4e00\u4e2a\u6570\u5b57 ",(0,r.kt)("inlineCode",{parentName:"p"},"addlen"),"\u3002\u5177\u4f53\u7684\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.loli.net/2021/07/31/zYeV1apdblOAScB.png",alt:"sds\u6269\u5bb9\u6d41\u7a0b\u56fe.jpg"})),(0,r.kt)("h2",{id:"redis-\u7684\u5b57\u5178\u662f\u5982\u4f55\u5b9e\u73b0\u7684\uff1f"},"Redis \u7684\u5b57\u5178\u662f\u5982\u4f55\u5b9e\u73b0\u7684\uff1f"),(0,r.kt)("p",null,"C \u8bed\u8a00\u6ca1\u6709\u63d0\u4f9b\u5b57\u5178\uff0cRedis \u63d0\u4f9b\u4e86\u4e00\u79cd\u5b9e\u73b0\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"Hash")," \u7c7b\u578b\u7684\u5e95\u5c42\u5b9e\u73b0\u662f\u5b57\u5178\u3002\u5b83\u6839\u636e\u952e\u503c\u5bf9\u4e2d\u7684\u952e\u8ba1\u7b97\u54c8\u5e0c\u503c\u548c\u7d22\u5f15\u503c\uff0c\u7136\u540e\u6839\u636e\u7d22\u5f15\u503c\uff0c\u5c06\u5305\u542b\u952e\u503c\u5bf9\u7684\u54c8\u5e0c\u8282\u70b9\u653e\u5230\u54c8\u5e0c\u6570\u7ec4\u7684\u6307\u5b9a\u7d22\u5f15\u4e0a\u3002"),(0,r.kt)("h3",{id:"\u89e3\u51b3\u54c8\u5e0c\u51b2\u7a81"},"\u89e3\u51b3\u54c8\u5e0c\u51b2\u7a81"),(0,r.kt)("p",null,"Redis \u91c7\u7528\u94fe\u5730\u5740\u6cd5\u89e3\u51b3\u952e\u51b2\u7a81\uff0c\u6bcf\u4e2a\u54c8\u5e0c\u8282\u70b9\u6709\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"next")," \u6307\u9488\uff0c\u591a\u4e2a\u54c8\u5e0c\u8282\u70b9\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"next")," \u6307\u9488\u6784\u6210\u4e00\u4e2a\u5355\u5411\u94fe\u8868\uff0c\u6700\u65b0\u7684\u8282\u70b9\u603b\u662f\u6dfb\u52a0\u5230\u8868\u5934\u3002"),(0,r.kt)("h3",{id:"rehash"},"rehash"),(0,r.kt)("p",null,"\u5b57\u5178\u4e2d\u4fdd\u5b58\u4e24\u4e2a\u54c8\u5e0c\u8868\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"ht[0]")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"ht[1]"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ht[1]")," \u53ea\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"rehash")," \u65f6\u4f7f\u7528\u3002Redis \u5bf9\u5b57\u5178\u7684\u54c8\u5e0c\u8868\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"rehash")," \u7684\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"ht[1]")," \u54c8\u5e0c\u8868\u5206\u914d\u7a7a\u95f4\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"ht[1]")," \u7684\u5927\u5c0f\u4e3a\u7b2c\u4e00\u4e2a\u5927\u4e8e\u7b49\u4e8e ",(0,r.kt)("inlineCode",{parentName:"li"},"ht[0].used * 2")," \u7684 ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mn",{parentName:"msup"},"2"),(0,r.kt)("mi",{parentName:"msup"},"n"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.664392em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.664392em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"))))))))))))),(0,r.kt)("li",{parentName:"ul"},"\u5c06\u4fdd\u5b58\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"ht[0]")," \u4e2d\u7684\u6240\u6709\u952e\u503c\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"li"},"rehash")," \u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"ht[1]")," \u4e0a\u9762"),(0,r.kt)("li",{parentName:"ul"},"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"li"},"ht[0]")," \u5305\u542b\u7684\u6240\u6709\u952e\u503c\u5bf9\u90fd\u8fc1\u79fb\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"ht[1]")," \u4e4b\u540e\uff0c\u91ca\u653e ",(0,r.kt)("inlineCode",{parentName:"li"},"ht[0]"),"\uff0c\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"ht[1]")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"ht[0]"),"\uff0c\u5e76\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"ht[1]")," \u65b0\u521b\u5efa\u4e00\u4e2a\u7a7a\u767d\u54c8\u5e0c\u8868\uff0c\u4e3a\u4e0b\u4e00\u6b21 ",(0,r.kt)("inlineCode",{parentName:"li"},"rehash")," \u505a\u51c6\u5907")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6e10\u8fdb\u5f0f rehash")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"rehash")," \u52a8\u4f5c\u5e76\u4e0d\u662f\u4e00\u6b21\u6027\u3001\u96c6\u4e2d\u5f0f\u5b8c\u6210\u7684\uff0c\u800c\u662f\u5206\u591a\u6b21\u3001\u6e10\u8fdb\u5f0f\u7684\u5b8c\u6210\u7684\u3002\u5982\u679c\u670d\u52a1\u5668\u4e2d\u5305\u542b\u5f88\u591a\u952e\u503c\u5bf9\uff0c\u8981\u4e00\u6b21\u6027\u7684\u5c06\u8fd9\u4e9b\u952e\u503c\u5bf9\u5168\u90e8 ",(0,r.kt)("inlineCode",{parentName:"p"},"rehash")," \u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"ht[1]")," \u7684\u8bdd\uff0c\u5e9e\u5927\u7684\u8ba1\u7b97\u91cf\u53ef\u80fd\u5bfc\u81f4\u670d\u52a1\u5668\u5728\u4e00\u6bb5\u65f6\u95f4\u5185\u505c\u6b62\u670d\u52a1\u3002"))),(0,r.kt)("h2",{id:"redis-\u7684\u8df3\u8dc3\u8868\u662f\u5982\u4f55\u5b9e\u73b0\u7684\uff1f"},"Redis \u7684\u8df3\u8dc3\u8868\u662f\u5982\u4f55\u5b9e\u73b0\u7684\uff1f"),(0,r.kt)("p",null,"\u8df3\u8dc3\u8868\u662f\u6709\u5e8f\u96c6\u5408\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"zset"),"\uff09\u7684\u5e95\u5c42\u5b9e\u73b0\u4e4b\u4e00\uff0c\u5b83\u662f\u57fa\u4e8e\u591a\u6307\u9488\u6709\u5e8f\u94fe\u8868\u5b9e\u73b0\u7684\uff0c\u53ef\u4ee5\u770b\u6210\u591a\u4e2a\u6709\u5e8f\u94fe\u8868\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.loli.net/2021/07/31/sWy4M7OYBSGvm8h.png",alt:"\u8df3\u8dc3\u8868.png"})),(0,r.kt)("p",null,"\u5728\u67e5\u627e\u65f6\uff0c\u4ece\u4e0a\u5c42\u6307\u9488\u5f00\u59cb\u67e5\u627e\uff0c\u627e\u5230\u5bf9\u5e94\u7684\u533a\u95f4\u4e4b\u540e\u518d\u5230\u4e0b\u4e00\u5c42\u53bb\u67e5\u627e\u3002\u4e0b\u56fe\u6f14\u793a\u4e86\u67e5\u627e 22 \u7684\u8fc7\u7a0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.loli.net/2021/07/31/L3tyY2nzQTOZx6e.png",alt:"\u8df3\u8dc3\u8868\u67e5\u627e.png"})),(0,r.kt)("p",null,"\u4e0e\u7ea2\u9ed1\u6811\u7b49\u5e73\u8861\u6811\u76f8\u6bd4\uff0c\u8df3\u8dc3\u8868\u5177\u6709\u4ee5\u4e0b\u4f18\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63d2\u5165\u901f\u5ea6\u975e\u5e38\u5feb\u901f\uff0c\u56e0\u4e3a\u4e0d\u9700\u8981\u8fdb\u884c\u65cb\u8f6c\u7b49\u64cd\u4f5c\u6765\u7ef4\u62a4\u5e73\u8861\u6027"),(0,r.kt)("li",{parentName:"ul"},"\u66f4\u5bb9\u6613\u5b9e\u73b0"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u65e0\u9501\u64cd\u4f5c")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"ziplist \u548c skiplist")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"zset")," \u4e2d\u96c6\u5408\u7684\u5143\u7d20\u4e2a\u6570\u5c11\u4e8e 128 \u4e2a\uff08\u5bf9\u5e94\u914d\u7f6e\u9879 ",(0,r.kt)("inlineCode",{parentName:"p"},"zset-max-ziplist-value"),"\uff09\u5e76\u4e14 ",(0,r.kt)("inlineCode",{parentName:"p"},"zadd")," \u64cd\u4f5c\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"member")," \u7684\u957f\u5ea6\u5c0f\u4e8e 64 \u5b57\u8282\uff08\u5bf9\u5e94\u914d\u7f6e\u9879 ",(0,r.kt)("inlineCode",{parentName:"p"},"zset-max-ziplist-entries"),"\uff09\uff0cRedis \u4f1a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"ziplist")," \u6765\u5b58\u50a8\u5143\u7d20\uff0c\u5426\u5219\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"skiplist")," \u6765\u5b58\u50a8\u5143\u7d20\u3002"),(0,r.kt)("p",{parentName:"div"},"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"zset-max-ziplist-value")," \u4e3a 3\uff0c\u5e76\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\u67e5\u770b Redis \u6240\u4f7f\u7528\u7684\u6570\u636e\u7ed3\u6784\uff1a"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},'127.0.0.1:6379> zadd myset 10 "A"\n(integer) 1\n127.0.0.1:6379> object encoding myset\n"ziplist"\n\n// \u6b64\u5904\u7701\u7565\u63d2\u5165\u6570\u636e BB \u548c CCC \u7684\u8fc7\u7a0b\uff0c\u5b83\u4eec\u7684\u7ed3\u679c\u4e5f\u662f ziplist\n\n127.0.0.1:6379> zadd myset 10 "DDDD"\n127.0.0.1:6379> object encoding myset\n"skiplist"\n')))),(0,r.kt)("h2",{id:"\u4ecb\u7ecd\u4e00\u4e0b-redis-\u7684\u7ebf\u7a0b\u6a21\u578b\uff1f"},"\u4ecb\u7ecd\u4e00\u4e0b Redis \u7684\u7ebf\u7a0b\u6a21\u578b\uff1f"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.loli.net/2021/07/31/PK4j3RF1mJsIqbe.png",alt:"Redis\u7ebf\u7a0b\u6a21\u578b.png"})))}N.isMDXComponent=!0}}]);