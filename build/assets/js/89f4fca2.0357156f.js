"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3620],{3946:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var s=t(4848),a=t(8453);const i={sidebar_position:2},o="Start a node on AWS using AMI images",c={id:"node-guide/tasks/aws",title:"Start a node on AWS using AMI images",description:"We have created a series of public AMIs for you to start GaiaNet nodes in AWS with just a few clicks.",source:"@site/docs/node-guide/tasks/aws.md",sourceDirName:"node-guide/tasks",slug:"/node-guide/tasks/aws",permalink:"/node-guide/tasks/aws",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/node-guide/tasks/aws.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Start a node with Docker",permalink:"/node-guide/tasks/docker"},next:{title:"Install CUDA on Linux",permalink:"/node-guide/tasks/cuda"}},d={},r=[{value:"Running an Nvidia GPU-enabled AWS instance",id:"running-an-nvidia-gpu-enabled-aws-instance",level:2},{value:"Running a CPU-only AWS instance",id:"running-a-cpu-only-aws-instance",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"start-a-node-on-aws-using-ami-images",children:"Start a node on AWS using AMI images"}),"\n",(0,s.jsx)(n.p,{children:"We have created a series of public AMIs for you to start GaiaNet nodes in AWS with just a few clicks."}),"\n",(0,s.jsx)(n.p,{children:"Now we have three AMI images available in the Asia Pacific (Osaka) and all the US regions including N. Virginia, Ohio, N. California, and Oregon."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"AMI Images Name"}),(0,s.jsx)(n.th,{children:"Architecture"}),(0,s.jsx)(n.th,{children:"Regions"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GaiaNet_ubuntu22.04_amd64_cuda12"}),(0,s.jsx)(n.td,{children:"GPU"}),(0,s.jsx)(n.td,{children:"N. Virginia, Ohio, N. California, Oregon, and Osaka"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GaiaNet_ubuntu22.04_amd64"}),(0,s.jsx)(n.td,{children:"x86 CPU machines"}),(0,s.jsx)(n.td,{children:"N. Virginia, Ohio, N. California, Oregon, and Osaka"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GaiaNet_ubuntu22.04_arm64"}),(0,s.jsx)(n.td,{children:"ARM CPU machines"}),(0,s.jsx)(n.td,{children:"N. Virginia, Ohio, N. California, Oregon, and Osaka"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"running-an-nvidia-gpu-enabled-aws-instance",children:"Running an Nvidia GPU-enabled AWS instance"}),"\n",(0,s.jsxs)(n.p,{children:["Load the ",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/console/",children:"AWS console"}),' and sign into your account. Go to EC2 | instances and\nclick on the "Launch instance" button.']}),"\n",(0,s.jsxs)(n.p,{children:['In the "Application and OS Images" section, search the AMI catalog and select the image named ',(0,s.jsx)(n.code,{children:"GaiaNet_ubuntu22.04_amd64_cuda12"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(5095).A+"",width:"1594",height:"1240"})}),"\n",(0,s.jsxs)(n.p,{children:['In the "Instance type" section, select any of the ',(0,s.jsx)(n.code,{children:"g4dn"})," types. Those are EC2 VMs with Nvidia T4 GPUs."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(1632).A+"",width:"1584",height:"560"})}),"\n",(0,s.jsx)(n.p,{children:'In the "Network settings", make sure that you allow SSH connections.'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(5710).A+"",width:"1588",height:"1008"})}),"\n",(0,s.jsx)(n.p,{children:'Click on the "Launch instance" button and wait for the instance to start up. Once the instance is ready, SSH\ninto its public IP address. Once you are in the VM, run the following two commands.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"gaianet init\ngaianet start\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The node is ready when it shows ",(0,s.jsx)(n.code,{children:"The GaiaNet node is started at: https://..."})," on the console.\nYou can go to that URL from your browser to interact with the GaiaNet node."]}),"\n",(0,s.jsxs)(n.p,{children:["You can ",(0,s.jsx)(n.a,{href:"/node-guide/customize",children:"customize your GaiaNet node"})," with your own choice of LLMs and knowledge base snapshots."]}),"\n",(0,s.jsx)(n.h2,{id:"running-a-cpu-only-aws-instance",children:"Running a CPU-only AWS instance"}),"\n",(0,s.jsxs)(n.p,{children:["Load the ",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/console/",children:"AWS console"}),' and sign into your account. Go to EC2 | instances and\nclick on the "Launch instance" button.']}),"\n",(0,s.jsx)(n.p,{children:'In the "Application and OS Images" section, search the AMI catalog and select the image named'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GaiaNet_ubuntu22.04_amd64"})," for x86 CPU machines"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GaiaNet_ubuntu22.04_arm64"})," for ARM CPU machines"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:['In the "Instance type" section, select an instance with at least 8GB of RAM. For example, we recommend ',(0,s.jsx)(n.code,{children:"t2.large"})," or ",(0,s.jsx)(n.code,{children:"t2.xlarge"})," instances."]}),"\n",(0,s.jsx)(n.p,{children:'In the "Network settings", make sure that you allow SSH connections.'}),"\n",(0,s.jsx)(n.p,{children:'Click on the "Launch instance" button and wait for instance to start up. Once the instance is ready, SSH\ninto its public IP address. Once you are in the VM, run the following two commands.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"gaianet init\ngaianet start\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The node is ready when it shows ",(0,s.jsx)(n.code,{children:"The GaiaNet node is started at: https://..."})," on the console.\nYou can go to that URL from your browser to interact with the GaiaNet node."]}),"\n",(0,s.jsxs)(n.p,{children:["You can ",(0,s.jsx)(n.a,{href:"/node-guide/customize",children:"customize your GaiaNet node"})," with your own choice of LLMs and knowledge base snapshots."]}),"\n",(0,s.jsx)(n.p,{children:"Good luck!"})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5095:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/aws_ami-ac1a273dd1e4ba668951e1780804f6dc.png"},1632:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/aws_instance_type-b9d961478e8808a27fe30437e154f496.png"},5710:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/aws_network-c87d461d165d2d2814df19d1af71e734.png"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(6540);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);