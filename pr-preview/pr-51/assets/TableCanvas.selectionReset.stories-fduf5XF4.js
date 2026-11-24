import{r as n,b as u}from"./react-UEdzNlUe.js";import{s as h}from"./storySourceDoc-tVKyHcEN.js";import{T as x}from"./TableCanvas-BIX9gy3D.js";import{C as S}from"./@daisforge/glide-data-grid-BxeGd1ye.js";import{c as l}from"./@salutejs/sdds-finai-mlEHigyJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./utils-DSJLiokB.js";import"./styled-components-C6Uw7ovB.js";import"./react-is-CJ4CjPIR.js";import"./vendor-D2r4jgZf.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./@tanstack/react-virtual-CK8aghAq.js";import"./constants-3UB8ZrMK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-CWYH4jgn.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-DNoHAM3Q.js";import"./Box-Dwqy9xB3.js";import"./Collapse-CfxT3MfK.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-Csuv1NRZ.js";import"./countWhile-blgVacgU.js";import"./canvas-hypertxt-DsokSIOX.js";import"./lodash.isequal-mFNAsUE8.js";import"./TableTabs-BhiREyQV.js";import"./sharedUiSearch-jYsui9xG.js";import"./TextField-DY_3SUsf.js";import"./sharedUtilsInputs-BU2vEk4Q.js";import"./TypographyWithAutoTooltip-CGvLvlR-.js";import"./Typography-D6ms_BcN.js";import"./ListOfFilters-CdZROQX5.js";import"./Table-3r2ViKbU.js";import"./react-data-grid-CAmlt0FZ.js";import"./Combobox-DpIc9uqy.js";import"./NumberFormat-Bk22GTCO.js";import"./EmptyState-BVqyGup2.js";import"./unidentified@3x-Dft7iYeR.js";import"./MassActions-D78Y4PXv.js";import"./preload-helper-ByAByWgw.js";import"./Autocomplete-CdNTXPjM.js";import"./FiltersActions-BE8g1_tP.js";import"./IconButton-Dl3DqcX6.js";import"./TooltipList-CeWvqtLg.js";import"./ErrorPage-BDrEK3Sy.js";const ye={title:"Локальные компоненты/TableCanvas/CellsSelection/Смена данных",tags:["!autodocs"]},o={args:{replaceOnLoad:!1,extraRows:0},argTypes:{replaceOnLoad:{name:"Заменить таблицу оверлеем на время запроса"},extraRows:{name:"Дополнительные строки",control:{type:"select"},options:[0,100]}},name:"Серверная сортировка",...h({preCode:`import { useMemo, useState } from 'react';
import { Button, TableCanvas } from '@daisforge/ui';
import { CompactSelection, type GridSelection, type SortColumn } from '@daisforge/ui/components/TableCanvas';`,previewSource:"shown"}),render:({replaceOnLoad:w,extraRows:m})=>{var g;const[c,D]=n.useState(!1),d=n.useMemo(()=>{const e=[{id:10,department:"Учёт",name:"Анна"},{id:20,department:"Учёт",name:"Борис"},{id:30,department:"Склад",name:"Вера"},{id:40,department:"Склад",name:"Глеб"},...Array.from({length:m},(i,t)=>({id:50+t,department:`Отдел ${t}`,name:`Сотрудник ${t}`}))];return c?e.reverse():e},[m,c]),p=n.useState({rows:S.empty(),columns:S.empty()}),[C,v]=n.useState([]),[s,b]=n.useState(!1),[a,T]=n.useState(!1),k=n.useMemo(()=>{const e={key:"department",name:"Отдел",width:130},i={key:"name",name:"Имя",width:150},t={key:"id",name:"ID",width:100,sortingType:"numberSort"};return a?[i,e,t]:[e,i,t]},[a]),{current:r}=p[0];return u.jsxDEV("div",{style:{display:"grid",gap:12},children:[u.jsxDEV("p",{children:"Выделите несколько ячеек. Запросите сортировку, затем примените ответ сервера."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.selectionReset.stories.tsx",lineNumber:75,columnNumber:9},void 0),u.jsxDEV("div",{style:{display:"flex",gap:8},children:[u.jsxDEV(l,{disabled:s,onClick:()=>{var e;v([{columnKey:"id",direction:((e=C[0])==null?void 0:e.direction)==="DESC"?"ASC":"DESC"}]),b(!0)},children:"Запросить сортировку"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.selectionReset.stories.tsx",lineNumber:80,columnNumber:11},void 0),u.jsxDEV(l,{disabled:!s,onClick:()=>{D(e=>!e),b(!1)},children:"Применить ответ"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.selectionReset.stories.tsx",lineNumber:95,columnNumber:11},void 0),u.jsxDEV(l,{onClick:()=>T(e=>!e),children:a?"Вернуть порядок колонок":"Переместить имя в начало"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.selectionReset.stories.tsx",lineNumber:104,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.selectionReset.stories.tsx",lineNumber:79,columnNumber:9},void 0),u.jsxDEV("output",{children:r?`ID ${(g=d[r.cell[1]])==null?void 0:g.id}, колонка ${r.cell[0]+1}, диапазон ${r.range.width} × ${r.range.height}`:"Выделение пусто"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.selectionReset.stories.tsx",lineNumber:108,columnNumber:9},void 0),u.jsxDEV(x,{rows:d,columnConfig:k,tableConfig:{containerStyle:{height:280},loadingOverlay:{active:w&&s},sorting:{state:[C,v],manualSorting:!0},mergeCells:{mergeByCellValues:["department"]},cellsSelection:{rowKeyGetter:e=>e.id,state:p}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.selectionReset.stories.tsx",lineNumber:115,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.selectionReset.stories.tsx",lineNumber:74,columnNumber:7},void 0)}};var f,y,E;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    replaceOnLoad: false,
    extraRows: 0
  },
  argTypes: {
    replaceOnLoad: {
      name: 'Заменить таблицу оверлеем на время запроса'
    },
    extraRows: {
      name: 'Дополнительные строки',
      control: {
        type: 'select'
      },
      options: [0, 100]
    }
  },
  name: 'Серверная сортировка',
  ...storySourceDoc({
    preCode: \`import { useMemo, useState } from 'react';
import { Button, TableCanvas } from '@daisforge/ui';
import { CompactSelection, type GridSelection, type SortColumn } from '@daisforge/ui/components/TableCanvas';\`,
    previewSource: 'shown'
  }),
  render: ({
    replaceOnLoad,
    extraRows
  }) => {
    const [reversed, setReversed] = useState(false);
    const rows = useMemo(() => {
      const records = [{
        id: 10,
        department: 'Учёт',
        name: 'Анна'
      }, {
        id: 20,
        department: 'Учёт',
        name: 'Борис'
      }, {
        id: 30,
        department: 'Склад',
        name: 'Вера'
      }, {
        id: 40,
        department: 'Склад',
        name: 'Глеб'
      }, ...Array.from({
        length: extraRows
      }, (_, i) => ({
        id: 50 + i,
        department: \`Отдел \${i}\`,
        name: \`Сотрудник \${i}\`
      }))];
      return reversed ? records.reverse() : records;
    }, [extraRows, reversed]);
    const selection = useState<GridSelection>({
      rows: CompactSelection.empty(),
      columns: CompactSelection.empty()
    });
    const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);
    const [waiting, setWaiting] = useState(false);
    const [nameFirst, setNameFirst] = useState(false);
    const columns = useMemo(() => {
      const department = {
        key: 'department',
        name: 'Отдел',
        width: 130
      };
      const name = {
        key: 'name',
        name: 'Имя',
        width: 150
      };
      const id = {
        key: 'id',
        name: 'ID',
        width: 100,
        sortingType: 'numberSort' as const
      };
      return nameFirst ? [name, department, id] : [department, name, id];
    }, [nameFirst]);
    const {
      current
    } = selection[0];
    return <div style={{
      display: 'grid',
      gap: 12
    }}>
        <p>
          Выделите несколько ячеек. Запросите сортировку, затем примените ответ
          сервера.
        </p>
        <div style={{
        display: 'flex',
        gap: 8
      }}>
          <Button disabled={waiting} onClick={() => {
          setSortColumns([{
            columnKey: 'id',
            direction: sortColumns[0]?.direction === 'DESC' ? 'ASC' : 'DESC'
          }]);
          setWaiting(true);
        }}>
            Запросить сортировку
          </Button>
          <Button disabled={!waiting} onClick={() => {
          setReversed(prev => !prev);
          setWaiting(false);
        }}>
            Применить ответ
          </Button>
          <Button onClick={() => setNameFirst(prev => !prev)}>
            {nameFirst ? 'Вернуть порядок колонок' : 'Переместить имя в начало'}
          </Button>
        </div>
        <output>
          {current ? \`ID \${rows[current.cell[1]]?.id}, колонка \${current.cell[0] + 1}, диапазон \${current.range.width} × \${current.range.height}\` : 'Выделение пусто'}
        </output>
        <TableCanvas rows={rows} columnConfig={columns} tableConfig={{
        containerStyle: {
          height: 280
        },
        loadingOverlay: {
          active: replaceOnLoad && waiting
        },
        sorting: {
          state: [sortColumns, setSortColumns],
          manualSorting: true
        },
        mergeCells: {
          mergeByCellValues: ['department']
        },
        cellsSelection: {
          rowKeyGetter: row => row.id,
          state: selection
        }
      }} />
      </div>;
  }
}`,...(E=(y=o.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};const Ee=["ServerSort"];export{o as ServerSort,Ee as __namedExportsOrder,ye as default};
