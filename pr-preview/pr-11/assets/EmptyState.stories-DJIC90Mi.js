import{E as b}from"./EmptyState-Czyro0NP.js";const S={title:"Композиции/EmptyState",component:b,tags:["!autodocs"]},u={args:{size:"s",title:"Ничего не нашлось",subtitle:"Попробуйте изменить или сбросить фильтры",variant:"no-content",buttons:[{type:"link",props:{text:"Сбросить фильтры",view:"accent"}}]},name:"Small (s)"},t={args:{size:"m",title:"Ничего не нашлось",subtitle:"Попробуйте изменить параметры поиска",variant:"not-found",buttons:[{type:"button",props:{text:"Сбросить фильтры",view:"secondary"}}]},name:"Medium (m)"},e={args:{size:"l",title:"Отчётов пока нет",variant:"no-content",subtitle:"Здесь вы можете создавать отчёты и работать над ними   ",buttons:[{type:"button",props:{text:"Обновить",view:"secondary"}},{type:"button",props:{text:"Создать отчёт",view:"accent"}}],extraButton:{type:"link",props:{text:"Справка",view:"default"}}},name:"Large (l)"};var n,s,o,r,a;u.parameters={...u.parameters,docs:{...(n=u.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: 's',
    title: 'Ничего не нашлось',
    subtitle: 'Попробуйте изменить или сбросить фильтры',
    variant: 'no-content',
    buttons: [{
      type: 'link',
      props: {
        text: 'Сбросить фильтры',
        view: 'accent'
      }
    }]
  },
  name: 'Small (s)'
}`,...(o=(s=u.parameters)==null?void 0:s.docs)==null?void 0:o.source},description:{story:"Компактный вариант (без иконки)",...(a=(r=u.parameters)==null?void 0:r.docs)==null?void 0:a.description}}};var i,p,c,m,E;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'm',
    title: 'Ничего не нашлось',
    subtitle: 'Попробуйте изменить параметры поиска',
    variant: 'not-found',
    buttons: [{
      type: 'button',
      props: {
        text: 'Сбросить фильтры',
        view: 'secondary' // Кнопка secondary
      }
    }]
  },
  name: 'Medium (m)'
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source},description:{story:"Стандартный вариант с иконкой",...(E=(m=t.parameters)==null?void 0:m.docs)==null?void 0:E.description}}};var d,l,D,y,C;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'l',
    title: 'Отчётов пока нет',
    variant: 'no-content',
    subtitle: 'Здесь вы можете создавать отчёты и работать над ними   ',
    buttons: [{
      type: 'button',
      props: {
        text: 'Обновить',
        view: 'secondary' // Первая кнопка secondary
      }
    }, {
      type: 'button',
      props: {
        text: 'Создать отчёт',
        view: 'accent' // Вторая кнопка accent
      }
    }],
    extraButton: {
      type: 'link',
      props: {
        text: 'Справка',
        view: 'default'
      }
    }
  },
  name: 'Large (l)'
}`,...(D=(l=e.parameters)==null?void 0:l.docs)==null?void 0:D.source},description:{story:"Расширенный вариант с несколькими действиями",...(C=(y=e.parameters)==null?void 0:y.docs)==null?void 0:C.description}}};const B=["SizeS","SizeM","SizeL"],A=Object.freeze(Object.defineProperty({__proto__:null,SizeL:e,SizeM:t,SizeS:u,__namedExportsOrder:B,default:S},Symbol.toStringTag,{value:"Module"}));export{A as E};
