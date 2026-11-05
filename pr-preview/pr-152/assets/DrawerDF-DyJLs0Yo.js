import{d as a,r as H}from"./react-D2T61mpp.js";import{I as F,_ as I,e as V,s as j,m as E}from"./@salutejs/sdds-finai-CzrWquGL.js";import{eZ as X,fa as R,i9 as S}from"./@salutejs/plasma-icons-DDZ7vpYp.js";import{D as T}from"./IconButton-DXTbBDfG.js";import{s as D,e as M}from"./constants-Ce09UD7b.js";import{A as $,l as q,g as z,af as O,ao as A,k as L,c as W,y as G}from"./@sddsjs/sdds_finai-CivTlObr.js";import{A as P,q as Z}from"./styled-components-BMGTmUgW.js";import{bq as J,br as K}from"./vendor-6eBWuSjz.js";import{B as p}from"./Box-RIpr-WH3.js";const e={drawerPanelRoot:"panel-root",drawerCloseBox:"drawer-close-box",drawerHeaderContainer:"drawer-header-container",drawerHeader:"drawer-header",drawerHeaderTop:"drawer-header-top",drawerHeaderTitleBlock:"drawer-header__title-block",drawerHeaderRightBlock:"drawer-header__right-block",drawerHeaderFooterBlock:"drawer-header__footer-block",drawerHeaderBadge:"drawer-header__badge",drawerHeaderTitle:"drawer-header__title",drawerHeaderTitleContainer:"drawer-header__title-container",drawerHeaderSubtitle:"drawer-header__subtitle",drawerFooter:"drawer-footer",drawerContentContainer:"drawer-content-container",drawerContent:"drawer-content",drawerContentInner:"drawer-content-inner",drawerBackIconButton:"drawer__back-icon"},x=({...r})=>a.jsxDEV(F,{size:"s",view:"clear",className:e.drawerBackIconButton,...r,children:a.jsxDEV(X,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/components/BackIconButton.tsx",lineNumber:17,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/components/BackIconButton.tsx",lineNumber:11,columnNumber:3},void 0);try{x.displayName="DrawerDFBackIconButton",x.__docgenInfo={description:"",displayName:"DrawerDFBackIconButton",props:{}}}catch{}const N=({onClose:r})=>a.jsxDEV(F,{title:"Закрыть",onClick:()=>{r==null||r()},size:"s",view:"clear",children:a.jsxDEV(R,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/components/CloseButton.tsx",lineNumber:18,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/components/CloseButton.tsx",lineNumber:10,columnNumber:3},void 0);try{N.displayName="CloseButton",N.__docgenInfo={description:"",displayName:"CloseButton",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const b=({dropdownProps:r,iconSize:n,...d})=>{const i=a.jsxDEV(F,{view:"secondary",size:"xs",...d,children:a.jsxDEV(S,{size:"xs",...d.size==="s"&&{size:d.size},...n&&{size:n}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/components/DotsIconButton.tsx",lineNumber:15,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/components/DotsIconButton.tsx",lineNumber:14,columnNumber:5},void 0);return r?a.jsxDEV(T,{...r,children:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/components/DotsIconButton.tsx",lineNumber:27,columnNumber:10},void 0):i};try{b.displayName="DrawerDFDotsIconButton",b.__docgenInfo={description:"",displayName:"DrawerDFDotsIconButton",props:{}}}catch{}const o={drawerPadding:16,drawerOffset:16,gap:8,unknownDelta:32,brXS:()=>z,brS:()=>W,brM:()=>q,brL:()=>L,brXL:()=>A,spaceX2:()=>D.x2,spaceX4:()=>D.x4,spaceX8:()=>D.x8,spaceX6:()=>D.x6,brContent:({$header:r,$footer:n})=>`${r?"0px":o.brM()} ${r?"0px":o.brM()} ${n?"0px":o.brM()} ${n?"0px":o.brM()}`},f={multiply:"-64px",default:"-52px"},Q=Z(I)`
  & .${e.drawerPanelRoot} {
    --drawer-padding-root: ${o.spaceX8};
    --drawer-padding-block-multiply-mode: ${o.spaceX4};
    --drawer-close-button-left: ${f.default};
    --drawer-margin-bottom-header-top: ${o.spaceX4};
    min-width: 576px;
    position: relative;
    padding: 0;
    background-color: ${()=>$};
    border-radius: ${o.brM};

    & > div {
      max-height: calc(100vh - 32px);
      height: calc(100vh - 32px);
    }

    &
      .${e.drawerCloseBox},
      .${e.drawerHeader},
      .${e.drawerContent},
      .${e.drawerFooter} {
      background-color: ${()=>$};
    }
    & .${e.drawerCloseBox} {
      position: absolute;
      top: 0px;
      left: var(--drawer-close-button-left);

      height: 40px;
      aspect-ratio: 1;
      border-radius: 50%;
    }

    & .${e.drawerHeaderContainer} {
      display: flex;
      flex-direction: column;
      padding-bottom: 16px;
    }

    & .${e.drawerHeaderTop} {
      margin-bottom: var(--drawer-margin-bottom-header-top);
    }

    & .${e.drawerHeaderTitleBlock} {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: ${o.spaceX4};
    }

    & .${e.drawerHeaderTitleContainer} {
      display: flex;
      gap: ${o.spaceX6};
      align-items: center;
    }

    & .${e.drawerHeader} {
      flex-shrink: 0;
      padding-inline: var(--drawer-padding-root);
      padding-top: var(--drawer-padding-root);
      border-radius: ${o.brM} ${o.brM} 0px 0px;
    }
    & .${e.drawerContentContainer} {
      flex-grow: 1;
      display: flex;
      overflow-y: auto;
      & .${e.drawerContent} {
        padding-inline: var(--drawer-padding-root);
        border-radius: ${o.brContent};
        overflow-y: hidden;
        padding-top: ${({$header:r})=>r?"0":"16px"};
        padding-bottom: ${({$footer:r})=>r?"0px":"16px"};
      }

      & .${e.drawerContentInner} {
        overflow-y: auto;
        height: 100%;
        /* border-radius: ${o.brXS}; */
        padding-right: ${o.spaceX2};
      }
    }

    & .${e.drawerFooter} {
      flex-shrink: 0;
      padding-inline: var(--drawer-padding-root);
      padding-bottom: var(--drawer-padding-root);
      padding-top: 16px;
      border-radius: 0px 0px ${o.brM} ${o.brM};
    }

    ${({$multipleContents:r})=>r&&P`
        & {
          --drawer-padding-root: ${o.spaceX8};
          min-width: 576px;
          padding: ${o.drawerPadding}px;
          background-color: ${()=>O};
          border-radius: ${o.brXL};

          & > div {
            gap: ${o.gap}px;
            /* max-height: calc(100vh - 32px - 24px); */
            /*height: calc(100vh - 32px - 24px); */
            height: 100%;
          }
          & .${e.drawerCloseBox} {
            --drawer-close-button-left: ${f.multiply};
            top: -16px;
          }

          & .${e.drawerHeader},.${e.drawerFooter} {
            border-radius: ${o.brXS};

            height: fit-content;
          }

          & .${e.drawerHeaderContainer} {
            padding-bottom: 0;
          }

          & .${e.drawerHeader} {
            // Стили применяются когда в заголовке есть хотя бы один из элементов:
            // - подзаголовок (drawerHeaderSubtitle)
            // - непустой контейнер заголовка (drawerHeaderTitleContainer)
            // - правый блок (drawerHeaderRightBlock)
            &:has(
                :is(
                    .${e.drawerHeaderSubtitle},
                      .${e.drawerHeaderTitleContainer}:not(:empty),
                    .${e.drawerHeaderRightBlock}
                  )
              ) {
              // Устанавливаем вертикальные отступы:
              // - 16px сверху (x8)
              // - 0px снизу
              --drawer-padding-block-multiply-mode: ${o.spaceX8} 0px;
            }

            // Стили применяются когда:
            // - НЕТ подзаголовка
            // - НЕТ правого блока
            // - ЕСТЬ пустой контейнер заголовка
            &:not(:has(.${e.drawerHeaderSubtitle})):not(
                :has(.${e.drawerHeaderRightBlock})
              ):has(.${e.drawerHeaderTitleContainer}:empty) {
              :is(.${e.drawerHeader}) {
                // Убираем все отступы и margins так как заголовок пустой
                --drawer-padding-block-multiply-mode: 0;
                --drawer-margin-bottom-header-top: 0;
              }
            }

            // Стили применяются когда:
            // - НЕТ подзаголовка
            // - НЕТ правого блока
            // - ЕСТЬ НЕпустой контейнер заголовка
            &:not(:has(.${e.drawerHeaderSubtitle})):not(
                :has(.${e.drawerHeaderRightBlock})
              ):has(.${e.drawerHeaderTitleContainer}:not(:empty)) {
              // Устанавливаем вертикальные отступы по 8px сверху и снизу
              --drawer-padding-block-multiply-mode: ${o.spaceX4} ${o.spaceX4};
              // Убираем margin снизу
              --drawer-margin-bottom-header-top: 0;
            }

            padding-inline: var(--drawer-padding-root);
            padding-block: var(--drawer-padding-block-multiply-mode);
          }
          & .${e.drawerContentContainer} {
            flex-grow: 1;
            display: flex;
            gap: ${o.gap}px;

            & .${e.drawerContent} {
              flex-grow: 1;
              overflow-y: hidden;
              padding: 16px;
              border-radius: ${o.brXS};
            }
          }
          & .${e.drawerFooter} {
            border-top: 0px;
          }
        }
      `};
  }
`,h=({children:r,onOverlayClick:n,className:d,...i})=>{const s=i.closeOnOverlayClick??!0;return a.jsxDEV(Q,{className:`${d??""}`,placement:"right",overlay:a.jsxDEV(J,{onOverlayClick:c=>{var l;s&&((l=i.onClose)==null||l.call(i)),n==null||n(c)},zIndex:"9000",backgroundColorProperty:"#060A0C47"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/components/DrawerX.tsx",lineNumber:23,columnNumber:9},void 0),offset:[`${o.drawerOffset}px`,"0px"],asModal:!0,height:"calc(100dvh - 32px)",closeOnEsc:!0,closeOnOverlayClick:s,width:"576px",...i,children:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/components/DrawerX.tsx",lineNumber:19,columnNumber:5},void 0)};try{h.displayName="DrawerX",h.__docgenInfo={description:"",displayName:"DrawerX",props:{$multipleContents:{defaultValue:null,description:"",name:"$multipleContents",required:!0,type:{name:"boolean"}},$header:{defaultValue:null,description:"",name:"$header",required:!0,type:{name:"boolean"}},$footer:{defaultValue:null,description:"",name:"$footer",required:!0,type:{name:"boolean"}}}}}catch{}const g=({className:r,children:n,refEl:d,fixedWidth:i,style:s,title:c,subTitle:l,badge:m,rightBlock:u,footerBlock:w,...y})=>n?a.jsxDEV(p,{display:!0,ref:d,className:e.drawerHeader,$css:{paddingTop:M.x12,...s},...y,children:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/DrawerDFCompounds.tsx",lineNumber:30,columnNumber:7},void 0):a.jsxDEV(p,{display:!0,ref:d,className:e.drawerHeader,...y,$css:{...s},children:a.jsxDEV("div",{className:e.drawerHeaderContainer,children:[a.jsxDEV("div",{className:e.drawerHeaderTop,children:[a.jsxDEV("div",{className:e.drawerHeaderTitleBlock,children:[a.jsxDEV("div",{className:e.drawerHeaderTitleContainer,children:[c&&a.jsxDEV(V,{className:e.drawerHeaderTitle,children:c},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/DrawerDFCompounds.tsx",lineNumber:59,columnNumber:25},void 0),m&&(()=>{const{text:v,clear:U,pilled:Y,transparent:ee,...B}=m;return a.jsxDEV(j,{view:"default",transparent:!0,clear:void 0,pilled:void 0,...B,className:`${e.drawerHeaderBadge} ${m.className||""}`,children:v},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/DrawerDFCompounds.tsx",lineNumber:65,columnNumber:21},void 0)})()]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/DrawerDFCompounds.tsx",lineNumber:58,columnNumber:13},void 0),u&&a.jsxDEV("div",{className:e.drawerHeaderRightBlock,children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/DrawerDFCompounds.tsx",lineNumber:81,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/DrawerDFCompounds.tsx",lineNumber:57,columnNumber:11},void 0),l&&a.jsxDEV(E,{color:G,className:e.drawerHeaderSubtitle,children:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/DrawerDFCompounds.tsx",lineNumber:85,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/DrawerDFCompounds.tsx",lineNumber:56,columnNumber:9},void 0),w&&a.jsxDEV("div",{className:e.drawerHeaderFooterBlock,children:w},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/DrawerDFCompounds.tsx",lineNumber:91,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/DrawerDFCompounds.tsx",lineNumber:55,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/DrawerDFCompounds.tsx",lineNumber:46,columnNumber:5},void 0),k=({className:r,children:n,refEl:d,fixedWidth:i,style:s,...c})=>a.jsxDEV(p,{style:{...i&&{flexGrow:0,flexShrink:0,flexBasis:i}},ref:d,className:e.drawerContent,width:"100%",children:a.jsxDEV(p,{className:e.drawerContentInner,style:s,...c,children:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/DrawerDFCompounds.tsx",lineNumber:118,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/DrawerDFCompounds.tsx",lineNumber:106,columnNumber:3},void 0),_=({className:r,children:n,refEl:d,...i})=>a.jsxDEV(p,{ref:d,className:e.drawerFooter,...i,children:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/DrawerDFCompounds.tsx",lineNumber:134,columnNumber:3},void 0);try{g.displayName="DrawerDFHeader",g.__docgenInfo={description:"",displayName:"DrawerDFHeader",props:{}}}catch{}try{k.displayName="DrawerDFContent",k.__docgenInfo={description:"",displayName:"DrawerDFContent",props:{}}}catch{}try{_.displayName="DrawerDFFooter",_.__docgenInfo={description:"",displayName:"DrawerDFFooter",props:{}}}catch{}const C=16,t=({main:r,header:n,footer:d,showBackButton:i,onBackClick:s,...c})=>{const l=Array.isArray(r)?r:[r],m={header:!!n,footer:!!d},u=l.length>1,w=H.useMemo(()=>({maxWidth:`calc(100vw + calc(${u?f.multiply:f.default}) - ${u?C:2*C}px)`}),[u]);return a.jsxDEV(K,{children:a.jsxDEV(h,{$multipleContents:u,$header:m.header,$footer:m.footer,style:w,...c,children:[a.jsxDEV("div",{className:e.drawerCloseBox,children:i?a.jsxDEV(x,{onClick:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/DrawerDF.tsx",lineNumber:78,columnNumber:13},void 0):a.jsxDEV(N,{onClose:c.onClose},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/DrawerDF.tsx",lineNumber:80,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/DrawerDF.tsx",lineNumber:76,columnNumber:9},void 0),n,a.jsxDEV("div",{className:e.drawerContentContainer,children:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/DrawerDF.tsx",lineNumber:85,columnNumber:9},void 0),!u&&d]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/DrawerDF.tsx",lineNumber:69,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/DrawerDF/DrawerDF.tsx",lineNumber:68,columnNumber:5},void 0)};t.Content=k;t.Header=g;t.DotsIconButton=b;t.Footer=_;try{t.displayName="DrawerDF",t.__docgenInfo={description:"",displayName:"DrawerDF",props:{main:{defaultValue:null,description:"",name:"main",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}},header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},showBackButton:{defaultValue:null,description:"",name:"showBackButton",required:!1,type:{name:"boolean"}},onBackClick:{defaultValue:null,description:"",name:"onBackClick",required:!1,type:{name:"() => void"}}}}}catch{}try{t.Content.displayName="DrawerDF.Content",t.Content.__docgenInfo={description:"",displayName:"DrawerDF.Content",props:{}}}catch{}try{t.Header.displayName="DrawerDF.Header",t.Header.__docgenInfo={description:"",displayName:"DrawerDF.Header",props:{}}}catch{}try{t.DotsIconButton.displayName="DrawerDF.DotsIconButton",t.DotsIconButton.__docgenInfo={description:"",displayName:"DrawerDF.DotsIconButton",props:{}}}catch{}try{t.Footer.displayName="DrawerDF.Footer",t.Footer.__docgenInfo={description:"",displayName:"DrawerDF.Footer",props:{}}}catch{}export{t as D};
