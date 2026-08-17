import{j as e}from"./react-D2T61mpp.js";import{c2 as c,c3 as s}from"./vendor-LViC24RH.js";import"./react-is-Clcustum.js";import"./styled-components--Gqam1Xr.js";import"./tslib-De9GV7Vy.js";function i(d){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...c(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Формы/Компоненты формы/API"}),`
`,e.jsx(n.h1,{id:"компоненты-формы--api",children:"Компоненты формы — API"}),`
`,e.jsx(n.h2,{id:"общие-пропсы",children:"Общие пропсы"}),`
`,e.jsx(n.p,{children:"Все компоненты формы принимают те же пропсы, что и их атомарные аналоги (TextField, TextArea, Checkbox, Select и т.д.), с учётом следующих отличий:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value"})," — не нужно передавать, управляется внутренне через ",e.jsx(n.code,{children:"react-hook-form"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onChange"})," — возвращает значение напрямую (не event). Используется для дополнительной логики"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onChangeInput"})," — у некоторых компонентов. Для дополнительной логики при изменении"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultValue"})," — переопределяется значениями ",e.jsx(n.code,{children:"defaultValues"})," из ",e.jsx(n.code,{children:"useForm"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name"})," (",e.jsx(n.code,{children:"string"}),") — имя поля в форме. Обязательный проп"]}),`
`]}),`
`,e.jsx(n.h2,{id:"проп-options",children:"Проп options"}),`
`,e.jsxs(n.p,{children:["У каждого компонента есть проп ",e.jsx(n.code,{children:"options"})," типа ",e.jsx(n.code,{children:"RegisterOptions<FieldValues, string>"})," для настройки валидации:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"required"})," (",e.jsx(n.code,{children:"boolean | string"}),") — обязательность поля. Строка — текст ошибки"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"minLength"})," (",e.jsx(n.code,{children:"{ value: number; message: string }"}),") — минимальная длина"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"maxLength"})," (",e.jsx(n.code,{children:"number | { value: number; message: string }"}),") — максимальная длина"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"min"})," / ",e.jsx(n.code,{children:"max"})," — минимальное/максимальное значение (для DatePicker — timestamp)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"validate"})," (",e.jsx(n.code,{children:"(value) => boolean | string"}),") — кастомная функция валидации"]}),`
`]}),`
`,e.jsx(n.h2,{id:"список-компонентов",children:"Список компонентов"}),`
`,e.jsxs(n.p,{children:["Каждый Form-компонент оборачивает атомарный аналог из ",e.jsx(n.code,{children:"@salutejs/sdds-finai"}),". Принимает все его пропсы, кроме ",e.jsx(n.code,{children:"value"}),". Добавляет обязательный ",e.jsx(n.code,{children:"name"})," и опциональный ",e.jsx(n.code,{children:"options"})," для валидации. Полное описание пропсов атомарных компонентов — в документации ",e.jsx(n.code,{children:"@salutejs/sdds-finai"}),"."]}),`
`,e.jsx(n.h3,{id:"formtextfield",children:"FormTextField"}),`
`,e.jsxs(n.p,{children:["Обёртка над атомарным ",e.jsx(n.code,{children:"TextField"}),". ",e.jsx(n.code,{children:"onChange"})," возвращает ",e.jsx(n.code,{children:"string"}),"."]}),`
`,e.jsx(n.h3,{id:"formtextarea",children:"FormTextArea"}),`
`,e.jsxs(n.p,{children:["Обёртка над атомарным ",e.jsx(n.code,{children:"TextArea"}),". ",e.jsx(n.code,{children:"onChange"})," возвращает ",e.jsx(n.code,{children:"string"}),"."]}),`
`,e.jsx(n.h3,{id:"formmask",children:"FormMask"}),`
`,e.jsxs(n.p,{children:["Обёртка над атомарным ",e.jsx(n.code,{children:"Mask"})," (",e.jsx(n.code,{children:"react-maskinput"}),"). ",e.jsx(n.code,{children:"onChange"})," возвращает ",e.jsx(n.code,{children:"string"}),"."]}),`
`,e.jsx(n.h3,{id:"formnumberformat",children:"FormNumberFormat"}),`
`,e.jsxs(n.p,{children:["Обёртка над атомарным ",e.jsx(n.code,{children:"NumberFormat"}),". ",e.jsx(n.code,{children:"onChange"})," возвращает ",e.jsx(n.code,{children:"string"}),"."]}),`
`,e.jsx(n.h3,{id:"formcheckbox",children:"FormCheckbox"}),`
`,e.jsxs(n.p,{children:["Обёртка над атомарным ",e.jsx(n.code,{children:"Checkbox"}),". ",e.jsx(n.code,{children:"onChange"})," возвращает ",e.jsx(n.code,{children:"boolean"}),"."]}),`
`,e.jsx(n.h3,{id:"formswitch",children:"FormSwitch"}),`
`,e.jsxs(n.p,{children:["Обёртка над атомарным ",e.jsx(n.code,{children:"Switch"}),". ",e.jsx(n.code,{children:"onChange"})," возвращает ",e.jsx(n.code,{children:"boolean"}),"."]}),`
`,e.jsx(n.h3,{id:"formselect",children:"FormSelect"}),`
`,e.jsxs(n.p,{children:["Обёртка над атомарным ",e.jsx(n.code,{children:"Select"}),". ",e.jsx(n.code,{children:"onChange"})," возвращает выбранное значение. Ограничена максимальная ширина элемента — при 100% вложенные элементы могут не отобразиться."]}),`
`,e.jsx(n.h3,{id:"formcombobox",children:"FormCombobox"}),`
`,e.jsxs(n.p,{children:["Обёртка над атомарным ",e.jsx(n.code,{children:"Combobox"}),". ",e.jsx(n.code,{children:"onChange"})," возвращает массив выбранных значений."]}),`
`,e.jsx(n.h3,{id:"formautocomplete",children:"FormAutocomplete"}),`
`,e.jsxs(n.p,{children:["Обёртка над атомарным ",e.jsx(n.code,{children:"Autocomplete"}),". ",e.jsx(n.code,{children:"onChange"})," возвращает ",e.jsx(n.code,{children:"string"}),"."]}),`
`,e.jsx(n.h3,{id:"formradiogroup",children:"FormRadioGroup"}),`
`,e.jsxs(n.p,{children:["Обёртка над атомарным ",e.jsx(n.code,{children:"RadioGroup"}),". Атрибут ",e.jsx(n.code,{children:"name"})," указывается ТОЛЬКО у группы, дочерние ",e.jsx(n.code,{children:"FormRadiobox"})," наследуют автоматически."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"label"})," (",e.jsx(n.code,{children:"string"}),") — лейбл группы"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"titleCaption"})," (",e.jsx(n.code,{children:"string"}),") — подпись"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hintText"})," (",e.jsx(n.code,{children:"string"}),") — текст подсказки"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"radioGroupMode"})," (",e.jsx(n.code,{children:"'column' | 'row'"}),") — направление расположения"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"size"})," (",e.jsx(n.code,{children:"string"}),") — размер"]}),`
`]}),`
`,e.jsx(n.h3,{id:"formradiobox",children:"FormRadiobox"}),`
`,e.jsxs(n.p,{children:["Дочерний элемент ",e.jsx(n.code,{children:"FormRadioGroup"}),". Наследует ",e.jsx(n.code,{children:"name"})," от группы. Должен находиться на первом уровне вложенности (не оборачивать в ",e.jsx(n.code,{children:"div"}),")."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value"})," (",e.jsx(n.code,{children:"string | number"}),") — значение радиокнопки"]}),`
`]}),`
`,e.jsx(n.h3,{id:"formsegmentgroup",children:"FormSegmentGroup"}),`
`,e.jsxs(n.p,{children:["Обёртка над атомарным ",e.jsx(n.code,{children:"SegmentGroup"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"items"})," (",e.jsx(n.code,{children:"Array<{ label: string; value: string; view?: string; size?: string }>"}),") — элементы сегмента"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"label"})," (",e.jsx(n.code,{children:"string"}),") — лейбл"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"titleCaption"})," (",e.jsx(n.code,{children:"string"}),") — подпись"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hasBackground"})," (",e.jsx(n.code,{children:"boolean"}),") — фон"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"stretch"})," (",e.jsx(n.code,{children:"boolean"}),") — растянуть на всю ширину"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pilled"})," (",e.jsx(n.code,{children:"boolean"}),") — скруглённые края"]}),`
`]}),`
`,e.jsx(n.h3,{id:"formdatepicker",children:"FormDatePicker"}),`
`,e.jsxs(n.p,{children:["Обёртка над атомарным ",e.jsx(n.code,{children:"DatePicker"}),". Встроенная валидация по ",e.jsx(n.code,{children:"min"}),"/",e.jsx(n.code,{children:"max"})," из ",e.jsx(n.code,{children:"options"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Если заданы атомарные пропсы ",e.jsx(n.code,{children:"min"}),"/",e.jsx(n.code,{children:"max"}),", они переопределяют ",e.jsx(n.code,{children:"options.min"}),"/",e.jsx(n.code,{children:"options.max"})]}),`
`,e.jsxs(n.li,{children:["При передаче ",e.jsx(n.code,{children:"validate"})," в ",e.jsx(n.code,{children:"options"})," — внутренняя валидация отключается"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"invalidFormatMessage"})," (",e.jsx(n.code,{children:"string"}),") — текст ошибки при некорректном формате даты"]}),`
`]}),`
`,e.jsx(n.h3,{id:"formdatepickerrange",children:"FormDatePickerRange"}),`
`,e.jsxs(n.p,{children:["Аналогично ",e.jsx(n.code,{children:"FormDatePicker"}),", но для диапазона дат."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"portal"})," (",e.jsx(n.code,{children:"HTMLElement"}),") — портал для календаря"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"format"})," (",e.jsx(n.code,{children:"string"}),") — формат даты"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"invalidFormatMessage"})," (",e.jsx(n.code,{children:"string"}),") — текст ошибки при некорректном формате"]}),`
`]})]})}function j(d={}){const{wrapper:n}={...c(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(i,{...d})}):i(d)}export{j as default};
