"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[583],{2309:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(4848),a=t(8453);const r={sidebar_position:2},s="llama.cpp",o={id:"creator-guide/finetune/llamacpp",title:"llama.cpp",description:"The popular llama.cpp tool comes with a finetune utility. It works well on CPUs! This finetune guide is reproduced with",source:"@site/docs/creator-guide/finetune/llamacpp.md",sourceDirName:"creator-guide/finetune",slug:"/creator-guide/finetune/llamacpp",permalink:"/creator-guide/finetune/llamacpp",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/creator-guide/finetune/llamacpp.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Finetune LLMs",permalink:"/creator-guide/finetune/intro"},next:{title:"Tutorial",permalink:"/category/tutorial"}},l={},c=[{value:"Build the finetune utility from llama.cpp",id:"build-the-finetune-utility-from-llamacpp",level:2},{value:"Get the base model",id:"get-the-base-model",level:2},{value:"Create a question and answer set for fine-tuning",id:"create-a-question-and-answer-set-for-fine-tuning",level:2},{value:"Finetune!",id:"finetune",level:2},{value:"Merge",id:"merge",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"llamacpp",children:"llama.cpp"}),"\n",(0,i.jsxs)(n.p,{children:["The popular llama.cpp tool comes with a ",(0,i.jsx)(n.code,{children:"finetune"})," utility. It works well on CPUs! This finetune guide is reproduced with\npermission from Tony Yuan's ",(0,i.jsx)(n.a,{href:"https://github.com/YuanTony/chemistry-assistant/tree/main/fine-tune-model",children:"Finetune an open-source LLM for the chemistry subject"})," project."]}),"\n",(0,i.jsx)(n.h2,{id:"build-the-finetune-utility-from-llamacpp",children:"Build the finetune utility from llama.cpp"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"finetune"})," utility in llama.cpp can work with quantitized GGUF files on CPUs, and hence dramatically reducing the hardware requirements and expenses for finetuning LLMs."]}),"\n",(0,i.jsx)(n.p,{children:"Checkout and download the llama.cpp source code."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"git clone https://github.com/ggerganov/llama.cpp\ncd llama.cpp\n"})}),"\n",(0,i.jsx)(n.p,{children:"Build the llama.cpp binary."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mkdir build\ncd build\ncmake ..\ncmake --build . --config Release\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you have Nvidia GPU and CUDA toolkit installed, you should build llama.cpp with CUDA support."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mkdir build\ncd build\ncmake .. -DLLAMA_CUBLAS=ON -DCMAKE_CUDA_COMPILER=/usr/local/cuda/bin/nvcc\ncmake --build . --config Release\n"})}),"\n",(0,i.jsx)(n.h2,{id:"get-the-base-model",children:"Get the base model"}),"\n",(0,i.jsx)(n.p,{children:"We are going to use Meta's Llama2 chat 13B model as the base model. Note that we are using a Q5 quantitized GGUF model file directly to save computing resources. You can use any of the Llama2 compatible GGUF models on Hugging Face."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd .. # change to the llama.cpp directory\ncd models/\ncurl -LO https://huggingface.co/gaianet/Llama-2-13B-Chat-GGUF/resolve/main/llama-2-13b-chat.Q5_K_M.gguf\n"})}),"\n",(0,i.jsx)(n.h2,{id:"create-a-question-and-answer-set-for-fine-tuning",children:"Create a question and answer set for fine-tuning"}),"\n",(0,i.jsxs)(n.p,{children:["Next we came up with 1700+ pairs of QAs for the chemistry subject. It is like the following in a ",(0,i.jsx)(n.a,{href:"https://raw.githubusercontent.com/YuanTony/chemistry-assistant/main/fine-tune-model/train.csv",children:"CSV file"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Question"}),(0,i.jsx)(n.th,{children:"Answer"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"What is unique about hydrogen?"}),(0,i.jsx)(n.td,{children:"It's the most abundant element in the universe, making up over 75% of all matter."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"What is the main component of Jupiter?"}),(0,i.jsx)(n.td,{children:"Hydrogen is the main component of Jupiter and the other gas giant planets."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Can hydrogen be used as fuel?"}),(0,i.jsx)(n.td,{children:"Yes, hydrogen is used as rocket fuel. It can also power fuel cells to generate electricity."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"What is mercury's atomic number?"}),(0,i.jsx)(n.td,{children:"The atomic number of mercury is 80"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"What is Mercury?"}),(0,i.jsx)(n.td,{children:"Mercury is a silver colored metal that is liquid at room temperature. It has an atomic number of 80 on the periodic table. It is toxic to humans."})]})]})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"We used GPT-4 to help me come up many of these QAs."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Then, we wrote a ",(0,i.jsx)(n.a,{href:"https://raw.githubusercontent.com/YuanTony/chemistry-assistant/main/fine-tune-model/convert.py",children:"Python script"})," to convert each row in the CSV file into a sample QA in the Llama2 chat template format. Notice that each QA pair starts with ",(0,i.jsx)(n.code,{children:"<SFT>"})," as an indicator for the finetune program to start a sample. The result ",(0,i.jsx)(n.a,{href:"https://raw.githubusercontent.com/YuanTony/chemistry-assistant/main/fine-tune-model/train.txt",children:"train.txt"})," file can now be used in fine-tuning."]}),"\n",(0,i.jsxs)(n.p,{children:["Put the ",(0,i.jsx)(n.a,{href:"https://raw.githubusercontent.com/YuanTony/chemistry-assistant/main/fine-tune-model/train.txt",children:"train.txt"})," file in the ",(0,i.jsx)(n.code,{children:"llama.cpp/models"})," directory with the GGUF base model."]}),"\n",(0,i.jsx)(n.h2,{id:"finetune",children:"Finetune!"}),"\n",(0,i.jsx)(n.p,{children:"Use the following command to start the fine-tuning process on your CPUs. I am putting it in the background so that it can run continuous now.\nIt could several days or even a couple of weeks depending on how many CPUs you have."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"nohup ../build/bin/finetune --model-base llama-2-13b-chat.Q5_K_M.gguf --lora-out lora.bin --train-data train.txt --sample-start '<SFT>' --adam-iter 1024 &\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can check the process every a few hours in the ",(0,i.jsx)(n.code,{children:"nohup.out"})," file. It will report ",(0,i.jsx)(n.code,{children:"loss"})," for each iteration. You can stop the process when the ",(0,i.jsx)(n.code,{children:"loss"})," goes consistently under ",(0,i.jsx)(n.code,{children:"0.1"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note 1"})," If you have multiple CPUs (or CPU cores), you can speed up the finetuning process by adding a ",(0,i.jsx)(n.code,{children:"-t"})," parameter to the above command to use more threads. For example, if you have 60 CPU cores, you could do ",(0,i.jsx)(n.code,{children:"-t 60"})," to use all of them."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note 2"})," If your finetuning process is interrupted, you can restart it from ",(0,i.jsx)(n.code,{children:"checkpoint-250.gguf"}),". The next file it outputs is ",(0,i.jsx)(n.code,{children:"checkpoint-260.gguf"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"nohup ../build/bin/finetune --model-base llama-2-13b-chat.Q5_K_M.gguf --checkpoint-in checkpoint-250.gguf --lora-out lora.bin --train-data train.txt --sample-start '<SFT>' --adam-iter 1024 &\n"})}),"\n",(0,i.jsx)(n.h2,{id:"merge",children:"Merge"}),"\n",(0,i.jsxs)(n.p,{children:["The fine-tuning process updates several layers of the LLM's neural network. Those updated layers are saved in a file called ",(0,i.jsx)(n.code,{children:"lora.bin"})," and you can now merge them back to the base LLM to create the new fine-tuned LLM."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"../build/bin/export-lora --model-base llama-2-13b-chat.Q5_K_M.gguf --lora lora.bin --model-out chemistry-assistant-13b-q5_k_m.gguf\n"})}),"\n",(0,i.jsx)(n.p,{children:"The result is this file."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"curl -LO https://huggingface.co/juntaoyuan/chemistry-assistant-13b/resolve/main/chemistry-assistant-13b-q5_k_m.gguf\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note 3"})," If you want to use a checkpoint to generate a ",(0,i.jsx)(n.code,{children:"lora.bin"})," file, use the following command. This is needed when you believe the final ",(0,i.jsx)(n.code,{children:"lora.bin"})," is an overfit."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"../build/bin/finetune --model-base llama-2-13b-chat.Q5_K_M.gguf --checkpoint-in checkpoint-250.gguf --only-write-lora --lora-out lora.bin\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(6540);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);