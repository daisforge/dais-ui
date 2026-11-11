import{r,d as f}from"./react-D2T61mpp.js";import{c as C}from"./tableData-DVJFoYoT.js";import b from"./DocStoryTemplate-CvzRUXck.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{T}from"./TableCanvas-2qyaj6OR.js";import"./vendor-DUH6w104.js";import"./react-is-Clcustum.js";import"./styled-components-BIBdMInn.js";import"./@tanstack/react-virtual-By-KMx3X.js";import"./tslib-DoU9Jm1N.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-C4okYHmO.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CWFSUQrv.js";import"./@salutejs/plasma-icons-fBmsGZ6U.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-BLB2kqev.js";import"./IconButton-C3QH-C5V.js";import"./Box-cYx5Dgn-.js";import"./TextField-DLIlJdtn.js";import"./sharedUtilsInputs-DopeaoFC.js";import"./AiAgentPopup-C3e-u073.js";import"./TextArea-D3706QnC.js";import"./sharedUtilsResizable-WAcBXqNx.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-CLqPH80E.js";import"./Collapse-BHl1jN1R.js";import"./react-data-grid-6F92uXix.js";import"./TableTabs-w4wLv6-U.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-Cl_MrEyl.js";import"./@glideappsfinal/glide-data-grid-DNkkD5K3.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CYhuhZI8.js";import"./ListOfFilters-1U_g5BFB.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CbgPA0Af.js";import"./EmptyState-B1w78bpi.js";import"./MassActions-Bnw2zg96.js";import"./Autocomplete-BFXQawtk.js";import"./ErrorPage-Dnla6MJv.js";const lt={title:"Локальные компоненты/TableCanvas/Sorting/Manual",tags:["!autodocs"],parameters:{docs:{page:b}}},V=`
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
}`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const ct=["ManualSorting"];export{n as ManualSorting,ct as __namedExportsOrder,lt as default};
