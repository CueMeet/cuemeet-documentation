"use strict";(self.webpackChunkcuemeet_documentation=self.webpackChunkcuemeet_documentation||[]).push([[969],{15833:(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});s(96540);var n=s(34164),a=s(40797),i=s(56289),r=s(50539),l=s(56942),c=s(204),o=s(96351),d=s(21858),u=s(74848);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,u.jsx)(r.default,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,u.jsx)(r.default,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:s,onClick:n}=e;return(0,u.jsx)(r.default,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.default,{to:s,onClick:n,children:(0,u.jsx)(r.default,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:i}}=(0,a.default)(),{pluginId:r}=(0,l.useActivePlugin)({failfast:!0}),{savePreferredVersionName:d}=(0,o.g1)(r),{latestDocSuggestion:m,latestVersionSuggestion:x}=(0,l.useDocVersionSuggestions)(r),f=m??(v=x).docs.find((e=>e.id===v.mainDocId));var v;return(0,u.jsxs)("div",{className:(0,n.A)(t,c.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:s})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(b,{versionLabel:x.label,to:f.path,onClick:()=>d(x.name)})})]})}function f(e){let{className:t}=e;const s=(0,d.r)();return s.banner?(0,u.jsx)(x,{className:t,versionMetadata:s}):null}},55730:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});s(96540);var n=s(34164),a=s(50539),i=s(204),r=s(21858),l=s(74848);function c(e){let{className:t}=e;const s=(0,r.r)();return s.badge?(0,l.jsx)("span",{className:(0,n.A)(t,i.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(a.default,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}},57519:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});s(96540);var n=s(34164),a=s(204),i=s(93751),r=s(30214),l=s(56289),c=s(50539),o=s(29030),d=s(74848);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,o.default)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.default,{"aria-label":(0,c.translate)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function x(e){let{children:t,href:s,isLast:n}=e;const a="breadcrumbs__link";return n?(0,d.jsx)("span",{className:a,itemProp:"name",children:t}):s?(0,d.jsx)(l.default,{className:a,href:s,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:a,children:t})}function f(e){let{children:t,active:s,index:a,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,n.A)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function v(){const e=(0,i.OF)(),t=(0,r.Dt)();return e?(0,d.jsx)("nav",{className:(0,n.A)(a.G.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,c.translate)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,s)=>{const n=s===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(f,{active:n,index:s,addMicrodata:!!a,children:(0,d.jsx)(x,{href:a,isLast:n,children:t.label})},s)}))]})}):null}},79995:(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});s(96540);var n=s(59144),a=s(93751),i=s(29030),r=s(99563),l=s(80807),c=s(15833),o=s(55730),d=s(57519),u=s(9303);const m={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};var h=s(74848);function b(e){let{categoryGeneratedIndex:t}=e;return(0,h.jsx)(n.be,{title:t.title,description:t.description,keywords:t.keywords,image:(0,i.default)(t.image)})}function x(e){let{categoryGeneratedIndex:t}=e;const s=(0,a.$S)();return(0,h.jsxs)("div",{className:m.generatedIndexPage,children:[(0,h.jsx)(c.default,{}),(0,h.jsx)(d.default,{}),(0,h.jsx)(o.default,{}),(0,h.jsxs)("header",{children:[(0,h.jsx)(u.default,{as:"h1",className:m.title,children:t.title}),t.description&&(0,h.jsx)("p",{children:t.description})]}),(0,h.jsx)("article",{className:"margin-top--lg",children:(0,h.jsx)(r.A,{items:s.items,className:m.list})}),(0,h.jsx)("footer",{className:"margin-top--lg",children:(0,h.jsx)(l.A,{previous:t.navigation.previous,next:t.navigation.next})})]})}function f(e){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(b,{...e}),(0,h.jsx)(x,{...e})]})}},80807:(e,t,s)=>{s.d(t,{A:()=>c});s(96540);var n=s(50539),a=s(34164),i=s(56289),r=s(74848);function l(e){const{permalink:t,title:s,subLabel:n,isNext:l}=e;return(0,r.jsxs)(i.default,{className:(0,a.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[n&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:n}),(0,r.jsx)("div",{className:"pagination-nav__label",children:s})]})}function c(e){const{previous:t,next:s}=e;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,n.translate)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,r.jsx)(l,{...t,subLabel:(0,r.jsx)(n.default,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,r.jsx)(l,{...s,subLabel:(0,r.jsx)(n.default,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},99563:(e,t,s)=>{s.d(t,{A:()=>g});s(96540);var n=s(34164),a=s(93751),i=s(56289),r=s(81430),l=s(22887),c=s(50539),o=s(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=s(74848);function m(e){let{href:t,children:s}=e;return(0,u.jsx)(i.default,{href:t,className:(0,n.A)("card padding--lg",d.cardContainer),children:s})}function h(e){let{href:t,icon:s,title:a,description:i}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(o.default,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:a,children:[s," ",a]}),i&&(0,u.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:i,children:i})]})}function b(e){let{item:t}=e;const s=(0,a.Nr)(t),n=function(){const{selectMessage:e}=(0,r.W)();return t=>e(t,(0,c.translate)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return s?(0,u.jsx)(h,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function x(e){let{item:t}=e;const s=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,a.cC)(t.docId??void 0);return(0,u.jsx)(h,{href:t.href,icon:s,title:t.label,description:t.description??n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(x,{item:t});case"category":return(0,u.jsx)(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const s=(0,a.$S)();return(0,u.jsx)(g,{items:s.items,className:t})}function g(e){const{items:t,className:s}=e;if(!t)return(0,u.jsx)(v,{...e});const i=(0,a.d1)(t);return(0,u.jsx)("section",{className:(0,n.A)("row",s),children:i.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(f,{item:e})},t)))})}}}]);