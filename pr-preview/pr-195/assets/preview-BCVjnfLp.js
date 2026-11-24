import{_ as s}from"./preload-helper-Bxleko46.js";const{global:_}=__STORYBOOK_MODULE_GLOBAL__;var a=Object.entries(_.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),l={docs:{renderer:async()=>{let{DocsRenderer:e}=await s(()=>import("./DocsRenderer-K4EAMTCU-DKZzfTi8.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]));return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>a[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{l as parameters};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DocsRenderer-K4EAMTCU-DKZzfTi8.js","assets/preload-helper-Bxleko46.js","assets/react-UEdzNlUe.js","assets/_commonjsHelpers-BosuxZz1.js","assets/react-18-B8EscNkW.js","assets/vendor-D2r4jgZf.js","assets/tslib-DoU9Jm1N.js","assets/_commonjs-dynamic-modules-TDtrdbi3.js","assets/react-is-CJ4CjPIR.js","assets/styled-components-C6Uw7ovB.js","assets/@tanstack/react-virtual-CK8aghAq.js","assets/vendor-CwzC1fIw.css","assets/WithTooltip-KJL26V4Q-BPvjFL52.js","assets/index-Cu4lwwaE.js","assets/index-Bo2kqA7A.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
