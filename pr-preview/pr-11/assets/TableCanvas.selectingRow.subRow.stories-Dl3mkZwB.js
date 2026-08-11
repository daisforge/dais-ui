import{r as t,d as p}from"./react-D2T61mpp.js";import{c}from"./tableData-UCfjiBCh.js";import w from"./DocStoryTemplate-BNfNA-EK.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{T as d}from"./TableCanvas-BZWzZoRR.js";import"./vendor-DVRMjF5Y.js";import"./react-is-Clcustum.js";import"./styled-components-CxmyZpOq.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-ClKnGZJR.js";import"./IconButton-lG_x1Y6v.js";import"./@salutejs/plasma-icons-BzUkoeZa.js";import"./@salutejs/sdds-finai-DgM3hqau.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-ClPviZ8C.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DO61MbXY.js";import"./TextField-CO736GyT.js";import"./sharedUtilsInputs-BneVZrJe.js";import"./AnalyticalWidget-DOemauGu.js";import"./Collapse-CKvxbWvA.js";import"./Table-D7hgb8Sc.js";import"./react-data-grid-C1XVGHD_.js";import"./TableTabs-Bn4XpWMz.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-Dk9K9QFo.js";import"./ListOfFilters-Cy_KAVuJ.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BlTr3jyf.js";import"./EmptyState-Czyro0NP.js";import"./MassActions-Doz9zJsu.js";import"./Autocomplete-DZ85hFAn.js";import"./TableGlide-LnsznrGu.js";import"./@glideappsfinal/glide-data-grid-z8SkcK6U.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DRfYIyib.js";const ee={title:"Локальные компоненты/TableCanvas/SelectingRow/WithSubRows",tags:["!autodocs"],parameters:{docs:{page:w}}},C=`
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
