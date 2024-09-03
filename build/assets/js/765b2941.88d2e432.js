"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7659],{4157:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var s=t(4848),i=t(8453);const r={sidebar_position:4},d="API Reference",o={id:"user-guide/api-reference",title:"API Reference",description:"Introduction",source:"@site/docs/user-guide/api-reference.md",sourceDirName:"user-guide",slug:"/user-guide/api-reference",permalink:"/user-guide/api-reference",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guide/api-reference.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"LlamaTutor",permalink:"/user-guide/apps/llamatutor"},next:{title:"Node Operator Guide",permalink:"/category/node-operator-guide"}},c={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Chat",id:"chat",level:3},{value:"Non-streaming",id:"non-streaming",level:4},{value:"streaming",id:"streaming",level:4},{value:"Request body",id:"request-body",level:4},{value:"Response body",id:"response-body",level:4},{value:"Embedding",id:"embedding",level:3},{value:"Retrieve",id:"retrieve",level:3},{value:"Get the model",id:"get-the-model",level:3},{value:"Get the node info",id:"get-the-node-info",level:3},{value:"Status Codes",id:"status-codes",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"api-reference",children:"API Reference"}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"Each GaiaNet node is an OpenAI compatibale API server. You can build your application based on the GaiaNet node API. You\ncan also replace OpenAI API configuration with the GaiaNet node API in other AI agent frameworks."}),"\n",(0,s.jsxs)(n.p,{children:["The base URL to send all API requests is ",(0,s.jsx)(n.code,{children:"https://node_id.gaianet.network/v1"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,s.jsx)(n.h3,{id:"chat",children:"Chat"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"chat/completions"})," endpoint returns an LLM response based on the system prompt and user query."]}),"\n",(0,s.jsx)(n.h4,{id:"non-streaming",children:"Non-streaming"}),"\n",(0,s.jsx)(n.p,{children:"By default, the API responds with a full answer in the HTTP response."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Request"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'curl -X POST https://node_id.gaianet.network/v1/chat/completions \\\n  -H \'accept:application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{"messages":[{"role":"system", "content": "You are a helpful assistant."}, {"role":"user", "content": "What is the capital of France?"}], "model": "model_name"}\'\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Response:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{"id":"chatcmpl-bcfeebe0-5372-42c0-ac92-0615213e1c97","object":"chat.completion","created":1716380086,"model":"Llama-3-8B-Instruct-262k-Q5_K_M","choices":[{"index":0,"message":{"role":"assistant","content":"Paris."},"finish_reason":"stop"}],"usage":{"prompt_tokens":61,"completion_tokens":4,"total_tokens":65}}%  \n'})}),"\n",(0,s.jsx)(n.h4,{id:"streaming",children:"streaming"}),"\n",(0,s.jsxs)(n.p,{children:["Add ",(0,s.jsx)(n.code,{children:'"stream":true'})," in your request to make the API send back partial responses as the LLM generates its answer."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Request:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'curl -X POST https://node_id.gaianet.network/v1/chat/completions \\\n  -H \'accept:application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{"messages":[{"role":"system", "content": "You are a helpful assistant."}, {"role":"user", "content": "What is the capital of France?"}], "model": "model_name", "stream":true}\'\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Response:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'data: {"id":"chatcmpl-73a1f57d-185e-42c2-b8a6-ba0bae58f3b4","choices":[{"index":0,"delta":{"role":"assistant","content":"I"},"logprobs":null,"finish_reason":null}],"created":1716381054,"model":"Llama-3-8B-Instruct-262k-Q5_K_M","system_fingerprint":"fp_44709d6fcb","object":"chat.completion.chunk"}\n\ndata: {"id":"chatcmpl-73a1f57d-185e-42c2-b8a6-ba0bae58f3b4","choices":[{"index":0,"delta":{"role":"assistant","content":" am"},"logprobs":null,"finish_reason":null}],"created":1716381054,"model":"Llama-3-8B-Instruct-262k-Q5_K_M","system_fingerprint":"fp_44709d6fcb","object":"chat.completion.chunk"}\n\ndata: {"id":"chatcmpl-73a1f57d-185e-42c2-b8a6-ba0bae58f3b4","choices":[{"index":0,"delta":{"role":"assistant","content":" a"},"logprobs":null,"finish_reason":null}],"created":1716381054,"model":"Llama-3-8B-Instruct-262k-Q5_K_M","system_fingerprint":"fp_44709d6fcb","object":"chat.completion.chunk"}\n\n...\n\ndata: {"id":"chatcmpl-73a1f57d-185e-42c2-b8a6-ba0bae58f3b4","choices":[{"index":0,"delta":{"role":"assistant","content":" an"},"logprobs":null,"finish_reason":null}],"created":1716381055,"model":"Llama-3-8B-Instruct-262k-Q5_K_M","system_fingerprint":"fp_44709d6fcb","object":"chat.completion.chunk"}\n\ndata: {"id":"chatcmpl-73a1f57d-185e-42c2-b8a6-ba0bae58f3b4","choices":[{"index":0,"delta":{"role":"assistant","content":" AI"},"logprobs":null,"finish_reason":null}],"created":1716381055,"model":"Llama-3-8B-Instruct-262k-Q5_K_M","system_fingerprint":"fp_44709d6fcb","object":"chat.completion.chunk"}\n\ndata: {"id":"chatcmpl-73a1f57d-185e-42c2-b8a6-ba0bae58f3b4","choices":[{"index":0,"delta":{"role":"assistant","content":"."},"logprobs":null,"finish_reason":null}],"created":1716381055,"model":"Llama-3-8B-Instruct-262k-Q5_K_M","system_fingerprint":"fp_44709d6fcb","object":"chat.completion.chunk"}\n\ndata: [DONE]\n'})}),"\n",(0,s.jsx)(n.h4,{id:"request-body",children:"Request body"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Example"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"messages"}),(0,s.jsx)(n.td,{children:"List"}),(0,s.jsx)(n.td,{children:"Required"}),(0,s.jsxs)(n.td,{children:["A list of messages for the conversation.",(0,s.jsx)("br",{}),"1 . System message (depends on the large language mode you use) ",(0,s.jsx)("br",{}),"* ",(0,s.jsx)(n.code,{children:"content"})," of the system messages is required ",(0,s.jsx)("br",{})," * ",(0,s.jsx)(n.code,{children:'"role":"system"'})," is required",(0,s.jsx)("br",{})," 2. User message (required) ",(0,s.jsx)("br",{})," * ",(0,s.jsx)(n.code,{children:"content"})," is required. ",(0,s.jsx)("br",{})," * ",(0,s.jsx)(n.code,{children:'"role":"user"'})," is required"]}),(0,s.jsx)(n.td,{children:"N/A"}),(0,s.jsxs)(n.td,{children:['"messages": ["role": "system","content": "You are a helpful assistant."},{"role": "user",',(0,s.jsx)("br",{}),'"content": "Hello!"}]']})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"model"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Required"}),(0,s.jsx)(n.td,{children:"The chat model you used"}),(0,s.jsx)(n.td,{children:"N/A"}),(0,s.jsx)(n.td,{children:"Llama-3-8B-262k-Q5_K_M"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"top_p"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Optional"}),(0,s.jsx)(n.td,{children:"An alternative to sampling with temperature. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic."}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Number between 0 and 1."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Temperature"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Optional"}),(0,s.jsx)(n.td,{children:"Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic."}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Number between 0 and 2."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"presence_penalty"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Optional"}),(0,s.jsx)(n.td,{children:"Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics."}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Number between -2.0 and 2.0."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"stream"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"Optional"}),(0,s.jsx)(n.td,{children:"Make the answer streaming output"}),(0,s.jsx)(n.td,{children:"FALSE"}),(0,s.jsxs)(n.td,{children:['"stream"',":true"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"frequency_penalty"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Optional"}),(0,s.jsx)(n.td,{children:"Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood of repeating the same line verbatim."}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Number between -2.0 and 2.0."})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"response-body",children:"Response body"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Streaming or non-streaming"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Example"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"id"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Both"}),(0,s.jsx)(n.td,{children:"A unique identifier for the chat completion."}),(0,s.jsx)(n.td,{children:"Generated randomly"}),(0,s.jsx)(n.td,{children:"chatcmpl-73a1f57d-185e-42c2-b8a6-ba0bae58f3b4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Both"}),(0,s.jsx)(n.td,{children:"The object type"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"chat.completion.chunk"})," in the streaming mode.",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.code,{children:"chat.completion"})," in the non-streaming mode."]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"chat.completion.chunk"})," in the streaming mode.",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.code,{children:"chat.completion"})," in the non-streaming mode."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"choices"}),(0,s.jsx)(n.td,{children:"array"}),(0,s.jsx)(n.td,{children:"Both"}),(0,s.jsx)(n.td,{children:"A list of chat completion choices."}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:'"choices":[{"index":0,"message":{"role":"assistant","content":"Paris."},"finish_reason":"stop"}]'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"created"}),(0,s.jsx)(n.td,{children:"integer"}),(0,s.jsx)(n.td,{children:"Both"}),(0,s.jsx)(n.td,{children:"The Unix timestamp (in seconds) of when the chat completion was created."}),(0,s.jsx)(n.td,{children:"N/A"}),(0,s.jsx)(n.td,{children:"1716380086"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"model"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Both"}),(0,s.jsx)(n.td,{children:"The model used for the chat completion."}),(0,s.jsx)(n.td,{children:"Depends on the model you use."}),(0,s.jsx)(n.td,{children:"Llama-3-8B-Instruct-Q5_K_M"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"usage"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"Both"}),(0,s.jsx)(n.td,{children:"Usage statistics for the completion request, including completion_tokens, prompt_tokens, and total_tokens."}),(0,s.jsx)(n.td,{children:"N/A"}),(0,s.jsx)(n.td,{children:'"usage":{"prompt_tokens":61,"completion_tokens":4,"total_tokens":65}'})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"embedding",children:"Embedding"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"embeddings"})," endpoint computes embeddings for user queries or file chunks."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Request"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'curl -X POST https://node_id.gaianet.network/v1/embeddings \\\n    -H \'accept:application/json\' \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{"model": "nomic-embed-text-v1.5.f16", "input":["Paris, city and capital of France, ..., for Paris has retained its importance as a centre for education and intellectual pursuits.", "Paris\u2019s site at a crossroads ..., drawing to itself much of the talent and vitality of the provinces."]}\'\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Response:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "object": "list",\n    "data": [\n        {\n            "index": 0,\n            "object": "embedding",\n            "embedding": [\n                0.1428378969,\n                -0.0447309874,\n                0.007660218049,\n                ...\n                -0.0128974719,\n                -0.03543198109,\n                0.03974733502,\n                0.00946635101,\n                -0.01531364303\n            ]\n        },\n        {\n            "index": 1,\n            "object": "embedding",\n            "embedding": [\n                0.0697753951,\n                -0.0001159032545,\n                0.02073983476,\n                ...\n                0.03565846011,\n                -0.04550019652,\n                0.02691745944,\n                0.02498772368,\n                -0.003226313973\n            ]\n        }\n    ],\n    "model": "nomic-embed-text-v1.5.f16",\n    "usage": {\n        "prompt_tokens": 491,\n        "completion_tokens": 0,\n        "total_tokens": 491\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"retrieve",children:"Retrieve"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"retrieve"})," endpoint can retrieve text from the node's vector collection based on the user's query."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Request:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'curl -X POST https://node_id.gaianet.network/v1/retrieve \\\n    -H \'accept:application/json\' \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{"messages":[{"role":"system", "content": "You are a helpful assistant."}, {"role":"user", "content": "What is the location of Paris?"}], "model":"nomic-embed-text-v1.5.f16"}\'\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Response:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "points": [\n        {\n            "source": "\\"Paris is located in northern central France, in a north-bending arc of the river Seine whose crest includes two islands, the \xcele Saint-Louis and the larger \xcele de la Cit\xe9, which form the oldest part of the city. The river\'s mouth on the English Channel is about 233 mi downstream from the city. The city is spread widely on both banks of the river. Overall, the city is relatively flat, and the lowest point is 35 m above sea level. Paris has several prominent hills, the highest of which is Montmartre at 130 m.\\\\n\\"",\n            "score": 0.74011195\n        },\n        {\n            "source": "\\"The Paris region is the most active water transport area in France, with most of the cargo handled by Ports of Paris in facilities located around Paris. The rivers Loire, Rhine, Rh\xf4ne, Me\\\\n\\"",\n            "score": 0.63990676\n        },\n        {\n            "source": "\\"Paris\\\\nCountry\\\\tFrance\\\\nRegion\\\\n\xcele-de-France\\\\r\\\\nDepartment\\\\nParis\\\\nIntercommunality\\\\nM\xe9tropole du Grand Paris\\\\nSubdivisions\\\\n20 arrondissements\\\\nGovernment\\\\n \u2022 Mayor (2020\u20132026)\\\\tAnne Hidalgo (PS)\\\\r\\\\nArea\\\\n1\\\\t105.4 km2 (40.7 sq mi)\\\\n \u2022 Urban\\\\n (2020)\\\\t2,853.5 km2 (1,101.7 sq mi)\\\\n \u2022 Metro\\\\n (2020)\\\\t18,940.7 km2 (7,313.0 sq mi)\\\\nPopulation\\\\n (2023)\\\\n2,102,650\\\\n \u2022 Rank\\\\t9th in Europe\\\\n1st in France\\\\r\\\\n \u2022 Density\\\\t20,000/km2 (52,000/sq mi)\\\\n \u2022 Urban\\\\n (2019)\\\\n10,858,852\\\\n \u2022 Urban density\\\\t3,800/km2 (9,900/sq mi)\\\\n \u2022 Metro\\\\n (Jan. 2017)\\\\n13,024,518\\\\n \u2022 Metro density\\\\t690/km2 (1,800/sq mi)\\\\nDemonym(s)\\\\nParisian(s) (en) Parisien(s) (masc.), Parisienne(s) (fem.) (fr), Parigot(s) (masc.), \\\\\\"Parigote(s)\\\\\\" (fem.) (fr, colloquial)\\\\nTime zone\\\\nUTC+01:00 (CET)\\\\r\\\\n \u2022 Summer (DST)\\\\nUTC+02:00 (CEST)\\\\r\\\\nINSEE/Postal code\\\\t75056 /75001-75020, 75116\\\\r\\\\nElevation\\\\t28\u2013131 m (92\u2013430 ft)\\\\n(avg. 78 m or 256 ft)\\\\nWebsite\\\\twww.paris.fr\\\\r\\\\n1 French Land Register data, which excludes lakes, ponds, glaciers > 1 km2 (0.386 sq mi or 247 acres) and river estuaries.\\\\n\\"",\n            "score": 0.62259054\n        },\n        {\n            "source": "\\" in Paris\\\\n\\"",\n            "score": 0.6152092\n        },\n        {\n            "source": "\\"The Parisii, a sub-tribe of the Celtic Senones, inhabited the Paris area from around the middle of the 3rd century BC. One of the area\'s major north\u2013south trade routes crossed the Seine on the \xeele de la Cit\xe9, which gradually became an important trading centre. The Parisii traded with many river towns (some as far away as the Iberian Peninsula) and minted their own coins.\\\\n\\"",\n            "score": 0.5720232\n        }\n    ],\n    "limit": 5,\n    "score_threshold": 0.4\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"get-the-model",children:"Get the model"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"models"})," endpoint provides the chat and embedding models available on the node."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Request:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl -X POST https://node_id.gaianet.network/v1/models\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Response:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{"object":"list","data":[{"id":"Llama-3-8B-Instruct-262k-Q5_K_M","created":1716383261,"object":"model","owned_by":"Not specified"},{"id":"nomic-embed-text-v1.5.f16","created":1716383261,"object":"model","owned_by":"Not specified"}]}%   \n'})}),"\n",(0,s.jsx)(n.h3,{id:"get-the-node-info",children:"Get the node info"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"info"})," endpoint provides detailed information about the node."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Request:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl -X POST https://node_id.gaianet.network/v1/info\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Response:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "version": "0.5.0",\n    "plugin_version": "b2694 (commit 0d56246f)",\n    "port": "8080",\n    "models": [\n        {\n            "name": "Llama-2-7b-chat-hf-Q5_K_M",\n            "type": "chat",\n            "prompt_template": "Llama2Chat",\n            "n_predict": 1024,\n            "n_gpu_layers": 100,\n            "ctx_size": 4096,\n            "batch_size": 512,\n            "temperature": 1.0,\n            "top_p": 1.0,\n            "repeat_penalty": 1.1,\n            "presence_penalty": 0.0,\n            "frequency_penalty": 0.0\n        },\n        {\n            "name": "all-MiniLM-L6-v2-ggml-model-f16",\n            "type": "embedding",\n            "prompt_template": "Llama2Chat",\n            "n_predict": 1024,\n            "n_gpu_layers": 100,\n            "ctx_size": 384,\n            "batch_size": 512,\n            "temperature": 1.0,\n            "top_p": 1.0,\n            "repeat_penalty": 1.1,\n            "presence_penalty": 0.0,\n            "frequency_penalty": 0.0\n        }\n    ],\n    "qdrant_config": {\n        "url": "http://localhost:6333",\n        "collection_name": "default",\n        "limit": 5,\n        "score_threshold": 0.4\n    }\n} \n'})}),"\n",(0,s.jsx)(n.h2,{id:"status-codes",children:"Status Codes"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"HTTP response code"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Reason"}),(0,s.jsx)(n.th,{children:"Solutions"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Not found"}),(0,s.jsx)(n.td,{children:"The endpoint URL is invalid"}),(0,s.jsx)(n.td,{children:"Please check the endpoint URL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"500"}),(0,s.jsx)(n.td,{children:"Internal Server Error"}),(0,s.jsx)(n.td,{children:"Model is not found."}),(0,s.jsx)(n.td,{children:"Please check out the model name."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"400"}),(0,s.jsx)(n.td,{children:"Bad request"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var s=t(6540);const i={},r=s.createContext(i);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);