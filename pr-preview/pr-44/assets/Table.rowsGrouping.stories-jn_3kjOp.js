import{r as n,d as r}from"./react-D2T61mpp.js";import f from"./DocStoryTemplate-Amd1X9tE.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{m as G,f as k}from"./Table-Bs48fGjK.js";import{c as C}from"./dataRowGrouping-DbhJMx-l.js";import"./vendor-79A0Y1rr.js";import"./react-is-Clcustum.js";import"./styled-components-CyG4-HBp.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-BXGpy_er.js";import"./IconButton-DRWW6GK4.js";import"./@salutejs/plasma-icons-DyDFzmWf.js";import"./@salutejs/sdds-finai-LXsiMrF6.js";import"./@salutejs/sdds-themes-DJNx_lJj.js";import"./utils-CejOy8O0.js";import"./constants-OzzdGdGS.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-u6CfKOrq.js";import"./TextField-vOV0PS1h.js";import"./sharedUtilsInputs-m__6t1dv.js";import"./AnalyticalWidget-B1z2BPO9.js";import"./Collapse-CSOL2Z_x.js";import"./react-data-grid-DC6FgrCZ.js";import"./TableTabs-C1osjsBt.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-k3PIClVY.js";import"./ListOfFilters-C6akdsJO.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DNgz4QV8.js";import"./EmptyState-bMxO47Pd.js";import"./MassActions-DCvKq-ih.js";import"./Autocomplete-Bm7R9QtZ.js";import"./tableData-UCfjiBCh.js";const re={title:"Локальные компоненты/Table/RowsGrouping/Комбинация фичи группировка строк и других фичей",tags:["!autodocs"],parameters:{docs:{page:f}}},h=`
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
}`,...(i=(u=t.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const oe=["MultipleFeaturesTable"];export{t as MultipleFeaturesTable,oe as __namedExportsOrder,re as default};
