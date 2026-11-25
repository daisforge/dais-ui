import{b as e}from"./react-UEdzNlUe.js";import{F as c}from"./tableData-DKA5H0bF.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{t as _}from"./@hookform/resolvers-D1dedLC8.js";import{F as D}from"./FormAutocomplete-2YzB7Lmb.js";import{F as v}from"./FormCheckbox-cO2RdBBo.js";import{F as l}from"./FormCombobox-HdbKpxLK.js";import{F as h}from"./FormMask-BmJi0tnH.js";import{F as E}from"./FormNumberFormat-EjGChVHW.js";import{F as N,a as d}from"./FormRadioGroupBox-DGlE95m4.js";import{F as y}from"./FormSegmentGroup-BW4iZ7sB.js";import{F as b}from"./FormSelect-CXzGkmvE.js";import{F as w}from"./FormSwitch-CbtpvGsg.js";import{F as B}from"./FormTextArea-Dtk3Z4mG.js";import{F as S}from"./FormTextField-BhWRGjQf.js";import{b as T,F as V}from"./react-hook-form-fQVN7FMv.js";import{z as o}from"./zod-mSkvzYyn.js";import{F as j,a as A}from"./FormDatePickers-B-WHVRQy.js";import{c as M}from"./@salutejs/sdds-finai-DfKFI7EK.js";const z=[{label:"Алексей Смирнов"},{label:"Екатерина Иванова"},{label:"Дмитрий Петров"},{label:"Ольга Васильева"},{label:"Сергей Сидоров"},{label:"Мария Кузнецова"},{label:"Андрей Попов"},{label:"Анна Николаева"},{label:"Иван Федоров"},{label:"Наталья Морозова"},{label:"Михаил Павлов"},{label:"Елена Романова"},{label:"Владимир Киселев"},{label:"Татьяна Захарова"},{label:"Николай Семенов"},{label:"Юлия Белова"},{label:"Александр Гусев"},{label:"Оксана Яковлева"},{label:"Игорь Егорова"},{label:"Вера Тихомирова"},{label:"Артем Григорьев"},{label:"Евгения Козлова"},{label:"Максим Лебедев"},{label:"Виктория Калашникова"},{label:"Константин Абрамов"},{label:"Светлана Новикова"},{label:"Юрий Волков"},{label:"Валентина Воробьева"},{label:"Павел Сергеев"},{label:"Людмила Виноградова"},{label:"Антон Соловьев"},{label:"Маргарита Цветкова"},{label:"Роман Трофимов"},{label:"Лариса Зайцева"},{label:"Евгений Никитин"},{label:"Галина Михайлова"},{label:"Владислав Антонов"},{label:"Дарья Филатова"},{label:"Олег Буров"},{label:"Инна Медведева"},{label:"Вячеслав Крылов"},{label:"Тамара Беляева"},{label:"Кирилл Марков"},{label:"Марина Пономарева"},{label:"Борис Захаров"},{label:"Жанна Савельева"},{label:"Федор Жуков"},{label:"Елизавета Логинова"},{label:"Виктор Рыбаков"},{label:"Лилия Макарова"}],a=[{value:"north_america",label:"Северная Америка"},{value:"south_america",label:"Южная Америка",items:[{value:"brazil",label:"Бразилия",items:[{value:"rio_de_janeiro",label:"Рио-де-Жанейро"},{value:"sao_paulo",label:"Сан-Паулу"}]},{value:"argentina",label:"Аргентина",items:[{value:"buenos_aires",label:"Буэнос-Айрес"},{value:"cordoba",label:"Кордова"}]},{value:"colombia",label:"Колумбия",items:[{value:"bogota",label:"Богота"},{value:"medellin",label:"Медельин"}]}]},{value:"europe",label:"Европа",items:[{value:"france",label:"Франция",items:[{value:"paris",label:"Париж"},{value:"lyon",label:"Лион"}]},{value:"germany",label:"Германия",items:[{value:"berlin",label:"Берлин"},{value:"munich",label:"Мюнхен"}]},{value:"italy",label:"Италия",items:[{value:"rome",label:"Рим"},{value:"milan",label:"Милан"}]},{value:"spain",label:"Испания",items:[{value:"madrid",label:"Мадрид"},{value:"barcelona",label:"Барселона"}]},{value:"united_kingdom",label:"Великобритания",items:[{value:"london",label:"Лондон"},{value:"manchester",label:"Манчестер"}]}]},{value:"asia",label:"Азия",items:[{value:"china",label:"Китай",items:[{value:"beijing",label:"Пекин"},{value:"shanghai",label:"Шанхай"}]},{value:"japan",label:"Япония",items:[{value:"tokyo",label:"Токио"},{value:"osaka",label:"Осака"}]},{value:"india",label:"Индия",items:[{value:"delhi",label:"Дели"},{value:"mumbai",label:"Мумбаи"}]},{value:"south_korea",label:"Южная Корея",items:[{value:"seoul",label:"Сеул"},{value:"busan",label:"Пусан"}]},{value:"thailand",label:"Таиланд",items:[{value:"bangkok",label:"Бангкок"},{value:"phuket",label:"Пхукет"}]}]},{value:"africa",label:"Африка",isDisabled:!0}],W={title:"Формы/Компоненты формы",tags:["!autodocs"],component:()=>null},G=o.object({textfield:o.string().min(1,"Заполните обязательное поле").min(3,"обязательное больше 3"),mask:o.string().min(1,"Заполните обязательное поле").min(3,"обязательное больше 3"),textarea:o.string().min(1,"Заполните обязательное поле").min(3,"обязательное больше 3"),switch:o.boolean(),checkbox:o.boolean(),autocomplete:o.string().min(1,"Заполните обязательное поле").min(3,"обязательное больше 3"),combobox:o.string().min(1,"Заполните обязательное поле"),comboboxMultiple:o.array(o.string()).min(1,"Заполните обязательное поле"),select:o.string().min(1,"Заполните обязательное поле"),selectMulti:o.array(o.string()).min(1,"Заполните обязательное поле"),numberFormat:o.string().min(1,"Заполните обязательное поле"),date:o.string().min(1,"Заполните обязательное поле").min(7,"Неверно введённая дата"),dateRange:o.object({dateFrom:o.string().min(1,"Укажите начальную дату"),dateTo:o.string().min(1,"Укажите конечную дату")}).refine(r=>{if(!r.dateFrom||!r.dateTo)return!0;const n=m=>{const[R,P,q]=m.split(".");return new Date(`${q}-${P}-${R}`)},u=n(r.dateFrom),t=n(r.dateTo);return Number.isNaN(u.getTime())||Number.isNaN(t.getTime())?!0:t>=u}),gender:o.string().min(1,"Заполните обязательное поле"),status:o.array(o.string()).min(1,{message:"Заполните хотя бы одно поле."}).refine(r=>r.every(n=>n.trim().length>0),{message:"Значения не должны быть пустыми."})}),L=`
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
`,s={name:"Компоненты формы",...C({preCode:L,previewSource:"shown"}),render:()=>{const r=T({reValidateMode:"onBlur",defaultValues:{textfield:"",mask:"",textarea:"",checkbox:!1,switch:!0,autocomplete:"",combobox:"",comboboxMultiple:[],select:"",selectMulti:[],numberFormat:"",date:"",dateRange:{dateFrom:"05.05.2024",dateTo:"07.05.2024"},gender:"male",status:["ready"]}}),n=u=>{alert(JSON.stringify(u,void 0,2))};return e.jsxDEV("form",{noValidate:!0,onSubmit:r.handleSubmit(n),style:{display:"flex",flexDirection:"column",gap:16},children:e.jsxDEV(V,{...r,children:[e.jsxDEV(S,{label:"FormTextField",name:"textfield",options:{minLength:{value:3,message:"значение должно быть длиннее 3"},required:!0}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:165,columnNumber:11},void 0),e.jsxDEV(h,{label:"FormMask",name:"mask",mask:"*-*-*",options:{minLength:{value:3,message:"значение должно быть длиннее 3"},required:!0}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:176,columnNumber:11},void 0),e.jsxDEV(B,{label:"FormTextArea",name:"textarea",autoResize:!0,options:{validate:u=>(u??"").includes("@")?!0:"должен содержаться символ @",maxLength:50,required:"Заполните обязательное поле"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:188,columnNumber:11},void 0),e.jsxDEV(v,{name:"checkbox",label:"Checkbox",size:"m",options:{required:"Заполните обязательное поле"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:203,columnNumber:11},void 0),e.jsxDEV(w,{name:"switch",label:"Switch",labelPosition:"after",options:{validate:u=>u?!0:"Заполните обязательное поле"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:211,columnNumber:11},void 0),e.jsxDEV(D,{name:"autocomplete",suggestions:z,label:"FormAutocomplete",options:{minLength:{value:2,message:"обязательное больше 2"},required:"Заполните обязательное поле"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:225,columnNumber:11},void 0),e.jsxDEV(l,{name:"combobox",label:"FormCombobox",items:a,options:{required:"Заполните обязательное поле"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:237,columnNumber:11},void 0),e.jsxDEV(l,{label:"FormCombobox multiple",name:"comboboxMultiple",multiple:!0,items:a,options:{validate:u=>u.length<3?"минимум три выбранных элемента":!0,required:"Заполните обязательное поле"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:245,columnNumber:11},void 0),e.jsxDEV(b,{style:{maxWidth:"50%"},label:"FormSelect",name:"select",items:a,options:{required:"Заполните обязательное поле"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:260,columnNumber:11},void 0),e.jsxDEV(b,{label:"FormSelect multiple",name:"selectMulti",multiselect:!0,items:a,options:{validate:u=>u.length<3?"минимум три выбранных элемента":!0,required:"Заполните обязательное поле"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:271,columnNumber:11},void 0),e.jsxDEV(E,{name:"numberFormat",label:"FormNumberFormat",size:"s",thousandSeparator:" ",decimalSeparator:".",options:{minLength:{value:3,message:"значение должно быть длиннее 3"},required:"Заполните обязательное поле"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:286,columnNumber:11},void 0),e.jsxDEV(j,{name:"date",label:"Date",invalidFormatMessage:"некорректно",size:"s",options:{required:"обязательное поле",max:{value:c,message:"указанная дата за пределами максимально доступной"},min:{value:c-20*24*60*60*1e3,message:"указанная дата за пределами минимально доступной"}},placement:["left","top"],placeholder:"выберите дату",onChange:u=>{console.debug("FormDatePicker data",u)},style:{maxWidth:"559px"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:300,columnNumber:11},void 0),e.jsxDEV(A,{name:"dateRange",label:"DateRange",isDoubleCalendar:!0,size:"s",invalidFormatMessage:"incorrect date",options:{required:"обязательное поле",min:{value:new Date(2024,0,1).getTime(),message:"мероприятия доступны с 2024 года"},max:{value:new Date(2024,11,31).getTime(),message:"только события 2024 года"},validate:{minDuration:u=>{if(!(u!=null&&u.dateFrom)||!(u!=null&&u.dateTo))return!0;const t=new Date(u.dateFrom.split(".").reverse().join("-")),m=new Date(u.dateTo.split(".").reverse().join("-"));return Number.isNaN(t.getTime())||Number.isNaN(m.getTime())?!0:m.getTime()-t.getTime()<7*864e5?"Минимальный период - 7 дней":!0},noWeekends:u=>{const t=new Date(u.dateFrom.split(".").reverse().join("-"));return[0,6].includes(t.getDay())?"Нельзя начинать в выходные":!0}}},style:{maxWidth:"559px"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:326,columnNumber:11},void 0),e.jsxDEV(N,{hintText:"Подсказка",label:"Label",titleCaption:"TitleCaption",name:"gender",options:{required:"Заполните обязательное поле"},size:"s",children:[e.jsxDEV(d,{value:"male",label:"Мужской",size:"m"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:384,columnNumber:13},void 0),e.jsxDEV(d,{value:"female",label:"Женский",size:"m"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:385,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:374,columnNumber:11},void 0),e.jsxDEV(y,{name:"status",label:"Статус документа",titleCaption:"Выберите один",options:{required:"Выберите статус"},size:"s",hasBackground:!0,stretch:!0,pilled:!0,onChange:u=>console.debug("[FormSegmentGroup]:onChange:",u),hintHasArrow:!0,hintText:"Статус документа",items:[{label:"draft",value:"draft",view:"secondary"},{label:"ready",value:"ready",view:"secondary"},{label:"signed",value:"signed",view:"secondary"}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:387,columnNumber:11},void 0),e.jsxDEV(M,{type:"submit",children:"Отправить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:410,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:164,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:155,columnNumber:7},void 0)}},I=`
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
`,i={name:"Пример формы заполнения c использованием библиотеки Zod для валидации",...C({preCode:I,previewSource:"shown"}),render:()=>{const r=T({reValidateMode:"onSubmit",defaultValues:{textfield:"",mask:"",textarea:"",switch:!0,autocomplete:"",combobox:"",comboboxMultiple:[],select:"",selectMulti:[],numberFormat:"",date:"",dateRange:{dateFrom:"",dateTo:""},gender:"male",status:["ready"]},resolver:_(G)}),n=u=>{alert(JSON.stringify(u,void 0,2))};return e.jsxDEV("form",{noValidate:!0,onSubmit:r.handleSubmit(n),style:{display:"flex",flexDirection:"column",gap:16},children:e.jsxDEV(V,{...r,children:[e.jsxDEV(S,{label:"FormTextField",name:"textfield"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:485,columnNumber:11},void 0),e.jsxDEV(h,{label:"FormMask",name:"mask",mask:"*-*-*"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:486,columnNumber:11},void 0),e.jsxDEV(B,{label:"FormTextArea",name:"textarea",autoResize:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:487,columnNumber:11},void 0),e.jsxDEV(v,{name:"checkbox",label:"Checkbox",size:"m"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:488,columnNumber:11},void 0),e.jsxDEV(w,{name:"switch",label:"Switch",labelPosition:"after"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:489,columnNumber:11},void 0),e.jsxDEV(D,{name:"autocomplete",suggestions:z,label:"FormAutocomplete"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:491,columnNumber:11},void 0),e.jsxDEV(l,{name:"combobox",label:"FormCombobox",items:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:496,columnNumber:11},void 0),e.jsxDEV(l,{label:"FormCombobox multiple",name:"comboboxMultiple",multiple:!0,items:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:497,columnNumber:11},void 0),e.jsxDEV(b,{label:"FormSelect",name:"select",items:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:503,columnNumber:11},void 0),e.jsxDEV(b,{style:{maxWidth:"50%"},label:"FormSelect multiple",name:"selectMulti",multiselect:!0,items:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:504,columnNumber:11},void 0),e.jsxDEV(E,{name:"numberFormat",label:"FormNumberFormat",size:"s",thousandSeparator:" ",decimalSeparator:"."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:513,columnNumber:11},void 0),e.jsxDEV(j,{name:"date",label:"Date",invalidFormatMessage:"incorrect date",onChange:u=>{console.debug("FormDatePicker data",u)},style:{maxWidth:"559px"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:520,columnNumber:11},void 0),e.jsxDEV(A,{name:"dateRange",label:"DateRange",invalidFormatMessage:"incorrect date",isDoubleCalendar:!0,max:new Date(c+2*24*60*60*1e3),size:"s",style:{maxWidth:"559px"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:532,columnNumber:11},void 0),e.jsxDEV(N,{name:"gender",label:"Лейбл группы",radioGroupMode:"row",hintText:"Подсказка",children:[e.jsxDEV(d,{value:"male",label:"Мужской",size:"m"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:549,columnNumber:13},void 0),e.jsxDEV(d,{value:"female",label:"Женский",size:"m"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:550,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:543,columnNumber:11},void 0),e.jsxDEV(y,{name:"status",label:"Статус документа",titleCaption:"Выберите один",size:"s",hasBackground:!0,stretch:!0,pilled:!0,onChange:u=>console.debug("[FormSegmentGroup]:onChange",u),hintHasArrow:!0,hintText:"Статус документа",items:[{label:"draft",value:"draft",view:"secondary",size:"s"},{label:"ready",value:"ready",view:"secondary",size:"s"},{label:"signed",value:"signed",view:"secondary",size:"s"}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:552,columnNumber:11},void 0),e.jsxDEV(M,{type:"submit",children:"Отправить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:577,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:484,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FormComponents/FormComponents.stories.tsx",lineNumber:475,columnNumber:7},void 0)}};var F,p,f;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var x,g,k;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(k=(g=i.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const O=["ExampleWithoutValidator","WithZod"],le=Object.freeze(Object.defineProperty({__proto__:null,ExampleWithoutValidator:s,WithZod:i,__namedExportsOrder:O,default:W},Symbol.toStringTag,{value:"Module"}));export{le as F};
