import{r as o,b as p}from"./react-UEdzNlUe.js";import B from"./DocStoryTemplate-Ci6gdKWw.js";import{s as R}from"./storySourceDoc-tVKyHcEN.js";import{T}from"./TableCanvas-Tli90g5r.js";import{a as x}from"./tableData-DKA5H0bF.js";const E=x(42);function a(r){const{min:e=0,max:t=100}=r??{};return Math.floor(E()*(t-e+1))+e}const S=["Swimming","Gymnastics","Speed Skating","Cross Country Skiing","Short-Track Speed Skating","Diving","Cycling","Biathlon","Alpine Skiing","Ski Jumping","Nordic Combined","Athletics","Table Tennis","Tennis","Synchronized Swimming","Shooting","Rowing","Fencing","Equestrian","Canoeing","Bobsleigh","Badminton","Archery","Wrestling","Weightlifting","Waterpolo","Wrestling","Weightlifting"],w=["United States","Russian Federation","United Kingdom","France","Belgium","Germany","China","Japan","Korean"],G=S.map(r=>["Mr. ","Ms. "][a({max:1})]+r);function A(){const r=[];for(let e=1;e<10001;e++)r.push({id:e,year:2015+a({max:3}),country:w[a({max:w.length-1})],sport:S[a({max:S.length-1})],athlete:G[a({max:G.length-1})],gold:a({max:5}),silver:a({max:5}),bronze:a({max:5})});return r.sort((e,t)=>t.country.localeCompare(e.country))}const I={title:"Локальные компоненты/TableCanvas/RowsGrouping",tags:["!autodocs"],parameters:{docs:{page:B}}},F=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,l={decorators:[(r,{args:e})=>p.jsxDEV(r,{},String(e.manyColumns),!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowsGrouping/TableCanvas.rowsGrouping.stories.tsx",lineNumber:34,columnNumber:37},void 0)],args:{manyColumns:!1,narrowPanel:!1},argTypes:{manyColumns:{name:"24 дополнительных столбца",control:"boolean"},narrowPanel:{name:"Узкая панель",control:"boolean"}},...R({preCode:F,previewSource:"shown"}),name:"Простая группировка",render:({manyColumns:r,narrowPanel:e})=>{const[t]=o.useState(A),s=o.useMemo(()=>r?Array.from({length:24},(n,u)=>2e3+u):[],[r]),g=o.useMemo(()=>t.map(n=>({...n,...Object.fromEntries(s.map(u=>[String(u),n.year===u?n.gold:0]))})),[t,s]),[c,m]=o.useState([]),d=o.useMemo(()=>[{key:"athlete",name:"Athlete",rowsGrouping:{columnGroupLabel:"Athlete"}},{key:"sport",name:"Sport",rowsGrouping:{columnGroupLabel:"Sport"}},{key:"country",name:"Country",rowsGrouping:{columnGroupLabel:"Country"}},{key:"year",name:"Year",rowsGrouping:{columnGroupLabel:"Year"}},{key:"gold",name:"Gold",rowsGrouping:{groupByColumn:!1,columnGroupLabel:"Gold",renderGroupCell({childRows:n}){return n.reduce((u,{gold:y})=>u+y,0).toString()}}},...s.map(n=>({key:String(n),name:String(n),rowsGrouping:{columnGroupLabel:`Золотые медали за ${n} год`}}))],[s]);return p.jsxDEV(T,{tableConfig:{containerStyle:{height:700,maxWidth:e?168:void 0},fullScreenEnabled:e,controlBlock:e?{rightSideInner:[{text:"Сбросить группировку",onClick:()=>m([])}]}:void 0,columnsControl:{enable:!0},rowsGrouping:{rowKeyGetter:n=>n.id,groupByState:[c,m],groupButton:{defaultCustomItems:[{value:"gold",label:"Gold as custom option"}]},groupedColumnProps:{width:350,renderCell:n=>n.parentGroupKey==="Russian Federation"?"Russia last lvl":n.parentGroupKey??"",rowsGrouping:{renderGroupCell(n){return n.groupKey==="Russian Federation"?"Russia":n.groupKey}}}}},columnConfig:d,rows:g},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowsGrouping/TableCanvas.rowsGrouping.stories.tsx",lineNumber:124,columnNumber:7},void 0)}},i={...R({preCode:F,previewSource:"shown"}),name:"Комбинация с другими фичами",render:()=>{const[r]=o.useState(A),[e,t]=o.useState([]),s=o.useMemo(()=>[{key:"athlete",name:"Athlete",sortingType:"stringSort",rowsGrouping:{columnGroupLabel:"Athlete"},filtering:{component:"input",filter:"includes",valueInRow:n=>n.athlete,keyInFilterState:"athlete"}},{key:"sport",name:"Sport",sortingType:"stringSort",rowsGrouping:{columnGroupLabel:"Sport"},filtering:{component:"input",filter:"includes",valueInRow:n=>n.sport,keyInFilterState:"sport"}},{key:"country",name:"Country",sortingType:"stringSort",rowsGrouping:{columnGroupLabel:"Country"},filtering:{component:"input",filter:"startWith",valueInRow:n=>n.country,keyInFilterState:"country"}},{key:"year",name:"Year",sortingType:"numberSort",rowsGrouping:{columnGroupLabel:"Year"},filtering:{component:"input",filter:"startWith",valueInRow:n=>n.year,keyInFilterState:"year"}},{key:"gold",name:"Gold",sortingType:"numberSort",rowsGrouping:{columnGroupLabel:"Gold",renderGroupCell({childRows:n}){return String(n.reduce((u,{gold:y})=>u+y,0))}}}],[]),g=o.useState([]),c=o.useState({athlete:"",sport:"",gold:"",country:"",year:""}),m=o.useState(()=>new Set),d=n=>n.id===1;return p.jsxDEV(T,{tableConfig:{rowMarkers:{startIndex:1},columnsControl:{enable:!0},containerStyle:{height:700},rowsGrouping:{rowKeyGetter:n=>n.id,groupByState:[e,t],groupedColumnProps:{name:p.jsxDEV(p.Fragment,{children:"моя группировка"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowsGrouping/TableCanvas.rowsGrouping.stories.tsx",lineNumber:294,columnNumber:21},void 0)}},resizableColumn:!0,sorting:{state:g},filtering:{state:c,clearedValue:{athlete:"",sport:"",gold:"",country:"",year:""}},selecting:{state:m,rowKeyGetter:n=>n.id,showDefault:!0,rowCheckboxDisabled:d}},columnConfig:s,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowsGrouping/TableCanvas.rowsGrouping.stories.tsx",lineNumber:281,columnNumber:7},void 0)}};var C,b,f;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  decorators: [(Story, {
    args
  }) => <Story key={String(args.manyColumns)} />],
  args: {
    manyColumns: false,
    narrowPanel: false
  },
  argTypes: {
    manyColumns: {
      name: '24 дополнительных столбца',
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
    narrowPanel
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
          onClick: () => setGroupByArr([])
        }]
      } : undefined,
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
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var h,k,v;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(k=i.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const L=["SimpleTable","MultipleFeaturesTable"],W=Object.freeze(Object.defineProperty({__proto__:null,MultipleFeaturesTable:i,SimpleTable:l,__namedExportsOrder:L,default:I},Symbol.toStringTag,{value:"Module"}));export{W as T};
