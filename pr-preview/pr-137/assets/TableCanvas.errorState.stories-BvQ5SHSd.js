import{j as g,r as d}from"./react-CAOzMBF_.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{T as m}from"./TableCanvas-DlX-Wh2b.js";const S=700,Y=1200,E=[],o=[{key:"id",name:"ID"},{key:"name",name:"Сотрудник"},{key:"status",name:"Статус"},{key:"team",name:"Команда"}],v=[{key:"employee-group",name:"Сотрудник",children:[{key:"id",name:"ID"},{key:"name",name:"ФИО"}]},{key:"meta-group",name:"Статус и команда",children:[{key:"status",name:"Статус"},{key:"team",name:"Команда"}]}],D=[];function f(n,u){const[e,t]=d.useState(!0),[L,b]=d.useState(n);return d.useEffect(()=>{t(!0),b(n);const w=setTimeout(()=>{b(u),t(!1)},Y);return()=>{clearTimeout(w)}},[u,n]),{columnConfig:L,isLoading:e}}const j={title:"Локальные компоненты/TableCanvas/ErrorState",tags:["!autodocs"],parameters:{docs:{description:{component:"Все demo-сценарии специально проходят через loading, чтобы в Storybook не было промежуточного broken-image кадра у ErrorPage/EmptyState."}}}},p=`
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
`,a={name:"Default Error State",...C({preCode:p,previewSource:"shown"}),render:()=>{const{columnConfig:n,isLoading:u}=f(o,o);return g.jsx(m,{tableConfig:{containerStyle:{height:S},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Имитируем запрос перед переходом к errorState."},errorState:u?void 0:{enabled:!0}},columnConfig:n,rows:E})}},i={name:"Custom Error State",...C({preCode:p,previewSource:"shown"}),render:()=>{const{columnConfig:n,isLoading:u}=f(o,o),e={enabled:!0,statusCode:503,customStatuses:{503:{title:"Не удалось получить актуальные данные",description:"Проверьте подключение или повторите попытку позже.",button:{label:"Повторить",view:"accent"}}},buttonHandler:()=>{}};return g.jsx(m,{tableConfig:{containerStyle:{height:S},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Сначала показываем loading, затем кастомный errorState."},errorState:u?void 0:e},columnConfig:n,rows:E})}},s={name:"Grouped Columns Error State",...C({preCode:p,previewSource:"shown"}),render:()=>{const{columnConfig:n,isLoading:u}=f(v,v),e={enabled:!0,statusCode:502,customStatuses:{502:{title:"Сервис временно недоступен",description:"Grouped headers остаются на месте, а ошибка показывается только в контентной области."}}};return g.jsx(m,{tableConfig:{containerStyle:{height:S},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Проверяем переход loading -> errorState при группировке колонок."},errorState:u?void 0:e},columnConfig:n,rows:E})}},l={name:"Full Content Error State Without Headers",...C({preCode:p,previewSource:"shown"}),render:()=>{const{columnConfig:n,isLoading:u}=f(D,D),e={enabled:!0,unknownStatus:{title:"Не удалось получить схему таблицы",description:"Колонки не пришли с бэкенда, поэтому после loading errorState занимает всю content-область без заголовков."}};return g.jsx(m,{tableConfig:{containerStyle:{height:S},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Сначала ждём схему колонок с бэкенда, затем показываем full-content errorState."},errorState:u?void 0:e},columnConfig:n,rows:E})}},c={name:"Error State With Control Block And Pagination",...C({preCode:p,previewSource:"shown"}),render:()=>{const{columnConfig:n,isLoading:u}=f(o,o),[e,t]=d.useState(1),[L,b]=d.useState(20),w={enabled:!0,statusCode:503,customStatuses:{503:{title:"Не удалось получить список сотрудников",description:"Проверяем, что errorState не ломает control block, пагинацию и настройку размера строк.",button:{label:"Повторить",view:"accent"}}},buttonHandler:()=>{}};return g.jsx(m,{tableConfig:{containerStyle:{height:S},rowSize:{default:"big",showInControl:!0},controlBlock:{rightSideInner:[{text:"Экспорт",view:"linkAccent",onClick:()=>{}}]},pagination:{count:48,perPage:L,value:e,responsiveSlots:!0,onChangePageValue(r,y){typeof r=="number"&&(t(r),y())},async onChange(r,y,M){typeof r=="number"&&typeof y=="number"&&(t(r),b(y),M())}},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Сначала показываем loading, затем проверяем errorState в окружении control block и pagination."},errorState:u?void 0:w},columnConfig:n,rows:E})}};var h,k,A;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(A=(k=a.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var B,T,F;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(F=(T=i.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var P,O,R;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(R=(O=s.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var _,I,G;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(G=(I=l.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var H,W,x;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(x=(W=c.parameters)==null?void 0:W.docs)==null?void 0:x.source}}};const N=["DefaultErrorState","CustomErrorState","GroupedColumnsErrorState","FullContentErrorStateWithoutHeaders","ErrorStateWithControlBlockAndPagination"],J=Object.freeze(Object.defineProperty({__proto__:null,CustomErrorState:i,DefaultErrorState:a,ErrorStateWithControlBlockAndPagination:c,FullContentErrorStateWithoutHeaders:l,GroupedColumnsErrorState:s,__namedExportsOrder:N,default:j},Symbol.toStringTag,{value:"Module"}));export{J as E};
