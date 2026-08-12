import{r as u,d as o}from"./react-D2T61mpp.js";import{a as f,B as t,P as R,T as x}from"./tableData-UCfjiBCh.js";import M from"./DocStoryTemplate-BrdyFHCL.js";import{s as h}from"./storySourceDoc-tVKyHcEN.js";import{M as a}from"./ModalDF-cdwIafE7.js";import{u as O,c as v,i as I,f as N}from"./Table-DZrBAsi_.js";import{T}from"./TextField-DnCCqDPb.js";const F={title:"Локальные компоненты/Table/Editing",tags:["!autodocs"],parameters:{docs:{page:M}}},E=`
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
`,i={...h({preCode:E,previewSource:"shown"}),render:()=>{const[m,p]=u.useState(()=>f()),c=u.useMemo(()=>[{key:"block",name:"Блок",editingCell:{editable:n=>n.block===t[1],error:{value:n=>n.block===t[0]},component:"select",options:{type:"constant",options:t.map(n=>({text:n,value:n}))}},subRow:{keyOfColumnInSubRow:n=>{switch(n){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},editingCell:{component:"inputString",inputProps:{placeholder:"Введите значение"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1},resizable:!0},{key:"blockActivity",name:"Активность блока",editingCell:{component:"inputString"}},{key:"tribe",name:"Трайб",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"tribeOptions"},selectProps:{listMaxHeight:"210px"}}},{key:"product",name:"Продукт",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"productOptions"}}},{key:"q1",name:"Q1",editingCell:{component:"inputNumber",inputProps:{placeholder:"Введите значение"}},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" ",alignContent:"right",minimumFractionDigits:2,maximumFractionDigits:2},subRow:{keyOfColumnInSubRow:"q1",editingCell:{component:"inputNumber"}}},{key:"q2",name:"Q2",editingCell:{component:({row:n,onRowChange:l,onClose:e})=>{const{rowSize:s}=O();return o.jsxDEV(T,{ref:I,value:n.q2,type:"number",size:v[s].input,onChange:b=>{l({...n,q2:+b.target.value})},onBlur:()=>e(!0,!1)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.editing/Table.editing.stories.tsx",lineNumber:165,columnNumber:17},void 0)}},subRow:{keyOfColumnInSubRow:"q2",editingCell:{component:"inputNumber"}}},{key:"q3",name:"Q3",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q3",editingCell:{component:"inputNumber",error:{value(n,l){return!0}}}}},{key:"q4",name:"Q4",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q4",editingCell:{component:"inputNumber"}}}],[]),d=u.useMemo(()=>({tribeOptions:x.map(n=>({text:n,value:n})),productOptions:R.map(n=>({text:n,value:n}))}),[]);return o.jsxDEV(N,{tableConfig:{containerStyle:{height:"700px"},fullScreenEnabled:!0,rowSize:{showInControl:!0,default:"big"},editing:{onRowsChange:p,rowKeyGetter:n=>`${n.id}`,rowEditable:n=>n.block!==t[1]},subRows:{getSubRows:n=>n==null?void 0:n.subRows,rowKeyGetter:n=>n.id},resizableColumn:!0},columnConfig:c,rows:m,rowContextValue:d},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.editing/Table.editing.stories.tsx",lineNumber:225,columnNumber:7},void 0)}},r={...h({preCode:E,previewSource:"shown"}),render:()=>{const[m,p]=u.useState(()=>f()),c=u.useMemo(()=>[{key:"block",name:"Блок",editingCell:{editable:e=>e.block===t[1],error:{value:e=>e.block===t[0]},component:"select",options:{type:"constant",options:t.map(e=>({text:e,value:e}))}},subRow:{keyOfColumnInSubRow:e=>{switch(e){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},editingCell:{component:"inputString",inputProps:{placeholder:"Введите значение"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1},resizable:!0},{key:"blockActivity",name:"Активность блока",editingCell:{component:"inputString"}},{key:"tribe",name:"Трайб",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"tribeOptions"},selectProps:{listMaxHeight:"210px"}}},{key:"product",name:"Продукт",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"productOptions"}}},{key:"q1",name:"Q1",editingCell:{component:"inputNumber",inputProps:{placeholder:"Введите значение"}},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" ",alignContent:"right",minimumFractionDigits:2,maximumFractionDigits:2},subRow:{keyOfColumnInSubRow:"q1",editingCell:{component:"inputNumber"}}},{key:"q2",name:"Q2",editingCell:{component:({row:e,onRowChange:s,onClose:b})=>{const{rowSize:D}=O();return o.jsxDEV(T,{ref:I,value:e.q2,type:"number",size:v[D].input,onChange:q=>{s({...e,q2:+q.target.value})},onBlur:()=>b(!0,!1)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.editing/Table.editing.stories.tsx",lineNumber:361,columnNumber:17},void 0)}},subRow:{keyOfColumnInSubRow:"q2",editingCell:{component:"inputNumber"}}},{key:"q3",name:"Q3",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q3",editingCell:{component:"inputNumber",error:{value(e,s){return!0}}}}},{key:"q4",name:"Q4",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q4",editingCell:{component:"inputNumber"}}}],[]),d=u.useMemo(()=>({tribeOptions:x.map(e=>({text:e,value:e})),productOptions:R.map(e=>({text:e,value:e}))}),[]),[n,l]=u.useState(!1);return o.jsxDEV(a,{opened:n,onClose:()=>l(!1),children:o.jsxDEV(a.Main,{children:[o.jsxDEV(a.Header,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.editing/Table.editing.stories.tsx",lineNumber:424,columnNumber:11},void 0),o.jsxDEV(a.Content,{children:o.jsxDEV(N,{tableConfig:{containerStyle:{height:"700px",width:"700px"},fullScreenEnabled:!0,rowSize:{showInControl:!0,default:"big"},editing:{onRowsChange:p,rowKeyGetter:e=>`${e.id}`,rowEditable:e=>e.block!==t[1]},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},resizableColumn:!0},columnConfig:c,rows:m,rowContextValue:d},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.editing/Table.editing.stories.tsx",lineNumber:426,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.editing/Table.editing.stories.tsx",lineNumber:425,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.editing/Table.editing.stories.tsx",lineNumber:423,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.editing/Table.editing.stories.tsx",lineNumber:422,columnNumber:7},void 0)}};var C,w,g;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(g=(w=i.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var y,S,k;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(k=(S=r.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const A=["Editing","EditingInModal"],L=Object.freeze(Object.defineProperty({__proto__:null,Editing:i,EditingInModal:r,__namedExportsOrder:A,default:F},Symbol.toStringTag,{value:"Module"}));export{L as T};
