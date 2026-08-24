import{r as t,d as r}from"./react-D2T61mpp.js";import{c as w}from"./tableData-UCfjiBCh.js";import b from"./DocStoryTemplate-CASIwyN3.js";import{s as y}from"./storySourceDoc-tVKyHcEN.js";import{B as S}from"./Box-BsCGp3nZ.js";import{a as C}from"./StoriesUtils-DhcWQr0R.js";import{c as k,f as I}from"./Table-D4FiL9uw.js";const O={title:"Локальные компоненты/Table/RowHeight",tags:["!autodocs"],parameters:{docs:{page:b}},component:C},R=`
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
`,e={...y({preCode:R,previewSource:"shown"}),name:"Row height",render:()=>{const[u]=t.useState(w),c=t.useMemo(()=>[{key:"id",name:"id"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"loremIpsum",name:"Длинный текст",width:500,renderCell:({row:o})=>r.jsxDEV(S,{as:"span",$css:{textWrap:"wrap"},children:o.loremIpsum},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowHeight/Table.rowHeight.stories.tsx",lineNumber:77,columnNumber:13},void 0)},{key:"complete",name:"% Complete"}],[]),m=t.useCallback((o,n)=>{const d=Math.round(40.69565217391305),h=22-2,g=o.loremIpsum.length,p=Math.ceil(g/d),f=Number(k[n.rowSizeName].cell["padding-block"].slice(0,-2)),i=h*p+f*2;return i>n.rowSizeValue?i:n.rowSizeValue},[]);return r.jsxDEV(I,{tableConfig:{containerStyle:{height:700},rowHeight:m},columnConfig:c,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowHeight/Table.rowHeight.stories.tsx",lineNumber:114,columnNumber:7},void 0)}};var s,a,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const x=["RowHeight"],W=Object.freeze(Object.defineProperty({__proto__:null,RowHeight:e,__namedExportsOrder:x,default:O},Symbol.toStringTag,{value:"Module"}));export{W as T};
