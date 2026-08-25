import{r as o,d as r}from"./react-D2T61mpp.js";import{c as d}from"./tableData-UCfjiBCh.js";import C from"./DocStoryTemplate-DiJAdvEC.js";import{s as S}from"./storySourceDoc-tVKyHcEN.js";import{C as c,T as R}from"./TableCanvas-ByZWopgp.js";import"./vendor-B9_16pJt.js";import"./react-is-Clcustum.js";import"./styled-components-DsyoZJDS.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-O5t9w8O4.js";import"./IconButton-BKcoDZsO.js";import"./@salutejs/plasma-icons-Dv1GxiBC.js";import"./@salutejs/sdds-finai-IZHEqlfF.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-D0DbmO16.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-B55i4OlY.js";import"./TextField-DFKursCu.js";import"./sharedUtilsInputs-CGph2UpZ.js";import"./AnalyticalWidget-DLYuQFti.js";import"./Collapse-Caa0z_Ow.js";import"./Table-CglBQ-O2.js";import"./react-data-grid-CD7lGWrv.js";import"./TableTabs-DPTpudh-.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-BB99zeRt.js";import"./ListOfFilters-CRZsNuJw.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DbkvCu90.js";import"./EmptyState-C5WIHYMF.js";import"./MassActions-Cnw9OCOO.js";import"./Autocomplete-CjMKfftZ.js";import"./TableGlide-CULzmtyb.js";import"./@glideappsfinal/glide-data-grid-0ct_A4wu.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-CqpYoKmB.js";const ae={title:"Локальные компоненты/TableCanvas/SelectingRow/WithSubRowsAndInfinityScroll",tags:["!autodocs"],parameters:{docs:{page:C}}},T=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`;function v(t){const{indexForStart:a=0,countOfNewRows:n=30,timeout:s=1e3}=t??{};return new Promise(l=>{const u=d(a,n);setTimeout(()=>l(u),s)})}const i={...S({preCode:T,previewSource:"shown"}),name:"SubRows + InfinityScroll + Selecting",render:()=>{const[t,a]=o.useState(()=>d(0,30)),[n,s]=o.useState(!1),l=t.length<200,u=o.useCallback(async e=>{if(n)return;s(!0);const y=await v({indexForStart:e.length,countOfNewRows:30,timeout:1500});a(f=>[...f,...y]),s(!1)},[n]),b=o.useMemo(()=>[{key:"id",name:"ID",subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0},resizable:!0},{key:"task",name:"Task",subRow:{keyOfColumnInSubRow:"task"},renderCell:({row:e})=>r.jsxDEV(c.Text,{children:e.task},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Selecting/TableCanvas.selectingRow.infinityScroll.stories.tsx",lineNumber:89,columnNumber:36},void 0)},{key:"priority",name:"Priority",renderCell:({row:e})=>r.jsxDEV(c.Text,{children:e.priority??"—"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Selecting/TableCanvas.selectingRow.infinityScroll.stories.tsx",lineNumber:95,columnNumber:13},void 0)},{key:"issueType",name:"Issue Type",renderCell:({row:e})=>r.jsxDEV(c.Text,{children:e.issueType??"—"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Selecting/TableCanvas.selectingRow.infinityScroll.stories.tsx",lineNumber:102,columnNumber:13},void 0)}],[]),g=o.useState(()=>new Set);return r.jsxDEV(R,{tableConfig:{containerStyle:{height:"700px"},resizableColumn:!0,subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},selecting:{state:g,rowKeyGetter:e=>e.id,showDefault:!0,selectingRules:{levels:"all"}},controlBlock:{show:!0,massActionPanel:{buttons:[{type:"button",text:"Действие",view:"secondary"}]}},infinityScroll:{rowThreshold:5,onTrigger:u,isLoading:n,hasMore:l}},columnConfig:b,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Selecting/TableCanvas.selectingRow.infinityScroll.stories.tsx",lineNumber:114,columnNumber:7},void 0)}};var m,w,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'SubRows + InfinityScroll + Selecting',
  render: () => {
    const [rows, setRows] = useState(() => createRows(0, 30));
    const [isLoading, setIsLoading] = useState(false);
    const hasMore = rows.length < 200;
    const onTrigger = useCallback(async (currentRows: Row[]) => {
      if (isLoading) return;
      setIsLoading(true);
      const newData = await loadMoreRows({
        indexForStart: currentRows.length,
        countOfNewRows: 30,
        timeout: 1500
      });
      setRows(prev => [...prev, ...newData]);
      setIsLoading(false);
    }, [isLoading]);
    const columns = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      subRow: {
        keyOfColumnInSubRow: 'id',
        isColumnWithArrow: true
      },
      resizable: true
    }, {
      key: 'task',
      name: 'Task',
      subRow: {
        keyOfColumnInSubRow: 'task'
      },
      renderCell: ({
        row
      }) => <Canvas.Text>{row.task}</Canvas.Text>
    }, {
      key: 'priority',
      name: 'Priority',
      renderCell: ({
        row
      }) => <Canvas.Text>{row.priority ?? '—'}</Canvas.Text>
    }, {
      key: 'issueType',
      name: 'Issue Type',
      renderCell: ({
        row
      }) => <Canvas.Text>{row.issueType ?? '—'}</Canvas.Text>
    }], []);
    const selectingState = useState((): ReadonlySet<string | number> => new Set());
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
        state: selectingState,
        rowKeyGetter: r => r.id,
        showDefault: true,
        selectingRules: {
          levels: 'all'
        }
      },
      controlBlock: {
        show: true,
        massActionPanel: {
          buttons: [{
            type: 'button' as const,
            text: 'Действие',
            view: 'secondary' as const
          }]
        }
      },
      infinityScroll: {
        rowThreshold: 5,
        onTrigger,
        isLoading,
        hasMore
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(p=(w=i.parameters)==null?void 0:w.docs)==null?void 0:p.source}}};const le=["SelectingWithInfinityScroll"];export{i as SelectingWithInfinityScroll,le as __namedExportsOrder,ae as default};
