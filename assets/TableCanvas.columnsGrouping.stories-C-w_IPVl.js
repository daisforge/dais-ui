import{r as s,d as o}from"./react-D2T61mpp.js";import{c as d,d as a}from"./tableData-UCfjiBCh.js";import p from"./DocStoryTemplate-BrdyFHCL.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{C as t,T as g}from"./TableCanvas-DPYbtCL3.js";import{j as v,k as f}from"./TableGlide-BPyHXAOe.js";const T={title:"Локальные компоненты/TableCanvas/ColumnsGrouping",tags:["!autodocs"],parameters:{docs:{page:p}},args:{headerTreeLvl:Object.keys(a)[0]},argTypes:{headerTreeLvl:{description:"Уровни вложенности шапки таблицы",control:{type:"radio"},options:Object.keys(a)}}},h=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,e={...b({preCode:h,previewSource:"shown"}),args:{headerTreeLvl:"lvl3"},name:"Columns grouping",render:({headerTreeLvl:n})=>{const[m]=s.useState(d),c=s.useMemo(()=>[...(a[n]??[]).map((r,C)=>C===0?{...r,name:o.jsxDEV(t.Container,{padding:{left:8,right:8},children:o.jsxDEV(t.Text,{color:f.accentColor,font:v.bodyXSBold,children:"кастомный name"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:63,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:62,columnNumber:19},void 0)}:r)],[n]);return o.jsxDEV(g,{tableConfig:{containerStyle:{height:700},columnsControl:{enable:!0},resizableColumn:!0},columnConfig:c,rows:m},n,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:79,columnNumber:7},void 0)}};var l,i,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  args: {
    headerTreeLvl: 'lvl3'
  },
  name: 'Columns grouping',
  render: ({
    headerTreeLvl
  }) => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnOrColumnGroupConfig<Row>[]>(() => [...(dataObj[headerTreeLvl] ?? []).map((el, i) => i === 0 ? {
      ...el,
      name: <Canvas.Container padding={{
        left: 8,
        right: 8
      }}>
                    <Canvas.Text color={tableCanvasTheme.accentColor} font={tableCanvasFonts.bodyXSBold}>
                      кастомный name
                    </Canvas.Text>
                  </Canvas.Container>
    } : el)], [headerTreeLvl]);
    return <TableCanvas key={headerTreeLvl} tableConfig={{
      containerStyle: {
        height: 700
      },
      columnsControl: {
        enable: true
      },
      resizableColumn: true
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(u=(i=e.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const y=["SimpleTable"],G=Object.freeze(Object.defineProperty({__proto__:null,SimpleTable:e,__namedExportsOrder:y,default:T},Symbol.toStringTag,{value:"Module"}));export{G as T};
