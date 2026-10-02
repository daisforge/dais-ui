import{r,d as f}from"./react-D2T61mpp.js";import{c as C}from"./tableData-DVJFoYoT.js";import b from"./DocStoryTemplate-CJ-YaiSZ.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{T}from"./TableCanvas-CS3Hvngv.js";import"./vendor-DqQCmxmm.js";import"./react-is-Clcustum.js";import"./styled-components--zCpJVsD.js";import"./@tanstack/react-virtual-DgvNON5s.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-39et0ojO.js";import"./IconButton-C2q5tokh.js";import"./@salutejs/plasma-icons-f15osSgJ.js";import"./@salutejs/sdds-finai-BUrBKjr7.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-CKZadLyT.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BoPQGwRr.js";import"./TextField-DukGb04x.js";import"./sharedUtilsInputs-BM1AdNOS.js";import"./AnalyticalWidget-B7XEIA78.js";import"./Collapse-CvUgWpxr.js";import"./Table-D7GGzHUE.js";import"./react-data-grid-BswgtMy3.js";import"./TableTabs-B2CGtRSV.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-jP2Qo2lm.js";import"./ListOfFilters-Cygv0B98.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DzKd5r3T.js";import"./EmptyState-DBprgn-p.js";import"./MassActions-DECVwQ7T.js";import"./Autocomplete-t3it_yKg.js";import"./TableGlide-Bzd6PVCA.js";import"./@glideappsfinal/glide-data-grid-C2owHHwa.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-Bdx_GdhH.js";const it={title:"Локальные компоненты/TableCanvas/Sorting/Manual",tags:["!autodocs"],parameters:{docs:{page:b}}},V=`
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
}`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const mt=["ManualSorting"];export{n as ManualSorting,mt as __namedExportsOrder,it as default};
