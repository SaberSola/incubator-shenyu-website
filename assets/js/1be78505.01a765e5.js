"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[9514,5960,6058],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,h=m["".concat(c,".").concat(p)]||m[p]||d[p]||i;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8704:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var a=n(7294),r=n(3905),i=n(2263),l=n(6291),o=n(4926),c=n(6010),s=n(3018),u=n(3783),d=n(7898),m=n(5537),p=n(7462),h=function(e){return a.createElement("svg",(0,p.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},f=n(4973),b=n(3366),v=n(6742),E=n(3919),g=n(8617),Z="menuLinkText_1J2g",y=["items"],C=["item"],k=["item","onItemClick","activePath"],_=["item","onItemClick","activePath"],N=function e(t,n){return"link"===t.type?(0,s.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},w=(0,a.memo)((function(e){var t=e.items,n=(0,b.Z)(e,y);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(T,(0,p.Z)({key:t,item:e},n))})))}));function T(e){var t=e.item,n=(0,b.Z)(e,C);return"category"===t.type?0===t.items.length?null:a.createElement(S,(0,p.Z)({item:t},n)):a.createElement(O,(0,p.Z)({item:t},n))}function S(e){var t,n=e.item,r=e.onItemClick,i=e.activePath,l=(0,b.Z)(e,k),o=n.items,u=n.label,d=n.collapsible,m=N(n,i),h=(0,s.uR)({initialState:function(){return!!d&&(!m&&n.collapsed)}}),f=h.collapsed,v=h.setCollapsed,E=h.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,i=(0,s.D9)(t);(0,a.useEffect)((function(){t&&!i&&n&&r(!1)}),[t,i,n])}({isActive:m,collapsed:f,setCollapsed:v}),a.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":f})},a.createElement("a",(0,p.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":d,"menu__link--active":d&&m},t[Z]=!d,t)),onClick:d?function(e){e.preventDefault(),E()}:void 0,href:d?"#":void 0},l),u),a.createElement(s.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:f},a.createElement(w,{items:o,tabIndex:f?-1:0,onItemClick:r,activePath:i})))}function O(e){var t=e.item,n=e.onItemClick,r=e.activePath,i=(0,b.Z)(e,_),l=t.href,o=t.label,s=N(t,r);return a.createElement("li",{className:"menu__list-item",key:o},a.createElement(v.Z,(0,p.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":s}),to:l},(0,E.Z)(l)&&{isNavLink:!0,exact:!0,onClick:n},i),(0,E.Z)(l)?o:a.createElement("span",null,o,a.createElement(g.Z,null))))}var P="sidebar_15mo",I="sidebarWithHideableNavbar_267A",x="sidebarHidden_2kNb",M="sidebarLogo_3h0W",j="menu_Bmed",A="menuWithAnnouncementBar_2WvA",L="collapseSidebarButton_1CGd",D="collapseSidebarButtonIcon_3E-R";function B(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,f.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",L),onClick:t},a.createElement(h,{className:D}))}function H(e){var t,n,r=e.path,i=e.sidebar,l=e.onCollapse,o=e.isHidden,u=function(){var e=(0,s.nT)().isClosed,t=(0,a.useState)(!e),n=t[0],r=t[1];return(0,d.Z)((function(t){var n=t.scrollY;e||r(0===n)})),n}(),p=(0,s.LU)(),h=p.navbar.hideOnScroll,f=p.hideableSidebar,b=(0,s.nT)().isClosed;return a.createElement("div",{className:(0,c.Z)(P,(t={},t[I]=h,t[x]=o,t))},h&&a.createElement(m.Z,{tabIndex:-1,className:M}),a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",j,(n={},n[A]=!b&&u,n))},a.createElement("ul",{className:"menu__list"},a.createElement(w,{items:i,activePath:r}))),f&&a.createElement(B,{onClick:l}))}var F=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:"menu__list"},a.createElement(w,{items:n,activePath:r,onItemClick:function(){return t()}}))};function R(e){return a.createElement(s.Cv,{component:F,props:e})}var W=a.memo(H),V=a.memo(R);function z(e){var t=(0,u.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(W,e),r&&a.createElement(V,e))}var Y=n(2238),J=n(4608),U="backToTopButton_35hR",K="backToTopButtonShow_18ls";function X(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var q=function(){var e,t=X(),n=t.smoothScrollTop,r=t.cancelScrollToTop,i=(0,a.useState)(!1),l=i[0],o=i[1];return(0,d.Z)((function(e,t){var n=e.scrollY;if(t){var a=n<t.scrollY;if(a||r(),n<300)o(!1);else if(a){var i=document.documentElement.scrollHeight;n+window.innerHeight<i&&o(!0)}else o(!1)}}),[]),a.createElement("button",{className:(0,c.Z)("clean-btn",U,(e={},e[K]=l,e)),type:"button",title:"Scroll to top",onClick:function(){return n()}},a.createElement("svg",{viewBox:"0 0 24 24",width:"28"},a.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},G=n(5977),Q={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function $(e){var t,n,l,u=e.currentDocRoute,d=e.versionMetadata,m=e.children,p=(0,i.Z)().isClient,b=d.pluginId,v=d.version,E=u.sidebar,g=E?d.docsSidebars[E]:void 0,Z=(0,a.useState)(!1),y=Z[0],C=Z[1],k=(0,a.useState)(!1),_=k[0],N=k[1],w=(0,a.useCallback)((function(){_&&N(!1),C(!y)}),[_]);return a.createElement(o.Z,{key:p,wrapperClassName:s.kM.wrapper.docPages,pageClassName:s.kM.page.docPage,searchMetadatas:{version:v,tag:(0,s.os)(b,v)}},a.createElement("div",{className:Q.docPage},a.createElement(q,null),g&&a.createElement("aside",{className:(0,c.Z)(Q.docSidebarContainer,(t={},t[Q.docSidebarContainerHidden]=y,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q.docSidebarContainer)&&y&&N(!0)}},a.createElement(z,{key:E,sidebar:g,path:u.path,onCollapse:w,isHidden:_}),_&&a.createElement("div",{className:Q.collapsedDocSidebar,title:(0,f.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:w,onClick:w},a.createElement(h,{className:Q.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(Q.docMainContainer,(n={},n[Q.docMainContainerEnhanced]=y||!g,n))},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",Q.docItemWrapper,(l={},l[Q.docItemWrapperEnhanced]=y,l))},a.createElement(r.Zo,{components:Y.Z},m)))))}var ee=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,i=t.find((function(e){return(0,G.LX)(r.pathname,e)}));return i?a.createElement($,{currentDocRoute:i,versionMetadata:n},(0,l.Z)(t,{versionMetadata:n})):a.createElement(J.default,e)}},6159:function(e,t,n){n.d(t,{N:function(){return m},Z:function(){return p}});var a=n(3366),r=n(7462),i=n(7294),l=n(6010),o=n(4973),c=n(3018),s="enhancedAnchor_2LWZ",u="h1Heading_27L5",d=["id"],m=function(e){var t=Object.assign({},e);return i.createElement("header",null,i.createElement("h1",(0,r.Z)({},t,{id:void 0,className:u}),t.children))},p=function(e){return"h1"===e?m:(t=e,function(e){var n,r=e.id,u=(0,a.Z)(e,d),m=(0,c.LU)().navbar.hideOnScroll;return r?i.createElement(t,u,i.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor",(n={},n[s]=!m,n)),id:r}),u.children,i.createElement("a",{className:"hash-link",href:"#"+r,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):i.createElement(t,u)});var t}},2238:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),i=n(6742),l=n(6213),o=n(6159),c=n(6010),s=n(3018),u="details_1VDD";function d(e){var t=Object.assign({},e);return r.createElement(s.PO,(0,a.Z)({},t,{className:(0,c.Z)("alert alert--info",u,t.className)}))}var m={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(l.Z,e):r.createElement("code",e)},a:function(e){return r.createElement(i.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:r.createElement(l.Z,(0,r.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),i=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(d,(0,a.Z)({},e,{summary:n}),i)},h1:(0,o.Z)("h1"),h2:(0,o.Z)("h2"),h3:(0,o.Z)("h3"),h4:(0,o.Z)("h4"),h5:(0,o.Z)("h5"),h6:(0,o.Z)("h6")}},4608:function(e,t,n){n.r(t);var a=n(7294),r=n(4926),i=n(4973);t.default=function(){return a.createElement(r.Z,{title:(0,i.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(i.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(i.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(i.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},2086:function(e,t,n){var a=n(7462),r=n(3366),i=n(7294),l=["width","height"];t.Z=function(e){e.width,e.height;var t=(0,r.Z)(e,l);return i.createElement("svg",(0,a.Z)({t:"1631348384596",class:"icon",viewBox:"0 0 1024 1024",version:"1.1"},t,{"p-id":"557",width:"20",height:"20"}),i.createElement("path",{d:"M547.797333 638.208l-104.405333-103.168 1.237333-1.28a720.170667 720.170667 0 0 0 152.490667-268.373333h120.448V183.082667h-287.744V100.906667H347.605333v82.218666H59.818667V265.386667h459.178666a648.234667 648.234667 0 0 1-130.304 219.946666 643.242667 643.242667 0 0 1-94.976-137.728H211.541333a722.048 722.048 0 0 0 122.453334 187.434667l-209.194667 206.378667 58.368 58.368 205.525333-205.525334 127.872 127.829334 31.232-83.84m231.424-208.426667h-82.218666l-184.96 493.312h82.218666l46.037334-123.306667h195.242666l46.464 123.306667h82.218667l-185.002667-493.312m-107.690666 287.744l66.56-178.005333 66.602666 178.005333z",fill:"currentColor","p-id":"558"}))}}}]);