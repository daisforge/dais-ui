import{r as d,j as a}from"./react-CAOzMBF_.js";import{g as u}from"./getFuncAsString-DnrLf2YT.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{C as r,T as b}from"./TableCanvas-DlX-Wh2b.js";import{sL as g}from"./@salutejs/plasma-icons-Do5ggeDI.js";const f=["default","accent","secondary","clear","success","warning","critical","dark","black","white"],C=["xs","s","m","l"],v=f.map(o=>({id:o,view:o})),S={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasEmbedIconButton",tags:["!autodocs"]};function x(o){const{disabled:s}=o,l=d.useMemo(()=>C.map(n=>({key:n,name:n,width:80,renderCell:({row:m})=>a.jsx(r.Container,{direction:"row",alignItems:"center",padding:8,children:a.jsx(r.EmbedIconButton,{icon:a.jsx(g,{}),view:m.view,buttonSize:n,disabled:s})})})),[s]);return a.jsx(b,{tableConfig:{containerStyle:{height:"800px"},rowHeight:80},columnConfig:l,rows:v})}const E=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconSearch } from '@daisforge/ui/icons';

${u("packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasEmbedIconButton/CanvasEmbedIconButton.stories.tsx","Example")}
`,e={...p({code:E,previewSource:"shown"}),args:{disabled:!1},argTypes:{disabled:{control:"boolean"}},render:x};var t,c,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const w=["Default"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:w,default:S},Symbol.toStringTag,{value:"Module"}));export{_ as C};
