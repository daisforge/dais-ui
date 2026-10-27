import{r as t,j as i}from"./react-CAOzMBF_.js";import{c as w}from"./tableData-DVJFoYoT.js";import S from"./DocStoryTemplate-Cf946dgV.js";import{s as y}from"./storySourceDoc-tVKyHcEN.js";import{B as C}from"./Box-DvvYTz20.js";import{a as b}from"./StoriesUtils-D_DQdVN_.js";import{c as I,f as O}from"./Table-BQHrw1K6.js";const k={title:"Локальные компоненты/Table/RowHeight",tags:["!autodocs"],parameters:{docs:{page:S}},component:b},R=`
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
`,e={...y({preCode:R,previewSource:"shown"}),name:"Row height",render:()=>{const[c]=t.useState(w),u=t.useMemo(()=>[{key:"id",name:"id"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"loremIpsum",name:"Длинный текст",width:500,renderCell:({row:n})=>i.jsx(C,{as:"span",$css:{textWrap:"wrap"},children:n.loremIpsum})},{key:"complete",name:"% Complete"}],[]),m=t.useCallback((n,o)=>{const d=Math.round(40.69565217391305),p=22-2,h=n.loremIpsum.length,g=Math.ceil(h/d),f=Number(I[o.rowSizeName].cell["padding-block"].slice(0,-2)),r=p*g+f*2;return r>o.rowSizeValue?r:o.rowSizeValue},[]);return i.jsx(O,{tableConfig:{containerStyle:{height:700},rowHeight:m},columnConfig:u,rows:c})}};var s,a,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Row height',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'id'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'loremIpsum',
      name: 'Длинный текст',
      width: 500,
      renderCell: ({
        row
      }) => <Box as="span" $css={{
        textWrap: 'wrap'
      }}>
              {row.loremIpsum}
            </Box>
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    const rowHeight: RowHeightFunc<Row> = useCallback((r, currenRowSize) => {
      const symbolWidth = 11.5;
      const paddingInline = 16;
      const widthOfLoremCol = 500 - paddingInline * 2;
      const symbolsInOneLine = Math.round(widthOfLoremCol / symbolWidth);
      const heightOfLineInitial = 22; // в css
      const heightOfLine = heightOfLineInitial - 2; // скорректированный

      const allSymbols = r.loremIpsum.length;
      const countOfLine = Math.ceil(allSymbols / symbolsInOneLine);
      const paddingBlock = Number(SIZES[currenRowSize.rowSizeName].cell['padding-block'].slice(0, -2));
      const neededHeight = heightOfLine * countOfLine + paddingBlock * 2;
      return neededHeight > currenRowSize.rowSizeValue ? neededHeight : currenRowSize.rowSizeValue;
    }, []);
    return <Table tableConfig={{
      containerStyle: {
        height: 700
      },
      rowHeight
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const L=["RowHeight"],A=Object.freeze(Object.defineProperty({__proto__:null,RowHeight:e,__namedExportsOrder:L,default:k},Symbol.toStringTag,{value:"Module"}));export{A as T};
