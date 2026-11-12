import{r as u,j as t}from"./react-CAOzMBF_.js";import{a as x,B as o,P as f,T as h}from"./tableData-DVJFoYoT.js";import A from"./DocStoryTemplate-DUx_jmLE.js";import{s as O}from"./storySourceDoc-tVKyHcEN.js";import{cw as N,cp as T}from"./vendor-CvBXOjQ8.js";import{M as p}from"./ModalDF-DGdz2a6t.js";import{u as I,c as v,i as q,f as E}from"./Table-DEW4FVpB.js";import{T as D}from"./TextField-CdBvT56k.js";const K={title:"Локальные компоненты/Table/Editing",tags:["!autodocs"],parameters:{docs:{page:A}}},M=`
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
`,i={...O({preCode:M,previewSource:"shown"}),render:()=>{const[r,c]=u.useState(()=>x()),m=u.useMemo(()=>[{key:"block",name:"Блок",editingCell:{editable:n=>n.block===o[1],error:{value:n=>n.block===o[0]},component:"select",options:{type:"constant",options:o.map(n=>({text:n,value:n}))}},subRow:{keyOfColumnInSubRow:n=>{switch(n){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},editingCell:{component:"inputString",inputProps:{placeholder:"Введите значение"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1},resizable:!0},{key:"blockActivity",name:"Активность блока",editingCell:{component:"inputString"}},{key:"tribe",name:"Трайб",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"tribeOptions"},selectProps:{listMaxHeight:"210px"}}},{key:"product",name:"Продукт",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"productOptions"}}},{key:"q1",name:"Q1",editingCell:{component:"inputNumber",inputProps:{placeholder:"Введите значение"}},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" ",alignContent:"right",minimumFractionDigits:2,maximumFractionDigits:2},subRow:{keyOfColumnInSubRow:"q1",editingCell:{component:"inputNumber"}}},{key:"q2",name:"Q2",editingCell:{component:({row:n,onRowChange:a,onClose:e})=>{const{rowSize:s}=I();return t.jsx(D,{ref:q,value:n.q2,type:"number",size:v[s].input,onChange:b=>{a({...n,q2:+b.target.value})},onBlur:()=>e(!0,!1)})}},subRow:{keyOfColumnInSubRow:"q2",editingCell:{component:"inputNumber"}}},{key:"q3",name:"Q3",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q3",editingCell:{component:"inputNumber",error:{value(n,a){return!0}}}}},{key:"q4",name:"Q4",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q4",editingCell:{component:"inputNumber"}}}],[]),d=u.useMemo(()=>({tribeOptions:h.map(n=>({text:n,value:n})),productOptions:f.map(n=>({text:n,value:n}))}),[]);return t.jsx(E,{tableConfig:{containerStyle:{height:"700px"},fullScreenEnabled:!0,rowSize:{showInControl:!0,default:"big"},editing:{onRowsChange:c,rowKeyGetter:n=>`${n.id}`,rowEditable:n=>n.block!==o[1]},subRows:{getSubRows:n=>n==null?void 0:n.subRows,rowKeyGetter:n=>n.id},resizableColumn:!0},columnConfig:m,rows:r,rowContextValue:d})}},C=O({preCode:M,previewSource:"shown"}),l={...C,parameters:{..."parameters"in C?C.parameters:{},screenshot:{capture:"page",keepState:!0}},play:async({canvasElement:r})=>{await N(await T(r.ownerDocument.body).findByTestId("editing-modal-content")).toBeVisible()},render:()=>{const[r,c]=u.useState(()=>x()),m=u.useMemo(()=>[{key:"block",name:"Блок",editingCell:{editable:e=>e.block===o[1],error:{value:e=>e.block===o[0]},component:"select",options:{type:"constant",options:o.map(e=>({text:e,value:e}))}},subRow:{keyOfColumnInSubRow:e=>{switch(e){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},editingCell:{component:"inputString",inputProps:{placeholder:"Введите значение"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1},resizable:!0},{key:"blockActivity",name:"Активность блока",editingCell:{component:"inputString"}},{key:"tribe",name:"Трайб",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"tribeOptions"},selectProps:{listMaxHeight:"210px"}}},{key:"product",name:"Продукт",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"productOptions"}}},{key:"q1",name:"Q1",editingCell:{component:"inputNumber",inputProps:{placeholder:"Введите значение"}},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" ",alignContent:"right",minimumFractionDigits:2,maximumFractionDigits:2},subRow:{keyOfColumnInSubRow:"q1",editingCell:{component:"inputNumber"}}},{key:"q2",name:"Q2",editingCell:{component:({row:e,onRowChange:s,onClose:b})=>{const{rowSize:F}=I();return t.jsx(D,{ref:q,value:e.q2,type:"number",size:v[F].input,onChange:B=>{s({...e,q2:+B.target.value})},onBlur:()=>b(!0,!1)})}},subRow:{keyOfColumnInSubRow:"q2",editingCell:{component:"inputNumber"}}},{key:"q3",name:"Q3",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q3",editingCell:{component:"inputNumber",error:{value(e,s){return!0}}}}},{key:"q4",name:"Q4",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q4",editingCell:{component:"inputNumber"}}}],[]),d=u.useMemo(()=>({tribeOptions:h.map(e=>({text:e,value:e})),productOptions:f.map(e=>({text:e,value:e}))}),[]),[n,a]=u.useState(!0);return t.jsx(p,{opened:n,onClose:()=>a(!1),children:t.jsxs(p.Main,{children:[t.jsx(p.Header,{}),t.jsx(p.Content,{"data-testid":"editing-modal-content",children:t.jsx(E,{tableConfig:{containerStyle:{height:"700px",width:"700px"},fullScreenEnabled:!0,rowSize:{showInControl:!0,default:"big"},editing:{onRowsChange:c,rowKeyGetter:e=>`${e.id}`,rowEditable:e=>e.block!==o[1]},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},resizableColumn:!0},columnConfig:m,rows:r,rowContextValue:d})})]})})}};var w,g,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var S,R,k;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...editingInModalDocs,
  parameters: {
    ...('parameters' in editingInModalDocs ? editingInModalDocs.parameters : {}),
    screenshot: {
      capture: 'page',
      keepState: true
    }
  },
  play: async ({
    canvasElement
  }) => {
    await expect(await within(canvasElement.ownerDocument.body).findByTestId('editing-modal-content')).toBeVisible();
  },
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
    const [modalOpened, setModalOpened] = useState(true);
    return <ModalDF opened={modalOpened} onClose={() => setModalOpened(false)}>
        <ModalDF.Main>
          <ModalDF.Header />
          <ModalDF.Content data-testid="editing-modal-content">
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
}`,...(k=(R=l.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};const z=["Editing","EditingInModal"],W=Object.freeze(Object.defineProperty({__proto__:null,Editing:i,EditingInModal:l,__namedExportsOrder:z,default:K},Symbol.toStringTag,{value:"Module"}));export{W as T};
