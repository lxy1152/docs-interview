"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3707],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1925:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),l=["components"],a={title:"\ud83e\udd1e \u9501",sidebar_position:7},c=void 0,u={unversionedId:"mysql/lock",id:"mysql/lock",isDocsHomePage:!1,title:"\ud83e\udd1e \u9501",description:"----",source:"@site/source/mysql/lock.mdx",sourceDirName:"mysql",slug:"/mysql/lock",permalink:"/mysql/lock",version:"current",lastUpdatedAt:1629107600,formattedLastUpdatedAt:"2021/8/16",sidebarPosition:7,frontMatter:{title:"\ud83e\udd1e \u9501",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u270c\ufe0f \u7d22\u5f15",permalink:"/mysql/m-index"},next:{title:"\ud83d\udc4e \u6162\u67e5\u8be2",permalink:"/mysql/slow-query"}},p=[{value:"\u4ec0\u4e48\u662f\u5171\u4eab\u9501\u548c\u6392\u4ed6\u9501\uff1f",id:"\u4ec0\u4e48\u662f\u5171\u4eab\u9501\u548c\u6392\u4ed6\u9501\uff1f",children:[{value:"\u5171\u4eab\u9501",id:"\u5171\u4eab\u9501",children:[]},{value:"\u6392\u5b83\u9501",id:"\u6392\u5b83\u9501",children:[]}]},{value:"\u4ec0\u4e48\u662f Next-Key Lock\uff1f",id:"\u4ec0\u4e48\u662f-next-key-lock\uff1f",children:[]}],s={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u4ec0\u4e48\u662f\u5171\u4eab\u9501\u548c\u6392\u4ed6\u9501\uff1f"},"\u4ec0\u4e48\u662f\u5171\u4eab\u9501\u548c\u6392\u4ed6\u9501\uff1f"),(0,i.kt)("h3",{id:"\u5171\u4eab\u9501"},"\u5171\u4eab\u9501"),(0,i.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"select * from table lock in share mode"),"\uff0c\u8868\u793a\u81ea\u8eab\u53ef\u4ee5\u8bfb\uff0c\u5176\u4ed6\u4e8b\u52a1\u4e5f\u53ef\u4ee5\u8bfb\uff08\u4e5f\u53ef\u4ee5\u7ee7\u7eed\u52a0\u5171\u4eab\u9501\uff09\uff0c\u4f46\u662f\u5176\u4ed6\u4e8b\u52a1\u65e0\u6cd5\u4fee\u6539\u3002"),(0,i.kt)("h3",{id:"\u6392\u5b83\u9501"},"\u6392\u5b83\u9501"),(0,i.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"select * from table for update"),"\uff0c\u8868\u793a\u81ea\u8eab\u53ef\u4ee5\u8fdb\u884c\u589e\u5220\u6539\u67e5\uff0c\u5176\u4ed6\u4e8b\u52a1\u65e0\u6cd5\u8fdb\u884c\u4efb\u4f55\u64cd\u4f5c\u3002\u6392\u5b83\u9501\u662f\u4e00\u79cd\u60b2\u89c2\u9501\uff0c\u66f4\u65b0\u3001\u63d2\u5165\u3001\u5220\u9664\u9ed8\u8ba4\u52a0\u6392\u5b83\u9501\uff0c\u67e5\u8be2\u9ed8\u8ba4\u4e0d\u52a0\u9501\u3002"),(0,i.kt)("h2",{id:"\u4ec0\u4e48\u662f-next-key-lock\uff1f"},"\u4ec0\u4e48\u662f Next-Key Lock\uff1f"),(0,i.kt)("p",null,"InnoDB \u6709\u4e09\u79cd\u9501\u7684\u65b9\u5f0f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Record Lock\uff1a\u5bf9\u67d0\u4e00\u884c\u4e0a\u9501"),(0,i.kt)("li",{parentName:"ul"},"Gap Lock\uff1a\u95f4\u9699\u9501\uff0c\u9501\u5b9a\u4e00\u4e2a\u8303\u56f4\uff0c\u4f46\u4e0d\u5305\u62ec\u8bb0\u5f55\u672c\u8eab\uff0c\u76ee\u7684\u5728\u4e8e\u9632\u6b62\u540c\u4e00\u4e8b\u52a1\u7684\u4e24\u6b21\u8bfb\u51fa\u73b0\u5e7b\u8bfb"),(0,i.kt)("li",{parentName:"ul"},"Next-Key Lock\uff1a\u4e0a\u9762\u4e24\u79cd\u9501\u7684\u7ec4\u5408\uff0c\u5b83\u4f1a\u9501\u5b9a\u4e00\u4e2a\u8303\u56f4\uff0c\u5e76\u4e14\u9501\u5b9a\u8bb0\u5f55\u672c\u8eab\uff0c\u4e3b\u8981\u76ee\u7684\u662f\u4e3a\u4e86\u89e3\u51b3\u5e7b\u8bfb")),(0,i.kt)("p",null,"\u5047\u8bbe\u67d0\u4e00\u4e2a\u65f6\u523b\uff0c\u67d0\u5f20\u8868\u7684 id \u53ea\u6709\u4e24\u4e2a\u503c\uff0c\u5206\u522b\u4e3a 10 \u548c 14\u3002\u5982\u679c\u67e5\u8be2\u6761\u4ef6\u4e3a id > 9\uff0c\u5e76\u4e14\u67d0\u4e2a\u4e8b\u52a1\u65b0\u63d2\u5165\u4e86\u4e00\u6761 id = 12 \u7684\u6570\u636e\uff0c\u4f7f\u7528\u524d\u4e24\u79cd\u9501\u5c06\u5bfc\u81f4\u5e7b\u8bfb\u3002"))}d.isMDXComponent=!0}}]);