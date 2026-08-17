import{r as C,d as n}from"./react-D2T61mpp.js";import{s as m}from"./storySourceDoc-tVKyHcEN.js";import{C as r,T as b}from"./TableCanvas-DHmHfkEK.js";const u=[{id:1},{id:2},{id:3}],h={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasCheckbox",tags:["!autodocs"]},f=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const columnConfig: ColumnConfig[] = [
  {
    key: 'select',
    name: '',
    width: 50,
    renderCell: ({ row }) => (
      <Canvas.Container direction="row" alignItems="center" padding={8}>
        <Canvas.Checkbox checked={row.selected} />
      </Canvas.Container>
    ),
  },
];

<TableCanvas
  tableConfig={{ containerStyle: { height: '200px' } }}
  columnConfig={columnConfig}
  rows={rows}
/>
`,e={...m({code:f,previewSource:"shown"}),args:{checked:!1,indeterminate:!1,disabled:!1},argTypes:{checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"}},render:l=>{const{checked:a,indeterminate:o,disabled:s}=l,d=C.useMemo(()=>[{key:"checkbox",name:"Checkbox",width:300,renderCell:()=>n.jsxDEV(r.Container,{direction:"row",alignItems:"center",padding:8,children:n.jsxDEV(r.Checkbox,{checked:a,indeterminate:o,disabled:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasCheckbox/CanvasCheckbox.stories.tsx",lineNumber:74,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasCheckbox/CanvasCheckbox.stories.tsx",lineNumber:73,columnNumber:13},void 0)}],[a,o,s]);return n.jsxDEV(b,{tableConfig:{containerStyle:{height:"200px"}},columnConfig:d,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasCheckbox/CanvasCheckbox.stories.tsx",lineNumber:87,columnNumber:7},void 0)}};var i,t,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...storySourceDoc({
    code,
    previewSource: 'shown'
  }),
  args: {
    checked: false,
    indeterminate: false,
    disabled: false
  },
  argTypes: {
    checked: {
      control: 'boolean'
    },
    indeterminate: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    }
  },
  render: args => {
    const {
      checked,
      indeterminate,
      disabled
    } = args as {
      checked: boolean;
      indeterminate: boolean;
      disabled: boolean;
    };
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'checkbox',
      name: 'Checkbox',
      width: 300,
      renderCell: () => <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.Checkbox checked={checked} indeterminate={indeterminate} disabled={disabled} />
            </Canvas.Container>
    }], [checked, indeterminate, disabled]);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '200px'
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const k=["Default"],p=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:k,default:h},Symbol.toStringTag,{value:"Module"}));export{p as C};
