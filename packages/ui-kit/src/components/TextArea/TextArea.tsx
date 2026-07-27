import { getContentRight } from '@ui-kit/shared/utils/inputs';
import React, { forwardRef } from 'react';

import { StyledTextArea } from './TextArea.styled';
import { TextAreaProps } from './TextArea.types';

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { disabled, readOnly, contentRight, size = 's', value, onClear, ...rest },
    ref
  ) => (
    <StyledTextArea
      {...rest}
      ref={ref}
      size={size}
      value={value}
      disabled={disabled}
      readOnly={readOnly}
      contentRight={getContentRight({
        disabled,
        readOnly,
        value,
        onClear,
        size,
        contentRight
      })}
      hasManyIcons={Boolean(contentRight && onClear)}
    />
  )
);

TextArea.displayName = 'TextArea';
