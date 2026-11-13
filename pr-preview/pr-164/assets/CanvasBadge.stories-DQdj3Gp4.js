import{r as i,d as n}from"./react-D2T61mpp.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{C as o,T as c}from"./TableCanvas-BrIuA-KP.js";import{sM as D}from"./@salutejs/plasma-icons-zWvvayCa.js";const z=["default","accent","positive","warning","negative","dark","light"],g=["xs","s","m","l"],v=z.map(s=>({id:s,view:s})),V={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasBadge",tags:["!autodocs"]},j=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const columnConfig: ColumnConfig[] = [
  {
    key: 'status',
    name: 'Статус',
    width: 200,
    renderCell: ({ row, theme }) => (
      <Canvas.Container direction="row" alignItems="center" padding={{ left: theme.cellHorizontalPadding, right: theme.cellHorizontalPadding }}>
        <Canvas.Badge
          text={row.status}
          view="default"
          customColor="#FFFFFF"
          customBackgroundColor="#0B7ECB"
        />
      </Canvas.Container>
    ),
  },
];

<TableCanvas
  tableConfig={{
    containerStyle: { height: '300px' },
    rowSize: { showInControl: true },
  }}
  columnConfig={columnConfig}
  rows={rows}
/>
`,P=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const columnConfig: ColumnConfig[] = [
  {
    key: 'status',
    name: 'Статус',
    width: 120,
    renderCell: ({ row }) => (
      <Canvas.Container direction="row" alignItems="center" padding={8}>
        <Canvas.Badge text={row.status} view="accent" size="s" />
      </Canvas.Container>
    ),
  },
];

<TableCanvas
  tableConfig={{ containerStyle: { height: '400px' } }}
  columnConfig={columnConfig}
  rows={rows}
/>
`,t={name:"Custom Colors",...C({code:j,previewSource:"shown"}),render:()=>{const s=[{id:"1",label:"Info",bg:"#0B7ECB",text:"#FFFFFF"},{id:"2",label:"Custom green",bg:"#108E26",text:"#FFFFFF"},{id:"3",label:"Transparent custom",bg:"rgba(11, 126, 203, 0.12)",text:"#0B7ECB"},{id:"4",label:"Orange",bg:"#FA5F05",text:"#FFFFFF"},{id:"5",label:"Default view",bg:"",text:""}],r=i.useMemo(()=>[{key:"id",name:"ID",width:60},{key:"solid",name:"Solid",width:200,renderCell:({row:e,theme:a})=>n.jsxDEV(o.Container,{direction:"row",alignItems:"center",padding:{left:a.cellHorizontalPadding,right:a.cellHorizontalPadding},children:n.jsxDEV(o.Badge,{text:e.label,view:"default",customColor:e.text||void 0,customBackgroundColor:e.bg||void 0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:124,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:116,columnNumber:13},void 0)},{key:"pilled",name:"Pilled",width:200,renderCell:({row:e,theme:a})=>n.jsxDEV(o.Container,{direction:"row",alignItems:"center",padding:{left:a.cellHorizontalPadding,right:a.cellHorizontalPadding},children:n.jsxDEV(o.Badge,{text:e.label,view:"default",pilled:!0,customColor:e.text||void 0,customBackgroundColor:e.bg||void 0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:146,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:138,columnNumber:13},void 0)},{key:"transparent",name:"Transparent",width:200,renderCell:({row:e,theme:a})=>n.jsxDEV(o.Container,{direction:"row",alignItems:"center",padding:{left:a.cellHorizontalPadding,right:a.cellHorizontalPadding},children:n.jsxDEV(o.Badge,{text:e.label,view:"default",transparent:!0,customColor:e.text||void 0,customBackgroundColor:e.bg||void 0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:169,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:161,columnNumber:13},void 0)}],[]);return n.jsxDEV(c,{tableConfig:{containerStyle:{height:"300px"},rowSize:{showInControl:!0}},columnConfig:r,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:184,columnNumber:7},void 0)}},l={...C({code:P,previewSource:"shown"}),args:{text:"Badge",transparent:!1,clear:!1,pilled:!1},argTypes:{text:{control:"text"},transparent:{control:"boolean"},clear:{control:"boolean"},pilled:{control:"boolean"}},render:s=>{const{text:r,transparent:e,clear:a,pilled:f}=s,I=i.useMemo(()=>g.map(m=>({key:m,name:m,width:120,renderCell:({row:T})=>n.jsxDEV(o.Container,{direction:"row",alignItems:"center",padding:8,children:n.jsxDEV(o.Badge,{text:r,view:T.view,size:m,transparent:e,clear:a,pilled:f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:226,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:225,columnNumber:13},void 0)})),[r,e,a,f]);return n.jsxDEV(c,{tableConfig:{containerStyle:{height:"400px"}},columnConfig:I,rows:v},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:241,columnNumber:7},void 0)}},H=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconSearch } from '@daisforge/ui/icons';

const icon = Canvas.icon(<IconSearch />);

const columnConfig: ColumnConfig[] = [
  {
    key: 'badge',
    name: 'Бейдж',
    width: 120,
    renderCell: ({ row }) => (
      <Canvas.Container direction="row" alignItems="center" padding={8}>
        <Canvas.Badge text="" leftIcon={icon} view={row.view} size="s" />
      </Canvas.Container>
    ),
  },
];

<TableCanvas
  tableConfig={{ containerStyle: { height: '400px' } }}
  columnConfig={columnConfig}
  rows={rows}
/>
`,u={name:"Only Icon",...C({code:H,previewSource:"shown"}),render:()=>{const s=i.useMemo(()=>o.icon(n.jsxDEV(D,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:280,columnNumber:44},void 0)),[]),r=i.useMemo(()=>g.map(e=>({key:e,name:e,width:120,renderCell:({row:a})=>n.jsxDEV(o.Container,{direction:"row",alignItems:"center",padding:8,children:n.jsxDEV(o.Badge,{text:"",leftIcon:s,view:a.view,size:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:290,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:289,columnNumber:13},void 0)})),[s]);return n.jsxDEV(c,{tableConfig:{containerStyle:{height:"400px"}},columnConfig:r,rows:v},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:303,columnNumber:7},void 0)}},d={name:"Длинный текст в узких колонках",render:()=>{const s=i.useMemo(()=>o.icon(n.jsxDEV(D,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:315,columnNumber:44},void 0)),[]),r=i.useMemo(()=>g.map(e=>({key:e,name:e,width:160,minWidth:40,renderCell:({row:a})=>n.jsxDEV(o.Container,{direction:"row",alignItems:"center",padding:8,children:n.jsxDEV(o.Badge,{text:"Очень длинный статус согласования",view:a.view,size:e,leftIcon:a.view==="positive"?s:void 0,rightIcon:a.view==="warning"?s:void 0,transparent:a.view==="negative",clear:a.view==="dark",pilled:a.view==="light"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:325,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:324,columnNumber:13},void 0)})),[s]);return n.jsxDEV(n.Fragment,{children:[n.jsxDEV("p",{children:"Сужайте и расширяйте колонки за границу заголовка: текст должен заканчиваться многоточием внутри бейджа."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:343,columnNumber:9},void 0),n.jsxDEV(c,{tableConfig:{containerStyle:{height:"400px"},resizableColumn:!0},columnConfig:r,rows:v},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:347,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:342,columnNumber:7},void 0)}};var b,w,p;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Custom Colors',
  ...storySourceDoc({
    code: customColorsCode,
    previewSource: 'shown'
  }),
  render: () => {
    type CustomRow = {
      id: string;
      label: string;
      bg: string;
      text: string;
    };
    const customRows: CustomRow[] = [{
      id: '1',
      label: 'Info',
      bg: '#0B7ECB',
      text: '#FFFFFF'
    }, {
      id: '2',
      label: 'Custom green',
      bg: '#108E26',
      text: '#FFFFFF'
    }, {
      id: '3',
      label: 'Transparent custom',
      bg: 'rgba(11, 126, 203, 0.12)',
      text: '#0B7ECB'
    }, {
      id: '4',
      label: 'Orange',
      bg: '#FA5F05',
      text: '#FFFFFF'
    }, {
      id: '5',
      label: 'Default view',
      bg: '',
      text: ''
    }];
    const columnConfig = useMemo<readonly ColumnConfig<CustomRow>[]>(() => [{
      key: 'id',
      name: 'ID',
      width: 60
    }, {
      key: 'solid',
      name: 'Solid',
      width: 200,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container direction="row" alignItems="center" padding={{
        left: theme.cellHorizontalPadding,
        right: theme.cellHorizontalPadding
      }}>
              <Canvas.Badge text={row.label} view="default" customColor={row.text || undefined} customBackgroundColor={row.bg || undefined} />
            </Canvas.Container>
    }, {
      key: 'pilled',
      name: 'Pilled',
      width: 200,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container direction="row" alignItems="center" padding={{
        left: theme.cellHorizontalPadding,
        right: theme.cellHorizontalPadding
      }}>
              <Canvas.Badge text={row.label} view="default" pilled customColor={row.text || undefined} customBackgroundColor={row.bg || undefined} />
            </Canvas.Container>
    }, {
      key: 'transparent',
      name: 'Transparent',
      width: 200,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container direction="row" alignItems="center" padding={{
        left: theme.cellHorizontalPadding,
        right: theme.cellHorizontalPadding
      }}>
              <Canvas.Badge text={row.label} view="default" transparent customColor={row.text || undefined} customBackgroundColor={row.bg || undefined} />
            </Canvas.Container>
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '300px'
      },
      rowSize: {
        showInControl: true
      }
    }} columnConfig={columnConfig} rows={customRows} />;
  }
}`,...(p=(w=t.parameters)==null?void 0:w.docs)==null?void 0:p.source}}};var h,x,k;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...storySourceDoc({
    code: defaultCode,
    previewSource: 'shown'
  }),
  args: {
    text: 'Badge',
    transparent: false,
    clear: false,
    pilled: false
  },
  argTypes: {
    text: {
      control: 'text'
    },
    transparent: {
      control: 'boolean'
    },
    clear: {
      control: 'boolean'
    },
    pilled: {
      control: 'boolean'
    }
  },
  render: args => {
    const {
      text,
      transparent,
      clear,
      pilled
    } = args as {
      text: string;
      transparent: boolean;
      clear: boolean;
      pilled: boolean;
    };
    const columnConfig = useMemo<readonly ColumnConfig<ViewRow>[]>(() => SIZES.map(size => ({
      key: size,
      name: size,
      width: 120,
      renderCell: ({
        row
      }) => <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.Badge text={text} view={row.view} size={size} transparent={transparent} clear={clear} pilled={pilled} />
            </Canvas.Container>
    })), [text, transparent, clear, pilled]);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '400px'
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(k=(x=l.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var B,E,y;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Only Icon',
  ...storySourceDoc({
    code: iconOnlyCode,
    previewSource: 'shown'
  }),
  render: () => {
    const icon = useMemo(() => Canvas.icon(<IconSearch />), []);
    const columnConfig = useMemo<readonly ColumnConfig<ViewRow>[]>(() => SIZES.map(size => ({
      key: size,
      name: size,
      width: 120,
      renderCell: ({
        row
      }) => <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.Badge text="" leftIcon={icon} view={row.view} size={size} />
            </Canvas.Container>
    })), [icon]);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '400px'
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(y=(E=u.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var N,F,S;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Длинный текст в узких колонках',
  render: () => {
    const icon = useMemo(() => Canvas.icon(<IconSearch />), []);
    const columnConfig = useMemo<readonly ColumnConfig<ViewRow>[]>(() => SIZES.map(size => ({
      key: size,
      name: size,
      width: 160,
      minWidth: 40,
      renderCell: ({
        row
      }) => <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.Badge text="Очень длинный статус согласования" view={row.view} size={size} leftIcon={row.view === 'positive' ? icon : undefined} rightIcon={row.view === 'warning' ? icon : undefined} transparent={row.view === 'negative'} clear={row.view === 'dark'} pilled={row.view === 'light'} />
            </Canvas.Container>
    })), [icon]);
    return <>
        <p>
          Сужайте и расширяйте колонки за границу заголовка: текст должен
          заканчиваться многоточием внутри бейджа.
        </p>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: '400px'
        },
        resizableColumn: true
      }} columnConfig={columnConfig} rows={rows} />
      </>;
  }
}`,...(S=(F=d.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};const M=["CustomColors","Default","IconOnly","NarrowColumns"],Z=Object.freeze(Object.defineProperty({__proto__:null,CustomColors:t,Default:l,IconOnly:u,NarrowColumns:d,__namedExportsOrder:M,default:V},Symbol.toStringTag,{value:"Module"}));export{Z as C};
