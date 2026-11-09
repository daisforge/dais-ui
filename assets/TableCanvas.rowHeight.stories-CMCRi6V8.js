import{r as i,j as e}from"./react-CAOzMBF_.js";import{c as z}from"./tableData-DVJFoYoT.js";import P from"./DocStoryTemplate-DUx_jmLE.js";import{s as h}from"./storySourceDoc-tVKyHcEN.js";import{a as Z}from"./StoriesUtils-D2I1WMUJ.js";import{C as o,T as g,n as q}from"./TableCanvas-BIigAEge.js";const J={title:"Локальные компоненты/TableCanvas/RowHeight",tags:["!autodocs"],parameters:{docs:{page:P}},component:Z},C=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,l={...h({preCode:C,previewSource:"shown"}),name:"Row height",render:()=>{const[u]=i.useState(z),n=i.useMemo(()=>[{key:"id",name:"id"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"loremIpsum",name:"Длинный текст",width:500,renderCell:({row:t,theme:a})=>e.jsx(o.Container,{padding:8,children:e.jsx(o.Container,{children:e.jsx(o.Text,{font:a.baseFontStyle,lineHeight:1.85,wordWrap:!0,children:t.loremIpsum})})})},{key:"complete",name:"% Complete"}],[]),r=i.useCallback((t,a)=>{const $=Math.round(40.69565217391305),G=22-2,N=t.loremIpsum.length,V=Math.ceil(N/$),X=Number(q[a.rowSizeName].cell["padding-block"].slice(0,-2)),y=G*V+X*2;return y>a.rowSizeValue?y:a.rowSizeValue},[]);return e.jsx(g,{tableConfig:{containerStyle:{height:700},rowHeight:r},columnConfig:n,rows:u})}},c={...h({preCode:C,previewSource:"shown"}),name:"Auto row height (перенос текста)",render:()=>{const[u]=i.useState(z),n=i.useMemo(()=>[{key:"id",name:"id"},{key:"task",name:"Title"},{key:"loremIpsum",name:"Длинный текст",width:360,renderCell:({row:r,theme:t})=>e.jsx(o.Container,{alignItems:"center",padding:{left:8,right:8},children:e.jsx(o.Text,{font:t.baseFontStyle,wordWrap:!0,children:r.loremIpsum})})},{key:"short",name:"Без переноса",width:160,renderCell:({row:r})=>r.task}],[]);return e.jsx(g,{tableConfig:{containerStyle:{height:700},rowHeight:"auto"},columnConfig:n,rows:u})}},K={Новая:"default","В работе":"accent",Готово:"positive"},w=["дизайн","frontend","релиз","backend","аналитика","тестирование"],Q=()=>Array.from({length:60},(u,n)=>({id:String(n+1),title:`Задача ${n+1}: ${"согласовать макет и уточнить требования ".repeat(n%3+1)}`,description:n%4===0?"Короткое описание":"Подробное описание задачи: что нужно сделать, кого позвать на ревью и какие риски учесть до релиза.",status:["Новая","В работе","Готово"][n%3],tags:w.slice(0,w.length-n%w.length)})),d={...h({preCode:C,previewSource:"shown"}),name:"Вёрстка ячейки на flex (кнопки, бейджи, перенос, wrap)",render:()=>{const[u]=i.useState(Q),n=i.useMemo(()=>[{key:"id",name:"#",width:56},{key:"title",name:"Задача",width:480,renderCell:({row:r,theme:t})=>e.jsxs(o.Container,{direction:"column",justifyContent:"center",gap:6,padding:{left:8,right:8},style:{width:"100%"},children:[e.jsxs(o.Container,{direction:"row",alignItems:"center",gap:8,style:{width:"100%"},children:[e.jsx(o.Text,{font:t.baseFontStyle,wordWrap:!0,style:{flexGrow:1,flexShrink:1},children:r.title}),e.jsx(o.Badge,{text:r.status,view:K[r.status],size:"s",style:{flexShrink:0}})]}),e.jsx(o.Text,{font:t.baseFontStyle,color:t.textLight,wordWrap:!0,children:r.description}),e.jsxs(o.Container,{direction:"row",alignItems:"center",gap:8,style:{width:"100%"},children:[e.jsx(o.Container,{wrap:"wrap",gap:6,style:{flexGrow:1,flexShrink:1},children:r.tags.map(a=>e.jsx(o.Badge,{text:a,view:"light",size:"xs"},a))}),e.jsx(o.Button,{view:"accent",size:"xs",style:{flexShrink:0},onClick:()=>console.debug("open",r.id),children:"Открыть"}),e.jsx(o.Button,{view:"secondary",size:"xs",style:{flexShrink:0},onClick:()=>console.debug("assign",r.id),children:"Назначить"})]})]})},{key:"status",name:"Статус",width:120,renderCell:({row:r})=>r.status}],[]);return e.jsx(g,{tableConfig:{containerStyle:{height:700},rowHeight:"auto"},columnConfig:n,rows:u})}},U=120,x=["Цифровизация","Стратегическое направление «Розничный бизнес»","Развитие корпоративного сегмента и работа с ключевыми клиентами","ИТ"],S=["Центральный аппарат","Территориальный банк: Северо-Западный","Управление по работе с крупнейшими клиентами и холдингами"],Y=()=>Array.from({length:5e3},(u,n)=>({id:n,direction:x[n%x.length],division:S[n%S.length],comment:n%5===0?"Плановое значение пересмотрено после квартального комитета, факт уточняется":"",values:Array.from({length:U},(r,t)=>(n*7919+t*104729)%1e6)})),p=u=>({row:n,theme:r})=>e.jsx(o.Container,{alignItems:"center",padding:{left:8,right:8},children:e.jsx(o.Text,{font:r.baseFontStyle,wordWrap:!0,children:n[u]})}),m={...h({preCode:C,previewSource:"shown"}),name:"Auto row height: широкая таблица (120 показателей)",render:()=>{const[u]=i.useState(Y),n=i.useMemo(()=>[{key:"direction",name:"Направление",width:220,renderCell:p("direction")},{key:"division",name:"Подразделение",width:200,renderCell:p("division")},...Array.from({length:U},(r,t)=>({key:`metric${t}`,name:`Показатель ${t+1}`,width:120,renderCell:({row:a})=>e.jsx(o.Container,{alignItems:"center",justifyContent:"flex-end",padding:{left:8,right:8},children:e.jsx(o.Text,{children:a.values[t].toLocaleString("ru-RU")})})})),{key:"comment",name:"Комментарий",width:240,renderCell:p("comment")}],[]);return e.jsx(g,{tableConfig:{containerStyle:{height:700},rowHeight:"auto"},columnConfig:n,rows:u})}},ee=1e6,ne=1e3,v=["Коротко","Плановое значение пересмотрено","Плановое значение пересмотрено после квартального комитета, факт уточняется","Плановое значение пересмотрено после квартального комитета, факт уточняется у подразделения и будет обновлён в следующем отчётном периоде"],te=()=>Array.from({length:ee},(u,n)=>({id:n+1})),oe=`
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
`,s={...h({code:oe,previewSource:"shown"}),name:"Auto row height: 1 000 000 строк × 1000 колонок",render:()=>{const[u]=i.useState(te),n=i.useMemo(()=>[{key:"id",name:"№",width:100},...Array.from({length:ne-1},(r,t)=>({key:`c${t}`,name:`Колонка ${t+1}`,width:t%10===0?240:110,renderCell:({row:a,theme:f})=>e.jsx(o.Container,{alignItems:"center",padding:{left:8,right:8},children:t%10===0?e.jsx(o.Text,{font:f.baseFontStyle,wordWrap:!0,children:v[(a.id+t)%v.length]}):e.jsx(o.Text,{children:(a.id*31+t)%1e5})})}))],[]);return e.jsx(g,{tableConfig:{containerStyle:{height:700},rowHeight:"auto"},columnConfig:n,rows:u})}};var T,k,b;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(b=(k=l.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var E,A,R;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(R=(A=c.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var I,H,j;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(j=(H=d.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var B,D,F;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(F=(D=m.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var _,O,L,W,M;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(L=(O=s.parameters)==null?void 0:O.docs)==null?void 0:L.source},description:{story:"Миллион строк и тысяча колонок: меряются только видимые ячейки",...(M=(W=s.parameters)==null?void 0:W.docs)==null?void 0:M.description}}};const re=["RowHeight","AutoRowHeight","FlexLayoutCell","AutoRowHeightWideTable","AutoRowHeightHuge"],ge=Object.freeze(Object.defineProperty({__proto__:null,AutoRowHeight:c,AutoRowHeightHuge:s,AutoRowHeightWideTable:m,FlexLayoutCell:d,RowHeight:l,__namedExportsOrder:re,default:J},Symbol.toStringTag,{value:"Module"}));export{ge as T};
