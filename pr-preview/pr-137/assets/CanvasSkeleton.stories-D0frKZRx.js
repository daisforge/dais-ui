import{r as h,j as e}from"./react-CAOzMBF_.js";import{s as u}from"./storySourceDoc-tVKyHcEN.js";import{C as i,T as C}from"./TableCanvas-DlX-Wh2b.js";const p=[{id:1},{id:2},{id:3}],w={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasSkeleton",tags:["!autodocs"],parameters:{screenshot:{skip:!0}}},f=`
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
`,n={...u({code:f,previewSource:"shown"}),args:{width:120,height:16,roundness:8,lighter:!1,animated:!0},argTypes:{width:{control:{type:"range",min:40,max:300,step:10}},height:{control:{type:"range",min:8,max:40,step:2}},roundness:{control:"select",options:[0,8,12,14,16,18,20,24,28,32,250]},lighter:{control:"boolean"},animated:{control:"boolean"}},render:m=>{const{width:o,height:t,roundness:a,lighter:r,animated:s}=m,g=h.useMemo(()=>[{key:"skeleton",name:"Skeleton",width:300,renderCell:()=>e.jsx(i.Container,{direction:"row",alignItems:"center",padding:8,children:e.jsx(i.Skeleton,{width:o,height:t,roundness:a,lighter:r,animated:s})})}],[o,t,a,r,s]);return e.jsx(C,{tableConfig:{containerStyle:{height:"300px"}},columnConfig:g,rows:p})}};var l,d,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const b=["Default"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:b,default:w},Symbol.toStringTag,{value:"Module"}));export{x as C};
