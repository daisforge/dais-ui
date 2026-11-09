import{r as l,j as e}from"./react-CAOzMBF_.js";import{g as b}from"./getFuncAsString-BlcJv7wu.js";import{s as h}from"./storySourceDoc-tVKyHcEN.js";import{C as r,T as w}from"./TableCanvas-DfM29rtC.js";import{sM as d}from"./@salutejs/plasma-icons-DBF9uERs.js";const E=["default","accent","secondary","clear","success","warning","critical","dark","black","white"],I=["xs","s","m","l"],k=E.map(o=>({id:o,view:o})),y={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasIconButton",tags:["!autodocs"]};function j(o){const{disabled:t}=o,u=l.useMemo(()=>I.map(s=>({key:s,name:s,width:80,renderCell:({row:n})=>e.jsx(r.Container,{direction:"row",alignItems:"center",padding:8,children:e.jsx(r.IconButton,{icon:e.jsx(d,{}),view:n.view,buttonSize:s,disabled:t})})})),[t]);return e.jsx(w,{tableConfig:{containerStyle:{height:"800px"},rowHeight:80},columnConfig:u,rows:k})}const B=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconSearch } from '@daisforge/ui/icons';

${b("packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasIconButton/CanvasIconButton.stories.tsx","Example")}
`,c={...h({code:B,previewSource:"shown"}),args:{disabled:!1},argTypes:{disabled:{control:"boolean"}},render:j},A=Array.from({length:8},(o,t)=>({id:t+1,task:`Задача ${t+1}`}));function D(){const[o,t]=l.useState([]),u=n=>t(i=>[n,...i].slice(0,5)),s=l.useMemo(()=>[{key:"task",name:"Задача",width:120},{key:"normal",name:"Без interaction",width:150,renderCell:({row:n})=>e.jsx(r.Container,{direction:"row",alignItems:"center",padding:8,children:e.jsx(r.IconButton,{icon:e.jsx(d,{}),view:"clear",buttonSize:"xs",onClick:()=>u(`кнопка без interaction, строка ${n.id}`)})})},{key:"keep",name:"С interaction",width:150,renderCell:({row:n})=>e.jsx(r.Container,{direction:"row",alignItems:"center",padding:8,children:e.jsx(r.IconButton,{icon:e.jsx(d,{}),view:"clear",buttonSize:"xs",interaction:{selection:"keep",cellClick:"stop"},onClick:()=>u(`кнопка с interaction, строка ${n.id}`)})})}],[]);return e.jsxs("div",{children:[e.jsx("p",{style:{minHeight:100,fontSize:13,marginBottom:8},children:o.length===0?"событий пока нет":o.map((n,i)=>e.jsx("span",{style:{display:"block"},children:n},i))}),e.jsx(w,{tableConfig:{containerStyle:{height:"400px"},onCellClicked:([n,i])=>u(`onCellClicked: колонка ${n}, строка ${i+1}`)},columnConfig:s,rows:A})]})}const T=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconSearch } from '@daisforge/ui/icons';

${b("packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasIconButton/CanvasIconButton.stories.tsx","InteractionExample")}
`,a={name:"Клик без выделения ячейки (interaction)",...h({code:T,previewSource:"shown"}),render:()=>e.jsx(D,{})};var m,p,C;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(C=(p=c.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var g,x,f,v,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Клик без выделения ячейки (interaction)',
  ...storySourceDoc({
    code: interactionCode,
    previewSource: 'shown'
  }),
  render: () => <InteractionExample />
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source},description:{story:"`interaction` у кнопки в ячейке: клик по ней не переносит выделение и не доходит до\n`onCellClicked`, как у шеврона дерева или действия в строке.",...(S=(v=a.parameters)==null?void 0:v.docs)==null?void 0:S.description}}};const F=["Default","Interaction"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Interaction:a,__namedExportsOrder:F,default:y},Symbol.toStringTag,{value:"Module"}));export{H as C};
