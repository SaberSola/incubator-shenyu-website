"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[5830],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(n),k=a,d=c["".concat(o,".").concat(k)]||c[k]||m[k]||l;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4011:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],u={title:"\u7248\u672c\u53d1\u5e03",sidebar_position:12,keywords:["release-notes"],description:"release-notes"},o=void 0,p={unversionedId:"release-notes",id:"release-notes",isDocsHomePage:!1,title:"\u7248\u672c\u53d1\u5e03",description:"release-notes",source:"@site/i18n/zh/docusaurus-plugin-content-docs-community/current/release-notes.md",sourceDirName:".",slug:"/release-notes",permalink:"/zh/community/release-notes",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/release-notes.md",version:"current",lastUpdatedBy:"Sinsy",lastUpdatedAt:1631432149,formattedLastUpdatedAt:"2021/9/12",sidebarPosition:12,frontMatter:{title:"\u7248\u672c\u53d1\u5e03",sidebar_position:12,keywords:["release-notes"],description:"release-notes"},sidebar:"community",previous:{title:"\u7528\u6237\u767b\u8bb0",permalink:"/zh/community/user-registration"}},s=[{value:"2.4.0",id:"240",children:[]},{value:"2.3.0",id:"230",children:[]},{value:"2.2.0",id:"220",children:[]}],m={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"240"},"2.4.0"),(0,l.kt)("h5",{id:"\u65b0\u529f\u80fd"},"\u65b0\u529f\u80fd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u8bfb\u53d6 resource/directory \u8def\u5f84\u5e95\u4e0b\u7684 init_script \u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6309\u7c7b\u522b\u663e\u793a\u63d2\u4ef6\u83dc\u5355\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 admin \u6a21\u5757\u6267\u884c\u4e0d\u540c\u8def\u5f84 sql \u811a\u672c\u3002"),(0,l.kt)("li",{parentName:"ul"},"ipUtils \u6dfb\u52a0\u53c2\u6570\u9009\u62e9\u7f51\u7edc ip \u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 parameter-mapping \u6620\u5c04\u63d2\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 Consul \u4f5c\u4e3a shenyu-register-center \u3002"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 Etcd \u4f5c\u4e3a shenyu-sync-data-center \u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 sentinel \u81ea\u5b9a\u4e49\u56de\u9000\u5904\u7406\u7a0b\u5e8f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 response \u63d2\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 JWT \u63d2\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 Request \u63d2\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 Motan \u63d2\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 Logging \u63d2\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 Modify-response \u63d2\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 Oauth2 \u63d2\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u83dc\u5355\u8d44\u6e90\u6743\u9650\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u6570\u636e\u6743\u9650\u3002")),(0,l.kt)("h5",{id:"api-\u66f4\u6539"},"API \u66f4\u6539"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c06\u9879\u76ee\u540d\u79f0\u4ece soul \u66f4\u6539\u4e3a shenyu \u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u7ec4 id \u4ece org.dromara \u66f4\u6539\u4e3a org.apache.shenyu \u3002")),(0,l.kt)("h5",{id:"\u589e\u5f3a"},"\u589e\u5f3a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"H2 \u652f\u6301\u5728 Mysql \u6a21\u578b\u4e2d\u4f7f\u7528 insert ingore \u3002"),(0,l.kt)("li",{parentName:"ul"},"\u589e\u5f3a Dubbo \u63d2\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"GRPC \u63d2\u4ef6\u4f18\u5316\u3002")),(0,l.kt)("h5",{id:"\u91cd\u6784"},"\u91cd\u6784"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u91cd\u6784 Dubbo 2.7.3 \u4ee5\u4e0b\u4e0d\u652f\u6301\u5f02\u6b65\u8c03\u7528\u7684\u4ee3\u7801\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7528 Predicate \u66ff\u6362\u8fd0\u7b97\u7b26\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7ec6\u5316\u5224\u65ad conditions \u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 SPI \u91cd\u6784 PredicateJudge \u6a21\u5757\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u91cd\u6784\u5ba2\u6237\u7aef\u6ce8\u518c\u4ee3\u7801\u3002")),(0,l.kt)("h5",{id:"\u9519\u8bef\u4fee\u590d"},"\u9519\u8bef\u4fee\u590d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4fee\u590d JwtUtil.getUserId \u65b9\u6cd5\u9519\u8bef\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u590d shenyu-spring-boot-starter \u9519\u8bef\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7f16\u7801\u540e\u7684 urlPath \u5c06\u5728 WebClientPlugin \u4e2d\u91cd\u65b0\u7f16\u7801\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u66ff\u6362\u98ce\u9669\u5bc6\u7801\u7b97\u6cd5 \u201cAES/ECB/NoPadding\u201d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u590d ReadTimeoutHandler \u5728 PooledConnectionProvider \u4e2d\u4f1a\u610f\u5916\u5bfc\u81f4 ReadTimeoutException \u7684\u9519\u8bef\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u590d 2.4.8 \u7248\u672c\u7684 spring boot \u542f\u52a8 shenyu \u65f6\u4f1a\u629b\u51fa ClassNotFoundException \u9519\u8bef\u3002")),(0,l.kt)("h3",{id:"230"},"2.3.0"),(0,l.kt)("h5",{id:"soul-admin"},"soul-admin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Sign \u63d2\u4ef6\u65b0\u589e\u662f\u5426\u5f00\u542fAPP \u8ba4\u8bc1\u7684\u5b57\u6bb5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5316Divide \u63d2\u4ef6\uff0c\u4f7f\u7528\u901a\u7528\u7684\u63d2\u4ef6\u6a21\u677f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u5904\u7406\u7ba1\u7406\u4e2d\u6dfb\u52a0\u9ed8\u8ba4\u503c\u548c\u89c4\u5219\u68c0\u67e5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e\u8d44\u6e90\u7ba1\u7406\u6a21\u5757\uff0c\u4f7f\u7528\u6237\u53ef\u4ee5\u6dfb\u52a0\u63d2\u4ef6\uff0c\u8c03\u6574\u83dc\u5355\u548c\u6309\u94ae\u8d44\u6e90\u7b49\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e\u83dc\u5355\u548c\u6570\u636e\u7684\u6743\u9650\u63a7\u5236\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e\u652f\u6301H2\u6765\u5b58\u50a8\u6570\u636e\u3002")),(0,l.kt)("h5",{id:"soul-bootstrap"},"soul-bootstrap"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e Tars \u63d2\u4ef6\uff0c\u652f\u6301 tars RPC \u534f\u8bae\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e Sofa \u63d2\u4ef6 \uff0c\u652f\u6301 sofa RPC \u534f\u8bae\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e GRPC \u63d2\u4ef6\uff0c\u5168\u9762\u652f\u6301 GRPC \u534f\u8bae\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e sentinel \u63d2\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e Resilience4j \u63d2\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e context-path \u63d2\u4ef6\uff0c\u652f\u6301\u81ea\u5b9a\u4e49\u7684 context path"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e Dubbo \u63d2\u4ef6\u7684\u8868\u5355\u63d0\u4ea4"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e\u63d2\u4ef6\u7ba1\u7406\u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589edist\u5305\u6a21\u5757"),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u6d4b\u8bd5\u7528\u4f8b\uff0c\u8986\u76d6\u7387\u8fbe\u5230\u767e\u5206\u4e4b\u4e03\u5341\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e zookeeper \u4f5c\u4e3a\u6ce8\u518c\u4e2d\u5fc3\u7684\u65b9\u5f0f\u63a5\u5165soul\u7f51\u5173\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e Nacos \u4f5c\u4e3a\u6ce8\u518c\u4e2d\u5fc3\u7684\u65b9\u5f0f\u63a5\u5165soul\u7f51\u5173\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e Consul \u4f5c\u4e3a\u6ce8\u518c\u4e2d\u5fc3\u7684\u65b9\u5f0f\u63a5\u5165soul\u7f51\u5173\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e Etcd \u4f5c\u4e3a\u6ce8\u518c\u4e2d\u5fc3\u7684\u65b9\u5f0f\u63a5\u5165soul\u7f51\u5173\u3002")),(0,l.kt)("h3",{id:"220"},"2.2.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u7684\u63d2\u4ef6\u5316\u67b6\u6784\u8bbe\u8ba1\uff0c\u63d2\u4ef6\u70ed\u63d2\u62d4\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u6574\u652f\u6301dubbo\u6240\u6709\u7248\u672c\uff0calibaba-dubbo \uff0capache-dubbo\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301dubbo\u6cdb\u5316\u8c03\u7528\uff0c\u591a\u53c2\u6570\uff0c\u590d\u6742\u53c2\u6570\u63a5\u53e3\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u589e\u5f3amonitor\u63d2\u4ef6\uff0c\u79fb\u9664influxdb\u652f\u6301\uff0c\u65b0\u589e\u5185\u5b58\uff0cCPU\uff0cQPS\uff0cTPS\uff0c\u54cd\u5e94\u8fdf\u5ef6\u7b49metrics\uff0c\u652f\u6301\u63a5\u5165Prometheus\u3002"),(0,l.kt)("li",{parentName:"ul"},"springCloud\u63d2\u4ef6\u652f\u6301eureka\u4e0enacos\u4e8c\u79cd\u6ce8\u518c\u4e2d\u5fc3\u3002"),(0,l.kt)("li",{parentName:"ul"},"waf\u63d2\u4ef6\u589e\u5f3a,\u652f\u6301\u9ed1\u767d\u540d\u5355\uff0c\u4ee5\u53ca\u6df7\u5408\u6a21\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u62bd\u79bbHystrix\u7194\u65ad\u529f\u80fd\uff0c\u72ec\u7acb\u6210\u63d2\u4ef6\u652f\u6301\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u62a4Zookeeper\u6570\u636e\u540c\u6b65\u65b9\u5f0fbug\uff0c\u65b0\u589enacos\u540c\u6b65\u6570\u636e\u65b9\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u591a\u79cdsoul-client\u652f\u6301\uff0c\u63d0\u4f9b\u4f20\u7edfspring\uff0c\u4ee5\u53caspringboot\u7b49\u65b9\u5f0f\u63a5\u5165\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5316 soul-admin\u540e\u53f0\u63a7\u5236\u754c\u9762\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5bug\u4fee\u62a4\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u62a4\u5927\u6587\u4ef6\u4e0a\u4f20\u65f6\u5019\u7684bug\u3002")))}c.isMDXComponent=!0}}]);