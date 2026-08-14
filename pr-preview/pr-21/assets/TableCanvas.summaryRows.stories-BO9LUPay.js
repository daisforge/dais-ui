import{r as m,d as t}from"./react-D2T61mpp.js";import{c as C}from"./tableData-UCfjiBCh.js";import p from"./DocStoryTemplate-Cj9EyiOP.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{C as u,T as S}from"./TableCanvas-CSNqHbP4.js";const b={title:"Локальные компоненты/TableCanvas/SummaryRows",parameters:{docs:{page:p}},tags:["!autodocs"]},v=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,o={...w({preCode:v,previewSource:"shown"}),render:()=>{const[s]=m.useState(C),c=[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`Всего тасков ${s.length}`},{columnId:"priority",value:`Средних приоритетов ${s.filter(e=>e.priority==="Medium").length}`}]}],n=m.useCallback(e=>{var r;return((r=e.row.values.find(a=>a.columnId===e.column.key))==null?void 0:r.value)??""},[]),y=m.useMemo(()=>[{key:"id",name:"ID",renderSummaryCell:n},{key:"task",name:"Title",renderSummaryCell:n},{key:"priority",name:"Priority",renderSummaryCell:e=>{const{row:r,theme:a}=e;return t.jsxDEV(u.Container,{padding:{left:a.cellHorizontalPadding,right:a.cellHorizontalPadding},children:t.jsxDEV(u.Text,{color:r.type==="top"?"red":"orange",children:n(e)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:93,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:87,columnNumber:15},void 0)}},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[n]);return t.jsxDEV(S,{tableConfig:{containerStyle:{height:"700px"},summaryRows:{showDefault:!0,showInControl:!0}},columnConfig:y,bottomSummaryRows:c,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:113,columnNumber:7},void 0)}};var l,i,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const bottomSummaryRowsData: TSummaryRowData[] = [{
      type: 'bottom',
      values: [{
        columnId: 'id',
        value: 'Итого'
      }, {
        columnId: 'task',
        value: \`Всего тасков \${rows.length}\`
      }, {
        columnId: 'priority',
        value: \`Средних приоритетов \${rows.filter(el => el.priority === 'Medium').length}\`
      }]
    }];
    const renderCommonSummaryCell = useCallback((props: SummaryCellInfoGlideInstance<Row, TSummaryRowData>) => props.row.values.find(el => el.columnId === props.column.key)?.value ?? '', []);
    const columnConfig = useMemo<readonly ColumnConfig<Row, TSummaryRowData>[]>(() => [{
      key: 'id',
      name: 'ID',
      renderSummaryCell: renderCommonSummaryCell
    }, {
      key: 'task',
      name: 'Title',
      renderSummaryCell: renderCommonSummaryCell
    }, {
      key: 'priority',
      name: 'Priority',
      renderSummaryCell: props => {
        const {
          row,
          theme
        } = props;
        return <Canvas.Container padding={{
          left: theme.cellHorizontalPadding,
          right: theme.cellHorizontalPadding
        }}>
                <Canvas.Text color={row.type === 'top' ? 'red' : 'orange'}>
                  {renderCommonSummaryCell(props)}
                </Canvas.Text>
              </Canvas.Container>;
      }
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'complete',
      name: '% Complete'
    }], [renderCommonSummaryCell]);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '700px'
      },
      summaryRows: {
        showDefault: true,
        showInControl: true
      }
    }} columnConfig={columnConfig} bottomSummaryRows={bottomSummaryRowsData} rows={rows} />;
  }
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const f=["SummaryRows"],D=Object.freeze(Object.defineProperty({__proto__:null,SummaryRows:o,__namedExportsOrder:f,default:b},Symbol.toStringTag,{value:"Module"}));export{D as T};
