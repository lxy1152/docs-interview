"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6655],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(t),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2955:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],p={title:"\ud83d\udc81\u200d\u2642\ufe0f Redis \u4e8b\u52a1",sidebar_position:5},c=void 0,l={unversionedId:"redis/redis-transcation",id:"redis/redis-transcation",isDocsHomePage:!1,title:"\ud83d\udc81\u200d\u2642\ufe0f Redis \u4e8b\u52a1",description:"----",source:"@site/source/redis/redis-transcation.mdx",sourceDirName:"redis",slug:"/redis/redis-transcation",permalink:"/redis/redis-transcation",version:"current",lastUpdatedAt:1629113401,formattedLastUpdatedAt:"2021/8/16",sidebarPosition:5,frontMatter:{title:"\ud83d\udc81\u200d\u2642\ufe0f Redis \u4e8b\u52a1",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\ude46\u200d\u2642\ufe0f Redis \u6301\u4e45\u5316\u7b56\u7565",permalink:"/redis/redis-persistence"},next:{title:"\ud83e\udd26\u200d\u2642\ufe0f \u6545\u969c\u5904\u7406",permalink:"/redis/troubleshooting"}},s=[{value:"Redis \u600e\u4e48\u5904\u7406\u4e8b\u52a1\uff1f",id:"redis-\u600e\u4e48\u5904\u7406\u4e8b\u52a1\uff1f",children:[]}],u={toc:s};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"redis-\u600e\u4e48\u5904\u7406\u4e8b\u52a1\uff1f"},"Redis \u600e\u4e48\u5904\u7406\u4e8b\u52a1\uff1f"),(0,o.kt)("p",null,"Redis \u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"MULTI"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"EXEC"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"DISCARD"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"WATCH")," \u8fd9\u56db\u4e2a\u547d\u4ee4\u5b8c\u6210\u4e8b\u52a1\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"MULTI")," \u5f00\u542f\u4e8b\u52a1\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u5411\u670d\u52a1\u5668\u53d1\u9001\u4efb\u610f\u591a\u4e2a\u547d\u4ee4\uff0c\u8fd9\u4e9b\u547d\u4ee4\u4e0d\u4f1a\u7acb\u9a6c\u6267\u884c\uff0c\u800c\u662f\u88ab\u653e\u5230\u4e00\u4e2a\u961f\u5217\u4e2d\uff0c\u5f53\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"EXEC")," \u547d\u4ee4\u65f6\uff0c\u6240\u6709\u961f\u5217\u4e2d\u7684\u547d\u4ee4\u624d\u4f1a\u88ab\u6267\u884c\u3002\u5982\u679c\u6ca1\u6709\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"EXEC"),"\uff0c\u90a3\u4e48\u4e8b\u52a1\u4e2d\u7684\u6240\u6709\u547d\u4ee4\u90fd\u4e0d\u4f1a\u88ab\u6267\u884c\u3002\u5982\u679c\u5728\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"EXEC")," \u547d\u4ee4\u4e4b\u540e\u53d1\u751f\u4e86\u9519\u8bef\uff0c\u6216\u8005\u5728\u4e8b\u52a1\u4e2d\u67d0\u4e2a\u547d\u4ee4\u53d1\u751f\u4e86\u9519\u8bef\uff0c\u4e8b\u52a1\u4e5f\u4f1a\u6b63\u5e38\u6267\u884c\uff0c\u4e0d\u4f1a\u8fdb\u884c\u56de\u6eda\u3002\u6bd4\u5982\u4e0b\u9762\u7684\u64cd\u4f5c\u5c06\u6b63\u5e38\u6267\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'127.0.0.1:6379> multi \nOK \n127.0.0.1:6379> set key value1 \nQUEUED \n127.0.0.1:6379> incr key \nQUEUED \n127.0.0.1:6379> set key value2 \nQUEUED \n127.0.0.1:6379> exec \n1) OK \n2) (error) ERR value is not an integer or out of range \n3) OK \n127.0.0.1:6379> get key \n"value2" \n')),(0,o.kt)("p",null,"\u901a\u8fc7\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"DISCARD")," \u547d\u4ee4\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u6e05\u7a7a\u4e8b\u52a1\u961f\u5217\uff0c\u5e76\u653e\u5f03\u6267\u884c\u4e8b\u52a1\u3002\u5728\u4e8b\u52a1\u6267\u884c\u4e4b\u524d\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"WATCH")," \u547d\u4ee4\u76d1\u89c6\u4e00\u4e2a\u6216\u591a\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"key"),"\uff0c\u5982\u679c\u5728\u4e8b\u52a1\u6267\u884c\u4e4b\u524d\u8fd9\u4e2a\uff08\u6216\u8fd9\u4e9b\uff09",(0,o.kt)("inlineCode",{parentName:"p"},"key")," \u88ab\u5176\u4ed6\u547d\u4ee4\u4fee\u6539\u4e86\uff0c\u90a3\u4e48\u4e8b\u52a1\u5c06\u88ab\u6253\u65ad\u3002\u53ef\u4ee5\u89c6\u4e3a Redis \u63d0\u4f9b\u7684 CAS \u9501\u3002"))}d.isMDXComponent=!0}}]);