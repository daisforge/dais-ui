import{r as a,d as T}from"./react-D2T61mpp.js";import{e as b}from"./tableData-UCfjiBCh.js";import v from"./DocStoryTemplate-DqVM6KeB.js";import{s as S}from"./storySourceDoc-tVKyHcEN.js";import{T as w}from"./TableCanvas-C8VeADCn.js";const h={title:"Локальные компоненты/TableCanvas/Pagination",tags:["!autodocs"],parameters:{docs:{page:v}}},D=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,s={name:"Таблица с пагинацией",...S({preCode:D,previewSource:"shown"}),render:()=>{const[o,i]=a.useState(20),[t,u]=a.useState(1),[l,c]=a.useState([]),g=a.useMemo(()=>[{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return a.useEffect(()=>{(async()=>{const n=await b({page:t,perPage:o,total:300});c(n)})()},[t,o]),T.jsxDEV(w,{tableConfig:{containerStyle:{height:700},collapsing:{enableCollapse:!0},pagination:{count:300,perPage:o,value:t,responsiveSlots:!0,onChangePageValue(e,n){typeof e=="number"&&(u(e),n())},async onChange(e,n,p){typeof e=="number"&&typeof n=="number"&&(u(e),i(n),p())}}},columnConfig:g,rows:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Pagination/Table.pagination.stories.tsx",lineNumber:79,columnNumber:7},void 0)}},r={name:"Таблица с фиксированным количеством slots",...S({preCode:D,previewSource:"shown"}),render:()=>{const[o,i]=a.useState(20),[t,u]=a.useState(1),[l,c]=a.useState([]),g=a.useMemo(()=>[{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return a.useEffect(()=>{(async()=>{const n=await b({page:t,perPage:o,total:300});c(n)})()},[t,o]),T.jsxDEV(w,{tableConfig:{containerStyle:{height:700},pagination:{count:300,slots:9,perPage:o,onChangePageValue(e,n){typeof e=="number"&&(u(e),n())},async onChange(e,n,p){typeof e=="number"&&typeof n=="number"&&(u(e),i(n),p())}}},columnConfig:g,rows:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Pagination/Table.pagination.stories.tsx",lineNumber:161,columnNumber:7},void 0)}};var m,y,P;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
    return <TableCanvas tableConfig={{
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
}`,...(P=(y=s.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var f,C,d;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    return <TableCanvas tableConfig={{
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
}`,...(d=(C=r.parameters)==null?void 0:C.docs)==null?void 0:d.source}}};const E=["PaginationTable","PaginationTableFixedSlots"],M=Object.freeze(Object.defineProperty({__proto__:null,PaginationTable:s,PaginationTableFixedSlots:r,__namedExportsOrder:E,default:h},Symbol.toStringTag,{value:"Module"}));export{M as T};
