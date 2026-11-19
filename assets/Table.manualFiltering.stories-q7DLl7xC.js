import{r,j as v}from"./react-DNGZQ4GM.js";import{c as w}from"./tableData-DKA5H0bF.js";import S from"./DocStoryTemplate-BVKLQcam.js";import{s as x}from"./storySourceDoc-tVKyHcEN.js";import{e as C}from"./Table-CLU8EiQJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-D0kRSEyZ.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-vVGXX3JE.js";import"./styled-components-B2Euy7F3.js";import"./@tanstack/react-virtual-BMRZReVx.js";import"./WithTooltip-KJL26V4Q-DmYH2O2Q.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-mtwU-xhz.js";import"./@salutejs/plasma-icons-CyCZXKIi.js";import"./index-ChNwZ-Li.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./@salutejs/sdds-finai-CTfk_qKV.js";import"./Box-C7bn7Vor.js";import"./Collapse-DJQXB-S_.js";import"./utils-7sb7r4ay.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-CXBejiga.js";import"./TableTabs-BHejy9n4.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BHSmjU_O.js";import"./@glideappsfinal/glide-data-grid-DDGyHJjW.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-CIBppFsz.js";import"./TextField-DpANoGFF.js";import"./sharedUtilsInputs-04PyxkHI.js";import"./TypographyWithAutoTooltip-D2KyJ3uF.js";import"./Typography-C1XIPscs.js";import"./ListOfFilters-CtA3cmfs.js";import"./FiltersActions-MFwki4_2.js";import"./IconButton-C1E4pz8y.js";import"./TooltipList-BKC8WC44.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-CYVukoKk.js";import"./NumberFormat-BcUnw3yr.js";import"./EmptyState-Cjd9SZHm.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-D3mEmrXD.js";import"./Autocomplete-Bjb9HDRp.js";const ve={title:"Локальные компоненты/Table/Filtering/Manual",tags:["!autodocs"],parameters:{docs:{page:S}}},k=`
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
`,i={...x({preCode:k,previewSource:"shown"}),render:()=>{const f=r.useMemo(()=>[{key:"task",name:"Title",filtering:{component:"input",filter:"includes",valueInRow:e=>e.task,keyInFilterState:"task"}},{key:"priority",name:"Priority",filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:e=>e.priority,filter:{typeOfValue:"single",filteringType:(e,t)=>e!=="All"?t===e:!0}}},{key:"issueType",name:"Issue Type",filtering:{component:"select",selectOptions:{type:"stateInHeaderContext",optionsKeyInHeaderContext:"issueTypeOptions"},keyInFilterState:"issueType",valueInRow:e=>e.issueType,filter:{typeOfValue:"multiple",filteringType:(e,t)=>!e.length||e.some(n=>n===t)}}},{key:"complete",name:"% Complete",filtering:{component:"input",keyInFilterState:"complete",valueInRow:e=>e.complete,filter:(e,t)=>(+t||0)>=(+e||0)}}],[]),l=r.useMemo(()=>w(),[]),[y,d]=r.useState(l),s=r.useState({task:"",priority:"All",issueType:[],complete:""}),[a]=s;r.useEffect(()=>{const e=Object.entries(a).filter(n=>Array.isArray(n[1])?!!n[1].length:!!n[1]),t=l.filter(n=>e.every(o=>{const p=n[o[0]];return Array.isArray(o[1])?o[1].includes(p):o[1]===p.toString()||o[1]==="All"}));d(t)},[a]);const g=r.useMemo(()=>({issueTypeOptions:[{text:"Bug",value:"Bug"},{text:"Improvement",value:"Improvement"},{text:"Epic",value:"Epic"},{text:"Story",value:"Story"}]}),[]);return v.jsx(C,{tableConfig:{filtering:{state:s,filtersInfo:{task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:""}},manualFiltering:!0}},columnConfig:f,rows:y,headerContextValue:g})}};var u,m,c;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
