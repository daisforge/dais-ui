import{r as e,d as s}from"./react-D2T61mpp.js";import{c}from"./tableData-UCfjiBCh.js";import{g as T}from"./getFuncAsString-Bp1PYzKJ.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{T as n,C as b}from"./TableCanvas-DQRIFFPf.js";const R={title:"Локальные компоненты/TableCanvas/Tooltip",component:n,parameters:{docs:{}},tags:["!autodocs"]};function A(){const[o]=e.useState(c),t=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"complete",name:"% Complete"}],[]);return s.jsxDEV(n,{tableConfig:{columnsControl:{enable:!0,reorderingHeader:!0}},columnConfig:t,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:40,columnNumber:5},this)}function P(){const[o]=e.useState(c),t=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title",headerCellTooltip:"Колонка: Title",cellTooltip:({row:a,column:r})=>`Ячейка: ${r.name} — ${a.id}`},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer",headerCellTooltip:"Колонка: Developer",cellTooltip:({row:a})=>a.developer?`Разработчик: ${a.developer}`:null},{key:"complete",name:"% Complete"}],[]);return s.jsxDEV(n,{tableConfig:{columnsControl:{enable:!0,reorderingHeader:!0},tooltip:{enabled:!0}},columnConfig:t,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:77,columnNumber:5},this)}function $(){const[o]=e.useState(c),t=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"complete",name:"% Complete",cellTooltip:({row:a})=>{const r=a.complete??0,C=typeof r=="number"&&r>=80;return{text:C?`${r}% — почти готово!`:`Прогресс: ${r}%`,placement:C?"top":"bottom",minWidth:15}}}],[]);return s.jsxDEV(n,{tableConfig:{columnsControl:{enable:!0,reorderingHeader:!0},tooltip:{enabled:!0}},columnConfig:t,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:116,columnNumber:5},this)}function I(){const[o]=e.useState(c),t=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title",cellTooltip:({row:a,column:r})=>({text:`Колонка: ${r.name}
Задача: ${a.task}
ID: ${a.id}`,preserveLineBreaks:!0})},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"complete",name:"% Complete"}],[]);return s.jsxDEV(n,{tableConfig:{columnsControl:{enable:!0,reorderingHeader:!0},tooltip:{enabled:!0}},columnConfig:t,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:150,columnNumber:5},this)}function O(){const[o]=e.useState(c),t=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"action",name:"Действие",renderCell:()=>s.jsxDEV(b.Container,{direction:"row",gap:8,children:s.jsxDEV(b.Button,{portalHoverEnabled:!0,tooltip:"Нажмите для перехода в карточку",variant:"secondary",onClick:()=>{},children:"Подробнее"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:173,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:172,columnNumber:11},this)}],[]);return s.jsxDEV(n,{columnConfig:t,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:188,columnNumber:10},this)}const F=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${T("packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx","ExampleDefaultTooltip")}
`,V=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${T("packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx","ExampleColumnTooltipString")}
`,H=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${T("packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx","ExampleColumnTooltipObject")}
`,W=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${T("packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx","ExampleColumnTooltipMultiline")}
`,_=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import { Canvas, ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${T("packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx","ExampleButtonWithTooltip")}
`,l={name:"Встроенный тултип — hover на drag-иконку (⠿) в шапке колонки",...d({previewSource:"shown",code:F}),render:A},i={name:"cellTooltip (строка) — hover на ячейки Title / Developer",...d({previewSource:"shown",code:V}),render:P},u={name:"cellTooltip (объект) — hover на ячейки % Complete",...d({previewSource:"shown",code:H}),render:$},m={name:"cellTooltip (preserveLineBreaks) — hover на ячейки Title",...d({previewSource:"shown",code:W}),render:I},p={name:"Canvas.Button tooltip — hover на кнопку «Подробнее»",...d({previewSource:"shown",code:_}),render:O};var v,y,k;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Встроенный тултип — hover на drag-иконку (⠿) в шапке колонки',
  ...storySourceDoc({
    previewSource: 'shown',
    code: defaultTooltipPreCode
  }),
  render: ExampleDefaultTooltip
}`,...(k=(y=l.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var f,g,S;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'cellTooltip (строка) — hover на ячейки Title / Developer',
  ...storySourceDoc({
    previewSource: 'shown',
    code: columnStringPreCode
  }),
  render: ExampleColumnTooltipString
}`,...(S=(g=i.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var D,h,x;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'cellTooltip (объект) — hover на ячейки % Complete',
  ...storySourceDoc({
    previewSource: 'shown',
    code: columnObjectPreCode
  }),
  render: ExampleColumnTooltipObject
}`,...(x=(h=u.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var w,E,N;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'cellTooltip (preserveLineBreaks) — hover на ячейки Title',
  ...storySourceDoc({
    previewSource: 'shown',
    code: columnMultilinePreCode
  }),
  render: ExampleColumnTooltipMultiline
}`,...(N=(E=m.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var M,j,B;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Canvas.Button tooltip — hover на кнопку «Подробнее»',
  ...storySourceDoc({
    previewSource: 'shown',
    code: buttonTooltipPreCode
  }),
  render: ExampleButtonWithTooltip
}`,...(B=(j=p.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const L=["DefaultTooltipStory","ColumnTooltipStringStory","ColumnTooltipObjectStory","ColumnTooltipMultilineStory","ButtonWithTooltipStory"],Q=Object.freeze(Object.defineProperty({__proto__:null,ButtonWithTooltipStory:p,ColumnTooltipMultilineStory:m,ColumnTooltipObjectStory:u,ColumnTooltipStringStory:i,DefaultTooltipStory:l,__namedExportsOrder:L,default:R},Symbol.toStringTag,{value:"Module"}));export{Q as T};
