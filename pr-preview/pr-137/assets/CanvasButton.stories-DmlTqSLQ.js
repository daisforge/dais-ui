import{r as m,j as a}from"./react-CAOzMBF_.js";import{s as u}from"./storySourceDoc-tVKyHcEN.js";import{C as r,T as g}from"./TableCanvas-DlX-Wh2b.js";const p=["default","primary","accent","secondary","clear","success","warning","critical","dark","black","white"],w=["xs","s","m","l"],b=p.map(e=>({id:e,view:e})),f={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasButton",tags:["!autodocs"]},v=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const columnConfig: ColumnConfig[] = [
  {
    key: 'action',
    name: 'Действие',
    width: 160,
    renderCell: ({ row }) => (
      <Canvas.Container direction="row" alignItems="center" padding={8}>
        <Canvas.Button view="accent" size="m" onClick={() => console.log(row)}>
          Click me
        </Canvas.Button>
      </Canvas.Container>
    ),
  },
];

<TableCanvas
  tableConfig={{ containerStyle: { height: '700px' } }}
  columnConfig={columnConfig}
  rows={rows}
/>
`,n={...u({code:v,previewSource:"shown"}),args:{text:"Click me",disabled:!1},argTypes:{text:{control:"text"},disabled:{control:"boolean"}},render:e=>{const{text:t,disabled:s}=e,d=m.useMemo(()=>w.map(o=>({key:o,name:o,width:160,renderCell:({row:C})=>a.jsx(r.Container,{direction:"row",alignItems:"center",padding:8,children:a.jsx(r.Button,{view:C.view,size:o,disabled:s,children:t})})})),[t,s]);return a.jsx(g,{tableConfig:{containerStyle:{height:"700px"}},columnConfig:d,rows:b})}};var i,l,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...storySourceDoc({
    code,
    previewSource: 'shown'
  }),
  args: {
    text: 'Click me',
    disabled: false
  },
  argTypes: {
    text: {
      control: 'text'
    },
    disabled: {
      control: 'boolean'
    }
  },
  render: args => {
    const {
      text,
      disabled
    } = args as {
      text: string;
      disabled: boolean;
    };
    const columnConfig = useMemo<readonly ColumnConfig<ViewRow>[]>(() => SIZES.map(size => ({
      key: size,
      name: size,
      width: 160,
      renderCell: ({
        row
      }) => <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.Button view={row.view} size={size} disabled={disabled}>
                {text}
              </Canvas.Button>
            </Canvas.Container>
    })), [text, disabled]);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '700px'
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const x=["Default"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:x,default:f},Symbol.toStringTag,{value:"Module"}));export{T as C};
