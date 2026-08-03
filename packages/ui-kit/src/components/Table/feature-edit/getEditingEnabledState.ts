/**
 *
 * @param external - внешний стейт
 * @param innerState - внутренний стейт
 * @returns если есть внешний стейт, то возвращается внешний. Если нет - то внутренний.
 */
export const getEditingEnabledState = (
  external:
    | undefined
    | boolean
    | [boolean, React.Dispatch<React.SetStateAction<boolean>>],
  innerState: [boolean, React.Dispatch<React.SetStateAction<boolean>>],
) => {
  if (typeof external === 'undefined') {
    return innerState;
  }
  if (typeof external === 'boolean') {
    return [external, null] as const;
  }
  return external;
};
