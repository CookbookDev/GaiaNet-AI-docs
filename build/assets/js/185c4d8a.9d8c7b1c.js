"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4273],{3811:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=t(4848),i=t(8453);const o={sidebar_position:1},s="Agentic translation on GaiaNet",r={id:"tutorial/translator-agent",title:"Agentic translation on GaiaNet",description:'Prof. Andrew Ng\'s agentic translation is a great demonstration on how to cooridnate multiple LLM "agents" to work on a single task. It allows multiple smaller LLMs (like Llama-3 or Gemma-2) to work gether and produce better results than a single large LLM (like ChatGPT).',source:"@site/docs/tutorial/translator-agent.md",sourceDirName:"tutorial",slug:"/tutorial/translator-agent",permalink:"/tutorial/translator-agent",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/translator-agent.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Calling external tools",permalink:"/tutorial/tool-call"},next:{title:"GaiaNet: GenAI Agent Network",permalink:"/litepaper"}},l={},d=[{value:"Introduction to the LLM Translation Agent",id:"introduction-to-the-llm-translation-agent",level:2},{value:"Demo 1: Running Translation Agents with Llama-3-8B",id:"demo-1-running-translation-agents-with-llama-3-8b",level:2},{value:"Step 1.1: Run a Llama-3-8B GaiaNet node",id:"step-11-run-a-llama-3-8b-gaianet-node",level:3},{value:"Step 1.2 Run the Translation Agent on top of Llama-3-8B",id:"step-12-run-the-translation-agent-on-top-of-llama-3-8b",level:3},{value:"Demo 2: Running Translation Agents with gemma-2-27b",id:"demo-2-running-translation-agents-with-gemma-2-27b",level:2},{value:"Step 2.1 Run a gemma-2-27b GaiaNet node",id:"step-21-run-a-gemma-2-27b-gaianet-node",level:3},{value:"Step 2.2 Run the Translation Agent to run on top of gemma-2-27b",id:"step-22-run-the-translation-agent-to-run-on-top-of-gemma-2-27b",level:3},{value:"Demo 3: Running Translation Agents with Phi-3-Medium long context model",id:"demo-3-running-translation-agents-with-phi-3-medium-long-context-model",level:2},{value:"Step 3.1: Run a Phi-3-medium-128k GaiaNet node",id:"step-31-run-a-phi-3-medium-128k-gaianet-node",level:3},{value:"Step 3.2 Clone and run the Translation Agent on top of Phi-3-medium-128k",id:"step-32-clone-and-run-the-translation-agent-on-top-of-phi-3-medium-128k",level:3},{value:"Evaluation of Translation Quality",id:"evaluation-of-translation-quality",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"agentic-translation-on-gaianet",children:"Agentic translation on GaiaNet"}),"\n",(0,a.jsxs)(n.p,{children:["Prof. Andrew Ng's ",(0,a.jsx)(n.a,{href:"https://www.linkedin.com/posts/andrewyng_github-andrewyngtranslation-agent-activity-7206347897938866176-5tDJ/",children:"agentic translation"}),' is a great demonstration on how to cooridnate multiple LLM "agents" to work on a single task. It allows multiple smaller LLMs (like Llama-3 or Gemma-2) to work gether and produce better results than a single large LLM (like ChatGPT).']}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://www.gaianet.ai/",children:"GaiaNet"}),", with 2000+ nodes running all kind of finetuned LLms and knowledge bases, provides a huge opportunity for agentic apps to choose and use their own LLM backends."]}),"\n",(0,a.jsx)(n.h2,{id:"introduction-to-the-llm-translation-agent",children:"Introduction to the LLM Translation Agent"}),"\n",(0,a.jsx)(n.p,{children:"This LLM Translation Agent is designed to facilitate accurate and efficient translation across multiple languages. It employs open source LLMs (Large Language Models) to provide high-quality translations. You can use your own fine-tuned models or any LLMs on Hugging Face like Meta's Llama 3."}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["For detailed commands on starting and running this agent, please visit ",(0,a.jsx)(n.a,{href:"https://github.com/second-state/translation-agent/blob/use_llamaedge/step-by-step-use-LocalAI.md",children:"GitHub - Second State/translation-agent"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"To get started, clone the Translation Agent."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"git clone https://github.com/second-state/translation-agent.git\n    \ncd translation-agent\ngit checkout use_llamaedge\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Next, we will install a local GaiaNet node, which provides the backend API services required by the agent. You can, of course, use ",(0,a.jsx)(n.a,{href:"https://docs.gaianet.ai/user-guide/nodes",children:"GaiaNet nodes from the community"})," if you do not want to start your own."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"curl -sSfL 'https://github.com/GaiaNet-AI/gaianet-node/releases/latest/download/install.sh' | bash\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You will also need the following configurations and prerequisites to run the agent app. If you are using a public GaiaNet node instead of your local node, replace the ",(0,a.jsx)(n.code,{children:"http://localhost:8080"})," with ",(0,a.jsx)(n.code,{children:"https://node_id.us.gaianet.network"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'export OPENAI_BASE_URL="http://localhost:8080/v1"\nexport PYTHONPATH=${PWD}/src\nexport OPENAI_API_KEY="GAIANET"\n\npip install python-dotenv\npip install openai tiktoken icecream langchain_text_splitters\n'})}),"\n",(0,a.jsx)(n.h2,{id:"demo-1-running-translation-agents-with-llama-3-8b",children:"Demo 1: Running Translation Agents with Llama-3-8B"}),"\n",(0,a.jsxs)(n.p,{children:["First, let's run the translation agent with Meta AI's popular Llama-3 model. We select the smallest Llama-3 model (the 8b model) for this demo. The translation task is from Chinese to English. Our ",(0,a.jsx)(n.a,{href:"https://hackmd.io/tdLiVR3TSc-8eVg_E-j9QA?view#Source-text",children:"source text"})," is in Chinese, a brief intro to the ancient Chinese royal palace, the Forbidden City."]}),"\n",(0,a.jsx)(n.h3,{id:"step-11-run-a-llama-3-8b-gaianet-node",children:"Step 1.1: Run a Llama-3-8B GaiaNet node"}),"\n",(0,a.jsx)(n.p,{children:"Configure and download the model. Since the size of the model is 5.73 GB. It can take a while to download."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"gaianet init --config https://raw.githubusercontent.com/GaiaNet-AI/node-configs/main/llama-3-8b-instruct/config.json\n"})}),"\n",(0,a.jsx)(n.p,{children:"Next, use the following command to start the GaiaNet node."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"gaianet start\n"})}),"\n",(0,a.jsx)(n.h3,{id:"step-12-run-the-translation-agent-on-top-of-llama-3-8b",children:"Step 1.2 Run the Translation Agent on top of Llama-3-8B"}),"\n",(0,a.jsxs)(n.p,{children:["Find the ",(0,a.jsx)(n.code,{children:"examples/example_script.py"})," file in your cloned agent repo and review its code. It tells the agent where to find your document and how to translate it. Change the model name to the one you are using, here we\u2019re using ",(0,a.jsx)(n.code,{children:"Meta-Llama-3-8B-Instruct-Q5_K_M"})," model; also change the source and target languages you want (here we put ",(0,a.jsx)(n.code,{children:"Chinese"})," as the source language and ",(0,a.jsx)(n.code,{children:"English"})," as the target language)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'import os\nimport translation_agent as ta\n        \nif __name__ == "__main__":\n    source_lang, target_lang, country = "Chinese", "English", "Britain"\n    \n    relative_path = "sample-texts/forbiddencity.txt"\n    script_dir = os.path.dirname(os.path.abspath(__file__))\n    \n    full_path = os.path.join(script_dir, relative_path)\n    \n    with open(full_path, encoding="utf-8") as file:\n        source_text = file.read()\n    \n    print(f"Source text:\\n\\n{source_text}\\n------------\\n")\n    \n    translation = ta.translate(\n            source_lang=source_lang,\n            target_lang=target_lang,\n            source_text=source_text,\n            country=country,\n            model="Meta-Llama-3-8B-Instruct-Q5_K_M",\n    )\n    \n    print(f"Translation:\\n\\n{translation}")\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Then, you can find a ",(0,a.jsx)(n.code,{children:"examples/sample-texts"})," folder in your cloned repo. Put your file you want to translate in this folder and get its path. Here because we named our source text ",(0,a.jsx)(n.code,{children:"forbiddencity.txt"}),", the relative path to the document would be ",(0,a.jsx)(n.code,{children:"sample-texts/forbiddencity.txt"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Run the below commands to have your text file translated into English."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd examples\npython example_script.py\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Wait for several minutes and you will have ",(0,a.jsx)(n.a,{href:"https://hackmd.io/tdLiVR3TSc-8eVg_E-j9QA?view#English-Translation-by-Llama-3-8B",children:"a fully translated version"})," appear on your terminal screen."]}),"\n",(0,a.jsx)(n.h2,{id:"demo-2-running-translation-agents-with-gemma-2-27b",children:"Demo 2: Running Translation Agents with gemma-2-27b"}),"\n",(0,a.jsx)(n.p,{children:"The benefit of running the Translation Agent with GaiaNet is the ability for users to choose and embed different LLMs for different agentic tasks. To demonstrate this point, we will now change the translation agent LLM from Llama-3-8b to Google's gemma-2-27b, which is of similar size but scores higher on many language-related benchmarks."}),"\n",(0,a.jsxs)(n.p,{children:["The translation task is the same as before. Our ",(0,a.jsx)(n.a,{href:"https://hackmd.io/tdLiVR3TSc-8eVg_E-j9QA?view#Source-text",children:"source text"})," is in Chinese, a brief intro to the ancient Chinese royal palace, the Forbidden City. The translation target is English."]}),"\n",(0,a.jsx)(n.h3,{id:"step-21-run-a-gemma-2-27b-gaianet-node",children:"Step 2.1 Run a gemma-2-27b GaiaNet node"}),"\n",(0,a.jsx)(n.p,{children:"Configure and download the model. Since the size of the model is 6.40G, it could take a while to download."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"gaianet init --config https://raw.githubusercontent.com/GaiaNet-AI/node-configs/main/gemma-2-27b-it/config.json\n"})}),"\n",(0,a.jsx)(n.p,{children:"Next, use the following command to start the GaiaNet node."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"gaianet start\n"})}),"\n",(0,a.jsx)(n.h3,{id:"step-22-run-the-translation-agent-to-run-on-top-of-gemma-2-27b",children:"Step 2.2 Run the Translation Agent to run on top of gemma-2-27b"}),"\n",(0,a.jsxs)(n.p,{children:["Find the ",(0,a.jsx)(n.code,{children:"examples/example_script.py"})," file in your cloned agent repo and review its code. It tells the agent where to find your document and how to translate it. Change the model name to the one you are using, here we\u2019re using ",(0,a.jsx)(n.code,{children:"gemma-2-27b-it-Q5_K_M"})," model; also change the source and target languages you want (here we put ",(0,a.jsx)(n.code,{children:"Chinese"})," as the source language and ",(0,a.jsx)(n.code,{children:"English"})," as the target language)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'import os  \nimport translation_agent as ta  \n    \nif __name__ == "__main__":\n    source_lang, target_lang, country = "Chinese", "English", "Britain"\n    \n    relative_path = "sample-texts/forbiddencity.txt"\n    script_dir = os.path.dirname(os.path.abspath(__file__))\n    \n    full_path = os.path.join(script_dir, relative_path)\n    \n    with open(full_path, encoding="utf-8") as file:\n        source_text = file.read()\n    \n    print(f"Source text:\\n\\n{source_text}\\n------------\\n")\n    \n    translation = ta.translate(\n            source_lang=source_lang,\n            target_lang=target_lang,\n            source_text=source_text,\n            country=country,\n            model="gemma-2-27b-it-Q5_K_M",\n    )\n    \n    print(f"Translation:\\n\\n{translation}")\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Then, you can find a ",(0,a.jsx)(n.code,{children:"examples/sample-texts"})," folder in your cloned repo. Put your file you want to translate in this folder and get its path. Here because we named our source text ",(0,a.jsx)(n.code,{children:"forbiddencity.txt"}),", the relative path to the document would be ",(0,a.jsx)(n.code,{children:"sample-texts/forbiddencity.txt"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Run the below commands to have your text file translated into English."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"cd examples    \npython example_script.py\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can find the translated result in English ",(0,a.jsx)(n.a,{href:"https://hackmd.io/tdLiVR3TSc-8eVg_E-j9QA?view#English-Translation-by-gemma-2-27b",children:"here"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"demo-3-running-translation-agents-with-phi-3-medium-long-context-model",children:"Demo 3: Running Translation Agents with Phi-3-Medium long context model"}),"\n",(0,a.jsx)(n.p,{children:"The Llama-3 and Gemma-2 models are great LLMs, but they have relatively small context windows. The agent requires all text to fit into the LLM context window, and that limits the size of articles they can translate. To fix this problem, we could select an open source LLM with a large context window. For this demo, we choose Microsoft's Phi-3-medium-128k model, which has a massive 128k (over 100 thousand words or the length of several books) context window."}),"\n",(0,a.jsxs)(n.p,{children:["We run ",(0,a.jsx)(n.a,{href:"https://hackmd.io/vuFYZTVsQZyKmkeQ3ThZQw?view#Source-text",children:"a lengthy Chinese article on Forbidden City's collaboration with the Varsaille Palace"})," through our Translation Agent powered by a Phi-3-medium-128k model we start locally."]}),"\n",(0,a.jsx)(n.h3,{id:"step-31-run-a-phi-3-medium-128k-gaianet-node",children:"Step 3.1: Run a Phi-3-medium-128k GaiaNet node"}),"\n",(0,a.jsx)(n.p,{children:"Configure and download the model."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"gaianet init --config https://raw.githubusercontent.com/GaiaNet-AI/node-configs/main/phi-3-medium-instruct-128k/config_full.json\n"})}),"\n",(0,a.jsx)(n.p,{children:"Next, use the following command to start the GaiaNet node with a 128k context window."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"gaianet start\n"})}),"\n",(0,a.jsx)(n.h3,{id:"step-32-clone-and-run-the-translation-agent-on-top-of-phi-3-medium-128k",children:"Step 3.2 Clone and run the Translation Agent on top of Phi-3-medium-128k"}),"\n",(0,a.jsxs)(n.p,{children:["Find the ",(0,a.jsx)(n.code,{children:"examples/example_script.py"})," file in your cloned agent repo and review its code. It tells the agent where to find your document and how to translate it. Change the model name to the one you are using, here we\u2019re using ",(0,a.jsx)(n.code,{children:"Phi-3-medium-128k-instruct-Q5_K_M"})," model; also change the source and target languages you want (here we put ",(0,a.jsx)(n.code,{children:"Chinese"})," as the source language and ",(0,a.jsx)(n.code,{children:"English"})," as the target language)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'import os  \nimport translation_agent as ta  \n    \nif __name__ == "__main__":\n    source_lang, target_lang, country = "Chinese", "English", "Britain"\n    \n    relative_path = "sample-texts/long_article.txt"\n    script_dir = os.path.dirname(os.path.abspath(__file__))\n    \n    full_path = os.path.join(script_dir, relative_path)\n    \n    with open(full_path, encoding="utf-8") as file:\n        source_text = file.read()\n    \n    print(f"Source text:\\n\\n{source_text}\\n------------\\n")\n    \n    translation = ta.translate(\n            source_lang=source_lang,\n            target_lang=target_lang,\n            source_text=source_text,\n            country=country,\n            model="Phi-3-medium-128k-instruct-Q5_K_M",\n    )\n    \n    print(f"Translation:\\n\\n{translation}")\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Then, you can find a ",(0,a.jsx)(n.code,{children:"examples/sample-texts"})," folder in your cloned repo. Put your file you want to translate in this folder and get its path. Here because we named our source text ",(0,a.jsx)(n.code,{children:"long_article.txt"}),", the relative path to the document would be ",(0,a.jsx)(n.code,{children:"sample-texts/long_article.txt"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"cd examples\npython example_script.py\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://hackmd.io/vuFYZTVsQZyKmkeQ3ThZQw?view#Source-text",children:"The translated results were impressive,"})," with the translation capturing the nuances and context of the original text with high fidelity."]}),"\n",(0,a.jsx)(n.h2,{id:"evaluation-of-translation-quality",children:"Evaluation of Translation Quality"}),"\n",(0,a.jsx)(n.p,{children:"The three models, Llama-3-8B, gemma-2-27b, and Phi-3-medium, have exhibited varying levels of performance in translating complex historical and cultural content from Chinese to English."}),"\n",(0,a.jsx)(n.p,{children:"Llama-3-8B provides a translation that effectively captures the factual content but shows occasional stiffness in language, possibly indicating a direct translation approach that doesn't fully adapt idiomatic expressions. It does not keep section title and the format of the original text and left certain part untranslated."}),"\n",(0,a.jsx)(n.p,{children:"In contrast, The translation by gemma-2-27b is quite accurate and retains the original meaning of the short intro article of Forbidden city. gemma-2-27b's translation exhibits a smooth and natural English flow, suggesting a sophisticated understanding of both the source language and the target language\u2019s grammatical structures. The choice of words and sentence structures in gemma-2-27b's output demonstrates a high degree of linguistic finesse, suggesting it might be well-suited for translating formal and historically nuanced texts."}),"\n",(0,a.jsx)(n.p,{children:'The Phi-3-medium-128k model can translate book-length text from Chinese to English. It demonstrates robust capabilities in handling large volumes of complex content, suggesting advanced memory handling and contextual awareness. The quality of translation remains consistent even with increased text length, indicating Phi\'s utility in projects requiring extensive, detailed translations. But you can see it makes certain mistakes like mistaken "Wenhua Hall" as "also known as Forbidden City" in the first paragraph.'}),"\n",(0,a.jsx)(n.p,{children:"Overall, each model has its strengths, with gemma-2-27b standing out for linguistic finesse and Phi-3-medium-128k for handling lengthy texts."}),"\n",(0,a.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/GaiaNet-AI",children:"GaiaNet"})," provides an easy way to select and use different open-source LLMs in your agentic applications to fully take advantage of their finetuned capabilities for specific tasks."]}),"\n",(0,a.jsxs)(n.p,{children:["Once you have a local GaiaNet node up and running, you could share it with others and make $$$ by joining the ",(0,a.jsx)(n.a,{href:"https://www.gaianet.ai/",children:"GaiaNet network"}),"!"]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var a=t(6540);const i={},o=a.createContext(i);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);