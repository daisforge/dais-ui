import{r as m,d as o}from"./react-D2T61mpp.js";import{g as e}from"./getFuncAsString-BKNbpy42.js";import{s as f}from"./storySourceDoc-tVKyHcEN.js";import{T as x}from"./TableCanvas-jn5O-zoQ.js";import{b as u,I as E,p as v}from"./@salutejs/sdds-finai-CR2jG7gG.js";import{eY as F,e$ as A}from"./@salutejs/plasma-icons-DO39JMB0.js";import{A as D}from"./TableCanvas.bottomSheet.example-CpXkNexF.js";function I(){const[c,i]=m.useState(32),[b,h]=m.useState(1),[r,B]=m.useState(20),d=m.useId(),p=Array.from({length:40},(t,a)=>({id:a,report:`Отчёт ${a+1}`})),s=c!==32,w=Array.from({length:10},(t,a)=>`Сообщение ${a+1}: данные отчёта обновлены.`);return o.jsxDEV("div",{style:{padding:16},children:[o.jsxDEV("div",{style:{display:"flex",gap:8,marginBottom:12},children:[o.jsxDEV(u,{size:"xs",view:"secondary",onClick:()=>i(220),children:"220px"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:26,columnNumber:9},this),o.jsxDEV(u,{size:"xs",view:"secondary",onClick:()=>i("35%"),children:"35%"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:29,columnNumber:9},this),o.jsxDEV(u,{size:"xs",view:"secondary",onClick:()=>i(1e3),children:"Больше доступного места"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:32,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:25,columnNumber:7},this),o.jsxDEV(x,{rows:p.slice((b-1)*r,b*r),columnConfig:[{key:"id",name:"ID",width:100},{key:"report",name:"Отчёт",width:360}],tableConfig:{containerStyle:{height:480},pagination:{value:b,perPage:r,count:p.length,onChangePageValue(t,a){h(t??1),a()},onChange(t,a,N){h(a!==void 0&&a!==r?1:t??1),B(a??r),N()}},bottomSheetConfig:{height:c,minHeight:32,content:o.jsxDEV("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[o.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:8,minHeight:30,whiteSpace:"nowrap",flexShrink:0},children:[o.jsxDEV(E,{size:"xxs",view:"clear","aria-label":s?"Закрыть лог":"Открыть лог","aria-expanded":s,"aria-controls":d,style:{flexShrink:0},onClick:()=>i(s?32:220),children:s?o.jsxDEV(F,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:91,columnNumber:23},this):o.jsxDEV(A,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:93,columnNumber:23},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:81,columnNumber:19},this),o.jsxDEV(v,{style:{minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},children:"Журнал событий"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:96,columnNumber:19},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:71,columnNumber:17},this),o.jsxDEV("div",{id:d,"aria-hidden":!s,...s?{}:{inert:""},style:{overflow:"auto",minHeight:0,padding:"0 16px"},children:w.map(t=>o.jsxDEV(v,{style:{padding:"12px 0"},children:t},t,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:113,columnNumber:21},this))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:106,columnNumber:17},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:64,columnNumber:15},this)}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:36,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:24,columnNumber:5},this)}const R={title:"Локальные компоненты/TableCanvas/BottomSheet",component:x,tags:["!autodocs"],parameters:{layout:"fullscreen"}},$=`
import { Button, IconButton, BodyS } from '@daisforge/ui';
import { TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconChevronDown, IconChevronUp } from '@daisforge/ui/icons';
import React, { useId, useState } from 'react';

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx","BottomSheetExample")}

<BottomSheetExample />;
`,j=`
import { Button, IconButton, Switch, TextFieldSearch, BodyS, BodyXS, H5 } from '@daisforge/ui';
import {
  Canvas,
  type CellsSelectionMode,
  type ColumnConfig,
  type ColumnOrColumnGroupConfig,
  CompactSelection,
  type ControlBlockSize,
  type GridSelection,
  type RowsChangeData,
  type SortColumn,
  TableCanvas,
  type TableConfig,
} from '@daisforge/ui/components/TableCanvas';
import {
  IconBookOpenOutline,
  IconChevronDown,
  IconChevronUp,
  IconDocumentOutline,
  IconInfoCircleOutline,
  IconRefresh,
  IconStar,
} from '@daisforge/ui/icons';
import { outlineSolidPrimary, surfaceInfoMinor, textNegative, textSecondary } from '@daisforge/ui/tokens';
import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';

type BottomSheetRow = {
  id: number | string;
  task: string;
  priority: string;
  issueType: string;
  developer: string;
  complete: number;
  subRows?: BottomSheetRow[];
};

type BottomSheetFilters = {
  priority: string;
  issueType: string[];
  developer: string;
  complete: string;
  globalFilter: string;
};

type BottomSheetSummary = {
  type: 'top' | 'bottom';
  values: Array<{ columnId: string; value: string }>;
};

type BottomSheetDataMode = 'all' | 'pagination' | 'infinity';

type AllFeaturesExampleProps = {
  refTable?: React.ComponentProps<typeof TableCanvas>['refTable'];
  initialCollapsed?: boolean;
  placement?: 'inside' | 'above';
  controlBlockSize?: ControlBlockSize;
  adaptive?: boolean;
  initialError?: boolean;
  initialEmpty?: boolean;
  initialLogHeight?: string | number;
};

type AllFeaturesSettings = {
  structure:
    | 'flat'
    | 'group-tree'
    | 'group-merged'
    | 'subrows-tree'
    | 'subrows-merged';
  dataMode: 'all' | 'pagination' | 'infinity';
  selectionMode: CellsSelectionMode;
  axisSelection: boolean;
  highlight: boolean;
  hover: boolean;
  groupedHeaders: boolean;
  squash: boolean;
  merge: 'none' | 'values' | 'region';
  renderers: boolean;
  tooltips: boolean;
  preview: boolean;
  formats: boolean;
  theme: boolean;
  borders: 'all' | 'horizontal' | 'none' | 'custom';
  variableHeight: boolean;
  headerHeight: '33' | '48';
  unstickyHeader: boolean;
  controlBlockShow: boolean;
  controlBlockSize: ControlBlockSize;
  adaptive: boolean;
  placement: 'inside' | 'above';
  searchOnType: boolean;
  autocomplete: boolean;
  transferEnabled: boolean;
  pasteReadonly: 'skip' | 'abort';
  pasteOverflow: 'truncate' | 'abort';
  pasteValidation: 'none' | 'type-check';
  pasteBroadcast: boolean;
  fillEnabled: boolean;
  fillDirections: 'horizontal' | 'vertical' | 'orthogonal' | 'any';
  allowSubRows: boolean;
};

type AllFeaturesEvent = {
  id: number;
  message: string;
  level: 'info' | 'warning' | 'error';
};

type AllFeaturesChoiceProps = {
  label: string;
  value: string;
  items: Array<{ value: string; label: string }>;
  onChange: (value: string) => void;
  disabled?: boolean;
};

type AllFeaturesToggleProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

type AllFeaturesSettingsPanelProps = {
  settings: AllFeaturesSettings;
  onChange: (patch: Partial<AllFeaturesSettings>) => void;
};

type AllFeaturesLogProps = {
  expanded: boolean;
  events: AllFeaturesEvent[];
  onToggle: () => void;
  onClear: () => void;
};

type AllFeaturesNavigationProps = {
  rows: BottomSheetRow[];
  onSelect: (row: BottomSheetRow) => void;
};

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.data.ts","createBottomSheetRows")}

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.data.ts","cloneBottomSheetRows")}

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.data.ts","prepareBottomSheetRows")}

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.data.ts","applyBottomSheetRowChanges")}

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.data.ts","summarizeBottomSheetRows")}

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.data.ts","selectBottomSheetRows")}

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx","AllFeaturesChoice")}

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx","AllFeaturesToggle")}

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx","AllFeaturesSettingsPanel")}

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx","AllFeaturesLog")}

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx","AllFeaturesNavigation")}

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx","createAllFeaturesSettings")}

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx","createAllFeaturesSelection")}

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx","getBottomSheetRowId")}

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx","getBottomSheetChildren")}

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx","findBottomSheetRow")}

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx","AllFeaturesExample")}

<AllFeaturesExample />;
`,n={name:"Высота, стрелка и пагинация",...f({code:$,previewSource:"shown",type:"code"}),render:I},l={name:"Все возможности таблицы",...f({code:j,previewSource:"hidden",type:"code"}),render:()=>o.jsxDEV(D,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.stories.tsx",lineNumber:222,columnNumber:17},void 0)};var C,S,g;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Высота, стрелка и пагинация',
  ...storySourceDoc({
    code: basicCode,
    previewSource: 'shown',
    type: 'code'
  }),
  render: BottomSheetExample
}`,...(g=(S=n.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var T,y,k;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Все возможности таблицы',
  ...storySourceDoc({
    code: allFeaturesCode,
    previewSource: 'hidden',
    type: 'code'
  }),
  render: () => <AllFeaturesExample />
}`,...(k=(y=l.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const P=["BottomSheet","AllFeatures"],U=Object.freeze(Object.defineProperty({__proto__:null,AllFeatures:l,BottomSheet:n,__namedExportsOrder:P,default:R},Symbol.toStringTag,{value:"Module"}));export{U as B};
