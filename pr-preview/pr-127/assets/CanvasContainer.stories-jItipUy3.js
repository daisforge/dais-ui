import{r as m,d as n}from"./react-D2T61mpp.js";import{s as g}from"./storySourceDoc-tVKyHcEN.js";import{C as e,T as v}from"./TableCanvas-DGQglNUS.js";const M=["row","column"],_=["flex-start","center","flex-end","stretch"],F=["flex-start","center","flex-end","space-between"],H=s=>s.replace(/^\d+/,"600"),U={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasContainer",tags:["!autodocs"]},O=[{id:1,title:"Сверка остатков",status:"В работе"},{id:2,title:"Отчёт по кварталу",status:"Готово"},{id:3,title:"Импорт выписок",status:"Новая"}],G=`
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
`,o={...g({code:G,previewSource:"shown"}),name:"Песочница",args:{direction:"row",alignItems:"center",justifyContent:"flex-start",gap:8,cellPadding:8,padding:12,width:0,height:0,backgroundColor:""},argTypes:{direction:{control:"select",options:M},alignItems:{control:"select",options:_},justifyContent:{control:"select",options:F},gap:{control:{type:"range",min:0,max:24,step:2}},cellPadding:{name:"cellPadding (корень)",control:{type:"range",min:0,max:24,step:2}},padding:{name:"padding (карточка)",control:{type:"range",min:0,max:24,step:2}},width:{control:{type:"range",min:0,max:480,step:10}},height:{control:{type:"range",min:0,max:120,step:10}},backgroundColor:{name:"backgroundColor (пусто — токен темы)",control:"color"}},render:s=>{const{direction:a,alignItems:t,justifyContent:u,gap:p,cellPadding:l,padding:d,width:C,height:c,backgroundColor:f}=s,P=m.useMemo(()=>[{key:"id",name:"id",width:60},{key:"card",name:"Карточка",width:520,renderCell:({row:b,theme:R})=>n.jsxDEV(e.Container,{alignItems:"center",padding:{top:l,right:l+4,bottom:l,left:l+4},children:n.jsxDEV(e.Container,{direction:a,alignItems:t,justifyContent:u,gap:p,padding:{top:d*.75,right:d,bottom:d*.75,left:d},style:{...C>0?{width:C}:{},...c>0?{height:c}:{}},backgroundColor:f||R.tokens.surfaceAccentMinor,children:[n.jsxDEV(e.Badge,{text:b.status,view:"accent",size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:166,columnNumber:17},void 0),n.jsxDEV(e.Text,{children:b.title},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:167,columnNumber:17},void 0),n.jsxDEV(e.Button,{view:"accent",size:"xs",children:"Открыть"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:168,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:147,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:138,columnNumber:13},void 0)}],[a,t,u,p,l,d,C,c,f]);return n.jsxDEV(v,{tableConfig:{rowHeight:"auto",containerStyle:{height:"240px"}},columnConfig:P,rows:O},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:190,columnNumber:7},void 0)}},h={new:{label:"Новая",view:"default"},progress:{label:"В работе",view:"accent"},review:{label:"На проверке",view:"warning"},done:{label:"Готово",view:"positive"}},J=[{id:1,title:"Сверка остатков по счетам",project:"Казначейство · FIN-1204",assignee:"Анна Иванова",role:"Аналитик",status:"progress",due:"до 24 октября",tags:["Срочно","Q4"]},{id:2,title:"Квартальный отчёт для правления",project:"Отчётность · FIN-1187",assignee:"Пётр Смирнов",role:"Руководитель",status:"review",due:"до 31 октября",tags:["Отчёт"]},{id:3,title:"Импорт банковских выписок",project:"Интеграции · FIN-1250",assignee:"Мария Козлова",role:"Разработчик",status:"new",due:"без срока",tags:[]},{id:4,title:"Закрытие месяца",project:"Бухгалтерия · FIN-1093",assignee:"Игорь Петров",role:"Бухгалтер",status:"done",due:"закрыта 15 октября",tags:["Q3"]}],L=`
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
`,i={...g({code:L,previewSource:"shown"}),name:"Карточка задачи",render:()=>{const s=m.useMemo(()=>[{key:"title",name:"Задача",width:380,renderCell:({row:a,theme:t})=>n.jsxDEV(e.Container,{alignItems:"center",gap:12,padding:{top:12,right:12,bottom:12,left:12},children:[n.jsxDEV(e.Avatar,{name:a.assignee,size:"m"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:336,columnNumber:15},void 0),n.jsxDEV(e.Container,{direction:"column",gap:4,children:[n.jsxDEV(e.Text,{font:H(t.baseFontStyle),children:a.title},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:338,columnNumber:17},void 0),n.jsxDEV(e.Text,{color:t.tokens.textSecondary,children:a.project},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:341,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:337,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:331,columnNumber:13},void 0)},{key:"assignee",name:"Исполнитель",width:200,renderCell:({row:a,theme:t})=>n.jsxDEV(e.Container,{direction:"column",justifyContent:"center",gap:4,padding:{left:12,right:12},children:[n.jsxDEV(e.Text,{children:a.assignee},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:359,columnNumber:15},void 0),n.jsxDEV(e.Text,{color:t.tokens.textSecondary,children:a.role},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:360,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:353,columnNumber:13},void 0)},{key:"status",name:"Статус",width:220,renderCell:({row:a,theme:t})=>n.jsxDEV(e.Container,{direction:"column",justifyContent:"center",gap:6,padding:{left:12,right:12},children:[n.jsxDEV(e.Container,{gap:4,children:[n.jsxDEV(e.Badge,{text:h[a.status].label,view:h[a.status].view,size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:378,columnNumber:17},void 0),a.tags.map(u=>n.jsxDEV(e.Badge,{text:u,view:"light",size:"s"},u,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:384,columnNumber:19},void 0))]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:377,columnNumber:15},void 0),n.jsxDEV(e.Text,{color:t.tokens.textSecondary,children:a.due},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:387,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:371,columnNumber:13},void 0)},{key:"actions",name:"",width:220,renderCell:({row:a})=>n.jsxDEV(e.Container,{alignItems:"center",justifyContent:"flex-end",gap:8,padding:{left:12,right:12},children:[n.jsxDEV(e.Button,{view:"secondary",size:"xs",children:"Открыть"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:404,columnNumber:15},void 0),a.status!=="done"&&n.jsxDEV(e.Button,{view:"accent",size:"xs",children:"Взять"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:408,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:398,columnNumber:13},void 0)}],[]);return n.jsxDEV(v,{tableConfig:{rowHeight:"auto",containerStyle:{height:"440px"}},columnConfig:s,rows:J},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:420,columnNumber:7},void 0)}},Y=F.map((s,a)=>({id:a+1,justifyContent:s})),Q=`
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
`,r={...g({code:Q,previewSource:"shown"}),name:"Выравнивание в ячейке",render:()=>{const s=m.useMemo(()=>[{key:"justifyContent",name:"justifyContent",width:160,renderCell:({row:a,theme:t})=>n.jsxDEV(e.Container,{alignItems:"center",padding:{left:12},children:n.jsxDEV(e.Text,{color:t.tokens.textSecondary,children:a.justifyContent},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:470,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:469,columnNumber:13},void 0)},{key:"content",name:"Содержимое",width:480,renderCell:({row:a,theme:t})=>n.jsxDEV(e.Container,{justifyContent:a.justifyContent,alignItems:"center",gap:8,padding:{left:12,right:12},backgroundColor:t.tokens.surfaceTransparentSecondary,children:[n.jsxDEV(e.Badge,{text:"Badge",view:"accent",size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:488,columnNumber:15},void 0),n.jsxDEV(e.Text,{children:"Text"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:489,columnNumber:15},void 0),n.jsxDEV(e.Button,{view:"accent",size:"xs",children:"Button"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:490,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:481,columnNumber:13},void 0)}],[]);return n.jsxDEV(v,{tableConfig:{rowHeight:48,containerStyle:{height:"260px"}},columnConfig:s,rows:Y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:501,columnNumber:7},void 0)}};var w,x,k,y,T;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(x=o.parameters)==null?void 0:x.docs)==null?void 0:k.source},description:{story:"Песочница: свойства карточки (вложенного контейнера) меняются контролами",...(T=(y=o.parameters)==null?void 0:y.docs)==null?void 0:T.description}}};var E,N,j,D,S;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(j=(N=i.parameters)==null?void 0:N.docs)==null?void 0:j.source},description:{story:"Составная ячейка: вложенные контейнеры строкой и колонкой, отступы и выравнивание",...(S=(D=i.parameters)==null?void 0:D.docs)==null?void 0:S.description}}};var B,I,A,V,z;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(A=(I=r.parameters)==null?void 0:I.docs)==null?void 0:A.source},description:{story:"Корневой контейнер равен ячейке: justifyContent раскладывает содержимое по её ширине",...(z=(V=r.parameters)==null?void 0:V.docs)==null?void 0:z.description}}};const q=["Default","TaskCard","Alignment"],Z=Object.freeze(Object.defineProperty({__proto__:null,Alignment:r,Default:o,TaskCard:i,__namedExportsOrder:q,default:U},Symbol.toStringTag,{value:"Module"}));export{Z as C};
