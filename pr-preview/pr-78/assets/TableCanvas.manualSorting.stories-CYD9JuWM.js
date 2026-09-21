import{r,d as f}from"./react-D2T61mpp.js";import{c as C}from"./tableData-DVJFoYoT.js";import b from"./DocStoryTemplate-C4kDHE18.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{T}from"./TableCanvas-sAkrCkb7.js";import"./vendor-DhWFcJyQ.js";import"./react-is-Clcustum.js";import"./styled-components-Cejviklg.js";import"./@tanstack/react-virtual-DeRSQr4k.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-Bc6Y9-lL.js";import"./IconButton-JOgk26Qs.js";import"./@salutejs/plasma-icons-DGidcmWm.js";import"./@salutejs/sdds-finai-BFP0AIhT.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-D11d2JWz.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-C_yvhQXy.js";import"./TextField-Dm6oi5DO.js";import"./sharedUtilsInputs-BTpNb9Ur.js";import"./AnalyticalWidget-DSfzHp4h.js";import"./Collapse-e7DqV2AW.js";import"./Table-hcdSQnTA.js";import"./react-data-grid-zfC4loiI.js";import"./TableTabs-okR-M1w6.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-Ca7CAhR2.js";import"./ListOfFilters-g6uEUW0a.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DoQySbuM.js";import"./EmptyState-Ctnnxr7m.js";import"./MassActions-Dl0Ep_yB.js";import"./Autocomplete-iP0YW9Ml.js";import"./TableGlide-DYd-ue1e.js";import"./@glideappsfinal/glide-data-grid-C74ZS3pz.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DAKweZI5.js";const it={title:"Локальные компоненты/TableCanvas/Sorting/Manual",tags:["!autodocs"],parameters:{docs:{page:b}}},V=`
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
