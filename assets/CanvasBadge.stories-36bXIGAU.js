import{r as i,j as e}from"./react-CAOzMBF_.js";import{s as g}from"./storySourceDoc-tVKyHcEN.js";import{C as t,T as d}from"./TableCanvas-DOsQrCiP.js";import{sM as k}from"./@salutejs/plasma-icons-DBF9uERs.js";const T=["default","accent","positive","warning","negative","dark","light"],m=["xs","s","m","l"],w=T.map(a=>({id:a,view:a})),P={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasBadge",tags:["!autodocs"]},H=`
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
`,l={name:"Custom Colors",...g({code:H,previewSource:"shown"}),render:()=>{const a=[{id:"1",label:"Info",bg:"#0B7ECB",text:"#FFFFFF"},{id:"2",label:"Custom green",bg:"#108E26",text:"#FFFFFF"},{id:"3",label:"Transparent custom",bg:"rgba(11, 126, 203, 0.12)",text:"#0B7ECB"},{id:"4",label:"Orange",bg:"#FA5F05",text:"#FFFFFF"},{id:"5",label:"Default view",bg:"",text:""}],r=i.useMemo(()=>[{key:"id",name:"ID",width:60},{key:"solid",name:"Solid",width:200,renderCell:({row:n,theme:o})=>e.jsx(t.Container,{direction:"row",alignItems:"center",padding:{left:o.cellHorizontalPadding,right:o.cellHorizontalPadding},children:e.jsx(t.Badge,{text:n.label,view:"default",customColor:n.text||void 0,customBackgroundColor:n.bg||void 0})})},{key:"pilled",name:"Pilled",width:200,renderCell:({row:n,theme:o})=>e.jsx(t.Container,{direction:"row",alignItems:"center",padding:{left:o.cellHorizontalPadding,right:o.cellHorizontalPadding},children:e.jsx(t.Badge,{text:n.label,view:"default",pilled:!0,customColor:n.text||void 0,customBackgroundColor:n.bg||void 0})})},{key:"transparent",name:"Transparent",width:200,renderCell:({row:n,theme:o})=>e.jsx(t.Container,{direction:"row",alignItems:"center",padding:{left:o.cellHorizontalPadding,right:o.cellHorizontalPadding},children:e.jsx(t.Badge,{text:n.label,view:"default",transparent:!0,customColor:n.text||void 0,customBackgroundColor:n.bg||void 0})})}],[]);return e.jsx(d,{tableConfig:{containerStyle:{height:"300px"},rowSize:{showInControl:!0}},columnConfig:r,rows:a})}},s={...g({code:M,previewSource:"shown"}),args:{text:"Badge",transparent:!1,clear:!1,pilled:!1},argTypes:{text:{control:"text"},transparent:{control:"boolean"},clear:{control:"boolean"},pilled:{control:"boolean"}},render:a=>{const{text:r,transparent:n,clear:o,pilled:p}=a,j=i.useMemo(()=>m.map(C=>({key:C,name:C,width:120,renderCell:({row:D})=>e.jsx(t.Container,{direction:"row",alignItems:"center",padding:8,children:e.jsx(t.Badge,{text:r,view:D.view,size:C,transparent:n,clear:o,pilled:p})})})),[r,n,o,p]);return e.jsx(d,{tableConfig:{containerStyle:{height:"400px"}},columnConfig:j,rows:w})}},A=`
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
`,u={name:"Only Icon",...g({code:A,previewSource:"shown"}),render:()=>{const a=i.useMemo(()=>t.icon(e.jsx(k,{})),[]),r=i.useMemo(()=>m.map(n=>({key:n,name:n,width:120,renderCell:({row:o})=>e.jsx(t.Container,{direction:"row",alignItems:"center",padding:8,children:e.jsx(t.Badge,{text:"",leftIcon:a,view:o.view,size:n})})})),[a]);return e.jsx(d,{tableConfig:{containerStyle:{height:"400px"}},columnConfig:r,rows:w})}},c={name:"Длинный текст в узких колонках",render:()=>{const a=i.useMemo(()=>t.icon(e.jsx(k,{})),[]),r=i.useMemo(()=>m.map(n=>({key:n,name:n,width:160,minWidth:40,renderCell:({row:o})=>e.jsx(t.Container,{direction:"row",alignItems:"center",padding:8,children:e.jsx(t.Badge,{text:"Очень длинный статус согласования",view:o.view,size:n,leftIcon:o.view==="positive"?a:void 0,rightIcon:o.view==="warning"?a:void 0,transparent:o.view==="negative",clear:o.view==="dark",pilled:o.view==="light"})})})),[a]);return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Сужайте и расширяйте колонки за границу заголовка: текст должен заканчиваться многоточием внутри бейджа."}),e.jsx(d,{tableConfig:{containerStyle:{height:"400px"},resizableColumn:!0},columnConfig:r,rows:w})]})}};var v,f,h;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,b,F;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(F=(b=s.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var y,S,B;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(B=(S=u.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var I,z,E;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(z=c.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};const O=["CustomColors","Default","IconOnly","NarrowColumns"],W=Object.freeze(Object.defineProperty({__proto__:null,CustomColors:l,Default:s,IconOnly:u,NarrowColumns:c,__namedExportsOrder:O,default:P},Symbol.toStringTag,{value:"Module"}));export{W as C};
