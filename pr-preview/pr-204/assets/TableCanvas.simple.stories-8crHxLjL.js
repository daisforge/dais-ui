import{r as s,b as e}from"./react-UEdzNlUe.js";import{c as g}from"./tableData-DKA5H0bF.js";import k from"./DocStoryTemplate-B1u7dqTk.js";import{s as h}from"./storySourceDoc-tVKyHcEN.js";import{C as a,T as y}from"./TableCanvas-e-kICASA.js";import{E as l,aE as r,am as u,aa as x}from"./@salutejs/plasma-icons-BvdYvZ49.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-BjJ6Dniq.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-DEOLQzLG.js";import"./@tanstack/react-virtual-CarK5-pf.js";import"./WithTooltip-KJL26V4Q-EsghDtie.js";import"./preload-helper-Cro6n4mv.js";import"./index-Cu4lwwaE.js";import"./index-BWFFZcAS.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./utils-JpoKTq_4.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CrHyedOo.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-qQzmLoyi.js";import"./Box-CnSr-EOZ.js";import"./Collapse-dO_AAhkR.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./TableGlide-2ryMzJhz.js";import"./@daisforge/glide-data-grid-C4IsfJNb.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUtilsSearch-blgVacgU.js";import"./TableTabs-D8Dn7Hjz.js";import"./sharedUiSearch-ciLugbIZ.js";import"./TextField-D7c24dZh.js";import"./sharedUtilsInputs-C44yd4VS.js";import"./Typography-CbUXrNRB.js";import"./ListOfFilters-BAMQEU-g.js";import"./FiltersActions-DfAicICl.js";import"./IconButton-CK254hgH.js";import"./Tooltip-s8-CWCyN.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-B8bYU2ET.js";import"./NumberFormat-kE1ol754.js";import"./EmptyState-B43KQCqF.js";import"./unidentified@3x-B3LEnvq5.js";import"./ErrorPage-CHRrmhnn.js";import"./Autocomplete-2PUvk-Tm.js";const ge={title:"Локальные компоненты/TableCanvas/SimpleTable",tags:["!autodocs"],parameters:{docs:{page:k}}},N=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,t={...h({preCode:N,previewSource:"shown"}),name:"Simple Table",render:()=>{const[b]=s.useState(g),[p,v]=s.useState(!0),C=s.useState({id:"",task:"",priority:"All",issueType:[],complete:"",date:"",globalFilter:""}),o=s.useCallback(n=>n.hovered.rowHover?{bgCell:n.theme.bgHeader}:{},[]),f=s.useMemo(()=>[{key:"id",name:"id",themeOverride:o,renderHeaderCell:({theme:n})=>e.jsxDEV(a.Container,{direction:"row",alignItems:"center",gap:8,padding:{left:n.cellHorizontalPadding,right:n.cellHorizontalPadding},children:[e.jsxDEV(a.Container,{position:"relative",children:[e.jsxDEV(a.Icon,{icon:e.jsxDEV(l,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:82,columnNumber:36},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:82,columnNumber:17},void 0),e.jsxDEV(a.Icon,{position:"absolute",top:-5,right:-5,icon:e.jsxDEV(r,{color:"#d70101",size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:87,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:83,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:81,columnNumber:15},void 0),e.jsxDEV(a.Container,{position:"relative",children:[e.jsxDEV(a.Icon,{icon:e.jsxDEV(u,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:91,columnNumber:36},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:91,columnNumber:17},void 0),e.jsxDEV(a.Icon,{position:"absolute",top:-5,right:-5,icon:e.jsxDEV(r,{color:"#d70101",size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:96,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:92,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:90,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:72,columnNumber:13},void 0),renderCell:({theme:n})=>e.jsxDEV(a.Container,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:8,padding:{left:n.cellHorizontalPadding,right:n.cellHorizontalPadding},children:[e.jsxDEV(a.Container,{position:"relative",children:[e.jsxDEV(a.Icon,{icon:e.jsxDEV(l,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:113,columnNumber:36},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:113,columnNumber:17},void 0),e.jsxDEV(a.Icon,{position:"absolute",top:-5,right:-5,icon:e.jsxDEV(r,{color:"#d70101",size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:118,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:114,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:112,columnNumber:15},void 0),e.jsxDEV(a.Container,{position:"relative",children:[e.jsxDEV(a.Icon,{icon:e.jsxDEV(u,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:122,columnNumber:36},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:122,columnNumber:17},void 0),e.jsxDEV(a.Icon,{position:"absolute",top:-5,right:-5,icon:e.jsxDEV(r,{color:"#d70101",size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:127,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:123,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:121,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:102,columnNumber:13},void 0)},{key:"task",name:"Title",themeOverride:o,minWidth:200,width:250,renderCell:({row:n,theme:i})=>e.jsxDEV(a.Container,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:8,wrap:"wrap",padding:{left:i.cellHorizontalPadding,right:i.cellHorizontalPadding},style:{width:"100%"},children:[e.jsxDEV(a.Container,{direction:"column",gap:2,children:[e.jsxDEV(a.Text,{font:i.baseFontStyle,color:i.accentFg,style:{flexGrow:1},children:n.task??"—"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:153,columnNumber:17},void 0),e.jsxDEV(a.Text,{font:i.baseFontStyle,color:i.textHeader,style:{flexGrow:1},children:n.priority??"—"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:160,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:152,columnNumber:15},void 0),e.jsxDEV(a.Button,{portalHoverEnabled:!0,variant:"secondary",onClick:()=>console.log("Подробнее по сотруднику",n.complete),children:"Подробнее"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:168,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:140,columnNumber:13},void 0)},{key:"priority",name:"Priority",sortingType:"stringSort",themeOverride:o,filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:n=>n.priority,filter:{typeOfValue:"single",filteringType:(n,i)=>n!=="All"?i===n:!0}}},{key:"issueType",name:"Issue Type",themeOverride:o,filtering:{component:"input",filter:"includes",valueInRow:n=>`${n.task} ${n.id}`,keyInFilterState:"task"}},{key:"complete",name:"% Complete",themeOverride:o}],[o]),T=s.useState([]);return e.jsxDEV(y,{tableConfig:{containerStyle:{height:"60vh"},rowSize:{default:"big",showInControl:!0},highlightActiveType:"row",fullScreenEnabled:!0,controlBlock:{customFeatures:[{value:"favorite",label:"Удалить из избранного",Icon:x,onClick:()=>{},mandatory:!0,details:{type:"switch",label:"В избранном",checked:p,onChange:n=>v(n.target.checked)}}]},filtering:{state:C,filtersInfo:{id:{label:"id",clearedValue:""},task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:""},date:{label:"Дата",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}}},sorting:{state:T}},columnConfig:f,rows:b},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SimpleTable/TableCanvas.simple.stories.tsx",lineNumber:232,columnNumber:7},void 0)}};var m,d,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const ke=["SimpleTable"];export{t as SimpleTable,ke as __namedExportsOrder,ge as default};
