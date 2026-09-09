import{r as t,d as p}from"./react-D2T61mpp.js";import{c}from"./tableData-UCfjiBCh.js";import w from"./DocStoryTemplate-Ba5kH-9W.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{T as d}from"./TableCanvas-jHxDG7_S.js";import"./vendor-DyskUa3R.js";import"./react-is-Clcustum.js";import"./styled-components-Dk5h8vLx.js";import"./@tanstack/react-virtual-C-_FPY_A.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-B6B7FuTp.js";import"./IconButton-CL8_KbII.js";import"./@salutejs/plasma-icons-DtkePaSU.js";import"./@salutejs/sdds-finai-D2mCi4R2.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-r6DIgRyT.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BBCb41Bg.js";import"./TextField-BrvaaFR-.js";import"./sharedUtilsInputs-BtXKx1xe.js";import"./AnalyticalWidget-BQmFY68y.js";import"./Collapse-BPaM4yD6.js";import"./Table-CvvYSmQS.js";import"./react-data-grid-COE9myPN.js";import"./TableTabs-B5-_IRPI.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-tdAnuCbT.js";import"./ListOfFilters-M0zDez6D.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BT9ft-Ip.js";import"./EmptyState-Dq5R8LaK.js";import"./MassActions-CKhJJXtL.js";import"./Autocomplete-DYFSEIr8.js";import"./TableGlide-BZ_LqTY-.js";import"./@glideappsfinal/glide-data-grid-BEk6toGU.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-8qzLcSq4.js";const oe={title:"Локальные компоненты/TableCanvas/SelectingRow/WithSubRows",tags:["!autodocs"],parameters:{docs:{page:w}}},C=`
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
