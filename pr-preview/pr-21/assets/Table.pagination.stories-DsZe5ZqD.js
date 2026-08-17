import{r as a,d as T}from"./react-D2T61mpp.js";import{e as b}from"./tableData-UCfjiBCh.js";import h from"./DocStoryTemplate-B5vw54Tl.js";import{s as S}from"./storySourceDoc-tVKyHcEN.js";import{f as w}from"./Table-1Tfpc0dH.js";const E={title:"Локальные компоненты/Table/Pagination",tags:["!autodocs"],parameters:{docs:{page:h}}},D=`
import { ColumnConfig, Table } from '@daisforge/ui';

`,r={name:"Таблица с пагинацией",...S({preCode:D,previewSource:"shown"}),render:()=>{const[o,i]=a.useState(20),[t,u]=a.useState(1),[l,c]=a.useState([]),p=a.useMemo(()=>[{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return a.useEffect(()=>{(async()=>{const n=await b({page:t,perPage:o,total:300});c(n)})()},[t,o]),T.jsxDEV(w,{tableConfig:{containerStyle:{height:700},collapsing:{enableCollapse:!0},pagination:{count:300,perPage:o,value:t,responsiveSlots:!0,onChangePageValue(e,n){typeof e=="number"&&(u(e),n())},async onChange(e,n,g){typeof e=="number"&&typeof n=="number"&&(u(e),i(n),g())}}},columnConfig:p,rows:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.pagination/Table.pagination.stories.tsx",lineNumber:79,columnNumber:7},void 0)}},s={name:"Таблица с фиксированным количеством slots",...S({preCode:D,previewSource:"shown"}),render:()=>{const[o,i]=a.useState(20),[t,u]=a.useState(1),[l,c]=a.useState([]),p=a.useMemo(()=>[{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return a.useEffect(()=>{(async()=>{const n=await b({page:t,perPage:o,total:300});c(n)})()},[t,o]),T.jsxDEV(w,{tableConfig:{containerStyle:{height:700},pagination:{count:300,slots:9,perPage:o,onChangePageValue(e,n){typeof e=="number"&&(u(e),n())},async onChange(e,n,g){typeof e=="number"&&typeof n=="number"&&(u(e),i(n),g())}}},columnConfig:p,rows:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.pagination/Table.pagination.stories.tsx",lineNumber:161,columnNumber:7},void 0)}};var m,y,P;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Таблица с пагинацией',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const total = 300;
    const [perPage, setPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [rows, setRows] = useState<Row[]>([]);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);

    // Загрузка данных при монтировании и при изменении страницы/perPage
    useEffect(() => {
      const loadData = async () => {
        const data = await getPaginationDataAsync({
          page: currentPage,
          perPage,
          total
        });
        setRows(data);
      };
      loadData();
    }, [currentPage, perPage]);
    return <Table tableConfig={{
      containerStyle: {
        height: 700
      },
      collapsing: {
        enableCollapse: true
      },
      pagination: {
        count: total,
        perPage,
        value: currentPage,
        // Важно указать, при активации responsiveSlots
        responsiveSlots: true,
        onChangePageValue(page, scrollToTop) {
          if (typeof page === 'number') {
            setCurrentPage(page);
            scrollToTop();
          }
        },
        async onChange(page, perPage, scrollToTop) {
          if (typeof page === 'number' && typeof perPage === 'number') {
            setCurrentPage(page);
            setPerPage(perPage);
            scrollToTop();
          }
        }
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(P=(y=r.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var f,d,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Таблица с фиксированным количеством slots',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const total = 300;
    const [perPage, setPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [rows, setRows] = useState<Row[]>([]);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    useEffect(() => {
      const loadData = async () => {
        const data = await getPaginationDataAsync({
          page: currentPage,
          perPage,
          total
        });
        setRows(data);
      };
      loadData();
    }, [currentPage, perPage]);
    return <Table tableConfig={{
      containerStyle: {
        height: 700
      },
      pagination: {
        count: total,
        slots: 9,
        perPage,
        onChangePageValue(page, scrollToTop) {
          if (typeof page === 'number') {
            setCurrentPage(page);
            scrollToTop();
          }
        },
        async onChange(page, perPage, scrollToTop) {
          if (typeof page === 'number' && typeof perPage === 'number') {
            setCurrentPage(page);
            setPerPage(perPage);
            scrollToTop();
          }
        }
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(C=(d=s.parameters)==null?void 0:d.docs)==null?void 0:C.source}}};const v=["PaginationTable","PaginationTableFixedSlots"],M=Object.freeze(Object.defineProperty({__proto__:null,PaginationTable:r,PaginationTableFixedSlots:s,__namedExportsOrder:v,default:E},Symbol.toStringTag,{value:"Module"}));export{M as T};
