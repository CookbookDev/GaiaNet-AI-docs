"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3670],{9939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=n(4848),i=n(8453);const r={sidebar_position:4},o="Stockbot",c={id:"user-guide/apps/stockbot",title:"Stockbot",description:"Stockbot is a lightning fast AI Chatbot that responds with live interactive stock charts, financials, news, screeners, and more. You can configure a Gaia node as the LLM backend.",source:"@site/docs/user-guide/apps/stockbot.md",sourceDirName:"user-guide/apps",slug:"/user-guide/apps/stockbot",permalink:"/user-guide/apps/stockbot",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guide/apps/stockbot.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Cursor AI IDE",permalink:"/user-guide/apps/cursor"},next:{title:"FlowiseAI RAG chat",permalink:"/user-guide/apps/flowiseai"}},l={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Run the agent",id:"run-the-agent",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"stockbot",children:"Stockbot"}),"\n",(0,s.jsx)(t.p,{children:"Stockbot is a lightning fast AI Chatbot that responds with live interactive stock charts, financials, news, screeners, and more. You can configure a Gaia node as the LLM backend."}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Please note, the Stockbot leverages function call to call the external API. You will need to use the model which supports function call, like ",(0,s.jsx)(t.a,{href:"https://github.com/GaiaNet-AI/node-configs/tree/main/llama-3-groq-8b-tool",children:"llama-3.1-8b"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:"You will need a Gaia node ready to provide LLM services through a public URL. You can"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/node-guide/quick-start",children:"run your own node"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/user-guide/nodes",children:"use a public node"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"In this tutorial, we will use a public Llama3 node with the function call support."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"API endpoint URL"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://llamatool.us.gaianet.network/v1",children:"https://llamatool.us.gaianet.network/v1"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Model Name"}),(0,s.jsx)(t.td,{children:"llama"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"API KEY"}),(0,s.jsx)(t.td,{children:"gaia"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"run-the-agent",children:"Run the agent"}),"\n",(0,s.jsx)(t.p,{children:"First, we will need to get the source code of the forked Stockbot."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"git clone https://github.com/JYC0413/stockbot-on-groq.git\ncd stockbot-on-groq\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Next, configure the ",(0,s.jsx)(t.code,{children:".env"})," file."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"cp .env.example .env.local\n"})}),"\n",(0,s.jsx)(t.p,{children:"You will need to configure four parameters here."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"LLAMAEDGE_BASE_URL: URL for the LLM API base URL."}),"\n",(0,s.jsx)(t.li,{children:"LLAMAEDGE_MODEL_NAME: Name of the model to be used."}),"\n",(0,s.jsx)(t.li,{children:"LLAMAEDGE_API_KEY: API key for accessing the LLM services."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Then, we will need to install the required dependencies."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"npm install\n"})}),"\n",(0,s.jsx)(t.p,{children:"Next, let's run the application locally."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"npm run dev\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Finally, you can open ",(0,s.jsx)(t.a,{href:"http://localhost:3000",children:"http://localhost:3000"})," and ask the stock related questions."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(3180).A+"",width:"1554",height:"1178"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3180:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/stockbot-01-fa5ede68e47bee6abc9b86c9d0d1441c.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(6540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);