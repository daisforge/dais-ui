import{r as n,d as r}from"./react-D2T61mpp.js";import f from"./DocStoryTemplate-qSq0pd_i.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{m as G,f as k}from"./Table-D--hp4s0.js";import{c as C}from"./dataRowGrouping-0JMPVnJT.js";import"./vendor-Cn9f_vf9.js";import"./react-is-Clcustum.js";import"./styled-components-rplWZAgX.js";import"./@tanstack/react-virtual-CP07bF08.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-DJqehWV8.js";import"./IconButton-CipKBvsh.js";import"./@salutejs/plasma-icons-BaISJh78.js";import"./@salutejs/sdds-finai-DndbtfIu.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-DHlQT5zI.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DeNQ8Slc.js";import"./TextField-CRbIlnvR.js";import"./sharedUtilsInputs-C82K2v0R.js";import"./AiAgentPopup-CqmS21P_.js";import"./TextArea-MlAk76rK.js";import"./sharedUtilsResizable-dmFf3dH5.js";import"./Collapse-CyQzpe5_.js";import"./react-data-grid-R-brS_Re.js";import"./TableTabs-Cc6qxnzs.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BdKwzIcM.js";import"./@glideappsfinal/glide-data-grid-7iGQeAP3.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CJjZLYrn.js";import"./ListOfFilters-B_J2gAbK.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Cd4jurPz.js";import"./EmptyState-BnrsqZSN.js";import"./MassActions-CRr4zqZV.js";import"./Autocomplete-CKUnNaab.js";import"./tableData-DVJFoYoT.js";const le={title:"Локальные компоненты/Table/RowsGrouping/Комбинация фичи группировка строк и других фичей",tags:["!autodocs"],parameters:{docs:{page:f}}},h=`
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
}`,...(i=(u=t.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const pe=["MultipleFeaturesTable"];export{t as MultipleFeaturesTable,pe as __namedExportsOrder,le as default};
