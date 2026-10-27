import{r as d,j as a}from"./react-CAOzMBF_.js";import{g as u}from"./getFuncAsString-DnrLf2YT.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{C as r,T as g}from"./TableCanvas-DlX-Wh2b.js";import{sL as f}from"./@salutejs/plasma-icons-Do5ggeDI.js";const C=["default","accent","secondary","clear","success","warning","critical","dark","black","white"],b=["xs","s","m","l"],v=C.map(o=>({id:o,view:o})),S={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasIconButton",tags:["!autodocs"]};function x(o){const{disabled:s}=o,l=d.useMemo(()=>b.map(n=>({key:n,name:n,width:80,renderCell:({row:m})=>a.jsx(r.Container,{direction:"row",alignItems:"center",padding:8,children:a.jsx(r.IconButton,{icon:a.jsx(f,{}),view:m.view,buttonSize:n,disabled:s})})})),[s]);return a.jsx(g,{tableConfig:{containerStyle:{height:"800px"},rowHeight:80},columnConfig:l,rows:v})}const w=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconSearch } from '@daisforge/ui/icons';

${u("packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasIconButton/CanvasIconButton.stories.tsx","Example")}
`,e={...p({code:w,previewSource:"shown"}),args:{disabled:!1},argTypes:{disabled:{control:"boolean"}},render:x};var t,c,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...storySourceDoc({
    code,
    previewSource: 'shown'
  }),
  args: {
    disabled: false
  },
  argTypes: {
    disabled: {
      control: 'boolean'
    }
  },
  render: Example
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const h=["Default"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:h,default:S},Symbol.toStringTag,{value:"Module"}));export{_ as C};
