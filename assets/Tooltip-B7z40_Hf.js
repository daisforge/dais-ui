import{j as u}from"./react-DYHuXpTF.js";import{cJ as a,cK as d}from"./@sddsjs/sdds_finai-Bv0LRYjs.js";import{q as s,A as c}from"./styled-components-DDsYmQNq.js";import{o as m}from"./@salutejs/sdds-finai-C2CeMSda.js";const x=s.div`
  color: ${()=>a};
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
`,g=({groupLabel:e,items:o})=>u.jsxs(x,{children:[u.jsx("span",{children:e}),u.jsx("ul",{children:o.map((t,r)=>u.jsx("li",{children:t},`${t}-${r}`))})]}),f=s.div`
  width: 100%;

  & .popover-target,
  & .popover-wrapper {
    width: 100%;
  }
`,p=({groupLabel:e,items:o,children:t,fullWidth:r,...i})=>{const l=o.length>0,n=u.jsx(m,{usePortal:!0,size:"s",mouseEnterDelay:500,...i,trigger:l?i.trigger??"hover":"none",text:l?u.jsx(g,{groupLabel:e,items:o}):null,opened:l?i.opened:!1,children:t});return r?u.jsx(f,{children:n}):n};try{p.displayName="TooltipList",p.__docgenInfo={description:"",displayName:"TooltipList",props:{groupLabel:{defaultValue:null,description:"",name:"groupLabel",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"string[]"}},fullWidth:{defaultValue:null,description:`Растягивает внутренние обёртки Tooltip (popover-target, popover-wrapper) на 100% ширины родителя.
Используйте при размещении TooltipList внутри Popover-контента (например, FiltersActions.FiltersButtonWithPopover),
чтобы дочерний элемент (Combobox и т.д.) занимал всю доступную ширину.`,name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}export{p as T};
