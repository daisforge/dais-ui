import{r as xe,d as e}from"./react-D2T61mpp.js";import{F as W}from"./tableData-DVJFoYoT.js";import{s as ee}from"./storySourceDoc-tVKyHcEN.js";import{t as he}from"./@hookform/resolvers-CfC1H5mZ.js";import{F as ue}from"./FormAutocomplete-BRgSA-ao.js";import{F as oe}from"./FormCheckbox-CX7i4urR.js";import{F as E}from"./FormCombobox-DjM3H1T-.js";import{F as re}from"./FormMask-DkIj-Po3.js";import{F as ne}from"./FormNumberFormat-CaUFR--3.js";import{F as te,a as y}from"./FormRadioGroupBox-_9tZI19-.js";import{C as Ce,b as ae,F as ie}from"./react-hook-form--TL94tpB.js";import{y as ke}from"./utils-D0gu5Dum.js";import{i as ve}from"./lodash.isequal-DD0Lfcik.js";import{T as De}from"./TextField-BrGgRh7l.js";import{q as se}from"./styled-components-DxDblDlN.js";import{d as Ne,u as Ee}from"./FormUtils-81Wt4mic.js";import{a8 as ye,R as Se,l as we,t as me}from"./@salutejs/sdds-finai-CDu6sm0L.js";import{ct as Be,cl as Ve}from"./vendor-DmOaMQgq.js";import{F as S}from"./FormSelect-BOGZ5e1e.js";import{F as le}from"./FormSwitch-pi8uaZtF.js";import{F as de}from"./FormTextArea-aLl-p4up.js";import{F as ce}from"./FormTextField-CFaa1u1F.js";import{z as n}from"./zod-mSkvzYyn.js";import{F as be,a as pe}from"./FormDatePickers-BdRHLTfM.js";const Fe={hiddenInput:"form-segment__hidden-input"},H=se.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,L=se(De)`
  &&.${Fe.hiddenInput} {
    .input-wrapper,
    .input-wrapper * {
      pointer-events: none;
      max-height: 0;
      overflow: hidden;
      padding: 0;
      margin: 0;
    }
  }
  & > div {
    margin-bottom: 0;
  }
`;try{H.displayName="SegmentGroupContainer",H.__docgenInfo={description:"Внешний контейнер для layout. НЕ стилизуем сам SegmentGroup!",displayName:"SegmentGroupContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},$mode:{defaultValue:null,description:"",name:"$mode",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{L.displayName="HiddenTextField",L.__docgenInfo={description:"Скрытый TextField — чтобы отрисовать label/required/подсказки",displayName:"HiddenTextField",props:{}}}catch{}function Te(o,r){return o==null||o===""?[]:Array.isArray(o)?o.map(String):r?[String(o)]:[String(o)]}function Ae(o,r){return r?o:o.length>0?[o[0]??""]:[]}function je(o){const r={};return o.forEach(u=>{r[u]=(r[u]||0)+1}),o.filter(u=>r[u]<=1)}function qe(o){return o==null||o===""?[]:Array.isArray(o)?o.map(String):[String(o)]}function $({value:o,onRHFChange:r,onUserChange:u,selectionMode:t="single",label:a,titleCaption:s,hintText:d,hintTrigger:c="hover",hintHasArrow:w=!0,optionsRequired:B,groupProps:V,errorMessage:b,items:T,singleSelectedRequired:h,showError:A=!0}){const C=t==="multiple",{selectedSegmentItems:m}=Be();xe.useEffect(()=>{const p=Te(o,C);if(!ve([...p].sort(),[...m].sort())){const F=h?m:je(m),l=Ae(F,C);r(l),u==null||u(l)}},[m,h]);const{$mode:j,className:q,style:_,ref:M,name:k,disabled:z,onBlur:R,...v}=V,P=Array.isArray(o)?o.join(", "):String(o??""),D=v.size??"s";return e.jsxDEV(H,{$mode:j,className:q,style:_,children:[(a||s)&&e.jsxDEV(L,{required:Ne(B),label:a,value:P,hintHasArrow:w,hintText:d??"",hintTrigger:c,className:Fe.hiddenInput,titleCaption:s,size:D},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/formComponents/FormSegments/SegmentControlled.tsx",lineNumber:74,columnNumber:9},this),e.jsxDEV("input",{type:"hidden",name:k,value:String(o),ref:M,disabled:z,onBlur:R},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/formComponents/FormSegments/SegmentControlled.tsx",lineNumber:87,columnNumber:7},this),e.jsxDEV(ye,{...v,selectionMode:t,children:T.map(p=>{const{value:N,...F}=p,l=String(N);return e.jsxDEV(Se,{value:l,type:"button",...F},l,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/formComponents/FormSegments/SegmentControlled.tsx",lineNumber:101,columnNumber:13},this)})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/formComponents/FormSegments/SegmentControlled.tsx",lineNumber:95,columnNumber:7},this),A&&b&&e.jsxDEV(we,{color:ke("negative"),children:b},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/formComponents/FormSegments/SegmentControlled.tsx",lineNumber:111,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/formComponents/FormSegments/SegmentControlled.tsx",lineNumber:72,columnNumber:5},this)}try{$.displayName="SegmentControlled",$.__docgenInfo={description:"",displayName:"SegmentControlled",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"TextFieldProps"}},titleCaption:{defaultValue:null,description:"",name:"titleCaption",required:!0,type:{name:"TextFieldProps"}},hintText:{defaultValue:null,description:"",name:"hintText",required:!0,type:{name:"TextFieldProps"}},hintTrigger:{defaultValue:{value:"hover"},description:"",name:"hintTrigger",required:!1,type:{name:"TextFieldProps"}},hintHasArrow:{defaultValue:{value:"true"},description:"",name:"hintHasArrow",required:!1,type:{name:"TextFieldProps"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"unknown"}},onRHFChange:{defaultValue:null,description:"",name:"onRHFChange",required:!0,type:{name:"(next: string[]) => void"}},onUserChange:{defaultValue:null,description:"",name:"onUserChange",required:!1,type:{name:"(next: string[]) => void"}},selectionMode:{defaultValue:{value:"single"},description:"",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"multiple"'}]}},optionsRequired:{defaultValue:null,description:"",name:"optionsRequired",required:!1,type:{name:"RegisterOptions<FieldValues, Path<TFieldValues>>"}},groupProps:{defaultValue:null,description:"",name:"groupProps",required:!0,type:{name:"TGroupPropsForStyled<TFieldValues>"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"any[]"}},singleSelectedRequired:{defaultValue:null,description:"",name:"singleSelectedRequired",required:!1,type:{name:"boolean"}},showError:{defaultValue:{value:"true"},description:"",name:"showError",required:!1,type:{name:"boolean"}}}}}catch{}const x=o=>{const{name:r,options:u,onChange:t,singleSelectedRequired:a,selectionMode:s="single",view:d,size:c="s",pilled:w,hasBackground:B,stretch:V,orientation:b,className:T,style:h,items:A,label:C,titleCaption:m,hintText:j,hintTrigger:q,hintHasArrow:_,showError:M=!0}=o,k=Ee(u),{control:z,rules:R,remOptions:v}=k;return e.jsxDEV(Ce,{control:z,name:r,rules:R,...v,render:({field:{onChange:P,value:D,ref:p,onBlur:N,disabled:F,name:l,...O},fieldState:{error:G}})=>{const ge={...O,name:r,className:T,style:h,disabled:F,size:c,view:d,pilled:w,hasBackground:B,stretch:V,orientation:b==="vertical"?"vertical":void 0,$mode:b==="vertical"?"column":"row",ref:p,onBlur:N},Z=qe(D);return e.jsxDEV(Ve,{defaultSelected:Z,singleSelectedRequired:a,...O,children:e.jsxDEV($,{value:D,onRHFChange:I=>P(I),onUserChange:I=>{t==null||t(I,k)},label:C,titleCaption:m,hintText:j,hintTrigger:q,hintHasArrow:_,optionsRequired:u,errorMessage:G==null?void 0:G.message,groupProps:ge,selectionMode:s,items:A,singleSelectedRequired:a,showError:M},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/formComponents/FormSegments/FormSegmentGroup.tsx",lineNumber:90,columnNumber:13},void 0)},`segment-${r}-${Z.join("|")}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/formComponents/FormSegments/FormSegmentGroup.tsx",lineNumber:83,columnNumber:11},void 0)}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/formComponents/FormSegments/FormSegmentGroup.tsx",lineNumber:44,columnNumber:5},void 0)};x.displayName="FormSegmentGroup";try{x.displayName="FormSegmentGroup",x.__docgenInfo={description:"",displayName:"FormSegmentGroup",props:{}}}catch{}const fe=[{label:"Алексей Смирнов"},{label:"Екатерина Иванова"},{label:"Дмитрий Петров"},{label:"Ольга Васильева"},{label:"Сергей Сидоров"},{label:"Мария Кузнецова"},{label:"Андрей Попов"},{label:"Анна Николаева"},{label:"Иван Федоров"},{label:"Наталья Морозова"},{label:"Михаил Павлов"},{label:"Елена Романова"},{label:"Владимир Киселев"},{label:"Татьяна Захарова"},{label:"Николай Семенов"},{label:"Юлия Белова"},{label:"Александр Гусев"},{label:"Оксана Яковлева"},{label:"Игорь Егорова"},{label:"Вера Тихомирова"},{label:"Артем Григорьев"},{label:"Евгения Козлова"},{label:"Максим Лебедев"},{label:"Виктория Калашникова"},{label:"Константин Абрамов"},{label:"Светлана Новикова"},{label:"Юрий Волков"},{label:"Валентина Воробьева"},{label:"Павел Сергеев"},{label:"Людмила Виноградова"},{label:"Антон Соловьев"},{label:"Маргарита Цветкова"},{label:"Роман Трофимов"},{label:"Лариса Зайцева"},{label:"Евгений Никитин"},{label:"Галина Михайлова"},{label:"Владислав Антонов"},{label:"Дарья Филатова"},{label:"Олег Буров"},{label:"Инна Медведева"},{label:"Вячеслав Крылов"},{label:"Тамара Беляева"},{label:"Кирилл Марков"},{label:"Марина Пономарева"},{label:"Борис Захаров"},{label:"Жанна Савельева"},{label:"Федор Жуков"},{label:"Елизавета Логинова"},{label:"Виктор Рыбаков"},{label:"Лилия Макарова"}],i=[{value:"north_america",label:"Северная Америка"},{value:"south_america",label:"Южная Америка",items:[{value:"brazil",label:"Бразилия",items:[{value:"rio_de_janeiro",label:"Рио-де-Жанейро"},{value:"sao_paulo",label:"Сан-Паулу"}]},{value:"argentina",label:"Аргентина",items:[{value:"buenos_aires",label:"Буэнос-Айрес"},{value:"cordoba",label:"Кордова"}]},{value:"colombia",label:"Колумбия",items:[{value:"bogota",label:"Богота"},{value:"medellin",label:"Медельин"}]}]},{value:"europe",label:"Европа",items:[{value:"france",label:"Франция",items:[{value:"paris",label:"Париж"},{value:"lyon",label:"Лион"}]},{value:"germany",label:"Германия",items:[{value:"berlin",label:"Берлин"},{value:"munich",label:"Мюнхен"}]},{value:"italy",label:"Италия",items:[{value:"rome",label:"Рим"},{value:"milan",label:"Милан"}]},{value:"spain",label:"Испания",items:[{value:"madrid",label:"Мадрид"},{value:"barcelona",label:"Барселона"}]},{value:"united_kingdom",label:"Великобритания",items:[{value:"london",label:"Лондон"},{value:"manchester",label:"Манчестер"}]}]},{value:"asia",label:"Азия",items:[{value:"china",label:"Китай",items:[{value:"beijing",label:"Пекин"},{value:"shanghai",label:"Шанхай"}]},{value:"japan",label:"Япония",items:[{value:"tokyo",label:"Токио"},{value:"osaka",label:"Осака"}]},{value:"india",label:"Индия",items:[{value:"delhi",label:"Дели"},{value:"mumbai",label:"Мумбаи"}]},{value:"south_korea",label:"Южная Корея",items:[{value:"seoul",label:"Сеул"},{value:"busan",label:"Пусан"}]},{value:"thailand",label:"Таиланд",items:[{value:"bangkok",label:"Бангкок"},{value:"phuket",label:"Пхукет"}]}]},{value:"africa",label:"Африка",isDisabled:!0}],_e={title:"Формы/Компоненты формы",tags:["!autodocs"],component:()=>null},Me=n.object({textfield:n.string().min(1,"Заполните обязательное поле").min(3,"обязательное больше 3"),mask:n.string().min(1,"Заполните обязательное поле").min(3,"обязательное больше 3"),textarea:n.string().min(1,"Заполните обязательное поле").min(3,"обязательное больше 3"),switch:n.boolean(),checkbox:n.boolean(),autocomplete:n.string().min(1,"Заполните обязательное поле").min(3,"обязательное больше 3"),combobox:n.string().min(1,"Заполните обязательное поле"),comboboxMultiple:n.array(n.string()).min(1,"Заполните обязательное поле"),select:n.string().min(1,"Заполните обязательное поле"),selectMulti:n.array(n.string()).min(1,"Заполните обязательное поле"),numberFormat:n.string().min(1,"Заполните обязательное поле"),date:n.string().min(1,"Заполните обязательное поле").min(7,"Неверно введённая дата"),dateRange:n.object({dateFrom:n.string().min(1,"Укажите начальную дату"),dateTo:n.string().min(1,"Укажите конечную дату")}).refine(o=>{if(!o.dateFrom||!o.dateTo)return!0;const r=a=>{const[s,d,c]=a.split(".");return new Date(`${c}-${d}-${s}`)},u=r(o.dateFrom),t=r(o.dateTo);return Number.isNaN(u.getTime())||Number.isNaN(t.getTime())?!0:t>=u}),gender:n.string().min(1,"Заполните обязательное поле"),status:n.array(n.string()).min(1,{message:"Заполните хотя бы одно поле."}).refine(o=>o.every(r=>r.trim().length>0),{message:"Значения не должны быть пустыми."})}),ze=`
import {
  FormAutocomplete,
  FormCheckbox,
  FormCombobox,
  FormSelect,
  FormSwitch,
  FormTextArea,
  FormTextField,
  FormNumberFormat,
  FormDatePicker,
  FormDatePickerRange,
  FormRadioGroup,
  FormRadiobox,
  FormSegmentGroup,
  Button
} from '@daisforge/ui';
import { FormProvider, useForm } from 'react-hook-form';
`,f={name:"Компоненты формы",...ee({preCode:ze,previewSource:"shown"}),render:()=>{const o=ae({reValidateMode:"onBlur",defaultValues:{textfield:"",mask:"",textarea:"",checkbox:!1,switch:!0,autocomplete:"",combobox:"",comboboxMultiple:[],select:"",selectMulti:[],numberFormat:"",date:"",dateRange:{dateFrom:"05.05.2024",dateTo:"07.05.2024"},gender:"male",status:["ready"]}}),r=u=>{alert(JSON.stringify(u,void 0,2))};return e.jsxDEV("form",{noValidate:!0,onSubmit:o.handleSubmit(r),style:{display:"flex",flexDirection:"column",gap:16},children:e.jsxDEV(ie,{...o,children:[e.jsxDEV(ce,{label:"FormTextField",name:"textfield",options:{minLength:{value:3,message:"значение должно быть длиннее 3"},required:!0}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:165,columnNumber:11},void 0),e.jsxDEV(re,{label:"FormMask",name:"mask",mask:"*-*-*",options:{minLength:{value:3,message:"значение должно быть длиннее 3"},required:!0}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:176,columnNumber:11},void 0),e.jsxDEV(de,{label:"FormTextArea",name:"textarea",autoResize:!0,options:{validate:u=>(u??"").includes("@")?!0:"должен содержаться символ @",maxLength:50,required:"Заполните обязательное поле"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:188,columnNumber:11},void 0),e.jsxDEV(oe,{name:"checkbox",label:"Checkbox",size:"m",options:{required:"Заполните обязательное поле"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:203,columnNumber:11},void 0),e.jsxDEV(le,{name:"switch",label:"Switch",labelPosition:"after",options:{validate:u=>u?!0:"Заполните обязательное поле"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:211,columnNumber:11},void 0),e.jsxDEV(ue,{name:"autocomplete",suggestions:fe,label:"FormAutocomplete",options:{minLength:{value:2,message:"обязательное больше 2"},required:"Заполните обязательное поле"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:225,columnNumber:11},void 0),e.jsxDEV(E,{name:"combobox",label:"FormCombobox",items:i,options:{required:"Заполните обязательное поле"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:237,columnNumber:11},void 0),e.jsxDEV(E,{label:"FormCombobox multiple",name:"comboboxMultiple",multiple:!0,items:i,options:{validate:u=>u.length<3?"минимум три выбранных элемента":!0,required:"Заполните обязательное поле"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:245,columnNumber:11},void 0),e.jsxDEV(S,{style:{maxWidth:"50%"},label:"FormSelect",name:"select",items:i,options:{required:"Заполните обязательное поле"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:260,columnNumber:11},void 0),e.jsxDEV(S,{label:"FormSelect multiple",name:"selectMulti",multiselect:!0,items:i,options:{validate:u=>u.length<3?"минимум три выбранных элемента":!0,required:"Заполните обязательное поле"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:271,columnNumber:11},void 0),e.jsxDEV(ne,{name:"numberFormat",label:"FormNumberFormat",size:"s",thousandSeparator:" ",decimalSeparator:".",options:{minLength:{value:3,message:"значение должно быть длиннее 3"},required:"Заполните обязательное поле"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:286,columnNumber:11},void 0),e.jsxDEV(be,{name:"date",label:"Date",invalidFormatMessage:"некорректно",size:"s",options:{required:"обязательное поле",max:{value:W,message:"указанная дата за пределами максимально доступной"},min:{value:W-20*24*60*60*1e3,message:"указанная дата за пределами минимально доступной"}},placement:["left","top"],placeholder:"выберите дату",onChange:u=>{console.debug("FormDatePicker data",u)},style:{maxWidth:"559px"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:300,columnNumber:11},void 0),e.jsxDEV(pe,{name:"dateRange",label:"DateRange",isDoubleCalendar:!0,size:"s",invalidFormatMessage:"incorrect date",options:{required:"обязательное поле",min:{value:new Date(2024,0,1).getTime(),message:"мероприятия доступны с 2024 года"},max:{value:new Date(2024,11,31).getTime(),message:"только события 2024 года"},validate:{minDuration:u=>{if(!(u!=null&&u.dateFrom)||!(u!=null&&u.dateTo))return!0;const t=new Date(u.dateFrom.split(".").reverse().join("-")),a=new Date(u.dateTo.split(".").reverse().join("-"));return Number.isNaN(t.getTime())||Number.isNaN(a.getTime())?!0:a.getTime()-t.getTime()<7*864e5?"Минимальный период - 7 дней":!0},noWeekends:u=>{const t=new Date(u.dateFrom.split(".").reverse().join("-"));return[0,6].includes(t.getDay())?"Нельзя начинать в выходные":!0}}},style:{maxWidth:"559px"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:326,columnNumber:11},void 0),e.jsxDEV(te,{hintText:"Подсказка",label:"Label",titleCaption:"TitleCaption",name:"gender",options:{required:"Заполните обязательное поле"},size:"s",children:[e.jsxDEV(y,{value:"male",label:"Мужской",size:"m"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:384,columnNumber:13},void 0),e.jsxDEV(y,{value:"female",label:"Женский",size:"m"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:385,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:374,columnNumber:11},void 0),e.jsxDEV(x,{name:"status",label:"Статус документа",titleCaption:"Выберите один",options:{required:"Выберите статус"},size:"s",hasBackground:!0,stretch:!0,pilled:!0,onChange:u=>console.debug("[FormSegmentGroup]:onChange:",u),hintHasArrow:!0,hintText:"Статус документа",items:[{label:"draft",value:"draft",view:"secondary"},{label:"ready",value:"ready",view:"secondary"},{label:"signed",value:"signed",view:"secondary"}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:387,columnNumber:11},void 0),e.jsxDEV(me,{type:"submit",children:"Отправить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:410,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:164,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:155,columnNumber:7},void 0)}},Re=`
import {
  FormAutocomplete,
  FormCheckbox,
  FormCombobox,
  FormSelect,
  FormSwitch,
  FormTextArea,
  FormTextField,
  FormNumberFormat,
  FormDatePicker,
  FormDatePickerRange,
  FormRadioGroup,
  FormRadiobox,
  FormSegmentGroup,
  Button
} from '@daisforge/ui';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
`,g={name:"Пример формы заполнения c использованием библиотеки Zod для валидации",...ee({preCode:Re,previewSource:"shown"}),render:()=>{const o=ae({reValidateMode:"onSubmit",defaultValues:{textfield:"",mask:"",textarea:"",switch:!0,autocomplete:"",combobox:"",comboboxMultiple:[],select:"",selectMulti:[],numberFormat:"",date:"",dateRange:{dateFrom:"",dateTo:""},gender:"male",status:["ready"]},resolver:he(Me)}),r=u=>{alert(JSON.stringify(u,void 0,2))};return e.jsxDEV("form",{noValidate:!0,onSubmit:o.handleSubmit(r),style:{display:"flex",flexDirection:"column",gap:16},children:e.jsxDEV(ie,{...o,children:[e.jsxDEV(ce,{label:"FormTextField",name:"textfield"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:485,columnNumber:11},void 0),e.jsxDEV(re,{label:"FormMask",name:"mask",mask:"*-*-*"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:486,columnNumber:11},void 0),e.jsxDEV(de,{label:"FormTextArea",name:"textarea",autoResize:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:487,columnNumber:11},void 0),e.jsxDEV(oe,{name:"checkbox",label:"Checkbox",size:"m"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:488,columnNumber:11},void 0),e.jsxDEV(le,{name:"switch",label:"Switch",labelPosition:"after"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:489,columnNumber:11},void 0),e.jsxDEV(ue,{name:"autocomplete",suggestions:fe,label:"FormAutocomplete"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:491,columnNumber:11},void 0),e.jsxDEV(E,{name:"combobox",label:"FormCombobox",items:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:496,columnNumber:11},void 0),e.jsxDEV(E,{label:"FormCombobox multiple",name:"comboboxMultiple",multiple:!0,items:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:497,columnNumber:11},void 0),e.jsxDEV(S,{label:"FormSelect",name:"select",items:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:503,columnNumber:11},void 0),e.jsxDEV(S,{style:{maxWidth:"50%"},label:"FormSelect multiple",name:"selectMulti",multiselect:!0,items:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:504,columnNumber:11},void 0),e.jsxDEV(ne,{name:"numberFormat",label:"FormNumberFormat",size:"s",thousandSeparator:" ",decimalSeparator:"."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:513,columnNumber:11},void 0),e.jsxDEV(be,{name:"date",label:"Date",invalidFormatMessage:"incorrect date",onChange:u=>{console.debug("FormDatePicker data",u)},style:{maxWidth:"559px"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:520,columnNumber:11},void 0),e.jsxDEV(pe,{name:"dateRange",label:"DateRange",invalidFormatMessage:"incorrect date",isDoubleCalendar:!0,max:new Date(W+2*24*60*60*1e3),size:"s",style:{maxWidth:"559px"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:532,columnNumber:11},void 0),e.jsxDEV(te,{name:"gender",label:"Лейбл группы",radioGroupMode:"row",hintText:"Подсказка",children:[e.jsxDEV(y,{value:"male",label:"Мужской",size:"m"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:549,columnNumber:13},void 0),e.jsxDEV(y,{value:"female",label:"Женский",size:"m"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:550,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:543,columnNumber:11},void 0),e.jsxDEV(x,{name:"status",label:"Статус документа",titleCaption:"Выберите один",size:"s",hasBackground:!0,stretch:!0,pilled:!0,onChange:u=>console.debug("[FormSegmentGroup]:onChange",u),hintHasArrow:!0,hintText:"Статус документа",items:[{label:"draft",value:"draft",view:"secondary",size:"s"},{label:"ready",value:"ready",view:"secondary",size:"s"},{label:"signed",value:"signed",view:"secondary",size:"s"}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:552,columnNumber:11},void 0),e.jsxDEV(me,{type:"submit",children:"Отправить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:577,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:484,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:475,columnNumber:7},void 0)}};var X,J,K;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Компоненты формы',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const form = useForm<FormValues>({
      reValidateMode: 'onBlur',
      defaultValues: {
        textfield: '',
        mask: '',
        textarea: '',
        checkbox: false,
        switch: true,
        autocomplete: '',
        combobox: '',
        comboboxMultiple: [],
        select: '',
        selectMulti: [],
        numberFormat: '',
        date: '',
        dateRange: {
          dateFrom: '05.05.2024',
          dateTo: '07.05.2024'
        },
        gender: 'male',
        status: ['ready']
      }
    });
    const onSubmit = (data: unknown) => {
      alert(JSON.stringify(data, undefined, 2));
    };
    return <form noValidate onSubmit={form.handleSubmit(onSubmit)} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <FormProvider {...form}>
          <FormTextField label="FormTextField" name="textfield" options={{
          minLength: {
            value: 3,
            message: 'значение должно быть длиннее 3'
          },
          required: true
        }} />
          <FormMask label="FormMask" name="mask" mask="*-*-*" options={{
          minLength: {
            value: 3,
            message: 'значение должно быть длиннее 3'
          },
          required: true
        }} />
          <FormTextArea label="FormTextArea" name="textarea" autoResize options={{
          validate: v => {
            if (!(v ?? '').includes('@')) {
              return 'должен содержаться символ @';
            }
            return true;
          },
          maxLength: 50,
          required: 'Заполните обязательное поле'
        }} />
          <FormCheckbox<FormValues> name="checkbox" label="Checkbox" size="m" options={{
          required: 'Заполните обязательное поле'
        }} />
          <FormSwitch name="switch" label="Switch" labelPosition="after" options={{
          validate: v => {
            if (!v) {
              return 'Заполните обязательное поле';
            }
            return true;
          }
        }} />

          <FormAutocomplete name="autocomplete" suggestions={mockData} label="FormAutocomplete" options={{
          minLength: {
            value: 2,
            message: 'обязательное больше 2'
          },
          required: 'Заполните обязательное поле'
        }} />
          <FormCombobox name="combobox" label="FormCombobox" items={items} options={{
          required: 'Заполните обязательное поле'
        }} />
          <FormCombobox label="FormCombobox multiple" name="comboboxMultiple" multiple items={items} options={{
          validate: v => {
            if (v.length < 3) {
              return 'минимум три выбранных элемента';
            }
            return true;
          },
          required: 'Заполните обязательное поле'
        }} />
          <FormSelect style={{
          maxWidth: '50%'
        }} label="FormSelect" name="select" items={items} options={{
          required: 'Заполните обязательное поле'
        }} />
          <FormSelect label="FormSelect multiple" name="selectMulti" multiselect items={items} options={{
          validate: v => {
            if (v.length < 3) {
              return 'минимум три выбранных элемента';
            }
            return true;
          },
          required: 'Заполните обязательное поле'
        }} />
          <FormNumberFormat name="numberFormat" label="FormNumberFormat" size="s" thousandSeparator=" " decimalSeparator="." options={{
          minLength: {
            value: 3,
            message: 'значение должно быть длиннее 3'
          },
          required: 'Заполните обязательное поле'
        }} />
          <FormDatePicker name="date" label="Date" invalidFormatMessage="некорректно" size="s" options={{
          required: 'обязательное поле',
          max: {
            value: FIXED_DATE_TIMESTAMP,
            message: 'указанная дата за пределами максимально доступной'
          },
          min: {
            value: FIXED_DATE_TIMESTAMP - 20 * 24 * 60 * 60 * 1000,
            message: 'указанная дата за пределами минимально доступной'
          }
        }} placement={['left', 'top']} placeholder="выберите дату" onChange={data => {
          // eslint-disable-next-line no-console
          console.debug('FormDatePicker data', data);
        }} style={{
          maxWidth: '559px'
        }} />
          <FormDatePickerRange name="dateRange" label="DateRange" isDoubleCalendar size="s" invalidFormatMessage="incorrect date" options={{
          required: 'обязательное поле',
          min: {
            value: new Date(2024, 0, 1).getTime(),
            message: 'мероприятия доступны с 2024 года'
          },
          max: {
            value: new Date(2024, 11, 31).getTime(),
            message: 'только события 2024 года'
          },
          validate: {
            minDuration: value => {
              if (!value?.dateFrom || !value?.dateTo) return true;
              const start = new Date(value.dateFrom.split('.').reverse().join('-'));
              const end = new Date(value.dateTo.split('.').reverse().join('-'));
              if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return true;
              return end.getTime() - start.getTime() < 7 * 86400000 ? 'Минимальный период - 7 дней' : true;
            },
            noWeekends: value => {
              const start = new Date(value.dateFrom.split('.').reverse().join('-'));
              return [0, 6].includes(start.getDay()) ? 'Нельзя начинать в выходные' : true;
            }
          }
        }} style={{
          maxWidth: '559px'
        }} />
          <FormRadioGroup hintText="Подсказка" label="Label" titleCaption="TitleCaption" name="gender" options={{
          required: 'Заполните обязательное поле'
        }} size="s">
            <FormRadiobox value="male" label="Мужской" size="m" />
            <FormRadiobox value="female" label="Женский" size="m" />
          </FormRadioGroup>
          <FormSegmentGroup name="status" label="Статус документа" titleCaption="Выберите один" options={{
          required: 'Выберите статус'
        }} size="s" hasBackground stretch pilled onChange={val =>
        // eslint-disable-next-line no-console
        console.debug('[FormSegmentGroup]:onChange:', val)} hintHasArrow hintText="Статус документа" items={[{
          label: 'draft',
          value: 'draft',
          view: 'secondary'
        }, {
          label: 'ready',
          value: 'ready',
          view: 'secondary'
        }, {
          label: 'signed',
          value: 'signed',
          view: 'secondary'
        }]} />
          <Button type="submit">Отправить</Button>
        </FormProvider>
      </form>;
  }
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,U;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Пример формы заполнения c использованием библиотеки Zod для валидации',
  ...storySourceDoc({
    preCode: preCodeWithZod,
    previewSource: 'shown'
  }),
  render: () => {
    const form = useForm<FormValues>({
      reValidateMode: 'onSubmit',
      defaultValues: {
        textfield: '',
        mask: '',
        textarea: '',
        switch: true,
        autocomplete: '',
        combobox: '',
        comboboxMultiple: [],
        select: '',
        selectMulti: [],
        numberFormat: '',
        date: '',
        dateRange: {
          dateFrom: '',
          dateTo: ''
        },
        gender: 'male',
        status: ['ready']
      },
      resolver: zodResolver(SchemaForValues)
    });
    const onSubmit = (data: unknown) => {
      alert(JSON.stringify(data, undefined, 2));
    };
    return <form noValidate onSubmit={form.handleSubmit(onSubmit)} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <FormProvider {...form}>
          <FormTextField label="FormTextField" name="textfield" />
          <FormMask label="FormMask" name="mask" mask="*-*-*" />
          <FormTextArea label="FormTextArea" name="textarea" autoResize />
          <FormCheckbox<FormValues> name="checkbox" label="Checkbox" size="m" />
          <FormSwitch name="switch" label="Switch" labelPosition="after" />

          <FormAutocomplete name="autocomplete" suggestions={mockData} label="FormAutocomplete" />
          <FormCombobox name="combobox" label="FormCombobox" items={items} />
          <FormCombobox label="FormCombobox multiple" name="comboboxMultiple" multiple items={items} />
          <FormSelect label="FormSelect" name="select" items={items} />
          <FormSelect style={{
          maxWidth: '50%'
        }} label="FormSelect multiple" name="selectMulti" multiselect items={items} />
          <FormNumberFormat name="numberFormat" label="FormNumberFormat" size="s" thousandSeparator=" " decimalSeparator="." />
          <FormDatePicker name="date" label="Date" invalidFormatMessage="incorrect date" onChange={data => {
          // eslint-disable-next-line no-console
          console.debug('FormDatePicker data', data);
        }} style={{
          maxWidth: '559px'
        }} />
          <FormDatePickerRange name="dateRange" label="DateRange" invalidFormatMessage="incorrect date" isDoubleCalendar max={new Date(FIXED_DATE_TIMESTAMP + 2 * 24 * 60 * 60 * 1000)} size="s" style={{
          maxWidth: '559px'
        }} />
          <FormRadioGroup name="gender" label="Лейбл группы" radioGroupMode="row" hintText="Подсказка">
            <FormRadiobox value="male" label="Мужской" size="m" />
            <FormRadiobox value="female" label="Женский" size="m" />
          </FormRadioGroup>
          <FormSegmentGroup name="status" label="Статус документа" titleCaption="Выберите один" size="s" hasBackground stretch pilled onChange={val =>
        // eslint-disable-next-line no-console
        console.debug('[FormSegmentGroup]:onChange', val)} hintHasArrow hintText="Статус документа" items={[{
          label: 'draft',
          value: 'draft',
          view: 'secondary',
          size: 's'
        }, {
          label: 'ready',
          value: 'ready',
          view: 'secondary',
          size: 's'
        }, {
          label: 'signed',
          value: 'signed',
          view: 'secondary',
          size: 's'
        }]} />
          <Button type="submit">Отправить</Button>
        </FormProvider>
      </form>;
  }
}`,...(U=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:U.source}}};const Pe=["ExampleWithoutValidator","WithZod"],lu=Object.freeze(Object.defineProperty({__proto__:null,ExampleWithoutValidator:f,WithZod:g,__namedExportsOrder:Pe,default:_e},Symbol.toStringTag,{value:"Module"}));export{lu as F};
