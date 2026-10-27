import{r,j as n}from"./react-CAOzMBF_.js";import{c as A,F as h,b as V}from"./tableData-DVJFoYoT.js";import I from"./DocStoryTemplate-Cf946dgV.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{B as d}from"./Box-DvvYTz20.js";import{S as k}from"./Table-BQHrw1K6.js";import{k as i,l as O,T as R}from"./TableCanvas-DlX-Wh2b.js";import{ae as L,r as c,t as m}from"./@salutejs/sdds-finai-CKhMjg07.js";import{u1 as z}from"./@salutejs/plasma-icons-Do5ggeDI.js";const M={title:"Локальные компоненты/TableCanvas/Filtering",tags:["!autodocs"],parameters:{docs:{page:I}}},$=`
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

`,o={...w({preCode:$,previewSource:"shown"}),name:"Filtering Table",render:()=>{const[E,F]=r.useState(!0),[g]=r.useState(()=>{const u=V(42);return A().map(e=>({...e,id:Math.floor(u()*1e3),date:(()=>{const t=new Date(h+(Math.floor(u()*61)-30)*864e5);return`${String(t.getDate()).padStart(2,"0")}.${String(t.getMonth()+1).padStart(2,"0")}.${t.getFullYear()}`})()}))}),D=r.useState({id:"",task:"",priority:"All",issueType:[],issueTypeCustom:[],complete:"",globalFilter:"",date:void 0}),x=r.useMemo(()=>[{key:"id",name:"id"},{key:"task",name:"Title"},{key:"date",name:"Date",filtering:{component:"custom",customRender:u=>{const{headerContextState:{filters:e,setFilters:t}}=u;return n.jsx(L,{value:e==null?void 0:e.date,onChangeValue:a=>{t&&t(s=>({...s,date:a}))}})},filter:(u,e)=>u?e===u:!0,valueInRow:u=>u==null?void 0:u.date,compareWithClearedValue:(u,e)=>u===e,keyInFilterState:"date"}},{key:"priority",name:"Priority",filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"Все инциденты и запросы на доработку без ограничения по срочности"},{value:"High",text:"Высокий приоритет критически важного инцидента"},{value:"Critical",text:"Критическая ошибка блокирующая работу сервиса"},{value:"Medium",text:"Средний приоритет плановой доработки функциональности"},{value:"Low",text:"Низкий приоритет косметического усовершенствования интерфейса"}]},keyInFilterState:"priority",valueInRow:u=>u.priority,filter:{typeOfValue:"single",filteringType:(u,e)=>u!=="All"?e===u:!0}}},{key:"issueType",name:"Issue Type",filtering:{beforeList(u){return n.jsx(i,{$size:u.headerContextState.rowSize,children:"Произвольный вспомогательный элемент заголовка списка с подсказкой сверху списка"})},afterList(u){return n.jsx(i,{$size:u.headerContextState.rowSize,children:"Произвольный вспомогательный элемент заголовка списка с подсказкой внизу списка"})},component:"select",selectOptions:{type:"stateInHeaderContext",optionsKeyInHeaderContext:"issueTypeOptions"},keyInFilterState:"issueType",valueInRow:u=>u.issueType,filter:{typeOfValue:"multiple",filteringType:(u,e)=>!u.length||u.some(t=>t===e)}}},{key:"issueTypeCustom",name:"Issue Type (custom render)       ",renderCell({row:u}){return u.issueType},filtering:{component:"custom",customRender:u=>{const{headerContextState:{filters:e,setFilters:t,rowSize:a},setPopoverIsOpen:s}=u,v=u.headerContextState.issueTypeOptions??[],[p,b]=r.useState((e==null?void 0:e.issueTypeCustom)??[]),T=()=>{t&&(t(B=>({...B,issueTypeCustom:p})),s(!1))};return n.jsx(O,{mode:"multiple",value:p,onChange:b,options:v,size:a,width:"232px",beforeList:n.jsx(i,{$size:a,children:"Произвольный вспомогательный элемент заголовка списка с подсказкой"}),afterList:n.jsxs(d,{$css:"position: sticky; bottom: 0; background-color: white; display: grid; gap: 4px; margin-top: 4px;",children:[n.jsx(c,{}),n.jsx(m,{size:a==="small"?"xxs":"s",style:{marginLeft:"auto "},view:"accent",onClick:T,children:"Применить"})]})})},filter:(u,e)=>!Array.isArray(u)||!u.length||u.some(t=>t===e),valueInRow:u=>u.issueType,compareWithClearedValue:(u,e)=>JSON.stringify(u)===JSON.stringify(e),keyInFilterState:"issueTypeCustom"}},{key:"complete",name:"% Complete"}],[]),l=r.useMemo(()=>({issueTypeOptions:[{text:"Ошибка-1212---3232-3---4343434 при формировании выписки по счету",value:"Bug"},{text:"Улучшение производительности загрузки списка документов",value:"Improvement"},{text:"Эпик крупной функциональности платежного модуля",value:"Epic"},{text:"История пользовательского сценария оформления кредита",value:"Story"}]}),[]),S=r.useMemo(()=>l.issueTypeOptions.map(u=>({value:u.value,label:u.text})),[l]);return n.jsx(R,{tableConfig:{containerStyle:{height:"60vh"},rowSize:{default:"big",showInControl:!0},fullScreenEnabled:!0,controlBlock:{customFeatures:[{value:"favorite",label:"Удалить из избранного",Icon:z,onClick:()=>{},mandatory:!0,details:{type:"switch",label:"В избранном",checked:E,onChange:u=>F(u.target.checked)}}]},filtering:{state:D,sidebarConfig:{items:{issueTypeCustom:{label:"Issue Type (custom render)",customRenderFn:(u,e)=>{const[t,a]=r.useState(u.issueTypeCustom);return n.jsx(k,{multiple:!0,size:"s",items:S,value:t,onChange:s=>a(s),closeAfterSelect:!1,placeholder:"Выберите Issue Type",afterList:n.jsxs(d,{$css:"display: grid; gap: 4px; margin-top: 4px;",children:[n.jsx(c,{}),n.jsx(m,{size:"xs",view:"accent",style:{marginLeft:"auto"},onClick:()=>e(s=>({...s,issueTypeCustom:t})),children:"Применить"})]})})}}}},filtersInfo:{id:{label:"id",clearedValue:""},task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},issueTypeCustom:{label:"issueTypeCustom",clearedValue:[]},complete:{label:"complete",clearedValue:""},date:{label:"Дата",clearedValue:void 0},globalFilter:{label:"Global filter",clearedValue:""}}}},columnConfig:x,rows:g,headerContextValue:l})}};var C,y,f;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const j=["FilteringTable"],q=Object.freeze(Object.defineProperty({__proto__:null,FilteringTable:o,__namedExportsOrder:j,default:M},Symbol.toStringTag,{value:"Module"}));export{q as T};
