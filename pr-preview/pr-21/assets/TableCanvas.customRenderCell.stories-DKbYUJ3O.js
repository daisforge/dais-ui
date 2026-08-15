import{r as i,d as n}from"./react-D2T61mpp.js";import{c as v}from"./tableData-UCfjiBCh.js";import I from"./DocStoryTemplate-Cj9EyiOP.js";import{g as C}from"./getFuncAsString-NmEhMY7T.js";import{s as g}from"./storySourceDoc-tVKyHcEN.js";import{T as p,C as a}from"./TableCanvas-Dm4TLh_W.js";import{k as b}from"./TableGlide-CRNi9qT2.js";import{sz as E}from"./@salutejs/plasma-icons-CVXIcC6c.js";const S={title:"Локальные компоненты/TableCanvas/Custom renders",parameters:{docs:{page:I}},tags:["!autodocs"]},H=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import {
  Canvas,
  ColumnConfig,
  TableCanvas,
  tableCanvasTheme,
} from '@daisforge/ui/components/TableCanvas';
import { Badge } from '@daisforge/ui';
import React, { ComponentProps, useMemo, useState } from 'react';
`,d={name:"Кастомизация рендера ячеек шапки, данных, итоговых данных",...g({preCode:H,previewSource:"shown"}),render:()=>{const[r]=i.useState(v(0,20)),s=i.useMemo(()=>[{key:"id",name:"ID",renderHeaderCell({theme:e,column:o}){return n.jsxDEV(a.Container,{padding:{left:e.cellHorizontalPadding,right:e.cellHorizontalPadding},alignItems:"center",children:n.jsxDEV(a.Text,{color:e.textHeader,font:e.headerFontStyle,children:[o.name," - кастомный renderHeaderCell"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx",lineNumber:69,columnNumber:17},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx",lineNumber:62,columnNumber:15},this)},renderCell:({column:e,row:o,theme:t})=>{var f;return n.jsxDEV(a.Container,{padding:{left:t.cellHorizontalPadding,right:t.cellHorizontalPadding},alignItems:"center",children:n.jsxDEV(a.Badge,{view:"accent",text:((f=o[e.key])==null?void 0:f.toString())??""},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx",lineNumber:86,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx",lineNumber:79,columnNumber:13},void 0)},renderSummaryCell:({row:e,theme:o})=>n.jsxDEV(a.Container,{padding:{left:o.cellHorizontalPadding,right:o.cellHorizontalPadding},alignItems:"center",children:n.jsxDEV(a.Text,{font:o.baseFontStyle,children:["Итого ",(e==null?void 0:e.toString())??""," - кастомный renderSummaryCell"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx",lineNumber:100,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx",lineNumber:93,columnNumber:13},void 0)},{key:"task",name:n.jsxDEV(a.Container,{padding:{left:b.cellHorizontalPadding},alignItems:"center",children:n.jsxDEV(a.Text,{font:b.headerFontStyle,color:b.textHeader,children:"Task - кастомный canvas-name"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx",lineNumber:113,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx",lineNumber:109,columnNumber:13},void 0),width:200,renderCell:({row:e,rowInd:o,theme:t})=>n.jsxDEV(a.Container,{padding:{left:t.cellHorizontalPadding,right:t.cellHorizontalPadding},alignItems:"center",children:n.jsxDEV(a.Button,{view:"secondary",onClick:()=>alert(`Строка ${o}. Клик по кнопке кастомной ячейки`),children:`${e==null?void 0:e.task} кликните`},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx",lineNumber:130,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx",lineNumber:123,columnNumber:13},void 0)},{key:"priority",name:"Priority",renderCell:({row:e,theme:o})=>{const t={High:"accent",Medium:"warning",Low:"dark",Critical:"negative"};return n.jsxDEV(a.Container,{padding:{left:o.cellHorizontalPadding,right:o.cellHorizontalPadding},alignItems:"center",children:n.jsxDEV(a.Badge,{text:e.priority,view:t[e.priority]||"default",pilled:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx",lineNumber:164,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx",lineNumber:157,columnNumber:15},void 0)}},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return n.jsxDEV(p,{tableConfig:{containerStyle:{height:700},summaryRows:{showDefault:!0,showInControl:!1}},columnConfig:s,rows:r,bottomSummaryRows:[r.length]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx",lineNumber:186,columnNumber:7},void 0)}};function l(r){return({row:s,theme:e,hovered:o})=>n.jsxDEV(a.Container,{direction:"row",alignItems:"center",columnGap:8,padding:{left:e.cellHorizontalPadding,right:e.cellHorizontalPadding},style:{width:"100%"},children:[n.jsxDEV(a.Text,{font:e.baseFontStyle,style:{flexGrow:1},children:r(s)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx",lineNumber:216,columnNumber:7},this),n.jsxDEV(a.Container,{alignItems:"center",justifyContent:"center",style:{width:20,height:20},children:o.cellHover&&n.jsxDEV(a.Icon,{icon:n.jsxDEV(E,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx",lineNumber:226,columnNumber:19},this),size:16,color:e.tokens.textAccent},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx",lineNumber:225,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx",lineNumber:219,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx",lineNumber:206,columnNumber:5},this)}function P(){const[r]=i.useState(v(0,20)),s=i.useMemo(()=>[{key:"id",name:"ID",width:80,renderCell:l(e=>e.id)},{key:"task",name:"Task",width:320,renderCell:l(e=>e.task)},{key:"priority",name:"Priority",width:140,renderCell:l(e=>e.priority)},{key:"issueType",name:"Issue Type",width:160,renderCell:l(e=>e.issueType)},{key:"complete",name:"% Complete",renderCell:l(e=>`${e.complete}%`)}],[]);return n.jsxDEV(p,{tableConfig:{containerStyle:{height:500}},columnConfig:s,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx",lineNumber:274,columnNumber:5},this)}const A=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import {
  Canvas,
  ColumnConfig,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';
import { IconSearch } from '@daisforge/ui/icons';
import React, { useMemo, useState } from 'react';

${C("packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx","renderCellWithHoverIcon")}

${C("packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx","HoveredCellIconExample")}
`,m={name:"Иконка при наведении на ячейку",...g({code:A,previewSource:"shown"}),render:P};function u(r){return({row:s,theme:e,active:o})=>n.jsxDEV(a.Container,{direction:"row",alignItems:"center",columnGap:8,padding:{left:e.cellHorizontalPadding,right:e.cellHorizontalPadding},style:{width:"100%"},children:[n.jsxDEV(a.Text,{font:e.baseFontStyle,style:{flexGrow:1},children:r(s)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx",lineNumber:326,columnNumber:7},this),n.jsxDEV(a.Container,{alignItems:"center",justifyContent:"center",style:{width:20,height:20},children:o.cellActive&&n.jsxDEV(a.Icon,{icon:n.jsxDEV(E,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx",lineNumber:336,columnNumber:19},this),size:16,color:e.tokens.textAccent},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx",lineNumber:335,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx",lineNumber:329,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx",lineNumber:316,columnNumber:5},this)}function j(){const[r]=i.useState(v(0,20)),s=i.useMemo(()=>[{key:"id",name:"ID",width:80,renderCell:u(e=>e.id)},{key:"task",name:"Task",width:320,renderCell:u(e=>e.task)},{key:"priority",name:"Priority",width:140,renderCell:u(e=>e.priority)},{key:"issueType",name:"Issue Type",width:160,renderCell:u(e=>e.issueType)},{key:"complete",name:"% Complete",renderCell:u(e=>`${e.complete}%`)}],[]);return n.jsxDEV(p,{tableConfig:{containerStyle:{height:500},highlightActiveType:"cell"},columnConfig:s,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx",lineNumber:384,columnNumber:5},this)}const z=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import {
  Canvas,
  ColumnConfig,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';
import { IconSearch } from '@daisforge/ui/icons';
import React, { useMemo, useState } from 'react';

${C("packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx","renderCellWithActiveIcon")}

${C("packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx","ActiveCellIconExample")}
`,c={name:"Иконка активной ячейки",...g({code:z,previewSource:"shown"}),render:j};var h,T,k;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Кастомизация рендера ячеек шапки, данных, итоговых данных',
  ...storySourceDoc({
    preCode: customRenderCellPreCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState<Row[]>(createRows(0, 20));
    const columnConfig = useMemo((): ColumnConfig<Row>[] => [{
      key: 'id',
      name: 'ID',
      renderHeaderCell({
        theme,
        column
      }) {
        return <Canvas.Container padding={{
          left: theme.cellHorizontalPadding,
          right: theme.cellHorizontalPadding
        }} alignItems="center">
                <Canvas.Text color={theme.textHeader} font={theme.headerFontStyle}>
                  {column.name} - кастомный renderHeaderCell
                </Canvas.Text>
              </Canvas.Container>;
      },
      renderCell: ({
        column,
        row,
        theme
      }) => <Canvas.Container padding={{
        left: theme.cellHorizontalPadding,
        right: theme.cellHorizontalPadding
      }} alignItems="center">
              <Canvas.Badge view="accent" text={row[column.key as keyof Row]?.toString() ?? ''} />
            </Canvas.Container>,
      renderSummaryCell: ({
        row: summ,
        theme
      }) => <Canvas.Container padding={{
        left: theme.cellHorizontalPadding,
        right: theme.cellHorizontalPadding
      }} alignItems="center">
              <Canvas.Text font={theme.baseFontStyle}>
                Итого {summ?.toString() ?? ''} - кастомный renderSummaryCell
              </Canvas.Text>
            </Canvas.Container>
    }, {
      key: 'task',
      name: <Canvas.Container padding={{
        left: tableCanvasTheme.cellHorizontalPadding
      }} alignItems="center">
              <Canvas.Text font={tableCanvasTheme.headerFontStyle} color={tableCanvasTheme.textHeader}>
                Task - кастомный canvas-name
              </Canvas.Text>
            </Canvas.Container>,
      width: 200,
      renderCell: ({
        row,
        rowInd,
        theme
      }) => <Canvas.Container padding={{
        left: theme.cellHorizontalPadding,
        right: theme.cellHorizontalPadding
      }} alignItems="center">
              <Canvas.Button view="secondary" onClick={() =>
        // Для примера
        // eslint-disable-next-line no-alert
        alert(\`Строка \${rowInd}. Клик по кнопке кастомной ячейки\`)}>
                {\`\${row?.task} кликните\`}
              </Canvas.Button>
            </Canvas.Container>
    }, {
      key: 'priority',
      name: 'Priority',
      renderCell: ({
        row,
        theme
      }) => {
        const viewMap: Record<Row['priority'], ComponentProps<typeof Badge>['view']> = {
          High: 'accent',
          Medium: 'warning',
          Low: 'dark',
          Critical: 'negative'
        };
        return <Canvas.Container padding={{
          left: theme.cellHorizontalPadding,
          right: theme.cellHorizontalPadding
        }} alignItems="center">
                <Canvas.Badge text={row.priority} view={viewMap[row.priority] || 'default'} pilled />
              </Canvas.Container>;
      }
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 700
      },
      summaryRows: {
        showDefault: true,
        showInControl: false
      }
    }} columnConfig={columnConfig} rows={rows} bottomSummaryRows={[rows.length]} />;
  }
}`,...(k=(T=d.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var y,w,x;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Иконка при наведении на ячейку',
  ...storySourceDoc({
    code: hoverIconCode,
    previewSource: 'shown'
  }),
  render: HoveredCellIconExample
}`,...(x=(w=m.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var R,N,D;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Иконка активной ячейки',
  ...storySourceDoc({
    code: activeIconCode,
    previewSource: 'shown'
  }),
  render: ActiveCellIconExample
}`,...(D=(N=c.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};const V=["CustomRenderCell","HoveredCellIcon","ActiveCellIcon"],L=Object.freeze(Object.defineProperty({__proto__:null,ActiveCellIcon:c,CustomRenderCell:d,HoveredCellIcon:m,__namedExportsOrder:V,default:S},Symbol.toStringTag,{value:"Module"}));export{L as T};
