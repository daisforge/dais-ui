import{r as i,j as r}from"./react-CAOzMBF_.js";import{c as x,F as k,b as h}from"./tableData-DVJFoYoT.js";import $ from"./DocStoryTemplate-DUx_jmLE.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{cw as L,cp as E}from"./vendor-CvBXOjQ8.js";import{D as T}from"./DatePicker-ln2Mon9y.js";import{M as c}from"./ModalDF-DGdz2a6t.js";import{j as V,f as M}from"./Table-iL5qaMm-.js";import{T as R}from"./TextField-DO4OQIdm.js";import{ae as D}from"./@salutejs/sdds-finai-CrMFu5No.js";const j={title:"Локальные компоненты/Table/Filtering/Simple",tags:["!autodocs"],parameters:{docs:{page:$}}},O=`
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
`,d={...w({preCode:O,previewSource:"shown"}),render:()=>{const[s]=i.useState(()=>{const t=h(42);return x().map(n=>({...n,id:Math.floor(t()*1e3),date:(()=>{const a=new Date(k+(Math.floor(t()*61)-30)*864e5);return`${String(a.getDate()).padStart(2,"0")}.${String(a.getMonth()+1).padStart(2,"0")}.${a.getFullYear()}`})()}))}),m=i.useMemo(()=>[{key:"id",name:"ID",filtering:{component:"input",filter:"startWith",valueInRow:t=>t.id,keyInFilterState:"id"}},{key:"date",name:"Date",filtering:{component:"custom",customRender:t=>{const{headerContextState:{filters:n,setFilters:a}}=t;return r.jsx(D,{value:n==null?void 0:n.date,onChangeValue:e=>{a&&a(l=>({...l,date:e}))}})},filter:(t,n)=>t?n===t:!0,valueInRow:t=>t.date,compareWithClearedValue:(t,n)=>t===n,keyInFilterState:"date"}},{key:"task",name:"Title",filtering:{component:"input",filter:"includes",valueInRow:t=>`${t.task} ${t.id}`,keyInFilterState:"task"}},{key:"priority",name:"Priority",filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:t=>t.priority,filter:{typeOfValue:"single",filteringType:(t,n)=>t!=="All"?n===t:!0}}},{key:"issueType",name:"Issue Type",filtering:{beforeList(t){return r.jsx(V,{$size:t.headerContextState.rowSize,children:"custom beforeList"})},component:"select",selectOptions:{type:"stateInHeaderContext",optionsKeyInHeaderContext:"issueTypeOptions"},keyInFilterState:"issueType",valueInRow:t=>t.issueType,filter:{typeOfValue:"multiple",filteringType:(t,n)=>!t.length||t.some(a=>a===n)}}},{key:"complete",name:"% Complete",filtering:{component:"input",keyInFilterState:"complete",valueInRow:t=>t.complete,filter:(t,n)=>(+n||0)>=(+t||0)}}],[]),f=i.useState({id:"",task:"",priority:"All",issueType:[],complete:"",date:"",globalFilter:""}),g=i.useMemo(()=>({issueTypeOptions:[{text:"Bug",value:"Bug"},{text:"Improvement",value:"Improvement"},{text:"Epic",value:"Epic"},{text:"Story",value:"Story"}]}),[]);return r.jsx(M,{tableConfig:{containerStyle:{height:"700px"},filtering:{state:f,filtersInfo:{id:{label:"id",clearedValue:""},task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:""},date:{label:"Дата",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}},sidebarConfig:{order:["globalFilter","date"],items:{date:{label:"Some label for date",customRenderFn:(t,n)=>r.jsx(T,{value:t==null?void 0:t.date,onCommitDate:a=>{n&&!(a instanceof Date)&&n(e=>({...e,date:a}))},size:"s",style:{width:"100%"}})},task:{label:"Some label for task"},globalFilter:{label:"Some global filter",customRenderFn:(t,n)=>r.jsx(R,{value:t.globalFilter,onChange:a=>{n(e=>({...e,globalFilter:a.target.value}))}})}}}}},columnConfig:m,rows:s,headerContextValue:g})}},y=w({preCode:O,previewSource:"shown"}),p={...y,parameters:{..."parameters"in y?y.parameters:{},screenshot:{capture:"page",keepState:!0}},play:async({canvasElement:s})=>{await L(await E(s.ownerDocument.body).findByTestId("filtering-modal-content")).toBeVisible()},render:()=>{const[s]=i.useState(()=>{const e=h(42);return x().map(l=>({...l,id:Math.floor(e()*1e3),date:(()=>{const o=new Date(k+(Math.floor(e()*61)-30)*864e5);return`${String(o.getDate()).padStart(2,"0")}.${String(o.getMonth()+1).padStart(2,"0")}.${o.getFullYear()}`})()}))}),m=i.useMemo(()=>[{key:"id",name:"ID",filtering:{component:"input",filter:"startWith",valueInRow:e=>e.id,keyInFilterState:"id"}},{key:"date",name:"Date",filtering:{component:"custom",customRender:e=>{const{headerContextState:{filters:l,setFilters:o}}=e;return r.jsx(D,{value:l==null?void 0:l.date,onChangeValue:u=>{o&&o(A=>({...A,date:u}))}})},filter:(e,l)=>e?l===e:!0,valueInRow:e=>e.date,compareWithClearedValue:(e,l)=>e===l,keyInFilterState:"date"}},{key:"taskParent",name:"taskParent",children:[{key:"task",name:"Title 22asdf asdfsdff ddd ",filtering:{component:"input",filter:"includes",valueInRow:e=>`${e.task} ${e.id}`,keyInFilterState:"task"}},{key:"priority",name:"Priority",filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:e=>e.priority,filter:{typeOfValue:"single",filteringType:(e,l)=>e!=="All"?l===e:!0}}}]},{key:"issueType",name:"Issue Type",filtering:{beforeList(e){return r.jsx(V,{$size:e.headerContextState.rowSize,children:"custom beforeList"})},component:"select",selectOptions:{type:"stateInHeaderContext",optionsKeyInHeaderContext:"issueTypeOptions"},keyInFilterState:"issueType",valueInRow:e=>e.issueType,filter:{typeOfValue:"multiple",filteringType:(e,l)=>!e.length||e.some(o=>o===l)}}},{key:"complete",name:"% Complete",filtering:{component:"input",keyInFilterState:"complete",valueInRow:e=>e.complete,filter:(e,l)=>(+l||0)>=(+e||0)}}],[]),f=i.useState({id:"",task:"",priority:"All",issueType:[],complete:"",date:"",globalFilter:""}),g=i.useMemo(()=>({issueTypeOptions:[{text:"Bug",value:"Bug"},{text:"Improvement",value:"Improvement"},{text:"Epic",value:"Epic"},{text:"Story",value:"Story"}]}),[]),t=r.jsx(M,{tableConfig:{containerStyle:{height:"700px"},filtering:{state:f,filtersInfo:{id:{label:"id",clearedValue:""},task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:""},date:{label:"Дата",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}},sidebarConfig:{order:["globalFilter","date"],items:{date:{label:"Some label for date",customRenderFn:(e,l)=>r.jsx(T,{value:e==null?void 0:e.date,onCommitDate:o=>{l&&!(o instanceof Date)&&l(u=>({...u,date:o}))},size:"s",style:{width:"100%"}})},task:{label:"Some label for task"},globalFilter:{label:"Some global filter",customRenderFn:(e,l)=>r.jsx(R,{value:e.globalFilter,onChange:o=>{l(u=>({...u,globalFilter:o.target.value}))}})}}}}},columnConfig:m,rows:s,headerContextValue:g}),[n,a]=i.useState(!0);return r.jsx(c,{opened:n,isFocusTrapped:!1,onClose:()=>a(!1),children:r.jsxs(c.Main,{children:[r.jsx(c.Header,{}),r.jsx(c.Content,{"data-testid":"filtering-modal-content",$css:{"&&":{overflow:"visible"}},children:t})]})})}};var v,S,b;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(() => {
      const seededRandom = createSeededRandom(42);
      return createRows().map(el => ({
        ...el,
        id: Math.floor(seededRandom() * 1000),
        date: (() => {
          const date = new Date(FIXED_DATE_TIMESTAMP + (Math.floor(seededRandom() * 61) - 30) * 86400000);
          return \`\${String(date.getDate()).padStart(2, '0')}.\${String(date.getMonth() + 1).padStart(2, '0')}.\${date.getFullYear()}\`;
        })()
      }));
    });
    const columnConfig = useMemo<readonly ColumnConfig<Row & {
      date: string;
    }>[]>(() => [{
      key: 'id',
      name: 'ID',
      filtering: {
        component: 'input',
        filter: 'startWith',
        valueInRow: r => r.id,
        keyInFilterState: 'id'
      }
    }, {
      key: 'date',
      name: 'Date',
      filtering: {
        component: 'custom',
        customRender: props => {
          const {
            headerContextState: {
              filters,
              setFilters
            }
          } = props;
          return <Calendar value={filters?.['date']} onChangeValue={v => {
            if (setFilters) setFilters(prev => ({
              ...prev,
              date: v
            }));
          }} />;
        },
        filter: (filterValue, rowValue) => filterValue ? rowValue === filterValue : true,
        valueInRow: r => r.date,
        compareWithClearedValue: (clearedValue, currV) => clearedValue === currV,
        keyInFilterState: 'date'
      }
    }, {
      key: 'task',
      name: 'Title',
      filtering: {
        component: 'input',
        filter: 'includes',
        valueInRow: r => \`\${r.task} \${r.id}\`,
        keyInFilterState: 'task'
      }
    }, {
      key: 'priority',
      name: 'Priority',
      filtering: {
        component: 'select',
        selectOptions: {
          type: 'constant',
          options: [{
            value: 'All',
            text: 'All'
          }, {
            value: 'High',
            text: 'High'
          }, {
            value: 'Critical',
            text: 'Critical'
          }, {
            value: 'Medium',
            text: 'Medium'
          }, {
            value: 'Low',
            text: 'Low'
          }]
        },
        keyInFilterState: 'priority',
        valueInRow: r => r.priority,
        filter: {
          typeOfValue: 'single',
          filteringType: (fv, rv) => fv !== 'All' ? rv === fv : true
        }
      }
    }, {
      key: 'issueType',
      name: 'Issue Type',
      filtering: {
        beforeList(props) {
          return <TableFilterSelectListItem $size={props.headerContextState.rowSize}>
                  custom beforeList
                </TableFilterSelectListItem>;
        },
        component: 'select',
        selectOptions: {
          type: 'stateInHeaderContext',
          optionsKeyInHeaderContext: 'issueTypeOptions'
        },
        keyInFilterState: 'issueType',
        valueInRow: r => r.issueType,
        filter: {
          typeOfValue: 'multiple',
          filteringType: (fv, rv) => !fv.length || fv.some(fvCurr => fvCurr === rv)
        }
      }
    }, {
      key: 'complete',
      name: '% Complete',
      filtering: {
        component: 'input',
        keyInFilterState: 'complete',
        valueInRow: r => r.complete,
        filter: (fv, rv) => (+rv || 0) >= (+fv || 0)
      }
    }], []);
    const filteringStateAndSetter = useState({
      id: '',
      task: '',
      priority: 'All',
      issueType: [],
      complete: '',
      date: '',
      globalFilter: ''
    });
    const headerContextValue = useMemo(() => ({
      issueTypeOptions: [{
        text: 'Bug',
        value: 'Bug'
      }, {
        text: 'Improvement',
        value: 'Improvement'
      }, {
        text: 'Epic',
        value: 'Epic'
      }, {
        text: 'Story',
        value: 'Story'
      }]
    }), []);
    return <Table tableConfig={{
      containerStyle: {
        height: '700px'
      },
      filtering: {
        state: filteringStateAndSetter,
        filtersInfo: {
          id: {
            label: 'id',
            clearedValue: ''
          },
          task: {
            label: 'task',
            clearedValue: ''
          },
          priority: {
            label: 'Some Label',
            clearedValue: 'All'
          },
          issueType: {
            label: 'issueType',
            clearedValue: []
          },
          complete: {
            label: 'complete',
            clearedValue: ''
          },
          date: {
            label: 'Дата',
            clearedValue: ''
          },
          globalFilter: {
            label: 'Global filter',
            clearedValue: ''
          }
        },
        sidebarConfig: {
          order: ['globalFilter', 'date'],
          items: {
            date: {
              label: 'Some label for date',
              customRenderFn: (filters, setFilters) => <DatePicker value={filters?.['date']} onCommitDate={v => {
                if (setFilters && !(v instanceof Date)) setFilters(prev => ({
                  ...prev,
                  date: v
                }));
              }} size="s" style={{
                width: '100%'
              }} />
            },
            task: {
              label: 'Some label for task'
            },
            globalFilter: {
              label: 'Some global filter',
              customRenderFn: (filters, setFilters) => <TextField value={filters['globalFilter']} onChange={e => {
                setFilters(prev => ({
                  ...prev,
                  globalFilter: e.target.value
                }));
              }} />
            }
          }
        }
      }
    }} columnConfig={columnConfig} rows={rows} headerContextValue={headerContextValue} />;
  }
}`,...(b=(S=d.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var F,I,C;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...filteringInModalDocs,
  parameters: {
    ...('parameters' in filteringInModalDocs ? filteringInModalDocs.parameters : {}),
    screenshot: {
      capture: 'page',
      keepState: true
    }
  },
  play: async ({
    canvasElement
  }) => {
    await expect(await within(canvasElement.ownerDocument.body).findByTestId('filtering-modal-content')).toBeVisible();
  },
  render: () => {
    const [rows] = useState(() => {
      const seededRandom = createSeededRandom(42);
      return createRows().map(el => ({
        ...el,
        id: Math.floor(seededRandom() * 1000),
        date: (() => {
          const date = new Date(FIXED_DATE_TIMESTAMP + (Math.floor(seededRandom() * 61) - 30) * 86400000);
          return \`\${String(date.getDate()).padStart(2, '0')}.\${String(date.getMonth() + 1).padStart(2, '0')}.\${date.getFullYear()}\`;
        })()
      }));
    });
    const columnConfig = useMemo((): readonly ColumnOrColumnGroupConfig<Row & {
      date: string;
    }>[] => [{
      key: 'id',
      name: 'ID',
      filtering: {
        component: 'input',
        filter: 'startWith',
        valueInRow: r => r.id,
        keyInFilterState: 'id'
      }
    }, {
      key: 'date',
      name: 'Date',
      filtering: {
        component: 'custom',
        customRender: props => {
          const {
            headerContextState: {
              filters,
              setFilters
            }
          } = props;
          return <Calendar value={filters?.['date']} onChangeValue={v => {
            if (setFilters) setFilters(prev => ({
              ...prev,
              date: v
            }));
          }} />;
        },
        filter: (filterValue, rowValue) => filterValue ? rowValue === filterValue : true,
        valueInRow: r => r.date,
        compareWithClearedValue: (clearedValue, currV) => clearedValue === currV,
        keyInFilterState: 'date'
      }
    }, {
      key: 'taskParent',
      name: 'taskParent',
      children: [{
        key: 'task',
        name: 'Title 22asdf asdfsdff ddd ',
        filtering: {
          component: 'input',
          filter: 'includes',
          valueInRow: r => \`\${r.task} \${r.id}\`,
          keyInFilterState: 'task'
        }
      }, {
        key: 'priority',
        name: 'Priority',
        filtering: {
          component: 'select',
          selectOptions: {
            type: 'constant',
            options: [{
              value: 'All',
              text: 'All'
            }, {
              value: 'High',
              text: 'High'
            }, {
              value: 'Critical',
              text: 'Critical'
            }, {
              value: 'Medium',
              text: 'Medium'
            }, {
              value: 'Low',
              text: 'Low'
            }]
          },
          keyInFilterState: 'priority',
          valueInRow: r => r.priority,
          filter: {
            typeOfValue: 'single',
            filteringType: (fv, rv) => fv !== 'All' ? rv === fv : true
          }
        }
      }]
    }, {
      key: 'issueType',
      name: 'Issue Type',
      filtering: {
        beforeList(props) {
          return <TableFilterSelectListItem $size={props.headerContextState.rowSize}>
                  custom beforeList
                </TableFilterSelectListItem>;
        },
        component: 'select',
        selectOptions: {
          type: 'stateInHeaderContext',
          optionsKeyInHeaderContext: 'issueTypeOptions'
        },
        keyInFilterState: 'issueType',
        valueInRow: r => r.issueType,
        filter: {
          typeOfValue: 'multiple',
          filteringType: (fv, rv) => !fv.length || fv.some(fvCurr => fvCurr === rv)
        }
      }
    }, {
      key: 'complete',
      name: '% Complete',
      filtering: {
        component: 'input',
        keyInFilterState: 'complete',
        valueInRow: r => r.complete,
        filter: (fv, rv) => (+rv || 0) >= (+fv || 0)
      }
    }], []);
    const filteringStateAndSetter = useState({
      id: '',
      task: '',
      priority: 'All',
      issueType: [],
      complete: '',
      date: '',
      globalFilter: ''
    });
    const headerContextValue = useMemo(() => ({
      issueTypeOptions: [{
        text: 'Bug',
        value: 'Bug'
      }, {
        text: 'Improvement',
        value: 'Improvement'
      }, {
        text: 'Epic',
        value: 'Epic'
      }, {
        text: 'Story',
        value: 'Story'
      }]
    }), []);
    const tableJsx = <Table tableConfig={{
      containerStyle: {
        height: '700px'
      },
      filtering: {
        state: filteringStateAndSetter,
        filtersInfo: {
          id: {
            label: 'id',
            clearedValue: ''
          },
          task: {
            label: 'task',
            clearedValue: ''
          },
          priority: {
            label: 'Some Label',
            clearedValue: 'All'
          },
          issueType: {
            label: 'issueType',
            clearedValue: []
          },
          complete: {
            label: 'complete',
            clearedValue: ''
          },
          date: {
            label: 'Дата',
            clearedValue: ''
          },
          globalFilter: {
            label: 'Global filter',
            clearedValue: ''
          }
        },
        sidebarConfig: {
          order: ['globalFilter', 'date'],
          items: {
            date: {
              label: 'Some label for date',
              customRenderFn: (filters, setFilters) => <DatePicker value={filters?.['date']} onCommitDate={v => {
                if (setFilters && !(v instanceof Date)) setFilters(prev => ({
                  ...prev,
                  date: v
                }));
              }} size="s" style={{
                width: '100%'
              }} />
            },
            task: {
              label: 'Some label for task'
            },
            globalFilter: {
              label: 'Some global filter',
              customRenderFn: (filters, setFilters) => <TextField value={filters['globalFilter']} onChange={e => {
                setFilters(prev => ({
                  ...prev,
                  globalFilter: e.target.value
                }));
              }} />
            }
          }
        }
      }
    }} columnConfig={columnConfig} rows={rows} headerContextValue={headerContextValue} />;
    const [modalOpened, setModalOpened] = useState(true);
    return <ModalDF opened={modalOpened} isFocusTrapped={false} onClose={() => setModalOpened(false)}>
        <ModalDF.Main>
          <ModalDF.Header />
          <ModalDF.Content data-testid="filtering-modal-content" $css={{
          '&&': {
            overflow: 'visible'
          }
        }}>
            {tableJsx}
          </ModalDF.Content>
        </ModalDF.Main>
      </ModalDF>;
  }
}`,...(C=(I=p.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};const H=["Filtering","FilteringInModal"],Z=Object.freeze(Object.defineProperty({__proto__:null,Filtering:d,FilteringInModal:p,__namedExportsOrder:H,default:j},Symbol.toStringTag,{value:"Module"}));export{Z as T};
