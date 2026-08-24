import{r as a,d as l}from"./react-D2T61mpp.js";import{c as v,F as b,b as C}from"./tableData-UCfjiBCh.js";import S from"./DocStoryTemplate-Dyp-m10i.js";import{s as T}from"./storySourceDoc-tVKyHcEN.js";import{b as h,T as k}from"./TableCanvas-C-wHbYcb.js";import{ad as x}from"./@salutejs/sdds-finai-8OhlszR8.js";import{tL as F}from"./@salutejs/plasma-icons-CWtohmdG.js";const I={title:"Локальные компоненты/TableCanvas/Filtering",tags:["!autodocs"],parameters:{docs:{page:S}}},w=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui';

`,r={...T({preCode:w,previewSource:"shown"}),name:"Filtering Table",render:()=>{const[u,d]=a.useState(!0),[c]=a.useState(()=>{const e=C(42);return v().map(t=>({...t,id:Math.floor(e()*1e3),date:(()=>{const n=new Date(b+(Math.floor(e()*61)-30)*864e5);return`${String(n.getDate()).padStart(2,"0")}.${String(n.getMonth()+1).padStart(2,"0")}.${n.getFullYear()}`})()}))}),p=a.useState({id:"",task:"",priority:"All",issueType:[],complete:"",globalFilter:"",date:void 0}),m=a.useMemo(()=>[{key:"id",name:"id"},{key:"task",name:"Title"},{key:"date",name:"Date",filtering:{component:"custom",customRender:e=>{const{headerContextState:{filters:t,setFilters:n}}=e;return l.jsxDEV(x,{value:t==null?void 0:t.date,onChangeValue:g=>{n&&n(y=>({...y,date:g}))}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:91,columnNumber:17},void 0)},filter:(e,t)=>e?t===e:!0,valueInRow:e=>e==null?void 0:e.date,compareWithClearedValue:(e,t)=>e===t,keyInFilterState:"date"}},{key:"priority",name:"Priority",filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:e=>e.priority,filter:{typeOfValue:"single",filteringType:(e,t)=>e!=="All"?t===e:!0}}},{key:"issueType",name:"Issue Type",filtering:{beforeList(e){return l.jsxDEV(h,{$size:e.headerContextState.rowSize,children:"custom beforeList"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:142,columnNumber:17},this)},component:"select",selectOptions:{type:"stateInHeaderContext",optionsKeyInHeaderContext:"issueTypeOptions"},keyInFilterState:"issueType",valueInRow:e=>e.issueType,filter:{typeOfValue:"multiple",filteringType:(e,t)=>!e.length||e.some(n=>n===t)}}},{key:"complete",name:"% Complete"}],[]),f=a.useMemo(()=>({issueTypeOptions:[{text:"Bug",value:"Bug"},{text:"Improvement",value:"Improvement"},{text:"Epic",value:"Epic"},{text:"Story",value:"Story"}]}),[]);return l.jsxDEV(k,{tableConfig:{containerStyle:{height:"60vh"},rowSize:{default:"big",showInControl:!0},fullScreenEnabled:!0,controlBlock:{customFeatures:[{value:"favorite",label:"Удалить из избранного",Icon:F,onClick:()=>{},mandatory:!0,details:{type:"switch",label:"В избранном",checked:u,onChange:e=>d(e.target.checked)}}]},filtering:{state:p,filtersInfo:{id:{label:"id",clearedValue:""},task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:""},date:{label:"Дата",clearedValue:void 0},globalFilter:{label:"Global filter",clearedValue:""}}}},columnConfig:m,rows:c,headerContextValue:f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:184,columnNumber:7},void 0)}};var o,i,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Filtering Table',
  render: () => {
    const [isFavorite, setIsFavorite] = useState(true);
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
    const filteringStateAndSetter = useState({
      id: '',
      task: '',
      priority: 'All',
      issueType: [],
      complete: '',
      globalFilter: '',
      date: undefined as string | undefined
    });
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'id'
    }, {
      key: 'task',
      name: 'Title'
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
        valueInRow: r => (r as Row & {
          date: string;
        })?.date,
        compareWithClearedValue: (clearedValue, currV) => clearedValue === currV,
        keyInFilterState: 'date'
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
      name: '% Complete'
    }], []);
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
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '60vh'
      },
      rowSize: {
        default: 'big',
        showInControl: true
      },
      fullScreenEnabled: true,
      controlBlock: {
        customFeatures: [
        // Обязательная кастомная фича
        {
          value: 'favorite',
          label: 'Удалить из избранного',
          Icon: IconStar,
          onClick: () => {},
          mandatory: true,
          details: {
            type: 'switch',
            label: 'В избранном',
            checked: isFavorite,
            onChange: e => setIsFavorite(e.target.checked)
          }
        }]
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
            clearedValue: undefined
          },
          globalFilter: {
            label: 'Global filter',
            clearedValue: ''
          }
        }
      }
    }} columnConfig={columnConfig} rows={rows} headerContextValue={headerContextValue} />;
  }
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const V=["FilteringTable"],_=Object.freeze(Object.defineProperty({__proto__:null,FilteringTable:r,__namedExportsOrder:V,default:I},Symbol.toStringTag,{value:"Module"}));export{_ as T};
