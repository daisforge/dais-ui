import{d as u,r as i}from"./react-D2T61mpp.js";import{g as p}from"./getFuncAsString-BvnkA1Hm.js";import{s as E}from"./storySourceDoc-tVKyHcEN.js";import{C as l,T as A}from"./TableCanvas-DrPLrYqV.js";import{cd as g,cf as f}from"./vendor-UFIhjNPk.js";import{c as k,a as n,d as x,b as y}from"./avatarFixtures-DxWEtnCu.js";const T={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasAvatarGroup",tags:["!autodocs"],parameters:{msw:{handlers:[g.get("/canvas-images/virtual/:person",({params:t})=>new f(k({variant:Number(t.person)}),{headers:{"Content-Type":"image/svg+xml"}}))]}}},h=`
import React, { useMemo } from 'react';
import { Canvas, TableCanvas, type ColumnConfig, type CanvasAvatarItem } from '@daisforge/ui/components/TableCanvas';

${y}
${p("packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatar/avatarFixtures.ts","avatarCopyText")}
`;function G(){const t=i.useMemo(()=>{const e=[{label:"5 → 3 +2",items:n,total:5,visible:3},{label:"2 загружено из 5",items:n.slice(0,2),total:5,visible:3},{label:"Пустая группа",items:[],total:0,visible:3},{label:"Известен только total",items:[],total:5,visible:3},{label:"visibleCount=0",items:n,total:5,visible:0}];return Array.from({length:700},(a,r)=>{const o=e[r%e.length];return{...o,id:r,label:`Строка ${r+1}: ${o.label}`,items:o.items.map((b,d)=>({...b,url:`/canvas-images/virtual/${d}?row=${r}`}))}})},[]),C=i.useMemo(()=>[{key:"label",name:"Строка и сценарий",width:280},...[200,60].map(e=>({key:`team-${e}`,name:e===60?"Узко":"Группа",width:e,copyData:a=>x(a.items,a.total),renderCell:({row:a})=>u.jsxDEV(l.Container,{padding:8,children:u.jsxDEV(l.AvatarGroup,{items:a.items,totalCount:a.total,visibleCount:a.visible},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatarGroup/CanvasAvatarGroup.stories.tsx",lineNumber:88,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatarGroup/CanvasAvatarGroup.stories.tsx",lineNumber:87,columnNumber:11},this)}))],[]);return u.jsxDEV(A,{rows:t,columnConfig:C,tableConfig:{rowHeight:44,containerStyle:{height:"360px"}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatarGroup/CanvasAvatarGroup.stories.tsx",lineNumber:100,columnNumber:5},this)}const s={name:"Количество участников, узкая колонка и прокрутка",...E({preCode:`${h}
${p("packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatarGroup/CanvasAvatarGroup.stories.tsx","VirtualTable")}`,type:"code",previewSource:"hidden"}),render:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV("p",{children:"700 строк с разным количеством участников в обычной и узкой колонках. У каждой строки свои URL фотографий — прокрутите таблицу, чтобы увидеть загрузку новых изображений."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatarGroup/CanvasAvatarGroup.stories.tsx",lineNumber:120,columnNumber:7},void 0),u.jsxDEV(G,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatarGroup/CanvasAvatarGroup.stories.tsx",lineNumber:125,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatarGroup/CanvasAvatarGroup.stories.tsx",lineNumber:119,columnNumber:5},void 0)};var m,v,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Количество участников, узкая колонка и прокрутка',
  ...storySourceDoc({
    preCode: \`\${preCode}
\${getFuncAsString('packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatarGroup/CanvasAvatarGroup.stories.tsx', 'VirtualTable')}\`,
    type: 'code',
    previewSource: 'hidden'
  }),
  render: () => <>
      <p>
        700 строк с разным количеством участников в обычной и узкой колонках. У
        каждой строки свои URL фотографий — прокрутите таблицу, чтобы увидеть
        загрузку новых изображений.
      </p>
      <VirtualTable />
    </>
}`,...(c=(v=s.parameters)==null?void 0:v.docs)==null?void 0:c.source}}};const N=["Virtualized"],B=Object.freeze(Object.defineProperty({__proto__:null,Virtualized:s,__namedExportsOrder:N,default:T},Symbol.toStringTag,{value:"Module"}));export{B as C};
