import{r,j as e}from"./react-DYHuXpTF.js";import{c as f}from"./tableData-DKA5H0bF.js";import b from"./DocStoryTemplate-C-m25YlE.js";import{s as x}from"./storySourceDoc-tVKyHcEN.js";import{C as t,T as w}from"./TableCanvas-B1EgQSWA.js";import{v as s,aE as a,am as c,aa as I}from"./@salutejs/plasma-icons-D-o9abDl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-Dy04e7eT.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-D3uL8AgQ.js";import"./@tanstack/react-virtual-DpbU78q1.js";import"./WithTooltip-KJL26V4Q-Dieti3TI.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-BkX6kR9J.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./utils-C324mS39.js";import"./constants-3UB8ZrMK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CW-5BJnR.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-Cg1cr4lG.js";import"./Box-C_lQk7q2.js";import"./Collapse-zZc0zAuA.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BTDMwK-G.js";import"./@daisforge/glide-data-grid-CnQtltGt.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-aQ644jDa.js";import"./sharedUiSearch-DepFlUD_.js";import"./TextField-DKmO_cMT.js";import"./sharedUtilsInputs-CoiSiHAi.js";import"./TypographyWithAutoTooltip-CF39c5mC.js";import"./Typography-BcsDSGcH.js";import"./ListOfFilters-BkuFS4mB.js";import"./Table-D2PmPIhJ.js";import"./react-data-grid-iaz8oMts.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Cre-Xff_.js";import"./NumberFormat-ByzSbtjI.js";import"./EmptyState-v2opkloV.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-C97lOz8u.js";import"./Autocomplete-CBzySec7.js";import"./FiltersActions-BqnuizuF.js";import"./IconButton-0ysLJmxH.js";import"./TooltipList-DjKz0BcB.js";import"./ErrorPage-DL9bipAE.js";const we={title:"Локальные компоненты/TableCanvas/SimpleTable",tags:["!autodocs"],parameters:{docs:{page:b}}},S=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,l={...x({preCode:S,previewSource:"shown"}),name:"Simple Table",render:()=>{const[m]=r.useState(f),[C,g]=r.useState(!0),v=r.useState({id:"",task:"",priority:"All",issueType:[],complete:"",date:"",globalFilter:""}),i=r.useCallback(n=>n.hovered.rowHover?{bgCell:n.theme.bgHeader}:{},[]),h=r.useMemo(()=>[{key:"id",name:"id",themeOverride:i,renderHeaderCell:({theme:n})=>e.jsxs(t.Container,{direction:"row",alignItems:"center",gap:8,padding:{left:n.cellHorizontalPadding,right:n.cellHorizontalPadding},children:[e.jsxs(t.Container,{position:"relative",children:[e.jsx(t.Icon,{icon:e.jsx(s,{})}),e.jsx(t.Icon,{position:"absolute",top:-5,right:-5,icon:e.jsx(a,{color:"#d70101",size:"xs"})})]}),e.jsxs(t.Container,{position:"relative",children:[e.jsx(t.Icon,{icon:e.jsx(c,{})}),e.jsx(t.Icon,{position:"absolute",top:-5,right:-5,icon:e.jsx(a,{color:"#d70101",size:"xs"})})]})]}),renderCell:({theme:n})=>e.jsxs(t.Container,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:8,padding:{left:n.cellHorizontalPadding,right:n.cellHorizontalPadding},children:[e.jsxs(t.Container,{position:"relative",children:[e.jsx(t.Icon,{icon:e.jsx(s,{})}),e.jsx(t.Icon,{position:"absolute",top:-5,right:-5,icon:e.jsx(a,{color:"#d70101",size:"xs"})})]}),e.jsxs(t.Container,{position:"relative",children:[e.jsx(t.Icon,{icon:e.jsx(c,{})}),e.jsx(t.Icon,{position:"absolute",top:-5,right:-5,icon:e.jsx(a,{color:"#d70101",size:"xs"})})]})]})},{key:"task",name:"Title",themeOverride:i,minWidth:200,width:250,renderCell:({row:n,theme:o})=>e.jsxs(t.Container,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:8,wrap:"wrap",padding:{left:o.cellHorizontalPadding,right:o.cellHorizontalPadding},style:{width:"100%"},children:[e.jsxs(t.Container,{direction:"column",gap:2,children:[e.jsx(t.Text,{font:o.baseFontStyle,color:o.accentFg,style:{flexGrow:1},children:n.task??"—"}),e.jsx(t.Text,{font:o.baseFontStyle,color:o.textHeader,style:{flexGrow:1},children:n.priority??"—"})]}),e.jsx(t.Button,{portalHoverEnabled:!0,variant:"secondary",onClick:()=>console.log("Подробнее по сотруднику",n.complete),children:"Подробнее"})]})},{key:"priority",name:"Priority",sortingType:"stringSort",themeOverride:i,filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:n=>n.priority,filter:{typeOfValue:"single",filteringType:(n,o)=>n!=="All"?o===n:!0}}},{key:"issueType",name:"Issue Type",themeOverride:i,filtering:{component:"input",filter:"includes",valueInRow:n=>`${n.task} ${n.id}`,keyInFilterState:"task"}},{key:"complete",name:"% Complete",themeOverride:i}],[i]),y=r.useState([]);return e.jsx(w,{tableConfig:{containerStyle:{height:"60vh"},rowSize:{default:"big",showInControl:!0},highlightActiveType:"row",fullScreenEnabled:!0,controlBlock:{customFeatures:[{value:"favorite",label:"Удалить из избранного",Icon:I,onClick:()=>{},mandatory:!0,details:{type:"switch",label:"В избранном",checked:C,onChange:n=>g(n.target.checked)}}]},filtering:{state:v,filtersInfo:{id:{label:"id",clearedValue:""},task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:""},date:{label:"Дата",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}}},sorting:{state:y}},columnConfig:h,rows:m})}};var u,p,d;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Simple Table',
  render: () => {
    const [rows] = useState(createRows);
    const [isFavorite, setIsFavorite] = useState(true);
    const filteringStateAndSetter = useState({
      id: '',
      task: '',
      priority: 'All',
      issueType: [],
      complete: '',
      date: '',
      globalFilter: ''
    });
    const themeOverride = useCallback<NonNullable<ColumnConfig<Row>['themeOverride']>>(cellInfo => {
      if (cellInfo.hovered.rowHover) {
        return {
          bgCell: cellInfo.theme.bgHeader
        };
      }
      return {};
    }, []);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'id',
      themeOverride,
      renderHeaderCell: ({
        theme
      }) => <Canvas.Container direction="row" alignItems="center" gap={8} padding={{
        left: theme.cellHorizontalPadding,
        right: theme.cellHorizontalPadding
      }}>
              <Canvas.Container position="relative">
                <Canvas.Icon icon={<IconChevronCircleDownFill />} />
                <Canvas.Icon position="absolute" top={-5} right={-5} icon={<IconBrightness0Fill color="#d70101" size="xs" />} />
              </Canvas.Container>
              <Canvas.Container position="relative">
                <Canvas.Icon icon={<IconAddOutline />} />
                <Canvas.Icon position="absolute" top={-5} right={-5} icon={<IconBrightness0Fill color="#d70101" size="xs" />} />
              </Canvas.Container>
            </Canvas.Container>,
      renderCell: ({
        theme
      }) => <Canvas.Container direction="row" alignItems="center" justifyContent="space-between" gap={8} padding={{
        left: theme.cellHorizontalPadding,
        right: theme.cellHorizontalPadding
      }}>
              <Canvas.Container position="relative">
                <Canvas.Icon icon={<IconChevronCircleDownFill />} />
                <Canvas.Icon position="absolute" top={-5} right={-5} icon={<IconBrightness0Fill color="#d70101" size="xs" />} />
              </Canvas.Container>
              <Canvas.Container position="relative">
                <Canvas.Icon icon={<IconAddOutline />} />
                <Canvas.Icon position="absolute" top={-5} right={-5} icon={<IconBrightness0Fill color="#d70101" size="xs" />} />
              </Canvas.Container>
            </Canvas.Container>
    }, {
      key: 'task',
      name: 'Title',
      themeOverride,
      minWidth: 200,
      width: 250,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container direction="row" alignItems="center" justifyContent="space-between" gap={8} wrap="wrap" padding={{
        left: theme.cellHorizontalPadding,
        right: theme.cellHorizontalPadding
      }} style={{
        width: '100%'
      }}>
              <Canvas.Container direction="column" gap={2}>
                <Canvas.Text font={theme.baseFontStyle} color={theme.accentFg} style={{
            flexGrow: 1
          }}>
                  {row.task ?? '—'}
                </Canvas.Text>
                <Canvas.Text font={theme.baseFontStyle} color={theme.textHeader} style={{
            flexGrow: 1
          }}>
                  {row.priority ?? '—'}
                </Canvas.Text>
              </Canvas.Container>
              <Canvas.Button portalHoverEnabled variant="secondary" onClick={() =>
        // eslint-disable-next-line no-console
        console.log('Подробнее по сотруднику', row.complete)}>
                Подробнее
              </Canvas.Button>
            </Canvas.Container>
    }, {
      key: 'priority',
      name: 'Priority',
      sortingType: 'stringSort',
      themeOverride,
      filtering: {
        component: 'select',
        selectOptions: {
          type: 'constant',
          options: [{
            value: 'All',
            text: 'All'
          }, {
            value: 'High',
            text: 'High'
          }, {
            value: 'Critical',
            text: 'Critical'
          }, {
            value: 'Medium',
            text: 'Medium'
          }, {
            value: 'Low',
            text: 'Low'
          }]
        },
        keyInFilterState: 'priority',
        valueInRow: r => r.priority,
        filter: {
          typeOfValue: 'single',
          filteringType: (fv, rv) => fv !== 'All' ? rv === fv : true
        }
      }
    }, {
      key: 'issueType',
      name: 'Issue Type',
      themeOverride,
      filtering: {
        component: 'input',
        filter: 'includes',
        valueInRow: r => \`\${r.task} \${r.id}\`,
        keyInFilterState: 'task'
      }
    }, {
      key: 'complete',
      name: '% Complete',
      themeOverride
    }], [themeOverride]);
    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '60vh'
      },
      rowSize: {
        default: 'big',
        showInControl: true
      },
      highlightActiveType: 'row',
      fullScreenEnabled: true,
      controlBlock: {
        customFeatures: [
        // Обязательная кастомная фича
        {
          value: 'favorite',
          label: 'Удалить из избранного',
          Icon: IconStar,
          onClick: () => {},
          mandatory: true,
          details: {
            type: 'switch',
            label: 'В избранном',
            checked: isFavorite,
            onChange: e => setIsFavorite(e.target.checked)
          }
        }]
      },
      filtering: {
        state: filteringStateAndSetter,
        filtersInfo: {
          id: {
            label: 'id',
            clearedValue: ''
          },
          task: {
            label: 'task',
            clearedValue: ''
          },
          priority: {
            label: 'Some Label',
            clearedValue: 'All'
          },
          issueType: {
            label: 'issueType',
            clearedValue: []
          },
          complete: {
            label: 'complete',
            clearedValue: ''
          },
          date: {
            label: 'Дата',
            clearedValue: ''
          },
          globalFilter: {
            label: 'Global filter',
            clearedValue: ''
          }
        }
      },
      sorting: {
        state: sortingStateAndSetter
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(d=(p=l.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const Ie=["SimpleTable"];export{l as SimpleTable,Ie as __namedExportsOrder,we as default};
