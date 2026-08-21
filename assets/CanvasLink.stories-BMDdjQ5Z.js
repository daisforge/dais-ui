import{r as C,d as e}from"./react-D2T61mpp.js";import{s as u}from"./storySourceDoc-tVKyHcEN.js";import{C as s,T as v}from"./TableCanvas-CtAM7TT2.js";const f=["default","accent","secondary","tertiary","paragraph","positive","warning","negative","clear"],g=f.map(a=>({id:a,view:a})),b={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasLink",tags:["!autodocs"]},k=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const columnConfig: ColumnConfig[] = [
  {
    key: 'name',
    name: 'Название',
    width: 200,
    renderCell: ({ row }) => (
      <Canvas.Container direction="row" alignItems="center" padding={8}>
        <Canvas.Link view="accent" href={'/details/' + row.id} target="_blank">
          {row.name}
        </Canvas.Link>
      </Canvas.Container>
    ),
  },
];

<TableCanvas
  tableConfig={{ containerStyle: { height: '600px' } }}
  columnConfig={columnConfig}
  rows={rows}
/>
`,n={...u({code:k,previewSource:"shown"}),args:{text:"Link text",href:"https://example.com",disabled:!1},argTypes:{text:{control:"text"},href:{control:"text"},disabled:{control:"boolean"}},render:a=>{const{text:o,href:i,disabled:t}=a,m=C.useMemo(()=>[{key:"view",name:"View",width:100,renderCell:({row:r})=>e.jsxDEV(s.Container,{padding:8,alignItems:"center",children:e.jsxDEV(s.Text,{children:r.view},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasLink/CanvasLink.stories.tsx",lineNumber:86,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasLink/CanvasLink.stories.tsx",lineNumber:85,columnNumber:13},void 0)},{key:"link",name:"Link",width:200,renderCell:({row:r})=>e.jsxDEV(s.Container,{direction:"row",alignItems:"center",padding:8,children:e.jsxDEV(s.Link,{view:r.view,href:i,target:"_blank",disabled:t,children:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasLink/CanvasLink.stories.tsx",lineNumber:96,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasLink/CanvasLink.stories.tsx",lineNumber:95,columnNumber:13},void 0)}],[o,i,t]);return e.jsxDEV(v,{tableConfig:{containerStyle:{height:"600px"}},columnConfig:m,rows:g},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasLink/CanvasLink.stories.tsx",lineNumber:112,columnNumber:7},void 0)}};var l,d,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...storySourceDoc({
    code,
    previewSource: 'shown'
  }),
  args: {
    text: 'Link text',
    href: 'https://example.com',
    disabled: false
  },
  argTypes: {
    text: {
      control: 'text'
    },
    href: {
      control: 'text'
    },
    disabled: {
      control: 'boolean'
    }
  },
  render: args => {
    const {
      text,
      href,
      disabled
    } = args as {
      text: string;
      href: string;
      disabled: boolean;
    };
    const columnConfig = useMemo<readonly ColumnConfig<ViewRow>[]>(() => [{
      key: 'view',
      name: 'View',
      width: 100,
      renderCell: ({
        row
      }) => <Canvas.Container padding={8} alignItems="center">
              <Canvas.Text>{row.view}</Canvas.Text>
            </Canvas.Container>
    }, {
      key: 'link',
      name: 'Link',
      width: 200,
      renderCell: ({
        row
      }) => <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.Link view={row.view} href={href} target="_blank" disabled={disabled}>
                {text}
              </Canvas.Link>
            </Canvas.Container>
    }], [text, href, disabled]);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '600px'
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const w=["Default"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:w,default:b},Symbol.toStringTag,{value:"Module"}));export{y as C};
