/**
 * Генерирует B3-заголовки для трассировки в формате Zipkin.
 * Создает случайные traceId (16 байт/32 hex символа) и spanId (8 байт/16 hex символов).
 *
 * ```
 * Пример для RTK:
 *
 * // Добавляем query параметра в запросы
 * export const customBaseQuery = async (args, api, extraOptions) => {
 *   const { headers: b3Headers, traceId, requestQueryParam } = generateB3Headers();
 *   const modifiedArgs = {
 *.    ..args,
 *     url: `${args.url}${args.url.includes('?') ? '&' : '?'}${requestQueryParam}=${traceId}`,
 *    };
 *
 *   const response = await fetchBaseQuery({
 *     baseUrl: API_BASE_URL,
 *     prepareHeaders: headers => {
 *       headers.set('x-b3-traceid', b3Headers['x-b3-traceid']);
 *       headers.set('x-b3-spanid', b3Headers['x-b3-spanid']);
 *       return headers;
 *     },
 *   })(modifiedArgs, api, extraOptions);
 *
 *   return response;
 * };
 *
 * // Исключаем query параметр для кэширования RTK
 * export const rootApi = createApi({
 *   reducerPath: 'rootApi',
 *   baseQuery: customBaseQuery,
 *   serializeQueryArgs: ({ endpointName, queryArgs }) => {
 *     const args = queryArgs as Record<string, unknown> | undefined;
 *     const { rq: _, ...rest } = args ?? {};
 *
 *     return `${endpointName}-${JSON.stringify(rest)}`;
 *   },
 *   endpoints: () => ({}),
 * });
 *
 * ```
 *
 * @returns {Object} Объект с сгенерированными данными для трассировки:
 * @returns {string} returns.traceId - 16-байтная (32 символа) hex-строка идентификатора трейса
 * @returns {string} returns.requestQueryParam - Параметр запроса для трассировки
 * @returns {Object} returns.headers - Объект с B3-заголовками:
 * @returns {string} returns.headers['x-b3-traceid'] - 16-байтная hex-строка идентификатора трейса
 * @returns {string} returns.headers['x-b3-spanid'] - 8-байтная hex-строка идентификатора спана
 */
export const generateB3Headers = () => {
  const traceIdBytes = new Uint8Array(16);
  crypto.getRandomValues(traceIdBytes);
  const traceId = Array.from(traceIdBytes)
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');

  const spanIdBytes = new Uint8Array(8);
  crypto.getRandomValues(spanIdBytes);
  const spanId = Array.from(spanIdBytes)
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');

  return {
    traceId,
    requestQueryParam: 'rq',
    headers: {
      'x-b3-traceid': traceId,
      'x-b3-spanid': spanId
    }
  };
};
