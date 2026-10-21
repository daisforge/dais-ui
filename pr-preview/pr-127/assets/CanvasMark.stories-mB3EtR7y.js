import{r as C,d as e}from"./react-D2T61mpp.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{C as r,T as M}from"./TableCanvas-CIWyVltb.js";import{T as x}from"./TextField-CBRXg4aH.js";const m="#ffe27a",y=[{id:1,text:"Подсветка фрагмента внутри строки: часть текста выделена пластиной."},{id:2,text:"Длинный текст с выделенным фрагментом переносится на несколько строк, и пластина ложится на каждую строку, где есть фрагмент."},{id:3,text:"Без выделения: обычный текст без Canvas.Mark."}],N={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasMark",tags:["!autodocs"]},E=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const MARK_COLOR = '#ffe27a';

const columnConfig: ColumnConfig[] = [
  {
    key: 'text',
    name: 'Текст',
    width: 420,
    renderCell: ({ row, theme }) => (
      <Canvas.Container alignItems="center" padding={{ left: 8, right: 8 }}>
        <Canvas.Text font={theme.baseFontStyle} wordWrap>
          Подсветка <Canvas.Mark color={MARK_COLOR}>фрагмента</Canvas.Mark> внутри строки
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
`,t={name:"Canvas.Mark",...p({code:E,previewSource:"shown"}),render:()=>{const n=C.useMemo(()=>[{key:"id",name:"id",width:60},{key:"text",name:"Текст с выделением",width:420,renderCell:({row:s,theme:u})=>e.jsxDEV(r.Container,{alignItems:"center",children:e.jsxDEV(r.Text,{font:u.baseFontStyle,wordWrap:!0,children:[s.id===1&&e.jsxDEV(e.Fragment,{children:["Подсветка"," ",e.jsxDEV(r.Mark,{color:m,children:"фрагмента"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:83,columnNumber:21},void 0)," ","внутри строки"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:81,columnNumber:19},void 0),s.id===2&&e.jsxDEV(e.Fragment,{children:["Длинный текст с"," ",e.jsxDEV(r.Mark,{color:m,children:"выделенным фрагментом"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:90,columnNumber:21},void 0)," ","переносится на несколько строк, и пластина ложится на каждую строку, где есть фрагмент."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:88,columnNumber:19},void 0),s.id===3&&s.text]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:79,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:78,columnNumber:13},void 0)}],[]);return e.jsxDEV(M,{tableConfig:{containerStyle:{height:320},rowHeight:"auto"},columnConfig:n,rows:y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:107,columnNumber:7},void 0)}},D=[{id:1,tribe:"Трайб «Диджитал вкладов»",report:"Открыть свод",note:"Вклады и накопительные счета: открытие, пополнение, закрытие."},{id:2,tribe:"Трайб «Платежи и переводы»",report:"Открыть отчёт по платежам",note:"Переводы по номеру телефона и платежи по реквизитам."},{id:3,tribe:"Трайб «Кредитование МСБ»",report:"Открыть свод",note:"Кредиты малому и среднему бизнесу."}],d=(n,s)=>{const u=s.trim().toLowerCase();if(!u)return n;const a=[],c=n.toLowerCase();let i=0;for(let o=c.indexOf(u);o>=0;o=c.indexOf(u,i)){o>i&&a.push(n.slice(i,o));const v=o+u.length;a.push(e.jsxDEV(r.Mark,{color:m,children:n.slice(o,v)},o,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:162,columnNumber:7},void 0)),i=v}return a.push(n.slice(i)),a},T=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const MARK_COLOR = '#ffe27a';

// withMarks(text, query) оборачивает совпадения в <Canvas.Mark color={MARK_COLOR}>

const columnConfig: ColumnConfig[] = [
  {
    key: 'tribe',
    name: 'Бейдж',
    renderCell: ({ row }) => (
      <Canvas.Container alignItems="center" padding={{ left: 8, right: 8 }}>
        {/* разметка — в children */}
        <Canvas.Badge size="s" view="accent" transparent>
          {withMarks(row.tribe, query)}
        </Canvas.Badge>
      </Canvas.Container>
    ),
  },
  {
    key: 'report',
    name: 'Ссылка',
    renderCell: ({ row }) => (
      <Canvas.Container alignItems="center" padding={{ left: 8, right: 8 }}>
        <Canvas.Link onClick={openReport}>{withMarks(row.report, query)}</Canvas.Link>
      </Canvas.Container>
    ),
  },
];

// Бейдж принимает разметку и в text:
<Canvas.Badge text={withMarks(row.tribe, query)} />
`,l={name:"В ссылках и бейджах",...p({code:T,previewSource:"shown"}),render:()=>{const[n,s]=C.useState("откр"),u=C.useMemo(()=>[{key:"tribe",name:"Бейдж (children)",width:260,renderCell:({row:a})=>e.jsxDEV(r.Container,{alignItems:"center",padding:{left:8,right:8},children:e.jsxDEV(r.Badge,{size:"s",view:"accent",transparent:!0,children:d(a.tribe,n)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:224,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:220,columnNumber:13},void 0)},{key:"tribeText",name:"Бейдж (text)",width:260,renderCell:({row:a})=>e.jsxDEV(r.Container,{alignItems:"center",padding:{left:8,right:8},children:e.jsxDEV(r.Badge,{size:"s",view:"positive",transparent:!0,text:d(a.tribe,n)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:239,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:235,columnNumber:13},void 0)},{key:"report",name:"Ссылка",width:220,renderCell:({row:a})=>e.jsxDEV(r.Container,{alignItems:"center",padding:{left:8,right:8},children:e.jsxDEV(r.Link,{children:d(a.report,n)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:257,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:253,columnNumber:13},void 0)},{key:"note",name:"Ссылка с переносом",width:240,renderCell:({row:a})=>e.jsxDEV(r.Container,{alignItems:"center",padding:{left:8,right:8},children:e.jsxDEV(r.Link,{wordWrap:!0,children:d(a.note,n)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:270,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:266,columnNumber:13},void 0)}],[n]);return e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxDEV("div",{style:{width:320},children:e.jsxDEV(x,{size:"s",label:"Поиск",labelPlacement:"outer",placeholder:"Например: откр",value:n,onChange:a=>s(a.target.value)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:281,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:280,columnNumber:9},void 0),e.jsxDEV(M,{tableConfig:{containerStyle:{height:320},rowHeight:"auto"},columnConfig:u,rows:D},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:290,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:279,columnNumber:7},void 0)}};var k,b,f;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
                    <Canvas.Mark color={MARK_COLOR}>фрагмента</Canvas.Mark>{' '}
                    внутри строки
                  </>}
                {row.id === 2 && <>
                    Длинный текст с{' '}
                    <Canvas.Mark color={MARK_COLOR}>
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
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var g,h,w;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'В ссылках и бейджах',
  ...storySourceDoc({
    code: inLinksAndBadgesCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [query, setQuery] = useState('откр');
    const columnConfig = useMemo<readonly ColumnConfig<TribeRow>[]>(() => [{
      key: 'tribe',
      name: 'Бейдж (children)',
      width: 260,
      renderCell: ({
        row
      }) => <Canvas.Container alignItems="center" padding={{
        left: 8,
        right: 8
      }}>
              <Canvas.Badge size="s" view="accent" transparent>
                {withMarks(row.tribe, query)}
              </Canvas.Badge>
            </Canvas.Container>
    }, {
      key: 'tribeText',
      name: 'Бейдж (text)',
      width: 260,
      renderCell: ({
        row
      }) => <Canvas.Container alignItems="center" padding={{
        left: 8,
        right: 8
      }}>
              <Canvas.Badge size="s" view="positive" transparent text={withMarks(row.tribe, query)} />
            </Canvas.Container>
    }, {
      key: 'report',
      name: 'Ссылка',
      width: 220,
      renderCell: ({
        row
      }) => <Canvas.Container alignItems="center" padding={{
        left: 8,
        right: 8
      }}>
              <Canvas.Link>{withMarks(row.report, query)}</Canvas.Link>
            </Canvas.Container>
    }, {
      key: 'note',
      name: 'Ссылка с переносом',
      width: 240,
      renderCell: ({
        row
      }) => <Canvas.Container alignItems="center" padding={{
        left: 8,
        right: 8
      }}>
              <Canvas.Link wordWrap>{withMarks(row.note, query)}</Canvas.Link>
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
}`,...(w=(h=l.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const B=["Default","InLinksAndBadges"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:t,InLinksAndBadges:l,__namedExportsOrder:B,default:N},Symbol.toStringTag,{value:"Module"}));export{R as C};
