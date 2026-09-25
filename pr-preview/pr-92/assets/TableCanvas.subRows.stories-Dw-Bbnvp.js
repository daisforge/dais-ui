import{r,d as n}from"./react-D2T61mpp.js";import{f as c}from"./tableData-DVJFoYoT.js";import w from"./DocStoryTemplate-Cd124LaY.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{C as s,T as C}from"./TableCanvas-CzBP2Nte.js";const f={title:"Локальные компоненты/TableCanvas/SubRows",tags:["!autodocs"],parameters:{docs:{page:w}}},R=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,u={...d({preCode:R,previewSource:"shown"}),name:"Иерархичный вид",render:()=>{const[i]=r.useState(()=>c()),b=r.useMemo(()=>[{key:"block",name:"Блок / Трайб / Продукт",subRow:{keyOfColumnInSubRow:e=>{switch(e){case 0:return"block";case 1:return"tribe";default:return"product"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1}},{key:"blockActivity",name:"Активность блока"},{key:" ",name:"Локация трайба",subRow:{renderSubRowCell:(e,m)=>{var o;return m===1?n.jsxDEV(s.Container,{alignItems:"center",padding:{left:8},style:{width:"100%"},children:n.jsxDEV(s.Badge,{id:"kek",text:(o=e.row)==null?void 0:o.tribeZone,view:"accent",size:"m"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SubRows/TableCanvas.subRows.stories.tsx",lineNumber:79,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SubRows/TableCanvas.subRows.stories.tsx",lineNumber:74,columnNumber:19},void 0):""}}},{key:"q1",name:"Q1",subRow:{parentKeyAsDefault:!0}},{key:"q2",name:"Q2",subRow:{keyOfColumnInSubRow:"q1"}},{key:"q3",name:"Q3",subRow:{keyOfColumnInSubRow:"q1"}},{key:"q4",name:"Q4",subRow:{keyOfColumnInSubRow:"q1"}}],[]);return n.jsxDEV(C,{tableConfig:{containerStyle:{height:"85vh"},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},rowSize:{showInControl:!0,default:"big"},fullScreenEnabled:!0,resizableColumn:!0},columnConfig:b,rows:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SubRows/TableCanvas.subRows.stories.tsx",lineNumber:127,columnNumber:7},void 0)}};var a,t,l;u.parameters={...u.parameters,docs:{...(a=u.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Иерархичный вид',
  render: () => {
    // Разная глубина и число детей у строк — «рваная лестница» отступов
    const [rows] = useState(() => createRaggedRowsTree());
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
            default:
              return 'product';
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
        height: '85vh'
      },
      subRows: {
        getSubRows: row => row?.subRows,
        rowKeyGetter: row => row.id
      },
      // Отступ уровня зависит от размера строки: big 16/66/116,
      // medium 6/42/78, small 4/32/60 px
      rowSize: {
        showInControl: true,
        default: 'big'
      },
      fullScreenEnabled: true,
      resizableColumn: true
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(l=(t=u.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const k=["SubRows"],E=Object.freeze(Object.defineProperty({__proto__:null,SubRows:u,__namedExportsOrder:k,default:f},Symbol.toStringTag,{value:"Module"}));export{E as T};
