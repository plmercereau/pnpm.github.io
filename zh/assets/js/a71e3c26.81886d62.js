"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7726],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(t),m=o,f=s["".concat(a,".").concat(m)]||s[m]||d[m]||p;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,i=new Array(p);i[0]=s;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<p;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},8989:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>a,metadata:()=>c,assets:()=>u,toc:()=>d,default:()=>m});var r=t(7813),o=t(7044),p=(t(9496),t(9613)),i=["components"],l={id:"prune",title:"pnpm prune"},a=void 0,c={unversionedId:"cli/prune",id:"version-7.x/cli/prune",title:"pnpm prune",description:"\u79fb\u9664\u4e0d\u9700\u8981\u7684 packages \u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-7.x/cli/prune.md",sourceDirName:"cli",slug:"/cli/prune",permalink:"/zh/7.x/cli/prune",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"7.x",frontMatter:{id:"prune",title:"pnpm prune"},sidebar:"version-7.x/docs",previous:{title:"pnpm rebuild",permalink:"/zh/7.x/cli/rebuild"},next:{title:"pnpm fetch",permalink:"/zh/7.x/cli/fetch"}},u={},d=[{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"--prod",id:"--prod",level:3},{value:"--no-optional",id:"--no-optional",level:3}],s={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u79fb\u9664\u4e0d\u9700\u8981\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"packages"),"\u3002"),(0,p.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,p.kt)("h3",{id:"--prod"},"--prod"),(0,p.kt)("p",null,"\u5220\u9664\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u4e2d\u6307\u5b9a\u7684\u5305\u3002"),(0,p.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,p.kt)("p",null,"\u5220\u9664\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u4e2d\u6307\u5b9a\u7684\u5305\u3002"),(0,p.kt)("p",null,":::\u8b66\u544a"),(0,p.kt)("p",null,"prune \u547d\u4ee4\u76ee\u524d\u4e0d\u652f\u6301\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"monorepo"),"\u4e2d\u9012\u5f52\u6267\u884c\u3002 \u53ef\u4ee5\u5220\u9664\u4e00\u4e2a\u53ea\u5b89\u88c5 production \u4f9d\u8d56\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"monorepo")," \u7684\u51e0\u4e2a",(0,p.kt)("inlineCode",{parentName:"p"}," node_modules")," \u6587\u4ef6\u5939\uff0c\u7136\u540e\u91cd\u65b0\u518d\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install --prod")," \u5b89\u88c5\u3002"),(0,p.kt)("p",null,":::"))}m.isMDXComponent=!0}}]);