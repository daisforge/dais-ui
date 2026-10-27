import{r as a,j as d}from"./react-CAOzMBF_.js";import{e as S}from"./tableData-DVJFoYoT.js";import k from"./DocStoryTemplate-Cf946dgV.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{T as w}from"./TableCanvas-DlX-Wh2b.js";const v={title:"Локальные компоненты/TableCanvas/Pagination",tags:["!autodocs"],parameters:{docs:{page:k}}},D=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,s={name:"Таблица с пагинацией",...b({preCode:D,previewSource:"shown"}),render:()=>{const[t,c]=a.useState(20),[o,u]=a.useState(1),[l,i]=a.useState([]),p=a.useMemo(()=>[{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return a.useEffect(()=>{(async()=>{const n=await S({page:o,perPage:t,total:300});i(n)})()},[o,t]),d.jsx(w,{tableConfig:{containerStyle:{height:700},collapsing:{enableCollapse:!0},pagination:{count:300,perPage:t,value:o,responsiveSlots:!0,onChangePageValue(e,n){typeof e=="number"&&(u(e),n())},async onChange(e,n,g){typeof e=="number"&&typeof n=="number"&&(u(e),c(n),g())}}},columnConfig:p,rows:l})}},r={name:"Таблица с фиксированным количеством slots",...b({preCode:D,previewSource:"shown"}),render:()=>{const[t,c]=a.useState(20),[o,u]=a.useState(1),[l,i]=a.useState([]),p=a.useMemo(()=>[{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return a.useEffect(()=>{(async()=>{const n=await S({page:o,perPage:t,total:300});i(n)})()},[o,t]),d.jsx(w,{tableConfig:{containerStyle:{height:700},pagination:{count:300,slots:9,perPage:t,onChangePageValue(e,n){typeof e=="number"&&(u(e),n())},async onChange(e,n,g){typeof e=="number"&&typeof n=="number"&&(u(e),c(n),g())}}},columnConfig:p,rows:l})}};var m,y,P;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(P=(y=s.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var C,f,T;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(T=(f=r.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const E=["PaginationTable","PaginationTableFixedSlots"],F=Object.freeze(Object.defineProperty({__proto__:null,PaginationTable:s,PaginationTableFixedSlots:r,__namedExportsOrder:E,default:v},Symbol.toStringTag,{value:"Module"}));export{F as T};
