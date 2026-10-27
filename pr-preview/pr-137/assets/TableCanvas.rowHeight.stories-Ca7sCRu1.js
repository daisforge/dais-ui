import{r as i,j as o}from"./react-CAOzMBF_.js";import{c as f}from"./tableData-DVJFoYoT.js";import y from"./DocStoryTemplate-Cf946dgV.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{a as S}from"./StoriesUtils-D_DQdVN_.js";import{C as r,m as O,T as k}from"./TableCanvas-DlX-Wh2b.js";const I={title:"Локальные компоненты/TableCanvas/RowHeight",tags:["!autodocs"],parameters:{docs:{page:y}},component:S},L=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,n={...b({preCode:L,previewSource:"shown"}),name:"Row height",render:()=>{const[m]=i.useState(f),u=i.useMemo(()=>[{key:"id",name:"id"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"loremIpsum",name:"Длинный текст",width:500,renderCell:({row:t,theme:e})=>o.jsx(r.Container,{padding:8,children:o.jsx(r.Container,{children:o.jsx(r.Text,{font:e.baseFontStyle,lineHeight:1.85,wordWrap:!0,children:t.loremIpsum})})})},{key:"complete",name:"% Complete"}],[]),d=i.useCallback((t,e)=>{const h=Math.round(40.69565217391305),g=22-2,p=t.loremIpsum.length,C=Math.ceil(p/h),w=Number(O[e.rowSizeName].cell["padding-block"].slice(0,-2)),a=g*C+w*2;return a>e.rowSizeValue?a:e.rowSizeValue},[]);return o.jsx(k,{tableConfig:{containerStyle:{height:700},rowHeight:d},columnConfig:u,rows:m})}};var s,l,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Row height',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'id'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'loremIpsum',
      name: 'Длинный текст',
      width: 500,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container padding={8}>
              <Canvas.Container>
                <Canvas.Text font={theme.baseFontStyle} lineHeight={1.85} wordWrap>
                  {row.loremIpsum}
                </Canvas.Text>
              </Canvas.Container>
            </Canvas.Container>
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    const rowHeight: RowHeightFunc<Row> = useCallback((r, currenRowSize) => {
      const symbolWidth = 11.5;
      const paddingInline = 16;
      const widthOfLoremCol = 500 - paddingInline * 2;
      const symbolsInOneLine = Math.round(widthOfLoremCol / symbolWidth);
      const heightOfLineInitial = 22; // в css
      const heightOfLine = heightOfLineInitial - 2; // скорректированный

      const allSymbols = r.loremIpsum.length;
      const countOfLine = Math.ceil(allSymbols / symbolsInOneLine);
      const paddingBlock = Number(SIZES[currenRowSize.rowSizeName].cell['padding-block'].slice(0, -2));
      const neededHeight = heightOfLine * countOfLine + paddingBlock * 2;
      return neededHeight > currenRowSize.rowSizeValue ? neededHeight : currenRowSize.rowSizeValue;
    }, []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 700
      },
      rowHeight
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const v=["RowHeight"],W=Object.freeze(Object.defineProperty({__proto__:null,RowHeight:n,__namedExportsOrder:v,default:I},Symbol.toStringTag,{value:"Module"}));export{W as T};
