/* Эталон «агент выдумал»: несуществующий экспорт библиотеки + несуществующий
   проп у существующего компонента. Ожидание selfcheck.mjs — как минимум одна
   диагностика вида unknown-import и одна вида unknown-prop. */
// Типизироваться этот файл и не должен — на нём поверяется скорер.
import { Button, SuperDuperWidget } from '@daisforge/ui';

export const BadFixture = () => (
  <>
    <Button totallyMadeUpProp="да">Кнопка</Button>
    <SuperDuperWidget />
  </>
);
