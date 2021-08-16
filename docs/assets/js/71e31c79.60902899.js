"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6545],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},167:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={title:"\ud83d\udc63 IP \u534f\u8bae\u57fa\u7840",sidebar_position:1},p=void 0,u={unversionedId:"network/ip/ip-basic",id:"network/ip/ip-basic",isDocsHomePage:!1,title:"\ud83d\udc63 IP \u534f\u8bae\u57fa\u7840",description:"----",source:"@site/source/network/ip/ip-basic.mdx",sourceDirName:"network/ip",slug:"/network/ip/ip-basic",permalink:"/network/ip/ip-basic",version:"current",lastUpdatedAt:1629107600,formattedLastUpdatedAt:"2021/8/16",sidebarPosition:1,frontMatter:{title:"\ud83d\udc63 IP \u534f\u8bae\u57fa\u7840",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udea5 ZooKeeper",permalink:"/middleware/zookeeper"},next:{title:"\ud83d\udc53 IP \u5730\u5740",permalink:"/network/ip/ip-address"}},l=[{value:"\u4ecb\u7ecd\u4e00\u4e0b IP \u534f\u8bae\uff1f",id:"\u4ecb\u7ecd\u4e00\u4e0b-ip-\u534f\u8bae\uff1f",children:[]},{value:"IP \u548c MAC \u4e4b\u95f4\u7684\u5173\u7cfb\uff1f",id:"ip-\u548c-mac-\u4e4b\u95f4\u7684\u5173\u7cfb\uff1f",children:[]}],s={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u4ecb\u7ecd\u4e00\u4e0b-ip-\u534f\u8bae\uff1f"},"\u4ecb\u7ecd\u4e00\u4e0b IP \u534f\u8bae\uff1f"),(0,o.kt)("p",null,"IP \u534f\u8bae\u5728 TCP/IP \u6a21\u578b\u4e2d\u5904\u4e8e\u7b2c\u4e09\u5c42\uff0c\u4e5f\u5c31\u662f\u7f51\u7edc\u5c42\u3002\u7f51\u7edc\u5c42\u7684\u4e3b\u8981\u4f5c\u7528\u662f\uff1a\u5b9e\u73b0\u4e3b\u673a\u4e0e\u4e3b\u673a\u4e4b\u95f4\u7684\u901a\u4fe1\uff0c\u4e5f\u53eb\u70b9\u5bf9\u70b9\uff08end to end\uff09\u901a\u4fe1\u3002"),(0,o.kt)("h2",{id:"ip-\u548c-mac-\u4e4b\u95f4\u7684\u5173\u7cfb\uff1f"},"IP \u548c MAC \u4e4b\u95f4\u7684\u5173\u7cfb\uff1f"),(0,o.kt)("p",null,"MAC\uff08\u6570\u636e\u94fe\u8def\u5c42\uff09 \u7684\u4f5c\u7528\u662f\u5b9e\u73b0\u76f4\u8fde\u7684\u4e24\u4e2a\u8bbe\u5907\u4e4b\u95f4\u901a\u4fe1\uff0c\u800c IP\uff08\u7f51\u7edc\u5c42\uff09 \u5219\u8d1f\u8d23\u5728\u6ca1\u6709\u76f4\u8fde\u7684\u4e24\u4e2a\u7f51\u7edc\u4e4b\u95f4\u8fdb\u884c\u901a\u4fe1\u4f20\u8f93\u3002"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IP \u4e0e MAC")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u56e0\u4e3a\u51fa\u53d1\u5730\u548c\u76ee\u7684\u5730\u662f\u4e0d\u4f1a\u53d8\u7684\uff0c\u6240\u4ee5\u6e90 IP \u5730\u5740\u548c\u76ee\u6807 IP \u5730\u5740\u5728\u4f20\u8f93\u8fc7\u7a0b\u4e2d\u662f\u4e0d\u4f1a\u53d8\u5316\u7684\u3002\u4f46\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u901a\u8fc7\u4e0d\u540c\u7684\u8def\u7531\u5668\u8fdb\u884c\u8f6c\u53d1\uff0c\u6240\u4ee5\u6e90 MAC \u5730\u5740\u548c\u76ee\u6807 MAC \u662f\u4e00\u76f4\u5728\u53d8\u5316"))))}d.isMDXComponent=!0}}]);