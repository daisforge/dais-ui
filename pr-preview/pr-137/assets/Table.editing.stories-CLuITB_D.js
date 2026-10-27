import{r as u,j as t}from"./react-CAOzMBF_.js";import{a as k,B as o,P as x,T as f}from"./tableData-DVJFoYoT.js";import A from"./DocStoryTemplate-Cf946dgV.js";import{s as h}from"./storySourceDoc-tVKyHcEN.js";import{M as a}from"./ModalDF-DIfvprhr.js";import{u as O,c as I,i as v,f as q}from"./Table-BQHrw1K6.js";import{T as E}from"./TextField-DpKf-85P.js";const N={title:"Локальные компоненты/Table/Editing",tags:["!autodocs"],parameters:{docs:{page:A}}},D=`
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Badge,
  Box,
  Button,
  ColumnConfig,
  ColumnOrColumnGroupConfig,
  RenderCellProps,
  RowHeightFunc,
  SIZES,
  Select,
  Switch,
  Table,
  TextField,
} from '@daisforge/ui';
import { IconAddOutline, IconBoxOutline, IconSber } from '@daisforge/ui/icons';
`,r={...h({preCode:D,previewSource:"shown"}),render:()=>{const[p,c]=u.useState(()=>k()),m=u.useMemo(()=>[{key:"block",name:"Блок",editingCell:{editable:n=>n.block===o[1],error:{value:n=>n.block===o[0]},component:"select",options:{type:"constant",options:o.map(n=>({text:n,value:n}))}},subRow:{keyOfColumnInSubRow:n=>{switch(n){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},editingCell:{component:"inputString",inputProps:{placeholder:"Введите значение"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1},resizable:!0},{key:"blockActivity",name:"Активность блока",editingCell:{component:"inputString"}},{key:"tribe",name:"Трайб",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"tribeOptions"},selectProps:{listMaxHeight:"210px"}}},{key:"product",name:"Продукт",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"productOptions"}}},{key:"q1",name:"Q1",editingCell:{component:"inputNumber",inputProps:{placeholder:"Введите значение"}},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" ",alignContent:"right",minimumFractionDigits:2,maximumFractionDigits:2},subRow:{keyOfColumnInSubRow:"q1",editingCell:{component:"inputNumber"}}},{key:"q2",name:"Q2",editingCell:{component:({row:n,onRowChange:l,onClose:e})=>{const{rowSize:s}=O();return t.jsx(E,{ref:v,value:n.q2,type:"number",size:I[s].input,onChange:C=>{l({...n,q2:+C.target.value})},onBlur:()=>e(!0,!1)})}},subRow:{keyOfColumnInSubRow:"q2",editingCell:{component:"inputNumber"}}},{key:"q3",name:"Q3",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q3",editingCell:{component:"inputNumber",error:{value(n,l){return!0}}}}},{key:"q4",name:"Q4",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q4",editingCell:{component:"inputNumber"}}}],[]),d=u.useMemo(()=>({tribeOptions:f.map(n=>({text:n,value:n})),productOptions:x.map(n=>({text:n,value:n}))}),[]);return t.jsx(q,{tableConfig:{containerStyle:{height:"700px"},fullScreenEnabled:!0,rowSize:{showInControl:!0,default:"big"},editing:{onRowsChange:c,rowKeyGetter:n=>`${n.id}`,rowEditable:n=>n.block!==o[1]},subRows:{getSubRows:n=>n==null?void 0:n.subRows,rowKeyGetter:n=>n.id},resizableColumn:!0},columnConfig:m,rows:p,rowContextValue:d})}},i={...h({preCode:D,previewSource:"shown"}),render:()=>{const[p,c]=u.useState(()=>k()),m=u.useMemo(()=>[{key:"block",name:"Блок",editingCell:{editable:e=>e.block===o[1],error:{value:e=>e.block===o[0]},component:"select",options:{type:"constant",options:o.map(e=>({text:e,value:e}))}},subRow:{keyOfColumnInSubRow:e=>{switch(e){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},editingCell:{component:"inputString",inputProps:{placeholder:"Введите значение"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1},resizable:!0},{key:"blockActivity",name:"Активность блока",editingCell:{component:"inputString"}},{key:"tribe",name:"Трайб",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"tribeOptions"},selectProps:{listMaxHeight:"210px"}}},{key:"product",name:"Продукт",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"productOptions"}}},{key:"q1",name:"Q1",editingCell:{component:"inputNumber",inputProps:{placeholder:"Введите значение"}},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" ",alignContent:"right",minimumFractionDigits:2,maximumFractionDigits:2},subRow:{keyOfColumnInSubRow:"q1",editingCell:{component:"inputNumber"}}},{key:"q2",name:"Q2",editingCell:{component:({row:e,onRowChange:s,onClose:C})=>{const{rowSize:M}=O();return t.jsx(E,{ref:v,value:e.q2,type:"number",size:I[M].input,onChange:F=>{s({...e,q2:+F.target.value})},onBlur:()=>C(!0,!1)})}},subRow:{keyOfColumnInSubRow:"q2",editingCell:{component:"inputNumber"}}},{key:"q3",name:"Q3",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q3",editingCell:{component:"inputNumber",error:{value(e,s){return!0}}}}},{key:"q4",name:"Q4",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q4",editingCell:{component:"inputNumber"}}}],[]),d=u.useMemo(()=>({tribeOptions:f.map(e=>({text:e,value:e})),productOptions:x.map(e=>({text:e,value:e}))}),[]),[n,l]=u.useState(!1);return t.jsx(a,{opened:n,onClose:()=>l(!1),children:t.jsxs(a.Main,{children:[t.jsx(a.Header,{}),t.jsx(a.Content,{children:t.jsx(q,{tableConfig:{containerStyle:{height:"700px",width:"700px"},fullScreenEnabled:!0,rowSize:{showInControl:!0,default:"big"},editing:{onRowsChange:c,rowKeyGetter:e=>`${e.id}`,rowEditable:e=>e.block!==o[1]},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},resizableColumn:!0},columnConfig:m,rows:p,rowContextValue:d})})]})})}};var b,w,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
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
      },
      resizable: true
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
      editingCell: {
        component: ({
          row,
          onRowChange,
          onClose
        }) => {
          const {
            rowSize
          } = useRowContext();
          return <TextField ref={autoFocusAndSelect} value={row.q2} type="number" size={SIZES[rowSize].input} onChange={e => {
            onRowChange({
              ...row,
              q2: +e.target.value
            });
          }} onBlur={() => onClose(true, false)} />;
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
    return <Table tableConfig={{
      containerStyle: {
        height: '700px'
      },
      fullScreenEnabled: true,
      rowSize: {
        showInControl: true,
        default: 'big'
      },
      editing: {
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
}`,...(g=(w=r.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var S,y,R;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
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
      },
      resizable: true
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
      editingCell: {
        component: ({
          row,
          onRowChange,
          onClose
        }) => {
          const {
            rowSize
          } = useRowContext();
          return <TextField ref={autoFocusAndSelect} value={row.q2} type="number" size={SIZES[rowSize].input} onChange={e => {
            onRowChange({
              ...row,
              q2: +e.target.value
            });
          }} onBlur={() => onClose(true, false)} />;
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
    const [modalOpened, setModalOpened] = useState(false);
    return <ModalDF opened={modalOpened} onClose={() => setModalOpened(false)}>
        <ModalDF.Main>
          <ModalDF.Header />
          <ModalDF.Content>
            <Table tableConfig={{
            containerStyle: {
              height: '700px',
              width: '700px'
            },
            fullScreenEnabled: true,
            rowSize: {
              showInControl: true,
              default: 'big'
            },
            editing: {
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
      </ModalDF>;
  }
}`,...(R=(y=i.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};const B=["Editing","EditingInModal"],j=Object.freeze(Object.defineProperty({__proto__:null,Editing:r,EditingInModal:i,__namedExportsOrder:B,default:N},Symbol.toStringTag,{value:"Module"}));export{j as T};
