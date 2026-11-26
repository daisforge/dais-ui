import{r as i,j as s}from"./react-DYHuXpTF.js";import{b as ie,B as w,P as $,T as K}from"./tableData-DKA5H0bF.js";import pe from"./DocStoryTemplate-BHnLMKCH.js";import{g as y}from"./getFuncAsString-CYIdLC6X.js";import{g as R}from"./getTypeAsString-C9FscX9L.js";import{s as S}from"./storySourceDoc-tVKyHcEN.js";import{M as D}from"./ModalDF-C-bZ-Kmu.js";import{S as Ce}from"./Switch-BJtGJ7E8.js";import{a as ae,T as E,b as ge}from"./TableCanvas-CEja0KL4.js";import{b as be}from"./swr-C650GVSJ.js";import{c as M,n as we}from"./@salutejs/sdds-finai-BHH5Fs72.js";import{u as fe}from"./utils-DbMTrPCQ.js";const ye={title:"Локальные компоненты/TableCanvas/Editing",tags:["!autodocs"],parameters:{docs:{page:pe}}},se=`
import { CellEditorNumberFormat, TableCanvas, type ColumnConfig } from '@daisforge/ui/components/TableCanvas';
import { useMemo, useRef, useState } from 'react';
import type * as React from 'react';

`,le=`
${R("packages/storybook/src/data/tableData.ts","TreeRow")}

const BLOCKS = ${JSON.stringify(w)} as const;
const TRIBES = ${JSON.stringify(K)} as const;
const PRODUCTS = ${JSON.stringify($)} as const;

${y("packages/storybook/src/data/tableData.ts","createSeededRandom")}

${y("packages/storybook/src/data/tableData.ts","createRowsTree")}
`,h={...S({preCode:se+le,previewSource:"shown",type:"code"}),render:()=>{const[t,u]=i.useState(()=>ie()),c=i.useMemo(()=>[{key:"block",name:"Блок",editingCell:{editable:n=>n.block===w[1],error:{value:n=>n.block===w[0]},component:"select",options:{type:"constant",options:w.map(n=>({text:n,value:n}))}},subRow:{keyOfColumnInSubRow:n=>{switch(n){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},editingCell:{component:"inputString",inputProps:{placeholder:"Введите значение"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1}},{key:"blockActivity",name:"Активность блока",editingCell:{component:"inputString"}},{key:"tribe",name:"Трайб",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"tribeOptions"},selectProps:{listMaxHeight:"210px"}}},{key:"product",name:"Продукт",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"productOptions"}}},{key:"q1",name:"Q1",editingCell:{component:"inputNumber",inputProps:{placeholder:"Введите значение"}},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" ",alignContent:"right",minimumFractionDigits:2,maximumFractionDigits:2},subRow:{keyOfColumnInSubRow:"q1",editingCell:{component:"inputNumber"}}},{key:"q2",name:"Q2",contentFormat:"number",editingCell:{component:({row:n,onRowChange:a,column:e,cellHeight:m,cellWidth:g,initialValue:p})=>{const l=p&&!Number.isNaN(+p)?+p:null,[C,d]=i.useState(l??(n==null?void 0:n[e.key])),b=(v,f)=>{if(f){const I=f.floatValue??f.formattedValue;d(I),a({...n,[e.key]:I})}};return s.jsx(ae,{cellHeight:m,cellWidth:g,autoFocusType:l===null?"autoFocusAndSelect":"autoFocus",value:C,onChange:b})}},subRow:{keyOfColumnInSubRow:"q2",editingCell:{component:"inputNumber"}}},{key:"q3",name:"Q3",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q3",editingCell:{component:"inputNumber",error:{value(n,a){return!0}}}}},{key:"q4",name:"Q4",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q4",editingCell:{component:"inputNumber"}}}],[]),o=i.useMemo(()=>({tribeOptions:K.map(n=>({text:n,value:n})),productOptions:$.map(n=>({text:n,value:n}))}),[]),r=i.useRef(null);return s.jsx(E,{tableConfig:{enableLowDprHairline:!0,containerStyle:{height:"700px"},rowSize:{showInControl:!0,default:"big"},editing:{onEnableEditing(n){r.current=JSON.parse(JSON.stringify(t)),n()},onCancel(n){r.current&&u(r.current),n()},onSave(n){r.current=null,n()},onRowsChange:u,rowKeyGetter:n=>`${n.id}`,rowEditable:n=>n.block!==w[1]},subRows:{getSubRows:n=>n==null?void 0:n.subRows,rowKeyGetter:n=>n.id},resizableColumn:!0},columnConfig:c,rows:t,rowContextValue:o})}},ce=`
${R("packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx","SimpleRow")}
`,k={...S({preCode:`
import { TableCanvas, type ColumnConfig } from '@daisforge/ui/components/TableCanvas';
import { useMemo, useRef, useState } from 'react';
${ce}
`,previewSource:"shown",type:"code"}),name:"Кнопки и подсветка — внутреннее состояние",render:()=>{const[t,u]=i.useState([{id:"1",name:"Альфа",value:100},{id:"2",name:"Бета",value:200},{id:"3",name:"Гамма",value:300}]),[c,o]=i.useState(!1),r=i.useRef(null),n=i.useMemo(()=>[{key:"name",name:"Название",editingCell:{component:"inputString"}},{key:"value",name:"Значение",contentFormat:"number",editingCell:{component:"inputNumber"}}],[]);return s.jsx(E,{tableConfig:{containerStyle:{height:"400px"},editing:{onRowsChange:u,rowKeyGetter:a=>a.id,buttons:{save:{disabled:c,isLoading:c},cancel:{disabled:c}},onEnableEditing(a){r.current=[...t],a()},onSave(a){o(!0),setTimeout(()=>{o(!1),r.current=null,a()},2e3)},onCancel(a){r.current&&u(r.current),a()}}},columnConfig:n,rows:t})}},x={...S({preCode:`
import { Button, Switch } from '@daisforge/ui';
import { TableCanvas, type ColumnConfig, type TableCanvasEditedCells } from '@daisforge/ui/components/TableCanvas';
import { useCallback, useMemo, useRef, useState } from 'react';
${ce}
`,previewSource:"shown",type:"code"}),name:"Подсветка — внешнее состояние",render:()=>{const[t,u]=i.useState([{id:"1",name:"Альфа",value:100},{id:"2",name:"Бета",value:200},{id:"3",name:"Гамма",value:300}]),[c,o]=i.useState(()=>new Map),[r,n]=i.useState(!1),a=i.useRef(null),[e,m]=i.useState(!0),g=i.useCallback(l=>{e&&o(l)},[e]),p=i.useMemo(()=>[{key:"name",name:"Название",editingCell:{component:"inputString"}},{key:"value",name:"Значение",editingCell:{component:"inputNumber"}}],[]);return s.jsxs(s.Fragment,{children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:8,marginBottom:12},children:[s.jsx(Ce,{size:"s",label:"Подсвечивать новые правки",disabled:!r,checked:e,onChange:l=>m(l.target.checked)}),s.jsx(M,{size:"xs",view:"secondary",disabled:!r,onClick:()=>o(new Map([["1",new Set(["name"])]])),children:"Подсветить только название первой строки"}),s.jsx(M,{size:"xs",view:"secondary",disabled:!r,onClick:()=>o(new Map),children:"Сбросить подсветку"})]}),s.jsx(E,{tableConfig:{containerStyle:{height:"250px"},editing:{enabled:[r,n],rowKeyGetter:l=>l.id,onRowsChange:u,editedCellsState:[c,g],onEnableEditing(l){a.current=t,l()},onSave(l){a.current=null,o(new Map),l()},onCancel(l){a.current&&u(a.current),a.current=null,o(new Map),l()}}},columnConfig:p,rows:t})]})}},T={...S({preCode:`
import { Button, ModalDF } from '@daisforge/ui';
${se}${le}`,previewSource:"shown",type:"code"}),render:()=>{const[t,u]=i.useState(()=>ie()),c=i.useMemo(()=>[{key:"block",name:"Блок",editingCell:{editable:e=>e.block===w[1],error:{value:e=>e.block===w[0]},component:"select",options:{type:"constant",options:w.map(e=>({text:e,value:e}))}},subRow:{keyOfColumnInSubRow:e=>{switch(e){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},editingCell:{component:"inputString",inputProps:{placeholder:"Введите значение"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1}},{key:"blockActivity",name:"Активность блока",editingCell:{component:"inputString"}},{key:"tribe",name:"Трайб",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"tribeOptions"},selectProps:{listMaxHeight:"210px"}}},{key:"product",name:"Продукт",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"productOptions"}}},{key:"q1",name:"Q1",editingCell:{component:"inputNumber",inputProps:{placeholder:"Введите значение"}},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" ",alignContent:"right",minimumFractionDigits:2,maximumFractionDigits:2},subRow:{keyOfColumnInSubRow:"q1",editingCell:{component:"inputNumber"}}},{key:"q2",name:"Q2",contentFormat:"number",editingCell:{component:({row:e,onRowChange:m,column:g,cellHeight:p,cellWidth:l,initialValue:C})=>{const d=C&&!Number.isNaN(+C)?+C:null,[b,v]=i.useState(d??(e==null?void 0:e[g.key])),f=(I,F)=>{if(F){const j=F.floatValue??F.formattedValue;v(j),m({...e,[g.key]:j})}};return s.jsx(ae,{cellHeight:p,cellWidth:l,autoFocusType:d===null?"autoFocusAndSelect":"autoFocus",value:b,onChange:f})}},subRow:{keyOfColumnInSubRow:"q2",editingCell:{component:"inputNumber"}}},{key:"q3",name:"Q3",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q3",editingCell:{component:"inputNumber",error:{value(e,m){return!0}}}}},{key:"q4",name:"Q4",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q4",editingCell:{component:"inputNumber"}}}],[]),o=i.useMemo(()=>({tribeOptions:K.map(e=>({text:e,value:e})),productOptions:$.map(e=>({text:e,value:e}))}),[]),r=i.useRef(null),[n,a]=i.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(M,{type:"button",onClick:()=>a(e=>!e),children:"Toggle Modal"}),s.jsx(D,{opened:n,onClose:()=>a(!1),children:s.jsxs(D.Main,{children:[s.jsx(D.Header,{title:"Режим редактирования внутри модальных окон",badge:{text:"tableConfig.editorOverlayPortal: 'inside'"}}),s.jsx(D.Content,{children:s.jsx(E,{tableConfig:{editorOverlayPortal:"inside",containerStyle:{height:"60vh",width:"80vw"},rowSize:{showInControl:!0,default:"big"},editing:{defaultEnabled:!0,onEnableEditing(e){r.current=JSON.parse(JSON.stringify(t)),e()},onCancel(e){r.current&&u(r.current),e()},onSave(e){r.current=null,e()},onRowsChange:u,rowKeyGetter:e=>`${e.id}`,rowEditable:e=>e.block!==w[1]},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},resizableColumn:!0},columnConfig:c,rows:t,rowContextValue:o})})]})})]})}},de=[{id:"1",name:"Аренда офиса",amount:12e4,limit:15e4,status:"approved"},{id:"2",name:"",amount:48e3,limit:5e4,status:"new"},{id:"3",name:"Канцелярия",amount:9e3,limit:5e3,status:"new"},{id:"4",name:"Командировка",amount:7e4,limit:4e4,status:"rejected"},{id:"5",name:"",amount:99e3,limit:3e4,status:"new"},{id:"6",name:"Обучение",amount:15e3,limit:2e4,status:"approved"}],Re=`
import { Button } from '@daisforge/ui';
import { TableCanvas, type ColumnConfig } from '@daisforge/ui/components/TableCanvas';
import { useMemo, useState } from 'react';

${R("packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx","InvoiceRow")}

const INVOICE_ROWS: InvoiceRow[] = ${JSON.stringify(de)};
`,N={...S({preCode:Re,previewSource:"shown",type:"code"}),name:"Row Errors (индикатор и ошибка всей строки)",render:()=>{const[t,u]=i.useState(de),[c,o]=i.useState(!0),[r,n]=i.useState(()=>new Set),a=i.useMemo(()=>[{key:"name",name:"Назначение",editingCell:{component:"inputString",error:{value:e=>e.name.trim()==="",tooltip:()=>"Назначение платежа не заполнено"}}},{key:"amount",name:"Сумма",contentFormat:"number",editingCell:{component:"inputNumber",error:{value:e=>e.amount>e.limit,tooltip:e=>({text:`Сумма превышает лимит ${e.limit}`,placement:"right",maxWidth:240})}}},{key:"limit",name:"Лимит",contentFormat:"number",editingCell:{component:"inputNumber"}},{key:"status",name:"Статус",editingCell:{component:"select",options:{type:"constant",options:[{text:"Новая",value:"new"},{text:"Согласована",value:"approved"},{text:"Отклонена",value:"rejected"}]}}}],[]);return s.jsxs(s.Fragment,{children:[s.jsx(M,{size:"s",view:"secondary",style:{marginBottom:12},onClick:()=>o(e=>!e),children:c?"Скрыть столбец-индикатор":"Показать столбец-индикатор"}),s.jsx(E,{tableConfig:{containerStyle:{height:"400px"},rowMarkers:{},rowSize:{showInControl:!0,default:"big"},selecting:{state:[r,n],rowKeyGetter:e=>e.id},editing:{defaultEnabled:!0,onRowsChange:u,rowKeyGetter:e=>e.id,rowErrors:{indicatorColumn:c,isErrorRow:e=>e.status==="rejected",tooltip:({isErrorRow:e,errorCellsCount:m})=>e?"Строка отклонена":`Ошибок в строке: ${m}`}}},columnConfig:a,rows:t})]})}},A=["ООО","АО","ПАО","ИП"],B=["Альфа","Вектор","Гранит","Дельта","Север","Орбита","Прогресс","Сигма"];function V(t){return{id:`cp-${t+1}`,name:`${A[t%A.length]} «${B[t%B.length]} ${String(t+1).padStart(4,"0")}»`}}const P=Array.from({length:1e3},(t,u)=>V(u)),_=50;function Se({search:t,offset:u}){return new Promise(c=>{setTimeout(()=>{const o=t.trim().toLowerCase(),r=o?P.filter(a=>a.name.toLowerCase().includes(o)):P,n=r.slice(u,u+_);c({items:n,hasMore:u+n.length<r.length})},500)})}function Ee(){var p;const[t,u]=i.useState(""),c=fe(t,300),{data:o,size:r,setSize:n,isValidating:a}=be((l,C)=>C&&!C.hasMore?null:["story-counterparties",c,l],([,l,C])=>Se({search:l,offset:C*_}),{keepPreviousData:!0,revalidateFirstPage:!1,revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1}),e=(o==null?void 0:o.flatMap(l=>l.items))??[],m=((p=o==null?void 0:o[o.length-1])==null?void 0:p.hasMore)??!0;return{items:e,isLoading:a,setSearch:u,loadNext:()=>{!a&&m&&n(r+1)}}}const me=[3,17,128,402,777,999].map((t,u)=>({id:`${u+1}`,contract:`Договор № ${100+u}`,counterpartyId:V(t).id,counterpartyName:V(t).name,amount:(u+1)*125e3}));function ve({info:{row:t,cellWidth:u,cellHeight:c,onRowChange:o,readOnly:r,theme:n},disableLeftOffset:a}){const{items:e,isLoading:m,setSearch:g,loadNext:p}=Ee(),l=[{value:t.counterpartyId,label:t.counterpartyName},...e.filter(d=>d.id!==t.counterpartyId).map(d=>({value:d.id,label:d.name}))],C=d=>{const b=d.currentTarget;b.scrollTop+b.clientHeight>=b.scrollHeight-50&&p()};return s.jsx(ge,{autoFocusType:"autoFocus",cellWidth:u,cellHeight:c,disableLeftOffset:a,paddingInline:n.cellHorizontalPadding,readOnly:r,items:l,defaultValue:t.counterpartyId,virtual:!0,filter:()=>!0,onChangeValue:g,onScroll:C,afterList:m?s.jsx("div",{style:{display:"flex",justifyContent:"center",padding:8},children:s.jsx(we,{size:"s"})}):null,onChange:d=>{var v;if(typeof d!="string")return;const b=(v=l.find(f=>f.value===d))==null?void 0:v.label;o({...t,counterpartyId:d,counterpartyName:b??t.counterpartyName},!0)}})}const he=`
import { Spinner } from '@daisforge/ui/components/Spinner';
import { CellEditorCombobox, TableCanvas, type ColumnConfig, type EditingCellInfo } from '@daisforge/ui/components/TableCanvas';
import { useDebouncedValue } from '@daisforge/ui/utils';
import { useMemo, useState, type UIEvent } from 'react';
import useSWRInfinite from 'swr/infinite';

${R("packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx","Counterparty")}

${R("packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx","CounterpartyPage")}

${R("packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx","ContractRow")}

const COUNTERPARTY_FORMS = ${JSON.stringify(A)};
const COUNTERPARTY_WORDS = ${JSON.stringify(B)};

${y("packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx","makeCounterparty")}

const COUNTERPARTIES: Counterparty[] = Array.from({ length: ${P.length} }, (_, i) => makeCounterparty(i));
const COUNTERPARTIES_PAGE_SIZE = ${_};
const CONTRACT_ROWS: ContractRow[] = ${JSON.stringify(me)};

${y("packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx","fetchCounterparties")}

${y("packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx","useCounterpartyOptions")}

${y("packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx","CounterpartyCellEditor")}
`,O={...S({preCode:he,previewSource:"shown",type:"code"}),name:"Select с подгрузкой по скроллу (кастомный редактор)",render:()=>{const[t,u]=i.useState(me),c=i.useMemo(()=>[{key:"contract",name:"Договор"},{key:"counterpartyName",name:"Контрагент",width:280,editingCell:{component:(o,r,n)=>s.jsx(ve,{info:o,disableLeftOffset:n}),showSelectIcon:!0}},{key:"amount",name:"Сумма",contentFormat:"number",editingCell:{component:"inputNumber"}}],[]);return s.jsx(E,{tableConfig:{containerStyle:{height:"400px"},rowSize:{showInControl:!0,default:"big"},editing:{defaultEnabled:!0,onRowsChange:u,rowKeyGetter:o=>o.id}},columnConfig:c,rows:t})}};var q,H,L;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode: treeEditingPreCode + treeEditingDataPreCode,
    previewSource: 'shown',
    type: 'code'
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
}`,...(L=(H=h.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var z,W,G;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode: \`
import { TableCanvas, type ColumnConfig } from '@daisforge/ui/components/TableCanvas';
import { useMemo, useRef, useState } from 'react';
\${simpleRowPreCode}
\`,
    previewSource: 'shown',
    type: 'code'
  }),
  name: 'Кнопки и подсветка — внутреннее состояние',
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
}`,...(G=(W=k.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var Q,J,U;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode: \`
import { Button, Switch } from '@daisforge/ui';
import { TableCanvas, type ColumnConfig, type TableCanvasEditedCells } from '@daisforge/ui/components/TableCanvas';
import { useCallback, useMemo, useRef, useState } from 'react';
\${simpleRowPreCode}
\`,
    previewSource: 'shown',
    type: 'code'
  }),
  name: 'Подсветка — внешнее состояние',
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
    const [editedCells, setEditedCells] = useState<TableCanvasEditedCells<string>>(() => new Map());
    const [editModeEnabled, setEditModeEnabled] = useState(false);
    const savedRowsRef = useRef<SimpleRow[] | null>(null);
    const [highlightNewEdits, setHighlightNewEdits] = useState(true);
    const onEditedCellsChange = useCallback<typeof setEditedCells>(update => {
      if (highlightNewEdits) setEditedCells(update);
    }, [highlightNewEdits]);
    const columnConfig = useMemo((): ColumnConfig<SimpleRow>[] => [{
      key: 'name',
      name: 'Название',
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'value',
      name: 'Значение',
      editingCell: {
        component: 'inputNumber'
      }
    }], []);
    return <>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 12
      }}>
          <Switch size="s" label="Подсвечивать новые правки" disabled={!editModeEnabled} checked={highlightNewEdits} onChange={event => setHighlightNewEdits(event.target.checked)} />
          <Button size="xs" view="secondary" disabled={!editModeEnabled} onClick={() => setEditedCells(new Map([['1', new Set(['name'])]]))}>
            Подсветить только название первой строки
          </Button>
          <Button size="xs" view="secondary" disabled={!editModeEnabled} onClick={() => setEditedCells(new Map())}>
            Сбросить подсветку
          </Button>
        </div>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: '250px'
        },
        editing: {
          enabled: [editModeEnabled, setEditModeEnabled],
          rowKeyGetter: row => row.id,
          onRowsChange: setRows,
          editedCellsState: [editedCells, onEditedCellsChange],
          onEnableEditing(enableEditorMode) {
            savedRowsRef.current = rows;
            enableEditorMode();
          },
          onSave(disableEditorMode) {
            savedRowsRef.current = null;
            setEditedCells(new Map());
            disableEditorMode();
          },
          onCancel(disableEditorMode) {
            if (savedRowsRef.current) setRows(savedRowsRef.current);
            savedRowsRef.current = null;
            setEditedCells(new Map());
            disableEditorMode();
          }
        }
      }} columnConfig={columnConfig} rows={rows} />
      </>;
  }
}`,...(U=(J=x.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var Y,Z,X;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode: \`
import { Button, ModalDF } from '@daisforge/ui';
\${treeEditingPreCode}\${treeEditingDataPreCode}\`,
    previewSource: 'shown',
    type: 'code'
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
}`,...(X=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:X.source}}};var ee,ne,te;N.parameters={...N.parameters,docs:{...(ee=N.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode: rowErrorsPreCode,
    previewSource: 'shown',
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
}`,...(te=(ne=N.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,ue,re;O.parameters={...O.parameters,docs:{...(oe=O.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(ue=O.parameters)==null?void 0:ue.docs)==null?void 0:re.source}}};const ke=["Editing","EditingButtonsControl","EditingControlledHighlights","EditingInModal","EditingRowErrors","EditingSelectInfiniteScroll"],$e=Object.freeze(Object.defineProperty({__proto__:null,Editing:h,EditingButtonsControl:k,EditingControlledHighlights:x,EditingInModal:T,EditingRowErrors:N,EditingSelectInfiniteScroll:O,__namedExportsOrder:ke,default:ye},Symbol.toStringTag,{value:"Module"}));export{$e as T};
