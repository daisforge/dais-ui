import{r as m,d as e}from"./react-D2T61mpp.js";import{s as k}from"./storySourceDoc-tVKyHcEN.js";import{C as s,T as g}from"./TableCanvas-DCaOWbQ6.js";import{T as A}from"./TextField-CbKvrwjn.js";const B=[{id:1,text:"Подсветка фрагмента внутри строки: часть текста выделена пластиной."},{id:2,text:"Длинный текст с выделенным фрагментом переносится на несколько строк, и пластина ложится на каждую строку, где есть фрагмент."},{id:3,text:"Без выделения: обычный текст без Canvas.Mark."}],j={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasMark",tags:["!autodocs"]},F=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const columnConfig: ColumnConfig[] = [
  {
    key: 'text',
    name: 'Текст',
    width: 420,
    renderCell: ({ row, theme }) => (
      <Canvas.Container alignItems="center" padding={{ left: 8, right: 8 }}>
        <Canvas.Text font={theme.baseFontStyle} wordWrap>
          Подсветка <Canvas.Mark color={theme.tokens.surfaceWarningMinor56}>фрагмента</Canvas.Mark> внутри строки
        </Canvas.Text>
      </Canvas.Container>
    ),
  },
];

<TableCanvas
  tableConfig={{ containerStyle: { height: '320px' }, rowHeight: 'auto' }}
  columnConfig={columnConfig}
  rows={rows}
/>
`,c={name:"Canvas.Mark",...k({code:F,previewSource:"shown"}),render:()=>{const n=m.useMemo(()=>[{key:"id",name:"id",width:60},{key:"text",name:"Текст с выделением",width:420,renderCell:({row:u,theme:i})=>e.jsxDEV(s.Container,{alignItems:"center",children:e.jsxDEV(s.Text,{font:i.baseFontStyle,wordWrap:!0,children:[u.id===1&&e.jsxDEV(e.Fragment,{children:["Подсветка"," ",e.jsxDEV(s.Mark,{color:i.tokens.surfaceWarningMinor56,children:"фрагмента"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:78,columnNumber:21},void 0)," ","внутри строки"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:76,columnNumber:19},void 0),u.id===2&&e.jsxDEV(e.Fragment,{children:["Длинный текст с"," ",e.jsxDEV(s.Mark,{color:i.tokens.surfaceWarningMinor56,children:"выделенным фрагментом"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:87,columnNumber:21},void 0)," ","переносится на несколько строк, и пластина ложится на каждую строку, где есть фрагмент."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:85,columnNumber:19},void 0),u.id===3&&u.text]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:74,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:73,columnNumber:13},void 0)}],[]);return e.jsxDEV(g,{tableConfig:{containerStyle:{height:320},rowHeight:"auto"},columnConfig:n,rows:B},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:104,columnNumber:7},void 0)}},W=[{id:1,tribe:"Трайб «Диджитал вкладов»",report:"Открыть свод",note:"Вклады и накопительные счета: открытие, пополнение, закрытие."},{id:2,tribe:"Трайб «Платежи и переводы»",report:"Открыть отчёт по платежам",note:"Переводы по номеру телефона и платежи по реквизитам."},{id:3,tribe:"Трайб «Кредитование МСБ»",report:"Открыть свод",note:"Кредиты малому и среднему бизнесу."}],v=(n,u,i)=>{const a=u.trim().toLowerCase();if(!a)return n;const r=[],t=n.toLowerCase();let l=0;for(let o=t.indexOf(a);o>=0;o=t.indexOf(a,l)){o>l&&r.push(n.slice(l,o));const f=o+a.length;r.push(e.jsxDEV(s.Mark,{color:i,children:n.slice(o,f)},o,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:159,columnNumber:7},void 0)),l=f}return r.push(n.slice(l)),r},V=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

// withMarks(text, query, color) оборачивает совпадения в <Canvas.Mark color={color}>

const columnConfig: ColumnConfig[] = [
  {
    key: 'tribe',
    name: 'Бейдж',
    renderCell: ({ row, theme }) => (
      <Canvas.Container alignItems="center" padding={{ left: 8, right: 8 }}>
        {/* разметка — в children */}
        <Canvas.Badge size="s" view="accent" transparent>
          {withMarks(row.tribe, query, theme.tokens.surfaceWarningMinor56)}
        </Canvas.Badge>
      </Canvas.Container>
    ),
  },
  {
    key: 'report',
    name: 'Ссылка',
    renderCell: ({ row, theme }) => (
      <Canvas.Container alignItems="center" padding={{ left: 8, right: 8 }}>
        <Canvas.Link onClick={openReport}>
          {withMarks(row.report, query, theme.tokens.surfaceWarningMinor56)}
        </Canvas.Link>
      </Canvas.Container>
    ),
  },
];

`,C={name:"В ссылках и бейджах",...k({code:V,previewSource:"shown"}),render:()=>{const[n,u]=m.useState("откр"),i=m.useMemo(()=>[{key:"tribe",name:"Бейдж",width:260,renderCell:({row:a,theme:r})=>e.jsxDEV(s.Container,{alignItems:"center",padding:{left:8,right:8},children:e.jsxDEV(s.Badge,{size:"s",view:"accent",transparent:!0,children:v(a.tribe,n,r.tokens.surfaceWarningMinor56)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:219,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:215,columnNumber:13},void 0)},{key:"report",name:"Ссылка",width:220,renderCell:({row:a,theme:r})=>e.jsxDEV(s.Container,{alignItems:"center",padding:{left:8,right:8},children:e.jsxDEV(s.Link,{children:v(a.report,n,r.tokens.surfaceWarningMinor56)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:238,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:234,columnNumber:13},void 0)},{key:"note",name:"Ссылка с переносом",width:240,renderCell:({row:a,theme:r})=>e.jsxDEV(s.Container,{alignItems:"center",padding:{left:8,right:8},children:e.jsxDEV(s.Link,{wordWrap:!0,children:v(a.note,n,r.tokens.surfaceWarningMinor56)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:257,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:253,columnNumber:13},void 0)}],[n]);return e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxDEV("div",{style:{width:320},children:e.jsxDEV(A,{size:"s",label:"Поиск",labelPlacement:"outer",placeholder:"Например: откр",value:n,onChange:a=>u(a.target.value)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:270,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:269,columnNumber:9},void 0),e.jsxDEV(g,{tableConfig:{containerStyle:{height:320},rowHeight:"auto"},columnConfig:i,rows:W},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:279,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:268,columnNumber:7},void 0)}},H=1e6,_=1e3,h=["Открыть свод","Отчёт по платежам","Вклады и накопительные счета: открытие, пополнение, закрытие","Кредиты малому и среднему бизнесу, отчёт за квартал"],q=()=>Array.from({length:H},(n,u)=>({id:u+1})),I=`
// Строка — только id, текст ячейки считается при отрисовке
const rows = Array.from({ length: 1_000_000 }, (_, index) => ({ id: index + 1 }));

const columnConfig = [
  { key: 'id', name: '№', width: 100 },
  ...Array.from({ length: 999 }, (_, index) => ({
    key: \`c\${index}\`,
    name: \`Колонка \${index + 1}\`,
    width: 220,
    renderCell: ({ row, theme }) => (
      <Canvas.Container alignItems="center" padding={{ left: 8, right: 8 }}>
        <Canvas.Text font={theme.baseFontStyle} wordWrap={index % 10 === 0}>
          {withMarks(TEXTS[(row.id + index) % TEXTS.length], query, theme.tokens.surfaceWarningMinor56)}
        </Canvas.Text>
      </Canvas.Container>
    ),
  })),
];

<TableCanvas tableConfig={{ rowHeight: 'auto' }} columnConfig={columnConfig} rows={rows} />
`,d={name:"1 000 000 строк × 1000 колонок",...k({code:I,previewSource:"shown"}),render:()=>{const[n,u]=m.useState("отч"),[i]=m.useState(q),a=m.useMemo(()=>[{key:"id",name:"№",width:100},...Array.from({length:_-1},(r,t)=>({key:`c${t}`,name:`Колонка ${t+1}`,width:220,renderCell:({row:l,theme:o})=>e.jsxDEV(s.Container,{alignItems:"center",padding:{left:8,right:8},children:e.jsxDEV(s.Text,{font:o.baseFontStyle,wordWrap:t%10===0,children:v(h[(l.id+t)%h.length],n,o.tokens.surfaceWarningMinor56)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:351,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:347,columnNumber:15},void 0)}))],[n]);return e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxDEV("div",{style:{width:320},children:e.jsxDEV(A,{size:"s",label:"Поиск",labelPlacement:"outer",placeholder:"Например: отч",value:n,onChange:r=>u(r.target.value)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:372,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:371,columnNumber:9},void 0),e.jsxDEV(g,{tableConfig:{containerStyle:{height:700},rowHeight:"auto"},columnConfig:a,rows:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:381,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:370,columnNumber:7},void 0)}};var b,w,p;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Canvas.Mark',
  ...storySourceDoc({
    code: canvasMarkCode,
    previewSource: 'shown'
  }),
  render: () => {
    const columnConfig = useMemo<readonly ColumnConfig<CanvasMarkRow>[]>(() => [{
      key: 'id',
      name: 'id',
      width: 60
    }, {
      key: 'text',
      name: 'Текст с выделением',
      width: 420,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container alignItems="center">
              <Canvas.Text font={theme.baseFontStyle} wordWrap>
                {row.id === 1 && <>
                    Подсветка{' '}
                    <Canvas.Mark color={theme.tokens.surfaceWarningMinor56}>
                      фрагмента
                    </Canvas.Mark>{' '}
                    внутри строки
                  </>}
                {row.id === 2 && <>
                    Длинный текст с{' '}
                    <Canvas.Mark color={theme.tokens.surfaceWarningMinor56}>
                      выделенным фрагментом
                    </Canvas.Mark>{' '}
                    переносится на несколько строк, и пластина ложится на каждую
                    строку, где есть фрагмент.
                  </>}
                {row.id === 3 && row.text}
              </Canvas.Text>
            </Canvas.Container>
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 320
      },
      rowHeight: 'auto'
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(p=(w=c.parameters)==null?void 0:w.docs)==null?void 0:p.source}}};var y,M,E;C.parameters={...C.parameters,docs:{...(y=C.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'В ссылках и бейджах',
  ...storySourceDoc({
    code: inLinksAndBadgesCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [query, setQuery] = useState('откр');
    const columnConfig = useMemo<readonly ColumnConfig<TribeRow>[]>(() => [{
      key: 'tribe',
      name: 'Бейдж',
      width: 260,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container alignItems="center" padding={{
        left: 8,
        right: 8
      }}>
              <Canvas.Badge size="s" view="accent" transparent>
                {withMarks(row.tribe, query, theme.tokens.surfaceWarningMinor56)}
              </Canvas.Badge>
            </Canvas.Container>
    }, {
      key: 'report',
      name: 'Ссылка',
      width: 220,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container alignItems="center" padding={{
        left: 8,
        right: 8
      }}>
              <Canvas.Link>
                {withMarks(row.report, query, theme.tokens.surfaceWarningMinor56)}
              </Canvas.Link>
            </Canvas.Container>
    }, {
      key: 'note',
      name: 'Ссылка с переносом',
      width: 240,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container alignItems="center" padding={{
        left: 8,
        right: 8
      }}>
              <Canvas.Link wordWrap>
                {withMarks(row.note, query, theme.tokens.surfaceWarningMinor56)}
              </Canvas.Link>
            </Canvas.Container>
    }], [query]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <div style={{
        width: 320
      }}>
          <TextField size="s" label="Поиск" labelPlacement="outer" placeholder="Например: откр" value={query} onChange={event => setQuery(event.target.value)} />
        </div>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: 320
        },
        rowHeight: 'auto'
      }} columnConfig={columnConfig} rows={tribeRows} />
      </div>;
  }
}`,...(E=(M=C.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var x,N,T,D,S;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '1 000 000 строк × 1000 колонок',
  ...storySourceDoc({
    code: hugeCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [query, setQuery] = useState('отч');
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
      width: 220,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container alignItems="center" padding={{
        left: 8,
        right: 8
      }}>
                <Canvas.Text font={theme.baseFontStyle} wordWrap={index % 10 === 0}>
                  {withMarks(HUGE_TEXTS[(row.id + index) % HUGE_TEXTS.length]!, query, theme.tokens.surfaceWarningMinor56)}
                </Canvas.Text>
              </Canvas.Container>
    }))], [query]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <div style={{
        width: 320
      }}>
          <TextField size="s" label="Поиск" labelPlacement="outer" placeholder="Например: отч" value={query} onChange={event => setQuery(event.target.value)} />
        </div>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: 700
        },
        rowHeight: 'auto'
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(T=(N=d.parameters)==null?void 0:N.docs)==null?void 0:T.source},description:{story:"Миллион строк и тысяча колонок с подсветкой: разметка строится только для видимых ячеек",...(S=(D=d.parameters)==null?void 0:D.docs)==null?void 0:S.description}}};const L=["Default","InLinksAndBadges","Huge"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Huge:d,InLinksAndBadges:C,__namedExportsOrder:L,default:j},Symbol.toStringTag,{value:"Module"}));export{G as C};
