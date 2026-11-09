import{r as o,d as r}from"./react-D2T61mpp.js";import{c as F,F as h,b as I}from"./tableData-DVJFoYoT.js";import O from"./DocStoryTemplate-Cq0URnfA.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{cs as A,cp as $}from"./vendor-Dw3RoERu.js";import{D as w}from"./DatePicker-Bkl9IpHS.js";import{M as c}from"./ModalDF-DSkBL87C.js";import{j as V,f as D}from"./Table-CHnpjPRm.js";import{T as M}from"./TextField-D0cma8Pk.js";import{ae as R}from"./@salutejs/sdds-finai-BwLjIrVs.js";const L={title:"Локальные компоненты/Table/Filtering/Simple",tags:["!autodocs"],parameters:{docs:{page:O}}},N=`
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
`,d={...C({preCode:N,previewSource:"shown"}),render:()=>{const[s]=o.useState(()=>{const t=I(42);return F().map(n=>({...n,id:Math.floor(t()*1e3),date:(()=>{const a=new Date(h+(Math.floor(t()*61)-30)*864e5);return`${String(a.getDate()).padStart(2,"0")}.${String(a.getMonth()+1).padStart(2,"0")}.${a.getFullYear()}`})()}))}),p=o.useMemo(()=>[{key:"id",name:"ID",filtering:{component:"input",filter:"startWith",valueInRow:t=>t.id,keyInFilterState:"id"}},{key:"date",name:"Date",filtering:{component:"custom",customRender:t=>{const{headerContextState:{filters:n,setFilters:a}}=t;return r.jsxDEV(R,{value:n==null?void 0:n.date,onChangeValue:e=>{a&&a(l=>({...l,date:e}))}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:104,columnNumber:17},void 0)},filter:(t,n)=>t?n===t:!0,valueInRow:t=>t.date,compareWithClearedValue:(t,n)=>t===n,keyInFilterState:"date"}},{key:"task",name:"Title",filtering:{component:"input",filter:"includes",valueInRow:t=>`${t.task} ${t.id}`,keyInFilterState:"task"}},{key:"priority",name:"Priority",filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:t=>t.priority,filter:{typeOfValue:"single",filteringType:(t,n)=>t!=="All"?n===t:!0}}},{key:"issueType",name:"Issue Type",filtering:{beforeList(t){return r.jsxDEV(V,{$size:t.headerContextState.rowSize,children:"custom beforeList"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:166,columnNumber:17},this)},component:"select",selectOptions:{type:"stateInHeaderContext",optionsKeyInHeaderContext:"issueTypeOptions"},keyInFilterState:"issueType",valueInRow:t=>t.issueType,filter:{typeOfValue:"multiple",filteringType:(t,n)=>!t.length||t.some(a=>a===n)}}},{key:"complete",name:"% Complete",filtering:{component:"input",keyInFilterState:"complete",valueInRow:t=>t.complete,filter:(t,n)=>(+n||0)>=(+t||0)}}],[]),f=o.useState({id:"",task:"",priority:"All",issueType:[],complete:"",date:"",globalFilter:""}),g=o.useMemo(()=>({issueTypeOptions:[{text:"Bug",value:"Bug"},{text:"Improvement",value:"Improvement"},{text:"Epic",value:"Epic"},{text:"Story",value:"Story"}]}),[]);return r.jsxDEV(D,{tableConfig:{containerStyle:{height:"700px"},filtering:{state:f,filtersInfo:{id:{label:"id",clearedValue:""},task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:""},date:{label:"Дата",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}},sidebarConfig:{order:["globalFilter","date"],items:{date:{label:"Some label for date",customRenderFn:(t,n)=>r.jsxDEV(w,{value:t==null?void 0:t.date,onCommitDate:a=>{n&&!(a instanceof Date)&&n(e=>({...e,date:a}))},size:"s",style:{width:"100%"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:265,columnNumber:21},void 0)},task:{label:"Some label for task"},globalFilter:{label:"Some global filter",customRenderFn:(t,n)=>r.jsxDEV(M,{value:t.globalFilter,onChange:a=>{n(e=>({...e,globalFilter:a.target.value}))}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:287,columnNumber:21},void 0)}}}}},columnConfig:p,rows:s,headerContextValue:g},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:224,columnNumber:7},void 0)}},b=C({preCode:N,previewSource:"shown"}),m={...b,parameters:{..."parameters"in b?b.parameters:{},screenshot:{capture:"page",keepState:!0}},play:async({canvasElement:s})=>{await A(await $(s.ownerDocument.body).findByTestId("filtering-modal-content")).toBeVisible()},render:()=>{const[s]=o.useState(()=>{const e=I(42);return F().map(l=>({...l,id:Math.floor(e()*1e3),date:(()=>{const i=new Date(h+(Math.floor(e()*61)-30)*864e5);return`${String(i.getDate()).padStart(2,"0")}.${String(i.getMonth()+1).padStart(2,"0")}.${i.getFullYear()}`})()}))}),p=o.useMemo(()=>[{key:"id",name:"ID",filtering:{component:"input",filter:"startWith",valueInRow:e=>e.id,keyInFilterState:"id"}},{key:"date",name:"Date",filtering:{component:"custom",customRender:e=>{const{headerContextState:{filters:l,setFilters:i}}=e;return r.jsxDEV(R,{value:l==null?void 0:l.date,onChangeValue:u=>{i&&i(E=>({...E,date:u}))}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:370,columnNumber:17},void 0)},filter:(e,l)=>e?l===e:!0,valueInRow:e=>e.date,compareWithClearedValue:(e,l)=>e===l,keyInFilterState:"date"}},{key:"taskParent",name:"taskParent",children:[{key:"task",name:"Title 22asdf asdfsdff ddd ",filtering:{component:"input",filter:"includes",valueInRow:e=>`${e.task} ${e.id}`,keyInFilterState:"task"}},{key:"priority",name:"Priority",filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:e=>e.priority,filter:{typeOfValue:"single",filteringType:(e,l)=>e!=="All"?l===e:!0}}}]},{key:"issueType",name:"Issue Type",filtering:{beforeList(e){return r.jsxDEV(V,{$size:e.headerContextState.rowSize,children:"custom beforeList"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:438,columnNumber:17},this)},component:"select",selectOptions:{type:"stateInHeaderContext",optionsKeyInHeaderContext:"issueTypeOptions"},keyInFilterState:"issueType",valueInRow:e=>e.issueType,filter:{typeOfValue:"multiple",filteringType:(e,l)=>!e.length||e.some(i=>i===l)}}},{key:"complete",name:"% Complete",filtering:{component:"input",keyInFilterState:"complete",valueInRow:e=>e.complete,filter:(e,l)=>(+l||0)>=(+e||0)}}],[]),f=o.useState({id:"",task:"",priority:"All",issueType:[],complete:"",date:"",globalFilter:""}),g=o.useMemo(()=>({issueTypeOptions:[{text:"Bug",value:"Bug"},{text:"Improvement",value:"Improvement"},{text:"Epic",value:"Epic"},{text:"Story",value:"Story"}]}),[]),t=r.jsxDEV(D,{tableConfig:{containerStyle:{height:"700px"},filtering:{state:f,filtersInfo:{id:{label:"id",clearedValue:""},task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:""},date:{label:"Дата",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}},sidebarConfig:{order:["globalFilter","date"],items:{date:{label:"Some label for date",customRenderFn:(e,l)=>r.jsxDEV(w,{value:e==null?void 0:e.date,onCommitDate:i=>{l&&!(i instanceof Date)&&l(u=>({...u,date:i}))},size:"s",style:{width:"100%"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:537,columnNumber:21},void 0)},task:{label:"Some label for task"},globalFilter:{label:"Some global filter",customRenderFn:(e,l)=>r.jsxDEV(M,{value:e.globalFilter,onChange:i=>{l(u=>({...u,globalFilter:i.target.value}))}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:559,columnNumber:21},void 0)}}}}},columnConfig:p,rows:s,headerContextValue:g},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:496,columnNumber:7},void 0),[n,a]=o.useState(!0);return r.jsxDEV(c,{opened:n,isFocusTrapped:!1,onClose:()=>a(!1),children:r.jsxDEV(c.Main,{children:[r.jsxDEV(c.Header,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:589,columnNumber:11},void 0),r.jsxDEV(c.Content,{"data-testid":"filtering-modal-content",$css:{"&&":{overflow:"visible"}},children:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:590,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:588,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.filtering.stories.tsx",lineNumber:583,columnNumber:7},void 0)}};var y,v,k;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(k=(v=d.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var S,T,x;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(x=(T=m.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const H=["Filtering","FilteringInModal"],J=Object.freeze(Object.defineProperty({__proto__:null,Filtering:d,FilteringInModal:m,__namedExportsOrder:H,default:L},Symbol.toStringTag,{value:"Module"}));export{J as T};
