import type { ComponentRecord, FeatureRecord, RuntimeIndex } from '../types.js';
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

function scoreComponent(component: ComponentRecord, words: string[]): number {
  const name = component.name.toLowerCase();
  const hint = (component.hint || '').toLowerCase();
  const description = (component.description || '').toLowerCase();
  const docs = (component.docs || '').toLowerCase();
  const category = (component.category || '').toLowerCase();

  let score = 0;
  words.forEach((w) => {
    if (name === w) score += 100;
    else if (name.includes(w)) score += 15;
    if (includesPositively(hint, w)) score += 20;
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

function scoreFeature(feature: FeatureRecord, words: string[]): number {
  const featureName = feature.feature.toLowerCase();
  const componentName = feature.component.toLowerCase();
  const summary = (feature.summary || '').toLowerCase();
  const docs = (feature.docs || '').toLowerCase();
  const apiDocs = (feature.apiDocs || '').toLowerCase();

  let score = 0;
  words.forEach((w) => {
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

type SearchHit = ComponentHit | FeatureHit;

interface ComponentResult {
  kind: 'component';
  score: number;
  name: string;
  type: string;
  category?: string;
  description?: string;
  hint?: string;
  legacy?: true;
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
): { results: (ComponentResult | FeatureResult)[] } {
  const words = tokenize(query);
  if (words.length === 0) return { results: [] };

  const componentResults: ComponentHit[] = Object.values(index.components)
    .filter(isOkComponent)
    .map(
      (c): ComponentHit => ({
        kind: 'component',
        score: scoreComponent(c, words),
        record: c,
      }),
    )
    .filter((r) => r.score > 0);

  const featureResults: FeatureHit[] = index.features
    .map(
      (f): FeatureHit => ({
        kind: 'feature',
        score: scoreFeature(f, words),
        record: f,
      }),
    )
    .filter((r) => r.score > 0);

  const hits: SearchHit[] = [...componentResults, ...featureResults]
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  const results = hits.map((hit): ComponentResult | FeatureResult => {
    if (hit.kind === 'component') {
      return {
        kind: hit.kind,
        score: hit.score,
        name: hit.record.name,
        type: hit.record.type,
        category: hit.record.category,
        description: hit.record.description,
        hint: hit.record.hint,
        legacy: hit.record.legacy || undefined,
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

  return { results };
}
