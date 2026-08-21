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
};`,"packages/storybook/src/stories/TourWidget/TourWidget.examples.tsx$$$clampStep":`function clampStep(step: number, stepsCount: number) {
  return Math.min(Math.max(step, 0), stepsCount - 1);
};`,"packages/storybook/src/stories/TourWidget/TourWidget.examples.tsx$$$TourView":`function TourView({ children }: React.PropsWithChildren) {
  return <ViewContainer view="onDark">{children}</ViewContainer>;
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
    <TourView>
      <TourWidget
        activeStepIndex={activeStepIndex}
        $css={{ width: '286px', height: '480px' }}
      >
        <TourWidget.Content>
          <MediaPlaceholder width={266} height={266} />
        </TourWidget.Content>
        <TourWidget.Header title="Title" />
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
                view="white"
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
    </TourView>
  );
};`,"packages/storybook/src/stories/TourWidget/TourWidget.examples.tsx$$$HorizontalExample":`function HorizontalExample() {
  const tourStepsCount = 14;
  const [activeStepIndex, setActiveStepIndex] = useState(5);

  return (
    <TourView>
      <TourWidget
        orientation="horizontal"
        activeStepIndex={activeStepIndex}
        $css={{ width: '720px', height: '260px' }}
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
                view="white"
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
    </TourView>
  );
};`,"packages/storybook/src/stories/TourWidget/TourWidget.examples.tsx$$$TourWithPulseExample":`function TourWithPulseExample() {
  const tourStepsCount = 14;
  const [activeStepIndex, setActiveStepIndex] = useState(2);

  return (
    <TourView>
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
          $css={{ width: '720px', height: '264px' }}
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
                  view="white"
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
    </TourView>
  );
};`,"packages/storybook/src/stories/TourWidget/TourWidget.examples.tsx$$$PulseExample":`function PulseExample() {
  return (
    <TourView>
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
    </TourView>
  );
};`,"packages/storybook/src/stories/TourWidget/TourWidget.examples.tsx$$$TourWithoutContentExample":`function TourWithoutContentExample() {
  const tourStepsCount = 14;
  const [activeStepIndex, setActiveStepIndex] = useState(2);

  return (
    <TourView>
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
          $css={{ width: '480px' }}
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
                  view="white"
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
    </TourView>
  );
};`},i=(e,t)=>{const o=`${e}$$$${t}`;return(n==null?void 0:n[o])??""};export{i as g};
