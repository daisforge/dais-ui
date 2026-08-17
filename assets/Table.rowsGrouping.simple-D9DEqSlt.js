import{r as t,d as u,j as e}from"./react-D2T61mpp.js";import{bY as c,c2 as d,c3 as h}from"./vendor-B0ELcGbr.js";import{s as f}from"./storySourceDoc-tVKyHcEN.js";import{f as y}from"./Table-w6-T-yaU.js";import{c as x}from"./dataRowGrouping-DbhJMx-l.js";const C={title:"Локальные компоненты/Table/RowsGrouping/API и пример простой реализации",tags:["!autodocs"],parameters:{docs:{page:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(m,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowsGrouping/Table.rowsGrouping.simple.stories.tsx",lineNumber:20,columnNumber:11},void 0),u.jsxDEV(c,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowsGrouping/Table.rowsGrouping.simple.stories.tsx",lineNumber:21,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowsGrouping/Table.rowsGrouping.simple.stories.tsx",lineNumber:19,columnNumber:9},void 0)}}},j=`
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
`,s={...f({preCode:j,previewSource:"shown"}),name:"Группировка строк - Группировка данных - Агрегация данных",render:()=>{const[n]=t.useState(x),[o,g]=t.useState([]),w=t.useMemo(()=>[{key:"athlete",name:"Athlete",rowsGrouping:{columnGroupLabel:"Athlete"}},{key:"sport",name:"Sport",rowsGrouping:{columnGroupLabel:"Sport"}},{key:"country",name:"Country",rowsGrouping:{columnGroupLabel:"Country"}},{key:"year",name:"Year",rowsGrouping:{columnGroupLabel:"Year"}},{key:"gold",name:"Gold",rowsGrouping:{groupByColumn:!1,columnGroupLabel:"Gold",renderGroupCell({childRows:r}){return r.reduce((G,{gold:b})=>G+b,0)}}}],[]);return u.jsxDEV(y,{tableConfig:{containerStyle:{height:700},columnsControl:{enable:!0},rowsGrouping:{rowKeyGetter:r=>r.id,groupByState:[o,g],groupButton:{defaultCustomItems:[{value:"gold",label:"Gold as custom option"}]},groupedColumnProps:{maxWidth:500,width:350,minWidth:250,renderCell:r=>r.parentGroupKey==="Russian Federation"?"Russia last lvl":r.parentGroupKey,rowsGrouping:{renderGroupCell(r){return r.groupKey==="Russian Federation"?"Russia":r.groupKey}}}}},columnConfig:w,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowsGrouping/Table.rowsGrouping.simple.stories.tsx",lineNumber:111,columnNumber:7},void 0)}};var l,a,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Группировка строк - Группировка данных - Агрегация данных',
  render: () => {
    const [rows] = useState(createRowsForGrouping);
    const [groupByArr, setGroupByArr] = useState<string[]>([]);
    const columnConfig = useMemo<readonly ColumnConfig<RowForGrouping>[]>(() => [{
      key: 'athlete',
      name: 'Athlete',
      rowsGrouping: {
        columnGroupLabel: 'Athlete'
      }
    }, {
      key: 'sport',
      name: 'Sport',
      rowsGrouping: {
        columnGroupLabel: 'Sport'
      }
    }, {
      key: 'country',
      name: 'Country',
      rowsGrouping: {
        columnGroupLabel: 'Country'
      }
    }, {
      key: 'year',
      name: 'Year',
      rowsGrouping: {
        columnGroupLabel: 'Year'
      }
    }, {
      key: 'gold',
      name: 'Gold',
      rowsGrouping: {
        groupByColumn: false,
        columnGroupLabel: 'Gold',
        renderGroupCell({
          childRows
        }) {
          return childRows.reduce((prev, {
            gold
          }) => prev + gold, 0);
        }
      }
    }], []);
    return <Table tableConfig={{
      containerStyle: {
        height: 700
      },
      columnsControl: {
        enable: true
      },
      rowsGrouping: {
        rowKeyGetter: r => r.id,
        groupByState: [groupByArr, setGroupByArr],
        groupButton: {
          defaultCustomItems: [{
            value: 'gold',
            label: 'Gold as custom option'
          }]
        },
        groupedColumnProps: {
          maxWidth: 500,
          width: 350,
          minWidth: 250,
          renderCell: props => {
            if (props.parentGroupKey === 'Russian Federation') {
              return 'Russia last lvl';
            }
            return props.parentGroupKey;
          },
          rowsGrouping: {
            renderGroupCell(props) {
              if (props.groupKey === 'Russian Federation') {
                return 'Russia';
              }
              return props.groupKey;
            }
          }
        }
        // groupRowReplaceTo(groupRow) {
        //   if (
        //     groupRow.groupKey === 'Russian Federation' &&
        //     groupRow.childRows[0]
        //   ) {
        //     return groupRow.childRows[0];
        //   }
        //   return groupRow;
        // },
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(p=(a=s.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const B=["SimpleTable"],D=Object.freeze(Object.defineProperty({__proto__:null,SimpleTable:s,__namedExportsOrder:B,default:C},Symbol.toStringTag,{value:"Module"}));function i(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:D,name:"tableRowsGrouping",tags:["hideInSidebar"]}),`
`,e.jsx(o.h1,{id:"группировка-данных-строк",children:"Группировка данных-строк"}),`
`,e.jsx(o.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Группировка строк по выбранным колонкам"}),`
`,e.jsx(o.li,{children:"Кастомизация grouped column и group button"}),`
`,e.jsx(o.li,{children:"Поддержка агрегированных значений в групповых строках"}),`
`]}),`
`,e.jsxs(o.p,{children:["Для активации фичи необходимо настроить ",e.jsx(o.code,{children:"tableConfig?.rowsGrouping"})," и ",e.jsx(o.code,{children:"columnConfig?.rowsGrouping"})," у нужных колонок."]}),`
`,e.jsx(o.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"tableConfig.rowsGrouping"})," хранит активные группировки, ",e.jsx(o.code,{children:"rowKeyGetter"})," и настройки grouped column."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"columnConfig.rowsGrouping"})," включает колонку в список доступных группировок и позволяет переопределить рендер групповой строки."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"groupButton"})," настраивает элементы выпадающего списка и подсчёт активных группировок."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"groupRowReplaceTo"})," позволяет заменить данные сгруппированной строки в редких кастомных сценариях."]}),`
`]}),`
`,e.jsxs(o.p,{children:["Описание типов - в разделе ",e.jsx(o.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-table-rowsgrouping-api--docs",children:"API"}),"."]}),`
`,e.jsx(c,{})]})}function m(n={}){const{wrapper:o}={...d(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(i,{...n})}):i(n)}const F=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"}));export{D as T,F as a};
