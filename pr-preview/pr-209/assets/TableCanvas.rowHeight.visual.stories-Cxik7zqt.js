import{b as a,r as p}from"./react-UEdzNlUe.js";import{a as d,e as c}from"./index-Dgmteq0e.js";import{T as b,C as t}from"./TableCanvas-BGZk-FTG.js";import{a as g}from"./visual-helpers-CpY530oS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BFB8ouFt.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./utils-7MphdwvM.js";import"./styled-components-BDqbx52B.js";import"./react-is-CJ4CjPIR.js";import"./vendor-DTHFTCxs.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./@tanstack/react-virtual-Cc6cMCGC.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-B8Iabp4m.js";import"./@salutejs/plasma-icons-BF2rNVOT.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-Cpse2u-_.js";import"./Box-CAVr5OBu.js";import"./Collapse-C9SIU-FL.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./TableGlide-CTGBfVd9.js";import"./@daisforge/glide-data-grid-D97_453q.js";import"./preload-helper-DjLIBw6y.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUtilsSearch-blgVacgU.js";import"./TableTabs-qleR1gEq.js";import"./sharedUiSearch-CJDRPGoT.js";import"./TextField-1F9j25NL.js";import"./sharedUtilsInputs-BX82Dwrc.js";import"./Typography-CXQH0VfO.js";import"./ListOfFilters-hkoNcwhI.js";import"./FiltersActions-DfnVy1lY.js";import"./IconButton-De4CLxay.js";import"./Tooltip-B481aNNP.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-B3DTr_Ly.js";import"./NumberFormat-DolH7SCh.js";import"./EmptyState-DUp-5WGM.js";import"./unidentified@3x-BWP3gjky.js";import"./ErrorPage-3JT73K9u.js";import"./Autocomplete-C6r0ozmF.js";const ce={title:"Локальные компоненты/TableCanvas/RowHeight/Визуальные тесты",tags:["!autodocs"]},o=p.createRef(),h="[Риск-решения ГРС] Контроль кредитного риска по глобальным рынкам",f=[{id:1,note:`Комментарий
`,team:"Коротко"},{id:2,note:"",team:h},{id:3,note:"",team:"Коротко"}],C=1,v=1,w=2,T=[{key:"note",name:"Примечание",width:160,renderCell:({row:r,theme:e})=>a.jsxDEV(t.Container,{alignItems:"center",padding:{left:8,right:8},children:a.jsxDEV(t.Text,{font:`500 15px ${e.fontFamily}`,wordWrap:!0,children:r.note},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.visual.stories.tsx",lineNumber:57,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.visual.stories.tsx",lineNumber:54,columnNumber:7},void 0)},{key:"team",name:"Команда",width:220,renderCell:({row:r,theme:e})=>a.jsxDEV(t.Container,{alignItems:"center",padding:{left:8,right:8},children:a.jsxDEV(t.Text,{font:`500 15px ${e.fontFamily}`,wordWrap:!0,children:r.team},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.visual.stories.tsx",lineNumber:69,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.visual.stories.tsx",lineNumber:68,columnNumber:7},void 0)}],n=r=>{var e,u;return((u=(e=o.current)==null?void 0:e.getBounds(C,r))==null?void 0:u.height)??0},i={name:"Перенос текста после пустого абзаца",render:()=>a.jsxDEV("div",{style:{padding:8},children:a.jsxDEV(b,{refTable:o,tableConfig:{containerStyle:{height:260,width:420},rowHeight:"auto"},columnConfig:T,rows:f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.visual.stories.tsx",lineNumber:84,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.visual.stories.tsx",lineNumber:83,columnNumber:5},void 0),play:async()=>{await g(o),await d(()=>{c(n(v)).toBeGreaterThan(n(w))},{timeout:5e3})}};var s,m,l;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Перенос текста после пустого абзаца',
  render: () => <div style={{
    padding: 8
  }}>
      <TableCanvas refTable={tableRef} tableConfig={{
      containerStyle: {
        height: 260,
        width: 420
      },
      rowHeight: 'auto'
    }} columnConfig={COLUMNS} rows={ROWS} />
    </div>,
  play: async () => {
    await gridReady(tableRef);

    // Строка с длинным текстом выше контрольной, только если текст перенесён
    await waitFor(() => {
      expect(rowHeightOf(LONG_ROW)).toBeGreaterThan(rowHeightOf(CONTROL_ROW));
    }, {
      timeout: 5000
    });
  }
}`,...(l=(m=i.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const be=["WordWrapAfterEmptyParagraph"];export{i as WordWrapAfterEmptyParagraph,be as __namedExportsOrder,ce as default};
