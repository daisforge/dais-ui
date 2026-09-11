import{r as a,d as t}from"./react-D2T61mpp.js";import{c as l}from"./tableData-UCfjiBCh.js";import{g as u}from"./getFuncAsString-D5MKVTTk.js";import{s as m}from"./storySourceDoc-tVKyHcEN.js";import{T as n,C as i}from"./TableCanvas-C7bsey0_.js";const A={title:"Локальные компоненты/TableCanvas/Tooltip",component:n,parameters:{docs:{}},tags:["!autodocs"]};function I(){const[r]=a.useState(l),e=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"complete",name:"% Complete"}],[]);return t.jsxDEV(n,{tableConfig:{columnsControl:{enable:!0,reorderingHeader:!0}},columnConfig:e,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:40,columnNumber:5},this)}function O(){const[r]=a.useState(l),e=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title",headerCellTooltip:"Колонка: Title",cellTooltip:({row:s,column:o})=>`Ячейка: ${o.name} — ${s.id}`},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer",headerCellTooltip:"Колонка: Developer",cellTooltip:({row:s})=>s.developer?`Разработчик: ${s.developer}`:null},{key:"complete",name:"% Complete"}],[]);return t.jsxDEV(n,{tableConfig:{columnsControl:{enable:!0,reorderingHeader:!0},tooltip:{enabled:!0}},columnConfig:e,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:77,columnNumber:5},this)}function V(){const[r]=a.useState(l),e=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"complete",name:"% Complete",cellTooltip:({row:s})=>{const o=s.complete??0,v=typeof o=="number"&&o>=80;return{text:v?`${o}% — почти готово!`:`Прогресс: ${o}%`,placement:v?"top":"bottom",minWidth:15}}}],[]);return t.jsxDEV(n,{tableConfig:{columnsControl:{enable:!0,reorderingHeader:!0},tooltip:{enabled:!0}},columnConfig:e,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:116,columnNumber:5},this)}function F(){const[r]=a.useState(l),e=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title",cellTooltip:({row:s,column:o})=>({text:`Колонка: ${o.name}
Задача: ${s.task}
ID: ${s.id}`,preserveLineBreaks:!0})},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"complete",name:"% Complete"}],[]);return t.jsxDEV(n,{tableConfig:{columnsControl:{enable:!0,reorderingHeader:!0},tooltip:{enabled:!0}},columnConfig:e,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:150,columnNumber:5},this)}function G(){const[r]=a.useState(l),e=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"action",name:"Действие",renderCell:()=>t.jsxDEV(i.Container,{direction:"row",gap:8,children:t.jsxDEV(i.Button,{portalHoverEnabled:!0,tooltip:"Нажмите для перехода в карточку",variant:"secondary",onClick:()=>{},children:"Подробнее"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:173,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:172,columnNumber:11},this)}],[]);return t.jsxDEV(n,{columnConfig:e,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:188,columnNumber:10},this)}function H(){const[r]=a.useState(l),e="Очень длинный текст подсказки, который заведомо шире тултипа и переносится по словам, чтобы была видна ограниченная ширина",s=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title (ширина из tableConfig)",width:160,renderCell:({row:o})=>t.jsxDEV(i.Container,{direction:"row",alignItems:"center",padding:8,children:t.jsxDEV(i.Text,{overflow:"hidden",textOverflow:"ellipsis",autoTooltip:!0,style:{flexGrow:1},children:`${o.task}: ${e}`},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:206,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:205,columnNumber:11},this)},{key:"developer",name:"Developer (свой maxWidth)",width:160,renderCell:({row:o})=>t.jsxDEV(i.Container,{direction:"row",alignItems:"center",padding:8,children:t.jsxDEV(i.Text,{overflow:"hidden",textOverflow:"ellipsis",autoTooltip:{maxWidth:360},style:{flexGrow:1},children:`${o.developer}: ${e}`},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:223,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:222,columnNumber:11},this)}],[]);return t.jsxDEV(n,{tableConfig:{tooltip:{maxWidth:200}},columnConfig:s,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:239,columnNumber:5},this)}const _=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${u("packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx","ExampleDefaultTooltip")}
`,L=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${u("packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx","ExampleColumnTooltipString")}
`,z=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${u("packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx","ExampleColumnTooltipObject")}
`,q=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${u("packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx","ExampleColumnTooltipMultiline")}
`,J=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import { Canvas, ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${u("packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx","ExampleButtonWithTooltip")}
`,K=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${u("packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx","ExampleGlobalTooltipWidth")}
`,p={name:"Встроенный тултип — hover на drag-иконку (⠿) в шапке колонки",...m({previewSource:"shown",code:_}),render:I},c={name:"cellTooltip (строка) — hover на ячейки Title / Developer",...m({previewSource:"shown",code:L}),render:O},T={name:"cellTooltip (объект) — hover на ячейки % Complete",...m({previewSource:"shown",code:z}),render:V},d={name:"cellTooltip (preserveLineBreaks) — hover на ячейки Title",...m({previewSource:"shown",code:q}),render:F},b={name:"Canvas.Button tooltip — hover на кнопку «Подробнее»",...m({previewSource:"shown",code:J}),render:G},C={name:"Ширина тултипа — глобальная из tableConfig и свой maxWidth у autoTooltip",...m({previewSource:"shown",code:K}),render:H};var k,y,f;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Встроенный тултип — hover на drag-иконку (⠿) в шапке колонки',
  ...storySourceDoc({
    previewSource: 'shown',
    code: defaultTooltipPreCode
  }),
  render: ExampleDefaultTooltip
}`,...(f=(y=p.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,g,x;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'cellTooltip (строка) — hover на ячейки Title / Developer',
  ...storySourceDoc({
    previewSource: 'shown',
    code: columnStringPreCode
  }),
  render: ExampleColumnTooltipString
}`,...(x=(g=c.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var w,S,D;T.parameters={...T.parameters,docs:{...(w=T.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'cellTooltip (объект) — hover на ячейки % Complete',
  ...storySourceDoc({
    previewSource: 'shown',
    code: columnObjectPreCode
  }),
  render: ExampleColumnTooltipObject
}`,...(D=(S=T.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var E,N,j;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'cellTooltip (preserveLineBreaks) — hover на ячейки Title',
  ...storySourceDoc({
    previewSource: 'shown',
    code: columnMultilinePreCode
  }),
  render: ExampleColumnTooltipMultiline
}`,...(j=(N=d.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var B,M,R;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Canvas.Button tooltip — hover на кнопку «Подробнее»',
  ...storySourceDoc({
    previewSource: 'shown',
    code: buttonTooltipPreCode
  }),
  render: ExampleButtonWithTooltip
}`,...(R=(M=b.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var W,$,P;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Ширина тултипа — глобальная из tableConfig и свой maxWidth у autoTooltip',
  ...storySourceDoc({
    previewSource: 'shown',
    code: globalWidthPreCode
  }),
  render: ExampleGlobalTooltipWidth
}`,...(P=($=C.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};const Q=["DefaultTooltipStory","ColumnTooltipStringStory","ColumnTooltipObjectStory","ColumnTooltipMultilineStory","ButtonWithTooltipStory","GlobalTooltipWidthStory"],oe=Object.freeze(Object.defineProperty({__proto__:null,ButtonWithTooltipStory:b,ColumnTooltipMultilineStory:d,ColumnTooltipObjectStory:T,ColumnTooltipStringStory:c,DefaultTooltipStory:p,GlobalTooltipWidthStory:C,__namedExportsOrder:Q,default:A},Symbol.toStringTag,{value:"Module"}));export{oe as T};
