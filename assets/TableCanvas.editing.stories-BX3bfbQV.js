import{r as t,d as i}from"./react-D2T61mpp.js";import{a as K,B as s,P as L,T as P}from"./tableData-UCfjiBCh.js";import _ from"./DocStoryTemplate-BaRLMcEi.js";import{s as E}from"./storySourceDoc-tVKyHcEN.js";import{M as y}from"./ModalDF-DBViBo8p.js";import{a as H,T as N}from"./TableCanvas-VhWj9Qoz.js";import{b as Q}from"./@salutejs/sdds-finai-CPdoK_07.js";const j={title:"Локальные компоненты/TableCanvas/Editing",tags:["!autodocs"],parameters:{docs:{page:_}}},p={...E({previewSource:"shown"}),render:()=>{const[r,a]=t.useState(()=>K()),l=t.useMemo(()=>[{key:"block",name:"Блок",editingCell:{editable:e=>e.block===s[1],error:{value:e=>e.block===s[0]},component:"select",options:{type:"constant",options:s.map(e=>({text:e,value:e}))}},subRow:{keyOfColumnInSubRow:e=>{switch(e){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},editingCell:{component:"inputString",inputProps:{placeholder:"Введите значение"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1}},{key:"blockActivity",name:"Активность блока",editingCell:{component:"inputString"}},{key:"tribe",name:"Трайб",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"tribeOptions"},selectProps:{listMaxHeight:"210px"}}},{key:"product",name:"Продукт",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"productOptions"}}},{key:"q1",name:"Q1",editingCell:{component:"inputNumber",inputProps:{placeholder:"Введите значение"}},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" ",alignContent:"right",minimumFractionDigits:2,maximumFractionDigits:2},subRow:{keyOfColumnInSubRow:"q1",editingCell:{component:"inputNumber"}}},{key:"q2",name:"Q2",contentFormat:"number",editingCell:{component:({row:e,onRowChange:u,column:n,cellHeight:w,cellWidth:v,initialValue:c})=>{const f=c&&!Number.isNaN(+c)?+c:null,[m,R]=t.useState(f??(e==null?void 0:e[n.key])),k=(x,b)=>{if(b){const S=b.floatValue??b.formattedValue;R(S),u({...e,[n.key]:S})}};return i.jsxDEV(H,{cellHeight:w,cellWidth:v,autoFocusType:f===null?"autoFocusAndSelect":"autoFocus",value:m,onChange:k},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:176,columnNumber:17},void 0)}},subRow:{keyOfColumnInSubRow:"q2",editingCell:{component:"inputNumber"}}},{key:"q3",name:"Q3",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q3",editingCell:{component:"inputNumber",error:{value(e,u){return!0}}}}},{key:"q4",name:"Q4",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q4",editingCell:{component:"inputNumber"}}}],[]),d=t.useMemo(()=>({tribeOptions:P.map(e=>({text:e,value:e})),productOptions:L.map(e=>({text:e,value:e}))}),[]),o=t.useRef(null);return i.jsxDEV(N,{tableConfig:{enableLowDprHairline:!0,containerStyle:{height:"700px"},rowSize:{showInControl:!0,default:"big"},editing:{onEnableEditing(e){o.current=JSON.parse(JSON.stringify(r)),e()},onCancel(e){o.current&&a(o.current),e()},onSave(e){o.current=null,e()},onRowsChange:a,rowKeyGetter:e=>`${e.id}`,rowEditable:e=>e.block!==s[1]},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},resizableColumn:!0},columnConfig:l,rows:r,rowContextValue:d},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:239,columnNumber:7},void 0)}},C={...E({previewSource:"shown"}),name:"Buttons Control (disabled, isLoading)",render:()=>{const[r,a]=t.useState([{id:"1",name:"Альфа",value:100},{id:"2",name:"Бета",value:200},{id:"3",name:"Гамма",value:300}]),[l,d]=t.useState(!1),o=t.useRef(null),e=t.useMemo(()=>[{key:"name",name:"Название",editingCell:{component:"inputString"}},{key:"value",name:"Значение",contentFormat:"number",editingCell:{component:"inputNumber"}}],[]);return i.jsxDEV(N,{tableConfig:{containerStyle:{height:"400px"},editing:{onRowsChange:a,rowKeyGetter:u=>u.id,buttons:{save:{disabled:l,isLoading:l},cancel:{disabled:l}},onEnableEditing(u){o.current=[...r],u()},onSave(u){d(!0),setTimeout(()=>{d(!1),o.current=null,u()},2e3)},onCancel(u){o.current&&a(o.current),u()}}},columnConfig:e,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:314,columnNumber:7},void 0)}},g={...E({previewSource:"shown"}),render:()=>{const[r,a]=t.useState(()=>K()),l=t.useMemo(()=>[{key:"block",name:"Блок",editingCell:{editable:n=>n.block===s[1],error:{value:n=>n.block===s[0]},component:"select",options:{type:"constant",options:s.map(n=>({text:n,value:n}))}},subRow:{keyOfColumnInSubRow:n=>{switch(n){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},editingCell:{component:"inputString",inputProps:{placeholder:"Введите значение"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1}},{key:"blockActivity",name:"Активность блока",editingCell:{component:"inputString"}},{key:"tribe",name:"Трайб",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"tribeOptions"},selectProps:{listMaxHeight:"210px"}}},{key:"product",name:"Продукт",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"productOptions"}}},{key:"q1",name:"Q1",editingCell:{component:"inputNumber",inputProps:{placeholder:"Введите значение"}},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" ",alignContent:"right",minimumFractionDigits:2,maximumFractionDigits:2},subRow:{keyOfColumnInSubRow:"q1",editingCell:{component:"inputNumber"}}},{key:"q2",name:"Q2",contentFormat:"number",editingCell:{component:({row:n,onRowChange:w,column:v,cellHeight:c,cellWidth:f,initialValue:m})=>{const R=m&&!Number.isNaN(+m)?+m:null,[k,x]=t.useState(R??(n==null?void 0:n[v.key])),b=(S,h)=>{if(h){const O=h.floatValue??h.formattedValue;x(O),w({...n,[v.key]:O})}};return i.jsxDEV(H,{cellHeight:c,cellWidth:f,autoFocusType:R===null?"autoFocusAndSelect":"autoFocus",value:k,onChange:b},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:497,columnNumber:17},void 0)}},subRow:{keyOfColumnInSubRow:"q2",editingCell:{component:"inputNumber"}}},{key:"q3",name:"Q3",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q3",editingCell:{component:"inputNumber",error:{value(n,w){return!0}}}}},{key:"q4",name:"Q4",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q4",editingCell:{component:"inputNumber"}}}],[]),d=t.useMemo(()=>({tribeOptions:P.map(n=>({text:n,value:n})),productOptions:L.map(n=>({text:n,value:n}))}),[]),o=t.useRef(null),[e,u]=t.useState(!1);return i.jsxDEV(i.Fragment,{children:[i.jsxDEV(Q,{type:"button",onClick:()=>u(n=>!n),children:"Toggle Modal"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:561,columnNumber:9},void 0),i.jsxDEV(y,{opened:e,onClose:()=>u(!1),children:i.jsxDEV(y.Main,{children:[i.jsxDEV(y.Header,{title:"Режим редактирования внутри модальных окон",badge:{text:"tableConfig.editorOverlayPortal: 'inside'"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:566,columnNumber:13},void 0),i.jsxDEV(y.Content,{children:i.jsxDEV(N,{tableConfig:{editorOverlayPortal:"inside",containerStyle:{height:"60vh",width:"80vw"},rowSize:{showInControl:!0,default:"big"},editing:{defaultEnabled:!0,onEnableEditing(n){o.current=JSON.parse(JSON.stringify(r)),n()},onCancel(n){o.current&&a(o.current),n()},onSave(n){o.current=null,n()},onRowsChange:a,rowKeyGetter:n=>`${n.id}`,rowEditable:n=>n.block!==s[1]},subRows:{getSubRows:n=>n==null?void 0:n.subRows,rowKeyGetter:n=>n.id},resizableColumn:!0},columnConfig:l,rows:r,rowContextValue:d},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:571,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:570,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:565,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:564,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Editing/TableCanvas.editing.stories.tsx",lineNumber:560,columnNumber:7},void 0)}};var T,D,V;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(V=(D=p.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var F,M,I;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(I=(M=C.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var A,q,B;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(B=(q=g.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const G=["Editing","EditingButtonsControl","EditingInModal"],Z=Object.freeze(Object.defineProperty({__proto__:null,Editing:p,EditingButtonsControl:C,EditingInModal:g,__namedExportsOrder:G,default:j},Symbol.toStringTag,{value:"Module"}));export{Z as T};
