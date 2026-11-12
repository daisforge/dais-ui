import{j as C,r as c}from"./react-CAOzMBF_.js";import{s as g}from"./storySourceDoc-tVKyHcEN.js";import{T as p}from"./TableCanvas-Bae0Z40F.js";import{w as d}from"./visual-helpers-D2PkjN1T.js";const y=700,j=1200,S=[],t=[{key:"id",name:"ID"},{key:"name",name:"Сотрудник"},{key:"status",name:"Статус"},{key:"team",name:"Команда"}],L=[{key:"employee-group",name:"Сотрудник",children:[{key:"id",name:"ID"},{key:"name",name:"ФИО"}]},{key:"meta-group",name:"Статус и команда",children:[{key:"status",name:"Статус"},{key:"team",name:"Команда"}]}],B=[];function E(n,u){const[e,o]=c.useState(!0),[D,b]=c.useState(n);return c.useEffect(()=>{o(!0),b(n);const w=setTimeout(()=>{b(u),o(!1)},j);return()=>{clearTimeout(w)}},[u,n]),{columnConfig:D,isLoading:e}}const N={title:"Локальные компоненты/TableCanvas/EmptyState",tags:["!autodocs"],parameters:{docs:{description:{component:"Все demo-сценарии специально проходят через loading, чтобы в Storybook не было промежуточного broken-image кадра у EmptyState."}}}},f=`
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
`,i={play:d("Нет данных по заданным параметрам"),name:"Default Empty State",...g({preCode:f,previewSource:"shown"}),render:()=>{const{columnConfig:n,isLoading:u}=E(t,t);return C.jsx(p,{tableConfig:{containerStyle:{height:y},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Имитируем загрузку перед переходом к emptyState."},emptyState:u?void 0:{enabled:!0}},columnConfig:n,rows:S})}},r={play:d("Нет заявок для выбранного периода"),name:"Custom Empty State",...g({preCode:f,previewSource:"shown"}),render:()=>{const{columnConfig:n,isLoading:u}=E(t,t),e={enabled:!0,title:"Нет заявок для выбранного периода",subtitle:"Измените фильтры или создайте новую заявку.",variant:"no-content",buttons:[{type:"button",props:{children:"Создать заявку",view:"accent",onClick:()=>{}}}]};return C.jsx(p,{tableConfig:{containerStyle:{height:y},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Сначала показываем loading, затем кастомный emptyState."},emptyState:u?void 0:e},columnConfig:n,rows:S})}},s={play:d("Нет результатов по выбранным фильтрам"),name:"Grouped Columns Empty State",...g({preCode:f,previewSource:"shown"}),render:()=>{const{columnConfig:n,isLoading:u}=E(L,L),e={enabled:!0,title:"Нет результатов по выбранным фильтрам",subtitle:"Grouped headers остаются видимыми, а empty state отображается ниже шапки таблицы.",variant:"not-result"};return C.jsx(p,{tableConfig:{containerStyle:{height:y},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Проверяем переход loading -> emptyState при группировке колонок."},emptyState:u?void 0:e},columnConfig:n,rows:S})}},l={play:d("Не удалось получить схему таблицы"),name:"Full Content Empty State Without Headers",...g({preCode:f,previewSource:"shown"}),render:()=>{const{columnConfig:n,isLoading:u}=E(B,B),e={enabled:!0,title:"Не удалось получить схему таблицы",subtitle:"Колонки не пришли с бэкенда, поэтому после loading emptyState занимает всю content-область без заголовков.",variant:"not-result"};return C.jsx(p,{tableConfig:{containerStyle:{height:y},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Сначала ждём схему колонок с бэкенда, затем показываем full-content emptyState."},emptyState:u?void 0:e},columnConfig:n,rows:S})}},m={play:d("Нет записей на текущей странице"),name:"Empty State With Control Block And Pagination",...g({preCode:f,previewSource:"shown"}),render:()=>{const{columnConfig:n,isLoading:u}=E(t,t),[e,o]=c.useState(1),[D,b]=c.useState(20),w={enabled:!0,title:"Нет записей на текущей странице",subtitle:"Проверяем, что состояние не ломает control block, пагинацию и настройку размера строк.",variant:"not-result"};return C.jsx(p,{tableConfig:{containerStyle:{height:y},rowSize:{default:"big",showInControl:!0},controlBlock:{rightSideInner:[{text:"Экспорт",view:"linkAccent",onClick:()=>{}}]},pagination:{count:48,perPage:D,value:e,responsiveSlots:!0,onChangePageValue(a,v){typeof a=="number"&&(o(a),v())},async onChange(a,v,Y){typeof a=="number"&&typeof v=="number"&&(o(a),b(v),Y())}},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Сначала показываем loading, затем проверяем emptyState в окружении control block и pagination."},emptyState:u?void 0:w},columnConfig:n,rows:S})}};var h,F,k;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(k=(F=i.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var A,T,P;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(P=(T=r.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var O,R,_;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(_=(R=s.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var I,G,H;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(H=(G=l.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var W,x,M;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(M=(x=m.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};const z=["DefaultEmptyState","CustomEmptyState","GroupedColumnsEmptyState","FullContentEmptyStateWithoutHeaders","EmptyStateWithControlBlockAndPagination"],Q=Object.freeze(Object.defineProperty({__proto__:null,CustomEmptyState:r,DefaultEmptyState:i,EmptyStateWithControlBlockAndPagination:m,FullContentEmptyStateWithoutHeaders:l,GroupedColumnsEmptyState:s,__namedExportsOrder:z,default:N},Symbol.toStringTag,{value:"Module"}));export{Q as E};
