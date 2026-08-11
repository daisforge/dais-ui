import{r as n,d}from"./react-D2T61mpp.js";import{c as m}from"./tableData-UCfjiBCh.js";import c from"./DocStoryTemplate-DwKiq8z4.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{f}from"./Table-ocwmzH40.js";const C={title:"Локальные компоненты/Table/ColumnsControl",tags:["!autodocs"],parameters:{docs:{page:c},screenshot:{skip:!0}}},g=`
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
`,e={...p({preCode:g,previewSource:"shown"}),render:()=>{const[i]=n.useState(m),s=n.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return d.jsxDEV(f,{tableConfig:{containerStyle:{height:700},columnsControl:{enable:!0,hiding:!0,disableHiding:["id"],pinning:!0,disablePinning:["developer"],reorderingAside:!0,reorderingHeader:!0,columnsLabel:{task:"Задачи"},orderDefault:["id","issueType","task"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:a,hidden:l,pinned:u},b)=>{alert(`
                                    order: ${a.join(", ")}
                                    pinned: ${u.join(", ")}
                                    hidden: ${l.join(", ")}
                                `)}}},columnConfig:s,rows:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:86,columnNumber:7},void 0)}};var o,r,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'developer',
      name: 'Developer'
    }, {
      key: 'tr1',
      name: 'TR'
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    return <Table tableConfig={{
      containerStyle: {
        height: 700
      },
      columnsControl: {
        enable: true,
        hiding: true,
        disableHiding: ['id'],
        pinning: true,
        disablePinning: ['developer'],
        reorderingAside: true,
        reorderingHeader: true,
        columnsLabel: {
          task: 'Задачи'
        },
        orderDefault: ['id', 'issueType', 'task'],
        hiddenDefault: ['tr1'],
        pinnedDefault: ['complete'],
        onConfirm: ({
          order,
          hidden,
          pinned
        }, _setters) => {
          // eslint-disable-next-line no-alert
          alert(\`
                                    order: \${order.join(', ')}
                                    pinned: \${pinned.join(', ')}
                                    hidden: \${hidden.join(', ')}
                                \`);
        }
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const y=["ColumnsControl"],w=Object.freeze(Object.defineProperty({__proto__:null,ColumnsControl:e,__namedExportsOrder:y,default:C},Symbol.toStringTag,{value:"Module"}));export{w as T};
