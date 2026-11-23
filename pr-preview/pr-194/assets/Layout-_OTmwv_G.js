import{b as y,R as z}from"./react-UEdzNlUe.js";import{B as g}from"./Box-yVZ__wCm.js";import{A as r,q as h}from"./styled-components-BQ6ZyzFq.js";import{ca as f,ch as v,ce as V}from"./@sddsjs/sdds_finai-DqiyF2lT.js";import{m as a}from"./utils-1evaXQ7G.js";const L={root:"layout__root",header:"layout__header",main:"layout__main",item:"layout__item",centeredItem:"layout__centeredItem"},O={V1_1:"V1_1",V2_1:"V2_1",V2_2:"V2_2",V3_1:"V3_1",V3_2:"V3_2",V3_3:"V3_3",V4_1:"V4_1",V4_2:"V4_2",V5_1:"V5_1"},m={XL:{horizontal:"auto",vertical:{top:f,bottom:v},gutter:V,headerHeight:"auto"},L:{horizontal:v,vertical:{top:f,bottom:V},gutter:f,headerHeight:"auto"}},C=h(g)`
  // Инициализация CSS переменных
  --layout-margin-horizontal: ${m.XL.horizontal};
  --layout-margin-top: ${m.XL.vertical.top};
  --layout-margin-bottom: ${m.XL.vertical.bottom};
  --layout-gutter: ${m.XL.gutter};
  --layout-header-height: ${m.XL.headerHeight};

  --layout-max-width: 1856px;
  --layout-grid-template-columns: 1fr;

  // [deprecated] Переопределение через customSpacing
  ${({$customSpacing:t})=>(t==null?void 0:t.horizontal)&&r`
      --layout-margin-horizontal: ${t.horizontal};
    `}

  ${({$customSpacing:t})=>{if(!(t!=null&&t.vertical))return"";if(typeof t.vertical=="string")return r`
        --layout-margin-top: ${t.vertical};
        --layout-margin-bottom: ${t.vertical};
      `;const e=[];return t.vertical.top!==void 0&&e.push(`--layout-margin-top: ${t.vertical.top};`),t.vertical.bottom!==void 0&&e.push(`--layout-margin-bottom: ${t.vertical.bottom};`),e.join(`
`)}}

  ${({$customSpacing:t})=>(t==null?void 0:t.gutter)&&r`
      --layout-gutter: ${t.gutter};
    `}

  ${({$customSpacing:t})=>(t==null?void 0:t.headerHeight)&&r`
      --layout-header-height: ${t.headerHeight};
    `}

  // Прямые пропсы (приоритет над customSpacing)
  ${({$marginTop:t})=>t!==void 0&&r`
      --layout-margin-top: ${t};
    `}

  ${({$marginBottom:t})=>t!==void 0&&r`
      --layout-margin-bottom: ${t};
    `}

  ${({$marginLeft:t})=>t!==void 0&&r`
      --layout-margin-left: ${t};
    `}

  ${({$marginRight:t})=>t!==void 0&&r`
      --layout-margin-right: ${t};
    `}

  // Основная разметка
  display: grid;
  width: 100%;
  max-width: var(--layout-max-width);
  margin-top: var(--layout-margin-top);
  margin-bottom: var(--layout-margin-bottom);
  margin-inline: var(--layout-margin-horizontal);

  ${({$marginLeft:t})=>t!==void 0&&r`
      margin-left: var(--layout-margin-left);
    `}

  ${({$marginRight:t})=>t!==void 0&&r`
      margin-right: var(--layout-margin-right);
    `}

  ${({$paddingTop:t})=>t!==void 0&&r`
      padding-top: ${t};
    `}

  ${({$paddingBottom:t})=>t!==void 0&&r`
      padding-bottom: ${t};
    `}

  ${({$paddingLeft:t})=>t!==void 0&&r`
      padding-left: ${t};
    `}

  ${({$paddingRight:t})=>t!==void 0&&r`
      padding-right: ${t};
    `}

  grid-template-rows: var(--layout-header-height) 1fr;
  grid-template-columns: var(--layout-grid-template-columns);
  gap: var(--layout-gutter);

  // Адаптивные отступы для <1920px
  // Прямые пропсы и customSpacing отключают адаптивное поведение для соответствующего свойства
  ${({$customSpacing:t,$marginTop:e,$marginBottom:o})=>{const x=!!(t!=null&&t.vertical),l=!!(t!=null&&t.gutter),u=e!==void 0,d=o!==void 0,p=x||u&&d;if(p&&l)return"";const i=[];if(l||i.push("--layout-gutter: 16px;"),p||(u||i.push("--layout-margin-top: 16px;"),d||i.push("--layout-margin-bottom: 24px;")),i.length===0)return"";const _=i.join(`
`);return a.down("xl")(_)}}
`,A=h(g)`
  overflow: hidden;
`,D=h(g)`
  // Инициализация CSS переменных
  --pageLayout-container-grid-template-column: minmax(0, 1fr);

  // Основная разметка
  display: grid;
  height: 100%;
  grid-template-columns: var(--pageLayout-container-grid-template-column);
  gap: var(--layout-gutter);

  // Варианты раскладок

  /* V1_1 */
  ${({$variant:t})=>t==="V1_1"&&r`
      --pageLayout-container-grid-template-column: minmax(0, 1fr);
    `}

  /* V2_1 */
  ${({$variant:t})=>t==="V2_1"&&r`
      --pageLayout-container-grid-template-column: 1282px minmax(0, 1fr);
      ${a.only("xl")`
        --pageLayout-container-grid-template-column: minmax(0, 1fr) 360px;
      `}
      ${a.down("xl")`
        --pageLayout-container-grid-template-column: minmax(0, 1fr) 360px;
      `}
    `}

  /* V2_2 */
  ${({$variant:t})=>t==="V2_2"&&r`
      --pageLayout-container-grid-template-column: minmax(0, 1fr) 1282px;
      ${a.only("xl")`
        --pageLayout-container-grid-template-column: 360px minmax(0, 1fr);
      `}
      ${a.down("xl")`
        --pageLayout-container-grid-template-column: 360px minmax(0, 1fr);
      `}
    `}

  /* V3_1 */
  ${({$variant:t})=>t==="V3_1"&&r`
      --pageLayout-container-grid-template-column: minmax(0, 1fr) 360px;
    `}

  /* V3_2 */
  ${({$variant:t})=>t==="V3_2"&&r`
      --pageLayout-container-grid-template-column: 360px minmax(0, 1fr);
    `}

  /* V3_3 */
  ${({$variant:t})=>t==="V3_3"&&r`
      --pageLayout-container-grid-template-column: 360px minmax(0, 1fr) 360px;
      ${a.down("xl")`
        --pageLayout-container-grid-template-column: minmax(0, 1fr);
      `}
    `}

  /* V4_1 */
  ${({$variant:t})=>t==="V4_1"&&r`
      --pageLayout-container-grid-template-column: repeat(2, minmax(0, 1fr));
      ${a.down("xl")`
        --pageLayout-container-grid-template-column: minmax(0, 1fr);
      `}
    `}

  /* V4_2 */
  ${({$variant:t})=>t==="V4_2"&&r`
      --pageLayout-container-grid-template-column: repeat(3, minmax(0, 1fr));
      ${a.down("xl")`
        --pageLayout-container-grid-template-column: minmax(0, 1fr);
      `}
    `}

  /* V5_1 */
  ${({$variant:t})=>t==="V5_1"&&r`
      --pageLayout-container-grid-template-column: 360px 840px;
      position: relative;
      & .${L.centeredItem} {
        position: absolute;
        left: 50%;
        translate: -50% 0;
        width: 100%;
        max-width: 840px;
      }
      ${a.only("xl")`
        --pageLayout-container-grid-template-column: 360px minmax(0,1fr);
        & .layout__centeredItem {
          position: static;
          translate: 0 0;
          max-width: unset;
        } 
      `}
      ${a.down("xl")`
        --pageLayout-container-grid-template-column: 240px minmax(0,1fr);
        & .layout__centeredItem {
          position: static;
          translate: 0 0;
          max-width: unset;
        } 
      `}
    `}
`,H=h(g)`
  overflow-x: hidden;
  height: 100%;
`,X=(t,e)=>{const o=typeof e=="object";return{root:`${t.root} ${o?(e==null?void 0:e.root)??"":e??""}`.trim(),header:`${t.header} ${o?(e==null?void 0:e.header)??"":""}`.trim(),main:`${t.main} ${o?(e==null?void 0:e.main)??"":""}`.trim(),item:`${t.item} ${o?(e==null?void 0:e.item)??"":""}`.trim(),centeredItem:`${t.centeredItem} ${o?(e==null?void 0:e.centeredItem)??"":""}`.trim()}},q=({variant:t="V1_1",headerSlot:e,mainSlot:o,customSpacing:x={},marginTop:l,marginBottom:u,paddingTop:d,paddingBottom:p,marginLeft:i,marginRight:_,paddingLeft:c,paddingRight:$,classes:s,...b})=>{const n=X(L,s),w=()=>o?y.jsxDEV(D,{className:n.main,$variant:t,children:z.Children.map(o,(k,I)=>{const j=t==="V5_1"&&I===1?`${n.item} ${n.centeredItem}`.trim():n.item;return y.jsxDEV(H,{className:j,children:k},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/Layout/Layout.tsx",lineNumber:44,columnNumber:13},void 0)})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/Layout/Layout.tsx",lineNumber:35,columnNumber:7},void 0):null;return y.jsxDEV(C,{$variant:t,$customSpacing:x,$marginTop:l,$marginBottom:u,$paddingTop:d,$paddingBottom:p,$marginLeft:i,$marginRight:_,$paddingLeft:c,$paddingRight:$,className:n.root,...b,children:[e&&y.jsxDEV(A,{className:n.header,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/Layout/Layout.tsx",lineNumber:67,columnNumber:9},void 0),w()]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/Layout/Layout.tsx",lineNumber:52,columnNumber:5},void 0)};export{q as L,O as a,m as b,L as c};
