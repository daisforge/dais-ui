import{r as t,j as n}from"./react-CAOzMBF_.js";import{c9 as p,cf as c,cg as w}from"./vendor-DmWczWMC.js";import{s as y}from"./storySourceDoc-tVKyHcEN.js";import{f}from"./Table-BQHrw1K6.js";import{c as C}from"./dataRowGrouping-0JMPVnJT.js";const x={title:"Локальные компоненты/Table/RowsGrouping/API и пример простой реализации",tags:["!autodocs"],parameters:{docs:{page:()=>n.jsxs(n.Fragment,{children:[n.jsx(d,{}),n.jsx(p,{})]})}}},b=`
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
`,u={...y({preCode:b,previewSource:"shown"}),name:"Группировка строк - Группировка данных - Агрегация данных",render:()=>{const[r]=t.useState(C),[e,g]=t.useState([]),m=t.useMemo(()=>[{key:"athlete",name:"Athlete",rowsGrouping:{columnGroupLabel:"Athlete"}},{key:"sport",name:"Sport",rowsGrouping:{columnGroupLabel:"Sport"}},{key:"country",name:"Country",rowsGrouping:{columnGroupLabel:"Country"}},{key:"year",name:"Year",rowsGrouping:{columnGroupLabel:"Year"}},{key:"gold",name:"Gold",rowsGrouping:{groupByColumn:!1,columnGroupLabel:"Gold",renderGroupCell({childRows:o}){return o.reduce((h,{gold:G})=>h+G,0)}}}],[]);return n.jsx(f,{tableConfig:{containerStyle:{height:700},columnsControl:{enable:!0},rowsGrouping:{rowKeyGetter:o=>o.id,groupByState:[e,g],groupButton:{defaultCustomItems:[{value:"gold",label:"Gold as custom option"}]},groupedColumnProps:{maxWidth:500,width:350,minWidth:250,renderCell:o=>o.parentGroupKey==="Russian Federation"?"Russia last lvl":o.parentGroupKey,rowsGrouping:{renderGroupCell(o){return o.groupKey==="Russian Federation"?"Russia":o.groupKey}}}}},columnConfig:m,rows:r})}};var l,i,a;u.parameters={...u.parameters,docs:{...(l=u.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(a=(i=u.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const B=["SimpleTable"],j=Object.freeze(Object.defineProperty({__proto__:null,SimpleTable:u,__namedExportsOrder:B,default:x},Symbol.toStringTag,{value:"Module"}));function s(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...c(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(w,{of:j,name:"tableRowsGrouping",tags:["hideInSidebar"]}),`
`,n.jsx(e.h1,{id:"группировка-данных-строк",children:"Группировка данных-строк"}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Группировка строк по выбранным колонкам"}),`
`,n.jsx(e.li,{children:"Кастомизация grouped column и group button"}),`
`,n.jsx(e.li,{children:"Поддержка агрегированных значений в групповых строках"}),`
`]}),`
`,n.jsxs(e.p,{children:["Для активации фичи необходимо настроить ",n.jsx(e.code,{children:"tableConfig?.rowsGrouping"})," и ",n.jsx(e.code,{children:"columnConfig?.rowsGrouping"})," у нужных колонок."]}),`
`,n.jsx(e.h2,{id:"особенности",children:"Особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"tableConfig.rowsGrouping"})," хранит активные группировки, ",n.jsx(e.code,{children:"rowKeyGetter"})," и настройки grouped column."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"columnConfig.rowsGrouping"})," включает колонку в список доступных группировок и позволяет переопределить рендер групповой строки."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"groupButton"})," настраивает элементы выпадающего списка и подсчёт активных группировок."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"groupRowReplaceTo"})," позволяет заменить данные сгруппированной строки в редких кастомных сценариях."]}),`
`]}),`
`,n.jsxs(e.p,{children:["Описание типов - в разделе ",n.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-table-rowsgrouping-api--docs",children:"API"}),"."]}),`
`,n.jsx(p,{})]})}function d(r={}){const{wrapper:e}={...c(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}const T=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"}));export{j as T,T as a};
