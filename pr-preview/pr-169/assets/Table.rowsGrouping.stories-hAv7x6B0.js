import{r as t,b as n}from"./react-B60MRyL7.js";import f from"./DocStoryTemplate-D6aow9No.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{l as G,e as k}from"./Table-083CXwdv.js";import{c as C}from"./dataRowGrouping-Hj7akzxd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-ABAm7dM9.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-JDoewyqD.js";import"./@tanstack/react-virtual-aXadwhme.js";import"./WithTooltip-KJL26V4Q-DVjM17Xc.js";import"./preload-helper-Bmf6XQY_.js";import"./index-Cu4lwwaE.js";import"./index-OE46t0bk.js";import"./@salutejs/plasma-icons-BjqIpdkS.js";import"./index-DtotkDJi.js";import"./@sddsjs/sdds_finai-DkwmD3gE.js";import"./@salutejs/sdds-finai-D8wK5fGe.js";import"./Box-bkXdsxp1.js";import"./Collapse-BC9SztdT.js";import"./utils-CWW6sPYd.js";import"./constants-DHlp9b4t.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-a6lPhyw4.js";import"./TableTabs-BBnsWNxR.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-ChPFQkuL.js";import"./@glideappsfinal/glide-data-grid-IkMVqKbI.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./Dropdown-OQAgfOXP.js";import"./sharedUiSearch-BTGm-BQU.js";import"./TextField-Bk21xWxf.js";import"./sharedUtilsInputs-DX1n1p66.js";import"./TypographyWithAutoTooltip-TSxCSIM4.js";import"./Typography-CJGygKvw.js";import"./ListOfFilters-DSU0i5Yu.js";import"./FiltersActions-Can4TMvq.js";import"./IconButton-CWgrxfM1.js";import"./TooltipList-CdTlGXww.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BgS9GVK7.js";import"./NumberFormat-D7THTU7Y.js";import"./EmptyState-HkKixVLR.js";import"./unidentified@3x-DeqHr2sH.js";import"./MassActions-uOLFOmZC.js";import"./Autocomplete-D4Dg924L.js";import"./tableData-DKA5H0bF.js";const Ge={title:"Локальные компоненты/Table/RowsGrouping/Комбинация фичи группировка строк и других фичей",tags:["!autodocs"],parameters:{docs:{page:f}}},h=`
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
`,r={...b({preCode:h,previewSource:"shown"}),name:"Комбинация фичи группировка строк и других фичей",render:()=>{const[s]=t.useState(C),[l,a]=t.useState([]),p=t.useMemo(()=>[{key:"athlete",name:"Athlete",sortingType:"stringSort",rowsGrouping:{columnGroupLabel:"Athlete"},filtering:{component:"input",filter:"includes",valueInRow:e=>e.athlete,keyInFilterState:"athlete"}},{key:"sport",name:"Sport",sortingType:"stringSort",rowsGrouping:{columnGroupLabel:"Sport"},filtering:{component:"input",filter:"includes",valueInRow:e=>e.sport,keyInFilterState:"sport"}},{key:"country",name:"Country",sortingType:"stringSort",rowsGrouping:{columnGroupLabel:"Country"},filtering:{component:"input",filter:"startWith",valueInRow:e=>e.country,keyInFilterState:"country"}},{key:"year",name:"Year",sortingType:"numberSort",rowsGrouping:{columnGroupLabel:"Year"},filtering:{component:"input",filter:"startWith",valueInRow:e=>e.year,keyInFilterState:"year"}},{key:"gold",name:"Gold",sortingType:"numberSort",rowsGrouping:{columnGroupLabel:"Gold",renderGroupCell({childRows:e}){return e.reduce((w,{gold:S})=>w+S,0)}}}],[]),m=t.useState([]),c=t.useState({athlete:"",sport:"",gold:"",country:"",year:""}),g=t.useState(()=>new Set),d=e=>e.id===1,y=t.useCallback(({row:e})=>G(e)?{items:[{value:"kek2",label:"grouped kek"}]}:{items:[{value:"kek",label:"kek label"}]},[]);return n.jsxDEV(k,{tableConfig:{rowInstruments:{getRowDropdownConfig:y,defaultOpened:!0},columnsControl:{enable:!0},containerStyle:{height:700},rowsGrouping:{rowKeyGetter:e=>e.id,groupByState:[l,a],groupedColumnProps:{name:n.jsxDEV(n.Fragment,{children:"моя группировка"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowsGrouping/Table.rowsGrouping.stories.tsx",lineNumber:174,columnNumber:21},void 0),resizable:!0}},resizableColumn:!0,sorting:{state:m},filtering:{state:c,clearedValue:{athlete:"",sport:"",gold:"",country:"",year:""}},selecting:{state:g,rowKeyGetter:e=>e.id,showDefault:!0,rowCheckboxDisabled:d}},columnConfig:p,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowsGrouping/Table.rowsGrouping.stories.tsx",lineNumber:160,columnNumber:7},void 0)}};var o,u,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(u=r.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const ke=["MultipleFeaturesTable"];export{r as MultipleFeaturesTable,ke as __namedExportsOrder,Ge as default};
