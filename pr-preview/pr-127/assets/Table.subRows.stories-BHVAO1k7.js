import{r as l,d as i}from"./react-D2T61mpp.js";import{a as x}from"./tableData-DVJFoYoT.js";import M from"./DocStoryTemplate-CnJlkrRG.js";import{s as B}from"./storySourceDoc-tVKyHcEN.js";import{f as F}from"./Table-893Vj1rS.js";import{H as O}from"./styled-components-C6nqWEvq.js";import{s as P,J as z}from"./@salutejs/sdds-finai-BWYHBdru.js";const I={title:"Локальные компоненты/Table/SubRows",tags:["!autodocs"],parameters:{docs:{page:M}}},L=`
import React, { useMemo, useState } from 'react';
import { Badge, ColumnConfig, Table } from '@daisforge/ui';
`,m={...B({preCode:L,previewSource:"shown"}),name:"Иерархичный вид",render:()=>{const[e]=l.useState(()=>x()),n=l.useMemo(()=>[{key:"block",name:"Блок / Трайб / Продукт",subRow:{keyOfColumnInSubRow:u=>{switch(u){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1},resizable:!0},{key:"blockActivity",name:"Активность блока"},{key:"",minWidth:170,name:"Локация трайба",subRow:{renderSubRowCell:(u,t)=>{var a;return t===1?i.jsxDEV(P,{view:"accent",size:"m",children:(a=u.row)==null?void 0:a.tribeZone},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.subRows/Table.subRows.stories.tsx",lineNumber:78,columnNumber:19},void 0):null}}},{key:"q1",name:"Q1",subRow:{parentKeyAsDefault:!0}},{key:"q2",name:"Q2",subRow:{keyOfColumnInSubRow:"q1"}},{key:"q3",name:"Q3",subRow:{keyOfColumnInSubRow:"q1"}},{key:"q4",name:"Q4",subRow:{keyOfColumnInSubRow:"q1"}}],[]);return i.jsxDEV(F,{tableConfig:{containerStyle:{height:"700px"},subRows:{getSubRows:u=>u==null?void 0:u.subRows,rowKeyGetter:u=>u.id},resizableColumn:!0},columnConfig:n,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.subRows/Table.subRows.stories.tsx",lineNumber:122,columnNumber:7},void 0)}},g=10,E=["Москва","Санкт-Петербург","Казань","Новосибирск"],N=(e,n)=>({id:`${e}-c-${n}`,kind:"child",name:`Элемент ${n+1}`,activity:n%2===0?"Активен":"Неактивен",location:E[n%E.length],amount:`${(1e3+n*7).toLocaleString("ru-RU")} ₽`}),p=e=>{const n=e.loaded??0,u=e.total??0,t=Array.from({length:n},(a,b)=>N(e.id,b));return n<u&&t.push({id:`${e.id}-more`,kind:"loadMore",parentId:e.id,activity:"",location:"",amount:"",loaded:n,total:u,isLoading:e.isLoading}),t},G=e=>{const n=[8,3][e]??124e3,u={id:`g-${e}`,kind:"group",name:`Группа ${e+1}`,activity:`${n.toLocaleString("ru-RU")} элементов`,location:"—",amount:"—",total:n,loaded:Math.min(g,n),isLoading:!1};return u.subRows=p(u),u},W=e=>Array.from({length:e},(n,u)=>G(u)),_=4,q=O.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--text-secondary);
`,j=({row:e,onLoadMore:n})=>{const u=e.loaded??0,t=e.total??0,a=Math.min(g,t-u);return i.jsxDEV(q,{children:[e.isLoading?i.jsxDEV("span",{children:"Загрузка…"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.subRows/Table.subRows.stories.tsx",lineNumber:251,columnNumber:9},void 0):i.jsxDEV(z,{size:"s",view:"accent",onClick:()=>n(e.parentId),children:["Показать ещё ",a]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.subRows/Table.subRows.stories.tsx",lineNumber:253,columnNumber:9},void 0),i.jsxDEV("span",{children:["Показано ",u.toLocaleString("ru-RU")," из"," ",t.toLocaleString("ru-RU")]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.subRows/Table.subRows.stories.tsx",lineNumber:261,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.subRows/Table.subRows.stories.tsx",lineNumber:249,columnNumber:5},void 0)},V=`
const STEP = 10; // сколько детей догружаем за клик
const COLS = 4; // число колонок — на столько растягиваем служебную строку

// Дети группы для таблицы: загруженные + служебная строка «Показать ещё», пока есть что грузить.
const buildSubRows = (group) => {
  const children = Array.from({ length: group.loaded }, (_, i) => makeChild(group.id, i));
  if (group.loaded < group.total) {
    children.push({ id: \`\${group.id}-more\`, kind: 'loadMore', parentId: group.id, ...group });
  }
  return children;
};

export const Example = () => {
  const [groups, setGroups] = useState(createGroups);

  // Догрузка следующей пачки детей: сначала состояние загрузки, потом «ответ сервера».
  const handleLoadMore = useCallback((groupId) => {
    setGroups((prev) => prev.map((g) => (g.id === groupId ? withSubRows({ ...g, isLoading: true }) : g)));
    setTimeout(() => {
      setGroups((prev) =>
        prev.map((g) =>
          g.id === groupId
            ? withSubRows({ ...g, loaded: Math.min(g.loaded + STEP, g.total), isLoading: false })
            : g,
        ),
      );
    }, 700);
  }, []);

  const columns = useMemo(
    () => [
      {
        key: 'name',
        name: 'Группа / Элемент',
        // служебная строка занимает все колонки
        colSpan: (args) => (args.type === 'ROW' && args.row.kind === 'loadMore' ? COLS : undefined),
        cellClass: (row) => (row.kind === 'loadMore' ? 'df-load-more' : undefined),
        renderCell: ({ row }) => row.name,
        subRow: {
          isColumnWithArrow: true,
          renderSubRowCell: ({ row }) =>
            row.kind === 'loadMore' ? <LoadMoreRow row={row} onLoadMore={handleLoadMore} /> : row.name,
        },
      },
      { key: 'activity', name: 'Активность', subRow: { keyOfColumnInSubRow: 'activity' } },
      { key: 'location', name: 'Локация', subRow: { keyOfColumnInSubRow: 'location' } },
      { key: 'amount', name: 'Сумма', subRow: { keyOfColumnInSubRow: 'amount' } },
    ],
    [handleLoadMore],
  );

  return (
    <Table
      tableConfig={{
        containerStyle: { height: 640 },
        subRows: { getSubRows: (r) => r.subRows, rowKeyGetter: (r) => r.id },
        // фон объединённой строки «Показать ещё»
        css: \`
          & .rdg-cell.df-load-more { background: var(--surface-transparent-secondary); }
          & .rdg-cell.df-load-more .cell-content.cell-subrow { width: 100%; }
        \`,
      }}
      columnConfig={columns}
      rows={groups}
    />
  );
};
`,d={...B({preCode:L,code:V,type:"code",previewSource:"shown"}),name:"Ленивая подгрузка детей группы",render:()=>{const[e,n]=l.useState(()=>W(45)),[u,t]=l.useState(15),[a,b]=l.useState(1),T=l.useMemo(()=>e.slice((a-1)*u,a*u),[e,a,u]),R=l.useCallback(o=>{n(r=>r.map(s=>{if(s.id!==o)return s;const c={...s,isLoading:!0};return c.subRows=p(c),c})),setTimeout(()=>{n(r=>r.map(s=>{if(s.id!==o)return s;const c=Math.min((s.loaded??0)+g,s.total??0),w={...s,loaded:c,isLoading:!1};return w.subRows=p(w),w}))},700)},[]),v=l.useMemo(()=>[{key:"name",name:"Группа / Элемент",minWidth:280,resizable:!0,colSpan:o=>o.type==="ROW"&&o.row.kind==="loadMore"?_:void 0,cellClass:o=>o.kind==="loadMore"?"df-load-more":void 0,renderCell:o=>o.row.name,subRow:{isColumnWithArrow:!0,renderSubRowCell:o=>{const r=o.row;return r.kind==="loadMore"?i.jsxDEV(j,{row:r,onLoadMore:R},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.subRows/Table.subRows.stories.tsx",lineNumber:425,columnNumber:24},void 0):r.name}}},{key:"activity",name:"Активность",minWidth:160,subRow:{keyOfColumnInSubRow:"activity"}},{key:"location",name:"Локация",minWidth:160,subRow:{keyOfColumnInSubRow:"location"}},{key:"amount",name:"Сумма",minWidth:140,subRow:{keyOfColumnInSubRow:"amount"}}],[R]);return i.jsxDEV(F,{tableConfig:{containerStyle:{height:640},subRows:{getSubRows:o=>o.subRows,rowKeyGetter:o=>o.id},resizableColumn:!0,controlBlock:{show:!0},pagination:{count:e.length,perPage:u,value:a,responsiveSlots:!0,onChangePageValue(o,r){typeof o=="number"&&(b(o),r())},onChange(o,r,s){typeof o=="number"&&typeof r=="number"&&(b(o),t(r),s())}},css:`
            & .rdg-cell.df-load-more {
              background: var(--surface-transparent-secondary);
            }
            & .rdg-cell.df-load-more .cell-content.cell-subrow {
              width: 100%;
            }
          `},columnConfig:v,rows:T},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.subRows/Table.subRows.stories.tsx",lineNumber:454,columnNumber:7},void 0)}};var f,y,C;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Иерархичный вид',
  render: () => {
    const [rows] = useState(() => createRowsTree());
    const columns = useMemo((): readonly ColumnConfig<TreeRow>[] => [{
      key: 'block',
      name: 'Блок / Трайб / Продукт',
      subRow: {
        keyOfColumnInSubRow: lvl => {
          switch (lvl) {
            case 0:
              return 'block';
            case 1:
              return 'tribe';
            case 2:
              return 'product';
            default:
              return 'block';
          }
        },
        isColumnWithArrow: true,
        hideHeaderExpandAllArrow: false
      },
      resizable: true
    }, {
      key: 'blockActivity',
      name: 'Активность блока'
    }, {
      key: '',
      minWidth: 170,
      name: 'Локация трайба',
      subRow: {
        renderSubRowCell: (props, lvl) => {
          if (lvl === 1) {
            return <Badge view="accent" size="m">
                    {props.row?.tribeZone}
                  </Badge>;
          }
          return null;
        }
      }
    }, {
      key: 'q1',
      name: 'Q1',
      subRow: {
        parentKeyAsDefault: true
      }
    }, {
      key: 'q2',
      name: 'Q2',
      subRow: {
        keyOfColumnInSubRow: 'q1'
      }
    }, {
      key: 'q3',
      name: 'Q3',
      subRow: {
        keyOfColumnInSubRow: 'q1'
      }
    }, {
      key: 'q4',
      name: 'Q4',
      subRow: {
        keyOfColumnInSubRow: 'q1'
      }
    }], []);
    return <Table tableConfig={{
      containerStyle: {
        height: '700px'
      },
      subRows: {
        getSubRows: row => row?.subRows,
        rowKeyGetter: row => row.id
      },
      resizableColumn: true
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(C=(y=m.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var k,h,S,A,D;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    code: LAZY_LOAD_CODE,
    type: 'code',
    previewSource: 'shown'
  }),
  name: 'Ленивая подгрузка детей группы',
  render: () => {
    const [allGroups, setAllGroups] = useState<LazyRow[]>(() => createLazyGroups(45));
    const [perPage, setPerPage] = useState(15);
    const [currentPage, setCurrentPage] = useState(1);

    // Пагинация по корневым строкам (группам).
    const pageRows = useMemo(() => allGroups.slice((currentPage - 1) * perPage, currentPage * perPage), [allGroups, currentPage, perPage]);

    // Догрузка следующей пачки детей группы: сначала состояние загрузки на
    // служебной строке, потом имитация ответа сервера.
    const handleLoadMore = useCallback((groupId: string) => {
      setAllGroups(prev => prev.map(g => {
        if (g.id !== groupId) return g;
        const loading = {
          ...g,
          isLoading: true
        };
        loading.subRows = buildLazySubRows(loading);
        return loading;
      }));
      setTimeout(() => {
        setAllGroups(prev => prev.map(g => {
          if (g.id !== groupId) return g;
          const loaded = Math.min((g.loaded ?? 0) + LAZY_STEP, g.total ?? 0);
          const next = {
            ...g,
            loaded,
            isLoading: false
          };
          next.subRows = buildLazySubRows(next);
          return next;
        }));
      }, 700);
    }, []);
    const columns = useMemo((): readonly ColumnConfig<LazyRow>[] => [{
      key: 'name',
      name: 'Группа / Элемент',
      minWidth: 280,
      resizable: true,
      // Служебная строка занимает все колонки.
      colSpan: args => args.type === 'ROW' && (args.row as LazyRow).kind === 'loadMore' ? LAZY_COLS : undefined,
      // Класс для фона служебной строки, стили в tableConfig.css.
      cellClass: row => (row as LazyRow).kind === 'loadMore' ? 'df-load-more' : undefined,
      renderCell: props => (props.row as LazyRow).name,
      subRow: {
        isColumnWithArrow: true,
        renderSubRowCell: props => {
          const row = props.row as LazyRow;
          if (row.kind === 'loadMore') {
            return <LoadMoreRow row={row} onLoadMore={handleLoadMore} />;
          }
          return row.name;
        }
      }
    }, {
      key: 'activity',
      name: 'Активность',
      minWidth: 160,
      subRow: {
        keyOfColumnInSubRow: 'activity'
      }
    }, {
      key: 'location',
      name: 'Локация',
      minWidth: 160,
      subRow: {
        keyOfColumnInSubRow: 'location'
      }
    }, {
      key: 'amount',
      name: 'Сумма',
      minWidth: 140,
      subRow: {
        keyOfColumnInSubRow: 'amount'
      }
    }], [handleLoadMore]);
    return <Table tableConfig={{
      containerStyle: {
        height: 640
      },
      subRows: {
        getSubRows: r => r.subRows,
        rowKeyGetter: r => r.id
      },
      resizableColumn: true,
      controlBlock: {
        show: true
      },
      pagination: {
        count: allGroups.length,
        perPage,
        value: currentPage,
        responsiveSlots: true,
        onChangePageValue(page, scrollToTop) {
          if (typeof page === 'number') {
            setCurrentPage(page);
            scrollToTop();
          }
        },
        onChange(page, pp, scrollToTop) {
          if (typeof page === 'number' && typeof pp === 'number') {
            setCurrentPage(page);
            setPerPage(pp);
            scrollToTop();
          }
        }
      },
      // Фон объединённой строки «Показать ещё» на всю ширину.
      css: \`
            & .rdg-cell.df-load-more {
              background: var(--surface-transparent-secondary);
            }
            & .rdg-cell.df-load-more .cell-content.cell-subrow {
              width: 100%;
            }
          \`
    }} columnConfig={columns} rows={pageRows} />;
  }
}`,...(S=(h=d.parameters)==null?void 0:h.docs)==null?void 0:S.source},description:{story:`### Ленивая подгрузка детей группы («Показать ещё»)

Детей у группы может быть очень много, и грузить их все сразу нельзя. Таблица
ничего об этом не знает: подгрузка собирается из трёх штатных возможностей.

1. **Дерево.** \`subRows.getSubRows\` возвращает то, что потребитель сам положил в
   строку: загруженные дети плюс одна служебная строка \`loadMore\` в конце.
2. **Строка во всю ширину.** \`colSpan\` первой колонки для служебной строки
   возвращает число колонок, и ячейка растягивается на всю строку.
3. **Свой вид и клик.** \`renderSubRowCell\` для служебной строки рисует кнопку
   «Показать ещё N» и счётчик «Показано X из Y». По клику потребитель догружает
   следующую порцию и пересобирает \`subRows\` группы. Когда всё загружено,
   служебная строка исчезает сама.

Пагинация внизу работает по корневым строкам (группам), подгрузка — внутри
каждой группы независимо. Тот же приём для TableCanvas — в разделе
TableCanvas / SubRows.`,...(D=(A=d.parameters)==null?void 0:A.docs)==null?void 0:D.description}}};const Z=["SubRows","LazyLoadChildren"],J=Object.freeze(Object.defineProperty({__proto__:null,LazyLoadChildren:d,SubRows:m,__namedExportsOrder:Z,default:I},Symbol.toStringTag,{value:"Module"}));export{J as T};
