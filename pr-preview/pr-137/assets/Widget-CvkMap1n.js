import{j as a,r as v}from"./react-CAOzMBF_.js";import{m as F,f as E}from"./utils-EIxGvR70.js";import{s as d,c as P}from"./constants-DatVHdkd.js";import{H as c,C as N}from"./styled-components-DCFsnh-i.js";import{r as A,s as L,I as $}from"./@salutejs/sdds-finai-CKhMjg07.js";import{A as M,p as S,z as H,aE as z,y as O,V as Y}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{B as h}from"./Box-DvvYTz20.js";import{T as G}from"./AiAgentPopup-zRx4ytCb.js";import{P as J,jA as K,jB as Q,fa as U}from"./@salutejs/plasma-icons-Do5ggeDI.js";import{a as Z}from"./IconButton-ZoRfzXaJ.js";const k={spaceX2:()=>d.x2},j=c(A).attrs({length:"16px",orientation:"vertical"})`
  margin-left: ${k.spaceX2};
  margin-right: calc(${k.spaceX2} + 1px);
`,r="Widget__",e={container:`${r}container`,serviceButtons:`${r}service-buttons`,header:`${r}header`,headerTitlesContainer:`${r}header-title-container`,backIconButton:`${r}back-icon-button`,headerTitlesBox:`${r}header-titles-box`,headerTitle:`${r}header-title`,headerSlotToTheLeftOfTitle:`${r}header-slot-to-the-left-of-title`,headerSubTitle:`${r}header-subTitle`,headerRightBlock:`${r}header-right-block`,headerBottomBlock:`${r}header-bottom-block`,headerBadge:`${r}header-badge`,footer:`${r}footer`,footerTopBlock:`${r}footer-top-block`,slotBlock:`${r}footer-slot`,footerLeft:`${r}footer-left`,footerRight:`${r}footer-right`,content:`${r}content`,containerTypeDefault:`${r}default`,containerTypeModal:`${r}modal`,containerTypeSplitView:`${r}split-view`},o={spaceY:()=>d.x8,spaceX:()=>d.x8,spaceX12:()=>d.x12,spaceX2:()=>d.x2,spaceX4:()=>d.x4,spaceX8:()=>d.x8,spaceX16:()=>d.x16,bg:()=>M,textSecondary:()=>O,bodyS:()=>Y,textPrimary:()=>H,h4Bold:()=>z},ee=c.div.attrs({className:e.container})`
  height: 100%;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  margin-block: ${o.spaceY};

  // C.spaceY - отступы сверху и снизу (margin-block)
  max-height: calc(100% - ${o.spaceY} - ${o.spaceY});

  &:not(:has(.${e.content})) {
    overflow-y: scroll;

    & .${e.header} {
      position: sticky;
      background-color: ${o.bg};
      top: 0px;
    }
  }

  &.${e.containerTypeSplitView} {
    & .${e.header}, & .${e.footer} {
      padding-right: ${o.spaceX16};
    }
    & .${e.content} {
      margin-right: ${o.spaceX16};
    }
  }
  ${({$css:t})=>t}
`,te=c(h).attrs({className:e.header})`
  &.${e.header} {
    flex-shrink: 0;
    height: fit-content;
    padding-inline: ${o.spaceX};
    padding-bottom: ${o.spaceY};
    margin-bottom: ${o.spaceX4};

    ${({dividerBottom:t})=>t&&N`
        border-bottom: 1px solid ${S};
      `};

    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas:
      '${e.headerTitlesContainer} ${e.headerRightBlock}'
      '${e.headerBottomBlock} ${e.headerBottomBlock}';
    column-gap: ${o.spaceX12};

    & .${e.headerTitlesContainer} {
      grid-area: ${e.headerTitlesContainer};
      display: flex;
      gap: ${o.spaceX8};
      align-content: flex-start;
    }

    & .${e.headerTitlesBox} {
      display: flex;
      flex-direction: column;
      row-gap: ${o.spaceX2};
      & .${e.headerTitle} {
        padding: 0px;
        margin: 0px;
        color: ${o.textPrimary};
        ${o.h4Bold};
        display: flex;
        align-items: center;
        gap: ${o.spaceX4};
      }
      & .${e.headerSubTitle} {
        padding: 0px;
        margin: 0px;
        color: ${o.textSecondary};
        ${o.bodyS};
      }
    }

    & .${e.backIconButton} {
      flex-shrink: 0;
    }

    & .${e.headerRightBlock} {
      grid-area: ${e.headerRightBlock};
      display: flex;
      height: fit-content;
      align-items: center;

      margin-bottom: auto;
    }

    & .${e.headerBottomBlock} {
      grid-area: ${e.headerBottomBlock};
      margin-top: ${o.spaceX};
    }
  }
`,ae=c(h).attrs({className:e.content})`
  & {
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: ${P.xs};

    padding-left: ${o.spaceX};
    margin-right: ${o.spaceX};

    &:last-child {
      padding-bottom: 0;
    }
  }
`,oe=c(h).attrs({className:e.footer})`
  &.${e.footer} {
    flex-shrink: 0;
    height: fit-content;
    ${({dividerTop:t})=>t&&N`
        border-top: 1px solid ${S};
      `};
    padding-inline: ${o.spaceX};
    padding-top: ${o.spaceY};
    margin-top: ${o.spaceX4};

    display: grid;
    grid-template-columns: auto auto;

    grid-template-areas:
      '${e.footerTopBlock} ${e.footerTopBlock}'
      '${e.footerLeft} ${e.footerRight}';
    column-gap: ${o.spaceX12};

    .${e.slotBlock} {
      grid-area: ${e.footerTopBlock};
    }
    .${e.footerTopBlock} {
      grid-area: ${e.footerTopBlock};
      margin-bottom: ${o.spaceX};
    }
    .${e.footerLeft} {
      justify-self: start;
      align-self: center;
      grid-area: ${e.footerLeft};
    }
    .${e.footerRight} {
      justify-self: end;
      grid-area: ${e.footerRight};
    }
  }
`,re=c(L).attrs({view:"default"})`
  align-self: flex-start;
  margin-top: ${t=>t.$badgeMarginTop?`${t.$badgeMarginTop}px`:"0"};
`;function x({leftBlock:t,rightBlock:i,topBlock:n,children:l,...s}){return a.jsx(oe,{...s,children:l?a.jsx("div",{className:e.slotBlock,children:l}):a.jsxs(a.Fragment,{children:[!!n&&a.jsx("div",{className:e.footerTopBlock,children:n}),!!t&&a.jsx("div",{className:e.footerLeft,children:t}),!!i&&a.jsx("div",{className:e.footerRight,children:i})]})})}try{x.displayName="WidgetFooter",x.__docgenInfo={description:"",displayName:"WidgetFooter",props:{}}}catch{}const m=({iconSize:t,...i})=>a.jsx($,{view:"secondary",size:"s",pin:"circle-circle",className:e.backIconButton,...i,children:a.jsx(J,{size:t??"s",...t&&{size:t}})});try{m.displayName="WidgetIconButtonBack",m.__docgenInfo={description:"",displayName:"WidgetIconButtonBack",props:{}}}catch{}const V=v.createContext("default"),ie=()=>{const t=v.useContext(V);if(!t)throw new Error("useContextMenu used outside Provider");return t},B=c(h).attrs({className:e.serviceButtons})`
  display: inline-flex;
  column-gap: ${()=>d.x2};
`,g=({fullScreened:t,toggleFullScreened:i,onClose:n,iconButtonsPin:l,...s})=>{const y=typeof t=="boolean",p=ie(),u=l??(p==="splitView"?"square-square":"circle-circle"),f=t?K:Q;return a.jsxs(B,{...s,children:[y&&a.jsx($,{onClick:i??void 0,size:"xs",view:"secondary",pin:u,title:t?"Выйти из полноэкранного режима":"На весь экран",children:a.jsx(f,{size:"xs"})}),n&&a.jsx($,{onClick:n,size:"xs",view:"secondary",pin:u,title:"Закрыть",children:a.jsx(U,{size:"xs"})})]})};try{B.displayName="StyledServiceButtons",B.__docgenInfo={description:"компонент скрывается, если компонент вставлен внутрь [`StyledLeft`](../styled.ts)",displayName:"StyledServiceButtons",props:{}}}catch{}try{g.displayName="WidgetServiceButtons",g.__docgenInfo={description:"",displayName:"WidgetServiceButtons",props:{}}}catch{}function T({title:t,titleSize:i,titleLeftSlot:n,titleRightSlot:l,badge:s,badgeMarginTop:y,subTitle:p,rightBlock:u,bottomBlock:f,onBackClick:w,showBackButton:W=!1,fullScreened:b,toggleFullScreened:I,onClose:_,iconButtonsPin:X,titleTooltipProps:R,...q}){const D=y??(i?void 0:2);return a.jsxs(te,{...q,children:[a.jsxs("div",{className:e.headerTitlesContainer,children:[W&&a.jsx(m,{onClick:w}),n&&a.jsx("div",{className:e.headerSlotToTheLeftOfTitle,children:n}),a.jsxs("div",{className:e.headerTitlesBox,children:[t&&a.jsxs("div",{className:e.headerTitle,children:[a.jsx(G,{variant:i??"H4",bold:!0,lines:2,tooltipText:typeof t=="string"?t:void 0,...R,children:t}),typeof l>"u"&&s&&a.jsx(re,{$badgeMarginTop:D,view:"default",...s,className:F(e.headerBadge,s.className)}),l]}),p&&a.jsx("p",{className:e.headerSubTitle,children:p})]})]}),a.jsxs("div",{className:e.headerRightBlock,children:[u,u&&(_||typeof b=="boolean")&&a.jsx(j,{}),a.jsx(g,{onClose:_,fullScreened:b,toggleFullScreened:I,iconButtonsPin:X})]}),f&&a.jsx("div",{className:e.headerBottomBlock,children:f})]})}try{T.displayName="WidgetHeader",T.__docgenInfo={description:"",displayName:"WidgetHeader",props:{titleLeftSlot:{defaultValue:null,description:"",name:"titleLeftSlot",required:!1,type:{name:"ReactNode"}},titleRightSlot:{defaultValue:null,description:"Контент справа от заголовка (и badge, если есть). Например, Chips или другие компоненты",name:"titleRightSlot",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},titleSize:{defaultValue:null,description:"",name:"titleSize",required:!1,type:{name:"TypographyVariant"}},badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"any"}},badgeMarginTop:{defaultValue:null,description:"",name:"badgeMarginTop",required:!1,type:{name:"number"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"ReactNode"}},rightBlock:{defaultValue:null,description:"",name:"rightBlock",required:!1,type:{name:"ReactNode"}},bottomBlock:{defaultValue:null,description:"",name:"bottomBlock",required:!1,type:{name:"ReactNode"}},onBackClick:{defaultValue:null,description:"",name:"onBackClick",required:!1,type:{name:"() => void"}},showBackButton:{defaultValue:{value:"false"},description:"",name:"showBackButton",required:!1,type:{name:"boolean"}},fullScreened:{defaultValue:null,description:"",name:"fullScreened",required:!1,type:{name:"boolean"}},toggleFullScreened:{defaultValue:null,description:"",name:"toggleFullScreened",required:!1,type:{name:"() => void"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"() => void"}},dividerBottom:{defaultValue:null,description:"",name:"dividerBottom",required:!1,type:{name:"boolean"}},iconButtonsPin:{defaultValue:null,description:"",name:"iconButtonsPin",required:!1,type:{name:"any"}},titleTooltipProps:{defaultValue:null,description:"",name:"titleTooltipProps",required:!1,type:{name:'Omit<TypographyWithAutoTooltipProps<"H4">, "children" | "variant">'}}}}}catch{}const ne=Z,le={splitView:e.containerTypeSplitView,modal:e.containerTypeModal,default:e.containerTypeDefault},se=v.forwardRef(({children:t,containerType:i="default",className:n,...l},s)=>a.jsx(V.Provider,{value:i,children:a.jsx(ee,{ref:s,className:E(le[i],n),...l,children:t})})),C=Object.assign(se,{Header:T,Footer:x,Content:ae,Divider:j,ServiceButtons:g,IconButtonDots:ne,IconButtonBack:m});try{C.displayName="Widget",C.__docgenInfo={description:"",displayName:"Widget",props:{containerType:{defaultValue:{value:"default"},description:"",name:"containerType",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"splitView"'},{value:'"modal"'}]}},$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"string | CSSObject | FlattenSimpleInterpolation"}}}}}catch{}export{C as W};
