import{j as l}from"./react-CAOzMBF_.js";import{C as t,H as r}from"./styled-components-DCFsnh-i.js";import{b as i}from"./utils-EIxGvR70.js";const e=u=>typeof u=="number"?`${u}px`:u,g=r.div`
  --page-layout-padding-top: ${({$paddingTop:u})=>u!==void 0?e(u):"var(--global-header-height, 72px)"};
  --page-layout-padding-inline: 24px;
  --page-layout-padding-bottom: ${({$paddingBottom:u})=>u!==void 0?e(u):"24px"};

  ${({$paddingBottom:u})=>u===void 0&&i.up("l")("--page-layout-padding-bottom: 32px;")}

  ${i.up("l")`
    --page-layout-padding-inline: 32px;
  `}

  display: flex;
  max-width: 1920px;
  margin-inline: auto;
  padding-top: var(--page-layout-padding-top);
  padding-inline: var(--page-layout-padding-inline);
  padding-bottom: var(--page-layout-padding-bottom);
  box-sizing: border-box;

  ${({$minHeight:u})=>{if(u!==void 0){const a=e(u);return a==="0px"||a==="0"||a==="auto"?"":t`
            min-height: ${a};
          `}return t`
      min-height: 100dvh;
    `}}
`,o=({paddingTop:u,paddingBottom:a,minHeight:p,children:d,className:n})=>l.jsx(g,{$paddingTop:u,$paddingBottom:a,$minHeight:p,className:n,children:d});try{o.displayName="PageLayout",o.__docgenInfo={description:"",displayName:"PageLayout",props:{paddingTop:{defaultValue:null,description:"Верхний отступ. По умолчанию var(--global-header-height, 72px). 0 — для шапки микрофронта",name:"paddingTop",required:!1,type:{name:"CSSValue"}},paddingBottom:{defaultValue:null,description:"Нижний отступ. По умолчанию адаптивный (24px / 32px). 0 — для шапки микрофронта",name:"paddingBottom",required:!1,type:{name:"CSSValue"}},minHeight:{defaultValue:null,description:"Минимальная высота. По умолчанию 100dvh. 0 или 'auto' — для шапки микрофронта",name:"minHeight",required:!1,type:{name:"CSSValue"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{o as P};
