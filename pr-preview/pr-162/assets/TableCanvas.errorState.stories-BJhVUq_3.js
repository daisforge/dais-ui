import{d as C,r as d}from"./react-D2T61mpp.js";import{s as m}from"./storySourceDoc-tVKyHcEN.js";import{T as g}from"./TableCanvas-DjwcEHD5.js";import{w as S}from"./visual-helpers-DRtjdCao.js";const E=700,Y=1200,f=[],o=[{key:"id",name:"ID"},{key:"name",name:"Сотрудник"},{key:"status",name:"Статус"},{key:"team",name:"Команда"}],k=[{key:"employee-group",name:"Сотрудник",children:[{key:"id",name:"ID"},{key:"name",name:"ФИО"}]},{key:"meta-group",name:"Статус и команда",children:[{key:"status",name:"Статус"},{key:"team",name:"Команда"}]}],L=[];function p(e,u){const[n,t]=d.useState(!0),[D,y]=d.useState(e);return d.useEffect(()=>{t(!0),y(e);const w=setTimeout(()=>{y(u),t(!1)},Y);return()=>{clearTimeout(w)}},[u,e]),{columnConfig:D,isLoading:n}}const j={title:"Локальные компоненты/TableCanvas/ErrorState",tags:["!autodocs"],parameters:{docs:{description:{component:"Все demo-сценарии специально проходят через loading, чтобы в Storybook не было промежуточного broken-image кадра у ErrorPage/EmptyState."}}}},b=`
import type { ErrorPageProps } from '@daisforge/ui';
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

type ErrorStateStoryConfig =
  {
    enabled: boolean;
    custom?: ReactNode;
  } & Partial<ErrorPageProps>;

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
`,a={play:S("Не удалось загрузить данные"),name:"Default Error State",...m({preCode:b,previewSource:"shown"}),render:()=>{const{columnConfig:e,isLoading:u}=p(o,o);return C.jsxDEV(g,{tableConfig:{containerStyle:{height:E},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Имитируем запрос перед переходом к errorState."},errorState:u?void 0:{enabled:!0}},columnConfig:e,rows:f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ErrorState/TableCanvas.errorState.stories.tsx",lineNumber:212,columnNumber:7},void 0)}},s={play:S("Не удалось получить актуальные данные"),name:"Custom Error State",...m({preCode:b,previewSource:"shown"}),render:()=>{const{columnConfig:e,isLoading:u}=p(o,o),n={enabled:!0,statusCode:503,customStatuses:{503:{title:"Не удалось получить актуальные данные",description:"Проверьте подключение или повторите попытку позже.",button:{label:"Повторить",view:"accent"}}},buttonHandler:()=>{}};return C.jsxDEV(g,{tableConfig:{containerStyle:{height:E},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Сначала показываем loading, затем кастомный errorState."},errorState:u?void 0:n},columnConfig:e,rows:f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ErrorState/TableCanvas.errorState.stories.tsx",lineNumber:262,columnNumber:7},void 0)}},i={play:S("Сервис временно недоступен"),name:"Grouped Columns Error State",...m({preCode:b,previewSource:"shown"}),render:()=>{const{columnConfig:e,isLoading:u}=p(k,k),n={enabled:!0,statusCode:502,customStatuses:{502:{title:"Сервис временно недоступен",description:"Grouped headers остаются на месте, а ошибка показывается только в контентной области."}}};return C.jsxDEV(g,{tableConfig:{containerStyle:{height:E},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Проверяем переход loading -> errorState при группировке колонок."},errorState:u?void 0:n},columnConfig:e,rows:f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ErrorState/TableCanvas.errorState.stories.tsx",lineNumber:308,columnNumber:7},void 0)}},l={play:S("Не удалось получить схему таблицы"),name:"Full Content Error State Without Headers",...m({preCode:b,previewSource:"shown"}),render:()=>{const{columnConfig:e,isLoading:u}=p(L,L),n={enabled:!0,unknownStatus:{title:"Не удалось получить схему таблицы",description:"Колонки не пришли с бэкенда, поэтому после loading errorState занимает всю content-область без заголовков."}};return C.jsxDEV(g,{tableConfig:{containerStyle:{height:E},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Сначала ждём схему колонок с бэкенда, затем показываем full-content errorState."},errorState:u?void 0:n},columnConfig:e,rows:f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ErrorState/TableCanvas.errorState.stories.tsx",lineNumber:352,columnNumber:7},void 0)}},c={play:S("Не удалось получить список сотрудников"),name:"Error State With Control Block And Pagination",...m({preCode:b,previewSource:"shown"}),render:()=>{const{columnConfig:e,isLoading:u}=p(o,o),[n,t]=d.useState(1),[D,y]=d.useState(20),w={enabled:!0,statusCode:503,customStatuses:{503:{title:"Не удалось получить список сотрудников",description:"Проверяем, что errorState не ломает control block, пагинацию и настройку размера строк.",button:{label:"Повторить",view:"accent"}}},buttonHandler:()=>{}};return C.jsxDEV(g,{tableConfig:{containerStyle:{height:E},rowSize:{default:"big",showInControl:!0},controlBlock:{rightSideInner:[{text:"Экспорт",view:"linkAccent",onClick:()=>{}}]},pagination:{count:48,perPage:D,value:n,responsiveSlots:!0,onChangePageValue(r,v){typeof r=="number"&&(t(r),v())},async onChange(r,v,M){typeof r=="number"&&typeof v=="number"&&(t(r),y(v),M())}},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Сначала показываем loading, затем проверяем errorState в окружении control block и pagination."},errorState:u?void 0:w},columnConfig:e,rows:f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ErrorState/TableCanvas.errorState.stories.tsx",lineNumber:406,columnNumber:7},void 0)}};var T,B,h;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  play: waitForCanvasState('Не удалось загрузить данные'),
  name: 'Default Error State',
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
        subtitle: 'Имитируем запрос перед переходом к errorState.'
      },
      errorState: isLoading ? undefined : {
        enabled: true
      }
    }} columnConfig={columnConfig} rows={EMPTY_ROWS} />;
  }
}`,...(h=(B=a.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var F,A,P;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  play: waitForCanvasState('Не удалось получить актуальные данные'),
  name: 'Custom Error State',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const {
      columnConfig,
      isLoading
    } = useLoadingColumns(flatColumnConfig, flatColumnConfig);
    const errorState: ErrorStateStoryConfig = {
      enabled: true,
      statusCode: 503,
      customStatuses: {
        503: {
          title: 'Не удалось получить актуальные данные',
          description: 'Проверьте подключение или повторите попытку позже.',
          button: {
            label: 'Повторить',
            view: 'accent'
          }
        }
      },
      buttonHandler: () => undefined
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
        subtitle: 'Сначала показываем loading, затем кастомный errorState.'
      },
      errorState: isLoading ? undefined : errorState
    }} columnConfig={columnConfig} rows={EMPTY_ROWS} />;
  }
}`,...(P=(A=s.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var O,R,_;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  play: waitForCanvasState('Сервис временно недоступен'),
  name: 'Grouped Columns Error State',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const {
      columnConfig,
      isLoading
    } = useLoadingColumns(groupedColumnConfig, groupedColumnConfig);
    const errorState: ErrorStateStoryConfig = {
      enabled: true,
      statusCode: 502,
      customStatuses: {
        502: {
          title: 'Сервис временно недоступен',
          description: 'Grouped headers остаются на месте, а ошибка показывается только в контентной области.'
        }
      }
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
        subtitle: 'Проверяем переход loading -> errorState при группировке колонок.'
      },
      errorState: isLoading ? undefined : errorState
    }} columnConfig={columnConfig} rows={EMPTY_ROWS} />;
  }
}`,...(_=(R=i.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var I,G,H;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  play: waitForCanvasState('Не удалось получить схему таблицы'),
  name: 'Full Content Error State Without Headers',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const {
      columnConfig,
      isLoading
    } = useLoadingColumns(emptyColumns, emptyColumns);
    const errorState: ErrorStateStoryConfig = {
      enabled: true,
      unknownStatus: {
        title: 'Не удалось получить схему таблицы',
        description: 'Колонки не пришли с бэкенда, поэтому после loading errorState занимает всю content-область без заголовков.'
      }
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
        subtitle: 'Сначала ждём схему колонок с бэкенда, затем показываем full-content errorState.'
      },
      errorState: isLoading ? undefined : errorState
    }} columnConfig={columnConfig} rows={EMPTY_ROWS} />;
  }
}`,...(H=(G=l.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var N,x,W;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  play: waitForCanvasState('Не удалось получить список сотрудников'),
  name: 'Error State With Control Block And Pagination',
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
    const errorState: ErrorStateStoryConfig = {
      enabled: true,
      statusCode: 503,
      customStatuses: {
        503: {
          title: 'Не удалось получить список сотрудников',
          description: 'Проверяем, что errorState не ломает control block, пагинацию и настройку размера строк.',
          button: {
            label: 'Повторить',
            view: 'accent'
          }
        }
      },
      buttonHandler: () => undefined
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
        subtitle: 'Сначала показываем loading, затем проверяем errorState в окружении control block и pagination.'
      },
      errorState: isLoading ? undefined : errorState
    }} columnConfig={columnConfig} rows={EMPTY_ROWS} />;
  }
}`,...(W=(x=c.parameters)==null?void 0:x.docs)==null?void 0:W.source}}};const V=["DefaultErrorState","CustomErrorState","GroupedColumnsErrorState","FullContentErrorStateWithoutHeaders","ErrorStateWithControlBlockAndPagination"],Q=Object.freeze(Object.defineProperty({__proto__:null,CustomErrorState:s,DefaultErrorState:a,ErrorStateWithControlBlockAndPagination:c,FullContentErrorStateWithoutHeaders:l,GroupedColumnsErrorState:i,__namedExportsOrder:V,default:j},Symbol.toStringTag,{value:"Module"}));export{Q as E};
