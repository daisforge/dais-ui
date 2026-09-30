import{d as e}from"./react-D2T61mpp.js";import{s as u}from"./storySourceDoc-tVKyHcEN.js";import{T as c,C as s}from"./TableCanvas-DrPLrYqV.js";import{e as r,b as g}from"./avatarFixtures-DxWEtnCu.js";const v={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasImage",tags:["!autodocs"]},C=[{id:0,image:"wide",src:r({width:192,height:96})},{id:1,image:"tall",src:r({width:96,height:192,variant:1})},{id:2,image:"transparent",src:r({width:192,height:96,transparent:!0,variant:2})}],h=`
import { Canvas, TableCanvas, type ColumnConfig, type ImageFit, type CanvasAvatarItem } from '@daisforge/ui/components/TableCanvas';

${g}
const rows = [
  { id: 0, image: 'wide', src: createAvatarImage({ width: 192, height: 96 }) },
  { id: 1, image: 'tall', src: createAvatarImage({ width: 96, height: 192, variant: 1 }) },
  { id: 2, image: 'transparent', src: createAvatarImage({ width: 192, height: 96, transparent: true, variant: 2 }) },
];
`,a={name:"Режимы вписывания",...u({preCode:h,type:"code",previewSource:"hidden"}),render:()=>{const l=["cover","contain","fill"].map(n=>({key:n,name:n,width:170,copyData:t=>t.image,renderCell:({row:t,theme:d})=>e.jsxDEV(s.Container,{padding:8,children:e.jsxDEV(s.Container,{position:"relative",style:{width:88,height:88},tooltip:`${t.image}: ${n}`,children:[e.jsxDEV(s.Image,{src:t.src,fit:n,style:{width:88,height:88}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasImage/CanvasImage.stories.tsx",lineNumber:70,columnNumber:13},void 0),e.jsxDEV(s.Rect,{position:"absolute",left:0,top:0,style:{width:88,height:88},borderColor:d.tokens.outlineAccent,borderWidth:1,zIndex:1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasImage/CanvasImage.stories.tsx",lineNumber:75,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasImage/CanvasImage.stories.tsx",lineNumber:65,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasImage/CanvasImage.stories.tsx",lineNumber:64,columnNumber:9},void 0)}));return e.jsxDEV(c,{rows:C,columnConfig:l,tableConfig:{rowHeight:104,containerStyle:{height:"390px"}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasImage/CanvasImage.stories.tsx",lineNumber:89,columnNumber:7},void 0)}};var i,o,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Режимы вписывания',
  ...storySourceDoc({
    preCode,
    type: 'code',
    previewSource: 'hidden'
  }),
  render: () => {
    const columns: ColumnConfig<(typeof rows)[number]>[] = ['cover', 'contain', 'fill'].map(fit => ({
      key: fit,
      name: fit,
      width: 170,
      copyData: row => row.image,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container padding={8}>
          <Canvas.Container position="relative" style={{
          width: 88,
          height: 88
        }} tooltip={\`\${row.image}: \${fit}\`}>
            <Canvas.Image src={row.src} fit={fit as ImageFit} style={{
            width: 88,
            height: 88
          }} />
            <Canvas.Rect position="absolute" left={0} top={0} style={{
            width: 88,
            height: 88
          }} borderColor={theme.tokens.outlineAccent} borderWidth={1} zIndex={1} />
          </Canvas.Container>
        </Canvas.Container>
    }));
    return <TableCanvas rows={rows} columnConfig={columns} tableConfig={{
      rowHeight: 104,
      containerStyle: {
        height: '390px'
      }
    }} />;
  }
}`,...(m=(o=a.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const p=["Fits"],I=Object.freeze(Object.defineProperty({__proto__:null,Fits:a,__namedExportsOrder:p,default:v},Symbol.toStringTag,{value:"Module"}));export{I as C};
