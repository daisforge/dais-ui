import{d as i,r as $}from"./react-D2T61mpp.js";import{m as H,d as R}from"./utils-BOxIorbb.js";import{s as u,c as q}from"./constants-DM2G2kGu.js";import{H as l,C as w}from"./styled-components-BlJZcR1N.js";import{a as P,B as L,I as N}from"./@salutejs/sdds-finai-BaaqQyG7.js";import{y as A,o as V,x as M,aD as O,w as Y,T as z}from"./@salutejs/sdds-themes-CZ516YZq.js";import{B as h}from"./Box-CsOzBWtM.js";import{T as G}from"./AnalyticalWidget-C016kmUj.js";import{P as J,jA as K,jB as Q,fa as U}from"./@salutejs/plasma-icons-DH_et0Tb.js";import{a as Z}from"./IconButton-CYx5m0ft.js";const W={spaceX2:()=>u.x2},_=l(P).attrs({length:"16px",orientation:"vertical"})`
  margin-left: ${W.spaceX2};
  margin-right: calc(${W.spaceX2} + 1px);
`,a="Widget__",e={container:`${a}container`,serviceButtons:`${a}service-buttons`,header:`${a}header`,headerTitlesContainer:`${a}header-title-container`,backIconButton:`${a}back-icon-button`,headerTitlesBox:`${a}header-titles-box`,headerTitle:`${a}header-title`,headerSlotToTheLeftOfTitle:`${a}header-slot-to-the-left-of-title`,headerSubTitle:`${a}header-subTitle`,headerRightBlock:`${a}header-right-block`,headerBottomBlock:`${a}header-bottom-block`,headerBadge:`${a}header-badge`,footer:`${a}footer`,footerTopBlock:`${a}footer-top-block`,slotBlock:`${a}footer-slot`,footerLeft:`${a}footer-left`,footerRight:`${a}footer-right`,content:`${a}content`,containerTypeDefault:`${a}default`,containerTypeModal:`${a}modal`,containerTypeSplitView:`${a}split-view`},o={spaceY:()=>u.x8,spaceX:()=>u.x8,spaceX12:()=>u.x12,spaceX2:()=>u.x2,spaceX4:()=>u.x4,spaceX8:()=>u.x8,spaceX16:()=>u.x16,bg:()=>A,textSecondary:()=>Y,bodyS:()=>z,textPrimary:()=>M,h4Bold:()=>O},ee=l.div.attrs({className:e.container})`
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
`,te=l(h).attrs({className:e.header})`
  &.${e.header} {
    flex-shrink: 0;
    height: fit-content;
    padding-inline: ${o.spaceX};
    padding-bottom: ${o.spaceY};
    margin-bottom: ${o.spaceX4};

    ${({dividerBottom:t})=>t&&w`
        border-bottom: 1px solid ${V};
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
`,ie=l(h).attrs({className:e.content})`
  & {
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: ${q.xs};

    padding-left: ${o.spaceX};
    margin-right: ${o.spaceX};

    &:last-child {
      padding-bottom: 0;
    }
  }
`,oe=l(h).attrs({className:e.footer})`
  &.${e.footer} {
    flex-shrink: 0;
    height: fit-content;
    ${({dividerTop:t})=>t&&w`
        border-top: 1px solid ${V};
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
`,ae=l(L).attrs({view:"default"})`
  align-self: flex-start;
  margin-top: ${t=>t.$badgeMarginTop?`${t.$badgeMarginTop}px`:"0"};
`;function x({leftBlock:t,rightBlock:n,topBlock:r,children:s,...d}){return i.jsxDEV(oe,{...d,children:s?i.jsxDEV("div",{className:e.slotBlock,children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/components/WidgetFooter.tsx",lineNumber:22,columnNumber:9},this):i.jsxDEV(i.Fragment,{children:[!!r&&i.jsxDEV("div",{className:e.footerTopBlock,children:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/components/WidgetFooter.tsx",lineNumber:25,columnNumber:26},this),!!t&&i.jsxDEV("div",{className:e.footerLeft,children:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/components/WidgetFooter.tsx",lineNumber:26,columnNumber:27},this),!!n&&i.jsxDEV("div",{className:e.footerRight,children:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/components/WidgetFooter.tsx",lineNumber:27,columnNumber:28},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/components/WidgetFooter.tsx",lineNumber:24,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/components/WidgetFooter.tsx",lineNumber:20,columnNumber:5},this)}try{x.displayName="WidgetFooter",x.__docgenInfo={description:"",displayName:"WidgetFooter",props:{}}}catch{}const g=({iconSize:t,...n})=>i.jsxDEV(N,{view:"secondary",size:"s",pin:"circle-circle",className:e.backIconButton,...n,children:i.jsxDEV(J,{size:t??"s",...t&&{size:t}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/components/WidgetIconButtonBack.tsx",lineNumber:22,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/components/WidgetIconButtonBack.tsx",lineNumber:15,columnNumber:3},void 0);try{g.displayName="WidgetIconButtonBack",g.__docgenInfo={description:"",displayName:"WidgetIconButtonBack",props:{}}}catch{}const D=$.createContext("default"),ne=()=>{const t=$.useContext(D);if(!t)throw new Error("useContextMenu used outside Provider");return t},b=l(h).attrs({className:e.serviceButtons})`
  display: inline-flex;
  column-gap: ${()=>u.x2};
`,f=({fullScreened:t,toggleFullScreened:n,onClose:r,iconButtonsPin:s,...d})=>{const k=typeof t=="boolean",m=ne(),c=s??(m==="splitView"?"square-square":"circle-circle"),p=t?K:Q;return i.jsxDEV(b,{...d,children:[k&&i.jsxDEV(N,{onClick:n??void 0,size:"xs",view:"secondary",pin:c,title:t?"Выйти из полноэкранного режима":"На весь экран",children:i.jsxDEV(p,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/components/WidgetServiceButtons.tsx",lineNumber:53,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/components/WidgetServiceButtons.tsx",lineNumber:44,columnNumber:9},void 0),r&&i.jsxDEV(N,{onClick:r,size:"xs",view:"secondary",pin:c,title:"Закрыть",children:i.jsxDEV(U,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/components/WidgetServiceButtons.tsx",lineNumber:64,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/components/WidgetServiceButtons.tsx",lineNumber:57,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/components/WidgetServiceButtons.tsx",lineNumber:42,columnNumber:5},void 0)};try{b.displayName="StyledServiceButtons",b.__docgenInfo={description:"компонент скрывается, если компонент вставлен внутрь [`StyledLeft`](../styled.ts)",displayName:"StyledServiceButtons",props:{}}}catch{}try{f.displayName="WidgetServiceButtons",f.__docgenInfo={description:"",displayName:"WidgetServiceButtons",props:{}}}catch{}function y({title:t,titleSize:n,titleLeftSlot:r,titleRightSlot:s,badge:d,badgeMarginTop:k,subTitle:m,rightBlock:c,bottomBlock:p,onBackClick:S,showBackButton:E=!1,fullScreened:B,toggleFullScreened:C,onClose:v,iconButtonsPin:j,titleTooltipProps:I,...F}){const X=k??(n?void 0:2);return i.jsxDEV(te,{...F,children:[i.jsxDEV("div",{className:e.headerTitlesContainer,children:[E&&i.jsxDEV(g,{onClick:S},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/components/WidgetHeader.tsx",lineNumber:64,columnNumber:28},this),r&&i.jsxDEV("div",{className:e.headerSlotToTheLeftOfTitle,children:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/components/WidgetHeader.tsx",lineNumber:66,columnNumber:11},this),i.jsxDEV("div",{className:e.headerTitlesBox,children:[t&&i.jsxDEV("div",{className:e.headerTitle,children:[i.jsxDEV(G,{variant:n??"H4",bold:!0,lines:2,tooltipText:typeof t=="string"?t:void 0,...I,children:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/components/WidgetHeader.tsx",lineNumber:71,columnNumber:15},this),typeof s>"u"&&d&&i.jsxDEV(ae,{$badgeMarginTop:X,view:"default",...d,className:H(e.headerBadge,d.className)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/components/WidgetHeader.tsx",lineNumber:81,columnNumber:17},this),s]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/components/WidgetHeader.tsx",lineNumber:70,columnNumber:13},this),m&&i.jsxDEV("p",{className:e.headerSubTitle,children:m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/components/WidgetHeader.tsx",lineNumber:91,columnNumber:24},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/components/WidgetHeader.tsx",lineNumber:68,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/components/WidgetHeader.tsx",lineNumber:63,columnNumber:7},this),i.jsxDEV("div",{className:e.headerRightBlock,children:[c,c&&(v||typeof B=="boolean")&&i.jsxDEV(_,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/components/WidgetHeader.tsx",lineNumber:98,columnNumber:11},this),i.jsxDEV(f,{onClose:v,fullScreened:B,toggleFullScreened:C,iconButtonsPin:j},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/components/WidgetHeader.tsx",lineNumber:101,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/components/WidgetHeader.tsx",lineNumber:94,columnNumber:7},this),p&&i.jsxDEV("div",{className:e.headerBottomBlock,children:p},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/components/WidgetHeader.tsx",lineNumber:109,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/components/WidgetHeader.tsx",lineNumber:62,columnNumber:5},this)}try{y.displayName="WidgetHeader",y.__docgenInfo={description:"",displayName:"WidgetHeader",props:{titleLeftSlot:{defaultValue:null,description:"",name:"titleLeftSlot",required:!1,type:{name:"ReactNode"}},titleRightSlot:{defaultValue:null,description:"Контент справа от заголовка (и badge, если есть). Например, Chips или другие компоненты",name:"titleRightSlot",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},titleSize:{defaultValue:null,description:"",name:"titleSize",required:!1,type:{name:"TypographyVariant"}},badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"any"}},badgeMarginTop:{defaultValue:null,description:"",name:"badgeMarginTop",required:!1,type:{name:"number"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"ReactNode"}},rightBlock:{defaultValue:null,description:"",name:"rightBlock",required:!1,type:{name:"ReactNode"}},bottomBlock:{defaultValue:null,description:"",name:"bottomBlock",required:!1,type:{name:"ReactNode"}},onBackClick:{defaultValue:null,description:"",name:"onBackClick",required:!1,type:{name:"() => void"}},showBackButton:{defaultValue:{value:"false"},description:"",name:"showBackButton",required:!1,type:{name:"boolean"}},fullScreened:{defaultValue:null,description:"",name:"fullScreened",required:!1,type:{name:"boolean"}},toggleFullScreened:{defaultValue:null,description:"",name:"toggleFullScreened",required:!1,type:{name:"() => void"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"() => void"}},dividerBottom:{defaultValue:null,description:"",name:"dividerBottom",required:!1,type:{name:"boolean"}},iconButtonsPin:{defaultValue:null,description:"",name:"iconButtonsPin",required:!1,type:{name:"any"}},titleTooltipProps:{defaultValue:null,description:"",name:"titleTooltipProps",required:!1,type:{name:'Omit<TypographyWithAutoTooltipProps<"H4">, "children" | "variant">'}}}}}catch{}const re=Z,se={splitView:e.containerTypeSplitView,modal:e.containerTypeModal,default:e.containerTypeDefault},de=$.forwardRef(({children:t,containerType:n="default",className:r,...s},d)=>i.jsxDEV(D.Provider,{value:n,children:i.jsxDEV(ee,{ref:d,className:R(se[n],r),...s,children:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/Widget.tsx",lineNumber:34,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Widget/Widget.tsx",lineNumber:33,columnNumber:5},void 0)),T=Object.assign(de,{Header:y,Footer:x,Content:ie,Divider:_,ServiceButtons:f,IconButtonDots:re,IconButtonBack:g});try{T.displayName="Widget",T.__docgenInfo={description:"",displayName:"Widget",props:{containerType:{defaultValue:{value:"default"},description:"",name:"containerType",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"splitView"'},{value:'"modal"'}]}},$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"string | CSSObject | FlattenSimpleInterpolation"}}}}}catch{}export{T as W};
