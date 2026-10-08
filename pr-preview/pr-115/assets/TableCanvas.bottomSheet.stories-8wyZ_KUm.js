import{r as u,d as o}from"./react-D2T61mpp.js";import{g as e}from"./getFuncAsString-CiehoYHv.js";import{s as h}from"./storySourceDoc-tVKyHcEN.js";import{T as E}from"./TableCanvas-Cqd_sxAx.js";import{A as I,a as R}from"./TableCanvas.bottomSheet.example-6dTcOQ8p.js";import{b as c,I as $,p as g}from"./@salutejs/sdds-finai-CUQOpsCT.js";import{eY as H,e$ as j}from"./@salutejs/plasma-icons-DjnWHCmH.js";function P(){const[p,m]=u.useState(32),[b,d]=u.useState(1),[r,A]=u.useState(20),v=u.useId(),C=Array.from({length:40},(t,a)=>({id:a,report:`Отчёт ${a+1}`})),s=p!==32,F=Array.from({length:10},(t,a)=>`Сообщение ${a+1}: данные отчёта обновлены.`);return o.jsxDEV("div",{style:{padding:16},children:[o.jsxDEV("div",{style:{display:"flex",gap:8,marginBottom:12},children:[o.jsxDEV(c,{size:"xs",view:"secondary",onClick:()=>m(220),children:"220px"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:26,columnNumber:9},this),o.jsxDEV(c,{size:"xs",view:"secondary",onClick:()=>m("35%"),children:"35%"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:29,columnNumber:9},this),o.jsxDEV(c,{size:"xs",view:"secondary",onClick:()=>m(1e3),children:"Больше доступного места"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:32,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:25,columnNumber:7},this),o.jsxDEV(E,{rows:C.slice((b-1)*r,b*r),columnConfig:[{key:"id",name:"ID",width:100},{key:"report",name:"Отчёт",width:360}],tableConfig:{containerStyle:{height:480},pagination:{value:b,perPage:r,count:C.length,onChangePageValue(t,a){d(t??1),a()},onChange(t,a,D){d(a!==void 0&&a!==r?1:t??1),A(a??r),D()}},bottomSheetConfig:{height:p,minHeight:32,content:o.jsxDEV("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[o.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:8,minHeight:30,whiteSpace:"nowrap",flexShrink:0},children:[o.jsxDEV($,{size:"xxs",view:"clear","aria-label":s?"Закрыть лог":"Открыть лог","aria-expanded":s,"aria-controls":v,style:{flexShrink:0},onClick:()=>m(s?32:220),children:s?o.jsxDEV(H,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:91,columnNumber:23},this):o.jsxDEV(j,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:93,columnNumber:23},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:81,columnNumber:19},this),o.jsxDEV(g,{style:{minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},children:"Журнал событий"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:96,columnNumber:19},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:71,columnNumber:17},this),o.jsxDEV("div",{id:v,"aria-hidden":!s,...s?{}:{inert:""},style:{overflow:"auto",minHeight:0,padding:"0 16px"},children:F.map(t=>o.jsxDEV(g,{style:{padding:"12px 0"},children:t},t,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:113,columnNumber:21},this))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:106,columnNumber:17},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:64,columnNumber:15},this)}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:36,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx",lineNumber:24,columnNumber:5},this)}const V={title:"Локальные компоненты/TableCanvas/BottomSheet",component:E,tags:["!autodocs"],parameters:{layout:"fullscreen"}},z=`
import { Button, IconButton, BodyS } from '@daisforge/ui';
import { TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconChevronDown, IconChevronUp } from '@daisforge/ui/icons';
import React, { useId, useState } from 'react';

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx","BottomSheetExample")}

<BottomSheetExample />;
`,O=`
import { Button, IconButton, BodyS } from '@daisforge/ui';
import { TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconChevronDown, IconChevronUp } from '@daisforge/ui/icons';
import React, { useId, useState } from 'react';

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.auto.tsx","AutoHeightExample")}

<AutoHeightExample />;
`,M=`
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
`,n={name:"Высота, стрелка и пагинация",...h({code:z,previewSource:"shown",type:"code"}),render:P},i={name:"Все возможности таблицы",...h({code:M,previewSource:"hidden",type:"code"}),render:()=>o.jsxDEV(R,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.stories.tsx",lineNumber:235,columnNumber:17},void 0)},l={name:"Высота по содержимому и maxHeight",...h({code:O,previewSource:"shown",type:"code"}),render:I};var S,T,y;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Высота, стрелка и пагинация',
  ...storySourceDoc({
    code: basicCode,
    previewSource: 'shown',
    type: 'code'
  }),
  render: BottomSheetExample
}`,...(y=(T=n.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var k,f,x;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Все возможности таблицы',
  ...storySourceDoc({
    code: allFeaturesCode,
    previewSource: 'hidden',
    type: 'code'
  }),
  render: () => <AllFeaturesExample />
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var B,w,N;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Высота по содержимому и maxHeight',
  ...storySourceDoc({
    code: autoHeightCode,
    previewSource: 'shown',
    type: 'code'
  }),
  render: AutoHeightExample
}`,...(N=(w=l.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};const _=["BottomSheet","AllFeatures","AutoHeight"],J=Object.freeze(Object.defineProperty({__proto__:null,AllFeatures:i,AutoHeight:l,BottomSheet:n,__namedExportsOrder:_,default:V},Symbol.toStringTag,{value:"Module"}));export{J as B};
