import{r as t,j as a}from"./react-CAOzMBF_.js";import{c as y}from"./tableData-DVJFoYoT.js";import b from"./DocStoryTemplate-Cf946dgV.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{C as c,T as R}from"./TableCanvas-DlX-Wh2b.js";const T={title:"Локальные компоненты/TableCanvas/SelectingRow/WithSubRowsAndInfinityScroll",tags:["!autodocs"],parameters:{docs:{page:b}}},h=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`;function x(s){const{indexForStart:i=0,countOfNewRows:n=30,timeout:r=1e3}=s??{};return new Promise(l=>{const u=y(i,n);setTimeout(()=>l(u),r)})}const o={...p({preCode:h,previewSource:"shown"}),name:"SubRows + InfinityScroll + Selecting",render:()=>{const[s,i]=t.useState(()=>y(0,30)),[n,r]=t.useState(!1),l=s.length<200,u=t.useCallback(async e=>{if(n)return;r(!0);const f=await x({indexForStart:e.length,countOfNewRows:30,timeout:1500});i(C=>[...C,...f]),r(!1)},[n]),g=t.useMemo(()=>[{key:"id",name:"ID",subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0},resizable:!0},{key:"task",name:"Task",subRow:{keyOfColumnInSubRow:"task"},renderCell:({row:e})=>a.jsx(c.Text,{children:e.task})},{key:"priority",name:"Priority",renderCell:({row:e})=>a.jsx(c.Text,{children:e.priority??"—"})},{key:"issueType",name:"Issue Type",renderCell:({row:e})=>a.jsx(c.Text,{children:e.issueType??"—"})}],[]),S=t.useState(()=>new Set);return a.jsx(R,{tableConfig:{containerStyle:{height:"700px"},resizableColumn:!0,subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},selecting:{state:S,rowKeyGetter:e=>e.id,showDefault:!0,selectingRules:{levels:"all"}},controlBlock:{show:!0,massActionPanel:{buttons:[{type:"button",text:"Действие",view:"secondary"}]}},infinityScroll:{rowThreshold:5,onTrigger:u,isLoading:n,hasMore:l}},columnConfig:g,rows:s})}};var w,m,d;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const k=["SelectingWithInfinityScroll"],M=Object.freeze(Object.defineProperty({__proto__:null,SelectingWithInfinityScroll:o,__namedExportsOrder:k,default:T},Symbol.toStringTag,{value:"Module"}));export{M as T};
