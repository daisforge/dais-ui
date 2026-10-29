import{r as d,d as n}from"./react-D2T61mpp.js";import{s as u}from"./storySourceDoc-tVKyHcEN.js";import{C as o,T as m}from"./TableCanvas-BCa1FVUv.js";import{sL as N}from"./@salutejs/plasma-icons-BOHkKNG4.js";const S=["default","accent","positive","warning","negative","dark","light"],B=["xs","s","m","l"],y=S.map(s=>({id:s,view:s})),T={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasBadge",tags:["!autodocs"]},I=`
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
`,z=`
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
`,t={name:"Custom Colors",...u({code:I,previewSource:"shown"}),render:()=>{const s=[{id:"1",label:"Info",bg:"#0B7ECB",text:"#FFFFFF"},{id:"2",label:"Custom green",bg:"#108E26",text:"#FFFFFF"},{id:"3",label:"Transparent custom",bg:"rgba(11, 126, 203, 0.12)",text:"#0B7ECB"},{id:"4",label:"Orange",bg:"#FA5F05",text:"#FFFFFF"},{id:"5",label:"Default view",bg:"",text:""}],r=d.useMemo(()=>[{key:"id",name:"ID",width:60},{key:"solid",name:"Solid",width:200,renderCell:({row:e,theme:a})=>n.jsxDEV(o.Container,{direction:"row",alignItems:"center",padding:{left:a.cellHorizontalPadding,right:a.cellHorizontalPadding},children:n.jsxDEV(o.Badge,{text:e.label,view:"default",customColor:e.text||void 0,customBackgroundColor:e.bg||void 0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:124,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:116,columnNumber:13},void 0)},{key:"pilled",name:"Pilled",width:200,renderCell:({row:e,theme:a})=>n.jsxDEV(o.Container,{direction:"row",alignItems:"center",padding:{left:a.cellHorizontalPadding,right:a.cellHorizontalPadding},children:n.jsxDEV(o.Badge,{text:e.label,view:"default",pilled:!0,customColor:e.text||void 0,customBackgroundColor:e.bg||void 0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:146,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:138,columnNumber:13},void 0)},{key:"transparent",name:"Transparent",width:200,renderCell:({row:e,theme:a})=>n.jsxDEV(o.Container,{direction:"row",alignItems:"center",padding:{left:a.cellHorizontalPadding,right:a.cellHorizontalPadding},children:n.jsxDEV(o.Badge,{text:e.label,view:"default",transparent:!0,customColor:e.text||void 0,customBackgroundColor:e.bg||void 0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:169,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:161,columnNumber:13},void 0)}],[]);return n.jsxDEV(m,{tableConfig:{containerStyle:{height:"300px"},rowSize:{showInControl:!0}},columnConfig:r,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:184,columnNumber:7},void 0)}},i={...u({code:z,previewSource:"shown"}),args:{text:"Badge",transparent:!1,clear:!1,pilled:!1},argTypes:{text:{control:"text"},transparent:{control:"boolean"},clear:{control:"boolean"},pilled:{control:"boolean"}},render:s=>{const{text:r,transparent:e,clear:a,pilled:C}=s,F=d.useMemo(()=>B.map(c=>({key:c,name:c,width:120,renderCell:({row:E})=>n.jsxDEV(o.Container,{direction:"row",alignItems:"center",padding:8,children:n.jsxDEV(o.Badge,{text:r,view:E.view,size:c,transparent:e,clear:a,pilled:C},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:226,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:225,columnNumber:13},void 0)})),[r,e,a,C]);return n.jsxDEV(m,{tableConfig:{containerStyle:{height:"400px"}},columnConfig:F,rows:y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:241,columnNumber:7},void 0)}},D=`
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
`,l={name:"Only Icon",...u({code:D,previewSource:"shown"}),render:()=>{const s=d.useMemo(()=>o.icon(n.jsxDEV(N,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:280,columnNumber:44},void 0)),[]),r=d.useMemo(()=>B.map(e=>({key:e,name:e,width:120,renderCell:({row:a})=>n.jsxDEV(o.Container,{direction:"row",alignItems:"center",padding:8,children:n.jsxDEV(o.Badge,{text:"",leftIcon:s,view:a.view,size:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:290,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:289,columnNumber:13},void 0)})),[s]);return n.jsxDEV(m,{tableConfig:{containerStyle:{height:"400px"}},columnConfig:r,rows:y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:303,columnNumber:7},void 0)}};var g,v,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var b,w,p;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(p=(w=i.parameters)==null?void 0:w.docs)==null?void 0:p.source}}};var x,h,k;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(k=(h=l.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const j=["CustomColors","Default","IconOnly"],M=Object.freeze(Object.defineProperty({__proto__:null,CustomColors:t,Default:i,IconOnly:l,__namedExportsOrder:j,default:T},Symbol.toStringTag,{value:"Module"}));export{M as C};
