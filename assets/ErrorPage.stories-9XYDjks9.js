import{d as r}from"./react-D2T61mpp.js";import{E as e}from"./ErrorPage-Cw7fLOVy.js";const Q4={title:"Композиции/ErrorPage-Страницы ошибок",tags:["!autodocs"],excludeStories:["CANVAS"],component:e,argTypes:{size:{control:"inline-radio",options:["s","m","l"],description:"Размерная сетка (по умолчанию l)"}}},s={name:"400",args:{statusCode:400},render:u=>r.jsxDEV(e,{...u,containerProps:{$css:{minHeight:600}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/ErrorPage/ErrorPage.stories.tsx",lineNumber:32,columnNumber:5},void 0)},n={name:"401",args:{statusCode:401},render:u=>r.jsxDEV(e,{...u,containerProps:{$css:{minHeight:600}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/ErrorPage/ErrorPage.stories.tsx",lineNumber:45,columnNumber:5},void 0)},o={args:{statusCode:403},name:"403",render:u=>r.jsxDEV(e,{...u,containerProps:{$css:{minHeight:600}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/ErrorPage/ErrorPage.stories.tsx",lineNumber:57,columnNumber:5},void 0)},a={args:{statusCode:403,customStatuses:{403:{title:"Доступ к странице ограничен",description:"Вы можете запросить право доступа в Друге или вернуться на главную страницу",buttons:[{label:"Запросить доступ",view:"secondary"},{label:"Вернуться назад",view:"accent"}]}},buttonHandler:(u,G4,J4)=>{const K4=J4.currentTarget.textContent;alert(`Нажата кнопка "${K4}" для статуса ${u} info ${G4}`)}},name:"403 - Две кнопки",render:u=>r.jsxDEV(e,{...u,containerProps:{$css:{minHeight:600}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/ErrorPage/ErrorPage.stories.tsx",lineNumber:95,columnNumber:5},void 0)},t={args:{statusCode:404},name:"404",render:u=>r.jsxDEV(e,{...u,containerProps:{$css:{minHeight:600}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/ErrorPage/ErrorPage.stories.tsx",lineNumber:109,columnNumber:5},void 0)},i={args:{statusCode:409},name:"409",render:u=>r.jsxDEV(e,{...u,containerProps:{$css:{minHeight:600}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/ErrorPage/ErrorPage.stories.tsx",lineNumber:123,columnNumber:5},void 0)},c={args:{statusCode:500},name:"500",render:u=>r.jsxDEV(e,{...u,containerProps:{$css:{minHeight:600}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/ErrorPage/ErrorPage.stories.tsx",lineNumber:136,columnNumber:5},void 0)},d={args:{statusCode:502},name:"502",render:u=>r.jsxDEV(e,{...u,containerProps:{$css:{minHeight:600}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/ErrorPage/ErrorPage.stories.tsx",lineNumber:149,columnNumber:5},void 0)},m={args:{statusCode:503},name:"503",render:u=>r.jsxDEV(e,{...u,containerProps:{$css:{minHeight:600}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/ErrorPage/ErrorPage.stories.tsx",lineNumber:162,columnNumber:5},void 0)},E={args:{statusCode:503,showStatusCode:!0,customStatuses:{503:{title:r.jsxDEV(r.Fragment,{children:["Сервис временно недоступен.",r.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/ErrorPage/ErrorPage.stories.tsx",lineNumber:182,columnNumber:13},void 0),"Попробуйте зайти позже"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/ErrorPage/ErrorPage.stories.tsx",lineNumber:180,columnNumber:11},void 0),description:"Обновите страницу или зайдите позже"}}},name:"503 - с кодом ошибки",render:u=>r.jsxDEV(e,{...u,containerProps:{$css:{minHeight:600}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/ErrorPage/ErrorPage.stories.tsx",lineNumber:192,columnNumber:5},void 0)},g={args:{statusCode:"unknown"},name:"Неизвестная ошибка - заполнение по умолчанию",render:u=>r.jsxDEV(e,{...u,containerProps:{$css:{minHeight:600}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/ErrorPage/ErrorPage.stories.tsx",lineNumber:205,columnNumber:5},void 0)},p={args:{unknownStatus:{title:"Unknown Error",description:"Unknown Error description"}},name:"Неизвестная ошибка - кастомное заполнение",render:u=>r.jsxDEV(e,{...u,containerProps:{$css:{minHeight:600}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/ErrorPage/ErrorPage.stories.tsx",lineNumber:223,columnNumber:5},void 0)},l={args:{customStatuses:{501:{title:"Метод запроса не поддерживается сервером",description:"Метод запроса не поддерживается сервером и поэтому он не может быть обработан.",button:{label:"На главную"}},405:{title:"Метод запроса известен серверу",description:"Метод запроса известен серверу, но не поддерживается целевым ресурсом. Например, API может не разрешать вызов DELETE для удаления ресурса."}}},name:"Дополнительные статусы и их заполнение",render:u=>r.jsxDEV(e,{...u,containerProps:{$css:{minHeight:600}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/ErrorPage/ErrorPage.stories.tsx",lineNumber:251,columnNumber:5},void 0)},D={args:{statusCode:500,errorId:"a1b2c3d4-e5f6-7890-abcd-ef1234567890"},name:"500 - с идентификатором ошибки",render:u=>r.jsxDEV(e,{...u,containerProps:{$css:{minHeight:600}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/ErrorPage/ErrorPage.stories.tsx",lineNumber:262,columnNumber:5},void 0)},P={args:{statusCode:503,errorId:"err-timeout-xyz-9876"},name:"503 - идентификатор без кнопок",render:u=>r.jsxDEV(e,{...u,containerProps:{$css:{minHeight:600}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/ErrorPage/ErrorPage.stories.tsx",lineNumber:273,columnNumber:5},void 0)},C={args:{statusCode:404,size:"m"},name:"Размер m",render:u=>r.jsxDEV(e,{...u,containerProps:{$css:{minHeight:600}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/ErrorPage/ErrorPage.stories.tsx",lineNumber:292,columnNumber:5},void 0)},F={args:{statusCode:404,size:"s"},name:"Размер s",render:u=>r.jsxDEV(e,{...u,containerProps:{$css:{minHeight:600}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/ErrorPage/ErrorPage.stories.tsx",lineNumber:308,columnNumber:5},void 0)};var b,h,S,f,k;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '400',
  args: {
    statusCode: 400
  },
  render: args => <ErrorPage {...args} containerProps={{
    $css: {
      minHeight: 600
    }
  }} />
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(k=(f=s.parameters)==null?void 0:f.docs)==null?void 0:k.description}}};var N,w,x,B,y;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '401',
  args: {
    statusCode: 401
  },
  render: args => <ErrorPage {...args} containerProps={{
    $css: {
      minHeight: 600
    }
  }} />
}`,...(x=(w=n.parameters)==null?void 0:w.docs)==null?void 0:x.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(y=(B=n.parameters)==null?void 0:B.docs)==null?void 0:y.description}}};var $,H,A,v,j;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    statusCode: 403
  },
  name: '403',
  render: args => <ErrorPage {...args} containerProps={{
    $css: {
      minHeight: 600
    }
  }} />
}`,...(A=(H=o.parameters)==null?void 0:H.docs)==null?void 0:A.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(j=(v=o.parameters)==null?void 0:v.docs)==null?void 0:j.description}}};var V,z,T,I,U;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    statusCode: 403,
    customStatuses: {
      403: {
        title: 'Доступ к странице ограничен',
        description: 'Вы можете запросить право доступа в Друге или вернуться на главную страницу',
        buttons: [
        // Используем buttons вместо button
        {
          label: 'Запросить доступ',
          view: 'secondary'
        }, {
          label: 'Вернуться назад',
          view: 'accent'
        }]
      }
    },
    buttonHandler: (statusCode, statusObj, e) => {
      const buttonText = e.currentTarget.textContent;
      // eslint-disable-next-line no-alert
      alert(\`Нажата кнопка "\${buttonText}" для статуса \${statusCode} info \${statusObj}\`);
    }
  },
  name: '403 - Две кнопки',
  render: args => <ErrorPage {...args} containerProps={{
    $css: {
      minHeight: 600
    }
  }} />
}`,...(T=(z=a.parameters)==null?void 0:z.docs)==null?void 0:T.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(U=(I=a.parameters)==null?void 0:I.docs)==null?void 0:U.description}}};var W,_,O,M,L;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    statusCode: 404
  },
  name: '404',
  render: args => <ErrorPage {...args} containerProps={{
    $css: {
      minHeight: 600
    }
  }} />
}`,...(O=(_=t.parameters)==null?void 0:_.docs)==null?void 0:O.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(L=(M=t.parameters)==null?void 0:M.docs)==null?void 0:L.description}}};var R,q,G,J,K;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    statusCode: 409
  },
  name: '409',
  render: args => <ErrorPage {...args} containerProps={{
    $css: {
      minHeight: 600
    }
  }} />
}`,...(G=(q=i.parameters)==null?void 0:q.docs)==null?void 0:G.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(K=(J=i.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,X,Y,Z,u4;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    statusCode: 500
  },
  name: '500',
  render: args => <ErrorPage {...args} containerProps={{
    $css: {
      minHeight: 600
    }
  }} />
}`,...(Y=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(u4=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:u4.description}}};var r4,e4,s4,n4,o4;d.parameters={...d.parameters,docs:{...(r4=d.parameters)==null?void 0:r4.docs,source:{originalSource:`{
  args: {
    statusCode: 502
  },
  name: '502',
  render: args => <ErrorPage {...args} containerProps={{
    $css: {
      minHeight: 600
    }
  }} />
}`,...(s4=(e4=d.parameters)==null?void 0:e4.docs)==null?void 0:s4.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(o4=(n4=d.parameters)==null?void 0:n4.docs)==null?void 0:o4.description}}};var a4,t4,i4,c4,d4;m.parameters={...m.parameters,docs:{...(a4=m.parameters)==null?void 0:a4.docs,source:{originalSource:`{
  args: {
    statusCode: 503
  },
  name: '503',
  render: args => <ErrorPage {...args} containerProps={{
    $css: {
      minHeight: 600
    }
  }} />
}`,...(i4=(t4=m.parameters)==null?void 0:t4.docs)==null?void 0:i4.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(d4=(c4=m.parameters)==null?void 0:c4.docs)==null?void 0:d4.description}}};var m4,E4,g4,p4,l4;E.parameters={...E.parameters,docs:{...(m4=E.parameters)==null?void 0:m4.docs,source:{originalSource:`{
  args: {
    statusCode: 503,
    showStatusCode: true,
    customStatuses: {
      503: {
        title: <>
            Сервис временно недоступен.
            <br />
            Попробуйте зайти позже
          </>,
        description: 'Обновите страницу или зайдите позже'
      }
    }
  },
  name: '503 - с кодом ошибки',
  render: args => <ErrorPage {...args} containerProps={{
    $css: {
      minHeight: 600
    }
  }} />
}`,...(g4=(E4=E.parameters)==null?void 0:E4.docs)==null?void 0:g4.source},description:{story:"##### 503 с кодом ошибки в заголовке\n\nПример с `showStatusCode` и кастомным текстом для 503.\n\nℹ️ Для просмотра примера нажми `Show code`.",...(l4=(p4=E.parameters)==null?void 0:p4.docs)==null?void 0:l4.description}}};var C4,F4,D4,P4,b4;g.parameters={...g.parameters,docs:{...(C4=g.parameters)==null?void 0:C4.docs,source:{originalSource:`{
  args: {
    statusCode: 'unknown'
  },
  name: 'Неизвестная ошибка - заполнение по умолчанию',
  render: args => <ErrorPage {...args} containerProps={{
    $css: {
      minHeight: 600
    }
  }} />
}`,...(D4=(F4=g.parameters)==null?void 0:F4.docs)==null?void 0:D4.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(b4=(P4=g.parameters)==null?void 0:P4.docs)==null?void 0:b4.description}}};var h4,S4,f4,k4,N4;p.parameters={...p.parameters,docs:{...(h4=p.parameters)==null?void 0:h4.docs,source:{originalSource:`{
  args: {
    unknownStatus: {
      title: 'Unknown Error',
      description: 'Unknown Error description'
    }
  },
  name: 'Неизвестная ошибка - кастомное заполнение',
  render: args => <ErrorPage {...args} containerProps={{
    $css: {
      minHeight: 600
    }
  }} />
}`,...(f4=(S4=p.parameters)==null?void 0:S4.docs)==null?void 0:f4.source},description:{story:"#### Описание неизвестной ошибки.\n\nℹ️ Для просмотра примера нажми `Show code`.",...(N4=(k4=p.parameters)==null?void 0:k4.docs)==null?void 0:N4.description}}};var w4,x4,B4,y4,$4;l.parameters={...l.parameters,docs:{...(w4=l.parameters)==null?void 0:w4.docs,source:{originalSource:`{
  args: {
    customStatuses: {
      501: {
        title: 'Метод запроса не поддерживается сервером',
        description: 'Метод запроса не поддерживается сервером и поэтому он не может быть обработан.',
        button: {
          label: 'На главную'
        }
      },
      405: {
        title: 'Метод запроса известен серверу',
        description: 'Метод запроса известен серверу, но не поддерживается целевым ресурсом. Например, API может не разрешать вызов DELETE для удаления ресурса.'
      }
    }
  },
  name: 'Дополнительные статусы и их заполнение',
  render: args => <ErrorPage {...args} containerProps={{
    $css: {
      minHeight: 600
    }
  }} />
}`,...(B4=(x4=l.parameters)==null?void 0:x4.docs)==null?void 0:B4.source},description:{story:"#### В дополнение к существующим статусам можно добавлять свои статусы\n\nℹ️ Для просмотра примера нажми `Show code`.",...($4=(y4=l.parameters)==null?void 0:y4.docs)==null?void 0:$4.description}}};var H4,A4,v4;D.parameters={...D.parameters,docs:{...(H4=D.parameters)==null?void 0:H4.docs,source:{originalSource:`{
  args: {
    statusCode: 500,
    errorId: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890'
  },
  name: '500 - с идентификатором ошибки',
  render: args => <ErrorPage {...args} containerProps={{
    $css: {
      minHeight: 600
    }
  }} />
}`,...(v4=(A4=D.parameters)==null?void 0:A4.docs)==null?void 0:v4.source}}};var j4,V4,z4;P.parameters={...P.parameters,docs:{...(j4=P.parameters)==null?void 0:j4.docs,source:{originalSource:`{
  args: {
    statusCode: 503,
    errorId: 'err-timeout-xyz-9876'
  },
  name: '503 - идентификатор без кнопок',
  render: args => <ErrorPage {...args} containerProps={{
    $css: {
      minHeight: 600
    }
  }} />
}`,...(z4=(V4=P.parameters)==null?void 0:V4.docs)==null?void 0:z4.source}}};var T4,I4,U4,W4,_4;C.parameters={...C.parameters,docs:{...(T4=C.parameters)==null?void 0:T4.docs,source:{originalSource:`{
  args: {
    statusCode: 404,
    size: 'm'
  },
  name: 'Размер m',
  render: args => <ErrorPage {...args} containerProps={{
    $css: {
      minHeight: 600
    }
  }} />
}`,...(U4=(I4=C.parameters)==null?void 0:I4.docs)==null?void 0:U4.source},description:{story:"#### Размер `m`\n\nПо умолчанию `size` = `l`. Компонент поддерживает также `m` и `s` —\nразмерная сетка та же, что у `EmptyState`, меняется изображение ошибки.\n\nℹ️ Для просмотра примера нажми `Show code`.",...(_4=(W4=C.parameters)==null?void 0:W4.docs)==null?void 0:_4.description}}};var O4,M4,L4,R4,q4;F.parameters={...F.parameters,docs:{...(O4=F.parameters)==null?void 0:O4.docs,source:{originalSource:`{
  args: {
    statusCode: 404,
    size: 's'
  },
  name: 'Размер s',
  render: args => <ErrorPage {...args} containerProps={{
    $css: {
      minHeight: 600
    }
  }} />
}`,...(L4=(M4=F.parameters)==null?void 0:M4.docs)==null?void 0:L4.source},description:{story:"#### Размер `s`\n\nℹ️ Для просмотра примера нажми `Show code`.",...(q4=(R4=F.parameters)==null?void 0:R4.docs)==null?void 0:q4.description}}};const X4=["Default","S401","S403","S403WithTwoButtons","S404","S409","S500","S502","S503","S503WithStatusCode","SUnknown","UnknownError","CustomError","WithErrorId","WithErrorIdNoButtons","SizeM","SizeS"],u0=Object.freeze(Object.defineProperty({__proto__:null,CustomError:l,Default:s,S401:n,S403:o,S403WithTwoButtons:a,S404:t,S409:i,S500:c,S502:d,S503:m,S503WithStatusCode:E,SUnknown:g,SizeM:C,SizeS:F,UnknownError:p,WithErrorId:D,WithErrorIdNoButtons:P,__namedExportsOrder:X4,default:Q4},Symbol.toStringTag,{value:"Module"}));export{u0 as E};
