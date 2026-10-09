import{r as w,d as n}from"./react-D2T61mpp.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{C as e,T as x}from"./TableCanvas-uSo-sbG6.js";const h=["default","accent","secondary","tertiary","paragraph","positive","warning","negative","clear"],f=h.map(a=>({id:a,view:a})),y={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasLink",tags:["!autodocs"]},L=`
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
`,o={...p({code:L,previewSource:"shown"}),args:{text:"Link text",href:"https://example.com",disabled:!1},argTypes:{text:{control:"text"},href:{control:"text"},disabled:{control:"boolean"}},render:a=>{const{text:s,href:r,disabled:t}=a,u=w.useMemo(()=>[{key:"view",name:"View",width:100,renderCell:({row:i})=>n.jsxDEV(e.Container,{padding:8,alignItems:"center",children:n.jsxDEV(e.Text,{children:i.view},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasLink/CanvasLink.stories.tsx",lineNumber:86,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasLink/CanvasLink.stories.tsx",lineNumber:85,columnNumber:13},void 0)},{key:"link",name:"Link",width:200,renderCell:({row:i})=>n.jsxDEV(e.Container,{direction:"row",alignItems:"center",padding:8,children:n.jsxDEV(e.Link,{view:i.view,href:r,target:"_blank",disabled:t,children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasLink/CanvasLink.stories.tsx",lineNumber:96,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasLink/CanvasLink.stories.tsx",lineNumber:95,columnNumber:13},void 0)}],[s,r,t]);return n.jsxDEV(x,{tableConfig:{containerStyle:{height:"600px"}},columnConfig:u,rows:f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasLink/CanvasLink.stories.tsx",lineNumber:112,columnNumber:7},void 0)}},l={args:{text:"Длинное название документа с переносом на несколько строк и многоточием в конце",width:220,maxLines:2,lineHeight:1.4,disabled:!1},argTypes:{text:{control:"text"},width:{control:{type:"range",min:80,max:480,step:10}},maxLines:{control:{type:"range",min:1,max:3,step:1}},lineHeight:{control:{type:"range",min:1,max:2,step:.1}},disabled:{control:"boolean"}},render:a=>{const{text:s,width:r,maxLines:t,lineHeight:u,disabled:i}=a,k=w.useMemo(()=>[{key:"view",name:"View",width:100,renderCell:({row:d})=>n.jsxDEV(e.Container,{padding:8,alignItems:"center",children:n.jsxDEV(e.Text,{children:d.view},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasLink/CanvasLink.stories.tsx",lineNumber:152,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasLink/CanvasLink.stories.tsx",lineNumber:151,columnNumber:13},void 0)},{key:"link",name:"Multiline link",width:r,renderCell:({row:d})=>n.jsxDEV(e.Container,{direction:"row",alignItems:"center",padding:8,children:n.jsxDEV(e.Link,{view:d.view,href:"https://example.com",target:"_blank",disabled:i,wordWrap:!0,maxLines:t,lineHeight:u,overflow:"hidden",textOverflow:"ellipsis",autoTooltip:!0,style:{flexGrow:1},children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasLink/CanvasLink.stories.tsx",lineNumber:162,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasLink/CanvasLink.stories.tsx",lineNumber:161,columnNumber:13},void 0)}],[s,r,t,u,i]);return n.jsxDEV(x,{tableConfig:{rowHeight:112,containerStyle:{height:"600px"}},columnConfig:k,rows:f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasLink/CanvasLink.stories.tsx",lineNumber:185,columnNumber:7},void 0)}};var m,c,C;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(C=(c=o.parameters)==null?void 0:c.docs)==null?void 0:C.source}}};var v,g,b;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const E=["Default","Multiline"],V=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Multiline:l,__namedExportsOrder:E,default:y},Symbol.toStringTag,{value:"Module"}));export{V as C};
