import{r as a,b as y}from"./react-UEdzNlUe.js";import z from"./DocStoryTemplate-NeoOpigq.js";import{s as W}from"./storySourceDoc-tVKyHcEN.js";import{b as O,w as G,u as c,e as p,a as k}from"./index-Dgmteq0e.js";import{T as j}from"./TableCanvas-za5dS4Cx.js";import{s as H}from"./visual-helpers-CpY530oS.js";import{a as q}from"./tableData-DKA5H0bF.js";import{aA as J}from"./@salutejs/plasma-icons-DO9zHrCT.js";const U=q(42);function m(r){const{min:n=0,max:s=100}=r??{};return Math.floor(U()*(s-n+1))+n}const h=["Swimming","Gymnastics","Speed Skating","Cross Country Skiing","Short-Track Speed Skating","Diving","Cycling","Biathlon","Alpine Skiing","Ski Jumping","Nordic Combined","Athletics","Table Tennis","Tennis","Synchronized Swimming","Shooting","Rowing","Fencing","Equestrian","Canoeing","Bobsleigh","Badminton","Archery","Wrestling","Weightlifting","Waterpolo","Wrestling","Weightlifting"],R=["United States","Russian Federation","United Kingdom","France","Belgium","Germany","China","Japan","Korean"],v=h.map(r=>["Mr. ","Ms. "][m({max:1})]+r);function P(){const r=[];for(let n=1;n<10001;n++)r.push({id:n,year:2015+m({max:3}),country:R[m({max:R.length-1})],sport:h[m({max:h.length-1})],athlete:v[m({max:v.length-1})],gold:m({max:5}),silver:m({max:5}),bronze:m({max:5})});return r.sort((n,s)=>s.country.localeCompare(n.country))}const $={title:"Локальные компоненты/TableCanvas/RowsGrouping",tags:["!autodocs"],parameters:{docs:{page:z}}},Y=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconRefresh } from '@daisforge/ui/icons';

`,g={decorators:[(r,{args:n})=>y.jsxDEV(r,{},String(n.manyColumns),!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowsGrouping/TableCanvas.rowsGrouping.stories.tsx",lineNumber:40,columnNumber:37},void 0)],args:{manyColumns:!1,narrowPanel:!1,confirm:!1},argTypes:{manyColumns:{name:"24 дополнительных столбца",control:"boolean"},confirm:{name:"Применение по кнопке",control:"boolean"},narrowPanel:{name:"Узкая панель",control:"boolean"}},...W({preCode:Y,previewSource:"shown"}),name:"Простая группировка",render:({manyColumns:r,narrowPanel:n,confirm:s,onApply:t})=>{const[l]=a.useState(P),u=a.useMemo(()=>r?Array.from({length:24},(e,i)=>2e3+i):[],[r]),w=a.useMemo(()=>l.map(e=>({...e,...Object.fromEntries(u.map(i=>[String(i),e.year===i?e.gold:0]))})),[l,u]),[d,o]=a.useState([]),b=a.useMemo(()=>[{key:"athlete",name:"Athlete",rowsGrouping:{columnGroupLabel:"Athlete"}},{key:"sport",name:"Sport",rowsGrouping:{columnGroupLabel:"Sport"}},{key:"country",name:"Country",rowsGrouping:{columnGroupLabel:"Country"}},{key:"year",name:"Year",rowsGrouping:{columnGroupLabel:"Year"}},{key:"gold",name:"Gold",rowsGrouping:{groupByColumn:!1,columnGroupLabel:"Gold",renderGroupCell({childRows:e}){return e.reduce((i,{gold:V})=>i+V,0).toString()}}},...u.map(e=>({key:String(e),name:String(e),rowsGrouping:{columnGroupLabel:`Золотые медали за ${e} год`}}))],[u]);return y.jsxDEV(j,{tableConfig:{containerStyle:{height:700,maxWidth:n?168:void 0},fullScreenEnabled:n,controlBlock:n?{rightSideInner:[{text:"Сбросить группировку",contentLeft:y.jsxDEV(J,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowsGrouping/TableCanvas.rowsGrouping.stories.tsx",lineNumber:143,columnNumber:34},void 0),"aria-label":"Сбросить группировку",title:"Сбросить группировку",onClick:()=>o([])}]}:void 0,columnsControl:{enable:!0},rowsGrouping:{rowKeyGetter:e=>e.id,groupByState:[d,e=>{const i=typeof e=="function"?e(d):e;t==null||t(i),o(i)}],groupButton:{applyMode:s?"confirm":"instant",defaultCustomItems:[{value:"gold",label:"Gold as custom option"}]},groupedColumnProps:{width:350,renderCell:e=>e.parentGroupKey==="Russian Federation"?"Russia last lvl":e.parentGroupKey??"",rowsGrouping:{renderGroupCell(e){return e.groupKey==="Russian Federation"?"Russia":e.groupKey}}}}},columnConfig:b,rows:w},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowsGrouping/TableCanvas.rowsGrouping.stories.tsx",lineNumber:131,columnNumber:7},void 0)}},f={...W({preCode:Y,previewSource:"shown"}),name:"Комбинация с другими фичами",render:()=>{const[r]=a.useState(P),[n,s]=a.useState([]),t=a.useMemo(()=>[{key:"athlete",name:"Athlete",sortingType:"stringSort",rowsGrouping:{columnGroupLabel:"Athlete"},filtering:{component:"input",filter:"includes",valueInRow:o=>o.athlete,keyInFilterState:"athlete"}},{key:"sport",name:"Sport",sortingType:"stringSort",rowsGrouping:{columnGroupLabel:"Sport"},filtering:{component:"input",filter:"includes",valueInRow:o=>o.sport,keyInFilterState:"sport"}},{key:"country",name:"Country",sortingType:"stringSort",rowsGrouping:{columnGroupLabel:"Country"},filtering:{component:"input",filter:"startWith",valueInRow:o=>o.country,keyInFilterState:"country"}},{key:"year",name:"Year",sortingType:"numberSort",rowsGrouping:{columnGroupLabel:"Year"},filtering:{component:"input",filter:"startWith",valueInRow:o=>o.year,keyInFilterState:"year"}},{key:"gold",name:"Gold",sortingType:"numberSort",rowsGrouping:{columnGroupLabel:"Gold",renderGroupCell({childRows:o}){return String(o.reduce((b,{gold:e})=>b+e,0))}}}],[]),l=a.useState([]),u=a.useState({athlete:"",sport:"",gold:"",country:"",year:""}),w=a.useState(()=>new Set),d=o=>o.id===1;return y.jsxDEV(j,{tableConfig:{rowMarkers:{startIndex:1},columnsControl:{enable:!0},containerStyle:{height:700},rowsGrouping:{rowKeyGetter:o=>o.id,groupByState:[n,s],groupedColumnProps:{name:y.jsxDEV(y.Fragment,{children:"моя группировка"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowsGrouping/TableCanvas.rowsGrouping.stories.tsx",lineNumber:313,columnNumber:21},void 0)}},resizableColumn:!0,sorting:{state:l},filtering:{state:u,clearedValue:{athlete:"",sport:"",gold:"",country:"",year:""}},selecting:{state:w,rowKeyGetter:o=>o.id,showDefault:!0,rowCheckboxDisabled:d}},columnConfig:t,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowsGrouping/TableCanvas.rowsGrouping.stories.tsx",lineNumber:300,columnNumber:7},void 0)}};function _(r){const n=O();return{...g,name:r?"Применение из подменю":"Применение из списка",args:{...g.args,narrowPanel:r,confirm:!0,onApply:n},parameters:{screenshot:{keepState:!0,capture:"page"}},play:async({canvasElement:s})=>{n.mockClear();const t=G(s.ownerDocument.body),l=async()=>{r?(await c.click(await t.findByLabelText("Дополнительные действия")),await c.click(await t.findByRole("option",{name:"Группировать"}))):await c.click(await t.findByRole("combobox",{name:/Группировать/})),await t.findByText("Сбросить все")},u=d=>t.getByRole("option",{name:new RegExp(d)}),w=r?"option":"button";await H(),await l(),await c.click(u("Sport")),await c.click(u("Country")),p(n).not.toHaveBeenCalled(),await c.click(t.getByRole(w,{name:"Применить"})),p(n).toHaveBeenCalledTimes(1),p(n).toHaveBeenLastCalledWith(["sport","country"]),await k(()=>p(t.queryByText("Сбросить все")).toBeNull()),await l(),await c.click(u("Sport")),await c.keyboard("{Escape}"),await k(()=>p(t.queryByText("Сбросить все")).toBeNull()),await l(),p(G(u("Sport")).getByRole("checkbox")).toBeChecked(),p(G(u("Country")).getByRole("checkbox")).toBeChecked(),p(n).toHaveBeenCalledTimes(1)}}}const S=_(!1),C=_(!0);var B,T,x;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  decorators: [(Story, {
    args
  }) => <Story key={String(args.manyColumns)} />],
  args: {
    manyColumns: false,
    narrowPanel: false,
    confirm: false
  },
  argTypes: {
    manyColumns: {
      name: '24 дополнительных столбца',
      control: 'boolean'
    },
    confirm: {
      name: 'Применение по кнопке',
      control: 'boolean'
    },
    narrowPanel: {
      name: 'Узкая панель',
      control: 'boolean'
    }
  },
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Простая группировка',
  render: ({
    manyColumns,
    narrowPanel,
    confirm,
    onApply
  }) => {
    const [sourceRows] = useState(createRowsForGrouping);
    const years = useMemo(() => manyColumns ? Array.from({
      length: 24
    }, (_, i) => 2000 + i) : [], [manyColumns]);
    const rows = useMemo(() => sourceRows.map(row => ({
      ...row,
      ...Object.fromEntries(years.map(year => [String(year), row.year === year ? row.gold : 0]))
    })), [sourceRows, years]);
    const [groupByArr, setGroupByArr] = useState<string[]>([]);
    const columnConfig = useMemo<readonly ColumnConfig<RowForGrouping>[]>(() => [{
      key: 'athlete',
      name: 'Athlete',
      rowsGrouping: {
        columnGroupLabel: 'Athlete'
      }
    }, {
      key: 'sport',
      name: 'Sport',
      rowsGrouping: {
        columnGroupLabel: 'Sport'
      }
    }, {
      key: 'country',
      name: 'Country',
      rowsGrouping: {
        columnGroupLabel: 'Country'
      }
    }, {
      key: 'year',
      name: 'Year',
      rowsGrouping: {
        columnGroupLabel: 'Year'
      }
    }, {
      key: 'gold',
      name: 'Gold',
      rowsGrouping: {
        groupByColumn: false,
        columnGroupLabel: 'Gold',
        renderGroupCell({
          childRows
        }) {
          return childRows.reduce((prev, {
            gold
          }) => prev + gold, 0).toString();
        }
      }
    }, ...years.map(year => ({
      key: String(year),
      name: String(year),
      rowsGrouping: {
        columnGroupLabel: \`Золотые медали за \${year} год\`
      }
    }))], [years]);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 700,
        maxWidth: narrowPanel ? 168 : undefined
      },
      fullScreenEnabled: narrowPanel,
      controlBlock: narrowPanel ? {
        rightSideInner: [{
          text: 'Сбросить группировку',
          contentLeft: <IconRefresh />,
          'aria-label': 'Сбросить группировку',
          title: 'Сбросить группировку',
          onClick: () => setGroupByArr([])
        }]
      } : undefined,
      columnsControl: {
        enable: true
      },
      rowsGrouping: {
        rowKeyGetter: r => r.id,
        groupByState: [groupByArr, update => {
          const next = typeof update === 'function' ? update(groupByArr) : update;
          onApply?.(next);
          setGroupByArr(next);
        }],
        groupButton: {
          applyMode: confirm ? 'confirm' : 'instant',
          defaultCustomItems: [{
            value: 'gold',
            label: 'Gold as custom option'
          }]
        },
        groupedColumnProps: {
          width: 350,
          renderCell: props => {
            if (props.parentGroupKey === 'Russian Federation') {
              return 'Russia last lvl';
            }
            return props.parentGroupKey ?? '';
          },
          rowsGrouping: {
            renderGroupCell(props) {
              if (props.groupKey === 'Russian Federation') {
                return 'Russia';
              }
              return props.groupKey;
            }
          }
        }
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(x=(T=g.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var A,F,E;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Комбинация с другими фичами',
  render: () => {
    const [rows] = useState(createRowsForGrouping);
    const [groupByArr, setGroupByArr] = useState<string[]>([]);
    const columnConfig = useMemo<readonly ColumnConfig<RowForGrouping>[]>(() => [{
      key: 'athlete',
      name: 'Athlete',
      sortingType: 'stringSort',
      rowsGrouping: {
        columnGroupLabel: 'Athlete'
      },
      filtering: {
        component: 'input',
        filter: 'includes',
        valueInRow: r => r.athlete,
        keyInFilterState: 'athlete'
      }
    }, {
      key: 'sport',
      name: 'Sport',
      sortingType: 'stringSort',
      rowsGrouping: {
        columnGroupLabel: 'Sport'
      },
      filtering: {
        component: 'input',
        filter: 'includes',
        valueInRow: r => r.sport,
        keyInFilterState: 'sport'
      }
    }, {
      key: 'country',
      name: 'Country',
      sortingType: 'stringSort',
      rowsGrouping: {
        columnGroupLabel: 'Country'
      },
      filtering: {
        component: 'input',
        filter: 'startWith',
        valueInRow: r => r.country,
        keyInFilterState: 'country'
      }
    }, {
      key: 'year',
      name: 'Year',
      sortingType: 'numberSort',
      rowsGrouping: {
        columnGroupLabel: 'Year'
      },
      filtering: {
        component: 'input',
        filter: 'startWith',
        valueInRow: r => r.year,
        keyInFilterState: 'year'
      }
    }, {
      key: 'gold',
      name: 'Gold',
      sortingType: 'numberSort',
      rowsGrouping: {
        columnGroupLabel: 'Gold',
        renderGroupCell({
          childRows
        }) {
          return String(childRows.reduce((prev, {
            gold
          }) => prev + gold, 0));
        }
      }
    }], []);
    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);
    const filteringStateAndSetter = useState({
      athlete: '',
      sport: '',
      gold: '',
      country: '',
      year: ''
    });
    const selectingRowStateAndSetter = useState((): ReadonlySet<string | number> => new Set());
    const rowCheckboxDisabled = (r: RowForGrouping) => r.id === 1;
    return <TableCanvas tableConfig={{
      rowMarkers: {
        startIndex: 1
      },
      columnsControl: {
        enable: true
      },
      containerStyle: {
        height: 700
      },
      rowsGrouping: {
        rowKeyGetter: r => r.id,
        groupByState: [groupByArr, setGroupByArr],
        groupedColumnProps: {
          name: <>моя группировка</>
        }
      },
      resizableColumn: true,
      sorting: {
        state: sortingStateAndSetter
      },
      filtering: {
        state: filteringStateAndSetter,
        clearedValue: {
          athlete: '',
          sport: '',
          gold: '',
          country: '',
          year: ''
        }
      },
      selecting: {
        state: selectingRowStateAndSetter,
        rowKeyGetter: r => r.id,
        showDefault: true,
        rowCheckboxDisabled
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(E=(F=f.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var L,I,D;S.parameters={...S.parameters,docs:{...(L=S.parameters)==null?void 0:L.docs,source:{originalSource:"confirmGrouping(false)",...(D=(I=S.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var N,M,K;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:"confirmGrouping(true)",...(K=(M=C.parameters)==null?void 0:M.docs)==null?void 0:K.source}}};const X=["SimpleTable","MultipleFeaturesTable","ConfirmWide","ConfirmNarrow"],ae=Object.freeze(Object.defineProperty({__proto__:null,ConfirmNarrow:C,ConfirmWide:S,MultipleFeaturesTable:f,SimpleTable:g,__namedExportsOrder:X,default:$},Symbol.toStringTag,{value:"Module"}));export{ae as T};
