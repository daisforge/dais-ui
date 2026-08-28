import{r as e,d}from"./react-D2T61mpp.js";import{c as m}from"./tableData-UCfjiBCh.js";import N from"./DocStoryTemplate-BCVoxXef.js";import{s as g}from"./storySourceDoc-tVKyHcEN.js";import{T as y}from"./TableCanvas-CUwNeYa8.js";const A={title:"Локальные компоненты/TableCanvas/Searching",tags:["!autodocs"],parameters:{docs:{page:N}}},h=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,t={...g({preCode:h,previewSource:"shown"}),name:"Контролируемый поиск",render:()=>{const[s]=e.useState(m),[a,o]=e.useState("Bug"),r=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return d.jsxDEV(y,{tableConfig:{searching:{enabled:!0,defaultSearchQuery:"Epic",showSearchBlock:!0,onChange:u=>console.debug("onChange searching",u),onDebouncedChange:u=>console.debug("onDebouncedChange searching",u),searchQueryState:[a,o],debounceDelay:350,placeholder:"Введите сумму",searchClasses:"someClassForSearch"}},columnConfig:r,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Searching/TableCanvas.searching.stories.tsx",lineNumber:71,columnNumber:7},void 0)}},c={...g({preCode:h,previewSource:"shown"}),name:"Неконтролируемый поиск",render:()=>{const[s]=e.useState(m),a=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return d.jsxDEV(y,{tableConfig:{searching:{enabled:!0,defaultSearchQuery:"Epic",showSearchBlock:!0,onChange:o=>console.debug("onChange searching",o),onDebouncedChange:o=>console.debug("onDebouncedChange searching",o),debounceDelay:550}},columnConfig:a,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Searching/TableCanvas.searching.stories.tsx",lineNumber:137,columnNumber:7},void 0)}},i={...g({preCode:h,previewSource:"shown"}),name:"Manual поиск",render:()=>{const[s,a]=e.useState(m),o=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return d.jsxDEV(y,{tableConfig:{searching:{enabled:!0,manualSearching:!0,defaultSearchQuery:"",showSearchBlock:!0,onChange:r=>console.debug("onChange searching",r),onDebouncedChange:r=>{console.debug("onDebouncedChange searching",r),a(m(0,10))},debounceDelay:550},containerStyle:{height:700}},columnConfig:o,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Searching/TableCanvas.searching.stories.tsx",lineNumber:200,columnNumber:7},void 0)}},l={...g({preCode:h,previewSource:"shown"}),name:"Autocomplete (история поиска)",render:()=>{const[s]=e.useState(m),[a,o]=e.useState(["Epi","Bug","Improvement","19.628582577979465asdf97.58738810084174","Critical","High","Story","Task"]),r=e.useRef(""),u=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"}],[]),x=e.useCallback(n=>{!n.trim()||n===r.current||(r.current=n,o(M=>{const B=M.filter(H=>H!==n);return[n,...B].slice(0,10)}))},[]),I=e.useMemo(()=>a.map(n=>({label:n})),[a]);return d.jsxDEV(y,{tableConfig:{searching:{enabled:!0,showSearchBlock:!0,onDebouncedChange:n=>{console.debug("search:",n),x(n)},debounceDelay:300,placeholder:"Поиск",autocomplete:{suggestions:I,threshold:0,listMaxHeight:"200px",onSuggestionSelect:n=>{console.debug("selected:",n.label)}}}},columnConfig:u,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Searching/TableCanvas.searching.stories.tsx",lineNumber:270,columnNumber:7},void 0)}};var p,C,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Контролируемый поиск',
  render: () => {
    const [rows] = useState(createRows);
    const [query, setQuery] = useState('Bug');
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'developer',
      name: 'Developer'
    }, {
      key: 'tr1',
      name: 'TR'
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    return <TableCanvas tableConfig={{
      searching: {
        enabled: true,
        defaultSearchQuery: 'Epic',
        showSearchBlock: true,
        onChange: value => console.debug('onChange searching', value),
        onDebouncedChange: value => console.debug('onDebouncedChange searching', value),
        searchQueryState: [query, setQuery],
        debounceDelay: 350,
        placeholder: 'Введите сумму',
        searchClasses: 'someClassForSearch'
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(b=(C=t.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var k,S,f;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Неконтролируемый поиск',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'developer',
      name: 'Developer'
    }, {
      key: 'tr1',
      name: 'TR'
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    return <TableCanvas tableConfig={{
      searching: {
        enabled: true,
        defaultSearchQuery: 'Epic',
        showSearchBlock: true,
        onChange: value => console.debug('onChange searching', value),
        onDebouncedChange: value => console.debug('onDebouncedChange searching', value),
        debounceDelay: 550
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(f=(S=c.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var v,T,w;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Manual поиск',
  render: () => {
    const [rows, setRows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'developer',
      name: 'Developer'
    }, {
      key: 'tr1',
      name: 'TR'
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    return <TableCanvas tableConfig={{
      searching: {
        enabled: true,
        manualSearching: true,
        defaultSearchQuery: '',
        showSearchBlock: true,
        onChange: value => console.debug('onChange searching', value),
        onDebouncedChange: value => {
          console.debug('onDebouncedChange searching', value);
          // fetchData from server => then setRows for example
          setRows(createRows(0, 10));
        },
        debounceDelay: 550
      },
      containerStyle: {
        height: 700
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(w=(T=i.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var D,R,E;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Autocomplete (история поиска)',
  render: () => {
    const [rows] = useState(createRows);
    const [searchHistory, setSearchHistory] = useState<string[]>(['Epi', 'Bug', 'Improvement', '19.628582577979465asdf97.58738810084174', 'Critical', 'High', 'Story', 'Task']);
    const lastSubmittedRef = useRef('');
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'developer',
      name: 'Developer'
    }], []);
    const addToHistory = useCallback((value: string) => {
      if (!value.trim() || value === lastSubmittedRef.current) return;
      lastSubmittedRef.current = value;
      setSearchHistory(prev => {
        const filtered = prev.filter(item => item !== value);
        return [value, ...filtered].slice(0, 10);
      });
    }, []);
    const suggestions = useMemo(() => searchHistory.map(label => ({
      label
    })), [searchHistory]);
    return <TableCanvas tableConfig={{
      searching: {
        enabled: true,
        showSearchBlock: true,
        onDebouncedChange: value => {
          console.debug('search:', value);
          addToHistory(value);
        },
        debounceDelay: 300,
        placeholder: 'Поиск',
        autocomplete: {
          suggestions,
          threshold: 0,
          listMaxHeight: '200px',
          onSuggestionSelect: suggestion => {
            console.debug('selected:', suggestion.label);
          }
        }
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(E=(R=l.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};const Q=["ControlSearching","UncontrolledSearching","ManualSearching","AutocompleteHistory"],q=Object.freeze(Object.defineProperty({__proto__:null,AutocompleteHistory:l,ControlSearching:t,ManualSearching:i,UncontrolledSearching:c,__namedExportsOrder:Q,default:A},Symbol.toStringTag,{value:"Module"}));export{q as T};
