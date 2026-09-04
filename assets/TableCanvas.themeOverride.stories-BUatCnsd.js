import{r as u,d as a}from"./react-D2T61mpp.js";import{c as b,a as I}from"./tableData-UCfjiBCh.js";import z from"./DocStoryTemplate-ote7_b2_.js";import{C,T as m}from"./TableCanvas-pe6ptXeG.js";const B={title:"Локальные компоненты/TableCanvas/Theme Override",parameters:{docs:{page:z}},tags:["!autodocs"]},t={name:"Переопределение фона ячейки (bgCell)",render:()=>{const[r]=u.useState(b(0,10)),o=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Задача",themeOverride:({row:e})=>{if(Number(e.id)%2===0)return{bgCell:"rgba(46, 170, 220, 0.15)"}}},{key:"priority",name:"Приоритет"},{key:"developer",name:"Разработчик"}],[]);return a.jsxDEV(m,{tableConfig:{containerStyle:{height:"400px"},rowSize:{default:"medium",showInControl:!1}},columnConfig:o,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ThemeOverride/TableCanvas.themeOverride.stories.tsx",lineNumber:58,columnNumber:7},void 0)}},s={name:"Переопределение паддингов ячейки",render:()=>{const[r]=u.useState(b(0,10)),o=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Задача (padding 32px)",themeOverride:()=>({cellHorizontalPadding:32})},{key:"priority",name:"Приоритет (стандартный)"},{key:"developer",name:"Разработчик (padding 4px)",themeOverride:()=>({cellHorizontalPadding:4})}],[]);return a.jsxDEV(m,{tableConfig:{containerStyle:{height:"400px"},rowSize:{default:"medium",showInControl:!1}},columnConfig:o,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ThemeOverride/TableCanvas.themeOverride.stories.tsx",lineNumber:97,columnNumber:7},void 0)}},i={name:"Кастомный renderCell без лишних паддингов",render:()=>{const[r]=u.useState(b(0,10)),o=({column:n,row:c,theme:g})=>{const F=String(c[n.key]??"");return a.jsxDEV(C.Container,{padding:{left:g.cellHorizontalPadding,right:g.cellHorizontalPadding},alignItems:"center",children:a.jsxDEV(C.Text,{children:F},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ThemeOverride/TableCanvas.themeOverride.stories.tsx",lineNumber:129,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ThemeOverride/TableCanvas.themeOverride.stories.tsx",lineNumber:122,columnNumber:9},void 0)},e=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Задача (дефолт)"},{key:"priority",name:"Приоритет (renderCell)",renderCell:o},{key:"developer",name:"Разработчик (дефолт)"}],[]);return a.jsxDEV(m,{tableConfig:{containerStyle:{height:"400px"},rowSize:{default:"small",showInControl:!0}},columnConfig:e,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ThemeOverride/TableCanvas.themeOverride.stories.tsx",lineNumber:149,columnNumber:7},void 0)}},l={name:"Subrows: переопределение по уровню (lvl)",render:()=>{const[r]=u.useState(()=>I()),o=u.useMemo(()=>[{key:"block",name:"Блок / Трайб / Продукт",subRow:{keyOfColumnInSubRow:e=>{switch(e){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},isColumnWithArrow:!0},themeOverride:(e,n)=>{if(n===1)return{bgCell:"rgba(46, 170, 220, 0.12)"};if(n===2)return{bgCell:"rgba(255, 170, 60, 0.18)"}}},{key:"q1",name:"Q1 (padding override 64 — применяется на всех уровнях)",contentFormat:"number",subRow:{parentKeyAsDefault:!0},themeOverride:(e,n)=>({bgCell:n===0?"rgba(120, 200, 120, 0.12)":n===1?"rgba(120, 200, 120, 0.20)":"rgba(120, 200, 120, 0.30)",cellHorizontalPadding:64})},{key:"q2",name:"Q2",contentFormat:"number",subRow:{keyOfColumnInSubRow:"q2"}}],[]);return a.jsxDEV(m,{tableConfig:{containerStyle:{height:"500px"},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},rowSize:{default:"medium",showInControl:!1}},columnConfig:o,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ThemeOverride/TableCanvas.themeOverride.stories.tsx",lineNumber:220,columnNumber:7},void 0)}},d={name:"Фон + кастомный renderCell",render:()=>{const[r]=u.useState(b(0,10)),o=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Задача",themeOverride:({row:e})=>{const n=Number(e.id);if(n%3===0)return{bgCell:"rgba(255, 100, 100, 0.15)"};if(n%3===1)return{bgCell:"rgba(100, 255, 100, 0.15)"}},renderCell:({column:e,row:n,theme:c})=>{const g=String(n[e.key]??"");return a.jsxDEV(C.Container,{padding:{left:c.cellHorizontalPadding,right:c.cellHorizontalPadding},alignItems:"center",children:a.jsxDEV(C.Badge,{view:"accent",text:g},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ThemeOverride/TableCanvas.themeOverride.stories.tsx",lineNumber:267,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ThemeOverride/TableCanvas.themeOverride.stories.tsx",lineNumber:260,columnNumber:15},void 0)}},{key:"priority",name:"Приоритет"}],[]);return a.jsxDEV(m,{tableConfig:{containerStyle:{height:"400px"},rowSize:{default:"medium",showInControl:!1}},columnConfig:o,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ThemeOverride/TableCanvas.themeOverride.stories.tsx",lineNumber:278,columnNumber:7},void 0)}};var v,f,w;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Переопределение фона ячейки (bgCell)',
  render: () => {
    const [rows] = useState<Row[]>(createRows(0, 10));
    const columnConfig = useMemo((): ColumnConfig<Row>[] => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Задача',
      themeOverride: ({
        row
      }) => {
        const id = Number(row.id);
        if (id % 2 === 0) {
          return {
            bgCell: 'rgba(46, 170, 220, 0.15)'
          };
        }
        return undefined;
      }
    }, {
      key: 'priority',
      name: 'Приоритет'
    }, {
      key: 'developer',
      name: 'Разработчик'
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '400px'
      },
      rowSize: {
        default: 'medium',
        showInControl: false
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(w=(f=t.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var h,k,p;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Переопределение паддингов ячейки',
  render: () => {
    const [rows] = useState<Row[]>(createRows(0, 10));
    const columnConfig = useMemo((): ColumnConfig<Row>[] => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Задача (padding 32px)',
      themeOverride: () => ({
        cellHorizontalPadding: 32
      })
    }, {
      key: 'priority',
      name: 'Приоритет (стандартный)'
    }, {
      key: 'developer',
      name: 'Разработчик (padding 4px)',
      themeOverride: () => ({
        cellHorizontalPadding: 4
      })
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '400px'
      },
      rowSize: {
        default: 'medium',
        showInControl: false
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(p=(k=s.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};var y,T,S;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Кастомный renderCell без лишних паддингов',
  render: () => {
    const [rows] = useState<Row[]>(createRows(0, 10));
    const render: ColumnConfig<Row>['renderCell'] = ({
      column,
      row,
      theme
    }) => {
      const value = String(row[column.key as keyof Row] ?? '');
      return <Canvas.Container padding={{
        left: theme.cellHorizontalPadding,
        right: theme.cellHorizontalPadding
      }} alignItems="center">
          <Canvas.Text>{value}</Canvas.Text>
        </Canvas.Container>;
    };
    const columnConfig = useMemo((): ColumnConfig<Row>[] => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Задача (дефолт)'
    }, {
      key: 'priority',
      name: 'Приоритет (renderCell)',
      renderCell: render
    }, {
      key: 'developer',
      name: 'Разработчик (дефолт)'
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '400px'
      },
      rowSize: {
        default: 'small',
        showInControl: true
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(S=(T=i.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var E,O,D;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Subrows: переопределение по уровню (lvl)',
  render: () => {
    const [rows] = useState(() => createRowsTree());
    const columnConfig = useMemo((): ColumnConfig<TreeRow>[] => [{
      key: 'block',
      name: 'Блок / Трайб / Продукт',
      subRow: {
        keyOfColumnInSubRow: lvl => {
          switch (lvl) {
            case 0:
              return 'block';
            case 1:
              return 'tribe';
            case 2:
              return 'product';
            default:
              return 'block';
          }
        },
        isColumnWithArrow: true
      },
      // На tree-колонке левый край считается формулой: padding + offset шеврона + offset по lvl.
      themeOverride: (_cellInfo, lvl) => {
        if (lvl === 1) return {
          bgCell: 'rgba(46, 170, 220, 0.12)'
        };
        if (lvl === 2) return {
          bgCell: 'rgba(255, 170, 60, 0.18)'
        };
        return undefined;
      }
    }, {
      key: 'q1',
      name: 'Q1 (padding override 64 — применяется на всех уровнях)',
      contentFormat: 'number',
      subRow: {
        parentKeyAsDefault: true
      },
      // На обычной колонке padding применяется ровно на всех уровнях.
      themeOverride: (_cellInfo, lvl) => ({
        bgCell: lvl === 0 ? 'rgba(120, 200, 120, 0.12)' : lvl === 1 ? 'rgba(120, 200, 120, 0.20)' : 'rgba(120, 200, 120, 0.30)',
        cellHorizontalPadding: 64
      })
    }, {
      key: 'q2',
      name: 'Q2',
      contentFormat: 'number',
      subRow: {
        keyOfColumnInSubRow: 'q2'
      }
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '500px'
      },
      subRows: {
        getSubRows: row => row?.subRows,
        rowKeyGetter: row => row.id
      },
      rowSize: {
        default: 'medium',
        showInControl: false
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(D=(O=l.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var x,R,N;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Фон + кастомный renderCell',
  render: () => {
    const [rows] = useState<Row[]>(createRows(0, 10));
    const columnConfig = useMemo((): ColumnConfig<Row>[] => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Задача',
      themeOverride: ({
        row
      }) => {
        const id = Number(row.id);
        if (id % 3 === 0) {
          return {
            bgCell: 'rgba(255, 100, 100, 0.15)'
          };
        }
        if (id % 3 === 1) {
          return {
            bgCell: 'rgba(100, 255, 100, 0.15)'
          };
        }
        return undefined;
      },
      renderCell: ({
        column,
        row,
        theme
      }) => {
        const value = String(row[column.key as keyof Row] ?? '');
        return <Canvas.Container padding={{
          left: theme.cellHorizontalPadding,
          right: theme.cellHorizontalPadding
        }} alignItems="center">
                <Canvas.Badge view="accent" text={value} />
              </Canvas.Container>;
      }
    }, {
      key: 'priority',
      name: 'Приоритет'
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '400px'
      },
      rowSize: {
        default: 'medium',
        showInControl: false
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(N=(R=d.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};const A=["ThemeOverrideBgCell","ThemeOverridePadding","ThemeOverrideCustomRenderNoPadding","ThemeOverrideSubRowsLvl","ThemeOverrideBgAndCustomRender"],_=Object.freeze(Object.defineProperty({__proto__:null,ThemeOverrideBgAndCustomRender:d,ThemeOverrideBgCell:t,ThemeOverrideCustomRenderNoPadding:i,ThemeOverridePadding:s,ThemeOverrideSubRowsLvl:l,__namedExportsOrder:A,default:B},Symbol.toStringTag,{value:"Module"}));export{_ as T};
