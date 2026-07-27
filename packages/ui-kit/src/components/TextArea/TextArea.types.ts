import type { TextArea as BaseTextArea } from '@salutejs/sdds-finai';
import type { ComponentProps } from 'react';

type TextAreaBaseProps = ComponentProps<typeof BaseTextArea>;

export type TextAreaProps = TextAreaBaseProps & {
  /**
   * Callback при нажатии на кнопку очистки поля ввода.
   */
  onClear?: () => void;
};
