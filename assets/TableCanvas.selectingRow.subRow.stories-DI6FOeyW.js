import{r as t,d as p}from"./react-D2T61mpp.js";import{c}from"./tableData-UCfjiBCh.js";import w from"./DocStoryTemplate-V_vgHsyI.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{T as d}from"./TableCanvas-Dnvgtpvo.js";import"./vendor-DG1Nfd5B.js";import"./react-is-Clcustum.js";import"./styled-components-x9oWcUfp.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-CN5FblRQ.js";import"./IconButton-CRz6j5bQ.js";import"./@salutejs/plasma-icons-DpE4jfhX.js";import"./@salutejs/sdds-finai-CkJgI8zM.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-C21E4wye.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Bqm0FbJf.js";import"./TextField-D7BtsgxF.js";import"./sharedUtilsInputs-D3I4M9I3.js";import"./AnalyticalWidget-Db1EOyQG.js";import"./Collapse-QYkJJTr0.js";import"./Table-CvH-zgvm.js";import"./react-data-grid-BijCZ9Is.js";import"./TableTabs-DEtGOO4u.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-DeQHqsSU.js";import"./ListOfFilters-RfW5tcV0.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CH1_1C1-.js";import"./EmptyState-1a-qKTqY.js";import"./MassActions-e-6ko0hO.js";import"./Autocomplete-BVM_vGZK.js";import"./TableGlide-BDFaHT5g.js";import"./@glideappsfinal/glide-data-grid-CN5Yb5PR.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-D7LMJWAJ.js";const ee={title:"Локальные компоненты/TableCanvas/SelectingRow/WithSubRows",tags:["!autodocs"],parameters:{docs:{page:w}}},C=`
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
}`,...(s=(r=o.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const oe=["SelectingRow"];export{o as SelectingRow,oe as __namedExportsOrder,ee as default};
