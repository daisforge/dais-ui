import{r as i,j as n}from"./react-CAOzMBF_.js";import{c as p}from"./tableData-DVJFoYoT.js";import A from"./DocStoryTemplate-Cf946dgV.js";import{g as C}from"./getFuncAsString-DnrLf2YT.js";import{s as y}from"./storySourceDoc-tVKyHcEN.js";import{T as v,C as t}from"./TableCanvas-DlX-Wh2b.js";import{m as g}from"./TableGlide-DbDA-PPi.js";import{sL as P}from"./@salutejs/plasma-icons-Do5ggeDI.js";const R={title:"Локальные компоненты/TableCanvas/Custom renders",parameters:{docs:{page:A}},tags:["!autodocs"]},j=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import {
  Canvas,
  ColumnConfig,
  TableCanvas,
  tableCanvasTheme,
} from '@daisforge/ui/components/TableCanvas';
import { Badge } from '@daisforge/ui';
import React, { ComponentProps, useMemo, useState } from 'react';
`,c={name:"Кастомизация рендера ячеек шапки, данных, итоговых данных",...y({preCode:j,previewSource:"shown"}),render:()=>{const[r]=i.useState(p(0,20)),a=i.useMemo(()=>[{key:"id",name:"ID",renderHeaderCell({theme:e,column:o}){return n.jsx(t.Container,{padding:{left:e.cellHorizontalPadding,right:e.cellHorizontalPadding},alignItems:"center",children:n.jsxs(t.Text,{color:e.textHeader,font:e.headerFontStyle,children:[o.name," - кастомный renderHeaderCell"]})})},renderCell:({column:e,row:o,theme:l})=>{var h;return n.jsx(t.Container,{padding:{left:l.cellHorizontalPadding,right:l.cellHorizontalPadding},alignItems:"center",children:n.jsx(t.Badge,{view:"accent",text:((h=o[e.key])==null?void 0:h.toString())??""})})},renderSummaryCell:({row:e,theme:o})=>n.jsx(t.Container,{padding:{left:o.cellHorizontalPadding,right:o.cellHorizontalPadding},alignItems:"center",children:n.jsxs(t.Text,{font:o.baseFontStyle,children:["Итого ",(e==null?void 0:e.toString())??""," - кастомный renderSummaryCell"]})})},{key:"task",name:n.jsx(t.Container,{padding:{left:g.cellHorizontalPadding},alignItems:"center",children:n.jsx(t.Text,{font:g.headerFontStyle,color:g.textHeader,children:"Task - кастомный canvas-name"})}),width:200,renderCell:({row:e,rowInd:o,theme:l})=>n.jsx(t.Container,{padding:{left:l.cellHorizontalPadding,right:l.cellHorizontalPadding},alignItems:"center",children:n.jsx(t.Button,{view:"secondary",onClick:()=>alert(`Строка ${o}. Клик по кнопке кастомной ячейки`),children:`${e==null?void 0:e.task} кликните`})})},{key:"priority",name:"Priority",renderCell:({row:e,theme:o})=>{const l={High:"accent",Medium:"warning",Low:"dark",Critical:"negative"};return n.jsx(t.Container,{padding:{left:o.cellHorizontalPadding,right:o.cellHorizontalPadding},alignItems:"center",children:n.jsx(t.Badge,{text:e.priority,view:l[e.priority]||"default",pilled:!0})})}},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return n.jsx(v,{tableConfig:{containerStyle:{height:700},summaryRows:{showDefault:!0,showInControl:!1}},columnConfig:a,rows:r,bottomSummaryRows:[r.length]})}};function s(r){return({row:a,theme:e,hovered:o})=>n.jsxs(t.Container,{direction:"row",alignItems:"center",columnGap:8,padding:{left:e.cellHorizontalPadding,right:e.cellHorizontalPadding},style:{width:"100%"},children:[n.jsx(t.Text,{font:e.baseFontStyle,style:{flexGrow:1},children:r(a)}),n.jsx(t.Container,{alignItems:"center",justifyContent:"center",style:{width:20,height:20},children:o.cellHover&&n.jsx(t.Icon,{icon:n.jsx(P,{}),size:16,color:e.tokens.textAccent})})]})}function D(){const[r]=i.useState(p(0,20)),a=i.useMemo(()=>[{key:"id",name:"ID",width:80,renderCell:s(e=>e.id)},{key:"task",name:"Task",width:320,renderCell:s(e=>e.task)},{key:"priority",name:"Priority",width:140,renderCell:s(e=>e.priority)},{key:"issueType",name:"Issue Type",width:160,renderCell:s(e=>e.issueType)},{key:"complete",name:"% Complete",renderCell:s(e=>`${e.complete}%`)}],[]);return n.jsx(v,{tableConfig:{containerStyle:{height:500}},columnConfig:a,rows:r})}const z=`
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
`,d={name:"Иконка при наведении на ячейку",...y({code:z,previewSource:"shown"}),render:D};function u(r){return({row:a,theme:e,active:o})=>n.jsxs(t.Container,{direction:"row",alignItems:"center",columnGap:8,padding:{left:e.cellHorizontalPadding,right:e.cellHorizontalPadding},style:{width:"100%"},children:[n.jsx(t.Text,{font:e.baseFontStyle,style:{flexGrow:1},children:r(a)}),n.jsx(t.Container,{alignItems:"center",justifyContent:"center",style:{width:20,height:20},children:o.cellActive&&n.jsx(t.Icon,{icon:n.jsx(P,{}),size:16,color:e.tokens.textAccent})})]})}function E(){const[r]=i.useState(p(0,20)),a=i.useMemo(()=>[{key:"id",name:"ID",width:80,renderCell:u(e=>e.id)},{key:"task",name:"Task",width:320,renderCell:u(e=>e.task)},{key:"priority",name:"Priority",width:140,renderCell:u(e=>e.priority)},{key:"issueType",name:"Issue Type",width:160,renderCell:u(e=>e.issueType)},{key:"complete",name:"% Complete",renderCell:u(e=>`${e.complete}%`)}],[]);return n.jsx(v,{tableConfig:{containerStyle:{height:500},highlightActiveType:"cell"},columnConfig:a,rows:r})}const F=`
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
`,m={name:"Иконка активной ячейки",...y({code:F,previewSource:"shown"}),render:E};var f,w,x;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(w=c.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var T,k,I;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Иконка при наведении на ячейку',
  ...storySourceDoc({
    code: hoverIconCode,
    previewSource: 'shown'
  }),
  render: HoveredCellIconExample
}`,...(I=(k=d.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var b,S,H;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Иконка активной ячейки',
  ...storySourceDoc({
    code: activeIconCode,
    previewSource: 'shown'
  }),
  render: ActiveCellIconExample
}`,...(H=(S=m.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};const B=["CustomRenderCell","HoveredCellIcon","ActiveCellIcon"],q=Object.freeze(Object.defineProperty({__proto__:null,ActiveCellIcon:m,CustomRenderCell:c,HoveredCellIcon:d,__namedExportsOrder:B,default:R},Symbol.toStringTag,{value:"Module"}));export{q as T};
