import{r as e,j as g}from"./react-CAOzMBF_.js";import{c as m}from"./tableData-DVJFoYoT.js";import A from"./DocStoryTemplate-Cf946dgV.js";import{s as y}from"./storySourceDoc-tVKyHcEN.js";import{T as d}from"./TableCanvas-DlX-Wh2b.js";const Q={title:"Локальные компоненты/TableCanvas/Searching",tags:["!autodocs"],parameters:{docs:{page:A}}},p=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,u={...y({preCode:p,previewSource:"shown"}),name:"Контролируемый поиск",render:()=>{const[s]=e.useState(m),[r,o]=e.useState("Bug"),a=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return g.jsx(d,{tableConfig:{searching:{enabled:!0,defaultSearchQuery:"Epic",showSearchBlock:!0,onChange:t=>console.debug("onChange searching",t),onDebouncedChange:t=>console.debug("onDebouncedChange searching",t),searchQueryState:[r,o],debounceDelay:350,placeholder:"Введите сумму",searchClasses:"someClassForSearch"}},columnConfig:a,rows:s})}},c={...y({preCode:p,previewSource:"shown"}),name:"Неконтролируемый поиск",render:()=>{const[s]=e.useState(m),r=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return g.jsx(d,{tableConfig:{searching:{enabled:!0,defaultSearchQuery:"Epic",showSearchBlock:!0,onChange:o=>console.debug("onChange searching",o),onDebouncedChange:o=>console.debug("onDebouncedChange searching",o),debounceDelay:550}},columnConfig:r,rows:s})}},l={...y({preCode:p,previewSource:"shown"}),name:"Manual поиск",render:()=>{const[s,r]=e.useState(m),o=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return g.jsx(d,{tableConfig:{searching:{enabled:!0,manualSearching:!0,defaultSearchQuery:"",showSearchBlock:!0,onChange:a=>console.debug("onChange searching",a),onDebouncedChange:a=>{console.debug("onDebouncedChange searching",a),r(m(0,10))},debounceDelay:550},containerStyle:{height:700}},columnConfig:o,rows:s})}},i={...y({preCode:p,previewSource:"shown"}),name:"Autocomplete (история поиска)",render:()=>{const[s]=e.useState(m),[r,o]=e.useState(["Epi","Bug","Improvement","19.628582577979465asdf97.58738810084174","Critical","High","Story","Task"]),a=e.useRef(""),t=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"}],[]),I=e.useCallback(n=>{!n.trim()||n===a.current||(a.current=n,o(B=>{const H=B.filter(x=>x!==n);return[n,...H].slice(0,10)}))},[]),M=e.useMemo(()=>r.map(n=>({label:n})),[r]);return g.jsx(d,{tableConfig:{searching:{enabled:!0,showSearchBlock:!0,onDebouncedChange:n=>{console.debug("search:",n),I(n)},debounceDelay:300,placeholder:"Поиск",autocomplete:{suggestions:M,threshold:0,listMaxHeight:"200px",onSuggestionSelect:n=>{console.debug("selected:",n.label)}}}},columnConfig:t,rows:s})}};var h,C,b;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(C=u.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var S,k,f;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(f=(k=c.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var v,w,D;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(D=(w=l.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var T,R,E;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(E=(R=i.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};const P=["ControlSearching","UncontrolledSearching","ManualSearching","AutocompleteHistory"],U=Object.freeze(Object.defineProperty({__proto__:null,AutocompleteHistory:i,ControlSearching:u,ManualSearching:l,UncontrolledSearching:c,__namedExportsOrder:P,default:Q},Symbol.toStringTag,{value:"Module"}));export{U as T};
