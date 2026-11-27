import{r as t,b as l}from"./react-UEdzNlUe.js";import B from"./DocStoryTemplate-Ci6gdKWw.js";import{s as v}from"./storySourceDoc-tVKyHcEN.js";import{T as R}from"./TableCanvas-Ph-O9Fjm.js";import{a as x}from"./tableData-DKA5H0bF.js";const L=x(42);function a(o){const{min:r=0,max:u=100}=o??{};return Math.floor(L()*(u-r+1))+r}const d=["Swimming","Gymnastics","Speed Skating","Cross Country Skiing","Short-Track Speed Skating","Diving","Cycling","Biathlon","Alpine Skiing","Ski Jumping","Nordic Combined","Athletics","Table Tennis","Tennis","Synchronized Swimming","Shooting","Rowing","Fencing","Equestrian","Canoeing","Bobsleigh","Badminton","Archery","Wrestling","Weightlifting","Waterpolo","Wrestling","Weightlifting"],S=["United States","Russian Federation","United Kingdom","France","Belgium","Germany","China","Japan","Korean"],w=d.map(o=>["Mr. ","Ms. "][a({max:1})]+o);function T(){const o=[];for(let r=1;r<10001;r++)o.push({id:r,year:2015+a({max:3}),country:S[a({max:S.length-1})],sport:d[a({max:d.length-1})],athlete:w[a({max:w.length-1})],gold:a({max:5}),silver:a({max:5}),bronze:a({max:5})});return o.sort((r,u)=>u.country.localeCompare(r.country))}const E={title:"Локальные компоненты/TableCanvas/RowsGrouping",tags:["!autodocs"],parameters:{docs:{page:B}}},A=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,s={decorators:[(o,{args:r})=>l.jsxDEV(o,{},String(r.manyColumns),!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowsGrouping/TableCanvas.rowsGrouping.stories.tsx",lineNumber:31,columnNumber:37},void 0)],args:{manyColumns:!1},argTypes:{manyColumns:{name:"24 дополнительных столбца",control:"boolean"}},...v({preCode:A,previewSource:"shown"}),name:"Простая группировка",render:({manyColumns:o})=>{const[r]=t.useState(T),u=t.useMemo(()=>o?Array.from({length:24},(e,n)=>2e3+n):[],[o]),p=t.useMemo(()=>r.map(e=>({...e,...Object.fromEntries(u.map(n=>[String(n),e.year===n?e.gold:0]))})),[r,u]),[m,g]=t.useState([]),c=t.useMemo(()=>[{key:"athlete",name:"Athlete",rowsGrouping:{columnGroupLabel:"Athlete"}},{key:"sport",name:"Sport",rowsGrouping:{columnGroupLabel:"Sport"}},{key:"country",name:"Country",rowsGrouping:{columnGroupLabel:"Country"}},{key:"year",name:"Year",rowsGrouping:{columnGroupLabel:"Year"}},{key:"gold",name:"Gold",rowsGrouping:{groupByColumn:!1,columnGroupLabel:"Gold",renderGroupCell({childRows:e}){return e.reduce((n,{gold:y})=>n+y,0).toString()}}},...u.map(e=>({key:String(e),name:String(e),rowsGrouping:{columnGroupLabel:`Золотые медали за ${e} год`}}))],[u]);return l.jsxDEV(R,{tableConfig:{containerStyle:{height:700},columnsControl:{enable:!0},rowsGrouping:{rowKeyGetter:e=>e.id,groupByState:[m,g],groupButton:{defaultCustomItems:[{value:"gold",label:"Gold as custom option"}]},groupedColumnProps:{width:350,renderCell:e=>e.parentGroupKey==="Russian Federation"?"Russia last lvl":e.parentGroupKey??"",rowsGrouping:{renderGroupCell(e){return e.groupKey==="Russian Federation"?"Russia":e.groupKey}}}}},columnConfig:c,rows:p},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowsGrouping/TableCanvas.rowsGrouping.stories.tsx",lineNumber:120,columnNumber:7},void 0)}},i={...v({preCode:A,previewSource:"shown"}),name:"Комбинация с другими фичами",render:()=>{const[o]=t.useState(T),[r,u]=t.useState([]),p=t.useMemo(()=>[{key:"athlete",name:"Athlete",sortingType:"stringSort",rowsGrouping:{columnGroupLabel:"Athlete"},filtering:{component:"input",filter:"includes",valueInRow:n=>n.athlete,keyInFilterState:"athlete"}},{key:"sport",name:"Sport",sortingType:"stringSort",rowsGrouping:{columnGroupLabel:"Sport"},filtering:{component:"input",filter:"includes",valueInRow:n=>n.sport,keyInFilterState:"sport"}},{key:"country",name:"Country",sortingType:"stringSort",rowsGrouping:{columnGroupLabel:"Country"},filtering:{component:"input",filter:"startWith",valueInRow:n=>n.country,keyInFilterState:"country"}},{key:"year",name:"Year",sortingType:"numberSort",rowsGrouping:{columnGroupLabel:"Year"},filtering:{component:"input",filter:"startWith",valueInRow:n=>n.year,keyInFilterState:"year"}},{key:"gold",name:"Gold",sortingType:"numberSort",rowsGrouping:{columnGroupLabel:"Gold",renderGroupCell({childRows:n}){return String(n.reduce((y,{gold:F})=>y+F,0))}}}],[]),m=t.useState([]),g=t.useState({athlete:"",sport:"",gold:"",country:"",year:""}),c=t.useState(()=>new Set),e=n=>n.id===1;return l.jsxDEV(R,{tableConfig:{rowMarkers:{startIndex:1},columnsControl:{enable:!0},containerStyle:{height:700},rowsGrouping:{rowKeyGetter:n=>n.id,groupByState:[r,u],groupedColumnProps:{name:l.jsxDEV(l.Fragment,{children:"моя группировка"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowsGrouping/TableCanvas.rowsGrouping.stories.tsx",lineNumber:276,columnNumber:21},void 0)}},resizableColumn:!0,sorting:{state:m},filtering:{state:g,clearedValue:{athlete:"",sport:"",gold:"",country:"",year:""}},selecting:{state:c,rowKeyGetter:n=>n.id,showDefault:!0,rowCheckboxDisabled:e}},columnConfig:p,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowsGrouping/TableCanvas.rowsGrouping.stories.tsx",lineNumber:263,columnNumber:7},void 0)}};var G,C,b;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  decorators: [(Story, {
    args
  }) => <Story key={String(args.manyColumns)} />],
  args: {
    manyColumns: false
  },
  argTypes: {
    manyColumns: {
      name: '24 дополнительных столбца',
      control: 'boolean'
    }
  },
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Простая группировка',
  render: ({
    manyColumns
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
        height: 700
      },
      columnsControl: {
        enable: true
      },
      rowsGrouping: {
        rowKeyGetter: r => r.id,
        groupByState: [groupByArr, setGroupByArr],
        groupButton: {
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
}`,...(b=(C=s.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var f,h,k;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(k=(h=i.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const I=["SimpleTable","MultipleFeaturesTable"],W=Object.freeze(Object.defineProperty({__proto__:null,MultipleFeaturesTable:i,SimpleTable:s,__namedExportsOrder:I,default:E},Symbol.toStringTag,{value:"Module"}));export{W as T};
