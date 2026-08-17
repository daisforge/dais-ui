import{r as t,d as a}from"./react-D2T61mpp.js";import{c as d}from"./tableData-UCfjiBCh.js";import w from"./DocStoryTemplate-CckzbYDb.js";import{s as S}from"./storySourceDoc-tVKyHcEN.js";import{f as C}from"./Table-BdLRp9xu.js";import{u as f,r as g}from"./@salutejs/sdds-themes-DMMPng_c.js";const v={title:"Локальные компоненты/Table/SummaryRows",tags:["!autodocs"],parameters:{docs:{page:w}}},R=`
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Badge,
  Box,
  Button,
  ColumnConfig,
  ColumnOrColumnGroupConfig,
  RenderCellProps,
  RowHeightFunc,
  SIZES,
  Select,
  Switch,
  Table,
  TextField,
} from '@daisforge/ui';
import { IconAddOutline, IconBoxOutline, IconSber } from '@daisforge/ui/icons';
`,r={...S({preCode:R,previewSource:"shown"}),render:()=>{const[o]=t.useState(d),i=[{type:"top",values:[{columnId:"id",value:"Итого"},{columnId:"priority",value:`Критичных приоритетов ${o.filter(e=>e.priority==="Critical").length}`}]},{type:"top",values:[{columnId:"id",value:"Итого"},{columnId:"priority",value:`Высоких приоритетов ${o.filter(e=>e.priority==="High").length}`}]}],y=[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`Всего тасков ${o.length}`},{columnId:"priority",value:`Средних приоритетов ${o.filter(e=>e.priority==="Medium").length}`}]}],u=t.useCallback(e=>{var n;return(n=e.row.values.find(p=>p.columnId===e.column.key))==null?void 0:n.value},[]),c=t.useMemo(()=>[{key:"id",name:"ID",renderSummaryCell:u},{key:"task",name:"Title",renderSummaryCell:u},{key:"priority",name:"Priority",renderSummaryCell:e=>{const n=e.row;return a.jsxDEV("div",{style:{color:n.type==="top"?f:g},children:u(e)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.summaryRows/Table.summaryRows.stories.tsx",lineNumber:132,columnNumber:15},void 0)}},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[u]);return a.jsxDEV(C,{tableConfig:{containerStyle:{height:"700px"},summaryRows:{showDefault:!0,showInControl:!0}},columnConfig:c,topSummaryRows:i,bottomSummaryRows:y,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.summaryRows/Table.summaryRows.stories.tsx",lineNumber:155,columnNumber:7},void 0)}};var m,l,s;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const topSummaryRowsData: TSummaryRowData[] = [{
      type: 'top',
      values: [{
        columnId: 'id',
        value: 'Итого'
      }, {
        columnId: 'priority',
        value: \`Критичных приоритетов \${rows.filter(el => el.priority === 'Critical').length}\`
      }]
    }, {
      type: 'top',
      values: [{
        columnId: 'id',
        value: 'Итого'
      }, {
        columnId: 'priority',
        value: \`Высоких приоритетов \${rows.filter(el => el.priority === 'High').length}\`
      }]
    }];
    const bottomSummaryRowsData: TSummaryRowData[] = [{
      type: 'bottom',
      values: [{
        columnId: 'id',
        value: 'Итого'
      }, {
        columnId: 'task',
        value: \`Всего тасков \${rows.length}\`
      }, {
        columnId: 'priority',
        value: \`Средних приоритетов \${rows.filter(el => el.priority === 'Medium').length}\`
      }]
    }];
    const renderCommonSummaryCell = useCallback((props: RenderSummaryCellProps<unknown, Row>) => (props.row as TSummaryRowData).values.find(el => el.columnId === props.column.key)?.value, []);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      renderSummaryCell: renderCommonSummaryCell
    }, {
      key: 'task',
      name: 'Title',
      renderSummaryCell: renderCommonSummaryCell
    }, {
      key: 'priority',
      name: 'Priority',
      renderSummaryCell: props => {
        const rowData = props.row as TSummaryRowData;
        return <div style={{
          color: rowData.type === 'top' ? textNegative : textWarning
        }}>
                {renderCommonSummaryCell(props)}
              </div>;
      }
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'complete',
      name: '% Complete'
    }], [renderCommonSummaryCell]);
    return <Table tableConfig={{
      containerStyle: {
        height: '700px'
      },
      summaryRows: {
        showDefault: true,
        showInControl: true
      }
    }} columnConfig={columnConfig} topSummaryRows={topSummaryRowsData} bottomSummaryRows={bottomSummaryRowsData} rows={rows} />;
  }
}`,...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const b=["SummaryRows"],x=Object.freeze(Object.defineProperty({__proto__:null,SummaryRows:r,__namedExportsOrder:b,default:v},Symbol.toStringTag,{value:"Module"}));export{x as T};
