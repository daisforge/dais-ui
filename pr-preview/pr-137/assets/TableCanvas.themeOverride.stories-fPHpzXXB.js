import{r as u,j as t}from"./react-CAOzMBF_.js";import{c as f,a as z}from"./tableData-DVJFoYoT.js";import B from"./DocStoryTemplate-Cf946dgV.js";import{C,T as m}from"./TableCanvas-DlX-Wh2b.js";const A={title:"Локальные компоненты/TableCanvas/Theme Override",parameters:{docs:{page:B}},tags:["!autodocs"]},a={name:"Переопределение фона ячейки (bgCell)",render:()=>{const[r]=u.useState(f(0,10)),o=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Задача",themeOverride:({row:e})=>{if(Number(e.id)%2===0)return{bgCell:"rgba(46, 170, 220, 0.15)"}}},{key:"priority",name:"Приоритет"},{key:"developer",name:"Разработчик"}],[]);return t.jsx(m,{tableConfig:{containerStyle:{height:"400px"},rowSize:{default:"medium",showInControl:!1}},columnConfig:o,rows:r})}},l={name:"Переопределение паддингов ячейки",render:()=>{const[r]=u.useState(f(0,10)),o=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Задача (padding 32px)",themeOverride:()=>({cellHorizontalPadding:32})},{key:"priority",name:"Приоритет (стандартный)"},{key:"developer",name:"Разработчик (padding 4px)",themeOverride:()=>({cellHorizontalPadding:4})}],[]);return t.jsx(m,{tableConfig:{containerStyle:{height:"400px"},rowSize:{default:"medium",showInControl:!1}},columnConfig:o,rows:r})}},i={name:"Кастомный renderCell без лишних паддингов",render:()=>{const[r]=u.useState(f(0,10)),o=({column:n,row:c,theme:g})=>{const T=String(c[n.key]??"");return t.jsx(C.Container,{padding:{left:g.cellHorizontalPadding,right:g.cellHorizontalPadding},alignItems:"center",children:t.jsx(C.Text,{children:T})})},e=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Задача (дефолт)"},{key:"priority",name:"Приоритет (renderCell)",renderCell:o},{key:"developer",name:"Разработчик (дефолт)"}],[]);return t.jsx(m,{tableConfig:{containerStyle:{height:"400px"},rowSize:{default:"small",showInControl:!0}},columnConfig:e,rows:r})}},s={name:"Subrows: переопределение по уровню (lvl)",render:()=>{const[r]=u.useState(()=>z()),o=u.useMemo(()=>[{key:"block",name:"Блок / Трайб / Продукт",subRow:{keyOfColumnInSubRow:e=>{switch(e){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},isColumnWithArrow:!0},themeOverride:(e,n)=>{if(n===1)return{bgCell:"rgba(46, 170, 220, 0.12)"};if(n===2)return{bgCell:"rgba(255, 170, 60, 0.18)"}}},{key:"q1",name:"Q1 (padding override 64 — применяется на всех уровнях)",contentFormat:"number",subRow:{parentKeyAsDefault:!0},themeOverride:(e,n)=>({bgCell:n===0?"rgba(120, 200, 120, 0.12)":n===1?"rgba(120, 200, 120, 0.20)":"rgba(120, 200, 120, 0.30)",cellHorizontalPadding:64})},{key:"q2",name:"Q2",contentFormat:"number",subRow:{keyOfColumnInSubRow:"q2"}}],[]);return t.jsx(m,{tableConfig:{containerStyle:{height:"500px"},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},rowSize:{default:"medium",showInControl:!1}},columnConfig:o,rows:r})}},d={name:"Фон + кастомный renderCell",render:()=>{const[r]=u.useState(f(0,10)),o=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Задача",themeOverride:({row:e})=>{const n=Number(e.id);if(n%3===0)return{bgCell:"rgba(255, 100, 100, 0.15)"};if(n%3===1)return{bgCell:"rgba(100, 255, 100, 0.15)"}},renderCell:({column:e,row:n,theme:c})=>{const g=String(n[e.key]??"");return t.jsx(C.Container,{padding:{left:c.cellHorizontalPadding,right:c.cellHorizontalPadding},alignItems:"center",children:t.jsx(C.Badge,{view:"accent",text:g})})}},{key:"priority",name:"Приоритет"}],[]);return t.jsx(m,{tableConfig:{containerStyle:{height:"400px"},rowSize:{default:"medium",showInControl:!1}},columnConfig:o,rows:r})}};var w,b,p;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(p=(b=a.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var v,y,h;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(h=(y=l.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var k,S,R;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(R=(S=i.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var E,D,x;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(x=(D=s.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var O,F,I;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(I=(F=d.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};const P=["ThemeOverrideBgCell","ThemeOverridePadding","ThemeOverrideCustomRenderNoPadding","ThemeOverrideSubRowsLvl","ThemeOverrideBgAndCustomRender"],q=Object.freeze(Object.defineProperty({__proto__:null,ThemeOverrideBgAndCustomRender:d,ThemeOverrideBgCell:a,ThemeOverrideCustomRenderNoPadding:i,ThemeOverridePadding:l,ThemeOverrideSubRowsLvl:s,__namedExportsOrder:P,default:A},Symbol.toStringTag,{value:"Module"}));export{q as T};
