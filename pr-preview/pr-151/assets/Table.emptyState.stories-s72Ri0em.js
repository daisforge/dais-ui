import{d as C,r as c}from"./react-D2T61mpp.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{T as p}from"./TableCanvas-MGn_2I6d.js";import{w as g}from"./visual-helpers-CNJYhi_s.js";const y=700,Y=1200,S=[],t=[{key:"id",name:"ID"},{key:"name",name:"Сотрудник"},{key:"status",name:"Статус"},{key:"team",name:"Команда"}],k=[{key:"employee-group",name:"Сотрудник",children:[{key:"id",name:"ID"},{key:"name",name:"ФИО"}]},{key:"meta-group",name:"Статус и команда",children:[{key:"status",name:"Статус"},{key:"team",name:"Команда"}]}],L=[];function f(e,u){const[n,o]=c.useState(!0),[D,b]=c.useState(e);return c.useEffect(()=>{o(!0),b(e);const w=setTimeout(()=>{b(u),o(!1)},Y);return()=>{clearTimeout(w)}},[u,e]),{columnConfig:D,isLoading:n}}const j={title:"Локальные компоненты/TableCanvas/EmptyState",tags:["!autodocs"],parameters:{docs:{description:{component:"Все demo-сценарии специально проходят через loading, чтобы в Storybook не было промежуточного broken-image кадра у EmptyState."}}}},E=`
import type { EmptyStateProps } from '@daisforge/ui';
import {
  ColumnOrColumnGroupConfig,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';
import React, { ReactNode, useEffect, useState } from 'react';

type Row = {
  id: string;
  name: string;
  status: string;
  team: string;
};

type EmptyStateStoryConfig =
  {
    enabled: boolean;
    custom?: ReactNode;
  } & Partial<EmptyStateProps>;

const TABLE_HEIGHT = 480;
const LOADING_DELAY_MS = 1200;
const EMPTY_ROWS: Row[] = [];

const flatColumnConfig: readonly ColumnOrColumnGroupConfig<Row>[] = [
  { key: 'id', name: 'ID' },
  { key: 'name', name: 'Сотрудник' },
  { key: 'status', name: 'Статус' },
  { key: 'team', name: 'Команда' },
];

const groupedColumnConfig: readonly ColumnOrColumnGroupConfig<Row>[] = [
  {
    key: 'employee-group',
    name: 'Сотрудник',
    children: [
      { key: 'id', name: 'ID' },
      { key: 'name', name: 'ФИО' },
    ],
  },
  {
    key: 'meta-group',
    name: 'Статус и команда',
    children: [
      { key: 'status', name: 'Статус' },
      { key: 'team', name: 'Команда' },
    ],
  },
];

const emptyColumns: readonly ColumnOrColumnGroupConfig<Row>[] = [];

function useLoadingColumns(
  initialColumns: readonly ColumnOrColumnGroupConfig<Row>[],
  finalColumns: readonly ColumnOrColumnGroupConfig<Row>[]
) {
  const [isLoading, setIsLoading] = useState(true);
  const [columnConfig, setColumnConfig] = useState(initialColumns);

  useEffect(() => {
    setIsLoading(true);
    setColumnConfig(initialColumns);

    const timeoutId = setTimeout(() => {
      setColumnConfig(finalColumns);
      setIsLoading(false);
    }, LOADING_DELAY_MS);

    return () => clearTimeout(timeoutId);
  }, [finalColumns, initialColumns]);

  return { columnConfig, isLoading };
}
`,i={play:g("Нет данных по заданным параметрам"),name:"Default Empty State",...d({preCode:E,previewSource:"shown"}),render:()=>{const{columnConfig:e,isLoading:u}=f(t,t);return C.jsxDEV(p,{tableConfig:{containerStyle:{height:y},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Имитируем загрузку перед переходом к emptyState."},emptyState:u?void 0:{enabled:!0}},columnConfig:e,rows:S},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.EmptyState/Table.emptyState.stories.tsx",lineNumber:212,columnNumber:7},void 0)}},s={play:g("Нет заявок для выбранного периода"),name:"Custom Empty State",...d({preCode:E,previewSource:"shown"}),render:()=>{const{columnConfig:e,isLoading:u}=f(t,t),n={enabled:!0,title:"Нет заявок для выбранного периода",subtitle:"Измените фильтры или создайте новую заявку.",variant:"no-content",buttons:[{type:"button",props:{children:"Создать заявку",view:"accent",onClick:()=>{}}}]};return C.jsxDEV(p,{tableConfig:{containerStyle:{height:y},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Сначала показываем loading, затем кастомный emptyState."},emptyState:u?void 0:n},columnConfig:e,rows:S},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.EmptyState/Table.emptyState.stories.tsx",lineNumber:263,columnNumber:7},void 0)}},r={play:g("Нет результатов по выбранным фильтрам"),name:"Grouped Columns Empty State",...d({preCode:E,previewSource:"shown"}),render:()=>{const{columnConfig:e,isLoading:u}=f(k,k),n={enabled:!0,title:"Нет результатов по выбранным фильтрам",subtitle:"Grouped headers остаются видимыми, а empty state отображается ниже шапки таблицы.",variant:"not-result"};return C.jsxDEV(p,{tableConfig:{containerStyle:{height:y},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Проверяем переход loading -> emptyState при группировке колонок."},emptyState:u?void 0:n},columnConfig:e,rows:S},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.EmptyState/Table.emptyState.stories.tsx",lineNumber:305,columnNumber:7},void 0)}},l={play:g("Не удалось получить схему таблицы"),name:"Full Content Empty State Without Headers",...d({preCode:E,previewSource:"shown"}),render:()=>{const{columnConfig:e,isLoading:u}=f(L,L),n={enabled:!0,title:"Не удалось получить схему таблицы",subtitle:"Колонки не пришли с бэкенда, поэтому после loading emptyState занимает всю content-область без заголовков.",variant:"not-result"};return C.jsxDEV(p,{tableConfig:{containerStyle:{height:y},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Сначала ждём схему колонок с бэкенда, затем показываем full-content emptyState."},emptyState:u?void 0:n},columnConfig:e,rows:S},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.EmptyState/Table.emptyState.stories.tsx",lineNumber:348,columnNumber:7},void 0)}},m={play:g("Нет записей на текущей странице"),name:"Empty State With Control Block And Pagination",...d({preCode:E,previewSource:"shown"}),render:()=>{const{columnConfig:e,isLoading:u}=f(t,t),[n,o]=c.useState(1),[D,b]=c.useState(20),w={enabled:!0,title:"Нет записей на текущей странице",subtitle:"Проверяем, что состояние не ломает control block, пагинацию и настройку размера строк.",variant:"not-result"};return C.jsxDEV(p,{tableConfig:{containerStyle:{height:y},rowSize:{default:"big",showInControl:!0},controlBlock:{rightSideInner:[{text:"Экспорт",view:"linkAccent",onClick:()=>{}}]},pagination:{count:48,perPage:D,value:n,responsiveSlots:!0,onChangePageValue(a,v){typeof a=="number"&&(o(a),v())},async onChange(a,v,M){typeof a=="number"&&typeof v=="number"&&(o(a),b(v),M())}},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Сначала показываем loading, затем проверяем emptyState в окружении control block и pagination."},emptyState:u?void 0:w},columnConfig:e,rows:S},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.EmptyState/Table.emptyState.stories.tsx",lineNumber:393,columnNumber:7},void 0)}};var h,T,B;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  play: waitForCanvasState('Нет данных по заданным параметрам'),
  name: 'Default Empty State',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const {
      columnConfig,
      isLoading
    } = useLoadingColumns(flatColumnConfig, flatColumnConfig);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: TABLE_HEIGHT
      },
      isLoading: {
        boolean: isLoading,
        skeletonRowsCount: 5
      },
      loadingOverlay: {
        active: isLoading,
        subtitle: 'Имитируем загрузку перед переходом к emptyState.'
      },
      emptyState: isLoading ? undefined : {
        enabled: true
      }
    }} columnConfig={columnConfig} rows={EMPTY_ROWS} />;
  }
}`,...(B=(T=i.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var F,A,P;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  play: waitForCanvasState('Нет заявок для выбранного периода'),
  name: 'Custom Empty State',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const {
      columnConfig,
      isLoading
    } = useLoadingColumns(flatColumnConfig, flatColumnConfig);
    const emptyState: EmptyStateStoryConfig = {
      enabled: true,
      title: 'Нет заявок для выбранного периода',
      subtitle: 'Измените фильтры или создайте новую заявку.',
      variant: 'no-content',
      buttons: [{
        type: 'button',
        props: {
          children: 'Создать заявку',
          view: 'accent',
          onClick: () => undefined
        }
      }]
    };
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: TABLE_HEIGHT
      },
      isLoading: {
        boolean: isLoading,
        skeletonRowsCount: 5
      },
      loadingOverlay: {
        active: isLoading,
        subtitle: 'Сначала показываем loading, затем кастомный emptyState.'
      },
      emptyState: isLoading ? undefined : emptyState
    }} columnConfig={columnConfig} rows={EMPTY_ROWS} />;
  }
}`,...(P=(A=s.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var O,R,_;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  play: waitForCanvasState('Нет результатов по выбранным фильтрам'),
  name: 'Grouped Columns Empty State',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const {
      columnConfig,
      isLoading
    } = useLoadingColumns(groupedColumnConfig, groupedColumnConfig);
    const emptyState: EmptyStateStoryConfig = {
      enabled: true,
      title: 'Нет результатов по выбранным фильтрам',
      subtitle: 'Grouped headers остаются видимыми, а empty state отображается ниже шапки таблицы.',
      variant: 'not-result'
    };
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: TABLE_HEIGHT
      },
      isLoading: {
        boolean: isLoading,
        skeletonRowsCount: 5
      },
      loadingOverlay: {
        active: isLoading,
        subtitle: 'Проверяем переход loading -> emptyState при группировке колонок.'
      },
      emptyState: isLoading ? undefined : emptyState
    }} columnConfig={columnConfig} rows={EMPTY_ROWS} />;
  }
}`,...(_=(R=r.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var I,G,N;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  play: waitForCanvasState('Не удалось получить схему таблицы'),
  name: 'Full Content Empty State Without Headers',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const {
      columnConfig,
      isLoading
    } = useLoadingColumns(emptyColumns, emptyColumns);
    const emptyState: EmptyStateStoryConfig = {
      enabled: true,
      title: 'Не удалось получить схему таблицы',
      subtitle: 'Колонки не пришли с бэкенда, поэтому после loading emptyState занимает всю content-область без заголовков.',
      variant: 'not-result'
    };
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: TABLE_HEIGHT
      },
      isLoading: {
        boolean: isLoading,
        skeletonRowsCount: 5
      },
      loadingOverlay: {
        active: isLoading,
        subtitle: 'Сначала ждём схему колонок с бэкенда, затем показываем full-content emptyState.'
      },
      emptyState: isLoading ? undefined : emptyState
    }} columnConfig={columnConfig} rows={EMPTY_ROWS} />;
  }
}`,...(N=(G=l.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var x,H,W;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  play: waitForCanvasState('Нет записей на текущей странице'),
  name: 'Empty State With Control Block And Pagination',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const {
      columnConfig,
      isLoading
    } = useLoadingColumns(flatColumnConfig, flatColumnConfig);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(20);
    const emptyState: EmptyStateStoryConfig = {
      enabled: true,
      title: 'Нет записей на текущей странице',
      subtitle: 'Проверяем, что состояние не ломает control block, пагинацию и настройку размера строк.',
      variant: 'not-result'
    };
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: TABLE_HEIGHT
      },
      rowSize: {
        default: 'big',
        showInControl: true
      },
      controlBlock: {
        rightSideInner: [{
          text: 'Экспорт',
          view: 'linkAccent',
          onClick: () => undefined
        }]
      },
      pagination: {
        count: 48,
        perPage,
        value: currentPage,
        responsiveSlots: true,
        onChangePageValue(page, scrollToTop) {
          if (typeof page === 'number') {
            setCurrentPage(page);
            scrollToTop();
          }
        },
        async onChange(page, nextPerPage, scrollToTop) {
          if (typeof page === 'number' && typeof nextPerPage === 'number') {
            setCurrentPage(page);
            setPerPage(nextPerPage);
            scrollToTop();
          }
        }
      },
      isLoading: {
        boolean: isLoading,
        skeletonRowsCount: 5
      },
      loadingOverlay: {
        active: isLoading,
        subtitle: 'Сначала показываем loading, затем проверяем emptyState в окружении control block и pagination.'
      },
      emptyState: isLoading ? undefined : emptyState
    }} columnConfig={columnConfig} rows={EMPTY_ROWS} />;
  }
}`,...(W=(H=m.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};const V=["DefaultEmptyState","CustomEmptyState","GroupedColumnsEmptyState","FullContentEmptyStateWithoutHeaders","EmptyStateWithControlBlockAndPagination"],Q=Object.freeze(Object.defineProperty({__proto__:null,CustomEmptyState:s,DefaultEmptyState:i,EmptyStateWithControlBlockAndPagination:m,FullContentEmptyStateWithoutHeaders:l,GroupedColumnsEmptyState:r,__namedExportsOrder:V,default:j},Symbol.toStringTag,{value:"Module"}));export{Q as E};
