import{r,j as v}from"./react-DYHuXpTF.js";import{c as w}from"./tableData-DKA5H0bF.js";import x from"./DocStoryTemplate-BHnLMKCH.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{T as S}from"./TableCanvas-CM_EATUO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-DQaMhftP.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-C3-Vg48S.js";import"./@tanstack/react-virtual-EEUi7wi6.js";import"./WithTooltip-KJL26V4Q-1FXogNTQ.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-HOiRhji7.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./utils-DbMTrPCQ.js";import"./constants-Des9Datc.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-BHH5Fs72.js";import"./@salutejs/plasma-icons-DAdkqmmH.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-BJtGJ7E8.js";import"./Box-DwiKSnnX.js";import"./Collapse-mn0OPShb.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-nifywnUB.js";import"./@daisforge/glide-data-grid-DEmeTUkH.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-xg-axVyL.js";import"./sharedUiSearch-B0aoQ6gP.js";import"./TextField-WPWvh7a6.js";import"./sharedUtilsInputs-DA0RRQ70.js";import"./TypographyWithAutoTooltip-CLK-DSeT.js";import"./Typography-DEItZ0E3.js";import"./ListOfFilters-DEV2tGcA.js";import"./FiltersActions-B5_R_0AW.js";import"./IconButton-DBKuef6W.js";import"./TooltipList-BajRDP8T.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BxkYMH6M.js";import"./NumberFormat-CYbTJlTb.js";import"./EmptyState-5aZv2zr1.js";import"./unidentified@3x-iHLYaSSf.js";import"./ErrorPage-RkgGUpNO.js";import"./Autocomplete-CuNqi1cT.js";const ve={title:"Локальные компоненты/TableCanvas/Filtering/Manual",tags:["!autodocs"],parameters:{docs:{page:x}}},k=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui';

`,o={...C({preCode:k,previewSource:"shown"}),render:()=>{const y=r.useMemo(()=>[{key:"task",name:"Title",filtering:{component:"input",filter:"includes",valueInRow:e=>e.task,keyInFilterState:"task"}},{key:"priority",name:"Priority",filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:e=>e.priority,filter:{typeOfValue:"single",filteringType:(e,t)=>e!=="All"?t===e:!0}}},{key:"issueType",name:"Issue Type",filtering:{component:"select",selectOptions:{type:"stateInHeaderContext",optionsKeyInHeaderContext:"issueTypeOptions"},keyInFilterState:"issueType",valueInRow:e=>e.issueType,filter:{typeOfValue:"multiple",filteringType:(e,t)=>!e.length||e.some(n=>n===t)}}},{key:"complete",name:"% Complete",filtering:{component:"input",keyInFilterState:"complete",valueInRow:e=>e.complete,filter:(e,t)=>(+t||0)>=(+e||0)}}],[]),l=r.useMemo(()=>w(),[]),[f,g]=r.useState(l),s=r.useState({task:"",priority:"All",issueType:[],complete:""}),[a]=s;r.useEffect(()=>{const e=Object.entries(a).filter(n=>Array.isArray(n[1])?!!n[1].length:!!n[1]),t=l.filter(n=>e.every(i=>{const p=n[i[0]];return Array.isArray(i[1])?i[1].includes(p):i[1]===p.toString()||i[1]==="All"}));g(t)},[a]);const d=r.useMemo(()=>({issueTypeOptions:[{text:"Bug",value:"Bug"},{text:"Improvement",value:"Improvement"},{text:"Epic",value:"Epic"},{text:"Story",value:"Story"}]}),[]);return v.jsx(S,{tableConfig:{filtering:{state:s,filtersInfo:{task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:""}},manualFiltering:!0}},columnConfig:y,rows:f,headerContextValue:d})}};var u,m,c;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'task',
      name: 'Title',
      filtering: {
        component: 'input',
        filter: 'includes',
        valueInRow: r => r.task,
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
    const rows = useMemo(() => createRows(), []);
    const [filteredRows, setFilteredRows] = useState(rows);
    const filteringStateAndSetter = useState<{
      task: string;
      priority: string;
      issueType: string[];
      complete: string;
    }>({
      task: '',
      priority: 'All',
      issueType: [],
      complete: ''
    });
    const [state] = filteringStateAndSetter;
    useEffect(() => {
      const enabledFilters = Object.entries(state).filter(el => Array.isArray(el[1]) ? !!el[1].length : !!el[1]);
      const filterRows = rows.filter(row => enabledFilters.every(enabledFilter => {
        const colValue = row[enabledFilter[0] as keyof typeof row] as string;
        return Array.isArray(enabledFilter[1]) ? enabledFilter[1].includes(colValue) : enabledFilter[1] === colValue.toString() || enabledFilter[1] === 'All';
      }));
      setFilteredRows(filterRows);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);
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
      filtering: {
        state: filteringStateAndSetter,
        filtersInfo: {
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
          }
        },
        manualFiltering: true
      }
    }} columnConfig={columnConfig} rows={filteredRows} headerContextValue={headerContextValue} />;
  }
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const we=["ManualFiltering"];export{o as ManualFiltering,we as __namedExportsOrder,ve as default};
