/**
 * Ручные consumer-примеры. Никаких McpProps/PUBLIC_PROPS_HELPERS и генерации
 * ожиданий из индекса: JSX проверяет непосредственно публичные компоненты.
 */
import {
  AnalyticalWidget,
  Box,
  Button,
  DrawerDF,
  FormTextField,
  Spinner,
  TableCanvas,
  TableContract,
} from '@daisforge/ui';
import { Canvas } from '@daisforge/ui/components/TableCanvas';
import { FormProvider, useForm } from 'react-hook-form';

import type {
  McpChipsOpened,
  McpDrawerFixedWidth,
  McpSpinnerWidth,
  McpTableFilterChange,
} from '../.probe/consumer-response-types';

// Типы ниже — непосредственно текст ответов MCP, а ожидания написаны вручную.
export const widths: McpSpinnerWidth[] = [24, '2rem'];
export const drawerWidth: McpDrawerFixedWidth = '320px';
export const chipsOpened: McpChipsOpened = false;
export const filterHandlers: McpTableFilterChange[] = [
  (value: string) => value,
  (values: string[]) => values,
];
// @ts-expect-error MCP не должен расширять width до boolean или any
export const badMcpWidth: McpSpinnerWidth = true;
// @ts-expect-error MCP не должен расширять fixedWidth до number или any
export const badMcpFixedWidth: McpDrawerFixedWidth = 320;
// @ts-expect-error MCP не должен расширять opened до string или any
export const badMcpOpened: McpChipsOpened = 'yes';
// @ts-expect-error MCP callback принимает string/string[], а не number
export const badMcpHandler: McpTableFilterChange = (value: number) => value;

const fetcher = () => Promise.resolve(new Response('{}'));

export function ValidConsumer() {
  const form = useForm<{ title: string }>();
  return (
    <>
      <Box padding="12px" $css={{ display: 'flex' }}>
        Содержимое
      </Box>
      <Box as="a" href="/details">
        Ссылка
      </Box>
      <Button disabled={false}>Открыть</Button>
      <TableContract fetcher={fetcher} />
      <Spinner width={24} height={24} />
      <Spinner width="2rem" height="2rem" />
      <Spinner size="s" />
      <TableCanvas rows={[{ id: 1, title: 'Строка' }]} columnConfig={[]} />
      <FormProvider {...form}>
        <FormTextField<{ title: string }> name="title" />
      </FormProvider>
      <Canvas.Container>
        <Canvas.Text>Текст</Canvas.Text>
        <Canvas.Button onClick={() => undefined}>Кнопка</Canvas.Button>
      </Canvas.Container>
      <DrawerDF.Content fixedWidth={drawerWidth} />
      <AnalyticalWidget.Chips chips={[]} opened={chipsOpened} commonSize="s" />
    </>
  );
}

// @ts-expect-error fetcher обязателен в публичном JSX API
export const missingFetcher = <TableContract />;
// @ts-expect-error число нельзя вызвать как fetcher
export const wrongFetcher = <TableContract fetcher={123} />;
export const inventedProp = (
  // @ts-expect-error такого поля нет в публичном контракте
  <TableContract fetcher={fetcher} nonexistentMcpProp />
);
// @ts-expect-error для таблицы обязательна конфигурация колонок
export const missingColumns = <TableCanvas rows={[]} />;
// @ts-expect-error rows — массив, а не число
export const wrongRows = <TableCanvas rows={123} columnConfig={[]} />;
// @ts-expect-error padding не принимает boolean
export const wrongPadding = <Box padding />;
// @ts-expect-error Canvas — namespace, а не JSX-компонент
export const wrongNamespace = <Canvas />;
// @ts-expect-error обработчик Canvas должен быть функцией
export const wrongCanvasHandler = <Canvas.Button onClick={123} />;
// @ts-expect-error открытая сигнатура НЕ отменяет тип явно объявленного fixedWidth
export const wrongOpenField = <DrawerDF.Content fixedWidth={123} />;
// @ts-expect-error открытая сигнатура НЕ отменяет обязательные chips
export const missingOpenField = <AnalyticalWidget.Chips opened />;
export const wrongOpenFieldType = (
  // @ts-expect-error явно объявленный opened остаётся boolean
  <AnalyticalWidget.Chips chips={[]} opened="yes" />
);

// @ts-expect-error произвольная ширина требует парной высоты
export const missingSpinnerHeight = <Spinner width={24} />;
// @ts-expect-error width/height должны быть одного типа в выбранном варианте props
export const mixedSpinnerDimensions = <Spinner width={24} height="2rem" />;
