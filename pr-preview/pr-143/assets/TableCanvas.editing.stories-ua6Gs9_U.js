import{r as o,d as a}from"./react-D2T61mpp.js";import{a as U,B as w,P as Y,T as X}from"./tableData-DVJFoYoT.js";import ne from"./DocStoryTemplate-CXSs-ref.js";import{s as h}from"./storySourceDoc-tVKyHcEN.js";import{M as x}from"./ModalDF-BM9xq2zn.js";import{j as Z,T as N,k as te}from"./TableCanvas-CcfJrYlm.js";import{t as ee,S as oe}from"./@salutejs/sdds-finai-DSVjdAOr.js";const ue={title:"Локальные компоненты/TableCanvas/Editing",tags:["!autodocs"],parameters:{docs:{page:ne}}},y={...h({previewSource:"shown"}),render:()=>{const[t,u]=o.useState(()=>U()),s=o.useMemo(()=>[{key:"block",name:"Блок",editingCell:{editable:n=>n.block===w[1],error:{value:n=>n.block===w[0]},component:"select",options:{type:"constant",options:w.map(n=>({text:n,value:n}))}},subRow:{keyOfColumnInSubRow:n=>{switch(n){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},editingCell:{component:"inputString",inputProps:{placeholder:"Введите значение"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1}},{key:"blockActivity",name:"Активность блока",editingCell:{component:"inputString"}},{key:"tribe",name:"Трайб",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"tribeOptions"},selectProps:{listMaxHeight:"210px"}}},{key:"product",name:"Продукт",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"productOptions"}}},{key:"q1",name:"Q1",editingCell:{component:"inputNumber",inputProps:{placeholder:"Введите значение"}},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" ",alignContent:"right",minimumFractionDigits:2,maximumFractionDigits:2},subRow:{keyOfColumnInSubRow:"q1",editingCell:{component:"inputNumber"}}},{key:"q2",name:"Q2",contentFormat:"number",editingCell:{component:({row:n,onRowChange:i,column:e,cellHeight:m,cellWidth:b,initialValue:g})=>{const p=g&&!Number.isNaN(+g)?+g:null,[C,c]=o.useState(p??(n==null?void 0:n[e.key])),d=(f,v)=>{if(v){const T=v.floatValue??v.formattedValue;c(T),i({...n,[e.key]:T})}};return a.jsxDEV(Z,{cellHeight:m,cellWidth:b,autoFocusType:p===null?"autoFocusAndSelect":"autoFocus",value:C,onChange:d},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:186,columnNumber:17},void 0)}},subRow:{keyOfColumnInSubRow:"q2",editingCell:{component:"inputNumber"}}},{key:"q3",name:"Q3",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q3",editingCell:{component:"inputNumber",error:{value(n,i){return!0}}}}},{key:"q4",name:"Q4",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q4",editingCell:{component:"inputNumber"}}}],[]),l=o.useMemo(()=>({tribeOptions:X.map(n=>({text:n,value:n})),productOptions:Y.map(n=>({text:n,value:n}))}),[]),r=o.useRef(null);return a.jsxDEV(N,{tableConfig:{enableLowDprHairline:!0,containerStyle:{height:"700px"},rowSize:{showInControl:!0,default:"big"},editing:{onEnableEditing(n){r.current=JSON.parse(JSON.stringify(t)),n()},onCancel(n){r.current&&u(r.current),n()},onSave(n){r.current=null,n()},onRowsChange:u,rowKeyGetter:n=>`${n.id}`,rowEditable:n=>n.block!==w[1]},subRows:{getSubRows:n=>n==null?void 0:n.subRows,rowKeyGetter:n=>n.id},resizableColumn:!0},columnConfig:s,rows:t,rowContextValue:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:249,columnNumber:7},void 0)}},R={...h({previewSource:"shown"}),name:"Buttons Control (disabled, isLoading)",render:()=>{const[t,u]=o.useState([{id:"1",name:"Альфа",value:100},{id:"2",name:"Бета",value:200},{id:"3",name:"Гамма",value:300}]),[s,l]=o.useState(!1),r=o.useRef(null),n=o.useMemo(()=>[{key:"name",name:"Название",editingCell:{component:"inputString"}},{key:"value",name:"Значение",contentFormat:"number",editingCell:{component:"inputNumber"}}],[]);return a.jsxDEV(N,{tableConfig:{containerStyle:{height:"400px"},editing:{onRowsChange:u,rowKeyGetter:i=>i.id,buttons:{save:{disabled:s,isLoading:s},cancel:{disabled:s}},onEnableEditing(i){r.current=[...t],i()},onSave(i){l(!0),setTimeout(()=>{l(!1),r.current=null,i()},2e3)},onCancel(i){r.current&&u(r.current),i()}}},columnConfig:n,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:324,columnNumber:7},void 0)}},E={...h({previewSource:"shown"}),render:()=>{const[t,u]=o.useState(()=>U()),s=o.useMemo(()=>[{key:"block",name:"Блок",editingCell:{editable:e=>e.block===w[1],error:{value:e=>e.block===w[0]},component:"select",options:{type:"constant",options:w.map(e=>({text:e,value:e}))}},subRow:{keyOfColumnInSubRow:e=>{switch(e){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},editingCell:{component:"inputString",inputProps:{placeholder:"Введите значение"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1}},{key:"blockActivity",name:"Активность блока",editingCell:{component:"inputString"}},{key:"tribe",name:"Трайб",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"tribeOptions"},selectProps:{listMaxHeight:"210px"}}},{key:"product",name:"Продукт",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"productOptions"}}},{key:"q1",name:"Q1",editingCell:{component:"inputNumber",inputProps:{placeholder:"Введите значение"}},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" ",alignContent:"right",minimumFractionDigits:2,maximumFractionDigits:2},subRow:{keyOfColumnInSubRow:"q1",editingCell:{component:"inputNumber"}}},{key:"q2",name:"Q2",contentFormat:"number",editingCell:{component:({row:e,onRowChange:m,column:b,cellHeight:g,cellWidth:p,initialValue:C})=>{const c=C&&!Number.isNaN(+C)?+C:null,[d,f]=o.useState(c??(e==null?void 0:e[b.key])),v=(T,D)=>{if(D){const I=D.floatValue??D.formattedValue;f(I),m({...e,[b.key]:I})}};return a.jsxDEV(Z,{cellHeight:g,cellWidth:p,autoFocusType:c===null?"autoFocusAndSelect":"autoFocus",value:d,onChange:v},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:507,columnNumber:17},void 0)}},subRow:{keyOfColumnInSubRow:"q2",editingCell:{component:"inputNumber"}}},{key:"q3",name:"Q3",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q3",editingCell:{component:"inputNumber",error:{value(e,m){return!0}}}}},{key:"q4",name:"Q4",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q4",editingCell:{component:"inputNumber"}}}],[]),l=o.useMemo(()=>({tribeOptions:X.map(e=>({text:e,value:e})),productOptions:Y.map(e=>({text:e,value:e}))}),[]),r=o.useRef(null),[n,i]=o.useState(!1);return a.jsxDEV(a.Fragment,{children:[a.jsxDEV(ee,{type:"button",onClick:()=>i(e=>!e),children:"Toggle Modal"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:571,columnNumber:9},void 0),a.jsxDEV(x,{opened:n,onClose:()=>i(!1),children:a.jsxDEV(x.Main,{children:[a.jsxDEV(x.Header,{title:"Режим редактирования внутри модальных окон",badge:{text:"tableConfig.editorOverlayPortal: 'inside'"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:576,columnNumber:13},void 0),a.jsxDEV(x.Content,{children:a.jsxDEV(N,{tableConfig:{editorOverlayPortal:"inside",containerStyle:{height:"60vh",width:"80vw"},rowSize:{showInControl:!0,default:"big"},editing:{defaultEnabled:!0,onEnableEditing(e){r.current=JSON.parse(JSON.stringify(t)),e()},onCancel(e){r.current&&u(r.current),e()},onSave(e){r.current=null,e()},onRowsChange:u,rowKeyGetter:e=>`${e.id}`,rowEditable:e=>e.block!==w[1]},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},resizableColumn:!0},columnConfig:s,rows:t,rowContextValue:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:581,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:580,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:575,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:574,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:570,columnNumber:7},void 0)}},re=[{id:"1",name:"Аренда офиса",amount:12e4,limit:15e4,status:"approved"},{id:"2",name:"",amount:48e3,limit:5e4,status:"new"},{id:"3",name:"Канцелярия",amount:9e3,limit:5e3,status:"new"},{id:"4",name:"Командировка",amount:7e4,limit:4e4,status:"rejected"},{id:"5",name:"",amount:99e3,limit:3e4,status:"new"},{id:"6",name:"Обучение",amount:15e3,limit:2e4,status:"approved"}],ie=`
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
`,S={...h({code:ie,type:"code"}),name:"Row Errors (индикатор и ошибка всей строки)",render:()=>{const[t,u]=o.useState(re),[s,l]=o.useState(!0),[r,n]=o.useState(()=>new Set),i=o.useMemo(()=>[{key:"name",name:"Назначение",editingCell:{component:"inputString",error:{value:e=>e.name.trim()==="",tooltip:()=>"Назначение платежа не заполнено"}}},{key:"amount",name:"Сумма",contentFormat:"number",editingCell:{component:"inputNumber",error:{value:e=>e.amount>e.limit,tooltip:e=>({text:`Сумма превышает лимит ${e.limit}`,placement:"right",maxWidth:240})}}},{key:"limit",name:"Лимит",contentFormat:"number",editingCell:{component:"inputNumber"}},{key:"status",name:"Статус",editingCell:{component:"select",options:{type:"constant",options:[{text:"Новая",value:"new"},{text:"Согласована",value:"approved"},{text:"Отклонена",value:"rejected"}]}}}],[]);return a.jsxDEV(a.Fragment,{children:[a.jsxDEV(ee,{size:"s",view:"secondary",style:{marginBottom:12},onClick:()=>l(e=>!e),children:s?"Скрыть столбец-индикатор":"Показать столбец-индикатор"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:813,columnNumber:9},void 0),a.jsxDEV(N,{tableConfig:{containerStyle:{height:"400px"},rowMarkers:{},rowSize:{showInControl:!0,default:"big"},selecting:{state:[r,n],rowKeyGetter:e=>e.id},editing:{defaultEnabled:!0,onRowsChange:u,rowKeyGetter:e=>e.id,rowErrors:{indicatorColumn:s,isErrorRow:e=>e.status==="rejected",tooltip:({isErrorRow:e,errorCellsCount:m})=>e?"Строка отклонена":`Ошибок в строке: ${m}`}}},columnConfig:i,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:823,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:812,columnNumber:7},void 0)}},F=["ООО","АО","ПАО","ИП"],A=["Альфа","Вектор","Гранит","Дельта","Север","Орбита","Прогресс","Сигма"],O=t=>({id:`cp-${t+1}`,name:`${F[t%F.length]} «${A[t%A.length]} ${String(t+1).padStart(4,"0")}»`}),V=Array.from({length:1e3},(t,u)=>O(u)),ae=50,se=({search:t,offset:u})=>new Promise(s=>{setTimeout(()=>{const l=t.trim().toLowerCase(),r=l?V.filter(i=>i.name.toLowerCase().includes(l)):V,n=r.slice(u,u+ae);s({items:n,hasMore:u+n.length<r.length})},500)}),le=()=>{const[t,u]=o.useState(""),[s,l]=o.useState([]),[r,n]=o.useState(!0),[i,e]=o.useState(!1),m=o.useRef(0),b=o.useCallback((p,C)=>{m.current+=1;const c=m.current;e(!0),se({search:p,offset:C}).then(d=>{c===m.current&&(l(f=>C===0?d.items:[...f,...d.items]),n(d.hasMore),e(!1))})},[]);return o.useEffect(()=>{const p=setTimeout(()=>b(t,0),300);return()=>clearTimeout(p)},[t,b]),{items:s,isLoading:i,setSearch:u,loadNext:()=>{!i&&r&&b(t,s.length)}}},ce=[3,17,128,402,777,999].map((t,u)=>({id:`${u+1}`,contract:`Договор № ${100+u}`,counterpartyId:O(t).id,counterpartyName:O(t).name,amount:(u+1)*125e3})),me=({info:{row:t,cellWidth:u,cellHeight:s,onRowChange:l,readOnly:r,theme:n},disableLeftOffset:i})=>{const{items:e,isLoading:m,setSearch:b,loadNext:g}=le(),p=[{value:t.counterpartyId,label:t.counterpartyName},...e.filter(c=>c.id!==t.counterpartyId).map(c=>({value:c.id,label:c.name}))],C=c=>{const d=c.currentTarget;d.scrollTop+d.clientHeight>=d.scrollHeight-50&&g()};return a.jsxDEV(te,{autoFocusType:"autoFocus",cellWidth:u,cellHeight:s,disableLeftOffset:i,paddingInline:n.cellHorizontalPadding,readOnly:r,items:p,defaultValue:t.counterpartyId,virtual:!0,filter:()=>!0,onChangeValue:b,onScroll:C,afterList:m&&e.length>0?a.jsxDEV("div",{style:{display:"flex",justifyContent:"center",padding:8},children:a.jsxDEV(oe,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:999,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:996,columnNumber:11},void 0):null,emptyStateDescription:m?"Загрузка…":void 0,onChange:c=>{var f;if(typeof c!="string")return;const d=(f=p.find(v=>v.value===c))==null?void 0:f.label;l({...t,counterpartyId:c,counterpartyName:d??t.counterpartyName},!0)}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:980,columnNumber:5},void 0)},k={...h({previewSource:"shown",type:"code"}),name:"Select с подгрузкой по скроллу (кастомный редактор)",render:()=>{const[t,u]=o.useState(ce),s=o.useMemo(()=>[{key:"contract",name:"Договор"},{key:"counterpartyName",name:"Контрагент",width:280,editingCell:{component:(l,r,n)=>a.jsxDEV(me,{info:l,disableLeftOffset:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:1038,columnNumber:15},void 0),showSelectIcon:!0}},{key:"amount",name:"Сумма",contentFormat:"number",editingCell:{component:"inputNumber"}}],[]);return a.jsxDEV(N,{tableConfig:{containerStyle:{height:"400px"},rowSize:{showInControl:!0,default:"big"},editing:{defaultEnabled:!0,onRowsChange:u,rowKeyGetter:l=>l.id}},columnConfig:s,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:1058,columnNumber:7},void 0)}};var M,B,q;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(q=(B=y.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var K,j,L;R.parameters={...R.parameters,docs:{...(K=R.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(L=(j=R.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var _,P,H;E.parameters={...E.parameters,docs:{...(_=E.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(H=(P=E.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var z,G,W;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(W=(G=S.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var Q,$,J;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...storySourceDoc({
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
}`,...(J=($=k.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};const de=["Editing","EditingButtonsControl","EditingInModal","EditingRowErrors","EditingSelectInfiniteScroll"],ye=Object.freeze(Object.defineProperty({__proto__:null,Editing:y,EditingButtonsControl:R,EditingInModal:E,EditingRowErrors:S,EditingSelectInfiniteScroll:k,__namedExportsOrder:de,default:ue},Symbol.toStringTag,{value:"Module"}));export{ye as T};
