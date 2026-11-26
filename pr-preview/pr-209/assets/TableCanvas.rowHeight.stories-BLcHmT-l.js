import{r,b as e}from"./react-UEdzNlUe.js";import{c as z}from"./tableData-DKA5H0bF.js";import q from"./DocStoryTemplate-Bp_65ajo.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{a as J}from"./StoriesUtils-B6bCuApl.js";import{C as o,T as w,e as K}from"./TableCanvas-B_P4Nr_o.js";const Q={title:"Локальные компоненты/TableCanvas/RowHeight",tags:["!autodocs"],parameters:{docs:{page:q}},component:J},b=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,m={...C({preCode:b,previewSource:"shown"}),name:"Row height",render:()=>{const[s]=r.useState(z),n=r.useMemo(()=>[{key:"id",name:"id"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"loremIpsum",name:"Длинный текст",width:500,renderCell:({row:i,theme:l})=>e.jsxDEV(o.Container,{padding:8,children:e.jsxDEV(o.Container,{children:e.jsxDEV(o.Text,{font:l.baseFontStyle,lineHeight:1.85,wordWrap:!0,children:i.loremIpsum},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:69,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:68,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:67,columnNumber:13},void 0)},{key:"complete",name:"% Complete"}],[]),a=r.useRef(500),t=r.useCallback((i,l)=>{i.id==="loremIpsum"&&(a.current=l)},[]),u=r.useCallback((i,l)=>{const U=a.current-32,$=Math.max(1,Math.round(U/11.5)),G=22-2,X=i.loremIpsum.length,P=Math.ceil(X/$),Z=Number(K[l.rowSizeName].cell["padding-block"].slice(0,-2)),p=G*P+Z*2;return p>l.rowSizeValue?p:l.rowSizeValue},[]);return e.jsxDEV(w,{tableConfig:{containerStyle:{height:700},rowHeight:u,onColumnResize:t},columnConfig:n,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:125,columnNumber:7},void 0)}},c={...C({preCode:b,previewSource:"shown"}),name:"Auto row height (перенос текста)",render:()=>{const[s]=r.useState(z),n=r.useMemo(()=>[{key:"id",name:"id"},{key:"task",name:"Title"},{key:"loremIpsum",name:"Длинный текст",width:360,renderCell:({row:a,theme:t})=>e.jsxDEV(o.Container,{alignItems:"center",padding:{left:8,right:8},children:e.jsxDEV(o.Text,{font:t.baseFontStyle,wordWrap:!0,children:a.loremIpsum},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:160,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:156,columnNumber:13},void 0)},{key:"short",name:"Без переноса",width:160,renderCell:({row:a})=>a.task}],[]);return e.jsxDEV(w,{tableConfig:{containerStyle:{height:700},rowHeight:"auto"},columnConfig:n,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:177,columnNumber:7},void 0)}},Y={Новая:"default","В работе":"accent",Готово:"positive"},f=["дизайн","frontend","релиз","backend","аналитика","тестирование"],ee=()=>Array.from({length:60},(s,n)=>({id:String(n+1),title:`Задача ${n+1}: ${"согласовать макет и уточнить требования ".repeat(n%3+1)}`,description:n%4===0?"Короткое описание":"Подробное описание задачи: что нужно сделать, кого позвать на ревью и какие риски учесть до релиза.",status:["Новая","В работе","Готово"][n%3]??"Новая",tags:f.slice(0,f.length-n%f.length)})),h={...C({preCode:b,previewSource:"shown"}),name:"Вёрстка ячейки на flex (кнопки, бейджи, перенос, wrap)",render:()=>{const[s]=r.useState(ee),n=r.useMemo(()=>[{key:"id",name:"#",width:56},{key:"title",name:"Задача",width:480,renderCell:({row:a,theme:t})=>e.jsxDEV(o.Container,{direction:"column",justifyContent:"center",gap:6,padding:{left:8,right:8},style:{width:"100%"},children:[e.jsxDEV(o.Container,{direction:"row",alignItems:"center",gap:8,style:{width:"100%"},children:[e.jsxDEV(o.Text,{font:t.baseFontStyle,wordWrap:!0,style:{flexGrow:1,flexShrink:1},children:a.title},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:256,columnNumber:17},void 0),e.jsxDEV(o.Badge,{text:a.status,view:Y[a.status],size:"s",style:{flexShrink:0}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:263,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:250,columnNumber:15},void 0),e.jsxDEV(o.Text,{font:t.baseFontStyle,color:t.textLight,wordWrap:!0,children:a.description},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:270,columnNumber:15},void 0),e.jsxDEV(o.Container,{direction:"row",alignItems:"center",gap:8,style:{width:"100%"},children:[e.jsxDEV(o.Container,{wrap:"wrap",gap:6,style:{flexGrow:1,flexShrink:1},children:a.tags.map(u=>e.jsxDEV(o.Badge,{text:u,view:"light",size:"xs"},u,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:289,columnNumber:21},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:283,columnNumber:17},void 0),e.jsxDEV(o.Button,{view:"accent",size:"xs",style:{flexShrink:0},onClick:()=>console.debug("open",a.id),children:"Открыть"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:292,columnNumber:17},void 0),e.jsxDEV(o.Button,{view:"secondary",size:"xs",style:{flexShrink:0},onClick:()=>console.debug("assign",a.id),children:"Назначить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:301,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:277,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:243,columnNumber:13},void 0)},{key:"status",name:"Статус",width:120,renderCell:({row:a})=>a.status}],[]);return e.jsxDEV(w,{tableConfig:{containerStyle:{height:700},rowHeight:"auto"},columnConfig:n,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:325,columnNumber:7},void 0)}},M=120,T=["Цифровизация","Стратегическое направление «Розничный бизнес»","Развитие корпоративного сегмента и работа с ключевыми клиентами","ИТ"],k=["Центральный аппарат","Территориальный банк: Северо-Западный","Управление по работе с крупнейшими клиентами и холдингами"],ne=()=>Array.from({length:5e3},(s,n)=>({id:n,direction:T[n%T.length]??"",division:k[n%k.length]??"",comment:n%5===0?"Плановое значение пересмотрено после квартального комитета, факт уточняется":"",values:Array.from({length:M},(a,t)=>(n*7919+t*104729)%1e6)})),v=s=>({row:n,theme:a})=>e.jsxDEV(o.Container,{alignItems:"center",padding:{left:8,right:8},children:e.jsxDEV(o.Text,{font:a.baseFontStyle,wordWrap:!0,children:n[s]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:381,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:380,columnNumber:7},void 0),g={...C({preCode:b,previewSource:"shown"}),name:"Auto row height: широкая таблица (120 показателей)",render:()=>{const[s]=r.useState(ne),n=r.useMemo(()=>[{key:"direction",name:"Направление",width:220,renderCell:v("direction")},{key:"division",name:"Подразделение",width:200,renderCell:v("division")},...Array.from({length:M},(a,t)=>({key:`metric${t}`,name:`Показатель ${t+1}`,width:120,renderCell:({row:u})=>{var i;return e.jsxDEV(o.Container,{alignItems:"center",justifyContent:"flex-end",padding:{left:8,right:8},children:e.jsxDEV(o.Text,{children:(i=u.values[t])==null?void 0:i.toLocaleString("ru-RU")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:422,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:417,columnNumber:15},void 0)}})),{key:"comment",name:"Комментарий",width:240,renderCell:v("comment")}],[]);return e.jsxDEV(w,{tableConfig:{containerStyle:{height:700},rowHeight:"auto"},columnConfig:n,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:441,columnNumber:7},void 0)}},oe=1e6,ae=1e3,y=["Коротко","Плановое значение пересмотрено","Плановое значение пересмотрено после квартального комитета, факт уточняется","Плановое значение пересмотрено после квартального комитета, факт уточняется у подразделения и будет обновлён в следующем отчётном периоде"],te=()=>Array.from({length:oe},(s,n)=>({id:n+1})),se=`
// Строка — только id, значения ячеек считаются при отрисовке
const rows = Array.from({ length: 1_000_000 }, (_, index) => ({ id: index + 1 }));

const columnConfig = [
  { key: 'id', name: '№', width: 100 },
  ...Array.from({ length: 999 }, (_, index) => ({
    key: \`c\${index}\`,
    name: \`Колонка \${index + 1}\`,
    width: index % 10 === 0 ? 240 : 110,
    renderCell: ({ row, theme }) => (
      <Canvas.Container alignItems="center" padding={{ left: 8, right: 8 }}>
        {index % 10 === 0 ? (
          <Canvas.Text font={theme.baseFontStyle} wordWrap>
            {TEXTS[(row.id + index) % TEXTS.length]}
          </Canvas.Text>
        ) : (
          <Canvas.Text>{(row.id * 31 + index) % 100_000}</Canvas.Text>
        )}
      </Canvas.Container>
    ),
  })),
];

<TableCanvas tableConfig={{ rowHeight: 'auto' }} columnConfig={columnConfig} rows={rows} />
`,d={...C({code:se,previewSource:"shown"}),name:"Auto row height: 1 000 000 строк × 1000 колонок",render:()=>{const[s]=r.useState(te),n=r.useMemo(()=>[{key:"id",name:"№",width:100},...Array.from({length:ae-1},(a,t)=>({key:`c${t}`,name:`Колонка ${t+1}`,width:t%10===0?240:110,renderCell:({row:u,theme:i})=>e.jsxDEV(o.Container,{alignItems:"center",padding:{left:8,right:8},children:t%10===0?e.jsxDEV(o.Text,{font:i.baseFontStyle,wordWrap:!0,children:y[(u.id+t)%y.length]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:516,columnNumber:19},void 0):e.jsxDEV(o.Text,{children:(u.id*31+t)%1e5},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:520,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:511,columnNumber:15},void 0)}))],[]);return e.jsxDEV(w,{tableConfig:{containerStyle:{height:700},rowHeight:"auto"},columnConfig:n,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:531,columnNumber:7},void 0)}};var x,S,H;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Row height',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'id'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'loremIpsum',
      name: 'Длинный текст',
      width: 500,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container padding={8}>
              <Canvas.Container>
                <Canvas.Text font={theme.baseFontStyle} lineHeight={1.85} wordWrap>
                  {row.loremIpsum}
                </Canvas.Text>
              </Canvas.Container>
            </Canvas.Container>
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);

    // Функция высоты не знает ширину колонки: после ресайза берём её из onColumnResize
    const loremWidthRef = useRef(500);
    const onColumnResize = useCallback((column: {
      id?: string;
    }, newSize: number) => {
      if (column.id === 'loremIpsum') loremWidthRef.current = newSize;
    }, []);
    const rowHeight: RowHeightFunc<Row> = useCallback((r, currenRowSize) => {
      const symbolWidth = 11.5;
      const paddingInline = 16;
      const widthOfLoremCol = loremWidthRef.current - paddingInline * 2;
      const symbolsInOneLine = Math.max(1, Math.round(widthOfLoremCol / symbolWidth));
      const heightOfLineInitial = 22; // в css
      const heightOfLine = heightOfLineInitial - 2; // скорректированный

      const allSymbols = r.loremIpsum.length;
      const countOfLine = Math.ceil(allSymbols / symbolsInOneLine);
      const paddingBlock = Number(SIZES[currenRowSize.rowSizeName].cell['padding-block'].slice(0, -2));
      const neededHeight = heightOfLine * countOfLine + paddingBlock * 2;
      return neededHeight > currenRowSize.rowSizeValue ? neededHeight : currenRowSize.rowSizeValue;
    }, []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 700
      },
      rowHeight,
      onColumnResize
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(H=(S=m.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var E,N,R;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Auto row height (перенос текста)',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'id'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'loremIpsum',
      name: 'Длинный текст',
      width: 360,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container alignItems="center" padding={{
        left: 8,
        right: 8
      }}>
              <Canvas.Text font={theme.baseFontStyle} wordWrap>
                {row.loremIpsum}
              </Canvas.Text>
            </Canvas.Container>
    }, {
      key: 'short',
      name: 'Без переноса',
      width: 160,
      renderCell: ({
        row
      }) => row.task
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 700
      },
      rowHeight: 'auto'
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(R=(N=c.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var D,A,I;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Вёрстка ячейки на flex (кнопки, бейджи, перенос, wrap)',
  render: () => {
    const [rows] = useState(createTaskRows);
    const columnConfig = useMemo<readonly ColumnConfig<TaskRow>[]>(() => [{
      key: 'id',
      name: '#',
      width: 56
    }, {
      key: 'title',
      name: 'Задача',
      width: 480,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container direction="column" justifyContent="center" gap={6} padding={{
        left: 8,
        right: 8
      }} style={{
        width: '100%'
      }}>
              <Canvas.Container direction="row" alignItems="center" gap={8} style={{
          width: '100%'
        }}>
                <Canvas.Text font={theme.baseFontStyle} wordWrap style={{
            flexGrow: 1,
            flexShrink: 1
          }}>
                  {row.title}
                </Canvas.Text>
                <Canvas.Badge text={row.status} view={STATUS_VIEW[row.status]} size="s" style={{
            flexShrink: 0
          }} />
              </Canvas.Container>
              <Canvas.Text font={theme.baseFontStyle} color={theme.textLight} wordWrap>
                {row.description}
              </Canvas.Text>
              <Canvas.Container direction="row" alignItems="center" gap={8} style={{
          width: '100%'
        }}>
                <Canvas.Container wrap="wrap" gap={6} style={{
            flexGrow: 1,
            flexShrink: 1
          }}>
                  {row.tags.map(tag => <Canvas.Badge key={tag} text={tag} view="light" size="xs" />)}
                </Canvas.Container>
                <Canvas.Button view="accent" size="xs" style={{
            flexShrink: 0
          }}
          // eslint-disable-next-line no-console
          onClick={() => console.debug('open', row.id)}>
                  Открыть
                </Canvas.Button>
                <Canvas.Button view="secondary" size="xs" style={{
            flexShrink: 0
          }}
          // eslint-disable-next-line no-console
          onClick={() => console.debug('assign', row.id)}>
                  Назначить
                </Canvas.Button>
              </Canvas.Container>
            </Canvas.Container>
    }, {
      key: 'status',
      name: 'Статус',
      width: 120,
      renderCell: ({
        row
      }) => row.status
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 700
      },
      rowHeight: 'auto'
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(I=(A=h.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var B,j,F;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Auto row height: широкая таблица (120 показателей)',
  render: () => {
    const [rows] = useState(createReportRows);
    const columnConfig = useMemo<readonly ColumnConfig<ReportRow>[]>(() => [{
      key: 'direction',
      name: 'Направление',
      width: 220,
      renderCell: wrappedText('direction')
    }, {
      key: 'division',
      name: 'Подразделение',
      width: 200,
      renderCell: wrappedText('division')
    }, ...Array.from({
      length: REPORT_METRICS
    }, (_, index): ColumnConfig<ReportRow> => ({
      key: \`metric\${index}\`,
      name: \`Показатель \${index + 1}\`,
      width: 120,
      renderCell: ({
        row
      }) => <Canvas.Container alignItems="center" justifyContent="flex-end" padding={{
        left: 8,
        right: 8
      }}>
                <Canvas.Text>
                  {row.values[index]?.toLocaleString('ru-RU')}
                </Canvas.Text>
              </Canvas.Container>
    })),
    // Колонка с переносом в конце таблицы: строки дорастут, когда до неё прокрутят
    {
      key: 'comment',
      name: 'Комментарий',
      width: 240,
      renderCell: wrappedText('comment')
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 700
      },
      rowHeight: 'auto'
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(F=(j=g.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var V,_,O,W,L;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...storySourceDoc({
    code: hugeRowHeightCode,
    previewSource: 'shown'
  }),
  name: 'Auto row height: 1 000 000 строк × 1000 колонок',
  render: () => {
    const [rows] = useState(createHugeRows);
    const columnConfig = useMemo<readonly ColumnConfig<HugeRow>[]>(() => [{
      key: 'id',
      name: '№',
      width: 100
    }, ...Array.from({
      length: HUGE_COLUMNS - 1
    }, (_, index): ColumnConfig<HugeRow> => ({
      key: \`c\${index}\`,
      name: \`Колонка \${index + 1}\`,
      width: index % 10 === 0 ? 240 : 110,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container alignItems="center" padding={{
        left: 8,
        right: 8
      }}>
                {index % 10 === 0 ? <Canvas.Text font={theme.baseFontStyle} wordWrap>
                    {HUGE_TEXTS[(row.id + index) % HUGE_TEXTS.length]}
                  </Canvas.Text> : <Canvas.Text>{(row.id * 31 + index) % 100_000}</Canvas.Text>}
              </Canvas.Container>
    }))], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 700
      },
      rowHeight: 'auto'
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(O=(_=d.parameters)==null?void 0:_.docs)==null?void 0:O.source},description:{story:"Миллион строк и тысяча колонок: меряются только видимые ячейки",...(L=(W=d.parameters)==null?void 0:W.docs)==null?void 0:L.description}}};const re=["RowHeight","AutoRowHeight","FlexLayoutCell","AutoRowHeightWideTable","AutoRowHeightHuge"],we=Object.freeze(Object.defineProperty({__proto__:null,AutoRowHeight:c,AutoRowHeightHuge:d,AutoRowHeightWideTable:g,FlexLayoutCell:h,RowHeight:m,__namedExportsOrder:re,default:Q},Symbol.toStringTag,{value:"Module"}));export{we as T};
