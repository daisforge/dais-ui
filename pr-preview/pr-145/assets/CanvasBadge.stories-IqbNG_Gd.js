import{r as i,d as n}from"./react-D2T61mpp.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{C as a,T as c}from"./TableCanvas-CBHVGFur.js";import{sL as S}from"./@salutejs/plasma-icons-B_eXmh7u.js";const V=["default","accent","positive","warning","negative","dark","light"],g=["xs","s","m","l"],v=V.map(o=>({id:o,view:o})),j={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasBadge",tags:["!autodocs"]},z=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const columnConfig: ColumnConfig[] = [
  {
    key: 'status',
    name: 'Статус',
    width: 200,
    renderCell: ({ row }) => (
      <Canvas.Container direction="row" alignItems="center" padding={8}>
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
  tableConfig={{ containerStyle: { height: '300px' } }}
  columnConfig={columnConfig}
  rows={rows}
/>
`,M=`
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
`,t={name:"Custom Colors",...C({code:z,previewSource:"shown"}),render:()=>{const o=[{id:"1",label:"Info",bg:"#0B7ECB",text:"#FFFFFF"},{id:"2",label:"Custom green",bg:"#108E26",text:"#FFFFFF"},{id:"3",label:"Transparent custom",bg:"rgba(11, 126, 203, 0.12)",text:"#0B7ECB"},{id:"4",label:"Orange",bg:"#FA5F05",text:"#FFFFFF"},{id:"5",label:"Default view",bg:"",text:""}],r=i.useMemo(()=>[{key:"id",name:"ID",width:60},{key:"solid",name:"Solid",width:200,renderCell:({row:e})=>n.jsxDEV(a.Container,{direction:"row",alignItems:"center",padding:8,children:n.jsxDEV(a.Badge,{text:e.label,view:"default",customColor:e.text||void 0,customBackgroundColor:e.bg||void 0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:114,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:113,columnNumber:13},void 0)},{key:"pilled",name:"Pilled",width:200,renderCell:({row:e})=>n.jsxDEV(a.Container,{direction:"row",alignItems:"center",padding:8,children:n.jsxDEV(a.Badge,{text:e.label,view:"default",pilled:!0,customColor:e.text||void 0,customBackgroundColor:e.bg||void 0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:129,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:128,columnNumber:13},void 0)},{key:"transparent",name:"Transparent",width:200,renderCell:({row:e})=>n.jsxDEV(a.Container,{direction:"row",alignItems:"center",padding:8,children:n.jsxDEV(a.Badge,{text:e.label,view:"default",transparent:!0,customColor:e.text||void 0,customBackgroundColor:e.bg||void 0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:145,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:144,columnNumber:13},void 0)}],[]);return n.jsxDEV(c,{tableConfig:{containerStyle:{height:"300px"}},columnConfig:r,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:160,columnNumber:7},void 0)}},u={...C({code:M,previewSource:"shown"}),args:{text:"Badge",transparent:!1,clear:!1,pilled:!1},argTypes:{text:{control:"text"},transparent:{control:"boolean"},clear:{control:"boolean"},pilled:{control:"boolean"}},render:o=>{const{text:r,transparent:e,clear:s,pilled:b}=o,T=i.useMemo(()=>g.map(m=>({key:m,name:m,width:120,renderCell:({row:I})=>n.jsxDEV(a.Container,{direction:"row",alignItems:"center",padding:8,children:n.jsxDEV(a.Badge,{text:r,view:I.view,size:m,transparent:e,clear:s,pilled:b},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:199,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:198,columnNumber:13},void 0)})),[r,e,s,b]);return n.jsxDEV(c,{tableConfig:{containerStyle:{height:"400px"}},columnConfig:T,rows:v},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:214,columnNumber:7},void 0)}},A=`
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
`,l={name:"Only Icon",...C({code:A,previewSource:"shown"}),render:()=>{const o=i.useMemo(()=>a.icon(n.jsxDEV(S,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:253,columnNumber:44},void 0)),[]),r=i.useMemo(()=>g.map(e=>({key:e,name:e,width:120,renderCell:({row:s})=>n.jsxDEV(a.Container,{direction:"row",alignItems:"center",padding:8,children:n.jsxDEV(a.Badge,{text:"",leftIcon:o,view:s.view,size:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:263,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:262,columnNumber:13},void 0)})),[o]);return n.jsxDEV(c,{tableConfig:{containerStyle:{height:"400px"}},columnConfig:r,rows:v},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:276,columnNumber:7},void 0)}},d={name:"Длинный текст в узких колонках",render:()=>{const o=i.useMemo(()=>a.icon(n.jsxDEV(S,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:288,columnNumber:44},void 0)),[]),r=i.useMemo(()=>g.map(e=>({key:e,name:e,width:160,minWidth:40,renderCell:({row:s})=>n.jsxDEV(a.Container,{direction:"row",alignItems:"center",padding:8,children:n.jsxDEV(a.Badge,{text:"Очень длинный статус согласования",view:s.view,size:e,leftIcon:s.view==="positive"?o:void 0,rightIcon:s.view==="warning"?o:void 0,transparent:s.view==="negative",clear:s.view==="dark",pilled:s.view==="light"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:298,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:297,columnNumber:13},void 0)})),[o]);return n.jsxDEV(n.Fragment,{children:[n.jsxDEV("p",{children:"Сужайте и расширяйте колонки за границу заголовка: текст должен заканчиваться многоточием внутри бейджа."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:316,columnNumber:9},void 0),n.jsxDEV(c,{tableConfig:{containerStyle:{height:"400px"},resizableColumn:!0},columnConfig:r,rows:v},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:320,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:315,columnNumber:7},void 0)}};var f,w,p;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
        row
      }) => <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.Badge text={row.label} view="default" customColor={row.text || undefined} customBackgroundColor={row.bg || undefined} />
            </Canvas.Container>
    }, {
      key: 'pilled',
      name: 'Pilled',
      width: 200,
      renderCell: ({
        row
      }) => <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.Badge text={row.label} view="default" pilled customColor={row.text || undefined} customBackgroundColor={row.bg || undefined} />
            </Canvas.Container>
    }, {
      key: 'transparent',
      name: 'Transparent',
      width: 200,
      renderCell: ({
        row
      }) => <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.Badge text={row.label} view="default" transparent customColor={row.text || undefined} customBackgroundColor={row.bg || undefined} />
            </Canvas.Container>
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '300px'
      }
    }} columnConfig={columnConfig} rows={customRows} />;
  }
}`,...(p=(w=t.parameters)==null?void 0:w.docs)==null?void 0:p.source}}};var x,k,h;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(h=(k=u.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var B,E,y;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(y=(E=l.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var N,F,D;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(D=(F=d.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};const O=["CustomColors","Default","IconOnly","NarrowColumns"],W=Object.freeze(Object.defineProperty({__proto__:null,CustomColors:t,Default:u,IconOnly:l,NarrowColumns:d,__namedExportsOrder:O,default:j},Symbol.toStringTag,{value:"Module"}));export{W as C};
