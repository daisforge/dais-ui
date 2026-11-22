import{r as t,j as r}from"./react-DYHuXpTF.js";import f from"./DocStoryTemplate-C-m25YlE.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{l as G,e as C}from"./Table-CeDu5QUM.js";import{c as k}from"./dataRowGrouping-Hj7akzxd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-Dy04e7eT.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-D3uL8AgQ.js";import"./@tanstack/react-virtual-DpbU78q1.js";import"./WithTooltip-KJL26V4Q-Dieti3TI.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-BkX6kR9J.js";import"./index-Cg1cr4lG.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./@salutejs/sdds-finai-CW-5BJnR.js";import"./Box-C_lQk7q2.js";import"./Collapse-zZc0zAuA.js";import"./utils-C324mS39.js";import"./constants-3UB8ZrMK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-D-o9abDl.js";import"./react-data-grid-iaz8oMts.js";import"./TableTabs-BAGPZAp9.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-ToAvIx_t.js";import"./@daisforge/glide-data-grid-CnQtltGt.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-4U0N3jZJ.js";import"./TextField-CFa4HRNu.js";import"./sharedUtilsInputs-CeMKsmp0.js";import"./TypographyWithAutoTooltip-CF39c5mC.js";import"./Typography-BcsDSGcH.js";import"./ListOfFilters-DLYLJh9T.js";import"./FiltersActions-2bw8sE3F.js";import"./IconButton-0ysLJmxH.js";import"./TooltipList-DjKz0BcB.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Cre-Xff_.js";import"./NumberFormat-C4Ct0-d_.js";import"./EmptyState-F2FGmJQ7.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-C7XUfjux.js";import"./Autocomplete-BVrZ8DxV.js";import"./tableData-DKA5H0bF.js";const be={title:"Локальные компоненты/Table/RowsGrouping/Комбинация фичи группировка строк и других фичей",tags:["!autodocs"],parameters:{docs:{page:f}}},h=`
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
`,n={...b({preCode:h,previewSource:"shown"}),name:"Комбинация фичи группировка строк и других фичей",render:()=>{const[l]=t.useState(k),[a,s]=t.useState([]),p=t.useMemo(()=>[{key:"athlete",name:"Athlete",sortingType:"stringSort",rowsGrouping:{columnGroupLabel:"Athlete"},filtering:{component:"input",filter:"includes",valueInRow:e=>e.athlete,keyInFilterState:"athlete"}},{key:"sport",name:"Sport",sortingType:"stringSort",rowsGrouping:{columnGroupLabel:"Sport"},filtering:{component:"input",filter:"includes",valueInRow:e=>e.sport,keyInFilterState:"sport"}},{key:"country",name:"Country",sortingType:"stringSort",rowsGrouping:{columnGroupLabel:"Country"},filtering:{component:"input",filter:"startWith",valueInRow:e=>e.country,keyInFilterState:"country"}},{key:"year",name:"Year",sortingType:"numberSort",rowsGrouping:{columnGroupLabel:"Year"},filtering:{component:"input",filter:"startWith",valueInRow:e=>e.year,keyInFilterState:"year"}},{key:"gold",name:"Gold",sortingType:"numberSort",rowsGrouping:{columnGroupLabel:"Gold",renderGroupCell({childRows:e}){return e.reduce((S,{gold:w})=>S+w,0)}}}],[]),m=t.useState([]),c=t.useState({athlete:"",sport:"",gold:"",country:"",year:""}),g=t.useState(()=>new Set),d=e=>e.id===1,y=t.useCallback(({row:e})=>G(e)?{items:[{value:"kek2",label:"grouped kek"}]}:{items:[{value:"kek",label:"kek label"}]},[]);return r.jsx(C,{tableConfig:{rowInstruments:{getRowDropdownConfig:y,defaultOpened:!0},columnsControl:{enable:!0},containerStyle:{height:700},rowsGrouping:{rowKeyGetter:e=>e.id,groupByState:[a,s],groupedColumnProps:{name:r.jsx(r.Fragment,{children:"моя группировка"}),resizable:!0}},resizableColumn:!0,sorting:{state:m},filtering:{state:c,clearedValue:{athlete:"",sport:"",gold:"",country:"",year:""}},selecting:{state:g,rowKeyGetter:e=>e.id,showDefault:!0,rowCheckboxDisabled:d}},columnConfig:p,rows:l})}};var o,u,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(u=n.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const Ge=["MultipleFeaturesTable"];export{n as MultipleFeaturesTable,Ge as __namedExportsOrder,be as default};
