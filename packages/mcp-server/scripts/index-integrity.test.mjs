import assert from 'node:assert/strict';
import fs from 'node:fs';
import { test } from 'node:test';

import { getComponent } from '../dist/tools/getComponent.js';
import { getComponentProps } from '../dist/tools/getComponentProps.js';
import { auditContracts } from '../dist/validate/auditContracts.js';
import { checkIndexCompleteness } from '../dist/validate/checkCompleteness.js';
import {
  assessDiagnostics,
  generateProbe,
  parseTscOutput,
  validateIndex,
} from '../dist/validate/validateIndex.js';

const index = JSON.parse(
  fs.readFileSync(
    new URL('../data/component-index.json', import.meta.url),
    'utf8',
  ),
);
const props = (name, part) => {
  const result = getComponentProps(index, { name, part });
  assert.equal(result.error, undefined);
  return [...result.props, ...(result.inheritedProps || [])];
};

test('каталог не предлагает непубличный DataEditor и классы движка Canvas', () => {
  [
    'DataEditor',
    'CanvasNode',
    'CanvasText',
    'CanvasContainer',
    'CanvasAvatar',
  ].forEach((name) => assert.equal(index.components[name], undefined, name));
});

test('Canvas сохраняет публичный импорт и типизированные JSX-части', () => {
  const canvas = getComponent(index, { name: 'Canvas' });
  assert.equal(canvas.apiKind, 'namespace');
  assert.match(
    canvas.importStatement,
    /@daisforge\/ui\/components\/TableCanvas/,
  );
  ['Text', 'Button', 'Container', 'Avatar', 'Mark'].forEach((part) =>
    assert.ok(canvas.compoundParts.includes(part), part),
  );
  assert.match(canvas.minimalUsage, /<Canvas\.Container/);
  assert.ok(props('Canvas', 'Text').some((prop) => prop.name === 'children'));
  assert.ok(props('Canvas', 'Button').some((prop) => prop.name === 'onClick'));
  assert.deepEqual(props('Canvas'), []);
});

test('TableContract получает собственный inline-контракт вместо пропсов кнопки', () => {
  const fields = props('TableContract');
  assert.equal(fields.find((prop) => prop.name === 'fetcher')?.required, true);
  assert.ok(fields.some((prop) => prop.name === 'onRowMutationError'));
  assert.ok(!fields.some((prop) => prop.name === 'as'));
});

test('footer не наследует управление модальным окном', () => {
  const footer = index.components.ModalDFConfirmationFooter;
  assert.equal(footer.atomicBase, undefined);
  assert.ok(props(footer.name).some((prop) => prop.name === 'rightBlock'));
  ['opened', 'closeOnEsc', 'focusTrapSelectors'].forEach((name) =>
    assert.ok(!props(footer.name).some((prop) => prop.name === name), name),
  );
});

test('styled Box сохраняет необязательные CSS-пропсы', () => {
  const fields = props('Box');
  ['background', 'padding', '$css'].forEach((name) =>
    assert.equal(
      fields.find((prop) => prop.name === name)?.required,
      false,
      name,
    ),
  );
});

test('индекс сохраняет документацию, generic-API и обязательные пропсы таблицы', () => {
  assert.deepEqual(checkIndexCompleteness(index).failures, []);
  assert.ok(
    props('TableCanvas').some((prop) => prop.name === 'rows' && prop.required),
  );
  assert.ok(
    props('TableCanvas').some(
      (prop) => prop.name === 'columnConfig' && prop.required,
    ),
  );
  assert.ok(index.components.FormTextField);
  assert.ok(
    index.features.some(
      (feature) =>
        feature.component === 'TableCanvas' && feature.feature === 'Editing',
    ),
  );
});

test('парсер не теряет диагностики вне пробника и продолжения сообщений', () => {
  const errors = parseTscOutput(
    'src/other.ts(3,2): error TS2322: broken\n  Details\nerror TS18003: config failure\n',
  );
  assert.equal(errors.length, 2);
  assert.equal(errors[0].message, 'broken\n  Details');
  assert.equal(errors[1].code, 'TS18003');
});

test('ошибка запуска или нераспознанный отказ компилятора не дают зелёный статус', () => {
  assert.equal(assessDiagnostics([], null, 'ENOENT').ok, false);
  assert.equal(assessDiagnostics([], 1).ok, false);
  assert.equal(assessDiagnostics([], 0).ok, true);
});

test('пробник проверяет импорт даже у компонента без пропсов', () => {
  const result = generateProbe({
    Empty: { name: 'Empty', importPath: '@daisforge/ui', props: [] },
  });
  assert.equal(result.coveredComponents, 1);
  assert.match(result.code, /import \{ Empty as/);
});

test(
  'валидатор ловит подмены импорта, типа, required и потерю полей, включая открытые контракты',
  { timeout: 300_000 },
  () => {
    // Сначала oracle обязан принять настоящий индекс: иначе общий ложный отказ
    // мог бы замаскировать отсутствие проверки конкретной подмены.
    assert.deepEqual(auditContracts(index).issues, []);
    const broken = structuredClone(index);
    broken.components.MissingMcpExport = {
      ...broken.components.TableContract,
      name: 'MissingMcpExport',
      importPath: '@daisforge/ui',
      props: [],
    };
    broken.components.TableContract.props.push({
      name: 'nonexistentMcpProp',
      type: 'string',
      required: false,
      description: '',
    });
    const fetcher = broken.components.TableContract.props.find(
      (prop) => prop.name === 'fetcher',
    );
    assert.ok(fetcher);
    fetcher.required = false;
    broken.components.Canvas.compoundParts.push({
      name: 'MissingMcpPart',
      props: [],
    });
    broken.components.TableContract.props =
      broken.components.TableContract.props.filter(
        (p) => p.name !== 'stylesBeforeLoad',
      );
    fetcher.type = 'number';
    const chips = broken.components.AnalyticalWidget.compoundParts.find(
      (p) => p.name === 'Chips',
    );
    chips.props = chips.props.filter((p) => p.name !== 'chips');
    chips.props.find((p) => p.name === 'opened').required = false;
    broken.components.DrawerDF.compoundParts
      .find((p) => p.name === 'Content')
      .props.find((p) => p.name === 'fixedWidth').type = 'number';
    broken.components.DrawerDF.compoundParts
      .find((p) => p.name === 'Content')
      .props.push({
        name: 'inventedOpenProp',
        type: 'string',
        required: false,
        description: '',
      });
    const report = validateIndex(broken);
    assert.equal(report.ok, false);
    for (const [component, part, prop, kind] of [
      ['TableContract', undefined, 'stylesBeforeLoad', 'missing-prop'],
      ['TableContract', undefined, 'fetcher', 'type'],
      ['DrawerDF', 'Content', 'inventedOpenProp', 'unexpected-prop'],
      ['AnalyticalWidget', 'Chips', 'chips', 'missing-prop'],
      ['AnalyticalWidget', 'Chips', 'opened', 'required'],
      ['DrawerDF', 'Content', 'fixedWidth', 'type'],
    ]) {
      assert.ok(
        report.errors.some(
          (e) =>
            e.check?.component === component &&
            e.check?.part === part &&
            e.check?.prop === prop &&
            e.check?.kind === kind,
        ),
        `${component}.${part ?? ''}.${prop}: ${kind}`,
      );
    }
    assert.ok(
      report.errors.some(
        (error) =>
          error.check?.kind === 'import' &&
          error.check.component === 'MissingMcpExport',
      ),
    );
    assert.ok(
      report.errors.some(
        (error) =>
          error.check?.kind === 'exists' &&
          error.check.prop === 'nonexistentMcpProp',
      ),
    );
    assert.ok(
      report.errors.some(
        (error) =>
          error.check?.kind === 'required' && error.check.prop === 'fetcher',
      ),
    );
    assert.ok(
      report.errors.some((error) => error.check?.part === 'MissingMcpPart'),
    );
  },
);

test('одноимённый экспорт не подменяет другую compound-часть', () => {
  const direct = index.components.FiltersActionsDotsIconButton;
  assert.equal(direct.compoundPartOf, undefined);
  assert.ok(
    !props(direct.name).some((prop) => prop.name === 'iconOrientation'),
  );
  assert.ok(
    props('FiltersActions', 'DotsIconButton').some(
      (prop) => prop.name === 'iconOrientation',
    ),
  );
});

test('новый открытый контракт не становится автоматическим исключением', () => {
  const diagnostic = {
    code: 'TS2344',
    message: 'false',
    check: { kind: 'open-contract', component: 'NewUnknownComponent' },
  };
  assert.equal(assessDiagnostics([diagnostic], 2).ok, false);
});

test('Canvas.icon не выдаётся за JSX-компонент', () => {
  assert.ok(
    !index.components.Canvas.compoundParts.some((part) => part.name === 'icon'),
  );
});
