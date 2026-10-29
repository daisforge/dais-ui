import{r as t,d as o}from"./react-D2T61mpp.js";import{a as $,T,P as A,B as m}from"./tableData-DVJFoYoT.js";import X from"./DocStoryTemplate-BZYLyq8m.js";import{s as h}from"./storySourceDoc-tVKyHcEN.js";import{M as k}from"./ModalDF-CJ4Jl1AH.js";import{j as J,T as y}from"./TableCanvas-Cnk4HLGu.js";import{t as U}from"./@salutejs/sdds-finai-HGBzAa3l.js";const Y={title:"Локальные компоненты/TableCanvas/Editing",tags:["!autodocs"],parameters:{docs:{page:X}}},C={...h({previewSource:"shown"}),render:()=>{const[a,s]=t.useState(()=>$()),l=t.useMemo(()=>[{key:"block",name:"Блок",editingCell:{editable:e=>e.block===m[1],error:{value:e=>e.block===m[0]},component:"select",options:{type:"constant",options:m.map(e=>({text:e,value:e}))}},subRow:{keyOfColumnInSubRow:e=>{switch(e){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},editingCell:{component:"select",options:{type:"constant",options:[...T,...A].map(e=>({text:e,value:e}))}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1}},{key:"blockActivity",name:"Активность блока",editingCell:{component:"inputString"}},{key:"tribe",name:"Трайб",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"tribeOptions"},selectProps:{listMaxHeight:"210px"}}},{key:"product",name:"Продукт",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"productOptions"}}},{key:"q1",name:"Q1",editingCell:{component:"inputNumber",inputProps:{placeholder:"Введите значение"}},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" ",alignContent:"right",minimumFractionDigits:2,maximumFractionDigits:2},subRow:{keyOfColumnInSubRow:"q1",editingCell:{component:"inputNumber"}}},{key:"q2",name:"Q2",contentFormat:"number",editingCell:{component:({row:e,onRowChange:r,column:n,cellHeight:d,cellWidth:R,initialValue:c})=>{const E=c&&!Number.isNaN(+c)?+c:null,[p,S]=t.useState(E??(e==null?void 0:e[n.key])),x=(O,b)=>{if(b){const N=b.floatValue??b.formattedValue;S(N),r({...e,[n.key]:N})}};return o.jsxDEV(J,{cellHeight:d,cellWidth:R,autoFocusType:E===null?"autoFocusAndSelect":"autoFocus",value:p,onChange:x},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:182,columnNumber:17},void 0)}},subRow:{keyOfColumnInSubRow:"q2",editingCell:{component:"inputNumber"}}},{key:"q3",name:"Q3",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q3",editingCell:{component:"inputNumber",error:{value(e,r){return!0}}}}},{key:"q4",name:"Q4",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q4",editingCell:{component:"inputNumber"}}}],[]),u=t.useMemo(()=>({tribeOptions:T.map(e=>({text:e,value:e})),productOptions:A.map(e=>({text:e,value:e}))}),[]),i=t.useRef(null);return o.jsxDEV(y,{tableConfig:{enableLowDprHairline:!0,containerStyle:{height:"700px"},rowSize:{showInControl:!0,default:"big"},editing:{onEnableEditing(e){i.current=JSON.parse(JSON.stringify(a)),e()},onCancel(e){i.current&&s(i.current),e()},onSave(e){i.current=null,e()},onRowsChange:s,rowKeyGetter:e=>`${e.id}`,rowEditable:e=>e.block!==m[1]},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},resizableColumn:!0},columnConfig:l,rows:a,rowContextValue:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:245,columnNumber:7},void 0)}},g={...h({previewSource:"shown"}),name:"Buttons Control (disabled, isLoading)",render:()=>{const[a,s]=t.useState([{id:"1",name:"Альфа",value:100},{id:"2",name:"Бета",value:200},{id:"3",name:"Гамма",value:300}]),[l,u]=t.useState(!1),i=t.useRef(null),e=t.useMemo(()=>[{key:"name",name:"Название",editingCell:{component:"inputString"}},{key:"value",name:"Значение",contentFormat:"number",editingCell:{component:"inputNumber"}}],[]);return o.jsxDEV(y,{tableConfig:{containerStyle:{height:"400px"},editing:{onRowsChange:s,rowKeyGetter:r=>r.id,buttons:{save:{disabled:l,isLoading:l},cancel:{disabled:l}},onEnableEditing(r){i.current=[...a],r()},onSave(r){u(!0),setTimeout(()=>{u(!1),i.current=null,r()},2e3)},onCancel(r){i.current&&s(i.current),r()}}},columnConfig:e,rows:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:320,columnNumber:7},void 0)}},w={...h({previewSource:"shown"}),render:()=>{const[a,s]=t.useState(()=>$()),l=t.useMemo(()=>[{key:"block",name:"Блок",editingCell:{editable:n=>n.block===m[1],error:{value:n=>n.block===m[0]},component:"select",options:{type:"constant",options:m.map(n=>({text:n,value:n}))}},subRow:{keyOfColumnInSubRow:n=>{switch(n){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},editingCell:{component:"inputString",inputProps:{placeholder:"Введите значение"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1}},{key:"blockActivity",name:"Активность блока",editingCell:{component:"inputString"}},{key:"tribe",name:"Трайб",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"tribeOptions"},selectProps:{listMaxHeight:"210px"}}},{key:"product",name:"Продукт",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"productOptions"}}},{key:"q1",name:"Q1",editingCell:{component:"inputNumber",inputProps:{placeholder:"Введите значение"}},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" ",alignContent:"right",minimumFractionDigits:2,maximumFractionDigits:2},subRow:{keyOfColumnInSubRow:"q1",editingCell:{component:"inputNumber"}}},{key:"q2",name:"Q2",contentFormat:"number",editingCell:{component:({row:n,onRowChange:d,column:R,cellHeight:c,cellWidth:E,initialValue:p})=>{const S=p&&!Number.isNaN(+p)?+p:null,[x,O]=t.useState(S??(n==null?void 0:n[R.key])),b=(N,D)=>{if(D){const F=D.floatValue??D.formattedValue;O(F),d({...n,[R.key]:F})}};return o.jsxDEV(J,{cellHeight:c,cellWidth:E,autoFocusType:S===null?"autoFocusAndSelect":"autoFocus",value:x,onChange:b},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:503,columnNumber:17},void 0)}},subRow:{keyOfColumnInSubRow:"q2",editingCell:{component:"inputNumber"}}},{key:"q3",name:"Q3",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q3",editingCell:{component:"inputNumber",error:{value(n,d){return!0}}}}},{key:"q4",name:"Q4",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q4",editingCell:{component:"inputNumber"}}}],[]),u=t.useMemo(()=>({tribeOptions:T.map(n=>({text:n,value:n})),productOptions:A.map(n=>({text:n,value:n}))}),[]),i=t.useRef(null),[e,r]=t.useState(!1);return o.jsxDEV(o.Fragment,{children:[o.jsxDEV(U,{type:"button",onClick:()=>r(n=>!n),children:"Toggle Modal"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:567,columnNumber:9},void 0),o.jsxDEV(k,{opened:e,onClose:()=>r(!1),children:o.jsxDEV(k.Main,{children:[o.jsxDEV(k.Header,{title:"Режим редактирования внутри модальных окон",badge:{text:"tableConfig.editorOverlayPortal: 'inside'"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:572,columnNumber:13},void 0),o.jsxDEV(k.Content,{children:o.jsxDEV(y,{tableConfig:{editorOverlayPortal:"inside",containerStyle:{height:"60vh",width:"80vw"},rowSize:{showInControl:!0,default:"big"},editing:{defaultEnabled:!0,onEnableEditing(n){i.current=JSON.parse(JSON.stringify(a)),n()},onCancel(n){i.current&&s(i.current),n()},onSave(n){i.current=null,n()},onRowsChange:s,rowKeyGetter:n=>`${n.id}`,rowEditable:n=>n.block!==m[1]},subRows:{getSubRows:n=>n==null?void 0:n.subRows,rowKeyGetter:n=>n.id},resizableColumn:!0},columnConfig:l,rows:a,rowContextValue:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:577,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:576,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:571,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:570,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:566,columnNumber:7},void 0)}},Z=[{id:"1",name:"Аренда офиса",amount:12e4,limit:15e4,status:"approved"},{id:"2",name:"",amount:48e3,limit:5e4,status:"new"},{id:"3",name:"Канцелярия",amount:9e3,limit:5e3,status:"new"},{id:"4",name:"Командировка",amount:7e4,limit:4e4,status:"rejected"},{id:"5",name:"",amount:99e3,limit:3e4,status:"new"},{id:"6",name:"Обучение",amount:15e3,limit:2e4,status:"approved"}],nn=`
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
`,v={...h({code:nn,type:"code"}),name:"Row Errors (индикатор и ошибка всей строки)",render:()=>{const[a,s]=t.useState(Z),[l,u]=t.useState(!0),[i,e]=t.useState(()=>new Set),r=t.useMemo(()=>[{key:"name",name:"Назначение",editingCell:{component:"inputString",error:{value:n=>n.name.trim()==="",tooltip:()=>"Назначение платежа не заполнено"}}},{key:"amount",name:"Сумма",contentFormat:"number",editingCell:{component:"inputNumber",error:{value:n=>n.amount>n.limit,tooltip:n=>({text:`Сумма превышает лимит ${n.limit}`,placement:"right",maxWidth:240})}}},{key:"limit",name:"Лимит",contentFormat:"number",editingCell:{component:"inputNumber"}},{key:"status",name:"Статус",editingCell:{component:"select",options:{type:"constant",options:[{text:"Новая",value:"new"},{text:"Согласована",value:"approved"},{text:"Отклонена",value:"rejected"}]}}}],[]);return o.jsxDEV(o.Fragment,{children:[o.jsxDEV(U,{size:"s",view:"secondary",style:{marginBottom:12},onClick:()=>u(n=>!n),children:l?"Скрыть столбец-индикатор":"Показать столбец-индикатор"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:809,columnNumber:9},void 0),o.jsxDEV(y,{tableConfig:{containerStyle:{height:"400px"},rowMarkers:{},rowSize:{showInControl:!0,default:"big"},selecting:{state:[i,e],rowKeyGetter:n=>n.id},editing:{defaultEnabled:!0,onRowsChange:s,rowKeyGetter:n=>n.id,rowErrors:{indicatorColumn:l,isErrorRow:n=>n.status==="rejected",tooltip:({isErrorRow:n,errorCellsCount:d})=>n?"Строка отклонена":`Ошибок в строке: ${d}`}}},columnConfig:r,rows:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:819,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:808,columnNumber:7},void 0)}},en=["Платформа","Данные","Клиенты"],tn=["В работе","Готово","Пауза"],on=[{id:"1",dept:"Платформа",status:"В работе",name:"Альфа"},{id:"2",dept:"Платформа",status:"В работе",name:"Бета"},{id:"3",dept:"Платформа",status:"Готово",name:"Гамма"},{id:"4",dept:"Данные",status:"Готово",name:"Дельта"},{id:"5",dept:"Данные",status:"Готово",name:"Эпсилон"},{id:"6",dept:"Клиенты",status:"Пауза",name:"Дзета"},{id:"7",dept:"Клиенты",status:"Пауза",name:"Эта"},{id:"8",dept:"Клиенты",status:"Пауза",name:"Тета"}],f={name:"Объединённые ячейки с селектом",render:()=>{const[a,s]=t.useState(on),l=t.useMemo(()=>[{key:"dept",name:"Отдел (к верху)",mergedCellsAlign:{vertical:"top",horizontal:"left"},editingCell:{component:"select",options:{type:"constant",options:en.map(u=>({text:u,value:u}))}}},{key:"status",name:"Статус (к низу)",mergedCellsAlign:{vertical:"bottom",horizontal:"left"},editingCell:{component:"select",options:{type:"constant",options:tn.map(u=>({text:u,value:u}))}}},{key:"name",name:"Проект",editingCell:{component:"inputString"}}],[]);return o.jsxDEV(y,{tableConfig:{containerStyle:{height:"420px"},rowSize:{showInControl:!0,default:"big"},mergeCells:{mergeByCellValues:["dept","status"]},editing:{onRowsChange:s,rowKeyGetter:u=>u.id}},columnConfig:l,rows:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:908,columnNumber:7},void 0)}};var I,V,M;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
        // Вложенные уровни тоже селект: так видно, как шеврон дерева
        // и стрелка селекта уживаются в редакторе на каждом уровне.
        editingCell: {
          component: 'select',
          options: {
            type: 'constant',
            options: [...TRIBES, ...PRODUCTS].map(i => ({
              text: i,
              value: i
            }))
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
}`,...(M=(V=C.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var B,K,q;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var j,P,_;w.parameters={...w.parameters,docs:{...(j=w.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(_=(P=w.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var L,z,H;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(H=(z=v.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var G,W,Q;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Объединённые ячейки с селектом',
  render: () => {
    const [rows, setRows] = useState(MERGED_ROWS);
    const columns = useMemo((): readonly ColumnConfig<MergedRow>[] => [{
      key: 'dept',
      name: 'Отдел (к верху)',
      mergedCellsAlign: {
        vertical: 'top',
        horizontal: 'left'
      },
      editingCell: {
        component: 'select',
        options: {
          type: 'constant',
          options: DEPTS.map(i => ({
            text: i,
            value: i
          }))
        }
      }
    }, {
      key: 'status',
      name: 'Статус (к низу)',
      mergedCellsAlign: {
        vertical: 'bottom',
        horizontal: 'left'
      },
      editingCell: {
        component: 'select',
        options: {
          type: 'constant',
          options: STATUSES.map(i => ({
            text: i,
            value: i
          }))
        }
      }
    }, {
      key: 'name',
      name: 'Проект',
      editingCell: {
        component: 'inputString'
      }
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '420px'
      },
      rowSize: {
        showInControl: true,
        default: 'big'
      },
      mergeCells: {
        mergeByCellValues: ['dept', 'status']
      },
      editing: {
        onRowsChange: setRows,
        rowKeyGetter: r => r.id
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(Q=(W=f.parameters)==null?void 0:W.docs)==null?void 0:Q.source}}};const un=["Editing","EditingButtonsControl","EditingInModal","EditingRowErrors","EditingMergedCells"],pn=Object.freeze(Object.defineProperty({__proto__:null,Editing:C,EditingButtonsControl:g,EditingInModal:w,EditingMergedCells:f,EditingRowErrors:v,__namedExportsOrder:un,default:Y},Symbol.toStringTag,{value:"Module"}));export{pn as T};
