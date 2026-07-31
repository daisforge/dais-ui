export const Q_PARAMS = {
  sort: 'sort',
  page: 'page',
  /**
   * Количество строк на одной странице пагинации  (page_limit: 'page_limit', - старая версия, новая  - size)
   */
  pageSize: 'pageSize',
  q: 'q',
} as const;

export const TABLE_STYLES = {
  height: '500px',
} as const;

export const DATA_TYPES = [
  {
    ansiSqlType: 'Real',
    semanticType: 'FLOAT',
    jsType: 'number',
  },
  {
    ansiSqlType: 'Integer/Int/Int4',
    semanticType: 'INTEGER',
    jsType: 'number',
  },
  {
    ansiSqlType: 'Numeric/decimal',
    semanticType: 'DECIMAL',
    jsType: 'number',
  },
  {
    ansiSqlType: 'Text',
    semanticType: 'STRING',
    jsType: 'string',
  },
  {
    ansiSqlType: 'Date',
    semanticType: 'DATE',
    jsType: 'Date',
  },
  {
    ansiSqlType: 'Time',
    semanticType: 'TIME',
    jsType: 'Date',
  },
  {
    ansiSqlType: 'Timestamp without timezone',
    semanticType: 'DATETIME',
    jsType: 'Date',
  },
  {
    ansiSqlType: 'Timestamp with timezone',
    semanticType: 'TIMESTAMP',
    jsType: 'Date',
  },
  {
    ansiSqlType: 'Boolean',
    semanticType: 'BOOLEAN',
    jsType: 'boolean',
  },
] as const;

export type DataType = (typeof DATA_TYPES)[number];
export type KeyOfDataType = keyof DataType;
export type ColumnAnsiSqlType = DataType['ansiSqlType'];
