import{r as i,d as e}from"./react-D2T61mpp.js";import{c as S}from"./tableData-DVJFoYoT.js";import I from"./DocStoryTemplate-CnJlkrRG.js";import{s as m}from"./storySourceDoc-tVKyHcEN.js";import{a as V}from"./StoriesUtils-BHI1cVim.js";import{C as o,T as h,m as j}from"./TableCanvas-BzJqQVgt.js";const L={title:"Локальные компоненты/TableCanvas/RowHeight",tags:["!autodocs"],parameters:{docs:{page:I}},component:V},g=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,u={...m({preCode:g,previewSource:"shown"}),name:"Row height",render:()=>{const[r]=i.useState(S),a=i.useMemo(()=>[{key:"id",name:"id"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"loremIpsum",name:"Длинный текст",width:500,renderCell:({row:s,theme:t})=>e.jsxDEV(o.Container,{padding:8,children:e.jsxDEV(o.Container,{children:e.jsxDEV(o.Text,{font:t.baseFontStyle,lineHeight:1.85,wordWrap:!0,children:s.loremIpsum},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:63,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:62,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:61,columnNumber:13},void 0)},{key:"complete",name:"% Complete"}],[]),n=i.useCallback((s,t)=>{const N=Math.round(40.69565217391305),H=22-2,R=s.loremIpsum.length,D=Math.ceil(R/N),E=Number(j[t.rowSizeName].cell["padding-block"].slice(0,-2)),w=H*D+E*2;return w>t.rowSizeValue?w:t.rowSizeValue},[]);return e.jsxDEV(h,{tableConfig:{containerStyle:{height:700},rowHeight:n},columnConfig:a,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:106,columnNumber:7},void 0)}},l={...m({preCode:g,previewSource:"shown"}),name:"Auto row height (перенос текста)",render:()=>{const[r]=i.useState(S),a=i.useMemo(()=>[{key:"id",name:"id"},{key:"task",name:"Title"},{key:"loremIpsum",name:"Длинный текст",width:360,renderCell:({row:n,theme:s})=>e.jsxDEV(o.Container,{alignItems:"center",padding:{left:8,right:8},children:e.jsxDEV(o.Text,{font:s.baseFontStyle,wordWrap:!0,children:n.loremIpsum},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:140,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:136,columnNumber:13},void 0)},{key:"short",name:"Без переноса",width:160,renderCell:({row:n})=>n.task}],[]);return e.jsxDEV(h,{tableConfig:{containerStyle:{height:700},rowHeight:"auto"},columnConfig:a,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:157,columnNumber:7},void 0)}},O={Новая:"default","В работе":"accent",Готово:"positive"},c=["дизайн","frontend","релиз","backend","аналитика","тестирование"],B=()=>Array.from({length:60},(r,a)=>({id:String(a+1),title:`Задача ${a+1}: ${"согласовать макет и уточнить требования ".repeat(a%3+1)}`,description:a%4===0?"Короткое описание":"Подробное описание задачи: что нужно сделать, кого позвать на ревью и какие риски учесть до релиза.",status:["Новая","В работе","Готово"][a%3],tags:c.slice(0,c.length-a%c.length)})),d={...m({preCode:g,previewSource:"shown"}),name:"Вёрстка ячейки на flex (кнопки, бейджи, перенос, wrap)",render:()=>{const[r]=i.useState(B),a=i.useMemo(()=>[{key:"id",name:"#",width:56},{key:"title",name:"Задача",width:480,renderCell:({row:n,theme:s})=>e.jsxDEV(o.Container,{direction:"column",justifyContent:"center",gap:6,padding:{left:8,right:8},style:{width:"100%"},children:[e.jsxDEV(o.Container,{direction:"row",alignItems:"center",gap:8,style:{width:"100%"},children:[e.jsxDEV(o.Text,{font:s.baseFontStyle,wordWrap:!0,style:{flexGrow:1,flexShrink:1},children:n.title},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:236,columnNumber:17},void 0),e.jsxDEV(o.Badge,{text:n.status,view:O[n.status],size:"s",style:{flexShrink:0}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:243,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:230,columnNumber:15},void 0),e.jsxDEV(o.Text,{font:s.baseFontStyle,color:s.textLight,wordWrap:!0,children:n.description},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:250,columnNumber:15},void 0),e.jsxDEV(o.Container,{direction:"row",alignItems:"center",gap:8,style:{width:"100%"},children:[e.jsxDEV(o.Container,{wrap:"wrap",gap:6,style:{flexGrow:1,flexShrink:1},children:n.tags.map(t=>e.jsxDEV(o.Badge,{text:t,view:"light",size:"xs"},t,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:269,columnNumber:21},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:263,columnNumber:17},void 0),e.jsxDEV(o.Button,{view:"accent",size:"xs",style:{flexShrink:0},onClick:()=>console.debug("open",n.id),children:"Открыть"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:272,columnNumber:17},void 0),e.jsxDEV(o.Button,{view:"secondary",size:"xs",style:{flexShrink:0},onClick:()=>console.debug("assign",n.id),children:"Назначить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:281,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:257,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:223,columnNumber:13},void 0)},{key:"status",name:"Статус",width:120,renderCell:({row:n})=>n.status}],[]);return e.jsxDEV(h,{tableConfig:{containerStyle:{height:700},rowHeight:"auto"},columnConfig:a,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:305,columnNumber:7},void 0)}};var C,b,f;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(f=(b=u.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,p,k;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Auto row height (перенос текста)',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'id'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'loremIpsum',
      name: 'Длинный текст',
      width: 360,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container alignItems="center" padding={{
        left: 8,
        right: 8
      }}>
              <Canvas.Text font={theme.baseFontStyle} wordWrap>
                {row.loremIpsum}
              </Canvas.Text>
            </Canvas.Container>
    }, {
      key: 'short',
      name: 'Без переноса',
      width: 160,
      renderCell: ({
        row
      }) => row.task
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 700
      },
      rowHeight: 'auto'
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(k=(p=l.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};var y,T,x;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Вёрстка ячейки на flex (кнопки, бейджи, перенос, wrap)',
  render: () => {
    const [rows] = useState(createTaskRows);
    const columnConfig = useMemo<readonly ColumnConfig<TaskRow>[]>(() => [{
      key: 'id',
      name: '#',
      width: 56
    }, {
      key: 'title',
      name: 'Задача',
      width: 480,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container direction="column" justifyContent="center" gap={6} padding={{
        left: 8,
        right: 8
      }} style={{
        width: '100%'
      }}>
              <Canvas.Container direction="row" alignItems="center" gap={8} style={{
          width: '100%'
        }}>
                <Canvas.Text font={theme.baseFontStyle} wordWrap style={{
            flexGrow: 1,
            flexShrink: 1
          }}>
                  {row.title}
                </Canvas.Text>
                <Canvas.Badge text={row.status} view={STATUS_VIEW[row.status]} size="s" style={{
            flexShrink: 0
          }} />
              </Canvas.Container>
              <Canvas.Text font={theme.baseFontStyle} color={theme.textLight} wordWrap>
                {row.description}
              </Canvas.Text>
              <Canvas.Container direction="row" alignItems="center" gap={8} style={{
          width: '100%'
        }}>
                <Canvas.Container wrap="wrap" gap={6} style={{
            flexGrow: 1,
            flexShrink: 1
          }}>
                  {row.tags.map(tag => <Canvas.Badge key={tag} text={tag} view="light" size="xs" />)}
                </Canvas.Container>
                <Canvas.Button view="accent" size="xs" style={{
            flexShrink: 0
          }}
          // eslint-disable-next-line no-console
          onClick={() => console.debug('open', row.id)}>
                  Открыть
                </Canvas.Button>
                <Canvas.Button view="secondary" size="xs" style={{
            flexShrink: 0
          }}
          // eslint-disable-next-line no-console
          onClick={() => console.debug('assign', row.id)}>
                  Назначить
                </Canvas.Button>
              </Canvas.Container>
            </Canvas.Container>
    }, {
      key: 'status',
      name: 'Статус',
      width: 120,
      renderCell: ({
        row
      }) => row.status
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 700
      },
      rowHeight: 'auto'
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(x=(T=d.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const A=["RowHeight","AutoRowHeight","FlexLayoutCell"],X=Object.freeze(Object.defineProperty({__proto__:null,AutoRowHeight:l,FlexLayoutCell:d,RowHeight:u,__namedExportsOrder:A,default:L},Symbol.toStringTag,{value:"Module"}));export{X as T};
