"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3622],{3955:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>r});var s=t(4848),o=t(8453);const a={sidebar_position:103},i="Install multiple nodes on a single machine",d={id:"node-guide/tasks/multiple",title:"Install multiple nodes on a single machine",description:"The default GaiaNet installer installs the node into the $HOME/gaianet base directory.",source:"@site/docs/node-guide/tasks/multiple.md",sourceDirName:"node-guide/tasks",slug:"/node-guide/tasks/multiple",permalink:"/node-guide/tasks/multiple",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/node-guide/tasks/multiple.md",tags:[],version:"current",sidebarPosition:103,frontMatter:{sidebar_position:103},sidebar:"tutorialSidebar",previous:{title:"Install CUDA on Linux",permalink:"/node-guide/tasks/cuda"},next:{title:"Run a local-only node",permalink:"/node-guide/tasks/local"}},l={},r=[];function c(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"install-multiple-nodes-on-a-single-machine",children:"Install multiple nodes on a single machine"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"../quick-start",children:"default GaiaNet installer"})," installs the node into the ",(0,s.jsx)(n.code,{children:"$HOME/gaianet"}),' base directory.\nYou could install multiple nodes on the same machine. Each node has its own "base directory".\nTo do that, you just need to use the ',(0,s.jsx)(n.code,{children:"--base"})," option."]}),"\n",(0,s.jsxs)(n.p,{children:["Let's say that the base directory for your second node is ",(0,s.jsx)(n.code,{children:"$HOME/node-2"}),".\nYou can install GaiaNet node software using the following command."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl -sSfL 'https://raw.githubusercontent.com/GaiaNet-AI/gaianet-node/main/install.sh' | bash -s -- --base $HOME/node-2\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After that, you can specify the ",(0,s.jsx)(n.code,{children:"gaianet"})," CLI to operate on ",(0,s.jsx)(n.code,{children:"node-2"})," by appending the ",(0,s.jsx)(n.code,{children:"--base"})," option as well."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"gaianet init --base $HOME/node-2\ngaianet start --base $HOME/node-2\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var s=t(6540);const o={},a=s.createContext(o);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);