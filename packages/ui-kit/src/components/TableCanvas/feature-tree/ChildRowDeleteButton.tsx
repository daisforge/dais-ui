export {};

// внизу код, который понадобится, если появится фича удаления строки

// import React from 'react';
// import styled from 'styled-components';

// const ChildRowButton = styled.div`
//     cursor: pointer;
//     position: absolute;
//     // inset-inline-start: 21px;
//     // transform: translateX(-50%);
//     filter: grayscale(1);
//     // &:dir(rtl) {
//     //     transform: translateX(50%);
//     // }
// `;

// interface ChildRowDeleteButtonProps {
//     tabIndex: number;
//     isDeleteSubRowEnabled: boolean;
//     onDeleteSubRow: () => void;
// }

// export function ChildRowDeleteButton({
//     tabIndex,
//     onDeleteSubRow,
//     isDeleteSubRowEnabled,
// }: ChildRowDeleteButtonProps) {
//     function handleKeyDown(e: React.KeyboardEvent<HTMLSpanElement>) {
//         if (e.key === 'Enter') {
//             e.preventDefault();
//             onDeleteSubRow();
//         }
//     }

//     if (!isDeleteSubRowEnabled) {
//         return null;
//     }

//     return (
//         // eslint-disable-next-line react/button-has-type
//         <ChildRowButton onClick={onDeleteSubRow}>
//             {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
//             <span tabIndex={tabIndex} onKeyDown={handleKeyDown}>
//                 ❌
//             </span>
//         </ChildRowButton>
//     );
// }
