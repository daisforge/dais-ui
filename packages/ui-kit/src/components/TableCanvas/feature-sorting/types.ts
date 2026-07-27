export type SortDirection = 'ASC' | 'DESC';
export interface SortColumn {
  readonly columnKey: string;
  readonly direction: SortDirection;
}
