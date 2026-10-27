import{r as g,j as n}from"./react-CAOzMBF_.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{C as e,T as p}from"./TableCanvas-DlX-Wh2b.js";import{eZ as u,pc as f,sL as v}from"./@salutejs/plasma-icons-Do5ggeDI.js";const l={search:e.icon(n.jsx(v,{})),plasma:e.icon(n.jsx(f,{})),chevron:e.icon(n.jsx(u,{}))},h=Object.keys(l),I=[{id:1},{id:2},{id:3}],w={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasIcon",tags:["!autodocs"]},x=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconSearch } from '@daisforge/ui/icons';

const icon = Canvas.icon(<IconSearch />);

const columnConfig: ColumnConfig[] = [
  {
    key: 'icon',
    name: 'Иконка',
    width: 80,
    renderCell: () => (
      <Canvas.Container direction="row" alignItems="center" padding={8}>
        <Canvas.Icon icon={icon} size={20} color="#0B7ECB" />
      </Canvas.Container>
    ),
  },
];

<TableCanvas
  tableConfig={{ containerStyle: { height: '200px' } }}
  columnConfig={columnConfig}
  rows={rows}
/>
`,o={...d({code:x,previewSource:"shown"}),args:{icon:"search",size:20,color:"#0B7ECB"},argTypes:{icon:{control:"select",options:h},size:{control:{type:"range",min:12,max:40,step:2}},color:{control:"color"}},render:C=>{const{icon:r,size:s,color:a}=C,m=g.useMemo(()=>[{key:"icon",name:"Icon",width:300,renderCell:()=>n.jsx(e.Container,{direction:"row",alignItems:"center",padding:8,children:n.jsx(e.Icon,{icon:l[r],size:s,color:a})})}],[r,s,a]);return n.jsx(p,{tableConfig:{containerStyle:{height:"200px"}},columnConfig:m,rows:I})}};var c,i,t;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...storySourceDoc({
    code,
    previewSource: 'shown'
  }),
  args: {
    icon: 'search',
    size: 20,
    color: '#0B7ECB'
  },
  argTypes: {
    icon: {
      control: 'select',
      options: ICON_NAMES
    },
    size: {
      control: {
        type: 'range',
        min: 12,
        max: 40,
        step: 2
      }
    },
    color: {
      control: 'color'
    }
  },
  render: args => {
    const {
      icon,
      size,
      color
    } = args as {
      icon: string;
      size: number;
      color: string;
    };
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'icon',
      name: 'Icon',
      width: 300,
      renderCell: () => <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.Icon icon={ICON_MAP[icon]} size={size} color={color} />
            </Canvas.Container>
    }], [icon, size, color]);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '200px'
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(t=(i=o.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const y=["Default"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:y,default:w},Symbol.toStringTag,{value:"Module"}));export{T as C};
