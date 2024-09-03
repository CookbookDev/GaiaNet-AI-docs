"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5307],{1034:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var o=t(4848),s=t(8453);const a={sidebar_position:4},i="Knowledge base from a markdown file",d={id:"creator-guide/knowledge/markdown",title:"Knowledge base from a markdown file",description:"In this section, we will discuss how to create a vector collection snapshot from a markdown file. The",source:"@site/docs/creator-guide/knowledge/markdown.md",sourceDirName:"creator-guide/knowledge",slug:"/creator-guide/knowledge/markdown",permalink:"/creator-guide/knowledge/markdown",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/creator-guide/knowledge/markdown.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Knowledge base from a plain text file",permalink:"/creator-guide/knowledge/text"},next:{title:"Knowledge base from source / summary pairs",permalink:"/creator-guide/knowledge/csv"}},r={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Start a vector database",id:"start-a-vector-database",level:2},{value:"Create the vector collection snapshot",id:"create-the-vector-collection-snapshot",level:2},{value:"Options",id:"options",level:3},{value:"Create a vector snapshot",id:"create-a-vector-snapshot",level:2},{value:"Next steps",id:"next-steps",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"knowledge-base-from-a-markdown-file",children:"Knowledge base from a markdown file"}),"\n",(0,o.jsxs)(n.p,{children:["In this section, we will discuss how to create a vector collection snapshot from a markdown file. The\nsnapshot file can then be ",(0,o.jsx)(n.a,{href:"../../node-guide/customize#select-a-knowledge-base",children:"loaded by a Gaia node as its knowledge base"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The markdown file is segmented into multiple sections by headings. ",(0,o.jsx)(n.a,{href:"https://huggingface.co/datasets/gaianet/paris/raw/main/paris.md",children:"See an example"}),". Each section is turned into a vector, and when\nretrieved, added to the prompt context for the LLM."]}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(n.p,{children:"Install the WasmEdge Runtime, the cross-platform LLM runtime."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install_v2.sh | bash -s\n"})}),"\n",(0,o.jsx)(n.p,{children:"Download an embedding model."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"curl -LO https://huggingface.co/gaianet/Nomic-embed-text-v1.5-Embedding-GGUF/resolve/main/nomic-embed-text-v1.5.f16.gguf\n"})}),"\n",(0,o.jsx)(n.p,{children:"The embedding model is a special kind of LLM that turns sentences into vectors. The vectors can then be stored in a vector database and searched later. When the sentences are from a body of text that represents a knowledge domain, that vector database becomes our RAG knowledge base."}),"\n",(0,o.jsx)(n.h2,{id:"start-a-vector-database",children:"Start a vector database"}),"\n",(0,o.jsxs)(n.p,{children:["By default, we use Qdrant as the vector database. You can start a Qdrant instance\nby ",(0,o.jsx)(n.a,{href:"/node-guide/quick-start",children:"starting a Gaia node with a knowledge snapshot"}),"."]}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsx)(n.p,{children:"Or, you can start a Qdrant server using Docker. The following command starts it in the background."}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"mkdir qdrant_storage\nmkdir qdrant_snapshots\n\nnohup docker run -d -p 6333:6333 -p 6334:6334 \\\n    -v $(pwd)/qdrant_storage:/qdrant/storage:z \\\n    -v $(pwd)/qdrant_snapshots:/qdrant/snapshots:z \\\n    qdrant/qdrant\n"})})]}),"\n",(0,o.jsx)(n.h2,{id:"create-the-vector-collection-snapshot",children:"Create the vector collection snapshot"}),"\n",(0,o.jsx)(n.p,{children:"Delete the default collection if it exists."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"curl -X DELETE 'http://localhost:6333/collections/default'\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Create a new collection called default. Notice that it is 768 dimensions. That is the output vector size of the embedding model ",(0,o.jsx)(n.code,{children:"nomic-embed-text-v1.5"}),". If you are using a different embedding model, you should use a dimension that fits the model."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'curl -X PUT \'http://localhost:6333/collections/default\' \\\n  -H \'Content-Type: application/json\' \\\n  --data-raw \'{\n    "vectors": {\n      "size": 768,\n      "distance": "Cosine",\n      "on_disk": true\n    }\n  }\'\n'})}),"\n",(0,o.jsx)(n.p,{children:"Download a program to segment the markdown document and create embeddings."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"curl -LO https://github.com/GaiaNet-AI/embedding-tools/raw/main/markdown_embed/markdown_embed.wasm\n"})}),"\n",(0,o.jsxs)(n.p,{children:["It chunks the document based on markdown sections. You can check out the ",(0,o.jsx)(n.a,{href:"https://github.com/GaiaNet-AI/embedding-tools/tree/main/markdown_embed",children:"Rust source code"})," here and modify it if you need to use a different chunking strategy."]}),"\n",(0,o.jsxs)(n.p,{children:["Next, you can run the program by passing a collection name, vector dimension, and the source document. You can pass in the desired markdown heading level for chunking using the ",(0,o.jsx)(n.code,{children:"--heading_level"})," option. The ",(0,o.jsx)(n.code,{children:"--ctx_size"})," option matches the embedding model's context window size, which in this case is 8192 tokens allowing it to process long sections of text. Make sure that Qdrant is running on your local machine. The model is preloaded under the name embedding. The wasm app then uses the embedding model to create the 768-dimension vectors from ",(0,o.jsx)(n.code,{children:"paris.md"})," and saves them into the default collection."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"curl -LO https://huggingface.co/datasets/gaianet/paris/raw/main/paris.md\n\nwasmedge --dir .:. \\\n  --nn-preload embedding:GGML:AUTO:nomic-embed-text-v1.5.f16.gguf \\\n  markdown_embed.wasm embedding default 768 paris.md --heading_level 1 --ctx_size 8192\n"})}),"\n",(0,o.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,o.jsx)(n.p,{children:"You can pass the following options to the program."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Using ",(0,o.jsx)(n.code,{children:"-c"})," or ",(0,o.jsx)(n.code,{children:"--ctx_size"})," to specify the context size of the input. This defaults to 512."]}),"\n",(0,o.jsxs)(n.li,{children:["Using ",(0,o.jsx)(n.code,{children:"-l"})," or ",(0,o.jsx)(n.code,{children:"--heading_level"})," to specify the markdown heading level for each vector. This defaults to 1."]}),"\n",(0,o.jsxs)(n.li,{children:["Using ",(0,o.jsx)(n.code,{children:"-m"})," or ",(0,o.jsx)(n.code,{children:"--maximum_context_length"})," to specify a context length in the CLI argument. That is to truncate and warn for each text segment that goes above the context length."]}),"\n",(0,o.jsxs)(n.li,{children:["Using ",(0,o.jsx)(n.code,{children:"-s"})," or ",(0,o.jsx)(n.code,{children:"--start_vector_id"})," to specify the start vector ID in the CLI argument. This will allow us to run this app multiple times on multiple documents on the same vector collection."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Example: the above example but to append the London guide to the end of an existing collection starting from index 42."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"wasmedge --dir .:. \\\n  --nn-preload embedding:GGML:AUTO:nomic-embed-text-v1.5.f16.gguf \\\n   markdown_embed.wasm embedding default 768 london.md -c 8192 -l 1 -s 42\n"})}),"\n",(0,o.jsx)(n.h2,{id:"create-a-vector-snapshot",children:"Create a vector snapshot"}),"\n",(0,o.jsxs)(n.p,{children:["You can create a snapshot of the collection, which can be shared and loaded into a different Qdrant database. You can find the snapshot file in the ",(0,o.jsx)(n.code,{children:"qdrant_snapshots"})," directory, or the ",(0,o.jsx)(n.code,{children:"~/gaianet/qdrant/snapshots"})," directory in the Gaia node."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"curl -X POST 'http://localhost:6333/collections/default/snapshots'\n"})}),"\n",(0,o.jsx)(n.p,{children:"We also recommend you to compress the snapshot file."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"tar czvf my.snapshot.tar.gz my.snapshot\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Finally, upload the ",(0,o.jsx)(n.code,{children:"my.snapshot.tar.gz"})," file to Huggingface so that the ",(0,o.jsx)(n.a,{href:"../../node-guide/customize#select-a-knowledge-base",children:"Gaia node can download and use it"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/node-guide/quick-start",children:"Start"})," a new Gaia node"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/node-guide/customize",children:"Customize"})," the Gaia node"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Have fun!"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var o=t(6540);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);