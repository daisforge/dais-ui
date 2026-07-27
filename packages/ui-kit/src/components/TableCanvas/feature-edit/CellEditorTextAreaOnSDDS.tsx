// import { TextArea, type TextAreaProps } from '@ui-kit/components/TextArea';
// import { mergeRefs } from '@ui-kit/utils';
// import React, {
//   ComponentProps,
//   forwardRef,
//   ReactElement,
//   useEffect,
//   useRef,
//   useState,
// } from 'react';
// import styled, { css } from 'styled-components';

// import { useRowContext } from '../contexts';
// import { SIZES } from '../styles';
// import type { EditingCellInfo, ObjectForExtending } from '../types';
// import {
//   autoFocus,
//   autoFocusAndSelect,
//   CustomCellStyleProps,
//   EmptyObj,
// } from './utils';

// const StyledTextArea: (
//   props: TextAreaProps & CustomCellStyleProps
// ) => ReactElement = styled(TextArea)<CustomCellStyleProps>`
//   & {
//     margin-top: -1px;
//   }

//   &,
//   && > *,
//   && > * > * {
//     ${({ cellHeight }) =>
//       typeof cellHeight === 'number' &&
//       css`
//         min-height: ${cellHeight + 3}px;
//       `};
//     box-shadow: none !important;
//     background-color: inherit !important;
//   }

//   && > * > * > * {
//     ${({ disableLeftOffset }) => disableLeftOffset && 'padding-left: 0px;'}
//   }

//   .textarea-wrapper {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//   }
// `;

// export type CellEditorTextAreaProps = Omit<
//   ComponentProps<typeof TextArea>,
//   'view'
// > & {
//   autoFocusType: 'autoFocus' | 'autoFocusAndSelect' | 'none';
// } & CustomCellStyleProps;

// export const CellEditorTextArea = forwardRef<
//   HTMLTextAreaElement,
//   CellEditorTextAreaProps
// >(
//   (
//     {
//       autoFocusType,
//       cellHeight,
//       cellWidth,
//       disableLeftOffset,
//       //
//       ...props
//     },
//     refExternal
//   ) => {
//     const { rowSize } = useRowContext();

//     /** ref в виде коллбэка у TextArea работает при каждом вводе,
//    поэтому создаем обычный реф и  autoFocusAndSelect вызываем один раз */
//     const ref = useRef<HTMLTextAreaElement | null>(null);

//     useEffect(() => {
//       if (autoFocusType === 'none') return;

//       if (autoFocusType === 'autoFocus') {
//         autoFocus(ref.current);
//       } else {
//         autoFocusAndSelect(ref.current);
//       }
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);

//     return (
//       <StyledTextArea
//         size={SIZES[rowSize].input as 's'}
//         clear
//         ref={mergeRefs(refExternal, ref)}
//         cellHeight={cellHeight}
//         cellWidth={cellWidth}
//         disableLeftOffset={disableLeftOffset}
//         /* типы из-за styled или по др причине не встают один в один */
//         {...(props as unknown as EmptyObj)}
//       />
//     );
//   }
// );

// export function CellEditorTextAreaInternal<
//   TRow extends ObjectForExtending,
//   TSummaryRow
// >({
//   row,
//   column,
//   initialValue,
//   onCellEdited,
//   cellHeight,
//   cellWidth,
//   disableLeftOffset,
// }: EditingCellInfo<TRow, TSummaryRow>) {
//   const inputProps = (
//     column?.editingCell as { inputProps?: Partial<CellEditorTextAreaProps> }
//   )?.inputProps;

//   const defV =
//     initialValue ?? (row[column.key as keyof TRow] as unknown as string);
//   const [v, setV] = useState(() => defV);
//   const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//     const newVStr = event.target.value ?? '';
//     setV(newVStr);
//     onCellEdited({ ...row, [column.key]: newVStr });
//   };

//   return (
//     <CellEditorTextArea
//       autoFocusType={
//         initialValue === undefined ? 'autoFocusAndSelect' : 'autoFocus'
//       }
//       disableLeftOffset={disableLeftOffset}
//       cellHeight={cellHeight}
//       cellWidth={cellWidth}
//       value={v}
//       onChange={onChange}
//       {...inputProps}
//     />
//   );
// }
