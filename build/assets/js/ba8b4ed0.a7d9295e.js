"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9219],{1756:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(4848),s=t(8453);const a={sidebar_position:1},o="OpenAI ecosystem apps",i={id:"user-guide/apps/intro",title:"OpenAI ecosystem apps",description:"Since each GaiaNet node provides an OpenAI-compatible API service, it can be a drop-in replacement for",source:"@site/docs/user-guide/apps/intro.md",sourceDirName:"user-guide/apps",slug:"/user-guide/apps/intro",permalink:"/user-guide/apps/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guide/apps/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Agent frameworks and apps",permalink:"/category/agent-frameworks-and-apps"},next:{title:"Dify + GaiaNet",permalink:"/user-guide/apps/dify"}},c={},p=[{value:"The OpenAI Python library",id:"the-openai-python-library",level:2},{value:"The OpenAI Node API library",id:"the-openai-node-api-library",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"openai-ecosystem-apps",children:"OpenAI ecosystem apps"}),"\n",(0,r.jsx)(n.p,{children:"Since each GaiaNet node provides an OpenAI-compatible API service, it can be a drop-in replacement for\nOpenAI in almost all LLM applications and frameworks. Checkout the articles in this section for instructions\nand examples for how to use GaiaNet in popular LLM apps."}),"\n",(0,r.jsx)(n.h2,{id:"the-openai-python-library",children:"The OpenAI Python library"}),"\n",(0,r.jsxs)(n.p,{children:["You can install the ",(0,r.jsx)(n.a,{href:"https://pypi.org/project/openai/",children:"official OpenAI Python library"})," as follows."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"pip install openai\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When you create an OpenAI client using the library, you can pass in the API endpoint point as the ",(0,r.jsx)(n.code,{children:"base_url"}),".\nRemember to append the ",(0,r.jsx)(n.code,{children:"/v1"})," after the host name. You can find a list of publc nodes ",(0,r.jsx)(n.a,{href:"/user-guide/nodes",children:"here"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'import openai\n\nclient = openai.OpenAI(base_url="https://YOUR-NODE-ID.us.gaianet.network/v1", api_key="")\n'})}),"\n",(0,r.jsx)(n.p,{children:"Alternatively, you could set an environment variable at the OS level."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"export OPENAI_API_BASE=https://YOUR-NODE-ID.us.gaianet.network/v1\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then, when you make API calls from the ",(0,r.jsx)(n.code,{children:"client"}),", make sure that the ",(0,r.jsx)(n.code,{children:"model"})," is set to the model name\navailable on your node."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'response = client.chat.completions.create(\n    model="Meta-Llama-3-8B-Instruct-Q5_K_M",\n    messages=[\n        {"role": "system", "content": "You are a strategic reasoner."},\n            {"role": "user", "content": "What is the purpose of life?"}\n        ],\n        temperature=0.7,\n        max_tokens=500\n    ]\n)\n'})}),"\n",(0,r.jsx)(n.p,{children:"That's it! You can now take any application built with the official OpenAI Python library and use a Gaia node\nas its backend!"}),"\n",(0,r.jsx)(n.h2,{id:"the-openai-node-api-library",children:"The OpenAI Node API library"}),"\n",(0,r.jsx)(n.p,{children:"You can install the OpenAI Node library which provides convenient access to the OpenAI REST API from TypeScript or JavaScript as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npm install openai\n"})}),"\n",(0,r.jsx)(n.p,{children:"Import it into your project as:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"// Example usage in Node.js\nconst OpenAI = require('openai');\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Create an OpenAI client with a custom base URL. Remember to append the ",(0,r.jsx)(n.code,{children:"/v1"})," after the host name."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"const client = new OpenAI({\n  baseURL: 'https://YOUR-NODE-ID.us.gaianet.network/v1',\n  apiKey: '' // Leave this empty when using Gaia\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Alternatively, you can set an environment variable using ",(0,r.jsx)(n.code,{children:"dotenv"})," in Node."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"process.env.OPENAI_API_BASE = 'https://YOUR-NODE-ID.us.gaianet.network/v1';\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then, when you make API calls from the ",(0,r.jsx)(n.code,{children:"client"}),", make sure that the ",(0,r.jsx)(n.code,{children:"model"})," is set to the model name\navailable on your node."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'async function callOpenAI() {\n  try {\n    const response = await client.chat.completions.create({\n      model: "Meta-Llama-3-8B-Instruct-Q5_K_M",\n      messages: [\n        { role: "system", content: "You are a strategic reasoner." },\n        { role: "user", content: "What is the purpose of life?" }\n      ],\n      temperature: 0.7,\n      max_tokens: 500\n    });\n\n    console.log(response.choices[0].message.content);\n  } catch (error) {\n    console.error(\'Error:\', error);\n  }\n}\n\n//Usage\ncallOpenAI();\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(6540);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);