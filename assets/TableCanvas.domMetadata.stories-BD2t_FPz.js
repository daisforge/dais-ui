import{r as o,d as C}from"./react-D2T61mpp.js";import{c as D}from"./tableData-UCfjiBCh.js";import b from"./DocStoryTemplate-ote7_b2_.js";import{s as A}from"./storySourceDoc-tVKyHcEN.js";import{T as w,D as y}from"./TableCanvas-Dd9LnOYW.js";const f={title:"Локальные компоненты/TableCanvas/DomMetadata",tags:["!autodocs"],parameters:{docs:{page:b}}},n={name:"onClick для аналитики",...A({previewSource:"shown"}),render:()=>{const[l]=o.useState(D),[c,d]=o.useState([]),[m,g]=o.useState({}),p=o.useMemo(()=>[{key:"id",name:"ID",rowsGrouping:{columnGroupLabel:"ID"}},{key:"task",name:"Title",rowsGrouping:{columnGroupLabel:"Title"}},{key:"priority",name:"Priority",rowsGrouping:{columnGroupLabel:"Priority"}}],[]),t=(u,e,a)=>{(a==null?void 0:a.action)===y.TOGGLE_GROUP&&console.debug(`[DomMetadata] Группировка по столбцу: ${a.columnKey}`),console.debug(`[DomMetadata] ${u}:`,{detail:a,target:e==null?void 0:e.currentTarget})};return C.jsxDEV(w,{tableConfig:{containerStyle:{height:"700px"},rowsGrouping:{groupByState:[c,d],rowKeyGetter:u=>u.id.toString(),domMetadata:{className:"analytics-grouping",dataAttributes:{"data-feature":"grouping"},onClick:(u,e)=>t("rowsGrouping",u,e)}},rowSize:{showInControl:!0,default:"small",available:["small","medium","big"],domMetadata:{className:"analytics-row-size",dataAttributes:{"data-feature":"row-size"},onClick:(u,e)=>t("rowSize",u,e)}},columnsControl:{enable:!0,pinDomMetadata:{className:"analytics-pin",dataAttributes:{"data-feature":"pin-column"},onClick:(u,e)=>t("pinColumn",u,e)},switchDomMetadata:{className:"analytics-switch",dataAttributes:{"data-feature":"column-visibility"},onClick:(u,e)=>t("columnVisibility",u,e)}},sidebarConfig:{defaultTabs:[{id:"tableSettings",domMetadata:{className:"analytics-settings",dataAttributes:{"data-feature":"settings"},onClick:(u,e)=>t("settings",u,e)}}]},filtering:{state:[m,g]}},columnConfig:p,rows:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.DomMetadata/TableCanvas.domMetadata.stories.tsx",lineNumber:81,columnNumber:7},void 0)}};var i,s,r;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'onClick для аналитики',
  ...storySourceDoc({
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
    return <TableCanvas tableConfig={{
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
}`,...(r=(s=n.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const M=["DomMetadataOnClick"],h=Object.freeze(Object.defineProperty({__proto__:null,DomMetadataOnClick:n,__namedExportsOrder:M,default:f},Symbol.toStringTag,{value:"Module"}));export{h as T};
