import{r as uu,j as V}from"./react-CAOzMBF_.js";import{C as eu}from"./react-hook-form-BvKOnty6.js";import{D as ou}from"./DatePicker-B0Zo2kx2.js";import{H as au}from"./styled-components-DCFsnh-i.js";import{c as A,g as tu,h as S,u as Mu,b as Yu,d as mu}from"./FormUtils-CCNmZwS8.js";import{E as vu,$ as cu}from"./@salutejs/sdds-finai-CKhMjg07.js";import{d9 as du}from"./@salutejs/plasma-icons-Do5ggeDI.js";const fu={"янв.":0,"фев.":1,"мар.":2,март:2,марта:2,"апр.":3,май:4,мая:4,"июн.":5,июня:5,июнь:5,"июл.":6,июля:6,июль:6,"авг.":7,"сен.":8,"окт.":9,"ноя.":10,"дек.":11},gu={января:0,январь:0,февраля:1,февраль:1,марта:2,март:2,апреля:3,апрель:3,мая:4,май:4,июня:5,июнь:5,июля:6,июль:6,августа:7,август:7,сентября:8,сентябрь:8,октября:9,октябрь:9,ноября:10,ноябрь:10,декабря:11,декабрь:11},ru={...fu,...gu},Eu=u=>Object.keys(u).map(e=>e.replace(".","\\.")).join("|"),X=`(${Eu(ru)})`,Fu=[["MMMM",X,"month-text"],["MMM",X,"month-text"],["YYYY","(\\d{4})","year"],["DD","(\\d{2})","day"],["YY","(\\d{2})","year"],["MM","(\\d{2})","month-num"]],yu=u=>u.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),Z=new Map,pu=u=>{let e=u,M="^";const m=[];for(;e.length>0;){let Y=!1;for(const[s,l,i]of Fu)if(e.startsWith(s)){M+=l,m.push(i),e=e.slice(s.length),Y=!0;break}Y||(M+=yu(e.charAt(0)),e=e.slice(1))}return M+="$",{regex:new RegExp(M),tokens:m}},Bu=u=>{let e=Z.get(u);return e||(e=pu(u),Z.set(u,e)),e},Cu=u=>u<100?2e3+u:u,Du=({date:u,format:e})=>{const{regex:M,tokens:m}=Bu(e),Y=u.match(M);if(!Y)return"";try{let s=1,l=0,i=new Date().getFullYear(),v=!1;for(let D=0;D<m.length;D++){const n=Y[D+1];if(!n)return"";switch(m[D]){case"day":if(s=Number(n),Number.isNaN(s))return"";break;case"month-num":if(l=Number(n)-1,Number.isNaN(l))return"";v=!0;break;case"month-text":{const F=ru[n];if(typeof F!="number")return"";l=F,v=!0;break}case"year":if(i=Cu(Number(n)),Number.isNaN(i))return"";break;default:break}}return v?new Date(i,l,s).toISOString():""}catch{return""}},nu=({min:u,max:e,required:M,invalidFormatMessage:m,format:Y})=>{const s=e&&A({rule:e,typeValue:"number"}),l=u&&A({rule:u,typeValue:"number"});return i=>{let v,D=null;typeof i=="string"&&Y&&(v=Du({date:i,format:Y}),v&&(D=new Date(v))),(i instanceof Date||typeof i=="string"&&!Y)&&(D=new Date(i));const n=D&&!Number.isNaN(D.getTime())?D.getTime():null;return n!==null?typeof l=="number"&&n<=l?typeof u=="object"&&"message"in u?u==null?void 0:u.message:!1:typeof s=="number"&&n>=s?typeof e=="object"&&"message"in e?e==null?void 0:e.message:!1:!0:i&&typeof i=="string"&&i.length?m:M?typeof M=="object"&&"message"in M?M==null?void 0:M.message:!1:!0}},ku=au(ou)`
  width: 100%;
`,w=({name:u,options:e,portal:M,label:m,onChange:Y,textHint:s,format:l="DD.MM.YYYY",invalidFormatMessage:i="Формат даты указан не верно",size:v="s",requiredPlacement:D="right",maskWithFormat:n=!0,offset:p=[0,2],leftHelper:F,defaultDate:lu,ref:iu,min:b,max:k,opened:I,required:P,...a})=>{const[H,q]=uu.useState(I??!1),t={...e,required:tu({options:e,ruleName:"required"})?e==null?void 0:e.required:P},x={min:(()=>{if(b){const g=b.getTime();return typeof(t==null?void 0:t.min)=="object"&&"message"in t.min?{value:g,message:t.min.message}:g}return S({options:t,ruleName:"min"})?t==null?void 0:t.min:void 0})(),max:(()=>{if(k){const g=k.getTime();return typeof(t==null?void 0:t.max)=="object"&&"message"in t.max?{value:g,message:t.max.message}:g}return S({options:t,ruleName:"max"})?t==null?void 0:t.max:void 0})(),required:t==null?void 0:t.required,invalidFormatMessage:i,format:l},$=nu(x),z=Mu({...t,validate:g=>{const r=t==null?void 0:t.validate;if(r)return r(g);const d=$(g);return d!==!0?d:!0}}),{control:W,rules:L,remOptions:_,clearErrors:R}=z,h=(k==null?void 0:k.getTime())??A({rule:t==null?void 0:t.max,typeValue:"number"}),j=(b==null?void 0:b.getTime())??A({rule:t==null?void 0:t.min,typeValue:"number"});return V.jsx(eu,{control:W,name:u,rules:L,..._,render:({field:{name:g,ref:r,onBlur:d,onChange:c,...o},fieldState:{error:B}})=>{const y=o==null?void 0:o.value,K=y!=null&&y!==""?y:"";return V.jsx(ku,{...o,label:m,ref:r,maskWithFormat:n,value:K,format:l,frame:M,max:h&&new Date(h)||void 0,min:j&&new Date(j)||void 0,offset:p,opened:H,required:!!t.required||void 0,requiredPlacement:D,hasRequiredIndicator:!!t.required||void 0,includeEdgeDates:!0,size:v,usePortal:!!M,valueError:!!B,onChange:E=>{if(typeof E=="object"&&E&&"target"in E){const C=E,N={target:{value:C.target.value,name:C.target.name,originalDate:C.target.originalDate,isoDate:C.target.isoDate}};Y==null||Y(N),c(N)}else{const C=E;Y==null||Y(C),c(C)}},onCommitDate:E=>{R(u),c(E),q(!1)},onToggle:E=>q(E),leftHelper:Yu(B,s)||void 0,...a})}})};try{w.displayName="FormDatePicker",w.__docgenInfo={description:`[FormDatePicker](url) относится к группе mutation-form элементов. Он расширяет возможности
компонента [DatePicker](https://plasma.sberdevices.ru/sdds-finai/components/datepicker/)
библиотеки [sdds-finai](https://plasma.sberdevices.ru/sdds-finai/) для использования в формах.
Компонент имеет встроенную валидацию введенных данных как значения даты, сообщение, которое будет показано
пользователю в случае ошибки, задается через параметр \`invalidFormatMesssage\`.

Умеет контролировать пользовательский ввод в разрешенном диапазоне дат, для ограничения выбора дат надо указать в \`options.min/max\`, либо передать пропсы \`min/max\` (type Date) которые перебивают \`options.min/max\`.
значения дат выраженные в миллисекундах, например:
\`\`\`
...
options: {
max: {
    value: new Date().getTime(),
    message: "Указанная дата за пределами максимально доступной"
}
}
\`\`\``,displayName:"FormDatePicker",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"RegisterOptions<FieldValues, Path<TFieldValues>>"}},portal:{defaultValue:null,description:"",name:"portal",required:!1,type:{name:"DatePickerCompProps"}},textHint:{defaultValue:null,description:"",name:"textHint",required:!1,type:{name:"string"}},format:{defaultValue:{value:"DD.MM.YYYY"},description:"",name:"format",required:!1,type:{name:"enum",value:[{value:'"DD.MM.YY"'},{value:'"DD.MM.YYYY"'},{value:'"DD.MM-YY"'},{value:'"DD.MM-YYYY"'},{value:'"DD.MM YY"'},{value:'"DD.MM YYYY"'},{value:'"DD.MMM.YY"'},{value:'"DD.MMM.YYYY"'},{value:'"DD.MMM-YY"'},{value:'"DD.MMM-YYYY"'},{value:'"DD.MMM YY"'},{value:'"DD.MMM YYYY"'},{value:'"DD.MMMM.YY"'},{value:'"DD.MMMM.YYYY"'},{value:'"DD.MMMM-YY"'},{value:'"DD.MMMM-YYYY"'},{value:'"DD.MMMM YY"'},{value:'"DD.MMMM YYYY"'},{value:'"DD-MM.YY"'},{value:'"DD-MM.YYYY"'},{value:'"DD-MM-YY"'},{value:'"DD-MM-YYYY"'},{value:'"DD-MM YY"'},{value:'"DD-MM YYYY"'},{value:'"DD-MMM.YY"'},{value:'"DD-MMM.YYYY"'},{value:'"DD-MMM-YY"'},{value:'"DD-MMM-YYYY"'},{value:'"DD-MMM YY"'},{value:'"DD-MMM YYYY"'},{value:'"DD-MMMM.YY"'},{value:'"DD-MMMM.YYYY"'},{value:'"DD-MMMM-YY"'},{value:'"DD-MMMM-YYYY"'},{value:'"DD-MMMM YY"'},{value:'"DD-MMMM YYYY"'},{value:'"DD MM.YY"'},{value:'"DD MM.YYYY"'},{value:'"DD MM-YY"'},{value:'"DD MM-YYYY"'},{value:'"DD MM YY"'},{value:'"DD MM YYYY"'},{value:'"DD MMM.YY"'},{value:'"DD MMM.YYYY"'},{value:'"DD MMM-YY"'},{value:'"DD MMM-YYYY"'},{value:'"DD MMM YY"'},{value:'"DD MMM YYYY"'},{value:'"DD MMMM.YY"'},{value:'"DD MMMM.YYYY"'},{value:'"DD MMMM-YY"'},{value:'"DD MMMM-YYYY"'},{value:'"DD MMMM YY"'},{value:'"DD MMMM YYYY"'},{value:'"DD.MMM"'},{value:'"DD.MMMM"'},{value:'"DD-MMM"'},{value:'"DD-MMMM"'},{value:'"DD MMM"'},{value:'"DD MMMM"'},{value:'"MM.YY"'},{value:'"MM.YYYY"'},{value:'"MM-YY"'},{value:'"MM-YYYY"'},{value:'"MM YY"'},{value:'"MM YYYY"'},{value:'"MMM.YY"'},{value:'"MMM.YYYY"'},{value:'"MMM-YY"'},{value:'"MMM-YYYY"'},{value:'"MMM YY"'},{value:'"MMM YYYY"'},{value:'"MMMM.YY"'},{value:'"MMMM.YYYY"'},{value:'"MMMM-YY"'},{value:'"MMMM-YYYY"'},{value:'"MMMM YY"'},{value:'"MMMM YYYY"'}]}},invalidFormatMessage:{defaultValue:{value:"Формат даты указан не верно"},description:"",name:"invalidFormatMessage",required:!1,type:{name:"string"}}}}}catch{}const J=({datePickerSize:u})=>V.jsx(vu,{size:u==="xs"?"s":"m",view:"secondary",style:{marginRight:u==="xs"?"8px":"12px",marginTop:"2px"},children:V.jsx(du,{color:"inherit",size:u==="xs"?"xs":"s"})});try{J.displayName="DefaultRightIconButton",J.__docgenInfo={description:"",displayName:"DefaultRightIconButton",props:{datePickerSize:{defaultValue:null,description:"",name:"datePickerSize",required:!0,type:{name:"DatePickerRangeCompProps"}}}}}catch{}const xu=({required:u,validateRange:e,externalValidates:M})=>(m,Y)=>{const{dateFrom:s,dateTo:l}=m;if(!mu({required:u}))return!0;let v="поле обязательно";if(typeof u=="string"?v=u:typeof u=="object"&&u.message&&(v=u.message),!s&&!l)return v;if(s&&!l||!s&&l)return"Заполните обе даты диапазона";const D=e(m,Y);if(typeof D=="string")return D;if(typeof M=="function")return M(m,Y);if(M){for(const n in M)if(Object.prototype.hasOwnProperty.call(M,n)){const p=M[n];if(p){const F=p(m,Y);if(typeof F=="string")return F}}}return!0},bu=({min:u,max:e,required:M,invalidFormatMessage:m,format:Y})=>{const s=nu({min:u,max:e,required:M,invalidFormatMessage:m,format:Y});return l=>{const{dateFrom:i=void 0,dateTo:v=void 0}=l||{},D=s(i);if(typeof D=="string")return D;const n=s(v);return typeof n=="string"?n:!0}},Q=au(cu)`
  width: 100%;
  & :where(.popover-target > :first-child, .popover-target, .popover-wrapper) {
    width: 100%;
  }
`;try{Q.displayName="DatePickerRangeStyled",Q.__docgenInfo={description:"",displayName:"DatePickerRangeStyled",props:{}}}catch{}const O=({name:u,options:e,portal:M,label:m,onChange:Y,textHint:s,format:l="DD.MM.YYYY",invalidFormatMessage:i="Формат даты указан не верно",ref:v,min:D,max:n,onChangeFirstValue:p,onChangeSecondValue:F,defaultFirstDate:lu,defaultSecondDate:iu,required:b,...k})=>{const[I,P]=uu.useState(!1),a={...e,required:tu({options:e,ruleName:"required"})?e==null?void 0:e.required:b},H={min:(()=>{if(D){const r=D.getTime();return typeof(a==null?void 0:a.min)=="object"&&"message"in a.min?{value:r,message:a.min.message}:r}return S({options:a,ruleName:"min"})?a==null?void 0:a.min:void 0})(),max:(()=>{if(n){const r=n.getTime();return typeof(a==null?void 0:a.max)=="object"&&"message"in a.max?{value:r,message:a.max.message}:r}return S({options:a,ruleName:"max"})?a==null?void 0:a.max:void 0})(),required:a==null?void 0:a.required,invalidFormatMessage:i},q=bu({...H,format:l}),t=xu({required:a==null?void 0:a.required,validateRange:q,externalValidates:a==null?void 0:a.validate}),x=Mu({...a,validate:r=>{const d=r?{dateFrom:r.dateFrom,dateTo:r.dateTo}:{dateFrom:void 0,dateTo:void 0};return t(d,x.getValues())}}),{control:$,rules:z,remOptions:W,clearErrors:L}=x,_=(n==null?void 0:n.getTime())??A({rule:a==null?void 0:a.max,typeValue:"number"}),R=(D==null?void 0:D.getTime())??A({rule:a==null?void 0:a.min,typeValue:"number"}),h=(r,d,c,o)=>{if(!r)return;if(d){x.setError(`${u}`,{type:"custom",message:"Ошибка значения"}),P(!1);return}const B=x.getValues(u)||{};Du({date:typeof r=="string"?r:r.toDateString(),format:l})&&c({...B,[o]:r})},j=(r,d,c)=>h(r,d,c,"dateFrom"),g=(r,d,c)=>h(r,d,c,"dateTo");return V.jsx(eu,{control:$,name:u,rules:z,...W,render:({field:{value:r,ref:d,...c},fieldState:{error:o}})=>{var N,U;const{dateFrom:B,dateTo:y}=r||{dateFrom:"",dateTo:""},K=B!=null&&B!==""?B:"",E=y!=null&&y!==""?y:"",C=(o==null?void 0:o.message)||((N=o==null?void 0:o.dateFrom)==null?void 0:N.message)||((U=o==null?void 0:o.dateTo)==null?void 0:U.message);return V.jsx(Q,{...c,ref:d,isDoubleCalendar:!0,closeOnOverlayClick:!0,contentRight:V.jsx(J,{datePickerSize:k.size}),value:[K,E],firstValueError:!!o,format:l,frame:M,label:m,max:_&&new Date(_)||void 0,min:R&&new Date(R)||void 0,name:u,opened:I,maskWithFormat:!0,required:!!a.required||void 0,requiredPlacement:"right",hasRequiredIndicator:!!a.required||void 0,secondValueError:!!o,usePortal:!!M,onChange:({target:f})=>{"value"in f&&(Y==null||Y(f.value||""),o&&L(u))},onChangeFirstValue:(f,T="")=>{const G={...x.getValues(u)||{},dateFrom:T};c.onChange(G),p==null||p(f)},onChangeSecondValue:(f,T="")=>{const G={...x.getValues(u)||{},dateTo:T};c.onChange(G),F==null||F(f)},onCommitSecondDate:(f,T)=>g(f,T.error,c.onChange),onCommitFirstDate:(f,T)=>j(f,T.error,c.onChange),onToggle:f=>{P(f)},leftHelper:Yu(o&&{message:C??""},s)||void 0,...k})}})};try{O.displayName="FormDatePickerRange",O.__docgenInfo={description:`[FormDatePickerRange](url) относится к группе mutation-form элементов. Он расширяет возможности
компонента [DatePicker.Range](https://plasma.sberdevices.ru/sdds-finai/components/datepicker/)
библиотеки [sdds-finai](https://plasma.sberdevices.ru/sdds-finai/) для работы с диапазонами дат в формах.

### Основные особенности:
- Встроенная валидация формата дат (сообщение через \`invalidFormatMessage\`)
- Поддержка обязательного заполнения (\`required\`)
- Контроль допустимых диапазонов дат
- Интеграция с react-hook-form

### Валидация диапазонов:
Для ограничения выбора дат используйте:
\`\`\`tsx
<FormDatePickerRange
  options={{
    min: {
      value: new Date(2024, 0, 1).getTime(),
      message: "Минимальная дата - 1 января 2024"
    },
    max: {
      value: new Date(2024, 11, 31).getTime(),
      message: "Максимальная дата - 31 декабря 2024"
    }
  }}
/>
\`\`\`

### Обязательное поле:
\`\`\`tsx
// Простое указание обязательности
<FormDatePickerRange options={{ required: true }} />

// С кастомным сообщением
<FormDatePickerRange
  options={{
    required: "Пожалуйста, укажите диапазон дат"
  }}
/>
\`\`\`

### Кастомная валидация:
\`\`\`tsx
<FormDatePickerRange
  options={{
    validate: {
      minDuration: (value) =>
        (new Date(value.dateTo) - new Date(value.dateFrom)) < 7 * 86400000
          ? "Минимальный период - 7 дней"
          : true,
      noWeekends: (value) =>
        [0, 6].includes(new Date(value.dateFrom).getDay())
          ? "Нельзя начинать в выходные"
          : true
    }
  }}
/>
\`\`\`

### Приоритеты валидации:
1. Проверка обязательности заполнения
2. Валидация формата дат
3. Проверка минимальных/максимальных значений
4. Кастомные валидаторы`,displayName:"FormDatePickerRange",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"RegisterOptions<FieldValues, Path<TFieldValues>>"}},portal:{defaultValue:null,description:"",name:"portal",required:!1,type:{name:"any"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(newValue: string) => void"}},textHint:{defaultValue:null,description:"",name:"textHint",required:!1,type:{name:"string"}},format:{defaultValue:{value:"DD.MM.YYYY"},description:"",name:"format",required:!1,type:{name:"enum",value:[{value:'"DD.MM.YY"'},{value:'"DD.MM.YYYY"'},{value:'"DD.MM-YY"'},{value:'"DD.MM-YYYY"'},{value:'"DD.MM YY"'},{value:'"DD.MM YYYY"'},{value:'"DD.MMM.YY"'},{value:'"DD.MMM.YYYY"'},{value:'"DD.MMM-YY"'},{value:'"DD.MMM-YYYY"'},{value:'"DD.MMM YY"'},{value:'"DD.MMM YYYY"'},{value:'"DD.MMMM.YY"'},{value:'"DD.MMMM.YYYY"'},{value:'"DD.MMMM-YY"'},{value:'"DD.MMMM-YYYY"'},{value:'"DD.MMMM YY"'},{value:'"DD.MMMM YYYY"'},{value:'"DD-MM.YY"'},{value:'"DD-MM.YYYY"'},{value:'"DD-MM-YY"'},{value:'"DD-MM-YYYY"'},{value:'"DD-MM YY"'},{value:'"DD-MM YYYY"'},{value:'"DD-MMM.YY"'},{value:'"DD-MMM.YYYY"'},{value:'"DD-MMM-YY"'},{value:'"DD-MMM-YYYY"'},{value:'"DD-MMM YY"'},{value:'"DD-MMM YYYY"'},{value:'"DD-MMMM.YY"'},{value:'"DD-MMMM.YYYY"'},{value:'"DD-MMMM-YY"'},{value:'"DD-MMMM-YYYY"'},{value:'"DD-MMMM YY"'},{value:'"DD-MMMM YYYY"'},{value:'"DD MM.YY"'},{value:'"DD MM.YYYY"'},{value:'"DD MM-YY"'},{value:'"DD MM-YYYY"'},{value:'"DD MM YY"'},{value:'"DD MM YYYY"'},{value:'"DD MMM.YY"'},{value:'"DD MMM.YYYY"'},{value:'"DD MMM-YY"'},{value:'"DD MMM-YYYY"'},{value:'"DD MMM YY"'},{value:'"DD MMM YYYY"'},{value:'"DD MMMM.YY"'},{value:'"DD MMMM.YYYY"'},{value:'"DD MMMM-YY"'},{value:'"DD MMMM-YYYY"'},{value:'"DD MMMM YY"'},{value:'"DD MMMM YYYY"'},{value:'"DD.MMM"'},{value:'"DD.MMMM"'},{value:'"DD-MMM"'},{value:'"DD-MMMM"'},{value:'"DD MMM"'},{value:'"DD MMMM"'},{value:'"MM.YY"'},{value:'"MM.YYYY"'},{value:'"MM-YY"'},{value:'"MM-YYYY"'},{value:'"MM YY"'},{value:'"MM YYYY"'},{value:'"MMM.YY"'},{value:'"MMM.YYYY"'},{value:'"MMM-YY"'},{value:'"MMM-YYYY"'},{value:'"MMM YY"'},{value:'"MMM YYYY"'},{value:'"MMMM.YY"'},{value:'"MMMM.YYYY"'},{value:'"MMMM-YY"'},{value:'"MMMM-YYYY"'},{value:'"MMMM YY"'},{value:'"MMMM YYYY"'}]}},invalidFormatMessage:{defaultValue:{value:"Формат даты указан не верно"},description:"",name:"invalidFormatMessage",required:!1,type:{name:"string"}}}}}catch{}export{w as F,O as a};
