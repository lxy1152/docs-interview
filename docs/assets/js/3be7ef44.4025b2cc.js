"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[855],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4463:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"\ud83d\ude0e \u6cdb\u578b",sidebar_position:8},c=void 0,u={unversionedId:"java-basic/generics",id:"java-basic/generics",isDocsHomePage:!1,title:"\ud83d\ude0e \u6cdb\u578b",description:"\u4ec0\u4e48\u662f\u6cdb\u578b\uff1f",source:"@site/source/java-basic/generics.mdx",sourceDirName:"java-basic",slug:"/java-basic/generics",permalink:"/docs/java-basic/generics",version:"current",sidebarPosition:8,frontMatter:{title:"\ud83d\ude0e \u6cdb\u578b",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\ud83d\ude2a \u53cd\u5c04",permalink:"/docs/java-basic/reflect"},next:{title:"\ud83e\uddd0 \u5176\u4ed6",permalink:"/docs/java-basic/other"}},s=[{value:"\u4ec0\u4e48\u662f\u6cdb\u578b\uff1f",id:"\u4ec0\u4e48\u662f\u6cdb\u578b\uff1f",children:[]},{value:"\u4ec0\u4e48\u662f\u6cdb\u578b\u7684\u7c7b\u578b\u64e6\u9664\uff1f",id:"\u4ec0\u4e48\u662f\u6cdb\u578b\u7684\u7c7b\u578b\u64e6\u9664\uff1f",children:[]},{value:"\u4ec0\u4e48\u662f\u6cdb\u578b\u4e2d\u7684\u9650\u5b9a\u901a\u914d\u7b26\u548c\u975e\u9650\u5b9a\u901a\u914d\u7b26\uff1f",id:"\u4ec0\u4e48\u662f\u6cdb\u578b\u4e2d\u7684\u9650\u5b9a\u901a\u914d\u7b26\u548c\u975e\u9650\u5b9a\u901a\u914d\u7b26\uff1f",children:[]},{value:"\u600e\u4e48\u65b0\u5efa\u4e00\u4e2a\u6cdb\u578b\u7c7b\u3001\u6cdb\u578b\u65b9\u6cd5\u3001\u6cdb\u578b\u53d8\u91cf\uff1f",id:"\u600e\u4e48\u65b0\u5efa\u4e00\u4e2a\u6cdb\u578b\u7c7b\u3001\u6cdb\u578b\u65b9\u6cd5\u3001\u6cdb\u578b\u53d8\u91cf\uff1f",children:[]}],p={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4ec0\u4e48\u662f\u6cdb\u578b\uff1f"},"\u4ec0\u4e48\u662f\u6cdb\u578b\uff1f"),(0,i.kt)("p",null,"\u6cdb\u578b\u662f JDK1.5 \u4e4b\u540e\u51fa\u73b0\u7684\uff0c\u6cdb\u578b\u7684\u672c\u8d28\u662f\u53c2\u6570\u5316\u7c7b\u578b\uff0c\u4e5f\u5c31\u662f\u8bf4\u6240\u64cd\u4f5c\u7684\u6570\u636e\u7c7b\u578b\u88ab\u6307\u5b9a\u4e3a\u4e00\u4e2a\u53c2\u6570\u3002\u5982\u679c\u76f4\u63a5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")," \u7c7b\u6765\u5b9e\u73b0\u901a\u7528\u3001\u4e0d\u540c\u7c7b\u578b\u7684\u5904\u7406\uff0c\u6709\u8fd9\u4e48\u4e24\u4e2a\u7f3a\u70b9\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6bcf\u6b21\u4f7f\u7528\u65f6\u90fd\u9700\u8981\u5f3a\u5236\u8f6c\u6362\u6210\u60f3\u8981\u7684\u7c7b\u578b"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u7f16\u8bd1\u65f6\u7f16\u8bd1\u5668\u5e76\u4e0d\u77e5\u9053\u7c7b\u578b\u8f6c\u6362\u662f\u5426\u6b63\u5e38\uff0c\u8fd0\u884c\u65f6\u624d\u77e5\u9053\uff0c\u4e0d\u5b89\u5168")),(0,i.kt)("h2",{id:"\u4ec0\u4e48\u662f\u6cdb\u578b\u7684\u7c7b\u578b\u64e6\u9664\uff1f"},"\u4ec0\u4e48\u662f\u6cdb\u578b\u7684\u7c7b\u578b\u64e6\u9664\uff1f"),(0,i.kt)("p",null,"\u5728 Java \u4e2d\uff0c\u6cdb\u578b\u662f Java \u7f16\u8bd1\u5668\u7684\u6982\u5ff5\uff0c\u5f53\u7f16\u8bd1\u5668\u5bf9\u5e26\u6709\u6cdb\u578b\u7684 Java \u4ee3\u7801\u8fdb\u884c\u7f16\u8bd1\u65f6\uff0c\u5b83\u4f1a\u53bb\u6267\u884c\u7c7b\u578b\u68c0\u67e5\u548c\u7c7b\u578b\u63a8\u65ad\uff0c\u7136\u540e\u751f\u6210\u666e\u901a\u7684\u4e0d\u5e26\u6cdb\u578b\u7684\u5b57\u8282\u7801\uff0c\u8fd9\u79cd\u666e\u901a\u7684\u5b57\u8282\u7801\u53ef\u4ee5\u88ab\u4e00\u822c\u7684 Java \u865a\u62df\u673a\u63a5\u6536\u5e76\u6267\u884c\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u5c31\u53eb\u505a\u7c7b\u578b\u64e6\u9664\uff08type erasure\uff09\u3002\u7531\u4e8e\u5b58\u5728\u7c7b\u578b\u64e6\u9664\uff0c\u6240\u4ee5\u4e0b\u9762\u7684\u64cd\u4f5c\u5728\u7f16\u8bd1\u65f6\u5c31\u662f\u4e0d\u88ab\u5141\u8bb8\u7684\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Test {\n    // \u63d0\u793a\uff1a'test(List<String>)' \u4e0e 'test(List<Integer>)' \u51b2\u7a81\uff1b\n    // \u4e24\u4e2a\u65b9\u6cd5\u5177\u6709\u76f8\u540c\u7684\u64e6\u9664\n    public void test(List<String> list) {\n\n    }\n\n    public void test(List<Integer> list) {\n\n    }\n}\n")),(0,i.kt)("h2",{id:"\u4ec0\u4e48\u662f\u6cdb\u578b\u4e2d\u7684\u9650\u5b9a\u901a\u914d\u7b26\u548c\u975e\u9650\u5b9a\u901a\u914d\u7b26\uff1f"},"\u4ec0\u4e48\u662f\u6cdb\u578b\u4e2d\u7684\u9650\u5b9a\u901a\u914d\u7b26\u548c\u975e\u9650\u5b9a\u901a\u914d\u7b26\uff1f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"?"),"\uff1a\u975e\u9650\u5b9a\u901a\u914d\u7b26\uff0c\u53ef\u4ee5\u8868\u793a\u4efb\u610f\u7c7b\u578b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<? extends T>"),"\uff1a\u8868\u793a\u8fd9\u4e2a\u7c7b\u578b\u5fc5\u987b\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"T")," \u7c7b\u578b\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"T")," \u7c7b\u578b\u7684\u5b50\u7c7b\u6216\u8005\u5b9e\u73b0\u4e86 ",(0,i.kt)("inlineCode",{parentName:"li"},"T")," \u63a5\u53e3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<? super T>"),"\uff1a\u8868\u793a\u8fd9\u4e2a\u7c7b\u578b\u5fc5\u987b\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"T")," \u7c7b\u578b\u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"li"},"T")," \u7c7b\u578b\u7684\u7236\u7c7b")),(0,i.kt)("h2",{id:"\u600e\u4e48\u65b0\u5efa\u4e00\u4e2a\u6cdb\u578b\u7c7b\u3001\u6cdb\u578b\u65b9\u6cd5\u3001\u6cdb\u578b\u53d8\u91cf\uff1f"},"\u600e\u4e48\u65b0\u5efa\u4e00\u4e2a\u6cdb\u578b\u7c7b\u3001\u6cdb\u578b\u65b9\u6cd5\u3001\u6cdb\u578b\u53d8\u91cf\uff1f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Test<T> {\n    private T data;\n\n    // \u4e0d\u652f\u6301\u9759\u6001\u6cdb\u578b\u53d8\u91cf\uff0c\u8fd9\u4e48\u5199\u662f\u9519\u8bef\u7684\n    // private static T staticData;\n\n    public Test(T data) {\n        this.data = data;\n    }\n\n    public T get() {\n        return this.data;\n    }\n\n    public static <T> T getStatic(T data) {\n        System.out.println(data);\n        return data;\n    }\n}\n")))}d.isMDXComponent=!0}}]);