import{r as p,j as n}from"./react-CAOzMBF_.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{C as e,T as h}from"./TableCanvas-DlX-Wh2b.js";const k=["default","accent","secondary","tertiary","paragraph","positive","warning","negative","clear"],v=k.map(t=>({id:t,view:t})),y={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasLink",tags:["!autodocs"]},L=`
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
`,s={...b({code:L,previewSource:"shown"}),args:{text:"Link text",href:"https://example.com",disabled:!1},argTypes:{text:{control:"text"},href:{control:"text"},disabled:{control:"boolean"}},render:t=>{const{text:i,href:r,disabled:o}=t,d=p.useMemo(()=>[{key:"view",name:"View",width:100,renderCell:({row:a})=>n.jsx(e.Container,{padding:8,alignItems:"center",children:n.jsx(e.Text,{children:a.view})})},{key:"link",name:"Link",width:200,renderCell:({row:a})=>n.jsx(e.Container,{direction:"row",alignItems:"center",padding:8,children:n.jsx(e.Link,{view:a.view,href:r,target:"_blank",disabled:o,children:i})})}],[i,r,o]);return n.jsx(h,{tableConfig:{containerStyle:{height:"600px"}},columnConfig:d,rows:v})}},l={args:{text:"Длинное название документа с переносом на несколько строк и многоточием в конце",width:220,maxLines:2,lineHeight:1.4,disabled:!1},argTypes:{text:{control:"text"},width:{control:{type:"range",min:80,max:480,step:10}},maxLines:{control:{type:"range",min:1,max:3,step:1}},lineHeight:{control:{type:"range",min:1,max:2,step:.1}},disabled:{control:"boolean"}},render:t=>{const{text:i,width:r,maxLines:o,lineHeight:d,disabled:a}=t,f=p.useMemo(()=>[{key:"view",name:"View",width:100,renderCell:({row:u})=>n.jsx(e.Container,{padding:8,alignItems:"center",children:n.jsx(e.Text,{children:u.view})})},{key:"link",name:"Multiline link",width:r,renderCell:({row:u})=>n.jsx(e.Container,{direction:"row",alignItems:"center",padding:8,children:n.jsx(e.Link,{view:u.view,href:"https://example.com",target:"_blank",disabled:a,wordWrap:!0,maxLines:o,lineHeight:d,overflow:"hidden",textOverflow:"ellipsis",autoTooltip:!0,style:{flexGrow:1},children:i})})}],[i,r,o,d,a]);return n.jsx(h,{tableConfig:{rowHeight:112,containerStyle:{height:"600px"}},columnConfig:f,rows:v})}};var c,m,g;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var C,w,x;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    text: 'Длинное название документа с переносом на несколько строк и многоточием в конце',
    width: 220,
    maxLines: 2,
    lineHeight: 1.4,
    disabled: false
  },
  argTypes: {
    text: {
      control: 'text'
    },
    width: {
      control: {
        type: 'range',
        min: 80,
        max: 480,
        step: 10
      }
    },
    maxLines: {
      control: {
        type: 'range',
        min: 1,
        max: 3,
        step: 1
      }
    },
    lineHeight: {
      control: {
        type: 'range',
        min: 1,
        max: 2,
        step: 0.1
      }
    },
    disabled: {
      control: 'boolean'
    }
  },
  render: args => {
    const {
      text,
      width,
      maxLines,
      lineHeight,
      disabled
    } = args as {
      text: string;
      width: number;
      maxLines: number;
      lineHeight: number;
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
      name: 'Multiline link',
      width,
      renderCell: ({
        row
      }) => <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.Link view={row.view} href="https://example.com" target="_blank" disabled={disabled} wordWrap maxLines={maxLines} lineHeight={lineHeight} overflow="hidden" textOverflow="ellipsis" autoTooltip style={{
          flexGrow: 1
        }}>
                {text}
              </Canvas.Link>
            </Canvas.Container>
    }], [text, width, maxLines, lineHeight, disabled]);
    return <TableCanvas tableConfig={{
      rowHeight: 112,
      containerStyle: {
        height: '600px'
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(x=(w=l.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const T=["Default","Multiline"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Multiline:l,__namedExportsOrder:T,default:y},Symbol.toStringTag,{value:"Module"}));export{D as C};
