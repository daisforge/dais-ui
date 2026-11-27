import{r as n,b as r}from"./react-UEdzNlUe.js";import f from"./DocStoryTemplate-CTafGBjd.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{k as G,c as k}from"./Table-m45vcMRU.js";import{c as C}from"./dataRowGrouping-Hj7akzxd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-DTHFTCxs.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-BDqbx52B.js";import"./@tanstack/react-virtual-Cc6cMCGC.js";import"./WithTooltip-KJL26V4Q-BFOVQObc.js";import"./preload-helper-CXPOYF_q.js";import"./index-Cu4lwwaE.js";import"./index-D2sVbA6U.js";import"./Switch-Cpse2u-_.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./@salutejs/sdds-finai-B8Iabp4m.js";import"./Box-CAVr5OBu.js";import"./Collapse-C9SIU-FL.js";import"./utils-7MphdwvM.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-BF2rNVOT.js";import"./react-data-grid-DERmyBhN.js";import"./TableTabs-qleR1gEq.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./sharedUiSearch-CJDRPGoT.js";import"./TextField-1F9j25NL.js";import"./sharedUtilsInputs-BX82Dwrc.js";import"./Typography-D1Y47K_0.js";import"./ListOfFilters-DiTfeOfG.js";import"./FiltersActions-B0Hq7ots.js";import"./IconButton-De4CLxay.js";import"./Tooltip-B481aNNP.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-B3DTr_Ly.js";import"./NumberFormat-DolH7SCh.js";import"./EmptyState-CpHPzcWA.js";import"./unidentified@3x-CzrRZ7hN.js";import"./MassActions-CuB2uWgS.js";import"./Autocomplete-C6r0ozmF.js";import"./tableData-DKA5H0bF.js";const ye={title:"Локальные компоненты/Table/RowsGrouping/Комбинация фичи группировка строк и других фичей",tags:["!autodocs"],parameters:{docs:{page:f}}},h=`
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
`,t={...b({preCode:h,previewSource:"shown"}),name:"Комбинация фичи группировка строк и других фичей",render:()=>{const[s]=n.useState(C),[a,l]=n.useState([]),p=n.useMemo(()=>[{key:"athlete",name:"Athlete",sortingType:"stringSort",rowsGrouping:{columnGroupLabel:"Athlete"},filtering:{component:"input",filter:"includes",valueInRow:e=>e.athlete,keyInFilterState:"athlete"}},{key:"sport",name:"Sport",sortingType:"stringSort",rowsGrouping:{columnGroupLabel:"Sport"},filtering:{component:"input",filter:"includes",valueInRow:e=>e.sport,keyInFilterState:"sport"}},{key:"country",name:"Country",sortingType:"stringSort",rowsGrouping:{columnGroupLabel:"Country"},filtering:{component:"input",filter:"startWith",valueInRow:e=>e.country,keyInFilterState:"country"}},{key:"year",name:"Year",sortingType:"numberSort",rowsGrouping:{columnGroupLabel:"Year"},filtering:{component:"input",filter:"startWith",valueInRow:e=>e.year,keyInFilterState:"year"}},{key:"gold",name:"Gold",sortingType:"numberSort",rowsGrouping:{columnGroupLabel:"Gold",renderGroupCell({childRows:e}){return e.reduce((w,{gold:S})=>w+S,0)}}}],[]),m=n.useState([]),c=n.useState({athlete:"",sport:"",gold:"",country:"",year:""}),g=n.useState(()=>new Set),d=e=>e.id===1,y=n.useCallback(({row:e})=>G(e)?{items:[{value:"kek2",label:"grouped kek"}]}:{items:[{value:"kek",label:"kek label"}]},[]);return r.jsxDEV(k,{tableConfig:{rowInstruments:{getRowDropdownConfig:y,defaultOpened:!0},columnsControl:{enable:!0},containerStyle:{height:700},rowsGrouping:{rowKeyGetter:e=>e.id,groupByState:[a,l],groupedColumnProps:{name:r.jsxDEV(r.Fragment,{children:"моя группировка"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowsGrouping/Table.rowsGrouping.stories.tsx",lineNumber:174,columnNumber:21},void 0),resizable:!0}},resizableColumn:!0,sorting:{state:m},filtering:{state:c,clearedValue:{athlete:"",sport:"",gold:"",country:"",year:""}},selecting:{state:g,rowKeyGetter:e=>e.id,showDefault:!0,rowCheckboxDisabled:d}},columnConfig:p,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowsGrouping/Table.rowsGrouping.stories.tsx",lineNumber:160,columnNumber:7},void 0)}};var o,u,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Комбинация фичи группировка строк и других фичей',
  render: () => {
    const [rows] = useState(createRowsForGrouping);
    const [groupByArr, setGroupByArr] = useState<string[]>([]);
    const columnConfig = useMemo<readonly ColumnConfig<RowForGrouping>[]>(() => [{
      key: 'athlete',
      name: 'Athlete',
      sortingType: 'stringSort',
      rowsGrouping: {
        columnGroupLabel: 'Athlete'
      },
      filtering: {
        component: 'input',
        filter: 'includes',
        valueInRow: r => r.athlete,
        keyInFilterState: 'athlete'
      }
    }, {
      key: 'sport',
      name: 'Sport',
      sortingType: 'stringSort',
      rowsGrouping: {
        columnGroupLabel: 'Sport'
      },
      filtering: {
        component: 'input',
        filter: 'includes',
        valueInRow: r => r.sport,
        keyInFilterState: 'sport'
      }
    }, {
      key: 'country',
      name: 'Country',
      sortingType: 'stringSort',
      rowsGrouping: {
        columnGroupLabel: 'Country'
      },
      filtering: {
        component: 'input',
        filter: 'startWith',
        valueInRow: r => r.country,
        keyInFilterState: 'country'
      }
    }, {
      key: 'year',
      name: 'Year',
      sortingType: 'numberSort',
      rowsGrouping: {
        columnGroupLabel: 'Year'
      },
      filtering: {
        component: 'input',
        filter: 'startWith',
        valueInRow: r => r.year,
        keyInFilterState: 'year'
      }
    }, {
      key: 'gold',
      name: 'Gold',
      sortingType: 'numberSort',
      rowsGrouping: {
        columnGroupLabel: 'Gold',
        renderGroupCell({
          childRows
        }) {
          return childRows.reduce((prev, {
            gold
          }) => prev + gold, 0);
        }
      }
    }], []);
    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);
    const filteringStateAndSetter = useState({
      athlete: '',
      sport: '',
      gold: '',
      country: '',
      year: ''
    });
    const selectingRowStateAndSetter = useState((): ReadonlySet<string | number> => new Set());
    const rowCheckboxDisabled = (r: RowForGrouping) => r.id === 1;
    const getRowDropdownConfig = useCallback<RowInstrumentsType<RowForGrouping>>(({
      row
    }) => {
      if (isGroupRow(row)) {
        return {
          items: [{
            value: 'kek2',
            label: 'grouped kek'
          }]
        };
      }
      return {
        items: [{
          value: 'kek',
          label: 'kek label'
        }]
      };
    }, []);
    return <Table tableConfig={{
      rowInstruments: {
        getRowDropdownConfig,
        defaultOpened: true
      },
      columnsControl: {
        enable: true
      },
      containerStyle: {
        height: 700
      },
      rowsGrouping: {
        rowKeyGetter: r => r.id,
        groupByState: [groupByArr, setGroupByArr],
        groupedColumnProps: {
          name: <>моя группировка</>,
          resizable: true
        }
      },
      resizableColumn: true,
      sorting: {
        state: sortingStateAndSetter
      },
      filtering: {
        state: filteringStateAndSetter,
        clearedValue: {
          athlete: '',
          sport: '',
          gold: '',
          country: '',
          year: ''
        }
      },
      selecting: {
        state: selectingRowStateAndSetter,
        rowKeyGetter: r => r.id,
        showDefault: true,
        rowCheckboxDisabled
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(i=(u=t.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const we=["MultipleFeaturesTable"];export{t as MultipleFeaturesTable,we as __namedExportsOrder,ye as default};
