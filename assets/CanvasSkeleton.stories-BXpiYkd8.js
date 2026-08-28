import{r as g,d as e}from"./react-D2T61mpp.js";import{s as h}from"./storySourceDoc-tVKyHcEN.js";import{C as i,T as C}from"./TableCanvas-BzdQHG7o.js";const p=[{id:1},{id:2},{id:3}],v={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasSkeleton",tags:["!autodocs"],parameters:{screenshot:{skip:!0}}},f=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const columnConfig: ColumnConfig[] = [
  {
    key: 'name',
    name: 'Название',
    width: 200,
    renderCell: () => (
      <Canvas.Container direction="row" alignItems="center" padding={8}>
        <Canvas.Skeleton width={120} height={16} roundness={8} animated />
      </Canvas.Container>
    ),
  },
];

<TableCanvas
  tableConfig={{ containerStyle: { height: '300px' } }}
  columnConfig={columnConfig}
  rows={rows}
/>
`,n={...h({code:f,previewSource:"shown"}),args:{width:120,height:16,roundness:8,lighter:!1,animated:!0},argTypes:{width:{control:{type:"range",min:40,max:300,step:10}},height:{control:{type:"range",min:8,max:40,step:2}},roundness:{control:"select",options:[0,8,12,14,16,18,20,24,28,32,250]},lighter:{control:"boolean"},animated:{control:"boolean"}},render:c=>{const{width:o,height:a,roundness:t,lighter:s,animated:r}=c,u=g.useMemo(()=>[{key:"skeleton",name:"Skeleton",width:300,renderCell:()=>e.jsxDEV(i.Container,{direction:"row",alignItems:"center",padding:8,children:e.jsxDEV(i.Skeleton,{width:o,height:a,roundness:t,lighter:s,animated:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasSkeleton/CanvasSkeleton.stories.tsx",lineNumber:88,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasSkeleton/CanvasSkeleton.stories.tsx",lineNumber:87,columnNumber:13},void 0)}],[o,a,t,s,r]);return e.jsxDEV(C,{tableConfig:{containerStyle:{height:"300px"}},columnConfig:u,rows:p},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasSkeleton/CanvasSkeleton.stories.tsx",lineNumber:103,columnNumber:7},void 0)}};var l,d,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...storySourceDoc({
    code,
    previewSource: 'shown'
  }),
  args: {
    width: 120,
    height: 16,
    roundness: 8,
    lighter: false,
    animated: true
  },
  argTypes: {
    width: {
      control: {
        type: 'range',
        min: 40,
        max: 300,
        step: 10
      }
    },
    height: {
      control: {
        type: 'range',
        min: 8,
        max: 40,
        step: 2
      }
    },
    roundness: {
      control: 'select',
      options: [0, 8, 12, 14, 16, 18, 20, 24, 28, 32, 250]
    },
    lighter: {
      control: 'boolean'
    },
    animated: {
      control: 'boolean'
    }
  },
  render: args => {
    const {
      width,
      height,
      roundness,
      lighter,
      animated
    } = args as {
      width: number;
      height: number;
      roundness: number;
      lighter: boolean;
      animated: boolean;
    };
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'skeleton',
      name: 'Skeleton',
      width: 300,
      renderCell: () => <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.Skeleton width={width} height={height} roundness={roundness} lighter={lighter} animated={animated} />
            </Canvas.Container>
    }], [width, height, roundness, lighter, animated]);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '300px'
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const b=["Default"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:b,default:v},Symbol.toStringTag,{value:"Module"}));export{y as C};
