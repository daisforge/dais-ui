import{d,r as c}from"./react-D2T61mpp.js";import{s as g}from"./storySourceDoc-tVKyHcEN.js";import{T as C}from"./TableCanvas-CqlmicUJ.js";const p=700,M=1200,y=[],t=[{key:"id",name:"ID"},{key:"name",name:"Сотрудник"},{key:"status",name:"Статус"},{key:"team",name:"Команда"}],L=[{key:"employee-group",name:"Сотрудник",children:[{key:"id",name:"ID"},{key:"name",name:"ФИО"}]},{key:"meta-group",name:"Статус и команда",children:[{key:"status",name:"Статус"},{key:"team",name:"Команда"}]}],w=[];function S(e,u){const[n,o]=c.useState(!0),[v,E]=c.useState(e);return c.useEffect(()=>{o(!0),E(e);const k=setTimeout(()=>{E(u),o(!1)},M);return()=>{clearTimeout(k)}},[u,e]),{columnConfig:v,isLoading:n}}const Y={title:"Локальные компоненты/TableCanvas/EmptyState",tags:["!autodocs"],parameters:{docs:{description:{component:"Все demo-сценарии специально проходят через loading, чтобы в Storybook не было промежуточного broken-image кадра у EmptyState."}}}},f=`
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
`,i={name:"Default Empty State",...g({preCode:f,previewSource:"shown"}),render:()=>{const{columnConfig:e,isLoading:u}=S(t,t);return d.jsxDEV(C,{tableConfig:{containerStyle:{height:p},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Имитируем загрузку перед переходом к emptyState."},emptyState:u?void 0:{enabled:!0}},columnConfig:e,rows:y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.EmptyState/Table.emptyState.stories.tsx",lineNumber:209,columnNumber:7},void 0)}},s={name:"Custom Empty State",...g({preCode:f,previewSource:"shown"}),render:()=>{const{columnConfig:e,isLoading:u}=S(t,t),n={enabled:!0,title:"Нет заявок для выбранного периода",subtitle:"Измените фильтры или создайте новую заявку.",variant:"no-content",buttons:[{type:"button",props:{children:"Создать заявку",view:"accent",onClick:()=>{}}}]};return d.jsxDEV(C,{tableConfig:{containerStyle:{height:p},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Сначала показываем loading, затем кастомный emptyState."},emptyState:u?void 0:n},columnConfig:e,rows:y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.EmptyState/Table.emptyState.stories.tsx",lineNumber:259,columnNumber:7},void 0)}},r={name:"Grouped Columns Empty State",...g({preCode:f,previewSource:"shown"}),render:()=>{const{columnConfig:e,isLoading:u}=S(L,L),n={enabled:!0,title:"Нет результатов по выбранным фильтрам",subtitle:"Grouped headers остаются видимыми, а empty state отображается ниже шапки таблицы.",variant:"not-result"};return d.jsxDEV(C,{tableConfig:{containerStyle:{height:p},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Проверяем переход loading -> emptyState при группировке колонок."},emptyState:u?void 0:n},columnConfig:e,rows:y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.EmptyState/Table.emptyState.stories.tsx",lineNumber:300,columnNumber:7},void 0)}},l={name:"Full Content Empty State Without Headers",...g({preCode:f,previewSource:"shown"}),render:()=>{const{columnConfig:e,isLoading:u}=S(w,w),n={enabled:!0,title:"Не удалось получить схему таблицы",subtitle:"Колонки не пришли с бэкенда, поэтому после loading emptyState занимает всю content-область без заголовков.",variant:"not-result"};return d.jsxDEV(C,{tableConfig:{containerStyle:{height:p},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Сначала ждём схему колонок с бэкенда, затем показываем full-content emptyState."},emptyState:u?void 0:n},columnConfig:e,rows:y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.EmptyState/Table.emptyState.stories.tsx",lineNumber:342,columnNumber:7},void 0)}},m={name:"Empty State With Control Block And Pagination",...g({preCode:f,previewSource:"shown"}),render:()=>{const{columnConfig:e,isLoading:u}=S(t,t),[n,o]=c.useState(1),[v,E]=c.useState(20),k={enabled:!0,title:"Нет записей на текущей странице",subtitle:"Проверяем, что состояние не ломает control block, пагинацию и настройку размера строк.",variant:"not-result"};return d.jsxDEV(C,{tableConfig:{containerStyle:{height:p},rowSize:{default:"big",showInControl:!0},controlBlock:{rightSideInner:[{text:"Экспорт",view:"linkAccent",onClick:()=>{}}]},pagination:{count:48,perPage:v,value:n,responsiveSlots:!0,onChangePageValue(a,b){typeof a=="number"&&(o(a),b())},async onChange(a,b,W){typeof a=="number"&&typeof b=="number"&&(o(a),E(b),W())}},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Сначала показываем loading, затем проверяем emptyState в окружении control block и pagination."},emptyState:u?void 0:k},columnConfig:e,rows:y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.EmptyState/Table.emptyState.stories.tsx",lineNumber:386,columnNumber:7},void 0)}};var h,D,T;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(T=(D=i.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var A,B,P;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(P=(B=s.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var F,O,R;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(R=(O=r.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var _,I,G;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(G=(I=l.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var N,x,H;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(H=(x=m.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};const j=["DefaultEmptyState","CustomEmptyState","GroupedColumnsEmptyState","FullContentEmptyStateWithoutHeaders","EmptyStateWithControlBlockAndPagination"],J=Object.freeze(Object.defineProperty({__proto__:null,CustomEmptyState:s,DefaultEmptyState:i,EmptyStateWithControlBlockAndPagination:m,FullContentEmptyStateWithoutHeaders:l,GroupedColumnsEmptyState:r,__namedExportsOrder:j,default:Y},Symbol.toStringTag,{value:"Module"}));export{J as E};
