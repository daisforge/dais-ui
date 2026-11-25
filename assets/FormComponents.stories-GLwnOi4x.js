import{j as e}from"./react-DYHuXpTF.js";import{F as c}from"./tableData-DKA5H0bF.js";import{s as h}from"./storySourceDoc-tVKyHcEN.js";import{t as V}from"./@hookform/resolvers-DWtKLEPx.js";import{F as f}from"./FormAutocomplete-Ca1oqZGP.js";import{F as C}from"./FormCheckbox-kT-dFhH1.js";import{F as s}from"./FormCombobox-C9SWXyeW.js";import{F as E}from"./FormMask-ZUVP6UI9.js";import{F as B}from"./FormNumberFormat-Dkpean-w.js";import{F as S,a as b}from"./FormRadioGroupBox-CscQsMy2.js";import{F as k}from"./FormSegmentGroup-CsxLF7iP.js";import{F as d}from"./FormSelect-WlOdDXcJ.js";import{F as y}from"./FormSwitch-9SKoS6vN.js";import{F as T}from"./FormTextArea-Bc_bvqQd.js";import{F as w}from"./FormTextField-CzIPhNMR.js";import{b as j,F as A}from"./react-hook-form-B7X3zJ5q.js";import{z as a}from"./zod-mSkvzYyn.js";import{F as M,a as z}from"./FormDatePickers-FDWadXDe.js";import{c as R}from"./@salutejs/sdds-finai-BHH5Fs72.js";const N=[{label:"Алексей Смирнов"},{label:"Екатерина Иванова"},{label:"Дмитрий Петров"},{label:"Ольга Васильева"},{label:"Сергей Сидоров"},{label:"Мария Кузнецова"},{label:"Андрей Попов"},{label:"Анна Николаева"},{label:"Иван Федоров"},{label:"Наталья Морозова"},{label:"Михаил Павлов"},{label:"Елена Романова"},{label:"Владимир Киселев"},{label:"Татьяна Захарова"},{label:"Николай Семенов"},{label:"Юлия Белова"},{label:"Александр Гусев"},{label:"Оксана Яковлева"},{label:"Игорь Егорова"},{label:"Вера Тихомирова"},{label:"Артем Григорьев"},{label:"Евгения Козлова"},{label:"Максим Лебедев"},{label:"Виктория Калашникова"},{label:"Константин Абрамов"},{label:"Светлана Новикова"},{label:"Юрий Волков"},{label:"Валентина Воробьева"},{label:"Павел Сергеев"},{label:"Людмила Виноградова"},{label:"Антон Соловьев"},{label:"Маргарита Цветкова"},{label:"Роман Трофимов"},{label:"Лариса Зайцева"},{label:"Евгений Никитин"},{label:"Галина Михайлова"},{label:"Владислав Антонов"},{label:"Дарья Филатова"},{label:"Олег Буров"},{label:"Инна Медведева"},{label:"Вячеслав Крылов"},{label:"Тамара Беляева"},{label:"Кирилл Марков"},{label:"Марина Пономарева"},{label:"Борис Захаров"},{label:"Жанна Савельева"},{label:"Федор Жуков"},{label:"Елизавета Логинова"},{label:"Виктор Рыбаков"},{label:"Лилия Макарова"}],n=[{value:"north_america",label:"Северная Америка"},{value:"south_america",label:"Южная Америка",items:[{value:"brazil",label:"Бразилия",items:[{value:"rio_de_janeiro",label:"Рио-де-Жанейро"},{value:"sao_paulo",label:"Сан-Паулу"}]},{value:"argentina",label:"Аргентина",items:[{value:"buenos_aires",label:"Буэнос-Айрес"},{value:"cordoba",label:"Кордова"}]},{value:"colombia",label:"Колумбия",items:[{value:"bogota",label:"Богота"},{value:"medellin",label:"Медельин"}]}]},{value:"europe",label:"Европа",items:[{value:"france",label:"Франция",items:[{value:"paris",label:"Париж"},{value:"lyon",label:"Лион"}]},{value:"germany",label:"Германия",items:[{value:"berlin",label:"Берлин"},{value:"munich",label:"Мюнхен"}]},{value:"italy",label:"Италия",items:[{value:"rome",label:"Рим"},{value:"milan",label:"Милан"}]},{value:"spain",label:"Испания",items:[{value:"madrid",label:"Мадрид"},{value:"barcelona",label:"Барселона"}]},{value:"united_kingdom",label:"Великобритания",items:[{value:"london",label:"Лондон"},{value:"manchester",label:"Манчестер"}]}]},{value:"asia",label:"Азия",items:[{value:"china",label:"Китай",items:[{value:"beijing",label:"Пекин"},{value:"shanghai",label:"Шанхай"}]},{value:"japan",label:"Япония",items:[{value:"tokyo",label:"Токио"},{value:"osaka",label:"Осака"}]},{value:"india",label:"Индия",items:[{value:"delhi",label:"Дели"},{value:"mumbai",label:"Мумбаи"}]},{value:"south_korea",label:"Южная Корея",items:[{value:"seoul",label:"Сеул"},{value:"busan",label:"Пусан"}]},{value:"thailand",label:"Таиланд",items:[{value:"bangkok",label:"Бангкок"},{value:"phuket",label:"Пхукет"}]}]},{value:"africa",label:"Африка",isDisabled:!0}],W={title:"Формы/Компоненты формы",tags:["!autodocs"],component:()=>null},G=a.object({textfield:a.string().min(1,"Заполните обязательное поле").min(3,"обязательное больше 3"),mask:a.string().min(1,"Заполните обязательное поле").min(3,"обязательное больше 3"),textarea:a.string().min(1,"Заполните обязательное поле").min(3,"обязательное больше 3"),switch:a.boolean(),checkbox:a.boolean(),autocomplete:a.string().min(1,"Заполните обязательное поле").min(3,"обязательное больше 3"),combobox:a.string().min(1,"Заполните обязательное поле"),comboboxMultiple:a.array(a.string()).min(1,"Заполните обязательное поле"),select:a.string().min(1,"Заполните обязательное поле"),selectMulti:a.array(a.string()).min(1,"Заполните обязательное поле"),numberFormat:a.string().min(1,"Заполните обязательное поле"),date:a.string().min(1,"Заполните обязательное поле").min(7,"Неверно введённая дата"),dateRange:a.object({dateFrom:a.string().min(1,"Укажите начальную дату"),dateTo:a.string().min(1,"Укажите конечную дату")}).refine(t=>{if(!t.dateFrom||!t.dateTo)return!0;const o=i=>{const[P,q,_]=i.split(".");return new Date(`${_}-${q}-${P}`)},u=o(t.dateFrom),l=o(t.dateTo);return Number.isNaN(u.getTime())||Number.isNaN(l.getTime())?!0:l>=u}),gender:a.string().min(1,"Заполните обязательное поле"),status:a.array(a.string()).min(1,{message:"Заполните хотя бы одно поле."}).refine(t=>t.every(o=>o.trim().length>0),{message:"Значения не должны быть пустыми."})}),L=`
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
`,r={name:"Компоненты формы",...h({preCode:L,previewSource:"shown"}),render:()=>{const t=j({reValidateMode:"onBlur",defaultValues:{textfield:"",mask:"",textarea:"",checkbox:!1,switch:!0,autocomplete:"",combobox:"",comboboxMultiple:[],select:"",selectMulti:[],numberFormat:"",date:"",dateRange:{dateFrom:"05.05.2024",dateTo:"07.05.2024"},gender:"male",status:["ready"]}}),o=u=>{alert(JSON.stringify(u,void 0,2))};return e.jsx("form",{noValidate:!0,onSubmit:t.handleSubmit(o),style:{display:"flex",flexDirection:"column",gap:16},children:e.jsxs(A,{...t,children:[e.jsx(w,{label:"FormTextField",name:"textfield",options:{minLength:{value:3,message:"значение должно быть длиннее 3"},required:!0}}),e.jsx(E,{label:"FormMask",name:"mask",mask:"*-*-*",options:{minLength:{value:3,message:"значение должно быть длиннее 3"},required:!0}}),e.jsx(T,{label:"FormTextArea",name:"textarea",autoResize:!0,options:{validate:u=>(u??"").includes("@")?!0:"должен содержаться символ @",maxLength:50,required:"Заполните обязательное поле"}}),e.jsx(C,{name:"checkbox",label:"Checkbox",size:"m",options:{required:"Заполните обязательное поле"}}),e.jsx(y,{name:"switch",label:"Switch",labelPosition:"after",options:{validate:u=>u?!0:"Заполните обязательное поле"}}),e.jsx(f,{name:"autocomplete",suggestions:N,label:"FormAutocomplete",options:{minLength:{value:2,message:"обязательное больше 2"},required:"Заполните обязательное поле"}}),e.jsx(s,{name:"combobox",label:"FormCombobox",items:n,options:{required:"Заполните обязательное поле"}}),e.jsx(s,{label:"FormCombobox multiple",name:"comboboxMultiple",multiple:!0,items:n,options:{validate:u=>u.length<3?"минимум три выбранных элемента":!0,required:"Заполните обязательное поле"}}),e.jsx(d,{style:{maxWidth:"50%"},label:"FormSelect",name:"select",items:n,options:{required:"Заполните обязательное поле"}}),e.jsx(d,{label:"FormSelect multiple",name:"selectMulti",multiselect:!0,items:n,options:{validate:u=>u.length<3?"минимум три выбранных элемента":!0,required:"Заполните обязательное поле"}}),e.jsx(B,{name:"numberFormat",label:"FormNumberFormat",size:"s",thousandSeparator:" ",decimalSeparator:".",options:{minLength:{value:3,message:"значение должно быть длиннее 3"},required:"Заполните обязательное поле"}}),e.jsx(M,{name:"date",label:"Date",invalidFormatMessage:"некорректно",size:"s",options:{required:"обязательное поле",max:{value:c,message:"указанная дата за пределами максимально доступной"},min:{value:c-20*24*60*60*1e3,message:"указанная дата за пределами минимально доступной"}},placement:["left","top"],placeholder:"выберите дату",onChange:u=>{console.debug("FormDatePicker data",u)},style:{maxWidth:"559px"}}),e.jsx(z,{name:"dateRange",label:"DateRange",isDoubleCalendar:!0,size:"s",invalidFormatMessage:"incorrect date",options:{required:"обязательное поле",min:{value:new Date(2024,0,1).getTime(),message:"мероприятия доступны с 2024 года"},max:{value:new Date(2024,11,31).getTime(),message:"только события 2024 года"},validate:{minDuration:u=>{if(!(u!=null&&u.dateFrom)||!(u!=null&&u.dateTo))return!0;const l=new Date(u.dateFrom.split(".").reverse().join("-")),i=new Date(u.dateTo.split(".").reverse().join("-"));return Number.isNaN(l.getTime())||Number.isNaN(i.getTime())?!0:i.getTime()-l.getTime()<7*864e5?"Минимальный период - 7 дней":!0},noWeekends:u=>{const l=new Date(u.dateFrom.split(".").reverse().join("-"));return[0,6].includes(l.getDay())?"Нельзя начинать в выходные":!0}}},style:{maxWidth:"559px"}}),e.jsxs(S,{hintText:"Подсказка",label:"Label",titleCaption:"TitleCaption",name:"gender",options:{required:"Заполните обязательное поле"},size:"s",children:[e.jsx(b,{value:"male",label:"Мужской",size:"m"}),e.jsx(b,{value:"female",label:"Женский",size:"m"})]}),e.jsx(k,{name:"status",label:"Статус документа",titleCaption:"Выберите один",options:{required:"Выберите статус"},size:"s",hasBackground:!0,stretch:!0,pilled:!0,onChange:u=>console.debug("[FormSegmentGroup]:onChange:",u),hintHasArrow:!0,hintText:"Статус документа",items:[{label:"draft",value:"draft",view:"secondary"},{label:"ready",value:"ready",view:"secondary"},{label:"signed",value:"signed",view:"secondary"}]}),e.jsx(R,{type:"submit",children:"Отправить"})]})})}},I=`
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
`,m={name:"Пример формы заполнения c использованием библиотеки Zod для валидации",...h({preCode:I,previewSource:"shown"}),render:()=>{const t=j({reValidateMode:"onSubmit",defaultValues:{textfield:"",mask:"",textarea:"",switch:!0,autocomplete:"",combobox:"",comboboxMultiple:[],select:"",selectMulti:[],numberFormat:"",date:"",dateRange:{dateFrom:"",dateTo:""},gender:"male",status:["ready"]},resolver:V(G)}),o=u=>{alert(JSON.stringify(u,void 0,2))};return e.jsx("form",{noValidate:!0,onSubmit:t.handleSubmit(o),style:{display:"flex",flexDirection:"column",gap:16},children:e.jsxs(A,{...t,children:[e.jsx(w,{label:"FormTextField",name:"textfield"}),e.jsx(E,{label:"FormMask",name:"mask",mask:"*-*-*"}),e.jsx(T,{label:"FormTextArea",name:"textarea",autoResize:!0}),e.jsx(C,{name:"checkbox",label:"Checkbox",size:"m"}),e.jsx(y,{name:"switch",label:"Switch",labelPosition:"after"}),e.jsx(f,{name:"autocomplete",suggestions:N,label:"FormAutocomplete"}),e.jsx(s,{name:"combobox",label:"FormCombobox",items:n}),e.jsx(s,{label:"FormCombobox multiple",name:"comboboxMultiple",multiple:!0,items:n}),e.jsx(d,{label:"FormSelect",name:"select",items:n}),e.jsx(d,{style:{maxWidth:"50%"},label:"FormSelect multiple",name:"selectMulti",multiselect:!0,items:n}),e.jsx(B,{name:"numberFormat",label:"FormNumberFormat",size:"s",thousandSeparator:" ",decimalSeparator:"."}),e.jsx(M,{name:"date",label:"Date",invalidFormatMessage:"incorrect date",onChange:u=>{console.debug("FormDatePicker data",u)},style:{maxWidth:"559px"}}),e.jsx(z,{name:"dateRange",label:"DateRange",invalidFormatMessage:"incorrect date",isDoubleCalendar:!0,max:new Date(c+2*24*60*60*1e3),size:"s",style:{maxWidth:"559px"}}),e.jsxs(S,{name:"gender",label:"Лейбл группы",radioGroupMode:"row",hintText:"Подсказка",children:[e.jsx(b,{value:"male",label:"Мужской",size:"m"}),e.jsx(b,{value:"female",label:"Женский",size:"m"})]}),e.jsx(k,{name:"status",label:"Статус документа",titleCaption:"Выберите один",size:"s",hasBackground:!0,stretch:!0,pilled:!0,onChange:u=>console.debug("[FormSegmentGroup]:onChange",u),hintHasArrow:!0,hintText:"Статус документа",items:[{label:"draft",value:"draft",view:"secondary",size:"s"},{label:"ready",value:"ready",view:"secondary",size:"s"},{label:"signed",value:"signed",view:"secondary",size:"s"}]}),e.jsx(R,{type:"submit",children:"Отправить"})]})})}};var F,p,x;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(x=(p=r.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var g,D,v;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(D=m.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};const O=["ExampleWithoutValidator","WithZod"],se=Object.freeze(Object.defineProperty({__proto__:null,ExampleWithoutValidator:r,WithZod:m,__namedExportsOrder:O,default:W},Symbol.toStringTag,{value:"Module"}));export{se as F};
