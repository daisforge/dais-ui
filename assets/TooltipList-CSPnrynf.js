import{j as u}from"./react-DYHuXpTF.js";import{d9 as s,da as d}from"./@sddsjs/sdds_finai-CcsTvjys.js";import{q as a,A as c}from"./styled-components-BADHLMuD.js";import{g as m}from"./@salutejs/sdds-finai-DJh4O7Qc.js";const g=a.div`
  color: ${()=>s};
  ${()=>c(d)};
  max-height: 130px;
  overflow-y: auto;
  padding-block: 2px;
  padding-right: 2px;

  & > ul {
    padding-top: 1px;
    display: flex;
    flex-direction: column;
    gap: 1px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  & li {
    padding-left: 12px;
    position: relative;

    &::before {
      content: '•';
      position: absolute;
      left: 2px;
    }
  }
`,x=({groupLabel:e,items:t})=>u.jsxs(g,{children:[u.jsx("span",{children:e}),u.jsx("ul",{children:t.map((o,r)=>u.jsx("li",{children:o},`${o}-${r}`))})]}),f=a.div`
  width: 100%;

  & .popover-target,
  & .popover-wrapper {
    width: 100%;
  }
`,p=({groupLabel:e,items:t,children:o,fullWidth:r,...i})=>{const l=t.length>0,n=u.jsx(m,{usePortal:!0,size:"s",mouseEnterDelay:500,...i,trigger:l?i.trigger??"hover":"none",text:l?u.jsx(x,{groupLabel:e,items:t}):null,opened:l?i.opened:!1,children:o});return r?u.jsx(f,{children:n}):n};try{p.displayName="TooltipList",p.__docgenInfo={description:"",displayName:"TooltipList",props:{groupLabel:{defaultValue:null,description:"",name:"groupLabel",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"string[]"}},fullWidth:{defaultValue:null,description:`Растягивает внутренние обёртки Tooltip (popover-target, popover-wrapper) на 100% ширины родителя.
Используйте при размещении TooltipList внутри Popover-контента (например, FiltersActions.FiltersButtonWithPopover),
чтобы дочерний элемент (Combobox и т.д.) занимал всю доступную ширину.`,name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}export{p as T};
