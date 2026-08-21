import{d as n,R as b}from"./react-D2T61mpp.js";import{a as r,g as W}from"./utils-C6gzzOja.js";import{B as x}from"./Box-Db5QYZwL.js";import{C as u,H as m}from"./styled-components-C8vPRKee.js";import{j as h}from"./@salutejs/sdds-themes-DMMPng_c.js";const a={wrapper:"container__wrapper",left:"container__wrapper_left",middle:"container__wrapper_middle",right:"container__wrapper_right"},l={MIN_COL_WIDTH:"360px",GAP:"24px",FIXED_WIDTH:"360px",MIN_FIXED_WIDTH:"240px"},k=e=>{switch(e){case"30/70":return u`
        grid-template-columns:
          minmax(var(--container-min-col-width), 30%)
          minmax(0, 1fr);
      `;case"20/80":return u`
        grid-template-columns:
          minmax(var(--container-min-col-width), 20%)
          minmax(0, 1fr);
      `;case"70/30":return u`
        grid-template-columns:
          minmax(0, 1fr)
          minmax(var(--container-min-col-width), 30%);
      `;case"80/20":return u`
        grid-template-columns:
          minmax(0, 1fr)
          minmax(var(--container-min-col-width), 20%);
      `;case"1/1":return u`
        grid-template-columns:
          minmax(0, 1fr)
          minmax(0, 1fr);

        ${r.down("xl")`
          grid-template-columns: minmax(0, 1fr)
        `}
      `;case"1/1/1":return u`
        grid-template-columns:
          minmax(0, 1fr)
          minmax(0, 1fr)
          minmax(0, 1fr);

        ${r.down("xl")`
          grid-template-columns: minmax(0, 1fr)
        `}
      `;case"1/3/1":return u`
        grid-template-columns:
          minmax(0, 1fr)
          minmax(0, 3fr)
          minmax(0, 1fr);
      `;case"fixed-fluid":return u`
        grid-template-columns:
          minmax(var(--container-min-fixed-width), var(--container-fixed-width))
          1fr;
      `;default:return u`
        grid-template-columns:
          minmax(var(--container-min-col-width), 30%)
          minmax(0, 1fr);
      `}},B=m(x)`
  overflow: auto;
  ${({$stretch:e})=>e&&u`
      height: 100%;
      width: 100%;
    `}
  ${({$roundedInner:e})=>e&&`border-radius: ${h};`}
  ${({$css:e})=>e}
`,V=m(x)`
  --container-min-col-width: ${({$minColWidth:e})=>e??l.MIN_COL_WIDTH};
  --container-gap: ${({$gap:e})=>e||l.GAP};
  --container-fixed-width: ${({$fixedWidth:e})=>e??l.FIXED_WIDTH};
  --container-min-fixed-width: ${l.MIN_FIXED_WIDTH};

  display: grid;
  gap: var(--container-gap);
  ${({$view:e})=>k(e)};
  ${({$view:e})=>e==="fixed-fluid"&&u`
      & .${a.right} {
        position: absolute;
        max-width: 840px;
        left: 50%;
        transform: translateX(-50%);

        ${r.up("xxl")`
          max-width: 840px;
        `}

        ${r.only("xl")`
          position: static;
          left: 0;
          transform: translateX(0);
          max-width: unset;
        `}

        ${r.down("xl")`
          position: static;
          left: 0;
          transform: translateX(0);
          max-width: unset;
        `}
      }
    `}
  ${({$stretch:e})=>e&&u`
      height: 100%;
      width: 100%;
    `}

 

  ${({$css:e})=>e}
`,d=m.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  ${({$rounded:e})=>e&&`border-radius: ${h};`}
`,f=e=>{const{split:C=!1,children:c,stretch:E=!1,className:g="",roundedInner:t=!0,css:w,...v}=e,D=`${a.wrapper} ${g}`.trim(),N=W(w),p={className:D,$stretch:E,$css:N,$roundedInner:t};if(!C)return n.jsxDEV(B,{...p,children:c},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/Container/Container.tsx",lineNumber:38,columnNumber:7},void 0);const _=v,{view:s="30/70",fixedWidth:$,minColWidth:y}=_,i=b.Children.toArray(c),o=s==="1/1/1"||s==="1/3/1",I=o?3:2,A=s==="fixed-fluid";return i.length<I?null:n.jsxDEV(V,{...p,$fixedWidth:$,$minColWidth:y,$view:s,position:A?"relative":"static",children:[i[0]&&n.jsxDEV(d,{$rounded:t,className:a.left,children:i[0]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/Container/Container.tsx",lineNumber:65,columnNumber:9},void 0),o&&i[1]&&n.jsxDEV(d,{$rounded:t,className:a.middle,children:i[1]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/Container/Container.tsx",lineNumber:74,columnNumber:9},void 0),i[o?2:1]&&n.jsxDEV(d,{$rounded:t,className:a.right,children:i[o?2:1]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/Container/Container.tsx",lineNumber:83,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/Container/Container.tsx",lineNumber:57,columnNumber:5},void 0)};try{f.displayName="Container",f.__docgenInfo={description:"Компонент Container с поддержкой разделенного и обычного режима",displayName:"Container",props:{split:{defaultValue:null,description:"",name:"split",required:!1,type:{name:"boolean"}},view:{defaultValue:{value:"'30/70'"},description:"",name:"view",required:!1,type:{name:"enum",value:[{value:'"30/70"'},{value:'"20/80"'},{value:'"70/30"'},{value:'"80/20"'},{value:'"1/1"'},{value:'"1/1/1"'},{value:'"1/3/1"'},{value:'"fixed-fluid"'}]}},minColWidth:{defaultValue:{value:"'360px'"},description:"Минимальная ширина колонок",name:"minColWidth",required:!1,type:{name:"string"}},gap:{defaultValue:{value:"'24px'"},description:"Отступ между колонками",name:"gap",required:!1,type:{name:"string"}},fixedWidth:{defaultValue:{value:"'288px'"},description:"Ширина фиксированной колонки (для view='fixed-fluid')",name:"fixedWidth",required:!1,type:{name:"string"}},roundedInner:{defaultValue:{value:"true"},description:"Скругление углов внутренних блоков",name:"roundedInner",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},stretch:{defaultValue:{value:"false"},description:"Растягивать на всю доступную ширину/высоту",name:"stretch",required:!1,type:{name:"boolean"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"BoxProps"}}}}}catch{}export{f as C};
