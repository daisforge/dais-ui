import{r,d as v}from"./react-D2T61mpp.js";import{c as w}from"./tableData-UCfjiBCh.js";import S from"./DocStoryTemplate-ote7_b2_.js";import{s as x}from"./storySourceDoc-tVKyHcEN.js";import{f as k}from"./Table-BuaB-0bh.js";import"./vendor-DV2KdZ5r.js";import"./react-is-Clcustum.js";import"./styled-components-B-oogN2m.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-Dz2YC_m4.js";import"./IconButton-BLqfRDb9.js";import"./@salutejs/plasma-icons-BcApNSC-.js";import"./@salutejs/sdds-finai-DjKHUVIR.js";import"./@salutejs/sdds-themes-CUTvIVmO.js";import"./utils-C2v3RG48.js";import"./constants-BudGGuoE.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-C4aqnFI9.js";import"./TextField-y770pncI.js";import"./sharedUtilsInputs-BL-lXeFv.js";import"./AnalyticalWidget-B8HEcI0s.js";import"./Collapse-0UnD82N6.js";import"./react-data-grid-5SLMzt16.js";import"./TableTabs-Dnf7OxPC.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-BvuHrxLr.js";import"./ListOfFilters-M5rp9ne3.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CAdXcZyO.js";import"./EmptyState-wycdJE3m.js";import"./MassActions-CwDAo7q8.js";import"./Autocomplete-CILF1XdA.js";const te={title:"Локальные компоненты/Table/Filtering/Manual",tags:["!autodocs"],parameters:{docs:{page:S}}},C=`
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
`,i={...x({preCode:C,previewSource:"shown"}),render:()=>{const f=r.useMemo(()=>[{key:"task",name:"Title",filtering:{component:"input",filter:"includes",valueInRow:e=>e.task,keyInFilterState:"task"}},{key:"priority",name:"Priority",filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:e=>e.priority,filter:{typeOfValue:"single",filteringType:(e,t)=>e!=="All"?t===e:!0}}},{key:"issueType",name:"Issue Type",filtering:{component:"select",selectOptions:{type:"stateInHeaderContext",optionsKeyInHeaderContext:"issueTypeOptions"},keyInFilterState:"issueType",valueInRow:e=>e.issueType,filter:{typeOfValue:"multiple",filteringType:(e,t)=>!e.length||e.some(n=>n===t)}}},{key:"complete",name:"% Complete",filtering:{component:"input",keyInFilterState:"complete",valueInRow:e=>e.complete,filter:(e,t)=>(+t||0)>=(+e||0)}}],[]),l=r.useMemo(()=>w(),[]),[y,d]=r.useState(l),s=r.useState({task:"",priority:"All",issueType:[],complete:""}),[a]=s;r.useEffect(()=>{const e=Object.entries(a).filter(n=>Array.isArray(n[1])?!!n[1].length:!!n[1]),t=l.filter(n=>e.every(o=>{const u=n[o[0]];return Array.isArray(o[1])?o[1].includes(u):o[1]===u.toString()||o[1]==="All"}));d(t)},[a]);const g=r.useMemo(()=>({issueTypeOptions:[{text:"Bug",value:"Bug"},{text:"Improvement",value:"Improvement"},{text:"Epic",value:"Epic"},{text:"Story",value:"Story"}]}),[]);return v.jsxDEV(k,{tableConfig:{filtering:{state:s,filtersInfo:{task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:""}},manualFiltering:!0}},columnConfig:f,rows:y,headerContextValue:g},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.manualFiltering.stories.tsx",lineNumber:167,columnNumber:7},void 0)}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    return <Table tableConfig={{
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
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const ne=["ManualFiltering"];export{i as ManualFiltering,ne as __namedExportsOrder,te as default};
