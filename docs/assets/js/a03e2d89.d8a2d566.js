"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3700],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return m}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?t.createElement(k,l(l({ref:n},c),{},{components:r})):t.createElement(k,l({ref:n},c))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=r[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3294:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var t=r(7462),o=r(3366),i=(r(7294),r(3905)),l=["components"],a={title:"\ud83c\udf33 SpringMVC",sidebar_position:2},s=void 0,p={unversionedId:"framework/spring/spring-mvc",id:"framework/spring/spring-mvc",isDocsHomePage:!1,title:"\ud83c\udf33 SpringMVC",description:"----",source:"@site/source/framework/spring/spring-mvc.mdx",sourceDirName:"framework/spring",slug:"/framework/spring/spring-mvc",permalink:"/framework/spring/spring-mvc",version:"current",lastUpdatedAt:1629113401,formattedLastUpdatedAt:"2021/8/16",sidebarPosition:2,frontMatter:{title:"\ud83c\udf33 SpringMVC",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf32 Spring",permalink:"/framework/spring/spring"},next:{title:"\ud83c\udf34 SpringBoot",permalink:"/framework/spring/springboot"}},c=[{value:"Spring MVC \u7684\u8bf7\u6c42\u6d41\u7a0b\uff1f",id:"spring-mvc-\u7684\u8bf7\u6c42\u6d41\u7a0b\uff1f",children:[]},{value:"@RestController \u548c @Controller \u6ce8\u89e3\u6709\u4ec0\u4e48\u533a\u522b\uff1f",id:"restcontroller-\u548c-controller-\u6ce8\u89e3\u6709\u4ec0\u4e48\u533a\u522b\uff1f",children:[{value:"\u4f7f\u7528 @Controller \u6ce8\u89e3",id:"\u4f7f\u7528-controller-\u6ce8\u89e3",children:[]},{value:"\u4f7f\u7528 @RestController \u6ce8\u89e3",id:"\u4f7f\u7528-restcontroller-\u6ce8\u89e3",children:[]}]},{value:"Cookie \u548c Session",id:"cookie-\u548c-session",children:[{value:"\u4ec0\u4e48\u662f Cookie\uff1f",id:"\u4ec0\u4e48\u662f-cookie\uff1f",children:[]},{value:"\u4ec0\u4e48\u662f Session\uff1f",id:"\u4ec0\u4e48\u662f-session\uff1f",children:[]},{value:"Cookie \u548c Session \u7684\u533a\u522b\uff1f",id:"cookie-\u548c-session-\u7684\u533a\u522b\uff1f",children:[]}]}],u={toc:c};function d(e){var n=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"spring-mvc-\u7684\u8bf7\u6c42\u6d41\u7a0b\uff1f"},"Spring MVC \u7684\u8bf7\u6c42\u6d41\u7a0b\uff1f"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.loli.net/2021/07/31/7Po6lweIR3ntqsy.png",alt:"SpringMVC\u6d41\u7a0b\u56fe.jpg"})),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u57fa\u672c\u4e0d\u4f1a\u6709\u89c6\u56fe\u6e32\u67d3\u7684\u8fc7\u7a0b")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7531\u4e8e\u73b0\u5728\u57fa\u672c\u90fd\u662f\u524d\u540e\u7aef\u5206\u79bb\u5f00\u53d1\uff0c\u6240\u4ee5\u4e0a\u56fe\u5df2\u7ecf\u4e0d\u9002\u7528\u4e86\u3002\u6b65\u9aa4 7 \u5c31\u4f1a\u8fd4\u56de\u6700\u7ec8\u7ed3\u679c\uff0c\u4e0d\u518d\u9700\u8981\u540e\u7eed\u7684\u89c6\u56fe\u89e3\u6790\u4e0e\u6e32\u67d3\u3002"))),(0,i.kt)("h2",{id:"restcontroller-\u548c-controller-\u6ce8\u89e3\u6709\u4ec0\u4e48\u533a\u522b\uff1f"},"@RestController \u548c @Controller \u6ce8\u89e3\u6709\u4ec0\u4e48\u533a\u522b\uff1f"),(0,i.kt)("h3",{id:"\u4f7f\u7528-controller-\u6ce8\u89e3"},"\u4f7f\u7528 @Controller \u6ce8\u89e3"),(0,i.kt)("p",null,"\u5355\u72ec\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"@Controller")," \u4e0d\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"@ResponseBody")," \u6ce8\u89e3\u4e00\u822c\u4f7f\u7528\u5728\u8981\u8fd4\u56de\u4e00\u4e2a\u89c6\u56fe\u7684\u60c5\u51b5\uff0c\u8fd9\u79cd\u60c5\u51b5\u5c5e\u4e8e\u6bd4\u8f83\u4f20\u7edf\u7684 Spring MVC \u7684\u5e94\u7528\uff0c\u5bf9\u5e94\u4e8e\u524d\u540e\u7aef\u4e0d\u5206\u79bb\u7684\u60c5\u51b5\u3002\u5982\u679c\u9700\u8981\u5728 Spring4 \u4e4b\u524d\u5f00\u53d1 RESTFul Web \u670d\u52a1\u7684\u8bdd\uff0c\u9700\u8981\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"@Controller")," \u5e76\u7ed3\u5408 ",(0,i.kt)("inlineCode",{parentName:"p"},"@ResponseBody")," \u6ce8\u89e3\uff0c\u4e5f\u5c31\u662f\u8bf4 ",(0,i.kt)("inlineCode",{parentName:"p"},"@Controller + @ResponseBody = @RestController"),"\uff08Spring 4 \u4e4b\u540e\u65b0\u52a0\u7684\u6ce8\u89e3\uff09\u3002"),(0,i.kt)("h3",{id:"\u4f7f\u7528-restcontroller-\u6ce8\u89e3"},"\u4f7f\u7528 @RestController \u6ce8\u89e3"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@RestController")," \u53ea\u8fd4\u56de\u5bf9\u8c61\uff0c\u5bf9\u8c61\u6570\u636e\u76f4\u63a5\u4ee5 JSON \u6216 XML \u5f62\u5f0f\u5199\u5165 HTTP Response \u4e2d\uff0c\u8fd9\u79cd\u60c5\u51b5\u5c5e\u4e8e RESTFul Web \u670d\u52a1\uff0c\u8fd9\u4e5f\u662f\u76ee\u524d\u65e5\u5e38\u5f00\u53d1\u6240\u63a5\u89e6\u7684\u6700\u5e38\u7528\u7684\u60c5\u51b5\u3002"),(0,i.kt)("h2",{id:"cookie-\u548c-session"},"Cookie \u548c Session"),(0,i.kt)("h3",{id:"\u4ec0\u4e48\u662f-cookie\uff1f"},"\u4ec0\u4e48\u662f Cookie\uff1f"),(0,i.kt)("p",null,"Cookie \u4e00\u822c\u7528\u6765\u4fdd\u5b58\u7528\u6237\u4fe1\u606f\uff0c\u6bd4\u5982\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u66ff\u7528\u6237\u586b\u5165\u57fa\u672c\u4fe1\u606f"),(0,i.kt)("li",{parentName:"ul"},"\u4fdd\u5b58\u7528\u6237\u7684\u767b\u5f55\u72b6\u6001\uff08\u4e00\u822c\u662f\u4e00\u4e2a token\uff09")),(0,i.kt)("h3",{id:"\u4ec0\u4e48\u662f-session\uff1f"},"\u4ec0\u4e48\u662f Session\uff1f"),(0,i.kt)("p",null,"Session \u7684\u4e3b\u8981\u4f5c\u7528\u662f\u901a\u8fc7\u670d\u52a1\u7aef\u8bb0\u5f55\u7528\u6237\u7684\u72b6\u6001\u3002\u56e0\u4e3a HTTP \u534f\u8bae\u662f\u65e0\u72b6\u6001\u7684\uff0c\u670d\u52a1\u7aef\u7ed9\u7279\u5b9a\u7684\u7528\u6237\u521b\u5efa\u7279\u5b9a\u7684 Session \u4e4b\u540e\u5c31\u53ef\u4ee5\u6807\u8bc6\u8fd9\u4e2a\u7528\u6237\u5e76\u4e14\u8ddf\u8e2a\u8fd9\u4e2a\u7528\u6237\u4e86\u3002"),(0,i.kt)("h3",{id:"cookie-\u548c-session-\u7684\u533a\u522b\uff1f"},"Cookie \u548c Session \u7684\u533a\u522b\uff1f"),(0,i.kt)("p",null,"Cookie \u6570\u636e\u4fdd\u5b58\u5728\u5ba2\u6237\u7aef\uff0cSession \u6570\u636e\u4fdd\u5b58\u5728\u670d\u52a1\u5668\u7aef\uff0c\u6240\u4ee5\u76f8\u5bf9\u6765\u8bf4 Session \u5b89\u5168\u6027\u66f4\u9ad8\uff0c\u6700\u597d\u4e0d\u8981\u5728 Cookie \u4e2d\u4fdd\u5b58\u654f\u611f\u4fe1\u606f\u3002Cookie \u53ef\u4ee5\u624b\u52a8\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\uff0cSession \u5728\u5173\u95ed\u6d4f\u89c8\u5668\u540e\u5c31\u5173\u95ed\u4e86\u3002"))}d.isMDXComponent=!0}}]);