import{r,d as f}from"./react-D2T61mpp.js";import{c as C}from"./tableData-UCfjiBCh.js";import b from"./DocStoryTemplate-HaaPJ6-T.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{T}from"./TableCanvas-BwEi6Zc4.js";import"./vendor-LViC24RH.js";import"./react-is-Clcustum.js";import"./styled-components--Gqam1Xr.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-CFKT28Lb.js";import"./IconButton-CWauitIv.js";import"./@salutejs/plasma-icons-Cpu0f1vH.js";import"./@salutejs/sdds-finai-Bz9xN3Et.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-nQz3OA2C.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-f_gtZhFV.js";import"./TextField-Bobgd_vN.js";import"./sharedUtilsInputs-7dfKMe2h.js";import"./AnalyticalWidget-fF7YSteX.js";import"./Collapse-BYtMXauB.js";import"./Table-dS_q2168.js";import"./react-data-grid-EXl_r6YN.js";import"./TableTabs-D8GUesNj.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-CrB1z4ug.js";import"./ListOfFilters-CkdwTuPm.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-5OggL8Cr.js";import"./EmptyState-NNrQ6HtT.js";import"./MassActions-nIvtPmoU.js";import"./Autocomplete-CNjyvMJW.js";import"./TableGlide-CJPa_8gJ.js";import"./@glideappsfinal/glide-data-grid-CWlS9if2.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-e7CC4uhd.js";const at={title:"Локальные компоненты/TableCanvas/Sorting/Manual",tags:["!autodocs"],parameters:{docs:{page:b}}},V=`
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
}`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const it=["ManualSorting"];export{n as ManualSorting,it as __namedExportsOrder,at as default};
