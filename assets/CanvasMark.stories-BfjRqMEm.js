import{r as c,j as n}from"./react-CAOzMBF_.js";import{s as h}from"./storySourceDoc-tVKyHcEN.js";import{C as a,T as w}from"./TableCanvas-BiviJwJT.js";import{T as D}from"./TextField-DO4OQIdm.js";const j=[{id:1,text:"Подсветка фрагмента внутри строки: часть текста выделена пластиной."},{id:2,text:"Длинный текст с выделенным фрагментом переносится на несколько строк, и пластина ложится на каждую строку, где есть фрагмент."},{id:3,text:"Без выделения: обычный текст без Canvas.Mark."}],F={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasMark",tags:["!autodocs"]},W=`
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
`,C={name:"Canvas.Mark",...h({code:W,previewSource:"shown"}),render:()=>{const e=c.useMemo(()=>[{key:"id",name:"id",width:60},{key:"text",name:"Текст с выделением",width:420,renderCell:({row:t,theme:s})=>n.jsx(a.Container,{alignItems:"center",children:n.jsxs(a.Text,{font:s.baseFontStyle,wordWrap:!0,children:[t.id===1&&n.jsxs(n.Fragment,{children:["Подсветка"," ",n.jsx(a.Mark,{color:s.tokens.surfaceWarningMinor56,children:"фрагмента"})," ","внутри строки"]}),t.id===2&&n.jsxs(n.Fragment,{children:["Длинный текст с"," ",n.jsx(a.Mark,{color:s.tokens.surfaceWarningMinor56,children:"выделенным фрагментом"})," ","переносится на несколько строк, и пластина ложится на каждую строку, где есть фрагмент."]}),t.id===3&&t.text]})})}],[]);return n.jsx(w,{tableConfig:{containerStyle:{height:320},rowHeight:"auto"},columnConfig:e,rows:j})}},H=[{id:1,tribe:"Трайб «Диджитал вкладов»",report:"Открыть свод",note:"Вклады и накопительные счета: открытие, пополнение, закрытие."},{id:2,tribe:"Трайб «Платежи и переводы»",report:"Открыть отчёт по платежам",note:"Переводы по номеру телефона и платежи по реквизитам."},{id:3,tribe:"Трайб «Кредитование МСБ»",report:"Открыть свод",note:"Кредиты малому и среднему бизнесу."}],m=(e,t,s)=>{const u=t.trim().toLowerCase();if(!u)return e;const r=[],i=e.toLowerCase();let l=0;for(let o=i.indexOf(u);o>=0;o=i.indexOf(u,l)){o>l&&r.push(e.slice(l,o));const f=o+u.length;r.push(n.jsx(a.Mark,{color:s,children:e.slice(o,f)},o)),l=f}return r.push(e.slice(l)),r},_=`
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

`,g={name:"В ссылках и бейджах",...h({code:_,previewSource:"shown"}),render:()=>{const[e,t]=c.useState("откр"),s=c.useMemo(()=>[{key:"tribe",name:"Бейдж",width:260,renderCell:({row:u,theme:r})=>n.jsx(a.Container,{alignItems:"center",padding:{left:8,right:8},children:n.jsx(a.Badge,{size:"s",view:"accent",transparent:!0,children:m(u.tribe,e,r.tokens.surfaceWarningMinor56)})})},{key:"report",name:"Ссылка",width:220,renderCell:({row:u,theme:r})=>n.jsx(a.Container,{alignItems:"center",padding:{left:8,right:8},children:n.jsx(a.Link,{children:m(u.report,e,r.tokens.surfaceWarningMinor56)})})},{key:"note",name:"Ссылка с переносом",width:240,renderCell:({row:u,theme:r})=>n.jsx(a.Container,{alignItems:"center",padding:{left:8,right:8},children:n.jsx(a.Link,{wordWrap:!0,children:m(u.note,e,r.tokens.surfaceWarningMinor56)})})}],[e]);return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[n.jsx("div",{style:{width:320},children:n.jsx(D,{size:"s",label:"Поиск",labelPlacement:"outer",placeholder:"Например: откр",value:e,onChange:u=>t(u.target.value)})}),n.jsx(w,{tableConfig:{containerStyle:{height:320},rowHeight:"auto"},columnConfig:s,rows:H})]})}},q=1e6,I=1e3,v=["Открыть свод","Отчёт по платежам","Вклады и накопительные счета: открытие, пополнение, закрытие","Кредиты малому и среднему бизнесу, отчёт за квартал"],L=()=>Array.from({length:q},(e,t)=>({id:t+1})),R=`
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
`,d={name:"1 000 000 строк × 1000 колонок",...h({code:R,previewSource:"shown"}),render:()=>{const[e,t]=c.useState("отч"),[s]=c.useState(L),u=c.useMemo(()=>[{key:"id",name:"№",width:100},...Array.from({length:I-1},(r,i)=>({key:`c${i}`,name:`Колонка ${i+1}`,width:220,renderCell:({row:l,theme:o})=>n.jsx(a.Container,{alignItems:"center",padding:{left:8,right:8},children:n.jsx(a.Text,{font:o.baseFontStyle,wordWrap:i%10===0,children:m(v[(l.id+i)%v.length],e,o.tokens.surfaceWarningMinor56)})})}))],[e]);return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[n.jsx("div",{style:{width:320},children:n.jsx(D,{size:"s",label:"Поиск",labelPlacement:"outer",placeholder:"Например: отч",value:e,onChange:r=>t(r.target.value)})}),n.jsx(w,{tableConfig:{containerStyle:{height:700},rowHeight:"auto"},columnConfig:u,rows:s})]})}};var p,y,k;C.parameters={...C.parameters,docs:{...(p=C.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(k=(y=C.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var x,M,E;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(M=g.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var b,S,T,A,B;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(S=d.parameters)==null?void 0:S.docs)==null?void 0:T.source},description:{story:"Миллион строк и тысяча колонок с подсветкой: разметка строится только для видимых ячеек",...(B=(A=d.parameters)==null?void 0:A.docs)==null?void 0:B.description}}};const z=["Default","InLinksAndBadges","Huge"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:C,Huge:d,InLinksAndBadges:g,__namedExportsOrder:z,default:F},Symbol.toStringTag,{value:"Module"}));export{$ as C};
