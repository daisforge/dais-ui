import{r as t,j as d}from"./react-CAOzMBF_.js";import{e as S}from"./tableData-DVJFoYoT.js";import k from"./DocStoryTemplate-Cf946dgV.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{f as w}from"./Table-BQHrw1K6.js";const E={title:"Локальные компоненты/Table/Pagination",tags:["!autodocs"],parameters:{docs:{page:k}}},D=`
import { ColumnConfig, Table } from '@daisforge/ui';

`,r={name:"Таблица с пагинацией",...b({preCode:D,previewSource:"shown"}),render:()=>{const[o,c]=t.useState(20),[a,u]=t.useState(1),[i,l]=t.useState([]),p=t.useMemo(()=>[{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return t.useEffect(()=>{(async()=>{const n=await S({page:a,perPage:o,total:300});l(n)})()},[a,o]),d.jsx(w,{tableConfig:{containerStyle:{height:700},collapsing:{enableCollapse:!0},pagination:{count:300,perPage:o,value:a,responsiveSlots:!0,onChangePageValue(e,n){typeof e=="number"&&(u(e),n())},async onChange(e,n,g){typeof e=="number"&&typeof n=="number"&&(u(e),c(n),g())}}},columnConfig:p,rows:i})}},s={name:"Таблица с фиксированным количеством slots",...b({preCode:D,previewSource:"shown"}),render:()=>{const[o,c]=t.useState(20),[a,u]=t.useState(1),[i,l]=t.useState([]),p=t.useMemo(()=>[{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return t.useEffect(()=>{(async()=>{const n=await S({page:a,perPage:o,total:300});l(n)})()},[a,o]),d.jsx(w,{tableConfig:{containerStyle:{height:700},pagination:{count:300,slots:9,perPage:o,onChangePageValue(e,n){typeof e=="number"&&(u(e),n())},async onChange(e,n,g){typeof e=="number"&&typeof n=="number"&&(u(e),c(n),g())}}},columnConfig:p,rows:i})}};var m,y,P;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(P=(y=r.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var f,C,T;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(T=(C=s.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const R=["PaginationTable","PaginationTableFixedSlots"],F=Object.freeze(Object.defineProperty({__proto__:null,PaginationTable:r,PaginationTableFixedSlots:s,__namedExportsOrder:R,default:E},Symbol.toStringTag,{value:"Module"}));export{F as T};
