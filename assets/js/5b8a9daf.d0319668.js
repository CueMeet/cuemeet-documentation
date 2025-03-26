"use strict";(self.webpackChunkcuemeet_documentation=self.webpackChunkcuemeet_documentation||[]).push([[841],{53556:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>f,contentTitle:()=>k,default:()=>j,frontMatter:()=>u,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"bot/api-key-controller-list-api-keys","title":"List API keys","description":"List API keys","source":"@site/docs/bot/api-key-controller-list-api-keys.api.mdx","sourceDirName":"bot","slug":"/bot/api-key-controller-list-api-keys","permalink":"/docs/bot/api-key-controller-list-api-keys","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"api-key-controller-list-api-keys","title":"List API keys","description":"List API keys","sidebar_label":"List API keys","hide_title":true,"hide_table_of_contents":true,"api":"eJylVU1v4zgM/SsCT7uA0vQzs+tbpp1DMANsMdNiDkWwYGw61qwtuRLd1gj83weU4jRtii52J4fYoqVH8vGR2oBrySMbZxcFZDBvzWfqL51l7+qa/N+1CZyMATS06LEhJh8gu1tq8HTfUeCPrugh28Sl8VRAxr4jDbmzTJblE7ZtbfLoaPojOCu2kFfUoLxx3xJk4FY/KGfx4yUsNhTkaxfIS3S7fYG9sWvQUDrfIEMGXWcK0FBQyL1pxQtksLhSrlRckRIE9Vi5QGp+vVD/UB8UOyXJwTDovcDvRm9LDWy4Fndfnjm4YgfDkI6E1tmQIjw9PpbHS/dyTAIYPcJ/JwS9xx40GKYm/DtR5n+QdGvNfbejRZmCLJvSkIdBg8WG3oJ8CXE1rh5IyQlVOh9p34IKUu4JmYo5vxthgUwTNg0d+BjjizjGWSW7AmPTCjo9tcZT+GX0iPMGvgnzXNLbg185VxPaA6jvFXFFL/JXJihM5wcNNQa+Db9AxfeK7Av4RwxKUEXmRdTzqNykWhHigqmJyh00nL+l1o9YqG07JwhcS5NvIaQdXlH2/qRoiCsnE6V1IQoVuYIMptia6cOJPCbSE9PYghoC+Yc0VTbQ+Roy2LTesctdPWTT6SZ9v/X1cEDHZRfYNSrtULdfv4CGB/QGV3XqihFI3sl2jWRVMbeg4yOk3ErsauE9mV47ualIjTgyOboQa7kLK/E5YmBrjugJm7amo9w1B2ifLJNXvev8XtjKebW4VlgUnkJQvz0arlzHO7e/S/mW4jPvvOH+mwyLlCGmGu3NjWTQYMRdRViQh7Gd4WmypT8WWobP1+c5/inFvT934azEPy7K2fnk4sPJh8n5xex0sjor88lp/ufsrJzNsMRZbBNbuhjFVn6XHeXoCxHqmy0nc6JBi2tj12rlOCQLEYvBU+58YexayiHqSAdPjo63kxRzaSHJQUTWYJyh2xznrVGfqVfPAo3TXm3tBxXeUcf0xNO2RmMloy6VNqn3TniVWE5Aw6hg0BA1vNRQidSzO9hsVhhIxDqI+b4j36f7ctSlrAY9FkZEL9XI4DLdD5MbiUW2110q56u7YtDjiXmeU8vv7l3udeP1X99uQMNqe2E3rpAzHh9Bx/8MQIOLnERlRdsGarTrDteyN2HK7yeTX9Jj","sidebar_class_name":"post api-method","info_path":"docs/openapi/cuecard-api","custom_edit_url":null,"displayed_sidebar":"pageSidebar"},"sidebar":"pageSidebar","previous":{"title":"Create API key","permalink":"/docs/bot/api-key-controller-create-api-key"},"next":{"title":"Revoke API key","permalink":"/docs/bot/api-key-controller-revoke-api-key"}}');var o=i(74848),a=i(28453),r=i(33617),n=i.n(r),d=i(17543),p=i.n(d),l=i(86013),c=i.n(l),y=i(63723),m=i.n(y),h=(i(18766),i(79329),i(9303));const u={id:"api-key-controller-list-api-keys",title:"List API keys",description:"List API keys",sidebar_label:"List API keys",hide_title:!0,hide_table_of_contents:!0,api:"eJylVU1v4zgM/SsCT7uA0vQzs+tbpp1DMANsMdNiDkWwYGw61qwtuRLd1gj83weU4jRtii52J4fYoqVH8vGR2oBrySMbZxcFZDBvzWfqL51l7+qa/N+1CZyMATS06LEhJh8gu1tq8HTfUeCPrugh28Sl8VRAxr4jDbmzTJblE7ZtbfLoaPojOCu2kFfUoLxx3xJk4FY/KGfx4yUsNhTkaxfIS3S7fYG9sWvQUDrfIEMGXWcK0FBQyL1pxQtksLhSrlRckRIE9Vi5QGp+vVD/UB8UOyXJwTDovcDvRm9LDWy4Fndfnjm4YgfDkI6E1tmQIjw9PpbHS/dyTAIYPcJ/JwS9xx40GKYm/DtR5n+QdGvNfbejRZmCLJvSkIdBg8WG3oJ8CXE1rh5IyQlVOh9p34IKUu4JmYo5vxthgUwTNg0d+BjjizjGWSW7AmPTCjo9tcZT+GX0iPMGvgnzXNLbg185VxPaA6jvFXFFL/JXJihM5wcNNQa+Db9AxfeK7Av4RwxKUEXmRdTzqNykWhHigqmJyh00nL+l1o9YqG07JwhcS5NvIaQdXlH2/qRoiCsnE6V1IQoVuYIMptia6cOJPCbSE9PYghoC+Yc0VTbQ+Roy2LTesctdPWTT6SZ9v/X1cEDHZRfYNSrtULdfv4CGB/QGV3XqihFI3sl2jWRVMbeg4yOk3ErsauE9mV47ualIjTgyOboQa7kLK/E5YmBrjugJm7amo9w1B2ifLJNXvev8XtjKebW4VlgUnkJQvz0arlzHO7e/S/mW4jPvvOH+mwyLlCGmGu3NjWTQYMRdRViQh7Gd4WmypT8WWobP1+c5/inFvT934azEPy7K2fnk4sPJh8n5xex0sjor88lp/ufsrJzNsMRZbBNbuhjFVn6XHeXoCxHqmy0nc6JBi2tj12rlOCQLEYvBU+58YexayiHqSAdPjo63kxRzaSHJQUTWYJyh2xznrVGfqVfPAo3TXm3tBxXeUcf0xNO2RmMloy6VNqn3TniVWE5Aw6hg0BA1vNRQidSzO9hsVhhIxDqI+b4j36f7ctSlrAY9FkZEL9XI4DLdD5MbiUW2110q56u7YtDjiXmeU8vv7l3udeP1X99uQMNqe2E3rpAzHh9Bx/8MQIOLnERlRdsGarTrDteyN2HK7yeTX9Jj",sidebar_class_name:"post api-method",info_path:"docs/openapi/cuecard-api",custom_edit_url:null,displayed_sidebar:"pageSidebar"},k=void 0,f={},b=[];function v(e){const t={p:"p",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"List API keys"}),"\n",(0,o.jsx)(n(),{method:"post",path:"/api/v1/api-keys/list",context:"endpoint"}),"\n",(0,o.jsx)(t.p,{children:"List API keys"}),"\n",(0,o.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,o.jsx)(p(),{parameters:[]}),"\n",(0,o.jsx)(c(),{title:"Body",body:{required:!0,content:{"application/json":{schema:{type:"object",properties:{userId:{type:"string",format:"uuid",description:"ID of the user whose API keys to list"}},required:["userId"],title:"ListApiKeysDto"}}}}}),"\n",(0,o.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"List of API keys",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{id:{type:"string",format:"uuid",description:"Unique API key identifier"},name:{type:"string",description:"Descriptive name for the API key"},createdAt:{type:"string",format:"date-time",description:"API key creation timestamp"},expiresAt:{type:"string",format:"date-time",description:"API key expiration timestamp"},isActive:{type:"boolean",description:"Whether the API key is active"},lastUsedAt:{type:"string",format:"date-time",description:"When the API key was last used"}},title:"ApiKeyListItem"}}}}},400:{description:"Bad request"}}})]})}function j(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(v,{...e})}):v(e)}}}]);