import{r as t,d as p}from"./react-D2T61mpp.js";import{c}from"./tableData-DVJFoYoT.js";import w from"./DocStoryTemplate-BGubRAw_.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{T as d}from"./TableCanvas-CbElo_IV.js";import"./vendor-qgmDpDXO.js";import"./react-is-Clcustum.js";import"./styled-components-CY6f-OwU.js";import"./@tanstack/react-virtual-oU8bP7vM.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-EVvhKqCY.js";import"./IconButton-BuuTHwFG.js";import"./@salutejs/plasma-icons-CeIs4EBg.js";import"./@salutejs/sdds-finai-CER8ZZIe.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-DRxuK2Vy.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CJUEC2bS.js";import"./TextField-D4M1SmkH.js";import"./sharedUtilsInputs-CJhjKVCs.js";import"./AnalyticalWidget-BtFX3-1J.js";import"./Collapse-BAsyXgNZ.js";import"./Table-BChZ6NLh.js";import"./react-data-grid-DRbxFe9O.js";import"./TableTabs-B5mAzX-x.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-ZQ3NzQCp.js";import"./ListOfFilters-THBsxnj8.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DactZJuF.js";import"./EmptyState-CogZywcs.js";import"./MassActions-DLnd7eVc.js";import"./Autocomplete-p31pHKo5.js";import"./TableGlide-C7V6yI_V.js";import"./@glideappsfinal/glide-data-grid-K7l-7eHs.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DO-13wYr.js";const oe={title:"Локальные компоненты/TableCanvas/SelectingRow/WithSubRows",tags:["!autodocs"],parameters:{docs:{page:w}}},C=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,o={...b({preCode:C,previewSource:"shown"}),name:"Многоуровневая таблица",render:()=>{const[i]=t.useState(c),u=t.useMemo(()=>[{key:"id",name:"ID",subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0},resizable:!0},{key:"issueType",name:"issue",subRow:{keyOfColumnInSubRow:"issueType"}},{key:"developer",name:"Developer"}],[]),a=t.useState(()=>new Set),m=e=>e.id!==2,l=e=>e.id===1;return p.jsxDEV(d,{tableConfig:{containerStyle:{height:"700px"},resizableColumn:!0,subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},selecting:{state:a,rowKeyGetter:e=>e.id+e.issueType,showDefault:!0,selectingRules:{levels:"all"},rowCheckboxDisabled:l,rowShowCheckbox:m}},columnConfig:u,rows:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Selecting/TableCanvas.selectingRow.subRow.stories.tsx",lineNumber:67,columnNumber:7},void 0)}};var n,r,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Многоуровневая таблица',
  render: () => {
    const [rows] = useState(createRows);
    const columns = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      subRow: {
        keyOfColumnInSubRow: 'id',
        isColumnWithArrow: true
      },
      resizable: true
    }, {
      key: 'issueType',
      name: 'issue',
      subRow: {
        keyOfColumnInSubRow: 'issueType'
      }
    }, {
      key: 'developer',
      name: 'Developer'
    }], []);
    const selectingRowStateAndSetter = useState((): ReadonlySet<string | number> => new Set());
    const rowShowCheckbox = (r: Row) => r.id !== 2;
    const rowCheckboxDisabled = (r: Row) => r.id === 1;
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '700px'
      },
      resizableColumn: true,
      subRows: {
        getSubRows: row => row?.subRows,
        rowKeyGetter: row => row.id
      },
      selecting: {
        state: selectingRowStateAndSetter,
        rowKeyGetter: r => r.id + r.issueType,
        showDefault: true,
        selectingRules: {
          levels: 'all'
        },
        rowCheckboxDisabled,
        rowShowCheckbox
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(s=(r=o.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const te=["SelectingRow"];export{o as SelectingRow,te as __namedExportsOrder,oe as default};
