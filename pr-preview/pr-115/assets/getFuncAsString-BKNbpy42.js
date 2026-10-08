const n={"packages/storybook/src/stories/AiAgentPopover/AiAgentPopover.stories.tsx$$$PopoverContent":`function PopoverContent({ onClose }: { onClose?: () => void }) {
  return (
    <div
      style={{
        minWidth: '224px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <H3>AI Assistant</H3>
      <BodyS style={{ margin: '8px 0', color: textSecondary }}>
        Пример содержимого AI-ассистента
      </BodyS>
      <div
        style={{
          display: 'flex',
          gap: '8px',
          width: '100%',
          marginTop: 'auto',
        }}
      >
        <Button
          size="s"
          view="secondary"
          onClick={onClose}
          style={{ flexGrow: 1 }}
        >
          Отмена
        </Button>
        <Button size="s" view="accent" style={{ flexGrow: 1 }}>
          Применить
        </Button>
      </div>
    </div>
  );
};`,"packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx$$$hasActiveFilterForButton":`function hasActiveFilterForButton(
  filters: ItemOrGroup[],
  buttonType: 'filterButton' | 'dotsButton',
  value?: string,
) {
  return filters.some(
    (item) =>
      'groupId' in item &&
      item.groupId === buttonType &&
      (value === undefined
        ? item.items.length > 0
        : item.items.some((element) => element.id === value)),
  );
};`,"packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx$$$generateButtonItems":`function generateButtonItems(
  buttonType: 'filterButton' | 'dotsButton',
  options: { value: string; label: string }[],
  filters: ItemOrGroup[],
) {
  return options.map((option) => ({
    value: option.value,
    label: option.label,
    contentLeft: (
      <Box
        $css={{
          visibility: hasActiveFilterForButton(
            filters,
            buttonType,
            option.value,
          )
            ? 'visible'
            : 'hidden',
        }}
      >
        <IconDone size="s" color={textInfo} />
      </Box>
    ),
  }));
};`,"packages/storybook/src/stories/DrawerDF/DrawerDF.stories.tsx$$$DrawerWithOneMainContentExample":`function DrawerWithOneMainContentExample() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Открыть drawer</Button>
      <DrawerDF
        opened={opened}
        onClose={() => setOpened(false)}
        header={
          <DrawerDF.Header
            title="Заголовок дровера"
            subTitle="Подзаголовок здесь"
            badge={{ text: 'Label' }}
            rightBlock={
              <Flow
                mainAxisGap={s.x1}
                style={{ flexWrap: 'nowrap', gap: s.x4 }}
              >
                <DrawerDF.DotsIconButton />
                <Button text="Вторичная 1" size="xs" view="secondary" />
              </Flow>
            }
            footerBlock={<TabsComp stretch />}
          />
        }
        main={<DrawerDF.Content>{longLorem}</DrawerDF.Content>}
        footer={
          <DrawerDF.Footer
            $css={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Button view="clear" size="xs">
              Очистить
            </Button>
            <div>
              <Button view="secondary" size="xs">
                Действие 1
              </Button>
              <Button view="accent" size="xs" style={{ marginLeft: 8 }}>
                Главная кнопка
              </Button>
            </div>
          </DrawerDF.Footer>
        }
      />
    </>
  );
};`,"packages/storybook/src/stories/DrawerDF/DrawerDF.stories.tsx$$$DrawerWithMultipleContentExample":`function DrawerWithMultipleContentExample() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Открыть drawer</Button>
      <DrawerDF
        opened={opened}
        onClose={() => setOpened(false)}
        width="fit-content"
        header={
          <DrawerDF.Header
            title="Заголовок дровера"
            subTitle="Подзаголовок здесь"
            badge={{ text: 'Label' }}
            rightBlock={
              <Flow
                mainAxisGap={s.x1}
                style={{ flexWrap: 'nowrap', gap: s.x4 }}
              >
                <DrawerDF.DotsIconButton />
                <Button text="Вторичная 1" size="xs" view="secondary" />
                <Button text="Главная кнопка" size="xs" view="accent" />
              </Flow>
            }
            footerBlock={<TabsComp stretch />}
          />
        }
        main={[
          <DrawerDF.Content key="left" fixedWidth="150px">
            <Button view="accent" size="xs">
              Обосновать
            </Button>
            {shortLorem}
          </DrawerDF.Content>,
          <DrawerDF.Content key="middle" fixedWidth="50%">
            {longLorem}
          </DrawerDF.Content>,
          <DrawerDF.Content key="right-1">{shortLorem}</DrawerDF.Content>,
          <DrawerDF.Content key="right-2">{shortLorem}</DrawerDF.Content>,
        ]}
      />
    </>
  );
};`,"packages/storybook/src/stories/DrawerDF/DrawerDF.stories.tsx$$$DrawerSingleContentNoHeaderExample":`function DrawerSingleContentNoHeaderExample() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>
        Открыть drawer (одиночный контент)
      </Button>
      <DrawerDF
        opened={opened}
        onClose={() => setOpened(false)}
        width="560px"
        main={<DrawerDF.Content>{longLorem}</DrawerDF.Content>}
      />
    </>
  );
};`,"packages/storybook/src/stories/DrawerDF/DrawerDF.stories.tsx$$$DrawerWithBackButtonExample":`function DrawerWithBackButtonExample() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Открыть drawer с back</Button>
      <DrawerDF
        opened={opened}
        onClose={() => setOpened(false)}
        showBackButton
        onBackClick={() => setOpened(false)}
        header={
          <DrawerDF.Header
            title="Заголовок с кнопкой назад"
            subTitle="Кнопка назад закрывает drawer"
            rightBlock={
              <Flow
                mainAxisGap={s.x1}
                style={{ flexWrap: 'nowrap', gap: s.x4 }}
              >
                <DrawerDF.DotsIconButton />
                <Button text="Вторичная" size="xs" view="secondary" />
              </Flow>
            }
          />
        }
        main={<DrawerDF.Content>{longLorem}</DrawerDF.Content>}
        footer={
          <DrawerDF.Footer
            $css={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Button view="clear" size="xs">
              Очистить
            </Button>
            <div>
              <Button view="secondary" size="xs">
                Действие 1
              </Button>
              <Button view="accent" size="xs" style={{ marginLeft: 8 }}>
                Действие 2
              </Button>
            </div>
          </DrawerDF.Footer>
        }
      />
    </>
  );
};`,"packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx$$$SegmentContentWrapper":`function SegmentContentWrapper() {
  const segment = useSegment();
  const activeTabId = segment?.selectedSegmentItems[0];
  const tabs = [
    { id: 'item_0', bg: 'pink', content: 'Контент сегмента 1' },
    { id: 'item_1', bg: 'brown', content: 'Контент сегмента 2' },
    { id: 'item_2', bg: 'darkgrey', content: 'Контент сегмента 3' },
  ];

  const activeTab = tabs.find((tab) => tab.id === activeTabId) || tabs[0];

  return (
    <SegmentContentStyled
      style={{
        backgroundColor: activeTab ? activeTab.bg : 'white',
      }}
    >
      <H3>Segment {activeTab?.id?.split('_')[1]} </H3>
      <p>{activeTab?.content}</p>
    </SegmentContentStyled>
  );
};`,"packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx$$$CustomTargetFiltersExample":`function CustomTargetFiltersExample() {
  const [blocks, setBlocks] = useState<string[]>([]);
  const [tribes, setTribes] = useState<string[]>([]);
  const [opened, setOpened] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const blocksOptions = [
    { label: 'Блок 1', value: '1' },
    { label: 'Блок 2', value: '2' },
    { label: 'Блок 3', value: '3' },
  ];
  const tribesOptions = [
    { label: 'Трайб 1', value: '1' },
    { label: 'Трайб 2', value: '2' },
    { label: 'Трайб 3', value: '3' },
  ];

  // Активны ли фильтры — от этого зависит красная точка на таргете
  const hasActiveFilters = blocks.length > 0 || tribes.length > 0;

  return (
    <FiltersActions
      mainBlock={
        <FiltersActions.FiltersButtonWithPopover
          popoverProps={{ ref: popoverRef }}
          state={[opened, setOpened]}
          title="Фильтры"
          subtitle="Кастомный таргет через renderTarget"
          redSquare={hasActiveFilters}
          renderTarget={({ onClick, isOpen, isRedDotVisible, RedDot }) => (
            <IconButton
              onClick={onClick}
              size="s"
              view={isOpen ? 'accent' : 'secondary'}
              style={{ position: 'relative' }}
            >
              <IconSettingsFilter size="s" />
              <RedDot visible={isRedDotVisible} />
            </IconButton>
          )}
          content={
            <>
              <div style={{ width: '100%' }}>
                <BodyS style={{ marginBottom: '8px' }}>Блок</BodyS>
                <div style={{ width: '100%' }}>
                  <Combobox
                    size="s"
                    multiple
                    isTargetAmount
                    placeholder="Блок"
                    value={blocks}
                    onChange={setBlocks}
                    items={blocksOptions}
                    listMaxHeight="350px"
                    portal={popoverRef}
                    zIndex="9001"
                  />
                </div>
              </div>
              <div style={{ width: '100%' }}>
                <BodyS style={{ marginBottom: '8px' }}>Трайб</BodyS>
                <div style={{ width: '100%' }}>
                  <Combobox
                    size="s"
                    multiple
                    isTargetAmount
                    placeholder="Трайб"
                    value={tribes}
                    onChange={setTribes}
                    items={tribesOptions}
                    listMaxHeight="350px"
                    portal={popoverRef}
                    zIndex="9001"
                  />
                </div>
              </div>
            </>
          }
        />
      }
    />
  );
};`,"packages/storybook/src/stories/MassActions/MassActions.stories.tsx$$$StandaloneExample":`function StandaloneExample() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

  const items = [
    { id: 1, name: 'Документ 1' },
    { id: 2, name: 'Документ 2' },
    { id: 3, name: 'Документ 3' },
    { id: 4, name: 'Документ 4' },
    { id: 5, name: 'Документ 5' },
  ];

  // Вычисляем состояние чекбокса на основе selectedItems
  const allSelected = selectedItems.size === items.length;
  const someSelected =
    selectedItems.size > 0 && selectedItems.size < items.length;
  const checked = allSelected;
  const indeterminate = someSelected;

  const toggleItem = (id: number) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  const handleCheckboxChange = (isChecked: boolean) => {
    if (isChecked) {
      // Выделяем все элементы
      setSelectedItems(new Set(items.map((item) => item.id)));
    } else {
      // Снимаем выделение со всех элементов
      setSelectedItems(new Set());
    }
  };

  const handleSend = () => {
    alert(\`Отправить \${selectedItems.size} элементов\`);
  };

  const handleExport = () => {
    alert(\`Экспорт \${selectedItems.size} элементов\`);
  };

  const handleArchive = () => {
    alert(\`Архивация \${selectedItems.size} элементов\`);
  };

  return (
    <DemoContainer>
      <ContentBox ref={containerRef} style={{ position: 'relative' }}>
        <Title>Standalone MassActions</Title>
        <Description>
          Выберите элементы ниже, чтобы увидеть панель массовых действий
        </Description>
        <ItemsList>
          {items.map((item) => (
            <Item
              key={item.id}
              $selected={selectedItems.has(item.id)}
              onClick={() => toggleItem(item.id)}
            >
              {item.name}
            </Item>
          ))}
        </ItemsList>

        {selectedItems.size > 0 && (
          <MassActions
            containerRef={containerRef}
            selectedCount={selectedItems.size}
            leftSection={
              <MassActions.Counter
                selectedCount={selectedItems.size}
                showCheckbox
                checked={checked}
                indeterminate={indeterminate}
                onCheckboxChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleCheckboxChange(e.target.checked)
                }
              />
            }
            buttons={[
              {
                text: 'Экспорт',
                onClick: handleExport,
                type: 'button',
                view: 'secondary',
              },
              {
                text: 'Архивировать',
                onClick: handleArchive,
                type: 'button',
                view: 'secondary',
              },
              {
                view: 'accent',
                onClick: handleSend,
                type: 'button',
                text: 'Отправить',
              },
            ]}
          />
        )}
      </ContentBox>
    </DemoContainer>
  );
};`,"packages/storybook/src/stories/MassActions/MassActions.stories.tsx$$$ShowPropExample":`function ShowPropExample() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

  const items = [
    { id: 1, name: 'Документ 1' },
    { id: 2, name: 'Документ 2' },
    { id: 3, name: 'Документ 3' },
  ];

  // Вычисляем состояние чекбокса на основе selectedItems
  const allSelected = selectedItems.size === items.length;
  const someSelected =
    selectedItems.size > 0 && selectedItems.size < items.length;
  const checked = allSelected;
  const indeterminate = someSelected;

  const toggleItem = (id: number) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  const handleCheckboxChange = (isChecked: boolean) => {
    if (isChecked) {
      // Выделяем все элементы
      setSelectedItems(new Set(items.map((item) => item.id)));
    } else {
      // Снимаем выделение со всех элементов
      setSelectedItems(new Set());
    }
  };

  return (
    <DemoContainer>
      <ContentBox ref={containerRef} style={{ position: 'relative' }}>
        <Title>Пример с пропом show</Title>
        <Description>
          Проп show позволяет явно контролировать видимость панели, даже если
          selectedCount === 0. Чекбокс работает так же, как в базовом примере:
          галочка когда все выбрано, минус когда выбрано частично, пусто когда
          ничего не выбрано.
        </Description>
        <div style={{ marginBottom: s.x8, display: 'flex', gap: s.x4 }}>
          <Button onClick={() => setShow(!show)}>
            {show ? 'Скрыть' : 'Показать'} панель
          </Button>
          <div style={{ display: 'flex', alignItems: 'center', gap: s.x2 }}>
            <span>selectedCount: {selectedItems.size}</span>
            <span>show: {show ? 'true' : 'false'}</span>
          </div>
        </div>
        <ItemsList>
          {items.map((item) => (
            <Item
              key={item.id}
              $selected={selectedItems.has(item.id)}
              onClick={() => toggleItem(item.id)}
            >
              {item.name}
            </Item>
          ))}
        </ItemsList>

        <MassActions
          containerRef={containerRef}
          selectedCount={selectedItems.size}
          show={show}
          leftSection={
            <MassActions.Counter
              selectedCount={selectedItems.size}
              showCheckbox
              checked={checked}
              indeterminate={indeterminate}
              onCheckboxChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleCheckboxChange(e.target.checked)
              }
            />
          }
          buttons={[
            {
              text: 'Действие 1',
              onClick: () => alert('Действие 1'),
              type: 'button',
              view: 'secondary',
            },
            {
              text: 'Действие 2',
              onClick: () => alert('Действие 2'),
              type: 'button',
              view: 'secondary',
            },
          ]}
        />
      </ContentBox>
    </DemoContainer>
  );
};`,"packages/storybook/src/stories/MassActions/MassActions.stories.tsx$$$NarrowContainerExample":`function NarrowContainerExample() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

  const items = [
    { id: 1, name: 'Документ 1' },
    { id: 2, name: 'Документ 2' },
    { id: 3, name: 'Документ 3' },
    { id: 4, name: 'Документ 4' },
    { id: 5, name: 'Документ 5' },
  ];

  // Вычисляем состояние чекбокса на основе selectedItems
  const allSelected = selectedItems.size === items.length;
  const someSelected =
    selectedItems.size > 0 && selectedItems.size < items.length;
  const checked = allSelected;
  const indeterminate = someSelected;

  const toggleItem = (id: number) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  const handleCheckboxChange = (isChecked: boolean) => {
    if (isChecked) {
      // Выделяем все элементы
      setSelectedItems(new Set(items.map((item) => item.id)));
    } else {
      // Снимаем выделение со всех элементов
      setSelectedItems(new Set());
    }
  };

  return (
    <DemoContainer>
      <ContentBox
        ref={containerRef}
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        <Title>Узкий контейнер</Title>
        <Description>
          При недостатке места кнопки автоматически скрываются в дропдаун
          скрытых действий. Выберите элементы ниже, чтобы увидеть компрессию
          кнопок.
        </Description>
        <ItemsList style={{ marginTop: s.x8, marginBottom: s.x8 }}>
          {items.map((item) => (
            <Item
              key={item.id}
              $selected={selectedItems.has(item.id)}
              onClick={() => toggleItem(item.id)}
            >
              {item.name}
            </Item>
          ))}
        </ItemsList>

        {selectedItems.size > 0 && (
          <MassActions
            containerRef={containerRef}
            selectedCount={selectedItems.size}
            leftSection={
              <MassActions.Counter
                selectedCount={selectedItems.size}
                showCheckbox
                checked={checked}
                indeterminate={indeterminate}
                onCheckboxChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleCheckboxChange(e.target.checked)
                }
              />
            }
            buttons={[
              {
                text: 'Экспорт',
                onClick: () => alert('Экспорт'),
                view: 'secondary',
                type: 'button',
              },
              {
                text: 'Копировать',
                onClick: () => alert('Копировать'),
                view: 'secondary',
                type: 'button',
              },
              {
                text: 'Переместить',
                onClick: () => alert('Переместить'),
                view: 'secondary',
                type: 'button',
              },
              {
                text: 'Архивировать',
                onClick: () => alert('Архивировать'),
                view: 'secondary',
                type: 'button',
              },
              {
                text: 'Заморозить',
                onClick: () => alert('Заморозить'),
                view: 'secondary',
                type: 'button',
              },
              {
                type: 'button',
                text: 'Отправить',
                view: 'accent',
                onClick: () => alert('Отправить'),
              },
            ]}
          />
        )}
      </ContentBox>
    </DemoContainer>
  );
};`,"packages/storybook/src/stories/MassActions/MassActions.stories.tsx$$$WithLeftPanelExample":`function WithLeftPanelExample() {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(false);
  const [isShowMassActionsStatic, setIsShowMassActionsStatic] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

  const items = [
    { id: 1, name: 'Документ 1' },
    { id: 2, name: 'Документ 2' },
    { id: 3, name: 'Документ 3' },
    { id: 4, name: 'Документ 4' },
    { id: 5, name: 'Документ 5' },
  ];

  // Вычисляем состояние чекбокса на основе selectedItems
  const allSelected = selectedItems.size === items.length;
  const someSelected =
    selectedItems.size > 0 && selectedItems.size < items.length;
  const checked = allSelected;
  const indeterminate = someSelected;

  const toggleItem = (id: number) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  const handleCheckboxChange = (isChecked: boolean) => {
    if (isChecked) {
      // Выделяем все элементы
      setSelectedItems(new Set(items.map((item) => item.id)));
    } else {
      // Снимаем выделение со всех элементов
      setSelectedItems(new Set());
    }
  };

  const handleToggle = (next: boolean) => {
    setIsLeftPanelOpen(next);
  };

  return (
    <div
      style={{
        height: '100vh',
        padding: '20px',
        display: 'flex',
        backgroundColor: '#f5f5f5',
      }}
    >
      <LeftPanel
        onToggleCollapse={handleToggle}
        collapseState={[isLeftPanelOpen, setIsLeftPanelOpen]}
        expandedContent={
          <div
            style={{
              padding: s.x8,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Title style={{ fontSize: '18px', marginBottom: s.x4 }}>
              Левая панель
            </Title>
            <Description style={{ fontSize: '14px', marginBottom: s.x8 }}>
              В левой панели используется StaticMassActionsPanel с базовыми
              кнопками
            </Description>
            <MassActionsStatic show={isShowMassActionsStatic}>
              <IconButton size="s" view="secondary">
                <IconDotsVerticalCenteredOutline />
              </IconButton>
              <Button
                text="Label 1"
                contentLeft={<IconPlasma />}
                size="s"
                view="secondary"
                onClick={() => alert('Label 1')}
                style={{
                  flexGrow: 1,
                }}
              />
              <Button
                text="Label 2"
                size="s"
                contentLeft={<IconPlasma />}
                view="secondary"
                onClick={() => alert('Label 2')}
                style={{
                  flexGrow: 1,
                }}
              />
            </MassActionsStatic>
          </div>
        }
        collapsedContent={
          isShowMassActionsStatic && (
            <>
              <IconButton size="s" view="secondary">
                <IconDotsVerticalCenteredOutline />
              </IconButton>
              <IconButton size="s" view="secondary">
                <IconPlasma />
              </IconButton>
              <IconButton size="s" view="secondary">
                <IconPlasma />
              </IconButton>
            </>
          )
        }
      />
      <div
        ref={mainContainerRef}
        style={{
          flex: 1,
          padding: s.x8,
          backgroundColor: surfaceSolidCard,
          borderRadius: s.x8,
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: s.x8,
          }}
        >
          <Title style={{ fontSize: '20px', margin: 0 }}>
            Основной контент
          </Title>
        </div>
        <Description style={{ fontSize: '14px', marginBottom: s.x8 }}>
          В основном контенте используется адаптивный MassActions. Выберите
          документ.
        </Description>
        <div style={{ marginBottom: '16px' }}>
          <div
            style={{
              display: 'flex',
              gap: '16px',
            }}
          >
            <Button onClick={() => handleToggle(!isLeftPanelOpen)}>
              {isLeftPanelOpen ? 'Закрыть' : 'Открыть'} левую панель
            </Button>
            <Button onClick={() => setIsShowMassActionsStatic((prev) => !prev)}>
              {isShowMassActionsStatic ? 'Закрыть' : 'Открыть'}{' '}
              MassActionsStatic в левой части
            </Button>
          </div>
        </div>
        <ItemsList>
          {items.map((item) => (
            <Item
              key={item.id}
              $selected={selectedItems.has(item.id)}
              onClick={() => toggleItem(item.id)}
            >
              {item.name}
            </Item>
          ))}
        </ItemsList>

        {selectedItems.size > 0 && (
          <MassActions
            containerRef={mainContainerRef}
            selectedCount={selectedItems.size}
            leftSection={
              <MassActions.Counter
                selectedCount={selectedItems.size}
                showCheckbox
                checked={checked}
                indeterminate={indeterminate}
                onCheckboxChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleCheckboxChange(e.target.checked)
                }
              />
            }
            buttons={[
              {
                text: 'Экспорт',
                onClick: () => alert('Экспорт'),
                type: 'button',
                view: 'secondary',
              },
              {
                text: 'Архивировать',
                onClick: () => alert('Архивировать'),
                type: 'button',
                view: 'secondary',
              },
              {
                text: 'Копировать',
                onClick: () => alert('Копировать'),
                type: 'button',
                view: 'secondary',
              },
              {
                text: 'Переместить',
                onClick: () => alert('Переместить'),
                type: 'button',
                view: 'secondary',
              },
              {
                view: 'accent',
                onClick: () => alert('Отправить'),
                type: 'button',
                text: 'Отправить',
              },
            ]}
          />
        )}
      </div>
    </div>
  );
};`,"packages/storybook/src/stories/MassActions/MassActions.stories.tsx$$$CounterMaxCountExample":`function CounterMaxCountExample() {
  const containerRef = useRef<HTMLDivElement>(null);

  const items = Array.from({ length: 150 }, (_, i) => ({
    id: i + 1,
    name: \`Документ \${i + 1}\`,
  }));

  // По умолчанию выбраны все 150 элементов → 150 > 99 → «99+».
  const [selectedItems, setSelectedItems] = useState<Set<number>>(
    () => new Set(items.map((item) => item.id)),
  );

  const allSelected = selectedItems.size === items.length;
  const someSelected =
    selectedItems.size > 0 && selectedItems.size < items.length;

  const toggleItem = (id: number) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  const handleCheckboxChange = (isChecked: boolean) => {
    setSelectedItems(
      isChecked ? new Set(items.map((item) => item.id)) : new Set(),
    );
  };

  return (
    <DemoContainer>
      <ContentBox ref={containerRef} style={{ position: 'relative' }}>
        <Title>MassActions.Counter — maxCount</Title>
        <Description>
          Выбрано {selectedItems.size} из {items.length}. maxCount = 99, поэтому
          счётчик показывает «99+». Снимите выделение до ≤ 99, чтобы увидеть
          точное число.
        </Description>
        <ItemsList style={{ maxHeight: 260, overflow: 'auto' }}>
          {items.map((item) => (
            <Item
              key={item.id}
              $selected={selectedItems.has(item.id)}
              onClick={() => toggleItem(item.id)}
            >
              {item.name}
            </Item>
          ))}
        </ItemsList>

        {selectedItems.size > 0 && (
          <MassActions
            containerRef={containerRef}
            selectedCount={selectedItems.size}
            leftSection={
              <MassActions.Counter
                selectedCount={selectedItems.size}
                maxCount={99}
                showCheckbox
                checked={allSelected}
                indeterminate={someSelected}
                onCheckboxChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleCheckboxChange(e.target.checked)
                }
              />
            }
            buttons={[
              {
                text: 'Экспорт',
                onClick: () => alert(\`Экспорт \${selectedItems.size} элементов\`),
                type: 'button',
                view: 'secondary',
              },
            ]}
          />
        )}
      </ContentBox>
    </DemoContainer>
  );
};`,"packages/storybook/src/stories/ModalDF/ModalDF.stories.tsx$$$ModalDFWithOneContentExample":`function ModalDFWithOneContentExample() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Открыть модальное окно</Button>
      <ModalDF opened={opened} onClose={() => setOpened(false)} fullScreen>
        <ModalDF.Main>
          <ModalDF.Header
            title="Заголовок"
            badge={{ text: 'Бейдж' }}
            subTitle="Подзаголовок"
            showBackButton
            onBackClick={() => {}}
            rightBlock={
              <>
                <Flow mainAxisGap={s.x4} style={{ flexWrap: 'nowrap' }}>
                  <TextS>
                    <Link href={window.location.href} view="accent">
                      ссылка
                    </Link>
                  </TextS>
                  <TextS>
                    <Link href={window.location.href} view="accent">
                      ссылка
                    </Link>
                  </TextS>
                </Flow>
                <ModalDF.Divider />
                <Flow mainAxisGap={s.x1} style={{ flexWrap: 'nowrap' }}>
                  <ModalDF.DotsIconButton />
                  <Button text="Кнопка 1" size="xs" view="secondary" />
                  <Button text="Кнопка 2" size="xs" view="secondary" />
                </Flow>
              </>
            }
          />

          <ModalDF.Content>{longLorem}</ModalDF.Content>

          <ModalDF.Footer
            leftBlock={
              <Flow mainAxisGap={s.x4}>
                <Button text="Кнопка 1" size="s" view="secondary" />
                <Button text="Кнопка 2" size="s" view="secondary" />
                <ModalDF.DotsIconButton size="s" />
              </Flow>
            }
            rightBlock={
              <Flow mainAxisGap={s.x4}>
                <Button text="Кнопка" size="s" view="secondary" />
                <Button text="Главная кнопка" size="s" view="accent" />
              </Flow>
            }
          />
        </ModalDF.Main>
      </ModalDF>
    </>
  );
};`,"packages/storybook/src/stories/ModalDF/ModalDF.stories.tsx$$$ModalDFWithLeftBlockExample":`function ModalDFWithLeftBlockExample() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Открыть модальное окно</Button>
      <ModalDF
        opened={opened}
        onClose={() => setOpened(false)}
        fullScreen
        contentContainerProps={{
          css: { '&&': { minWidth: '1000px' } },
        }}
      >
        <ModalDF.Left>
          <ModalDF.Header title="Заголовок 1" subTitle="Подзаголовок 1" />
          <ModalDF.Content>{shortLorem}</ModalDF.Content>
        </ModalDF.Left>

        <ModalDF.Main>
          <ModalDF.Header
            title="Заголовок 2"
            badge={{ text: 'Бейдж 2' }}
            subTitle="Подзаголовок 2"
            rightBlock={
              <>
                <Flow mainAxisGap={s.x4} style={{ flexWrap: 'nowrap' }}>
                  <TextS>
                    <Link href={window.location.href} view="accent">
                      ссылка
                    </Link>
                  </TextS>
                  <TextS>
                    <Link href={window.location.href} view="accent">
                      ссылка
                    </Link>
                  </TextS>
                </Flow>
                <ModalDF.Divider />
                <Flow mainAxisGap={s.x1} style={{ flexWrap: 'nowrap' }}>
                  <ModalDF.DotsIconButton />
                  <Button text="Кнопка 1" size="xs" view="secondary" />
                  <Button text="Кнопка 2" size="xs" view="secondary" />
                </Flow>
              </>
            }
          />

          <ModalDF.Content>{shortLorem}</ModalDF.Content>

          <ModalDF.Footer
            leftBlock={
              <Flow mainAxisGap={s.x4}>
                <Button text="Кнопка 1" size="s" view="secondary" />
                <Button text="Кнопка 2" size="s" view="secondary" />
                <ModalDF.DotsIconButton size="s" />
              </Flow>
            }
            rightBlock={
              <Flow mainAxisGap={s.x4}>
                <Button text="Кнопка" size="s" view="secondary" />
                <Button text="Главная кнопка" size="s" view="accent" />
              </Flow>
            }
          />
        </ModalDF.Main>
      </ModalDF>
    </>
  );
};`,"packages/storybook/src/stories/ModalDF/ModalDF.stories.tsx$$$ModalDFWithBigContentsExample":`function ModalDFWithBigContentsExample() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Открыть модальное окно</Button>
      <ModalDF
        opened={opened}
        onClose={() => setOpened(false)}
        fullScreen
        contentContainerProps={{
          css: { '&&': { minWidth: '1000px' } },
        }}
      >
        <ModalDF.Left>
          <ModalDF.Header
            title="Заголовок 1"
            badge={{ text: 'Бейдж 1' }}
            subTitle="Заголовок 1"
          />

          <ModalDF.Content>{longLorem}</ModalDF.Content>
          <ModalDF.Footer
            rightBlock={<Button view="secondary" size="s" text="Кнопка" />}
          />
        </ModalDF.Left>
        <ModalDF.Main>
          <ModalDF.Header
            title="Заголовок 2"
            badge={{ text: 'Бейдж 2' }}
            subTitle="Подзаголовок 2"
            rightBlock={
              <>
                <Flow mainAxisGap={s.x4} style={{ flexWrap: 'nowrap' }}>
                  <TextS>
                    <Link href={window.location.href} view="accent">
                      ссылка
                    </Link>
                  </TextS>
                  <TextS>
                    <Link href={window.location.href} view="accent">
                      ссылка
                    </Link>
                  </TextS>
                </Flow>
                <ModalDF.Divider />
                <Flow mainAxisGap={s.x1} style={{ flexWrap: 'nowrap' }}>
                  <ModalDF.DotsIconButton />
                  <Button text="Кнопка 1" size="xs" view="secondary" />
                  <Button text="Кнопка 2" size="xs" view="secondary" />
                </Flow>
              </>
            }
          />

          <ModalDF.Content>{longLorem}</ModalDF.Content>

          <ModalDF.Footer
            leftBlock={
              <Flow mainAxisGap={s.x4}>
                <Button text="Кнопка 1" size="s" view="secondary" />
                <Button text="Кнопка 2" size="s" view="secondary" />
                <ModalDF.DotsIconButton size="s" />
              </Flow>
            }
            rightBlock={
              <Flow mainAxisGap={s.x4}>
                <Button text="Кнопка" size="s" view="secondary" />
                <Button text="Главная кнопка" size="s" view="accent" />
              </Flow>
            }
          />
        </ModalDF.Main>
      </ModalDF>
    </>
  );
};`,"packages/storybook/src/stories/ModalDF/ModalDF.stories.tsx$$$ModalDFEmptyExample":`function ModalDFEmptyExample() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Открыть модальное окно</Button>
      <ModalDF opened={opened} onClose={() => setOpened(false)} fullScreen>
        <ModalDF.Main>
          <ModalDF.ServiceButtons
            $css={{ marginLeft: 'auto', paddingBottom: s.x8 }}
          />
          <ModalDF.Content>{longLorem}</ModalDF.Content>
        </ModalDF.Main>
      </ModalDF>
    </>
  );
};`,"packages/storybook/src/stories/ModalDFConfirmation/ModalDFConfirmation.stories.tsx$$$SavingExampleRender":`function SavingExampleRender() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Открыть модальное окно</Button>
      <ModalDFConfirmation
        opened={opened}
        onClose={() => setOpened(false)}
        contentContainerProps={{
          css: { maxWidth: '500px' },
        }}
        content={{
          header: 'Сохранить изменения перед выходом?',
          body: 'У вас есть несохранённые данные. При выходе без сохранения восстановить их будет невозможно',
          bodyMarginBlock: s.x4,
          mainButton: { text: 'Сохранить' },
          secondaryButton: {
            text: 'Выйти без сохранения',
          },
        }}
      />
    </>
  );
};`,"packages/storybook/src/stories/ModalDFConfirmation/ModalDFConfirmation.stories.tsx$$$VariantsExampleRender":`function VariantsExampleRender() {
  const [openedPositive, setOpenedPositive] = useState(false);
  const [openedWarning, setOpenedWarning] = useState(false);
  const [openedAccent, setOpenedAccent] = useState(false);
  const [openedNegative, setOpenedNegative] = useState(false);
  return (
    <>
      <div style={{ display: 'flex', gap: s.x2 }}>
        <Button view="positive" onClick={() => setOpenedPositive(true)}>
          Открыть модальное окно
        </Button>
        <Button view="warning" onClick={() => setOpenedWarning(true)}>
          Открыть модальное окно
        </Button>
        <Button view="accent" onClick={() => setOpenedAccent(true)}>
          Открыть модальное окно
        </Button>
        <Button view="negative" onClick={() => setOpenedNegative(true)}>
          Открыть модальное окно
        </Button>
      </div>
      <ModalDFConfirmation
        view="positive"
        icon={<IconPlasma />}
        opened={openedPositive}
        onClose={() => setOpenedPositive(false)}
        contentContainerProps={{
          css: { maxWidth: '500px' },
        }}
        content={{
          header: 'Изменения сохранены',
          body: 'Данные были сохранены. Можно закрыть форму и продолжить пользоваться услугами',
          bodyMarginBlock: s.x4,
          mainButton: { text: 'Далее', view: 'positive' },
        }}
      />
      <ModalDFConfirmation
        view="warning"
        icon={<IconPlasma />}
        opened={openedWarning}
        onClose={() => setOpenedWarning(false)}
        contentContainerProps={{
          css: { maxWidth: '500px' },
        }}
        content={{
          header: 'Что-то пошло не так',
          body: 'Произошла ошибка. Нужно проверить введенные данные',
          bodyMarginBlock: s.x4,
          mainButton: { text: 'Сохранить', view: 'warning' },
          secondaryButton: {
            text: 'Выйти без сохранения',
          },
        }}
      />
      <ModalDFConfirmation
        view="info"
        icon={<IconPlasma />}
        opened={openedAccent}
        onClose={() => setOpenedAccent(false)}
        contentContainerProps={{
          css: { maxWidth: '500px' },
        }}
        content={{
          header: 'Сохранить изменения перед выходом?',
          body: 'У вас есть несохранённые данные. При выходе без сохранения восстановить их будет невозможно',
          bodyMarginBlock: s.x4,
          mainButton: { text: 'Сохранить' },
          secondaryButton: {
            text: 'Выйти без сохранения',
          },
        }}
      />
      <ModalDFConfirmation
        view="negative"
        icon={<IconPlasma />}
        opened={openedNegative}
        onClose={() => setOpenedNegative(false)}
        contentContainerProps={{
          css: { maxWidth: '432px' },
        }}
        content={{
          header: 'Удалить данные?',
          body: 'Если удалить данные, восстановить их и продолжить работу будет невозможно',
          mainButton: { text: 'Удалить', view: 'negative' },
          secondaryButton: {
            text: 'Отменить',
            onClick: () => setOpenedNegative(false),
          },
        }}
      />
    </>
  );
};`,"packages/storybook/src/stories/ModalDFConfirmation/ModalDFConfirmation.stories.tsx$$$CustomFooterExampleRender":`function CustomFooterExampleRender() {
  const [opened, setOpened] = useState(false);
  const description =
    'Добавьте кастомный футер, когда нужно встроить нестандартные кнопки или дополнительный контент.';

  return (
    <>
      <Button onClick={() => setOpened(true)}>Открыть модальное окно</Button>
      <ModalDFConfirmation
        opened={opened}
        onClose={() => setOpened(false)}
        content={{
          header: 'Заголовок модального окна',
          body: description,
          footer: (
            <ModalDFConfirmation.Footer
              leftBlock={<Button size="s" text="Кнопка" view="clear" />}
              rightBlock={
                <Flow mainAxisGap={s.x4}>
                  <Button size="s" view="secondary" text="Кнопка 2" />
                  <Button size="s" view="accent" text="Кнопка 1" />
                </Flow>
              }
            />
          ),
        }}
      />
    </>
  );
};`,"packages/storybook/src/stories/Notification/Notification.stories.tsx$$$VariantsExampleRender":`function VariantsExampleRender() {
  return (
    <div style={{ display: 'flex', gap: s.x2 }}>
      <NotificationsProvider>
        <Button
          view="positive"
          onClick={() =>
            addNotification(
              {
                id: 'positive-notification',
                view: 'positive',
                title: 'Title',
                icon: <IconPlasma />,
                children: (
                  <Typography variant="TextS" color={textPrimary}>
                    Text
                  </Typography>
                ),
                closeIconType: 'thin',
                actions: (
                  <>
                    <Button
                      size="xxs"
                      view="secondary"
                      style={{ marginRight: '4px' }}
                    >
                      Label
                    </Button>
                    <Button size="xxs" view="secondary">
                      Label
                    </Button>
                  </>
                ),
                layout: 'horizontal',
                width: '459px',
              },
              null,
            )
          }
        >
          Уведомление: positive
        </Button>
        <Button
          view="warning"
          onClick={() =>
            addNotification(
              {
                id: 'warning-notification',
                view: 'warning',
                title: 'Title',
                icon: <IconPlasma />,
                children: (
                  <Typography variant="TextS" color={textPrimary}>
                    Text
                  </Typography>
                ),
                closeIconType: 'thin',
                actions: (
                  <>
                    <Button
                      size="xxs"
                      view="secondary"
                      style={{ marginRight: '4px' }}
                    >
                      Label
                    </Button>
                    <Button size="xxs" view="secondary">
                      Label
                    </Button>
                  </>
                ),
                layout: 'horizontal',
                width: '459px',
              },
              null,
            )
          }
        >
          Уведомление: warning
        </Button>
        <Button
          view="accent"
          onClick={() =>
            addNotification(
              {
                id: 'info-notification',
                view: 'info',
                title: 'Title',
                icon: <IconPlasma />,
                children: (
                  <Typography variant="TextS" color={textPrimary}>
                    Text
                  </Typography>
                ),
                closeIconType: 'thin',
                actions: (
                  <>
                    <Button
                      size="xxs"
                      view="secondary"
                      style={{ marginRight: '4px' }}
                    >
                      Label
                    </Button>
                    <Button size="xxs" view="secondary">
                      Label
                    </Button>
                  </>
                ),
                layout: 'horizontal',
                width: '459px',
              },
              null,
            )
          }
        >
          Уведомление: info
        </Button>
        <Button
          view="negative"
          onClick={() =>
            addNotification(
              {
                id: 'negative-notification',
                view: 'negative',
                title: 'Title',
                icon: <IconPlasma />,
                children: (
                  <Typography variant="TextS" color={textPrimary}>
                    Text
                  </Typography>
                ),
                closeIconType: 'thin',
                actions: (
                  <>
                    <Button
                      size="xxs"
                      view="secondary"
                      style={{ marginRight: '4px' }}
                    >
                      Label
                    </Button>
                    <Button size="xxs" view="secondary">
                      Label
                    </Button>
                  </>
                ),
                layout: 'horizontal',
                width: '459px',
              },
              null,
            )
          }
        >
          Уведомление: negative
        </Button>
      </NotificationsProvider>
    </div>
  );
};`,"packages/storybook/src/stories/PageLayout/PageLayout.stories.tsx$$$WithSplitViewTemplate":`function WithSplitViewTemplate() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <FakeHeader>
        Шапка микрофронта (fixed)
        <Button
          size="xs"
          view={sidebarOpen ? 'secondary' : 'accent'}
          onClick={() => setSidebarOpen((v) => !v)}
        >
          {sidebarOpen ? 'Закрыть сайдбар' : 'Открыть сайдбар'}
        </Button>
      </FakeHeader>
      <PageLayout>
        <SplitView
          insidePageLayout
          mainContent={
            <Layout
              variant="V1_1"
              marginTop="0"
              marginBottom="0"
              paddingTop="16px"
              headerSlot={DefaultPageHeader}
              mainSlot={
                <>
                  <ContentBlock>
                    Основной контент. SplitView с insidePageLayout компенсирует
                    padding-inline PageLayout через отрицательный margin-right.
                  </ContentBlock>
                  <ContentBlock>Ещё один блок</ContentBlock>
                </>
              }
            />
          }
          sidebar={{
            content: (
              <SidebarContent>
                <Widget>
                  <Widget.Header title="Детали" />
                  <Widget.Content>Информация о записи</Widget.Content>
                </Widget>
                <Widget>
                  <Widget.Header title="Действия" />
                  <Widget.Content>
                    <Flow mainAxisGap={8} orientation="vertical">
                      <Button size="s" view="accent" stretching="filled">
                        Утвердить
                      </Button>
                      <Button size="s" view="secondary" stretching="filled">
                        Отклонить
                      </Button>
                    </Flow>
                  </Widget.Content>
                </Widget>
              </SidebarContent>
            ),
            isOpened: sidebarOpen,
            defaultWidthPercent: 30,
          }}
        />
      </PageLayout>
    </>
  );
};`,"packages/storybook/src/stories/PageLayout/PageLayout.stories.tsx$$$SplitViewLongContentTemplate":`function SplitViewLongContentTemplate() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <FakeHeader>
        Шапка микрофронта (fixed)
        <Button
          size="xs"
          view="secondary"
          onClick={() => setSidebarOpen((v) => !v)}
        >
          {sidebarOpen ? 'Скрыть' : 'Показать'} сайдбар
        </Button>
      </FakeHeader>
      <PageLayout>
        <SplitView
          insidePageLayout
          mainContent={
            <Layout
              variant="V1_1"
              marginTop="0"
              marginBottom="0"
              paddingTop="16px"
              headerSlot={DefaultPageHeader}
              mainSlot={<LongContentBlocks count={25} />}
            />
          }
          sidebar={{
            content: (
              <SidebarContent>
                <Widget>
                  <Widget.Header title="Фильтры" />
                  <Widget.Content>
                    Sticky sidebar — не скроллится вместе с основным контентом
                  </Widget.Content>
                </Widget>
              </SidebarContent>
            ),
            isOpened: sidebarOpen,
            defaultWidthPercent: 25,
          }}
        />
      </PageLayout>
    </>
  );
};`,"packages/storybook/src/stories/PageLayout/PageLayout.stories.tsx$$$WithLeftPanelTemplate":`function WithLeftPanelTemplate() {
  const [collapsed, setCollapsed] = useState(false);
  const [width, setWidth] = useState<number | undefined>(280);

  return (
    <>
      <FakeHeader>Шапка микрофронта (fixed)</FakeHeader>
      <PageLayout>
        <Layout
          variant="V1_1"
          marginBottom="0"
          headerSlot={DefaultPageHeader}
          mainSlot={
            <FlexContainer>
              <LeftPanel
                collapseState={[collapsed, setCollapsed]}
                widthState={[width, setWidth]}
                maxWidth={360}
                expandedContent={<LeftPanelExpandedContent />}
                collapsedContent={<LeftPanelCollapsedContent />}
                collapsedFooterContent={
                  <IconButton size="s" view="secondary">
                    <IconGroupOutline />
                  </IconButton>
                }
              />
              <MainArea>
                <ContentBlock>Контент страницы «Дашборд»</ContentBlock>
                <ContentBlock style={{ marginTop: 12 }}>
                  LeftPanel сворачивается / разворачивается. Layout
                  адаптируется.
                </ContentBlock>
                <ContentBlock style={{ marginTop: 12 }}>
                  Дополнительный блок контента
                </ContentBlock>
                <ContentBlock style={{ marginTop: 12 }}>
                  Ещё один блок для демонстрации высоты
                </ContentBlock>
              </MainArea>
            </FlexContainer>
          }
        />
      </PageLayout>
    </>
  );
};`,"packages/storybook/src/stories/PageLayout/PageLayout.stories.tsx$$$LeftPanelWithSplitViewTemplate":`function LeftPanelWithSplitViewTemplate() {
  const [collapsed, setCollapsed] = useState(false);
  const [panelWidth, setPanelWidth] = useState<number | undefined>(260);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <FakeHeader>
        Шапка микрофронта (fixed)
        <Button
          size="xs"
          view={sidebarOpen ? 'secondary' : 'accent'}
          onClick={() => setSidebarOpen((v) => !v)}
        >
          {sidebarOpen ? 'Скрыть детали' : 'Показать детали'}
        </Button>
      </FakeHeader>
      <PageLayout>
        <SplitView
          insidePageLayout
          mainContent={
            <Layout
              variant="V1_1"
              marginTop="0"
              marginBottom="0"
              paddingTop="16px"
              style={{
                height: '100%',
              }}
              headerSlot={DefaultPageHeader}
              mainSlot={
                <FlexContainer>
                  <LeftPanel
                    collapseState={[collapsed, setCollapsed]}
                    widthState={[panelWidth, setPanelWidth]}
                    maxWidth={360}
                    expandedContent={<LeftPanelExpandedContent />}
                    collapsedContent={<LeftPanelCollapsedContent />}
                    collapsedFooterContent={
                      <IconButton size="s" view="secondary">
                        <IconGroupOutline />
                      </IconButton>
                    }
                  />
                  <MainArea>
                    <ContentBlock>
                      Таблица или список записей. Выбор записи открывает панель
                      деталей справа через SplitView.
                    </ContentBlock>
                    <ContentBlock style={{ marginTop: 12 }}>
                      Ещё один блок контента
                    </ContentBlock>
                  </MainArea>
                </FlexContainer>
              }
            />
          }
          sidebar={{
            content: (
              <SidebarContent>
                <Widget>
                  <Widget.Header title="Детали записи" />
                  <Widget.Content>
                    <p>ID: 12345</p>
                    <p>Статус: Активна</p>
                    <p>Дата: 15.03.2026</p>
                  </Widget.Content>
                </Widget>
                <Widget>
                  <Widget.Header title="Действия" />
                  <Widget.Content>
                    <Flow mainAxisGap={8} orientation="vertical">
                      <Button size="s" view="accent" stretching="filled">
                        Редактировать
                      </Button>
                      <Button size="s" view="secondary" stretching="filled">
                        Архивировать
                      </Button>
                    </Flow>
                  </Widget.Content>
                </Widget>
              </SidebarContent>
            ),
            isOpened: sidebarOpen,
            defaultWidthPercent: 30,
          }}
        />
      </PageLayout>
    </>
  );
};`,"packages/storybook/src/stories/PageLayout/PageLayout.stories.tsx$$$FullComboLongTemplate":`function FullComboLongTemplate() {
  const [collapsed, setCollapsed] = useState(false);
  const [panelWidth, setPanelWidth] = useState<number | undefined>(260);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <FakeHeader>
        Шапка микрофронта (fixed)
        <Button
          size="xs"
          view="secondary"
          onClick={() => setSidebarOpen((v) => !v)}
        >
          {sidebarOpen ? 'Скрыть' : 'Показать'}
        </Button>
      </FakeHeader>
      <PageLayout>
        <SplitView
          insidePageLayout
          mainContent={
            <Layout
              variant="V1_1"
              marginTop="0"
              marginBottom="0"
              paddingTop="16px"
              style={{
                height: '100%',
              }}
              headerSlot={DefaultPageHeader}
              mainSlot={
                <FlexContainer>
                  <LeftPanel
                    collapseState={[collapsed, setCollapsed]}
                    widthState={[panelWidth, setPanelWidth]}
                    maxWidth={360}
                    expandedContent={<LeftPanelExpandedContent />}
                    collapsedContent={<LeftPanelCollapsedContent />}
                    collapsedFooterContent={
                      <IconButton size="s" view="secondary">
                        <IconGroupOutline />
                      </IconButton>
                    }
                  />
                  <MainArea>
                    <LongContentBlocks count={20} />
                  </MainArea>
                </FlexContainer>
              }
            />
          }
          sidebar={{
            content: (
              <SidebarContent>
                <Widget>
                  <Widget.Header title="Sticky sidebar" />
                  <Widget.Content>
                    Этот sidebar остаётся на месте при прокрутке основного
                    контента.
                  </Widget.Content>
                </Widget>
              </SidebarContent>
            ),
            isOpened: sidebarOpen,
            defaultWidthPercent: 25,
          }}
        />
      </PageLayout>
    </>
  );
};`,"packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx$$$PopoverTargetRender":`function PopoverTargetRender(
  { children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button ref={ref} type="button" {...props}>
      {children}
    </button>
  );
};`,"packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx$$$PopoverDFCustomTargetExample":`function PopoverDFCustomTargetExample() {
  const [opened, setOpened] = useState(false);

  return (
    <PopoverDF
      target={<PopoverTarget>Открыть PopoverDF</PopoverTarget>}
      opened={opened}
      onToggle={setOpened}
      placement="bottom"
      hasTail
      flip
      shift
      offset={8}
    >
      <PopoverDF.Body>Контент всплывающего окна.</PopoverDF.Body>
    </PopoverDF>
  );
};`,"packages/storybook/src/stories/SplitView/SplitView.stories.tsx$$$SplitViewTableComponent":`function SplitViewTableComponent({
  rows,
  setOpenedTask,
}: {
  rows: Row[];
  setOpenedTask: (row: Row) => void;
}) {
  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      {
        key: 'id',
        name: 'id',
      },
      {
        key: 'task',
        name: 'Title',
      },
      {
        key: 'priority',
        name: 'Priority',
      },
      {
        key: 'issueType',
        name: 'Issue Type',
      },
      {
        key: 'complete',
        name: '% Complete',
      },
    ],
    [],
  );

  return (
    <Table
      tableConfig={{
        containerStyle: { height: 700 },
        onCellClick({ row }) {
          setOpenedTask(row);
        },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
};`,"packages/storybook/src/stories/Stories/Stories.stories.tsx$$$useViewed":`function useViewed() {
  const [viewed, setViewed] = useState<Record<number, boolean>>({});
  const markViewed = (index: number) =>
    setViewed((prev) => ({ ...prev, [index]: true }));
  return { viewed, markViewed };
};`,"packages/storybook/src/stories/Stories/Stories.stories.tsx$$$CircleStoriesExample":`function CircleStoriesExample() {
  const { viewed, markViewed } = useViewed();

  return (
    <Stories defaultDuration={5000} onGroupChange={markViewed}>
      <Stories.Preview
        title="Обновления"
        image={asset('1', '#08c6c9', '#99b0fe')}
        viewed={viewed[0]}
        slides={[
          {
            src: asset('Слайд 1', '#08c6c9', '#4f8ef7'),
            footer: (
              <Button
                size="s"
                view="accent"
                stretching="filled"
                text="Подробнее"
                onClick={() => undefined}
              />
            ),
          },
          { src: asset('Слайд 2', '#7b61ff', '#99b0fe') },
          {
            src: asset('Слайд 3', '#00b3a4', '#08c6c9'),
            objectFit: 'contain' as const,
          },
        ]}
      />
      <Stories.Preview
        title="Акции недели"
        image={asset('2', '#f7971e', '#ffd200')}
        viewed={viewed[1]}
        slides={[{ src: asset('Акция', '#f7971e', '#ffd200'), duration: 3000 }]}
      />
      <Stories.Preview
        title="Как это работает"
        image={asset('3', '#c471ed', '#f64f59')}
        viewed={viewed[2]}
        slides={[
          { src: asset('Шаг 1', '#c471ed', '#f64f59') },
          { src: asset('Шаг 2', '#12c2e9', '#c471ed') },
        ]}
      />
    </Stories>
  );
};`,"packages/storybook/src/stories/Stories/Stories.stories.tsx$$$RectStoriesExample":`function RectStoriesExample() {
  const { viewed, markViewed } = useViewed();

  return (
    <Stories
      defaultDuration={4000}
      groupTransition="slide"
      onGroupChange={markViewed}
    >
      <Stories.Preview
        shape="rect"
        title="Дайджест"
        image={asset('A', '#08c6c9', '#4f8ef7')}
        viewed={viewed[0]}
        slides={[
          { src: asset('Новость 1', '#08c6c9', '#4f8ef7') },
          { src: asset('Новость 2', '#4f8ef7', '#7b61ff') },
        ]}
      />
      <Stories.Preview
        shape="rect"
        title="Новые возможности"
        image={asset('B', '#00b3a4', '#08c6c9')}
        viewed={viewed[1]}
        slides={[
          {
            src: asset('Фича', '#00b3a4', '#08c6c9'),
            footer: (
              <Button
                size="s"
                view="accent"
                stretching="filled"
                as="a"
                href="#"
                text="Открыть"
              />
            ),
          },
        ]}
      />
    </Stories>
  );
};`,"packages/storybook/src/stories/Stories/Stories.stories.tsx$$$LoadingStoriesExample":`function LoadingStoriesExample() {
  const { viewed, markViewed } = useViewed();

  // loadingDelay + отключённая ховер-предзагрузка — чтобы разглядеть спиннер на подложке.
  return (
    <Stories
      loadingDelay={2000}
      preloadOnHover={false}
      onGroupChange={markViewed}
    >
      <Stories.Preview
        title="Загрузка"
        image={asset('⏳', '#08c6c9', '#99b0fe')}
        viewed={viewed[0]}
        slides={[
          { src: asset('Ассет 1', '#08c6c9', '#4f8ef7') },
          { src: asset('Ассет 2', '#7b61ff', '#99b0fe') },
        ]}
      />
    </Stories>
  );
};`,"packages/storybook/src/stories/Stories/Stories.stories.tsx$$$ErrorStateExample":`function ErrorStateExample() {
  return (
    <Stories>
      <Stories.Preview
        title="Битый ассет"
        image={asset('!', '#8a959d', '#30373c')}
        slides={[{ src: 'data:image/png;base64,not-a-valid-image' }]}
      />
    </Stories>
  );
};`,"packages/storybook/src/stories/Stories/Stories.stories.tsx$$$ErrorCustomExample":`function ErrorCustomExample() {
  // renderError — свой контент при ошибке загрузки (ctx.retry перезагружает ассет).
  // Отступы 28px по краям баннера добавляет сам компонент.
  return (
    <Stories
      renderError={({ retry }) => (
        <div
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: s.x4,
            alignItems: 'center',
            width: '100%',
            padding: s.x8,
            borderRadius: br.s,
            border: \`1px solid \${surfaceInfo}\`,
            color: surfaceInfo,
            backgroundColor: surfaceAccentMinor,
            textAlign: 'center',
          }}
        >
          <BodyS>Свой контент при ошибке загрузки</BodyS>
          <Button size="s" view="secondary" text="Повторить" onClick={retry} />
        </div>
      )}
    >
      <Stories.Preview
        title="Кастомная ошибка"
        image={asset('!', '#8a959d', '#30373c')}
        slides={[{ src: 'data:image/png;base64,broken-custom' }]}
      />
    </Stories>
  );
};`,"packages/storybook/src/stories/Stories/Stories.stories.tsx$$$ImperativeControlExample":`function ImperativeControlExample() {
  const ref = useRef<StoriesRef>(null);
  const { viewed, markViewed } = useViewed();
  const [state, setState] = useState({ open: false, group: 0, slide: 0 });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div
        style={{
          display: 'flex',
          gap: 8,
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Button
          size="s"
          text="Открыть группу 1"
          onClick={() => ref.current?.open(0)}
        />
        <Button
          size="s"
          text="Открыть группу 2"
          onClick={() => ref.current?.open(1)}
        />
        <span>
          {state.open
            ? \`Открыто: группа \${state.group}, слайд \${state.slide}\`
            : 'Закрыто'}
        </span>
      </div>
      <Stories
        ref={ref}
        onGroupChange={markViewed}
        onOpenChange={(open, groupMeta) =>
          setState((prev) => ({ ...prev, open, group: groupMeta.groupIndex }))
        }
        onSlideChange={(group, slide) =>
          setState((prev) => ({ ...prev, group, slide }))
        }
      >
        <Stories.Preview
          title="Группа 1"
          image={asset('1', '#08c6c9', '#99b0fe')}
          viewed={viewed[0]}
          slides={[
            { src: asset('1.1', '#08c6c9', '#4f8ef7') },
            { src: asset('1.2', '#4f8ef7', '#7b61ff') },
          ]}
        />
        <Stories.Preview
          title="Группа 2"
          image={asset('2', '#f7971e', '#ffd200')}
          viewed={viewed[1]}
          slides={[
            { src: asset('2.1', '#f7971e', '#ffd200') },
            { src: asset('2.2', '#f64f59', '#c471ed') },
            { src: asset('2.3', '#12c2e9', '#c471ed') },
          ]}
        />
      </Stories>
    </div>
  );
};`,"packages/storybook/src/stories/Stories/Stories.stories.tsx$$$InsideModalExample":`function InsideModalExample() {
  const { viewed, markViewed } = useViewed();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button
        size="s"
        text="Открыть модалку со сторями"
        onClick={() => setOpened(true)}
      />
      <ModalDF opened={opened} onClose={() => setOpened(false)}>
        <ModalDF.Main>
          <ModalDF.Header
            title="Сторис внутри модалки"
            subTitle="Клик по кружку открывает вьюер поверх модалки (zIndex выше оверлея ModalDF)"
          />
          <ModalDF.Content>
            {/* zIndex выше оверлея ModalDF, чтобы вьюер перекрыл модалку */}
            <Stories zIndex={10000} onGroupChange={markViewed}>
              <Stories.Preview
                title="Промо"
                image={asset('1', '#08c6c9', '#99b0fe')}
                viewed={viewed[0]}
                slides={[
                  { src: asset('Слайд 1', '#08c6c9', '#4f8ef7') },
                  { src: asset('Слайд 2', '#7b61ff', '#99b0fe') },
                ]}
              />
              <Stories.Preview
                title="Новости"
                image={asset('2', '#f7971e', '#ffd200')}
                viewed={viewed[1]}
                slides={[{ src: asset('Новость', '#f7971e', '#ffd200') }]}
              />
            </Stories>
          </ModalDF.Content>
        </ModalDF.Main>
      </ModalDF>
    </>
  );
};`,"packages/storybook/src/stories/Stories/Stories.stories.tsx$$$HiddenArrowsExample":`function HiddenArrowsExample() {
  const { viewed, markViewed } = useViewed();

  // arrows="never" — стрелки навигации скрыты; сегменты и группы листаются тапом/клавишами ←/→.
  return (
    <Stories arrows="never" onGroupChange={markViewed}>
      <Stories.Preview
        title="Группа 1"
        image={asset('1', '#08c6c9', '#99b0fe')}
        viewed={viewed[0]}
        slides={[{ src: asset('Слайд 1', '#08c6c9', '#4f8ef7') }]}
      />
      <Stories.Preview
        title="Группа 2"
        image={asset('2', '#f7971e', '#ffd200')}
        viewed={viewed[1]}
        slides={[{ src: asset('Слайд 2', '#f7971e', '#ffd200') }]}
      />
      <Stories.Preview
        title="Группа 3"
        image={asset('3', '#c471ed', '#f64f59')}
        viewed={viewed[2]}
        slides={[{ src: asset('Слайд 3', '#c471ed', '#f64f59') }]}
      />
    </Stories>
  );
};`,"packages/storybook/src/stories/Stories/Stories.stories.tsx$$$TitlesExample":`function TitlesExample() {
  const { viewed, markViewed } = useViewed();

  return (
    <Stories onGroupChange={markViewed}>
      <Stories.Preview
        title="Очень длинное название сторис, которое не помещается в две строки и уходит в троеточие с тултипом"
        image={asset('L', '#08c6c9', '#99b0fe')}
        viewed={viewed[0]}
        slides={[{ src: asset('Слайд', '#08c6c9', '#4f8ef7') }]}
      />
      <Stories.Preview
        title="Слева"
        titleProps={{ style: { textAlign: 'left' } }}
        image={asset('◀', '#f7971e', '#ffd200')}
        viewed={viewed[1]}
        slides={[{ src: asset('Слайд', '#f7971e', '#ffd200') }]}
      />
      <Stories.Preview
        title="Крупнее, не жирный, цветной"
        titleProps={{ variant: 'BodyS', bold: false, color: '#08c6c9' }}
        image={asset('●', '#7b61ff', '#99b0fe')}
        viewed={viewed[2]}
        slides={[{ src: asset('Слайд', '#7b61ff', '#99b0fe') }]}
      />
      <Stories.Preview
        title="Справа"
        titleProps={{ style: { textAlign: 'right' } }}
        image={asset('▶', '#c471ed', '#f64f59')}
        viewed={viewed[3]}
        slides={[{ src: asset('Слайд', '#c471ed', '#f64f59') }]}
      />
    </Stories>
  );
};`,"packages/storybook/src/stories/Stories/Stories.stories.tsx$$$CarouselWrappedExample":`function CarouselWrappedExample() {
  const { viewed, markViewed } = useViewed();
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleGroupChange = (groupIndex: number) => {
    markViewed(groupIndex);
    setCarouselIndex(groupIndex);
  };

  return (
    <Stories onGroupChange={handleGroupChange}>
      <Carousel
        index={carouselIndex}
        onChangeIndex={setCarouselIndex}
        scrollAlign="start"
        gap="16px"
        style={{ maxWidth: 360 }}
      >
        {CAROUSEL_PALETTE.map(([from, to], i) => {
          const n = i + 1;
          return (
            <CarouselItem key={n}>
              <Stories.Preview
                title={\`Превью \${n}\`}
                image={asset(String(n), from, to)}
                viewed={viewed[i]}
                slides={[
                  { src: asset(\`Слайд \${n}.1\`, from, to) },
                  { src: asset(\`Слайд \${n}.2\`, to, from) },
                ]}
              />
            </CarouselItem>
          );
        })}
      </Carousel>
    </Stories>
  );
};`,"packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx$$$AsyncCellDropdownExample":`function AsyncCellDropdownExample({ shouldFail }: { shouldFail: boolean }) {
  const [rows] = useState(createRows);
  const [menu, setMenu] = useState<AsyncMenuState>({
    status: 'idle',
    items: [],
    key: null,
    row: null,
  });
  // В демо-режиме ошибки: падаем на первой попытке, на «Обновить» отдаём успех
  const attempts = useRef(0);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Title' },
      { key: 'priority', name: 'Priority' },
      { key: 'developer', name: 'Developer' },
    ],
    [],
  );

  const load = useCallback(
    (row: Row, key: string) => {
      setMenu({ status: 'loading', items: [], key, row });
      const willFail = shouldFail && attempts.current === 0;
      attempts.current += 1;

      new Promise<{ value: string; label: string }[]>((resolve, reject) => {
        setTimeout(() => {
          if (willFail) {
            reject(new Error('network'));
            return;
          }
          resolve([
            { value: 'copy', label: \`Копировать «\${row.task}»\` },
            { value: 'edit', label: 'Редактировать' },
            { value: 'delete', label: 'Удалить' },
          ]);
        }, 1200);
      }).then(
        (items) =>
          setMenu((prev) =>
            prev.key === key ? { ...prev, status: 'success', items } : prev,
          ),
        () =>
          setMenu((prev) =>
            prev.key === key ? { ...prev, status: 'error', items: [] } : prev,
          ),
      );
    },
    [shouldFail],
  );

  return (
    <Table
      tableConfig={{
        onCellContextMenuDropDown: {
          type: 'dropdown',
          listWidth: '240px',
          onOpen: ({ row, column }) => load(row, \`\${row.id}:\${column.key}\`),
          getDropDownItems: ({ row, column }) => {
            if (menu.key !== \`\${row.id}:\${column.key}\`) return [];
            if (menu.status === 'loading') return SKELETON_ITEMS;
            return menu.items;
          },
          renderItem: menu.status === 'loading' ? SkeletonRow : undefined,
          beforeList:
            menu.status === 'error' && menu.row ? (
              <div style={{ width: 240, padding: 8 }}>
                <EmptyState
                  size="s"
                  variant="no-content"
                  title="Не удалось загрузить"
                  subtitle="Проверьте соединение и повторите"
                  buttons={[
                    {
                      type: 'button',
                      props: {
                        text: 'Обновить',
                        view: 'secondary',
                        onClick: () =>
                          menu.row && menu.key && load(menu.row, menu.key),
                      },
                    },
                  ]}
                />
              </div>
            ) : undefined,
          onItemSelect: (item, context) => {
            if (String(item.value).startsWith('__skeleton')) return;
            context.selectCell();
            // eslint-disable-next-line no-alert
            alert(\`Выбрано: \${item.label}\`);
          },
        },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
};`,"packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatar/CanvasAvatar.stories.tsx$$$AvatarContentAndSizesExample":`function AvatarContentAndSizesExample() {
  const rows = ['s', 'm', 'l', 'xxl'].map((size, id) => ({
    id,
    size: size as AvatarSize,
  }));
  const columns: ColumnConfig<(typeof rows)[number]>[] = [
    {
      key: 'size',
      name: 'Размер',
      width: 110,
      renderCell: ({ row }) => <Canvas.Text>{row.size}</Canvas.Text>,
    },
    ...[
      { key: 'photo', name: 'Фото', url: avatarItems[0]!.url },
      { key: 'initials', name: 'Инициалы' },
      {
        key: 'custom',
        name: 'customText',
        customText: 'AI',
        url: avatarItems[0]!.url,
      },
      {
        key: 'broken',
        name: 'Ошибка первой загрузки',
        url: '/canvas-images/missing.png',
      },
    ].map(({ key, name, ...content }) => ({
      key,
      name,
      width: 150,
      copyData: 'Анна Иванова',
      renderCell: ({ row }: { row: (typeof rows)[number] }) => (
        <Canvas.Container padding={8}>
          <Canvas.Avatar
            name="Анна Иванова"
            size={row.size}
            {...content}
            tooltip="Анна Иванова"
          />
        </Canvas.Container>
      ),
    })),
  ];
  return (
    <TableCanvas
      rows={rows}
      columnConfig={columns}
      tableConfig={{ rowHeight: 104, containerStyle: { height: '490px' } }}
    />
  );
};`,"packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatarGroup/CanvasAvatarGroup.stories.tsx$$$VirtualTable":`function VirtualTable() {
  const rows = useMemo(() => {
    const cases = [
      { label: '5 → 3 +2', items: avatarItems, total: 5, visible: 3 },
      {
        label: '2 загружено из 5',
        items: avatarItems.slice(0, 2),
        total: 5,
        visible: 3,
      },
      { label: 'Пустая группа', items: [], total: 0, visible: 3 },
      { label: 'Известен только total', items: [], total: 5, visible: 3 },
      { label: 'visibleCount=0', items: avatarItems, total: 5, visible: 0 },
    ];
    return Array.from({ length: 700 }, (_, id) => {
      const scenario = cases[id % cases.length]!;
      return {
        ...scenario,
        id,
        label: \`Строка \${id + 1}: \${scenario.label}\`,
        items: scenario.items.map((item, index) => ({
          ...item,
          url: \`/canvas-images/virtual/\${index}?row=\${id}\`,
        })),
      };
    });
  }, []);
  const columns = useMemo<ColumnConfig<(typeof rows)[number]>[]>(
    () => [
      { key: 'label', name: 'Строка и сценарий', width: 280 },
      ...[200, 60].map<ColumnConfig<(typeof rows)[number]>>((width) => ({
        key: \`team-\${width}\`,
        name: width === 60 ? 'Узко' : 'Группа',
        width,
        copyData: (row) => avatarCopyText(row.items, row.total),
        renderCell: ({ row }) => (
          <Canvas.Container padding={8}>
            <Canvas.AvatarGroup
              items={row.items}
              totalCount={row.total}
              visibleCount={row.visible}
            />
          </Canvas.Container>
        ),
      })),
    ],
    [],
  );
  return (
    <TableCanvas
      rows={rows}
      columnConfig={columns}
      tableConfig={{ rowHeight: 44, containerStyle: { height: '360px' } }}
    />
  );
};`,"packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatarGroup/CanvasAvatarGroup.stories.tsx$$$AvatarGroupExample":`function AvatarGroupExample() {
  return (
    <>
      <p>
        700 строк с локальными PNG-фотографиями и разным количеством участников
        в обычной и узкой колонках. У каждой строки свои URL фотографий —
        прокрутите таблицу, чтобы увидеть загрузку новых изображений.
      </p>
      <VirtualTable />
    </>
  );
};`,"packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasEmbedIconButton/CanvasEmbedIconButton.stories.tsx$$$Example":`function Example(args: unknown) {
  const { disabled } = args as { disabled: boolean };

  const columnConfig = useMemo<readonly ColumnConfig<ViewRow>[]>(
    () =>
      SIZES.map((size) => ({
        key: size,
        name: size,
        width: 80,
        renderCell: ({ row }) => (
          <Canvas.Container direction="row" alignItems="center" padding={8}>
            <Canvas.EmbedIconButton
              icon={<IconSearch />}
              view={row.view}
              buttonSize={size}
              disabled={disabled}
            />
          </Canvas.Container>
        ),
      })),
    [disabled],
  );

  return (
    <TableCanvas
      tableConfig={{ containerStyle: { height: '800px' }, rowHeight: 80 }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
};`,"packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasIconButton/CanvasIconButton.stories.tsx$$$Example":`function Example(args: unknown) {
  const { disabled } = args as { disabled: boolean };

  const columnConfig = useMemo<readonly ColumnConfig<ViewRow>[]>(
    () =>
      SIZES.map((size) => ({
        key: size,
        name: size,
        width: 80,
        renderCell: ({ row }) => (
          <Canvas.Container direction="row" alignItems="center" padding={8}>
            <Canvas.IconButton
              icon={<IconSearch />}
              view={row.view}
              buttonSize={size}
              disabled={disabled}
            />
          </Canvas.Container>
        ),
      })),
    [disabled],
  );

  return (
    <TableCanvas
      tableConfig={{ containerStyle: { height: '800px' }, rowHeight: 80 }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
};`,"packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasImage/CanvasImage.stories.tsx$$$ImageFitsExample":`function ImageFitsExample() {
  const rows = [
    {
      id: 0,
      image: 'Горы',
      src: wideImage,
    },
  ];
  const fits: ImageFit[] = ['cover', 'contain', 'fill'];
  const columns: ColumnConfig<(typeof rows)[number]>[] = fits.map((fit) => ({
    key: fit,
    name: fit,
    width: 170,
    copyData: (row) => row.image,
    renderCell: ({ row, theme }) => (
      <Canvas.Container padding={8}>
        <Canvas.Container
          position="relative"
          style={{ width: 88, height: 88 }}
          tooltip={\`\${row.image}: \${fit}\`}
        >
          <Canvas.Image
            src={row.src}
            fit={fit}
            style={{ width: 88, height: 88 }}
          />
          <Canvas.Rect
            position="absolute"
            left={0}
            top={0}
            style={{ width: 88, height: 88 }}
            borderColor={theme.tokens.outlineAccent}
            borderWidth={1}
            zIndex={1}
          />
        </Canvas.Container>
      </Canvas.Container>
    ),
  }));
  return (
    <TableCanvas
      rows={rows}
      columnConfig={columns}
      tableConfig={{ rowHeight: 104, containerStyle: { height: '160px' } }}
    />
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx$$$BottomSheetExample":`function BottomSheetExample() {
  const [height, setHeight] = useState<string | number>(32);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const contentId = useId();
  const rows = Array.from({ length: 40 }, (_, id) => ({
    id,
    report: \`Отчёт \${id + 1}\`,
  }));
  const expanded = height !== 32;
  const messages = Array.from(
    { length: 10 },
    (_, id) => \`Сообщение \${id + 1}: данные отчёта обновлены.\`,
  );

  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <Button size="xs" view="secondary" onClick={() => setHeight(220)}>
          220px
        </Button>
        <Button size="xs" view="secondary" onClick={() => setHeight('35%')}>
          35%
        </Button>
        <Button size="xs" view="secondary" onClick={() => setHeight(1000)}>
          Больше доступного места
        </Button>
      </div>
      <TableCanvas
        rows={rows.slice((page - 1) * perPage, page * perPage)}
        columnConfig={[
          { key: 'id', name: 'ID', width: 100 },
          { key: 'report', name: 'Отчёт', width: 360 },
        ]}
        tableConfig={{
          containerStyle: { height: 480 },
          pagination: {
            value: page,
            perPage,
            count: rows.length,
            onChangePageValue(value, scrollToTop) {
              setPage(value ?? 1);
              scrollToTop();
            },
            onChange(value, pageSize, scrollToTop) {
              setPage(
                pageSize !== undefined && pageSize !== perPage ? 1 : value ?? 1,
              );
              setPerPage(pageSize ?? perPage);
              scrollToTop();
            },
          },
          bottomSheetConfig: {
            height,
            minHeight: 32,
            content: (
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    minHeight: 30,
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  <IconButton
                    size="xxs"
                    view="clear"
                    aria-label={expanded ? 'Закрыть лог' : 'Открыть лог'}
                    aria-expanded={expanded}
                    aria-controls={contentId}
                    style={{ flexShrink: 0 }}
                    onClick={() => setHeight(expanded ? 32 : 220)}
                  >
                    {expanded ? (
                      <IconChevronDown size="xs" />
                    ) : (
                      <IconChevronUp size="xs" />
                    )}
                  </IconButton>
                  <BodyS
                    style={{
                      minWidth: 0,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    Журнал событий
                  </BodyS>
                </div>
                <div
                  id={contentId}
                  aria-hidden={!expanded}
                  {...(!expanded ? { inert: '' } : {})}
                  style={{ overflow: 'auto', minHeight: 0, padding: '0 16px' }}
                >
                  {messages.map((message) => (
                    <BodyS key={message} style={{ padding: '12px 0' }}>
                      {message}
                    </BodyS>
                  ))}
                </div>
              </div>
            ),
          },
        }}
      />
    </div>
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.data.ts$$$createBottomSheetRows":`function createBottomSheetRows(count = 100): BottomSheetRow[] {
  const priorities = ['Critical', 'High', 'Medium', 'Low'];
  const issueTypes = ['Bug', 'Improvement', 'Epic', 'Story'];
  const developers = ['Анна', 'Борис', 'Виктор', 'Дарья', 'Елена'];

  return Array.from({ length: Math.max(0, Math.floor(count)) }, (_, index) => {
    const id = index + 1;
    const priority = priorities[index % priorities.length] ?? 'Medium';
    const issueType =
      issueTypes[Math.floor(index / 4) % issueTypes.length] ?? 'Story';
    return {
      id,
      task: \`Задача \${id}: подготовить отчёт и проверить данные\`,
      priority,
      issueType,
      developer: developers[index % developers.length] ?? 'Анна',
      complete: (id * 17) % 101,
      subRows: Array.from({ length: 2 }, (_child, childIndex) => ({
        id: \`\${id}.\${childIndex + 1}\`,
        task: \`Подзадача \${id}.\${childIndex + 1}: \${
          childIndex === 0 ? 'реализация' : 'проверка'
        }\`,
        priority,
        issueType,
        developer:
          developers[(index + childIndex + 1) % developers.length] ?? 'Анна',
        complete: (id * 17 + (childIndex + 1) * 13) % 101,
      })),
    };
  });
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.data.ts$$$cloneBottomSheetRows":`function cloneBottomSheetRows(
  rows: readonly BottomSheetRow[],
): BottomSheetRow[] {
  return rows.map((row) => ({
    ...row,
    ...(row.subRows ? { subRows: cloneBottomSheetRows(row.subRows) } : {}),
  }));
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.data.ts$$$prepareBottomSheetRows":`function prepareBottomSheetRows(
  rows: readonly BottomSheetRow[],
  query: string,
  filters: BottomSheetFilters,
  sortColumns: readonly SortColumn[],
  tree = false,
): BottomSheetRow[] {
  const search = query.trim().toLocaleLowerCase('ru');
  const globalFilter = filters.globalFilter.trim().toLocaleLowerCase('ru');
  const developer = filters.developer.trim().toLocaleLowerCase('ru');
  const minimumComplete = Number(filters.complete) || 0;
  const fields = [
    'id',
    'task',
    'priority',
    'issueType',
    'developer',
    'complete',
  ] as const;

  function matches(row: BottomSheetRow): boolean {
    const text = fields
      .map((key) => String(row[key]))
      .join(' ')
      .toLocaleLowerCase('ru');
    return (
      (!search || text.includes(search)) &&
      (!globalFilter || text.includes(globalFilter)) &&
      (!filters.priority ||
        filters.priority === 'All' ||
        row.priority === filters.priority) &&
      (!filters.issueType.length ||
        filters.issueType.includes(row.issueType)) &&
      (!developer ||
        row.developer.toLocaleLowerCase('ru').startsWith(developer)) &&
      row.complete >= minimumComplete
    );
  }

  function compare(left: BottomSheetRow, right: BottomSheetRow): number {
    return sortColumns.reduce((result, sort) => {
      if (result || !fields.some((key) => key === sort.columnKey))
        return result;
      const key = sort.columnKey as (typeof fields)[number];
      const difference =
        key === 'complete'
          ? left.complete - right.complete
          : String(left[key]).localeCompare(String(right[key]), 'ru', {
              numeric: key === 'id',
            });
      return sort.direction === 'DESC' ? -difference : difference;
    }, 0);
  }

  function visit(siblings: readonly BottomSheetRow[]): BottomSheetRow[] {
    return siblings
      .reduce<BottomSheetRow[]>((result, row) => {
        const children = tree && row.subRows ? visit(row.subRows) : undefined;
        if (matches(row) || children?.length) {
          const { subRows: _subRows, ...values } = row;
          result.push({
            ...values,
            ...(children?.length ? { subRows: children } : {}),
          });
        }
        return result;
      }, [])
      .sort(compare);
  }

  return visit(rows);
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.data.ts$$$applyBottomSheetRowChanges":`function applyBottomSheetRowChanges(
  rows: readonly BottomSheetRow[],
  changedRows: readonly BottomSheetRow[],
): BottomSheetRow[] {
  const changes = new Map<string, BottomSheetRow>();

  function collect(siblings: readonly BottomSheetRow[]): void {
    siblings.forEach((row) => {
      changes.set(String(row.id), row);
      if (row.subRows) collect(row.subRows);
    });
  }

  function visit(siblings: readonly BottomSheetRow[]): BottomSheetRow[] {
    return siblings.map((row) => {
      const change = changes.get(String(row.id));
      return {
        ...row,
        ...(change
          ? {
              task: change.task,
              priority: change.priority,
              issueType: change.issueType,
              developer: change.developer,
              complete: change.complete,
            }
          : {}),
        ...(row.subRows ? { subRows: visit(row.subRows) } : {}),
      };
    });
  }

  collect(changedRows);
  return visit(rows);
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.data.ts$$$summarizeBottomSheetRows":`function summarizeBottomSheetRows(
  rows: readonly BottomSheetRow[],
  tree = false,
): BottomSheetSummary[] {
  const allRows: BottomSheetRow[] = [];

  function collect(siblings: readonly BottomSheetRow[]): void {
    siblings.forEach((row) => {
      allRows.push(row);
      if (tree && row.subRows) collect(row.subRows);
    });
  }

  collect(rows);
  const complete = allRows.reduce((sum, row) => sum + row.complete, 0);
  const average = allRows.length ? complete / allRows.length : 0;
  const developers = new Set(allRows.map((row) => row.developer));
  return [
    {
      type: 'top',
      values: [
        { columnId: 'id', value: String(allRows.length) },
        { columnId: 'task', value: 'Всего строк в выборке' },
        {
          columnId: 'priority',
          value: \`Critical: \${
            allRows.filter((row) => row.priority === 'Critical').length
          }\`,
        },
        {
          columnId: 'issueType',
          value: \`Bug: \${
            allRows.filter((row) => row.issueType === 'Bug').length
          }\`,
        },
        { columnId: 'developer', value: \`Исполнителей: \${developers.size}\` },
        { columnId: 'complete', value: \`Сумма: \${complete}\` },
      ],
    },
    {
      type: 'bottom',
      values: [
        { columnId: 'task', value: 'Средняя готовность всей выборки' },
        { columnId: 'complete', value: \`\${average.toFixed(1)}%\` },
      ],
    },
  ];
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.data.ts$$$selectBottomSheetRows":`function selectBottomSheetRows(
  rows: readonly BottomSheetRow[],
  mode: BottomSheetDataMode,
  page = 1,
  pageSize = 20,
  loadedCount = 20,
): BottomSheetRow[] {
  if (mode === 'all') return [...rows];
  if (mode === 'infinity')
    return rows.slice(0, Math.max(0, Math.floor(loadedCount)));
  const size = Math.max(1, Math.floor(pageSize));
  const lastPage = Math.max(1, Math.ceil(rows.length / size));
  const currentPage = Math.min(lastPage, Math.max(1, Math.floor(page)));
  return rows.slice((currentPage - 1) * size, currentPage * size);
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx$$$AllFeaturesChoice":`function AllFeaturesChoice(props: AllFeaturesChoiceProps) {
  const { label, value, items, disabled, onChange } = props;
  const id = useId();
  return (
    <label
      htmlFor={id}
      style={{ display: 'flex', flexDirection: 'column', gap: 4 }}
    >
      <BodyXS>{label}</BodyXS>
      <select
        id={id}
        aria-label={label}
        value={value}
        disabled={disabled}
        onChange={(event) => onChange(event.target.value)}
        style={{
          font: 'inherit',
          padding: '7px 10px',
          borderRadius: 6,
          border: \`1px solid \${outlineSolidPrimary}\`,
          background: 'transparent',
          color: 'inherit',
        }}
      >
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </label>
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx$$$AllFeaturesToggle":`function AllFeaturesToggle(props: AllFeaturesToggleProps) {
  const { label, checked, onChange } = props;
  return (
    <Switch
      label={label}
      checked={checked}
      onChange={(event) => onChange(event.target.checked)}
    />
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx$$$AllFeaturesSettingsPanel":`function AllFeaturesSettingsPanel(props: AllFeaturesSettingsPanelProps) {
  const { settings, onChange: update } = props;
  return (
    <details style={{ marginBottom: 12 }}>
      <summary style={{ cursor: 'pointer', padding: '8px 0' }}>
        Настройки всех возможностей
      </summary>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 16,
          padding: '12px 0',
        }}
      >
        <fieldset
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            borderColor: outlineSolidPrimary,
          }}
        >
          <legend>Выделение и поиск</legend>
          <AllFeaturesChoice
            label="Режим выделения"
            value={settings.selectionMode}
            items={['cell', 'range-cell', 'multi-range-cell', 'disabled'].map(
              (value) => ({ value, label: value }),
            )}
            onChange={(selectionMode) =>
              update({ selectionMode: selectionMode as CellsSelectionMode })
            }
          />
          <AllFeaturesToggle
            label="Выделение строк и колонок диапазоном"
            checked={settings.axisSelection}
            onChange={(axisSelection) => update({ axisSelection })}
          />
          <AllFeaturesToggle
            label="Подсветка активной строки"
            checked={settings.highlight}
            onChange={(highlight) => update({ highlight })}
          />
          <AllFeaturesToggle
            label="Подсветка при наведении"
            checked={settings.hover}
            onChange={(hover) => update({ hover })}
          />
          <AllFeaturesToggle
            label="Поиск при вводе"
            checked={settings.searchOnType}
            onChange={(searchOnType) => update({ searchOnType })}
          />
          <AllFeaturesToggle
            label="Подсказки поиска"
            checked={settings.autocomplete}
            onChange={(autocomplete) => update({ autocomplete })}
          />
        </fieldset>
        <fieldset
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            borderColor: outlineSolidPrimary,
          }}
        >
          <legend>Колонки и ячейки</legend>
          <AllFeaturesToggle
            label="Групповая шапка"
            checked={settings.groupedHeaders}
            onChange={(groupedHeaders) => update({ groupedHeaders })}
          />
          <AllFeaturesToggle
            label="Объединение пустых ячеек шапки"
            checked={settings.squash}
            onChange={(squash) => update({ squash })}
          />
          <AllFeaturesChoice
            label="Объединение ячеек тела"
            value={settings.merge}
            items={[
              { value: 'none', label: 'Без объединения' },
              { value: 'values', label: 'По одинаковому приоритету' },
              { value: 'region', label: 'Регион первых двух типов задач' },
            ]}
            onChange={(merge) =>
              update({ merge: merge as AllFeaturesSettings['merge'] })
            }
          />
          <AllFeaturesToggle
            label="Canvas-элементы в ячейках"
            checked={settings.renderers}
            onChange={(renderers) => update({ renderers })}
          />
          <AllFeaturesToggle
            label="Числовое форматирование"
            checked={settings.formats}
            onChange={(formats) => update({ formats })}
          />
          <AllFeaturesToggle
            label="Тултипы"
            checked={settings.tooltips}
            onChange={(tooltips) => update({ tooltips })}
          />
          <AllFeaturesToggle
            label="Превью readonly-ячеек"
            checked={settings.preview}
            onChange={(preview) => update({ preview })}
          />
        </fieldset>
        <fieldset
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            borderColor: outlineSolidPrimary,
          }}
        >
          <legend>Буфер обмена и протяжка</legend>
          <AllFeaturesToggle
            label="Copy / paste / fill"
            checked={settings.transferEnabled}
            onChange={(transferEnabled) => update({ transferEnabled })}
          />
          <AllFeaturesChoice
            label="Readonly-ячейки"
            value={settings.pasteReadonly}
            items={[
              { value: 'skip', label: 'Пропустить' },
              { value: 'abort', label: 'Отменить операцию' },
            ]}
            onChange={(pasteReadonly) =>
              update({
                pasteReadonly:
                  pasteReadonly as AllFeaturesSettings['pasteReadonly'],
              })
            }
          />
          <AllFeaturesChoice
            label="Вставка за границами"
            value={settings.pasteOverflow}
            items={[
              { value: 'truncate', label: 'Обрезать' },
              { value: 'abort', label: 'Отменить операцию' },
            ]}
            onChange={(pasteOverflow) =>
              update({
                pasteOverflow:
                  pasteOverflow as AllFeaturesSettings['pasteOverflow'],
              })
            }
          />
          <AllFeaturesChoice
            label="Проверка значений"
            value={settings.pasteValidation}
            items={[
              { value: 'type-check', label: 'Проверять тип' },
              { value: 'none', label: 'Без проверки' },
            ]}
            onChange={(pasteValidation) =>
              update({
                pasteValidation:
                  pasteValidation as AllFeaturesSettings['pasteValidation'],
              })
            }
          />
          <AllFeaturesToggle
            label="Тиражировать вставку на выделение"
            checked={settings.pasteBroadcast}
            onChange={(pasteBroadcast) => update({ pasteBroadcast })}
          />
          <AllFeaturesToggle
            label="Протяжка ячеек"
            checked={settings.fillEnabled}
            onChange={(fillEnabled) => update({ fillEnabled })}
          />
          <AllFeaturesChoice
            label="Направления протяжки"
            value={settings.fillDirections}
            items={['orthogonal', 'horizontal', 'vertical', 'any'].map(
              (value) => ({ value, label: value }),
            )}
            onChange={(fillDirections) =>
              update({
                fillDirections:
                  fillDirections as AllFeaturesSettings['fillDirections'],
              })
            }
          />
          <AllFeaturesToggle
            label="Вставка и протяжка в дочерние строки"
            checked={settings.allowSubRows}
            onChange={(allowSubRows) => update({ allowSubRows })}
          />
        </fieldset>
        <fieldset
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            borderColor: outlineSolidPrimary,
          }}
        >
          <legend>Размеры и оформление</legend>
          <AllFeaturesToggle
            label="Переменная высота строк"
            checked={settings.variableHeight}
            onChange={(variableHeight) => update({ variableHeight })}
          />
          <AllFeaturesChoice
            label="Высота ряда шапки"
            value={settings.headerHeight}
            items={[
              { value: '33', label: '33 px' },
              { value: '48', label: '48 px' },
            ]}
            onChange={(headerHeight) =>
              update({
                headerHeight:
                  headerHeight as AllFeaturesSettings['headerHeight'],
              })
            }
          />
          <AllFeaturesToggle
            label="Открепить шапку"
            checked={settings.unstickyHeader}
            onChange={(unstickyHeader) => update({ unstickyHeader })}
          />
          <AllFeaturesChoice
            label="Линии сетки"
            value={settings.borders}
            items={[
              { value: 'all', label: 'Все линии' },
              { value: 'horizontal', label: 'Только горизонтальные' },
              { value: 'none', label: 'Без линий' },
              { value: 'custom', label: 'По строке, колонке и ячейке' },
            ]}
            onChange={(borders) =>
              update({ borders: borders as AllFeaturesSettings['borders'] })
            }
          />
          <AllFeaturesToggle
            label="Выделить ячейки с высоким приоритетом"
            checked={settings.theme}
            onChange={(theme) => update({ theme })}
          />
          <AllFeaturesToggle
            label="Блок управления"
            checked={settings.controlBlockShow}
            onChange={(controlBlockShow) => update({ controlBlockShow })}
          />
          <AllFeaturesChoice
            label="Размер блока управления"
            value={settings.controlBlockSize}
            items={['m', 's', 'xs'].map((value) => ({ value, label: value }))}
            onChange={(controlBlockSize) =>
              update({ controlBlockSize: controlBlockSize as ControlBlockSize })
            }
          />
          <AllFeaturesToggle
            label="Адаптивное сжатие"
            checked={settings.adaptive}
            onChange={(adaptive) => update({ adaptive })}
          />
          <AllFeaturesChoice
            label="Кнопка сворачивания"
            value={settings.placement}
            items={[
              { value: 'inside', label: 'В блоке управления' },
              { value: 'above', label: 'Над таблицей' },
            ]}
            onChange={(placement) =>
              update({
                placement: placement as AllFeaturesSettings['placement'],
              })
            }
          />
        </fieldset>
      </div>
    </details>
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx$$$AllFeaturesLog":`function AllFeaturesLog(props: AllFeaturesLogProps) {
  const { expanded, events, onToggle, onClear } = props;
  const contentId = useId();
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          minHeight: 30,
          flexShrink: 0,
          padding: '0 8px',
          borderBottom: \`1px solid \${outlineSolidPrimary}\`,
          whiteSpace: 'nowrap',
        }}
      >
        <IconButton
          size="xxs"
          view="clear"
          aria-label={expanded ? 'Закрыть лог' : 'Открыть лог'}
          aria-expanded={expanded}
          aria-controls={contentId}
          onClick={onToggle}
        >
          {expanded ? (
            <IconChevronDown size="xs" />
          ) : (
            <IconChevronUp size="xs" />
          )}
        </IconButton>
        <BodyS
          style={{
            flex: 1,
            minWidth: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          Журнал событий ({events.length})
        </BodyS>
        <Button size="xxs" view="clear" onClick={onClear}>
          Очистить журнал
        </Button>
      </div>
      <div
        id={contentId}
        aria-hidden={!expanded}
        {...(!expanded ? { inert: '' } : {})}
        style={{ overflow: 'auto', minHeight: 0 }}
      >
        {events.map((event) => (
          <div
            key={event.id}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 8,
              padding: '12px 16px',
              borderBottom: \`1px solid \${outlineSolidPrimary}\`,
            }}
          >
            <IconInfoCircleOutline
              size="s"
              color={event.level === 'error' ? textNegative : textSecondary}
            />
            <BodyS>{event.message}</BodyS>
          </div>
        ))}
      </div>
    </div>
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx$$$AllFeaturesNavigation":`function AllFeaturesNavigation(props: AllFeaturesNavigationProps) {
  const { rows, onSelect } = props;
  const [query, setQuery] = useState('');
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 16 }}
    >
      <TextFieldSearch
        size="xs"
        aria-label="Поиск отчёта"
        placeholder="Поиск отчёта"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onClear={() => setQuery('')}
      />
      <BodyXS style={{ color: textSecondary }}>Последние отчёты</BodyXS>
      {rows
        .filter((row) => row.task.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 8)
        .map((row) => (
          <Button
            key={row.id}
            view="clear"
            size="xs"
            style={{ justifyContent: 'flex-start' }}
            onClick={() => onSelect(row)}
          >
            {row.task}
          </Button>
        ))}
    </div>
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx$$$createAllFeaturesSettings":`function createAllFeaturesSettings(options: AllFeaturesExampleProps) {
  const settings: AllFeaturesSettings = {
    structure: 'flat',
    dataMode: 'pagination',
    selectionMode: 'range-cell',
    axisSelection: true,
    highlight: true,
    hover: true,
    groupedHeaders: false,
    squash: true,
    merge: 'none',
    renderers: true,
    tooltips: true,
    preview: true,
    formats: true,
    theme: false,
    borders: 'all',
    variableHeight: false,
    headerHeight: '33',
    unstickyHeader: false,
    controlBlockShow: true,
    controlBlockSize: options.controlBlockSize ?? 'm',
    adaptive: options.adaptive ?? true,
    placement: options.placement ?? 'inside',
    searchOnType: true,
    autocomplete: false,
    transferEnabled: true,
    pasteReadonly: 'skip',
    pasteOverflow: 'truncate',
    pasteValidation: 'type-check',
    pasteBroadcast: false,
    fillEnabled: true,
    fillDirections: 'orthogonal',
    allowSubRows: true,
  };
  return settings;
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx$$$createAllFeaturesSelection":`function createAllFeaturesSelection(): GridSelection {
  return { rows: CompactSelection.empty(), columns: CompactSelection.empty() };
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx$$$getBottomSheetRowId":`function getBottomSheetRowId(row: BottomSheetRow) {
  return row.id;
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx$$$getBottomSheetChildren":`function getBottomSheetChildren(row: BottomSheetRow) {
  return row.subRows;
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx$$$findBottomSheetRow":`function findBottomSheetRow(
  rows: BottomSheetRow[],
  id: string | number,
): BottomSheetRow | undefined {
  if (!rows.length) return undefined;
  const direct = rows.find((row) => row.id === id);
  return (
    direct ??
    findBottomSheetRow(
      rows.flatMap((row) => row.subRows ?? []),
      id,
    )
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx$$$AllFeaturesExample":`function AllFeaturesExample(options: AllFeaturesExampleProps = {}) {
  const [masterRows, setMasterRows] = useState(createBottomSheetRows);
  const savedRows = useRef(masterRows);
  const [settings, setSettings] = useState(() =>
    createAllFeaturesSettings(options),
  );
  const [filters, setFilters] = useState<BottomSheetFilters>({
    priority: 'All',
    issueType: [],
    developer: '',
    complete: '',
    globalFilter: '',
  });
  const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [loadedCount, setLoadedCount] = useState(20);
  const [loadingMore, setLoadingMore] = useState(false);
  const loadTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [groupBy, setGroupBy] = useState<string[]>(['priority', 'issueType']);
  const [expandedIds, setExpandedIds] = useState<Set<string | number>>(
    new Set(),
  );
  const [selectedRows, setSelectedRows] = useState<
    ReadonlySet<string | number>
  >(new Set([1, 2]));
  const [cellsSelection, setCellsSelection] = useState(
    createAllFeaturesSelection,
  );
  const [editMode, setEditMode] = useState(false);
  const [selectedRow, setSelectedRow] = useState<BottomSheetRow | null>(null);
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(false);
  const [leftTab, setLeftTab] = useState<string | null>('reports');
  const [rightTab, setRightTab] = useState<string | null>(null);
  const [leftWidth, setLeftWidth] = useState<string | number>(300);
  const [rightWidth, setRightWidth] = useState<string | number>(400);
  const [height, setHeight] = useState<string | number>(
    options.initialLogHeight ?? 32,
  );
  const [sheetEnabled, setSheetEnabled] = useState(true);
  const [showReports, setShowReports] = useState(true);
  const [collapsed, setCollapsed] = useState(options.initialCollapsed ?? false);
  const [containerHeight, setContainerHeight] = useState(620);
  const [containerWidth, setContainerWidth] = useState('100%');
  const [status, setStatus] = useState<
    'normal' | 'skeleton' | 'overlay' | 'error' | 'empty'
  >(() => {
    if (options.initialError) return 'error';
    if (options.initialEmpty) return 'empty';
    return 'normal';
  });
  const [favorite, setFavorite] = useState(true);
  const [customStatus, setCustomStatus] = useState('active');
  const nextEventId = useRef(3);
  const [events, setEvents] = useState<AllFeaturesEvent[]>([
    { id: 0, message: 'Данные обновлены', level: 'info' },
    { id: 1, message: 'Отчёт сохранён', level: 'info' },
    {
      id: 2,
      message:
        'Выберите строки, измените ячейки или откройте контекстное меню: события появятся здесь.',
      level: 'info',
    },
  ]);
  const log = useCallback(
    (message: string, level: AllFeaturesEvent['level'] = 'info') => {
      const event = { id: nextEventId.current, message, level };
      nextEventId.current += 1;
      setEvents((previous) => [event, ...previous].slice(0, 100));
    },
    [],
  );
  const isGrouping = settings.structure.startsWith('group-');
  const isTree = settings.structure.startsWith('subrows-');
  const canEdit =
    settings.structure !== 'group-tree' &&
    settings.structure !== 'subrows-merged';
  const effectiveDataMode = isGrouping ? 'all' : settings.dataMode;
  const filteredRows = useMemo(
    () =>
      prepareBottomSheetRows(masterRows, query, filters, sortColumns, isTree),
    [masterRows, query, filters, sortColumns, isTree],
  );
  const effectivePage = Math.max(
    1,
    Math.min(page, Math.ceil(filteredRows.length / pageSize) || 1),
  );
  const visibleRows = useMemo(
    () =>
      selectBottomSheetRows(
        filteredRows,
        effectiveDataMode,
        effectivePage,
        pageSize,
        loadedCount,
      ),
    [filteredRows, effectiveDataMode, effectivePage, pageSize, loadedCount],
  );
  const summaryRows = useMemo(
    () => summarizeBottomSheetRows(filteredRows, isTree),
    [filteredRows, isTree],
  );
  const rowsForTable = status === 'empty' ? [] : visibleRows;
  const selectedDetails = selectedRow
    ? findBottomSheetRow(masterRows, selectedRow.id) ?? selectedRow
    : null;
  const loadMore = useCallback(() => {
    if (
      loadTimer.current ||
      effectiveDataMode !== 'infinity' ||
      loadedCount >= filteredRows.length
    )
      return;
    setLoadingMore(true);
    log('Начата подгрузка следующей порции');
    loadTimer.current = setTimeout(() => {
      setLoadedCount((value) => value + 20);
      setLoadingMore(false);
      loadTimer.current = null;
      log('Подгружено ещё 20 верхних строк');
    }, 500);
  }, [effectiveDataMode, loadedCount, filteredRows.length, log]);
  const onLeftTabChange = useCallback(
    (id: string | null) => log(\`Левая панель: \${id ?? 'закрыта'}\`),
    [log],
  );
  const onRightTabChange = useCallback(
    (id: string | null) => log(\`Правая панель: \${id ?? 'закрыта'}\`),
    [log],
  );
  const onHighlightedRowChange = useCallback(
    (info: { row: BottomSheetRow | undefined; index: number | undefined }) => {
      setSelectedRow(info.row ?? null);
      if (info.row) log(\`Активная строка: \${info.row.task ?? 'группа'}\`);
    },
    [log],
  );
  const updateSettings = useCallback(
    (patch: Partial<AllFeaturesSettings>) => {
      setSettings((previous) => ({ ...previous, ...patch }));
      if (patch.structure || patch.dataMode) {
        setPage(1);
        setLoadedCount(20);
        setExpandedIds(new Set());
        setCellsSelection(createAllFeaturesSelection());
        if (loadTimer.current) clearTimeout(loadTimer.current);
        loadTimer.current = null;
        setLoadingMore(false);
      }
      log(\`Настройки изменены: \${Object.keys(patch).join(', ')}\`);
    },
    [log],
  );
  useEffect(() => {
    setPage(1);
    setLoadedCount(20);
    if (loadTimer.current) clearTimeout(loadTimer.current);
    loadTimer.current = null;
    setLoadingMore(false);
  }, [query, filters, sortColumns]);
  useEffect(
    () => () => {
      if (loadTimer.current) clearTimeout(loadTimer.current);
    },
    [],
  );
  useEffect(() => {
    if (page !== effectivePage) setPage(effectivePage);
  }, [page, effectivePage]);
  const previousControls = useRef({
    filters,
    sortColumns,
    selectedRows,
    cellsSelection,
    collapsed,
  });
  useEffect(() => {
    const previous = previousControls.current;
    if (previous.collapsed !== collapsed)
      log(\`Таблица \${collapsed ? 'свёрнута' : 'развёрнута'}\`);
    if (previous.filters !== filters)
      log(\`Фильтры: \${JSON.stringify(filters)}\`);
    if (previous.sortColumns !== sortColumns)
      log(
        \`Сортировка: \${
          sortColumns
            .map((column) => \`\${column.columnKey} \${column.direction}\`)
            .join(', ') || 'сброшена'
        }\`,
      );
    if (previous.selectedRows !== selectedRows)
      log(\`Выбрано задач: \${selectedRows.size}\`);
    if (previous.cellsSelection !== cellsSelection)
      log(
        cellsSelection.current
          ? \`Выделение ячеек: \${cellsSelection.current.range.width} × \${cellsSelection.current.range.height}\`
          : 'Выделение ячеек сброшено',
      );
    previousControls.current = {
      filters,
      sortColumns,
      selectedRows,
      cellsSelection,
      collapsed,
    };
  }, [filters, sortColumns, selectedRows, cellsSelection, collapsed, log]);

  const onRowsChange = useCallback(
    (
      _rows: BottomSheetRow[],
      data: RowsChangeData<BottomSheetRow, BottomSheetSummary>,
    ) => {
      setMasterRows((previous) =>
        applyBottomSheetRowChanges(
          previous,
          data.rows.map((change) => change.after),
        ),
      );
      log(
        \`\${data.type}: изменено строк \${data.rows.length}, колонка \${data.column.key}\`,
      );
    },
    [log],
  );
  const markSelectedComplete = useCallback(() => {
    const changes: BottomSheetRow[] = [];
    function collect(rows: BottomSheetRow[]) {
      rows.forEach((row) => {
        if (selectedRows.has(row.id)) changes.push({ ...row, complete: 100 });
        if (row.subRows) collect(row.subRows);
      });
    }
    collect(masterRows);
    setMasterRows((previous) => applyBottomSheetRowChanges(previous, changes));
    log(\`Обработать: завершено задач \${changes.length}\`);
  }, [masterRows, selectedRows, log]);

  const columns = useMemo<
    readonly ColumnOrColumnGroupConfig<BottomSheetRow, BottomSheetSummary>[]
  >(() => {
    const renderSummary: NonNullable<
      ColumnConfig<BottomSheetRow, BottomSheetSummary>['renderSummaryCell']
    > = (props) =>
      props.row.values.find((value) => value.columnId === props.column.key)
        ?.value ?? '';
    const leafColumns: ColumnConfig<BottomSheetRow, BottomSheetSummary>[] = [
      {
        key: 'id',
        name: 'ID (readonly)',
        width: 100,
        sortingType: 'numberSort',
        renderSummaryCell: renderSummary,
        renderCellPreview: settings.preview ? 'cellEditorAsPreview' : 'none',
        keyText: {
          key: 'idKey',
          name: 'Ключ ID',
          renderCell: (props) => \`KEY-\${props.row.id}\`,
        },
        rowsGrouping: { groupByColumn: false },
      },
      {
        key: 'task',
        name: 'Задача',
        width: 280,
        sortingType: 'stringSort',
        editingCell: { component: 'inputString' },
        renderSummaryCell: renderSummary,
        headerCellTooltip: settings.tooltips
          ? 'Название задачи; двойной клик открывает редактор.'
          : undefined,
        cellTooltip: settings.tooltips
          ? (props) => \`\${props.row.task}\\nID: \${props.row.id}\`
          : undefined,
        rowsGrouping: { groupByColumn: false },
        subRow: {
          keyOfColumnInSubRow: 'task',
          isColumnWithArrow: settings.structure === 'subrows-tree',
          editingCell: { component: 'inputString' },
        },
      },
      {
        key: 'priority',
        name: 'Приоритет',
        width: 160,
        sortingType: 'stringSort',
        editingCell: {
          component: 'select',
          options: {
            type: 'constant',
            options: ['Critical', 'High', 'Medium', 'Low'].map((value) => ({
              value,
              text: value,
            })),
          },
        },
        renderSummaryCell: renderSummary,
        filtering: {
          component: 'select',
          keyInFilterState: 'priority',
          selectOptions: {
            type: 'constant',
            options: ['All', 'Critical', 'High', 'Medium', 'Low'].map(
              (value) => ({ value, text: value }),
            ),
          },
          valueInRow: (row) => row.priority,
          filter: {
            typeOfValue: 'single',
            filteringType: (value, rowValue) =>
              value === 'All' || value === rowValue,
          },
        },
        rowsGrouping: { columnGroupLabel: 'Приоритет' },
        renderCell: settings.renderers
          ? (props) => (
              <Canvas.Container
                padding={{
                  left: props.theme.cellHorizontalPadding,
                  right: props.theme.cellHorizontalPadding,
                }}
              >
                <Canvas.Badge text={props.row.priority ?? ''} size="s" />
              </Canvas.Container>
            )
          : undefined,
        copyData: (row) => row.priority,
        renderCellPreview: settings.preview ? 'cellEditorAsPreview' : 'none',
        themeOverride: settings.theme
          ? (props) =>
              props.row.priority === 'Critical'
                ? { bgCell: surfaceInfoMinor }
                : undefined
          : undefined,
        subRow: {
          keyOfColumnInSubRow: 'priority',
          parentKeyAsDefault: true,
          editingCell: { component: 'inputString' },
        },
      },
      {
        key: 'issueType',
        name: 'Тип задачи',
        width: 180,
        sortingType: 'stringSort',
        editingCell: {
          component: 'select',
          options: {
            type: 'constant',
            options: ['Bug', 'Improvement', 'Epic', 'Story'].map((value) => ({
              value,
              text: value,
            })),
          },
        },
        renderSummaryCell: renderSummary,
        filtering: {
          component: 'select',
          keyInFilterState: 'issueType',
          selectOptions: {
            type: 'stateInHeaderContext',
            optionsKeyInHeaderContext: 'issueTypeOptions',
          },
          valueInRow: (row) => row.issueType,
          filter: {
            typeOfValue: 'multiple',
            filteringType: (values, rowValue) =>
              !values.length || values.includes(rowValue),
          },
        },
        rowsGrouping: { columnGroupLabel: 'Тип задачи' },
        subRow: {
          keyOfColumnInSubRow: 'issueType',
          parentKeyAsDefault: true,
          editingCell: { component: 'inputString' },
        },
      },
      {
        key: 'developer',
        name: 'Исполнитель',
        width: 220,
        sortingType: 'stringSort',
        editingCell: { component: 'inputString' },
        renderSummaryCell: renderSummary,
        filtering: {
          component: 'input',
          keyInFilterState: 'developer',
          valueInRow: (row) => row.developer,
          filter: 'startWith',
        },
        rowsGrouping: { groupByColumn: false },
        cellTooltip: settings.tooltips
          ? (props) => \`Исполнитель: \${props.row.developer}\`
          : undefined,
        subRow: {
          keyOfColumnInSubRow: 'developer',
          editingCell: { component: 'inputString' },
        },
      },
      {
        key: 'complete',
        name: 'Выполнено, %',
        width: 160,
        sortingType: 'numberSort',
        editingCell: { component: 'inputNumber' },
        renderSummaryCell: renderSummary,
        filtering: {
          component: 'input',
          keyInFilterState: 'complete',
          valueInRow: (row) => row.complete,
          filter: (value, rowValue) => Number(rowValue) >= Number(value || 0),
        },
        rowsGrouping: { groupByColumn: false },
        contentFormat: settings.formats
          ? {
              type: 'number',
              decimalSeparator: ',',
              thousandSeparator: ' ',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              alignContent: 'right',
            }
          : undefined,
        subRow: {
          keyOfColumnInSubRow: 'complete',
          contentFormat: settings.formats ? 'number' : undefined,
          editingCell: { component: 'inputNumber' },
        },
      },
    ];
    const [idColumn] = leafColumns;
    if (!settings.groupedHeaders || !idColumn) return leafColumns;
    return [
      idColumn,
      {
        key: 'taskDetails',
        name: 'Задача и классификация',
        children: leafColumns.slice(1, 4),
      },
      {
        key: 'taskProgress',
        name: 'Исполнение',
        children: leafColumns.slice(4),
      },
    ];
  }, [settings]);

  let mergeCells: TableConfig<
    BottomSheetRow,
    BottomSheetSummary,
    string | number,
    BottomSheetFilters
  >['mergeCells'];
  if (settings.merge === 'values')
    mergeCells = { mergeByCellValues: ['priority'] };
  if (settings.merge === 'region') {
    const [first, second] = masterRows;
    mergeCells = {
      rowKeyGetter: getBottomSheetRowId,
      mergedCellsRegions:
        first && second
          ? [{ rowKeys: [first.id, second.id], colKeys: ['issueType'] }]
          : [],
    };
  }

  const tableConfig: TableConfig<
    BottomSheetRow,
    BottomSheetSummary,
    string | number,
    BottomSheetFilters
  > = {
    containerStyle: { height: containerHeight },
    fullScreenEnabled: {
      domMetadata: {
        dataAttributes: { 'data-testid': 'bottom-sheet-fullscreen' },
      },
    },
    resizableColumn: true,
    columnsGrouping: { squashEmptyCells: settings.squash },
    columnsControl: {
      enable: true,
      hiding: true,
      pinning: true,
      reorderingAside: true,
      reorderingHeader: true,
      disableHiding: ['id'],
      pinnedDefault: ['id'],
      hiddenColumnsIndicator: true,
      onReorderingHeader: (info) =>
        log(\`Порядок колонок: \${info.newOrder.join(', ')}\`),
      onHiddenColumnsIndicatorExpand: (info) =>
        log(\`Показаны колонки: \${info.keys.join(', ')}\`),
      onConfirm: (info) =>
        log(
          \`Настройки колонок: закреплено \${info.pinned.length}, скрыто \${info.hidden.length}\`,
        ),
      pinDomMetadata: {
        onClick: (_event, info) =>
          log(\`Колонки: \${info?.action ?? 'закрепление'}\`),
      },
      switchDomMetadata: {
        onClick: (_event, info) =>
          log(\`Колонки: \${info?.action ?? 'видимость'}\`),
      },
    },
    rowSize: {
      default: 'big',
      showInControl: true,
      onRowSizeChange: (size) => log(\`Размер строк: \${size}\`),
    },
    rowHeight: settings.variableHeight
      ? (row, size) => size.rowSizeValue + (Number(row.id) % 3 === 0 ? 24 : 0)
      : undefined,
    headerRowHeight: Number(settings.headerHeight),
    unstickyHeader: settings.unstickyHeader,
    rowMarkers: {
      startIndex:
        effectiveDataMode === 'pagination'
          ? (effectivePage - 1) * pageSize + 1
          : 1,
    },
    hoverEffects: settings.hover ? { row: true } : undefined,
    highlightActiveType: settings.highlight ? 'row' : 'disabled',
    highlightActiveRow: { onChange: onHighlightedRowChange },
    cellsSelection: {
      mode: settings.selectionMode,
      state: [cellsSelection, setCellsSelection],
      enableColumnSelection: settings.axisSelection,
      enableRowSelection: settings.axisSelection,
      enableSelectAll: settings.axisSelection,
    },
    selecting: {
      state: [selectedRows, setSelectedRows],
      rowKeyGetter: getBottomSheetRowId,
      showDefault: true,
    },
    editing: {
      onRowsChange,
      rowKeyGetter: getBottomSheetRowId,
      subRowsKey: 'subRows',
      deepCloneRows: true,
      enabled: canEdit ? [editMode, setEditMode] : false,
      showButtons: canEdit,
      onEnableEditing: (enable) => {
        savedRows.current = cloneBottomSheetRows(masterRows);
        log('Редактирование включено');
        enable();
      },
      onSave: (disable) => {
        savedRows.current = cloneBottomSheetRows(masterRows);
        log('Изменения сохранены');
        disable();
      },
      onCancel: (disable) => {
        setMasterRows(cloneBottomSheetRows(savedRows.current));
        log('Изменения отменены');
        disable();
      },
      editModeLeftSlot: (
        <BodyXS style={{ color: textSecondary }}>
          Copy / paste / fill доступны в режиме редактирования
        </BodyXS>
      ),
    },
    cellTransfer: {
      enabled: settings.transferEnabled ? undefined : false,
      paste: {
        readonlyBehavior: settings.pasteReadonly,
        overflowBehavior: settings.pasteOverflow,
        validation: settings.pasteValidation,
        broadcast: settings.pasteBroadcast,
        allowSubRows: settings.allowSubRows,
      },
      fillHandle: {
        enabled: canEdit && editMode && settings.fillEnabled,
        allowedDirections: settings.fillDirections,
        readonlyBehavior: settings.pasteReadonly,
        allowSubRows: settings.allowSubRows,
      },
      onBeforeCopy: (data) => {
        log(\`Копирование: \${data.length} строк\`);
        return data;
      },
      onBeforePaste: (data) => {
        if (!canEdit || !editMode) return false;
        log(\`Вставка: \${data.length} строк\`);
        return data;
      },
      onBeforeFill: (data) => {
        if (!canEdit || !editMode) return false;
        log(\`Протяжка: \${data.length} строк\`);
        return data;
      },
    },
    notifications: {
      onNotification: (event) =>
        log(\`\${event.type} / \${event.code}: \${event.message}\`, event.level),
    },
    searching: {
      enabled: true,
      manualSearching: true,
      searchQueryState: [query, setQuery],
      debounceDelay: 300,
      searchOnType: settings.searchOnType,
      onDebouncedChange: (value) => log(\`Поиск: \${value || 'все задачи'}\`),
      ...(settings.autocomplete
        ? {
            autocomplete: {
              suggestions: masterRows
                .slice(0, 10)
                .map((row) => ({ label: row.task })),
              onSuggestionSelect: (value) => {
                setQuery(value.label);
                log(\`Подсказка поиска: \${value.label}\`);
              },
            },
          }
        : {}),
    },
    sorting: { state: [sortColumns, setSortColumns], manualSorting: true },
    filtering: {
      state: [filters, setFilters],
      manualFiltering: true,
      filtersInfo: {
        priority: { label: 'Приоритет', clearedValue: 'All' },
        issueType: { label: 'Тип задачи', clearedValue: [] },
        developer: { label: 'Исполнитель', clearedValue: '' },
        complete: { label: 'Выполнено, %', clearedValue: '' },
        globalFilter: { label: 'Общий фильтр', clearedValue: '' },
      },
    },
    summaryRows: {
      showDefault: true,
      showInControl: true,
      onChange: (enabled) =>
        log(\`Итоговые строки: \${enabled ? 'показаны' : 'скрыты'}\`),
    },
    keyText: { showInControl: true, controlBlock: {}, sidebar: {} },
    ...(isGrouping
      ? {
          rowsGrouping: {
            groupByState: [groupBy, setGroupBy],
            rowKeyGetter: getBottomSheetRowId,
            view: settings.structure === 'group-merged' ? 'merged' : 'tree',
            groupedColumnProps: { name: 'Группировка', width: 240 },
          },
        }
      : {}),
    ...(isTree
      ? {
          subRows: {
            getSubRows: getBottomSheetChildren,
            rowKeyGetter: getBottomSheetRowId,
            expandedIdsState: [expandedIds, setExpandedIds],
            view: settings.structure === 'subrows-merged' ? 'merged' : 'tree',
            ...(settings.structure === 'subrows-merged'
              ? { mergedColumns: ['task'] }
              : {}),
          },
        }
      : {}),
    mergeCells,
    tooltip: { enabled: settings.tooltips },
    borders: {
      vertical: settings.borders === 'all' || settings.borders === 'custom',
      horizontal: settings.borders !== 'none',
      ...(settings.borders === 'custom'
        ? {
            getVerticalBorder: (info) =>
              info.columnKey === 'developer' ? false : undefined,
            getHorizontalBorder: (info) =>
              Number(info.row.id) % 2 === 0 ? false : undefined,
            getCellBorder: (info) =>
              info.columnKey === 'complete' && info.row.complete === 100
                ? { bottom: true, top: true, left: true, right: true }
                : undefined,
          }
        : {}),
    },
    isLoading:
      status === 'skeleton' ? { boolean: true, skeletonRowsCount: 5 } : false,
    loadingOverlay: {
      active: status === 'overlay',
      title: 'Загрузка отчётов',
      subtitle: 'Подготавливаем структуру таблицы',
      showSubtitleDelay: 1000,
    },
    errorState: {
      enabled: status === 'error',
      size: 's',
      statusCode: 503,
      customStatuses: {
        503: {
          title: 'Не удалось загрузить отчёты',
          description: 'Проверьте подключение и повторите попытку.',
          button: { label: 'Повторить', view: 'accent' },
        },
      },
      buttonHandler: () => {
        setStatus('normal');
        log('Повторная загрузка завершена');
      },
    },
    emptyState: {
      enabled: true,
      size: 's',
      variant: 'no-content',
      title: 'Отчётов пока нет',
      subtitle: 'Измените поиск или создайте первый отчёт.',
      buttons: [
        {
          type: 'button',
          props: {
            children: 'Создать отчёт',
            view: 'accent',
            onClick: () => {
              setStatus('normal');
              setQuery('');
              setFilters({
                priority: 'All',
                issueType: [],
                developer: '',
                complete: '',
                globalFilter: '',
              });
              log('Данные восстановлены');
            },
          },
        },
      ],
    },
    collapsing: {
      enableCollapse: true,
      collapsedState: [collapsed, setCollapsed],
      collapseButtonPlacement: settings.placement,
      titleText: 'Отчёты',
      collapseButtonAboveRightSlot: (
        <BodyXS>Все возможности с BottomSheet</BodyXS>
      ),
    },
    leftSidebarConfig: {
      width: leftWidth,
      openState: [leftOpen, setLeftOpen],
      activeTabState: [leftTab, setLeftTab],
      onActiveTabChange: onLeftTabChange,
      customTabs: [
        ...(showReports
          ? [
              {
                id: 'reports',
                label: 'Навигация по отчётам',
                icon: <IconDocumentOutline size="s" />,
                content: (
                  <AllFeaturesNavigation
                    rows={masterRows}
                    onSelect={(row) => {
                      setSelectedRow(row);
                      setRightOpen(true);
                      setRightTab('details');
                      log(\`Открыты сведения: \${row.task}\`);
                    }}
                  />
                ),
              },
            ]
          : []),
        {
          id: 'books',
          label: 'Книги',
          icon: <IconBookOpenOutline size="s" />,
          content: (
            <div style={{ padding: 16 }}>
              <H5>Книги отчётов</H5>
              <Button
                size="xs"
                view="secondary"
                style={{ marginTop: 16 }}
                onClick={() => log('Открыта книга Отчётность 2026')}
              >
                Отчётность 2026
              </Button>
            </div>
          ),
        },
      ],
    },
    rightSidebarConfig: {
      width: rightWidth,
      openState: [rightOpen, setRightOpen],
      activeTabState: [rightTab, setRightTab],
      onActiveTabChange: onRightTabChange,
      defaultTabs: [
        {
          id: 'tableSettings',
          customGeneralSettingsSlot: (
            <BodyXS style={{ color: textSecondary }}>
              Выбрано задач: {selectedRows.size}. Все действия записываются в
              журнал.
            </BodyXS>
          ),
        },
      ],
      customTabs: [
        {
          id: 'details',
          label: 'Сведения',
          icon: <IconDocumentOutline size="s" />,
          titleRightSlot: <BodyXS>{selectedRows.size} выбрано</BodyXS>,
          content: (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                padding: 16,
              }}
            >
              <H5>{selectedDetails?.task ?? 'Финансовый отчёт'}</H5>
              <BodyS>
                {selectedDetails
                  ? \`Исполнитель: \${selectedDetails.developer}\`
                  : 'Выберите задачу в таблице или навигации.'}
              </BodyS>
              <BodyXS style={{ color: textSecondary }}>
                Строк в выборке: {filteredRows.length}. Выбрано:{' '}
                {selectedRows.size}.
              </BodyXS>
              <Button
                size="xs"
                view="secondary"
                onClick={() =>
                  setRightWidth((value) => (value === 400 ? '35%' : 400))
                }
              >
                Изменить ширину правой панели
              </Button>
            </div>
          ),
        },
      ],
    },
    bottomSheetConfig: {
      enabled: sheetEnabled,
      height,
      minHeight: 32,
      content: (
        <AllFeaturesLog
          expanded={height !== 32}
          events={events}
          onToggle={() => setHeight((value) => (value === 32 ? 220 : 32))}
          onClear={() => setEvents([])}
        />
      ),
    },
    controlBlock: {
      show: settings.controlBlockShow,
      size: settings.controlBlockSize,
      enableAdaptiveCompress: settings.adaptive,
      rightSideInner: [
        {
          text: 'Обновить',
          contentLeft: <IconRefresh />,
          onClick: () => log('Данные обновлены вручную'),
        },
      ],
      customFeatures: [
        {
          value: 'favorite',
          label: 'В избранном',
          Icon: IconStar,
          onClick: () => {
            setFavorite((value) => !value);
            log('Избранное переключено');
          },
          details: {
            type: 'switch',
            label: 'В избранном',
            checked: favorite,
            onChange: (event) => {
              setFavorite(event.target.checked);
              log('Избранное переключено');
            },
          },
        },
        {
          value: 'refreshLog',
          label: 'Записать событие',
          Icon: IconRefresh,
          onClick: () => log('Данные обновлены через пользовательскую фичу'),
          details: {
            type: 'button',
            label: 'Записать событие',
            icon: <IconRefresh />,
            onClick: () => log('Данные обновлены через настройки'),
          },
        },
        {
          value: 'reportStatus',
          label: 'Статус',
          Icon: IconInfoCircleOutline,
          onClick: () => {
            setCustomStatus((value) =>
              value === 'active' ? 'inactive' : 'active',
            );
            log('Статус переключён');
          },
          details: {
            type: 'select',
            label: 'Статус отчёта',
            icon: <IconInfoCircleOutline />,
            value: customStatus,
            options: [
              { value: 'active', label: 'Активный' },
              { value: 'inactive', label: 'Неактивный' },
            ],
            onChange: (value) => {
              setCustomStatus(value);
              log(\`Статус отчёта: \${value}\`);
            },
          },
        },
      ],
      massActionPanel: {
        buttons: [
          {
            type: 'button',
            children: 'Обработать',
            onClick: markSelectedComplete,
          },
          {
            type: 'button',
            children: 'Снять выбор',
            view: 'secondary',
            onClick: () => {
              setSelectedRows(new Set());
              log('Выбор строк снят');
            },
          },
        ],
      },
    },
    onHeaderContextMenuDropdown: {
      type: 'dropdown',
      getDropdownItems: (info) => [
        { value: 'info', label: \`Колонка: \${info.column.name}\` },
        {
          value: 'sort',
          label: 'Сортировка',
          items: [
            { value: 'asc', label: 'По возрастанию' },
            { value: 'desc', label: 'По убыванию' },
          ],
        },
      ],
      onItemSelect: (item, info) => {
        if (item.value === 'asc' || item.value === 'desc')
          setSortColumns([
            {
              columnKey: info.column.key,
              direction: item.value === 'asc' ? 'ASC' : 'DESC',
            },
          ]);
        log(\`Меню заголовка: \${item.label}\`);
      },
    },
    onCellContextMenuDropdown: {
      type: 'dropdown',
      getDropdownItems: () => [
        { value: 'details', label: 'Открыть сведения' },
        {
          value: 'complete',
          label: 'Отметить выполненной',
          disabled: !canEdit,
        },
      ],
      onItemSelect: (item, info) => {
        if (item.value === 'details') {
          setSelectedRow(info.row);
          setRightOpen(true);
          setRightTab('details');
        } else if (canEdit) {
          const original = findBottomSheetRow(masterRows, info.row.id);
          if (original)
            setMasterRows((previous) =>
              applyBottomSheetRowChanges(previous, [
                { ...original, complete: 100 },
              ]),
            );
        }
        log(\`Меню ячейки: \${item.label} (\${info.row.task})\`);
      },
    },
    onCellClicked: (_cell, info) => {
      if ('row' in info) setSelectedRow(info.row);
    },
    ...(effectiveDataMode === 'pagination'
      ? {
          pagination: {
            value: effectivePage,
            count: filteredRows.length,
            perPage: pageSize,
            perPageList: isTree ? [5, 10, 20] : [20, 50, 100],
            responsiveSlots: true,
            onChange: (nextPage, nextPageSize, scrollToTop) => {
              if (
                typeof nextPageSize === 'number' &&
                nextPageSize !== pageSize
              ) {
                setPageSize(nextPageSize);
                setPage(1);
              } else if (typeof nextPage === 'number') setPage(nextPage);
              scrollToTop?.();
              log(
                \`Пагинация: страница \${nextPage ?? page}, по \${
                  nextPageSize ?? pageSize
                }\`,
              );
            },
          },
        }
      : {}),
    ...(effectiveDataMode === 'infinity'
      ? {
          infinityScroll: {
            isLoading: loadingMore,
            hasMore: loadedCount < filteredRows.length,
            rowThreshold: 5,
            onTrigger: loadMore,
          },
        }
      : {}),
  };

  return (
    <div
      style={{ padding: 16 }}
      data-testid="bottom-sheet-all-features"
      data-total-rows={masterRows.length}
      data-filtered-rows={filteredRows.length}
      data-visible-rows={visibleRows.length}
      data-structure={settings.structure}
      data-data-mode={effectiveDataMode}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 12,
          marginBottom: 12,
        }}
      >
        <AllFeaturesChoice
          label="Структура данных"
          value={settings.structure}
          items={[
            { value: 'flat', label: 'Плоские строки' },
            { value: 'group-tree', label: 'Группировка деревом' },
            { value: 'group-merged', label: 'Группировка объединением' },
            { value: 'subrows-tree', label: 'Дерево дочерних строк' },
            { value: 'subrows-merged', label: 'Дерево объединением' },
          ]}
          onChange={(structure) =>
            updateSettings({
              structure: structure as AllFeaturesSettings['structure'],
            })
          }
        />
        <AllFeaturesChoice
          label="Получение данных"
          value={effectiveDataMode}
          disabled={isGrouping}
          items={[
            { value: 'all', label: 'Все данные' },
            { value: 'pagination', label: 'Пагинация' },
            { value: 'infinity', label: 'Бесконечный скролл' },
          ]}
          onChange={(dataMode) =>
            updateSettings({
              dataMode: dataMode as AllFeaturesSettings['dataMode'],
            })
          }
        />
        <AllFeaturesChoice
          label="Состояние таблицы"
          value={status}
          items={[
            { value: 'normal', label: 'Обычное' },
            { value: 'skeleton', label: 'Скелетоны' },
            { value: 'overlay', label: 'Загрузка структуры' },
            { value: 'error', label: 'Ошибка' },
            { value: 'empty', label: 'Нет данных' },
          ]}
          onChange={(value) => {
            setStatus(value as typeof status);
            log(\`Состояние таблицы: \${value}\`);
          }}
        />
      </div>
      <AllFeaturesSettingsPanel settings={settings} onChange={updateSettings} />
      <div
        style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}
      >
        <Button size="xs" view="secondary" onClick={() => setLeftWidth(360)}>
          Ширина 360
        </Button>
        <Button size="xs" view="secondary" onClick={() => setLeftWidth('25%')}>
          Ширина 25%
        </Button>
        <Button
          size="xs"
          view="secondary"
          onClick={() => setLeftWidth('calc(20% + 40px)')}
        >
          Ширина calc
        </Button>
        <Button size="xs" view="secondary" onClick={() => setHeight('35%')}>
          Лог 35%
        </Button>
        <Button size="xs" view="secondary" onClick={() => setHeight(1000)}>
          Большой лог
        </Button>
        <Button
          size="xs"
          view="secondary"
          onClick={() => setCollapsed((value) => !value)}
        >
          Collapse
        </Button>
        <Button
          size="xs"
          view="secondary"
          onClick={() =>
            setStatus((value) => (value === 'error' ? 'normal' : 'error'))
          }
        >
          Error state
        </Button>
        <Button
          size="xs"
          view="secondary"
          onClick={() =>
            setStatus((value) => (value === 'empty' ? 'normal' : 'empty'))
          }
        >
          Empty state
        </Button>
        <Button
          size="xs"
          view="secondary"
          onClick={() => setSheetEnabled((value) => !value)}
        >
          Нижний слот
        </Button>
        <Button
          size="xs"
          view="secondary"
          onClick={() => setShowReports((value) => !value)}
        >
          Удалить вкладку
        </Button>
        <Button
          size="xs"
          view="secondary"
          onClick={() => setLeftOpen((value) => !value)}
        >
          Открытие извне
        </Button>
        <Button
          size="xs"
          view="secondary"
          onClick={() =>
            setContainerHeight((value) => (value === 620 ? 350 : 620))
          }
        >
          Высота контейнера
        </Button>
        <Button
          size="xs"
          view="secondary"
          onClick={() =>
            setContainerWidth((value) => (value === '100%' ? '80%' : '100%'))
          }
        >
          Ширина контейнера
        </Button>
        <Button
          size="xs"
          view="secondary"
          onClick={() => setRightOpen((value) => !value)}
        >
          Правая панель
        </Button>
      </div>
      {effectiveDataMode === 'infinity' && (
        <Button
          size="xs"
          view="secondary"
          style={{ marginBottom: 12 }}
          disabled={loadingMore || loadedCount >= filteredRows.length}
          onClick={loadMore}
        >
          Загрузить ещё 20 строк
        </Button>
      )}
      <div style={{ width: containerWidth }}>
        <TableCanvas
          refTable={options.refTable}
          rows={rowsForTable}
          columnConfig={columns}
          tableConfig={tableConfig}
          bottomSummaryRows={summaryRows}
          headerContextValue={{
            issueTypeOptions: ['Bug', 'Improvement', 'Epic', 'Story'].map(
              (value) => ({ value, text: value }),
            ),
          }}
        />
      </div>
    </div>
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx$$$ExampleHeaderDropdown":`function ExampleHeaderDropdown() {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Title' },
      { key: 'priority', name: 'Priority' },
      { key: 'issueType', name: 'Issue Type' },
      { key: 'developer', name: 'Developer' },
      { key: 'tr1', name: 'TR' },
      { key: 'complete', name: '% Complete' },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{
        onHeaderContextMenuDropdown: {
          type: 'dropdown',
          getDropdownItems: ({ column }) => [
            {
              value: \`lvl1 \${column.name}\`,
              label: \`\${column.name} lvl1\`,
              items: [
                {
                  value: \`lvl1_inside \${column.key}\`,
                  label: \`\${column.key} lvl1 inside\`,
                },
              ],
            },
            {
              value: \`lvl2 \${column.key}\`,
              label: \`\${column.key} lvl2\`,
            },
          ],
          onItemSelect: (item, context, event) => {
            console.group('onItemSelect for onHeaderContextMenuDropdown');
            console.debug(item, 'item');
            console.debug(context, 'context');
            console.debug(event, 'event');
            console.groupEnd();
          },
        },
        onHeaderContextMenu: (colIndex, event, tableInfo) => {
          console.debug(
            'Логика внешнего onHeaderContextMenu',
            colIndex,
            event,
            tableInfo,
          );
        },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx$$$ExampleHeaderHandler":`function ExampleHeaderHandler() {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Title' },
      { key: 'priority', name: 'Priority' },
      { key: 'issueType', name: 'Issue Type' },
      { key: 'developer', name: 'Developer' },
      { key: 'tr1', name: 'TR' },
      { key: 'complete', name: '% Complete' },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{
        onHeaderContextMenu: (colIndex, event, context) =>
          console.debug(colIndex, event, context),
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx$$$ExampleCellDropdown":`function ExampleCellDropdown() {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Title' },
      { key: 'priority', name: 'Priority' },
      { key: 'issueType', name: 'Issue Type' },
      { key: 'developer', name: 'Developer' },
      { key: 'tr1', name: 'TR' },
      { key: 'complete', name: '% Complete' },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{
        onCellContextMenuDropdown: {
          type: 'dropdown',
          getDropdownItems: ({ column, row }) => {
            console.debug(
              column,
              row,
              'getDropdownItems for onCellContextMenuDropdown',
            );
            return [
              {
                value: \`lvl1 \${column.name}\`,
                label: \`\${column.name} lvl1\`,
                items: [
                  {
                    value: \`lvl1_inside \${column.name}\`,
                    label: \`\${column.name} lvl1 inside\`,
                  },
                ],
              },
              {
                value: \`lvl2 \${column.name}\`,
                label: \`\${column.name} lvl2\`,
              },
            ];
          },
          onItemSelect: (item, context, event) => {
            console.group('onItemSelect for onCellContextMenuDropdown');
            console.debug(item, 'item');
            console.debug(context, 'context', context);
            console.debug(event, 'event');
            console.groupEnd();
            // Пример вызова каких-то действий
            // eslint-disable-next-line no-alert
            alert(\`Selected \${item.label} for row \${context.row.id}\`);
          },
        },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx$$$ExampleCellHandler":`function ExampleCellHandler() {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Title' },
      { key: 'priority', name: 'Priority' },
      { key: 'issueType', name: 'Issue Type' },
      { key: 'developer', name: 'Developer' },
      { key: 'tr1', name: 'TR' },
      { key: 'complete', name: '% Complete' },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{
        onCellContextMenu: (args, event, context) => {
          console.debug(args, event, context, 'onCellContextMenu');
        },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx$$$ExampleCustomDropdownProps":`function ExampleCustomDropdownProps() {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Title' },
      { key: 'priority', name: 'Priority' },
      { key: 'issueType', name: 'Issue Type' },
      { key: 'developer', name: 'Developer' },
      { key: 'tr1', name: 'TR' },
      { key: 'complete', name: '% Complete' },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{
        onCellContextMenuDropdown: {
          type: 'dropdown',
          size: 's',
          listWidth: '580px',
          closeOnSelect: true,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          getDropdownItems: ({ column, row }) => [
            {
              value: 'clone',
              label: \`Клонировать "\${row.task}"\`,
            },
            {
              value: 'edit',
              label: 'Редактировать',
            },
            {
              value: 'nested',
              label: 'Вложенные действия',
              items: [
                { value: 'nested_1', label: 'Действие 1' },
                { value: 'nested_2', label: 'Действие 2' },
              ],
            },
            {
              value: 'delete',
              label: 'Удалить',
            },
          ],
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onItemSelect: (item, context, event) => {
            console.group('onItemSelect (custom props)');
            console.debug('item:', item);
            console.debug('row:', context.row);
            console.groupEnd();
          },
        },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx$$$AsyncCellDropdownExample":`function AsyncCellDropdownExample({ shouldFail }: { shouldFail: boolean }) {
  const [rows] = useState(createRows);
  const [menu, setMenu] = useState<AsyncMenuState>({
    status: 'idle',
    items: [],
    key: null,
    row: null,
  });
  // В демо-режиме ошибки: падаем на первой попытке, на «Обновить» отдаём успех
  const attempts = useRef(0);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Title' },
      { key: 'priority', name: 'Priority' },
      { key: 'developer', name: 'Developer' },
    ],
    [],
  );

  const load = useCallback(
    (row: Row, key: string) => {
      setMenu({ status: 'loading', items: [], key, row });
      const willFail = shouldFail && attempts.current === 0;
      attempts.current += 1;

      new Promise<{ value: string; label: string }[]>((resolve, reject) => {
        setTimeout(() => {
          if (willFail) {
            reject(new Error('network'));
            return;
          }
          resolve([
            { value: 'copy', label: \`Копировать «\${row.task}»\` },
            { value: 'edit', label: 'Редактировать' },
            { value: 'delete', label: 'Удалить' },
          ]);
        }, 1200);
      }).then(
        (items) =>
          setMenu((prev) =>
            prev.key === key ? { ...prev, status: 'success', items } : prev,
          ),
        () =>
          setMenu((prev) =>
            prev.key === key ? { ...prev, status: 'error', items: [] } : prev,
          ),
      );
    },
    [shouldFail],
  );

  return (
    <TableCanvas
      tableConfig={{
        onCellContextMenuDropdown: {
          type: 'dropdown',
          listWidth: '240px',
          onOpen: ({ row, column }) => load(row, \`\${row.id}:\${column.name}\`),
          getDropdownItems: ({ row, column }) => {
            if (menu.key !== \`\${row.id}:\${column.name}\`) return [];
            if (menu.status === 'loading') return SKELETON_ITEMS;
            return menu.items;
          },
          renderItem: menu.status === 'loading' ? SkeletonRow : undefined,
          beforeList:
            menu.status === 'error' && menu.row ? (
              <div style={{ width: 240, padding: 8 }}>
                <EmptyState
                  size="s"
                  variant="no-content"
                  title="Не удалось загрузить"
                  subtitle="Проверьте соединение и повторите"
                  buttons={[
                    {
                      type: 'button',
                      props: {
                        text: 'Обновить',
                        view: 'secondary',
                        onClick: () =>
                          menu.row && menu.key && load(menu.row, menu.key),
                      },
                    },
                  ]}
                />
              </div>
            ) : undefined,
          onItemSelect: (item) => {
            if (String(item.value).startsWith('__skeleton')) return;
            // eslint-disable-next-line no-alert
            alert(\`Выбрано: \${item.label}\`);
          },
        },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx$$$renderCellWithHoverIcon":`function renderCellWithHoverIcon(
  getValue: (row: Row) => React.ReactNode,
): NonNullable<ColumnConfig<Row>['renderCell']> {
  return ({ row, theme, hovered }) => (
    <Canvas.Container
      direction="row"
      alignItems="center"
      columnGap={8}
      padding={{
        left: theme.cellHorizontalPadding,
        right: theme.cellHorizontalPadding,
      }}
      style={{ width: '100%' }}
    >
      <Canvas.Text font={theme.baseFontStyle} style={{ flexGrow: 1 }}>
        {getValue(row)}
      </Canvas.Text>
      <Canvas.Container
        alignItems="center"
        justifyContent="center"
        style={{ width: 20, height: 20 }}
      >
        {hovered.cellHover && (
          <Canvas.Icon
            icon={<IconSearch />}
            size={16}
            color={theme.tokens.textAccent}
          />
        )}
      </Canvas.Container>
    </Canvas.Container>
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx$$$HoveredCellIconExample":`function HoveredCellIconExample() {
  const [rows] = useState<Row[]>(createRows(0, 20));
  const columnConfig = useMemo(
    (): ColumnConfig<Row>[] => [
      {
        key: 'id',
        name: 'ID',
        width: 80,
        renderCell: renderCellWithHoverIcon((row) => row.id),
      },
      {
        key: 'task',
        name: 'Task',
        width: 320,
        renderCell: renderCellWithHoverIcon((row) => row.task),
      },
      {
        key: 'priority',
        name: 'Priority',
        width: 140,
        renderCell: renderCellWithHoverIcon((row) => row.priority),
      },
      {
        key: 'issueType',
        name: 'Issue Type',
        width: 160,
        renderCell: renderCellWithHoverIcon((row) => row.issueType),
      },
      {
        key: 'complete',
        name: '% Complete',
        renderCell: renderCellWithHoverIcon((row) => \`\${row.complete}%\`),
      },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{ containerStyle: { height: 500 } }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx$$$renderCellWithActiveIcon":`function renderCellWithActiveIcon(
  getValue: (row: Row) => React.ReactNode,
): NonNullable<ColumnConfig<Row>['renderCell']> {
  return ({ row, theme, active }) => (
    <Canvas.Container
      direction="row"
      alignItems="center"
      columnGap={8}
      padding={{
        left: theme.cellHorizontalPadding,
        right: theme.cellHorizontalPadding,
      }}
      style={{ width: '100%' }}
    >
      <Canvas.Text font={theme.baseFontStyle} style={{ flexGrow: 1 }}>
        {getValue(row)}
      </Canvas.Text>
      <Canvas.Container
        alignItems="center"
        justifyContent="center"
        style={{ width: 20, height: 20 }}
      >
        {active.cellActive && (
          <Canvas.Icon
            icon={<IconSearch />}
            size={16}
            color={theme.tokens.textAccent}
          />
        )}
      </Canvas.Container>
    </Canvas.Container>
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx$$$ActiveCellIconExample":`function ActiveCellIconExample() {
  const [rows] = useState<Row[]>(createRows(0, 20));
  const columnConfig = useMemo(
    (): ColumnConfig<Row>[] => [
      {
        key: 'id',
        name: 'ID',
        width: 80,
        renderCell: renderCellWithActiveIcon((row) => row.id),
      },
      {
        key: 'task',
        name: 'Task',
        width: 320,
        renderCell: renderCellWithActiveIcon((row) => row.task),
      },
      {
        key: 'priority',
        name: 'Priority',
        width: 140,
        renderCell: renderCellWithActiveIcon((row) => row.priority),
      },
      {
        key: 'issueType',
        name: 'Issue Type',
        width: 160,
        renderCell: renderCellWithActiveIcon((row) => row.issueType),
      },
      {
        key: 'complete',
        name: '% Complete',
        renderCell: renderCellWithActiveIcon((row) => \`\${row.complete}%\`),
      },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: 500 },
        highlightActiveType: 'cell',
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.InfinityScroll/TableCanvasInfinityScroll.stories.tsx$$$ExampleRegionMode":`function ExampleRegionMode() {
  const [rows, setRows] = useState(() => createRows(0, 50));
  const [isLoading, setIsLoading] = useState(false);

  const onTrigger = useCallback(
    async (currentRows: Row[]) => {
      if (isLoading) return;
      setIsLoading(true);

      const newData = await loadMoreRows<Row>({
        indexForStart: currentRows.length,
        countOfNewRows: 50,
        timeout: 2000,
      });

      setRows((prev) => [...prev, ...newData]);
      setIsLoading(false);
    },
    [isLoading],
  );

  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: 700 },
        infinityScroll: {
          rowThreshold: 5,
          onTrigger,
          isLoading,
          hasMore: rows.length < 6000,
        },
      }}
      columnConfig={columns}
      rows={rows}
    />
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx$$$createSidebarData":`function createSidebarData() {
  type Row = { id: number; task: string; priority: string };
  const priorities = ['Critical', 'High', 'Medium', 'Low'];
  const rows: Row[] = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    task: \`Task \${index + 1}\`,
    priority: priorities[index % priorities.length] ?? 'Low',
  }));
  const columnConfig: ColumnConfig<Row>[] = [
    { key: 'id', name: 'ID', width: 100 },
    { key: 'task', name: 'Title', width: 300 },
    { key: 'priority', name: 'Priority', width: 180 },
  ];
  return { rows, columnConfig };
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx$$$WithCustomTabExample":`function WithCustomTabExample() {
  const [{ rows, columnConfig }] = useState(createSidebarData);
  const [selectedRows, setSelectedRows] = useState<ReadonlySet<string>>(
    new Set(),
  );
  const [filters, setFilters] = useState({});

  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: 480 },
        rightSidebarConfig: {
          customTabs: [
            {
              id: 'customInfo',
              label: 'Информация',
              icon: <IconInfo size="s" />,
              content: (
                <>
                  <p>Всего строк: {rows.length}</p>
                  <p>Выбрано строк: {selectedRows.size}</p>
                </>
              ),
              title: 'Информация',
              showInSidebar: true,
            },
          ],
        },
        selecting: {
          state: [selectedRows, setSelectedRows],
          rowKeyGetter: (row) => row.id.toString(),
        },
        filtering: {
          state: [filters, setFilters],
        },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx$$$DefaultOpenExample":`function DefaultOpenExample() {
  const [{ rows, columnConfig }] = useState(createSidebarData);

  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: 480 },
        rightSidebarConfig: {
          defaultOpen: true,
          defaultActiveTabId: 'customInfo',
          customTabs: [
            {
              id: 'customInfo',
              label: 'Информация',
              icon: <IconInfo size="s" />,
              content: <p>Всего строк: {rows.length}</p>,
              title: 'Информация',
              showInSidebar: true,
            },
          ],
        },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx$$$ControlledActiveTabExample":`function ControlledActiveTabExample() {
  const [{ rows, columnConfig }] = useState(createSidebarData);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const openTab = (id: string) => {
    setActiveTab(id);
    setIsOpen(true);
  };

  return (
    <>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <Button onClick={() => openTab('customInfo')}>Инфо</Button>
        <Button onClick={() => openTab('customSettings')}>Настройки</Button>
        <Button onClick={() => setIsOpen(false)}>Закрыть</Button>
      </div>
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 480 },
          rightSidebarConfig: {
            openState: [isOpen, setIsOpen],
            activeTabState: [activeTab, setActiveTab],
            customTabs: [
              {
                id: 'customInfo',
                label: 'Информация',
                icon: <IconInfo size="s" />,
                content: <p>Вкладка «Информация».</p>,
                title: 'Информация',
                showInSidebar: true,
              },
              {
                id: 'customSettings',
                label: 'Настройки',
                icon: <IconSettings size="s" />,
                content: <p>Вкладка «Настройки».</p>,
                title: 'Настройки',
                showInSidebar: true,
              },
            ],
          },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    </>
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx$$$ActiveTabCallbackExample":`function ActiveTabCallbackExample() {
  const [{ rows, columnConfig }] = useState(createSidebarData);
  const [currentTab, setCurrentTab] = useState<string | null>(null);

  return (
    <>
      <p style={{ marginBottom: 12 }}>
        Активная вкладка: <b>{currentTab ?? 'нет (сайдбар закрыт)'}</b>
      </p>
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 480 },
          rightSidebarConfig: {
            onActiveTabChange: (tabId, tab) =>
              setCurrentTab(tab?.title ?? tabId),
            customTabs: [
              {
                id: 'customInfo',
                label: 'Информация',
                icon: <IconInfo size="s" />,
                content: <p>Вкладка «Информация».</p>,
                title: 'Информация',
                showInSidebar: true,
              },
              {
                id: 'customSettings',
                label: 'Настройки',
                icon: <IconSettings size="s" />,
                content: <p>Вкладка «Настройки».</p>,
                title: 'Настройки',
                showInSidebar: true,
              },
            ],
          },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    </>
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx$$$LeftSidebarExample":`function LeftSidebarExample() {
  const [width, setWidth] = useState<string | number>(300);
  const [open, setOpen] = useState(true);
  const [query, setQuery] = useState('');
  const onActiveTabChange = (id: string | null) => {
    if (id === 'reports') setWidth(300);
    if (id === 'books') setWidth('35%');
  };
  const rows = [
    { id: 1, report: 'Финансовый отчёт' },
    { id: 2, report: 'Итоги квартала' },
  ];

  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <Button size="xs" view="secondary" onClick={() => setWidth(360)}>
          360px
        </Button>
        <Button size="xs" view="secondary" onClick={() => setWidth('25%')}>
          25%
        </Button>
        <Button
          size="xs"
          view="secondary"
          onClick={() => setOpen((value) => !value)}
        >
          Переключить панель
        </Button>
      </div>
      <TableCanvas
        rows={rows}
        columnConfig={[
          { key: 'id', name: 'ID', width: 100 },
          { key: 'report', name: 'Отчёт', width: 360 },
        ]}
        tableConfig={{
          containerStyle: { height: 480 },
          leftSidebarConfig: {
            width,
            openState: [open, setOpen],
            defaultActiveTabId: 'reports',
            onActiveTabChange,
            customTabs: [
              {
                id: 'reports',
                label: 'Отчёты',
                icon: <IconDocumentOutline size="s" />,
                content: (
                  <div style={{ padding: 16 }}>
                    <TextFieldSearch
                      size="xs"
                      aria-label="Поиск отчёта"
                      placeholder="Поиск отчёта"
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      onClear={() => setQuery('')}
                    />
                    {rows
                      .filter((row) =>
                        row.report.toLowerCase().includes(query.toLowerCase()),
                      )
                      .map((row) => (
                        <BodyS key={row.id} style={{ marginTop: 16 }}>
                          {row.report}
                        </BodyS>
                      ))}
                  </div>
                ),
              },
              {
                id: 'books',
                label: 'Книги',
                icon: <IconBookOpenOutline size="s" />,
                content: (
                  <div style={{ padding: 16 }}>
                    <BodyS>Книги отчётов</BodyS>
                    <Button
                      size="xs"
                      view="secondary"
                      style={{ marginTop: 16 }}
                    >
                      Отчётность 2026
                    </Button>
                  </div>
                ),
              },
            ],
          },
        }}
      />
    </div>
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx$$$RightSidebarExample":`function RightSidebarExample() {
  const [width, setWidth] = useState<string | number>(400);
  const onActiveTabChange = (id: string | null) => {
    if (id === 'reports') setWidth(400);
    if (id === 'books') setWidth('35%');
  };

  return (
    <div style={{ padding: 16 }}>
      <TableCanvas
        rows={[
          { id: 1, report: 'Финансовый отчёт' },
          { id: 2, report: 'Итоги квартала' },
        ]}
        columnConfig={[
          { key: 'id', name: 'ID', width: 100 },
          { key: 'report', name: 'Отчёт', width: 360 },
        ]}
        tableConfig={{
          containerStyle: { height: 480 },
          rightSidebarConfig: {
            width,
            defaultOpen: true,
            defaultActiveTabId: 'reports',
            onActiveTabChange,
            defaultTabs: [
              { id: 'tableSettings', showInSidebar: false },
              { id: 'columns', showInSidebar: false },
              { id: 'filtering', showInSidebar: false },
            ],
            customTabs: [
              {
                id: 'reports',
                label: 'Отчёты',
                icon: <IconDocumentOutline size="s" />,
                content: (
                  <div style={{ padding: 16 }}>
                    <BodyS>Сведения об отчёте</BodyS>
                    <BodyS style={{ marginTop: 16 }}>
                      Данные по подразделениям за 2026 год.
                    </BodyS>
                  </div>
                ),
              },
              {
                id: 'books',
                label: 'Книги',
                icon: <IconBookOpenOutline size="s" />,
                content: (
                  <div style={{ padding: 16 }}>
                    <BodyS>Книги отчётов</BodyS>
                    <Button
                      size="xs"
                      view="secondary"
                      style={{ marginTop: 16 }}
                    >
                      Отчётность 2026
                    </Button>
                  </div>
                ),
              },
            ],
          },
        }}
      />
    </div>
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx$$$ExampleDefaultTooltip":`function ExampleDefaultTooltip() {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Title' },
      { key: 'priority', name: 'Priority' },
      { key: 'issueType', name: 'Issue Type' },
      { key: 'developer', name: 'Developer' },
      { key: 'complete', name: '% Complete' },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{
        columnsControl: { enable: true, reorderingHeader: true },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx$$$ExampleColumnTooltipString":`function ExampleColumnTooltipString() {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      {
        key: 'task',
        name: 'Title',
        headerCellTooltip: 'Колонка: Title',
        cellTooltip: ({ row, column }) => \`Ячейка: \${column.name} — \${row.id}\`,
      },
      { key: 'priority', name: 'Priority' },
      { key: 'issueType', name: 'Issue Type' },
      {
        key: 'developer',
        name: 'Developer',
        headerCellTooltip: 'Колонка: Developer',
        cellTooltip: ({ row }) =>
          row.developer ? \`Разработчик: \${row.developer}\` : null,
      },
      { key: 'complete', name: '% Complete' },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{
        columnsControl: { enable: true, reorderingHeader: true },
        tooltip: { enabled: true },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx$$$ExampleColumnTooltipObject":`function ExampleColumnTooltipObject() {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Title' },
      { key: 'priority', name: 'Priority' },
      { key: 'issueType', name: 'Issue Type' },
      { key: 'developer', name: 'Developer' },
      {
        key: 'complete',
        name: '% Complete',
        cellTooltip: ({ row }) => {
          const pct = row.complete ?? 0;
          const isHigh = typeof pct === 'number' && pct >= 80;
          return {
            text: isHigh ? \`\${pct}% — почти готово!\` : \`Прогресс: \${pct}%\`,
            placement: isHigh ? ('top' as const) : ('bottom' as const),
            minWidth: 15,
          };
        },
      },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{
        columnsControl: { enable: true, reorderingHeader: true },
        tooltip: { enabled: true },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx$$$ExampleColumnTooltipMultiline":`function ExampleColumnTooltipMultiline() {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      {
        key: 'task',
        name: 'Title',
        cellTooltip: ({ row, column }) => ({
          text: \`Колонка: \${column.name}\\nЗадача: \${row.task}\\nID: \${row.id}\`,
          preserveLineBreaks: true,
        }),
      },
      { key: 'priority', name: 'Priority' },
      { key: 'issueType', name: 'Issue Type' },
      { key: 'developer', name: 'Developer' },
      { key: 'complete', name: '% Complete' },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{
        columnsControl: { enable: true, reorderingHeader: true },
        tooltip: { enabled: true },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx$$$ExampleButtonWithTooltip":`function ExampleButtonWithTooltip() {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Title' },
      {
        key: 'action',
        name: 'Действие',
        renderCell: () => (
          <Canvas.Container direction="row" gap={8}>
            <Canvas.Button
              portalHoverEnabled
              tooltip="Нажмите для перехода в карточку"
              variant="secondary"
              onClick={() => {}}
            >
              Подробнее
            </Canvas.Button>
          </Canvas.Container>
        ),
      },
    ],
    [],
  );

  return <TableCanvas columnConfig={columnConfig} rows={rows} />;
};`,"packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx$$$ExampleGlobalTooltipWidth":`function ExampleGlobalTooltipWidth() {
  const [rows] = useState(createRows);

  const longText =
    'Очень длинный текст подсказки, который заведомо шире тултипа и переносится по словам, чтобы была видна ограниченная ширина';

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      {
        key: 'task',
        name: 'Title (ширина из tableConfig)',
        width: 160,
        renderCell: ({ row }) => (
          <Canvas.Container direction="row" alignItems="center" padding={8}>
            <Canvas.Text
              overflow="hidden"
              textOverflow="ellipsis"
              autoTooltip
              style={{ flexGrow: 1 }}
            >
              {\`\${row.task}: \${longText}\`}
            </Canvas.Text>
          </Canvas.Container>
        ),
      },
      {
        key: 'developer',
        name: 'Developer (свой maxWidth)',
        width: 160,
        renderCell: ({ row }) => (
          <Canvas.Container direction="row" alignItems="center" padding={8}>
            <Canvas.Text
              overflow="hidden"
              textOverflow="ellipsis"
              autoTooltip={{ maxWidth: 360 }}
              style={{ flexGrow: 1 }}
            >
              {\`\${row.developer}: \${longText}\`}
            </Canvas.Text>
          </Canvas.Container>
        ),
      },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{ tooltip: { maxWidth: 200 } }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
};`,"packages/storybook/src/stories/TourWidget/TourWidget.examples.tsx$$$clampStep":`function clampStep(step: number, stepsCount: number) {
  return Math.min(Math.max(step, 0), stepsCount - 1);
};`,"packages/storybook/src/stories/TourWidget/TourWidget.examples.tsx$$$MediaPlaceholder":`function MediaPlaceholder({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  return (
    <Box
      $css={{
        width: \`\${width}px\`,
        height: \`\${height}px\`,
        borderRadius: '6px',
        backgroundColor: '#fff',
        backgroundImage:
          'linear-gradient(45deg, #eeeeee 25%, transparent 25%), linear-gradient(-45deg, #eeeeee 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #eeeeee 75%), linear-gradient(-45deg, transparent 75%, #eeeeee 75%)',
        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0',
        backgroundSize: '20px 20px',
      }}
    />
  );
};`,"packages/storybook/src/stories/TourWidget/TourWidget.examples.tsx$$$PulseTarget":`function PulseTarget() {
  return (
    <Box
      $css={{
        position: 'relative',
        width: '180px',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-primary)',
        background: 'var(--surface-solid-card)',
        borderRadius: '12px',
      }}
    >
      <Box
        aria-hidden
        $css={css\`
          position: absolute;
          \${tourPulseMixin()}
        \`}
      />
      <Box
        as="span"
        $css={{
          position: 'relative',
        }}
      >
        Target
      </Box>
    </Box>
  );
};`,"packages/storybook/src/stories/TourWidget/TourWidget.examples.tsx$$$VerticalExample":`function VerticalExample() {
  const tourStepsCount = 14;
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <TourWidget activeStepIndex={activeStepIndex} $css={{ width: '298px' }}>
      <TourWidget.Content>
        <MediaPlaceholder width={266} height={266} />
      </TourWidget.Content>
      <TourWidget.Header title="Title" description="Description" />
      <TourWidget.Footer>
        <Box
          $css={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <TourWidget.Bullets
            count={tourStepsCount}
            $css={{ marginInline: 'auto' }}
          />
          <Box
            $css={{
              display: 'flex',
              flexDirection: 'row',
              gap: '4px',
              marginTop: '20px',
            }}
          >
            <Button
              size="s"
              stretching="filled"
              view="secondary"
              onClick={() =>
                setActiveStepIndex((current) =>
                  clampStep(current - 1, tourStepsCount),
                )
              }
            >
              Назад
            </Button>
            <Button
              stretching="filled"
              size="s"
              view="default"
              onClick={() =>
                setActiveStepIndex((current) =>
                  clampStep(current + 1, tourStepsCount),
                )
              }
            >
              Далее
            </Button>
          </Box>
          <LinkButton
            size="s"
            view="default"
            onClick={() => setActiveStepIndex(0)}
          >
            Пропустить всё
          </LinkButton>
        </Box>
      </TourWidget.Footer>
    </TourWidget>
  );
};`,"packages/storybook/src/stories/TourWidget/TourWidget.examples.tsx$$$HorizontalExample":`function HorizontalExample() {
  const tourStepsCount = 14;
  const [activeStepIndex, setActiveStepIndex] = useState(5);

  return (
    <TourWidget
      orientation="horizontal"
      activeStepIndex={activeStepIndex}
      $css={{ width: '732px', height: '272px' }}
    >
      <TourWidget.Content>
        <MediaPlaceholder width={240} height={240} />
      </TourWidget.Content>
      <TourWidget.Header title="Title" description="Description" />
      <TourWidget.Footer>
        <Box
          $css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px',
            width: '100%',
          }}
        >
          <Box
            $css={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              minWidth: 0,
            }}
          >
            <LinkButton
              size="s"
              view="default"
              onClick={() => setActiveStepIndex(0)}
            >
              Пропустить всё
            </LinkButton>
            <TourWidget.Bullets count={tourStepsCount} />
          </Box>
          <Box
            $css={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <Button
              size="s"
              view="secondary"
              onClick={() =>
                setActiveStepIndex((current) =>
                  clampStep(current - 1, tourStepsCount),
                )
              }
            >
              Назад
            </Button>
            <Button
              size="s"
              view="default"
              onClick={() =>
                setActiveStepIndex((current) =>
                  clampStep(current + 1, tourStepsCount),
                )
              }
            >
              Далее
            </Button>
          </Box>
        </Box>
      </TourWidget.Footer>
    </TourWidget>
  );
};`,"packages/storybook/src/stories/TourWidget/TourWidget.examples.tsx$$$TourWithPulseExample":`function TourWithPulseExample() {
  const tourStepsCount = 14;
  const [activeStepIndex, setActiveStepIndex] = useState(2);

  return (
    <Box
      $css={{
        display: 'grid',
        gridTemplateColumns: '220px minmax(0, max-content)',
        gap: '14px',
        alignItems: 'center',
      }}
    >
      <Box
        $css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '300px',
        }}
      >
        <PulseTarget />
      </Box>
      <TourWidget
        orientation="horizontal"
        activeStepIndex={activeStepIndex}
        $css={{ width: '732px', height: '272px' }}
      >
        <TourWidget.Content>
          <MediaPlaceholder width={240} height={240} />
        </TourWidget.Content>
        <TourWidget.Header title="Title" description="Description" />
        <TourWidget.Footer>
          <Box
            $css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '32px',
              width: '100%',
            }}
          >
            <Box
              $css={{
                display: 'flex',
                alignItems: 'center',
                gap: '32px',
                minWidth: 0,
              }}
            >
              <LinkButton
                size="s"
                view="default"
                onClick={() => setActiveStepIndex(0)}
              >
                Пропустить всё
              </LinkButton>
              <TourWidget.Bullets count={tourStepsCount} />
            </Box>
            <Box
              $css={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <Button
                size="s"
                view="secondary"
                onClick={() =>
                  setActiveStepIndex((current) =>
                    clampStep(current - 1, tourStepsCount),
                  )
                }
              >
                Назад
              </Button>
              <Button
                size="s"
                view="default"
                onClick={() =>
                  setActiveStepIndex((current) =>
                    clampStep(current + 1, tourStepsCount),
                  )
                }
              >
                Далее
              </Button>
            </Box>
          </Box>
        </TourWidget.Footer>
      </TourWidget>
    </Box>
  );
};`,"packages/storybook/src/stories/TourWidget/TourWidget.examples.tsx$$$PulseExample":`function PulseExample() {
  return (
    <Box
      $css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '300px',
      }}
    >
      <PulseTarget />
    </Box>
  );
};`,"packages/storybook/src/stories/TourWidget/TourWidget.examples.tsx$$$TourWithoutContentExample":`function TourWithoutContentExample() {
  const tourStepsCount = 14;
  const [activeStepIndex, setActiveStepIndex] = useState(2);

  return (
    <Box
      $css={{
        display: 'grid',
        gridTemplateColumns: '220px minmax(0, max-content)',
        gap: '14px',
        alignItems: 'center',
      }}
    >
      <Box
        $css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '300px',
        }}
      >
        <PulseTarget />
      </Box>
      <TourWidget
        orientation="horizontal"
        activeStepIndex={activeStepIndex}
        $css={{ width: '500px' }}
      >
        <TourWidget.Header title="Title" description="Description" />
        <TourWidget.Footer>
          <Box
            $css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '32px',
              width: '100%',
            }}
          >
            <Box
              $css={{
                display: 'flex',
                alignItems: 'center',
                gap: '32px',
                minWidth: 0,
              }}
            >
              <LinkButton
                size="s"
                view="default"
                onClick={() => setActiveStepIndex(0)}
              >
                Пропустить всё
              </LinkButton>
            </Box>
            <Box
              $css={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <Button
                size="s"
                view="secondary"
                onClick={() =>
                  setActiveStepIndex((current) =>
                    clampStep(current - 1, tourStepsCount),
                  )
                }
              >
                Назад
              </Button>
              <Button
                size="s"
                view="default"
                onClick={() =>
                  setActiveStepIndex((current) =>
                    clampStep(current + 1, tourStepsCount),
                  )
                }
              >
                Далее
              </Button>
            </Box>
          </Box>
        </TourWidget.Footer>
      </TourWidget>
    </Box>
  );
};`,"packages/storybook/src/stories/TourWidget/TourWidget.examples.tsx$$$LineBreaksExample":`function LineBreaksExample() {
  return (
    <TourWidget $css={{ width: '340px', paddingBottom: '24px' }}>
      <TourWidget.Header
        title={'Знакомьтесь:\\nновые возможности'}
        description={
          'Режимы просмотра\\nОбщий реестр — все пилоты со статусом «В реестре»\\n• Мои пилоты — только ваши проекты, включая черновики'
        }
      />
    </TourWidget>
  );
};`},a=(e,t)=>{const o=`${e}$$$${t}`;return(n==null?void 0:n[o])??""};export{a as g};
