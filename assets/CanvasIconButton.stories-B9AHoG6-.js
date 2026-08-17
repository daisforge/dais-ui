import{r as m,d as s}from"./react-D2T61mpp.js";import{g as d}from"./getFuncAsString-C1kndaLg.js";import{s as v}from"./storySourceDoc-tVKyHcEN.js";import{C as t,T as b}from"./TableCanvas-Cq6xg2aP.js";import{sz as C}from"./@salutejs/plasma-icons-Dn1uY4zn.js";const p=["default","accent","secondary","clear","success","warning","critical","dark","black","white"],f=["xs","s","m","l"],g=p.map(a=>({id:a,view:a})),k={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasIconButton",tags:["!autodocs"]};function x(a){const{disabled:n}=a,l=m.useMemo(()=>f.map(o=>({key:o,name:o,width:80,renderCell:({row:u})=>s.jsxDEV(t.Container,{direction:"row",alignItems:"center",padding:8,children:s.jsxDEV(t.IconButton,{icon:s.jsxDEV(C,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasIconButton/CanvasIconButton.stories.tsx",lineNumber:51,columnNumber:21},this),view:u.view,buttonSize:o,disabled:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasIconButton/CanvasIconButton.stories.tsx",lineNumber:50,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasIconButton/CanvasIconButton.stories.tsx",lineNumber:49,columnNumber:11},this)})),[n]);return s.jsxDEV(b,{tableConfig:{containerStyle:{height:"800px"},rowHeight:80},columnConfig:l,rows:g},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasIconButton/CanvasIconButton.stories.tsx",lineNumber:63,columnNumber:5},this)}const h=`
import { Canvas, ColumnConfig, TableCanvas } from '@sber-digital-finance-ui/ui-kit/components/TableCanvas';
import { IconSearch } from '@sber-digital-finance-ui/ui-kit/icons';

${d("packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasIconButton/CanvasIconButton.stories.tsx","Example")}
`,e={...v({code:h,previewSource:"shown"}),args:{disabled:!1},argTypes:{disabled:{control:"boolean"}},render:x};var r,i,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const E=["Default"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:E,default:k},Symbol.toStringTag,{value:"Module"}));export{T as C};
