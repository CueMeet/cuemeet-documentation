"use strict";(self.webpackChunkcuemeet_documentation=self.webpackChunkcuemeet_documentation||[]).push([[692],{8732:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>Y,frontMatter:()=>b,metadata:()=>o,toc:()=>v});const o=JSON.parse('{"id":"bot/api-key-controller-revoke-api-key","title":"Revoke API key","description":"Revoke API key","source":"@site/docs/bot/api-key-controller-revoke-api-key.api.mdx","sourceDirName":"bot","slug":"/bot/api-key-controller-revoke-api-key","permalink":"/cuemeet-documentation/docs/bot/api-key-controller-revoke-api-key","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"api-key-controller-revoke-api-key","title":"Revoke API key","description":"Revoke API key","sidebar_label":"Revoke API key","hide_title":true,"hide_table_of_contents":true,"api":"eJyFVE1P3DAQ/SvWnEAy7FJxyg3RPazggCic0KryxrMbg2Mbe7wlivLfq4kToGyr5mJnPB9v5j27Bx8wKjLerTVUcBXMDXbX3lH01mL8GfHgX7CYQUJQUbVIGBNUTz041SJUYDRIiPiaTUQNFcWMEoyDCoKiBiSkusFWQdUDdYEjEkXj9iBh52OrCCrI2WgYhg0nSsG7hIn9vy2XvGhMdTSBcTLKu7V4wU4UcFqkXNeY0i5byyBr7wgdcZwKwZp67G/xnDi4Pwbjt89YE3cXeRpkSukp6yfHrfcWlQMJ+KbaYLH0OoyfhMvl5b+xOk9i57PjJiWQ2vMEp3nDRn6N+g8PLVLjmTCNFglHZqiBChYqmMXhgpezF+zSojd6YAYwHmbWcrRQQR+iJ197O1SLRV/OH6Nl5z+xXOdEvhXFQzze34KEg4pGbW0Z1JyI9+hyy401RAHkuKTS3k5ly0QX09ciDw2KOY8gL3JCGGbYj9GWwc45VDDnEwXntW+Psq0cYRSdz/ETbOGjWN8JpXXElMTJL0ONz/Re9hSGUX8J6xwNdT9YJ6VDVeb+oQQ1EzGqvEGlMYKc78Pb2TT+kWvjdn4MNcSKgeuMtYpaXN2tj4CzWnY+ilY5tTduL7aeUrEgEhsi1j5q4/Y8Q6a0BF6cLyflq5qVz4WDT9SqUfMTsKtgxA124kNY0x0S08lXQO8NE77RIlhlHNOSCyFFc088DQZzARJm3YGEymhmvvGJ2KnvtyohK2xg82vG2EH1tPkQ0yhObRLvNVQ7ZRMe4Xm/3HByP704pwLk33HObLlu1KzN/AcSmJrx2Ro2g5zp4+rl4KquMdCnkKNnhHXyfge/r25XDysYht/0QtEj","sidebar_class_name":"delete api-method","info_path":"/cuemeet-documentation/docs/openapi/cuecard-api","custom_edit_url":null,"displayed_sidebar":"pageSidebar"},"sidebar":"pageSidebar","previous":{"title":"List API keys","permalink":"/cuemeet-documentation/docs/bot/api-key-controller-list-api-keys"},"next":{"title":"Create BOT","permalink":"/cuemeet-documentation/docs/bot/bot-controller-create-bot"}}');var n=i(74848),a=i(28453),r=i(33617),c=i.n(r),l=i(17543),s=i.n(l),d=i(86013),p=i.n(d),y=i(63723),k=i.n(y),u=(i(18766),i(79329),i(9303));const b={id:"api-key-controller-revoke-api-key",title:"Revoke API key",description:"Revoke API key",sidebar_label:"Revoke API key",hide_title:!0,hide_table_of_contents:!0,api:"eJyFVE1P3DAQ/SvWnEAy7FJxyg3RPazggCic0KryxrMbg2Mbe7wlivLfq4kToGyr5mJnPB9v5j27Bx8wKjLerTVUcBXMDXbX3lH01mL8GfHgX7CYQUJQUbVIGBNUTz041SJUYDRIiPiaTUQNFcWMEoyDCoKiBiSkusFWQdUDdYEjEkXj9iBh52OrCCrI2WgYhg0nSsG7hIn9vy2XvGhMdTSBcTLKu7V4wU4UcFqkXNeY0i5byyBr7wgdcZwKwZp67G/xnDi4Pwbjt89YE3cXeRpkSukp6yfHrfcWlQMJ+KbaYLH0OoyfhMvl5b+xOk9i57PjJiWQ2vMEp3nDRn6N+g8PLVLjmTCNFglHZqiBChYqmMXhgpezF+zSojd6YAYwHmbWcrRQQR+iJ197O1SLRV/OH6Nl5z+xXOdEvhXFQzze34KEg4pGbW0Z1JyI9+hyy401RAHkuKTS3k5ly0QX09ciDw2KOY8gL3JCGGbYj9GWwc45VDDnEwXntW+Psq0cYRSdz/ETbOGjWN8JpXXElMTJL0ONz/Re9hSGUX8J6xwNdT9YJ6VDVeb+oQQ1EzGqvEGlMYKc78Pb2TT+kWvjdn4MNcSKgeuMtYpaXN2tj4CzWnY+ilY5tTduL7aeUrEgEhsi1j5q4/Y8Q6a0BF6cLyflq5qVz4WDT9SqUfMTsKtgxA124kNY0x0S08lXQO8NE77RIlhlHNOSCyFFc088DQZzARJm3YGEymhmvvGJ2KnvtyohK2xg82vG2EH1tPkQ0yhObRLvNVQ7ZRMe4Xm/3HByP704pwLk33HObLlu1KzN/AcSmJrx2Ro2g5zp4+rl4KquMdCnkKNnhHXyfge/r25XDysYht/0QtEj",sidebar_class_name:"delete api-method",info_path:"/cuemeet-documentation/docs/openapi/cuecard-api",custom_edit_url:null,displayed_sidebar:"pageSidebar"},h=void 0,m={},v=[];function g(e){const t={p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.default,{as:"h1",className:"openapi__heading",children:"Revoke API key"}),"\n",(0,n.jsx)(c(),{method:"delete",path:"/api/v1/api-keys/{id}",context:"endpoint"}),"\n",(0,n.jsx)(t.p,{children:"Revoke API key"}),"\n",(0,n.jsx)(u.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsx)(s(),{parameters:[{name:"id",required:!0,in:"path",schema:{type:"string",format:"uuid"}}]}),"\n",(0,n.jsx)(p(),{title:"Body",body:void 0}),"\n",(0,n.jsx)(k(),{id:void 0,label:void 0,responses:{200:{description:"API key revoked successfully",content:{"application/json":{schema:{type:"object",properties:{success:{type:"boolean",example:!0}}}}}},404:{description:"API key not found"}}})]})}function Y(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}}}]);