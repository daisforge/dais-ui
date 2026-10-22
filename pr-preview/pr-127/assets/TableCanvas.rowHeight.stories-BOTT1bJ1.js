import{r as i,d as e}from"./react-D2T61mpp.js";import{c as A}from"./tableData-DVJFoYoT.js";import z from"./DocStoryTemplate-CnJlkrRG.js";import{s as c}from"./storySourceDoc-tVKyHcEN.js";import{a as W}from"./StoriesUtils-CZ4OFYg_.js";import{C as a,T as h,m as M}from"./TableCanvas-CmHGPa14.js";const _={title:"Локальные компоненты/TableCanvas/RowHeight",tags:["!autodocs"],parameters:{docs:{page:z}},component:W},g=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,u={...c({preCode:g,previewSource:"shown"}),name:"Row height",render:()=>{const[t]=i.useState(A),n=i.useMemo(()=>[{key:"id",name:"id"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"loremIpsum",name:"Длинный текст",width:500,renderCell:({row:s,theme:r})=>e.jsxDEV(a.Container,{padding:8,children:e.jsxDEV(a.Container,{children:e.jsxDEV(a.Text,{font:r.baseFontStyle,lineHeight:1.85,wordWrap:!0,children:s.loremIpsum},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:63,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:62,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:61,columnNumber:13},void 0)},{key:"complete",name:"% Complete"}],[]),o=i.useCallback((s,r)=>{const V=Math.round(40.69565217391305),B=22-2,F=s.loremIpsum.length,O=Math.ceil(F/V),L=Number(M[r.rowSizeName].cell["padding-block"].slice(0,-2)),b=B*O+L*2;return b>r.rowSizeValue?b:r.rowSizeValue},[]);return e.jsxDEV(h,{tableConfig:{containerStyle:{height:700},rowHeight:o},columnConfig:n,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:106,columnNumber:7},void 0)}},l={...c({preCode:g,previewSource:"shown"}),name:"Auto row height (перенос текста)",render:()=>{const[t]=i.useState(A),n=i.useMemo(()=>[{key:"id",name:"id"},{key:"task",name:"Title"},{key:"loremIpsum",name:"Длинный текст",width:360,renderCell:({row:o,theme:s})=>e.jsxDEV(a.Container,{alignItems:"center",padding:{left:8,right:8},children:e.jsxDEV(a.Text,{font:s.baseFontStyle,wordWrap:!0,children:o.loremIpsum},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:140,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:136,columnNumber:13},void 0)},{key:"short",name:"Без переноса",width:160,renderCell:({row:o})=>o.task}],[]);return e.jsxDEV(h,{tableConfig:{containerStyle:{height:700},rowHeight:"auto"},columnConfig:n,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:157,columnNumber:7},void 0)}},$={Новая:"default","В работе":"accent",Готово:"positive"},C=["дизайн","frontend","релиз","backend","аналитика","тестирование"],G=()=>Array.from({length:60},(t,n)=>({id:String(n+1),title:`Задача ${n+1}: ${"согласовать макет и уточнить требования ".repeat(n%3+1)}`,description:n%4===0?"Короткое описание":"Подробное описание задачи: что нужно сделать, кого позвать на ревью и какие риски учесть до релиза.",status:["Новая","В работе","Готово"][n%3],tags:C.slice(0,C.length-n%C.length)})),d={...c({preCode:g,previewSource:"shown"}),name:"Вёрстка ячейки на flex (кнопки, бейджи, перенос, wrap)",render:()=>{const[t]=i.useState(G),n=i.useMemo(()=>[{key:"id",name:"#",width:56},{key:"title",name:"Задача",width:480,renderCell:({row:o,theme:s})=>e.jsxDEV(a.Container,{direction:"column",justifyContent:"center",gap:6,padding:{left:8,right:8},style:{width:"100%"},children:[e.jsxDEV(a.Container,{direction:"row",alignItems:"center",gap:8,style:{width:"100%"},children:[e.jsxDEV(a.Text,{font:s.baseFontStyle,wordWrap:!0,style:{flexGrow:1,flexShrink:1},children:o.title},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:236,columnNumber:17},void 0),e.jsxDEV(a.Badge,{text:o.status,view:$[o.status],size:"s",style:{flexShrink:0}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:243,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:230,columnNumber:15},void 0),e.jsxDEV(a.Text,{font:s.baseFontStyle,color:s.textLight,wordWrap:!0,children:o.description},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:250,columnNumber:15},void 0),e.jsxDEV(a.Container,{direction:"row",alignItems:"center",gap:8,style:{width:"100%"},children:[e.jsxDEV(a.Container,{wrap:"wrap",gap:6,style:{flexGrow:1,flexShrink:1},children:o.tags.map(r=>e.jsxDEV(a.Badge,{text:r,view:"light",size:"xs"},r,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:269,columnNumber:21},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:263,columnNumber:17},void 0),e.jsxDEV(a.Button,{view:"accent",size:"xs",style:{flexShrink:0},onClick:()=>console.debug("open",o.id),children:"Открыть"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:272,columnNumber:17},void 0),e.jsxDEV(a.Button,{view:"secondary",size:"xs",style:{flexShrink:0},onClick:()=>console.debug("assign",o.id),children:"Назначить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:281,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:257,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:223,columnNumber:13},void 0)},{key:"status",name:"Статус",width:120,renderCell:({row:o})=>o.status}],[]);return e.jsxDEV(h,{tableConfig:{containerStyle:{height:700},rowHeight:"auto"},columnConfig:n,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:305,columnNumber:7},void 0)}},j=120,f=["Цифровизация","Стратегическое направление «Розничный бизнес»","Развитие корпоративного сегмента и работа с ключевыми клиентами","ИТ"],v=["Центральный аппарат","Территориальный банк: Северо-Западный","Управление по работе с крупнейшими клиентами и холдингами"],P=()=>Array.from({length:5e3},(t,n)=>({id:n,direction:f[n%f.length],division:v[n%v.length],comment:n%5===0?"Плановое значение пересмотрено после квартального комитета, факт уточняется":"",values:Array.from({length:j},(o,s)=>(n*7919+s*104729)%1e6)})),w=t=>({row:n,theme:o})=>e.jsxDEV(a.Container,{alignItems:"center",padding:{left:8,right:8},children:e.jsxDEV(a.Text,{font:o.baseFontStyle,wordWrap:!0,children:n[t]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:361,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:360,columnNumber:7},void 0),m={...c({preCode:g,previewSource:"shown"}),name:"Auto row height: широкая таблица (120 показателей)",render:()=>{const[t]=i.useState(P),n=i.useMemo(()=>[{key:"direction",name:"Направление",width:220,renderCell:w("direction")},{key:"division",name:"Подразделение",width:200,renderCell:w("division")},...Array.from({length:j},(o,s)=>({key:`metric${s}`,name:`Показатель ${s+1}`,width:120,renderCell:({row:r})=>e.jsxDEV(a.Container,{alignItems:"center",justifyContent:"flex-end",padding:{left:8,right:8},children:e.jsxDEV(a.Text,{children:r.values[s].toLocaleString("ru-RU")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:402,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:397,columnNumber:15},void 0)})),{key:"comment",name:"Комментарий",width:240,renderCell:w("comment")}],[]);return e.jsxDEV(h,{tableConfig:{containerStyle:{height:700},rowHeight:"auto"},columnConfig:n,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:421,columnNumber:7},void 0)}};var p,k,y;u.parameters={...u.parameters,docs:{...(p=u.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(y=(k=u.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var T,x,S;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(S=(x=l.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var N,H,R;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(R=(H=d.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var E,D,I;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Auto row height: широкая таблица (120 показателей)',
  render: () => {
    const [rows] = useState(createReportRows);
    const columnConfig = useMemo<readonly ColumnConfig<ReportRow>[]>(() => [{
      key: 'direction',
      name: 'Направление',
      width: 220,
      renderCell: wrappedText('direction')
    }, {
      key: 'division',
      name: 'Подразделение',
      width: 200,
      renderCell: wrappedText('division')
    }, ...Array.from({
      length: REPORT_METRICS
    }, (_, index): ColumnConfig<ReportRow> => ({
      key: \`metric\${index}\`,
      name: \`Показатель \${index + 1}\`,
      width: 120,
      renderCell: ({
        row
      }) => <Canvas.Container alignItems="center" justifyContent="flex-end" padding={{
        left: 8,
        right: 8
      }}>
                <Canvas.Text>
                  {row.values[index]!.toLocaleString('ru-RU')}
                </Canvas.Text>
              </Canvas.Container>
    })),
    // Колонка с переносом в конце таблицы: строки дорастут, когда до неё прокрутят
    {
      key: 'comment',
      name: 'Комментарий',
      width: 240,
      renderCell: wrappedText('comment')
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 700
      },
      rowHeight: 'auto'
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const U=["RowHeight","AutoRowHeight","FlexLayoutCell","AutoRowHeightWideTable"],ae=Object.freeze(Object.defineProperty({__proto__:null,AutoRowHeight:l,AutoRowHeightWideTable:m,FlexLayoutCell:d,RowHeight:u,__namedExportsOrder:U,default:_},Symbol.toStringTag,{value:"Module"}));export{ae as T};
