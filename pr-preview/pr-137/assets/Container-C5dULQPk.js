import{j as a,R as W}from"./react-CAOzMBF_.js";import{b as i,g as B}from"./utils-EIxGvR70.js";import{B as x}from"./Box-DvvYTz20.js";import{C as e,H as m}from"./styled-components-DCFsnh-i.js";import{l as h}from"./@salutejs/sdds-themes-DPwMcFh9.js";const t={wrapper:"container__wrapper",left:"container__wrapper_left",middle:"container__wrapper_middle",right:"container__wrapper_right"},o={MIN_COL_WIDTH:"360px",GAP:"24px",FIXED_WIDTH:"360px",MIN_FIXED_WIDTH:"240px"},F=u=>{switch(u){case"30/70":return e`
        grid-template-columns:
          minmax(var(--container-min-col-width), 30%)
          minmax(0, 1fr);
      `;case"20/80":return e`
        grid-template-columns:
          minmax(var(--container-min-col-width), 20%)
          minmax(0, 1fr);
      `;case"70/30":return e`
        grid-template-columns:
          minmax(0, 1fr)
          minmax(var(--container-min-col-width), 30%);
      `;case"80/20":return e`
        grid-template-columns:
          minmax(0, 1fr)
          minmax(var(--container-min-col-width), 20%);
      `;case"1/1":return e`
        grid-template-columns:
          minmax(0, 1fr)
          minmax(0, 1fr);

        ${i.down("xl")`
          grid-template-columns: minmax(0, 1fr)
        `}
      `;case"1/1/1":return e`
        grid-template-columns:
          minmax(0, 1fr)
          minmax(0, 1fr)
          minmax(0, 1fr);

        ${i.down("xl")`
          grid-template-columns: minmax(0, 1fr)
        `}
      `;case"1/3/1":return e`
        grid-template-columns:
          minmax(0, 1fr)
          minmax(0, 3fr)
          minmax(0, 1fr);
      `;case"fixed-fluid":return e`
        grid-template-columns:
          minmax(var(--container-min-fixed-width), var(--container-fixed-width))
          1fr;
      `;default:return e`
        grid-template-columns:
          minmax(var(--container-min-col-width), 30%)
          minmax(0, 1fr);
      `}},T=m(x)`
  overflow: auto;
  ${({$stretch:u})=>u&&e`
      height: 100%;
      width: 100%;
    `}
  ${({$roundedInner:u})=>u&&`border-radius: ${h};`}
  ${({$css:u})=>u}
`,q=m(x)`
  --container-min-col-width: ${({$minColWidth:u})=>u??o.MIN_COL_WIDTH};
  --container-gap: ${({$gap:u})=>u||o.GAP};
  --container-fixed-width: ${({$fixedWidth:u})=>u??o.FIXED_WIDTH};
  --container-min-fixed-width: ${o.MIN_FIXED_WIDTH};

  display: grid;
  gap: var(--container-gap);
  ${({$view:u})=>F(u)};
  ${({$view:u})=>u==="fixed-fluid"&&e`
      & .${t.right} {
        position: absolute;
        max-width: 840px;
        left: 50%;
        transform: translateX(-50%);

        ${i.up("xxl")`
          max-width: 840px;
        `}

        ${i.only("xl")`
          position: static;
          left: 0;
          transform: translateX(0);
          max-width: unset;
        `}

        ${i.down("xl")`
          position: static;
          left: 0;
          transform: translateX(0);
          max-width: unset;
        `}
      }
    `}
  ${({$stretch:u})=>u&&e`
      height: 100%;
      width: 100%;
    `}

 

  ${({$css:u})=>u}
`,d=m.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  ${({$rounded:u})=>u&&`border-radius: ${h};`}
`,f=u=>{const{split:E=!1,children:c,stretch:g=!1,className:w="",roundedInner:n=!0,css:C,...v}=u,D=`${t.wrapper} ${w}`.trim(),_=B(C),p={className:D,$stretch:g,$css:_,$roundedInner:n};if(!E)return a.jsx(T,{...p,children:c});const $=v,{view:l="30/70",fixedWidth:I,minColWidth:y}=$,r=W.Children.toArray(c),s=l==="1/1/1"||l==="1/3/1",A=s?3:2,N=l==="fixed-fluid";return r.length<A?null:a.jsxs(q,{...p,$fixedWidth:I,$minColWidth:y,$view:l,position:N?"relative":"static",children:[r[0]&&a.jsx(d,{$rounded:n,className:t.left,children:r[0]}),s&&r[1]&&a.jsx(d,{$rounded:n,className:t.middle,children:r[1]}),r[s?2:1]&&a.jsx(d,{$rounded:n,className:t.right,children:r[s?2:1]})]})};try{f.displayName="Container",f.__docgenInfo={description:"Компонент Container с поддержкой разделенного и обычного режима",displayName:"Container",props:{split:{defaultValue:null,description:"",name:"split",required:!1,type:{name:"boolean"}},view:{defaultValue:{value:"'30/70'"},description:"",name:"view",required:!1,type:{name:"enum",value:[{value:'"30/70"'},{value:'"20/80"'},{value:'"70/30"'},{value:'"80/20"'},{value:'"1/1"'},{value:'"1/1/1"'},{value:'"1/3/1"'},{value:'"fixed-fluid"'}]}},minColWidth:{defaultValue:{value:"'360px'"},description:"Минимальная ширина колонок",name:"minColWidth",required:!1,type:{name:"string"}},gap:{defaultValue:{value:"'24px'"},description:"Отступ между колонками",name:"gap",required:!1,type:{name:"string"}},fixedWidth:{defaultValue:{value:"'288px'"},description:"Ширина фиксированной колонки (для view='fixed-fluid')",name:"fixedWidth",required:!1,type:{name:"string"}},roundedInner:{defaultValue:{value:"true"},description:"Скругление углов внутренних блоков",name:"roundedInner",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},stretch:{defaultValue:{value:"false"},description:"Растягивать на всю доступную ширину/высоту",name:"stretch",required:!1,type:{name:"boolean"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"BoxProps"}}}}}catch{}export{f as C};
