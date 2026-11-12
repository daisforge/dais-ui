import{r as g,j as n}from"./react-CAOzMBF_.js";import{s as m}from"./storySourceDoc-tVKyHcEN.js";import{C as e,T as p}from"./TableCanvas-C7zQu677.js";const _=["row","column"],H=["flex-start","center","flex-end","stretch"],R=["flex-start","center","flex-end","space-between"],U=o=>o.replace(/^\d+/,"600"),O={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasContainer",tags:["!autodocs"]},G=[{id:1,title:"Сверка остатков",status:"В работе"},{id:2,title:"Отчёт по кварталу",status:"Готово"},{id:3,title:"Импорт выписок",status:"Новая"}],J=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const columnConfig: ColumnConfig<Row>[] = [
  {
    key: 'card',
    name: 'Карточка',
    width: 520,
    renderCell: ({ row, theme }) => (
      // Корневой контейнер занимает всю ячейку: его padding — отступ карточки от границ ячейки
      <Canvas.Container alignItems="center" padding={{ top: 8, right: 12, bottom: 8, left: 12 }}>
        {/* Вложенный контейнер — карточка по размеру содержимого */}
        <Canvas.Container
          direction="row"
          alignItems="center"
          gap={8}
          padding={{ top: 8, right: 12, bottom: 8, left: 12 }}
          backgroundColor={theme.tokens.surfaceAccentMinor}
        >
          <Canvas.Badge text={row.status} view="accent" size="s" />
          <Canvas.Text>{row.title}</Canvas.Text>
          <Canvas.Button view="accent" size="xs">Открыть</Canvas.Button>
        </Canvas.Container>
      </Canvas.Container>
    ),
  },
];

<TableCanvas
  tableConfig={{ rowHeight: 'auto', containerStyle: { height: '240px' } }}
  columnConfig={columnConfig}
  rows={rows}
/>
`,s={...m({code:J,previewSource:"shown"}),name:"Песочница",args:{direction:"row",alignItems:"center",justifyContent:"flex-start",gap:8,cellPadding:8,padding:12,width:0,height:0,backgroundColor:""},argTypes:{direction:{control:"select",options:_},alignItems:{control:"select",options:H},justifyContent:{control:"select",options:R},gap:{control:{type:"range",min:0,max:24,step:2}},cellPadding:{name:"cellPadding (корень)",control:{type:"range",min:0,max:24,step:2}},padding:{name:"padding (карточка)",control:{type:"range",min:0,max:24,step:2}},width:{control:{type:"range",min:0,max:480,step:10}},height:{control:{type:"range",min:0,max:120,step:10}},backgroundColor:{name:"backgroundColor (пусто — токен темы)",control:"color"}},render:o=>{const{direction:t,alignItems:a,justifyContent:i,gap:v,cellPadding:l,padding:d,width:c,height:C,backgroundColor:h}=o,M=g.useMemo(()=>[{key:"id",name:"id",width:60},{key:"card",name:"Карточка",width:520,renderCell:({row:w,theme:N})=>n.jsx(e.Container,{alignItems:"center",padding:{top:l,right:l+4,bottom:l,left:l+4},children:n.jsxs(e.Container,{direction:t,alignItems:a,justifyContent:i,gap:v,padding:{top:d*.75,right:d,bottom:d*.75,left:d},style:{...c>0?{width:c}:{},...C>0?{height:C}:{}},backgroundColor:h||N.tokens.surfaceAccentMinor,children:[n.jsx(e.Badge,{text:w.status,view:"accent",size:"s"}),n.jsx(e.Text,{children:w.title}),n.jsx(e.Button,{view:"accent",size:"xs",children:"Открыть"})]})})}],[t,a,i,v,l,d,c,C,h]);return n.jsx(p,{tableConfig:{rowHeight:"auto",containerStyle:{height:"240px"}},columnConfig:M,rows:G})}},x={new:{label:"Новая",view:"default"},progress:{label:"В работе",view:"accent"},review:{label:"На проверке",view:"warning"},done:{label:"Готово",view:"positive"}},L=[{id:1,title:"Сверка остатков по счетам",project:"Казначейство · FIN-1204",assignee:"Анна Иванова",role:"Аналитик",status:"progress",due:"до 24 октября",tags:["Срочно","Q4"]},{id:2,title:"Квартальный отчёт для правления",project:"Отчётность · FIN-1187",assignee:"Пётр Смирнов",role:"Руководитель",status:"review",due:"до 31 октября",tags:["Отчёт"]},{id:3,title:"Импорт банковских выписок",project:"Интеграции · FIN-1250",assignee:"Мария Козлова",role:"Разработчик",status:"new",due:"без срока",tags:[]},{id:4,title:"Закрытие месяца",project:"Бухгалтерия · FIN-1093",assignee:"Игорь Петров",role:"Бухгалтер",status:"done",due:"закрыта 15 октября",tags:["Q3"]}],Y=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

// baseFontStyle начинается с веса: '400 normal …'
const boldFont = (font: string) => font.replace(/^\\d+/, '600');

const columnConfig: ColumnConfig<TaskRow>[] = [
  {
    key: 'title',
    name: 'Задача',
    width: 380,
    renderCell: ({ row, theme }) => (
      // Строка: аватар + колонка из заголовка и подписи
      <Canvas.Container alignItems="center" gap={12} padding={{ top: 12, right: 12, bottom: 12, left: 12 }}>
        <Canvas.Avatar name={row.assignee} size="m" />
        <Canvas.Container direction="column" gap={4}>
          <Canvas.Text font={boldFont(theme.baseFontStyle)}>{row.title}</Canvas.Text>
          <Canvas.Text color={theme.tokens.textSecondary}>{row.project}</Canvas.Text>
        </Canvas.Container>
      </Canvas.Container>
    ),
  },
  {
    key: 'status',
    name: 'Статус',
    width: 220,
    renderCell: ({ row, theme }) => (
      // Колонка: бейджи в строку, под ними срок
      <Canvas.Container direction="column" justifyContent="center" gap={6} padding={{ left: 12, right: 12 }}>
        <Canvas.Container gap={4}>
          <Canvas.Badge text={STATUS[row.status].label} view={STATUS[row.status].view} size="s" />
          {row.tags.map((tag) => <Canvas.Badge key={tag} text={tag} view="light" size="s" />)}
        </Canvas.Container>
        <Canvas.Text color={theme.tokens.textSecondary}>{row.due}</Canvas.Text>
      </Canvas.Container>
    ),
  },
  {
    key: 'actions',
    name: '',
    width: 220,
    renderCell: ({ row }) => (
      // Кнопки прижаты вправо: justifyContent корневого контейнера
      <Canvas.Container alignItems="center" justifyContent="flex-end" gap={8} padding={{ left: 12, right: 12 }}>
        <Canvas.Button view="secondary" size="xs">Открыть</Canvas.Button>
        {row.status !== 'done' && <Canvas.Button view="accent" size="xs">Взять</Canvas.Button>}
      </Canvas.Container>
    ),
  },
];

<TableCanvas tableConfig={{ rowHeight: 'auto' }} columnConfig={columnConfig} rows={rows} />
`,u={...m({code:Y,previewSource:"shown"}),name:"Карточка задачи",render:()=>{const o=g.useMemo(()=>[{key:"title",name:"Задача",width:380,renderCell:({row:t,theme:a})=>n.jsxs(e.Container,{alignItems:"center",gap:12,padding:{top:12,right:12,bottom:12,left:12},children:[n.jsx(e.Avatar,{name:t.assignee,size:"m"}),n.jsxs(e.Container,{direction:"column",gap:4,children:[n.jsx(e.Text,{font:U(a.baseFontStyle),children:t.title}),n.jsx(e.Text,{color:a.tokens.textSecondary,children:t.project})]})]})},{key:"assignee",name:"Исполнитель",width:200,renderCell:({row:t,theme:a})=>n.jsxs(e.Container,{direction:"column",justifyContent:"center",gap:4,padding:{left:12,right:12},children:[n.jsx(e.Text,{children:t.assignee}),n.jsx(e.Text,{color:a.tokens.textSecondary,children:t.role})]})},{key:"status",name:"Статус",width:220,renderCell:({row:t,theme:a})=>n.jsxs(e.Container,{direction:"column",justifyContent:"center",gap:6,padding:{left:12,right:12},children:[n.jsxs(e.Container,{gap:4,children:[n.jsx(e.Badge,{text:x[t.status].label,view:x[t.status].view,size:"s"}),t.tags.map(i=>n.jsx(e.Badge,{text:i,view:"light",size:"s"},i))]}),n.jsx(e.Text,{color:a.tokens.textSecondary,children:t.due})]})},{key:"actions",name:"",width:220,renderCell:({row:t})=>n.jsxs(e.Container,{alignItems:"center",justifyContent:"flex-end",gap:8,padding:{left:12,right:12},children:[n.jsx(e.Button,{view:"secondary",size:"xs",children:"Открыть"}),t.status!=="done"&&n.jsx(e.Button,{view:"accent",size:"xs",children:"Взять"})]})}],[]);return n.jsx(p,{tableConfig:{rowHeight:"auto",containerStyle:{height:"440px"}},columnConfig:o,rows:L})}},Q=R.map((o,t)=>({id:t+1,justifyContent:o})),q=`
// Корневой контейнер растягивается на всю ячейку, поэтому justifyContent
// и alignItems выравнивают содержимое внутри ячейки
renderCell: ({ row, theme }) => (
  <Canvas.Container
    justifyContent={row.justifyContent}
    alignItems="center"
    gap={8}
    padding={{ left: 12, right: 12 }}
    backgroundColor={theme.tokens.surfaceTransparentSecondary}
  >
    <Canvas.Badge text="Badge" view="accent" size="s" />
    <Canvas.Text>Text</Canvas.Text>
    <Canvas.Button view="accent" size="xs">Button</Canvas.Button>
  </Canvas.Container>
)
`,r={...m({code:q,previewSource:"shown"}),name:"Выравнивание в ячейке",render:()=>{const o=g.useMemo(()=>[{key:"justifyContent",name:"justifyContent",width:160,renderCell:({row:t,theme:a})=>n.jsx(e.Container,{alignItems:"center",padding:{left:12},children:n.jsx(e.Text,{color:a.tokens.textSecondary,children:t.justifyContent})})},{key:"content",name:"Содержимое",width:480,renderCell:({row:t,theme:a})=>n.jsxs(e.Container,{justifyContent:t.justifyContent,alignItems:"center",gap:8,padding:{left:12,right:12},backgroundColor:a.tokens.surfaceTransparentSecondary,children:[n.jsx(e.Badge,{text:"Badge",view:"accent",size:"s"}),n.jsx(e.Text,{children:"Text"}),n.jsx(e.Button,{view:"accent",size:"xs",children:"Button"})]})}],[]);return n.jsx(p,{tableConfig:{rowHeight:48,containerStyle:{height:"260px"}},columnConfig:o,rows:Q})}};var f,y,T,j,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...storySourceDoc({
    code: playgroundCode,
    previewSource: 'shown'
  }),
  name: 'Песочница',
  args: {
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 8,
    cellPadding: 8,
    padding: 12,
    width: 0,
    height: 0,
    backgroundColor: ''
  },
  argTypes: {
    direction: {
      control: 'select',
      options: DIRECTIONS
    },
    alignItems: {
      control: 'select',
      options: ALIGN_ITEMS
    },
    justifyContent: {
      control: 'select',
      options: JUSTIFY
    },
    gap: {
      control: {
        type: 'range',
        min: 0,
        max: 24,
        step: 2
      }
    },
    cellPadding: {
      name: 'cellPadding (корень)',
      control: {
        type: 'range',
        min: 0,
        max: 24,
        step: 2
      }
    },
    padding: {
      name: 'padding (карточка)',
      control: {
        type: 'range',
        min: 0,
        max: 24,
        step: 2
      }
    },
    width: {
      control: {
        type: 'range',
        min: 0,
        max: 480,
        step: 10
      }
    },
    height: {
      control: {
        type: 'range',
        min: 0,
        max: 120,
        step: 10
      }
    },
    backgroundColor: {
      name: 'backgroundColor (пусто — токен темы)',
      control: 'color'
    }
  },
  render: args => {
    const {
      direction,
      alignItems,
      justifyContent,
      gap,
      cellPadding,
      padding,
      width,
      height,
      backgroundColor
    } = args as {
      direction: (typeof DIRECTIONS)[number];
      alignItems: (typeof ALIGN_ITEMS)[number];
      justifyContent: (typeof JUSTIFY)[number];
      gap: number;
      cellPadding: number;
      padding: number;
      width: number;
      height: number;
      backgroundColor: string;
    };
    const columnConfig = useMemo<readonly ColumnConfig<PlaygroundRow>[]>(() => [{
      key: 'id',
      name: 'id',
      width: 60
    }, {
      key: 'card',
      name: 'Карточка',
      width: 520,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container alignItems="center" padding={{
        top: cellPadding,
        right: cellPadding + 4,
        bottom: cellPadding,
        left: cellPadding + 4
      }}>
              <Canvas.Container direction={direction} alignItems={alignItems} justifyContent={justifyContent} gap={gap} padding={{
          top: padding * 0.75,
          right: padding,
          bottom: padding * 0.75,
          left: padding
        }} style={{
          ...(width > 0 ? {
            width
          } : {}),
          ...(height > 0 ? {
            height
          } : {})
        }} backgroundColor={backgroundColor || theme.tokens.surfaceAccentMinor}>
                <Canvas.Badge text={row.status} view="accent" size="s" />
                <Canvas.Text>{row.title}</Canvas.Text>
                <Canvas.Button view="accent" size="xs">
                  Открыть
                </Canvas.Button>
              </Canvas.Container>
            </Canvas.Container>
    }], [direction, alignItems, justifyContent, gap, cellPadding, padding, width, height, backgroundColor]);
    return <TableCanvas tableConfig={{
      rowHeight: 'auto',
      containerStyle: {
        height: '240px'
      }
    }} columnConfig={columnConfig} rows={playgroundRows} />;
  }
}`,...(T=(y=s.parameters)==null?void 0:y.docs)==null?void 0:T.source},description:{story:"Песочница: свойства карточки (вложенного контейнера) меняются контролами",...(b=(j=s.parameters)==null?void 0:j.docs)==null?void 0:b.description}}};var k,S,B,E,I;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...storySourceDoc({
    code: taskCardCode,
    previewSource: 'shown'
  }),
  name: 'Карточка задачи',
  render: () => {
    const columnConfig = useMemo<readonly ColumnConfig<TaskRow>[]>(() => [{
      key: 'title',
      name: 'Задача',
      width: 380,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container alignItems="center" gap={12} padding={{
        top: 12,
        right: 12,
        bottom: 12,
        left: 12
      }}>
              <Canvas.Avatar name={row.assignee} size="m" />
              <Canvas.Container direction="column" gap={4}>
                <Canvas.Text font={boldFont(theme.baseFontStyle)}>
                  {row.title}
                </Canvas.Text>
                <Canvas.Text color={theme.tokens.textSecondary}>
                  {row.project}
                </Canvas.Text>
              </Canvas.Container>
            </Canvas.Container>
    }, {
      key: 'assignee',
      name: 'Исполнитель',
      width: 200,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container direction="column" justifyContent="center" gap={4} padding={{
        left: 12,
        right: 12
      }}>
              <Canvas.Text>{row.assignee}</Canvas.Text>
              <Canvas.Text color={theme.tokens.textSecondary}>
                {row.role}
              </Canvas.Text>
            </Canvas.Container>
    }, {
      key: 'status',
      name: 'Статус',
      width: 220,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container direction="column" justifyContent="center" gap={6} padding={{
        left: 12,
        right: 12
      }}>
              <Canvas.Container gap={4}>
                <Canvas.Badge text={STATUS[row.status].label} view={STATUS[row.status].view} size="s" />
                {row.tags.map(tag => <Canvas.Badge key={tag} text={tag} view="light" size="s" />)}
              </Canvas.Container>
              <Canvas.Text color={theme.tokens.textSecondary}>
                {row.due}
              </Canvas.Text>
            </Canvas.Container>
    }, {
      key: 'actions',
      name: '',
      width: 220,
      renderCell: ({
        row
      }) => <Canvas.Container alignItems="center" justifyContent="flex-end" gap={8} padding={{
        left: 12,
        right: 12
      }}>
              <Canvas.Button view="secondary" size="xs">
                Открыть
              </Canvas.Button>
              {row.status !== 'done' && <Canvas.Button view="accent" size="xs">
                  Взять
                </Canvas.Button>}
            </Canvas.Container>
    }], []);
    return <TableCanvas tableConfig={{
      rowHeight: 'auto',
      containerStyle: {
        height: '440px'
      }
    }} columnConfig={columnConfig} rows={taskRows} />;
  }
}`,...(B=(S=u.parameters)==null?void 0:S.docs)==null?void 0:B.source},description:{story:"Составная ячейка: вложенные контейнеры строкой и колонкой, отступы и выравнивание",...(I=(E=u.parameters)==null?void 0:E.docs)==null?void 0:I.description}}};var A,D,z,F,P;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...storySourceDoc({
    code: alignmentCode,
    previewSource: 'shown'
  }),
  name: 'Выравнивание в ячейке',
  render: () => {
    const columnConfig = useMemo<readonly ColumnConfig<AlignRow>[]>(() => [{
      key: 'justifyContent',
      name: 'justifyContent',
      width: 160,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container alignItems="center" padding={{
        left: 12
      }}>
              <Canvas.Text color={theme.tokens.textSecondary}>
                {row.justifyContent}
              </Canvas.Text>
            </Canvas.Container>
    }, {
      key: 'content',
      name: 'Содержимое',
      width: 480,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container justifyContent={row.justifyContent} alignItems="center" gap={8} padding={{
        left: 12,
        right: 12
      }} backgroundColor={theme.tokens.surfaceTransparentSecondary}>
              <Canvas.Badge text="Badge" view="accent" size="s" />
              <Canvas.Text>Text</Canvas.Text>
              <Canvas.Button view="accent" size="xs">
                Button
              </Canvas.Button>
            </Canvas.Container>
    }], []);
    return <TableCanvas tableConfig={{
      rowHeight: 48,
      containerStyle: {
        height: '260px'
      }
    }} columnConfig={columnConfig} rows={alignRows} />;
  }
}`,...(z=(D=r.parameters)==null?void 0:D.docs)==null?void 0:z.source},description:{story:"Корневой контейнер равен ячейке: justifyContent раскладывает содержимое по её ширине",...(P=(F=r.parameters)==null?void 0:F.docs)==null?void 0:P.description}}};const K=["Default","TaskCard","Alignment"],Z=Object.freeze(Object.defineProperty({__proto__:null,Alignment:r,Default:s,TaskCard:u,__namedExportsOrder:K,default:O},Symbol.toStringTag,{value:"Module"}));export{Z as C};
