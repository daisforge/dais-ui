import{j as d,r as C}from"./react-CAOzMBF_.js";import{s as g}from"./storySourceDoc-tVKyHcEN.js";import{T as m}from"./TableCanvas-BiviJwJT.js";import{w as S}from"./visual-helpers-D2PkjN1T.js";const E=700,j=1200,p=[],o=[{key:"id",name:"ID"},{key:"name",name:"Сотрудник"},{key:"status",name:"Статус"},{key:"team",name:"Команда"}],L=[{key:"employee-group",name:"Сотрудник",children:[{key:"id",name:"ID"},{key:"name",name:"ФИО"}]},{key:"meta-group",name:"Статус и команда",children:[{key:"status",name:"Статус"},{key:"team",name:"Команда"}]}],B=[];function f(n,u){const[e,t]=C.useState(!0),[w,b]=C.useState(n);return C.useEffect(()=>{t(!0),b(n);const v=setTimeout(()=>{b(u),t(!1)},j);return()=>{clearTimeout(v)}},[u,n]),{columnConfig:w,isLoading:e}}const N={title:"Локальные компоненты/TableCanvas/ErrorState",tags:["!autodocs"],parameters:{docs:{description:{component:"Все demo-сценарии специально проходят через loading, чтобы в Storybook не было промежуточного broken-image кадра у ErrorPage/EmptyState."}}}},y=`
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
`,a={play:S("Не удалось загрузить данные"),name:"Default Error State",...g({preCode:y,previewSource:"shown"}),render:()=>{const{columnConfig:n,isLoading:u}=f(o,o);return d.jsx(m,{tableConfig:{containerStyle:{height:E},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Имитируем запрос перед переходом к errorState."},errorState:u?void 0:{enabled:!0}},columnConfig:n,rows:p})}},i={play:S("Не удалось получить актуальные данные"),name:"Custom Error State",...g({preCode:y,previewSource:"shown"}),render:()=>{const{columnConfig:n,isLoading:u}=f(o,o),e={enabled:!0,statusCode:503,customStatuses:{503:{title:"Не удалось получить актуальные данные",description:"Проверьте подключение или повторите попытку позже.",button:{label:"Повторить",view:"accent"}}},buttonHandler:()=>{}};return d.jsx(m,{tableConfig:{containerStyle:{height:E},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Сначала показываем loading, затем кастомный errorState."},errorState:u?void 0:e},columnConfig:n,rows:p})}},s={play:S("Сервис временно недоступен"),name:"Grouped Columns Error State",...g({preCode:y,previewSource:"shown"}),render:()=>{const{columnConfig:n,isLoading:u}=f(L,L),e={enabled:!0,statusCode:502,customStatuses:{502:{title:"Сервис временно недоступен",description:"Grouped headers остаются на месте, а ошибка показывается только в контентной области."}}};return d.jsx(m,{tableConfig:{containerStyle:{height:E},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Проверяем переход loading -> errorState при группировке колонок."},errorState:u?void 0:e},columnConfig:n,rows:p})}},l={play:S("Не удалось получить схему таблицы"),name:"Full Content Error State Without Headers",...g({preCode:y,previewSource:"shown"}),render:()=>{const{columnConfig:n,isLoading:u}=f(B,B),e={enabled:!0,unknownStatus:{title:"Не удалось получить схему таблицы",description:"Колонки не пришли с бэкенда, поэтому после loading errorState занимает всю content-область без заголовков."}};return d.jsx(m,{tableConfig:{containerStyle:{height:E},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Сначала ждём схему колонок с бэкенда, затем показываем full-content errorState."},errorState:u?void 0:e},columnConfig:n,rows:p})}},c={play:S("Не удалось получить список сотрудников"),name:"Error State With Control Block And Pagination",...g({preCode:y,previewSource:"shown"}),render:()=>{const{columnConfig:n,isLoading:u}=f(o,o),[e,t]=C.useState(1),[w,b]=C.useState(20),v={enabled:!0,statusCode:503,customStatuses:{503:{title:"Не удалось получить список сотрудников",description:"Проверяем, что errorState не ломает control block, пагинацию и настройку размера строк.",button:{label:"Повторить",view:"accent"}}},buttonHandler:()=>{}};return d.jsx(m,{tableConfig:{containerStyle:{height:E},rowSize:{default:"big",showInControl:!0},controlBlock:{rightSideInner:[{text:"Экспорт",view:"linkAccent",onClick:()=>{}}]},pagination:{count:48,perPage:w,value:e,responsiveSlots:!0,onChangePageValue(r,D){typeof r=="number"&&(t(r),D())},async onChange(r,D,Y){typeof r=="number"&&typeof D=="number"&&(t(r),b(D),Y())}},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Сначала показываем loading, затем проверяем errorState в окружении control block и pagination."},errorState:u?void 0:v},columnConfig:n,rows:p})}};var h,F,A;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(A=(F=a.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var k,T,P;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(P=(T=i.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var O,R,_;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(_=(R=s.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var I,G,H;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(H=(G=l.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var W,x,M;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(M=(x=c.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};const z=["DefaultErrorState","CustomErrorState","GroupedColumnsErrorState","FullContentErrorStateWithoutHeaders","ErrorStateWithControlBlockAndPagination"],Q=Object.freeze(Object.defineProperty({__proto__:null,CustomErrorState:i,DefaultErrorState:a,ErrorStateWithControlBlockAndPagination:c,FullContentErrorStateWithoutHeaders:l,GroupedColumnsErrorState:s,__namedExportsOrder:z,default:N},Symbol.toStringTag,{value:"Module"}));export{Q as E};
