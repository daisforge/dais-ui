import{r as xe,j as e}from"./react-CAOzMBF_.js";import{s as U}from"./storySourceDoc-tVKyHcEN.js";import{t as fe}from"./@hookform/resolvers-Dw488gMc.js";import{F as ee}from"./FormAutocomplete-CuXFpEPd.js";import{F as ue}from"./FormCheckbox-qbxsGmkl.js";import{F as S}from"./FormCombobox-fB-q6y86.js";import{F as ae}from"./FormMask-43KgsPBc.js";import{F as te}from"./FormNumberFormat-CfwhrR_R.js";import{F as ne,a as B}from"./FormRadioGroupBox-BjoGlEVf.js";import{C as he,b as re,F as oe}from"./react-hook-form-BvKOnty6.js";import{y as ve}from"./utils-EIxGvR70.js";import{i as De}from"./lodash.isequal-DxetvuAY.js";import{T as Ce}from"./TextField-DpKf-85P.js";import{H as le}from"./styled-components-DCFsnh-i.js";import{d as ye,u as Ee}from"./FormUtils-CCNmZwS8.js";import{a8 as Se,R as Be,l as we,t as ie}from"./@salutejs/sdds-finai-CKhMjg07.js";import{cr as Te,ck as ke}from"./vendor-DmWczWMC.js";import{F as w}from"./FormSelect-xkqw5x7h.js";import{F as me}from"./FormSwitch-BaWv7_lC.js";import{F as se}from"./FormTextArea-B8xEzi22.js";import{F as de}from"./FormTextField-CQ3ELPuN.js";import{z as n}from"./zod-mSkvzYyn.js";import{F as ce,a as be}from"./FormDatePickers-Bq0E6Zwv.js";const pe={hiddenInput:"form-segment__hidden-input"},H=le.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,I=le(Ce)`
  &&.${pe.hiddenInput} {
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
`;try{H.displayName="SegmentGroupContainer",H.__docgenInfo={description:"Внешний контейнер для layout. НЕ стилизуем сам SegmentGroup!",displayName:"SegmentGroupContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},$mode:{defaultValue:null,description:"",name:"$mode",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{I.displayName="HiddenTextField",I.__docgenInfo={description:"Скрытый TextField — чтобы отрисовать label/required/подсказки",displayName:"HiddenTextField",props:{}}}catch{}function je(a,t){return a==null||a===""?[]:Array.isArray(a)?a.map(String):t?[String(a)]:[String(a)]}function Ae(a,t){return t?a:a.length>0?[a[0]??""]:[]}function qe(a){const t={};return a.forEach(u=>{t[u]=(t[u]||0)+1}),a.filter(u=>t[u]<=1)}function ze(a){return a==null||a===""?[]:Array.isArray(a)?a.map(String):[String(a)]}function L({value:a,onRHFChange:t,onUserChange:u,selectionMode:r="single",label:o,titleCaption:i,hintText:d,hintTrigger:c="hover",hintHasArrow:T=!0,optionsRequired:k,groupProps:j,errorMessage:b,items:A,singleSelectedRequired:h,showError:q=!0}){const v=r==="multiple",{selectedSegmentItems:m}=Te();xe.useEffect(()=>{const p=je(a,v);if(!De([...p].sort(),[...m].sort())){const F=h?m:qe(m),s=Ae(F,v);t(s),u==null||u(s)}},[m,h]);const{$mode:z,className:R,style:V,ref:_,name:D,disabled:M,onBlur:N,...C}=j,P=Array.isArray(a)?a.join(", "):String(a??""),y=C.size??"s";return e.jsxs(H,{$mode:z,className:R,style:V,children:[(o||i)&&e.jsx(I,{required:ye(k),label:o,value:P,hintHasArrow:T,hintText:d??"",hintTrigger:c,className:pe.hiddenInput,titleCaption:i,size:y}),e.jsx("input",{type:"hidden",name:D,value:String(a),ref:_,disabled:M,onBlur:N}),e.jsx(Se,{...C,selectionMode:r,children:A.map(p=>{const{value:E,...F}=p,s=String(E);return e.jsx(Be,{value:s,type:"button",...F},s)})}),q&&b&&e.jsx(we,{color:ve("negative"),children:b})]})}try{L.displayName="SegmentControlled",L.__docgenInfo={description:"",displayName:"SegmentControlled",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"TextFieldProps"}},titleCaption:{defaultValue:null,description:"",name:"titleCaption",required:!0,type:{name:"TextFieldProps"}},hintText:{defaultValue:null,description:"",name:"hintText",required:!0,type:{name:"TextFieldProps"}},hintTrigger:{defaultValue:{value:"hover"},description:"",name:"hintTrigger",required:!1,type:{name:"TextFieldProps"}},hintHasArrow:{defaultValue:{value:"true"},description:"",name:"hintHasArrow",required:!1,type:{name:"TextFieldProps"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"unknown"}},onRHFChange:{defaultValue:null,description:"",name:"onRHFChange",required:!0,type:{name:"(next: string[]) => void"}},onUserChange:{defaultValue:null,description:"",name:"onUserChange",required:!1,type:{name:"(next: string[]) => void"}},selectionMode:{defaultValue:{value:"single"},description:"",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"multiple"'},{value:'"single"'}]}},optionsRequired:{defaultValue:null,description:"",name:"optionsRequired",required:!1,type:{name:"RegisterOptions<FieldValues, Path<TFieldValues>>"}},groupProps:{defaultValue:null,description:"",name:"groupProps",required:!0,type:{name:"TGroupPropsForStyled<TFieldValues>"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"any[]"}},singleSelectedRequired:{defaultValue:null,description:"",name:"singleSelectedRequired",required:!1,type:{name:"boolean"}},showError:{defaultValue:{value:"true"},description:"",name:"showError",required:!1,type:{name:"boolean"}}}}}catch{}const f=a=>{const{name:t,options:u,onChange:r,singleSelectedRequired:o,selectionMode:i="single",view:d,size:c="s",pilled:T,hasBackground:k,stretch:j,orientation:b,className:A,style:h,items:q,label:v,titleCaption:m,hintText:z,hintTrigger:R,hintHasArrow:V,showError:_=!0}=a,D=Ee(u),{control:M,rules:N,remOptions:C}=D;return e.jsx(he,{control:M,name:t,rules:N,...C,render:({field:{onChange:P,value:y,ref:p,onBlur:E,disabled:F,name:s,...$},fieldState:{error:G}})=>{const ge={...$,name:t,className:A,style:h,disabled:F,size:c,view:d,pilled:T,hasBackground:k,stretch:j,orientation:b==="vertical"?"vertical":void 0,$mode:b==="vertical"?"column":"row",ref:p,onBlur:E},O=ze(y);return e.jsx(ke,{defaultSelected:O,singleSelectedRequired:o,...$,children:e.jsx(L,{value:y,onRHFChange:W=>P(W),onUserChange:W=>{r==null||r(W,D)},label:v,titleCaption:m,hintText:z,hintTrigger:R,hintHasArrow:V,optionsRequired:u,errorMessage:G==null?void 0:G.message,groupProps:ge,selectionMode:i,items:q,singleSelectedRequired:o,showError:_})},`segment-${t}-${O.join("|")}`)}})};f.displayName="FormSegmentGroup";try{f.displayName="FormSegmentGroup",f.__docgenInfo={description:"",displayName:"FormSegmentGroup",props:{}}}catch{}const Fe=[{label:"Алексей Смирнов"},{label:"Екатерина Иванова"},{label:"Дмитрий Петров"},{label:"Ольга Васильева"},{label:"Сергей Сидоров"},{label:"Мария Кузнецова"},{label:"Андрей Попов"},{label:"Анна Николаева"},{label:"Иван Федоров"},{label:"Наталья Морозова"},{label:"Михаил Павлов"},{label:"Елена Романова"},{label:"Владимир Киселев"},{label:"Татьяна Захарова"},{label:"Николай Семенов"},{label:"Юлия Белова"},{label:"Александр Гусев"},{label:"Оксана Яковлева"},{label:"Игорь Егорова"},{label:"Вера Тихомирова"},{label:"Артем Григорьев"},{label:"Евгения Козлова"},{label:"Максим Лебедев"},{label:"Виктория Калашникова"},{label:"Константин Абрамов"},{label:"Светлана Новикова"},{label:"Юрий Волков"},{label:"Валентина Воробьева"},{label:"Павел Сергеев"},{label:"Людмила Виноградова"},{label:"Антон Соловьев"},{label:"Маргарита Цветкова"},{label:"Роман Трофимов"},{label:"Лариса Зайцева"},{label:"Евгений Никитин"},{label:"Галина Михайлова"},{label:"Владислав Антонов"},{label:"Дарья Филатова"},{label:"Олег Буров"},{label:"Инна Медведева"},{label:"Вячеслав Крылов"},{label:"Тамара Беляева"},{label:"Кирилл Марков"},{label:"Марина Пономарева"},{label:"Борис Захаров"},{label:"Жанна Савельева"},{label:"Федор Жуков"},{label:"Елизавета Логинова"},{label:"Виктор Рыбаков"},{label:"Лилия Макарова"}],l=[{value:"north_america",label:"Северная Америка"},{value:"south_america",label:"Южная Америка",items:[{value:"brazil",label:"Бразилия",items:[{value:"rio_de_janeiro",label:"Рио-де-Жанейро"},{value:"sao_paulo",label:"Сан-Паулу"}]},{value:"argentina",label:"Аргентина",items:[{value:"buenos_aires",label:"Буэнос-Айрес"},{value:"cordoba",label:"Кордова"}]},{value:"colombia",label:"Колумбия",items:[{value:"bogota",label:"Богота"},{value:"medellin",label:"Медельин"}]}]},{value:"europe",label:"Европа",items:[{value:"france",label:"Франция",items:[{value:"paris",label:"Париж"},{value:"lyon",label:"Лион"}]},{value:"germany",label:"Германия",items:[{value:"berlin",label:"Берлин"},{value:"munich",label:"Мюнхен"}]},{value:"italy",label:"Италия",items:[{value:"rome",label:"Рим"},{value:"milan",label:"Милан"}]},{value:"spain",label:"Испания",items:[{value:"madrid",label:"Мадрид"},{value:"barcelona",label:"Барселона"}]},{value:"united_kingdom",label:"Великобритания",items:[{value:"london",label:"Лондон"},{value:"manchester",label:"Манчестер"}]}]},{value:"asia",label:"Азия",items:[{value:"china",label:"Китай",items:[{value:"beijing",label:"Пекин"},{value:"shanghai",label:"Шанхай"}]},{value:"japan",label:"Япония",items:[{value:"tokyo",label:"Токио"},{value:"osaka",label:"Осака"}]},{value:"india",label:"Индия",items:[{value:"delhi",label:"Дели"},{value:"mumbai",label:"Мумбаи"}]},{value:"south_korea",label:"Южная Корея",items:[{value:"seoul",label:"Сеул"},{value:"busan",label:"Пусан"}]},{value:"thailand",label:"Таиланд",items:[{value:"bangkok",label:"Бангкок"},{value:"phuket",label:"Пхукет"}]}]},{value:"africa",label:"Африка",isDisabled:!0}],Re={title:"Формы/Компоненты формы",tags:["!autodocs"],component:()=>null},Ve=n.object({textfield:n.string().min(1,"Заполните обязательное поле").min(3,"обязательное больше 3"),mask:n.string().min(1,"Заполните обязательное поле").min(3,"обязательное больше 3"),textarea:n.string().min(1,"Заполните обязательное поле").min(3,"обязательное больше 3"),switch:n.boolean(),checkbox:n.boolean(),autocomplete:n.string().min(1,"Заполните обязательное поле").min(3,"обязательное больше 3"),combobox:n.string().min(1,"Заполните обязательное поле"),comboboxMultiple:n.array(n.string()).min(1,"Заполните обязательное поле"),select:n.string().min(1,"Заполните обязательное поле"),selectMulti:n.array(n.string()).min(1,"Заполните обязательное поле"),numberFormat:n.string().min(1,"Заполните обязательное поле"),date:n.string().min(1,"Заполните обязательное поле").min(7,"Неверно введённая дата"),dateRange:n.object({dateFrom:n.string().min(1,"Укажите начальную дату"),dateTo:n.string().min(1,"Укажите конечную дату")}).refine(a=>{if(!a.dateFrom||!a.dateTo)return!0;const t=o=>{const[i,d,c]=o.split(".");return new Date(`${c}-${d}-${i}`)},u=t(a.dateFrom),r=t(a.dateTo);return Number.isNaN(u.getTime())||Number.isNaN(r.getTime())?!0:r>=u}),gender:n.string().min(1,"Заполните обязательное поле"),status:n.array(n.string()).min(1,{message:"Заполните хотя бы одно поле."}).refine(a=>a.every(t=>t.trim().length>0),{message:"Значения не должны быть пустыми."})}),_e=`
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
`,g={name:"Компоненты формы",...U({preCode:_e,previewSource:"shown"}),render:()=>{const a=re({reValidateMode:"onBlur",defaultValues:{textfield:"",mask:"",textarea:"",checkbox:!1,switch:!0,autocomplete:"",combobox:"",comboboxMultiple:[],select:"",selectMulti:[],numberFormat:"",date:"",dateRange:{dateFrom:"05.05.2024",dateTo:"07.05.2024"},gender:"male",status:["ready"]}}),t=u=>{alert(JSON.stringify(u,void 0,2))};return e.jsx("form",{noValidate:!0,onSubmit:a.handleSubmit(t),style:{display:"flex",flexDirection:"column",gap:16},children:e.jsxs(oe,{...a,children:[e.jsx(de,{label:"FormTextField",name:"textfield",options:{minLength:{value:3,message:"значение должно быть длиннее 3"},required:!0}}),e.jsx(ae,{label:"FormMask",name:"mask",mask:"*-*-*",options:{minLength:{value:3,message:"значение должно быть длиннее 3"},required:!0}}),e.jsx(se,{label:"FormTextArea",name:"textarea",autoResize:!0,options:{validate:u=>(u??"").includes("@")?!0:"должен содержаться символ @",maxLength:50,required:"Заполните обязательное поле"}}),e.jsx(ue,{name:"checkbox",label:"Checkbox",size:"m",options:{required:"Заполните обязательное поле"}}),e.jsx(me,{name:"switch",label:"Switch",labelPosition:"after",options:{validate:u=>u?!0:"Заполните обязательное поле"}}),e.jsx(ee,{name:"autocomplete",suggestions:Fe,label:"FormAutocomplete",options:{minLength:{value:2,message:"обязательное больше 2"},required:"Заполните обязательное поле"}}),e.jsx(S,{name:"combobox",label:"FormCombobox",items:l,options:{required:"Заполните обязательное поле"}}),e.jsx(S,{label:"FormCombobox multiple",name:"comboboxMultiple",multiple:!0,items:l,options:{validate:u=>u.length<3?"минимум три выбранных элемента":!0,required:"Заполните обязательное поле"}}),e.jsx(w,{style:{maxWidth:"50%"},label:"FormSelect",name:"select",items:l,options:{required:"Заполните обязательное поле"}}),e.jsx(w,{label:"FormSelect multiple",name:"selectMulti",multiselect:!0,items:l,options:{validate:u=>u.length<3?"минимум три выбранных элемента":!0,required:"Заполните обязательное поле"}}),e.jsx(te,{name:"numberFormat",label:"FormNumberFormat",size:"s",thousandSeparator:" ",decimalSeparator:".",options:{minLength:{value:3,message:"значение должно быть длиннее 3"},required:"Заполните обязательное поле"}}),e.jsx(ce,{name:"date",label:"Date",invalidFormatMessage:"некорректно",size:"s",options:{required:"обязательное поле",max:{value:new Date().getTime(),message:"указанная дата за пределами максимально доступной"},min:{value:new Date().getTime()-20*24*60*60*1e3,message:"указанная дата за пределами минимально доступной"}},placement:["left","top"],placeholder:"выберите дату",onChange:u=>{console.debug("FormDatePicker data",u)},style:{maxWidth:"559px"}}),e.jsx(be,{name:"dateRange",label:"DateRange",isDoubleCalendar:!0,size:"s",invalidFormatMessage:"incorrect date",options:{required:"обязательное поле",min:{value:new Date(2024,0,1).getTime(),message:"мероприятия доступны с 2024 года"},max:{value:new Date(2024,11,31).getTime(),message:"только события 2024 года"},validate:{minDuration:u=>{if(!(u!=null&&u.dateFrom)||!(u!=null&&u.dateTo))return!0;const r=new Date(u.dateFrom.split(".").reverse().join("-")),o=new Date(u.dateTo.split(".").reverse().join("-"));return Number.isNaN(r.getTime())||Number.isNaN(o.getTime())?!0:o.getTime()-r.getTime()<7*864e5?"Минимальный период - 7 дней":!0},noWeekends:u=>{const r=new Date(u.dateFrom.split(".").reverse().join("-"));return[0,6].includes(r.getDay())?"Нельзя начинать в выходные":!0}}},style:{maxWidth:"559px"}}),e.jsxs(ne,{hintText:"Подсказка",label:"Label",titleCaption:"TitleCaption",name:"gender",options:{required:"Заполните обязательное поле"},size:"s",children:[e.jsx(B,{value:"male",label:"Мужской",size:"m"}),e.jsx(B,{value:"female",label:"Женский",size:"m"})]}),e.jsx(f,{name:"status",label:"Статус документа",titleCaption:"Выберите один",options:{required:"Выберите статус"},size:"s",hasBackground:!0,stretch:!0,pilled:!0,onChange:u=>console.debug("[FormSegmentGroup]:onChange:",u),hintHasArrow:!0,hintText:"Статус документа",items:[{label:"draft",value:"draft",view:"secondary"},{label:"ready",value:"ready",view:"secondary"},{label:"signed",value:"signed",view:"secondary"}]}),e.jsx(ie,{type:"submit",children:"Отправить"})]})})}},Me=`
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
`,x={name:"Пример формы заполнения c использованием библиотеки Zod для валидации",...U({preCode:Me,previewSource:"shown"}),render:()=>{const a=re({reValidateMode:"onSubmit",defaultValues:{textfield:"",mask:"",textarea:"",switch:!0,autocomplete:"",combobox:"",comboboxMultiple:[],select:"",selectMulti:[],numberFormat:"",date:"",dateRange:{dateFrom:"",dateTo:""},gender:"male",status:["ready"]},resolver:fe(Ve)}),t=u=>{alert(JSON.stringify(u,void 0,2))};return e.jsx("form",{noValidate:!0,onSubmit:a.handleSubmit(t),style:{display:"flex",flexDirection:"column",gap:16},children:e.jsxs(oe,{...a,children:[e.jsx(de,{label:"FormTextField",name:"textfield"}),e.jsx(ae,{label:"FormMask",name:"mask",mask:"*-*-*"}),e.jsx(se,{label:"FormTextArea",name:"textarea",autoResize:!0}),e.jsx(ue,{name:"checkbox",label:"Checkbox",size:"m"}),e.jsx(me,{name:"switch",label:"Switch",labelPosition:"after"}),e.jsx(ee,{name:"autocomplete",suggestions:Fe,label:"FormAutocomplete"}),e.jsx(S,{name:"combobox",label:"FormCombobox",items:l}),e.jsx(S,{label:"FormCombobox multiple",name:"comboboxMultiple",multiple:!0,items:l}),e.jsx(w,{label:"FormSelect",name:"select",items:l}),e.jsx(w,{style:{maxWidth:"50%"},label:"FormSelect multiple",name:"selectMulti",multiselect:!0,items:l}),e.jsx(te,{name:"numberFormat",label:"FormNumberFormat",size:"s",thousandSeparator:" ",decimalSeparator:"."}),e.jsx(ce,{name:"date",label:"Date",invalidFormatMessage:"incorrect date",onChange:u=>{console.debug("FormDatePicker data",u)},style:{maxWidth:"559px"}}),e.jsx(be,{name:"dateRange",label:"DateRange",invalidFormatMessage:"incorrect date",isDoubleCalendar:!0,max:new Date(new Date().setDate(new Date().getDate()+2)),size:"s",style:{maxWidth:"559px"}}),e.jsxs(ne,{name:"gender",label:"Лейбл группы",radioGroupMode:"row",hintText:"Подсказка",children:[e.jsx(B,{value:"male",label:"Мужской",size:"m"}),e.jsx(B,{value:"female",label:"Женский",size:"m"})]}),e.jsx(f,{name:"status",label:"Статус документа",titleCaption:"Выберите один",size:"s",hasBackground:!0,stretch:!0,pilled:!0,onChange:u=>console.debug("[FormSegmentGroup]:onChange",u),hintHasArrow:!0,hintText:"Статус документа",items:[{label:"draft",value:"draft",view:"secondary",size:"s"},{label:"ready",value:"ready",view:"secondary",size:"s"},{label:"signed",value:"signed",view:"secondary",size:"s"}]}),e.jsx(ie,{type:"submit",children:"Отправить"})]})})}};var Z,J,X;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(X=(J=g.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var K,Q,Y;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Y=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};const Ne=["ExampleWithoutValidator","WithZod"],iu=Object.freeze(Object.defineProperty({__proto__:null,ExampleWithoutValidator:g,WithZod:x,__namedExportsOrder:Ne,default:Re},Symbol.toStringTag,{value:"Module"}));export{iu as F};
