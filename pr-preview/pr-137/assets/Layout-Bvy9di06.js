import{j as g,R as j}from"./react-CAOzMBF_.js";import{B as y}from"./Box-DvvYTz20.js";import{C as e,H as x}from"./styled-components-DCFsnh-i.js";import{s as C,j as z,d as H}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{b as a}from"./utils-EIxGvR70.js";const f={root:"layout__root",header:"layout__header",main:"layout__main",item:"layout__item",centeredItem:"layout__centeredItem"},Y={V1_1:"V1_1",V2_1:"V2_1",V2_2:"V2_2",V3_1:"V3_1",V3_2:"V3_2",V3_3:"V3_3",V4_1:"V4_1",V4_2:"V4_2",V5_1:"V5_1"},m={XL:{horizontal:"auto",vertical:{top:C,bottom:z},gutter:H,headerHeight:"auto"}},X=x(y)`
  // Инициализация CSS переменных
  --layout-margin-horizontal: ${m.XL.horizontal};
  --layout-margin-top: ${m.XL.vertical.top};
  --layout-margin-bottom: ${m.XL.vertical.bottom};
  --layout-gutter: ${m.XL.gutter};
  --layout-header-height: ${m.XL.headerHeight};

  --layout-max-width: 1856px;
  --layout-grid-template-columns: 1fr;

  // [deprecated] Переопределение через customSpacing
  ${({$customSpacing:t})=>(t==null?void 0:t.horizontal)&&e`
      --layout-margin-horizontal: ${t.horizontal};
    `}

  ${({$customSpacing:t})=>{if(!(t!=null&&t.vertical))return"";if(typeof t.vertical=="string")return e`
        --layout-margin-top: ${t.vertical};
        --layout-margin-bottom: ${t.vertical};
      `;const r=[];return t.vertical.top!==void 0&&r.push(`--layout-margin-top: ${t.vertical.top};`),t.vertical.bottom!==void 0&&r.push(`--layout-margin-bottom: ${t.vertical.bottom};`),r.join(`
`)}}

  ${({$customSpacing:t})=>(t==null?void 0:t.gutter)&&e`
      --layout-gutter: ${t.gutter};
    `}

  ${({$customSpacing:t})=>(t==null?void 0:t.headerHeight)&&e`
      --layout-header-height: ${t.headerHeight};
    `}

  // Прямые пропсы (приоритет над customSpacing)
  ${({$marginTop:t})=>t!==void 0&&e`
      --layout-margin-top: ${t};
    `}

  ${({$marginBottom:t})=>t!==void 0&&e`
      --layout-margin-bottom: ${t};
    `}

  ${({$marginLeft:t})=>t!==void 0&&e`
      --layout-margin-left: ${t};
    `}

  ${({$marginRight:t})=>t!==void 0&&e`
      --layout-margin-right: ${t};
    `}

  // Основная разметка
  display: grid;
  width: 100%;
  max-width: var(--layout-max-width);
  margin-top: var(--layout-margin-top);
  margin-bottom: var(--layout-margin-bottom);
  margin-inline: var(--layout-margin-horizontal);

  ${({$marginLeft:t})=>t!==void 0&&e`
      margin-left: var(--layout-margin-left);
    `}

  ${({$marginRight:t})=>t!==void 0&&e`
      margin-right: var(--layout-margin-right);
    `}

  ${({$paddingTop:t})=>t!==void 0&&e`
      padding-top: ${t};
    `}

  ${({$paddingBottom:t})=>t!==void 0&&e`
      padding-bottom: ${t};
    `}

  ${({$paddingLeft:t})=>t!==void 0&&e`
      padding-left: ${t};
    `}

  ${({$paddingRight:t})=>t!==void 0&&e`
      padding-right: ${t};
    `}

  grid-template-rows: var(--layout-header-height) 1fr;
  grid-template-columns: var(--layout-grid-template-columns);
  gap: var(--layout-gutter);

  // Адаптивные отступы для <1920px
  // Прямые пропсы и customSpacing отключают адаптивное поведение для соответствующего свойства
  ${({$customSpacing:t,$marginTop:r,$marginBottom:o})=>{const h=!!(t!=null&&t.vertical),l=!!(t!=null&&t.gutter),d=r!==void 0,u=o!==void 0,p=h||d&&u;if(p&&l)return"";const i=[];if(l||i.push("--layout-gutter: 16px;"),p||(d||i.push("--layout-margin-top: 16px;"),u||i.push("--layout-margin-bottom: 24px;")),i.length===0)return"";const _=i.join(`
`);return a.down("xl")(_)}}
`,A=x(y)`
  overflow: hidden;
`,R=x(y)`
  // Инициализация CSS переменных
  --pageLayout-container-grid-template-column: minmax(0, 1fr);

  // Основная разметка
  display: grid;
  height: 100%;
  grid-template-columns: var(--pageLayout-container-grid-template-column);
  gap: var(--layout-gutter);

  // Варианты раскладок

  /* V1_1 */
  ${({$variant:t})=>t==="V1_1"&&e`
      --pageLayout-container-grid-template-column: minmax(0, 1fr);
    `}

  /* V2_1 */
  ${({$variant:t})=>t==="V2_1"&&e`
      --pageLayout-container-grid-template-column: 1282px minmax(0, 1fr);
      ${a.only("xl")`
        --pageLayout-container-grid-template-column: minmax(0, 1fr) 360px;
      `}
      ${a.down("xl")`
        --pageLayout-container-grid-template-column: minmax(0, 1fr) 360px;
      `}
    `}

  /* V2_2 */
  ${({$variant:t})=>t==="V2_2"&&e`
      --pageLayout-container-grid-template-column: minmax(0, 1fr) 1282px;
      ${a.only("xl")`
        --pageLayout-container-grid-template-column: 360px minmax(0, 1fr);
      `}
      ${a.down("xl")`
        --pageLayout-container-grid-template-column: 360px minmax(0, 1fr);
      `}
    `}

  /* V3_1 */
  ${({$variant:t})=>t==="V3_1"&&e`
      --pageLayout-container-grid-template-column: minmax(0, 1fr) 360px;
    `}

  /* V3_2 */
  ${({$variant:t})=>t==="V3_2"&&e`
      --pageLayout-container-grid-template-column: 360px minmax(0, 1fr);
    `}

  /* V3_3 */
  ${({$variant:t})=>t==="V3_3"&&e`
      --pageLayout-container-grid-template-column: 360px minmax(0, 1fr) 360px;
      ${a.down("xl")`
        --pageLayout-container-grid-template-column: minmax(0, 1fr);
      `}
    `}

  /* V4_1 */
  ${({$variant:t})=>t==="V4_1"&&e`
      --pageLayout-container-grid-template-column: repeat(2, minmax(0, 1fr));
      ${a.down("xl")`
        --pageLayout-container-grid-template-column: minmax(0, 1fr);
      `}
    `}

  /* V4_2 */
  ${({$variant:t})=>t==="V4_2"&&e`
      --pageLayout-container-grid-template-column: repeat(3, minmax(0, 1fr));
      ${a.down("xl")`
        --pageLayout-container-grid-template-column: minmax(0, 1fr);
      `}
    `}

  /* V5_1 */
  ${({$variant:t})=>t==="V5_1"&&e`
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
`,s=x(y)`
  overflow-x: hidden;
  height: 100%;
`,G=(t,r)=>{const o=typeof r=="object";return{root:`${t.root} ${o?(r==null?void 0:r.root)??"":r??""}`.trim(),header:`${t.header} ${o?(r==null?void 0:r.header)??"":""}`.trim(),main:`${t.main} ${o?(r==null?void 0:r.main)??"":""}`.trim(),item:`${t.item} ${o?(r==null?void 0:r.item)??"":""}`.trim(),centeredItem:`${t.centeredItem} ${o?(r==null?void 0:r.centeredItem)??"":""}`.trim()}},k=({variant:t="V1_1",headerSlot:r,mainSlot:o,customSpacing:h={},marginTop:l,marginBottom:d,paddingTop:u,paddingBottom:p,marginLeft:i,marginRight:_,paddingLeft:V,paddingRight:v,classes:L,...$})=>{const n=G(f,L),c=()=>o?g.jsx(R,{className:n.main,$variant:t,children:j.Children.map(o,(w,b)=>{const I=t==="V5_1"&&b===1?`${n.item} ${n.centeredItem}`.trim():n.item;return g.jsx(s,{className:I,children:w})})}):null;return g.jsxs(X,{$variant:t,$customSpacing:h,$marginTop:l,$marginBottom:d,$paddingTop:u,$paddingBottom:p,$marginLeft:i,$marginRight:_,$paddingLeft:V,$paddingRight:v,className:n.root,...$,children:[r&&g.jsx(A,{className:n.header,children:r}),c()]})};export{k as L,Y as a};
