import{r as t,d as n}from"./react-D2T61mpp.js";import{c}from"./tableData-DVJFoYoT.js";import F from"./DocStoryTemplate-B-riaFPz.js";import{S as A}from"./StoryHint-D7Z2UPWM.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{T as g}from"./TableCanvas-CVlvQCTH.js";import"./vendor-C8VuHz3V.js";import"./react-is-Clcustum.js";import"./styled-components-BpVVkBzC.js";import"./@tanstack/react-virtual-CcbeDy_e.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-EhL9uao4.js";import"./IconButton-Cyh6jX5Y.js";import"./@salutejs/plasma-icons-98834dYt.js";import"./@salutejs/sdds-finai-Cz7rM39w.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-DPKiBQxU.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CcNAFjSN.js";import"./TextField-Bc_csjew.js";import"./sharedUtilsInputs-C1mPzyft.js";import"./AiAgentPopup-D1m5a1Fx.js";import"./TextArea-BVyN31sy.js";import"./sharedUtilsResizable-k1DpAbyC.js";import"./Table-Bb96p7XL.js";import"./Collapse-BFOVUS3J.js";import"./react-data-grid-B83SeY1o.js";import"./TableTabs-DrUU80Is.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-C_wKgE8A.js";import"./@glideappsfinal/glide-data-grid-DwMYPKa3.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BvQvHxfB.js";import"./ListOfFilters-DJXXUbRX.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DBk61DnZ.js";import"./EmptyState-06rtgtN6.js";import"./MassActions-C0g3MaXK.js";import"./Autocomplete-D0TKDYiy.js";import"./ErrorPage-Bqi4nyHs.js";const s4={title:"Локальные компоненты/TableCanvas/HeaderIcons",tags:["!autodocs"],parameters:{docs:{page:F}}},f=`
import React, { useMemo, useState } from 'react';
import {
  type ColumnConfig,
  type SortColumn,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

import { createRows, type Row } from './data/tableData';

`,e={...C({preCode:f,previewSource:"shown"}),name:"Иконки шапки по наведению",render:()=>{const[m]=t.useState(c),r={id:"",task:"",developer:"",complete:""},p=t.useState(r),E=t.useState([]),d=t.useMemo(()=>[{key:"id",name:"ID",width:44,sortingType:"numberSort",resizable:!0,filtering:{component:"input",keyInFilterState:"id",valueInRow:u=>String(u.id),filter:"startWith"}},{key:"task",name:"Название задачи в трекере",width:180,sortingType:"stringSort",resizable:!0,filtering:{component:"input",keyInFilterState:"task",valueInRow:u=>u.task,filter:"startWith"}},{key:"priority",name:"Приоритет",width:120,sortingType:"stringSort",resizable:!0},{key:"developer",name:"Ответственный разработчик",width:160,resizable:!0,filtering:{component:"input",keyInFilterState:"developer",valueInRow:u=>u.developer,filter:"startWith"}},{key:"complete",name:"Готовность, %",width:110,sortingType:"numberSort",resizable:!0,filtering:{component:"input",keyInFilterState:"complete",valueInRow:u=>u.complete,filter:(u,D)=>(+D||0)>=(+u||0)}}],[]);return n.jsxDEV(n.Fragment,{children:[n.jsxDEV(A,{children:"Наведите на шапку: появятся кнопки фильтра и сортировки, длинное название уйдёт в троеточие. Примените сортировку или фильтр и уведите курсор: активная кнопка останется, остальные спрячутся. Клик по шапке выделяет колонку, и кнопки остаются видны. Ширину колонок можно менять."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HeaderIcons/TableCanvas.headerIcons.stories.tsx",lineNumber:129,columnNumber:9},void 0),n.jsxDEV(g,{tableConfig:{containerStyle:{height:"400px"},sorting:{state:E},filtering:{state:p,clearedValue:r},columnsControl:{enable:!0,pinning:!0,reorderingHeader:!0,pinnedDefault:["id"]}},columnConfig:d,rows:m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HeaderIcons/TableCanvas.headerIcons.stories.tsx",lineNumber:136,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HeaderIcons/TableCanvas.headerIcons.stories.tsx",lineNumber:128,columnNumber:7},void 0)}};var o,i,a,s,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Иконки шапки по наведению',
  render: () => {
    const [rows] = useState(createRows);

    // Пустые значения считаются «фильтр не применён»: по ним кнопка фильтра
    // понимает, активна она или нет.
    const clearedFilters = {
      id: '',
      task: '',
      developer: '',
      complete: ''
    };
    const filteringStateAndSetter = useState(clearedFilters);
    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      // Нарочно очень узкая: места под текст и кнопки не хватает.
      width: 44,
      sortingType: 'numberSort',
      resizable: true,
      filtering: {
        component: 'input',
        keyInFilterState: 'id',
        valueInRow: r => String(r.id),
        filter: 'startWith'
      }
    }, {
      key: 'task',
      name: 'Название задачи в трекере',
      width: 180,
      sortingType: 'stringSort',
      resizable: true,
      filtering: {
        component: 'input',
        keyInFilterState: 'task',
        valueInRow: r => r.task,
        filter: 'startWith'
      }
    }, {
      key: 'priority',
      name: 'Приоритет',
      width: 120,
      sortingType: 'stringSort',
      resizable: true
    }, {
      key: 'developer',
      name: 'Ответственный разработчик',
      width: 160,
      resizable: true,
      filtering: {
        component: 'input',
        keyInFilterState: 'developer',
        valueInRow: r => r.developer,
        filter: 'startWith'
      }
    }, {
      key: 'complete',
      name: 'Готовность, %',
      width: 110,
      sortingType: 'numberSort',
      resizable: true,
      filtering: {
        component: 'input',
        keyInFilterState: 'complete',
        valueInRow: r => r.complete,
        filter: (fv, rv) => (+rv || 0) >= (+fv || 0)
      }
    }], []);
    return <>
        <StoryHint>
          Наведите на шапку: появятся кнопки фильтра и сортировки, длинное
          название уйдёт в троеточие. Примените сортировку или фильтр и уведите
          курсор: активная кнопка останется, остальные спрячутся. Клик по шапке
          выделяет колонку, и кнопки остаются видны. Ширину колонок можно
          менять.
        </StoryHint>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: '400px'
        },
        sorting: {
          state: sortingStateAndSetter
        },
        filtering: {
          state: filteringStateAndSetter,
          clearedValue: clearedFilters
        },
        // Закреплённая колонка и перетаскивание за шапку: слева в шапке
        // появляются пин и троеточие, которые не должны съезжать.
        columnsControl: {
          enable: true,
          pinning: true,
          reorderingHeader: true,
          pinnedDefault: ['id']
        }
      }} columnConfig={columnConfig} rows={rows} />
      </>;
  }
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source},description:{story:`Кнопки фильтра и сортировки в шапке показываются только при наведении на
шапку или у выделенной колонки. Без наведения остаются только активные:
применённый фильтр и действующая сортировка. Когда кнопки появляются, тексту
остаётся меньше места, и он уходит в троеточие с тултипом полного названия.
Колонки нарочно узкие и с длинными названиями, чтобы это было видно.`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.description}}};const l4=["HeaderIcons"];export{e as HeaderIcons,l4 as __namedExportsOrder,s4 as default};
