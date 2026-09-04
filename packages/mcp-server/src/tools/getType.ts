import type { RuntimeIndex, ToolError, TypeRecord } from '../types.js';
import { isOkComponent } from '../types.js';

export interface GetTypeArgs {
  name?: string;
}

/** Сколько похожих имён показывать при промахе — список подсказок, а не выгрузка индекса. */
const MAX_SUGGESTIONS = 8;

/** Опечатка в одну-две буквы — да; произвольно похожее имя — нет. */
const MAX_TYPO_DISTANCE = 2;

/** Расстояние Левенштейна на двух строках (итеративный вариант с одной строкой матрицы). */
function editDistance(a: string, b: string): number {
  if (Math.abs(a.length - b.length) > MAX_TYPO_DISTANCE) {
    return MAX_TYPO_DISTANCE + 1;
  }

  let previous = Array.from({ length: b.length + 1 }, (_, i) => i);

  for (let i = 1; i <= a.length; i += 1) {
    const current = [i];
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      current[j] = Math.min(
        (current[j - 1] as number) + 1,
        (previous[j] as number) + 1,
        (previous[j - 1] as number) + cost,
      );
    }
    previous = current;
  }

  return previous[b.length] as number;
}

/**
 * Имена типов длинные и составные (`ColumnsGroupingConfig`,
 * `CellInfoGlideInstance`), поэтому промах чаще всего означает "агент угадал
 * половину имени", а не "такого типа нет". Ищем по вхождению подстроки в обе
 * стороны: и когда запрос — часть реального имени (`Cell` → `CellInfo`), и
 * когда реальное имя — часть запроса (`TableCanvas.TableConfig` → `TableConfig`).
 */
function findSimilarKeys(index: RuntimeIndex, lowerName: string): string[] {
  const substringHits = Object.keys(index.types)
    .filter((key) => {
      const lowerKey = key.toLowerCase();
      const bare = (index.types[key] as TypeRecord).name.toLowerCase();
      return (
        lowerKey.includes(lowerName) ||
        lowerName.includes(bare) ||
        bare.includes(lowerName)
      );
    })
    .slice(0, MAX_SUGGESTIONS);

  if (substringHits.length > 0) return substringHits;

  // Подстрока не спасает от опечатки: "ColumnConfg" не является подстрокой
  // "ColumnConfig" и наоборот, а именно опечатка — самый частый способ
  // промахнуться мимо длинного составного имени. Расстояние ≤ 2 ловит
  // пропущенную/лишнюю/переставленную букву и при этом не превращает подсказки
  // в случайный список.
  return Object.keys(index.types)
    .map((key) => ({
      key,
      distance: editDistance(
        (index.types[key] as TypeRecord).name.toLowerCase(),
        lowerName,
      ),
    }))
    .filter((c) => c.distance <= MAX_TYPO_DISTANCE)
    .sort((a, b) => a.distance - b.distance)
    .slice(0, MAX_SUGGESTIONS)
    .map((c) => c.key);
}

/**
 * Кандидаты неоднозначного имени вместе с тем, чем они отличаются: без этого
 * агент выбирает вслепую между `Table.ContentFormat` и
 * `TableCanvas.ContentFormat` и вполне может уйти в легаси-ветку. Внутренние
 * типы помечаются сразу — по ним второй вызов делать бессмысленно.
 */
function describeCandidate(key: string, record: TypeRecord): string {
  if (record.internal) return `${key} (внутренний, импортировать нельзя)`;
  return `${key} (${record.importPath})`;
}

/**
 * Тип пропсов компонента (`TableCanvasProps`, `ModalDFProps`) в индексе типов
 * не лежит — он развёрнут в `props[]` записи компонента. Агент этого не знает
 * и идёт за ним в get_type (в реальном логе — именно так), поэтому вместо
 * "не найден" отправляем его туда, где ответ есть.
 */
function findComponentByPropsTypeName(
  index: RuntimeIndex,
  name: string,
): string | undefined {
  const lowerName = name.toLowerCase();
  return Object.values(index.components).find(
    (record) =>
      isOkComponent(record) &&
      (record.propsTypeName || '').toLowerCase() === lowerName,
  )?.name;
}

/**
 * Разворачивает именованный тип, встреченный в тексте пропса компонента
 * (например `columnConfig: readonly ColumnConfig<Row>[]` — get_component_props
 * покажет только имя, этот тул — само определение и готовый import).
 *
 * Некоторые имена неоднозначны: TableCanvas активно переиспользует общие
 * имена типов (свой ColumnConfig, отдельный от легаси-Table.ColumnConfig) —
 * такие типы лежат в индексе под квалифицированным ключом "Папка.Имя". Если
 * запрошено голое имя и оно неоднозначно, возвращаем не первый попавшийся
 * вариант, а список кандидатов для уточнения — тихо угадать здесь хуже, чем
 * спросить: `import { ColumnConfig } from '@daisforge/ui'` без разбора может
 * оказаться совсем не тем ColumnConfig, который агент имел в виду.
 *
 * Промах не должен быть тупиком: индекс типов заведомо не полон (в нём типы
 * пропсов и то, на что они ссылаются вглубь), а агент, получивший голое "не
 * найдено", уходит читать node_modules руками. Поэтому при промахе отдаём
 * похожие имена и, если спрашивали тип пропсов, — отсылку к нужному тулу.
 */
export function getType(
  index: RuntimeIndex,
  { name }: GetTypeArgs = {},
): TypeRecord | ToolError {
  if (!name) {
    return { error: 'Не указано имя типа.' };
  }

  const direct = index.types[name];
  if (direct) return direct;

  const lowerName = name.toLowerCase();

  const ciKeyMatch = Object.entries(index.types).find(
    ([key]) => key.toLowerCase() === lowerName,
  );
  if (ciKeyMatch) return ciKeyMatch[1];

  const candidates = Object.entries(index.types).filter(
    ([, t]) => t.name.toLowerCase() === lowerName,
  );
  if (candidates.length > 0) {
    const keys = candidates
      .map(([key, record]) => describeCandidate(key, record))
      .join('; ');
    return {
      error: `Тип "${name}" неоднозначен — в ui-kit несколько разных типов с этим именем в разных модулях. Уточните одним из ключей: ${keys}.`,
    };
  }

  const ownerComponent = findComponentByPropsTypeName(index, name);
  if (ownerComponent) {
    return {
      error:
        `"${name}" — тип пропсов компонента ${ownerComponent}, в индексе типов его нет: ` +
        `пропсы разобраны по полям. Используйте get_component_props({name: "${ownerComponent}"}).`,
    };
  }

  const similar = findSimilarKeys(index, lowerName);
  if (similar.length > 0) {
    return {
      error:
        `Тип "${name}" не найден в индексе. Похожие имена: ${similar.join(
          ', ',
        )}. ` +
        'Если нужного нет и среди них — тип внутренний для ui-kit и наружу не экспортирован; ' +
        'его форму можно увидеть в определении типа, который на него ссылается.',
    };
  }

  return {
    error:
      `Тип "${name}" не найден в индексе. В индекс попадают типы, названные в пропсах компонентов, ` +
      'и то, на что они ссылаются вглубь. Проверьте имя через get_component_props нужного компонента — ' +
      'там типы полей приведены ровно так, как их печатает тайпчекер.',
  };
}
