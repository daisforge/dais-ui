const LEGACY_PENALTY_FACTOR = 0.6;

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

function tokenize(query) {
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
function includesPositively(text, word) {
  const idx = text.indexOf(word);
  if (idx === -1) return false;
  const before = text.slice(Math.max(0, idx - 4), idx);
  return !/не\s*$/.test(before);
}

function scoreComponent(component, words) {
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
  return score;
}

function scoreFeature(feature, words) {
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

/**
 * Простой скоринг по имени/description/docs/hint (без внешних NLP-зависимостей),
 * плюс поиск по фичам наравне с компонентами — запрос "фильтрация в таблице"
 * должен находить TableCanvas/Filtering, а не только сам компонент. Legacy
 * понижается штрафом, а не исключается — явное упоминание имени (точное
 * совпадение слова, +100) перевешивает штраф, так что "Table сортировка"
 * всё равно ставит Table выше TableCanvas.
 */
export function searchComponents(index, { query, limit = 15 } = {}) {
  const words = tokenize(query);
  if (words.length === 0) return { results: [] };

  const componentResults = Object.values(index.components)
    .filter((c) => !c.error)
    .map((c) => ({ kind: 'component', score: scoreComponent(c, words), record: c }))
    .filter((r) => r.score > 0);

  const featureResults = index.features
    .map((f) => ({ kind: 'feature', score: scoreFeature(f, words), record: f }))
    .filter((r) => r.score > 0);

  const results = [...componentResults, ...featureResults]
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ kind, score, record }) => {
      if (kind === 'component') {
        return {
          kind,
          score,
          name: record.name,
          type: record.type,
          category: record.category,
          description: record.description,
          hint: record.hint,
          legacy: record.legacy || undefined,
        };
      }
      return {
        kind,
        score,
        component: record.component,
        feature: record.feature,
        summary: record.summary,
        legacy: record.legacy || undefined,
      };
    });

  return { results };
}
