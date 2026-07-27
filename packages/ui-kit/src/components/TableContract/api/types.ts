type ValidationDetail = {
  /**
   * @example 'string'
   */
  field: string;
  /**
   * @example 'Не заполнено'
   */
  error: string;
};

export type ErrorApi = {
  /**
   * 'Проверьте корректность введенных данных'
   */
  message: string;
  /**
   * '5db558c9-7709-4834-9614-69883abf7967'
   */
  traceId: string;
  /**
   * @example [{ field: 'string', error: 'Не заполнено'}]
   */
  validationDetails: ValidationDetail[];
};

export type FetcherOptions<ExtraArg = unknown> = Readonly<{
  arg: ExtraArg;
  argInConfig?: unknown;
}>;
