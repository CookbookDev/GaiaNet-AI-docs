"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8744],{7770:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(4848),s=t(8453);const a={sidebar_position:104},i="A planning agent",l={id:"user-guide/apps/gpt-planner",title:"A planning agent",description:"The gpt planner is a Python",source:"@site/docs/user-guide/apps/gpt-planner.md",sourceDirName:"user-guide/apps",slug:"/user-guide/apps/gpt-planner",permalink:"/user-guide/apps/gpt-planner",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guide/apps/gpt-planner.md",tags:[],version:"current",sidebarPosition:104,frontMatter:{sidebar_position:104},sidebar:"tutorialSidebar",previous:{title:"Translation Agent  + GaiaNet",permalink:"/user-guide/apps/translation-agent"},next:{title:"LlamaEdgeBook",permalink:"/user-guide/apps/llamaedgebook"}},o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Run the agent",id:"run-the-agent",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"a-planning-agent",children:"A planning agent"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"https://github.com/mshumer/gpt-prompt-engineer/blob/main/gpt_planner.ipynb",children:"gpt planner"})," is a Python\napplication that demonstrate the planning capabilities of LLMs. When you run it, it will ask the LLM\nto generate multiple action plans for a goal or a query. It will then ask the LLM to compare and select\nthe best plan, and then rewrite it to answer the user query."]}),"\n",(0,r.jsxs)(n.p,{children:["Since the program uses the official OpenAI Python library, we can ",(0,r.jsx)(n.a,{href:"/intro",children:"easily change it to use a Gaia node"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"You will need a Gaia node ready to provide LLM services through a public URL. You can"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/node-guide/quick-start",children:"run your own node"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/user-guide/nodes",children:"use a public node"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In this tutorial, we will use a public node."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"API endpoint URL"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://llama.us.gaianet.network/v1",children:"https://llama.us.gaianet.network/v1"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Model Name"}),(0,r.jsx)(n.td,{children:"llama"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"run-the-agent",children:"Run the agent"}),"\n",(0,r.jsxs)(n.p,{children:["First, ",(0,r.jsx)(n.a,{href:"https://colab.research.google.com/github/mshumer/gpt-prompt-engineer/blob/main/gpt_planner.ipynb",children:"load the nodebook in colab"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Edit the code to create an OpenAI client. We will pass in the ",(0,r.jsx)(n.code,{children:"base_url"})," here."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'client = openai.OpenAI(base_url="https://llama.us.gaianet.network/v1", api_key=OPENAI_API_KEY)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Next, replace all the ",(0,r.jsx)(n.code,{children:"gpt-4o-mini"})," model name with the ",(0,r.jsx)(n.code,{children:"llama"})," model name in the code.\nHere is an example."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'response = client.chat.completions.create(\n    model="llama",\n    messages=[\n        {"role": "system", "content": "You are a helpful assistant. Use the given plan to create a detailed and high-quality response to the user\'s query."},\n        {"role": "user", "content": f"User Query: {user_query}\\n\\nPlan: {best_plan}\\n\\nGenerate a detailed response based on this plan."}\n    ],\n    temperature=0.5,\n    max_tokens=2000\n)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Change the query to your own."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'user_query = "How do I debug a TLS connection timeout?"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Finally, run the notebook to see the results!"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(6540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);