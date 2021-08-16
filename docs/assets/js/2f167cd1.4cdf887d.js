"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9365],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,y=s["".concat(u,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},539:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"\ud83d\udc4b \u6570\u636e\u7c7b\u578b",sidebar_position:2},u=void 0,c={unversionedId:"mysql/datatype",id:"mysql/datatype",isDocsHomePage:!1,title:"\ud83d\udc4b \u6570\u636e\u7c7b\u578b",description:"----",source:"@site/source/mysql/datatype.mdx",sourceDirName:"mysql",slug:"/mysql/datatype",permalink:"/mysql/datatype",version:"current",lastUpdatedAt:1629107600,formattedLastUpdatedAt:"2021/8/16",sidebarPosition:2,frontMatter:{title:"\ud83d\udc4b \u6570\u636e\u7c7b\u578b",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd1a \u8303\u5f0f",permalink:"/mysql/normal-form"},next:{title:"\ud83d\udd90\ufe0f \u5b58\u50a8\u5f15\u64ce",permalink:"/mysql/engine"}},p=[{value:"Mysql \u6709\u54ea\u4e9b\u6570\u636e\u7c7b\u578b\uff0c\u4f7f\u7528\u7684\u65f6\u5019\u6709\u6ca1\u6709\u4ec0\u4e48\u6ce8\u610f\u70b9\uff1f",id:"mysql-\u6709\u54ea\u4e9b\u6570\u636e\u7c7b\u578b\uff0c\u4f7f\u7528\u7684\u65f6\u5019\u6709\u6ca1\u6709\u4ec0\u4e48\u6ce8\u610f\u70b9\uff1f",children:[]},{value:"Mysql \u4e2d varchar \u548c char \u7684\u533a\u522b\uff1f",id:"mysql-\u4e2d-varchar-\u548c-char-\u7684\u533a\u522b\uff1f",children:[]},{value:"Mysql \u4e2d\u63d2\u5165\u6570\u636e\u4f7f\u7528\u81ea\u589e id \u597d\u8fd8\u662f\u4f7f\u7528 uuid\uff0c\u4e3a\u4ec0\u4e48\uff1f",id:"mysql-\u4e2d\u63d2\u5165\u6570\u636e\u4f7f\u7528\u81ea\u589e-id-\u597d\u8fd8\u662f\u4f7f\u7528-uuid\uff0c\u4e3a\u4ec0\u4e48\uff1f",children:[]}],m={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"mysql-\u6709\u54ea\u4e9b\u6570\u636e\u7c7b\u578b\uff0c\u4f7f\u7528\u7684\u65f6\u5019\u6709\u6ca1\u6709\u4ec0\u4e48\u6ce8\u610f\u70b9\uff1f"},"Mysql \u6709\u54ea\u4e9b\u6570\u636e\u7c7b\u578b\uff0c\u4f7f\u7528\u7684\u65f6\u5019\u6709\u6ca1\u6709\u4ec0\u4e48\u6ce8\u610f\u70b9\uff1f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6574\u6570\u7c7b\u578b\uff1aBIT\u3001BOOL\u3001TINY INT\u3001SMALL INT\u3001MEDIUM INT\u3001INT\u3001BIG INT"),(0,i.kt)("li",{parentName:"ul"},"\u6d6e\u70b9\u6570\u7c7b\u578b\uff1aFLOAT\u3001DOUBLE\u3001DECIMAL"),(0,i.kt)("li",{parentName:"ul"},"\u5b57\u7b26\u4e32\u7c7b\u578b\uff1aCHAR\u3001VARCHAR\u3001TINY TEXT\u3001TEXT\u3001MEDIUM TEXT\u3001LONGTEXT\u3001TINY BLOB\u3001MEDIUM BLOB\u3001LONG BLOB"),(0,i.kt)("li",{parentName:"ul"},"\u65e5\u671f\u7c7b\u578b\uff1aDate\u3001DateTime\u3001TIMESTAMP\u3001TIME\u3001YEAR")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u4f7f\u7528\u5efa\u8bae")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4f7f\u7528\u7684\u65f6\u5019\u5efa\u8bae\u9075\u5faa\u4ece\u5c0f\u539f\u5219\u3002\u53e6\u5916\uff1a"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"char")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"varchar")," \u7684\u65f6\u5019\uff0c\u9700\u8981\u6ce8\u610f ",(0,i.kt)("inlineCode",{parentName:"li"},"char")," \u4f1a\u53bb\u6389\u5b57\u7b26\u4e32\u672b\u5c3e\u7684\u7a7a\u683c"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"text")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"blob")," \u7684\u65f6\u5019\uff0c\u6ce8\u610f\u5b9a\u671f\u6e05\u7406\u788e\u7247\u7a7a\u95f4\uff0c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"OPTIMIZE TABLE")," \u547d\u4ee4"),(0,i.kt)("li",{parentName:"ul"},"\u6d6e\u70b9\u6570\u4f1a\u9020\u6210\u7cbe\u5ea6\u4e22\u5931\uff0c\u5c3d\u91cf\u4f7f\u7528\u5b9a\u70b9\u6570 ",(0,i.kt)("inlineCode",{parentName:"li"},"DECIMAL"))))),(0,i.kt)("h2",{id:"mysql-\u4e2d-varchar-\u548c-char-\u7684\u533a\u522b\uff1f"},"Mysql \u4e2d varchar \u548c char \u7684\u533a\u522b\uff1f"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"varchar")," \u4f1a\u6839\u636e\u5b58\u50a8\u7684\u5185\u5bb9\u6539\u53d8\u957f\u5ea6\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"char")," \u662f\u5b9a\u957f\uff0c\u5982\u679c\u957f\u5ea6\u4e0d\u591f\uff0c\u5219\u4f7f\u7528\u7a7a\u683c\u8865\u9f50\u3002\u4f7f\u7528\u7a7a\u683c\u8865\u9f50\u4ec5\u662f\u5728\u63d2\u5165\u7684\u65f6\u5019\uff0c\u68c0\u7d22\u7684\u65f6\u5019\u4f1a\u5c06\u672b\u5c3e\u7684\u7a7a\u683c\u5220\u6389\u3002"),(0,i.kt)("h2",{id:"mysql-\u4e2d\u63d2\u5165\u6570\u636e\u4f7f\u7528\u81ea\u589e-id-\u597d\u8fd8\u662f\u4f7f\u7528-uuid\uff0c\u4e3a\u4ec0\u4e48\uff1f"},"Mysql \u4e2d\u63d2\u5165\u6570\u636e\u4f7f\u7528\u81ea\u589e id \u597d\u8fd8\u662f\u4f7f\u7528 uuid\uff0c\u4e3a\u4ec0\u4e48\uff1f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5355\u5b9e\u4f8b\u6216\u5355\u8282\u70b9\u7ec4\uff0c\u4e0d\u62c5\u5fc3\u7f51\u7edc\u722c\u866b\u83b7\u53d6\u6570\u636e\u91cf\uff0c\u63a8\u8350\u4f7f\u7528\u81ea\u589eid\uff0c\u6027\u80fd\u66f4\u597d"),(0,i.kt)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f\u573a\u666f\uff0c20 \u4e2a\u8282\u70b9\u4e0b\u7684\u5c0f\u89c4\u6a21\u5206\u5e03\u5f0f\u573a\u666f\uff0c\u63a8\u8350 uuid\uff1b20~200 \u4e2a\u8282\u70b9\u7684\u4e2d\u89c4\u6a21\u5206\u5e03\u5f0f\u573a\u666f\uff0c\u63a8\u8350\u81ea\u589e id + \u6b65\u957f\u7684\u7b56\u7565\uff1b200 \u4ee5\u4e0a\u8282\u70b9\uff0c\u63a8\u8350\u96ea\u82b1\u7b97\u6cd5\u7684\u5168\u5c40\u81ea\u589e id")))}s.isMDXComponent=!0}}]);