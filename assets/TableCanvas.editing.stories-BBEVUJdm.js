import{r as a,j as l}from"./react-CAOzMBF_.js";import{a as Y,B as w,P as X,T as Z}from"./tableData-DVJFoYoT.js";import on from"./DocStoryTemplate-DUx_jmLE.js";import{g as A}from"./getFuncAsString-BlcJv7wu.js";import{s as k}from"./storySourceDoc-tVKyHcEN.js";import{M as O}from"./ModalDF-DGdz2a6t.js";import{j as nn,T as x,k as un}from"./TableCanvas-BiviJwJT.js";import{b as rn}from"./swr-N3-bNM1D.js";import{t as en,S as an}from"./@salutejs/sdds-finai-CrMFu5No.js";import{u as ln}from"./utils-D7J-sht1.js";const sn={title:"Локальные компоненты/TableCanvas/Editing",tags:["!autodocs"],parameters:{docs:{page:on}}},R={...k({previewSource:"shown"}),render:()=>{const[t,o]=a.useState(()=>Y()),s=a.useMemo(()=>[{key:"block",name:"Блок",editingCell:{editable:e=>e.block===w[1],error:{value:e=>e.block===w[0]},component:"select",options:{type:"constant",options:w.map(e=>({text:e,value:e}))}},subRow:{keyOfColumnInSubRow:e=>{switch(e){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},editingCell:{component:"inputString",inputProps:{placeholder:"Введите значение"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1}},{key:"blockActivity",name:"Активность блока",editingCell:{component:"inputString"}},{key:"tribe",name:"Трайб",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"tribeOptions"},selectProps:{listMaxHeight:"210px"}}},{key:"product",name:"Продукт",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"productOptions"}}},{key:"q1",name:"Q1",editingCell:{component:"inputNumber",inputProps:{placeholder:"Введите значение"}},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" ",alignContent:"right",minimumFractionDigits:2,maximumFractionDigits:2},subRow:{keyOfColumnInSubRow:"q1",editingCell:{component:"inputNumber"}}},{key:"q2",name:"Q2",contentFormat:"number",editingCell:{component:({row:e,onRowChange:i,column:n,cellHeight:p,cellWidth:b,initialValue:C})=>{const m=C&&!Number.isNaN(+C)?+C:null,[d,c]=a.useState(m??(e==null?void 0:e[n.key])),g=(y,f)=>{if(f){const I=f.floatValue??f.formattedValue;c(I),i({...e,[n.key]:I})}};return l.jsx(nn,{cellHeight:p,cellWidth:b,autoFocusType:m===null?"autoFocusAndSelect":"autoFocus",value:d,onChange:g})}},subRow:{keyOfColumnInSubRow:"q2",editingCell:{component:"inputNumber"}}},{key:"q3",name:"Q3",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q3",editingCell:{component:"inputNumber",error:{value(e,i){return!0}}}}},{key:"q4",name:"Q4",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q4",editingCell:{component:"inputNumber"}}}],[]),u=a.useMemo(()=>({tribeOptions:Z.map(e=>({text:e,value:e})),productOptions:X.map(e=>({text:e,value:e}))}),[]),r=a.useRef(null);return l.jsx(x,{tableConfig:{enableLowDprHairline:!0,containerStyle:{height:"700px"},rowSize:{showInControl:!0,default:"big"},editing:{onEnableEditing(e){r.current=JSON.parse(JSON.stringify(t)),e()},onCancel(e){r.current&&o(r.current),e()},onSave(e){r.current=null,e()},onRowsChange:o,rowKeyGetter:e=>`${e.id}`,rowEditable:e=>e.block!==w[1]},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},resizableColumn:!0},columnConfig:s,rows:t,rowContextValue:u})}},S={...k({previewSource:"shown"}),name:"Buttons Control (disabled, isLoading)",render:()=>{const[t,o]=a.useState([{id:"1",name:"Альфа",value:100},{id:"2",name:"Бета",value:200},{id:"3",name:"Гамма",value:300}]),[s,u]=a.useState(!1),r=a.useRef(null),e=a.useMemo(()=>[{key:"name",name:"Название",editingCell:{component:"inputString"}},{key:"value",name:"Значение",contentFormat:"number",editingCell:{component:"inputNumber"}}],[]);return l.jsx(x,{tableConfig:{containerStyle:{height:"400px"},editing:{onRowsChange:o,rowKeyGetter:i=>i.id,buttons:{save:{disabled:s,isLoading:s},cancel:{disabled:s}},onEnableEditing(i){r.current=[...t],i()},onSave(i){u(!0),setTimeout(()=>{u(!1),r.current=null,i()},2e3)},onCancel(i){r.current&&o(r.current),i()}}},columnConfig:e,rows:t})}},v={...k({previewSource:"shown"}),render:()=>{const[t,o]=a.useState(()=>Y()),s=a.useMemo(()=>[{key:"block",name:"Блок",editingCell:{editable:n=>n.block===w[1],error:{value:n=>n.block===w[0]},component:"select",options:{type:"constant",options:w.map(n=>({text:n,value:n}))}},subRow:{keyOfColumnInSubRow:n=>{switch(n){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},editingCell:{component:"inputString",inputProps:{placeholder:"Введите значение"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1}},{key:"blockActivity",name:"Активность блока",editingCell:{component:"inputString"}},{key:"tribe",name:"Трайб",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"tribeOptions"},selectProps:{listMaxHeight:"210px"}}},{key:"product",name:"Продукт",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"productOptions"}}},{key:"q1",name:"Q1",editingCell:{component:"inputNumber",inputProps:{placeholder:"Введите значение"}},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" ",alignContent:"right",minimumFractionDigits:2,maximumFractionDigits:2},subRow:{keyOfColumnInSubRow:"q1",editingCell:{component:"inputNumber"}}},{key:"q2",name:"Q2",contentFormat:"number",editingCell:{component:({row:n,onRowChange:p,column:b,cellHeight:C,cellWidth:m,initialValue:d})=>{const c=d&&!Number.isNaN(+d)?+d:null,[g,y]=a.useState(c??(n==null?void 0:n[b.key])),f=(I,N)=>{if(N){const D=N.floatValue??N.formattedValue;y(D),p({...n,[b.key]:D})}};return l.jsx(nn,{cellHeight:C,cellWidth:m,autoFocusType:c===null?"autoFocusAndSelect":"autoFocus",value:g,onChange:f})}},subRow:{keyOfColumnInSubRow:"q2",editingCell:{component:"inputNumber"}}},{key:"q3",name:"Q3",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q3",editingCell:{component:"inputNumber",error:{value(n,p){return!0}}}}},{key:"q4",name:"Q4",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q4",editingCell:{component:"inputNumber"}}}],[]),u=a.useMemo(()=>({tribeOptions:Z.map(n=>({text:n,value:n})),productOptions:X.map(n=>({text:n,value:n}))}),[]),r=a.useRef(null),[e,i]=a.useState(!1);return l.jsxs(l.Fragment,{children:[l.jsx(en,{type:"button",onClick:()=>i(n=>!n),children:"Toggle Modal"}),l.jsx(O,{opened:e,onClose:()=>i(!1),children:l.jsxs(O.Main,{children:[l.jsx(O.Header,{title:"Режим редактирования внутри модальных окон",badge:{text:"tableConfig.editorOverlayPortal: 'inside'"}}),l.jsx(O.Content,{children:l.jsx(x,{tableConfig:{editorOverlayPortal:"inside",containerStyle:{height:"60vh",width:"80vw"},rowSize:{showInControl:!0,default:"big"},editing:{defaultEnabled:!0,onEnableEditing(n){r.current=JSON.parse(JSON.stringify(t)),n()},onCancel(n){r.current&&o(r.current),n()},onSave(n){r.current=null,n()},onRowsChange:o,rowKeyGetter:n=>`${n.id}`,rowEditable:n=>n.block!==w[1]},subRows:{getSubRows:n=>n==null?void 0:n.subRows,rowKeyGetter:n=>n.id},resizableColumn:!0},columnConfig:s,rows:t,rowContextValue:u})})]})})]})}},cn=[{id:"1",name:"Аренда офиса",amount:12e4,limit:15e4,status:"approved"},{id:"2",name:"",amount:48e3,limit:5e4,status:"new"},{id:"3",name:"Канцелярия",amount:9e3,limit:5e3,status:"new"},{id:"4",name:"Командировка",amount:7e4,limit:4e4,status:"rejected"},{id:"5",name:"",amount:99e3,limit:3e4,status:"new"},{id:"6",name:"Обучение",amount:15e3,limit:2e4,status:"approved"}],mn=`
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
`,E={...k({code:mn,type:"code"}),name:"Row Errors (индикатор и ошибка всей строки)",render:()=>{const[t,o]=a.useState(cn),[s,u]=a.useState(!0),[r,e]=a.useState(()=>new Set),i=a.useMemo(()=>[{key:"name",name:"Назначение",editingCell:{component:"inputString",error:{value:n=>n.name.trim()==="",tooltip:()=>"Назначение платежа не заполнено"}}},{key:"amount",name:"Сумма",contentFormat:"number",editingCell:{component:"inputNumber",error:{value:n=>n.amount>n.limit,tooltip:n=>({text:`Сумма превышает лимит ${n.limit}`,placement:"right",maxWidth:240})}}},{key:"limit",name:"Лимит",contentFormat:"number",editingCell:{component:"inputNumber"}},{key:"status",name:"Статус",editingCell:{component:"select",options:{type:"constant",options:[{text:"Новая",value:"new"},{text:"Согласована",value:"approved"},{text:"Отклонена",value:"rejected"}]}}}],[]);return l.jsxs(l.Fragment,{children:[l.jsx(en,{size:"s",view:"secondary",style:{marginBottom:12},onClick:()=>u(n=>!n),children:s?"Скрыть столбец-индикатор":"Показать столбец-индикатор"}),l.jsx(x,{tableConfig:{containerStyle:{height:"400px"},rowMarkers:{},rowSize:{showInControl:!0,default:"big"},selecting:{state:[r,e],rowKeyGetter:n=>n.id},editing:{defaultEnabled:!0,onRowsChange:o,rowKeyGetter:n=>n.id,rowErrors:{indicatorColumn:s,isErrorRow:n=>n.status==="rejected",tooltip:({isErrorRow:n,errorCellsCount:p})=>n?"Строка отклонена":`Ошибок в строке: ${p}`}}},columnConfig:i,rows:t})]})}},M=["ООО","АО","ПАО","ИП"],T=["Альфа","Вектор","Гранит","Дельта","Север","Орбита","Прогресс","Сигма"],F=t=>({id:`cp-${t+1}`,name:`${M[t%M.length]} «${T[t%T.length]} ${String(t+1).padStart(4,"0")}»`}),V=Array.from({length:1e3},(t,o)=>F(o)),tn=50,dn=({search:t,offset:o})=>new Promise(s=>{setTimeout(()=>{const u=t.trim().toLowerCase(),r=u?V.filter(i=>i.name.toLowerCase().includes(u)):V,e=r.slice(o,o+tn);s({items:e,hasMore:o+e.length<r.length})},500)});function pn(){var C;const[t,o]=a.useState(""),s=ln(t,300),{data:u,size:r,setSize:e,isValidating:i}=rn((m,d)=>d&&!d.hasMore?null:["story-counterparties",s,m],([,m,d])=>dn({search:m,offset:d*tn}),{keepPreviousData:!0,revalidateFirstPage:!1,revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1}),n=(u==null?void 0:u.flatMap(m=>m.items))??[],p=((C=u==null?void 0:u[u.length-1])==null?void 0:C.hasMore)??!0;return{items:n,isLoading:i,setSearch:o,loadNext:()=>{!i&&p&&e(r+1)}}}const Cn=[3,17,128,402,777,999].map((t,o)=>({id:`${o+1}`,contract:`Договор № ${100+o}`,counterpartyId:F(t).id,counterpartyName:F(t).name,amount:(o+1)*125e3}));function gn({info:{row:t,cellWidth:o,cellHeight:s,onRowChange:u,readOnly:r,theme:e},disableLeftOffset:i}){const{items:n,isLoading:p,setSearch:b,loadNext:C}=pn(),m=[{value:t.counterpartyId,label:t.counterpartyName},...n.filter(c=>c.id!==t.counterpartyId).map(c=>({value:c.id,label:c.name}))],d=c=>{const g=c.currentTarget;g.scrollTop+g.clientHeight>=g.scrollHeight-50&&C()};return l.jsx(un,{autoFocusType:"autoFocus",cellWidth:o,cellHeight:s,disableLeftOffset:i,paddingInline:e.cellHorizontalPadding,readOnly:r,items:m,defaultValue:t.counterpartyId,virtual:!0,filter:()=>!0,onChangeValue:b,onScroll:d,afterList:p?l.jsx("div",{style:{display:"flex",justifyContent:"center",padding:8},children:l.jsx(an,{size:"s"})}):null,onChange:c=>{var y;if(typeof c!="string")return;const g=(y=m.find(f=>f.value===c))==null?void 0:y.label;u({...t,counterpartyId:c,counterpartyName:g??t.counterpartyName},!0)}})}const wn=`
import { Spinner } from '@daisforge/ui/components/Spinner';
import { CellEditorCombobox, ColumnConfig, EditingCellInfo, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { useDebouncedValue } from '@daisforge/ui/utils';
import { UIEvent, useMemo, useState } from 'react';
import useSWRInfinite from 'swr/infinite';

${A("packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx","useCounterpartyOptions")}

${A("packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx","CounterpartyCellEditor")}

`,h={...k({preCode:wn,previewSource:"shown",type:"code"}),name:"Select с подгрузкой по скроллу (кастомный редактор)",render:()=>{const[t,o]=a.useState(Cn),s=a.useMemo(()=>[{key:"contract",name:"Договор"},{key:"counterpartyName",name:"Контрагент",width:280,editingCell:{component:(u,r,e)=>l.jsx(gn,{info:u,disableLeftOffset:e}),showSelectIcon:!0}},{key:"amount",name:"Сумма",contentFormat:"number",editingCell:{component:"inputNumber"}}],[]);return l.jsx(x,{tableConfig:{containerStyle:{height:"400px"},rowSize:{showInControl:!0,default:"big"},editing:{defaultEnabled:!0,onRowsChange:o,rowKeyGetter:u=>u.id}},columnConfig:s,rows:t})}};var B,K,q;R.parameters={...R.parameters,docs:{...(B=R.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(q=(K=R.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var j,P,L;S.parameters={...S.parameters,docs:{...(j=S.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(L=(P=S.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var _,H,z;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(z=(H=v.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var W,G,$;E.parameters={...E.parameters,docs:{...(W=E.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...($=(G=E.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var Q,J,U;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(U=(J=h.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};const bn=["Editing","EditingButtonsControl","EditingInModal","EditingRowErrors","EditingSelectInfiniteScroll"],In=Object.freeze(Object.defineProperty({__proto__:null,Editing:R,EditingButtonsControl:S,EditingInModal:v,EditingRowErrors:E,EditingSelectInfiniteScroll:h,__namedExportsOrder:bn,default:sn},Symbol.toStringTag,{value:"Module"}));export{In as T};
