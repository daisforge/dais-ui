import{r as t,d as w}from"./react-D2T61mpp.js";import{a as f,c as k}from"./tableData-DVJFoYoT.js";import S from"./DocStoryTemplate-CnJlkrRG.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{T as y}from"./TableCanvas-S_EYYloC.js";const D={title:"Локальные компоненты/TableCanvas/FormatCellContent",tags:["!autodocs"],parameters:{docs:{page:S}}},F=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,u={...C({preCode:F,previewSource:"shown"}),name:"Форматирование ячеек",render:()=>{const[o]=t.useState(()=>f()),r=t.useMemo(()=>[{key:"block",name:"Блок / Трайб / Продукт",contentFormat:{customFormat:n=>`📝 ${n}`},subRow:{keyOfColumnInSubRow:n=>{switch(n){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1},resizable:!0},{key:"blockActivity",name:"Активность блока",title:"123",contentFormat:{customFormat:n=>`${n}!`}},{key:"",minWidth:170,name:"Локация трайба",subRow:{renderSubRowCell:(n,g)=>{var a;return g===1?(a=n.row)==null?void 0:a.tribeZone:null}}},{key:"q1",name:"Q1",contentFormat:"number",subRow:{parentKeyAsDefault:!0,contentFormat:{customFormat:n=>`${n}%`}}},{key:"q2",name:"Q2",contentFormat:{type:"number",minimumFractionDigits:1,maximumFractionDigits:3,decimalSeparator:".",thousandSeparator:"_",alignContent:"center"},subRow:{keyOfColumnInSubRow:"q1",contentFormat:{type:"number",minimumFractionDigits:1,maximumFractionDigits:3,decimalSeparator:",",thousandSeparator:".",alignContent:"right"}}},{key:"q3",name:"Q3",contentFormat:{type:"number",minimumFractionDigits:2,locales:["en-US","fr-FR","ru-RU"]},subRow:{keyOfColumnInSubRow:"q1"}},{key:"q4",name:"Q4",contentFormat:"number",subRow:{keyOfColumnInSubRow:"q1"}}],[]);return w.jsxDEV(y,{tableConfig:{containerStyle:{height:"700px"},subRows:{getSubRows:n=>n==null?void 0:n.subRows,rowKeyGetter:n=>n.id},resizableColumn:!0},columnConfig:r,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.FormatCellContent/TableCanvas.formatCellContent.stories.tsx",lineNumber:147,columnNumber:7},void 0)}},e={...C({preCode:F,previewSource:"shown"}),name:"Выравнивание колонки (contentAlign)",render:()=>{const[o]=t.useState(()=>k(1,30)),r=t.useMemo(()=>[{key:"issueType",name:"Текст",width:140},{key:"priority",name:"Текст, center",width:120,contentAlign:"center"},{key:"complete",name:"Число",width:120,contentFormat:"number"},{key:"inspiredDay",name:"Число, left",width:120,contentFormat:"number",contentAlign:"left"}],[]);return w.jsxDEV(y,{tableConfig:{containerStyle:{height:"500px"}},columnConfig:r,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.FormatCellContent/TableCanvas.formatCellContent.stories.tsx",lineNumber:203,columnNumber:7},void 0)}};var s,m,i;u.parameters={...u.parameters,docs:{...(s=u.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(i=(m=u.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var c,l,b,d,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Выравнивание колонки (contentAlign)',
  render: () => {
    const [rows] = useState(() => createRows(1, 30));
    const columns = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'issueType',
      name: 'Текст',
      width: 140
    }, {
      key: 'priority',
      name: 'Текст, center',
      width: 120,
      contentAlign: 'center'
    }, {
      key: 'complete',
      name: 'Число',
      width: 120,
      contentFormat: 'number'
    }, {
      key: 'inspiredDay',
      name: 'Число, left',
      width: 120,
      contentFormat: 'number',
      contentAlign: 'left'
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '500px'
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(b=(l=e.parameters)==null?void 0:l.docs)==null?void 0:b.source},description:{story:"`column.contentAlign` задаёт выравнивание ячеек колонки явно и приоритетнее\n`contentFormat`: число можно прижать влево, текст поставить по центру.",...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.description}}};const R=["BasicFormatting","ContentAlign"],x=Object.freeze(Object.defineProperty({__proto__:null,BasicFormatting:u,ContentAlign:e,__namedExportsOrder:R,default:D},Symbol.toStringTag,{value:"Module"}));export{x as T};
