import{r as m,d as o}from"./react-D2T61mpp.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{C as r,T as v}from"./TableCanvas-ByZWopgp.js";const g=["default","primary","accent","secondary","clear","success","warning","critical","dark","black","white"],b=["xs","s","m","l"],f=g.map(e=>({id:e,view:e})),p={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasButton",tags:["!autodocs"]},w=`
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
`,n={...C({code:w,previewSource:"shown"}),args:{text:"Click me",disabled:!1},argTypes:{text:{control:"text"},disabled:{control:"boolean"}},render:e=>{const{text:s,disabled:t}=e,d=m.useMemo(()=>b.map(a=>({key:a,name:a,width:160,renderCell:({row:u})=>o.jsxDEV(r.Container,{direction:"row",alignItems:"center",padding:8,children:o.jsxDEV(r.Button,{view:u.view,size:a,disabled:t,children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasButton/CanvasButton.stories.tsx",lineNumber:87,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasButton/CanvasButton.stories.tsx",lineNumber:86,columnNumber:13},void 0)})),[s,t]);return o.jsxDEV(v,{tableConfig:{containerStyle:{height:"700px"}},columnConfig:d,rows:f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasButton/CanvasButton.stories.tsx",lineNumber:97,columnNumber:7},void 0)}};var i,l,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const x=["Default"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:x,default:p},Symbol.toStringTag,{value:"Module"}));export{S as C};
