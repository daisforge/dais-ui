import type { FieldValues, Path, RegisterOptions } from 'react-hook-form';

import type { TReturnUseChangedFormContext } from './utils/types';

export type TMutationRegister<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>;
  options?: RegisterOptions<FieldValues, Path<TFieldValues>> | undefined;
};

export type THandleChange<T> = (
  newValue: T,
  formCtx: TReturnUseChangedFormContext,
) => void;

export type TDefKeys = 'size' | 'view' | 'style';
