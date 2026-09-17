import{r as s,d as n}from"./react-D2T61mpp.js";import{c as k,F as B,b as A}from"./tableData-DVJFoYoT.js";import V from"./DocStoryTemplate-nAcH3mrW.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{B as m}from"./Box-C8Yh-673.js";import{S as I}from"./Table-1rySoD_V.js";import{b as l,c as N,T as O}from"./TableCanvas-BndDNYzZ.js";import{ae as R,a as p,b as c}from"./@salutejs/sdds-finai-DxqN957p.js";import{tX as L}from"./@salutejs/plasma-icons-D_Q3trqb.js";const z={title:"Локальные компоненты/TableCanvas/Filtering",tags:["!autodocs"],parameters:{docs:{page:V}}},M=`
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
  TableFilterSelect,
  TableFilterSelectListItem,
} from '@daisforge/ui/components/TableCanvas';

import { createRows, type Row } from './data/tableData';

`,i={...w({preCode:M,previewSource:"shown"}),name:"Filtering Table",render:()=>{const[y,g]=s.useState(!0),[v]=s.useState(()=>{const u=A(42);return k().map(e=>({...e,id:Math.floor(u()*1e3),date:(()=>{const t=new Date(B+(Math.floor(u()*61)-30)*864e5);return`${String(t.getDate()).padStart(2,"0")}.${String(t.getMonth()+1).padStart(2,"0")}.${t.getFullYear()}`})()}))}),E=s.useState({id:"",task:"",priority:"All",issueType:[],issueTypeCustom:[],complete:"",globalFilter:"",date:void 0}),F=s.useMemo(()=>[{key:"id",name:"id"},{key:"task",name:"Title"},{key:"date",name:"Date",filtering:{component:"custom",customRender:u=>{const{headerContextState:{filters:e,setFilters:t}}=u;return n.jsxDEV(R,{value:e==null?void 0:e.date,onChangeValue:a=>{t&&t(r=>({...r,date:a}))}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:114,columnNumber:17},void 0)},filter:(u,e)=>u?e===u:!0,valueInRow:u=>u==null?void 0:u.date,compareWithClearedValue:(u,e)=>u===e,keyInFilterState:"date"}},{key:"priority",name:"Priority",filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"Все инциденты и запросы на доработку без ограничения по срочности"},{value:"High",text:"Высокий приоритет критически важного инцидента"},{value:"Critical",text:"Критическая ошибка блокирующая работу сервиса"},{value:"Medium",text:"Средний приоритет плановой доработки функциональности"},{value:"Low",text:"Низкий приоритет косметического усовершенствования интерфейса"}]},keyInFilterState:"priority",valueInRow:u=>u.priority,filter:{typeOfValue:"single",filteringType:(u,e)=>u!=="All"?e===u:!0}}},{key:"issueType",name:"Issue Type",filtering:{beforeList(u){return n.jsxDEV(l,{$size:u.headerContextState.rowSize,children:"Произвольный вспомогательный элемент заголовка списка с подсказкой сверху списка"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:180,columnNumber:17},this)},afterList(u){return n.jsxDEV(l,{$size:u.headerContextState.rowSize,children:"Произвольный вспомогательный элемент заголовка списка с подсказкой внизу списка"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:190,columnNumber:17},this)},component:"select",selectOptions:{type:"stateInHeaderContext",optionsKeyInHeaderContext:"issueTypeOptions"},keyInFilterState:"issueType",valueInRow:u=>u.issueType,filter:{typeOfValue:"multiple",filteringType:(u,e)=>!u.length||u.some(t=>t===e)}}},{key:"issueTypeCustom",name:"Issue Type (custom render)       ",renderCell({row:u}){return u.issueType},filtering:{component:"custom",customRender:u=>{const{headerContextState:{filters:e,setFilters:t,rowSize:a},setPopoverIsOpen:r}=u,D=u.headerContextState.issueTypeOptions??[],[d,x]=s.useState((e==null?void 0:e.issueTypeCustom)??[]),S=()=>{t&&(t(h=>({...h,issueTypeCustom:d})),r(!1))};return n.jsxDEV(N,{mode:"multiple",value:d,onChange:x,options:D,size:a,width:"232px",beforeList:n.jsxDEV(l,{$size:a,children:"Произвольный вспомогательный элемент заголовка списка с подсказкой"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:258,columnNumber:21},void 0),afterList:n.jsxDEV(m,{$css:"position: sticky; bottom: 0; background-color: white; display: grid; gap: 4px; margin-top: 4px;",children:[n.jsxDEV(p,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:269,columnNumber:23},void 0),n.jsxDEV(c,{size:a==="small"?"xxs":"s",style:{marginLeft:"auto "},view:"accent",onClick:S,children:"Применить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:270,columnNumber:23},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:264,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:250,columnNumber:17},void 0)},filter:(u,e)=>!Array.isArray(u)||!u.length||u.some(t=>t===e),valueInRow:u=>u.issueType,compareWithClearedValue:(u,e)=>JSON.stringify(u)===JSON.stringify(e),keyInFilterState:"issueTypeCustom"}},{key:"complete",name:"% Complete"}],[]),o=s.useMemo(()=>({issueTypeOptions:[{text:"Ошибка-1212---3232-3---4343434 при формировании выписки по счету",value:"Bug"},{text:"Улучшение производительности загрузки списка документов",value:"Improvement"},{text:"Эпик крупной функциональности платежного модуля",value:"Epic"},{text:"История пользовательского сценария оформления кредита",value:"Story"}]}),[]),T=s.useMemo(()=>o.issueTypeOptions.map(u=>({value:u.value,label:u.text})),[o]);return n.jsxDEV(O,{tableConfig:{containerStyle:{height:"60vh"},rowSize:{default:"big",showInControl:!0},fullScreenEnabled:!0,controlBlock:{customFeatures:[{value:"favorite",label:"Удалить из избранного",Icon:L,onClick:()=>{},mandatory:!0,details:{type:"switch",label:"В избранном",checked:y,onChange:u=>g(u.target.checked)}}]},filtering:{state:E,sidebarConfig:{items:{issueTypeCustom:{label:"Issue Type (custom render)",customRenderFn:(u,e)=>{const[t,a]=s.useState(u.issueTypeCustom);return n.jsxDEV(I,{multiple:!0,size:"s",items:T,value:t,onChange:r=>a(r),closeAfterSelect:!1,placeholder:"Выберите Issue Type",afterList:n.jsxDEV(m,{$css:"display: grid; gap: 4px; margin-top: 4px;",children:[n.jsxDEV(p,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:391,columnNumber:29},void 0),n.jsxDEV(c,{size:"xs",view:"accent",style:{marginLeft:"auto"},onClick:()=>e(r=>({...r,issueTypeCustom:t})),children:"Применить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:392,columnNumber:29},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:390,columnNumber:27},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:381,columnNumber:23},void 0)}}}},filtersInfo:{id:{label:"id",clearedValue:""},task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},issueTypeCustom:{label:"issueTypeCustom",clearedValue:[]},complete:{label:"complete",clearedValue:""},date:{label:"Дата",clearedValue:void 0},globalFilter:{label:"Global filter",clearedValue:""}}}},columnConfig:F,rows:v,headerContextValue:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Filtering/TableCanvas.filtering.stories.tsx",lineNumber:337,columnNumber:7},void 0)}};var C,f,b;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
        beforeList(props) {
          return <TableFilterSelectListItem $size={props.headerContextState.rowSize}>
                  Произвольный вспомогательный элемент заголовка списка с
                  подсказкой сверху списка
                </TableFilterSelectListItem>;
        },
        afterList(props) {
          return <TableFilterSelectListItem $size={props.headerContextState.rowSize}>
                  Произвольный вспомогательный элемент заголовка списка с
                  подсказкой внизу списка
                </TableFilterSelectListItem>;
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
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const $=["FilteringTable"],q=Object.freeze(Object.defineProperty({__proto__:null,FilteringTable:i,__namedExportsOrder:$,default:z},Symbol.toStringTag,{value:"Module"}));export{q as T};
