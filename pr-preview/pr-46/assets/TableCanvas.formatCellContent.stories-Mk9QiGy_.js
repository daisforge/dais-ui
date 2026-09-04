import{r as o,d as l}from"./react-D2T61mpp.js";import{a as c}from"./tableData-UCfjiBCh.js";import b from"./DocStoryTemplate-Dt6KH5ne.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{T as w}from"./TableCanvas-Z8xOVZVd.js";const C={title:"Локальные компоненты/TableCanvas/FormatCellContent",tags:["!autodocs"],parameters:{docs:{page:b}}},d=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,e={...p({preCode:d,previewSource:"shown"}),name:"Форматирование ячеек",render:()=>{const[m]=o.useState(()=>c()),s=o.useMemo(()=>[{key:"block",name:"Блок / Трайб / Продукт",contentFormat:{customFormat:n=>`📝 ${n}`},subRow:{keyOfColumnInSubRow:n=>{switch(n){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1},resizable:!0},{key:"blockActivity",name:"Активность блока",title:"123",contentFormat:{customFormat:n=>`${n}!`}},{key:"",minWidth:170,name:"Локация трайба",subRow:{renderSubRowCell:(n,i)=>{var t;return i===1?(t=n.row)==null?void 0:t.tribeZone:null}}},{key:"q1",name:"Q1",contentFormat:"number",subRow:{parentKeyAsDefault:!0,contentFormat:{customFormat:n=>`${n}%`}}},{key:"q2",name:"Q2",contentFormat:{type:"number",minimumFractionDigits:1,maximumFractionDigits:3,decimalSeparator:".",thousandSeparator:"_",alignContent:"center"},subRow:{keyOfColumnInSubRow:"q1",contentFormat:{type:"number",minimumFractionDigits:1,maximumFractionDigits:3,decimalSeparator:",",thousandSeparator:".",alignContent:"right"}}},{key:"q3",name:"Q3",contentFormat:{type:"number",minimumFractionDigits:2,locales:["en-US","fr-FR","ru-RU"]},subRow:{keyOfColumnInSubRow:"q1"}},{key:"q4",name:"Q4",contentFormat:"number",subRow:{keyOfColumnInSubRow:"q1"}}],[]);return l.jsxDEV(w,{tableConfig:{containerStyle:{height:"700px"},subRows:{getSubRows:n=>n==null?void 0:n.subRows,rowKeyGetter:n=>n.id},resizableColumn:!0},columnConfig:s,rows:m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.FormatCellContent/TableCanvas.formatCellContent.stories.tsx",lineNumber:142,columnNumber:7},void 0)}};var u,r,a;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Форматирование ячеек',
  render: () => {
    const [rows] = useState(() => createRowsTree());
    const columns = useMemo<readonly ColumnConfig<TreeRow>[]>(() => [{
      key: 'block',
      name: 'Блок / Трайб / Продукт',
      contentFormat: {
        customFormat: val => \`📝 \${val}\`
      },
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
      },
      resizable: true
    }, {
      key: 'blockActivity',
      name: 'Активность блока',
      title: '123',
      contentFormat: {
        customFormat: val => \`\${val}!\`
      }
    }, {
      key: '',
      minWidth: 170,
      name: 'Локация трайба',
      subRow: {
        renderSubRowCell: (props, lvl) => {
          if (lvl === 1) {
            return props.row?.tribeZone;
          }
          return null;
        }
      }
    }, {
      key: 'q1',
      name: 'Q1',
      contentFormat: 'number',
      subRow: {
        parentKeyAsDefault: true,
        /* Форматирование в подстроках */
        contentFormat: {
          customFormat: val => \`\${val}%\`
        }
      }
    }, {
      key: 'q2',
      name: 'Q2',
      contentFormat: {
        type: 'number',
        minimumFractionDigits: 1,
        maximumFractionDigits: 3,
        decimalSeparator: '.',
        thousandSeparator: '_',
        alignContent: 'center'
      },
      subRow: {
        keyOfColumnInSubRow: 'q1',
        contentFormat: {
          type: 'number',
          minimumFractionDigits: 1,
          maximumFractionDigits: 3,
          decimalSeparator: ',',
          thousandSeparator: '.',
          alignContent: 'right'
        }
      }
    }, {
      key: 'q3',
      name: 'Q3',
      contentFormat: {
        type: 'number',
        minimumFractionDigits: 2,
        locales: ['en-US', 'fr-FR', 'ru-RU']
      },
      subRow: {
        keyOfColumnInSubRow: 'q1'
      }
    }, {
      key: 'q4',
      name: 'Q4',
      contentFormat: 'number',
      subRow: {
        keyOfColumnInSubRow: 'q1'
      }
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '700px'
      },
      subRows: {
        getSubRows: row => row?.subRows,
        rowKeyGetter: row => row.id
      },
      resizableColumn: true
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const F=["BasicFormatting"],k=Object.freeze(Object.defineProperty({__proto__:null,BasicFormatting:e,__namedExportsOrder:F,default:C},Symbol.toStringTag,{value:"Module"}));export{k as T};
