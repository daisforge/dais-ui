import{r,d as o}from"./react-D2T61mpp.js";import{a as c}from"./tableData-UCfjiBCh.js";import w from"./DocStoryTemplate-BNfNA-EK.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{C as s,T as C}from"./TableCanvas-BZWzZoRR.js";const f={title:"Локальные компоненты/TableCanvas/SubRows",tags:["!autodocs"],parameters:{docs:{page:w}}},k=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,n={...d({preCode:k,previewSource:"shown"}),name:"Иерархичный вид",render:()=>{const[i]=r.useState(()=>c()),b=r.useMemo(()=>[{key:"block",name:"Блок / Трайб / Продукт",subRow:{keyOfColumnInSubRow:e=>{switch(e){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1}},{key:"blockActivity",name:"Активность блока"},{key:" ",name:"Локация трайба",subRow:{renderSubRowCell:(e,m)=>{var u;return m===1?o.jsxDEV(s.Container,{alignItems:"center",padding:{left:8},style:{width:"100%"},children:o.jsxDEV(s.Badge,{id:"kek",text:(u=e.row)==null?void 0:u.tribeZone,view:"accent",size:"m"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SubRows/TableCanvas.subRows.stories.tsx",lineNumber:80,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SubRows/TableCanvas.subRows.stories.tsx",lineNumber:75,columnNumber:19},void 0):""}}},{key:"q1",name:"Q1",subRow:{parentKeyAsDefault:!0}},{key:"q2",name:"Q2",subRow:{keyOfColumnInSubRow:"q1"}},{key:"q3",name:"Q3",subRow:{keyOfColumnInSubRow:"q1"}},{key:"q4",name:"Q4",subRow:{keyOfColumnInSubRow:"q1"}}],[]);return o.jsxDEV(C,{tableConfig:{containerStyle:{height:"60vh"},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},fullScreenEnabled:!0,resizableColumn:!0},columnConfig:b,rows:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SubRows/TableCanvas.subRows.stories.tsx",lineNumber:128,columnNumber:7},void 0)}};var a,t,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Иерархичный вид',
  render: () => {
    const [rows] = useState(() => createRowsTree());
    const columns = useMemo((): readonly ColumnConfig<TreeRow>[] => [{
      key: 'block',
      name: 'Блок / Трайб / Продукт',
      subRow: {
        keyOfColumnInSubRow: lvl => {
          switch (lvl) {
            case 0:
              return 'block';
            case 1:
              return 'tribe';
            case 2:
              return 'product';
            default:
              return 'block';
          }
        },
        isColumnWithArrow: true,
        hideHeaderExpandAllArrow: false
      }
    }, {
      key: 'blockActivity',
      name: 'Активность блока'
    }, {
      key: ' ',
      name: 'Локация трайба',
      subRow: {
        renderSubRowCell: (props, lvl) => {
          if (lvl === 1) {
            return <Canvas.Container alignItems="center" padding={{
              left: 8
            }} style={{
              width: '100%'
            }}>
                    <Canvas.Badge id="kek" text={props.row?.tribeZone} view="accent" size="m" />
                  </Canvas.Container>;
          }
          return '';
        }
      }
    }, {
      key: 'q1',
      name: 'Q1',
      subRow: {
        parentKeyAsDefault: true
      }
    }, {
      key: 'q2',
      name: 'Q2',
      subRow: {
        keyOfColumnInSubRow: 'q1'
      }
    }, {
      key: 'q3',
      name: 'Q3',
      subRow: {
        keyOfColumnInSubRow: 'q1'
      }
    }, {
      key: 'q4',
      name: 'Q4',
      subRow: {
        keyOfColumnInSubRow: 'q1'
      }
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '60vh'
      },
      subRows: {
        getSubRows: row => row?.subRows,
        rowKeyGetter: row => row.id
      },
      fullScreenEnabled: true,
      resizableColumn: true
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(l=(t=n.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const R=["SubRows"],T=Object.freeze(Object.defineProperty({__proto__:null,SubRows:n,__namedExportsOrder:R,default:f},Symbol.toStringTag,{value:"Module"}));export{T};
