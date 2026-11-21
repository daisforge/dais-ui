import{r as i,b as s}from"./react-UEdzNlUe.js";import{T as w}from"./Typography-D6ms_BcN.js";import{q as x}from"./styled-components-C6Uw7ovB.js";import{m as y}from"./@salutejs/sdds-finai-mlEHigyJ.js";const k=x.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  min-width: 0;
`,C=x.div`
  width: 100%;
  overflow: hidden;

  &[data-collapsed='true']:not([data-animating]) > :first-child {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${({$collapsedLines:u})=>u};
    overflow: hidden;
  }
`,f=typeof window>"u"?i.useEffect:i.useLayoutEffect;function g({children:u,collapsedLines:d=4}){const a=Number.isFinite(d)?Math.max(1,Math.floor(d)):4,l=i.useRef(null),p=i.useRef(null),c=i.useRef(),[r,h]=i.useState(!1),[v,b]=i.useState(!1);f(()=>{const e=p.current;if(!e)return;const t=()=>{const o=parseFloat(getComputedStyle(e).lineHeight);b(e.scrollHeight>o*a+1)};t();const n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[u,a]),f(()=>{const e=l.current,t=c.current;if(c.current=void 0,!e||t===void 0||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const n=e.getBoundingClientRect().height;if(t===n||typeof e.animate!="function")return;e.setAttribute("data-animating","");const o=e.animate([{height:`${t}px`},{height:`${n}px`}],{duration:300,easing:"ease-in-out"});return o.onfinish=()=>e.removeAttribute("data-animating"),()=>{o.onfinish=null,o.cancel(),e.removeAttribute("data-animating")}},[r,a,u]);const m=()=>{var e;c.current=(e=l.current)==null?void 0:e.getBoundingClientRect().height,h(t=>!t)};return s.jsxDEV(k,{children:[s.jsxDEV(C,{ref:l,$collapsedLines:a,"data-collapsed":!r,children:s.jsxDEV(w,{variant:"BodyM",refTypography:p,children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TextCollapsing/TextCollapsing.tsx",lineNumber:92,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TextCollapsing/TextCollapsing.tsx",lineNumber:87,columnNumber:7},this),v&&s.jsxDEV(y,{role:"button",size:"s",view:"accent","aria-expanded":r,onClick:m,onKeyDown:e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.repeat||m())},children:r?"Свернуть":"Показать полностью"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TextCollapsing/TextCollapsing.tsx",lineNumber:97,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TextCollapsing/TextCollapsing.tsx",lineNumber:86,columnNumber:5},this)}try{g.displayName="TextCollapsing",g.__docgenInfo={description:"",displayName:"TextCollapsing",props:{children:{defaultValue:null,description:"Текст или строчная разметка.",name:"children",required:!0,type:{name:"ReactNode"}},collapsedLines:{defaultValue:{value:"4"},description:"Число видимых строк в свёрнутом виде. Передавайте целое число от 1.",name:"collapsedLines",required:!1,type:{name:"number"}}}}}catch{}export{g as T};
