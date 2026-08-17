/* eslint-disable no-console */
import type { FeatureRecord, IndexedComponent } from '../types.js';
import { isOkComponent } from '../types.js';
import { ATOMIC_TABLE_ON_PARENT_PAGE } from './mergeAtomicData.js';

const YELLOW = '\x1b[33m';
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';

const RESPONSE_BUDGET_CHARS = 25000;

export interface DiagnosticsResult {
  errors: string[];
  warnings: string[];
}

/**
 * Дыры вендоренного снэпшота бывают трёх сортов (T15, ARCHITECTURE.md §1.6b), и
 * без пометки они выглядят в логе одинаково — а лечатся по-разному: одни
 * закроются перегенерацией снэпшота у атомарной команды, другие не закроются
 * никогда (атома нет в их доках вовсе), третьи означают новую, ещё не
 * разобранную дыру, появившуюся после очередного перевендоринга.
 */
function describeAtomicGap(atomicBase: string | undefined): string {
  if (!atomicBase) return 'atomicBase не резолвился';
  const parentPage = ATOMIC_TABLE_ON_PARENT_PAGE[atomicBase];
  if (parentPage) {
    return `таблица есть на странице ${parentPage}, но снэпшот берёт со страницы только первую (ожидаемо, T15)`;
  }
  // Отличить «страницы нет в доках вовсе» (Divider, Rating, типографика,
  // compound-части Drawer) от «страница появилась, а снэпшот устарел» по самому
  // снэпшоту невозможно — сверка идёт по докам атомарной команды при
  // перевендоринге, см. ARCHITECTURE.md §1.6b/§6.
  return 'страницы атома нет в снэпшоте — пропсы только из собственного резолва ts-morph';
}

/**
 * Диагностика по аналогии с generate-meta.js: без неё деградация индекса
 * (недопарсенный компонент, сломанный compound-парсинг, атом без вендоренных
 * данных) остаётся незаметной до первой жалобы пользователя MCP.
 */
export function printDiagnostics(
  records: IndexedComponent[],
  features: FeatureRecord[],
): DiagnosticsResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  records.forEach((r) => {
    if (!isOkComponent(r)) {
      errors.push(`${r.name}: ${r.error}`);
      return;
    }
    if (r.atomicDataMissing) {
      warnings.push(
        `${r.name}: atomicBase "${r.atomicBase}" не найден в вендоренных данных` +
          ` — ${describeAtomicGap(r.atomicBase)}`,
      );
    }
    if (!r.props?.length && !r.inheritedProps?.length && !r.isGeneric) {
      warnings.push(`${r.name}: пустой список пропсов`);
    }
    const size = JSON.stringify(r).length;
    if (size > RESPONSE_BUDGET_CHARS * 4) {
      warnings.push(
        `${r.name}: запись ${size} символов — сильно больше бюджета ответа`,
      );
    }
  });

  const okRecords = records.filter(isOkComponent);

  const byType: Record<string, number> = {};
  okRecords.forEach((r) => {
    byType[r.type] = (byType[r.type] || 0) + 1;
  });

  const withCuratedMeta = okRecords.filter((r) => r.hasCuratedMeta).length;
  const withAtomicBase = okRecords.filter((r) => r.atomicBase).length;
  const withFormVariant = okRecords.filter((r) => r.formVariant).length;

  console.log(`\n${BOLD}═══ Диагностика mcp-server индексера ═══${RESET}`);
  console.log(
    `Компонентов: ${records.length}  |  Фичей: ${features.length}  |  ` +
      `Курировано (meta.json): ${withCuratedMeta}  |  С atomicBase: ${withAtomicBase}  |  Form-связей: ${withFormVariant}`,
  );
  console.log(`По типам: ${JSON.stringify(byType)}`);

  if (errors.length > 0) {
    console.log(`\n${RED}${BOLD}ОШИБКИ (${errors.length})${RESET}`);
    errors.forEach((e) => console.log(`${RED}  ✗ ${e}${RESET}`));
  }

  if (warnings.length > 0) {
    console.log(
      `\n${YELLOW}${BOLD}ПРЕДУПРЕЖДЕНИЯ (${warnings.length})${RESET}`,
    );
    warnings
      .slice(0, 30)
      .forEach((w) => console.log(`${YELLOW}  ⚠ ${w}${RESET}`));
    if (warnings.length > 30) {
      console.log(`${YELLOW}  ... и ещё ${warnings.length - 30}${RESET}`);
    }
  }

  if (errors.length === 0 && warnings.length === 0) {
    console.log(`${GREEN}Без ошибок и предупреждений.${RESET}`);
  }

  console.log('');
  return { errors, warnings };
}
