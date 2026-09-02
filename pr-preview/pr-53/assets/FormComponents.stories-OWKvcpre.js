import{r as Ce,d as e}from"./react-D2T61mpp.js";import{s as oe}from"./storySourceDoc-tVKyHcEN.js";import{t as ke}from"./@hookform/resolvers-C6PsS-dJ.js";import{F as re}from"./FormAutocomplete-B9vmrGtv.js";import{F as ne}from"./FormCheckbox-_bpZxtd2.js";import{F as y}from"./FormCombobox-Ce_jhiwM.js";import{F as ae}from"./FormMask-DxVpsn25.js";import{F as te}from"./FormNumberFormat-CkGzDL28.js";import{F as ie,a as E}from"./FormRadioGroupBox-Du7YyjMQ.js";import{C as ve,b as se,F as me}from"./react-hook-form-Db9BFXuw.js";import{w as De}from"./utils-CfymYna3.js";import{i as Ne}from"./lodash.isequal-DD0Lfcik.js";import{T as ye}from"./TextField-BerMN7Ou.js";import{H as le}from"./styled-components-DI7cxCvS.js";import{b as Ee,u as we}from"./FormUtils-D4KLnd_n.js";import{a8 as Se,Q as Be,o as Ve,b as de}from"./@salutejs/sdds-finai-Bs5lVnWZ.js";import{ch as Te,ca as je}from"./vendor-DEqZzPsi.js";import{F as w}from"./FormSelect-Ch29Fmy3.js";import{F as ce}from"./FormSwitch-IP5AZyBl.js";import{F as be}from"./FormTextArea-2JMWrJVm.js";import{F as pe}from"./FormTextField-CnN5Fuj0.js";import{F as Fe,a as fe}from"./FormDatePickers-BIf6vbD6.js";import{o as J,a as H,s as a,b as Q}from"./zod-MlMJ5Edr.js";const ge={hiddenInput:"form-segment__hidden-input"},I=le.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,L=le(ye)`
  &&.${ge.hiddenInput} {
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
`;try{I.displayName="SegmentGroupContainer",I.__docgenInfo={description:"Внешний контейнер для layout. НЕ стилизуем сам SegmentGroup!",displayName:"SegmentGroupContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},$mode:{defaultValue:null,description:"",name:"$mode",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{L.displayName="HiddenTextField",L.__docgenInfo={description:"Скрытый TextField — чтобы отрисовать label/required/подсказки",displayName:"HiddenTextField",props:{}}}catch{}function Ae(o,r){return o==null||o===""?[]:Array.isArray(o)?o.map(String):r?[String(o)]:[String(o)]}function qe(o,r){return r?o:o.length>0?[o[0]??""]:[]}function ze(o){const r={};return o.forEach(u=>{r[u]=(r[u]||0)+1}),o.filter(u=>r[u]<=1)}function Re(o){return o==null||o===""?[]:Array.isArray(o)?o.map(String):[String(o)]}function $({value:o,onRHFChange:r,onUserChange:u,selectionMode:n="single",label:t,titleCaption:s,hintText:d,hintTrigger:c="hover",hintHasArrow:S=!0,optionsRequired:B,groupProps:V,errorMessage:b,items:T,singleSelectedRequired:h,showError:j=!0}){const C=n==="multiple",{selectedSegmentItems:m}=Te();Ce.useEffect(()=>{const p=Ae(o,C);if(!Ne([...p].sort(),[...m].sort())){const F=h?m:ze(m),l=qe(F,C);r(l),u==null||u(l)}},[m,h]);const{$mode:A,className:q,style:z,ref:R,name:k,disabled:_,onBlur:M,...v}=V,P=Array.isArray(o)?o.join(", "):String(o??""),D=v.size??"s";return e.jsxDEV(I,{$mode:A,className:q,style:z,children:[(t||s)&&e.jsxDEV(L,{required:Ee(B),label:t,value:P,hintHasArrow:S,hintText:d??"",hintTrigger:c,className:ge.hiddenInput,titleCaption:s,size:D},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/formComponents/FormSegments/SegmentControlled.tsx",lineNumber:74,columnNumber:9},this),e.jsxDEV("input",{type:"hidden",name:k,value:String(o),ref:R,disabled:_,onBlur:M},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/formComponents/FormSegments/SegmentControlled.tsx",lineNumber:87,columnNumber:7},this),e.jsxDEV(Se,{...v,selectionMode:n,children:T.map(p=>{const{value:N,...F}=p,l=String(N);return e.jsxDEV(Be,{value:l,type:"button",...F},l,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/formComponents/FormSegments/SegmentControlled.tsx",lineNumber:101,columnNumber:13},this)})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/formComponents/FormSegments/SegmentControlled.tsx",lineNumber:95,columnNumber:7},this),j&&b&&e.jsxDEV(Ve,{color:De("negative"),children:b},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/formComponents/FormSegments/SegmentControlled.tsx",lineNumber:111,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/formComponents/FormSegments/SegmentControlled.tsx",lineNumber:72,columnNumber:5},this)}try{$.displayName="SegmentControlled",$.__docgenInfo={description:"",displayName:"SegmentControlled",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"TextFieldProps"}},titleCaption:{defaultValue:null,description:"",name:"titleCaption",required:!0,type:{name:"TextFieldProps"}},hintText:{defaultValue:null,description:"",name:"hintText",required:!0,type:{name:"TextFieldProps"}},hintTrigger:{defaultValue:{value:"hover"},description:"",name:"hintTrigger",required:!1,type:{name:"TextFieldProps"}},hintHasArrow:{defaultValue:{value:"true"},description:"",name:"hintHasArrow",required:!1,type:{name:"TextFieldProps"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"unknown"}},onRHFChange:{defaultValue:null,description:"",name:"onRHFChange",required:!0,type:{name:"(next: string[]) => void"}},onUserChange:{defaultValue:null,description:"",name:"onUserChange",required:!1,type:{name:"(next: string[]) => void"}},selectionMode:{defaultValue:{value:"single"},description:"",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"multiple"'},{value:'"single"'}]}},optionsRequired:{defaultValue:null,description:"",name:"optionsRequired",required:!1,type:{name:"RegisterOptions<FieldValues, Path<TFieldValues>>"}},groupProps:{defaultValue:null,description:"",name:"groupProps",required:!0,type:{name:"TGroupPropsForStyled<TFieldValues>"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"any[]"}},singleSelectedRequired:{defaultValue:null,description:"",name:"singleSelectedRequired",required:!1,type:{name:"boolean"}},showError:{defaultValue:{value:"true"},description:"",name:"showError",required:!1,type:{name:"boolean"}}}}}catch{}const x=o=>{const{name:r,options:u,onChange:n,singleSelectedRequired:t,selectionMode:s="single",view:d,size:c="s",pilled:S,hasBackground:B,stretch:V,orientation:b,className:T,style:h,items:j,label:C,titleCaption:m,hintText:A,hintTrigger:q,hintHasArrow:z,showError:R=!0}=o,k=we(u),{control:_,rules:M,remOptions:v}=k;return e.jsxDEV(ve,{control:_,name:r,rules:M,...v,render:({field:{onChange:P,value:D,ref:p,onBlur:N,disabled:F,name:l,...O},fieldState:{error:G}})=>{const he={...O,name:r,className:T,style:h,disabled:F,size:c,view:d,pilled:S,hasBackground:B,stretch:V,orientation:b==="vertical"?"vertical":void 0,$mode:b==="vertical"?"column":"row",ref:p,onBlur:N},Z=Re(D);return e.jsxDEV(je,{defaultSelected:Z,singleSelectedRequired:t,...O,children:e.jsxDEV($,{value:D,onRHFChange:W=>P(W),onUserChange:W=>{n==null||n(W,k)},label:C,titleCaption:m,hintText:A,hintTrigger:q,hintHasArrow:z,optionsRequired:u,errorMessage:G==null?void 0:G.message,groupProps:he,selectionMode:s,items:j,singleSelectedRequired:t,showError:R},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/formComponents/FormSegments/FormSegmentGroup.tsx",lineNumber:90,columnNumber:13},void 0)},`segment-${r}-${Z.join("|")}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/formComponents/FormSegments/FormSegmentGroup.tsx",lineNumber:83,columnNumber:11},void 0)}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/formComponents/FormSegments/FormSegmentGroup.tsx",lineNumber:44,columnNumber:5},void 0)};x.displayName="FormSegmentGroup";try{x.displayName="FormSegmentGroup",x.__docgenInfo={description:"",displayName:"FormSegmentGroup",props:{}}}catch{}const xe=[{label:"Алексей Смирнов"},{label:"Екатерина Иванова"},{label:"Дмитрий Петров"},{label:"Ольга Васильева"},{label:"Сергей Сидоров"},{label:"Мария Кузнецова"},{label:"Андрей Попов"},{label:"Анна Николаева"},{label:"Иван Федоров"},{label:"Наталья Морозова"},{label:"Михаил Павлов"},{label:"Елена Романова"},{label:"Владимир Киселев"},{label:"Татьяна Захарова"},{label:"Николай Семенов"},{label:"Юлия Белова"},{label:"Александр Гусев"},{label:"Оксана Яковлева"},{label:"Игорь Егорова"},{label:"Вера Тихомирова"},{label:"Артем Григорьев"},{label:"Евгения Козлова"},{label:"Максим Лебедев"},{label:"Виктория Калашникова"},{label:"Константин Абрамов"},{label:"Светлана Новикова"},{label:"Юрий Волков"},{label:"Валентина Воробьева"},{label:"Павел Сергеев"},{label:"Людмила Виноградова"},{label:"Антон Соловьев"},{label:"Маргарита Цветкова"},{label:"Роман Трофимов"},{label:"Лариса Зайцева"},{label:"Евгений Никитин"},{label:"Галина Михайлова"},{label:"Владислав Антонов"},{label:"Дарья Филатова"},{label:"Олег Буров"},{label:"Инна Медведева"},{label:"Вячеслав Крылов"},{label:"Тамара Беляева"},{label:"Кирилл Марков"},{label:"Марина Пономарева"},{label:"Борис Захаров"},{label:"Жанна Савельева"},{label:"Федор Жуков"},{label:"Елизавета Логинова"},{label:"Виктор Рыбаков"},{label:"Лилия Макарова"}],i=[{value:"north_america",label:"Северная Америка"},{value:"south_america",label:"Южная Америка",items:[{value:"brazil",label:"Бразилия",items:[{value:"rio_de_janeiro",label:"Рио-де-Жанейро"},{value:"sao_paulo",label:"Сан-Паулу"}]},{value:"argentina",label:"Аргентина",items:[{value:"buenos_aires",label:"Буэнос-Айрес"},{value:"cordoba",label:"Кордова"}]},{value:"colombia",label:"Колумбия",items:[{value:"bogota",label:"Богота"},{value:"medellin",label:"Медельин"}]}]},{value:"europe",label:"Европа",items:[{value:"france",label:"Франция",items:[{value:"paris",label:"Париж"},{value:"lyon",label:"Лион"}]},{value:"germany",label:"Германия",items:[{value:"berlin",label:"Берлин"},{value:"munich",label:"Мюнхен"}]},{value:"italy",label:"Италия",items:[{value:"rome",label:"Рим"},{value:"milan",label:"Милан"}]},{value:"spain",label:"Испания",items:[{value:"madrid",label:"Мадрид"},{value:"barcelona",label:"Барселона"}]},{value:"united_kingdom",label:"Великобритания",items:[{value:"london",label:"Лондон"},{value:"manchester",label:"Манчестер"}]}]},{value:"asia",label:"Азия",items:[{value:"china",label:"Китай",items:[{value:"beijing",label:"Пекин"},{value:"shanghai",label:"Шанхай"}]},{value:"japan",label:"Япония",items:[{value:"tokyo",label:"Токио"},{value:"osaka",label:"Осака"}]},{value:"india",label:"Индия",items:[{value:"delhi",label:"Дели"},{value:"mumbai",label:"Мумбаи"}]},{value:"south_korea",label:"Южная Корея",items:[{value:"seoul",label:"Сеул"},{value:"busan",label:"Пусан"}]},{value:"thailand",label:"Таиланд",items:[{value:"bangkok",label:"Бангкок"},{value:"phuket",label:"Пхукет"}]}]},{value:"africa",label:"Африка",isDisabled:!0}],_e={title:"Формы/Компоненты формы",tags:["!autodocs"],component:()=>null},Me=J({textfield:a().min(1,"Заполните обязательное поле").min(3,"обязательное больше 3"),mask:a().min(1,"Заполните обязательное поле").min(3,"обязательное больше 3"),textarea:a().min(1,"Заполните обязательное поле").min(3,"обязательное больше 3"),switch:Q(),checkbox:Q(),autocomplete:a().min(1,"Заполните обязательное поле").min(3,"обязательное больше 3"),combobox:a().min(1,"Заполните обязательное поле"),comboboxMultiple:H(a()).min(1,"Заполните обязательное поле"),select:a().min(1,"Заполните обязательное поле"),selectMulti:H(a()).min(1,"Заполните обязательное поле"),numberFormat:a().min(1,"Заполните обязательное поле"),date:a().min(1,"Заполните обязательное поле").min(7,"Неверно введённая дата"),dateRange:J({dateFrom:a().min(1,"Укажите начальную дату"),dateTo:a().min(1,"Укажите конечную дату")}).refine(o=>{if(!o.dateFrom||!o.dateTo)return!0;const r=t=>{const[s,d,c]=t.split(".");return new Date(`${c}-${d}-${s}`)},u=r(o.dateFrom),n=r(o.dateTo);return Number.isNaN(u.getTime())||Number.isNaN(n.getTime())?!0:n>=u}),gender:a().min(1,"Заполните обязательное поле"),status:H(a()).min(1,{message:"Заполните хотя бы одно поле."}).refine(o=>o.every(r=>r.trim().length>0),{message:"Значения не должны быть пустыми."})}),Pe=`
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
`,f={name:"Компоненты формы",...oe({preCode:Pe,previewSource:"shown"}),render:()=>{const o=se({reValidateMode:"onBlur",defaultValues:{textfield:"",mask:"",textarea:"",checkbox:!1,switch:!0,autocomplete:"",combobox:"",comboboxMultiple:[],select:"",selectMulti:[],numberFormat:"",date:"",dateRange:{dateFrom:"05.05.2024",dateTo:"07.05.2024"},gender:"male",status:["ready"]}}),r=u=>{alert(JSON.stringify(u,void 0,2))};return e.jsxDEV("form",{noValidate:!0,onSubmit:o.handleSubmit(r),style:{display:"flex",flexDirection:"column",gap:16},children:e.jsxDEV(me,{...o,children:[e.jsxDEV(pe,{label:"FormTextField",name:"textfield",options:{minLength:{value:3,message:"значение должно быть длиннее 3"},required:!0}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:164,columnNumber:11},void 0),e.jsxDEV(ae,{label:"FormMask",name:"mask",mask:"*-*-*",options:{minLength:{value:3,message:"значение должно быть длиннее 3"},required:!0}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:175,columnNumber:11},void 0),e.jsxDEV(be,{label:"FormTextArea",name:"textarea",autoResize:!0,options:{validate:u=>(u??"").includes("@")?!0:"должен содержаться символ @",maxLength:50,required:"Заполните обязательное поле"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:187,columnNumber:11},void 0),e.jsxDEV(ne,{name:"checkbox",label:"Checkbox",size:"m",options:{required:"Заполните обязательное поле"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:202,columnNumber:11},void 0),e.jsxDEV(ce,{name:"switch",label:"Switch",labelPosition:"after",options:{validate:u=>u?!0:"Заполните обязательное поле"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:210,columnNumber:11},void 0),e.jsxDEV(re,{name:"autocomplete",suggestions:xe,label:"FormAutocomplete",options:{minLength:{value:2,message:"обязательное больше 2"},required:"Заполните обязательное поле"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:224,columnNumber:11},void 0),e.jsxDEV(y,{name:"combobox",label:"FormCombobox",items:i,options:{required:"Заполните обязательное поле"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:236,columnNumber:11},void 0),e.jsxDEV(y,{label:"FormCombobox multiple",name:"comboboxMultiple",multiple:!0,items:i,options:{validate:u=>u.length<3?"минимум три выбранных элемента":!0,required:"Заполните обязательное поле"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:244,columnNumber:11},void 0),e.jsxDEV(w,{style:{maxWidth:"50%"},label:"FormSelect",name:"select",items:i,options:{required:"Заполните обязательное поле"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:259,columnNumber:11},void 0),e.jsxDEV(w,{label:"FormSelect multiple",name:"selectMulti",multiselect:!0,items:i,options:{validate:u=>u.length<3?"минимум три выбранных элемента":!0,required:"Заполните обязательное поле"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:270,columnNumber:11},void 0),e.jsxDEV(te,{name:"numberFormat",label:"FormNumberFormat",size:"s",thousandSeparator:" ",decimalSeparator:".",options:{minLength:{value:3,message:"значение должно быть длиннее 3"},required:"Заполните обязательное поле"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:285,columnNumber:11},void 0),e.jsxDEV(Fe,{name:"date",label:"Date",invalidFormatMessage:"некорректно",size:"s",options:{required:"обязательное поле",max:{value:new Date().getTime(),message:"указанная дата за пределами максимально доступной"},min:{value:new Date().getTime()-20*24*60*60*1e3,message:"указанная дата за пределами минимально доступной"}},placement:["left","top"],placeholder:"выберите дату",onChange:u=>{console.debug("FormDatePicker data",u)},style:{maxWidth:"559px"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:299,columnNumber:11},void 0),e.jsxDEV(fe,{name:"dateRange",label:"DateRange",isDoubleCalendar:!0,size:"s",invalidFormatMessage:"incorrect date",options:{required:"обязательное поле",min:{value:new Date(2024,0,1).getTime(),message:"мероприятия доступны с 2024 года"},max:{value:new Date(2024,11,31).getTime(),message:"только события 2024 года"},validate:{minDuration:u=>{if(!(u!=null&&u.dateFrom)||!(u!=null&&u.dateTo))return!0;const n=new Date(u.dateFrom.split(".").reverse().join("-")),t=new Date(u.dateTo.split(".").reverse().join("-"));return Number.isNaN(n.getTime())||Number.isNaN(t.getTime())?!0:t.getTime()-n.getTime()<7*864e5?"Минимальный период - 7 дней":!0},noWeekends:u=>{const n=new Date(u.dateFrom.split(".").reverse().join("-"));return[0,6].includes(n.getDay())?"Нельзя начинать в выходные":!0}}},style:{maxWidth:"559px"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:325,columnNumber:11},void 0),e.jsxDEV(ie,{hintText:"Подсказка",label:"Label",titleCaption:"TitleCaption",name:"gender",options:{required:"Заполните обязательное поле"},size:"s",children:[e.jsxDEV(E,{value:"male",label:"Мужской",size:"m"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:383,columnNumber:13},void 0),e.jsxDEV(E,{value:"female",label:"Женский",size:"m"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:384,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:373,columnNumber:11},void 0),e.jsxDEV(x,{name:"status",label:"Статус документа",titleCaption:"Выберите один",options:{required:"Выберите статус"},size:"s",hasBackground:!0,stretch:!0,pilled:!0,onChange:u=>console.debug("[FormSegmentGroup]:onChange:",u),hintHasArrow:!0,hintText:"Статус документа",items:[{label:"draft",value:"draft",view:"secondary"},{label:"ready",value:"ready",view:"secondary"},{label:"signed",value:"signed",view:"secondary"}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:386,columnNumber:11},void 0),e.jsxDEV(de,{type:"submit",children:"Отправить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:409,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:163,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:154,columnNumber:7},void 0)}},Ge=`
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
`,g={name:"Пример формы заполнения c использованием библиотеки Zod для валидации",...oe({preCode:Ge,previewSource:"shown"}),render:()=>{const o=se({reValidateMode:"onSubmit",defaultValues:{textfield:"",mask:"",textarea:"",switch:!0,autocomplete:"",combobox:"",comboboxMultiple:[],select:"",selectMulti:[],numberFormat:"",date:"",dateRange:{dateFrom:"",dateTo:""},gender:"male",status:["ready"]},resolver:ke(Me)}),r=u=>{alert(JSON.stringify(u,void 0,2))};return e.jsxDEV("form",{noValidate:!0,onSubmit:o.handleSubmit(r),style:{display:"flex",flexDirection:"column",gap:16},children:e.jsxDEV(me,{...o,children:[e.jsxDEV(pe,{label:"FormTextField",name:"textfield"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:484,columnNumber:11},void 0),e.jsxDEV(ae,{label:"FormMask",name:"mask",mask:"*-*-*"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:485,columnNumber:11},void 0),e.jsxDEV(be,{label:"FormTextArea",name:"textarea",autoResize:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:486,columnNumber:11},void 0),e.jsxDEV(ne,{name:"checkbox",label:"Checkbox",size:"m"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:487,columnNumber:11},void 0),e.jsxDEV(ce,{name:"switch",label:"Switch",labelPosition:"after"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:488,columnNumber:11},void 0),e.jsxDEV(re,{name:"autocomplete",suggestions:xe,label:"FormAutocomplete"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:490,columnNumber:11},void 0),e.jsxDEV(y,{name:"combobox",label:"FormCombobox",items:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:495,columnNumber:11},void 0),e.jsxDEV(y,{label:"FormCombobox multiple",name:"comboboxMultiple",multiple:!0,items:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:496,columnNumber:11},void 0),e.jsxDEV(w,{label:"FormSelect",name:"select",items:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:502,columnNumber:11},void 0),e.jsxDEV(w,{style:{maxWidth:"50%"},label:"FormSelect multiple",name:"selectMulti",multiselect:!0,items:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:503,columnNumber:11},void 0),e.jsxDEV(te,{name:"numberFormat",label:"FormNumberFormat",size:"s",thousandSeparator:" ",decimalSeparator:"."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:512,columnNumber:11},void 0),e.jsxDEV(Fe,{name:"date",label:"Date",invalidFormatMessage:"incorrect date",onChange:u=>{console.debug("FormDatePicker data",u)},style:{maxWidth:"559px"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:519,columnNumber:11},void 0),e.jsxDEV(fe,{name:"dateRange",label:"DateRange",invalidFormatMessage:"incorrect date",isDoubleCalendar:!0,max:new Date(new Date().setDate(new Date().getDate()+2)),size:"s",style:{maxWidth:"559px"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:531,columnNumber:11},void 0),e.jsxDEV(ie,{name:"gender",label:"Лейбл группы",radioGroupMode:"row",hintText:"Подсказка",children:[e.jsxDEV(E,{value:"male",label:"Мужской",size:"m"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:548,columnNumber:13},void 0),e.jsxDEV(E,{value:"female",label:"Женский",size:"m"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:549,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:542,columnNumber:11},void 0),e.jsxDEV(x,{name:"status",label:"Статус документа",titleCaption:"Выберите один",size:"s",hasBackground:!0,stretch:!0,pilled:!0,onChange:u=>console.debug("[FormSegmentGroup]:onChange",u),hintHasArrow:!0,hintText:"Статус документа",items:[{label:"draft",value:"draft",view:"secondary",size:"s"},{label:"ready",value:"ready",view:"secondary",size:"s"},{label:"signed",value:"signed",view:"secondary",size:"s"}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:551,columnNumber:11},void 0),e.jsxDEV(de,{type:"submit",children:"Отправить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:576,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:483,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:474,columnNumber:7},void 0)}};var X,K,Y;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
            value: new Date().getTime(),
            message: 'указанная дата за пределами максимально доступной'
          },
          min: {
            value: new Date().getTime() - 20 * 24 * 60 * 60 * 1000,
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
}`,...(Y=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var U,ee,ue;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
          <FormDatePickerRange name="dateRange" label="DateRange" invalidFormatMessage="incorrect date" isDoubleCalendar max={new Date(new Date().setDate(new Date().getDate() + 2))} size="s" style={{
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
}`,...(ue=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ue.source}}};const We=["ExampleWithoutValidator","WithZod"],du=Object.freeze(Object.defineProperty({__proto__:null,ExampleWithoutValidator:f,WithZod:g,__namedExportsOrder:We,default:_e},Symbol.toStringTag,{value:"Module"}));export{du as F};
