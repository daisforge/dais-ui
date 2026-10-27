import{j as r}from"./react-CAOzMBF_.js";import{E as e}from"./ErrorPage-CE3N0REk.js";const Q4={title:"Композиции/ErrorPage-Страницы ошибок",tags:["!autodocs"],excludeStories:["CANVAS"],component:e,argTypes:{size:{control:"inline-radio",options:["s","m","l"],description:"Размерная сетка (по умолчанию l)"}}},s={name:"400",args:{statusCode:400},render:u=>r.jsx(e,{...u,containerProps:{$css:{minHeight:600}}})},n={name:"401",args:{statusCode:401},render:u=>r.jsx(e,{...u,containerProps:{$css:{minHeight:600}}})},o={args:{statusCode:403},name:"403",render:u=>r.jsx(e,{...u,containerProps:{$css:{minHeight:600}}})},t={args:{statusCode:403,customStatuses:{403:{title:"Доступ к странице ограничен",description:"Вы можете запросить право доступа в Друге или вернуться на главную страницу",buttons:[{label:"Запросить доступ",view:"secondary"},{label:"Вернуться назад",view:"accent"}]}},buttonHandler:(u,G4,J4)=>{const K4=J4.currentTarget.textContent;alert(`Нажата кнопка "${K4}" для статуса ${u} info ${G4}`)}},name:"403 - Две кнопки",render:u=>r.jsx(e,{...u,containerProps:{$css:{minHeight:600}}})},a={args:{statusCode:404},name:"404",render:u=>r.jsx(e,{...u,containerProps:{$css:{minHeight:600}}})},c={args:{statusCode:409},name:"409",render:u=>r.jsx(e,{...u,containerProps:{$css:{minHeight:600}}})},i={args:{statusCode:500},name:"500",render:u=>r.jsx(e,{...u,containerProps:{$css:{minHeight:600}}})},d={args:{statusCode:502},name:"502",render:u=>r.jsx(e,{...u,containerProps:{$css:{minHeight:600}}})},E={args:{statusCode:503},name:"503",render:u=>r.jsx(e,{...u,containerProps:{$css:{minHeight:600}}})},m={args:{statusCode:503,showStatusCode:!0,customStatuses:{503:{title:r.jsxs(r.Fragment,{children:["Сервис временно недоступен.",r.jsx("br",{}),"Попробуйте зайти позже"]}),description:"Обновите страницу или зайдите позже"}}},name:"503 - с кодом ошибки",render:u=>r.jsx(e,{...u,containerProps:{$css:{minHeight:600}}})},p={args:{statusCode:"unknown"},name:"Неизвестная ошибка - заполнение по умолчанию",render:u=>r.jsx(e,{...u,containerProps:{$css:{minHeight:600}}})},g={args:{unknownStatus:{title:"Unknown Error",description:"Unknown Error description"}},name:"Неизвестная ошибка - кастомное заполнение",render:u=>r.jsx(e,{...u,containerProps:{$css:{minHeight:600}}})},C={args:{customStatuses:{501:{title:"Метод запроса не поддерживается сервером",description:"Метод запроса не поддерживается сервером и поэтому он не может быть обработан.",button:{label:"На главную"}},405:{title:"Метод запроса известен серверу",description:"Метод запроса известен серверу, но не поддерживается целевым ресурсом. Например, API может не разрешать вызов DELETE для удаления ресурса."}}},name:"Дополнительные статусы и их заполнение",render:u=>r.jsx(e,{...u,containerProps:{$css:{minHeight:600}}})},S={args:{statusCode:500,errorId:"a1b2c3d4-e5f6-7890-abcd-ef1234567890"},name:"500 - с идентификатором ошибки",render:u=>r.jsx(e,{...u,containerProps:{$css:{minHeight:600}}})},l={args:{statusCode:503,errorId:"err-timeout-xyz-9876"},name:"503 - идентификатор без кнопок",render:u=>r.jsx(e,{...u,containerProps:{$css:{minHeight:600}}})},F={args:{statusCode:404,size:"m"},name:"Размер m",render:u=>r.jsx(e,{...u,containerProps:{$css:{minHeight:600}}})},D={args:{statusCode:404,size:"s"},name:"Размер s",render:u=>r.jsx(e,{...u,containerProps:{$css:{minHeight:600}}})};var h,P,B,$,w;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '400',
  args: {
    statusCode: 400
  },
  render: args => <ErrorPage {...args} containerProps={{
    $css: {
      minHeight: 600
    }
  }} />
}`,...(B=(P=s.parameters)==null?void 0:P.docs)==null?void 0:B.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(w=($=s.parameters)==null?void 0:$.docs)==null?void 0:w.description}}};var H,x,A,b,j;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '401',
  args: {
    statusCode: 401
  },
  render: args => <ErrorPage {...args} containerProps={{
    $css: {
      minHeight: 600
    }
  }} />
}`,...(A=(x=n.parameters)==null?void 0:x.docs)==null?void 0:A.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(j=(b=n.parameters)==null?void 0:b.docs)==null?void 0:j.description}}};var y,f,z,k,T;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    statusCode: 403
  },
  name: '403',
  render: args => <ErrorPage {...args} containerProps={{
    $css: {
      minHeight: 600
    }
  }} />
}`,...(z=(f=o.parameters)==null?void 0:f.docs)==null?void 0:z.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(T=(k=o.parameters)==null?void 0:k.docs)==null?void 0:T.description}}};var I,U,W,_,v;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(W=(U=t.parameters)==null?void 0:U.docs)==null?void 0:W.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(v=(_=t.parameters)==null?void 0:_.docs)==null?void 0:v.description}}};var O,M,N,L,R;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    statusCode: 404
  },
  name: '404',
  render: args => <ErrorPage {...args} containerProps={{
    $css: {
      minHeight: 600
    }
  }} />
}`,...(N=(M=a.parameters)==null?void 0:M.docs)==null?void 0:N.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(R=(L=a.parameters)==null?void 0:L.docs)==null?void 0:R.description}}};var V,q,G,J,K;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    statusCode: 409
  },
  name: '409',
  render: args => <ErrorPage {...args} containerProps={{
    $css: {
      minHeight: 600
    }
  }} />
}`,...(G=(q=c.parameters)==null?void 0:q.docs)==null?void 0:G.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,X,Y,Z,u4;i.parameters={...i.parameters,docs:{...(Q=i.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    statusCode: 500
  },
  name: '500',
  render: args => <ErrorPage {...args} containerProps={{
    $css: {
      minHeight: 600
    }
  }} />
}`,...(Y=(X=i.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(u4=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:u4.description}}};var r4,e4,s4,n4,o4;d.parameters={...d.parameters,docs:{...(r4=d.parameters)==null?void 0:r4.docs,source:{originalSource:`{
  args: {
    statusCode: 502
  },
  name: '502',
  render: args => <ErrorPage {...args} containerProps={{
    $css: {
      minHeight: 600
    }
  }} />
}`,...(s4=(e4=d.parameters)==null?void 0:e4.docs)==null?void 0:s4.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(o4=(n4=d.parameters)==null?void 0:n4.docs)==null?void 0:o4.description}}};var t4,a4,c4,i4,d4;E.parameters={...E.parameters,docs:{...(t4=E.parameters)==null?void 0:t4.docs,source:{originalSource:`{
  args: {
    statusCode: 503
  },
  name: '503',
  render: args => <ErrorPage {...args} containerProps={{
    $css: {
      minHeight: 600
    }
  }} />
}`,...(c4=(a4=E.parameters)==null?void 0:a4.docs)==null?void 0:c4.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(d4=(i4=E.parameters)==null?void 0:i4.docs)==null?void 0:d4.description}}};var E4,m4,p4,g4,C4;m.parameters={...m.parameters,docs:{...(E4=m.parameters)==null?void 0:E4.docs,source:{originalSource:`{
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
}`,...(p4=(m4=m.parameters)==null?void 0:m4.docs)==null?void 0:p4.source},description:{story:"##### 503 с кодом ошибки в заголовке\n\nПример с `showStatusCode` и кастомным текстом для 503.\n\nℹ️ Для просмотра примера нажми `Show code`.",...(C4=(g4=m.parameters)==null?void 0:g4.docs)==null?void 0:C4.description}}};var F4,D4,S4,l4,h4;p.parameters={...p.parameters,docs:{...(F4=p.parameters)==null?void 0:F4.docs,source:{originalSource:`{
  args: {
    statusCode: 'unknown'
  },
  name: 'Неизвестная ошибка - заполнение по умолчанию',
  render: args => <ErrorPage {...args} containerProps={{
    $css: {
      minHeight: 600
    }
  }} />
}`,...(S4=(D4=p.parameters)==null?void 0:D4.docs)==null?void 0:S4.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(h4=(l4=p.parameters)==null?void 0:l4.docs)==null?void 0:h4.description}}};var P4,B4,$4,w4,H4;g.parameters={...g.parameters,docs:{...(P4=g.parameters)==null?void 0:P4.docs,source:{originalSource:`{
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
}`,...($4=(B4=g.parameters)==null?void 0:B4.docs)==null?void 0:$4.source},description:{story:"#### Описание неизвестной ошибки.\n\nℹ️ Для просмотра примера нажми `Show code`.",...(H4=(w4=g.parameters)==null?void 0:w4.docs)==null?void 0:H4.description}}};var x4,A4,b4,j4,y4;C.parameters={...C.parameters,docs:{...(x4=C.parameters)==null?void 0:x4.docs,source:{originalSource:`{
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
}`,...(b4=(A4=C.parameters)==null?void 0:A4.docs)==null?void 0:b4.source},description:{story:"#### В дополнение к существующим статусам можно добавлять свои статусы\n\nℹ️ Для просмотра примера нажми `Show code`.",...(y4=(j4=C.parameters)==null?void 0:j4.docs)==null?void 0:y4.description}}};var f4,z4,k4;S.parameters={...S.parameters,docs:{...(f4=S.parameters)==null?void 0:f4.docs,source:{originalSource:`{
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
}`,...(k4=(z4=S.parameters)==null?void 0:z4.docs)==null?void 0:k4.source}}};var T4,I4,U4;l.parameters={...l.parameters,docs:{...(T4=l.parameters)==null?void 0:T4.docs,source:{originalSource:`{
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
}`,...(U4=(I4=l.parameters)==null?void 0:I4.docs)==null?void 0:U4.source}}};var W4,_4,v4,O4,M4;F.parameters={...F.parameters,docs:{...(W4=F.parameters)==null?void 0:W4.docs,source:{originalSource:`{
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
}`,...(v4=(_4=F.parameters)==null?void 0:_4.docs)==null?void 0:v4.source},description:{story:"#### Размер `m`\n\nПо умолчанию `size` = `l`. Компонент поддерживает также `m` и `s` —\nразмерная сетка та же, что у `EmptyState`, меняется изображение ошибки.\n\nℹ️ Для просмотра примера нажми `Show code`.",...(M4=(O4=F.parameters)==null?void 0:O4.docs)==null?void 0:M4.description}}};var N4,L4,R4,V4,q4;D.parameters={...D.parameters,docs:{...(N4=D.parameters)==null?void 0:N4.docs,source:{originalSource:`{
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
}`,...(R4=(L4=D.parameters)==null?void 0:L4.docs)==null?void 0:R4.source},description:{story:"#### Размер `s`\n\nℹ️ Для просмотра примера нажми `Show code`.",...(q4=(V4=D.parameters)==null?void 0:V4.docs)==null?void 0:q4.description}}};const X4=["Default","S401","S403","S403WithTwoButtons","S404","S409","S500","S502","S503","S503WithStatusCode","SUnknown","UnknownError","CustomError","WithErrorId","WithErrorIdNoButtons","SizeM","SizeS"],u0=Object.freeze(Object.defineProperty({__proto__:null,CustomError:C,Default:s,S401:n,S403:o,S403WithTwoButtons:t,S404:a,S409:c,S500:i,S502:d,S503:E,S503WithStatusCode:m,SUnknown:p,SizeM:F,SizeS:D,UnknownError:g,WithErrorId:S,WithErrorIdNoButtons:l,__namedExportsOrder:X4,default:Q4},Symbol.toStringTag,{value:"Module"}));export{u0 as E};
