import{r as i,j as r}from"./react-CAOzMBF_.js";import{c as I,F as x,b as k}from"./tableData-DVJFoYoT.js";import A from"./DocStoryTemplate-Cf946dgV.js";import{s as h}from"./storySourceDoc-tVKyHcEN.js";import{D as T}from"./DatePicker-B0Zo2kx2.js";import{M as p}from"./ModalDF-DIfvprhr.js";import{j as w,f as V}from"./Table-BQHrw1K6.js";import{T as R}from"./TextField-DpKf-85P.js";import{ae as M}from"./@salutejs/sdds-finai-CKhMjg07.js";const $={title:"Локальные компоненты/Table/Filtering/Simple",tags:["!autodocs"],parameters:{docs:{page:A}}},D=`
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
`,u={...h({preCode:D,previewSource:"shown"}),render:()=>{const[c]=i.useState(()=>{const t=k(42);return I().map(n=>({...n,id:Math.floor(t()*1e3),date:(()=>{const a=new Date(x+(Math.floor(t()*61)-30)*864e5);return`${String(a.getDate()).padStart(2,"0")}.${String(a.getMonth()+1).padStart(2,"0")}.${a.getFullYear()}`})()}))}),m=i.useMemo(()=>[{key:"id",name:"ID",filtering:{component:"input",filter:"startWith",valueInRow:t=>t.id,keyInFilterState:"id"}},{key:"date",name:"Date",filtering:{component:"custom",customRender:t=>{const{headerContextState:{filters:n,setFilters:a}}=t;return r.jsx(M,{value:n==null?void 0:n.date,onChangeValue:e=>{a&&a(l=>({...l,date:e}))}})},filter:(t,n)=>t?n===t:!0,valueInRow:t=>t.date,compareWithClearedValue:(t,n)=>t===n,keyInFilterState:"date"}},{key:"task",name:"Title",filtering:{component:"input",filter:"includes",valueInRow:t=>`${t.task} ${t.id}`,keyInFilterState:"task"}},{key:"priority",name:"Priority",filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:t=>t.priority,filter:{typeOfValue:"single",filteringType:(t,n)=>t!=="All"?n===t:!0}}},{key:"issueType",name:"Issue Type",filtering:{beforeList(t){return r.jsx(w,{$size:t.headerContextState.rowSize,children:"custom beforeList"})},component:"select",selectOptions:{type:"stateInHeaderContext",optionsKeyInHeaderContext:"issueTypeOptions"},keyInFilterState:"issueType",valueInRow:t=>t.issueType,filter:{typeOfValue:"multiple",filteringType:(t,n)=>!t.length||t.some(a=>a===n)}}},{key:"complete",name:"% Complete",filtering:{component:"input",keyInFilterState:"complete",valueInRow:t=>t.complete,filter:(t,n)=>(+n||0)>=(+t||0)}}],[]),f=i.useState({id:"",task:"",priority:"All",issueType:[],complete:"",date:"",globalFilter:""}),g=i.useMemo(()=>({issueTypeOptions:[{text:"Bug",value:"Bug"},{text:"Improvement",value:"Improvement"},{text:"Epic",value:"Epic"},{text:"Story",value:"Story"}]}),[]);return r.jsx(V,{tableConfig:{containerStyle:{height:"700px"},filtering:{state:f,filtersInfo:{id:{label:"id",clearedValue:""},task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:""},date:{label:"Дата",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}},sidebarConfig:{order:["globalFilter","date"],items:{date:{label:"Some label for date",customRenderFn:(t,n)=>r.jsx(T,{value:t==null?void 0:t.date,onCommitDate:a=>{n&&!(a instanceof Date)&&n(e=>({...e,date:a}))},size:"s",style:{width:"100%"}})},task:{label:"Some label for task"},globalFilter:{label:"Some global filter",customRenderFn:(t,n)=>r.jsx(R,{value:t.globalFilter,onChange:a=>{n(e=>({...e,globalFilter:a.target.value}))}})}}}}},columnConfig:m,rows:c,headerContextValue:g})}},d={...h({preCode:D,previewSource:"shown"}),render:()=>{const[c]=i.useState(()=>{const e=k(42);return I().map(l=>({...l,id:Math.floor(e()*1e3),date:(()=>{const o=new Date(x+(Math.floor(e()*61)-30)*864e5);return`${String(o.getDate()).padStart(2,"0")}.${String(o.getMonth()+1).padStart(2,"0")}.${o.getFullYear()}`})()}))}),m=i.useMemo(()=>[{key:"id",name:"ID",filtering:{component:"input",filter:"startWith",valueInRow:e=>e.id,keyInFilterState:"id"}},{key:"date",name:"Date",filtering:{component:"custom",customRender:e=>{const{headerContextState:{filters:l,setFilters:o}}=e;return r.jsx(M,{value:l==null?void 0:l.date,onChangeValue:s=>{o&&o(O=>({...O,date:s}))}})},filter:(e,l)=>e?l===e:!0,valueInRow:e=>e.date,compareWithClearedValue:(e,l)=>e===l,keyInFilterState:"date"}},{key:"taskParent",name:"taskParent",children:[{key:"task",name:"Title 22asdf asdfsdff ddd ",filtering:{component:"input",filter:"includes",valueInRow:e=>`${e.task} ${e.id}`,keyInFilterState:"task"}},{key:"priority",name:"Priority",filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:e=>e.priority,filter:{typeOfValue:"single",filteringType:(e,l)=>e!=="All"?l===e:!0}}}]},{key:"issueType",name:"Issue Type",filtering:{beforeList(e){return r.jsx(w,{$size:e.headerContextState.rowSize,children:"custom beforeList"})},component:"select",selectOptions:{type:"stateInHeaderContext",optionsKeyInHeaderContext:"issueTypeOptions"},keyInFilterState:"issueType",valueInRow:e=>e.issueType,filter:{typeOfValue:"multiple",filteringType:(e,l)=>!e.length||e.some(o=>o===l)}}},{key:"complete",name:"% Complete",filtering:{component:"input",keyInFilterState:"complete",valueInRow:e=>e.complete,filter:(e,l)=>(+l||0)>=(+e||0)}}],[]),f=i.useState({id:"",task:"",priority:"All",issueType:[],complete:"",date:"",globalFilter:""}),g=i.useMemo(()=>({issueTypeOptions:[{text:"Bug",value:"Bug"},{text:"Improvement",value:"Improvement"},{text:"Epic",value:"Epic"},{text:"Story",value:"Story"}]}),[]),t=r.jsx(V,{tableConfig:{containerStyle:{height:"700px"},filtering:{state:f,filtersInfo:{id:{label:"id",clearedValue:""},task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:""},date:{label:"Дата",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}},sidebarConfig:{order:["globalFilter","date"],items:{date:{label:"Some label for date",customRenderFn:(e,l)=>r.jsx(T,{value:e==null?void 0:e.date,onCommitDate:o=>{l&&!(o instanceof Date)&&l(s=>({...s,date:o}))},size:"s",style:{width:"100%"}})},task:{label:"Some label for task"},globalFilter:{label:"Some global filter",customRenderFn:(e,l)=>r.jsx(R,{value:e.globalFilter,onChange:o=>{l(s=>({...s,globalFilter:o.target.value}))}})}}}}},columnConfig:m,rows:c,headerContextValue:g}),[n,a]=i.useState(!1);return r.jsx(p,{opened:n,isFocusTrapped:!1,onClose:()=>a(!1),children:r.jsxs(p.Main,{children:[r.jsx(p.Header,{}),r.jsx(p.Content,{$css:{"&&":{overflow:"visible"}},children:t})]})})}};var y,v,S;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(v=u.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var b,F,C;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(C=(F=d.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};const L=["Filtering","FilteringInModal"],K=Object.freeze(Object.defineProperty({__proto__:null,Filtering:u,FilteringInModal:d,__namedExportsOrder:L,default:$},Symbol.toStringTag,{value:"Module"}));export{K as T};
