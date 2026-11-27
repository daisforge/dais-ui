import{r as s,b as e}from"./react-UEdzNlUe.js";import{c as M}from"./tableData-DKA5H0bF.js";import J from"./DocStoryTemplate-Bp_65ajo.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{a as K}from"./StoriesUtils-C8LM7WN0.js";import{C as o,T as b,e as Q}from"./TableCanvas-33_ur2fk.js";const Y={title:"Локальные компоненты/TableCanvas/RowHeight",tags:["!autodocs"],parameters:{docs:{page:J}},component:K},f=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,c={...w({preCode:f,previewSource:"shown"}),name:"Row height",render:()=>{const[t]=s.useState(M),n=s.useMemo(()=>[{key:"id",name:"id"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"loremIpsum",name:"Длинный текст",width:500,renderCell:({row:m,theme:i})=>e.jsxDEV(o.Container,{padding:8,children:e.jsxDEV(o.Container,{children:e.jsxDEV(o.Text,{font:i.baseFontStyle,lineHeight:1.85,wordWrap:!0,children:m.loremIpsum},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:63,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:62,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:61,columnNumber:13},void 0)},{key:"complete",name:"% Complete"}],[]),[a,u]=s.useState(500),r=s.useCallback((m,i)=>{m.id==="loremIpsum"&&u(i)},[]),l=s.useCallback((m,i)=>{const $=a-32,G=Math.max(1,Math.round($/11.5)),X=22-2,P=m.loremIpsum.length,Z=Math.ceil(P/G),q=Number(Q[i.rowSizeName].cell["padding-block"].slice(0,-2)),T=X*Z+q*2;return T>i.rowSizeValue?T:i.rowSizeValue},[a]);return e.jsxDEV(b,{tableConfig:{containerStyle:{height:700},rowHeight:l,onColumnResize:r},columnConfig:n,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:123,columnNumber:7},void 0)}},h={...w({preCode:f,previewSource:"shown"}),name:"Auto row height (перенос текста)",render:()=>{const[t]=s.useState(M),n=s.useMemo(()=>[{key:"id",name:"id"},{key:"task",name:"Title"},{key:"loremIpsum",name:"Длинный текст",width:360,renderCell:({row:a,theme:u})=>e.jsxDEV(o.Container,{alignItems:"center",padding:{left:8,right:8},children:e.jsxDEV(o.Text,{font:u.baseFontStyle,wordWrap:!0,children:a.loremIpsum},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:158,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:154,columnNumber:13},void 0)},{key:"short",name:"Без переноса",width:160,renderCell:({row:a})=>a.task}],[]);return e.jsxDEV(b,{tableConfig:{containerStyle:{height:700},rowHeight:"auto"},columnConfig:n,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:175,columnNumber:7},void 0)}},ee={Новая:"default","В работе":"accent",Готово:"positive"},v=["дизайн","frontend","релиз","backend","аналитика","тестирование"],ne=()=>Array.from({length:60},(t,n)=>({id:String(n+1),title:`Задача ${n+1}: ${"согласовать макет и уточнить требования ".repeat(n%3+1)}`,description:n%4===0?"Короткое описание":"Подробное описание задачи: что нужно сделать, кого позвать на ревью и какие риски учесть до релиза.",status:["Новая","В работе","Готово"][n%3]??"Новая",tags:v.slice(0,v.length-n%v.length)})),g={...w({preCode:f,previewSource:"shown"}),name:"Вёрстка ячейки на flex (кнопки, бейджи, перенос, wrap)",render:()=>{const[t]=s.useState(ne),n=s.useMemo(()=>[{key:"id",name:"#",width:56},{key:"title",name:"Задача",width:480,renderCell:({row:a,theme:u})=>e.jsxDEV(o.Container,{direction:"column",justifyContent:"center",gap:6,padding:{left:8,right:8},style:{width:"100%"},children:[e.jsxDEV(o.Container,{direction:"row",alignItems:"center",gap:8,style:{width:"100%"},children:[e.jsxDEV(o.Text,{font:u.baseFontStyle,wordWrap:!0,style:{flexGrow:1,flexShrink:1},children:a.title},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:254,columnNumber:17},void 0),e.jsxDEV(o.Badge,{text:a.status,view:ee[a.status],size:"s",style:{flexShrink:0}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:261,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:248,columnNumber:15},void 0),e.jsxDEV(o.Text,{font:u.baseFontStyle,color:u.textLight,wordWrap:!0,children:a.description},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:268,columnNumber:15},void 0),e.jsxDEV(o.Container,{direction:"row",alignItems:"center",gap:8,style:{width:"100%"},children:[e.jsxDEV(o.Container,{wrap:"wrap",gap:6,style:{flexGrow:1,flexShrink:1},children:a.tags.map(r=>e.jsxDEV(o.Badge,{text:r,view:"light",size:"xs"},r,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:287,columnNumber:21},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:281,columnNumber:17},void 0),e.jsxDEV(o.Button,{view:"accent",size:"xs",style:{flexShrink:0},onClick:()=>console.debug("open",a.id),children:"Открыть"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:290,columnNumber:17},void 0),e.jsxDEV(o.Button,{view:"secondary",size:"xs",style:{flexShrink:0},onClick:()=>console.debug("assign",a.id),children:"Назначить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:299,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:275,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:241,columnNumber:13},void 0)},{key:"status",name:"Статус",width:120,renderCell:({row:a})=>a.status}],[]);return e.jsxDEV(b,{tableConfig:{containerStyle:{height:700},rowHeight:"auto"},columnConfig:n,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:323,columnNumber:7},void 0)}},U=120,k=["Цифровизация","Стратегическое направление «Розничный бизнес»","Развитие корпоративного сегмента и работа с ключевыми клиентами","ИТ"],y=["Центральный аппарат","Территориальный банк: Северо-Западный","Управление по работе с крупнейшими клиентами и холдингами"],oe=()=>Array.from({length:5e3},(t,n)=>({id:n,direction:k[n%k.length]??"",division:y[n%y.length]??"",comment:n%5===0?"Плановое значение пересмотрено после квартального комитета, факт уточняется":"",values:Array.from({length:U},(a,u)=>(n*7919+u*104729)%1e6)})),p=t=>({row:n,theme:a})=>e.jsxDEV(o.Container,{alignItems:"center",padding:{left:8,right:8},children:e.jsxDEV(o.Text,{font:a.baseFontStyle,wordWrap:!0,children:n[t]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:379,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:378,columnNumber:7},void 0),C={...w({preCode:f,previewSource:"shown"}),name:"Auto row height: широкая таблица (120 показателей)",render:()=>{const[t]=s.useState(oe),n=s.useMemo(()=>[{key:"direction",name:"Направление",width:220,renderCell:p("direction")},{key:"division",name:"Подразделение",width:200,renderCell:p("division")},...Array.from({length:U},(a,u)=>({key:`metric${u}`,name:`Показатель ${u+1}`,width:120,renderCell:({row:r})=>{var l;return e.jsxDEV(o.Container,{alignItems:"center",justifyContent:"flex-end",padding:{left:8,right:8},children:e.jsxDEV(o.Text,{children:(l=r.values[u])==null?void 0:l.toLocaleString("ru-RU")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:420,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:415,columnNumber:15},void 0)}})),{key:"comment",name:"Комментарий",width:240,renderCell:p("comment")}],[]);return e.jsxDEV(b,{tableConfig:{containerStyle:{height:700},rowHeight:"auto"},columnConfig:n,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:439,columnNumber:7},void 0)}},ae=1e6,ue=1e3,x=["Коротко","Плановое значение пересмотрено","Плановое значение пересмотрено после квартального комитета, факт уточняется","Плановое значение пересмотрено после квартального комитета, факт уточняется у подразделения и будет обновлён в следующем отчётном периоде"],te=()=>Array.from({length:ae},(t,n)=>({id:n+1})),se=`
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
`,d={...w({code:se,previewSource:"shown"}),name:"Auto row height: 1 000 000 строк × 1000 колонок",render:()=>{const[t]=s.useState(te),n=s.useMemo(()=>[{key:"id",name:"№",width:100},...Array.from({length:ue-1},(a,u)=>({key:`c${u}`,name:`Колонка ${u+1}`,width:u%10===0?240:110,renderCell:({row:r,theme:l})=>e.jsxDEV(o.Container,{alignItems:"center",padding:{left:8,right:8},children:u%10===0?e.jsxDEV(o.Text,{font:l.baseFontStyle,wordWrap:!0,children:x[(r.id+u)%x.length]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:514,columnNumber:19},void 0):e.jsxDEV(o.Text,{children:(r.id*31+u)%1e5},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:518,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:509,columnNumber:15},void 0)}))],[]);return e.jsxDEV(b,{tableConfig:{containerStyle:{height:700},rowHeight:"auto"},columnConfig:n,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:529,columnNumber:7},void 0)}};var S,H,E;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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

    // Функция высоты не знает ширину колонки: после ресайза берём её из onColumnResize.
    // Новая функция rowHeight нужна, чтобы таблица пересчитала и смещения строк для прокрутки
    const [loremWidth, setLoremWidth] = useState(500);
    const onColumnResize = useCallback((column: {
      id?: string;
    }, newSize: number) => {
      if (column.id === 'loremIpsum') setLoremWidth(newSize);
    }, []);
    const rowHeight: RowHeightFunc<Row> = useCallback((r, currenRowSize) => {
      const symbolWidth = 11.5;
      const paddingInline = 16;
      const widthOfLoremCol = loremWidth - paddingInline * 2;
      const symbolsInOneLine = Math.max(1, Math.round(widthOfLoremCol / symbolWidth));
      const heightOfLineInitial = 22; // в css
      const heightOfLine = heightOfLineInitial - 2; // скорректированный

      const allSymbols = r.loremIpsum.length;
      const countOfLine = Math.ceil(allSymbols / symbolsInOneLine);
      const paddingBlock = Number(SIZES[currenRowSize.rowSizeName].cell['padding-block'].slice(0, -2));
      const neededHeight = heightOfLine * countOfLine + paddingBlock * 2;
      return neededHeight > currenRowSize.rowSizeValue ? neededHeight : currenRowSize.rowSizeValue;
    }, [loremWidth]);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 700
      },
      rowHeight,
      onColumnResize
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(E=(H=c.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var N,R,D;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(D=(R=h.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var A,I,B;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(B=(I=g.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var F,j,V;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(V=(j=C.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var _,W,L,O,z;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(L=(W=d.parameters)==null?void 0:W.docs)==null?void 0:L.source},description:{story:"Миллион строк и тысяча колонок: меряются только видимые ячейки",...(z=(O=d.parameters)==null?void 0:O.docs)==null?void 0:z.description}}};const re=["RowHeight","AutoRowHeight","FlexLayoutCell","AutoRowHeightWideTable","AutoRowHeightHuge"],be=Object.freeze(Object.defineProperty({__proto__:null,AutoRowHeight:h,AutoRowHeightHuge:d,AutoRowHeightWideTable:C,FlexLayoutCell:g,RowHeight:c,__namedExportsOrder:re,default:Y},Symbol.toStringTag,{value:"Module"}));export{be as T};
