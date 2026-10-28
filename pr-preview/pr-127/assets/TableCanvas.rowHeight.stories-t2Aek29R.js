import{r as i,d as e}from"./react-D2T61mpp.js";import{c as W}from"./tableData-DVJFoYoT.js";import P from"./DocStoryTemplate-CnJlkrRG.js";import{s as h}from"./storySourceDoc-tVKyHcEN.js";import{a as Z}from"./StoriesUtils-Cc9FNHe7.js";import{C as a,T as g,m as q}from"./TableCanvas-CSG6tTBl.js";const J={title:"Локальные компоненты/TableCanvas/RowHeight",tags:["!autodocs"],parameters:{docs:{page:P}},component:Z},C=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,l={...h({preCode:C,previewSource:"shown"}),name:"Row height",render:()=>{const[s]=i.useState(W),n=i.useMemo(()=>[{key:"id",name:"id"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"loremIpsum",name:"Длинный текст",width:500,renderCell:({row:o,theme:r})=>e.jsxDEV(a.Container,{padding:8,children:e.jsxDEV(a.Container,{children:e.jsxDEV(a.Text,{font:r.baseFontStyle,lineHeight:1.85,wordWrap:!0,children:o.loremIpsum},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:63,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:62,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:61,columnNumber:13},void 0)},{key:"complete",name:"% Complete"}],[]),t=i.useCallback((o,r)=>{const z=Math.round(40.69565217391305),U=22-2,$=o.loremIpsum.length,G=Math.ceil($/z),X=Number(q[r.rowSizeName].cell["padding-block"].slice(0,-2)),v=U*G+X*2;return v>r.rowSizeValue?v:r.rowSizeValue},[]);return e.jsxDEV(g,{tableConfig:{containerStyle:{height:700},rowHeight:t},columnConfig:n,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:106,columnNumber:7},void 0)}},d={...h({preCode:C,previewSource:"shown"}),name:"Auto row height (перенос текста)",render:()=>{const[s]=i.useState(W),n=i.useMemo(()=>[{key:"id",name:"id"},{key:"task",name:"Title"},{key:"loremIpsum",name:"Длинный текст",width:360,renderCell:({row:t,theme:o})=>e.jsxDEV(a.Container,{alignItems:"center",padding:{left:8,right:8},children:e.jsxDEV(a.Text,{font:o.baseFontStyle,wordWrap:!0,children:t.loremIpsum},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:140,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:136,columnNumber:13},void 0)},{key:"short",name:"Без переноса",width:160,renderCell:({row:t})=>t.task}],[]);return e.jsxDEV(g,{tableConfig:{containerStyle:{height:700},rowHeight:"auto"},columnConfig:n,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:157,columnNumber:7},void 0)}},K={Новая:"default","В работе":"accent",Готово:"positive"},w=["дизайн","frontend","релиз","backend","аналитика","тестирование"],Q=()=>Array.from({length:60},(s,n)=>({id:String(n+1),title:`Задача ${n+1}: ${"согласовать макет и уточнить требования ".repeat(n%3+1)}`,description:n%4===0?"Короткое описание":"Подробное описание задачи: что нужно сделать, кого позвать на ревью и какие риски учесть до релиза.",status:["Новая","В работе","Готово"][n%3],tags:w.slice(0,w.length-n%w.length)})),c={...h({preCode:C,previewSource:"shown"}),name:"Вёрстка ячейки на flex (кнопки, бейджи, перенос, wrap)",render:()=>{const[s]=i.useState(Q),n=i.useMemo(()=>[{key:"id",name:"#",width:56},{key:"title",name:"Задача",width:480,renderCell:({row:t,theme:o})=>e.jsxDEV(a.Container,{direction:"column",justifyContent:"center",gap:6,padding:{left:8,right:8},style:{width:"100%"},children:[e.jsxDEV(a.Container,{direction:"row",alignItems:"center",gap:8,style:{width:"100%"},children:[e.jsxDEV(a.Text,{font:o.baseFontStyle,wordWrap:!0,style:{flexGrow:1,flexShrink:1},children:t.title},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:236,columnNumber:17},void 0),e.jsxDEV(a.Badge,{text:t.status,view:K[t.status],size:"s",style:{flexShrink:0}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:243,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:230,columnNumber:15},void 0),e.jsxDEV(a.Text,{font:o.baseFontStyle,color:o.textLight,wordWrap:!0,children:t.description},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:250,columnNumber:15},void 0),e.jsxDEV(a.Container,{direction:"row",alignItems:"center",gap:8,style:{width:"100%"},children:[e.jsxDEV(a.Container,{wrap:"wrap",gap:6,style:{flexGrow:1,flexShrink:1},children:t.tags.map(r=>e.jsxDEV(a.Badge,{text:r,view:"light",size:"xs"},r,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:269,columnNumber:21},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:263,columnNumber:17},void 0),e.jsxDEV(a.Button,{view:"accent",size:"xs",style:{flexShrink:0},onClick:()=>console.debug("open",t.id),children:"Открыть"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:272,columnNumber:17},void 0),e.jsxDEV(a.Button,{view:"secondary",size:"xs",style:{flexShrink:0},onClick:()=>console.debug("assign",t.id),children:"Назначить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:281,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:257,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:223,columnNumber:13},void 0)},{key:"status",name:"Статус",width:120,renderCell:({row:t})=>t.status}],[]);return e.jsxDEV(g,{tableConfig:{containerStyle:{height:700},rowHeight:"auto"},columnConfig:n,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:305,columnNumber:7},void 0)}},M=120,p=["Цифровизация","Стратегическое направление «Розничный бизнес»","Развитие корпоративного сегмента и работа с ключевыми клиентами","ИТ"],T=["Центральный аппарат","Территориальный банк: Северо-Западный","Управление по работе с крупнейшими клиентами и холдингами"],Y=()=>Array.from({length:5e3},(s,n)=>({id:n,direction:p[n%p.length],division:T[n%T.length],comment:n%5===0?"Плановое значение пересмотрено после квартального комитета, факт уточняется":"",values:Array.from({length:M},(t,o)=>(n*7919+o*104729)%1e6)})),b=s=>({row:n,theme:t})=>e.jsxDEV(a.Container,{alignItems:"center",padding:{left:8,right:8},children:e.jsxDEV(a.Text,{font:t.baseFontStyle,wordWrap:!0,children:n[s]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:361,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:360,columnNumber:7},void 0),m={...h({preCode:C,previewSource:"shown"}),name:"Auto row height: широкая таблица (120 показателей)",render:()=>{const[s]=i.useState(Y),n=i.useMemo(()=>[{key:"direction",name:"Направление",width:220,renderCell:b("direction")},{key:"division",name:"Подразделение",width:200,renderCell:b("division")},...Array.from({length:M},(t,o)=>({key:`metric${o}`,name:`Показатель ${o+1}`,width:120,renderCell:({row:r})=>e.jsxDEV(a.Container,{alignItems:"center",justifyContent:"flex-end",padding:{left:8,right:8},children:e.jsxDEV(a.Text,{children:r.values[o].toLocaleString("ru-RU")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:402,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:397,columnNumber:15},void 0)})),{key:"comment",name:"Комментарий",width:240,renderCell:b("comment")}],[]);return e.jsxDEV(g,{tableConfig:{containerStyle:{height:700},rowHeight:"auto"},columnConfig:n,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:421,columnNumber:7},void 0)}},ee=1e6,ne=1e3,k=["Коротко","Плановое значение пересмотрено","Плановое значение пересмотрено после квартального комитета, факт уточняется","Плановое значение пересмотрено после квартального комитета, факт уточняется у подразделения и будет обновлён в следующем отчётном периоде"],oe=()=>Array.from({length:ee},(s,n)=>({id:n+1})),ae=`
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
`,u={...h({code:ae,previewSource:"shown"}),name:"Auto row height: 1 000 000 строк × 1000 колонок",render:()=>{const[s]=i.useState(oe),n=i.useMemo(()=>[{key:"id",name:"№",width:100},...Array.from({length:ne-1},(t,o)=>({key:`c${o}`,name:`Колонка ${o+1}`,width:o%10===0?240:110,renderCell:({row:r,theme:f})=>e.jsxDEV(a.Container,{alignItems:"center",padding:{left:8,right:8},children:o%10===0?e.jsxDEV(a.Text,{font:f.baseFontStyle,wordWrap:!0,children:k[(r.id+o)%k.length]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:496,columnNumber:19},void 0):e.jsxDEV(a.Text,{children:(r.id*31+o)%1e5},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:500,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:491,columnNumber:15},void 0)}))],[]);return e.jsxDEV(g,{tableConfig:{containerStyle:{height:700},rowHeight:"auto"},columnConfig:n,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:511,columnNumber:7},void 0)}};var y,x,S;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
    const rowHeight: RowHeightFunc<Row> = useCallback((r, currenRowSize) => {
      const symbolWidth = 11.5;
      const paddingInline = 16;
      const widthOfLoremCol = 500 - paddingInline * 2;
      const symbolsInOneLine = Math.round(widthOfLoremCol / symbolWidth);
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
      rowHeight
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(S=(x=l.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var H,N,E;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(E=(N=d.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var R,D,A;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(A=(D=c.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var I,B,j;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
                  {row.values[index]!.toLocaleString('ru-RU')}
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
}`,...(j=(B=m.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var V,F,_,O,L;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(_=(F=u.parameters)==null?void 0:F.docs)==null?void 0:_.source},description:{story:"Миллион строк и тысяча колонок: меряются только видимые ячейки",...(L=(O=u.parameters)==null?void 0:O.docs)==null?void 0:L.description}}};const te=["RowHeight","AutoRowHeight","FlexLayoutCell","AutoRowHeightWideTable","AutoRowHeightHuge"],ge=Object.freeze(Object.defineProperty({__proto__:null,AutoRowHeight:d,AutoRowHeightHuge:u,AutoRowHeightWideTable:m,FlexLayoutCell:c,RowHeight:l,__namedExportsOrder:te,default:J},Symbol.toStringTag,{value:"Module"}));export{ge as T};
