"use strict";(self.webpackChunkcuemeet_documentation=self.webpackChunkcuemeet_documentation||[]).push([[61],{5783:(e,t,a)=>{a.d(t,{A:()=>p});a(96540);var s=a(34164),n=a(50539),l=a(204),i=a(56289);const d={iconEdit:"iconEdit_Z9Sw"};var r=a(74848);function c(e){let{className:t,...a}=e;return(0,r.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.A)(d.iconEdit,t),"aria-hidden":"true",...a,children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function o(e){let{editUrl:t}=e;return(0,r.jsxs)(i.default,{to:t,className:l.G.common.editThisPage,children:[(0,r.jsx)(c,{}),(0,r.jsx)(n.default,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var m=a(98569);function u(e){let{lastUpdatedAt:t}=e;const a=new Date(t),s=(0,m.i)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(a);return(0,r.jsx)(n.default,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,r.jsx)("b",{children:(0,r.jsx)("time",{dateTime:a.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function h(e){let{lastUpdatedBy:t}=e;return(0,r.jsx)(n.default,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,r.jsx)("b",{children:t})},children:" by {user}"})}function x(e){let{lastUpdatedAt:t,lastUpdatedBy:a}=e;return(0,r.jsxs)("span",{className:l.G.common.lastUpdated,children:[(0,r.jsx)(n.default,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,r.jsx)(u,{lastUpdatedAt:t}):"",byUser:a?(0,r.jsx)(h,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const j={lastUpdated:"lastUpdated_JAkA"};function p(e){let{className:t,editUrl:a,lastUpdatedAt:n,lastUpdatedBy:l}=e;return(0,r.jsxs)("div",{className:(0,s.A)("row",t),children:[(0,r.jsx)("div",{className:"col",children:a&&(0,r.jsx)(o,{editUrl:a})}),(0,r.jsx)("div",{className:(0,s.A)("col",j.lastUpdated),children:(n||l)&&(0,r.jsx)(x,{lastUpdatedAt:n,lastUpdatedBy:l})})]})}},28869:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});a(96540);var s=a(34164),n=a(27289),l=a(204),i=a(79709),d=a(74848);function r(e){let{className:t}=e;return(0,d.jsx)(i.A,{type:"caution",title:(0,d.jsx)(n.Yh,{}),className:(0,s.A)(t,l.G.common.draftBanner),children:(0,d.jsx)(n.TT,{})})}function c(e){let{className:t}=e;return(0,d.jsx)(i.A,{type:"caution",title:(0,d.jsx)(n.Rc,{}),className:(0,s.A)(t,l.G.common.unlistedBanner),children:(0,d.jsx)(n.Uh,{})})}function o(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.AE,{}),(0,d.jsx)(c,{...e})]})}function m(e){let{metadata:t}=e;const{unlisted:a,frontMatter:s}=t;return(0,d.jsxs)(d.Fragment,{children:[(a||s.unlisted)&&(0,d.jsx)(o,{}),s.draft&&(0,d.jsx)(r,{})]})}},39181:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});a(96540);var s=a(34164),n=a(59144),l=a(204),i=a(71418),d=a(57520),r=a(97959),c=a(28869),o=a(5783);const m={mdxPageWrapper:"mdxPageWrapper_j9I6"};var u=a(74848);function h(e){const{content:t}=e,{metadata:a,assets:h}=t,{title:x,editUrl:j,description:p,frontMatter:f,lastUpdatedBy:v,lastUpdatedAt:g}=a,{keywords:A,wrapperClassName:N,hide_table_of_contents:U}=f,b=h.image??f.image,y=!!(j||g||v);return(0,u.jsx)(n.e3,{className:(0,s.A)(N??l.G.wrapper.mdxPages,l.G.page.mdxPage),children:(0,u.jsxs)(i.A,{children:[(0,u.jsx)(n.be,{title:x,description:p,keywords:A,image:b}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,s.A)("row",m.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,s.A)("col",!U&&"col--8"),children:[(0,u.jsx)(c.default,{metadata:a}),(0,u.jsx)("article",{children:(0,u.jsx)(d.A,{children:(0,u.jsx)(t,{})})}),y&&(0,u.jsx)(o.A,{className:(0,s.A)("margin-top--sm",l.G.pages.pageFooterEditMetaRow),editUrl:j,lastUpdatedAt:g,lastUpdatedBy:v})]}),!U&&t.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(r.A,{toc:t.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level})})]})})]})})}},57520:(e,t,a)=>{a.d(t,{A:()=>N});var s=a(96540),n=a(28453),l=a(27143),i=a(43413),d=a(74848);function r(e){return(0,d.jsx)("code",{...e})}var c=a(56289);var o=a(56701);function m(e){const t=s.Children.toArray(e.children),a=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),n=(0,d.jsx)(d.Fragment,{children:t.filter((e=>e!==a))});return(0,d.jsx)(o.default,{...e,summary:a,children:n})}var u=a(9303);function h(e){return(0,d.jsx)(u.default,{...e})}var x=a(34164);const j="containsTaskList_mC6p";function p(e){if(void 0!==e)return(0,x.A)(e,e?.includes("contains-task-list")&&j)}var f=a(25246);const v="img_ev3q";var g=a(79709);const A={Head:l.A,details:m,Details:m,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,d.jsx)(r,{...e}):(0,d.jsx)(i.default,{...e})},a:function(e){return(0,d.jsx)(c.default,{...e})},pre:function(e){return(0,d.jsx)(d.Fragment,{children:e.children})},ul:function(e){return(0,d.jsx)("ul",{...e,className:p(e.className)})},li:function(e){return(0,f.A)().collectAnchor(e.id),(0,d.jsx)("li",{...e})},img:function(e){return(0,d.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,x.A)(t,v))});var t},h1:e=>(0,d.jsx)(h,{as:"h1",...e}),h2:e=>(0,d.jsx)(h,{as:"h2",...e}),h3:e=>(0,d.jsx)(h,{as:"h3",...e}),h4:e=>(0,d.jsx)(h,{as:"h4",...e}),h5:e=>(0,d.jsx)(h,{as:"h5",...e}),h6:e=>(0,d.jsx)(h,{as:"h6",...e}),admonition:g.A,mermaid:()=>null};function N(e){let{children:t}=e;return(0,d.jsx)(n.x,{components:A,children:t})}},87629:(e,t,a)=>{a.d(t,{A:()=>m});var s=a(96540),n=a(53115),l=a(20802),i=a(81161),d=a(56289),r=a(74848);function c(e){let{toc:t,className:a,linkClassName:s,isChild:n}=e;return t.length?(0,r.jsx)("ul",{className:n?void 0:a,children:t.map((e=>(0,r.jsxs)("li",{children:[(0,r.jsx)(d.default,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,r.jsx)(c,{isChild:!0,toc:e.children,className:a,linkClassName:s})]},e.id)))}):null}const o=s.memo(c);function m(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:d="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:m,maxHeadingLevel:u,...h}=e;const x=(0,n.p)(),j=m??x.tableOfContents.minHeadingLevel,p=u??x.tableOfContents.maxHeadingLevel,f=(0,l.h)({toc:t,minHeadingLevel:j,maxHeadingLevel:p}),v=(0,s.useMemo)((()=>{if(d&&c)return{linkClassName:d,linkActiveClassName:c,minHeadingLevel:j,maxHeadingLevel:p}}),[d,c,j,p]);return(0,i.i)(v),(0,r.jsx)(o,{toc:f,className:a,linkClassName:d,...h})}},97959:(e,t,a)=>{a.d(t,{A:()=>c});a(96540);var s=a(34164),n=a(87629);const l={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var i=a(74848);const d="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:t,...a}=e;return(0,i.jsx)("div",{className:(0,s.A)(l.tableOfContents,"thin-scrollbar",t),children:(0,i.jsx)(n.A,{...a,linkClassName:d,linkActiveClassName:r})})}}}]);