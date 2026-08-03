const YELLOW = '\x1b[33m';
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';

const RESPONSE_BUDGET_CHARS = 25000;

/**
 * Диагностика по аналогии с generate-meta.js: без неё деградация индекса
 * (недопарсенный компонент, сломанный compound-парсинг, атом без вендоренных
 * данных) остаётся незаметной до первой жалобы пользователя MCP.
 */
export function printDiagnostics(records, features) {
  const errors = [];
  const warnings = [];

  records.forEach((r) => {
    if (r.error) {
      errors.push(`${r.name}: ${r.error}`);
      return;
    }
    if (r.atomicDataMissing) {
      warnings.push(`${r.name}: atomicBase "${r.atomicBase}" не найден в вендоренных данных`);
    }
    if (!r.props?.length && !r.inheritedProps?.length && !r.isGeneric) {
      warnings.push(`${r.name}: пустой список пропсов`);
    }
    const size = JSON.stringify(r).length;
    if (size > RESPONSE_BUDGET_CHARS * 4) {
      warnings.push(`${r.name}: запись ${size} символов — сильно больше бюджета ответа`);
    }
  });

  const byType = {};
  records.forEach((r) => {
    byType[r.type] = (byType[r.type] || 0) + 1;
  });

  const withCuratedMeta = records.filter((r) => r.hasCuratedMeta).length;
  const withAtomicBase = records.filter((r) => r.atomicBase).length;
  const withFormVariant = records.filter((r) => r.formVariant).length;

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
    console.log(`\n${YELLOW}${BOLD}ПРЕДУПРЕЖДЕНИЯ (${warnings.length})${RESET}`);
    warnings.slice(0, 30).forEach((w) => console.log(`${YELLOW}  ⚠ ${w}${RESET}`));
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
