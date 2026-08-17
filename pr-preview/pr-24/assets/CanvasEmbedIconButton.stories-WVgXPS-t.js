import{r as u,d as s}from"./react-D2T61mpp.js";import{g as d}from"./getFuncAsString-C1kndaLg.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{C as t,T as v}from"./TableCanvas-BwEi6Zc4.js";import{sz as C}from"./@salutejs/plasma-icons-Cpu0f1vH.js";const p=["default","accent","secondary","clear","success","warning","critical","dark","black","white"],E=["xs","s","m","l"],f=p.map(a=>({id:a,view:a})),g={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasEmbedIconButton",tags:["!autodocs"]};function k(a){const{disabled:n}=a,m=u.useMemo(()=>E.map(o=>({key:o,name:o,width:80,renderCell:({row:l})=>s.jsxDEV(t.Container,{direction:"row",alignItems:"center",padding:8,children:s.jsxDEV(t.EmbedIconButton,{icon:s.jsxDEV(C,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasEmbedIconButton/CanvasEmbedIconButton.stories.tsx",lineNumber:52,columnNumber:21},this),view:l.view,buttonSize:o,disabled:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasEmbedIconButton/CanvasEmbedIconButton.stories.tsx",lineNumber:51,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasEmbedIconButton/CanvasEmbedIconButton.stories.tsx",lineNumber:50,columnNumber:11},this)})),[n]);return s.jsxDEV(v,{tableConfig:{containerStyle:{height:"800px"},rowHeight:80},columnConfig:m,rows:f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasEmbedIconButton/CanvasEmbedIconButton.stories.tsx",lineNumber:64,columnNumber:5},this)}const x=`
import { Canvas, ColumnConfig, TableCanvas } from '@sber-digital-finance-ui/ui-kit/components/TableCanvas';
import { IconSearch } from '@sber-digital-finance-ui/ui-kit/icons';

${d("packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasEmbedIconButton/CanvasEmbedIconButton.stories.tsx","Example")}
`,e={...b({code:x,previewSource:"shown"}),args:{disabled:!1},argTypes:{disabled:{control:"boolean"}},render:k};var r,i,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const h=["Default"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:h,default:g},Symbol.toStringTag,{value:"Module"}));export{T as C};
