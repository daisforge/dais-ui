import{r as C,j as n}from"./react-CAOzMBF_.js";import{s as m}from"./storySourceDoc-tVKyHcEN.js";import{C as t,T as b}from"./TableCanvas-DlX-Wh2b.js";const g=[{id:1},{id:2},{id:3}],h={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasCheckbox",tags:["!autodocs"]},u=`
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
`,e={...m({code:u,previewSource:"shown"}),args:{checked:!1,indeterminate:!1,disabled:!1},argTypes:{checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"}},render:l=>{const{checked:o,indeterminate:a,disabled:r}=l,d=C.useMemo(()=>[{key:"checkbox",name:"Checkbox",width:300,renderCell:()=>n.jsx(t.Container,{direction:"row",alignItems:"center",padding:8,children:n.jsx(t.Checkbox,{checked:o,indeterminate:a,disabled:r})})}],[o,a,r]);return n.jsx(b,{tableConfig:{containerStyle:{height:"200px"}},columnConfig:d,rows:g})}};var s,c,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const f=["Default"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:f,default:h},Symbol.toStringTag,{value:"Module"}));export{x as C};
