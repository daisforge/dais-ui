import{r as u,d as n}from"./react-D2T61mpp.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{C as e,T as v}from"./TableCanvas-MHU0vSy2.js";import{eV as f,p4 as g,sz as p}from"./@salutejs/plasma-icons-Dn1uY4zn.js";const l={search:e.icon(n.jsxDEV(p,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasIcon/CanvasIcon.stories.tsx",lineNumber:13,columnNumber:23},void 0)),plasma:e.icon(n.jsxDEV(g,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasIcon/CanvasIcon.stories.tsx",lineNumber:14,columnNumber:23},void 0)),chevron:e.icon(n.jsxDEV(f,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasIcon/CanvasIcon.stories.tsx",lineNumber:15,columnNumber:24},void 0))},b=Object.keys(l),I=[{id:1},{id:2},{id:3}],h={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasIcon",tags:["!autodocs"]},N=`
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
`,o={...d({code:N,previewSource:"shown"}),args:{icon:"search",size:20,color:"#0B7ECB"},argTypes:{icon:{control:"select",options:b},size:{control:{type:"range",min:12,max:40,step:2}},color:{control:"color"}},render:m=>{const{icon:s,size:a,color:r}=m,C=u.useMemo(()=>[{key:"icon",name:"Icon",width:300,renderCell:()=>n.jsxDEV(e.Container,{direction:"row",alignItems:"center",padding:8,children:n.jsxDEV(e.Icon,{icon:l[s],size:a,color:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasIcon/CanvasIcon.stories.tsx",lineNumber:86,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasIcon/CanvasIcon.stories.tsx",lineNumber:85,columnNumber:13},void 0)}],[s,a,r]);return n.jsxDEV(v,{tableConfig:{containerStyle:{height:"200px"}},columnConfig:C,rows:I},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasIcon/CanvasIcon.stories.tsx",lineNumber:95,columnNumber:7},void 0)}};var i,c,t;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(t=(c=o.parameters)==null?void 0:c.docs)==null?void 0:t.source}}};const k=["Default"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:k,default:h},Symbol.toStringTag,{value:"Module"}));export{S as C};
