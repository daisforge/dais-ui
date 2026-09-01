import{d as y,R as k}from"./react-D2T61mpp.js";import{B as g}from"./Box-BdtYEJjU.js";import{C as r,H as x}from"./styled-components-z7m5HNHq.js";import{s as I,i as C,d as j}from"./@salutejs/sdds-themes-CUTvIVmO.js";import{a}from"./utils-Dj97jmJB.js";const f={root:"layout__root",header:"layout__header",main:"layout__main",item:"layout__item",centeredItem:"layout__centeredItem"},O={V1_1:"V1_1",V2_1:"V2_1",V2_2:"V2_2",V3_1:"V3_1",V3_2:"V3_2",V3_3:"V3_3",V4_1:"V4_1",V4_2:"V4_2",V5_1:"V5_1"},m={XL:{horizontal:"auto",vertical:{top:I,bottom:C},gutter:j,headerHeight:"auto"}},z=x(g)`
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
  ${({$customSpacing:t,$marginTop:e,$marginBottom:o})=>{const h=!!(t!=null&&t.vertical),l=!!(t!=null&&t.gutter),u=e!==void 0,d=o!==void 0,p=h||u&&d;if(p&&l)return"";const i=[];if(l||i.push("--layout-gutter: 16px;"),p||(u||i.push("--layout-margin-top: 16px;"),d||i.push("--layout-margin-bottom: 24px;")),i.length===0)return"";const _=i.join(`
`);return a.down("xl")(_)}}
`,D=x(g)`
  overflow: hidden;
`,H=x(g)`
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
      & .${f.centeredItem} {
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
`,X=x(g)`
  overflow-x: hidden;
  height: 100%;
`,A=(t,e)=>{const o=typeof e=="object";return{root:`${t.root} ${o?(e==null?void 0:e.root)??"":e??""}`.trim(),header:`${t.header} ${o?(e==null?void 0:e.header)??"":""}`.trim(),main:`${t.main} ${o?(e==null?void 0:e.main)??"":""}`.trim(),item:`${t.item} ${o?(e==null?void 0:e.item)??"":""}`.trim(),centeredItem:`${t.centeredItem} ${o?(e==null?void 0:e.centeredItem)??"":""}`.trim()}},U=({variant:t="V1_1",headerSlot:e,mainSlot:o,customSpacing:h={},marginTop:l,marginBottom:u,paddingTop:d,paddingBottom:p,marginLeft:i,marginRight:_,paddingLeft:v,paddingRight:V,classes:L,...$})=>{const n=A(f,L),c=()=>o?y.jsxDEV(H,{className:n.main,$variant:t,children:k.Children.map(o,(s,b)=>{const w=t==="V5_1"&&b===1?`${n.item} ${n.centeredItem}`.trim():n.item;return y.jsxDEV(X,{className:w,children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/Layout/Layout.tsx",lineNumber:44,columnNumber:13},void 0)})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/Layout/Layout.tsx",lineNumber:35,columnNumber:7},void 0):null;return y.jsxDEV(z,{$variant:t,$customSpacing:h,$marginTop:l,$marginBottom:u,$paddingTop:d,$paddingBottom:p,$marginLeft:i,$marginRight:_,$paddingLeft:v,$paddingRight:V,className:n.root,...$,children:[e&&y.jsxDEV(D,{className:n.header,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/Layout/Layout.tsx",lineNumber:67,columnNumber:9},void 0),c()]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/Layout/Layout.tsx",lineNumber:52,columnNumber:5},void 0)};export{U as L,O as a};
