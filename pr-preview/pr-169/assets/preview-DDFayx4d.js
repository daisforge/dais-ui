import{_ as s}from"./preload-helper-Bmf6XQY_.js";const{global:_}=__STORYBOOK_MODULE_GLOBAL__;var a=Object.entries(_.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),l={docs:{renderer:async()=>{let{DocsRenderer:e}=await s(()=>import("./DocsRenderer-K4EAMTCU-DClF5bnl.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>a[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{l as parameters};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DocsRenderer-K4EAMTCU-DClF5bnl.js","assets/preload-helper-Bmf6XQY_.js","assets/react-B60MRyL7.js","assets/_commonjsHelpers-BosuxZz1.js","assets/react-18-DXpOGUOK.js","assets/vendor-ABAm7dM9.js","assets/tslib-DoU9Jm1N.js","assets/_commonjs-dynamic-modules-TDtrdbi3.js","assets/react-is-Clcustum.js","assets/styled-components-JDoewyqD.js","assets/@tanstack/react-virtual-aXadwhme.js","assets/vendor-CwzC1fIw.css","assets/WithTooltip-KJL26V4Q-DVjM17Xc.js","assets/index-Cu4lwwaE.js","assets/index-OE46t0bk.js","assets/@salutejs/plasma-icons-BjqIpdkS.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
