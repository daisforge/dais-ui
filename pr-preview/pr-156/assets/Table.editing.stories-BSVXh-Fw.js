import{r as i,d as t}from"./react-D2T61mpp.js";import{a as R,B as o,P as x,T as h}from"./tableData-DVJFoYoT.js";import F from"./DocStoryTemplate-CCVtLeWJ.js";import{s as O}from"./storySourceDoc-tVKyHcEN.js";import{cs as B,cp as A}from"./vendor-DQE_v-3P.js";import{M as m}from"./ModalDF-CBPeEhJe.js";import{u as I,c as v,i as N,f as T}from"./Table-DPC7iENO.js";import{T as D}from"./TextField-C1W7ideM.js";const K={title:"Локальные компоненты/Table/Editing",tags:["!autodocs"],parameters:{docs:{page:F}}},E=`
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
`,u={...O({preCode:E,previewSource:"shown"}),render:()=>{const[r,c]=i.useState(()=>R()),p=i.useMemo(()=>[{key:"block",name:"Блок",editingCell:{editable:e=>e.block===o[1],error:{value:e=>e.block===o[0]},component:"select",options:{type:"constant",options:o.map(e=>({text:e,value:e}))}},subRow:{keyOfColumnInSubRow:e=>{switch(e){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},editingCell:{component:"inputString",inputProps:{placeholder:"Введите значение"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1},resizable:!0},{key:"blockActivity",name:"Активность блока",editingCell:{component:"inputString"}},{key:"tribe",name:"Трайб",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"tribeOptions"},selectProps:{listMaxHeight:"210px"}}},{key:"product",name:"Продукт",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"productOptions"}}},{key:"q1",name:"Q1",editingCell:{component:"inputNumber",inputProps:{placeholder:"Введите значение"}},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" ",alignContent:"right",minimumFractionDigits:2,maximumFractionDigits:2},subRow:{keyOfColumnInSubRow:"q1",editingCell:{component:"inputNumber"}}},{key:"q2",name:"Q2",editingCell:{component:({row:e,onRowChange:s,onClose:n})=>{const{rowSize:a}=I();return t.jsxDEV(D,{ref:N,value:e.q2,type:"number",size:v[a].input,onChange:b=>{s({...e,q2:+b.target.value})},onBlur:()=>n(!0,!1)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.editing/Table.editing.stories.tsx",lineNumber:166,columnNumber:17},void 0)}},subRow:{keyOfColumnInSubRow:"q2",editingCell:{component:"inputNumber"}}},{key:"q3",name:"Q3",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q3",editingCell:{component:"inputNumber",error:{value(e,s){return!0}}}}},{key:"q4",name:"Q4",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q4",editingCell:{component:"inputNumber"}}}],[]),d=i.useMemo(()=>({tribeOptions:h.map(e=>({text:e,value:e})),productOptions:x.map(e=>({text:e,value:e}))}),[]);return t.jsxDEV(T,{tableConfig:{containerStyle:{height:"700px"},fullScreenEnabled:!0,rowSize:{showInControl:!0,default:"big"},editing:{onRowsChange:c,rowKeyGetter:e=>`${e.id}`,rowEditable:e=>e.block!==o[1]},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},resizableColumn:!0},columnConfig:p,rows:r,rowContextValue:d},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.editing/Table.editing.stories.tsx",lineNumber:226,columnNumber:7},void 0)}},w=O({preCode:E,previewSource:"shown"}),l={...w,parameters:{..."parameters"in w?w.parameters:{},screenshot:{capture:"page",keepState:!0}},play:async({canvasElement:r})=>{await B(await A(r.ownerDocument.body).findByTestId("editing-modal-content")).toBeVisible()},render:()=>{const[r,c]=i.useState(()=>R()),p=i.useMemo(()=>[{key:"block",name:"Блок",editingCell:{editable:n=>n.block===o[1],error:{value:n=>n.block===o[0]},component:"select",options:{type:"constant",options:o.map(n=>({text:n,value:n}))}},subRow:{keyOfColumnInSubRow:n=>{switch(n){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},editingCell:{component:"inputString",inputProps:{placeholder:"Введите значение"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1},resizable:!0},{key:"blockActivity",name:"Активность блока",editingCell:{component:"inputString"}},{key:"tribe",name:"Трайб",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"tribeOptions"},selectProps:{listMaxHeight:"210px"}}},{key:"product",name:"Продукт",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"productOptions"}}},{key:"q1",name:"Q1",editingCell:{component:"inputNumber",inputProps:{placeholder:"Введите значение"}},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" ",alignContent:"right",minimumFractionDigits:2,maximumFractionDigits:2},subRow:{keyOfColumnInSubRow:"q1",editingCell:{component:"inputNumber"}}},{key:"q2",name:"Q2",editingCell:{component:({row:n,onRowChange:a,onClose:b})=>{const{rowSize:q}=I();return t.jsxDEV(D,{ref:N,value:n.q2,type:"number",size:v[q].input,onChange:M=>{a({...n,q2:+M.target.value})},onBlur:()=>b(!0,!1)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.editing/Table.editing.stories.tsx",lineNumber:373,columnNumber:17},void 0)}},subRow:{keyOfColumnInSubRow:"q2",editingCell:{component:"inputNumber"}}},{key:"q3",name:"Q3",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q3",editingCell:{component:"inputNumber",error:{value(n,a){return!0}}}}},{key:"q4",name:"Q4",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q4",editingCell:{component:"inputNumber"}}}],[]),d=i.useMemo(()=>({tribeOptions:h.map(n=>({text:n,value:n})),productOptions:x.map(n=>({text:n,value:n}))}),[]),[e,s]=i.useState(!0);return t.jsxDEV(m,{opened:e,onClose:()=>s(!1),children:t.jsxDEV(m.Main,{children:[t.jsxDEV(m.Header,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.editing/Table.editing.stories.tsx",lineNumber:436,columnNumber:11},void 0),t.jsxDEV(m.Content,{"data-testid":"editing-modal-content",children:t.jsxDEV(T,{tableConfig:{containerStyle:{height:"700px",width:"700px"},fullScreenEnabled:!0,rowSize:{showInControl:!0,default:"big"},editing:{onRowsChange:c,rowKeyGetter:n=>`${n.id}`,rowEditable:n=>n.block!==o[1]},subRows:{getSubRows:n=>n==null?void 0:n.subRows,rowKeyGetter:n=>n.id},resizableColumn:!0},columnConfig:p,rows:r,rowContextValue:d},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.editing/Table.editing.stories.tsx",lineNumber:438,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.editing/Table.editing.stories.tsx",lineNumber:437,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.editing/Table.editing.stories.tsx",lineNumber:435,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.editing/Table.editing.stories.tsx",lineNumber:434,columnNumber:7},void 0)}};var g,C,y;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(C=u.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var k,S,f;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(f=(S=l.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const z=["Editing","EditingInModal"],W=Object.freeze(Object.defineProperty({__proto__:null,Editing:u,EditingInModal:l,__namedExportsOrder:z,default:K},Symbol.toStringTag,{value:"Module"}));export{W as T};
