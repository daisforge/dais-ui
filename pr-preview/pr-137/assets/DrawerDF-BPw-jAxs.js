import{j as a,r as k}from"./react-CAOzMBF_.js";import{I as C,D as I,_ as j,e as X,s as R,m as S}from"./@salutejs/sdds-finai-CKhMjg07.js";import{eZ as T,fa as M,i9 as q}from"./@salutejs/plasma-icons-Do5ggeDI.js";import{s as _,e as z}from"./constants-DatVHdkd.js";import{A as B,l as V,g as O,T as L,cI as A,k as E,c as W,y as G}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{C as P,H as Z}from"./styled-components-DCFsnh-i.js";import{bp as J,bq as K}from"./vendor-DmWczWMC.js";import{B as m}from"./Box-DvvYTz20.js";const e={drawerPanelRoot:"panel-root",drawerCloseBox:"drawer-close-box",drawerHeaderContainer:"drawer-header-container",drawerHeader:"drawer-header",drawerHeaderTop:"drawer-header-top",drawerHeaderTitleBlock:"drawer-header__title-block",drawerHeaderRightBlock:"drawer-header__right-block",drawerHeaderFooterBlock:"drawer-header__footer-block",drawerHeaderBadge:"drawer-header__badge",drawerHeaderTitle:"drawer-header__title",drawerHeaderTitleContainer:"drawer-header__title-container",drawerHeaderSubtitle:"drawer-header__subtitle",drawerFooter:"drawer-footer",drawerContentContainer:"drawer-content-container",drawerContent:"drawer-content",drawerContentInner:"drawer-content-inner",drawerBackIconButton:"drawer__back-icon"},h=({...r})=>a.jsx(C,{size:"s",view:"clear",className:e.drawerBackIconButton,...r,children:a.jsx(T,{color:"inherit"})});try{h.displayName="DrawerDFBackIconButton",h.__docgenInfo={description:"",displayName:"DrawerDFBackIconButton",props:{}}}catch{}const g=({onClose:r})=>a.jsx(C,{title:"Закрыть",onClick:()=>{r==null||r()},size:"s",view:"clear",children:a.jsx(M,{color:"inherit"})});try{g.displayName="CloseButton",g.__docgenInfo={description:"",displayName:"CloseButton",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const y=({dropdownProps:r,iconSize:o,...n})=>{const d=a.jsx(C,{view:"secondary",size:"xs",...n,children:a.jsx(q,{size:"xs",...n.size==="s"&&{size:n.size},...o&&{size:o}})});return r?a.jsx(I,{...r,children:d}):d};try{y.displayName="DrawerDFDotsIconButton",y.__docgenInfo={description:"",displayName:"DrawerDFDotsIconButton",props:{}}}catch{}const t={drawerPadding:16,drawerOffset:16,gap:8,unknownDelta:32,brXS:()=>O,brS:()=>W,brM:()=>V,brL:()=>E,brXL:()=>A,spaceX2:()=>_.x2,spaceX4:()=>_.x4,spaceX8:()=>_.x8,spaceX6:()=>_.x6,brContent:({$header:r,$footer:o})=>`${r?"0px":t.brM()} ${r?"0px":t.brM()} ${o?"0px":t.brM()} ${o?"0px":t.brM()}`},x={multiply:"-64px",default:"-52px"},Q=Z(j)`
  & .${e.drawerPanelRoot} {
    --drawer-padding-root: ${t.spaceX8};
    --drawer-padding-block-multiply-mode: ${t.spaceX4};
    --drawer-close-button-left: ${x.default};
    --drawer-margin-bottom-header-top: ${t.spaceX4};
    min-width: 576px;
    position: relative;
    padding: 0;
    background-color: ${()=>B};
    border-radius: ${t.brM};

    & > div {
      max-height: calc(100vh - 32px);
      height: calc(100vh - 32px);
    }

    &
      .${e.drawerCloseBox},
      .${e.drawerHeader},
      .${e.drawerContent},
      .${e.drawerFooter} {
      background-color: ${()=>B};
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
      gap: ${t.spaceX4};
    }

    & .${e.drawerHeaderTitleContainer} {
      display: flex;
      gap: ${t.spaceX6};
      align-items: center;
    }

    & .${e.drawerHeader} {
      flex-shrink: 0;
      padding-inline: var(--drawer-padding-root);
      padding-top: var(--drawer-padding-root);
      border-radius: ${t.brM} ${t.brM} 0px 0px;
    }
    & .${e.drawerContentContainer} {
      flex-grow: 1;
      display: flex;
      overflow-y: auto;
      & .${e.drawerContent} {
        padding-inline: var(--drawer-padding-root);
        border-radius: ${t.brContent};
        overflow-y: hidden;
        padding-top: ${({$header:r})=>r?"0":"16px"};
        padding-bottom: ${({$footer:r})=>r?"0px":"16px"};
      }

      & .${e.drawerContentInner} {
        overflow-y: auto;
        height: 100%;
        /* border-radius: ${t.brXS}; */
        padding-right: ${t.spaceX2};
      }
    }

    & .${e.drawerFooter} {
      flex-shrink: 0;
      padding-inline: var(--drawer-padding-root);
      padding-bottom: var(--drawer-padding-root);
      padding-top: 16px;
      border-radius: 0px 0px ${t.brM} ${t.brM};
    }

    ${({$multipleContents:r})=>r&&P`
        & {
          --drawer-padding-root: ${t.spaceX8};
          min-width: 576px;
          padding: ${t.drawerPadding}px;
          background-color: ${()=>L};
          border-radius: ${t.brXL};

          & > div {
            gap: ${t.gap}px;
            /* max-height: calc(100vh - 32px - 24px); */
            /*height: calc(100vh - 32px - 24px); */
            height: 100%;
          }
          & .${e.drawerCloseBox} {
            --drawer-close-button-left: ${x.multiply};
            top: -16px;
          }

          & .${e.drawerHeader},.${e.drawerFooter} {
            border-radius: ${t.brXS};

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
              --drawer-padding-block-multiply-mode: ${t.spaceX8} 0px;
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
              --drawer-padding-block-multiply-mode: ${t.spaceX4} ${t.spaceX4};
              // Убираем margin снизу
              --drawer-margin-bottom-header-top: 0;
            }

            padding-inline: var(--drawer-padding-root);
            padding-block: var(--drawer-padding-block-multiply-mode);
          }
          & .${e.drawerContentContainer} {
            flex-grow: 1;
            display: flex;
            gap: ${t.gap}px;

            & .${e.drawerContent} {
              flex-grow: 1;
              overflow-y: hidden;
              padding: 16px;
              border-radius: ${t.brXS};
            }
          }
          & .${e.drawerFooter} {
            border-top: 0px;
          }
        }
      `};
  }
`,f=({children:r,onOverlayClick:o,className:n,...d})=>{const s=d.closeOnOverlayClick??!0;return a.jsx(Q,{className:`${n??""}`,placement:"right",overlay:a.jsx(J,{onOverlayClick:l=>{var c;s&&((c=d.onClose)==null||c.call(d)),o==null||o(l)},zIndex:"9000",backgroundColorProperty:"#060A0C47"}),offset:[`${t.drawerOffset}px`,"0px"],asModal:!0,height:"calc(100dvh - 32px)",closeOnEsc:!0,closeOnOverlayClick:s,width:"576px",...d,children:r})};try{f.displayName="DrawerX",f.__docgenInfo={description:"",displayName:"DrawerX",props:{$multipleContents:{defaultValue:null,description:"",name:"$multipleContents",required:!0,type:{name:"boolean"}},$header:{defaultValue:null,description:"",name:"$header",required:!0,type:{name:"boolean"}},$footer:{defaultValue:null,description:"",name:"$footer",required:!0,type:{name:"boolean"}}}}}catch{}const $=({className:r,children:o,refEl:n,fixedWidth:d,style:s,title:l,subTitle:c,badge:w,rightBlock:p,footerBlock:u,...H})=>o?a.jsx(m,{display:!0,ref:n,className:e.drawerHeader,$css:{paddingTop:z.x12,...s},...H,children:o}):a.jsx(m,{display:!0,ref:n,className:e.drawerHeader,...H,$css:{...s},children:a.jsxs("div",{className:e.drawerHeaderContainer,children:[a.jsxs("div",{className:e.drawerHeaderTop,children:[a.jsxs("div",{className:e.drawerHeaderTitleBlock,children:[a.jsxs("div",{className:e.drawerHeaderTitleContainer,children:[l&&a.jsx(X,{className:e.drawerHeaderTitle,children:l}),w&&(()=>{const{text:F,clear:U,pilled:Y,transparent:ee,...v}=w;return a.jsx(R,{view:"default",transparent:!0,clear:void 0,pilled:void 0,...v,className:`${e.drawerHeaderBadge} ${w.className||""}`,children:F})})()]}),p&&a.jsx("div",{className:e.drawerHeaderRightBlock,children:p})]}),c&&a.jsx(S,{color:G,className:e.drawerHeaderSubtitle,children:c})]}),u&&a.jsx("div",{className:e.drawerHeaderFooterBlock,children:u})]})}),b=({className:r,children:o,refEl:n,fixedWidth:d,style:s,...l})=>a.jsx(m,{style:{...d&&{flexGrow:0,flexShrink:0,flexBasis:d}},ref:n,className:e.drawerContent,width:"100%",children:a.jsx(m,{className:e.drawerContentInner,style:s,...l,children:o})}),D=({className:r,children:o,refEl:n,...d})=>a.jsx(m,{ref:n,className:e.drawerFooter,...d,children:o});try{$.displayName="DrawerDFHeader",$.__docgenInfo={description:"",displayName:"DrawerDFHeader",props:{}}}catch{}try{b.displayName="DrawerDFContent",b.__docgenInfo={description:"",displayName:"DrawerDFContent",props:{}}}catch{}try{D.displayName="DrawerDFFooter",D.__docgenInfo={description:"",displayName:"DrawerDFFooter",props:{}}}catch{}const N=16,i=({main:r,header:o,footer:n,showBackButton:d,onBackClick:s,...l})=>{const c=Array.isArray(r)?r:[r],w={header:!!o,footer:!!n},p=c.length>1,u=k.useMemo(()=>({maxWidth:`calc(100vw + calc(${p?x.multiply:x.default}) - ${p?N:2*N}px)`}),[p]);return a.jsx(K,{children:a.jsxs(f,{$multipleContents:p,$header:w.header,$footer:w.footer,style:u,...l,children:[a.jsx("div",{className:e.drawerCloseBox,children:d?a.jsx(h,{onClick:s}):a.jsx(g,{onClose:l.onClose})}),o,a.jsx("div",{className:e.drawerContentContainer,children:c}),!p&&n]})})};i.Content=b;i.Header=$;i.DotsIconButton=y;i.Footer=D;try{i.displayName="DrawerDF",i.__docgenInfo={description:"",displayName:"DrawerDF",props:{main:{defaultValue:null,description:"",name:"main",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}},header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},showBackButton:{defaultValue:null,description:"",name:"showBackButton",required:!1,type:{name:"boolean"}},onBackClick:{defaultValue:null,description:"",name:"onBackClick",required:!1,type:{name:"() => void"}}}}}catch{}try{i.Content.displayName="DrawerDF.Content",i.Content.__docgenInfo={description:"",displayName:"DrawerDF.Content",props:{}}}catch{}try{i.Header.displayName="DrawerDF.Header",i.Header.__docgenInfo={description:"",displayName:"DrawerDF.Header",props:{}}}catch{}try{i.DotsIconButton.displayName="DrawerDF.DotsIconButton",i.DotsIconButton.__docgenInfo={description:"",displayName:"DrawerDF.DotsIconButton",props:{}}}catch{}try{i.Footer.displayName="DrawerDF.Footer",i.Footer.__docgenInfo={description:"",displayName:"DrawerDF.Footer",props:{}}}catch{}export{i as D};
