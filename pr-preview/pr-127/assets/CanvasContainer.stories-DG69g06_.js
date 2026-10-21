import{r as m,d as n}from"./react-D2T61mpp.js";import{s as g}from"./storySourceDoc-tVKyHcEN.js";import{C as e,T as v}from"./TableCanvas-CIWyVltb.js";const P=["row","column"],O=["flex-start","center","flex-end","stretch"],R=["flex-start","center","flex-end","space-between"],Y="#eef3ff",M="#f4f6f9",C="#7d838f",G=t=>t.replace(/^\d+/,"600"),H={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasContainer",tags:["!autodocs"]},U=[{id:1,title:"Сверка остатков",status:"В работе"},{id:2,title:"Отчёт по кварталу",status:"Готово"},{id:3,title:"Импорт выписок",status:"Новая"}],X=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const columnConfig: ColumnConfig<Row>[] = [
  {
    key: 'card',
    name: 'Карточка',
    width: 520,
    renderCell: ({ row }) => (
      // Корневой контейнер занимает всю ячейку: его padding — отступ карточки от границ ячейки
      <Canvas.Container alignItems="center" padding={{ top: 8, right: 12, bottom: 8, left: 12 }}>
        {/* Вложенный контейнер — карточка по размеру содержимого */}
        <Canvas.Container
          direction="row"
          alignItems="center"
          gap={8}
          padding={{ top: 8, right: 12, bottom: 8, left: 12 }}
          backgroundColor="#eef3ff"
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
`,o={...g({code:X,previewSource:"shown"}),name:"Песочница",args:{direction:"row",alignItems:"center",justifyContent:"flex-start",gap:8,cellPadding:8,padding:12,width:0,height:0,backgroundColor:Y},argTypes:{direction:{control:"select",options:P},alignItems:{control:"select",options:O},justifyContent:{control:"select",options:R},gap:{control:{type:"range",min:0,max:24,step:2}},cellPadding:{name:"cellPadding (корень)",control:{type:"range",min:0,max:24,step:2}},padding:{name:"padding (карточка)",control:{type:"range",min:0,max:24,step:2}},width:{control:{type:"range",min:0,max:480,step:10}},height:{control:{type:"range",min:0,max:120,step:10}},backgroundColor:{control:"color"}},render:t=>{const{direction:a,alignItems:s,justifyContent:f,gap:p,cellPadding:u,padding:l,width:d,height:c,backgroundColor:b}=t,_=m.useMemo(()=>[{key:"id",name:"id",width:60},{key:"card",name:"Карточка",width:520,renderCell:({row:w})=>n.jsxDEV(e.Container,{alignItems:"center",padding:{top:u,right:u+4,bottom:u,left:u+4},children:n.jsxDEV(e.Container,{direction:a,alignItems:s,justifyContent:f,gap:p,padding:{top:l*.75,right:l,bottom:l*.75,left:l},style:{...d>0?{width:d}:{},...c>0?{height:c}:{}},backgroundColor:b,children:[n.jsxDEV(e.Badge,{text:w.status,view:"accent",size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:167,columnNumber:17},void 0),n.jsxDEV(e.Text,{children:w.title},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:168,columnNumber:17},void 0),n.jsxDEV(e.Button,{view:"accent",size:"xs",children:"Открыть"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:169,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:150,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:141,columnNumber:13},void 0)}],[a,s,f,p,u,l,d,c,b]);return n.jsxDEV(v,{tableConfig:{rowHeight:"auto",containerStyle:{height:"240px"}},columnConfig:_,rows:U},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:191,columnNumber:7},void 0)}},h={new:{label:"Новая",view:"default"},progress:{label:"В работе",view:"accent"},review:{label:"На проверке",view:"warning"},done:{label:"Готово",view:"positive"}},L=[{id:1,title:"Сверка остатков по счетам",project:"Казначейство · FIN-1204",assignee:"Анна Иванова",role:"Аналитик",status:"progress",due:"до 24 октября",tags:["Срочно","Q4"]},{id:2,title:"Квартальный отчёт для правления",project:"Отчётность · FIN-1187",assignee:"Пётр Смирнов",role:"Руководитель",status:"review",due:"до 31 октября",tags:["Отчёт"]},{id:3,title:"Импорт банковских выписок",project:"Интеграции · FIN-1250",assignee:"Мария Козлова",role:"Разработчик",status:"new",due:"без срока",tags:[]},{id:4,title:"Закрытие месяца",project:"Бухгалтерия · FIN-1093",assignee:"Игорь Петров",role:"Бухгалтер",status:"done",due:"закрыта 15 октября",tags:["Q3"]}],J=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const SECONDARY_TEXT = '#7d838f';
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
          <Canvas.Text color={SECONDARY_TEXT}>{row.project}</Canvas.Text>
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
        <Canvas.Text color={SECONDARY_TEXT}>{row.due}</Canvas.Text>
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
`,i={...g({code:J,previewSource:"shown"}),name:"Карточка задачи",render:()=>{const t=m.useMemo(()=>[{key:"title",name:"Задача",width:380,renderCell:({row:a,theme:s})=>n.jsxDEV(e.Container,{alignItems:"center",gap:12,padding:{top:12,right:12,bottom:12,left:12},children:[n.jsxDEV(e.Avatar,{name:a.assignee,size:"m"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:338,columnNumber:15},void 0),n.jsxDEV(e.Container,{direction:"column",gap:4,children:[n.jsxDEV(e.Text,{font:G(s.baseFontStyle),children:a.title},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:340,columnNumber:17},void 0),n.jsxDEV(e.Text,{color:C,children:a.project},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:343,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:339,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:333,columnNumber:13},void 0)},{key:"assignee",name:"Исполнитель",width:200,renderCell:({row:a})=>n.jsxDEV(e.Container,{direction:"column",justifyContent:"center",gap:4,padding:{left:12,right:12},children:[n.jsxDEV(e.Text,{children:a.assignee},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:359,columnNumber:15},void 0),n.jsxDEV(e.Text,{color:C,children:a.role},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:360,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:353,columnNumber:13},void 0)},{key:"status",name:"Статус",width:220,renderCell:({row:a})=>n.jsxDEV(e.Container,{direction:"column",justifyContent:"center",gap:6,padding:{left:12,right:12},children:[n.jsxDEV(e.Container,{gap:4,children:[n.jsxDEV(e.Badge,{text:h[a.status].label,view:h[a.status].view,size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:376,columnNumber:17},void 0),a.tags.map(s=>n.jsxDEV(e.Badge,{text:s,view:"light",size:"s"},s,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:382,columnNumber:19},void 0))]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:375,columnNumber:15},void 0),n.jsxDEV(e.Text,{color:C,children:a.due},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:385,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:369,columnNumber:13},void 0)},{key:"actions",name:"",width:220,renderCell:({row:a})=>n.jsxDEV(e.Container,{alignItems:"center",justifyContent:"flex-end",gap:8,padding:{left:12,right:12},children:[n.jsxDEV(e.Button,{view:"secondary",size:"xs",children:"Открыть"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:400,columnNumber:15},void 0),a.status!=="done"&&n.jsxDEV(e.Button,{view:"accent",size:"xs",children:"Взять"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:404,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:394,columnNumber:13},void 0)}],[]);return n.jsxDEV(v,{tableConfig:{rowHeight:"auto",containerStyle:{height:"440px"}},columnConfig:t,rows:L},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:416,columnNumber:7},void 0)}},Q=R.map((t,a)=>({id:a+1,justifyContent:t})),q=`
// Корневой контейнер растягивается на всю ячейку, поэтому justifyContent
// и alignItems выравнивают содержимое внутри ячейки
renderCell: ({ row }) => (
  <Canvas.Container
    justifyContent={row.justifyContent}
    alignItems="center"
    gap={8}
    padding={{ left: 12, right: 12 }}
    backgroundColor='#f4f6f9'
  >
    <Canvas.Badge text="Badge" view="accent" size="s" />
    <Canvas.Text>Text</Canvas.Text>
    <Canvas.Button view="accent" size="xs">Button</Canvas.Button>
  </Canvas.Container>
)
`,r={...g({code:q,previewSource:"shown"}),name:"Выравнивание в ячейке",render:()=>{const t=m.useMemo(()=>[{key:"justifyContent",name:"justifyContent",width:160,renderCell:({row:a})=>n.jsxDEV(e.Container,{alignItems:"center",padding:{left:12},children:n.jsxDEV(e.Text,{color:C,children:a.justifyContent},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:466,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:465,columnNumber:13},void 0)},{key:"content",name:"Содержимое",width:480,renderCell:({row:a})=>n.jsxDEV(e.Container,{justifyContent:a.justifyContent,alignItems:"center",gap:8,padding:{left:12,right:12},backgroundColor:M,children:[n.jsxDEV(e.Badge,{text:"Badge",view:"accent",size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:484,columnNumber:15},void 0),n.jsxDEV(e.Text,{children:"Text"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:485,columnNumber:15},void 0),n.jsxDEV(e.Button,{view:"accent",size:"xs",children:"Button"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:486,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:477,columnNumber:13},void 0)}],[]);return n.jsxDEV(v,{tableConfig:{rowHeight:48,containerStyle:{height:"260px"}},columnConfig:t,rows:Q},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:497,columnNumber:7},void 0)}};var x,k,y,E,T;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
    backgroundColor: CARD_BG
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
        row
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
        }} backgroundColor={backgroundColor}>
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
}`,...(y=(k=o.parameters)==null?void 0:k.docs)==null?void 0:y.source},description:{story:"Песочница: свойства карточки (вложенного контейнера) меняются контролами",...(T=(E=o.parameters)==null?void 0:E.docs)==null?void 0:T.description}}};var N,D,j,B,S;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
                <Canvas.Text color={SECONDARY_TEXT}>{row.project}</Canvas.Text>
              </Canvas.Container>
            </Canvas.Container>
    }, {
      key: 'assignee',
      name: 'Исполнитель',
      width: 200,
      renderCell: ({
        row
      }) => <Canvas.Container direction="column" justifyContent="center" gap={4} padding={{
        left: 12,
        right: 12
      }}>
              <Canvas.Text>{row.assignee}</Canvas.Text>
              <Canvas.Text color={SECONDARY_TEXT}>{row.role}</Canvas.Text>
            </Canvas.Container>
    }, {
      key: 'status',
      name: 'Статус',
      width: 220,
      renderCell: ({
        row
      }) => <Canvas.Container direction="column" justifyContent="center" gap={6} padding={{
        left: 12,
        right: 12
      }}>
              <Canvas.Container gap={4}>
                <Canvas.Badge text={STATUS[row.status].label} view={STATUS[row.status].view} size="s" />
                {row.tags.map(tag => <Canvas.Badge key={tag} text={tag} view="light" size="s" />)}
              </Canvas.Container>
              <Canvas.Text color={SECONDARY_TEXT}>{row.due}</Canvas.Text>
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
}`,...(j=(D=i.parameters)==null?void 0:D.docs)==null?void 0:j.source},description:{story:"Составная ячейка: вложенные контейнеры строкой и колонкой, отступы и выравнивание",...(S=(B=i.parameters)==null?void 0:B.docs)==null?void 0:S.description}}};var A,I,V,z,F;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
        row
      }) => <Canvas.Container alignItems="center" padding={{
        left: 12
      }}>
              <Canvas.Text color={SECONDARY_TEXT}>
                {row.justifyContent}
              </Canvas.Text>
            </Canvas.Container>
    }, {
      key: 'content',
      name: 'Содержимое',
      width: 480,
      renderCell: ({
        row
      }) => <Canvas.Container justifyContent={row.justifyContent} alignItems="center" gap={8} padding={{
        left: 12,
        right: 12
      }} backgroundColor={ALIGN_BG}>
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
}`,...(V=(I=r.parameters)==null?void 0:I.docs)==null?void 0:V.source},description:{story:"Корневой контейнер равен ячейке: justifyContent раскладывает содержимое по её ширине",...(F=(z=r.parameters)==null?void 0:z.docs)==null?void 0:F.description}}};const K=["Default","TaskCard","Alignment"],nn=Object.freeze(Object.defineProperty({__proto__:null,Alignment:r,Default:o,TaskCard:i,__namedExportsOrder:K,default:H},Symbol.toStringTag,{value:"Module"}));export{nn as C};
