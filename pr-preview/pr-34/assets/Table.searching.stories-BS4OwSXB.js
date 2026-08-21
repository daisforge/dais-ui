import{r as e,d}from"./react-D2T61mpp.js";import{c as m}from"./tableData-UCfjiBCh.js";import A from"./DocStoryTemplate-3mARu1O0.js";import{s as g}from"./storySourceDoc-tVKyHcEN.js";import{f as y}from"./Table-B0HDLHqg.js";const N={title:"Локальные компоненты/Table/Searching",tags:["!autodocs"],parameters:{docs:{page:A}}},h=`
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Badge,
  Box,
  Button,
  ColumnConfig,
  ColumnOrColumnGroupConfig,
  RenderCellProps,
  RowHeightFunc,
  SIZES,
  Select,
  Switch,
  Table,
  TextField,
} from '@daisforge/ui';
import { IconAddOutline, IconBoxOutline, IconSber } from '@daisforge/ui/icons';
`,t={...g({preCode:h,previewSource:"shown"}),name:"Контролируемый поиск",render:()=>{const[s]=e.useState(m),[r,o]=e.useState("Bug"),a=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return d.jsxDEV(y,{tableConfig:{searching:{enabled:!0,defaultSearchQuery:"Epic",showSearchBlock:!0,onChange:u=>console.debug("onChange searching",u),onDebouncedChange:u=>console.debug("onDebouncedChange searching",u),searchQueryState:[r,o],debounceDelay:350,placeholder:"Введите сумму",searchClasses:"someClassForSearch"}},columnConfig:a,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.searching/Table.searching.stories.tsx",lineNumber:86,columnNumber:7},void 0)}},c={...g({preCode:h,previewSource:"shown"}),name:"Неконтролируемый поиск",render:()=>{const[s]=e.useState(m),r=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return d.jsxDEV(y,{tableConfig:{searching:{enabled:!0,defaultSearchQuery:"Epic",showSearchBlock:!0,onChange:o=>console.debug("onChange searching",o),onDebouncedChange:o=>console.debug("onDebouncedChange searching",o),debounceDelay:550}},columnConfig:r,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.searching/Table.searching.stories.tsx",lineNumber:152,columnNumber:7},void 0)}},i={...g({preCode:h,previewSource:"shown"}),name:"Manual поиск",render:()=>{const[s,r]=e.useState(m),o=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return d.jsxDEV(y,{tableConfig:{searching:{enabled:!0,manualSearching:!0,defaultSearchQuery:"",showSearchBlock:!0,onChange:a=>console.debug("onChange searching",a),onDebouncedChange:a=>{console.debug("onDebouncedChange searching",a),r(m(0,10))},debounceDelay:550},containerStyle:{height:700}},columnConfig:o,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.searching/Table.searching.stories.tsx",lineNumber:215,columnNumber:7},void 0)}},l={...g({preCode:h,previewSource:"shown"}),name:"Autocomplete (история поиска)",render:()=>{const[s]=e.useState(m),[r,o]=e.useState(["Epi","Bug","Improvement","19.628582577979465asdf97.58738810084174","Critical","High","Story","Task"]),a=e.useRef(""),u=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"}],[]),I=e.useCallback(n=>{!n.trim()||n===a.current||(a.current=n,o(B=>{const M=B.filter(H=>H!==n);return[n,...M].slice(0,10)}))},[]),x=e.useMemo(()=>r.map(n=>({label:n})),[r]);return d.jsxDEV(y,{tableConfig:{searching:{enabled:!0,showSearchBlock:!0,onDebouncedChange:n=>{console.debug("search:",n),I(n)},debounceDelay:300,placeholder:"Поиск",autocomplete:{suggestions:x,threshold:0,listMaxHeight:"200px",onSuggestionSelect:n=>{console.debug("selected:",n.label)}}}},columnConfig:u,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.searching/Table.searching.stories.tsx",lineNumber:285,columnNumber:7},void 0)}};var p,b,C;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    return <Table tableConfig={{
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
}`,...(C=(b=t.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var k,f,S;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
    return <Table tableConfig={{
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
}`,...(S=(f=c.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var w,T,D;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
    return <Table tableConfig={{
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
}`,...(D=(T=i.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var v,R,E;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
    return <Table tableConfig={{
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
}`,...(E=(R=l.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};const Q=["ControlSearching","UncontrolledSearching","ManualSearching","AutocompleteHistory"],V=Object.freeze(Object.defineProperty({__proto__:null,AutocompleteHistory:l,ControlSearching:t,ManualSearching:i,UncontrolledSearching:c,__namedExportsOrder:Q,default:N},Symbol.toStringTag,{value:"Module"}));export{V as T};
