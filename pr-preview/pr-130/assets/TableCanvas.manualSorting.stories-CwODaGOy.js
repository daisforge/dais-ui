import{r,d as f}from"./react-D2T61mpp.js";import{c as C}from"./tableData-DVJFoYoT.js";import b from"./DocStoryTemplate-DCysDipa.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{T}from"./TableCanvas-BKVgKGnO.js";import"./vendor-BjkZKBJ9.js";import"./react-is-Clcustum.js";import"./styled-components-DWPxO3a9.js";import"./@tanstack/react-virtual-CIOHzlHP.js";import"./tslib-DoU9Jm1N.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-BjufAae2.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-C9g5nEPG.js";import"./@salutejs/plasma-icons-DcAgON_Z.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-BoC-8SOr.js";import"./IconButton-rY8Us0ma.js";import"./Box-BL5k83Qv.js";import"./TextField-erzztdsv.js";import"./sharedUtilsInputs-DPzVM0xx.js";import"./AiAgentPopup-GUmh_M4X.js";import"./TextArea-B8QDmYJe.js";import"./sharedUtilsResizable-CFLK8Unr.js";import"./Table-CW1POAcS.js";import"./Collapse-B0_nnnDs.js";import"./react-data-grid-vaUsH3Yu.js";import"./TableTabs-CrHSD7Vb.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-B7c2Dg7-.js";import"./@glideappsfinal/glide-data-grid-COzVhdar.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BMT36f3p.js";import"./ListOfFilters-B_inEgG7.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CPepKp-_.js";import"./EmptyState-DCJJR-3o.js";import"./MassActions-BDtqJn10.js";import"./Autocomplete-BkUDz7Uo.js";import"./ErrorPage-D-4iA03X.js";const ut={title:"Локальные компоненты/TableCanvas/Sorting/Manual",tags:["!autodocs"],parameters:{docs:{page:b}}},V=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui';

`,n={...w({preCode:V,previewSource:"shown"}),render:()=>{const s=r.useMemo(()=>C(),[]),[c,a]=r.useState(s),S=r.useMemo(()=>[{key:"id",name:"ID",sortingType:"numberSort"},{key:"task",name:"Title",sortingType:"stringSort"},{key:"priority",name:"Priority",sortingType:"stringSort"},{key:"issueType",name:"Issue Type",sortingType:"stringSort"},{key:"complete",name:"% Complete",sortingType:"numberSort"}],[]),i=r.useState([]),[m]=i;return r.useEffect(()=>{const o=m[0];if(!o){a(s);return}const y=[...s].sort((g,d)=>{const t=g[o.columnKey],e=d[o.columnKey];return typeof t=="number"&&typeof e=="number"?o.direction==="ASC"?t-e:e-t:typeof t=="string"&&typeof e=="string"&&t[0]&&e[0]?o.direction==="ASC"?t.localeCompare(e):e.localeCompare(t):0});a(y)},[m]),f.jsxDEV(T,{tableConfig:{containerStyle:{height:"700px"},sorting:{state:i,manualSorting:!0}},columnConfig:S,rows:c},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sorting/TableCanvas.manualSorting.stories.tsx",lineNumber:110,columnNumber:7},void 0)}};var p,u,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const rows = useMemo(() => createRows(), []);
    const [sortedRows, setSortedRows] = useState(rows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      sortingType: 'numberSort'
    }, {
      key: 'task',
      name: 'Title',
      sortingType: 'stringSort'
    }, {
      key: 'priority',
      name: 'Priority',
      sortingType: 'stringSort'
    }, {
      key: 'issueType',
      name: 'Issue Type',
      sortingType: 'stringSort'
    }, {
      key: 'complete',
      name: '% Complete',
      sortingType: 'numberSort'
    }], []);
    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);
    const [state] = sortingStateAndSetter;
    useEffect(() => {
      const sortColState = state[0];
      if (!sortColState) {
        setSortedRows(rows);
        return;
      }
      const sortRows = [...rows].sort((a, b) => {
        const aValue = a[sortColState.columnKey as keyof Row];
        const bValue = b[sortColState.columnKey as keyof Row];
        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return sortColState.direction === 'ASC' ? aValue - bValue : bValue - aValue;
        }
        if (typeof aValue === 'string' && typeof bValue === 'string' && aValue[0] && bValue[0]) {
          return sortColState.direction === 'ASC' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        }
        return 0;
      });
      setSortedRows(sortRows);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '700px'
      },
      sorting: {
        state: sortingStateAndSetter,
        manualSorting: true
      }
    }} columnConfig={columnConfig} rows={sortedRows} />;
  }
}`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const lt=["ManualSorting"];export{n as ManualSorting,lt as __namedExportsOrder,ut as default};
