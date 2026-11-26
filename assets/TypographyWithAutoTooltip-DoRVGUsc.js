import{r,j as m}from"./react-DYHuXpTF.js";import{T as j}from"./Typography-DrjV5Wmt.js";import{q}from"./styled-components-BADHLMuD.js";import{g as k}from"./@salutejs/sdds-finai-DJh4O7Qc.js";import{A as Y}from"./utils-Cdl8HW_v.js";const p="typography-with-auto-tooltip-root";let a=!1,u=null,s=0;function P(){if(typeof document>"u")return;const e=document.getElementById(p);e&&e.querySelectorAll("[id^='plasma-popover-root']:empty").forEach(l=>l.remove())}function z(){a||(a=!0,u=setTimeout(()=>{a=!1,u=null,P()},0))}function G(){u&&(clearTimeout(u),u=null),a=!1}function X(){u&&(clearTimeout(u),u=null),a=!1,P()}function J(){if(!(typeof document>"u")){if(s+=1,s===1){const e=document.createElement("div");e.id=p,document.body.appendChild(e)}return()=>{if(s-=1,s===0){const e=document.getElementById(p);e&&(e.querySelectorAll("[id^='plasma-popover-root']").length>0||e.remove())}}}}function y(){return{schedule:z,flush:X,cancel:G,getContainerId:()=>p,createContainer:J}}try{y.displayName="usePopoverCleanup",y.__docgenInfo={description:`Возвращает { schedule, flush, cancel, getContainerId, createContainer } — SingleTone
getContainerId - функция для получения ID контейнера для TypographyWithAutoTooltip
useContainer - хук для создания/управления контейнером через React`,displayName:"usePopoverCleanup",props:{}}}catch{}const h=q(k)`
  &.popover-target {
    width: 100%;
  }
`,T=q.div`
  display: flex;
  align-items: center;
  min-width: 0;

  & .popover-target {
    width: 100%;
  }

  & .popover-wrapper {
    overflow: hidden;
    width: 100%;
    display: flex;
  }
`;try{h.displayName="StyledTooltip",h.__docgenInfo={description:"",displayName:"StyledTooltip",props:{}}}catch{}try{T.displayName="StyleTooltipWrapper",T.__docgenInfo={description:"",displayName:"StyleTooltipWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const K=1,A=({tooltipText:e,tooltipProps:l,lines:c=1,className:S,children:g,...N})=>{const{mouseEnterDelay:_=500,mouseLeaveDelay:v=0,...W}=l||{},d=r.useRef(null),[E,C]=r.useState(!1),f=r.useRef(),{schedule:i,getContainerId:V,createContainer:I}=y(),w=r.useCallback(()=>{if(!d.current)return!1;const t=d.current;if(c>1)return t.scrollHeight>t.clientHeight||t.scrollWidth>t.clientWidth;try{const o=document.createRange();o.selectNodeContents(t);const O=o.getBoundingClientRect().width,b=t.getBoundingClientRect().width;o.detach();const H=window.devicePixelRatio||1;return(O-b)*H>K}catch{return!1}},[c]),B=r.useCallback(()=>{w()&&(f.current=setTimeout(()=>{C(!0)},_))},[w,_]),F=r.useCallback(()=>{clearTimeout(f.current),setTimeout(()=>{C(!1),i()},v)},[v,i]),{variant:L,bold:x,size:D,...n}=N,M={variant:L,...x!==void 0&&{bold:x},...D!==void 0&&{size:D},...n,refTypography:d,onMouseEnter:t=>{var o;(o=n.onMouseEnter)==null||o.call(n,t)},onMouseLeave:t=>{var o;(o=n.onMouseLeave)==null||o.call(n,t)},style:{...Y({lines:c}),...n.style||{}},children:g},R=m.jsx(j,{...M,children:g});return r.useEffect(()=>I(),[I]),r.useEffect(()=>()=>{clearTimeout(f.current),i()},[i]),m.jsx(T,{className:S,onMouseEnter:B,onMouseLeave:F,children:E?m.jsx(h,{opened:E,text:e??"",target:R,frame:V(),...W}):R})};try{A.displayName="TypographyWithAutoTooltip",A.__docgenInfo={description:"",displayName:"TypographyWithAutoTooltip",props:{tooltipText:{defaultValue:null,description:"",name:"tooltipText",required:!1,type:{name:"ReactNode"}},tooltipProps:{defaultValue:null,description:"",name:"tooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "trigger" | "target" | "opened">'}},lines:{defaultValue:{value:"1"},description:"",name:"lines",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"any"}},refTypography:{defaultValue:null,description:"",name:"refTypography",required:!0,type:{name:"any"}}}}}catch{}export{A as T};
