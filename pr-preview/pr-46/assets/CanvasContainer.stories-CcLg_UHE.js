import{r as v,d as n}from"./react-D2T61mpp.js";import{s as f}from"./storySourceDoc-tVKyHcEN.js";import{C as t,T as b}from"./TableCanvas-DGNToxcW.js";const h=[{id:1},{id:2},{id:3}],x=["row","column"],y=["flex-start","center","flex-end","stretch"],w=["flex-start","center","flex-end","space-between"],T={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasContainer",tags:["!autodocs"]},k=`
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
`,e={...f({code:k,previewSource:"shown"}),args:{direction:"row",alignItems:"center",justifyContent:"flex-start",gap:8,padding:8,width:0,height:0,backgroundColor:""},argTypes:{direction:{control:"select",options:x},alignItems:{control:"select",options:y},justifyContent:{control:"select",options:w},gap:{control:{type:"range",min:0,max:24,step:2}},padding:{control:{type:"range",min:0,max:24,step:2}},width:{control:{type:"range",min:0,max:500,step:10}},height:{control:{type:"range",min:0,max:200,step:10}},backgroundColor:{control:"color"}},render:m=>{const{direction:s,alignItems:r,justifyContent:i,gap:c,padding:l,width:o,height:a,backgroundColor:d}=m,p=v.useMemo(()=>[{key:"container",name:"Container",width:500,renderCell:()=>n.jsxDEV(t.Container,{direction:s,alignItems:r,justifyContent:i,gap:c,padding:l,style:{...o>0?{width:o}:{},...a>0?{height:a}:{}},backgroundColor:d||"gray",children:[n.jsxDEV(t.Badge,{text:"Badge",view:"accent",size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:121,columnNumber:15},void 0),n.jsxDEV(t.Text,{children:"Text"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:122,columnNumber:15},void 0),n.jsxDEV(t.Button,{view:"accent",size:"xs",children:"Button"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:123,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:109,columnNumber:13},void 0)}],[s,r,i,c,l,o,a,d]);return n.jsxDEV(b,{tableConfig:{containerStyle:{height:"200px"}},columnConfig:p,rows:h},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasContainer/CanvasContainer.stories.tsx",lineNumber:143,columnNumber:7},void 0)}};var C,u,g;e.parameters={...e.parameters,docs:{...(C=e.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const I=["Default"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:I,default:T},Symbol.toStringTag,{value:"Module"}));export{j as C};
