import { useMemo } from 'react';

import type { CellReadOnlyEditorProps, ObjectForExtending } from '../types';
import { CellEditorNumberFormatInternal } from './CellEditorNumberFormat';
import { CellEditorTextAreaInternal } from './CellEditorTextArea';

const getComponent = (isNumberPreview: boolean) =>
  isNumberPreview ? CellEditorNumberFormatInternal : CellEditorTextAreaInternal;

// type ComponentType = ReturnType<typeof getComponent>;
// type ComponentPropsType = ComponentProps<ComponentType>;

export const CellReadOnlyEditor = <R extends ObjectForExtending, SR>(
  props: CellReadOnlyEditorProps<R, SR>,
) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { contentFormat, contentAlign = 'left' } = props?.column ?? {};
  const isNumberPreview =
    !!contentFormat &&
    (contentFormat === 'number' ||
      ('type' in contentFormat && contentFormat.type === 'number'));

  const Component = useMemo(
    () => getComponent(isNumberPreview),
    [isNumberPreview],
  );

  return (
    <Component
      {...props}
      formatOptions={contentFormat}
      contentAlign={contentAlign}
      onRowChange={() => {}}
      readOnly // !!!! важно readOnly=true
    />
  );
};
