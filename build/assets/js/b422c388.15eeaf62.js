"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1219],{1472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=n(4848),a=n(8453);const o={sidebar_position:3},i="Knowledge base from a plain text file",r={id:"creator-guide/knowledge/text",title:"Knowledge base from a plain text file",description:"In this section, we will discuss how to create a vector collection snapshot from a plain text file. The",source:"@site/docs/creator-guide/knowledge/text.md",sourceDirName:"creator-guide/knowledge",slug:"/creator-guide/knowledge/text",permalink:"/creator-guide/knowledge/text",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/creator-guide/knowledge/text.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Gaia nodes with long-term knowledge",permalink:"/creator-guide/knowledge/concepts"},next:{title:"Knowledge base from a markdown file",permalink:"/creator-guide/knowledge/markdown"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Start a vector database",id:"start-a-vector-database",level:2},{value:"Create the vector collection snapshot",id:"create-the-vector-collection-snapshot",level:2},{value:"Options",id:"options",level:3},{value:"Create a vector snapshot",id:"create-a-vector-snapshot",level:2},{value:"Next steps",id:"next-steps",level:2}];function l(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"knowledge-base-from-a-plain-text-file",children:"Knowledge base from a plain text file"}),"\n",(0,s.jsxs)(t.p,{children:["In this section, we will discuss how to create a vector collection snapshot from a plain text file. The\nsnapshot file can then be ",(0,s.jsx)(t.a,{href:"../../node-guide/customize#select-a-knowledge-base",children:"loaded by a Gaia node as its knowledge base"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The text file is segmented into multiple chunks by blank lines. ",(0,s.jsx)(t.a,{href:"https://huggingface.co/datasets/gaianet/paris/raw/main/paris_chunks.txt",children:"See an example"}),". Each chunk is turned into a vector, and when\nretrieved, added to the prompt context for the LLM."]}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:"Install the WasmEdge Runtime, the cross-platform LLM runtime."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install_v2.sh | bash -s\n"})}),"\n",(0,s.jsx)(t.p,{children:"Download an embedding model."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"curl -LO https://huggingface.co/gaianet/Nomic-embed-text-v1.5-Embedding-GGUF/resolve/main/nomic-embed-text-v1.5.f16.gguf\n"})}),"\n",(0,s.jsx)(t.p,{children:"The embedding model is a special kind of LLM that turns sentences into vectors. The vectors can then be stored in a vector database and searched later. When the sentences are from a body of text that represents a knowledge domain, that vector database becomes our RAG knowledge base."}),"\n",(0,s.jsx)(t.h2,{id:"start-a-vector-database",children:"Start a vector database"}),"\n",(0,s.jsxs)(t.p,{children:["By default, we use Qdrant as the vector database. You can start a Qdrant instance\nby ",(0,s.jsx)(t.a,{href:"/node-guide/quick-start",children:"starting a Gaia node with a knowledge snapshot"}),"."]}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"Or, you can start a Qdrant server using Docker. The following command starts it in the background."}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"mkdir qdrant_storage\nmkdir qdrant_snapshots\n\nnohup docker run -d -p 6333:6333 -p 6334:6334 \\\n    -v $(pwd)/qdrant_storage:/qdrant/storage:z \\\n    -v $(pwd)/qdrant_snapshots:/qdrant/snapshots:z \\\n    qdrant/qdrant\n"})})]}),"\n",(0,s.jsx)(t.h2,{id:"create-the-vector-collection-snapshot",children:"Create the vector collection snapshot"}),"\n",(0,s.jsx)(t.p,{children:"Delete the default collection if it exists."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"curl -X DELETE 'http://localhost:6333/collections/default'\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Create a new collection called default. Notice that it is 768 dimensions. That is the output vector size of the embedding model ",(0,s.jsx)(t.code,{children:"nomic-embed-text-v1.5"}),". If you are using a different embedding model, you should use a dimension that fits the model."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'curl -X PUT \'http://localhost:6333/collections/default\' \\\n  -H \'Content-Type: application/json\' \\\n  --data-raw \'{\n    "vectors": {\n      "size": 768,\n      "distance": "Cosine",\n      "on_disk": true\n    }\n  }\'\n'})}),"\n",(0,s.jsx)(t.p,{children:"Download a program to chunk a document and create embeddings."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"curl -LO https://github.com/GaiaNet-AI/embedding-tools/raw/main/paragraph_embed/paragraph_embed.wasm\n"})}),"\n",(0,s.jsxs)(t.p,{children:["It chunks the document based on empty lines. So, you MUST prepare your source document this way -- segment the document into sections of around 200 words with empty lines. You can check out the ",(0,s.jsx)(t.a,{href:"https://github.com/GaiaNet-AI/embedding-tools/tree/main/paragraph_embed",children:"Rust source code here"})," and modify it if you need to use a different chunking strategy."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"paragraph_embed.wasm"})," program would NOT break up code listings even if there are empty lines with in the listing."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Next, you can run the program by passing a collection name, vector dimension, and the source document. Make sure that Qdrant is running on your local machine. The model is preloaded under the name embedding. The wasm app then uses the embedding model to create the 768-dimension vectors from ",(0,s.jsx)(t.a,{href:"https://huggingface.co/datasets/gaianet/paris/raw/main/paris_chunks.txt",children:"paris_chunks.txt"})," and saves them into the default collection."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"curl -LO https://huggingface.co/datasets/gaianet/paris/raw/main/paris_chunks.txt\n\nwasmedge --dir .:. \\\n  --nn-preload embedding:GGML:AUTO:nomic-embed-text-v1.5.f16.gguf \\\n  paragraph_embed.wasm embedding default 768 paris_chunks.txt -c 8192\n"})}),"\n",(0,s.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,s.jsx)(t.p,{children:"You can pass the following options to the program."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Using ",(0,s.jsx)(t.code,{children:"-m"})," or ",(0,s.jsx)(t.code,{children:"--maximum_context_length"})," to specify a context length in the CLI argument. That is to truncate and warn for each text segment that goes above the context length."]}),"\n",(0,s.jsxs)(t.li,{children:["Using ",(0,s.jsx)(t.code,{children:"-s"})," or ",(0,s.jsx)(t.code,{children:"--start_vector_id"})," to specify the start vector ID in the CLI argument. This will allow us to run this app multiple times on multiple documents on the same vector collection."]}),"\n",(0,s.jsxs)(t.li,{children:["Using ",(0,s.jsx)(t.code,{children:"-c"})," or ",(0,s.jsx)(t.code,{children:"--ctx_size"})," to specify the context size of the input. This defaults to 512."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Example: the above example but to append the London guide to the end of an existing collection starting from index 42."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"wasmedge --dir .:. \\\n  --nn-preload embedding:GGML:AUTO:nomic-embed-text-v1.5.f16.gguf \\\n   paragraph_embed.wasm embedding default 768 london.txt -c 8192 -s 42\n"})}),"\n",(0,s.jsx)(t.h2,{id:"create-a-vector-snapshot",children:"Create a vector snapshot"}),"\n",(0,s.jsxs)(t.p,{children:["You can create a snapshot of the collection, which can be shared and loaded into a different Qdrant database. You can find the snapshot file in the ",(0,s.jsx)(t.code,{children:"qdrant_snapshots"})," directory, or the ",(0,s.jsx)(t.code,{children:"~/gaianet/qdrant/snapshots"})," directory in the Gaia node."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"curl -X POST 'http://localhost:6333/collections/default/snapshots'\n"})}),"\n",(0,s.jsx)(t.p,{children:"We also recommend you to compress the snapshot file."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"tar czvf my.snapshot.tar.gz my.snapshot\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Finally, upload the ",(0,s.jsx)(t.code,{children:"my.snapshot.tar.gz"})," file to Huggingface so that the ",(0,s.jsx)(t.a,{href:"../../node-guide/customize#select-a-knowledge-base",children:"Gaia node can download and use it"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/node-guide/quick-start",children:"Start"})," a new Gaia node"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/node-guide/customize",children:"Customize"})," the Gaia node"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Have fun!"})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var s=n(6540);const a={},o=s.createContext(a);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);