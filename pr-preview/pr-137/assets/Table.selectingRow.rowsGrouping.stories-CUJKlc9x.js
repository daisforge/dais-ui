import{r as s,j as b}from"./react-CAOzMBF_.js";import B from"./DocStoryTemplate-Cf946dgV.js";import{s as R}from"./storySourceDoc-tVKyHcEN.js";import{f as A}from"./Table-BQHrw1K6.js";import{c as K}from"./dataRowGrouping-0JMPVnJT.js";const X={title:"Локальные компоненты/Table/SelectingRow/Пример кастомного выбора строк в группированной таблице",tags:["!autodocs"],parameters:{docs:{page:B}}},k=`
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
`,o={name:"Пример кастомного выбора строк в группированной таблице",...R({preCode:k,previewSource:"shown"}),render:()=>{const[w]=s.useState(K),[m,G]=s.useState([]),h=s.useMemo(()=>[{key:"athlete",name:"Athlete",rowsGrouping:{columnGroupLabel:"Athlete"}},{key:"sport",name:"Sport",rowsGrouping:{columnGroupLabel:"Sport"}},{key:"country",name:"Country",rowsGrouping:{columnGroupLabel:"Country"}},{key:"year",name:"Year",rowsGrouping:{columnGroupLabel:"Year"}},{key:"gold",name:"Gold",rowsGrouping:{groupByColumn:!1,columnGroupLabel:"Gold",renderGroupCell({childRows:e}){return e.reduce((r,{gold:t})=>r+t,0)}}}],[]),S=s.useState(()=>new Set);return b.jsx(A,{tableConfig:{containerStyle:{height:700},selecting:{state:S,rowKeyGetter:e=>e.id,groupedRow:{getStates({row:e,selectedRows:r}){return e.groupByKey==="country"?{checked:r.has(e.groupKey),indeterminate:!1}:null},onChange({checked:e,row:r,setSelectedRows:t,defaultSetter:f}){const a=(p,c)=>{var i;const n=p.childGroups;if(!(!n||!(n!=null&&n.length))){if(((i=n[0])==null?void 0:i.groupByKey)==="country"){t(u=>{const l=new Set(u);return n.forEach(C=>l[e?"delete":"add"](C.groupKey)),l});return}n.forEach(u=>{!u.childGroups||!(n!=null&&n.length)||a(u)})}};if(r.groupByKey==="country"){t(p=>{const c=new Set(p);return c[e?"delete":"add"](r.groupKey),c});return}a(r),f()}}},rowsGrouping:{rowKeyGetter:e=>e.id,groupByState:[m,G],expandAllBtn:{expandedAll({allRowsIds:e,shownRows:r}){return(e==null?void 0:e.size)===r.length}}}},columnConfig:h,rows:w})}};var g,y,d;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Пример кастомного выбора строк в группированной таблице',
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
          }) => prev + gold, 0);
        }
      }
    }], []);
    const selectingRowStateAndSetter = useState((): ReadonlySet<string | number> => new Set());
    return <Table tableConfig={{
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
}`,...(d=(y=o.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};const v=["SelectingRow"],T=Object.freeze(Object.defineProperty({__proto__:null,SelectingRow:o,__namedExportsOrder:v,default:X},Symbol.toStringTag,{value:"Module"}));export{T};
