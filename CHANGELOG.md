# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 1.10.1 (2026-07-28)

**Note:** Version bump only for package @dais-ui/source

# [1.10.0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v1.9.0...v1.10.0) (2026-07-24)

### Bug Fixes

- **FormTextField:** очистка по крестику запускает валидацию при mode: onChange для формы. ([790871a](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/790871a05d4e0a7721886970edebf39f67ec0ef0))

### Features

- **CanvasTable:** Canvas.Text. Добавлена фича `autoTooltip` - появление tooltip-а для canvas-элемента при переполнении и обрезании текста ([679519d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/679519dbe9cee55d7bb62325dd87fd001fcecea8))
- **TableCanvas:** tableConfig.hoverEffects. Добавлена поддержка подсветки строки при наведении мышкой ([4d12db7](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/4d12db7233c20a3067a064cc33888b09c71272c5))

# [1.9.0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v1.8.0...v1.9.0) (2026-07-19)

### Bug Fixes

- **TableCanvas,Table:** исключение служебных колонок из "скрыть все" в настройках колонок. ([a837452](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/a8374527617912b7c8595b1947c992f82bf680dd))

### Features

- **EmptyState:** добавлен новый вариант вида life-circle ([bffde36](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/bffde36bf9c0c7d319d82b9b2ee4a70c3de37ea6))
- **ErrorPage:** добавлена поддержка m s размеров для компонента ErrorPage. ([4036261](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/4036261673169fa0988d88aed2d546b95a9d1c72))
- **MassActions, Table.controlBlock.massActionPanel, TableCanvas.controlBlock.massActionPanel:** улучшена документация компонента. Скорректированы отступы/размеры, добавлена размерная сетка для табличных вариантов, теперь могут быть xs размеры внутри таблицы для панели массовых действий, кнопки/dropdown/отступы автоматически используют нужные размеры. ([f69a651](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/f69a651e0e4d88d42b80f413ef0f7ef59648d70b))
- **PopupDF:** добавлен новый проп rightBlock для рендер кастомных слотов в правой части шапки PopoverDF ([7712ad8](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/7712ad827430bf587d985557ff06e33789254d7e))
- **Table, TableCanvas:** Реализована поддержка асинхронной подгрузки пунктов контекстного меню для таблиц ([fc82f95](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/fc82f95772c60c48447be010a5b99dd9282a8916))
- **TableCanvas, Table:** контролируемый режим видимости кнопки "Группировать" в controlBlock ([5aca904](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/5aca9045591d798c716847f1b0efa8cf72013a24))
- **TableCanvas.contextMenu, Table.сontextMenu:** реализовано автоматическое закрытие контекстного меню при скроле таблицы по вертикале. ([2cfd49c](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/2cfd49c40b080333c715da24600a966999e22313))

# [1.8.0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v1.7.1...v1.8.0) (2026-07-13)

### Bug Fixes

- **TableCanvas:** исправлено Canvas.Text отображение ellipsis при flex direction ([4253696](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/42536967223f533dec62fb3b42734547d0f45705))

### Features

- **FiltersActions:** для фильтра popover добавлен renderTarget ([0d51303](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/0d5130326fed920178433770f84b635d87bd89b6))
- **LeftPanel:** Улучшена анимация закрытия / открытия LeftPanel, исправлены баги с дерганьем при ресайзе в момент закрытия / открытия. ([869ddaf](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/869ddaf303ec2594c1e9cd07f09ecc92cbfb6fa1))
- **PopoverDF, FiltersActions.FiltersButtonWithPopover:** тени изменены на shadowDownHardS ([199b1f6](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/199b1f60b991fcf6b6ba797fd1c6016ee92b4775))
- **Table, TableCanvas:** добавлен контролируемый режим управления состоянием правого sidebar таблицы. Добавлен callback для получения активного состояния таба. ([83979c6](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/83979c6bfe5df244bde3e1f52a01c32cc28b2003))
- **TableCanvas:** реализовано меню для быстрого закрепления колонок из controlBlock таблицы ([fd490b4](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/fd490b418eda258aaea71b311d56c81ccda7a7ca))
- **TableCanvas:** Скорректировано направление визуальное направление сортировки. Добавлена возможность откреплять колонку через иконку pin в шапке ячейки. ([aec9b60](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/aec9b60f8638eb4dc6ccf44b953a2fbcbdb3f0bc))

## [1.7.1](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v1.7.0...v1.7.1) (2026-07-07)

### Bug Fixes

- **TourWidget:** исправления по авторскому надзору ([3ff39ab](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/3ff39abee59ee1d41473bf57428f05b113bc5f06))

# [1.7.0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v1.6.4...v1.7.0) (2026-07-03)

### Bug Fixes

- **Table:** добавлен autoFocus для поиска в combobox и фильтре ([95ee25f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/95ee25f4ca68241d5a2c7743eccb867620b59a72))

### Features

- **AnalyticalWidget:** добавлены hrefProps (onClick, onKeyDown) для ссылки-иконки ([3630fd9](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/3630fd9527f34ac4eb547384135b8d053762211d))
- **ApprovalCenter:** добавлен новый компонент ApprovalCenter. Используется в случаях, когда необходимо необходимо отобразить последовательные согласования между группами лиц ([f953e87](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/f953e878316013e3e0897c15b640d7af41932aa2))
- **Carousel:** добавлен новый компонент Carousel ([6cc4436](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/6cc4436e99f9d24d563fbbe8c5fe7824da32b404))
- **TableCanvas.Notification, TableCanvas.CellsSelection, TableCanvas.highlightActiveType:** добавлен новый модуль нотификаций таблицы с возможностью подписки. Добавлен новый модуль cellsSelection для управления выделением ячеек на уровне таблицы. highlightActiveType вынесен в отдельную независимую ось подсветки ([ca2d9ac](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/ca2d9ac8e9521d964a247a4549312c05467c8c73))

## [1.6.4](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v1.6.3...v1.6.4) (2026-07-02)

**Note:** Version bump only for package @dais-ui/source

## [1.6.3](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v1.6.2...v1.6.3) (2026-07-01)

**Note:** Version bump only for package @dais-ui/source

## [1.6.2](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v1.6.1...v1.6.2) (2026-07-01)

**Note:** Version bump only for package @dais-ui/source

## [1.6.1](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v1.6.0...v1.6.1) (2026-06-29)

### Bug Fixes

- **TourWidget:** правки по авторскому надзору ([5313aef](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/5313aef61057716e823ef2a53698e68137b15fae))

# [1.6.0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v1.5.0...v1.6.0) (2026-06-26)

### Features

- **BlockTitle, PageTitle, SplitView, LeftPanel:** добавлены новые стили для компонентов при ширине экрана меньше 1280px ([62a70b6](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/62a70b6c12b625cab38854f7a738ee379f624391))
- **TableCanvas.editing:** tableConfig.editing.deepCloneRows. Новый prop - deepCloneRows для глубокого копирования данных перед редактированием. ([051c861](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/051c861f14f513848f51b9f2f0c88121252efd87))
- **Атомарные зависимости:** обновлены атомарные пакеты [@salutejs](https://stash.dddddd.ru:7999/salutejs) (sdds-finai, sdds-themes, plasma-icons, plasma-typo) ([cedd8f1](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/cedd8f1cbdfd1bd5b68469bb786f35d94fd7418c))

# [1.5.0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v1.4.0...v1.5.0) (2026-06-22)

### Bug Fixes

- **SplitView, ModalDF, PopoverDF, PopupDF:** исправления в рамках авторского надзора ([72e9cf2](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/72e9cf243dc288473af76a359c053473707b9eaf))
- **TableCanvas:** tableConfig.filtering. Исправлен выход текста за рамки у лейбла фильтра с длинным названием ([90f1b02](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/90f1b02dc40080aeb99d15541dc9ef461dde1f33))
- **Table:** стабилизация refs для предотвращения лишних ре-рендеров ([89289ce](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/89289cee5ea50f1119f6a15dc6b5f5c59e80cf49))

### Features

- **TableCanvas:** redesign controlBlock. Новые алгоритмы компрессии фичей. ([6b8fef2](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/6b8fef25925f76adbd2322286edfdae4a2da1165))
- **TourWidget:** добавлен компонент TourWidget ([7ce96de](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/7ce96de4058cff3ad5a27ce278eae5ff1255f265))

# [1.4.0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v1.3.0...v1.4.0) (2026-06-05)

### Bug Fixes

- **Textarea,Textfield,TextfieldSearch,AutocompleteSearch:** исправлено поведение ReadOnly для Textarea, Textfield, TextfieldSearch, AutocompleteSearch ([f0ff71c](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/f0ff71cee14538f0f0a71f2db2feacea9559bf6c))

### Features

- **ErrorPage:** добавлен пропс errorId для отображения идентификатора ошибки ([a25c63a](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/a25c63a14ca73f61bf9102fc84d13049bb807a61))
- **TableCanvas, Table:** добавлен контроль отображения панели массовых действий через massActionPanel.show ([5fbf16e](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/5fbf16ef804140384ac6825b9f7671457bbe7cb2))
- **TableCanvas:** добавлен columnConfig.maxAutoWidth для управления шириной колонки при первом рендере. Улучшено поведение ресайз. ([a76a0aa](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/a76a0aa2434c21c5b0af987dc6531e618fa46c64))
- **TableCanvas:** добавлен параметр tableConfig.enableLowDprHairline для стабильного отображения границ ячеек при zoom ниже 100% ([040d953](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/040d9534b6c6626c4a2b73f6ff5b68b5ddfe4613))
- **TooltipList:** добавлен проп fullWidth для растягивания обёрток на 100% ширины ([a0cc182](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/a0cc18221307617aeb3d0920b057ef472e99f120))

# [1.3.0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v1.2.0...v1.3.0) (2026-06-02)

### Features

- **NumberFormatAmount:** добавил новый компонент NumberFormatAmount ([cde8452](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/cde8452648ad570f93146435df35f7cefdcbd103))
- обновлены атомарные зависимости ([c4c2751](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/c4c27519cc5a9a2ca4d00d06c462f87b5b56ff3c))

# [1.2.0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v1.1.0...v1.2.0) (2026-05-29)

### Features

- **TableCanvas:** добавлен tableConfig.cellTransfer.onBeforeFill для предобработки данных при расстягивании, добавлены доп аргументы (type, fillMeta,fillResult) для tableConfig.editing.onRowsChange ([fe9408d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/fe9408d1b851d038380cb934f0928cccd363e1b0))
- **TableCanvas:** обновлена структура документации Canvas элементов — добавлены отдельные страницы с описанием и API для CanvasBadge, CanvasButton, CanvasCheckbox, CanvasContainer, CanvasIcon, CanvasIconButton, CanvasLink, CanvasSkeleton, CanvasText ([200d992](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/200d9927951b1a1bf2dc1c242e0379951553e227))

# [1.1.0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v1.0.0...v1.1.0) (2026-05-25)

### Bug Fixes

- **AnalyticalWidget:** скорректированы media запросы ([a807020](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/a80702024f0003778c2779a350419371b3ff3d10))
- **PageLayout:** скорректирована минимальная высота PageLayout ([8c62c9d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/8c62c9d6d528b439de2c28375afb18c6840beee1))

### Features

- **AnalyticalWidget:** для шапки добавлен новый props titleLinkProps, title можно делать ссылкой. ([798edf2](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/798edf28c2fb33143e996de60395fc33b74ace21))
- **TableCanvas:** для колоночного конфига добавлена поддержка minWidth, maxWidth ([1fefdc7](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/1fefdc720f6d4c4c8a92aac5cd779ec61091c229))
- **TableCanvas:** добавлена поддержка ellipsis, maxLines для Canvas.Text ([7bf8793](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/7bf879343e7b1a13bd29acdbd3271c763a1d8254))

# [1.0.0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.12.0...v1.0.0) (2026-05-15)

### Features

- **FormDatePicker, FormDatePickerRange:** расширены варианты format для компонентов. ([8b64413](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/8b644132bbf42910dbf4726934e0ca3dd5fb8caf))
- **PopupDF, PopoverDF:** правки по авторскому надзору. Исправлены отступы, размеры. Расширены примеры в Storybook ([9053031](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/905303127153887b5184c02c19b703021060e12a))
- **TableCanvas.columnConfig.renderCellPreview:** в колоночный конфиг добавлено новое опциональное поле renderCellPreview для переопределения вида ячейки в preview ([ea7ed87](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/ea7ed878fe05d178ca4cd07adffa55c441cf67b4))

### BREAKING CHANGES

- **Атомарные компоненты:** приведение размеров и view компонентов к дизайн-макетам ([ca5e8b7](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/ca5e8b78198a6a50a7d26e48350a589fba8fccf5))

Cкорректированы размеры (size) и варианты отображения (view) ряда атомарных компонентов. Изменения приводят типы в соответствие с актуальными макетами — убраны размеры и view, которых не существовало в дизайне, но которые были доступны в коде.

С полным списком изменений можно ознакомиться по [ссылке](https://pixso.design.dddd.ru/app/editor/1U6rKS0lFK2qlKcXcyzj6w?item-id=2%3A82&page-id=0%3A1).

Обновлены версии атомарных пакетов:

- @salutejs/plasma-icons: 1.235.0 -> 1.237.0
- @salutejs/sdds-finai: 0.338.0 -> 0.340.0
- @salutejs/sdds-themes: 0.62.0 -> 0.64.0

# [0.12.0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.11.0...v0.12.0) (2026-05-12)

### Bug Fixes

- **FormTextArea:** при disabled кнопка очистки теперь не отображается. ([4d9ed34](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/4d9ed3431224278d08ea15c6671d28a1ad266795))
- **TableCanvas:** исправлен баг, связанный с исчезновением скрытых столбцов в sidePanel в настройках столбцов. ([7687dd0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/7687dd02da26b93553d585d91d29e396d0ed2921))

### Features

- **Storybook.Changelog:** добавлен changelog библиотеки с поиском в storybook ([ba5b2e9](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/ba5b2e95cc9d8789924895d2df4bb303b35028bf))
- **TableCanvas:** editing. Добавлена поддержка нового пропса editorOverlayPortal, нужен для случаев, когда нужно активировать функцию редактирования внутри Modal. ([e0c14a8](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/e0c14a879804f53b6e6e0ba1d097cfc763a1cef3))
- **TableCanvas:** renderCell. Добавлены состояния cellInfo.hovered и cellInfo.active в аргументе renderCell. ([072f4a9](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/072f4a9497dfcf6222b8086b552811024c56dc7b))
- **TableCanvas:** добавлена возможность переопределять свойства ячейки на уровне колоночного конфига через columnConfig.themeOverride. ([453ec45](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/453ec45520c8a95f09265dc6cd790886e860bddd))
- **TableCanvas:** редактирование и zIndex. Добавлено открытие select в режиме редактирования по 1 клику на chevron. В CanvasElements добавлен zIndex ([775d258](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/775d2583258dfc837f985cfa30bec121ac0a302a))
- **TableCanvas:** редактирование. Добавлено свойство `tableConfig.editing.buttons` для управление состоянием кнопок Сохранить/Отменить/Редактировать извне. ([4d88524](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/4d8852421ab0914e916f1ff52cc4c867c8767b7b))

# [0.11.0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.10.0...v0.11.0) (2026-04-30)

### Features

- **TableCanvas:** Сanvas-элементам в событие onClick добавлена возможнось останавливать всплытие события - event.stopPropagation(). Можно использовать в случаях, когда клик на канвас элемент не должен вызывать onCellClicked, режим редактирования ячейки. ([c605e1e](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/c605e1edb45f52b3e4ef77ad8ebdb48c46a0850a))

# [0.10.0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.9.1...v0.10.0) (2026-04-24)

### Bug Fixes

- **FormDatePicker:** отсутствие onChange callback не блокирует ручное удаление значений из календаря. ([eed8f57](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/eed8f57dc220b5f85e3b54192332869cd356a6a6))
- **PageLayout:** отступы по боками и снизу по 24px начинаются с <= 1280px viewport ([f9ad356](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/f9ad356cf78c38db2a1540ab5b18b24d623d2d7a))
- **TableCanvas, Table:** dropdown обертка при disabled не будет открывать список с элементами в ControlBlock. ([586067a](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/586067adba95b5130c013350a6cd8383398bf478))
- **TableCanvas,Table,TableGlide:** исправлена ошибка сборки на vite-проектах. ([fb8a09e](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/fb8a09edfbdf811a4742c83bd74e57c5b6bf2227))
- **TableCanvas.MassActionPanel:** кнопка сброса и главный чекбокс selecting корректно очищают selecting rows ([2583a35](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/2583a3594c47e01d9e98ad8389955e83e9458cd1))

### Features

- **TableCanvas:** Добавлен функционал копирования диапазона ячеек. Добавлен функционал вставки скопированного диапазона значений в режиме редактирования. Добавлен функционал fill-заполнения протяжки ячеек excel-like. ([6174bf2](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/6174bf296ced4a3873ccdbdc23d4719e73f1bda8))

## [0.9.1](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.9.0...v0.9.1) (2026-04-20)

### Bug Fixes

- **TableCanvas:** поднят приоритет режима просмотра, поправлен баг при открытии режима редактирования ([d90a2a9](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/d90a2a960f2ce6aa460fe01d5355bbcdd12414f5))

# [0.9.0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.8.0...v0.9.0) (2026-04-17)

### Bug Fixes

- **Notification:** исправлен title с прозрачным текстом ([8afea09](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/8afea093782a628e4dade461cbe5408ff2d45226))
- **TableCanvas:** актуализация размеров SIZES ([c06872e](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/c06872e7c896a2fdcbcea7c03868a944e27f2ef1))
- **TableCanvas:** в режиме редактирования поправлена возможность редактирования readOnly ячеек. Улучшено представление preview нередактируемой ячейки ([3cd3e7b](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/3cd3e7b7f40e0bee66b1c14ce759c5d270f8327e))
- **TextFieldSearch,AutocompleteSearch,TableCanvas,Table:** усилены css-селектры на уровне шаблонных компонентов, чтобы стили не могли быть перезаписаны случайно ([a77dd69](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/a77dd695ad372308cbc3a83cd3f75b5aae14044a))

### Features

- **AiAgentPopover:** для target кнопки добавлена возможность добавлять data-атрибуты. ([3f957cc](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/3f957cc49578251b791984898b8f3f9c6b5ef3f1))
- **GridDND:** добавлена возможность прокинуть callback onResize для изменения типа виджета ([2c71ea5](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/2c71ea56d3fcb53e0a5491358a5d7addb90a806c))
- **TableCanvas.onCellClicked:** добавлена возможность контроля клика по ячейки извне через tableConfig ([a06bc96](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/a06bc96636c09b1f2c06370ef1f9bb28745d3c6e))
- **TableCanvas.Tooltip:** расширены пропсы для tooltip внутри таблицы Canvas. Теперь можно использовать minWidth/maxWidth для задания ширины tooltip. ([c0c619c](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/c0c619cc3dd8ad8d067b331a5a11ece4b9bb36fd))

# [0.8.0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.7.0...v0.8.0) (2026-04-10)

### Features

- **EmptyState, ErrorPage:** скорректированы отступы. Изменены картинки. Статус not-result помечен как deprecated ([9478cbc](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/9478cbc9c4ff3501891e603e34463b700f047dff))
- **MassActions, blockGradientScroll:** добавлен адаптив 1280 ([4a9493d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/4a9493d0d37d71da8652e0faeb335989841589d6))
- **PopoverDF:** добавлен компонент PopoverDF ([e2910da](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/e2910dac4da81769c4c5f6d6305c0df502e53fe0))
- **PopupDF:** добавлен компонент PopupDF ([490bd24](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/490bd24b93e3a13f5992c34f4c6fdfded0e5ddb5))
- **Table, TableCanvas:** скорректированы размеры блока пагинации в таблицах. Размеры m, l более не доступны, блоки пагинации по умолчанию имеют размер s ([ab92063](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/ab92063800d586da9b6c9ff37f32388abc2db7fa))
- **TableCanvas, Table:** расширена поддержка domMetadata свойством onClick. Добавили возможность отслеживать управление колонками (pin, switch видимости, группировка), открытие / закрытие sidebar, смена размера строки. Добавлена отдельная story в storybook с примерами использования domMetadata. ([41b893f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/41b893fbd4701951113fbc7fb39d92675fe5459c))
- **Theme:** Добавлена светлая контрастная тема ([b4dedb2](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/b4dedb2a51ab21b123170772df5a98a24089161e))

# [0.7.0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.6.0...v0.7.0) (2026-04-03)

### Bug Fixes

- **AnalyticalWidget:** minWidth виджетов скорректирован. Исправлено обрезание фона кнопки-стрелки, показывающейся при наведении на карточку. ([cee0f57](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/cee0f57ab4ca5a633be913bf74c2e211109bd9fb))
- **BlockTitle:** актуализация документации, lestSLot -> topSlot ([aeb46c2](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/aeb46c2767d15b23fa8a3bc5e593e0f41531fadf))
- **TableCanvas.ContextMenu:** контекстное меню для ячейки не будет открываться, если передали пустой массив элементов списка. ([4686a0b](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/4686a0b6d44b7ee1ebe072ae00396c8a85e15675))
- **TableCanvas.subrows:** корректное отображение canvas элементов в подстроках ([2974ccc](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/2974ccc64993d840ea77d5e3615aaa720162b4af))
- **TableCanvas:** исправлено скругление loadingOverlay в TableCanvas внутри табов ([701f595](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/701f595ee697bb4e5496330d2374c7470cfd979a))
- **TextFieldSearch:** при наведении и нажатии исправлено поведение изменения цвета подложки поиска ([85edad9](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/85edad92128d5eb703a923252adb2aae13f000be))

### Features

- **GridDND:** добавлена новая функциональность активации D&D с задержкой. Скорректированы цвета выделения items. Добавлена блокировка items в момент перетаскивания(userSelect: none) ([398a477](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/398a477eb456f6a609f506fe6d7d84fd0ff18968))
- **GridDND:** умная активация D&D, при зажатии на скролл или выделении текста активации не будет ([a788043](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/a7880430316ed298d641309e6b7c423e685036a6))
- **TableCanvas.Badge:** canvas элемент Badge был расширен customColor и customBackgroundColor ([2383557](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/23835572687e130968c40609b7b416bb1ce1f447))
- **TableCanvas.ContextMenu:** добавлена возможность кастомизации контекстного меню (size, listWidth, closeOnSelect и др.), исправлена работа closeOnSelect с учётом вложенных подменю. ([9edd8fc](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/9edd8fc5ed57bdc4e7c42a58e73277b0ffb164db))
- **TableCanvas:** Добавлен функционал EmptyState для отображения пустого состояния таблицы ([73ac0aa](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/73ac0aabeb39902c01d3e31f5fc2ccdfcece326b))
- **TableCanvas:** Добавлен функционал ErrorState для отображения состояния ошибки таблицы ([19d874b](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/19d874b0d247cbf9e545d65f1cb3d5be602186bd))

# [0.6.0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.5.0...v0.6.0) (2026-03-27)

### Features

- **ErrorPage:** добавлена возможность показывать статус-код. Скорректированы тексты ошибок ([1ba8888](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/1ba88885d30dfc589309eebd4e23b120998bfec5))
- **TableCanvas, Table:** добавлена минимальная высота контентной части таблицы ([5d5770c](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/5d5770c9ddef3e31be60a8d1da55e1b198083599))
- **TableCanvas.controlBlock.massActionPanel, Table.controlBlock.massActionPanel:** добавлена поддержка изменения отступа снизу. ([872c571](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/872c571432c794c6946218ac7b03c7c4387fd516))
- **TableCanvas:** добавлен новый Сanvas элемент для ссылок - Canvas.Link ([e109bf5](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/e109bf5b50f167e985449573e3edb4be8b552525))
- **TableCanvas:** Добавлен функционал редактирования. Добавлены новые компоненты редакторов ячеек (CellEditorCombobox, CellEditorNumberFormat, CellEditorTextArea) для кастомного использования. ([8850757](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/8850757d9e802238478367dcafc151f1c0ba514c))
- **TableCanvas:** добавлена настройка подсветки активного элемента - HighlightActiveType. ([551ff50](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/551ff50474fa82811ec55d08e11ad89c583415e7))
- **TableCanvas:** добавлены кнопки редактирования нового вида. Редактировать/Сохранить/Отменить ([f8ab514](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/f8ab514fb95007b0abb0c6276617e2af98dd97b8)), closes [#691](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/issues/691)
- **TableCanvas:** Скорректированы стили и иконки раскрытия кнопки древовидной структуры таблицы. ([bd4a91b](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/bd4a91b55f4bdb288eb82e5efc719a7c7ed1e3fb))
- **TableTabs:** добавлен новый компонент TableTabs. Данный компонент вынесен из Table, TableCanvas. ([42e6c15](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/42e6c15c83bd4e41571ed356e559f8ec09791484))

# [0.5.0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.4.0...v0.5.0) (2026-03-20)

### Bug Fixes

- **Table,TableCanvas:** обновлены стили скролла. Убраны ненужные скругления. Убран отступы сверху и снизу ([ebb2268](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/ebb2268436dd2aeae37fc64c904ee9207b44a44c))
- **TableCanvas:** добавлена предзагрузка иконок header. Решает проблему с исчезающей при клике иконкой в header при первом рендере таблицы ([cf4623f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/cf4623ffd16f56e30aba6f19675c6863bce1653b))

### Features

- **AnalyticalWidget:** добавлен новый props badgeStyles для переопределения стилей метки справа от title. ([ab05007](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/ab050079bb3eb8bea264ae68f0b6b0c2e831c8a9))
- **PageLayout, Layout, SplitView:** Добавлен новый компонент PageLayout. Расширены props компонентов Layout, SplitView, добавлены примеры использования композиций из связки PageLayout + Layout + SplitView + LeftPanel в storybook в рамках документации к новому компоненту. ([061284e](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/061284e106fb29664ce31415a8be5ee85b25f099))
- **ScrollBar:** усилены селекторы scrollbar стилей. ([0248100](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/0248100eb4c8ba1740141b43f849a91879cc4169))
- **Table, TableCanvas:** tableConfig.view - вид отображения перешел в статус deprecated ([445cc4c](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/445cc4cd6f362e04318a507964fdc9081d3f6dc9))
- **TableCanvas, Table:** переработана документация поиска, добавлена поддержка autcomplete для формирования истории поиска. Добавлены новые примеры в storybook. ([f9deea0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/f9deea096de6edebc0de8ae6b3d6e43e3a7d6c7f))
- **TableCanvas,Table:** правый sidebar. Title обернут в компонент TypographyWithAutoTooltip, при длинном имени title в sidebar текст не будет ломать верстку. ([0c4f274](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/0c4f2741c5618b62fe632b1b29dec4c90449f399))
- **Widget:** добавлен новый props titleRightSlot ([8e551df](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/8e551df4368034bf3756c1ed083731a566e20c5d))

# [0.4.0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.3.1...v0.4.0) (2026-03-16)

### Bug Fixes

- **TableCanvas:** исправлена передача настроек ширины и ресайза колонок - resizableColumn, minColumnWidth, maxColumnWidth, maxColumnAutoWidth ([e1a79f3](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/e1a79f3e3976c588acfbf1e5272b78904640540b))

### Features

- **scrollBar:** глобальная стилизация scrollbar ([2c1e00b](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/2c1e00bf416967bfca7193598db0af82e5e7c29c))
- **TableCanvas, Table:** rowSelecting. - добавлена возможность гибкой настройки выбора каждой строки. - добавлена возможность скрывать итоговый чекбокс в шапке. - в аргументе summaryChecked.onChange появилась информация об clearedButtonClicked для отслеживания клика по кнопке очистки. - теперь summaryChecked.rowShowCheckbox, summaryChecked.rowCheckboxDisabled обновляются по ссылке. Функции могут быть не чистыми функциями. ([6e7700e](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/6e7700ead22279596d2e3a7bd23a4f58c501ebb3))
- **TableCanvas:** tooltip, contextMenu, columnFilter изменился подход отображения overlay элементов внутри TableCanvas, улучшен алгоритм поиска glideElements. ([207790a](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/207790aab7607d9085fffed7cdf27b1c38292c31))

## [0.3.1](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.3.0...v0.3.1) (2026-03-10)

### Bug Fixes

- **Table, TableCanvas:** Убрана статичная ширина при передаче кастомного рендера. Улучшены стили для списка внутри поповера фильтров ([086b938](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/086b9387a091a039b098d22e22a41de9e6eba76c))

# [0.3.0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.2.0...v0.3.0) (2026-03-06)

### Bug Fixes

- **ListOfFilters,SplitView:** исправлена проблема с эффектом дерганья списков фильтров при открытии SplitView. ([41e9f76](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/41e9f76fdc073a2d5a9a073246ea7c968721386a))
- **Table, TableCanvas:** исправлена стилизация сложны селекторов в таблицах. stylis мог некорректно обрабатывать переносы строк или :is селекторы, из-за чего у некоторых разработчиков некорректно применялись стилизация иконок фильтрации и сортировки в шапке таблицы. ([5849811](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/5849811c9ce80924eca187af005e49d0e6e3ae57))
- **Table.FilterPopover:** popover в колоночных фильтрах фильтрации таблицы отображается корректно в полноэкранном режиме просмотра таблицы. ([11067b5](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/11067b55d1c560688880166c3faeda3c7d0fd79f))
- **TableCanvas, Table:** исправлена логика сортировки ([365bd2c](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/365bd2c9dab79f7d34c40596c5e6a653e32df5b4))
- **TableCanvas, Table:** редизайн фильтров в заголовке таблицы ([f09b730](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/f09b730628d7f2b74df29db0bb6215ba989a664f))

### Features

- **AnalyticalWidget, GridDND:** Убрана кнопка фильтрации для размера S. Для title subtitle добавлена поддержка line-clamp: 1 (обрезание длинного текста в рамках 1 строки текста). Добавлены новые дефолтные параметры конфигурации GridDND для колонок/брейкпоинтов. Скорректирована документация AnalyticalWidget и GridDND ([e94e2ae](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/e94e2ae5b31d1ae7789c6dd6095b7795f8e2f6ca))
- **FiltersActions.Docs:** обновлена документация компонента FiltersActions. Появился отдельный раздел API. В документацию вынесены пояснения для хука useFiltersList. Сделан ренейминг компонентов FilterPopover -> FiltersButtonWithPopover. ([9214098](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/921409865ba3af7463ef249a5b7cb2eaab0b86a8))
- **FiltersActions.FilterPopover:** расширены пропсы для FilterPopover. Теперь можно передавать набор пропсов для target кнопки фильтров. ([697d4f7](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/697d4f7b54f19a8e33c69d2b6c97c5a6f57665b4))
- **TableCanvas:** Добавлен параметр pilled для закругления Canvas элемента Badge ([54a4f59](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/54a4f597e68fb04a8b8c7ddba302aa0385f6c9c5))
- **TableCanvas:** Добавлен функционал открепления шапки в таблице - unstickyHeader ([9732a58](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/9732a58e64bacb333c09c00b2ccfe79a4da0de92))
- **TableCanvas:** Добавлена логика абсолютного и относительного позиционирования для канвас-элементов ([ca48aab](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/ca48aabe194849b9b5a5585e6174901c60ae92fb))

# [0.2.0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.1.0...v0.2.0) (2026-02-27)

### Bug Fixes

- **FormTextArea:** при клике на кнопку очистить поле будет помечаться как dirty внутри RHF ([baff44f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/baff44f4537d72b82939d3cafdc6e7c188cfaaf8))
- **LeftPanel, MassActions, FiltersActions:** правки по авторскому надзору в компонентах ([3c0378a](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/3c0378a18993cbef69c948c5da414edeffa24010))
- **SplitView:** исправлен нижний отступ ([4ef0716](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/4ef07165d7b4d14026319ffd6e3c6f8ea5a9693b))
- **Table, TableCanvas:** убрана пустая строчка ControlBlock в рамках таблиц при активных TableTabs ([1c56ad3](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/1c56ad3e74754dcd033874212f8ac91914a852ae))
- **Table:** обновлён стиль таблицы для правильного отображения границы последней строки. Изменен синтаксис css-селектора для последней строки для улучшения поддержки браузерами ([392c560](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/392c560e35fecc61891018264b29d08f7df9df72))

### Features

- **AnalyticalWidget:** убрано ограничение максимальной ширины виджетов всех размеров. Виджеты будут подстраиваться под внешнюю сетку. ([6f68ba9](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/6f68ba9188d1f5a14b8b75ef0589ec21264582ef))
- **BlockTitle:** добавлена кнопка назад ([55aa995](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/55aa9953333e8abf058f78459c68636c0b475160))
- **Table, TableCanvas:** для текстовых блоков в разделе "настройки колонок" добавлены tooltip, скорректирована верстка. ([f6ea8dd](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/f6ea8dd90039c73e7546002f1b78affc85560986))
- **TableCanvas,Table:** добавлен safetyResizeObserver для предотвращения ошибки зацикливания. ([ee8d215](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/ee8d21579404f30f63dfa81f3a40c84795fff1c3))
- **TypographyWithAutoTooltip:** улучшение расчетов isOverflow ([f04365c](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/f04365c7b777f3bcdbe7e54c8c7aead7ca851c06))
- **Widget:** в header добавлены параметры titleSize и BadgeMarginTop ([e792d96](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/e792d96a7c846535de5426f4d835d292d36f6606))
- добавлена новая утилитарная функция createSafeResizeObserver. Часть компонентов теперь использует её, вместо классического ResizeObserver. Это позволит решить проблемы с ошибками "RO Loop completed with undelivered notifications" ([20a5931](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/20a5931ee6c7f2be72193c089b8b84355ee54d22))

# [0.1.0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.117...v0.1.0) (2026-02-20)

### Bug Fixes

- **AnalyticalWidget:** Исправление отступов ([39b7e6f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/39b7e6fdb556ad6ffa2711573589377eabaf60ed))
- **Combobox:** Удаление Placeholder при уже выбранных chips ([416d494](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/416d4946545c2a52b2c762dfe73f98a81a35a098))

### Features

- **AiAgentPopover:** добавлена поддержка resizable. Улучшено поведение при сворачивании окна браузера ([17b2281](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/17b22810d31504ef7d0d03a08d3e9b8f6bb1745f))
- **TableCanvas:** добавлена фича нумерация строк ([6c9d170](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/6c9d1704180ff3f7862038114f255e62e4b94904))
- **TableCanvas:** добавлена функциональность infinityScroll для таблицы ([241cacc](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/241caccc9c9eab04daf7c191eec1688f32c13851))
- **Атомарные компоненты:** обновлены пакеты атомарных компонентов ([02b5068](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/02b5068bfe97c07b01a6b415fc2c185609ab8e74))

## [0.0.117](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.116...v0.0.117) (2026-02-17)

### Bug Fixes

- **build-config:** Исправлена ошибка в режиме разработки в webpack проектах ([7b4d192](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/7b4d192f27927d8caba75dc23cc8f5aa61cdf51d))
- **Table, TableCanvas:** убрано дублирование кнопки collapsing в случаях, когда выключена адаптивная компрессия. ([8e7b9c8](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/8e7b9c81407bbf77e56d42111b8bac100110e033))

## [0.0.116](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.115...v0.0.116) (2026-02-13)

### Bug Fixes

- **filtersActions:** fix ([9432ac2](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/9432ac2f87626ca3598a527a72a002b24a15e0a0))
- **Switch:** fix ([955c527](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/955c527067e401d40eeb0a557e87a170736a9195))
- **TableCanvas:** Закрепление колонки. Скорректирована позиция колонки при её закреплении ([879be4e](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/879be4e7f28a45e34a581a41fcc720c281c44d71))
- **TextField, TextArea:** исправлено readOnly и disabled поведение ([210a6d4](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/210a6d40b8cac158626493577323a5b02cc4ce94))

### Features

- **SwitchField:** Добавление SwitchField ([6b58994](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/6b5899415b7633c5f8ac3f7e323405ba0770a9c8))
- **TableСanvas, Table:** tableConfig.columnsControl. Добавлены setter-функции в onConfirm ([ce5a32c](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/ce5a32c0cb408b46d4ff0f405beae32596c10e97))
- **TextArea, TextField, TextFieldSearch, Autocomplete, AutoCompleteSearch:** добавлен параметр onClear для отображения очистки поля ([61a995d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/61a995d241be0ea0e9cd5be9534ceefb70d6e4c8))

## [0.0.115](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.114...v0.0.115) (2026-02-08)

### Bug Fixes

- **AnalyticalWidget:** Исправление отступов ([6ed4f83](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/6ed4f83a2d7a47fde1aae77c0670b53108484d20))
- **FormComponents:** Все компоненты используют единый required, который указывается в options ([2fc17e7](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/2fc17e752ca77226b3c32d7fb203df64417d2e32))
- **PopoverX:** обновление Popover -> PopoverBeta в фильтрах таблиц ([e658522](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/e658522f771769cdb2df29ec6dcdd02f96bd084d))
- **TableCanvas:** поправлена приоритетность по получению названия groupColumn, обновлен корневой пакет таблицы ([15e868f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/15e868fd282f3a810f4faced9d3284ea90897a65))
- **TableCanvas:** поправлена сборка css файла для компонента ([eb6c4e4](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/eb6c4e43727280f5ea544bf677bd86f75e4ba74b))

### Features

- **EmptyState:** Добавление variant: success, добавлены новые картинки ([ebe6f97](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/ebe6f97522806ee4110596a6a40c085a379ae04a))
- **LeftPanel:** DFP-6166 LeftPanel resize ([a68396b](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/a68396b1b1acfa7e146e773c6fac82bf76d96d45))
- **ScrollBar, TooltipList:** правки стилизации ScrollBar, добавлен автоматический отступ слева от скрола, скорректированы цвета для светлой темы. Для TooltipList задержка перед показом по умолчанию установлено 500мс, добавлена максимальная высота контента тултипа с автоскролом. ([afb8f43](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/afb8f43db0b9c93074e13cc1192e4ac3005bac03))
- **TooltipBeta:** добавлен новый компонент TooltipBeta ([c693e11](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/c693e118ab0b3a4f9d35e7b787bb9f929a85c364))

## [0.0.114](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.113...v0.0.114) (2026-01-30)

### Bug Fixes

- **Form Fields:** Исправление отображения красных индикаторов в полях ввода форм ([781df25](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/781df257d3a2c839efe2058a65d63e9d92f50efe))
- **TooltipList:** Убран hack remount компонента. При сбрасывании выделенных значений в Combobox не будет закрываться dropdown с элементами. ([9ef5d0e](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/9ef5d0e34a5ef43614fe8beb9702cde752a8074e))

### Features

- **Combobox:** Добавлен re-export типов ComboboxItemOption, ComboboxProps ([344cc48](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/344cc48075ed026d89752dd12ae2d13b7d71e1c2))
- **SplitView:** Добавление свойства onResize, которое возвращает данные ширины в пикселях и процентах ([74761fe](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/74761feb44c8f59838738993e6b82c7263040cd2))

## [0.0.113](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.112...v0.0.113) (2026-01-25)

**Note:** Version bump only for package @dais-ui/source

## [0.0.112](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.111...v0.0.112) (2026-01-23)

### Bug Fixes

- **configs:** Улучшена изоляция стилей компонентов. Добавлен displayName префикс. ([0c815af](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/0c815af62611f094c5560e033bd597489967aa23))
- **FormDatePicker:** синхронизация стейта rhf со значением компонента ([d5dd96c](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/d5dd96cd2f70f432872f0c501ae1d9d7b5045601))

### Features

- **AnalyticalWIdget:** Скорректированы отступы между title и subtitle ([4812c1d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/4812c1d9852056c85465634deba17470382597ff))
- **BlockGradientScroll:** добавлен компонент BlockGradientScroll ([9ab6d97](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/9ab6d977222b1c0f29c9790497eae2e0222b99df))
- **Search:** DFP-5857 Добавление AutocompleteSearch TextFieldSearch ([31030e7](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/31030e75443ad90cd2bcceefe787f6fc30a74008))
- **Table.Searching:** Синхронизация internalLocalValue с searchQuery при изменении извне. Guards для debounce. ([e504ef6](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/e504ef62f0653aaf1fb480807f3697dbf578b23e))

## [0.0.111](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.110...v0.0.111) (2025-12-30)

### Features

- **LeftPanel:** DFP-5508 Добавление resize для LeftPanel ([b391340](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/b39134093738f11cedb3ca85823ce4244d3636e2))
- **ModalDF:** DFP-4195 Добавление радиального градиента в ModalDF ([e9665c3](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/e9665c3f940690f82bd940b057ea50329414b79a))
- **Notification:** обновлен визуальный вид для каждого view ([6a5bab2](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/6a5bab2ad99de1d9de3630e6fa42e8df1cc43432))

## [0.0.110](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.109...v0.0.110) (2025-12-19)

### Bug Fixes

- **FormNumberFormat:** fix onChange callback ([26e434c](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/26e434c9fa7536602c33fda1d94d1df42975600b))

### Features

- **BlockTitle:** Добавлен новый компонент BlockTitle. Для формирования верхней части блоков ([45672fb](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/45672fbfd5b70442d077d9d42d9d68e9921a2d92))
- **sdds-finai:** Обновлен пакет sdds-finai. Получен новый визуальный вид для всех полей ввода: Textfield, Combobox,TextArea, DatePicker и др. ([c94d528](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/c94d528f5d529337f641f8a9fe9470d35913bce0))
- **SplitView:** Отступ слева у sidebar в px, когда он будет закрыт (Указывать до 32px - не больше). Может понадобится для корректного смещения SplitView вправо. ([6794c4d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/6794c4dd7c323a89c85b91f4bbb1267c22530d9d))

## [0.0.109](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.108...v0.0.109) (2025-12-12)

### Features

- **EmptyState,ErrorPage:** Добавлены картинки для статус кодов ErrorPage, добавлен новый пропс variant для EmptyState c поддержкой картинок. Пропсы icon и iconProps помечены как [@deprecated](https://stash.dddddd.ru:7999/deprecated). ([43d91f6](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/43d91f65457120c30e91938637737622d246b3ea))
- **EmptyState:** add cdn url images ([3662858](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/3662858b01f670c4eda24e52b8db4dcc766bcdd7))
- **InformationWrapper,DateTimePicker:** add InformationWrapper, add DateTimePicker ([d40328a](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/d40328a61fabf67814dfca833ddd7c1ba6d89108))

## [0.0.108](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.107...v0.0.108) (2025-12-05)

### Features

- **Widget:** Для title добавили TypographyWithAutoTooltip ([39fa854](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/39fa854b6013fdcb64f4e002dd1d055d4280a2bf))

## [0.0.107](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.106...v0.0.107) (2025-11-28)

### Bug Fixes

- FormDatePickerRange offset and placement. ([05bc63d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/05bc63df7aac75c533640ad1722105b42b0427a1))
- **GlobalStyles:** global tooltip classNames ([5b3c95d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/5b3c95d2e0211784f9454a0596e825ffaf71d65a))

### Features

- FormComponents stories docs ([8e3233d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/8e3233da5532a42c2c45a071a0b2b818957693ac))
- **GlobalStyles:** tooltip full width class ([00fbf59](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/00fbf5978cc430493a57205934c30cebdfd15fe7))
- **PageTitle:** add new component PageTitle ([f5862ea](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/f5862eafcb291e758bf91a1d1c22d99a78f323ae))
- **TypographyWidthAutoTooltip:** изоляция tooltip-контейнеров ([f4d6750](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/f4d6750c727f8885fa9f4592c4e0a0b077f29000))

## [0.0.106](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.105...v0.0.106) (2025-11-21)

### Bug Fixes

- Таблица. Исправлен баг, связанный со скроллом при высоте таблицы= 100% ([b13b8bc](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/b13b8bcc4e6e9c287dc08cec8090f86924014f13))

### Features

- Table. Add MassPanelActions ([979d4e5](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/979d4e5dd143cd08f4605dde26edf6418efaf037))
- Table. Анимация переключения табов внутри настроек ([3c0535b](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/3c0535b86111f9db84c1d0c276ca0c1c62b47c78))
- Table. Создал один ResizeObserver за шириной таблицы. Добавил viewTransitionApi для панели MassActions ([0c04b65](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/0c04b653c6a99c9397f797ec09886cbc8f09217a))
- Table.controlBLock.massActionPanel add collapsedDropdownProps ([476eab6](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/476eab642fa7f19e03699c47558cb3e01d440323))
- Table.ControlBlock.massActionPanel add docs ([cd86315](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/cd86315f78b924833d45523249f4d04b2ce0a43b))
- Table.filtering add filterSource ([a13f22d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/a13f22dd8dbf9f2a15b4ee7f1a667a28348a993d))
- TableSettings. Правый сайдбар. Установка выбранного таба по умолчанию. ([73eb00f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/73eb00f3bd7e7ac84ef824f959a4f7bd881efdbb))
- добавил проект и скрипт для проверки билда ui-kit в рабочем проекте ([fca84c7](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/fca84c7cab7ef9f82950ee1101fadcaf8efb13a7))
- добавлен .nxignore, в котором packages/vite-project ([64b4eab](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/64b4eab297c0080f930b2d26f377e16fd4e56c6b))
- создан проект для тестирования билда v1 ([da07a6d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/da07a6dde76e09f56c46af598e3da0d5f4e29a31))

## [0.0.105](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.104...v0.0.105) (2025-11-14)

### Bug Fixes

- fromDatePicker. remove leftContent ([25a0f94](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/25a0f945b3e6832369783044ffedba4ffe1b6b7a))
- Table.searching. min-width 40px ([c0d7e40](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/c0d7e40ef135dba3be72ce68925feec7dbdb5e12))

### Features

- Table. Добавлена стрелка для select колонок в режиме редактирования. Скорректированы отступы textField в режиме редактирования в зависимости от размера строки таблицы ([30287e7](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/30287e717f97fdbf09ecf24bbd07218aaa742329))
- Table.collapsing.collapseButtonAboveRightSlot. Добавили возможность для правого слота в блоке collapsing таблицы для случая позиционирования кнопки collapsing над ControlBlock ([5e7258c](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/5e7258cf43d7379b2503d43ad36baaab885cdb4d))
- Table.columnConfig.nameAsString. Добавили поле nameAsString для формирования label в разделе настроек колонок, в разделе фильтров в правом sidebar. ([23078f9](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/23078f96cfee4463f0b0695be6633c17dbf99de8))
- Обновлены атомарные пакеты на версию SDDS-finai-319 ([ef2d296](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/ef2d2960309f4b09d412e0cc2a653ab11e325b8a))
- Репозиторий. Добавлена конфигурация для агента по ревью ПР-ов ([7e25215](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/7e2521582ff0763f33a8dcc627c69897dbaf98f9))

## [0.0.104](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.103...v0.0.104) (2025-11-11)

### Bug Fixes

- package.json - удален ключ exports, из-за которого ломались пути при обращению к пакету ([cfa7257](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/cfa7257c7c4dab65c69474e511ee77fe13e7ac6c))

## [0.0.103](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.102...v0.0.103) (2025-11-07)

### Bug Fixes

- Table. Editing. cell size ([f630a76](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/f630a764bca0b1a31816d283dc557c8da87bcdc9))

### Features

- Table. EditingCell. Для ячеек редактирования TextField, NumberFormat, Select сделали view по дефолту clear ([6b0853f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/6b0853fb2496d64e477fc9036ad8f5b8105f2702))
- Настройки конфигурации. Добавили ключ exports в package.json, добавили в vite.config.js в external пакет swr/mutation ([711bbbc](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/711bbbcb09694adc459147f0f8d3103ead32eee2))

## [0.0.102](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.101...v0.0.102) (2025-10-31)

**Note:** Version bump only for package @dais-ui/source

## [0.0.101](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.100...v0.0.101) (2025-10-31)

### Bug Fixes

- changed chunkFileExt to cjs and mjs, removed vendor chunks ([9554648](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/9554648ff67c7f2f17d27434306568a51fd01f19))
- fixed dependencyCycle in Table customColors ([a83d099](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/a83d099d94287df4ca0e4bdbfc5c80b815c79aa2))
- fixed row bg color on hover ([9d29ba9](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/9d29ba95637a991d7a5c8f05335f310ad862931c))

### Features

- DrawerDF. add backButton for DrawerDF, add new stories with examples ([b11717f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/b11717f4e959233cf57665e42a84ef2b880726e0))
- DrawerDF. Добавили стилизацию контента DrawerDF при отсутствии header footer ([4d374f8](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/4d374f8eb8a6b143d01773d23e6bec4c94c6fae5))
- FiltersActions add simple story without adaptive ([4a6a94b](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/4a6a94be9b62cad1adb42ca280be4de27d314736))
- fullWidth for FiltersActions.TooltipList, add resize functionality for FiltersActions.FilterPopover ([9321c59](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/9321c590f7a89bff46f19d01b388e0ca625e5590))
- updated atom libs ([9e5b29a](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/9e5b29ad6f523d970e325f52ae576603a165c2df))

## [0.0.100](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.99...v0.0.100) (2025-10-30)

**Note:** Version bump only for package @dais-ui/source

## [0.0.99](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.98...v0.0.99) (2025-10-24)

### Bug Fixes

- Table. ColumnFilter. Popover. fix styles border-radius ([2d352a9](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/2d352a965f8f9ac569a9587161ada5879521ada0))

### Features

- Table. add TableTooltip for expand btn, filter brn, sort btn ([061c1f1](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/061c1f180e2d98f1b2714b14efbf00324ba150cb))
- Table. Editing. add input and select props for editing components ([01f99c2](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/01f99c209414e832d84df2faaf88b4a467e6a8f8))
- Table. Pagination. add onResize, add responsiveSlots. Set default size s ([80b4808](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/80b4808ed5530183caee3cf79f730f4d64ffda4c))
- Table. Pagination. hasQuickJump and arrow logic ([eda1d25](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/eda1d25aa5902261eebebfaa6270e0e0de933e58))
- Table. Pagination. improve docs, responsiveSlots default false ([16fc8c0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/16fc8c0b1cf390701b91e121530381d09281f7f2))

## [0.0.98](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.97...v0.0.98) (2025-10-20)

### Bug Fixes

- FiltersActions types ([e92ecd4](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/e92ecd4478f5e1ff0689933599499a15355fc888))
- useActiveTheme ([195f5b5](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/195f5b5fdcab7b57393a463d666db4794944014e))

### Features

- FilterActions.FiltersPopup. add base Popup ([afda34d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/afda34d495ec0c04744470e7d507a1505133a373))
- FiltersActions add docs ([46a8eb4](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/46a8eb41581d1e3224447e70885fbfb8ea860bcd))
- FiltersActions add docs ([f5e4836](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/f5e4836cb83d572eacf37144a3c2a4e375f96080))
- FiltersActions. Add searching ([ad938c6](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/ad938c6122830f119b129e1ae30d324ac075dc99))
- Table. collapsing. above block ([c89567d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/c89567d10d61148de956f3f940cc14828865b25e))
- Table. RightSidebar. Все настройки таблицы в Side panel (настройки, фильтры, столбцы) переместить в одну "настройки" ([744220a](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/744220a91b58ab61c1d1605a8585b9009500758e))
- Table. Настройка таблицы. Правый сайдбар. Корректировки верстки, switch блоки, ColumnList, иконки лупы ([78fa49f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/78fa49fd53279a3f666b5dd8cb0b78d42709848b))
- Table.collapsing. Block above styles ([0165aef](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/0165aef8bea1a4983602c0dfa8de167480b1f10f))
- Table.columnConfig.filtering.component='select'. Добавлен пропс listMaxHeight для контроля высоты выпадающего списка фильтров. ([c92fb29](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/c92fb29539cb081fe93a70b0d3d7cb6478be8a37))
- TableSettings. support domMetadata filtering / columnsControl ([8ecd2a8](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/8ecd2a8a1052a2bbc9cf6ac1aa36389b1bbf0e88))
- useFilterList add support for boolean filters ([7b35b77](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/7b35b77902313a10d403093855670eacd5f89bc4))

## [0.0.97](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.96...v0.0.97) (2025-10-16)

### Bug Fixes

- comment useActiveTheme ([e8ab9cd](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/e8ab9cd94b96026dce3cce31a6c8bc4f8073442c))

## [0.0.96](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.95...v0.0.96) (2025-10-16)

### Bug Fixes

- lazy loading typography tokens ([f4dd607](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/f4dd60713e79441a558faf1b5cfbd59eb75f9a32))

## [0.0.95](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.94...v0.0.95) (2025-10-16)

### Bug Fixes

- lazy loading tokens styled-components ([2195f9e](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/2195f9e96196221c38608ab701083d95477f485d))

## [0.0.94](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.93...v0.0.94) (2025-10-15)

### Bug Fixes

- AnalyticalWidget remove unused comments ([a7e0288](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/a7e02885ec2e543654364fad04c42caadad5434a))

### Features

- Table. Add rowInstruments left side pined frozen ([678ae1b](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/678ae1ba09df616fb4b3d431deab8233d6a7df03))

## [0.0.93](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.92...v0.0.93) (2025-10-10)

### Bug Fixes

- ErrorPage. texts ([5bdca33](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/5bdca33b16e9537f541240f1af6026032993e88b))
- fixed cells zIndex conflicts ([cdcad51](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/cdcad5158680c9a02e56bc21bf4a3a81ceed35e6))
- fixed SplitView layout after Testing ([a45241c](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/a45241c384f2529eb0e6ffa0e98be5850a461c49))

### Features

- added dark theme tokens for Table ([bd47a70](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/bd47a709ab553985c96ba9e2a00c3030160097b6))
- changed to 16px table fullscreen margin value ([6678897](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/6678897e90b7b19a9bb49b78d19886e3ac28c1f3))
- changed tokens for all except the table ([020b557](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/020b557107a9a453ac6944c2dc72ecf90c416ae3))
- FormTextAres. add showClearButton prop ([e4224ae](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/e4224ae54df23d70e3733e5d6543fe39262806dc))

## [0.0.92](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.91...v0.0.92) (2025-10-07)

### Bug Fixes

- FormSegmentGroup label items ([3648a1d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/3648a1d945bc0e2bb8e8ebb6d4543da88db444a5))

## [0.0.91](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.90...v0.0.91) (2025-10-03)

### Bug Fixes

- ErrorPage. 500 status. texts ([0f2dd73](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/0f2dd739dff5ed3c57b323a833128930819ae4cb))
- renamed serv to finai ([a152f89](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/a152f8971db4844f16666fe03598b90c67a329f9))
- TableSidebar style, add delay for Tooltip ([a5b713c](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/a5b713cd9e244ec545e5a0b10c131ca9b4dea671))

### Features

- add FormSegmentGroup ([5bead3e](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/5bead3ede14d9cfef39625c93d26c11f7df85834))
- added light-dark themes to the Storybook ([5efcb0b](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/5efcb0bc874e8714606e69765bb187fa22adc1b7))
- FormSegmentGroup. add showError, utils. ([a1539b2](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/a1539b2d4eb21ff2880a34cabf3daa572b2ac0a8))
- Table. Added highlightActiveType story ([bb1df61](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/bb1df616d3415174cafd2c20c08616379c4ece42))

## [0.0.90](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.89...v0.0.90) (2025-09-26)

### Bug Fixes

- DrawerDF. classNames ([4787103](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/47871033556740904a8088dafacc76fd24345f66))
- DrawerDF. classNames ([fcc975c](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/fcc975c260e209d4260c25d206115d43cae07ef7))

### Features

- add docs for renderChipOrGroup and renderGroupLabel ([4d48dfc](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/4d48dfc7c34fd25a5902f000a7dd12be71740c0a))
- added prop headerRowHeight ([74e34d8](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/74e34d80c69aad28d45be7670cdabfd0c9d8a76e))
- added story with million cells ([57bc770](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/57bc770ffe5301247bc6b76691e1b82227e8f625))
- FilterActions. add custom render for chipOrGroupBlock ([090a58e](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/090a58e9f8900dec9c6ecc0a923707edc5ee2bda))
- optimized cleanup TypographyWithAutoTooltip ([85dc156](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/85dc156a335f19c0649d0176ad59f60acf5db6f7))
- Table. Added tableConfig.selectingRow.showState ([7d46135](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/7d4613583593bc0f9dc109f18efe898f31c0a15f))
- TypographyWithAutoTooltip add usePopoverCleanup hook ([d94c79a](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/d94c79a55599d25fc60140629709271374fe31e7))

## [0.0.89](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.88...v0.0.89) (2025-09-22)

### Bug Fixes

- changed IconButton exports ([de1b758](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/de1b75862401a3e6c4870c44fc060286d9d7d47c))
- IconButtonFilter. GridDND. classNames. ([a4e7303](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/a4e7303bcf7b389db65770ad31c21ffed15d361f))

## [0.0.88](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.87...v0.0.88) (2025-09-19)

### Bug Fixes

- add Suspense for FilterListBlock ([7ca9efb](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/7ca9efb057d9c12b7f843e5681efd04663cf1c74))

### Features

- add clickstream provider util ([e0d44c6](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/e0d44c6c520fa83bca0e3a62bc73db7b02fd63f7))
- add GridDND.ItemWrapper and update styles ([20cd9ce](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/20cd9ce7b08829dda841882020ce1726d7674663))
- add summaryCheckedUncontrolled in selectingRowConfig ([b82a4af](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/b82a4aff3996d59cfefb72468a82cee0dd6c158e))
- GridDND. Add items props. Add new algorithm ([c06e676](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/c06e6760463fd1480869b4bc072e40bac8b9a0f0))
- updated atom-libs ([ebfdc20](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/ebfdc2074656fe5177cae0b122dea9e9e8ebcec1))

## [0.0.87](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.86...v0.0.87) (2025-09-12)

### Bug Fixes

- AnalyticalWidget styles ([1d34a99](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/1d34a997fe8e7477a6d0c5d95605358b1c0453cb))
- DrawerDF. correct top close button for split mode ([45e1072](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/45e1072aa0ded26a5f467228be294f1bc7c758eb))

### Features

- add base GridDND ([3a52ee3](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/3a52ee32a3047125a28901933a836f5cd3c8e85b))
- add GridDND stories ([a1478c7](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/a1478c77b61e6fffe92c58bb8e0e54d815c06b8a))
- add initialItems for GridDND ([9c995a4](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/9c995a4fb5f328272a314db281678fa1e3350b19))
- add react-layout-grid, add base example for dynamic grid dnd in storybook ([38a9310](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/38a9310fdee2670fb00ba86cb0ea341434ee0ae9))
- AnalyticalWidget.Header. Add ResizeObserver fro StyledActionsContainer ([ba77ef2](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/ba77ef2b66e1f3141ba370b692f32ffa66fa0408))
- GridDND add smartCompact ([0c4f253](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/0c4f253d4eceba89049524a8d8c2f26da6c1da11))
- Table.controlBlock. Allow dropdown customization in controlBlock via left/rightSideDropdownProps ([182d55c](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/182d55c0b5740a5fde4067266c8c4faee33b96ee))
- Table.pagination. Add resize Observer for pagination block and recalculate table height ([e589025](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/e5890256f56c48f8adc5066f97c6cece3f979995))
- Table.rowSize. Add onRowSizeChange for RowSize configuration ([c2fac01](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/c2fac0106a8bb60e3f2f8f66e187c72c6c80ee3a))
- updated libs of atom components ([6d27d2f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/6d27d2faebc5f20336398895521ab0fd9d0f038e))

## [0.0.86](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.85...v0.0.86) (2025-09-05)

### Bug Fixes

- collapsing pagination, pagination first mount ([0027da9](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/0027da9ce2c0d3f28c8dd228ed9b487a262792c9))
- ModalDF. AnalyticalWidget. remove border radius from custom blocks ([4fedae3](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/4fedae3aa0cd2ba5f41efd91a8cb4e73269cdb62))

### Features

- add searchOnType prop for searching config in table ([28e9c41](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/28e9c412d18cc9a97102fd850b4a239bb3091b1a))
- Table. Added new feature - highlightActiveType - тип выделения активной сущности ("сell" | "row" | "disabled") ([5caa40e](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/5caa40eeb129af533c43bfbcf9333ed2d64d13f7))

## [0.0.85](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.84...v0.0.85) (2025-08-29)

### Bug Fixes

- getPositionFromPlacement for AiAgentPopover ([0eba9c0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/0eba9c082e31699cbf5fbed83fb108d7800bea89))
- minHeight for ModalDF.Header ([4ddc72d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/4ddc72dbebc636970687ddaab663e4f04a518b61))
- remove truncate-text className ([f76ba5b](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/f76ba5b30d4417708c79b3da5645d9d42ef46420))
- scrollbar styles table ([4417e86](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/4417e867266c475bce7af2f439b485b5e0bfc5d5))

### Features

- add TypeSourceViewer for Table.fullScreenMode stories ([2cdc3f7](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/2cdc3f789d2fd0392cb547caea4363e2b56f992c))
- editing table feature add TypeSourceViewer stories ([8335701](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/833570129f154b5ce60feeac9562e92d679024d8))
- editing. replace doubleClick to click for opening editingCell ([5a9d93f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/5a9d93fafb1b23cd93b9994fb1954bc488722d97))
- filter and sort buttons in header with transparent background hover ([7c010b6](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/7c010b6aacbe656ebef728b0ba5c83b181ae8eec))
- removed border radius of selectedCell ([1c3ab15](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/1c3ab1584a4d46906af4fb3572c7ca27f61fa442))
- viewMode sidebar selecting rowSize fullScreenMode ControlBlock collapsing add TypeSourceViewer for mdx in stories ([4fb7599](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/4fb7599819923f298c7ff2dec5ece9097060ee19))

## [0.0.84](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.83...v0.0.84) (2025-08-22)

### Bug Fixes

- mb for layout ([ee79a0f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/ee79a0fe051fa7db68a806b9bf7dbd7fb498ee9c))
- remove globalClassName for darkTooltip ([7748710](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/7748710af25e3bd9173a9e0307a1742d46360303))

### Features

- add domMetadata for controlBlock buttons and rightSidebarTable buttons ([7b45d16](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/7b45d16aaff16da8c23c391a27a7a3d54178957f))

## [0.0.83](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.82...v0.0.83) (2025-08-20)

### Features

- add order for filter list ([3890676](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/3890676c1ed7b146552006d9bb99494295004a9d))

## [0.0.82](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.81...v0.0.82) (2025-08-18)

### Bug Fixes

- remove drag container ([89f1a55](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/89f1a555426b2f15cfa8bc11526c6bad82fe8dba))

### Features

- add bubble util ([66f3f58](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/66f3f58dcee73be54d965c34d2feaa481839b9c9))
- add docs and stories for AiAgentPopover ([f28c3b1](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/f28c3b1ee0d72f3416a32ecb426bd258350705bd))
- add drag for aiagentpopover ([f32ae61](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/f32ae61a19c413bc447c25d36638fdf1161491e7))
- add enabled field for sidebar config ([983eb86](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/983eb860d0a8ed15987e39750c97e6f134750a52))
- add new placement types for aiagent popover and improve logic resize and calc offset ([a291047](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/a2910479d720fe3faaf94c4e02f0fad049ac1374))
- add Typography stories ([b8f0c39](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/b8f0c397002f7d5293c00dee8b51398ae7952eb6))
- add TypographyWithAutoTooltip for headerCell, refactor styles, add calculate minWidth header cell ([43fe062](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/43fe0622ba2ae943de6ebdd4daae9587f796b770))
- add TypographyWithTooltip stories ([3db2116](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/3db211655fbdea7b61f2b27a5960dfd365b68fb7))
- add validate position and resize window observer ([76c984f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/76c984ff978a1bed61e2c1f6ff87cdcae8fcae62))
- added new components: Widget, SplitView ([6f6c97d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/6f6c97d4b928748784fca4ea4b9f4ed975ca9026))
- AiAgentPopover limiting the drag area to the view port ([3e0ee27](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/3e0ee27c79cd0b4e1aad9e7523ffd7cd02909d55))
- rename tag to badge AnalyticalWidget ([f892363](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/f892363ed8ed6d79b98a087f7c995cc9498b8e73))

## [0.0.81](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.80...v0.0.81) (2025-08-08)

### Bug Fixes

- add checked for FormCheckbox ([c49261f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/c49261f73a55c614d20e3b3bdbd2cf524442799e))
- lint ([d09c8fb](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/d09c8fba5f6797117846a38cd324f6f930dd9d84))
- remove defaultChecked from formCheckbox, replace to checked depending on fieldRest.value ([98267ac](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/98267acea37fad5e2941a9e0c043526b3502d86a))
- table context menu don't show context menu for empty array dropdown option ([9c12d8b](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/9c12d8b0cfd758105087131db83bbd1766a60489))

### Features

- add analytical widget ([219ec23](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/219ec237cedfcbe7967fac2e061c6e3457b2231d))
- add chips group analytical widget ([6b3edf4](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/6b3edf4bae2a5fc722658fcfd0a4534769eec6be))
- add custom media queries ([0458fc9](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/0458fc984ff650a8c32c9ebd39742da4ba70e8f0))
- add innerRef for Typography + check types for TypographyWithTooltip ([8bd1513](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/8bd15132f6f675cdd315dcd4d71e4a38780cb54b))
- add styled components for AnalyticalWidgetChips ([8dfd6e9](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/8dfd6e923332373ba78f3104e40e502563bee1dc))
- add Typography, add TypographyWithTooltip ([8c7f63e](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/8c7f63e9d7f5d6247a976d7a317a519727214cf2))
- analytical widget base ([ca8266e](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/ca8266ee87ce7b0cf2070c8f322511e5ea775879))
- update gitignore ([b80c5ed](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/b80c5eda245a38ba746066949cb7c35f56a1db2e))

## [0.0.80](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.79...v0.0.80) (2025-08-05)

### Bug Fixes

- fixed cellError for subRow, fixed padding left for column with arrow in editor mode ([a225001](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/a225001b98d3778b57e4addb47ee4a96c33392d0))

### Features

- added getFuncAsString generator, updated AiAgent story, changed trasform func in storybook preview config ([ebdfe1a](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/ebdfe1a3ea42c7810ac488b5d15f9be7e731f5f5))
- added pretty auto source code ([787ceb5](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/787ceb5fd062860a893378538a91de3138099105))
- added tableCollapsing ([2be225e](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/2be225eeb04f2fd6e08496c0a913d021a0dd4f82))

## [0.0.79](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.78...v0.0.79) (2025-07-31)

### Bug Fixes

- padding FilterActions ([39ded57](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/39ded5785f5faba6d2b6285dc8a63ecec644878d))
- refactor ([f998c27](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/f998c27780d5d9ac9ceb0807f4847c0dda65f206))
- resolve sidebar flickering and empty state ([21de93b](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/21de93bf1d68b0c36ccde85fdd633afd4c68aef8))
- styles ([29eae67](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/29eae671c902203b3222552b0a7f1358897959ee))
- styles ([3934840](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/393484036364a090ac8ecda26fef7682942fcb6c))
- types ([579ad71](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/579ad71ea517b6254c9bb79c2b029ec6d50f7d50))
- types text area ([4a5afcf](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/4a5afcfb4d8aba67e35facef64510d30ed42ceb5))

### Features

- add base styles ([0a0e21c](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/0a0e21c220563480047dd692565722bf99ce1dcc))
- add class names + strict contains ([524ad49](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/524ad49cfad3bb26faead0d964db9d3d813612c4))
- add forwardRef ModalDFConfirmation ([ea09c36](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/ea09c3654994adbe095bcd9f08f70e76c759be52))
- add modalDf forwardRef ([7deebb3](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/7deebb32e9e80d77cda09dc89ae8b3b24c20270e))
- add styles for Suspense fallback control block ([c62f25f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/c62f25f139285e9e3bd8bc4fa17d5bcc194dcd1c))
- updated storybook introImage ([249f8a3](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/249f8a3aa0d6ee28ef0f3216e1f22eef7aa93083))

## [0.0.78](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.77...v0.0.78) (2025-07-25)

### Bug Fixes

- 401 error page ([bcadb1d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/bcadb1d541de339ea30c81238c4d5bcfbde00d35))
- 401 error page ([43e3347](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/43e3347c2c02d500d51e314b6bf7ba8de6e1ee8e))
- isLOadingOverlay default subtitle empty ([79a21fe](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/79a21fe1d9e2f580eb482b145643cc49abab3447))
- layouts minmax(0,1fr) ([de93020](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/de930203c28a694905c867e9c0391778d05d0dfa))
- lint and types check ([e212b30](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/e212b30b318457f39e9ada328c2986a1bcdb59c4))
- naming ([21dc65d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/21dc65d74e49bd1acb969205d2de7da311d59c7e))
- propKey warning emptyState ([f1fe718](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/f1fe71862a8452997016d479d1efc8ea244e667d))
- remove unused ([35dcb03](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/35dcb03eba4bb87b6a9a52f70d18147af602bd0e))
- remove unused logs ([5904216](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/5904216d2f4a834ad49a37804a91f6d910d26172))
- rename ([de6c3a4](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/de6c3a48530d18c23a3d1975d00030a6128d9e37))
- rename ([71799d1](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/71799d107d91978981d3a3c6e73ed87ba95c1e25))
- rename subtitle in stories ([24e5fb0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/24e5fb0fd917489e5d0f22dcbe076cfa9b4cbef9))
- rightsidebar feature-column-control fix styles items ([89e8fb4](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/89e8fb472021b3b9ed148fe8cf036affcf2f8a09))
- types ([036e93f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/036e93f78b9b2cdbc1a70eb07b08f9dc1ecd14ad))

### Features

- add activeView setActiveView in headerContext. ([18aee0d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/18aee0dafbc0e5208db1c408f5148b865cba6550))
- add cache ([627ae57](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/627ae57793f6b602a09581622bdf9cfb2a89b9cb))
- add chipsStyles + docs ([77b3df5](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/77b3df57fdcbf10b61ec4a88e9c964003ab58fd0))
- add diviber + clear cache after change measuredWidths ([8c31a8d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/8c31a8d2f1fe9c76ec81f42c2afac51357e189a1))
- add docs ([8f7a1ed](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/8f7a1edcca345312906e77d252624f54172ef1b9))
- add enableAdaptiveCompress ([103ea95](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/103ea954c436f066308312c7d796e4dba38b4790))
- add external refTableContainer ([a912d6c](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/a912d6cb5f09d2dcc77aeb5500c0cadb1f9a1bb0))
- add hook ([5e189eb](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/5e189eb0baf35bb897879fe08cd96e30681e5230))
- add inline styles depend from searching position in compression state ([3193dac](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/3193dacd5525edd873c635dc6e5612e4e7fafdf4))
- add lazy import for ControlBlock ([e4a4adf](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/e4a4adf364d2a362ef5e41628d48a5ba949ddeb4))
- add limits for visible icons in controlblock (5) ([b4cd277](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/b4cd277689ad5ef5c478fb0ffeb71ddedbbc10e5))
- add padding + effect update initial state ([6a4058f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/6a4058ff841f682ab203be09879b5f183ed1a872))
- add rowsGrouping and dropdown for rightSideInner in Multiply features ([e1dfccc](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/e1dfcccdf9361b69eb786e3c63607b11c0eda4ec))
- add safe ref obj hook ([c332327](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/c332327e4e070718005de442388b2c338788dbd7))
- add support dropdown props for left side inner features inside control block action ([12f2878](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/12f287827d0b62a66b25ce16be5fd5f1574f6620))
- add throttle + handle resize + feature array remove unused ([da3ce70](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/da3ce708fe0b930216dee63faab2e1aa607b1ba5))
- add type guard featureItem, process featureItem element for dropdown ([81393a0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/81393a051ec50d3765fa314e722845fdfdec60fa))
- add types and setter states for label and counter ([b30e789](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/b30e789027673d4414f57a0ecd63ea01ddf64c51))
- add weakMap global cache dependent from refTable, add dividers, add throttleWithLastCall ([af53ec1](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/af53ec1fc8972d91bad268e508225eb1dc22c825))
- calc dividerIndexex, remove unused ([c883ff6](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/c883ff6b1cf03704f7f09ab2fb07ba3d930b25f3))
- canBeCompressedInToolsMenu + dividers ([efa05e7](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/efa05e78a6c9d7965b010e8e91d6d24a48d5550a))
- change priority of compressing ([613822f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/613822ff419cb4008da907a30beed6b411e9cea0))
- comments + new level of compressions ([a426407](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/a426407ff8842bdbfdefc851fb3566b4ec13a566))
- ControlBlockActions ([41a1220](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/41a1220431ee8034a52255efdec005207fe89872))
- customize useButtonsToDropDown, добавил обработку Группировать как элемент dropdown ([62a78de](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/62a78de676ac81796fc5bfa8d4e0f645ad1f973c))
- default transition + control arrow state control-block-actions ([3751496](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/3751496698e31633bba86730a6ee59a6efa5bc50))
- getDividerIndexes + visibleIconsAfterCheckRightSideInDropdown ([57a3f66](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/57a3f660dfcfa2f27835b4d0eed8ac8e49554a5f))
- groupFeatureBtn styles, add new step for compressConfig ([cde05ef](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/cde05ef82f858aefdf1c4b8dba0cb0a1a7477225))
- isLeftSideInnerInsideDropdown + improve logic for searching block ([03fb590](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/03fb59068b0d9f75a819d8d62e7b93a943b840ef))
- mvp v0.0.1 ([ec052ca](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/ec052ca54ec4116e61337654c56eeebe31925a68))
- prepare mouse event ([4c31362](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/4c3136247dfeafc03d8fe8af1424aab101d3233e))
- searching block height ([c77c409](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/c77c4098ac048073779b9a8f901e9b364b5da35c))
- second version ([e04c114](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/e04c114f42d10db5ba48f71fa88fc91c7fecdb8f))
- structured clone ([b2a16f0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/b2a16f00fa879b9fc9ee1dd4ae84e98845f36db3))
- styles for bellow searching ([481f3ea](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/481f3ea40b0101c0ad2665e537a73dea4bb3bc14))
- type tolls menu state ([4351af9](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/4351af9bbfc3b9684ef2df3719e57c58c4ecd255))
- update comments ([af5b5da](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/af5b5dac9881e26916fce8bd43a47e03d058a842))
- update deps ([606e232](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/606e232a1ec7d31ef9a7e70a93263b9c02dc6ff5))
- update deps, remove unused ([66270d9](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/66270d954eb7c8ec5a88ee3945195c52b2c2f6cf))
- update multiplyFeatures story, add accuracy for calc width, improve logic for dividers in control block, add initialWidthsForToolsMenu ([41ee04f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/41ee04f915ba71885ec934034e70083eecef56cc))
- update types, icons ([4718c7f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/4718c7fd2d5d77ef433f22196b2ac3ef8ab1ab74))
- добавил верный порядок вывода фичей в дропдауне ([2f6e06b](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/2f6e06b2806a9377e405d5bf8437615a3ee9fb90))
- Добавил поддержку сокрытия сразу всех кастомных фич в правый сайдбар ([76bc771](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/76bc7715fb9d99be907dbdbd44f3732bbc8373e6))
- скрытие лейблов у кнопко в правой части сделал одновременным ([d1b56c3](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/d1b56c31ecf7fa7abe132b36faa91149d24b44df))
- стили для колонки header поправлены. ([69bcc3f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/69bcc3f02de2e3533604351d89d96e7bd7cf4a66))
- улучшил логику вычисления ширин. поправил числовые константы ([1ce541d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/1ce541d128ec949daa7895f82a869de379e3992c))

## [0.0.77](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.76...v0.0.77) (2025-07-18)

### Bug Fixes

- emptyState + errorPage ([6e12719](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/6e1271957f558aac2af889717b2aa74170fa5fe8))
- fixed checkbox col as first ([d19aa73](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/d19aa73f816a8f0c450e1d4f3396acfe8acc401b))

### Features

- enabled editing of subRows with unusual subRowsKey ([44dc992](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/44dc992fe5c4923bc517a6ecc75ade268dc831ea))
- Table. Editing. added to onRowsChange additional info about changed rows ([65cdfce](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/65cdfce9577eb166c9a7fd3e1601b0d73b2ed278))
- TableContract. Added editing feature ([4c69eb0](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/4c69eb0a1822034557dce68e1e394862e585fa74))

## [0.0.76](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.75...v0.0.76) (2025-07-11)

### Bug Fixes

- change default settings for number editor ([27bb623](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/27bb62309b77ba7c26d6579771ef565c0058b417))

### Features

- add fonts ([1bcad5e](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/1bcad5e0a6f409c54ba51442ca92e016670998f3))
- add fonts ([7c4ae4d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/7c4ae4defa0ac39241a486d507bf9ffba681a5d5))
- add Tour ([4d9e320](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/4d9e3207a53688f0c47d43d30a15449a10187c31))
- add truncate text header table ([da2a672](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/da2a672523ae54a5dc2be337ceb7d82a792f6062))
- update + for tokens default export ([826fcb2](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/826fcb23f43405858d41057684e48a046b7342d1))

## [0.0.75](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.74...v0.0.75) (2025-07-02)

**Note:** Version bump only for package @dais-ui/source

## [0.0.74](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.73...v0.0.74) (2025-06-27)

**Note:** Version bump only for package @dais-ui/source

## [0.0.73](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.72...v0.0.73) (2025-06-24)

### Bug Fixes

- Update FormRadioGroup to correctly identify FormRadiobox components and modify FormRadiobox to include data-component attribute and set displayName ([8f2d6f1](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/8f2d6f16fb632cc1c2d267e5a5bd5b4a6fe0ec49))

## [0.0.72](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.71...v0.0.72) (2025-06-24)

### Bug Fixes

- imports from other components,constants changed to () => exportedComponent ([8b6720b](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/8b6720bfd5d9445efb7f88c15a0c5305e12a6451))

## [0.0.71](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.70...v0.0.71) (2025-06-20)

### Bug Fixes

- stories control block ([8ed147d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/8ed147d45141bf348297745eab7710dcbb3f2aea))

### Features

- added new link-views for ControlBlockButtonProps ([cbceaf2](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/cbceaf250bca55caa6a81d7b5dfa5a06414daa10))
- updated root-libs ([e38b44f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/e38b44fdccb3443da67c0b0375bc73a7ecbda396))

## [0.0.70](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.69...v0.0.70) (2025-06-18)

### Bug Fixes

- add onChange handler for FormDatePicker ([f47da56](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/f47da566ae9384ae4520a94150fe62f74fa1ecd9))
- clearAll searching ([50cc691](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/50cc691216a22ddde7b99f7e1cd4db74047c13d9))
- lints ([e194f66](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/e194f6601bef3cd0b29a1466a64237616995113a))
- onChange rename to handleChange ([8b2340d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/8b2340d2ec0ce2cf14566da1b8efed86ed7ce1dd))
- remove unused sidebarContextVal ([8c67bc3](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/8c67bc357142608840d81eb7c9c65218e8bb16da))
- styles and stories sidebar ([7f2e849](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/7f2e849d32548ad3c22fbb3da80202ed31029205))
- textLayout ([71ef09b](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/71ef09b641870b8207f82d714b62b510fc6fe2e0))
- поправил высоту комбобокса в фильтрах ([cffa8c7](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/cffa8c7d2646825454c3ebb1adaebedd523ed09c))

### Features

- add external state row instrument visibility ([2cb4335](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/2cb4335ec27637c6a0d71600b1afe4eb56946f47))
- add label for tab ([4048204](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/4048204e8f49d9a0d2bf7ee766be6f626ad5371a))
- add sidebarConfig + 180px chips max width ([abded60](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/abded604a509825f6bc98511f705ee91ccd756cb))
- add Tabs right sidebar ([75b27f9](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/75b27f9a1db55699333cdc1ef0ae52f289c63b9a))
- added configs mappers, started subrows ([aa14b7f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/aa14b7fe0796a78945bb58616670658e9ce04105))
- added connection with backend, swr, changed url to searchParams and etc. ([e1e5d31](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/e1e5d31df901428194439ce987bd838824a20e8d))
- added json-schema generator ([1502f51](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/1502f5185f7880e27cf89a5c988c03b9b819ec31))
- added mock service worker, all requests moved from backend to mock service worker ([edd9aad](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/edd9aadca4084251efa5e54d982bcb33879af0a7))
- added stories, changed configuration api ([34d7c16](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/34d7c1651f945ae539e7890070cbb4866beb24ad))
- added storybook package, fix lint problems ([93cd9b5](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/93cd9b5696dddbc622e67e8cd6e518dcebc4ca8e))
- added types-source-generation, changed docs of ContractTable ([a961c80](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/a961c80dc41193add119d074f6aa6350e710c8b9))
- changing api, created hooks, added cors-proxy for dev ([0708360](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/0708360bfc4b24a0c70584391f2bc35471e90b1e))
- clearing directory ([4e75f21](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/4e75f219fe44a4959057a0b4c4a2f8fd5f4cb937))
- docs ([70db90e](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/70db90e9c95ca62b5999518c18a7410a938df82b))
- ended stories ([a42c02b](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/a42c02badc7c471c7f2bcc6891ee6f2921ac3ab6))
- excluded types conflict in Instance ([889a548](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/889a5487b1289f8dfafb382b8aa82f495045989e))
- fallback empty search + styles ([c6440d4](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/c6440d4e18de430821ff872c879aa760359e64a9))
- final version ([aac1d39](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/aac1d39ddee27083e1770208b31b8683ea17a910))
- hide in right part control block icons ([b2f3b50](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/b2f3b50a4b4adade3986616f46632d51f94ba0ba))
- hook for render filter, SidebarFilter components, configs ([9032180](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/9032180390935e200c1b691e45579f9e2954576c))
- hooks + refactor logic ([0f28569](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/0f28569408239a7d297dde255b5c41f91bc8ed48))
- List of filters styles + docs for sidebarFiltering ([cb487a7](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/cb487a7136403c517bc0e68aff9e1f418ebf3cf4))
- move generarators in generators dir ([88746e3](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/88746e3158c71964d84d27759d0824f3ff01dbaf))
- moved data from stories/Table to upper level, created mswIndex for initialize ([faa0ec9](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/faa0ec9bcc32625dbb97d6ddd6f3620d94d9e6ca))
- refactored dir structure, moved storiesUtils ([fde49a2](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/fde49a23768a5df28646f0255dee5a28a4cbba3d))
- reset feature ([0c8991c](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/0c8991c650b2d6ae823ea7f2c76c118152a4fe77))
- saving ([955b4d5](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/955b4d5bac73cb03e6e7b0a521da5f65331a171a))
- settings ([9711f79](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/9711f799bf7ba3de52fde587712c9b3aaf6fdae0))
- sizes combobox + checkbox sidebar filter ([dc60a07](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/dc60a07a93fbcb972c25cee9daace9450f997407))
- some changing in story ([845f89c](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/845f89cadfae0ad4f916bbd46aa8e5b2eacd528b))
- sorting. updated ([81dec56](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/81dec56a7fe46df6a2912556d198907721679c24))
- stories updated, added instructions v1 ([8601096](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/8601096db99440d06f5272bdcaec264f8f2ea2ef))
- styled CheckBoxAllSelected + improve logic ([61ff965](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/61ff965a4c567563ca3439b8c1fd41d5f789d825))
- styles + search for filter sidebar + shared searching block ([d3b79d4](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/d3b79d448a5289a915684a9d1085f58367f05939))
- styles for columns control + searching for columns control block + add SettingsTable ([2009662](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/20096624cdf5cf6776a375c0f424f0828b53023f))
- subRows added ([fc2f69a](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/fc2f69a056954901e282b929448dd8e59054eeb4))
- udated type descr ([7a4ce92](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/7a4ce926bdb94fa65571e85e5609cd45484220e9))
- udpated stories ([b08b9f6](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/b08b9f6d4b60fdc59aaca0a9416835ff75c9ac51))
- upd stories ([38bf521](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/38bf5215f7aba821f8481711c835080d4d98adca))
- Update default values and add optional props ([5b6e95a](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/5b6e95a6468fb73f08b0f940dae63297ae3b089e))
- updated contract types. Meta,config,states ([2bd3773](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/2bd37739788796fee0a6763e5e8deb85842eec1f))
- updated contract, added pagination ([918a167](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/918a167e3853dbe797d517aec12dc73a9d826a89))
- updated story, changed types, deleted genreics ([1bbea02](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/1bbea0250c4414b7c7f4b0fa9ad583edffb31b30))
- v1 examplle ([7030fcc](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/7030fccb805442b01924bfab820950d42eb412c7))
- ё ([4c47976](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/4c47976cef41d8e1e47cde1fd36ca229ed55c88f))

## [0.0.69](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.68...v0.0.69) (2025-05-30)

### Bug Fixes

- added again sidebar animation ([5ed1ded](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/5ed1ded2496944f6ec91252688b3e94565f372f5))
- chunk path FormRadioGroupBox ([41ea80f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/41ea80f07d825d4a5656489d3062701df23466e5))
- fixed bug,deleted icons in controlBlock ([708dda1](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/708dda1fa99c1775c6afbbb00a67481ca5388a0c))
- fixed problem with containerRef, updated multipleFeatures.stories.tsx ([aa50db6](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/aa50db68eabbc13876065d1000f1ef6632339822))
- updated deps arr in clearAll func ([c013987](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/c01398764b006e2141fb10f9086150751532b9a0))
- v1 ([ea05402](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/ea05402bf54093896fa6cdfcbd94e9e40577f0f5))
- v2 ([1782588](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/178258878bf8d6bb43c6d3935fb17685c325313c))

### Features

- CodeField + rename radiogroup ([6c783d6](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/6c783d6224cc6e7595e88479e736f4282c981f5a))

## [0.0.68](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.67...v0.0.68) (2025-05-23)

### Bug Fixes

- border radius ([d404a67](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/d404a675c2ac21b7fab509e60fe7826450f5e5ee))
- borderRadius ([2617995](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/2617995eec602ee4efbbccd2cb3141efea6486d7))
- Refactor DrawerDF components to improve layout and styling ([32de3fe](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/32de3fe11fa380be7adee8e50617c8c0978d3ce2))
- tableHeight fixed, added additional type RenderCellProps, RenderGroupCellProps, changed link to SDDS-site in storybookc ([5cc6c05](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/5cc6c05cf18065da4cf31865f3c0257a93e6635d))
- Tree added main types export ([26ef310](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/26ef31031f21916cad8c7e8b26000eef0993c55c))

### Features

- update exports ([bad384a](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/bad384a5e350b8cedc32b0a4747fd82252651a51))

## [0.0.67](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.66...v0.0.67) (2025-05-16)

### Bug Fixes

- context menu macos click ([2753c59](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/2753c5906400a6399a74d1f73e1be44d53dabec8))

### Features

- add stop propagation ([e463d58](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/e463d587b727a7ff0065f5fac0de7839348e58ad))
- add stopImmediatePropagation ([af98f29](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/af98f29148d082756b807001f4ebd077d2f27e46))

## [0.0.66](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.65...v0.0.66) (2025-05-07)

**Note:** Version bump only for package @dais-ui/source

## [0.0.65](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.64...v0.0.65) (2025-05-07)

**Note:** Version bump only for package @dais-ui/source

## [0.0.64](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.63...v0.0.64) (2025-04-25)

### Bug Fixes

- locales ([468386b](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/468386b75abf84de65d6ca2457208d8eb86b0f01))
- replace content cell comp ([8fa6aa9](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/8fa6aa9861f2072eaafd354e392b66a2e8f50fc7))
- ru locale default ([1e02c13](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/1e02c13bbf4cfbcb0ec390cb274fdb9b9e3b60f9))
- some spacing for rebuild trigger ([18cdeca](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/18cdecad7c47c14093067859f36b01ba8f59168f))

### Features

- add FormatCell for table ([355c997](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/355c997ea5fe58c141e5d9b3d33a9058542006f0))
- add onChange + types + stories ([5595bc8](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/5595bc8386a5bf4686a3d0883aa9ab4506a4723f))
- add props for control width of group column ([4e5cc78](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/4e5cc78c787ed8d78c3a20cf8d7de4a885fc4374))
- add tests and refactor ([0a8c7a4](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/0a8c7a40377262194f8a5feb3eb9eb8f06688f0c))
- add toScrollTop for onChange + use perPage for onChange ([64dc6f2](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/64dc6f2b4c42aea5e6bb4109e5327ec2b718d9bd))
- format ([5e0953a](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/5e0953abd8319067813105feebafc8809edb95b2))
- stories + refactor ([9468a16](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/9468a16d0aec85546e59be6c7ecf34115055b9ba))
- stories + refactor format types ([ff7a271](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/ff7a271ec9adbd4eade949decac0553df26b3f4e))

## [0.0.63](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.62...v0.0.63) (2025-04-21)

### Bug Fixes

- reexport types TableSDDS ([3f561df](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/3f561df9d9d59c4777ab016cc7285a12d4bcfb13))

## [0.0.62](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.61...v0.0.62) (2025-04-18)

### Bug Fixes

- added borderStyle in Table/styles/styles.ts for more specificity ([27cb84a](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/27cb84add1abd649d902cf76e59fe7dd79a0763a))
- breakpoints ([9c6f6fd](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/9c6f6fdbb670e39d6b5e0506912d5821ecddfd67))
- for filter use keyInFilterState if set ([06cf0cd](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/06cf0cd86f7526f97573cfd41b7a85604bcd5ecb))
- remove Flow and textHint for formNumberFormat, use leftHelper ([3b11a42](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/3b11a42698329074b0f7c543a21e8e6352ea206f))
- remove mediaQueryConstructorNew, reexports, rename chunk name ([5b56f79](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/5b56f79f3b56467de20f07de8d10663d39e90781))
- remove useless styled comp ([dbb32d7](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/dbb32d7783bba0d25a0a59f332bbdc8b9fdf1bbf))
- rename props, add correct reexports from ui-kit ([37b36d8](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/37b36d89933f405f6940f56db2819e991fd00f92))
- textXs hint ([455e01a](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/455e01a32dd09fb30c80e4b0f688355b316f6f00))
- types ([6ae0af1](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/6ae0af1de4674e90f28724926d31ffedea593cea))

### Features

- add control comp datepickerrange + vitest test ([5dbbc21](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/5dbbc21791081e93f407771778b25007900c4bc6))
- add form number format component + stories ([738ee11](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/738ee110d9f7ee7abffd171e8d5871ea6a3f0b0f))
- add FormNumberFormat ([b855f08](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/b855f0868226a2d66e6f79e3cad2d5ade267054a))
- add overflows for layouts items, update layout stories ([db7f942](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/db7f942d8bfbf3a6c7b459b69579f99230cdde52))
- add vi test ([5d34ca9](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/5d34ca92f70d8086584edb9508b06b66013809e7))
- added scripts for clearing after updating ([7b96c32](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/7b96c32e69395040bf1b20d69b361a2877277d0d))
- changed story of RowsGroupingSimplle ([de412dc](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/de412dc268951af52b4743afd20122a126c4cc4e))
- **DFP-1110:** add FormDatePicker + DatePickerRange ([fb62fb9](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/fb62fb9f3e08f84b3b3e3907b6aab85a4121cec5))
- pageLayout component ([5d3140e](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/5d3140ecf6911625671c021eee399b7cfcb37107))
- rangeDatepicker tests + error msg + stories + examples ([1f6a041](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/1f6a041f82689babee0d73c4dae1c94328c98a23))
- stories + new variants ([9d2870a](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/9d2870a692ef595830e67c495888d5e88c988551))
- styles for datePickerRange ([cc610da](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/cc610da72b26383e983acebc408be19e7e0108c9))
- updated libs, renamed SDDSTable to TableSDDS for semantics ([db31ea6](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/db31ea6f9f5bdb37c09162d5eee68acc819d4f58))
- v3_1 v3_2 stories ([6fed95f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/6fed95fd94e6d8c5f994fdf9bde85f37cfe5f643))

## [0.0.61](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.60...v0.0.61) (2025-04-04)

### Bug Fixes

- add rest props for StyledHeader (heir of Box Comp) and remove whitespace ([632743f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/632743fa35b2e5ae720f006482cda9e17690bf7c))
- build ([dfb4568](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/dfb4568cf2cc2e529ca7db474a1141545b3c1196))
- **eslint:** enforce consistent line endings with 'auto' ([2bbac98](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/2bbac98ddb53827eb889816b4b59a3f1dd41240c))
- styles for table scrollbar ([c3420da](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/c3420dae3195ab290c2a9601c2a4bac9986fba56))

### Features

- add css prop for customScrollbar mixin and use dark theme by default ([e499ae9](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/e499ae9a8aa5cbed20fb48b49bb371493a0f92b3))
- **DFP-1124:** feat custom scrollbar mixin and global styles ([5481680](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/54816809aee626ccff78b6dc4936872a3e1eface))
- update SDDS + Table comp reexport ([36a015a](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/36a015a28771b2f8473b736a7f5d857a2607fed9))

## [0.0.60](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.59...v0.0.60) (2025-03-25)

**Note:** Version bump only for package @dais-ui/source

## [0.0.59](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.58...v0.0.59) (2025-03-21)

**Note:** Version bump only for package @dais-ui/source

## [0.0.58](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.57...v0.0.58) (2025-03-19)

### Features

- added Contributing.md, README.md, tabWidth in prettierrc ([2f24694](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/2f24694f664b55b08d709ade71d6d291e84fc8f5))
- added iconSvgSprite chunk and reexport in components/index.ts ([af6e225](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/af6e22544a72094d90e2540a017a463f14c68bc3))
- fixed all tabWidth lint-errors ([01facca](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/01facca7ef5949ffbc6ef21b13453b33cdda6094))
- new Modal added, and refacotred marginBlock of ModalDF.Content in stories ([772df4f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/772df4f94c42ce75fd39e36b0c8d9ccf2d4c7cf8))
- refactored story of ModalDFConfirmation, added description to types of component props ([8b9591c](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/8b9591c9a40a3bca1a740aaf9caaa94af1979cac))

## [0.0.57](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.56...v0.0.57) (2025-03-17)

**Note:** Version bump only for package @dais-ui/source

## [0.0.56](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.55...v0.0.56) (2025-03-14)

### Features

- new ModalDF component ([64d803a](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/64d803a4707ae698b090b2675ee67a9169d8aa5a))

## [0.0.55](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.54...v0.0.55) (2025-03-07)

**Note:** Version bump only for package @dais-ui/source

## [0.0.54](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.53...v0.0.54) (2025-03-05)

**Note:** Version bump only for package @dais-ui/source

## [0.0.53](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.52...v0.0.53) (2025-02-21)

### Features

- update libs ([e3ecf00](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/e3ecf00d9a6251f0cf07417c13720c181be6deb5))

## [0.0.52](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.51...v0.0.52) (2025-02-17)

### Features

- changed all imports ([1e81eed](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/1e81eed41ae9e47b9b7a22aef79548ca33dbe07a))

## [0.0.51](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.50...v0.0.51) (2025-02-14)

### Bug Fixes

- added status number in title annd changed 401 status title,text ([439f880](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/439f8806a8109911fab26f3080d43499f3f7db7c))

## [0.0.50](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.49...v0.0.50) (2025-02-07)

**Note:** Version bump only for package @dais-ui/source

## [0.0.49](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.48...v0.0.49) (2025-02-05)

**Note:** Version bump only for package @dais-ui/source

## [0.0.48](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.47...v0.0.48) (2025-01-31)

**Note:** Version bump only for package @dais-ui/source

## [0.0.47](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.46...v0.0.47) (2025-01-24)

**Note:** Version bump only for package @dais-ui/source

## [0.0.46](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.45...v0.0.46) (2024-12-28)

### Features

- improve-manual-chanking ([e6c0e5d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/e6c0e5d61f008c8914ccce9a0d08b21d80b1e69a))

## [0.0.45](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.44...v0.0.45) (2024-12-13)

**Note:** Version bump only for package @dais-ui/source

## [0.0.44](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.43...v0.0.44) (2024-12-06)

**Note:** Version bump only for package @dais-ui/source

## [0.0.43](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.42...v0.0.43) (2024-12-02)

**Note:** Version bump only for package @dais-ui/source

## [0.0.42](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.41...v0.0.42) (2024-11-25)

### Bug Fixes

- box types ([841f720](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/841f72042695f97bc7602c5581cee46f254e523c))

### Features

- update mdx declarations ([e21a429](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/e21a4291b19913f72720aa04659ec5b15ec3050d))

## [0.0.41](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.39...v0.0.41) (2024-11-20)

**Note:** Version bump only for package @dais-ui/source

## [0.0.39](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.38...v0.0.39) (2024-11-15)

**Note:** Version bump only for package @dais-ui/source

## [0.0.38](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.37...v0.0.38) (2024-11-08)

**Note:** Version bump only for package @dais-ui/source

## [0.0.37](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.36...v0.0.37) (2024-11-05)

### Bug Fixes

- stories remarks ([f41be56](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/f41be56e7f458f57d94f28864a82af606103dde5))

## [0.0.36](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.35...v0.0.36) (2024-10-21)

**Note:** Version bump only for package @dais-ui/source

## [0.0.35](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.34...v0.0.35) (2024-10-16)

### Features

- add generator for token exports and optimize storybook hmr ([d7e2387](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/d7e23870045bae32ec4695c2734a3503491827ac))

## [0.0.34](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.33...v0.0.34) (2024-10-14)

### Bug Fixes

- tokens reexports ([c589645](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/c5896455badf07956ef6254dacc03533aafb4a37))

## [0.0.33](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.32...v0.0.33) (2024-10-08)

**Note:** Version bump only for package @dais-ui/source

## [0.0.32](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.31...v0.0.32) (2024-10-04)

**Note:** Version bump only for package @dais-ui/source

## [0.0.31](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.30...v0.0.31) (2024-09-27)

**Note:** Version bump only for package @dais-ui/source

## [0.0.30](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.29...v0.0.30) (2024-09-25)

**Note:** Version bump only for package @dais-ui/source

## [0.0.29](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.28...v0.0.29) (2024-09-23)

**Note:** Version bump only for package @dais-ui/source

## [0.0.28](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.27...v0.0.28) (2024-09-10)

**Note:** Version bump only for package @dais-ui/source

## [0.0.27](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.26...v0.0.27) (2024-09-03)

### Bug Fixes

- init dockerfile ([4a15620](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/4a15620320f2c2d881e3fc6a3ce835084637225b))

### Features

- prepare to nx project ([7777fc1](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/7777fc1d4eabd9a7ca07cf624dde8bfbb3e2d25b))

## [0.0.26](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.25...v0.0.26) (2024-08-15)

**Note:** Version bump only for package @dais-ui/source

## [0.0.25](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.24...v0.0.25) (2024-08-07)

### Features

- add css inject plugin ([5a2ecb3](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/5a2ecb3b3ffa7713c632b2f80923e40171189d09))

## [0.0.24](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.23...v0.0.24) (2024-08-06)

**Note:** Version bump only for package @dais-ui/source

## [0.0.23](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.22...v0.0.23) (2024-08-06)

**Note:** Version bump only for package @dais-ui/source

## [0.0.22](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.20...v0.0.22) (2024-08-06)

### Bug Fixes

- lerna package version ([6785cb2](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/6785cb2223c6526ae6f540777c084cf1227ba306))

## [0.0.20](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.19...v0.0.20) (2024-08-05)

**Note:** Version bump only for package @dais-ui/source

## [0.0.19](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.18...v0.0.19) (2024-07-24)

**Note:** Version bump only for package @dais-ui/source

## [0.0.18](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.17...v0.0.18) (2024-07-23)

**Note:** Version bump only for package @dais-ui/source

## [0.0.17](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.16...v0.0.17) (2024-07-11)

**Note:** Version bump only for package @dais-ui/source

## [0.0.16](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.15...v0.0.16) (2024-07-04)

**Note:** Version bump only for package @dais-ui/source

## [0.0.15](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.14...v0.0.15) (2024-06-13)

### Bug Fixes

- icons reexport ([079ec98](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/079ec9896a38ec52d2213ae97173693e5e51fe1b))

## [0.0.14](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.13...v0.0.14) (2024-06-13)

### Features

- add root exports and add README ([575eaa6](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/575eaa6ce40cf27ce8d803827a8835bdf70a9295))

## [0.0.13](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.12...v0.0.13) (2024-06-11)

### Features

- remove exports from package.json ([dce4820](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/dce482014cf4508bf9c9d825226684404c129b35))

## [0.0.12](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.11...v0.0.12) (2024-06-11)

### Features

- add exports settings to package.json ([11eae7d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/11eae7da3940ce8d090865f0849dca36349ad756))

## [0.0.11](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.10...v0.0.11) (2024-06-11)

### Bug Fixes

- fix exports ([37b5902](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/37b5902856c0db6147229d46750c86bebc4cee1f))

## [0.0.10](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.9...v0.0.10) (2024-06-11)

### Bug Fixes

- fix exports ([2400482](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/24004826a8f98ded93fe37ded14bed60cc402672))

## [0.0.9](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.8...v0.0.9) (2024-06-11)

### Features

- optimize build ([cd33f2b](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/cd33f2b88b14019dc6665d716463ea4374c907f5))

## [0.0.8](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.7...v0.0.8) (2024-06-10)

### Features

- add generated entry point ([c8c66f1](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/c8c66f11c6ba42d724963fe98f7f3f793ef0aa4a))

## [0.0.7](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.6...v0.0.7) (2024-06-10)

### Features

- change build executer and improve vite.config ([63d7fa6](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/63d7fa691df40d491c5a4d21d2047b5f7b6d7bfd))

## [0.0.6](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.5...v0.0.6) (2024-06-07)

**Note:** Version bump only for package @dais-ui/source

## [0.0.5](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.4...v0.0.5) (2024-06-04)

**Note:** Version bump only for package @dais-ui/source

## [0.0.4](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.0.3...v0.0.4) (2024-06-04)

### Features

- change publish repo ([906fd8c](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/906fd8c2494b59ab3a7d51dc4dd09f19a6e66fce))

## 0.0.3 (2024-06-04)

### Features

- add dockerfile ([63ea81b](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/63ea81bc42339304594d790fea299518504bf097))
- add icons story ([6d95940](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/6d95940d5646c66ba243c2a1e6ec9539ef5152bc))
- add lerna for publish ([2ebdebf](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/2ebdebf34a577771cabaf4e32872d261ea7b2131))
- add license ([bfd0d77](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/bfd0d779822c59b9a3f0d139474582b64aee8bd6))
- add nx workspace ([6d16a0a](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/6d16a0aed7c884954230c94a087f3b8674da51c8))
- add storybook package ([bd28870](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/bd28870b72a9771158530dc067722270ce6197c4))
- add storybook plugin ([6f38b1e](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/6f38b1eb22d4ef101bf5078b2118b3257302fdb1))
- add strict engine ([97b5dbf](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/97b5dbf09a6a61feaebfacc77adf1d4311523575))
- add typography styles export ([3f0a6e9](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/3f0a6e97085f213f65b4b300d9cd7b57eaa9e439))
- change publish repo ([52c64b4](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/52c64b4588760d1faccb2e917db4ccf8b00f6156))
- fix storybook build ([95016d5](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/95016d5ce5175c23d3b8dc7176e06cf1c6f15625))
- move to npm-all registry ([9f6c69f](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/9f6c69ff6c975fc191a0658e3d6d57f5fa19ef10))
- try to fix publish repo name ([61b5d6d](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/61b5d6de4b105451241c056dfc8ed74f7e05cc18))
- upgrade icon package version ([8fed800](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/8fed80080a51bc37347bf5ff8b785aa187a66114))
- upgrade storybook to v8 ([69b9672](https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/commits/69b967271d144fdd595c2aea4e74846decf1df3e))
