import{r as o,d as r}from"./react-D2T61mpp.js";import{c as x,F,b as h}from"./tableData-UCfjiBCh.js";import O from"./DocStoryTemplate-3mARu1O0.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{D as I}from"./DatePicker-gLBexZW_.js";import{M as m}from"./ModalDF-Dqw-03ep.js";import{j as w,f as V}from"./Table-B0HDLHqg.js";import{T as D}from"./TextField-D82Varqr.js";import{ac as R}from"./@salutejs/sdds-finai-BQeC6SeV.js";const E={title:"Локальные компоненты/Table/Filtering/Simple",tags:["!autodocs"],parameters:{docs:{page:O}}},M=`
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
`,u={...C({preCode:M,previewSource:"shown"}),render:()=>{const[c]=o.useState(()=>{const t=h(42);return x().map(n=>({...n,id:Math.floor(t()*1e3),date:(()=>{const a=new Date(F+(Math.floor(t()*61)-30)*864e5);return`${String(a.getDate()).padStart(2,"0")}.${String(a.getMonth()+1).padStart(2,"0")}.${a.getFullYear()}`})()}))}),p=o.useMemo(()=>[{key:"id",name:"ID",filtering:{component:"input",filter:"startWith",valueInRow:t=>t.id,keyInFilterState:"id"}},{key:"date",name:"Date",filtering:{component:"custom",customRender:t=>{const{headerContextState:{filters:n,setFilters:a}}=t;return r.jsxDEV(R,{value:n==null?void 0:n.date,onChangeValue:e=>{a&&a(l=>({...l,date:e}))}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:103,columnNumber:17},void 0)},filter:(t,n)=>t?n===t:!0,valueInRow:t=>t.date,compareWithClearedValue:(t,n)=>t===n,keyInFilterState:"date"}},{key:"task",name:"Title",filtering:{component:"input",filter:"includes",valueInRow:t=>`${t.task} ${t.id}`,keyInFilterState:"task"}},{key:"priority",name:"Priority",filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:t=>t.priority,filter:{typeOfValue:"single",filteringType:(t,n)=>t!=="All"?n===t:!0}}},{key:"issueType",name:"Issue Type",filtering:{beforeList(t){return r.jsxDEV(w,{$size:t.headerContextState.rowSize,children:"custom beforeList"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:165,columnNumber:17},this)},component:"select",selectOptions:{type:"stateInHeaderContext",optionsKeyInHeaderContext:"issueTypeOptions"},keyInFilterState:"issueType",valueInRow:t=>t.issueType,filter:{typeOfValue:"multiple",filteringType:(t,n)=>!t.length||t.some(a=>a===n)}}},{key:"complete",name:"% Complete",filtering:{component:"input",keyInFilterState:"complete",valueInRow:t=>t.complete,filter:(t,n)=>(+n||0)>=(+t||0)}}],[]),f=o.useState({id:"",task:"",priority:"All",issueType:[],complete:"",date:"",globalFilter:""}),g=o.useMemo(()=>({issueTypeOptions:[{text:"Bug",value:"Bug"},{text:"Improvement",value:"Improvement"},{text:"Epic",value:"Epic"},{text:"Story",value:"Story"}]}),[]);return r.jsxDEV(V,{tableConfig:{containerStyle:{height:"700px"},filtering:{state:f,filtersInfo:{id:{label:"id",clearedValue:""},task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:""},date:{label:"Дата",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}},sidebarConfig:{order:["globalFilter","date"],items:{date:{label:"Some label for date",customRenderFn:(t,n)=>r.jsxDEV(I,{value:t==null?void 0:t.date,onCommitDate:a=>{n&&!(a instanceof Date)&&n(e=>({...e,date:a}))},size:"s",style:{width:"100%"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:264,columnNumber:21},void 0)},task:{label:"Some label for task"},globalFilter:{label:"Some global filter",customRenderFn:(t,n)=>r.jsxDEV(D,{value:t.globalFilter,onChange:a=>{n(e=>({...e,globalFilter:a.target.value}))}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:286,columnNumber:21},void 0)}}}}},columnConfig:p,rows:c,headerContextValue:g},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:223,columnNumber:7},void 0)}},d={...C({preCode:M,previewSource:"shown"}),render:()=>{const[c]=o.useState(()=>{const e=h(42);return x().map(l=>({...l,id:Math.floor(e()*1e3),date:(()=>{const i=new Date(F+(Math.floor(e()*61)-30)*864e5);return`${String(i.getDate()).padStart(2,"0")}.${String(i.getMonth()+1).padStart(2,"0")}.${i.getFullYear()}`})()}))}),p=o.useMemo(()=>[{key:"id",name:"ID",filtering:{component:"input",filter:"startWith",valueInRow:e=>e.id,keyInFilterState:"id"}},{key:"date",name:"Date",filtering:{component:"custom",customRender:e=>{const{headerContextState:{filters:l,setFilters:i}}=e;return r.jsxDEV(R,{value:l==null?void 0:l.date,onChangeValue:s=>{i&&i(N=>({...N,date:s}))}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:355,columnNumber:17},void 0)},filter:(e,l)=>e?l===e:!0,valueInRow:e=>e.date,compareWithClearedValue:(e,l)=>e===l,keyInFilterState:"date"}},{key:"taskParent",name:"taskParent",children:[{key:"task",name:"Title 22asdf asdfsdff ddd ",filtering:{component:"input",filter:"includes",valueInRow:e=>`${e.task} ${e.id}`,keyInFilterState:"task"}},{key:"priority",name:"Priority",filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:e=>e.priority,filter:{typeOfValue:"single",filteringType:(e,l)=>e!=="All"?l===e:!0}}}]},{key:"issueType",name:"Issue Type",filtering:{beforeList(e){return r.jsxDEV(w,{$size:e.headerContextState.rowSize,children:"custom beforeList"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:423,columnNumber:17},this)},component:"select",selectOptions:{type:"stateInHeaderContext",optionsKeyInHeaderContext:"issueTypeOptions"},keyInFilterState:"issueType",valueInRow:e=>e.issueType,filter:{typeOfValue:"multiple",filteringType:(e,l)=>!e.length||e.some(i=>i===l)}}},{key:"complete",name:"% Complete",filtering:{component:"input",keyInFilterState:"complete",valueInRow:e=>e.complete,filter:(e,l)=>(+l||0)>=(+e||0)}}],[]),f=o.useState({id:"",task:"",priority:"All",issueType:[],complete:"",date:"",globalFilter:""}),g=o.useMemo(()=>({issueTypeOptions:[{text:"Bug",value:"Bug"},{text:"Improvement",value:"Improvement"},{text:"Epic",value:"Epic"},{text:"Story",value:"Story"}]}),[]),t=r.jsxDEV(V,{tableConfig:{containerStyle:{height:"700px"},filtering:{state:f,filtersInfo:{id:{label:"id",clearedValue:""},task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:""},date:{label:"Дата",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}},sidebarConfig:{order:["globalFilter","date"],items:{date:{label:"Some label for date",customRenderFn:(e,l)=>r.jsxDEV(I,{value:e==null?void 0:e.date,onCommitDate:i=>{l&&!(i instanceof Date)&&l(s=>({...s,date:i}))},size:"s",style:{width:"100%"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:522,columnNumber:21},void 0)},task:{label:"Some label for task"},globalFilter:{label:"Some global filter",customRenderFn:(e,l)=>r.jsxDEV(D,{value:e.globalFilter,onChange:i=>{l(s=>({...s,globalFilter:i.target.value}))}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:544,columnNumber:21},void 0)}}}}},columnConfig:p,rows:c,headerContextValue:g},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:481,columnNumber:7},void 0),[n,a]=o.useState(!1);return r.jsxDEV(m,{opened:n,isFocusTrapped:!1,onClose:()=>a(!1),children:r.jsxDEV(m.Main,{children:[r.jsxDEV(m.Header,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:574,columnNumber:11},void 0),r.jsxDEV(m.Content,{$css:{"&&":{overflow:"visible"}},children:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:575,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:573,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:568,columnNumber:7},void 0)}};var b,y,v;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(y=u.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var k,S,T;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
    const [modalOpened, setModalOpened] = useState(false);
    return <ModalDF opened={modalOpened} isFocusTrapped={false} onClose={() => setModalOpened(false)}>
        <ModalDF.Main>
          <ModalDF.Header />
          <ModalDF.Content $css={{
          '&&': {
            overflow: 'visible'
          }
        }}>
            {tableJsx}
          </ModalDF.Content>
        </ModalDF.Main>
      </ModalDF>;
  }
}`,...(T=(S=d.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const A=["Filtering","FilteringInModal"],G=Object.freeze(Object.defineProperty({__proto__:null,Filtering:u,FilteringInModal:d,__namedExportsOrder:A,default:E},Symbol.toStringTag,{value:"Module"}));export{G as T};
