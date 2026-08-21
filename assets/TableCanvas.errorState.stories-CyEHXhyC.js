import{d as C,r as d}from"./react-D2T61mpp.js";import{s as m}from"./storySourceDoc-tVKyHcEN.js";import{T as g}from"./TableCanvas-CtAM7TT2.js";const S=700,M=1200,E=[],o=[{key:"id",name:"ID"},{key:"name",name:"Сотрудник"},{key:"status",name:"Статус"},{key:"team",name:"Команда"}],k=[{key:"employee-group",name:"Сотрудник",children:[{key:"id",name:"ID"},{key:"name",name:"ФИО"}]},{key:"meta-group",name:"Статус и команда",children:[{key:"status",name:"Статус"},{key:"team",name:"Команда"}]}],L=[];function f(e,u){const[n,t]=d.useState(!0),[v,b]=d.useState(e);return d.useEffect(()=>{t(!0),b(e);const w=setTimeout(()=>{b(u),t(!1)},M);return()=>{clearTimeout(w)}},[u,e]),{columnConfig:v,isLoading:n}}const Y={title:"Локальные компоненты/TableCanvas/ErrorState",tags:["!autodocs"],parameters:{docs:{description:{component:"Все demo-сценарии специально проходят через loading, чтобы в Storybook не было промежуточного broken-image кадра у ErrorPage/EmptyState."}}}},p=`
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
`,a={name:"Default Error State",...m({preCode:p,previewSource:"shown"}),render:()=>{const{columnConfig:e,isLoading:u}=f(o,o);return C.jsxDEV(g,{tableConfig:{containerStyle:{height:S},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Имитируем запрос перед переходом к errorState."},errorState:u?void 0:{enabled:!0}},columnConfig:e,rows:E},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ErrorState/TableCanvas.errorState.stories.tsx",lineNumber:209,columnNumber:7},void 0)}},s={name:"Custom Error State",...m({preCode:p,previewSource:"shown"}),render:()=>{const{columnConfig:e,isLoading:u}=f(o,o),n={enabled:!0,statusCode:503,customStatuses:{503:{title:"Не удалось получить актуальные данные",description:"Проверьте подключение или повторите попытку позже.",button:{label:"Повторить",view:"accent"}}},buttonHandler:()=>{}};return C.jsxDEV(g,{tableConfig:{containerStyle:{height:S},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Сначала показываем loading, затем кастомный errorState."},errorState:u?void 0:n},columnConfig:e,rows:E},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ErrorState/TableCanvas.errorState.stories.tsx",lineNumber:258,columnNumber:7},void 0)}},i={name:"Grouped Columns Error State",...m({preCode:p,previewSource:"shown"}),render:()=>{const{columnConfig:e,isLoading:u}=f(k,k),n={enabled:!0,statusCode:502,customStatuses:{502:{title:"Сервис временно недоступен",description:"Grouped headers остаются на месте, а ошибка показывается только в контентной области."}}};return C.jsxDEV(g,{tableConfig:{containerStyle:{height:S},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Проверяем переход loading -> errorState при группировке колонок."},errorState:u?void 0:n},columnConfig:e,rows:E},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ErrorState/TableCanvas.errorState.stories.tsx",lineNumber:303,columnNumber:7},void 0)}},l={name:"Full Content Error State Without Headers",...m({preCode:p,previewSource:"shown"}),render:()=>{const{columnConfig:e,isLoading:u}=f(L,L),n={enabled:!0,unknownStatus:{title:"Не удалось получить схему таблицы",description:"Колонки не пришли с бэкенда, поэтому после loading errorState занимает всю content-область без заголовков."}};return C.jsxDEV(g,{tableConfig:{containerStyle:{height:S},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Сначала ждём схему колонок с бэкенда, затем показываем full-content errorState."},errorState:u?void 0:n},columnConfig:e,rows:E},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ErrorState/TableCanvas.errorState.stories.tsx",lineNumber:346,columnNumber:7},void 0)}},c={name:"Error State With Control Block And Pagination",...m({preCode:p,previewSource:"shown"}),render:()=>{const{columnConfig:e,isLoading:u}=f(o,o),[n,t]=d.useState(1),[v,b]=d.useState(20),w={enabled:!0,statusCode:503,customStatuses:{503:{title:"Не удалось получить список сотрудников",description:"Проверяем, что errorState не ломает control block, пагинацию и настройку размера строк.",button:{label:"Повторить",view:"accent"}}},buttonHandler:()=>{}};return C.jsxDEV(g,{tableConfig:{containerStyle:{height:S},rowSize:{default:"big",showInControl:!0},controlBlock:{rightSideInner:[{text:"Экспорт",view:"linkAccent",onClick:()=>{}}]},pagination:{count:48,perPage:v,value:n,responsiveSlots:!0,onChangePageValue(r,y){typeof r=="number"&&(t(r),y())},async onChange(r,y,W){typeof r=="number"&&typeof y=="number"&&(t(r),b(y),W())}},isLoading:{boolean:u,skeletonRowsCount:5},loadingOverlay:{active:u,subtitle:"Сначала показываем loading, затем проверяем errorState в окружении control block и pagination."},errorState:u?void 0:w},columnConfig:e,rows:E},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ErrorState/TableCanvas.errorState.stories.tsx",lineNumber:399,columnNumber:7},void 0)}};var D,T,h;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(h=(T=a.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var A,B,F;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(F=(B=s.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var P,O,R;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(R=(O=i.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var _,I,G;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(G=(I=l.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var H,N,x;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(x=(N=c.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};const j=["DefaultErrorState","CustomErrorState","GroupedColumnsErrorState","FullContentErrorStateWithoutHeaders","ErrorStateWithControlBlockAndPagination"],J=Object.freeze(Object.defineProperty({__proto__:null,CustomErrorState:s,DefaultErrorState:a,ErrorStateWithControlBlockAndPagination:c,FullContentErrorStateWithoutHeaders:l,GroupedColumnsErrorState:i,__namedExportsOrder:j,default:Y},Symbol.toStringTag,{value:"Module"}));export{J as E};
