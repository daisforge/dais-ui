import{_ as s}from"./preload-helper-j-yXN3k7.js";const{global:_}=__STORYBOOK_MODULE_GLOBAL__;var a=Object.entries(_.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),l={docs:{renderer:async()=>{let{DocsRenderer:e}=await s(()=>import("./DocsRenderer-K4EAMTCU-DHMCqAzg.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]));return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>a[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{l as parameters};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DocsRenderer-K4EAMTCU-DHMCqAzg.js","assets/preload-helper-j-yXN3k7.js","assets/react-UEdzNlUe.js","assets/_commonjsHelpers-BosuxZz1.js","assets/react-18-BVB1KRpJ.js","assets/vendor-DnY5x8t2.js","assets/tslib-DoU9Jm1N.js","assets/_commonjs-dynamic-modules-TDtrdbi3.js","assets/react-is-CJ4CjPIR.js","assets/styled-components-C2sulCCv.js","assets/@tanstack/react-virtual-BA3RmMS7.js","assets/vendor-CwzC1fIw.css","assets/WithTooltip-KJL26V4Q-Cluo7wsc.js","assets/index-Cu4lwwaE.js","assets/index-BS0iAW2I.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
