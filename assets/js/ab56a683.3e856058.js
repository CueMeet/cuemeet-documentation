"use strict";(self.webpackChunkcuemeet_documentation=self.webpackChunkcuemeet_documentation||[]).push([[461],{94404:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>v,contentTitle:()=>f,default:()=>g,frontMatter:()=>b,metadata:()=>i,toc:()=>j});const i=JSON.parse('{"id":"bot/bot-controller-leave-call","title":"Remove Bot From Call","description":"Remove Bot From Call","source":"@site/docs/bot/bot-controller-leave-call.api.mdx","sourceDirName":"bot","slug":"/bot/bot-controller-leave-call","permalink":"/cuemeet-documentation/docs/bot/bot-controller-leave-call","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"bot-controller-leave-call","title":"Remove Bot From Call","description":"Remove Bot From Call","sidebar_label":"Remove Bot From Call","hide_title":true,"hide_table_of_contents":true,"api":"eJytVm1v2zgM/isCP22Au7SHffK3XOorgqVNkDY37IqiUCymVitbnkT1mgX+7wfKdvritjvs7lMUi3xIkQ9fdmBrdJK0raYKUvjd0sRW5Kwx6K4NynucSGMgAY95cJq2kF7uQNb6C/LxqrlKoJZOlkjofLysZImQglaQgMPvQTtUkJILmICuIIVaUsGIeYGlhHQHtK1Zw5PT1Q0ksLGulAQphKAVNGzDoa9t5dGz/G+Hh/yj0OdO1+x867owuCFBBYpcGiN8yHP0fhOM2UICua0IK2JNWddG5/HZo1vP6ruhO3Z9izlBArXjIJFujWv1c5eTF76tKv09oFhbElphRXqj0UGTdLEawj1XP5MlCruJL1tbYkXSZP6F5gWLiY11UbdEJJZqEuiOK2d+DrJaznrrTxAc5tYpXd2cWvWqJ1iFEtJLOF9k4y/Z8vrPafYVEjgZz2bZ8lv/d7w6ns6v52ezb3D10vCyNyFKqx6f0YWgNpI47O/ZPpnPT2bZ9WmWXUACf83np5DARTY+PR9aO23fJnpcEUGbpGP79BfyPj3uAzdeTMUdbgUVkkTuUBIqQYX2/Wtura7G9K4JJQkPSJc4sPO1wKoPjfCFDUYJBnyZs1jQ/6uViPjSjCdJwb+Xl0V2djw9O4EEzi/Gy4vsGBKYzE8Xs6w9/zGezuLh/GK+WGTHw2xNgnNYkWhtPakOgQ+YhyjFdSL93euZeytT0nub6zY/0t+1VCe3ndhQPY2crghv0A2LNZRrdIwW1YQkwrIm31YdyWNJr3aZ5yhjpTQfpRGspCTJl/zvWPTL6eSGGTG0rQRLeJJlzcihVv8Z2UhPogV6Cv7Yulhq2XV1aBq++Xx4NOzrq0oGKqzTP1BBFPr8evOvLImNDZVqrcgbHkd8MyTP22OuRCosT8La+tj7eValMJK1Ht0fjdaWRjutmlHUiWPR3feDL3AzhV3tLNncmiYdjXbt/cqZZhClSfBkS9FKiNVyBgncS6fl2rSTpgfic184BVENSfzx7bs2MhhOR/tpMAAKFD2OICuCjy1t71Ybyh5D1voTPsiyNvgpt+UALasIndja4J64LawT04WQSjn0Xnz4W1NhA+3NfuTsXj1uEOc8aNsX9nvEnmXdh25RKFCqWGHdSvFwIGt9cIfbmGFdbWxU7fg0CZhLp7jVDstpMY3lU8pK3nCTX1vy7Zeu6+/HGceQU9oqHn067FYHmXM5sGGmRinj0tA5xvR7JFTXFDtGPXNk/1DCBxrVRurYpUKbiJZslxwFduIIEuBaTyCNs6Xl3FUCBXMzvYTdbi09Mrka/vw9oItL2SOPIi+V9nxWkG6k8Thwab8YwYdlt699FJC87mqfqGob6WoC/4MEOCtx6WuumqTPHFtvL8Z5jjU9URmsYEyRffUt5uc8sLnyn7PjLrKjOzD8q/48EqV3LJImeUN8t2t51zR7+fbqTY09M7tns/tN0/wDe8LWjQ==","sidebar_class_name":"post api-method","info_path":"docs/openapi/cuecard-api","custom_edit_url":null,"displayed_sidebar":"pageSidebar"},"sidebar":"pageSidebar","previous":{"title":"Retrieve bot","permalink":"/cuemeet-documentation/docs/bot/bot-controller-get-bot"},"next":{"title":"Retrieve transcript","permalink":"/cuemeet-documentation/docs/bot/bot-controller-get-transcript"}}');var r=o(74848),n=o(28453),a=o(33617),s=o.n(a),d=o(17543),l=o.n(d),c=o(86013),p=o.n(c),u=o(63723),m=o.n(u),h=(o(18766),o(79329),o(9303));const b={id:"bot-controller-leave-call",title:"Remove Bot From Call",description:"Remove Bot From Call",sidebar_label:"Remove Bot From Call",hide_title:!0,hide_table_of_contents:!0,api:"eJytVm1v2zgM/isCP22Au7SHffK3XOorgqVNkDY37IqiUCymVitbnkT1mgX+7wfKdvritjvs7lMUi3xIkQ9fdmBrdJK0raYKUvjd0sRW5Kwx6K4NynucSGMgAY95cJq2kF7uQNb6C/LxqrlKoJZOlkjofLysZImQglaQgMPvQTtUkJILmICuIIVaUsGIeYGlhHQHtK1Zw5PT1Q0ksLGulAQphKAVNGzDoa9t5dGz/G+Hh/yj0OdO1+x867owuCFBBYpcGiN8yHP0fhOM2UICua0IK2JNWddG5/HZo1vP6ruhO3Z9izlBArXjIJFujWv1c5eTF76tKv09oFhbElphRXqj0UGTdLEawj1XP5MlCruJL1tbYkXSZP6F5gWLiY11UbdEJJZqEuiOK2d+DrJaznrrTxAc5tYpXd2cWvWqJ1iFEtJLOF9k4y/Z8vrPafYVEjgZz2bZ8lv/d7w6ns6v52ezb3D10vCyNyFKqx6f0YWgNpI47O/ZPpnPT2bZ9WmWXUACf83np5DARTY+PR9aO23fJnpcEUGbpGP79BfyPj3uAzdeTMUdbgUVkkTuUBIqQYX2/Wtura7G9K4JJQkPSJc4sPO1wKoPjfCFDUYJBnyZs1jQ/6uViPjSjCdJwb+Xl0V2djw9O4EEzi/Gy4vsGBKYzE8Xs6w9/zGezuLh/GK+WGTHw2xNgnNYkWhtPakOgQ+YhyjFdSL93euZeytT0nub6zY/0t+1VCe3ndhQPY2crghv0A2LNZRrdIwW1YQkwrIm31YdyWNJr3aZ5yhjpTQfpRGspCTJl/zvWPTL6eSGGTG0rQRLeJJlzcihVv8Z2UhPogV6Cv7Yulhq2XV1aBq++Xx4NOzrq0oGKqzTP1BBFPr8evOvLImNDZVqrcgbHkd8MyTP22OuRCosT8La+tj7eValMJK1Ht0fjdaWRjutmlHUiWPR3feDL3AzhV3tLNncmiYdjXbt/cqZZhClSfBkS9FKiNVyBgncS6fl2rSTpgfic184BVENSfzx7bs2MhhOR/tpMAAKFD2OICuCjy1t71Ybyh5D1voTPsiyNvgpt+UALasIndja4J64LawT04WQSjn0Xnz4W1NhA+3NfuTsXj1uEOc8aNsX9nvEnmXdh25RKFCqWGHdSvFwIGt9cIfbmGFdbWxU7fg0CZhLp7jVDstpMY3lU8pK3nCTX1vy7Zeu6+/HGceQU9oqHn067FYHmXM5sGGmRinj0tA5xvR7JFTXFDtGPXNk/1DCBxrVRurYpUKbiJZslxwFduIIEuBaTyCNs6Xl3FUCBXMzvYTdbi09Mrka/vw9oItL2SOPIi+V9nxWkG6k8Thwab8YwYdlt699FJC87mqfqGob6WoC/4MEOCtx6WuumqTPHFtvL8Z5jjU9URmsYEyRffUt5uc8sLnyn7PjLrKjOzD8q/48EqV3LJImeUN8t2t51zR7+fbqTY09M7tns/tN0/wDe8LWjQ==",sidebar_class_name:"post api-method",info_path:"docs/openapi/cuecard-api",custom_edit_url:null,displayed_sidebar:"pageSidebar"},f=void 0,v={},j=[];function y(t){const e={p:"p",...(0,n.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Remove Bot From Call"}),"\n",(0,r.jsx)(s(),{method:"post",path:"/api/v1/bot/{id}/leave",context:"endpoint"}),"\n",(0,r.jsx)(e.p,{children:"Remove Bot From Call"}),"\n",(0,r.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(l(),{parameters:[{name:"id",required:!0,in:"path",schema:{type:"string",format:"uuid"}}]}),"\n",(0,r.jsx)(p(),{title:"Body",body:void 0}),"\n",(0,r.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"Bot left the call successfully",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",format:"uuid",description:"Unique bot identifier"},name:{type:"string",description:"Name of the bot"},title:{type:"string",description:"Title for the meeting"},meetingUrl:{type:"string",description:"URL of the meeting"},recordingMode:{type:"string",enum:["SPEAKER_VIEW","GALLERY_VIEW","AUDIO_ONLY"],description:"Recording mode for the bot"},platform:{type:"string",enum:["GOOGLE_MEET","ZOOM","TEAMS"],description:"Meeting platform type"},apiKeyId:{type:"string",format:"uuid",description:"ID of the API key that created this bot"},joinAt:{type:"string",format:"date-time",description:"When the bot should join the meeting"},leaveAt:{type:"string",format:"date-time",description:"When the bot should leave the meeting"},status:{type:"string",enum:["PENDING","STARTED","COMPLETED","FAILED","STOPPED"],description:"Current status of the bot execution"},taskId:{type:"string",description:"ID of the associated task"},retryCount:{type:"integer",description:"Number of retry attempts"},metaData:{type:"object",description:"Additional metadata for the bot"},createdAt:{type:"string",format:"date-time",description:"Bot creation timestamp"},updatedAt:{type:"string",format:"date-time",description:"Bot last update timestamp"}},title:"BotResponse"}}}},401:{description:"Unauthorized"},404:{description:"Bot not found"}}})]})}function g(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(y,{...t})}):y(t)}}}]);