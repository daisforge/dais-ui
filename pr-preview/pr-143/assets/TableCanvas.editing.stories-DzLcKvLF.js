import{r as a,d as s}from"./react-D2T61mpp.js";import{a as Y,B as g,P as X,T as Z}from"./tableData-DVJFoYoT.js";import oe from"./DocStoryTemplate-CXSs-ref.js";import{g as F}from"./getFuncAsString-jbx3mwek.js";import{s as h}from"./storySourceDoc-tVKyHcEN.js";import{M as x}from"./ModalDF-BM9xq2zn.js";import{j as ee,T as N,k as ue}from"./TableCanvas-C8oI5Ymd.js";import{b as re}from"./swr-CGDgU1GE.js";import{t as ne,S as ie}from"./@salutejs/sdds-finai-DSVjdAOr.js";import{u as ae}from"./utils-Dfe4gMUl.js";const se={title:"Локальные компоненты/TableCanvas/Editing",tags:["!autodocs"],parameters:{docs:{page:oe}}},y={...h({previewSource:"shown"}),render:()=>{const[t,o]=a.useState(()=>Y()),l=a.useMemo(()=>[{key:"block",name:"Блок",editingCell:{editable:n=>n.block===g[1],error:{value:n=>n.block===g[0]},component:"select",options:{type:"constant",options:g.map(n=>({text:n,value:n}))}},subRow:{keyOfColumnInSubRow:n=>{switch(n){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},editingCell:{component:"inputString",inputProps:{placeholder:"Введите значение"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1}},{key:"blockActivity",name:"Активность блока",editingCell:{component:"inputString"}},{key:"tribe",name:"Трайб",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"tribeOptions"},selectProps:{listMaxHeight:"210px"}}},{key:"product",name:"Продукт",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"productOptions"}}},{key:"q1",name:"Q1",editingCell:{component:"inputNumber",inputProps:{placeholder:"Введите значение"}},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" ",alignContent:"right",minimumFractionDigits:2,maximumFractionDigits:2},subRow:{keyOfColumnInSubRow:"q1",editingCell:{component:"inputNumber"}}},{key:"q2",name:"Q2",contentFormat:"number",editingCell:{component:({row:n,onRowChange:i,column:e,cellHeight:p,cellWidth:w,initialValue:b})=>{const c=b&&!Number.isNaN(+b)?+b:null,[d,m]=a.useState(c??(n==null?void 0:n[e.key])),C=(v,f)=>{if(f){const T=f.floatValue??f.formattedValue;m(T),i({...n,[e.key]:T})}};return s.jsxDEV(ee,{cellHeight:p,cellWidth:w,autoFocusType:c===null?"autoFocusAndSelect":"autoFocus",value:d,onChange:C},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:182,columnNumber:17},void 0)}},subRow:{keyOfColumnInSubRow:"q2",editingCell:{component:"inputNumber"}}},{key:"q3",name:"Q3",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q3",editingCell:{component:"inputNumber",error:{value(n,i){return!0}}}}},{key:"q4",name:"Q4",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q4",editingCell:{component:"inputNumber"}}}],[]),u=a.useMemo(()=>({tribeOptions:Z.map(n=>({text:n,value:n})),productOptions:X.map(n=>({text:n,value:n}))}),[]),r=a.useRef(null);return s.jsxDEV(N,{tableConfig:{enableLowDprHairline:!0,containerStyle:{height:"700px"},rowSize:{showInControl:!0,default:"big"},editing:{onEnableEditing(n){r.current=JSON.parse(JSON.stringify(t)),n()},onCancel(n){r.current&&o(r.current),n()},onSave(n){r.current=null,n()},onRowsChange:o,rowKeyGetter:n=>`${n.id}`,rowEditable:n=>n.block!==g[1]},subRows:{getSubRows:n=>n==null?void 0:n.subRows,rowKeyGetter:n=>n.id},resizableColumn:!0},columnConfig:l,rows:t,rowContextValue:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:245,columnNumber:7},void 0)}},R={...h({previewSource:"shown"}),name:"Buttons Control (disabled, isLoading)",render:()=>{const[t,o]=a.useState([{id:"1",name:"Альфа",value:100},{id:"2",name:"Бета",value:200},{id:"3",name:"Гамма",value:300}]),[l,u]=a.useState(!1),r=a.useRef(null),n=a.useMemo(()=>[{key:"name",name:"Название",editingCell:{component:"inputString"}},{key:"value",name:"Значение",contentFormat:"number",editingCell:{component:"inputNumber"}}],[]);return s.jsxDEV(N,{tableConfig:{containerStyle:{height:"400px"},editing:{onRowsChange:o,rowKeyGetter:i=>i.id,buttons:{save:{disabled:l,isLoading:l},cancel:{disabled:l}},onEnableEditing(i){r.current=[...t],i()},onSave(i){u(!0),setTimeout(()=>{u(!1),r.current=null,i()},2e3)},onCancel(i){r.current&&o(r.current),i()}}},columnConfig:n,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:320,columnNumber:7},void 0)}},S={...h({previewSource:"shown"}),render:()=>{const[t,o]=a.useState(()=>Y()),l=a.useMemo(()=>[{key:"block",name:"Блок",editingCell:{editable:e=>e.block===g[1],error:{value:e=>e.block===g[0]},component:"select",options:{type:"constant",options:g.map(e=>({text:e,value:e}))}},subRow:{keyOfColumnInSubRow:e=>{switch(e){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},editingCell:{component:"inputString",inputProps:{placeholder:"Введите значение"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1}},{key:"blockActivity",name:"Активность блока",editingCell:{component:"inputString"}},{key:"tribe",name:"Трайб",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"tribeOptions"},selectProps:{listMaxHeight:"210px"}}},{key:"product",name:"Продукт",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"productOptions"}}},{key:"q1",name:"Q1",editingCell:{component:"inputNumber",inputProps:{placeholder:"Введите значение"}},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" ",alignContent:"right",minimumFractionDigits:2,maximumFractionDigits:2},subRow:{keyOfColumnInSubRow:"q1",editingCell:{component:"inputNumber"}}},{key:"q2",name:"Q2",contentFormat:"number",editingCell:{component:({row:e,onRowChange:p,column:w,cellHeight:b,cellWidth:c,initialValue:d})=>{const m=d&&!Number.isNaN(+d)?+d:null,[C,v]=a.useState(m??(e==null?void 0:e[w.key])),f=(T,D)=>{if(D){const I=D.floatValue??D.formattedValue;v(I),p({...e,[w.key]:I})}};return s.jsxDEV(ee,{cellHeight:b,cellWidth:c,autoFocusType:m===null?"autoFocusAndSelect":"autoFocus",value:C,onChange:f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:503,columnNumber:17},void 0)}},subRow:{keyOfColumnInSubRow:"q2",editingCell:{component:"inputNumber"}}},{key:"q3",name:"Q3",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q3",editingCell:{component:"inputNumber",error:{value(e,p){return!0}}}}},{key:"q4",name:"Q4",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q4",editingCell:{component:"inputNumber"}}}],[]),u=a.useMemo(()=>({tribeOptions:Z.map(e=>({text:e,value:e})),productOptions:X.map(e=>({text:e,value:e}))}),[]),r=a.useRef(null),[n,i]=a.useState(!1);return s.jsxDEV(s.Fragment,{children:[s.jsxDEV(ne,{type:"button",onClick:()=>i(e=>!e),children:"Toggle Modal"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:567,columnNumber:9},void 0),s.jsxDEV(x,{opened:n,onClose:()=>i(!1),children:s.jsxDEV(x.Main,{children:[s.jsxDEV(x.Header,{title:"Режим редактирования внутри модальных окон",badge:{text:"tableConfig.editorOverlayPortal: 'inside'"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:572,columnNumber:13},void 0),s.jsxDEV(x.Content,{children:s.jsxDEV(N,{tableConfig:{editorOverlayPortal:"inside",containerStyle:{height:"60vh",width:"80vw"},rowSize:{showInControl:!0,default:"big"},editing:{defaultEnabled:!0,onEnableEditing(e){r.current=JSON.parse(JSON.stringify(t)),e()},onCancel(e){r.current&&o(r.current),e()},onSave(e){r.current=null,e()},onRowsChange:o,rowKeyGetter:e=>`${e.id}`,rowEditable:e=>e.block!==g[1]},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},resizableColumn:!0},columnConfig:l,rows:t,rowContextValue:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:577,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:576,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:571,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:570,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:566,columnNumber:7},void 0)}},le=[{id:"1",name:"Аренда офиса",amount:12e4,limit:15e4,status:"approved"},{id:"2",name:"",amount:48e3,limit:5e4,status:"new"},{id:"3",name:"Канцелярия",amount:9e3,limit:5e3,status:"new"},{id:"4",name:"Командировка",amount:7e4,limit:4e4,status:"rejected"},{id:"5",name:"",amount:99e3,limit:3e4,status:"new"},{id:"6",name:"Обучение",amount:15e3,limit:2e4,status:"approved"}],me=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { useState } from 'react';

type InvoiceRow = {
  id: string;
  name: string;
  amount: number;
  limit: number;
  status: 'new' | 'approved' | 'rejected';
};

const columnConfig: ColumnConfig<InvoiceRow>[] = [
  {
    key: 'name',
    name: 'Назначение',
    editingCell: {
      component: 'inputString',
      error: {
        value: (row) => row.name.trim() === '',
        // Тултип считается только при наведении на ячейку с ошибкой.
        tooltip: () => 'Назначение платежа не заполнено',
      },
    },
  },
  {
    key: 'amount',
    name: 'Сумма',
    contentFormat: 'number',
    editingCell: {
      component: 'inputNumber',
      error: {
        value: (row) => row.amount > row.limit,
        tooltip: (row) => ({
          text: \`Сумма превышает лимит \${row.limit}\`,
          placement: 'right',
          maxWidth: 240,
        }),
      },
    },
  },
  { key: 'limit', name: 'Лимит', contentFormat: 'number' },
  { key: 'status', name: 'Статус' },
];

const App = () => {
  const [rows, setRows] = useState<InvoiceRow[]>(initialRows);

  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: '400px' },
        rowMarkers: {},
        rowSize: { showInControl: true, default: 'big' },
        editing: {
          defaultEnabled: true,
          onRowsChange: setRows,
          rowKeyGetter: (r) => r.id,
          rowErrors: {
            // Отклонённая строка подсвечивается целиком, одной рамкой.
            isErrorRow: (row) => row.status === 'rejected',
            // Свой текст тултипа индикатора. Без этой функции будет
            // «Ошибок в строке: N» для поячеечных ошибок и ничего для строки.
            tooltip: ({ isErrorRow, errorCellsCount }) =>
              isErrorRow
                ? 'Строка отклонена'
                : \`Ошибок в строке: \${errorCellsCount}\`,
          },
        },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
};
`,E={...h({code:me,type:"code"}),name:"Row Errors (индикатор и ошибка всей строки)",render:()=>{const[t,o]=a.useState(le),[l,u]=a.useState(!0),[r,n]=a.useState(()=>new Set),i=a.useMemo(()=>[{key:"name",name:"Назначение",editingCell:{component:"inputString",error:{value:e=>e.name.trim()==="",tooltip:()=>"Назначение платежа не заполнено"}}},{key:"amount",name:"Сумма",contentFormat:"number",editingCell:{component:"inputNumber",error:{value:e=>e.amount>e.limit,tooltip:e=>({text:`Сумма превышает лимит ${e.limit}`,placement:"right",maxWidth:240})}}},{key:"limit",name:"Лимит",contentFormat:"number",editingCell:{component:"inputNumber"}},{key:"status",name:"Статус",editingCell:{component:"select",options:{type:"constant",options:[{text:"Новая",value:"new"},{text:"Согласована",value:"approved"},{text:"Отклонена",value:"rejected"}]}}}],[]);return s.jsxDEV(s.Fragment,{children:[s.jsxDEV(ne,{size:"s",view:"secondary",style:{marginBottom:12},onClick:()=>u(e=>!e),children:l?"Скрыть столбец-индикатор":"Показать столбец-индикатор"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:809,columnNumber:9},void 0),s.jsxDEV(N,{tableConfig:{containerStyle:{height:"400px"},rowMarkers:{},rowSize:{showInControl:!0,default:"big"},selecting:{state:[r,n],rowKeyGetter:e=>e.id},editing:{defaultEnabled:!0,onRowsChange:o,rowKeyGetter:e=>e.id,rowErrors:{indicatorColumn:l,isErrorRow:e=>e.status==="rejected",tooltip:({isErrorRow:e,errorCellsCount:p})=>e?"Строка отклонена":`Ошибок в строке: ${p}`}}},columnConfig:i,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:819,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:808,columnNumber:7},void 0)}},A=["ООО","АО","ПАО","ИП"],V=["Альфа","Вектор","Гранит","Дельта","Север","Орбита","Прогресс","Сигма"],O=t=>({id:`cp-${t+1}`,name:`${A[t%A.length]} «${V[t%V.length]} ${String(t+1).padStart(4,"0")}»`}),M=Array.from({length:1e3},(t,o)=>O(o)),te=50,ce=({search:t,offset:o})=>new Promise(l=>{setTimeout(()=>{const u=t.trim().toLowerCase(),r=u?M.filter(i=>i.name.toLowerCase().includes(u)):M,n=r.slice(o,o+te);l({items:n,hasMore:o+n.length<r.length})},500)});function de(){var b;const[t,o]=a.useState(""),l=ae(t,300),{data:u,size:r,setSize:n,isValidating:i}=re((c,d)=>d&&!d.hasMore?null:["story-counterparties",l,c],([,c,d])=>ce({search:c,offset:d*te}),{keepPreviousData:!0,revalidateFirstPage:!1,revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1}),e=(u==null?void 0:u.flatMap(c=>c.items))??[],p=((b=u==null?void 0:u[u.length-1])==null?void 0:b.hasMore)??!0;return{items:e,isLoading:i,setSearch:o,loadNext:()=>{!i&&p&&n(r+1)}}}const pe=[3,17,128,402,777,999].map((t,o)=>({id:`${o+1}`,contract:`Договор № ${100+o}`,counterpartyId:O(t).id,counterpartyName:O(t).name,amount:(o+1)*125e3}));function be({info:{row:t,cellWidth:o,cellHeight:l,onRowChange:u,readOnly:r,theme:n},disableLeftOffset:i}){const{items:e,isLoading:p,setSearch:w,loadNext:b}=de(),c=[{value:t.counterpartyId,label:t.counterpartyName},...e.filter(m=>m.id!==t.counterpartyId).map(m=>({value:m.id,label:m.name}))],d=m=>{const C=m.currentTarget;C.scrollTop+C.clientHeight>=C.scrollHeight-50&&b()};return s.jsxDEV(ue,{autoFocusType:"autoFocus",cellWidth:o,cellHeight:l,disableLeftOffset:i,paddingInline:n.cellHorizontalPadding,readOnly:r,items:c,defaultValue:t.counterpartyId,virtual:!0,filter:()=>!0,onChangeValue:w,onScroll:d,afterList:p?s.jsxDEV("div",{style:{display:"flex",justifyContent:"center",padding:8},children:s.jsxDEV(ie,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:998,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:995,columnNumber:11},this):null,onChange:m=>{var v;if(typeof m!="string")return;const C=(v=c.find(f=>f.value===m))==null?void 0:v.label;u({...t,counterpartyId:m,counterpartyName:C??t.counterpartyName},!0)}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:979,columnNumber:5},this)}const Ce=`
import { Spinner } from '@daisforge/ui/components/Spinner';
import { CellEditorCombobox, ColumnConfig, EditingCellInfo, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { useDebouncedValue } from '@daisforge/ui/utils';
import { UIEvent, useMemo, useState } from 'react';
import useSWRInfinite from 'swr/infinite';

${F("packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx","useCounterpartyOptions")}

${F("packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx","CounterpartyCellEditor")}

`,k={...h({preCode:Ce,previewSource:"shown",type:"code"}),name:"Select с подгрузкой по скроллу (кастомный редактор)",render:()=>{const[t,o]=a.useState(pe),l=a.useMemo(()=>[{key:"contract",name:"Договор"},{key:"counterpartyName",name:"Контрагент",width:280,editingCell:{component:(u,r,n)=>s.jsxDEV(be,{info:u,disableLeftOffset:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:1056,columnNumber:15},void 0),showSelectIcon:!0}},{key:"amount",name:"Сумма",contentFormat:"number",editingCell:{component:"inputNumber"}}],[]);return s.jsxDEV(N,{tableConfig:{containerStyle:{height:"400px"},rowSize:{showInControl:!0,default:"big"},editing:{defaultEnabled:!0,onRowsChange:o,rowKeyGetter:u=>u.id}},columnConfig:l,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:1076,columnNumber:7},void 0)}};var B,K,q;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows, setRows] = useState(() => createRowsTree());
    const columns = useMemo((): readonly ColumnConfig<TreeRow>[] => [{
      key: 'block',
      name: 'Блок',
      editingCell: {
        editable: r => r.block === BLOCKS[1],
        error: {
          value: r => r.block === BLOCKS[0]
        },
        component: 'select',
        options: {
          type: 'constant',
          options: BLOCKS.map(i => ({
            text: i,
            value: i
          }))
        }
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
        editingCell: {
          component: 'inputString',
          inputProps: {
            placeholder: 'Введите значение'
          }
        },
        isColumnWithArrow: true,
        hideHeaderExpandAllArrow: false
      }
    }, {
      key: 'blockActivity',
      name: 'Активность блока',
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'tribe',
      name: 'Трайб',
      editingCell: {
        component: 'select',
        options: {
          type: 'stateInRowContext',
          optionsKeyInRowContext: 'tribeOptions'
        },
        selectProps: {
          listMaxHeight: '210px'
        }
      }
    }, {
      key: 'product',
      name: 'Продукт',
      editingCell: {
        component: 'select',
        options: {
          type: 'stateInRowContext',
          optionsKeyInRowContext: 'productOptions'
        }
      }
    }, {
      key: 'q1',
      name: 'Q1',
      editingCell: {
        component: 'inputNumber',
        inputProps: {
          placeholder: 'Введите значение'
        }
      },
      contentFormat: {
        type: 'number',
        decimalSeparator: ',',
        thousandSeparator: ' ',
        alignContent: 'right',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      },
      subRow: {
        keyOfColumnInSubRow: 'q1',
        editingCell: {
          component: 'inputNumber'
        }
      }
    }, {
      key: 'q2',
      name: 'Q2',
      contentFormat: 'number',
      editingCell: {
        component: ({
          row,
          onRowChange,
          column,
          cellHeight,
          cellWidth,
          initialValue
        }) => {
          const initialValueAsNumber = initialValue && !Number.isNaN(+initialValue) ? +initialValue : null;
          const [v, setV] = useState<string | number>(initialValueAsNumber ?? row?.[column.key as keyof typeof row] as unknown as number);
          const handleChange = (_event?: React.ChangeEvent<HTMLInputElement>, values?: {
            floatValue: number | undefined;
            formattedValue: string;
            value: string;
          }) => {
            if (values) {
              const resultValue = values.floatValue ?? values.formattedValue;
              setV(resultValue);
              onRowChange({
                ...row,
                [column.key]: resultValue
              });
            }
          };
          return <CellEditorNumberFormat cellHeight={cellHeight} cellWidth={cellWidth} autoFocusType={initialValueAsNumber === null ? 'autoFocusAndSelect' : 'autoFocus'} value={v} onChange={handleChange} />;
        }
      },
      subRow: {
        keyOfColumnInSubRow: 'q2',
        editingCell: {
          component: 'inputNumber'
        }
      }
    }, {
      key: 'q3',
      name: 'Q3',
      contentFormat: 'number',
      editingCell: {
        component: 'inputNumber'
      },
      subRow: {
        keyOfColumnInSubRow: 'q3',
        editingCell: {
          component: 'inputNumber',
          error: {
            value(_row, _treeLvl) {
              return true;
            }
          }
        }
      }
    }, {
      key: 'q4',
      name: 'Q4',
      contentFormat: 'number',
      editingCell: {
        component: 'inputNumber'
      },
      subRow: {
        keyOfColumnInSubRow: 'q4',
        editingCell: {
          component: 'inputNumber'
        }
      }
    }], []);
    const rowContextValue = useMemo(() => ({
      tribeOptions: TRIBES.map(i => ({
        text: i,
        value: i
      })),
      productOptions: PRODUCTS.map(i => ({
        text: i,
        value: i
      }))
    }), []);
    const savedRowsRef = useRef<null | typeof rows>(null);
    return <TableCanvas tableConfig={{
      enableLowDprHairline: true,
      containerStyle: {
        height: '700px'
      },
      rowSize: {
        showInControl: true,
        default: 'big'
      },
      editing: {
        onEnableEditing(enableEditorMode) {
          savedRowsRef.current = JSON.parse(JSON.stringify(rows));
          enableEditorMode();
        },
        onCancel(disableEditorMode) {
          if (savedRowsRef.current) {
            setRows(savedRowsRef.current);
          }
          disableEditorMode();
        },
        onSave(disableEditorMode) {
          savedRowsRef.current = null;
          disableEditorMode();
        },
        onRowsChange: setRows,
        rowKeyGetter: r => \`\${r.id}\`,
        rowEditable: r => r.block !== BLOCKS[1]
      },
      subRows: {
        getSubRows: row => row?.subRows,
        rowKeyGetter: row => row.id
      },
      resizableColumn: true
    }} columnConfig={columns} rows={rows} rowContextValue={rowContextValue} />;
  }
}`,...(q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var j,P,L;R.parameters={...R.parameters,docs:{...(j=R.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  name: 'Buttons Control (disabled, isLoading)',
  render: () => {
    const [rows, setRows] = useState<SimpleRow[]>([{
      id: '1',
      name: 'Альфа',
      value: 100
    }, {
      id: '2',
      name: 'Бета',
      value: 200
    }, {
      id: '3',
      name: 'Гамма',
      value: 300
    }]);
    const [isSaving, setIsSaving] = useState(false);
    const savedRowsRef = useRef<SimpleRow[] | null>(null);
    const columnConfig = useMemo((): ColumnConfig<SimpleRow>[] => [{
      key: 'name',
      name: 'Название',
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'value',
      name: 'Значение',
      contentFormat: 'number',
      editingCell: {
        component: 'inputNumber'
      }
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '400px'
      },
      editing: {
        onRowsChange: setRows,
        rowKeyGetter: r => r.id,
        buttons: {
          save: {
            disabled: isSaving,
            isLoading: isSaving
          },
          cancel: {
            disabled: isSaving
          }
        },
        onEnableEditing(enableEditorMode) {
          savedRowsRef.current = [...rows];
          enableEditorMode();
        },
        onSave(disableEditorMode) {
          setIsSaving(true);
          setTimeout(() => {
            setIsSaving(false);
            savedRowsRef.current = null;
            disableEditorMode();
          }, 2000);
        },
        onCancel(disableEditorMode) {
          if (savedRowsRef.current) {
            setRows(savedRowsRef.current);
          }
          disableEditorMode();
        }
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(L=(P=R.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var _,H,z;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows, setRows] = useState(() => createRowsTree());
    const columns = useMemo((): readonly ColumnConfig<TreeRow>[] => [{
      key: 'block',
      name: 'Блок',
      editingCell: {
        editable: r => r.block === BLOCKS[1],
        error: {
          value: r => r.block === BLOCKS[0]
        },
        component: 'select',
        options: {
          type: 'constant',
          options: BLOCKS.map(i => ({
            text: i,
            value: i
          }))
        }
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
        editingCell: {
          component: 'inputString',
          inputProps: {
            placeholder: 'Введите значение'
          }
        },
        isColumnWithArrow: true,
        hideHeaderExpandAllArrow: false
      }
    }, {
      key: 'blockActivity',
      name: 'Активность блока',
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'tribe',
      name: 'Трайб',
      editingCell: {
        component: 'select',
        options: {
          type: 'stateInRowContext',
          optionsKeyInRowContext: 'tribeOptions'
        },
        selectProps: {
          listMaxHeight: '210px'
        }
      }
    }, {
      key: 'product',
      name: 'Продукт',
      editingCell: {
        component: 'select',
        options: {
          type: 'stateInRowContext',
          optionsKeyInRowContext: 'productOptions'
        }
      }
    }, {
      key: 'q1',
      name: 'Q1',
      editingCell: {
        component: 'inputNumber',
        inputProps: {
          placeholder: 'Введите значение'
        }
      },
      contentFormat: {
        type: 'number',
        decimalSeparator: ',',
        thousandSeparator: ' ',
        alignContent: 'right',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      },
      subRow: {
        keyOfColumnInSubRow: 'q1',
        editingCell: {
          component: 'inputNumber'
        }
      }
    }, {
      key: 'q2',
      name: 'Q2',
      contentFormat: 'number',
      editingCell: {
        component: ({
          row,
          onRowChange,
          column,
          cellHeight,
          cellWidth,
          initialValue
        }) => {
          const initialValueAsNumber = initialValue && !Number.isNaN(+initialValue) ? +initialValue : null;
          const [v, setV] = useState<string | number>(initialValueAsNumber ?? row?.[column.key as keyof typeof row] as unknown as number);
          const handleChange = (_event?: React.ChangeEvent<HTMLInputElement>, values?: {
            floatValue: number | undefined;
            formattedValue: string;
            value: string;
          }) => {
            if (values) {
              const resultValue = values.floatValue ?? values.formattedValue;
              setV(resultValue);
              onRowChange({
                ...row,
                [column.key]: resultValue
              });
            }
          };
          return <CellEditorNumberFormat cellHeight={cellHeight} cellWidth={cellWidth} autoFocusType={initialValueAsNumber === null ? 'autoFocusAndSelect' : 'autoFocus'} value={v} onChange={handleChange} />;
        }
      },
      subRow: {
        keyOfColumnInSubRow: 'q2',
        editingCell: {
          component: 'inputNumber'
        }
      }
    }, {
      key: 'q3',
      name: 'Q3',
      contentFormat: 'number',
      editingCell: {
        component: 'inputNumber'
      },
      subRow: {
        keyOfColumnInSubRow: 'q3',
        editingCell: {
          component: 'inputNumber',
          error: {
            value(_row, _treeLvl) {
              return true;
            }
          }
        }
      }
    }, {
      key: 'q4',
      name: 'Q4',
      contentFormat: 'number',
      editingCell: {
        component: 'inputNumber'
      },
      subRow: {
        keyOfColumnInSubRow: 'q4',
        editingCell: {
          component: 'inputNumber'
        }
      }
    }], []);
    const rowContextValue = useMemo(() => ({
      tribeOptions: TRIBES.map(i => ({
        text: i,
        value: i
      })),
      productOptions: PRODUCTS.map(i => ({
        text: i,
        value: i
      }))
    }), []);
    const savedRowsRef = useRef<null | typeof rows>(null);
    const [opened, setOpened] = useState(false);
    return <>
        <Button type="button" onClick={() => setOpened(prev => !prev)}>
          Toggle Modal
        </Button>
        <ModalDF opened={opened} onClose={() => setOpened(false)}>
          <ModalDF.Main>
            <ModalDF.Header title="Режим редактирования внутри модальных окон" badge={{
            text: \`tableConfig.editorOverlayPortal: 'inside'\`
          }} />
            <ModalDF.Content>
              <TableCanvas tableConfig={{
              // КЛЮЧЕВОЕ СВОЙСТВО ДЛЯ КОРРЕКТНОЙ РАБОТЫ РЕЖИМА РЕДАКТИРОВАНИЯ ВНУТРИ МОДАЛЬНЫХ ОКОН
              editorOverlayPortal: 'inside',
              //
              containerStyle: {
                height: '60vh',
                width: '80vw'
              },
              rowSize: {
                showInControl: true,
                default: 'big'
              },
              editing: {
                defaultEnabled: true,
                onEnableEditing(enableEditorMode) {
                  savedRowsRef.current = JSON.parse(JSON.stringify(rows));
                  enableEditorMode();
                },
                onCancel(disableEditorMode) {
                  if (savedRowsRef.current) {
                    setRows(savedRowsRef.current);
                  }
                  disableEditorMode();
                },
                onSave(disableEditorMode) {
                  savedRowsRef.current = null;
                  disableEditorMode();
                },
                onRowsChange: setRows,
                rowKeyGetter: r => \`\${r.id}\`,
                rowEditable: r => r.block !== BLOCKS[1]
              },
              subRows: {
                getSubRows: row => row?.subRows,
                rowKeyGetter: row => row.id
              },
              resizableColumn: true
            }} columnConfig={columns} rows={rows} rowContextValue={rowContextValue} />
            </ModalDF.Content>
          </ModalDF.Main>
        </ModalDF>
      </>;
  }
}`,...(z=(H=S.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var W,G,$;E.parameters={...E.parameters,docs:{...(W=E.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...storySourceDoc({
    code: rowErrorsCode,
    type: 'code'
  }),
  name: 'Row Errors (индикатор и ошибка всей строки)',
  render: () => {
    const [rows, setRows] = useState<InvoiceRow[]>(INVOICE_ROWS);
    const [indicatorColumn, setIndicatorColumn] = useState(true);
    const [selectedRows, setSelectedRows] = useState<ReadonlySet<string>>(() => new Set());
    const columnConfig = useMemo((): ColumnConfig<InvoiceRow>[] => [{
      key: 'name',
      name: 'Назначение',
      editingCell: {
        component: 'inputString',
        error: {
          value: row => row.name.trim() === '',
          tooltip: () => 'Назначение платежа не заполнено'
        }
      }
    }, {
      key: 'amount',
      name: 'Сумма',
      contentFormat: 'number',
      editingCell: {
        component: 'inputNumber',
        error: {
          value: row => row.amount > row.limit,
          tooltip: row => ({
            text: \`Сумма превышает лимит \${row.limit}\`,
            placement: 'right',
            maxWidth: 240
          })
        }
      }
    }, {
      key: 'limit',
      name: 'Лимит',
      contentFormat: 'number',
      editingCell: {
        component: 'inputNumber'
      }
    }, {
      key: 'status',
      name: 'Статус',
      editingCell: {
        component: 'select',
        options: {
          type: 'constant',
          options: [{
            text: 'Новая',
            value: 'new'
          }, {
            text: 'Согласована',
            value: 'approved'
          }, {
            text: 'Отклонена',
            value: 'rejected'
          }]
        }
      }
    }], []);
    return <>
        <Button size="s" view="secondary" style={{
        marginBottom: 12
      }} onClick={() => setIndicatorColumn(v => !v)}>
          {indicatorColumn ? 'Скрыть столбец-индикатор' : 'Показать столбец-индикатор'}
        </Button>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: '400px'
        },
        rowMarkers: {},
        rowSize: {
          showInControl: true,
          default: 'big'
        },
        selecting: {
          state: [selectedRows, setSelectedRows],
          rowKeyGetter: r => r.id
        },
        editing: {
          defaultEnabled: true,
          onRowsChange: setRows,
          rowKeyGetter: r => r.id,
          rowErrors: {
            indicatorColumn,
            isErrorRow: row => row.status === 'rejected',
            tooltip: ({
              isErrorRow,
              errorCellsCount
            }) => isErrorRow ? 'Строка отклонена' : \`Ошибок в строке: \${errorCellsCount}\`
          }
        }
      }} columnConfig={columnConfig} rows={rows} />
      </>;
  }
}`,...($=(G=E.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var Q,J,U;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode: selectInfiniteScrollPreCode,
    previewSource: 'shown',
    type: 'code'
  }),
  name: 'Select с подгрузкой по скроллу (кастомный редактор)',
  render: () => {
    const [rows, setRows] = useState<ContractRow[]>(CONTRACT_ROWS);
    const columnConfig = useMemo((): ColumnConfig<ContractRow>[] => [{
      key: 'contract',
      name: 'Договор'
    }, {
      key: 'counterpartyName',
      name: 'Контрагент',
      width: 280,
      editingCell: {
        component: (info, _lvl, disableLeftOffset) => <CounterpartyCellEditor info={info} disableLeftOffset={disableLeftOffset} />,
        // Шеврон селекта в ячейке, как у component: 'select'.
        showSelectIcon: true
      }
    }, {
      key: 'amount',
      name: 'Сумма',
      contentFormat: 'number',
      editingCell: {
        component: 'inputNumber'
      }
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '400px'
      },
      rowSize: {
        showInControl: true,
        default: 'big'
      },
      editing: {
        defaultEnabled: true,
        onRowsChange: setRows,
        rowKeyGetter: r => r.id
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(U=(J=k.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};const ge=["Editing","EditingButtonsControl","EditingInModal","EditingRowErrors","EditingSelectInfiniteScroll"],xe=Object.freeze(Object.defineProperty({__proto__:null,Editing:y,EditingButtonsControl:R,EditingInModal:S,EditingRowErrors:E,EditingSelectInfiniteScroll:k,__namedExportsOrder:ge,default:se},Symbol.toStringTag,{value:"Module"}));export{xe as T};
