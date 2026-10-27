import{r as a,j as e}from"./react-CAOzMBF_.js";import{i as N}from"./subRows.routes-DQ86HlXs.js";import{s as ee}from"./storySourceDoc-tVKyHcEN.js";import{A as y}from"./AnalyticalWidget-CfQQ2-mb.js";import{G as k}from"./GridDND-CG8TgCKn.js";import{S as A}from"./FiltersActions-BWfcXHB3.js";import{u as z}from"./ListOfFilters-CMjwWdxj.js";import{f as E,D as W,u as v,l as L,b as O,a as F}from"./utils-ChnhBB6l.js";import{x as te,w as ne,F as T,a8 as Y,R as Z,t as f}from"./@salutejs/sdds-finai-CKhMjg07.js";import{ck as $}from"./vendor-DmWczWMC.js";const oe=(n,d=200)=>{let i;return(...o)=>{clearTimeout(i),i=setTimeout(()=>{n(...o)},d)}},_=({id:n,onRemove:d})=>{const[i,o]=a.useReducer(E,W),l=v("blocks",10),c=v("tribes",15),C=v("allocation",10),x=Array(3).fill(0),S=Array(6).fill(0),[D,m]=a.useState(0),{filterList:s,filterListOpened:u}=z({filters:i,options:{blocks:l,tribes:c,allocation:C,filterButton:F,dotsButton:O},updateFilters:(g,p)=>o({[g]:p}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},year:{label:"Год",clearedValue:null},filterButton:{label:"Фильтр",clearedValue:""},dotsButton:{label:"Меню",clearedValue:""}}}),b=s.map((g,p)=>"groupLabel"in g?g.items.map((j,t)=>({text:String(j.label),view:"default",hasClear:!1,onClick:j.onClick,key:`chip-key${p}-${t}-${j.label}`})):{text:String(g.label),view:"default",hasClear:!1,onClick:g.onClick,key:`chip-key${p}-${g.label}`}).flat();return e.jsx($,{children:e.jsx(y,{$css:{height:"100%",maxWidth:"unset !important",width:"100% !important"},size:"l",headerSlot:e.jsx(y.Header,{title:`Заголовок S${n.toString().split("").reverse().slice(0,3).join("")}`,badge:`S${n.toString().split("").reverse().slice(0,2).join("")}`,subtitle:"Подзаголовок",href:"/",rightSlot:e.jsx(T,{alignment:"center",mainAxisGap:"8px",style:{flexWrap:"nowrap"},children:e.jsx(Y,{hasBackground:!0,size:"xs",children:x.map((g,p)=>e.jsx(Z,{value:`item_${p}`,label:`Label${p+1}`,size:"xs",view:"secondary"},`item:${p}`))})}),infoTooltipText:"Info"}),topSlot:b.length>0&&e.jsx(T,{orientation:"vertical",mainAxisGap:8,children:e.jsx(y.Chips,{opened:u,isWrapped:!0,gap:"wide",isCommonChipStyles:!1,chips:b})}),middleSlot:e.jsx(te,{view:"divider",orientation:"horizontal",size:"xs",children:S.map((g,p)=>e.jsx(ne,{view:"divider",orientation:"horizontal",size:"xs",selected:p===D,tabIndex:0,onClick:()=>m(p),children:`Tab ${p+1}`},p))}),contentSlot:e.jsx("div",{style:{minHeight:"fit-content"},children:L()})})})};try{_.displayName="WidgetL",_.__docgenInfo={description:"",displayName:"WidgetL",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string | number"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"() => void"}}}}}catch{}const B=({id:n,onRemove:d})=>{const[i,o]=a.useReducer(E,W),l=v("blocks",10),c=v("tribes",15),C=v("allocation",10),x=Array(3).fill(0),{filterList:S,filterListOpened:D}=z({filters:i,options:{blocks:l,tribes:c,allocation:C,filterButton:F,dotsButton:O},updateFilters:(s,u)=>o({[s]:u}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},year:{label:"Год",clearedValue:null},filterButton:{label:"Фильтр",clearedValue:""},dotsButton:{label:"Меню",clearedValue:""}}}),m=S.map((s,u)=>"groupLabel"in s?s.items.map((b,g)=>({text:String(b.label),view:"default",hasClear:!1,onClick:b.onClick,key:`chip-key${u}-${g}-${b.label}`})):{text:String(s.label),view:"default",hasClear:!1,onClick:s.onClick,key:`chip-key-${u}-${s.label}`}).flat();return e.jsx($,{defaultSelected:["item_0"],children:e.jsx(y,{$css:{height:"100%",maxWidth:"unset !important",width:"100% !important"},size:"m",headerSlot:e.jsx(y.Header,{title:`Заголовок S${n.toString().split("").reverse().slice(0,3).join("")}`,badge:`S${n.toString().split("").reverse().slice(0,2).join("")}`,subtitle:"Подзаголовок",rightSlot:e.jsx(T,{alignment:"center",mainAxisGap:"8px",style:{flexWrap:"nowrap"},children:e.jsx(Y,{hasBackground:!0,size:"xs",children:x.map((s,u)=>e.jsx(Z,{value:`item_${u}`,label:`Label${u+1}`,size:"xs",view:"secondary"},`item:${u}`))})}),infoTooltipText:"Info",href:"/"}),topSlot:m.length>0&&e.jsx(T,{orientation:"vertical",mainAxisGap:8,children:e.jsx(y.Chips,{opened:D,isWrapped:!0,gap:"wide",isCommonChipStyles:!1,chips:m})}),contentSlot:e.jsx("div",{style:{height:"fit-content"},children:L()}),classes:{topSlot:"myCustomClassForTopSlot",middleSlot:"myCustomClassForMiddleSlot",contentSlot:"myCustomClassForContentSlot",root:"myCustomClassForRoot"}})})};try{B.displayName="WidgetM",B.__docgenInfo={description:"",displayName:"WidgetM",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string | number"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"() => void"}}}}}catch{}const G=({id:n,onRemove:d})=>{const[i,o]=a.useReducer(E,W),l=v("blocks",10),c=v("tribes",15),C=v("allocation",10),{filterList:x,filterListOpened:S}=z({filters:i,options:{blocks:l,tribes:c,allocation:C,filterButton:F,dotsButton:O},updateFilters:(m,s)=>o({[m]:s}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},year:{label:"Год",clearedValue:null},filterButton:{label:"Фильтр",clearedValue:""},dotsButton:{label:"Меню",clearedValue:""}}}),D=x.map((m,s)=>"groupLabel"in m?m.items.map((u,b)=>({text:String(u.label),view:"default",hasClear:!1,onClick:u.onClick,key:`chip-key${s}-${b}-${u.label}`})):{text:String(m.label),view:"default",hasClear:!1,onClick:m.onClick,key:`chip-key-${s}-${m.label}`}).flat();return e.jsx($,{defaultSelected:["item_0"],children:e.jsx(y,{$css:{height:"100%",maxWidth:"unset !important",width:"100% !important"},size:"s",headerSlot:e.jsx(y.Header,{title:`Заголовок S${n.toString().split("").reverse().slice(0,2).join("")}`,badge:`S${n.toString().split("").reverse().slice(0,2).join("")}`,subtitle:"Подзаголовок",infoTooltipText:"Info",href:"/"}),topSlot:D.length>0&&e.jsx(T,{orientation:"vertical",mainAxisGap:8,children:e.jsx(y.Chips,{opened:S,isWrapped:!0,gap:"wide",isCommonChipStyles:!1,chips:D})}),contentSlot:e.jsx("div",{style:{height:"fit-content"},children:L()}),classes:{topSlot:"myCustomClassForTopSlot",middleSlot:"myCustomClassForMiddleSlot",contentSlot:"myCustomClassForContentSlot",root:"myCustomClassForRoot"}})})};try{G.displayName="WidgetS",G.__docgenInfo={description:"",displayName:"WidgetS",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string | number"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"() => void"}}}}}catch{}const re={title:"Локальные компоненты/GridDND",component:k,tags:["!autodocs"],parameters:{layout:"fullscreen",msw:{handlers:[...N.handlers]}}},ae=`
import { GridDND } from '@daisforge/ui';

`,I={name:"Задержка активации D&D (dragActivationDelay)",render(){const n=a.useRef(null),[d]=a.useState([{id:"w1",type:"m"},{id:"w2",type:"s"},{id:"w3",type:"s"},{id:"w4",type:"m"},{id:"w5",type:"s"}]),i=a.useCallback((o,l)=>e.jsxs(k.ItemWrapper,{item:o,actionsSlot:e.jsx(y.DotsIconButton,{absolute:!0,dropdownProps:{items:[{label:"Удалить",value:"Удалить"}],onItemSelect(){l()}}}),children:[o.type==="s"&&e.jsx(G,{id:o.id,onRemove:l}),o.type==="m"&&e.jsx(B,{id:o.id,onRemove:l})]}),[]);return e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:12,color:"#666",fontSize:14},children:"Зажмите карточку на 500мс для активации перетаскивания. Обводка появится только у зажатой карточки."}),e.jsx("div",{style:{width:1200,background:"lightGray"},children:e.jsx(k,{ref:n,items:d,isDraggable:!0,dragActivationDelay:500,compactType:"horizontal",children:i,onLayoutChange:(o,l,c)=>{console.debug("Layout changed:",o,c)}})})]})}},w={name:"GridDND Classic",...ee({preCode:ae}),render(){const n=a.useRef(null),[d,i]=a.useState([]),[o,l]=a.useState(1660),[c,C]=a.useState(!0),[x,S]=a.useState(!0),[D,m]=a.useState(!0),[s,u]=a.useState("horizontal"),b=a.useCallback((t,r)=>e.jsxs(k.ItemWrapper,{item:t,actionsSlot:e.jsx(y.DotsIconButton,{absolute:!0,dropdownProps:{items:[{label:"Удалить",value:"Удалить"}],onItemSelect(h){var V;((V=h.value)==null?void 0:V.toString().toLowerCase())==="удалить"&&r()}}}),children:[t.type==="s"&&e.jsx(G,{id:t.id,onRemove:r}),t.type==="m"&&e.jsx(B,{id:t.id,onRemove:r}),t.type==="l"&&e.jsx(_,{id:t.id,onRemove:r})]}),[]),g=()=>{var r,h;const t=((r=n.current)==null?void 0:r.api.getOrder())||[];(h=n.current)==null||h.api.setOrder([...t].reverse())},p=a.useCallback(async t=>{try{console.log("💾 Saving items to server:",t),await fetch(N.ENDPOINTS.PUT_ITEMS,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:t})}),console.log("✅ Items saved successfully")}catch(r){console.error("❌ Failed to save items:",r)}},[]),j=a.useCallback(oe(t=>{p(t)},800),[p]);return a.useEffect(()=>{(async()=>{try{const h=await(await fetch(N.ENDPOINTS.GET_ITEMS)).json();i(h.items)}catch(r){console.error("Failed to fetch items:",r)}finally{S(!1)}})()},[]),x?e.jsx("div",{children:"Loading..."}):e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",marginBottom:12},children:[e.jsxs("span",{children:["Width: ",o,"px"]}),e.jsx("input",{type:"range",min:600,max:1890,step:10,value:o,onChange:t=>l(+t.target.value)}),e.jsx(A,{onChange:t=>C(t.target.checked),label:"Activate DND",checked:c}),e.jsx(A,{onChange:t=>m(t.target.checked),label:"Activate Smart Compact",checked:D}),e.jsx(A,{onChange:t=>u(t.target.checked?"vertical":null),label:"Activate Compact Type Vertical",checked:s==="vertical"}),e.jsx(A,{onChange:t=>u(t.target.checked?"horizontal":null),label:"Activate Compact Type Horizontal",checked:s==="horizontal"})]}),e.jsxs("div",{style:{marginBottom:"30px",display:"flex",gap:"8px"},children:[e.jsx(f,{onClick:()=>{var t;console.debug((t=n.current)==null?void 0:t.api.getOrderDetailed())},children:"Get Order Detail"}),e.jsx(f,{onClick:()=>{var t;return console.debug("Current layout:",(t=n.current)==null?void 0:t.api.getOrder())},children:"Get Order"}),e.jsx(f,{onClick:()=>{var t;return console.debug("Current template area:",(t=n.current)==null?void 0:t.api.getCurrentLayout())},children:"Get Current Layout"}),e.jsx(f,{onClick:()=>{var t;return console.debug("All template areas:",(t=n.current)==null?void 0:t.api.getAllLayouts())},children:"Get All Layouts"}),e.jsx(f,{onClick:()=>{var h;const t=prompt("Enter id"),r=prompt("Enter type (s, m, l)");!t||!r||!n.current||r!=="s"&&r!=="m"&&r!=="l"||(h=n.current)==null||h.api.addItem({id:t,type:r})},children:"+ Add widget"}),e.jsx(f,{onClick:()=>g(),children:"Reorder"})]}),e.jsx("div",{style:{width:o,background:"lightGray"},children:e.jsx(k,{ref:n,items:d,compactType:"horizontal",smartCompact:D,children:b,onItemsChange:t=>console.debug("📦 Template Items changed:",t),onLayoutChange:(t,r,h)=>{console.group("📐 Template Layout changed:"),console.debug("Layout:",t),console.debug("All areas:",r),console.debug("Meta:",h),h.itemsOrderTyped&&(console.debug("🔄 Items order changed, saving..."),j(h.itemsOrderTyped)),console.groupEnd()},onBreakpointChange:(t,r)=>{console.group("📱 Template Breakpoint changed:"),console.debug("Breakpoint:",t),console.debug("Layout:",r),console.groupEnd()},isDraggable:c})})]})}},ie=({id:n,type:d,onResize:i,onRemove:o})=>{const[l,c]=a.useState(0);return e.jsx(y,{$css:{height:"100%",maxWidth:"unset !important",width:"100% !important"},size:d,headerSlot:e.jsx(y.Header,{title:`Виджет ${n}`,badge:d.toUpperCase(),subtitle:"Самоизменяемый размер",infoTooltipText:"Кнопки внутри меняют type через onResize",href:"/"}),contentSlot:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,height:"fit-content"},children:[e.jsxs("div",{className:"grid-dnd__no-drag",style:{display:"flex",flexWrap:"wrap",gap:8},children:[e.jsxs(f,{size:"xs",onClick:()=>c(C=>C+1),children:["Counter: ",l]}),e.jsx(f,{size:"xs",view:"secondary",disabled:d==="s",onClick:()=>i("s"),children:"→ S"}),e.jsx(f,{size:"xs",view:"secondary",disabled:d==="m",onClick:()=>i("m"),children:"→ M"}),e.jsx(f,{size:"xs",view:"secondary",disabled:d==="l",onClick:()=>i("l"),children:"→ L"}),e.jsx(f,{size:"xs",view:"negative",onClick:o,children:"Remove"})]}),e.jsx("div",{children:L()})]})})},R={name:"Самоизменение типа виджета (через onResize)",render(){const n=a.useRef(null),[d]=a.useState([{id:"w1",type:"s"},{id:"w2",type:"s"},{id:"w3",type:"m"},{id:"w4",type:"s"},{id:"w5",type:"s"},{id:"w6",type:"s"}]),i=a.useCallback((o,l,c)=>e.jsx(k.ItemWrapper,{item:o,children:e.jsx(ie,{id:o.id,type:o.type,onResize:c,onRemove:l})}),[]);return e.jsxs("div",{style:{padding:12},children:[e.jsxs("div",{style:{marginBottom:12,color:"#444",fontSize:13},children:["Зажми карточку на 500мс — активируется D&D. Кнопки «→ S/M/L» внутри виджета вызывают ",e.jsx("code",{children:"onResize(type)"})," (3-й аргумент render-prop, пре-каррирован к ",e.jsx("code",{children:"cfg.id"}),"). GridDND через",e.jsx("code",{children:" api.setItemType "})," меняет размер и делает reflow. Счётчик не сбрасывается — React-инстансы не размонтируются."]}),e.jsx("div",{style:{width:1200,background:"lightGray"},children:e.jsx(k,{ref:n,items:d,isDraggable:!0,dragActivationDelay:500,compactType:"horizontal",children:i,onItemsChange:o=>console.debug("📦 items",o),onLayoutChange:(o,l,c)=>console.debug("📐 layout",o,c)})})]})}};var M,P,H;I.parameters={...I.parameters,docs:{...(M=I.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Задержка активации D&D (dragActivationDelay)',
  render() {
    const gridRef = useRef<GridDNDRef>(null);
    const [items] = useState<GridDNDItems[]>([{
      id: 'w1',
      type: 'm'
    }, {
      id: 'w2',
      type: 's'
    }, {
      id: 'w3',
      type: 's'
    }, {
      id: 'w4',
      type: 'm'
    }, {
      id: 'w5',
      type: 's'
    }]);
    const renderItem = useCallback((item: GridDNDItemConfig, onRemove: () => void) => <GridDND.ItemWrapper item={item} actionsSlot={<AnalyticalWidget.DotsIconButton absolute dropdownProps={{
      items: [{
        label: 'Удалить',
        value: 'Удалить'
      }],
      onItemSelect() {
        onRemove();
      }
    }} />}>
          {item.type === 's' && <WidgetS id={item.id} onRemove={onRemove} />}
          {item.type === 'm' && <WidgetM id={item.id} onRemove={onRemove} />}
        </GridDND.ItemWrapper>, []);
    return <div>
        <div style={{
        marginBottom: 12,
        color: '#666',
        fontSize: 14
      }}>
          Зажмите карточку на 500мс для активации перетаскивания. Обводка
          появится только у зажатой карточки.
        </div>
        <div style={{
        width: 1200,
        background: 'lightGray'
      }}>
          <GridDND ref={gridRef} items={items} isDraggable dragActivationDelay={500} compactType="horizontal"
        // eslint-disable-next-line react/no-children-prop
        children={renderItem} onLayoutChange={(layout, _allAreas, meta) => {
          console.debug('Layout changed:', layout, meta);
        }} />
        </div>
      </div>;
  }
}`,...(H=(P=I.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var q,U,J;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'GridDND Classic',
  ...storySourceDoc({
    preCode
  }),
  render() {
    const gridRef = useRef<GridDNDRef>(null);
    const [items, setItems] = useState<GridDNDItems[]>([]);
    const [width, setWidth] = useState(1660);
    const [drag, setDrag] = useState(true);
    const [loading, setLoading] = useState(true);
    const [smartCompact, setSmartCompact] = useState(true);
    const [compactType, setCompactType] = useState<'vertical' | 'horizontal' | null>('horizontal');
    const renderItem = useCallback((item: GridDNDItemConfig, onRemove: () => void) => <GridDND.ItemWrapper item={item} actionsSlot={<AnalyticalWidget.DotsIconButton absolute dropdownProps={{
      items: [{
        label: 'Удалить',
        value: 'Удалить'
      }],
      onItemSelect(m) {
        if (m.value?.toString().toLowerCase() === 'удалить') onRemove();
      }
    }} />}>
          {item.type === 's' && <WidgetS id={item.id} onRemove={onRemove} />}
          {item.type === 'm' && <WidgetM id={item.id} onRemove={onRemove} />}
          {item.type === 'l' && <WidgetL id={item.id} onRemove={onRemove} />}
        </GridDND.ItemWrapper>, []);
    const handleReorder = () => {
      const currentOrder = gridRef.current?.api.getOrder() || [];
      // Перевернуть порядок
      gridRef.current?.api.setOrder([...currentOrder].reverse());
    };
    const saveItems = useCallback(async (newItems: GridDNDItems[]) => {
      try {
        console.log('💾 Saving items to server:', newItems);
        await fetch(gridDndRoutes.ENDPOINTS.PUT_ITEMS, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            items: newItems
          })
        });
        console.log('✅ Items saved successfully');
      } catch (error) {
        console.error('❌ Failed to save items:', error);
      }
    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedSave = useCallback(debounce((newItems: GridDNDItems[]) => {
      saveItems(newItems);
    }, 800), [saveItems]);

    // Загрузка initial items с сервера
    useEffect(() => {
      const fetchInitialItems = async () => {
        try {
          const response = await fetch(gridDndRoutes.ENDPOINTS.GET_ITEMS);
          const data = await response.json();
          setItems(data.items);
        } catch (error) {
          console.error('Failed to fetch items:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchInitialItems();
    }, []);
    if (loading) {
      return <div>Loading...</div>;
    }
    return <div>
        <div style={{
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        marginBottom: 12
      }}>
          <span>Width: {width}px</span>
          <input type="range" min={600} max={1890} step={10} value={width} onChange={e => setWidth(+e.target.value)} />
          <Switch onChange={e => setDrag(e.target.checked)} label="Activate DND" checked={drag} />
          <Switch onChange={e => setSmartCompact(e.target.checked)} label="Activate Smart Compact" checked={smartCompact} />
          <Switch onChange={e => setCompactType(e.target.checked ? 'vertical' : null)} label="Activate Compact Type Vertical" checked={compactType === 'vertical'} />
          <Switch onChange={e => setCompactType(e.target.checked ? 'horizontal' : null)} label="Activate Compact Type Horizontal" checked={compactType === 'horizontal'} />
        </div>
        <div style={{
        marginBottom: '30px',
        display: 'flex',
        gap: '8px'
      }}>
          <Button onClick={() => {
          console.debug(gridRef.current?.api.getOrderDetailed());
        }}>
            Get Order Detail
          </Button>
          <Button onClick={() => console.debug('Current layout:', gridRef.current?.api.getOrder())}>
            Get Order
          </Button>
          <Button onClick={() => console.debug('Current template area:', gridRef.current?.api.getCurrentLayout())}>
            Get Current Layout
          </Button>
          <Button onClick={() => console.debug('All template areas:', gridRef.current?.api.getAllLayouts())}>
            Get All Layouts
          </Button>
          <Button onClick={() => {
          const id = prompt('Enter id');
          const type = prompt('Enter type (s, m, l)');
          if (!id || !type || !gridRef.current || type !== 's' && type !== 'm' && type !== 'l') return;
          gridRef.current?.api.addItem({
            id,
            type
          });
        }}>
            + Add widget
          </Button>
          <Button onClick={() => handleReorder()}>Reorder</Button>
        </div>

        <div style={{
        width,
        background: 'lightGray'
      }}>
          <GridDND ref={gridRef} items={items} compactType="horizontal" smartCompact={smartCompact}
        // eslint-disable-next-line react/no-children-prop
        children={renderItem} onItemsChange={items => console.debug('📦 Template Items changed:', items)} onLayoutChange={(layout, allAreas, meta) => {
          console.group('📐 Template Layout changed:');
          console.debug('Layout:', layout);
          console.debug('All areas:', allAreas);
          console.debug('Meta:', meta);
          if (meta.itemsOrderTyped) {
            console.debug('🔄 Items order changed, saving...');
            debouncedSave(meta.itemsOrderTyped);
          }
          console.groupEnd();
        }} onBreakpointChange={(breakpoint: string, layout: unknown) => {
          console.group('📱 Template Breakpoint changed:');
          console.debug('Breakpoint:', breakpoint);
          console.debug('Layout:', layout);
          console.groupEnd();
        }} isDraggable={drag} />
        </div>
      </div>;
  }
}`,...(J=(U=w.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var K,Q,X;R.parameters={...R.parameters,docs:{...(K=R.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Самоизменение типа виджета (через onResize)',
  render() {
    const gridRef = useRef<GridDNDRef>(null);
    const [items] = useState<GridDNDItems[]>([{
      id: 'w1',
      type: 's'
    }, {
      id: 'w2',
      type: 's'
    }, {
      id: 'w3',
      type: 'm'
    }, {
      id: 'w4',
      type: 's'
    }, {
      id: 'w5',
      type: 's'
    }, {
      id: 'w6',
      type: 's'
    }]);
    const renderItem = useCallback((item: GridDNDItemConfig, onRemove: () => void, onResize: (type: 's' | 'm' | 'l') => void) => <GridDND.ItemWrapper item={item}>
          <ResizableAnalyticalWidget id={item.id} type={item.type} onResize={onResize} onRemove={onRemove} />
        </GridDND.ItemWrapper>, []);
    return <div style={{
      padding: 12
    }}>
        <div style={{
        marginBottom: 12,
        color: '#444',
        fontSize: 13
      }}>
          Зажми карточку на 500мс — активируется D&D. Кнопки «→ S/M/L» внутри
          виджета вызывают <code>onResize(type)</code> (3-й аргумент
          render-prop, пре-каррирован к <code>cfg.id</code>). GridDND через
          <code> api.setItemType </code> меняет размер и делает reflow. Счётчик
          не сбрасывается — React-инстансы не размонтируются.
        </div>
        <div style={{
        width: 1200,
        background: 'lightGray'
      }}>
          <GridDND ref={gridRef} items={items} isDraggable dragActivationDelay={500} compactType="horizontal"
        // eslint-disable-next-line react/no-children-prop
        children={renderItem} onItemsChange={next => console.debug('📦 items', next)} onLayoutChange={(layout, _all, meta) => console.debug('📐 layout', layout, meta)} />
        </div>
      </div>;
  }
}`,...(X=(Q=R.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const se=["DragDelay","GridDNDClassic","SelfResize"],be=Object.freeze(Object.defineProperty({__proto__:null,DragDelay:I,GridDNDClassic:w,SelfResize:R,__namedExportsOrder:se,default:re},Symbol.toStringTag,{value:"Module"}));export{be as G};
