"use strict";(self.webpackChunkcuemeet_documentation=self.webpackChunkcuemeet_documentation||[]).push([[496],{28453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>c});var r=n(96540);const i={},o=r.createContext(i);function s(t){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),r.createElement(o.Provider,{value:e},t.children)}},33801:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"bot/app","title":"App","description":"App","source":"@site/docs/bot/app.tag.mdx","sourceDirName":"bot","slug":"/bot/app","permalink":"/docs/bot/app","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"app","title":"App","description":"App","custom_edit_url":null},"sidebar":"openApiSidebar","previous":{"title":"Authorization","permalink":"/docs/bot/api-info"},"next":{"title":"AppController_getHealth","permalink":"/docs/bot/app-controller-get-health"}}');var i=n(74848),o=n(28453),s=n(99563),c=n(23323);const a={id:"app",title:"App",description:"App",custom_edit_url:null},l=void 0,d={},p=[];function u(t){const e={p:"p",...(0,o.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"Application endpoints"}),"\n","\n",(0,i.jsx)(s.A,{items:(0,c.useCurrentSidebarCategory)().items})]})}function m(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(u,{...t})}):u(t)}},99563:(t,e,n)=>{n.d(e,{A:()=>j});n(96540);var r=n(34164),i=n(93751),o=n(56289),s=n(81430),c=n(22887),a=n(50539),l=n(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var p=n(74848);function u(t){let{href:e,children:n}=t;return(0,p.jsx)(o.default,{href:e,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function m(t){let{href:e,icon:n,title:i,description:o}=t;return(0,p.jsxs)(u,{href:e,children:[(0,p.jsxs)(l.default,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),o&&(0,p.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:o,children:o})]})}function f(t){let{item:e}=t;const n=(0,i.Nr)(e),r=function(){const{selectMessage:t}=(0,s.W)();return e=>t(e,(0,a.translate)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))}();return n?(0,p.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??r(e.items.length)}):null}function h(t){let{item:e}=t;const n=(0,c.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(e.docId??void 0);return(0,p.jsx)(m,{href:e.href,icon:n,title:e.label,description:e.description??r?.description})}function x(t){let{item:e}=t;switch(e.type){case"link":return(0,p.jsx)(h,{item:e});case"category":return(0,p.jsx)(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function g(t){let{className:e}=t;const n=(0,i.$S)();return(0,p.jsx)(j,{items:n.items,className:e})}function j(t){const{items:e,className:n}=t;if(!e)return(0,p.jsx)(g,{...t});const o=(0,i.d1)(e);return(0,p.jsx)("section",{className:(0,r.A)("row",n),children:o.map(((t,e)=>(0,p.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,p.jsx)(x,{item:t})},e)))})}}}]);