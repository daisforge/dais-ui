import{r as s,b as n}from"./react-UEdzNlUe.js";import{c as S,F as B,a as V}from"./tableData-DKA5H0bF.js";import A from"./DocStoryTemplate-NeoOpigq.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{B as m}from"./Box-CnSr-EOZ.js";import{S as I}from"./Combobox-B8bYU2ET.js";import{a as N,e as c,b as O,f as R,T as z}from"./TableCanvas-za5dS4Cx.js";import{ae as L,t as o,r as p}from"./@salutejs/sdds-finai-CrHyedOo.js";import{aa as j}from"./@salutejs/plasma-icons-DO9zHrCT.js";const M={title:"Локальные компоненты/TableCanvas/Filtering",tags:["!autodocs"],parameters:{docs:{page:A}}},$=`
import React, { useMemo, useState } from 'react';
import {
  Box,
  Button,
  Calendar,
  Combobox,
  ComboboxItemOption,
  Divider,
} from '@daisforge/ui';
import { IconStar } from '@daisforge/ui/icons';
import {
  ColumnConfig,
  TableCanvas,
  TableFilterSearch,
  TableFilterSelect,
  TableFilterSelectAll,
  TableFilterSelectListItem,
} from '@daisforge/ui/components/TableCanvas';

import { createRows, type Row } from './data/tableData';

`,i={...w({preCode:$,previewSource:"shown"}),name:"Filtering Table",render:()=>{const[v,g]=s.useState(!0),[y]=s.useState(()=>{const u=V(42);return S().map(e=>({...e,id:Math.floor(u()*1e3),date:(()=>{const t=new Date(B+(Math.floor(u()*61)-30)*864e5);return`${String(t.getDate()).padStart(2,"0")}.${String(t.getMonth()+1).padStart(2,"0")}.${t.getFullYear()}`})()}))}),T=s.useState({id:"",task:"",priority:"All",issueType:[],issueTypeCustom:[],complete:"",globalFilter:"",date:void 0}),F=s.useMemo(()=>[{key:"id",name:"id"},{key:"task",name:"Title"},{key:"date",name:"Date",filtering:{component:"custom",customRender:u=>{const{headerContextState:{filters:e,setFilters:t}}=u;return n.jsxDEV(L,{value:e==null?void 0:e.date,onChangeValue:a=>{t&&t(r=>({...r,date:a}))}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:118,columnNumber:17},void 0)},filter:(u,e)=>u?e===u:!0,valueInRow:u=>u==null?void 0:u.date,compareWithClearedValue:(u,e)=>u===e,keyInFilterState:"date"}},{key:"priority",name:"Priority",filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"Все инциденты и запросы на доработку без ограничения по срочности"},{value:"High",text:"Высокий приоритет критически важного инцидента"},{value:"Critical",text:"Критическая ошибка блокирующая работу сервиса"},{value:"Medium",text:"Средний приоритет плановой доработки функциональности"},{value:"Low",text:"Низкий приоритет косметического усовершенствования интерфейса"}]},keyInFilterState:"priority",valueInRow:u=>u.priority,filter:{typeOfValue:"single",filteringType:(u,e)=>u!=="All"?e===u:!0}}},{key:"issueType",name:"Issue Type",filtering:{listControls:"slots",beforeList({headerContextState:u}){return n.jsxDEV(n.Fragment,{children:[n.jsxDEV(N,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:186,columnNumber:19},this),n.jsxDEV(c,{as:"div",$size:u.rowSize,children:"Произвольный вспомогательный элемент заголовка списка с подсказкой сверху списка"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:187,columnNumber:19},this),n.jsxDEV(O,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:194,columnNumber:19},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:185,columnNumber:17},this)},afterList({headerContextState:u,setPopoverIsOpen:e}){return n.jsxDEV("div",{style:{display:"flex",flexWrap:"wrap",gap:4,padding:4},children:[n.jsxDEV(o,{size:"xs",view:"secondary",onClick:()=>{var t;return(t=u.setFilters)==null?void 0:t.call(u,a=>({...a,issueType:[]}))},children:"Сбросить выбор"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:208,columnNumber:19},this),n.jsxDEV(o,{size:"xs",view:"secondary",onClick:()=>e(!1),children:"Закрыть"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:220,columnNumber:19},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:200,columnNumber:17},this)},component:"select",selectOptions:{type:"stateInHeaderContext",optionsKeyInHeaderContext:"issueTypeOptions"},keyInFilterState:"issueType",valueInRow:u=>u.issueType,filter:{typeOfValue:"multiple",filteringType:(u,e)=>!u.length||u.some(t=>t===e)}}},{key:"issueTypeCustom",name:"Issue Type (custom render)       ",renderCell({row:u}){return u.issueType},filtering:{component:"custom",customRender:u=>{const{headerContextState:{filters:e,setFilters:t,rowSize:a},setPopoverIsOpen:r}=u,x=u.headerContextState.issueTypeOptions??[],[d,D]=s.useState((e==null?void 0:e.issueTypeCustom)??[]),k=()=>{t&&(t(h=>({...h,issueTypeCustom:d})),r(!1))};return n.jsxDEV(R,{mode:"multiple",value:d,onChange:D,options:x,size:a,width:"232px",beforeList:n.jsxDEV(c,{$size:a,children:"Произвольный вспомогательный элемент заголовка списка с подсказкой"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:290,columnNumber:21},void 0),afterList:n.jsxDEV(m,{$css:"position: sticky; bottom: 0; background-color: white; display: grid; gap: 4px; margin-top: 4px;",children:[n.jsxDEV(p,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:301,columnNumber:23},void 0),n.jsxDEV(o,{size:a==="small"?"xxs":"s",style:{marginLeft:"auto "},view:"accent",onClick:k,children:"Применить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:302,columnNumber:23},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:296,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:282,columnNumber:17},void 0)},filter:(u,e)=>!Array.isArray(u)||!u.length||u.some(t=>t===e),valueInRow:u=>u.issueType,compareWithClearedValue:(u,e)=>JSON.stringify(u)===JSON.stringify(e),keyInFilterState:"issueTypeCustom"}},{key:"complete",name:"% Complete"}],[]),l=s.useMemo(()=>({issueTypeOptions:[{text:"Ошибка-1212---3232-3---4343434 при формировании выписки по счету",value:"Bug"},{text:"Улучшение производительности загрузки списка документов",value:"Improvement"},{text:"Эпик крупной функциональности платежного модуля",value:"Epic"},{text:"История пользовательского сценария оформления кредита",value:"Story"}]}),[]),E=s.useMemo(()=>l.issueTypeOptions.map(u=>({value:u.value,label:u.text})),[l]);return n.jsxDEV(z,{tableConfig:{containerStyle:{height:"60vh"},rowSize:{default:"big",showInControl:!0},fullScreenEnabled:!0,controlBlock:{customFeatures:[{value:"favorite",label:"Удалить из избранного",Icon:j,onClick:()=>{},mandatory:!0,details:{type:"switch",label:"В избранном",checked:v,onChange:u=>g(u.target.checked)}}]},filtering:{state:T,sidebarConfig:{items:{issueTypeCustom:{label:"Issue Type (custom render)",customRenderFn:(u,e)=>{const[t,a]=s.useState(u.issueTypeCustom);return n.jsxDEV(I,{multiple:!0,size:"s",items:E,value:t,onChange:r=>a(r),closeAfterSelect:!1,placeholder:"Выберите Issue Type",afterList:n.jsxDEV(m,{$css:"display: grid; gap: 4px; margin-top: 4px;",children:[n.jsxDEV(p,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:423,columnNumber:29},void 0),n.jsxDEV(o,{size:"xs",view:"accent",style:{marginLeft:"auto"},onClick:()=>e(r=>({...r,issueTypeCustom:t})),children:"Применить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:424,columnNumber:29},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:422,columnNumber:27},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:413,columnNumber:23},void 0)}}}},filtersInfo:{id:{label:"id",clearedValue:""},task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},issueTypeCustom:{label:"issueTypeCustom",clearedValue:[]},complete:{label:"complete",clearedValue:""},date:{label:"Дата",clearedValue:void 0},globalFilter:{label:"Global filter",clearedValue:""}}}},columnConfig:F,rows:y,headerContextValue:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:369,columnNumber:7},void 0)}};var C,f,b;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Filtering Table',
  render: () => {
    const [isFavorite, setIsFavorite] = useState(true);
    const [rows] = useState(() => {
      const seededRandom = createSeededRandom(42);
      return createRows().map(el => ({
        ...el,
        id: Math.floor(seededRandom() * 1000),
        date: (() => {
          const date = new Date(FIXED_DATE_TIMESTAMP + (Math.floor(seededRandom() * 61) - 30) * 86400000);
          return \`\${String(date.getDate()).padStart(2, '0')}.\${String(date.getMonth() + 1).padStart(2, '0')}.\${date.getFullYear()}\`;
        })()
      }));
    });
    const filteringStateAndSetter = useState({
      id: '',
      task: '',
      priority: 'All',
      issueType: [],
      issueTypeCustom: [] as string[],
      complete: '',
      globalFilter: '',
      date: undefined as string | undefined
    });
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'id'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'date',
      name: 'Date',
      filtering: {
        component: 'custom',
        customRender: props => {
          const {
            headerContextState: {
              filters,
              setFilters
            }
          } = props;
          return <Calendar value={filters?.['date']} onChangeValue={v => {
            if (setFilters) setFilters(prev => ({
              ...prev,
              date: v
            }));
          }} />;
        },
        filter: (filterValue, rowValue) => filterValue ? rowValue === filterValue : true,
        valueInRow: r => (r as Row & {
          date: string;
        })?.date,
        compareWithClearedValue: (clearedValue, currV) => clearedValue === currV,
        keyInFilterState: 'date'
      }
    }, {
      key: 'priority',
      name: 'Priority',
      filtering: {
        component: 'select',
        selectOptions: {
          type: 'constant',
          options: [{
            value: 'All',
            text: 'Все инциденты и запросы на доработку без ограничения по срочности'
          }, {
            value: 'High',
            text: 'Высокий приоритет критически важного инцидента'
          }, {
            value: 'Critical',
            text: 'Критическая ошибка блокирующая работу сервиса'
          }, {
            value: 'Medium',
            text: 'Средний приоритет плановой доработки функциональности'
          }, {
            value: 'Low',
            text: 'Низкий приоритет косметического усовершенствования интерфейса'
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
      filtering: {
        listControls: 'slots',
        beforeList({
          headerContextState
        }) {
          return <>
                  <TableFilterSearch />
                  <TableFilterSelectListItem as="div" $size={headerContextState.rowSize}>
                    Произвольный вспомогательный элемент заголовка списка с
                    подсказкой сверху списка
                  </TableFilterSelectListItem>
                  <TableFilterSelectAll />
                </>;
        },
        afterList({
          headerContextState,
          setPopoverIsOpen
        }) {
          return <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            padding: 4
          }}>
                  <Button size="xs" view="secondary" onClick={() => headerContextState.setFilters?.(prev => ({
              ...prev,
              issueType: []
            }))}>
                    Сбросить выбор
                  </Button>
                  <Button size="xs" view="secondary" onClick={() => setPopoverIsOpen(false)}>
                    Закрыть
                  </Button>
                </div>;
        },
        component: 'select',
        selectOptions: {
          type: 'stateInHeaderContext',
          optionsKeyInHeaderContext: 'issueTypeOptions'
        },
        keyInFilterState: 'issueType',
        valueInRow: r => r.issueType,
        filter: {
          typeOfValue: 'multiple',
          filteringType: (fv, rv) => !fv.length || fv.some(fvCurr => fvCurr === rv)
        }
      }
    }, {
      key: 'issueTypeCustom',
      name: 'Issue Type (custom render)       ',
      renderCell({
        row
      }) {
        return row.issueType;
      },
      filtering: {
        component: 'custom',
        customRender: props => {
          const {
            headerContextState: {
              filters,
              setFilters,
              rowSize
            },
            setPopoverIsOpen
          } = props;
          // Опции для выпадашки берутся из headerContextValue (см. headerContextValue ниже)
          const headerContextState = props.headerContextState as Record<string, unknown>;
          const issueTypeOptions = (headerContextState.issueTypeOptions ?? []) as {
            text: string;
            value: string;
          }[];

          // Локальный черновик выбранных значений: меняется при кликах по айтемам,
          // а в реальный стейт фильтров попадает по кнопке «Применить» (afterList).
          const [draftValue, setDraftValue] = useState<string[]>(filters?.['issueTypeCustom'] as string[] | undefined ?? []);
          const apply = () => {
            if (setFilters) {
              setFilters(prev => ({
                ...prev,
                issueTypeCustom: draftValue
              }));
              setPopoverIsOpen(false);
            }
          };
          return <TableFilterSelect mode="multiple" value={draftValue} onChange={setDraftValue} options={issueTypeOptions} size={rowSize} width="232px" beforeList={<TableFilterSelectListItem $size={rowSize}>
                      Произвольный вспомогательный элемент заголовка списка с
                      подсказкой
                    </TableFilterSelectListItem>} afterList={<Box $css={\`position: sticky; bottom: 0; background-color: white; display: grid; gap: \${rowSize === 'big' ? '4px' : '4px'}; margin-top: 4px;\`}>
                      <Divider />
                      <Button size={rowSize === 'small' ? 'xxs' : 's'} style={{
              marginLeft: 'auto '
            }} view="accent" onClick={apply}>
                        Применить
                      </Button>
                    </Box>} />;
        },
        filter: (filterValue, rowValue) => !Array.isArray(filterValue) || !(filterValue as string[]).length || (filterValue as string[]).some(fvCurr => fvCurr === rowValue),
        valueInRow: r => r.issueType,
        compareWithClearedValue: (clearedValue, currV) => JSON.stringify(clearedValue) === JSON.stringify(currV),
        keyInFilterState: 'issueTypeCustom'
      }
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    const headerContextValue = useMemo(() => ({
      issueTypeOptions: [{
        // Ошибка-1212---3232-3---4343434 - для визуальной проверки длинных текстов без пробелов
        text: 'Ошибка-1212---3232-3---4343434 при формировании выписки по счету',
        value: 'Bug'
      }, {
        text: 'Улучшение производительности загрузки списка документов',
        value: 'Improvement'
      }, {
        text: 'Эпик крупной функциональности платежного модуля',
        value: 'Epic'
      }, {
        text: 'История пользовательского сценария оформления кредита',
        value: 'Story'
      }]
    }), []);

    // Combobox из sdds-finai ожидает items в формате { value, label }.
    const sidebarIssueTypeOptions = useMemo<ComboboxItemOption[]>(() => headerContextValue.issueTypeOptions.map(option => ({
      value: option.value,
      label: option.text
    })), [headerContextValue]);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '60vh'
      },
      rowSize: {
        default: 'big',
        showInControl: true
      },
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
        sidebarConfig: {
          items: {
            // Переопределяем рендер колоночного фильтра именно для сайдбара:
            // колоночный customRender остаётся в поповере шапки.
            issueTypeCustom: {
              label: 'Issue Type (custom render)',
              customRenderFn: (filters, setFilters) => {
                // Хуки здесь допустимы: customRenderFn рендерится как
                // компонент (см. RenderSlot в feature-filtering).
                // Черновик выбора уезжает в фильтры сайдбара по кнопке
                // «Применить» внутри выпадающего списка (afterList).
                const [draftValue, setDraftValue] = useState<string[]>(filters.issueTypeCustom);
                return <Combobox multiple size="s" items={sidebarIssueTypeOptions} value={draftValue} onChange={(next: string[]) => setDraftValue(next)} closeAfterSelect={false} placeholder="Выберите Issue Type" afterList={<Box $css="display: grid; gap: 4px; margin-top: 4px;">
                            <Divider />
                            <Button size="xs" view="accent" style={{
                    marginLeft: 'auto'
                  }} onClick={() => setFilters(prev => ({
                    ...prev,
                    issueTypeCustom: draftValue
                  }))}>
                              Применить
                            </Button>
                          </Box>} />;
              }
            }
          }
        },
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
          issueTypeCustom: {
            label: 'issueTypeCustom',
            clearedValue: []
          },
          complete: {
            label: 'complete',
            clearedValue: ''
          },
          date: {
            label: 'Дата',
            clearedValue: undefined
          },
          globalFilter: {
            label: 'Global filter',
            clearedValue: ''
          }
        }
      }
    }} columnConfig={columnConfig} rows={rows} headerContextValue={headerContextValue} />;
  }
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const P=["FilteringTable"],U=Object.freeze(Object.defineProperty({__proto__:null,FilteringTable:i,__namedExportsOrder:P,default:M},Symbol.toStringTag,{value:"Module"}));export{U as T};
