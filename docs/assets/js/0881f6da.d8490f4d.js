"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[287],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7294),a=n(9443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(6010),o="tabItem_1uMI",u="tabItemActive_2DSg";var c=37,s=39;var p=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,p=e.values,d=e.groupId,m=e.className,f=i(),v=f.tabGroupChoices,g=f.setTabGroupChoices,k=(0,r.useState)(a),b=k[0],N=k[1],h=r.Children.toArray(e.children),y=[];if(null!=d){var S=v[d];null!=S&&S!==b&&p.some((function(e){return e.value===S}))&&N(S)}var C=function(e){var t=e.currentTarget,n=y.indexOf(t),r=p[n].value;N(r),null!=d&&(g(d,r),setTimeout((function(){var e,n,r,a,i,l,o,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,l=window,o=l.innerHeight,c=l.innerWidth,n>=0&&i<=c&&a<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case s:var r=y.indexOf(e.target)+1;n=y[r]||y[0];break;case c:var a=y.indexOf(e.target)-1;n=y[a]||y[y.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:w,onFocus:C,onClick:C},n)}))),t?(0,r.cloneElement)(h.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},2397:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=n(5064),o=n(8215),u=["components"],c={title:"\ud83d\ude06 String \u7c7b",sidebar_position:5},s=void 0,p={unversionedId:"java-basic/string-class",id:"java-basic/string-class",isDocsHomePage:!1,title:"\ud83d\ude06 String \u7c7b",description:"\u4e3a\u4ec0\u4e48 String \u5bf9\u8c61\u662f\u4e0d\u53ef\u53d8\u7684\uff1f",source:"@site/source/java-basic/string-class.mdx",sourceDirName:"java-basic",slug:"/java-basic/string-class",permalink:"/docs/java-basic/string-class",version:"current",sidebarPosition:5,frontMatter:{title:"\ud83d\ude06 String \u7c7b",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\ude01 Object \u7c7b",permalink:"/docs/java-basic/object-class"},next:{title:"\ud83d\ude35 \u5f02\u5e38",permalink:"/docs/java-basic/exception"}},d=[{value:"\u4e3a\u4ec0\u4e48 String \u5bf9\u8c61\u662f\u4e0d\u53ef\u53d8\u7684\uff1f",id:"\u4e3a\u4ec0\u4e48-string-\u5bf9\u8c61\u662f\u4e0d\u53ef\u53d8\u7684\uff1f",children:[]},{value:"\u4e86\u89e3\u5b57\u7b26\u4e32\u6c60\uff08String pool\uff09\u5417\uff1f",id:"\u4e86\u89e3\u5b57\u7b26\u4e32\u6c60\uff08string-pool\uff09\u5417\uff1f",children:[]},{value:"\u8bb2\u4e00\u4e0b String\uff0cStringBuilder \u548c StringBuffer \u7684\u533a\u522b\uff1f",id:"\u8bb2\u4e00\u4e0b-string\uff0cstringbuilder-\u548c-stringbuffer-\u7684\u533a\u522b\uff1f",children:[]}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4e3a\u4ec0\u4e48-string-\u5bf9\u8c61\u662f\u4e0d\u53ef\u53d8\u7684\uff1f"},"\u4e3a\u4ec0\u4e48 String \u5bf9\u8c61\u662f\u4e0d\u53ef\u53d8\u7684\uff1f"),(0,i.kt)("p",null,"\u4e0d\u53ef\u53d8\u662f\u6307\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," \u5bf9\u8c61\u88ab\u521b\u5efa\u540e\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u5c31\u4e0d\u5141\u8bb8\u518d\u88ab\u4fee\u6539\u3002\u5b9e\u73b0\u4e0d\u53ef\u53d8\u6027\u7684\u5173\u952e\u5728\u4e8e\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"String")," \u7c7b\u88ab\u58f0\u660e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"final"),"\uff0c\u56e0\u6b64\u5b83\u4e0d\u53ef\u88ab\u7ee7\u627f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"String")," \u7c7b\u5185\u90e8\u901a\u8fc7\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"char")," \u578b\u6570\u7ec4\u6765\u4fdd\u5b58\u6570\u636e\uff0c\u8fd9\u4e2a\u6570\u7ec4\u540c\u6837\u88ab\u58f0\u660e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"final"),"\uff0c\u56e0\u6b64\u4e0d\u80fd\u76f4\u63a5\u4fee\u6539\u4fdd\u5b58\u7684\u6570\u636e")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"String \u7c7b\u8bbe\u8ba1\u4e3a\u4e0d\u53ef\u53d8\u7684\u539f\u56e0")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"\u56e0\u4e3a\u4e0d\u53ef\u53d8\uff0c\u6240\u4ee5\u54c8\u5e0c\u503c\u662f\u4e0d\u53d8\u7684\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u7f13\u5b58\u54c8\u5e0c\u503c"),(0,i.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u5728 String Pool \u4e2d\u7f13\u5b58"),(0,i.kt)("li",{parentName:"ol"},"\u4e0d\u53ef\u53d8\u6027\u4f7f\u5f97\u5b83\u4e00\u5b9a\u662f\u7ebf\u7a0b\u5b89\u5168\u7684")))),(0,i.kt)("h2",{id:"\u4e86\u89e3\u5b57\u7b26\u4e32\u6c60\uff08string-pool\uff09\u5417\uff1f"},"\u4e86\u89e3\u5b57\u7b26\u4e32\u6c60\uff08String pool\uff09\u5417\uff1f"),(0,i.kt)("p",null,"JVM \u4e3a\u4e86\u63d0\u5347\u6027\u80fd\u548c\u51cf\u5c11\u5185\u5b58\u5f00\u9500\uff0c\u907f\u514d\u5b57\u7b26\u4e32\u7684\u91cd\u590d\u521b\u5efa\uff0c\u7ef4\u62a4\u4e86\u4e00\u5757\u7279\u6b8a\u7684\u5185\u5b58\u7a7a\u95f4\uff0c\u53eb\u505a\u5b57\u7b26\u4e32\u6c60\uff08String Pool\uff09\u3002"),(0,i.kt)(l.Z,{defaultValue:"\u91c7\u7528\u5b57\u9762\u503c\u8d4b\u503c",values:[{label:"\u91c7\u7528\u5b57\u9762\u503c\u8d4b\u503c",value:"\u91c7\u7528\u5b57\u9762\u503c\u8d4b\u503c"},{label:"\u901a\u8fc7 new \u5173\u952e\u5b57\u65b0\u5efa\u5bf9\u8c61",value:"\u901a\u8fc7 new \u5173\u952e\u5b57\u65b0\u5efa\u5bf9\u8c61"},{label:"String.intern()",value:"String.intern()"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"\u91c7\u7528\u5b57\u9762\u503c\u8d4b\u503c",mdxType:"TabItem"},(0,i.kt)("p",null,"\u5982\u679c\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},'String a = "abc"')," \u7684\u65b9\u5f0f\u6765\u83b7\u5f97\u4e00\u4e2a\u65b0\u7684\u5b57\u7b26\u4e32\uff0c\u90a3\u4e48\u4f1a\u81ea\u52a8\u7684\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"abc")," \u4fdd\u5b58\u5230\u5b57\u7b26\u4e32\u6c60\u4e2d\u3002")),(0,i.kt)(o.Z,{value:"\u901a\u8fc7 new \u5173\u952e\u5b57\u65b0\u5efa\u5bf9\u8c61",mdxType:"TabItem"},(0,i.kt)("p",null,"\u5982\u679c\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"new")," \u6765\u83b7\u53d6\u65b0\u7684\u5b57\u7b26\u4e32\uff0c\u90a3\u4e48\u7a0b\u5e8f\u603b\u662f\u4f1a\u5728\u5806\u4e0a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61\uff08\u540c\u65f6\u5982\u679c\u5b57\u7b26\u4e32\u6c60\u4e2d\u6ca1\u6709\u8fd9\u4e2a\u5b57\u7b26\u4e32\uff0c\u90a3\u4e48\u8fd8\u8981\u5728\u5b57\u7b26\u4e32\u6c60\u4e2d\u521b\u5efa\u4e00\u4e2a\u5b57\u7b26\u4e32\u5bf9\u8c61\uff09\uff0c\u6240\u4ee5\u8fd9\u4e2a\u6b65\u9aa4\u4f1a\u521b\u5efa\u4e24\u4e2a\u5bf9\u8c61\u3002\u5982\u679c\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"==")," \u8fdb\u884c\u6bd4\u8f83\uff0c\u90a3\u4e48\u5b83\u4eec\u4e00\u5b9a\u662f\u4e0d\u7b49\u7684\u3002")),(0,i.kt)(o.Z,{value:"String.intern()",mdxType:"TabItem"},(0,i.kt)("p",null,"\u9664\u4e86\u524d\u9762\u8fd9\u4e24\u79cd\u65b9\u5f0f\uff0c\u8fd8\u53ef\u4ee5\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," \u7c7b\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"intern()")," \u65b9\u6cd5\u4ece\u5b57\u7b26\u4e32\u6c60\u4e2d\u83b7\u53d6\u4e00\u4e2a\u5b57\u7b26\u4e32\u7684\u5f15\u7528\uff0c\u5982\u679c\u5b57\u7b26\u4e32\u6c60\u4e2d\u4e0d\u5b58\u5728\u8fd9\u4e2a\u5b57\u7b26\u4e32\uff0c\u90a3\u4e48\u9996\u5148\u4f1a\u628a\u5b83\u4fdd\u5b58\u8d77\u6765\u518d\u8fd4\u56de\u3002"))),(0,i.kt)("h2",{id:"\u8bb2\u4e00\u4e0b-string\uff0cstringbuilder-\u548c-stringbuffer-\u7684\u533a\u522b\uff1f"},"\u8bb2\u4e00\u4e0b String\uff0cStringBuilder \u548c StringBuffer \u7684\u533a\u522b\uff1f"),(0,i.kt)(l.Z,{defaultValue:"\u53ef\u53d8\u6027",values:[{label:"\u53ef\u53d8\u6027",value:"\u53ef\u53d8\u6027"},{label:"\u7ebf\u7a0b\u5b89\u5168",value:"\u7ebf\u7a0b\u5b89\u5168"},{label:"\u7236\u7c7b",value:"\u7236\u7c7b"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"\u53ef\u53d8\u6027",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"String")," \u4e0d\u53ef\u53d8"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StringBuilder")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"StringBuffer")," \u5747\u53ef\u53d8"))),(0,i.kt)(o.Z,{value:"\u7ebf\u7a0b\u5b89\u5168",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"String")," \u56e0\u4e3a\u4e0d\u53ef\u53d8\uff0c\u6240\u4ee5\u662f\u7ebf\u7a0b\u5b89\u5168\u7684"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StringBuilder")," \u4e0d\u662f\u7ebf\u7a0b\u5b89\u5168\u7684"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StringBuffer")," \u662f\u7ebf\u7a0b\u5b89\u5168\u7684\uff0c\u56e0\u4e3a\u4f7f\u7528\u4e86 synchronized \u5173\u952e\u5b57\uff08\u5728\u65b9\u6cd5\u4e0a\u52a0\u9501\uff09"))),(0,i.kt)(o.Z,{value:"\u7236\u7c7b",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"String")," \u662f\u7ee7\u627f\u81ea ",(0,i.kt)("inlineCode",{parentName:"p"},"Object"),"\uff0c\u800c ",(0,i.kt)("inlineCode",{parentName:"p"},"StringBuilder")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"StringBuffer")," \u90fd\u7ee7\u627f\u81ea ",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractStringBuilder"),"\uff0c\u533a\u522b\u5728\u4e8e\u662f\u5426\u4f7f\u7528\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"synchronized"),"\u3002"))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u751f\u6210\u7684\u5b57\u7b26\u4e32\u7684\u6bd4\u8f83")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"StringBuilder")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"StringBuffer")," \u91cd\u5199\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"toString()")," \u65b9\u6cd5\u90fd\u662f\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"new String()")," \u7684\u65b9\u5f0f\u6765\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u5b57\u7b26\u4e32\uff0c\u6240\u4ee5\u5728\u6bd4\u8f83\u65f6\u662f\u4e0d\u76f8\u7b49\u7684\u3002"))))}f.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);