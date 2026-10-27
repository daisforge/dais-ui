import{r as o,j as C}from"./react-CAOzMBF_.js";import{c as b}from"./tableData-DVJFoYoT.js";import D from"./DocStoryTemplate-Cf946dgV.js";import{s as f}from"./storySourceDoc-tVKyHcEN.js";import{f as A,h as w}from"./Table-BQHrw1K6.js";const y={title:"Локальные компоненты/Table/DomMetadata",tags:["!autodocs"],parameters:{docs:{page:D}}},M=`
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
`,a={name:"onClick для аналитики",...f({preCode:M,previewSource:"shown"}),render:()=>{const[l]=o.useState(b),[c,d]=o.useState([]),[m,g]=o.useState({}),p=o.useMemo(()=>[{key:"id",name:"ID",rowsGrouping:{columnGroupLabel:"ID"}},{key:"task",name:"Title",rowsGrouping:{columnGroupLabel:"Title"}},{key:"priority",name:"Priority",rowsGrouping:{columnGroupLabel:"Priority"}}],[]),t=(u,e,n)=>{(n==null?void 0:n.action)===w.TOGGLE_GROUP&&console.debug(`[DomMetadata] Группировка по столбцу: ${n.columnKey}`),console.debug(`[DomMetadata] ${u}:`,{detail:n,target:e==null?void 0:e.currentTarget})};return C.jsx(A,{tableConfig:{containerStyle:{height:"700px"},rowsGrouping:{groupByState:[c,d],rowKeyGetter:u=>u.id.toString(),domMetadata:{className:"analytics-grouping",dataAttributes:{"data-feature":"grouping"},onClick:(u,e)=>t("rowsGrouping",u,e)}},rowSize:{showInControl:!0,default:"small",available:["small","medium","big"],domMetadata:{className:"analytics-row-size",dataAttributes:{"data-feature":"row-size"},onClick:(u,e)=>t("rowSize",u,e)}},columnsControl:{enable:!0,pinDomMetadata:{className:"analytics-pin",dataAttributes:{"data-feature":"pin-column"},onClick:(u,e)=>t("pinColumn",u,e)},switchDomMetadata:{className:"analytics-switch",dataAttributes:{"data-feature":"column-visibility"},onClick:(u,e)=>t("columnVisibility",u,e)}},sidebarConfig:{defaultTabs:[{id:"tableSettings",domMetadata:{className:"analytics-settings",dataAttributes:{"data-feature":"settings"},onClick:(u,e)=>t("settings",u,e)}}]},filtering:{state:[m,g]}},columnConfig:p,rows:l})}};var i,r,s;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'onClick для аналитики',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const [groupedCols, setGroupedCols] = useState<string[]>([]);
    const [filters, setFilters] = useState({});
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      rowsGrouping: {
        columnGroupLabel: 'ID'
      }
    }, {
      key: 'task',
      name: 'Title',
      rowsGrouping: {
        columnGroupLabel: 'Title'
      }
    }, {
      key: 'priority',
      name: 'Priority',
      rowsGrouping: {
        columnGroupLabel: 'Priority'
      }
    }], []);

    // Общий обработчик для аналитики.
    // e — MouseEvent (undefined для элементов внутри Dropdown).
    // detail — контекст: action, columnKey, size и др.
    // detail.action — одна из констант DOM_METADATA_ACTIONS
    const handleDomMetadataClick = (source: string, e?: React.MouseEvent<HTMLElement>, detail?: Record<string, unknown>) => {
      // Пример: проверка конкретного действия через константу
      if (detail?.action === DOM_METADATA_ACTIONS.TOGGLE_GROUP) {
        console.debug(\`[DomMetadata] Группировка по столбцу: \${detail.columnKey}\`);
      }
      console.debug(\`[DomMetadata] \${source}:\`, {
        detail,
        target: e?.currentTarget
      });
    };
    return <Table tableConfig={{
      containerStyle: {
        height: '700px'
      },
      // 1. Группировка строк
      // detail.action: 'toggle-group' | 'reset-groups' | 'custom-item-select'
      // detail.columnKey: ключ столбца (для toggle-group и custom-item-select)
      rowsGrouping: {
        groupByState: [groupedCols, setGroupedCols],
        rowKeyGetter: row => row.id.toString(),
        domMetadata: {
          className: 'analytics-grouping',
          dataAttributes: {
            'data-feature': 'grouping'
          },
          onClick: (e, detail) => handleDomMetadataClick('rowsGrouping', e, detail)
        }
      },
      // 2. Кнопка размера строки
      // detail.action: 'change-row-size'
      // detail.size: новый размер ('small' | 'medium' | 'big')
      rowSize: {
        showInControl: true,
        default: 'small',
        available: ['small', 'medium', 'big'],
        domMetadata: {
          className: 'analytics-row-size',
          dataAttributes: {
            'data-feature': 'row-size'
          },
          onClick: (e, detail) => handleDomMetadataClick('rowSize', e, detail)
        }
      },
      // 3. Настройки столбцов: закрепление и видимость
      // pinDomMetadata — detail.action: 'pin-column' | 'unpin-column', detail.columnKey
      // switchDomMetadata — detail.action: 'show-column' | 'hide-column', detail.columnKey
      columnsControl: {
        enable: true,
        pinDomMetadata: {
          className: 'analytics-pin',
          dataAttributes: {
            'data-feature': 'pin-column'
          },
          onClick: (e, detail) => handleDomMetadataClick('pinColumn', e, detail)
        },
        switchDomMetadata: {
          className: 'analytics-switch',
          dataAttributes: {
            'data-feature': 'column-visibility'
          },
          onClick: (e, detail) => handleDomMetadataClick('columnVisibility', e, detail)
        }
      },
      // 4. Таб настроек сайдбара (шестерёнка + крестик закрыть)
      // detail.action: 'toggle-sidebar-tab' (шестерёнка) | 'close-sidebar' (крестик)
      // detail.tabId: id таба (для toggle-sidebar-tab)
      sidebarConfig: {
        defaultTabs: [{
          id: 'tableSettings',
          domMetadata: {
            className: 'analytics-settings',
            dataAttributes: {
              'data-feature': 'settings'
            },
            onClick: (e, detail) => handleDomMetadataClick('settings', e, detail)
          }
        }]
      },
      filtering: {
        state: [filters, setFilters]
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(s=(r=a.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const E=["DomMetadataOnClick"],B=Object.freeze(Object.defineProperty({__proto__:null,DomMetadataOnClick:a,__namedExportsOrder:E,default:y},Symbol.toStringTag,{value:"Module"}));export{B as T};
