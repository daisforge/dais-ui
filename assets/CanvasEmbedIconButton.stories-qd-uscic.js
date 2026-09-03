import{r as u,d as a}from"./react-D2T61mpp.js";import{g as d}from"./getFuncAsString-Bp1PYzKJ.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{C as t,T as v}from"./TableCanvas-D12y3FZC.js";import{sF as C}from"./@salutejs/plasma-icons-Co7qeio2.js";const p=["default","accent","secondary","clear","success","warning","critical","dark","black","white"],E=["xs","s","m","l"],f=p.map(s=>({id:s,view:s})),g={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasEmbedIconButton",tags:["!autodocs"]};function x(s){const{disabled:n}=s,m=u.useMemo(()=>E.map(o=>({key:o,name:o,width:80,renderCell:({row:l})=>a.jsxDEV(t.Container,{direction:"row",alignItems:"center",padding:8,children:a.jsxDEV(t.EmbedIconButton,{icon:a.jsxDEV(C,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasEmbedIconButton/CanvasEmbedIconButton.stories.tsx",lineNumber:52,columnNumber:21},this),view:l.view,buttonSize:o,disabled:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasEmbedIconButton/CanvasEmbedIconButton.stories.tsx",lineNumber:51,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasEmbedIconButton/CanvasEmbedIconButton.stories.tsx",lineNumber:50,columnNumber:11},this)})),[n]);return a.jsxDEV(v,{tableConfig:{containerStyle:{height:"800px"},rowHeight:80},columnConfig:m,rows:f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasEmbedIconButton/CanvasEmbedIconButton.stories.tsx",lineNumber:64,columnNumber:5},this)}const h=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconSearch } from '@daisforge/ui/icons';

${d("packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasEmbedIconButton/CanvasEmbedIconButton.stories.tsx","Example")}
`,e={...b({code:h,previewSource:"shown"}),args:{disabled:!1},argTypes:{disabled:{control:"boolean"}},render:x};var r,i,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const I=["Default"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:I,default:g},Symbol.toStringTag,{value:"Module"}));export{T as C};
