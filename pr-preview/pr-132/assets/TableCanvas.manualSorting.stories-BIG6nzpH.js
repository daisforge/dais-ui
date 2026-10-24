import{r,d as f}from"./react-D2T61mpp.js";import{c as C}from"./tableData-DVJFoYoT.js";import b from"./DocStoryTemplate-BYdnpZCY.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{T}from"./TableCanvas-BRHIaJL_.js";import"./vendor-CYEt32i_.js";import"./react-is-Clcustum.js";import"./styled-components-IqzAKK_s.js";import"./@tanstack/react-virtual-DRRuFJr3.js";import"./tslib-DoU9Jm1N.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-CFRnpb77.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-32zwYo9C.js";import"./@salutejs/plasma-icons-pfD28j8D.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-BR16IwQj.js";import"./IconButton-Dl8SMmMk.js";import"./Box-DrYQVeV7.js";import"./TextField-BSD0wz2P.js";import"./sharedUtilsInputs-BJDRWV8U.js";import"./AiAgentPopup-Do25XZz-.js";import"./TextArea-B9d14RRB.js";import"./sharedUtilsResizable-CPQ8HWoD.js";import"./Table-kya4Xv3o.js";import"./Collapse-_6Pq7MeZ.js";import"./react-data-grid-Bx1mSA4W.js";import"./TableTabs-BMjqrlPg.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BjF36j5z.js";import"./@glideappsfinal/glide-data-grid-HMBxXGeW.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BqRjtV6A.js";import"./ListOfFilters-Cis1z3PW.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Bu7o2kss.js";import"./EmptyState-IqPSeUL3.js";import"./MassActions-DPpZGZqq.js";import"./Autocomplete-C8FwLa6a.js";import"./ErrorPage-DSmgNDIA.js";const ut={title:"Локальные компоненты/TableCanvas/Sorting/Manual",tags:["!autodocs"],parameters:{docs:{page:b}}},V=`
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
