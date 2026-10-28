import{r as t,d as s}from"./react-D2T61mpp.js";import{f as O}from"./tableData-DVJFoYoT.js";import z from"./DocStoryTemplate-CjcIKVa0.js";import{s as B}from"./storySourceDoc-tVKyHcEN.js";import{C as d,T}from"./TableCanvas-B5gvBt57.js";const P={title:"Локальные компоненты/TableCanvas/SubRows",tags:["!autodocs"],parameters:{docs:{page:z}}},x=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,w={...B({preCode:x,previewSource:"shown"}),name:"Иерархичный вид",render:()=>{const[n]=t.useState(()=>O()),o=t.useMemo(()=>[{key:"block",name:"Блок / Трайб / Продукт",subRow:{keyOfColumnInSubRow:e=>{switch(e){case 0:return"block";case 1:return"tribe";default:return"product"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1}},{key:"blockActivity",name:"Активность блока"},{key:" ",name:"Локация трайба",subRow:{renderSubRowCell:(e,c)=>{var i;return c===1?s.jsxDEV(d.Container,{alignItems:"center",padding:{left:8},style:{width:"100%"},children:s.jsxDEV(d.Badge,{id:"kek",text:(i=e.row)==null?void 0:i.tribeZone,view:"accent",size:"m"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SubRows/TableCanvas.subRows.stories.tsx",lineNumber:79,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SubRows/TableCanvas.subRows.stories.tsx",lineNumber:74,columnNumber:19},void 0):""}}},{key:"q1",name:"Q1",subRow:{parentKeyAsDefault:!0}},{key:"q2",name:"Q2",subRow:{keyOfColumnInSubRow:"q1"}},{key:"q3",name:"Q3",subRow:{keyOfColumnInSubRow:"q1"}},{key:"q4",name:"Q4",subRow:{keyOfColumnInSubRow:"q1"}}],[]);return s.jsxDEV(T,{tableConfig:{containerStyle:{height:"85vh"},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},rowSize:{showInControl:!0,default:"big"},fullScreenEnabled:!0,resizableColumn:!0},columnConfig:o,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SubRows/TableCanvas.subRows.stories.tsx",lineNumber:127,columnNumber:7},void 0)}},p=10,R=["Москва","Санкт-Петербург","Казань","Новосибирск"],N=(n,o)=>({id:`${n}-c-${o}`,kind:"child",name:`Элемент ${o+1}`,activity:o%2===0?"Активен":"Неактивен",location:R[o%R.length],amount:`${(1e3+o*7).toLocaleString("ru-RU")} ₽`}),E=n=>{const o=n.loaded??0,e=n.total??0,c=Array.from({length:o},(i,C)=>N(n.id,C));return o<e&&c.push({id:`${n.id}-more`,kind:"loadMore",parentId:n.id,activity:"",location:"",amount:"",loaded:o,total:e,isLoading:n.isLoading}),c},G=n=>{const o=[8,3][n]??124e3,e={id:`g-${n}`,kind:"group",name:`Группа ${n+1}`,activity:`${o.toLocaleString("ru-RU")} элементов`,location:"—",amount:"—",total:o,loaded:Math.min(p,o),isLoading:!1};return e.subRows=E(e),e},_=n=>Array.from({length:n},(o,e)=>G(e)),$=["name","activity","location","amount"],K=`
const STEP = 10; // сколько детей догружаем за клик
const COL_KEYS = ['name', 'activity', 'location', 'amount'];

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

  // Служебная строка каждой группы объединяется на все колонки. Строка ищется
  // по ключу среди раскрытых; у свёрнутой группы регион просто не рисуется.
  const regions = useMemo(
    () =>
      groups
        .filter((g) => g.loaded < g.total)
        .map((g) => ({ rowKeys: [\`\${g.id}-more\`], colKeys: COL_KEYS })),
    [groups],
  );

  const columns = useMemo(
    () => [
      {
        key: 'name',
        name: 'Группа / Элемент',
        renderCell: ({ row }) => row.name,
        // фон служебной строки
        themeOverride: ({ row, theme }) => (row.kind === 'loadMore' ? { bgCell: theme.bgZebraRow } : undefined),
        subRow: {
          isColumnWithArrow: true,
          renderSubRowCell: ({ row, theme }) => {
            if (row.kind !== 'loadMore') return row.name;
            const step = Math.min(STEP, row.total - row.loaded);
            return (
              <Canvas.Container
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                padding={{ right: 12 }}
                style={{ width: '100%', height: '100%' }}
              >
                {row.isLoading ? (
                  <Canvas.Text color={theme.textMedium}>Загрузка…</Canvas.Text>
                ) : (
                  <Canvas.Container alignItems="center" style={{ cursor: 'pointer', height: '100%' }} onClick={() => handleLoadMore(row.parentId)}>
                    <Canvas.Text color={theme.accentColor}>{\`Показать ещё \${step}\`}</Canvas.Text>
                  </Canvas.Container>
                )}
                <Canvas.Text color={theme.textMedium}>{\`Показано \${row.loaded} из \${row.total}\`}</Canvas.Text>
              </Canvas.Container>
            );
          },
        },
      },
      { key: 'activity', name: 'Активность', subRow: { keyOfColumnInSubRow: 'activity' } },
      { key: 'location', name: 'Локация', subRow: { keyOfColumnInSubRow: 'location' } },
      { key: 'amount', name: 'Сумма', subRow: { keyOfColumnInSubRow: 'amount' } },
    ],
    [handleLoadMore],
  );

  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: 640 },
        appearance: { variant: 'clean' },
        subRows: { getSubRows: (r) => r.subRows, rowKeyGetter: (r) => r.id },
        mergeCells: { mergedCellsRegions: regions, rowKeyGetter: (r) => r.id },
      }}
      columnConfig={columns}
      rows={groups}
    />
  );
};
`,b={...B({preCode:x,code:K,type:"code",previewSource:"shown"}),name:"Ленивая подгрузка детей группы",render:()=>{const[n,o]=t.useState(()=>_(45)),[e,c]=t.useState(15),[i,C]=t.useState(1),g=t.useMemo(()=>n.slice((i-1)*e,i*e),[n,i,e]),y=t.useCallback(u=>{o(r=>r.map(a=>{if(a.id!==u)return a;const l={...a,isLoading:!0};return l.subRows=E(l),l})),setTimeout(()=>{o(r=>r.map(a=>{if(a.id!==u)return a;const l=Math.min((a.loaded??0)+p,a.total??0),m={...a,loaded:l,isLoading:!1};return m.subRows=E(m),m}))},700)},[]),L=t.useMemo(()=>g.filter(u=>(u.loaded??0)<(u.total??0)).map(u=>({rowKeys:[`${u.id}-more`],colKeys:$})),[g]),M=t.useMemo(()=>[{key:"name",name:"Группа / Элемент",minWidth:320,resizable:!0,renderCell:({row:u})=>u.name,themeOverride:({row:u,theme:r})=>u.kind==="loadMore"?{bgCell:r.bgZebraRow}:void 0,subRow:{isColumnWithArrow:!0,renderSubRowCell:({row:u,theme:r})=>{const a=u;if(a.kind!=="loadMore")return a.name;const l=a.loaded??0,m=a.total??0,I=Math.min(p,m-l);return s.jsxDEV(d.Container,{direction:"row",alignItems:"center",justifyContent:"space-between",padding:{right:12},style:{width:"100%",height:"100%"},children:[a.isLoading?s.jsxDEV(d.Text,{color:r.textMedium,children:"Загрузка…"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SubRows/TableCanvas.subRows.stories.tsx",lineNumber:444,columnNumber:21},void 0):s.jsxDEV(d.Container,{alignItems:"center",style:{cursor:"pointer",height:"100%"},onClick:()=>y(a.parentId),children:s.jsxDEV(d.Text,{color:r.accentColor,children:`Показать ещё ${I}`},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SubRows/TableCanvas.subRows.stories.tsx",lineNumber:453,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SubRows/TableCanvas.subRows.stories.tsx",lineNumber:448,columnNumber:21},void 0),s.jsxDEV(d.Text,{color:r.textMedium,children:`Показано ${l.toLocaleString("ru-RU")} из ${m.toLocaleString("ru-RU")}`},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SubRows/TableCanvas.subRows.stories.tsx",lineNumber:458,columnNumber:19},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SubRows/TableCanvas.subRows.stories.tsx",lineNumber:436,columnNumber:17},void 0)}}},{key:"activity",name:"Активность",minWidth:180,subRow:{keyOfColumnInSubRow:"activity"}},{key:"location",name:"Локация",minWidth:180,subRow:{keyOfColumnInSubRow:"location"}},{key:"amount",name:"Сумма",minWidth:160,subRow:{keyOfColumnInSubRow:"amount"}}],[y]);return s.jsxDEV(T,{tableConfig:{containerStyle:{height:640},appearance:{variant:"clean"},subRows:{getSubRows:u=>u.subRows,rowKeyGetter:u=>u.id},mergeCells:{mergedCellsRegions:L,rowKeyGetter:u=>u.id},resizableColumn:!0,controlBlock:{show:!0},pagination:{count:n.length,perPage:e,value:i,responsiveSlots:!0,onChangePageValue(u,r){typeof u=="number"&&(C(u),r())},onChange(u,r,a){typeof u=="number"&&typeof r=="number"&&(C(u),c(r),a())}}},columnConfig:M,rows:g},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SubRows/TableCanvas.subRows.stories.tsx",lineNumber:491,columnNumber:7},void 0)}};var h,v,f;w.parameters={...w.parameters,docs:{...(h=w.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Иерархичный вид',
  render: () => {
    // Разная глубина и число детей у строк — «рваная лестница» отступов
    const [rows] = useState(() => createRaggedRowsTree());
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
            default:
              return 'product';
          }
        },
        isColumnWithArrow: true,
        hideHeaderExpandAllArrow: false
      }
    }, {
      key: 'blockActivity',
      name: 'Активность блока'
    }, {
      key: ' ',
      name: 'Локация трайба',
      subRow: {
        renderSubRowCell: (props, lvl) => {
          if (lvl === 1) {
            return <Canvas.Container alignItems="center" padding={{
              left: 8
            }} style={{
              width: '100%'
            }}>
                    <Canvas.Badge id="kek" text={props.row?.tribeZone} view="accent" size="m" />
                  </Canvas.Container>;
          }
          return '';
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
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '85vh'
      },
      subRows: {
        getSubRows: row => row?.subRows,
        rowKeyGetter: row => row.id
      },
      // Отступ уровня зависит от размера строки: big 16/66/116,
      // medium 6/42/78, small 4/32/60 px
      rowSize: {
        showInControl: true,
        default: 'big'
      },
      fullScreenEnabled: true,
      resizableColumn: true
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(f=(v=w.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var k,S,A,D,F;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
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

    // Служебная строка каждой группы объединяется на все колонки.
    const regions = useMemo(() => pageRows.filter(g => (g.loaded ?? 0) < (g.total ?? 0)).map(g => ({
      rowKeys: [\`\${g.id}-more\`],
      colKeys: LAZY_COL_KEYS
    })), [pageRows]);
    const columns = useMemo((): readonly ColumnConfig<LazyRow>[] => [{
      key: 'name',
      name: 'Группа / Элемент',
      // Без width колонка растягивается на свободное место, minWidth — нижняя граница.
      minWidth: 320,
      resizable: true,
      renderCell: ({
        row
      }) => row.name,
      // Фон служебной строки.
      themeOverride: ({
        row,
        theme
      }) => row.kind === 'loadMore' ? {
        bgCell: theme.bgZebraRow
      } : undefined,
      subRow: {
        isColumnWithArrow: true,
        renderSubRowCell: ({
          row,
          theme
        }) => {
          const lazyRow = row as LazyRow;
          if (lazyRow.kind !== 'loadMore') {
            return lazyRow.name;
          }
          const loaded = lazyRow.loaded ?? 0;
          const total = lazyRow.total ?? 0;
          const step = Math.min(LAZY_STEP, total - loaded);
          return <Canvas.Container direction="row" alignItems="center" justifyContent="space-between" padding={{
            right: 12
          }} style={{
            width: '100%',
            height: '100%'
          }}>
                  {lazyRow.isLoading ? <Canvas.Text color={theme.textMedium}>
                      Загрузка…
                    </Canvas.Text> : <Canvas.Container alignItems="center" style={{
              cursor: 'pointer',
              height: '100%'
            }} onClick={() => handleLoadMore(lazyRow.parentId as string)}>
                      <Canvas.Text color={theme.accentColor}>
                        {\`Показать ещё \${step}\`}
                      </Canvas.Text>
                    </Canvas.Container>}
                  <Canvas.Text color={theme.textMedium}>
                    {\`Показано \${loaded.toLocaleString('ru-RU')} из \${total.toLocaleString('ru-RU')}\`}
                  </Canvas.Text>
                </Canvas.Container>;
        }
      }
    }, {
      key: 'activity',
      name: 'Активность',
      minWidth: 180,
      subRow: {
        keyOfColumnInSubRow: 'activity'
      }
    }, {
      key: 'location',
      name: 'Локация',
      minWidth: 180,
      subRow: {
        keyOfColumnInSubRow: 'location'
      }
    }, {
      key: 'amount',
      name: 'Сумма',
      minWidth: 160,
      subRow: {
        keyOfColumnInSubRow: 'amount'
      }
    }], [handleLoadMore]);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 640
      },
      // «Чистый» вид: без линий сетки и рамок.
      appearance: {
        variant: 'clean'
      },
      subRows: {
        getSubRows: r => r.subRows,
        rowKeyGetter: r => r.id
      },
      mergeCells: {
        mergedCellsRegions: regions,
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
      }
    }} columnConfig={columns} rows={pageRows} />;
  }
}`,...(A=(S=b.parameters)==null?void 0:S.docs)==null?void 0:A.source},description:{story:`### Ленивая подгрузка детей группы («Показать ещё»)

Детей у группы может быть очень много, и грузить их все сразу нельзя. Таблица
ничего об этом не знает: подгрузка собирается из трёх штатных возможностей.

1. **Дерево.** \`subRows.getSubRows\` возвращает то, что потребитель сам положил в
   строку: загруженные дети плюс одна служебная строка \`loadMore\` в конце.
2. **Строка во всю ширину.** \`mergeCells.mergedCellsRegions\`: для каждой служебной
   строки задан регион на все колонки. Регион ищется по ключу среди раскрытых
   строк, у свёрнутой группы он просто не рисуется.
3. **Свой вид и клик.** \`renderSubRowCell\` для служебной строки возвращает
   \`Canvas.Container\` со ссылкой «Показать ещё N» и счётчиком
   «Показано X из Y». По клику потребитель догружает следующую порцию и
   пересобирает \`subRows\` группы. Когда всё загружено, служебная строка
   исчезает сама. Фон строки задаётся через \`themeOverride\`.

Вид чистый (\`appearance: { variant: 'clean' }\`), колонки без \`width\` растягиваются
на всю ширину.

Пагинация внизу работает по корневым строкам (группам), подгрузка — внутри
каждой группы независимо. Тот же приём для legacy Table — в разделе
Table / SubRows.`,...(F=(D=b.parameters)==null?void 0:D.docs)==null?void 0:F.description}}};const j=["SubRows","LazyLoadChildren"],Q=Object.freeze(Object.defineProperty({__proto__:null,LazyLoadChildren:b,SubRows:w,__namedExportsOrder:j,default:P},Symbol.toStringTag,{value:"Module"}));export{Q as T};
