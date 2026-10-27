import{r as h,j as n}from"./react-CAOzMBF_.js";import{s as f}from"./storySourceDoc-tVKyHcEN.js";import{C as t,T as x}from"./TableCanvas-DlX-Wh2b.js";const y=[{id:1},{id:2},{id:3}],v=["row","column"],w=["flex-start","center","flex-end","stretch"],b=["flex-start","center","flex-end","space-between"],T={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasContainer",tags:["!autodocs"]},I=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const columnConfig: ColumnConfig[] = [
  {
    key: 'composite',
    name: 'Композиция',
    width: 500,
    renderCell: () => (
      <Canvas.Container
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        gap={8}
        padding={8}
      >
        <Canvas.Badge text="Badge" view="accent" size="s" />
        <Canvas.Text>Text</Canvas.Text>
        <Canvas.Button view="accent" size="xs">Button</Canvas.Button>
      </Canvas.Container>
    ),
  },
];

<TableCanvas
  tableConfig={{ containerStyle: { height: '200px' } }}
  columnConfig={columnConfig}
  rows={rows}
/>
`,e={...f({code:I,previewSource:"shown"}),args:{direction:"row",alignItems:"center",justifyContent:"flex-start",gap:8,padding:8,width:0,height:0,backgroundColor:""},argTypes:{direction:{control:"select",options:v},alignItems:{control:"select",options:w},justifyContent:{control:"select",options:b},gap:{control:{type:"range",min:0,max:24,step:2}},padding:{control:{type:"range",min:0,max:24,step:2}},width:{control:{type:"range",min:0,max:500,step:10}},height:{control:{type:"range",min:0,max:200,step:10}},backgroundColor:{control:"color"}},render:m=>{const{direction:r,alignItems:i,justifyContent:s,gap:c,padding:l,width:o,height:a,backgroundColor:g}=m,u=h.useMemo(()=>[{key:"container",name:"Container",width:500,renderCell:()=>n.jsxs(t.Container,{direction:r,alignItems:i,justifyContent:s,gap:c,padding:l,style:{...o>0?{width:o}:{},...a>0?{height:a}:{}},backgroundColor:g||"gray",children:[n.jsx(t.Badge,{text:"Badge",view:"accent",size:"s"}),n.jsx(t.Text,{children:"Text"}),n.jsx(t.Button,{view:"accent",size:"xs",children:"Button"})]})}],[r,i,s,c,l,o,a,g]);return n.jsx(x,{tableConfig:{containerStyle:{height:"200px"}},columnConfig:u,rows:y})}};var d,C,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...storySourceDoc({
    code,
    previewSource: 'shown'
  }),
  args: {
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 8,
    padding: 8,
    width: 0,
    height: 0,
    backgroundColor: ''
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
    padding: {
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
        max: 500,
        step: 10
      }
    },
    height: {
      control: {
        type: 'range',
        min: 0,
        max: 200,
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
      padding,
      width,
      height,
      backgroundColor
    } = args as {
      direction: (typeof DIRECTIONS)[number];
      alignItems: (typeof ALIGN_ITEMS)[number];
      justifyContent: (typeof JUSTIFY)[number];
      gap: number;
      padding: number;
      width: number;
      height: number;
      backgroundColor: string;
    };
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'container',
      name: 'Container',
      width: 500,
      renderCell: () => <Canvas.Container direction={direction} alignItems={alignItems} justifyContent={justifyContent} gap={gap} padding={padding} style={{
        ...(width > 0 ? {
          width
        } : {}),
        ...(height > 0 ? {
          height
        } : {})
      }} backgroundColor={backgroundColor || 'gray'}>
              <Canvas.Badge text="Badge" view="accent" size="s" />
              <Canvas.Text>Text</Canvas.Text>
              <Canvas.Button view="accent" size="xs">
                Button
              </Canvas.Button>
            </Canvas.Container>
    }], [direction, alignItems, justifyContent, gap, padding, width, height, backgroundColor]);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '200px'
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(p=(C=e.parameters)==null?void 0:C.docs)==null?void 0:p.source}}};const j=["Default"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:j,default:T},Symbol.toStringTag,{value:"Module"}));export{E as C};
