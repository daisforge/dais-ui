import{r as d,d as n}from"./react-D2T61mpp.js";import{s as u}from"./storySourceDoc-tVKyHcEN.js";import{C as a,T as C}from"./TableCanvas-D9NWFDEQ.js";import{sJ as N}from"./@salutejs/plasma-icons-BrsFlXba.js";const S=["default","accent","positive","warning","negative","dark","light"],B=["xs","s","m","l"],y=S.map(o=>({id:o,view:o})),T={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasBadge",tags:["!autodocs"]},I=`
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
`,D=`
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
`,r={name:"Custom Colors",...u({code:I,previewSource:"shown"}),render:()=>{const o=[{id:"1",label:"Info",bg:"#0B7ECB",text:"#FFFFFF"},{id:"2",label:"Custom green",bg:"#108E26",text:"#FFFFFF"},{id:"3",label:"Transparent custom",bg:"rgba(11, 126, 203, 0.12)",text:"#0B7ECB"},{id:"4",label:"Orange",bg:"#FA5F05",text:"#FFFFFF"},{id:"5",label:"Default view",bg:"",text:""}],s=d.useMemo(()=>[{key:"id",name:"ID",width:60},{key:"solid",name:"Solid",width:200,renderCell:({row:e})=>n.jsxDEV(a.Container,{direction:"row",alignItems:"center",padding:8,children:n.jsxDEV(a.Badge,{text:e.label,view:"default",customColor:e.text||void 0,customBackgroundColor:e.bg||void 0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:114,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:113,columnNumber:13},void 0)},{key:"pilled",name:"Pilled",width:200,renderCell:({row:e})=>n.jsxDEV(a.Container,{direction:"row",alignItems:"center",padding:8,children:n.jsxDEV(a.Badge,{text:e.label,view:"default",pilled:!0,customColor:e.text||void 0,customBackgroundColor:e.bg||void 0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:129,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:128,columnNumber:13},void 0)},{key:"transparent",name:"Transparent",width:200,renderCell:({row:e})=>n.jsxDEV(a.Container,{direction:"row",alignItems:"center",padding:8,children:n.jsxDEV(a.Badge,{text:e.label,view:"default",transparent:!0,customColor:e.text||void 0,customBackgroundColor:e.bg||void 0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:145,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:144,columnNumber:13},void 0)}],[]);return n.jsxDEV(C,{tableConfig:{containerStyle:{height:"300px"}},columnConfig:s,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:160,columnNumber:7},void 0)}},t={...u({code:D,previewSource:"shown"}),args:{text:"Badge",transparent:!1,clear:!1,pilled:!1},argTypes:{text:{control:"text"},transparent:{control:"boolean"},clear:{control:"boolean"},pilled:{control:"boolean"}},render:o=>{const{text:s,transparent:e,clear:l,pilled:m}=o,F=d.useMemo(()=>B.map(c=>({key:c,name:c,width:120,renderCell:({row:E})=>n.jsxDEV(a.Container,{direction:"row",alignItems:"center",padding:8,children:n.jsxDEV(a.Badge,{text:s,view:E.view,size:c,transparent:e,clear:l,pilled:m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:199,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:198,columnNumber:13},void 0)})),[s,e,l,m]);return n.jsxDEV(C,{tableConfig:{containerStyle:{height:"400px"}},columnConfig:F,rows:y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:214,columnNumber:7},void 0)}},j=`
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
`,i={name:"Only Icon",...u({code:j,previewSource:"shown"}),render:()=>{const o=d.useMemo(()=>a.icon(n.jsxDEV(N,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:253,columnNumber:44},void 0)),[]),s=d.useMemo(()=>B.map(e=>({key:e,name:e,width:120,renderCell:({row:l})=>n.jsxDEV(a.Container,{direction:"row",alignItems:"center",padding:8,children:n.jsxDEV(a.Badge,{text:"",leftIcon:o,view:l.view,size:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:263,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:262,columnNumber:13},void 0)})),[o]);return n.jsxDEV(C,{tableConfig:{containerStyle:{height:"400px"}},columnConfig:s,rows:y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasBadge/CanvasBadge.stories.tsx",lineNumber:276,columnNumber:7},void 0)}};var g,v,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(b=(v=r.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var f,w,p;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(p=(w=t.parameters)==null?void 0:w.docs)==null?void 0:p.source}}};var x,k,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(h=(k=i.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};const V=["CustomColors","Default","IconOnly"],_=Object.freeze(Object.defineProperty({__proto__:null,CustomColors:r,Default:t,IconOnly:i,__namedExportsOrder:V,default:T},Symbol.toStringTag,{value:"Module"}));export{_ as C};
