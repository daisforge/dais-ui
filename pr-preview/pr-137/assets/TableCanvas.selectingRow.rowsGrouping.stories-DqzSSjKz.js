import{r as l,j as K}from"./react-CAOzMBF_.js";import k from"./DocStoryTemplate-Cf946dgV.js";import{s as v}from"./storySourceDoc-tVKyHcEN.js";import{T as x}from"./TableCanvas-DlX-Wh2b.js";import{b as X}from"./tableData-DVJFoYoT.js";const E=X(42);function u(t){const{min:n=0,max:s=100}=t??{};return Math.floor(E()*(s-n+1))+n}const y=["Swimming","Gymnastics","Speed Skating","Cross Country Skiing","Short-Track Speed Skating","Diving","Cycling","Biathlon","Alpine Skiing","Ski Jumping","Nordic Combined","Athletics","Table Tennis","Tennis","Synchronized Swimming","Shooting","Rowing","Fencing","Equestrian","Canoeing","Bobsleigh","Badminton","Archery","Wrestling","Weightlifting","Waterpolo","Wrestling","Weightlifting"],h=["United States","Russian Federation","United Kingdom","France","Belgium","Germany","China","Japan","Korean"],S=y.map(t=>["Mr. ","Ms. "][u({max:1})]+t);function T(){const t=[];for(let n=1;n<10001;n++)t.push({id:n,year:2015+u({max:3}),country:h[u({max:h.length-1})],sport:y[u({max:y.length-1})],athlete:S[u({max:S.length-1})],gold:u({max:5}),silver:u({max:5}),bronze:u({max:5})});return t.sort((n,s)=>s.country.localeCompare(n.country))}const F={title:"Локальные компоненты/TableCanvas/SelectingRow/Пример кастомного выбора строк в группированной таблице",tags:["!autodocs"],parameters:{docs:{page:k}}},L=`
interface RowForGrouping {
  id: number;
  country: string;
  year: number;
  sport: string;
  athlete: string;
  gold: number;
  silver: number;
  bronze: number;
}
`,a={name:"Пример кастомного выбора строк в группированной таблице",tags:["!autodocs"],...v({preCode:L,previewSource:"shown"}),render:()=>{const[t]=l.useState(T),[n,s]=l.useState([]),b=l.useMemo(()=>[{key:"athlete",name:"Athlete",rowsGrouping:{columnGroupLabel:"Athlete"}},{key:"sport",name:"Sport",rowsGrouping:{columnGroupLabel:"Sport"}},{key:"country",name:"Country",rowsGrouping:{columnGroupLabel:"Country"}},{key:"year",name:"Year",rowsGrouping:{columnGroupLabel:"Year"}},{key:"gold",name:"Gold",rowsGrouping:{groupByColumn:!1,columnGroupLabel:"Gold",renderGroupCell({childRows:e}){return e.reduce((o,{gold:i})=>o+i,0).toString()}}}],[]),B=l.useState(()=>new Set);return K.jsx(x,{tableConfig:{containerStyle:{height:700},selecting:{state:B,rowKeyGetter:e=>e.id,groupedRow:{getStates({row:e,selectedRows:o}){return e.groupByKey==="country"?{checked:o.has(e.groupKey),indeterminate:!1}:null},onChange({checked:e,row:o,setSelectedRows:i,defaultSetter:R}){const m=(p,g)=>{var w;const r=p.childGroups;if(!(!r||!(r!=null&&r.length))){if(((w=r[0])==null?void 0:w.groupByKey)==="country"){i(c=>{const d=new Set(c);return r.forEach(A=>d[e?"delete":"add"](A.groupKey)),d});return}r.forEach(c=>{!c.childGroups||!(r!=null&&r.length)||m(c)})}};if(o.groupByKey==="country"){i(p=>{const g=new Set(p);return g[e?"delete":"add"](o.groupKey),g});return}m(o),R()}}},rowsGrouping:{rowKeyGetter:e=>e.id,groupByState:[n,s],expandAllBtn:{expandedAll({allRowsIds:e,shownRows:o}){return(e==null?void 0:e.size)===o.length}}}},columnConfig:b,rows:t})}};var G,f,C;a.parameters={...a.parameters,docs:{...(G=a.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Пример кастомного выбора строк в группированной таблице',
  tags: ['!autodocs'],
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
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
    const selectingRowStateAndSetter = useState((): ReadonlySet<string | number> => new Set());
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 700
      },
      selecting: {
        state: selectingRowStateAndSetter,
        rowKeyGetter: r => r.id,
        groupedRow: {
          getStates({
            row,
            selectedRows
          }) {
            if (row.groupByKey === 'country') {
              return {
                checked: selectedRows.has(row.groupKey),
                indeterminate: false
              };
            }
            return null;
          },
          onChange({
            checked,
            row,
            setSelectedRows,
            defaultSetter
          }) {
            const recursive = (rowX: typeof row, groupByKeyX: string) => {
              const childGroupsX = rowX.childGroups as (typeof row)[];
              if (!childGroupsX || !childGroupsX?.length) {
                return;
              }
              if (childGroupsX[0]?.groupByKey === 'country') {
                setSelectedRows(prev => {
                  const copy = new Set(prev);
                  childGroupsX.forEach(groupRow => copy[checked ? 'delete' : 'add'](groupRow.groupKey));
                  return copy;
                });
                return;
              }
              childGroupsX.forEach(groupX => {
                const newChildGroupsX = groupX.childGroups as (typeof row)[];
                if (!newChildGroupsX || !childGroupsX?.length) {
                  return;
                }
                recursive(groupX, groupByKeyX);
              });
            };
            if (row.groupByKey === 'country') {
              setSelectedRows(prev => {
                const copy = new Set(prev);
                copy[checked ? 'delete' : 'add'](row.groupKey);
                return copy;
              });
              return;
            }
            recursive(row, 'country');
            defaultSetter();
          }
        }
      },
      rowsGrouping: {
        rowKeyGetter: r => r.id,
        groupByState: [groupByArr, setGroupByArr],
        expandAllBtn: {
          expandedAll({
            allRowsIds,
            shownRows
          }) {
            return allRowsIds?.size === shownRows.length;
          }
        }
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(C=(f=a.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const D=["SelectingRow"],Y=Object.freeze(Object.defineProperty({__proto__:null,SelectingRow:a,__namedExportsOrder:D,default:F},Symbol.toStringTag,{value:"Module"}));export{Y as T};
