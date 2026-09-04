import type {
  ComponentRecord,
  FeatureRecord,
  RuntimeIndex,
  TypeRecord,
} from '../types.js';
import { isOkComponent } from '../types.js';

export interface SearchComponentsArgs {
  query?: string;
  limit?: number;
}

const LEGACY_PENALTY_FACTOR = 0.6;
/**
 * По роли (см. classifyRole.ts) НЕ фильтруем — агент может целенаправленно
 * искать именно "ModalDFHeader" или служебный примитив. Но 'internal'
 * (CanvasRect и подобные — в прикладном коде не встречаются никогда)
 * понижаем тем же приёмом, что и legacy: множительный штраф, а не
 * исключение, иначе единственное точное совпадение по имени пропадёт из
 * выдачи.
 */
const INTERNAL_PENALTY_FACTOR = 0.6;

// Короткие предлоги/союзы — как токены почти ничего не значат, но как
// подстрока встречаются почти везде ("в" входит в половину слов) и без
// фильтра забивают релевантный скоринг шумом.
const STOPWORDS = new Set([
  'в',
  'с',
  'к',
  'на',
  'из',
  'от',
  'до',
  'по',
  'и',
  'а',
  'но',
  'как',
  'для',
  'это',
  'the',
  'a',
  'an',
  'in',
  'on',
  'of',
  'to',
]);

/** Первая содержательная строка определения — узнать тип, не заказывая его целиком. */
function firstLine(definition: string): string {
  const line = definition.split('\n').find((l) => l.trim().length > 0) || '';
  return line.trim().slice(0, 120);
}

/**
 * Морфологии здесь намеренно нет. Пробовал дешёвый стемминг (отрезать
 * падежное окончание и засчитывать совпадение по основе с меньшим весом) —
 * замер на 12 запросах дал ровно тот же результат, 8 попаданий в топ-3, что
 * и без него, но заметно прибавил шума: на "конфигурация группировки колонок"
 * фичи таблицы вытеснялись `Container`/`Layout`/`Col`, поймавшими основу
 * "колон" в общих доках. Русские словоформы стоит закрывать нормальным
 * стеммером, а не эвристикой на два символа.
 */
function tokenize(query: string | undefined): string[] {
  return (query || '')
    .toLowerCase()
    .split(/[\s,.;:!?()[\]{}'"«»]+/)
    .filter((w) => w.length > 0 && !STOPWORDS.has(w));
}

/**
 * Курированные hint/description иногда пишутся как явное опровержение
 * ("Это layout, не фильтрация" у AnalyticalWidget) — специально предупреждают,
 * что компонент НЕ об этом. Наивное совпадение подстроки засчитало бы это как
 * позитивный сигнал ровно наоборот. Проверяем, не стоит ли перед совпадением
 * "не " — если да, не начисляем очки за это вхождение.
 */
function includesPositively(text: string, word: string): boolean {
  const idx = text.indexOf(word);
  if (idx === -1) return false;
  const before = text.slice(Math.max(0, idx - 4), idx);
  return !/не\s*$/.test(before);
}

function scoreComponent(component: ComponentRecord, tokens: string[]): number {
  const name = component.name.toLowerCase();
  const hint = (component.hint || '').toLowerCase();
  const description = (component.description || '').toLowerCase();
  const keywords = (component.keywords || []).join(' ').toLowerCase();
  const docs = (component.docs || '').toLowerCase();
  const category = (component.category || '').toLowerCase();

  let score = 0;
  tokens.forEach((w) => {
    if (name === w) score += 100;
    else if (name.includes(w)) score += 15;
    if (includesPositively(hint, w)) score += 20;
    if (includesPositively(keywords, w)) score += 20;
    if (includesPositively(description, w)) score += 10;
    if (docs.includes(w)) score += 4;
    if (category.includes(w)) score += 2;
  });

  // Мультипликативный штраф, а не вычитание — иначе единственное совпадение
  // по редкому термину (например "react-data-grid" только у Table) целиком
  // гасится штрафом до нуля и компонент пропадает из выдачи, хотя это ровно
  // тот случай, где он единственно верный ответ.
  if (component.legacy && score > 0) score *= LEGACY_PENALTY_FACTOR;
  if (component.role === 'internal' && score > 0)
    score *= INTERNAL_PENALTY_FACTOR;
  return score;
}

function scoreFeature(feature: FeatureRecord, tokens: string[]): number {
  const featureName = feature.feature.toLowerCase();
  const componentName = feature.component.toLowerCase();
  const summary = (feature.summary || '').toLowerCase();
  const docs = (feature.docs || '').toLowerCase();
  const apiDocs = (feature.apiDocs || '').toLowerCase();

  let score = 0;
  tokens.forEach((w) => {
    if (featureName === w) score += 80;
    else if (featureName.includes(w)) score += 15;
    if (componentName.includes(w)) score += 10;
    if (summary.includes(w)) score += 10;
    if (docs.includes(w)) score += 4;
    if (apiDocs.includes(w)) score += 3;
  });

  if (feature.legacy && score > 0) score *= LEGACY_PENALTY_FACTOR;
  return score;
}

/**
 * Тип ищется и по имени, и по ТЕКСТУ определения — это единственный способ
 * ответить на запросы вида "как отрисовать свою ячейку" или "GridCellKind
 * renderCell": нужное имя (`CellContent`) агент заранее не знает, а в тексте
 * `ColumnConfig` оно написано. Вес по определению маленький: определения
 * длинные (до 6000 символов), и по совпадению одного слова тип не должен
 * обгонять компонент, у которого это слово в имени.
 *
 * Внутренние типы (не экспортированы наружу) понижаются тем же приёмом, что
 * legacy и internal-роль: они полезны для понимания структуры, но ответом на
 * "что импортировать" быть не могут.
 */
function scoreType(record: TypeRecord, tokens: string[]): number {
  const name = record.name.toLowerCase();
  const definition = record.definition.toLowerCase();

  let score = 0;
  tokens.forEach((w) => {
    if (name === w) score += 90;
    else if (name.includes(w)) score += 15;
    if (definition.includes(w)) score += 3;
  });

  if (record.internal && score > 0) score *= INTERNAL_PENALTY_FACTOR;
  return score;
}

interface ComponentHit {
  kind: 'component';
  score: number;
  record: ComponentRecord;
}

interface FeatureHit {
  kind: 'feature';
  score: number;
  record: FeatureRecord;
}

interface TypeHit {
  kind: 'type';
  score: number;
  /** Ключ индекса — может быть квалифицированным ("TableCanvas.ColumnConfig"), именно его ждёт get_type. */
  key: string;
  record: TypeRecord;
}

type SearchHit = ComponentHit | FeatureHit | TypeHit;

interface ComponentResult {
  kind: 'component';
  score: number;
  name: string;
  type: string;
  category?: string;
  description?: string;
  hint?: string;
  keywords?: string[];
  legacy?: true;
  /** У `legacy: true` — что брать вместо этого компонента в новом коде. */
  supersededBy?: string;
  /** При каких условиях брать именно этот компонент из группы конкурирующих. */
  chooseWhen?: string;
  /** Только для 'part'/'internal' — 'primary' (подавляющее большинство хитов) не несёт поля. */
  role?: 'part' | 'internal';
  parentComponent?: string;
}

interface FeatureResult {
  kind: 'feature';
  score: number;
  component: string;
  feature: string;
  summary: string;
  legacy?: true;
}

interface TypeResult {
  kind: 'type';
  score: number;
  /** Ключ для get_type — может отличаться от name, если имя неоднозначно. */
  name: string;
  importPath?: string;
  /** true — тип не экспортируется, импортировать нельзя (см. resolveTypeImport). */
  internal?: true;
  /** Первая строка определения: понять, тот ли это тип, не тратя вызов get_type. */
  definitionPreview: string;
}

type SearchResult = ComponentResult | FeatureResult | TypeResult;

/**
 * Порог отсечки шума: в реальном логе запрос "GridCellKind renderCell ячейка
 * текст CellContent" вернул TableCanvas со 100 очками и следом пять
 * компонентов с 6-30 очками, не имевших к вопросу никакого отношения
 * (`Counter`, `ToastProvider`, `TextSkeleton` — совпало одно общее слово в
 * описании). Отсекаем хвост относительно лучшего результата, а не абсолютным
 * значением: у редких терминов абсолютные очки низкие у ВСЕХ хитов, и
 * фиксированный порог убил бы единственный верный ответ.
 */
const NOISE_FLOOR_RATIO = 0.15;

/** Куда идти, когда поиск ничего не дал — тупиковый ответ отправляет агента читать node_modules. */
const EMPTY_RESULT_NOTICE =
  'Ничего не найдено. Дальше стоит: list_components({type/category}) — посмотреть каталог целиком; ' +
  'list_features({component}) — фичи конкретного компонента (у TableCanvas их 46, имена вроде ' +
  'CopyPasteFill/massPanelAction не угадываются); get_component_props({name}) — типы полей, ' +
  'если известен компонент, но не известно имя типа.';

/**
 * Простой скоринг по имени/description/docs/hint (без внешних NLP-зависимостей),
 * плюс поиск по фичам наравне с компонентами — запрос "фильтрация в таблице"
 * должен находить TableCanvas/Filtering, а не только сам компонент. Legacy
 * понижается штрафом, а не исключается — явное упоминание имени (точное
 * совпадение слова, +100) перевешивает штраф, так что "Table сортировка"
 * всё равно ставит Table выше TableCanvas.
 */
export function searchComponents(
  index: RuntimeIndex,
  { query, limit = 15 }: SearchComponentsArgs = {},
): { results: SearchResult[]; notice?: string } {
  const tokens = tokenize(query);
  if (tokens.length === 0) {
    return { results: [], notice: EMPTY_RESULT_NOTICE };
  }

  const componentResults: ComponentHit[] = Object.values(index.components)
    .filter(isOkComponent)
    .map(
      (c): ComponentHit => ({
        kind: 'component',
        score: scoreComponent(c, tokens),
        record: c,
      }),
    )
    .filter((r) => r.score > 0);

  const featureResults: FeatureHit[] = index.features
    .map(
      (f): FeatureHit => ({
        kind: 'feature',
        score: scoreFeature(f, tokens),
        record: f,
      }),
    )
    .filter((r) => r.score > 0);

  const typeResults: TypeHit[] = Object.entries(index.types)
    .map(
      ([key, record]): TypeHit => ({
        kind: 'type',
        score: scoreType(record, tokens),
        key,
        record,
      }),
    )
    .filter((r) => r.score > 0);

  const scored: SearchHit[] = [
    ...componentResults,
    ...featureResults,
    ...typeResults,
  ].sort((a, b) => b.score - a.score);

  const best = scored[0]?.score ?? 0;
  const hits = scored
    .filter((hit) => hit.score >= best * NOISE_FLOOR_RATIO)
    .slice(0, limit);

  const results = hits.map((hit): SearchResult => {
    if (hit.kind === 'type') {
      return {
        kind: hit.kind,
        score: hit.score,
        name: hit.key,
        importPath: hit.record.importPath,
        internal: hit.record.internal,
        definitionPreview: firstLine(hit.record.definition),
      };
    }
    if (hit.kind === 'component') {
      return {
        kind: hit.kind,
        score: hit.score,
        name: hit.record.name,
        type: hit.record.type,
        category: hit.record.category,
        description: hit.record.description,
        hint: hit.record.hint,
        keywords: hit.record.keywords,
        legacy: hit.record.legacy || undefined,
        supersededBy: hit.record.supersededBy,
        chooseWhen: hit.record.chooseWhen,
        role: hit.record.role !== 'primary' ? hit.record.role : undefined,
        parentComponent: hit.record.parentComponent,
      };
    }
    return {
      kind: hit.kind,
      score: hit.score,
      component: hit.record.component,
      feature: hit.record.feature,
      summary: hit.record.summary,
      legacy: hit.record.legacy || undefined,
    };
  });

  return results.length > 0
    ? { results }
    : { results, notice: EMPTY_RESULT_NOTICE };
}
