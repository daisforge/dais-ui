import{r as i,b as r}from"./react-UEdzNlUe.js";import{b as ie,B as w,P as $,T as K}from"./tableData-DKA5H0bF.js";import pe from"./DocStoryTemplate-CTafGBjd.js";import{g as v}from"./getFuncAsString-CYIdLC6X.js";import{g as E}from"./getTypeAsString-BcdFuT89.js";import{s as y}from"./storySourceDoc-tVKyHcEN.js";import{M as O}from"./ModalDF-CHmj3h2G.js";import{S as Ce}from"./Switch-Cpse2u-_.js";import{a as se,T as R,b as be}from"./TableCanvas-DlcOZV9H.js";import{b as ge}from"./swr-B-e4eQ0V.js";import{t as M,J as we}from"./@salutejs/sdds-finai-B8Iabp4m.js";import{u as fe}from"./utils-7MphdwvM.js";const ve={title:"Локальные компоненты/TableCanvas/Editing",tags:["!autodocs"],parameters:{docs:{page:pe}}},re=`
import { CellEditorNumberFormat, TableCanvas, type ColumnConfig } from '@daisforge/ui/components/TableCanvas';
import { useMemo, useRef, useState } from 'react';
import type * as React from 'react';

`,le=`
${E("packages/storybook/src/data/tableData.ts","TreeRow")}

const BLOCKS = ${JSON.stringify(w)} as const;
const TRIBES = ${JSON.stringify(K)} as const;
const PRODUCTS = ${JSON.stringify($)} as const;

${v("packages/storybook/src/data/tableData.ts","createSeededRandom")}

${v("packages/storybook/src/data/tableData.ts","createRowsTree")}
`,h={...y({preCode:re+le,previewSource:"shown",type:"code"}),render:()=>{const[t,u]=i.useState(()=>ie()),d=i.useMemo(()=>[{key:"block",name:"Блок",editingCell:{editable:n=>n.block===w[1],error:{value:n=>n.block===w[0]},component:"select",options:{type:"constant",options:w.map(n=>({text:n,value:n}))}},subRow:{keyOfColumnInSubRow:n=>{switch(n){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},editingCell:{component:"inputString",inputProps:{placeholder:"Введите значение"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1}},{key:"blockActivity",name:"Активность блока",editingCell:{component:"inputString"}},{key:"tribe",name:"Трайб",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"tribeOptions"},selectProps:{listMaxHeight:"210px"}}},{key:"product",name:"Продукт",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"productOptions"}}},{key:"q1",name:"Q1",editingCell:{component:"inputNumber",inputProps:{placeholder:"Введите значение"}},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" ",alignContent:"right",minimumFractionDigits:2,maximumFractionDigits:2},subRow:{keyOfColumnInSubRow:"q1",editingCell:{component:"inputNumber"}}},{key:"q2",name:"Q2",contentFormat:"number",editingCell:{component:({row:n,onRowChange:s,column:e,cellHeight:m,cellWidth:b,initialValue:p})=>{const l=p&&!Number.isNaN(+p)?+p:null,[C,c]=i.useState(l??(n==null?void 0:n[e.key])),g=(S,f)=>{if(f){const I=f.floatValue??f.formattedValue;c(I),s({...n,[e.key]:I})}};return r.jsxDEV(se,{cellHeight:m,cellWidth:b,autoFocusType:l===null?"autoFocusAndSelect":"autoFocus",value:C,onChange:g},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:209,columnNumber:17},void 0)}},subRow:{keyOfColumnInSubRow:"q2",editingCell:{component:"inputNumber"}}},{key:"q3",name:"Q3",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q3",editingCell:{component:"inputNumber",error:{value(n,s){return!0}}}}},{key:"q4",name:"Q4",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q4",editingCell:{component:"inputNumber"}}}],[]),o=i.useMemo(()=>({tribeOptions:K.map(n=>({text:n,value:n})),productOptions:$.map(n=>({text:n,value:n}))}),[]),a=i.useRef(null);return r.jsxDEV(R,{tableConfig:{enableLowDprHairline:!0,containerStyle:{height:"700px"},rowSize:{showInControl:!0,default:"big"},editing:{onEnableEditing(n){a.current=JSON.parse(JSON.stringify(t)),n()},onCancel(n){a.current&&u(a.current),n()},onSave(n){a.current=null,n()},onRowsChange:u,rowKeyGetter:n=>`${n.id}`,rowEditable:n=>n.block!==w[1]},subRows:{getSubRows:n=>n==null?void 0:n.subRows,rowKeyGetter:n=>n.id},resizableColumn:!0},columnConfig:d,rows:t,rowContextValue:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:272,columnNumber:7},void 0)}},de=`
${E("packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx","SimpleRow")}
`,k={...y({preCode:`
import { TableCanvas, type ColumnConfig } from '@daisforge/ui/components/TableCanvas';
import { useMemo, useRef, useState } from 'react';
${de}
`,previewSource:"shown",type:"code"}),name:"Кнопки и подсветка — внутреннее состояние",render:()=>{const[t,u]=i.useState([{id:"1",name:"Альфа",value:100},{id:"2",name:"Бета",value:200},{id:"3",name:"Гамма",value:300}]),[d,o]=i.useState(!1),a=i.useRef(null),n=i.useMemo(()=>[{key:"name",name:"Название",editingCell:{component:"inputString"}},{key:"value",name:"Значение",contentFormat:"number",editingCell:{component:"inputNumber"}}],[]);return r.jsxDEV(R,{tableConfig:{containerStyle:{height:"400px"},editing:{onRowsChange:u,rowKeyGetter:s=>s.id,buttons:{save:{disabled:d,isLoading:d},cancel:{disabled:d}},onEnableEditing(s){a.current=[...t],s()},onSave(s){o(!0),setTimeout(()=>{o(!1),a.current=null,s()},2e3)},onCancel(s){a.current&&u(a.current),s()}}},columnConfig:n,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:359,columnNumber:7},void 0)}},T={...y({preCode:`
import { Button, Switch } from '@daisforge/ui';
import { TableCanvas, type ColumnConfig, type TableCanvasEditedCells } from '@daisforge/ui/components/TableCanvas';
import { useCallback, useMemo, useRef, useState } from 'react';
${de}
`,previewSource:"shown",type:"code"}),name:"Подсветка — внешнее состояние",render:()=>{const[t,u]=i.useState([{id:"1",name:"Альфа",value:100},{id:"2",name:"Бета",value:200},{id:"3",name:"Гамма",value:300}]),[d,o]=i.useState(()=>new Map),[a,n]=i.useState(!1),s=i.useRef(null),[e,m]=i.useState(!0),b=i.useCallback(l=>{e&&o(l)},[e]),p=i.useMemo(()=>[{key:"name",name:"Название",editingCell:{component:"inputString"}},{key:"value",name:"Значение",editingCell:{component:"inputNumber"}}],[]);return r.jsxDEV(r.Fragment,{children:[r.jsxDEV("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:8,marginBottom:12},children:[r.jsxDEV(Ce,{size:"s",label:"Подсвечивать новые правки",disabled:!a,checked:e,onChange:l=>m(l.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:458,columnNumber:11},void 0),r.jsxDEV(M,{size:"xs",view:"secondary",disabled:!a,onClick:()=>o(new Map([["1",new Set(["name"])]])),children:"Подсветить только название первой строки"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:465,columnNumber:11},void 0),r.jsxDEV(M,{size:"xs",view:"secondary",disabled:!a,onClick:()=>o(new Map),children:"Сбросить подсветку"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:473,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:449,columnNumber:9},void 0),r.jsxDEV(R,{tableConfig:{containerStyle:{height:"250px"},editing:{enabled:[a,n],rowKeyGetter:l=>l.id,onRowsChange:u,editedCellsState:[d,b],onEnableEditing(l){s.current=t,l()},onSave(l){s.current=null,o(new Map),l()},onCancel(l){s.current&&u(s.current),s.current=null,o(new Map),l()}}},columnConfig:p,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:482,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:448,columnNumber:7},void 0)}},N={...y({preCode:`
import { Button, ModalDF } from '@daisforge/ui';
${re}${le}`,previewSource:"shown",type:"code"}),render:()=>{const[t,u]=i.useState(()=>ie()),d=i.useMemo(()=>[{key:"block",name:"Блок",editingCell:{editable:e=>e.block===w[1],error:{value:e=>e.block===w[0]},component:"select",options:{type:"constant",options:w.map(e=>({text:e,value:e}))}},subRow:{keyOfColumnInSubRow:e=>{switch(e){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},editingCell:{component:"inputString",inputProps:{placeholder:"Введите значение"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1}},{key:"blockActivity",name:"Активность блока",editingCell:{component:"inputString"}},{key:"tribe",name:"Трайб",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"tribeOptions"},selectProps:{listMaxHeight:"210px"}}},{key:"product",name:"Продукт",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"productOptions"}}},{key:"q1",name:"Q1",editingCell:{component:"inputNumber",inputProps:{placeholder:"Введите значение"}},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" ",alignContent:"right",minimumFractionDigits:2,maximumFractionDigits:2},subRow:{keyOfColumnInSubRow:"q1",editingCell:{component:"inputNumber"}}},{key:"q2",name:"Q2",contentFormat:"number",editingCell:{component:({row:e,onRowChange:m,column:b,cellHeight:p,cellWidth:l,initialValue:C})=>{const c=C&&!Number.isNaN(+C)?+C:null,[g,S]=i.useState(c??(e==null?void 0:e[b.key])),f=(I,F)=>{if(F){const j=F.floatValue??F.formattedValue;S(j),m({...e,[b.key]:j})}};return r.jsxDEV(se,{cellHeight:p,cellWidth:l,autoFocusType:c===null?"autoFocusAndSelect":"autoFocus",value:g,onChange:f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:660,columnNumber:17},void 0)}},subRow:{keyOfColumnInSubRow:"q2",editingCell:{component:"inputNumber"}}},{key:"q3",name:"Q3",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q3",editingCell:{component:"inputNumber",error:{value(e,m){return!0}}}}},{key:"q4",name:"Q4",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q4",editingCell:{component:"inputNumber"}}}],[]),o=i.useMemo(()=>({tribeOptions:K.map(e=>({text:e,value:e})),productOptions:$.map(e=>({text:e,value:e}))}),[]),a=i.useRef(null),[n,s]=i.useState(!1);return r.jsxDEV(r.Fragment,{children:[r.jsxDEV(M,{type:"button",onClick:()=>s(e=>!e),children:"Toggle Modal"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:724,columnNumber:9},void 0),r.jsxDEV(O,{opened:n,onClose:()=>s(!1),children:r.jsxDEV(O.Main,{children:[r.jsxDEV(O.Header,{title:"Режим редактирования внутри модальных окон",badge:{text:"tableConfig.editorOverlayPortal: 'inside'"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:729,columnNumber:13},void 0),r.jsxDEV(O.Content,{children:r.jsxDEV(R,{tableConfig:{editorOverlayPortal:"inside",containerStyle:{height:"60vh",width:"80vw"},rowSize:{showInControl:!0,default:"big"},editing:{defaultEnabled:!0,onEnableEditing(e){a.current=JSON.parse(JSON.stringify(t)),e()},onCancel(e){a.current&&u(a.current),e()},onSave(e){a.current=null,e()},onRowsChange:u,rowKeyGetter:e=>`${e.id}`,rowEditable:e=>e.block!==w[1]},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},resizableColumn:!0},columnConfig:d,rows:t,rowContextValue:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:734,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:733,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:728,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:727,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:723,columnNumber:7},void 0)}},ce=[{id:"1",name:"Аренда офиса",amount:12e4,limit:15e4,status:"approved"},{id:"2",name:"",amount:48e3,limit:5e4,status:"new"},{id:"3",name:"Канцелярия",amount:9e3,limit:5e3,status:"new"},{id:"4",name:"Командировка",amount:7e4,limit:4e4,status:"rejected"},{id:"5",name:"",amount:99e3,limit:3e4,status:"new"},{id:"6",name:"Обучение",amount:15e3,limit:2e4,status:"approved"}],Ee=`
import { Button } from '@daisforge/ui';
import { TableCanvas, type ColumnConfig } from '@daisforge/ui/components/TableCanvas';
import { useMemo, useState } from 'react';

${E("packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx","InvoiceRow")}

const INVOICE_ROWS: InvoiceRow[] = ${JSON.stringify(ce)};
`,x={...y({preCode:Ee,previewSource:"shown",type:"code"}),name:"Row Errors (индикатор и ошибка всей строки)",render:()=>{const[t,u]=i.useState(ce),[d,o]=i.useState(!0),[a,n]=i.useState(()=>new Set),s=i.useMemo(()=>[{key:"name",name:"Назначение",editingCell:{component:"inputString",error:{value:e=>e.name.trim()==="",tooltip:()=>"Назначение платежа не заполнено"}}},{key:"amount",name:"Сумма",contentFormat:"number",editingCell:{component:"inputNumber",error:{value:e=>e.amount>e.limit,tooltip:e=>({text:`Сумма превышает лимит ${e.limit}`,placement:"right",maxWidth:240})}}},{key:"limit",name:"Лимит",contentFormat:"number",editingCell:{component:"inputNumber"}},{key:"status",name:"Статус",editingCell:{component:"select",options:{type:"constant",options:[{text:"Новая",value:"new"},{text:"Согласована",value:"approved"},{text:"Отклонена",value:"rejected"}]}}}],[]);return r.jsxDEV(r.Fragment,{children:[r.jsxDEV(M,{size:"s",view:"secondary",style:{marginBottom:12},onClick:()=>o(e=>!e),children:d?"Скрыть столбец-индикатор":"Показать столбец-индикатор"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:903,columnNumber:9},void 0),r.jsxDEV(R,{tableConfig:{containerStyle:{height:"400px"},rowMarkers:{},rowSize:{showInControl:!0,default:"big"},selecting:{state:[a,n],rowKeyGetter:e=>e.id},editing:{defaultEnabled:!0,onRowsChange:u,rowKeyGetter:e=>e.id,rowErrors:{indicatorColumn:d,isErrorRow:e=>e.status==="rejected",tooltip:({isErrorRow:e,errorCellsCount:m})=>e?"Строка отклонена":`Ошибок в строке: ${m}`}}},columnConfig:s,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:913,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:902,columnNumber:7},void 0)}},A=["ООО","АО","ПАО","ИП"],V=["Альфа","Вектор","Гранит","Дельта","Север","Орбита","Прогресс","Сигма"];function B(t){return{id:`cp-${t+1}`,name:`${A[t%A.length]} «${V[t%V.length]} ${String(t+1).padStart(4,"0")}»`}}const P=Array.from({length:1e3},(t,u)=>B(u)),_=50;function ye({search:t,offset:u}){return new Promise(d=>{setTimeout(()=>{const o=t.trim().toLowerCase(),a=o?P.filter(s=>s.name.toLowerCase().includes(o)):P,n=a.slice(u,u+_);d({items:n,hasMore:u+n.length<a.length})},500)})}function Re(){var p;const[t,u]=i.useState(""),d=fe(t,300),{data:o,size:a,setSize:n,isValidating:s}=ge((l,C)=>C&&!C.hasMore?null:["story-counterparties",d,l],([,l,C])=>ye({search:l,offset:C*_}),{keepPreviousData:!0,revalidateFirstPage:!1,revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1}),e=(o==null?void 0:o.flatMap(l=>l.items))??[],m=((p=o==null?void 0:o[o.length-1])==null?void 0:p.hasMore)??!0;return{items:e,isLoading:s,setSearch:u,loadNext:()=>{!s&&m&&n(a+1)}}}const me=[3,17,128,402,777,999].map((t,u)=>({id:`${u+1}`,contract:`Договор № ${100+u}`,counterpartyId:B(t).id,counterpartyName:B(t).name,amount:(u+1)*125e3}));function Se({info:{row:t,cellWidth:u,cellHeight:d,onRowChange:o,readOnly:a,theme:n},disableLeftOffset:s}){const{items:e,isLoading:m,setSearch:b,loadNext:p}=Re(),l=[{value:t.counterpartyId,label:t.counterpartyName},...e.filter(c=>c.id!==t.counterpartyId).map(c=>({value:c.id,label:c.name}))],C=c=>{const g=c.currentTarget;g.scrollTop+g.clientHeight>=g.scrollHeight-50&&p()};return r.jsxDEV(be,{autoFocusType:"autoFocus",cellWidth:u,cellHeight:d,disableLeftOffset:s,paddingInline:n.cellHorizontalPadding,readOnly:a,items:l,defaultValue:t.counterpartyId,virtual:!0,filter:()=>!0,onChangeValue:b,onScroll:C,afterList:m?r.jsxDEV("div",{style:{display:"flex",justifyContent:"center",padding:8},children:r.jsxDEV(we,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:1095,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:1092,columnNumber:11},this):null,onChange:c=>{var S;if(typeof c!="string")return;const g=(S=l.find(f=>f.value===c))==null?void 0:S.label;o({...t,counterpartyId:c,counterpartyName:g??t.counterpartyName},!0)}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:1076,columnNumber:5},this)}const he=`
import { Spinner } from '@daisforge/ui/components/Spinner';
import { CellEditorCombobox, TableCanvas, type ColumnConfig, type EditingCellInfo } from '@daisforge/ui/components/TableCanvas';
import { useDebouncedValue } from '@daisforge/ui/utils';
import { useMemo, useState, type UIEvent } from 'react';
import useSWRInfinite from 'swr/infinite';

${E("packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx","Counterparty")}

${E("packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx","CounterpartyPage")}

${E("packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx","ContractRow")}

const COUNTERPARTY_FORMS = ${JSON.stringify(A)};
const COUNTERPARTY_WORDS = ${JSON.stringify(V)};

${v("packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx","makeCounterparty")}

const COUNTERPARTIES: Counterparty[] = Array.from({ length: ${P.length} }, (_, i) => makeCounterparty(i));
const COUNTERPARTIES_PAGE_SIZE = ${_};
const CONTRACT_ROWS: ContractRow[] = ${JSON.stringify(me)};

${v("packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx","fetchCounterparties")}

${v("packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx","useCounterpartyOptions")}

${v("packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx","CounterpartyCellEditor")}
`,D={...y({preCode:he,previewSource:"shown",type:"code"}),name:"Select с подгрузкой по скроллу (кастомный редактор)",render:()=>{const[t,u]=i.useState(me),d=i.useMemo(()=>[{key:"contract",name:"Договор"},{key:"counterpartyName",name:"Контрагент",width:280,editingCell:{component:(o,a,n)=>r.jsxDEV(Se,{info:o,disableLeftOffset:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:1186,columnNumber:15},void 0),showSelectIcon:!0}},{key:"amount",name:"Сумма",contentFormat:"number",editingCell:{component:"inputNumber"}}],[]);return r.jsxDEV(R,{tableConfig:{containerStyle:{height:"400px"},rowSize:{showInControl:!0,default:"big"},editing:{defaultEnabled:!0,onRowsChange:u,rowKeyGetter:o=>o.id}},columnConfig:d,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:1206,columnNumber:7},void 0)}};var q,H,L;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(G=(W=k.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var J,Q,U;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(U=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,X;N.parameters={...N.parameters,docs:{...(Y=N.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(X=(Z=N.parameters)==null?void 0:Z.docs)==null?void 0:X.source}}};var ee,ne,te;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,ue,ae;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ae=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:ae.source}}};const ke=["Editing","EditingButtonsControl","EditingControlledHighlights","EditingInModal","EditingRowErrors","EditingSelectInfiniteScroll"],$e=Object.freeze(Object.defineProperty({__proto__:null,Editing:h,EditingButtonsControl:k,EditingControlledHighlights:T,EditingInModal:N,EditingRowErrors:x,EditingSelectInfiniteScroll:D,__namedExportsOrder:ke,default:ve},Symbol.toStringTag,{value:"Module"}));export{$e as T};
