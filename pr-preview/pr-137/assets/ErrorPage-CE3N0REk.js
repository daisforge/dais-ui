import{j as u,r as _}from"./react-CAOzMBF_.js";import{E as h}from"./EmptyState-BCYMGuYF.js";import{B as j}from"./Box-DvvYTz20.js";import{z as V,y as F,ar as w}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{H as D,C as q}from"./styled-components-DCFsnh-i.js";const t={contentContainer:"error-page__content-container",title:"error-page__title",description:"error-page__description","navigate-btn":"error-page__navigate-btn","error-id":"error-page__error-id"},a={toMain:{label:"На главную"},leaveRequest:{label:"Оставить заявку"}},N={400:{type:"Bad request",title:"Не удалось загрузить страницу",description:"Возможно, в ссылке опечатка. Проверьте и попробуйте снова",button:a.toMain},401:{type:"Unauthorized",title:"Не удаётся войти",description:"Проверьте логин и пароль или попробуйте снова",button:a.leaveRequest},403:{type:"Forbidden",title:"Доступ к FinAI ограничен",description:"Вы можете запросить право доступа в Друге"},404:{type:"Not found",title:"Такой страницы нет",description:u.jsxs(u.Fragment,{children:["Возможно, она удалена или в ссылке опечатка. ",u.jsx("br",{})," Вы можете вернуться на главную и посмотреть другие страницы"]}),button:a.toMain},409:{type:"Conflict",title:"Конфликт запросов",description:u.jsxs(u.Fragment,{children:["Невозможно выполнить запрос — он противоречит текущей версии сервиса.",u.jsx("br",{}),"Обновите страницу и попробуйте снова"]})},500:{type:"Internal server error",title:"Страница недоступна",description:u.jsx(u.Fragment,{children:"Произошла техническая ошибка, попробуйте зайти позже"}),button:a.toMain},502:{type:"Bad gateway",title:"Не удалось загрузить страницу",description:"Обновите страницу или попробуйте зайти позже",button:a.toMain},503:{type:"Service unavailable",title:"На FinAI проводятся технические работы",description:"Обновите страницу или зайдите позже"}},$={type:"Unknown",title:"Похоже страница недоступна",description:"Попробуйте обновить страницу."},I=D(j)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & .${t.contentContainer} {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    /* max-width: 562px; */

    & .${t.title} {
      /* margin-bottom: 16px; */
      color: ${()=>V};
    }
    & .${t.description} {
      color: ${()=>F};
    }

    & .${t["navigate-btn"]} {
      /* margin-top: 32px; */
    }
  }
`,M=D.p`
  ${()=>q(w)};
  color: ${()=>F};
  margin: 0;
  padding: 0;
  text-align: center;
  margin-top: ${({$hasButtons:r})=>r?"60px":"0px"};
`,m=r=>{const{statusCode:e,buttonHandler:o,unknownStatus:C,customStatuses:B,containerProps:y,showStatusCode:b=!1,errorId:l,size:f="l"}=r,g={...N,...B},d=typeof e=="number"&&g[e]||(C??$),{title:c,description:A,button:s,buttons:i}=d,E=[...s!=null&&s.label?[s]:[],...(i==null?void 0:i.filter(n=>n.label))||[]],S=typeof e=="number",x=_.useCallback(()=>{if(typeof e=="number"){const n=e.toString();if(["400","401","403","404","409","500","502","503"].includes(n))return n}return"unidentified"},[e])();return u.jsx(I,{...y,children:u.jsxs("div",{className:t.contentContainer,children:[u.jsx(h,{size:f,variant:x,title:b&&S?u.jsxs(u.Fragment,{children:[e,": ",c]}):c,subtitle:A,buttons:E.map((n,p)=>({type:"button",props:{view:n.view||"accent",onClick:v=>o==null?void 0:o(e,d,v),children:n.label,key:p}})),classes:{buttons:t["navigate-btn"],title:t.title,subtitle:t.description}}),l&&u.jsxs(M,{className:t["error-id"],$hasButtons:E.length>0,children:["Идентификатор ошибки: ",l]})]})})};try{m.displayName="ErrorPage",m.__docgenInfo={description:"",displayName:"ErrorPage",props:{statusCode:{defaultValue:null,description:"`statusCode` - статус-код ошибки. Поддерживаются по умолчанию: 400 | 403 | 404 | 409 | 500 | 502 | 503",name:"statusCode",required:!1,type:{name:"StatusCode"}},buttonHandler:{defaultValue:null,description:"`buttonHandler` - обработка клика по кнопке при разных ошибках",name:"buttonHandler",required:!1,type:{name:"(statusCode: StatusCode, statusObj: CustomStatusObj, e: React.MouseEvent<HTMLElement, MouseEvent>) => void"}},customStatuses:{defaultValue:null,description:"`customStatuses` - кастомные статусы и содержимое для их отображения.\nЕсли переданы статусы, которые компонентом по умолчанию поддерживаются, то кастомный перезапишет дефолтный.",name:"customStatuses",required:!1,type:{name:"Record<number, CustomStatusObj>"}},unknownStatus:{defaultValue:null,description:"`unknownStatus` - содержимое для отображения, если статус не передан или статуса нет среди известных.\n\nЕсли данное свойство не передано, то при неизвестных статусах будет выбрано отображение по умолчанию.",name:"unknownStatus",required:!1,type:{name:"CustomStatusObj"}},containerProps:{defaultValue:null,description:"`containerProps` - Пропсы для контейнера компонента. Например, `$css`, `style`.",name:"containerProps",required:!1,type:{name:"BoxProps"}},showStatusCode:{defaultValue:{value:"false"},description:'Показывать код ошибки перед заголовком. Например, "503: Сервис временно недоступен"',name:"showStatusCode",required:!1,type:{name:"boolean"}},errorId:{defaultValue:null,description:`Идентификатор ошибки. Отображается под кнопками (или под subtitle, если кнопок нет).
Формат отображения: "Идентификатор ошибки: {значение}"`,name:"errorId",required:!1,type:{name:"string"}},size:{defaultValue:{value:"'l'"},description:"Размер страницы ошибки. Влияет на изображение, типографику и отступы\n(размерная сетка та же, что у `EmptyState`).",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}}}}}catch{}export{m as E};
