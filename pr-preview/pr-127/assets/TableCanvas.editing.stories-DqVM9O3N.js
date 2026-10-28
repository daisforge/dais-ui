import{r as t,d as u}from"./react-D2T61mpp.js";import{a as H,B as m,P as _,T as Q}from"./tableData-DVJFoYoT.js";import z from"./DocStoryTemplate-CnJlkrRG.js";import{s as E}from"./storySourceDoc-tVKyHcEN.js";import{M as k}from"./ModalDF-m0pdM0v-.js";import{j as G,T as S}from"./TableCanvas-CSG6tTBl.js";import{t as W}from"./@salutejs/sdds-finai-BWYHBdru.js";const $={title:"Локальные компоненты/TableCanvas/Editing",tags:["!autodocs"],parameters:{docs:{page:z}}},C={...E({previewSource:"shown"}),render:()=>{const[r,a]=t.useState(()=>H()),s=t.useMemo(()=>[{key:"block",name:"Блок",editingCell:{editable:e=>e.block===m[1],error:{value:e=>e.block===m[0]},component:"select",options:{type:"constant",options:m.map(e=>({text:e,value:e}))}},subRow:{keyOfColumnInSubRow:e=>{switch(e){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},editingCell:{component:"inputString",inputProps:{placeholder:"Введите значение"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1}},{key:"blockActivity",name:"Активность блока",editingCell:{component:"inputString"}},{key:"tribe",name:"Трайб",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"tribeOptions"},selectProps:{listMaxHeight:"210px"}}},{key:"product",name:"Продукт",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"productOptions"}}},{key:"q1",name:"Q1",editingCell:{component:"inputNumber",inputProps:{placeholder:"Введите значение"}},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" ",alignContent:"right",minimumFractionDigits:2,maximumFractionDigits:2},subRow:{keyOfColumnInSubRow:"q1",editingCell:{component:"inputNumber"}}},{key:"q2",name:"Q2",contentFormat:"number",editingCell:{component:({row:e,onRowChange:i,column:n,cellHeight:d,cellWidth:f,initialValue:c})=>{const R=c&&!Number.isNaN(+c)?+c:null,[p,y]=t.useState(R??(e==null?void 0:e[n.key])),h=(D,b)=>{if(b){const N=b.floatValue??b.formattedValue;y(N),i({...e,[n.key]:N})}};return u.jsxDEV(G,{cellHeight:d,cellWidth:f,autoFocusType:R===null?"autoFocusAndSelect":"autoFocus",value:p,onChange:h},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:176,columnNumber:17},void 0)}},subRow:{keyOfColumnInSubRow:"q2",editingCell:{component:"inputNumber"}}},{key:"q3",name:"Q3",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q3",editingCell:{component:"inputNumber",error:{value(e,i){return!0}}}}},{key:"q4",name:"Q4",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q4",editingCell:{component:"inputNumber"}}}],[]),l=t.useMemo(()=>({tribeOptions:Q.map(e=>({text:e,value:e})),productOptions:_.map(e=>({text:e,value:e}))}),[]),o=t.useRef(null);return u.jsxDEV(S,{tableConfig:{enableLowDprHairline:!0,containerStyle:{height:"700px"},rowSize:{showInControl:!0,default:"big"},editing:{onEnableEditing(e){o.current=JSON.parse(JSON.stringify(r)),e()},onCancel(e){o.current&&a(o.current),e()},onSave(e){o.current=null,e()},onRowsChange:a,rowKeyGetter:e=>`${e.id}`,rowEditable:e=>e.block!==m[1]},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},resizableColumn:!0},columnConfig:s,rows:r,rowContextValue:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:239,columnNumber:7},void 0)}},g={...E({previewSource:"shown"}),name:"Buttons Control (disabled, isLoading)",render:()=>{const[r,a]=t.useState([{id:"1",name:"Альфа",value:100},{id:"2",name:"Бета",value:200},{id:"3",name:"Гамма",value:300}]),[s,l]=t.useState(!1),o=t.useRef(null),e=t.useMemo(()=>[{key:"name",name:"Название",editingCell:{component:"inputString"}},{key:"value",name:"Значение",contentFormat:"number",editingCell:{component:"inputNumber"}}],[]);return u.jsxDEV(S,{tableConfig:{containerStyle:{height:"400px"},editing:{onRowsChange:a,rowKeyGetter:i=>i.id,buttons:{save:{disabled:s,isLoading:s},cancel:{disabled:s}},onEnableEditing(i){o.current=[...r],i()},onSave(i){l(!0),setTimeout(()=>{l(!1),o.current=null,i()},2e3)},onCancel(i){o.current&&a(o.current),i()}}},columnConfig:e,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:314,columnNumber:7},void 0)}},w={...E({previewSource:"shown"}),render:()=>{const[r,a]=t.useState(()=>H()),s=t.useMemo(()=>[{key:"block",name:"Блок",editingCell:{editable:n=>n.block===m[1],error:{value:n=>n.block===m[0]},component:"select",options:{type:"constant",options:m.map(n=>({text:n,value:n}))}},subRow:{keyOfColumnInSubRow:n=>{switch(n){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},editingCell:{component:"inputString",inputProps:{placeholder:"Введите значение"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1}},{key:"blockActivity",name:"Активность блока",editingCell:{component:"inputString"}},{key:"tribe",name:"Трайб",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"tribeOptions"},selectProps:{listMaxHeight:"210px"}}},{key:"product",name:"Продукт",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"productOptions"}}},{key:"q1",name:"Q1",editingCell:{component:"inputNumber",inputProps:{placeholder:"Введите значение"}},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" ",alignContent:"right",minimumFractionDigits:2,maximumFractionDigits:2},subRow:{keyOfColumnInSubRow:"q1",editingCell:{component:"inputNumber"}}},{key:"q2",name:"Q2",contentFormat:"number",editingCell:{component:({row:n,onRowChange:d,column:f,cellHeight:c,cellWidth:R,initialValue:p})=>{const y=p&&!Number.isNaN(+p)?+p:null,[h,D]=t.useState(y??(n==null?void 0:n[f.key])),b=(N,x)=>{if(x){const T=x.floatValue??x.formattedValue;D(T),d({...n,[f.key]:T})}};return u.jsxDEV(G,{cellHeight:c,cellWidth:R,autoFocusType:y===null?"autoFocusAndSelect":"autoFocus",value:h,onChange:b},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:497,columnNumber:17},void 0)}},subRow:{keyOfColumnInSubRow:"q2",editingCell:{component:"inputNumber"}}},{key:"q3",name:"Q3",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q3",editingCell:{component:"inputNumber",error:{value(n,d){return!0}}}}},{key:"q4",name:"Q4",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q4",editingCell:{component:"inputNumber"}}}],[]),l=t.useMemo(()=>({tribeOptions:Q.map(n=>({text:n,value:n})),productOptions:_.map(n=>({text:n,value:n}))}),[]),o=t.useRef(null),[e,i]=t.useState(!1);return u.jsxDEV(u.Fragment,{children:[u.jsxDEV(W,{type:"button",onClick:()=>i(n=>!n),children:"Toggle Modal"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:561,columnNumber:9},void 0),u.jsxDEV(k,{opened:e,onClose:()=>i(!1),children:u.jsxDEV(k.Main,{children:[u.jsxDEV(k.Header,{title:"Режим редактирования внутри модальных окон",badge:{text:"tableConfig.editorOverlayPortal: 'inside'"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:566,columnNumber:13},void 0),u.jsxDEV(k.Content,{children:u.jsxDEV(S,{tableConfig:{editorOverlayPortal:"inside",containerStyle:{height:"60vh",width:"80vw"},rowSize:{showInControl:!0,default:"big"},editing:{defaultEnabled:!0,onEnableEditing(n){o.current=JSON.parse(JSON.stringify(r)),n()},onCancel(n){o.current&&a(o.current),n()},onSave(n){o.current=null,n()},onRowsChange:a,rowKeyGetter:n=>`${n.id}`,rowEditable:n=>n.block!==m[1]},subRows:{getSubRows:n=>n==null?void 0:n.subRows,rowKeyGetter:n=>n.id},resizableColumn:!0},columnConfig:s,rows:r,rowContextValue:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:571,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:570,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:565,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:564,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:560,columnNumber:7},void 0)}},J=[{id:"1",name:"Аренда офиса",amount:12e4,limit:15e4,status:"approved"},{id:"2",name:"",amount:48e3,limit:5e4,status:"new"},{id:"3",name:"Канцелярия",amount:9e3,limit:5e3,status:"new"},{id:"4",name:"Командировка",amount:7e4,limit:4e4,status:"rejected"},{id:"5",name:"",amount:99e3,limit:3e4,status:"new"},{id:"6",name:"Обучение",amount:15e3,limit:2e4,status:"approved"}],U=`
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
`,v={...E({code:U,type:"code"}),name:"Row Errors (индикатор и ошибка всей строки)",render:()=>{const[r,a]=t.useState(J),[s,l]=t.useState(!0),[o,e]=t.useState(()=>new Set),i=t.useMemo(()=>[{key:"name",name:"Назначение",editingCell:{component:"inputString",error:{value:n=>n.name.trim()==="",tooltip:()=>"Назначение платежа не заполнено"}}},{key:"amount",name:"Сумма",contentFormat:"number",editingCell:{component:"inputNumber",error:{value:n=>n.amount>n.limit,tooltip:n=>({text:`Сумма превышает лимит ${n.limit}`,placement:"right",maxWidth:240})}}},{key:"limit",name:"Лимит",contentFormat:"number",editingCell:{component:"inputNumber"}},{key:"status",name:"Статус",editingCell:{component:"select",options:{type:"constant",options:[{text:"Новая",value:"new"},{text:"Согласована",value:"approved"},{text:"Отклонена",value:"rejected"}]}}}],[]);return u.jsxDEV(u.Fragment,{children:[u.jsxDEV(W,{size:"s",view:"secondary",style:{marginBottom:12},onClick:()=>l(n=>!n),children:s?"Скрыть столбец-индикатор":"Показать столбец-индикатор"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:803,columnNumber:9},void 0),u.jsxDEV(S,{tableConfig:{containerStyle:{height:"400px"},rowMarkers:{},rowSize:{showInControl:!0,default:"big"},selecting:{state:[o,e],rowKeyGetter:n=>n.id},editing:{defaultEnabled:!0,onRowsChange:a,rowKeyGetter:n=>n.id,rowErrors:{indicatorColumn:s,isErrorRow:n=>n.status==="rejected",tooltip:({isErrorRow:n,errorCellsCount:d})=>n?"Строка отклонена":`Ошибок в строке: ${d}`}}},columnConfig:i,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:813,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:802,columnNumber:7},void 0)}};var O,F,I;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(I=(F=C.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var V,M,A;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(A=(M=g.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var B,q,K;w.parameters={...w.parameters,docs:{...(B=w.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(K=(q=w.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var j,L,P;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(P=(L=v.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};const X=["Editing","EditingButtonsControl","EditingInModal","EditingRowErrors"],rn=Object.freeze(Object.defineProperty({__proto__:null,Editing:C,EditingButtonsControl:g,EditingInModal:w,EditingRowErrors:v,__namedExportsOrder:X,default:$},Symbol.toStringTag,{value:"Module"}));export{rn as T};
