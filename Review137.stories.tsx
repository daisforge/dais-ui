import React, {useState} from 'react';
import {TableCanvas, Canvas} from '@ui-kit/components/TableCanvas';
const meta = {title:'PR 137 / Воспроизведение',parameters:{layout:'padded'}};
export default meta;
const panel:React.CSSProperties={fontFamily:'Arial,sans-serif',maxWidth:1050,padding:16};
const note:React.CSSProperties={fontSize:16,lineHeight:1.5,margin:'12px 0 18px'};
const base={containerStyle:{height:'440px'},rowHeight:64,hoverEffects:{row:true},highlightActiveType:'disabled',cellsSelection:{mode:'disabled'},enableColumnSelection:false,enableRowSelection:false} as const;
const initialRows=Array.from({length:5},(_,i)=>({id:i+1,group:'Группа A',name:`Строка ${i+1}`}));
export const HoverAfterDataUpdate = {
  name:'1. Наведение после обновления данных',
  render:()=>{
    const [rows,setRows]=useState(initialRows);
    const [phase,setPhase]=useState('До обновления: один блок, строки 1–5');
    const start=()=>{
      setRows(initialRows);setPhase('Обновление через 8 секунд — наведите курсор на строку 5 в колонке «Группа»');
      setTimeout(()=>{setRows(initialRows.map((r,i)=>({...r,group:i<2?'Группа A':'Группа B'})));setPhase('После обновления: блоки 1–2 и 3–5. Курсор остался в строке 5.');},8000);
    };
    return <div style={panel}><h2>1. Наведение после смены границ блока</h2><p style={note}>PR #137 · 3abd59c · Glide 6.11.0<br/>Ожидается подсветка блока под курсором, строк 3–5.</p><button onClick={start}>Запустить обновление через 8 секунд</button><p style={{...note,fontWeight:600}}>{phase}</p><TableCanvas rows={rows} columnConfig={[{key:'group',name:'Группа',width:300,renderCellPreview:'none'},{key:'name',name:'Физическая строка',width:420}]} tableConfig={{...base,mergeCells:{mergeByCellValues:['group']}}}/></div>;
  },
};
export const HoverActions = {
  name:'2. Фон строки и флаг rowHover',
  render:()=> <div style={panel}><h2>2. Подсветка строк и кнопки действий</h2><p style={note}>Наведите курсор на объединённый блок в колонке «Группа».<br/>Фон меняется у всех строк. Флаг rowHover и кнопка — только у первой.</p><TableCanvas rows={initialRows.slice(0,3)} columnConfig={[
    {key:'group',name:'Группа',width:260,renderCellPreview:'none'},
    {key:'name',name:'Строка',width:200},
    {key:'hover',name:'Флаг в renderCell',width:220,renderCell:({hovered}:any)=>`rowHover: ${hovered.rowHover}`},
    {key:'action',name:'Действие по rowHover',width:260,renderCell:({hovered}:any)=>hovered.rowHover?<Canvas.Container alignItems="center" padding={12}><Canvas.Button text="Действие" view="accent"/></Canvas.Container>:''},
  ]} tableConfig={{...base,mergeCells:{mergeByCellValues:['group']}}}/></div>,
};
const select={component:'select',options:{type:'constant',options:[{text:'Значение Select',value:'Значение Select'}]}} as const;
export const HorizontalSelect = {
  name:'3. Select в горизонтальном объединении',
  render:()=> <div style={panel}><h2>3. Select: объединение только по горизонтали</h2><p style={note}>Одна строка высотой 120 px. Вертикальное выравнивание не задано.<br/>Слева — объединённые A+B, справа — обычный Select для сравнения.</p><TableCanvas rows={[{id:1,a:'Значение Select',b:'',c:'Значение Select'}]} columnConfig={[
    {key:'a',name:'A — объединённый Select',width:260,editingCell:select},
    {key:'b',name:'B — продолжение блока',width:240},
    {key:'c',name:'C — обычный Select',width:320,editingCell:select},
  ] as any} tableConfig={{containerStyle:{height:'260px'},rowHeight:120,editing:{defaultEnabled:true,onRowsChange:()=>{},rowKeyGetter:r=>r.id},mergeCells:{rowKeyGetter:r=>r.id,mergedCellsRegions:[{rowKeys:[1],colKeys:['a','b']}]}}}/></div>,
};
