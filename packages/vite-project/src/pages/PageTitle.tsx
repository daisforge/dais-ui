import { PageTitle, Button, Flow } from '@dais-ui/ui-kit';

const Section = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <section>
    <h3>{label}</h3>
    <div
      style={{
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: 20,
        background: 'var(--bg-card)',
      }}
    >
      {children}
    </div>
  </section>
);

const rightButtons = (
  <Flow mainAxisGap={8}>
    <Button size="s" view="secondary">
      Отмена
    </Button>
    <Button size="s" view="accent">
      Сохранить
    </Button>
  </Flow>
);

const breadcrumbs = {
  items: [
    { title: 'Главная', href: '#' },
    { title: 'Раздел', href: '#' },
    { title: 'Страница' },
  ],
};

export const PageTitleExample = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
    {/* 1. Базовый */}
    <Section label="1. Базовый — только title">
      <PageTitle title="Заголовок страницы" />
    </Section>

    {/* 2. Title + subtitle */}
    <Section label="2. Title + subtitle">
      <PageTitle
        title="Заголовок страницы"
        subtitle="Описание страницы или подзаголовок"
      />
    </Section>

    {/* 3. С кнопкой назад */}
    <Section label="3. С кнопкой «назад» — проверка выравнивания кнопки и title">
      <PageTitle
        showBackButton
        onBackClick={() => {}}
        title="Заголовок страницы"
        subtitle="Описание страницы или подзаголовок"
      />
    </Section>

    {/* 4. С breadcrumbs */}
    <Section label="4. С breadcrumbs + кнопка назад">
      <PageTitle
        breadcrumbs={breadcrumbs}
        showBackButton
        onBackClick={() => {}}
        title="Заголовок страницы"
        subtitle="Описание страницы или подзаголовок"
      />
    </Section>

    {/* 5. Полный набор */}
    <Section label="5. Полный набор — breadcrumbs, back, title, subtitle, rightSlot">
      <PageTitle
        breadcrumbs={breadcrumbs}
        showBackButton
        onBackClick={() => {}}
        title="Заголовок страницы"
        subtitle="Описание страницы или подзаголовок"
        rightSlot={rightButtons}
      />
    </Section>

    {/* 6. С titleSlot */}
    <Section label="6. С titleSlot — кнопка рядом с заголовком">
      <PageTitle
        showBackButton
        onBackClick={() => {}}
        title="Заголовок страницы"
        subtitle="Описание страницы или подзаголовок"
        titleSlot={
          <Button size="xs" view="secondary">
            Действие
          </Button>
        }
        rightSlot={rightButtons}
      />
    </Section>

    {/* 7. Длинный title — truncate + tooltip */}
    <Section label="7. Длинный title — проверка truncate и tooltip">
      <PageTitle
        showBackButton
        onBackClick={() => {}}
        title="Очень длинный заголовок страницы, который точно не поместится в одну строку и должен быть обрезан с троеточием"
        subtitle="Описание страницы или подзаголовок"
        titleTypographyProps={{ lines: 1, bold: true }}
        rightSlot={rightButtons}
      />
    </Section>

    {/* 8. Длинный subtitle */}
    <Section label="8. Длинный subtitle — проверка truncate subtitle">
      <PageTitle
        title="Заголовок"
        subtitle="Очень длинное описание страницы, которое тоже может не поместиться в одну строку и будет обрезано с троеточием при правильной настройке"
        subtitleTypographyProps={{ lines: 1 }}
        rightSlot={rightButtons}
      />
    </Section>

    {/* 9. Короткий title без truncate */}
    <Section label="9. Короткий title — троеточие НЕ должно появляться">
      <PageTitle
        showBackButton
        onBackClick={() => {}}
        title="OK"
        subtitle="Кр."
        titleTypographyProps={{ lines: 1, bold: true }}
        rightSlot={rightButtons}
      />
    </Section>

    {/* 10. Без subtitle, с rightSlot */}
    <Section label="10. Без subtitle — выравнивание кнопок к title">
      <PageTitle
        showBackButton
        onBackClick={() => {}}
        title="Заголовок без подзаголовка"
        rightSlot={rightButtons}
      />
    </Section>

    {/* 11. Только rightSlot и title (без back, без breadcrumbs) */}
    <Section label="11. Минимум: title + rightSlot">
      <PageTitle title="Заголовок" rightSlot={rightButtons} />
    </Section>

    {/* 12. Ограниченная ширина — проверка сжатия */}
    <Section label="12. Ограниченная ширина (500px) — проверка сжатия layout">
      <div style={{ maxWidth: 500 }}>
        <PageTitle
          breadcrumbs={breadcrumbs}
          showBackButton
          onBackClick={() => {}}
          title="Заголовок страницы, который может быть обрезан"
          subtitle="Описание"
          titleTypographyProps={{ lines: 1, bold: true }}
          titleSlot={
            <Button size="xs" view="secondary">
              Доп
            </Button>
          }
          rightSlot={rightButtons}
        />
      </div>
    </Section>
  </div>
);
