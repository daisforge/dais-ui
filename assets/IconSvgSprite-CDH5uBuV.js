import{j as s}from"./react-DYHuXpTF.js";import{q as t}from"./styled-components-D3uL8AgQ.js";const i={xs:{scale:1,size:16},s:{scale:1.5,size:24},m:{scale:2.25,size:36}},l=t.div`
  display: inline-flex;
  width: var(--icon-size);
  height: var(--icon-size);
  flex: 0 0 var(--icon-size);
`,o=({iconUrl:r,size:e="s",color:a,style:c,className:n})=>s.jsx(l,{"aria-hidden":!0,style:{"--icon-size":`${i[e].scale}rem`,...c},className:n||"",children:s.jsx("svg",{width:"100%",viewBox:`0 0 ${i[e].size} ${i[e].size}`,fill:"none",xmlns:"http://www.w3.org/2000/svg",color:a||"var(--plasma-colors-primary)",children:s.jsx("use",{xlinkHref:r.replace(/\{size\}/g,e)})})});try{o.displayName="IconSvgSprite",o.__docgenInfo={description:"",displayName:"IconSvgSprite",props:{}}}catch{}export{o as I};
