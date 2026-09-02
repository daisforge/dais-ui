import{r as t,d as l}from"./react-D2T61mpp.js";import x from"./DocStoryTemplate-DqVM6KeB.js";import{s as h}from"./storySourceDoc-tVKyHcEN.js";import{T as k}from"./TableCanvas-DzdKK5OS.js";import{b as B}from"./tableData-UCfjiBCh.js";const I=B(42);function u(o){const{min:e=0,max:a=100}=o??{};return Math.floor(I()*(a-e+1))+e}const m=["Swimming","Gymnastics","Speed Skating","Cross Country Skiing","Short-Track Speed Skating","Diving","Cycling","Biathlon","Alpine Skiing","Ski Jumping","Nordic Combined","Athletics","Table Tennis","Tennis","Synchronized Swimming","Shooting","Rowing","Fencing","Equestrian","Canoeing","Bobsleigh","Badminton","Archery","Wrestling","Weightlifting","Waterpolo","Wrestling","Weightlifting"],d=["United States","Russian Federation","United Kingdom","France","Belgium","Germany","China","Japan","Korean"],y=m.map(o=>["Mr. ","Ms. "][u({max:1})]+o);function v(){const o=[];for(let e=1;e<10001;e++)o.push({id:e,year:2015+u({max:3}),country:d[u({max:d.length-1})],sport:m[u({max:m.length-1})],athlete:y[u({max:y.length-1})],gold:u({max:5}),silver:u({max:5}),bronze:u({max:5})});return o.sort((e,a)=>a.country.localeCompare(e.country))}const L={title:"Локальные компоненты/TableCanvas/RowsGrouping",tags:["!autodocs"],parameters:{docs:{page:x}}},R=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,s={...h({preCode:R,previewSource:"shown"}),name:"Простая группировка",render:()=>{const[o]=t.useState(v),[e,a]=t.useState([]),p=t.useMemo(()=>[{key:"athlete",name:"Athlete",rowsGrouping:{columnGroupLabel:"Athlete"}},{key:"sport",name:"Sport",rowsGrouping:{columnGroupLabel:"Sport"}},{key:"country",name:"Country",rowsGrouping:{columnGroupLabel:"Country"}},{key:"year",name:"Year",rowsGrouping:{columnGroupLabel:"Year"}},{key:"gold",name:"Gold",rowsGrouping:{groupByColumn:!1,columnGroupLabel:"Gold",renderGroupCell({childRows:r}){return r.reduce((g,{gold:c})=>g+c,0).toString()}}}],[]);return l.jsxDEV(k,{tableConfig:{containerStyle:{height:700},columnsControl:{enable:!0},rowsGrouping:{rowKeyGetter:r=>r.id,groupByState:[e,a],groupButton:{defaultCustomItems:[{value:"gold",label:"Gold as custom option"}]},groupedColumnProps:{width:350,renderCell:r=>r.parentGroupKey==="Russian Federation"?"Russia last lvl":r.parentGroupKey??"",rowsGrouping:{renderGroupCell(r){return r.groupKey==="Russian Federation"?"Russia":r.groupKey}}}}},columnConfig:p,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowsGrouping/TableCanvas.rowsGrouping.stories.tsx",lineNumber:93,columnNumber:7},void 0)}},i={...h({preCode:R,previewSource:"shown"}),name:"Комбинация с другими фичами",render:()=>{const[o]=t.useState(v),[e,a]=t.useState([]),p=t.useMemo(()=>[{key:"athlete",name:"Athlete",sortingType:"stringSort",rowsGrouping:{columnGroupLabel:"Athlete"},filtering:{component:"input",filter:"includes",valueInRow:n=>n.athlete,keyInFilterState:"athlete"}},{key:"sport",name:"Sport",sortingType:"stringSort",rowsGrouping:{columnGroupLabel:"Sport"},filtering:{component:"input",filter:"includes",valueInRow:n=>n.sport,keyInFilterState:"sport"}},{key:"country",name:"Country",sortingType:"stringSort",rowsGrouping:{columnGroupLabel:"Country"},filtering:{component:"input",filter:"startWith",valueInRow:n=>n.country,keyInFilterState:"country"}},{key:"year",name:"Year",sortingType:"numberSort",rowsGrouping:{columnGroupLabel:"Year"},filtering:{component:"input",filter:"startWith",valueInRow:n=>n.year,keyInFilterState:"year"}},{key:"gold",name:"Gold",sortingType:"numberSort",rowsGrouping:{columnGroupLabel:"Gold",renderGroupCell({childRows:n}){return String(n.reduce((A,{gold:F})=>A+F,0))}}}],[]),r=t.useState([]),g=t.useState({athlete:"",sport:"",gold:"",country:"",year:""}),c=t.useState(()=>new Set),T=n=>n.id===1;return l.jsxDEV(k,{tableConfig:{rowMarkers:{startIndex:1},columnsControl:{enable:!0},containerStyle:{height:700},rowsGrouping:{rowKeyGetter:n=>n.id,groupByState:[e,a],groupedColumnProps:{name:l.jsxDEV(l.Fragment,{children:"моя группировка"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowsGrouping/TableCanvas.rowsGrouping.stories.tsx",lineNumber:249,columnNumber:21},void 0)}},resizableColumn:!0,sorting:{state:r},filtering:{state:g,clearedValue:{athlete:"",sport:"",gold:"",country:"",year:""}},selecting:{state:c,rowKeyGetter:n=>n.id,showDefault:!0,rowCheckboxDisabled:T}},columnConfig:p,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowsGrouping/TableCanvas.rowsGrouping.stories.tsx",lineNumber:236,columnNumber:7},void 0)}};var S,w,G;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Простая группировка',
  render: () => {
    const [rows] = useState(createRowsForGrouping);
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
    }], []);
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
}`,...(G=(w=s.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var C,b,f;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const K=["SimpleTable","MultipleFeaturesTable"],Y=Object.freeze(Object.defineProperty({__proto__:null,MultipleFeaturesTable:i,SimpleTable:s,__namedExportsOrder:K,default:L},Symbol.toStringTag,{value:"Module"}));export{Y as T};
