"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[564],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,v=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return a?n.createElement(v,o(o({ref:t},m),{},{components:a})):n.createElement(v,o({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7031:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={title:"\ud83e\udd38 ArrayList",sidebar_position:1},s=void 0,p={unversionedId:"java-collection/list/arraylist",id:"java-collection/list/arraylist",isDocsHomePage:!1,title:"\ud83e\udd38 ArrayList",description:"----",source:"@site/source/java-collection/list/arraylist.mdx",sourceDirName:"java-collection/list",slug:"/java-collection/list/arraylist",permalink:"/java-collection/list/arraylist",version:"current",lastUpdatedAt:1629107600,formattedLastUpdatedAt:"2021/8/16",sidebarPosition:1,frontMatter:{title:"\ud83e\udd38 ArrayList",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u26f7\ufe0f TreeSet",permalink:"/java-collection/set/treeset"},next:{title:"\ud83e\udd3e Vector",permalink:"/java-collection/list/vector"}},m=[{value:"ArrayList \u7684\u5e95\u5c42\u5b9e\u73b0\uff1f",id:"arraylist-\u7684\u5e95\u5c42\u5b9e\u73b0\uff1f",children:[]},{value:"ArrayList \u7684\u9ed8\u8ba4\u5927\u5c0f\u662f\u591a\u5c11\uff1f",id:"arraylist-\u7684\u9ed8\u8ba4\u5927\u5c0f\u662f\u591a\u5c11\uff1f",children:[]},{value:"ArrayList \u7684\u6269\u5bb9\u673a\u5236\uff1f",id:"arraylist-\u7684\u6269\u5bb9\u673a\u5236\uff1f",children:[]},{value:"ArrayList \u5982\u4f55\u5220\u9664\u5143\u7d20\uff1f",id:"arraylist-\u5982\u4f55\u5220\u9664\u5143\u7d20\uff1f",children:[]},{value:"ArrayList \u7684\u5e8f\u5217\u5316\uff1f",id:"arraylist-\u7684\u5e8f\u5217\u5316\uff1f",children:[]},{value:"\u4ec0\u4e48\u662f fail-fast \u673a\u5236\uff1f",id:"\u4ec0\u4e48\u662f-fail-fast-\u673a\u5236\uff1f",children:[]}],c={toc:m};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"arraylist-\u7684\u5e95\u5c42\u5b9e\u73b0\uff1f"},"ArrayList \u7684\u5e95\u5c42\u5b9e\u73b0\uff1f"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ArrayList")," \u662f\u57fa\u4e8e\u6570\u7ec4\u5b9e\u73b0\u7684\uff0c\u6240\u4ee5\u652f\u6301\u5feb\u901f\u968f\u673a\u8bbf\u95ee\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5feb\u901f\u968f\u673a\u8bbf\u95ee")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"ArrayList")," \u7c7b\u5b9e\u73b0\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"RandomAccess")," \u63a5\u53e3\uff0c\u8fd9\u4e2a\u63a5\u53e3\u662f\u4e00\u4e2a\u6807\u8bb0\u63a5\u53e3\uff0c\u5b9e\u73b0\u8fd9\u4e2a\u63a5\u53e3\u7684\u7c7b\uff0c\u8868\u793a\u5b83\u652f\u6301\u5feb\u901f\u968f\u673a\u8bbf\u95ee\uff0c\u76f4\u63a5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," \u5faa\u73af\u4f1a\u6bd4\u4f7f\u7528\u8fed\u4ee3\u5668\u5faa\u73af\u8981\u5feb\u3002"))),(0,i.kt)("h2",{id:"arraylist-\u7684\u9ed8\u8ba4\u5927\u5c0f\u662f\u591a\u5c11\uff1f"},"ArrayList \u7684\u9ed8\u8ba4\u5927\u5c0f\u662f\u591a\u5c11\uff1f"),(0,i.kt)("p",null,"\u5728\u4ee3\u7801\u4e2d\u53ef\u4ee5\u770b\u5230\u9ed8\u8ba4\u5927\u5c0f\u662f 10\u3002"),(0,i.kt)("h2",{id:"arraylist-\u7684\u6269\u5bb9\u673a\u5236\uff1f"},"ArrayList \u7684\u6269\u5bb9\u673a\u5236\uff1f"),(0,i.kt)("p",null,"\u5728\u6dfb\u52a0\u5143\u7d20\u65f6\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"ensureCapacityInternal()")," \u4fdd\u8bc1\u5bb9\u91cf\u8db3\u591f\uff0c\u5982\u679c\u5bb9\u91cf\u4e0d\u591f\uff0c\u4f1a\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"grow()")," \u65b9\u6cd5\u8fdb\u884c\u6269\u5bb9\u3002\u65b0\u7684\u5bb9\u91cf\u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"oldCapacity + (oldCapacity >> 1)"),"\uff0c\u8fd1\u4f3c\u662f 1.5 \u500d\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u5c3d\u91cf\u907f\u514d\u6269\u5bb9")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6269\u5bb9\u64cd\u4f5c\u4f1a\u5c06\u539f\u6570\u7ec4\u7684\u90e8\u5206\u5185\u5bb9\u5168\u90e8\u590d\u5236\u5230\u65b0\u6570\u7ec4\u4e2d\uff0c\u8fd9\u4e2a\u64cd\u4f5c\u7684\u4ee3\u4ef7\u5f88\u9ad8\uff0c\u5e94\u8be5\u5c3d\u91cf\u51cf\u5c11\u6269\u5bb9\u64cd\u4f5c\u7684\u6b21\u6570\u3002"))),(0,i.kt)("h2",{id:"arraylist-\u5982\u4f55\u5220\u9664\u5143\u7d20\uff1f"},"ArrayList \u5982\u4f55\u5220\u9664\u5143\u7d20\uff1f"),(0,i.kt)("p",null,"\u5728\u5220\u9664\u5143\u7d20\u65f6\u4f1a\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"System.arraycopy()")," \u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"index + 1")," \u540e\u9762\u7684\u5143\u7d20\u90fd\u590d\u5236\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," \u4f4d\u7f6e\u4e0a\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u662f ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"O"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mi",{parentName:"mrow"},"n"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,i.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\uff0c\u4ee3\u4ef7\u540c\u6837\u5f88\u5927\u3002"),(0,i.kt)("h2",{id:"arraylist-\u7684\u5e8f\u5217\u5316\uff1f"},"ArrayList \u7684\u5e8f\u5217\u5316\uff1f"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ArrayList")," \u57fa\u4e8e\u6570\u7ec4\u5b9e\u73b0\uff0c\u5e76\u4e14\u5177\u6709\u52a8\u6001\u6269\u5bb9\u7279\u6027\uff0c\u56e0\u6b64\u4fdd\u5b58\u5143\u7d20\u7684\u6570\u7ec4\u53ef\u80fd\u53ea\u6709\u5176\u4e2d\u4e00\u90e8\u5206\u662f\u771f\u6b63\u4f7f\u7528\u4e86\u7684\uff0c\u56e0\u6b64\u5c31\u6ca1\u5fc5\u8981\u5168\u90e8\u8fdb\u884c\u5e8f\u5217\u5316\u3002\u56e0\u6b64\u4fdd\u5b58\u5143\u7d20\u7684\u6570\u7ec4 ",(0,i.kt)("inlineCode",{parentName:"p"},"elementData")," \u4f7f\u7528\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"transient")," \u5173\u952e\u5b57\u8fdb\u884c\u4fee\u9970\uff0c\u8be5\u5173\u952e\u5b57\u8868\u793a\u6570\u7ec4\u9ed8\u8ba4\u4e0d\u4f1a\u88ab\u5e8f\u5217\u5316\u3002\u540c\u65f6 ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrayList")," \u901a\u8fc7\u91cd\u65b0\u5b9e\u73b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"readObject()")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"writeObject()")," \u6765\u63a7\u5236\u53ea\u5e8f\u5217\u5316\u6709\u5143\u7d20\u7684\u90a3\u90e8\u5206\u5185\u5bb9\u3002"),(0,i.kt)("h2",{id:"\u4ec0\u4e48\u662f-fail-fast-\u673a\u5236\uff1f"},"\u4ec0\u4e48\u662f fail-fast \u673a\u5236\uff1f"),(0,i.kt)("p",null,"fail-fast\uff08\u5feb\u901f\u5931\u8d25\uff09\u673a\u5236\uff0c\u662f\u96c6\u5408\u7c7b\u4e2d\u63d0\u4f9b\u7684\u4e00\u79cd\u9519\u8bef\u68c0\u6d4b\u673a\u5236\u3002\u5982\u679c\u5728\u8fed\u4ee3\u8fc7\u7a0b\u4e2d\uff0c\u8be5\u96c6\u5408\u5728\u7ed3\u6784\u4e0a\u53d1\u751f\u6539\u53d8\uff0c\u90a3\u4e48\u5c31\u6709\u53ef\u80fd\u4f1a\u53d1\u751f fail-fast\uff0c\u629b\u51fa ",(0,i.kt)("inlineCode",{parentName:"p"},"ConcurrentModificationException")," \u5f02\u5e38\u3002"),(0,i.kt)("p",null,"fail-fast \u673a\u5236\u5e76\u4e0d\u4fdd\u8bc1\u5728\u4e0d\u540c\u6b65\u7684\u4fee\u6539\u4e0b\u4e00\u5b9a\u4f1a\u629b\u51fa\u5f02\u5e38\uff0c\u5b83\u53ea\u662f\u5c3d\u6700\u5927\u52aa\u529b\u53bb\u629b\u51fa\uff0c\u6240\u4ee5\u8fd9\u79cd\u673a\u5236\u4e00\u822c\u4ec5\u7528\u4e8e\u68c0\u6d4b bug\u3002\u6700\u7b80\u5355\u7684\u89e6\u53d1\u65b9\u5f0f\u5c31\u662f\u5728\u904d\u5386\u8fc7\u7a0b\u4e2d\u6267\u884c\u5220\u9664\u5143\u7d20\u7684\u64cd\u4f5c\uff0c\u6bd4\u5982\u4e0b\u9762\u7684\u4ee3\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public static void main(String[] args) {\n    List<Integer> list = new ArrayList<>();\n    for (int i = 0; i < 10; i++) {\n        list.add(i);\n    }\n\n    for (int val : list) {\n        if (val == 2) {\n            list.remove(2);\n        }\n        System.out.println(val);\n    }\n}\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7ed3\u6784\u53d8\u5316")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7ed3\u6784\u53d1\u751f\u6539\u53d8\u662f\u6307\uff1a",(0,i.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u6216\u8005\u5220\u9664\u81f3\u5c11\u4e00\u4e2a\u5143\u7d20\uff0c\u6216\u8005\u8c03\u6574\u5217\u8868\u7684\u5927\u5c0f"),"\u3002\u6d89\u53ca\u8fd9\u4e9b\u64cd\u4f5c\u7684\u65f6\u5019\uff0c\u5185\u90e8\u7684\u8ba1\u6570\u5668 ",(0,i.kt)("inlineCode",{parentName:"p"},"modCount")," \u4f1a\u81ea\u589e\uff0c\u5982\u679c\u8fed\u4ee3\u8fc7\u7a0b\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"modCount")," \u53d1\u751f\u53d8\u5316\uff08\u4e0d\u76f8\u7b49\uff09\uff0c\u5c31\u4f1a\u629b\u51fa\u5f02\u5e38\u3002\u4e3a\u4e86\u907f\u514d\u629b\u51fa ",(0,i.kt)("inlineCode",{parentName:"p"},"ConcurrentModificationException")," \u5f02\u5e38\uff0c\u9700\u8981\u4f7f\u7528\u8fed\u4ee3\u5668\u63d0\u4f9b\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"remove()")," \u65b9\u6cd5\u6765\u5220\u9664\u5143\u7d20\u3002"))))}d.isMDXComponent=!0}}]);