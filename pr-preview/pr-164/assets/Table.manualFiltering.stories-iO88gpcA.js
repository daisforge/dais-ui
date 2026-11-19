import{r,b as v}from"./react-B60MRyL7.js";import{c as w}from"./tableData-DKA5H0bF.js";import S from"./DocStoryTemplate-CbpbGoVx.js";import{s as x}from"./storySourceDoc-tVKyHcEN.js";import{e as k}from"./Table-fGUkz_i2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-BOXbJjQW.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-DN-dyp3E.js";import"./@tanstack/react-virtual--f9HMX-L.js";import"./WithTooltip-KJL26V4Q-D1oqEq-B.js";import"./preload-helper-Rbr_SUQB.js";import"./index-Cu4lwwaE.js";import"./index-B3szzMwc.js";import"./@salutejs/plasma-icons-LsCQzLxj.js";import"./index-b7WWv5em.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./@salutejs/sdds-finai-DDW327_Q.js";import"./Box-JkhPdOcO.js";import"./Collapse-BNL-7RWo.js";import"./utils-Bs8ZiKbo.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-Cyhpllwh.js";import"./TableTabs-dzgHMZvw.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DUjkhz5W.js";import"./@glideappsfinal/glide-data-grid-CaPCdkNo.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-DQwhVP-7.js";import"./TextField-B86jICzu.js";import"./sharedUtilsInputs-uFKaIJDG.js";import"./TypographyWithAutoTooltip-D4bbCBGZ.js";import"./Typography-Dhksu6ui.js";import"./ListOfFilters-D7npQKzu.js";import"./FiltersActions-B9A7BCia.js";import"./IconButton-CqyDmNx8.js";import"./TooltipList-CJDTIlLy.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-_bpb5vRV.js";import"./NumberFormat-CmAELO3o.js";import"./EmptyState-CciL3-J3.js";import"./unidentified@3x-DpaHf-Py.js";import"./MassActions-2-wzgpjN.js";import"./Autocomplete-MlzChFIs.js";const ve={title:"Локальные компоненты/Table/Filtering/Manual",tags:["!autodocs"],parameters:{docs:{page:S}}},C=`
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
`,i={...x({preCode:C,previewSource:"shown"}),render:()=>{const f=r.useMemo(()=>[{key:"task",name:"Title",filtering:{component:"input",filter:"includes",valueInRow:e=>e.task,keyInFilterState:"task"}},{key:"priority",name:"Priority",filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:e=>e.priority,filter:{typeOfValue:"single",filteringType:(e,t)=>e!=="All"?t===e:!0}}},{key:"issueType",name:"Issue Type",filtering:{component:"select",selectOptions:{type:"stateInHeaderContext",optionsKeyInHeaderContext:"issueTypeOptions"},keyInFilterState:"issueType",valueInRow:e=>e.issueType,filter:{typeOfValue:"multiple",filteringType:(e,t)=>!e.length||e.some(n=>n===t)}}},{key:"complete",name:"% Complete",filtering:{component:"input",keyInFilterState:"complete",valueInRow:e=>e.complete,filter:(e,t)=>(+t||0)>=(+e||0)}}],[]),l=r.useMemo(()=>w(),[]),[y,d]=r.useState(l),s=r.useState({task:"",priority:"All",issueType:[],complete:""}),[a]=s;r.useEffect(()=>{const e=Object.entries(a).filter(n=>Array.isArray(n[1])?!!n[1].length:!!n[1]),t=l.filter(n=>e.every(o=>{const p=n[o[0]];return Array.isArray(o[1])?o[1].includes(p):o[1]===p.toString()||o[1]==="All"}));d(t)},[a]);const g=r.useMemo(()=>({issueTypeOptions:[{text:"Bug",value:"Bug"},{text:"Improvement",value:"Improvement"},{text:"Epic",value:"Epic"},{text:"Story",value:"Story"}]}),[]);return v.jsxDEV(k,{tableConfig:{filtering:{state:s,filtersInfo:{task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:""}},manualFiltering:!0}},columnConfig:f,rows:y,headerContextValue:g},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.filtering/Table.manualFiltering.stories.tsx",lineNumber:167,columnNumber:7},void 0)}};var u,m,c;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const we=["ManualFiltering"];export{i as ManualFiltering,we as __namedExportsOrder,ve as default};
