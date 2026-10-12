# Цвета таблицы — исходные токены, карта и результат по шести темам

Сгенерировано 07.10.2026 из `code/table-token-sources.ts` генератором `code/table-token-states.ts` (v1.2). Темы: light и dark — `@salutejs/sdds-themes` 0.79.1 (значения этих токенов в 0.83.0 те же); betaCoreLight и betaCoreDark — `@salutejs-ds/sdds_finai_beta_core` 0.1.0; highContrastLight — `TableGlide/tokens.ts` (второй приоритет); highContrastDark — темы нет, заглушка с копией dark. Прочерк — в теме нет такого токена.

Как читать. Разработчикам нужны две вещи: **вход** — семантические токены темы с их hex (раздел 1), и **карта** — какой токен и в каком состоянии стоит за каждым ключом таблицы (раздел 2). Состояния: rest — токен как есть; hover — +1δ по лучу OKLCH; hover2 — ещё +1δ по тому же лучу (+2δ от покоя), выбранная строка под курсором; active — выделение, `surface-transparent-accent` наложен на цвет покоя (как компонент Selection Area в макете «Выделение ячеек»); hoverActive — +1δ по лучу от цвета выделения (hover на выделенных ячейках показывается; в макете «Выделение ячеек» сказано обратное, это ошибка макета, правится). Всё, у чего состояние не rest, генератор вычисляет; вычисленные значения приведены в разделе 3 для сверки.

## 1. Вход: семантические токены и их hex в каждой теме

Это единственные цвета, которые задаются руками. Токены с состоянием из темы (текст) приведены с их собственными hover и active.

| Токен | light | dark | betaCoreLight | betaCoreDark | highContrastLight | highContrastDark |
|---|---|---|---|---|---|---|
| `surface-solid-card` | `#FFFFFFFF` | `#060A0C` | `#FFFFFF` | `#060A0D` | `#FFFFFF` | `#060A0C` |
| `surface-solid-primary` | `#F2F5F8` | `#13181B` | `#F3F7FA` | `#14191D` | — | `#13181B` |
| `background-primary` | `#F2F5F8` | `#060A0C` | `#F3F7FA` | `#060A0D` | — | `#060A0C` |
| `surface-accent-minor` | `#ECF6FCFF` | `#071A26FF` | `#EFF8FF` | `#0C1A24` | `#CFE5F2FF` | `#071A26FF` |
| `surface-accent` | `#199AF0` | `#199AF0` | `#1F9EEB` | `#1F9EEB` | `#0076D2` | `#199AF0` |
| `outline-accent` | `#0B7ECB` | `#199AF0` | `#0087CD` | `#1F9EEB` | `#0058A2` | `#199AF0` |
| `outline-solid-primary` | `#D5DFE6` | `#23292D` | `#CFDBE4` | `#262626` | `#C4CFD7` | `#23292D` |
| `surface-negative` | `#FF293E` | `#FF293E` | `#F81C42` | `#F81C42` | `#E7002F` | `#FF293E` |
| `surface-transparent-accent` | `#118CDF1F` | `#118CDF33` | `#0090DA1F` | `#0090DA33` | `#0076D21F` | `#118CDF33` |
| `surface-transparent-positive` | `#1A9E321F` | `#1A9E3233` | `#21A0381F` | `#21A03833` | `#198A001F` | `#1A9E3233` |
| `surface-transparent-warning` | `#FA5F051F` | `#FA5F0533` | `#E154001F` | `#E1540033` | `#D958001F` | `#FA5F0533` |
| `surface-positive-minor` | `#9EFAAF` | `#0A2B10` | `#AFFFB1` | `#0F2D11` | — | `#0A2B10` |
| `surface-negative-minor` | `#FFE0E3` | `#4A0D13` | `#FEDFDE` | `#480B11` | — | `#4A0D13` |
| `surface-warning-minor` | `#FEE2D2` | `#3D1D0A` | `#FEE1D6` | `#3C1C0F` | — | `#3D1D0A` |
| `surface-info-minor` | `#CFECFF` | `#0C283B` | `#D3EBFF` | `#09283D` | — | `#0C283B` |
| `data-yellow-light` | `#FFE4AE` | `#211807` | — | — | — | `#211807` |
| `data-blue-light` | `#EDF8FF` | `#0A1924` | — | — | — | `#0A1924` |
| `data-yellow` | `#F3A912` | `#A16B00` | `#E9A431` | `#9A6700` | `#D49100` | `#A16B00` |
| `text-primary` | `#13181BF5` | `#F2F5F8F5` | `#14191DF5` | `#F3F7FAF5` | `#13181BF5` | `#F2F5F8F5` |
| `text-primary-hover` (из темы) | `#13181B93` | `#F2F5F893` | `#151A1E93` | `#F4F8FA93` | `#13181B93` | `#F2F5F893` |
| `text-primary-active` (из темы) | `#13181BC4` | `#F2F5F8C4` | `#151A1EC4` | `#F4F8FAC4` | `#13181BC4` | `#F2F5F8C4` |

## 2. Карта: ключ таблицы → семантический токен + состояние

hex здесь нет намеренно: rest — токен как есть, hover — +1δ по лучу, hover2 — +2δ по лучу, active — наложение выделения, hoverActive — +1δ по лучу от цвета выделения; для text и outline состояния берутся из темы. Как ключи складываются в выбранную строку (highlightActiveType = 'row') — комментарий перед `TABLE_COLORS` в `code/table-token-sources.ts` и README, раздел «Как подключить».

| Ключ в коде | Что красит | Семантический токен | Состояние |
|---|---|---|---|
| `bgCell` | фон ячейки | `surface-solid-card` | rest |
| `bgRowHovered` | строка под курсором | `surface-solid-card` | hover |
| `bgHeader` | шапка, итоговая строка | `surface-accent-minor` | rest |
| `bgHeaderHasFocus` | шапка в фокусе | `surface-accent-minor` | rest |
| `bgGroupHeader` | групповая шапка | `surface-accent-minor` | rest |
| `bgHeaderHovered` | шапка под курсором | `surface-accent-minor` | hover |
| `bgGroupHeaderHovered` | групповая шапка под курсором | `surface-accent-minor` | hover |
| `selectionServiceActiveBg` | шапка и служебная зона при выделении | `surface-accent-minor` | active |
| `bgHeaderSelectedHovered` | выделенная шапка под курсором | `surface-accent-minor` | hoverActive |
| `selectionCheckboxBg` | отмеченная строка; выбранная строка (highlightActiveType = row) | `surface-accent-minor` | rest |
| `selectionServiceBg` | служебные колонки в покое | `surface-accent-minor` | rest |
| `bgSelectedRowHovered` | отмеченная строка под курсором; выбранная строка под курсором; выбранная строка с нажатым чекбоксом | `surface-accent-minor` | hover |
| `bgSelectedRowActiveHovered` | выбранная строка с нажатым чекбоксом под курсором | `surface-accent-minor` | hover2 |
| `bgServiceRowHovered` | служебные колонки строки под курсором | `surface-accent-minor` | hover |
| `selectionServiceActiveHoveredBg` | выделенная служебная зона под курсором | `surface-accent-minor` | hoverActive |
| `selectionActiveBg` | активная ячейка, выделенные колонка/строка на белом | `surface-solid-card` | active |
| `accentLight` | заливка диапазона Glide на белом | `surface-solid-card` | active |
| `selectionActiveCheckboxBg` | активная ячейка в отмеченной строке | `surface-accent-minor` | active |
| `selectionActiveHoveredBg` | выделение в строке под курсором (= выделение) | `surface-solid-card` | hoverActive |
| `selectionActiveCheckboxHoveredBg` | выделение в отмеченной строке под курсором | `surface-accent-minor` | hoverActive |
| `bgEditableCell` | редактируемая ячейка | `data-yellow-light` | rest |
| `bgEditableCellHovered` | редактируемая ячейка под курсором | `data-yellow-light` | hover |
| `bgEditableCellActive` | редактируемая ячейка в диапазоне выделения | `data-yellow-light` | active |
| `bgEditableCellActiveHovered` | редактируемая ячейка в выделении под курсором | `data-yellow-light` | hoverActive |
| `bgEditableCellRowActiveHovered` | редактируемая ячейка выбранной строки под курсором | `data-yellow-light` | hover2 |
| `editedSuccessfullyCellColor` | успешно сохранённая ячейка | `data-blue-light` | rest |
| `editedSuccessfullyCellHoverColor` | сохранённая ячейка под курсором | `data-blue-light` | hover |
| `editedSuccessfullyCellActiveColor` | сохранённая ячейка в диапазоне выделения | `data-blue-light` | active |
| `editedSuccessfullyCellActiveHoverColor` | сохранённая ячейка в выделении под курсором | `data-blue-light` | hoverActive |
| `editedSuccessfullyCellRowActiveHoverColor` | сохранённая ячейка выбранной строки под курсором | `data-blue-light` | hover2 |
| `bgCellPositive` | ячейка со статусом positive | `surface-transparent-positive` | rest |
| `bgCellPositiveHovered` | positive под курсором | `surface-transparent-positive` | hover |
| `bgCellPositiveActive` | positive в выделении | `surface-transparent-positive` | active |
| `bgCellPositiveActiveHovered` | positive в выделении под курсором | `surface-transparent-positive` | hoverActive |
| `bgCellPositiveRowActiveHovered` | positive в выбранной строке под курсором | `surface-transparent-positive` | hover2 |
| `bgCellNegative` | ячейка со статусом negative | `surface-negative-minor` | rest |
| `bgCellNegativeHovered` | negative под курсором | `surface-negative-minor` | hover |
| `bgCellNegativeActive` | negative в выделении | `surface-negative-minor` | active |
| `bgCellNegativeActiveHovered` | negative в выделении под курсором | `surface-negative-minor` | hoverActive |
| `bgCellNegativeRowActiveHovered` | negative в выбранной строке под курсором | `surface-negative-minor` | hover2 |
| `bgCellWarning` | ячейка со статусом warning | `surface-transparent-warning` | rest |
| `bgCellWarningHovered` | warning под курсором | `surface-transparent-warning` | hover |
| `bgCellWarningActive` | warning в выделении | `surface-transparent-warning` | active |
| `bgCellWarningActiveHovered` | warning в выделении под курсором | `surface-transparent-warning` | hoverActive |
| `bgCellWarningRowActiveHovered` | warning в выбранной строке под курсором | `surface-transparent-warning` | hover2 |
| `bgCellInfo` | ячейка со статусом info | `surface-info-minor` | rest |
| `bgCellInfoHovered` | info под курсором | `surface-info-minor` | hover |
| `bgCellInfoActive` | info в выделении | `surface-info-minor` | active |
| `bgCellInfoActiveHovered` | info в выделении под курсором | `surface-info-minor` | hoverActive |
| `bgCellInfoRowActiveHovered` | info в выбранной строке под курсором | `surface-info-minor` | hover2 |
| `textDark` | текст ячеек | `text-primary` | rest |
| `textHeader` | текст шапки | `text-primary` | rest |
| `textHeaderSelected` | текст выделенной шапки | `text-primary` | rest |
| `textGroupHeader` | текст групповой шапки | `text-primary` | rest |
| `borderColor` | сетка | `outline-solid-primary` | rest |
| `accentColor` | рамка выделения и редактора | `outline-accent` | rest |
| `hiddenColumnsIndicatorColor` | индикатор скрытых столбцов | `outline-accent` | rest |
| `errorOutlineColor` | рамка ячейки с ошибкой | `surface-negative` | rest |
| `fadeWhite` | затухание на белом блоке | `surface-solid-card` | rest |
| `fadeGray` | затухание на сером блоке | `background-primary` | rest |

## 3. Результат для сверки: hex ключа таблицы в каждой теме

Выход генератора при δ = 0,025, в тёмных темах × 1,2; выделение — `surface-transparent-accent` на подложке (12 % в светлых темах, 20 % в тёмных).

| Ключ в коде | Токен · состояние | light | dark | betaCoreLight | betaCoreDark | highContrastLight | highContrastDark |
|---|---|---|---|---|---|---|---|
| `bgCell` | `surface-solid-card` · rest | `#FFFFFF` | `#060A0C` | `#FFFFFF` | `#060A0D` | `#FFFFFF` | `#060A0C` |
| `bgRowHovered` | `surface-solid-card` · hover | `#F5F7F9` | `#0C1013` | `#F4F8FA` | `#0C1013` | — | `#0C1013` |
| `bgHeader` | `surface-accent-minor` · rest | `#ECF6FC` | `#071A26` | `#EFF8FF` | `#0C1A24` | `#CFE5F2` | `#071A26` |
| `bgHeaderHasFocus` | `surface-accent-minor` · rest | `#ECF6FC` | `#071A26` | `#EFF8FF` | `#0C1A24` | `#CFE5F2` | `#071A26` |
| `bgGroupHeader` | `surface-accent-minor` · rest | `#ECF6FC` | `#071A26` | `#EFF8FF` | `#0C1A24` | `#CFE5F2` | `#071A26` |
| `bgHeaderHovered` | `surface-accent-minor` · hover | `#DEF0FA` | `#0A212F` | `#E1F2FF` | `#11212D` | `#C2DEEE` | `#0A212F` |
| `bgGroupHeaderHovered` | `surface-accent-minor` · hover | `#DEF0FA` | `#0A212F` | `#E1F2FF` | `#11212D` | `#C2DEEE` | `#0A212F` |
| `selectionServiceActiveBg` | `surface-accent-minor` · active | `#D1E9F8` | `#09314B` | `#D2EBFB` | `#0A3248` | `#B6D8EE` | `#09314B` |
| `bgHeaderSelectedHovered` | `surface-accent-minor` · hoverActive | `#C3E3F6` | `#0C3956` | `#C4E5FA` | `#0D3A53` | `#A9D1EB` | `#0C3956` |
| `selectionCheckboxBg` | `surface-accent-minor` · rest | `#ECF6FC` | `#071A26` | `#EFF8FF` | `#0C1A24` | `#CFE5F2` | `#071A26` |
| `selectionServiceBg` | `surface-accent-minor` · rest | `#ECF6FC` | `#071A26` | `#EFF8FF` | `#0C1A24` | `#CFE5F2` | `#071A26` |
| `bgSelectedRowHovered` | `surface-accent-minor` · hover | `#DEF0FA` | `#0A212F` | `#E1F2FF` | `#11212D` | `#C2DEEE` | `#0A212F` |
| `bgSelectedRowActiveHovered` | `surface-accent-minor` · hover2 | `#D0EAF8` | `#0E2839` | `#D3ECFF` | `#162836` | `#B5D7EA` | `#0E2839` |
| `bgServiceRowHovered` | `surface-accent-minor` · hover | `#DEF0FA` | `#0A212F` | `#E1F2FF` | `#11212D` | `#C2DEEE` | `#0A212F` |
| `selectionServiceActiveHoveredBg` | `surface-accent-minor` · hoverActive | `#C3E3F6` | `#0C3956` | `#C4E5FA` | `#0D3A53` | `#A9D1EB` | `#0C3956` |
| `selectionActiveBg` | `surface-solid-card` · active | `#E2F1FB` | `#082436` | `#E0F2FB` | `#052536` | `#E0EEFA` | `#082436` |
| `accentLight` | `surface-solid-card` · active | `#E2F1FB` | `#082436` | `#E0F2FB` | `#052536` | `#E0EEFA` | `#082436` |
| `selectionActiveCheckboxBg` | `surface-accent-minor` · active | `#D1E9F8` | `#09314B` | `#D2EBFB` | `#0A3248` | `#B6D8EE` | `#09314B` |
| `selectionActiveHoveredBg` | `surface-solid-card` · hoverActive | `#D5EBF9` | `#0B2B40` | `#D2ECF9` | `#072D40` | `#D3E7F8` | `#0B2B40` |
| `selectionActiveCheckboxHoveredBg` | `surface-accent-minor` · hoverActive | `#C3E3F6` | `#0C3956` | `#C4E5FA` | `#0D3A53` | `#A9D1EB` | `#0C3956` |
| `bgEditableCell` | `data-yellow-light` · rest | `#FFE4AE` | `#211807` | — | — | — | `#211807` |
| `bgEditableCellHovered` | `data-yellow-light` · hover | `#FFDD99` | `#291F0A` | — | — | — | `#291F0A` |
| `bgEditableCellActive` | `data-yellow-light` · active | `#E2D9B4` | `#1E2F32` | — | — | — | `#1E2F32` |
| `bgEditableCellActiveHovered` | `data-yellow-light` · hoverActive | `#DCD2A5` | `#24373A` | — | — | — | `#24373A` |
| `bgEditableCellRowActiveHovered` | `data-yellow-light` · hover2 | `#FFD683` | `#31260E` | — | — | — | `#31260E` |
| `editedSuccessfullyCellColor` | `data-blue-light` · rest | `#EDF8FF` | `#0A1924` | — | — | — | `#0A1924` |
| `editedSuccessfullyCellHoverColor` | `data-blue-light` · hover | `#DEF2FF` | `#0E202D` | — | — | — | `#0E202D` |
| `editedSuccessfullyCellActiveColor` | `data-blue-light` · active | `#D2EBFB` | `#0B3049` | — | — | — | `#0B3049` |
| `editedSuccessfullyCellActiveHoverColor` | `data-blue-light` · hoverActive | `#C4E5FA` | `#0E3854` | — | — | — | `#0E3854` |
| `editedSuccessfullyCellRowActiveHoverColor` | `data-blue-light` · hover2 | `#CFECFF` | `#122736` | — | — | — | `#122736` |
| `bgCellPositive` | `surface-transparent-positive` · rest | `#E3F3E6` | `#0A2814` | `#E4F3E7` | `#0B2816` | `#E3F1E0` | `#0A2814` |
| `bgCellPositiveHovered` | `surface-transparent-positive` · hover | `#D7EEDB` | `#0E3019` | `#D8EEDC` | `#0F301B` | `#D8EBD4` | `#0E3019` |
| `bgCellPositiveActive` | `surface-transparent-positive` · active | `#C9E6E5` | `#0B3C3D` | `#C8E7E5` | `#093D3D` | `#C7E2DE` | `#0B3C3D` |
| `bgCellPositiveActiveHovered` | `surface-transparent-positive` · hoverActive | `#BBE0DF` | `#0E4546` | `#BAE1DF` | `#0C4646` | `#BADCD7` | `#0E4546` |
| `bgCellPositiveRowActiveHovered` | `surface-transparent-positive` · hover2 | `#CBE9D0` | `#12381E` | `#CCE9D1` | `#133821` | `#CDE5C8` | `#12381E` |
| `bgCellNegative` | `surface-negative-minor` · rest | `#FFE0E3` | `#4A0D13` | `#FEDFDE` | `#480B11` | — | `#4A0D13` |
| `bgCellNegativeHovered` | `surface-negative-minor` · hover | `#FED6DA` | `#561117` | `#FDD5D4` | `#540E15` | — | `#561117` |
| `bgCellNegativeActive` | `surface-negative-minor` · active | `#E2D6E3` | `#3F263C` | `#DFD5DE` | `#3A2639` | — | `#3F263C` |
| `bgCellNegativeActiveHovered` | `surface-negative-minor` · hoverActive | `#DCCDDD` | `#482C45` | `#D8CCD7` | `#432C42` | — | `#482C45` |
| `bgCellNegativeRowActiveHovered` | `surface-negative-minor` · hover2 | `#FDCCD1` | `#62151B` | `#FCCBCA` | `#601119` | — | `#62151B` |
| `bgCellWarning` | `surface-transparent-warning` · rest | `#FEECE1` | `#371B0B` | `#FBEAE0` | `#32190A` | `#FAEBE0` | `#371B0B` |
| `bgCellWarningHovered` | `surface-transparent-warning` · hover | `#FDE3D3` | `#41210F` | `#F9E1D2` | `#3C1F0E` | `#F8E2D2` | `#41210F` |
| `bgCellWarningActive` | `surface-transparent-warning` · active | `#E1E0E1` | `#2F3235` | `#DCDFDF` | `#283134` | `#DCDDDE` | `#2F3235` |
| `bgCellWarningActiveHovered` | `surface-transparent-warning` · hoverActive | `#CFDAE5` | `#363A3D` | `#C7D9E7` | `#2F393C` | `#D4D5D6` | `#363A3D` |
| `bgCellWarningRowActiveHovered` | `surface-transparent-warning` · hover2 | `#FCDAC5` | `#4B2713` | `#F7D8C4` | `#462512` | `#F6D9C4` | `#4B2713` |
| `bgCellInfo` | `surface-info-minor` · rest | `#CFECFF` | `#0C283B` | `#D3EBFF` | `#09283D` | — | `#0C283B` |
| `bgCellInfoHovered` | `surface-info-minor` · hover | `#C0E6FF` | `#103045` | `#C5E5FF` | `#0C3048` | — | `#103045` |
| `bgCellInfoActive` | `surface-info-minor` · active | `#B8E0FB` | `#0D3C5C` | `#B9E0FB` | `#073D5C` | — | `#0D3C5C` |
| `bgCellInfoActiveHovered` | `surface-info-minor` · hoverActive | `#AADAFA` | `#104467` | `#ABDAFA` | `#094567` | — | `#104467` |
| `bgCellInfoRowActiveHovered` | `surface-info-minor` · hover2 | `#B1E0FF` | `#14384F` | `#B7DFFF` | `#0F3853` | — | `#14384F` |
| `textDark` | `text-primary` · rest | `#13181BF5` | `#F2F5F8F5` | `#14191DF5` | `#F3F7FAF5` | `#13181BF5` | `#F2F5F8F5` |
| `textHeader` | `text-primary` · rest | `#13181BF5` | `#F2F5F8F5` | `#14191DF5` | `#F3F7FAF5` | `#13181BF5` | `#F2F5F8F5` |
| `textHeaderSelected` | `text-primary` · rest | `#13181BF5` | `#F2F5F8F5` | `#14191DF5` | `#F3F7FAF5` | `#13181BF5` | `#F2F5F8F5` |
| `textGroupHeader` | `text-primary` · rest | `#13181BF5` | `#F2F5F8F5` | `#14191DF5` | `#F3F7FAF5` | `#13181BF5` | `#F2F5F8F5` |
| `borderColor` | `outline-solid-primary` · rest | `#D5DFE6` | `#23292D` | `#CFDBE4` | `#262626` | `#C4CFD7` | `#23292D` |
| `accentColor` | `outline-accent` · rest | `#0B7ECB` | `#199AF0` | `#0087CD` | `#1F9EEB` | `#0058A2` | `#199AF0` |
| `hiddenColumnsIndicatorColor` | `outline-accent` · rest | `#0B7ECB` | `#199AF0` | `#0087CD` | `#1F9EEB` | `#0058A2` | `#199AF0` |
| `errorOutlineColor` | `surface-negative` · rest | `#FF293E` | `#FF293E` | `#F81C42` | `#F81C42` | `#E7002F` | `#FF293E` |
| `fadeWhite` | `surface-solid-card` · rest | `#FFFFFF` | `#060A0C` | `#FFFFFF` | `#060A0D` | `#FFFFFF` | `#060A0C` |
| `fadeGray` | `background-primary` · rest | `#F2F5F8` | `#060A0C` | `#F3F7FA` | `#060A0D` | — | `#060A0C` |

## 4. Пять состояний каждого семантического токена

Для ячеек, окрашенных потребителем, и для любых новых ключей: состояния токена целиком.

| Токен | Состояние | light | dark | betaCoreLight | betaCoreDark | highContrastLight | highContrastDark |
|---|---|---|---|---|---|---|---|
| `surface-solid-card` | rest | `#FFFFFF` | `#060A0C` | `#FFFFFF` | `#060A0D` | `#FFFFFF` | `#060A0C` |
| `surface-solid-card` | hover | `#F5F7F9` | `#0C1013` | `#F4F8FA` | `#0C1013` | — | `#0C1013` |
| `surface-solid-card` | hover2 | `#EAEFF4` | `#12171A` | `#E9F0F6` | `#12171A` | — | `#12171A` |
| `surface-solid-card` | active | `#E2F1FB` | `#082436` | `#E0F2FB` | `#052536` | `#E0EEFA` | `#082436` |
| `surface-solid-card` | hoverActive | `#D5EBF9` | `#0B2B40` | `#D2ECF9` | `#072D40` | `#D3E7F8` | `#0B2B40` |
| `surface-solid-primary` | rest | `#F2F5F8` | `#13181B` | `#F3F7FA` | `#14191D` | — | `#13181B` |
| `surface-solid-primary` | hover | `#E8EDF2` | `#191F23` | `#E8F0F5` | `#1A2025` | — | `#191F23` |
| `surface-solid-primary` | hover2 | `#DEE5EC` | `#1F262B` | `#DDE9F0` | `#20272D` | — | `#1F262B` |
| `surface-solid-primary` | active | `#D7E8F5` | `#132F42` | `#D5EAF6` | `#103143` | — | `#132F42` |
| `surface-solid-primary` | hoverActive | `#CBE1F2` | `#17374C` | `#C8E3F3` | `#14394D` | — | `#17374C` |
| `background-primary` | rest | `#F2F5F8` | `#060A0C` | `#F3F7FA` | `#060A0D` | — | `#060A0C` |
| `background-primary` | hover | `#F2F5F8` | `#060A0C` | `#F3F7FA` | `#060A0D` | — | `#060A0C` |
| `background-primary` | hover2 | `#F2F5F8` | `#060A0C` | `#F3F7FA` | `#060A0D` | — | `#060A0C` |
| `background-primary` | active | `#F2F5F8` | `#060A0C` | `#F3F7FA` | `#060A0D` | — | `#060A0C` |
| `background-primary` | hoverActive | `#F2F5F8` | `#060A0C` | `#F3F7FA` | `#060A0D` | — | `#060A0C` |
| `surface-accent-minor` | rest | `#ECF6FC` | `#071A26` | `#EFF8FF` | `#0C1A24` | `#CFE5F2` | `#071A26` |
| `surface-accent-minor` | hover | `#DEF0FA` | `#0A212F` | `#E1F2FF` | `#11212D` | `#C2DEEE` | `#0A212F` |
| `surface-accent-minor` | hover2 | `#D0EAF8` | `#0E2839` | `#D3ECFF` | `#162836` | `#B5D7EA` | `#0E2839` |
| `surface-accent-minor` | active | `#D1E9F8` | `#09314B` | `#D2EBFB` | `#0A3248` | `#B6D8EE` | `#09314B` |
| `surface-accent-minor` | hoverActive | `#C3E3F6` | `#0C3956` | `#C4E5FA` | `#0D3A53` | `#A9D1EB` | `#0C3956` |
| `surface-accent` | rest | `#199AF0` | `#199AF0` | `#1F9EEB` | `#1F9EEB` | `#0076D2` | `#199AF0` |
| `surface-accent` | hover | `#0093E9` | `#1BA3FE` | `#0097E5` | `#21A7F9` | `#006FC6` | `#1BA3FE` |
| `surface-accent` | hover2 | `#008CDE` | `#41ACFF` | `#0090DA` | `#3BB0FF` | `#0068BA` | `#41ACFF` |
| `surface-accent` | active | `#1898EE` | `#1797ED` | `#1B9CE9` | `#199BE8` | `#0076D2` | `#1797ED` |
| `surface-accent` | hoverActive | `#0091E7` | `#19A0FB` | `#0095E2` | `#1BA4F6` | `#006FC6` | `#19A0FB` |
| `outline-accent` | rest | `#0B7ECB` | `#199AF0` | `#0087CD` | `#1F9EEB` | `#0058A2` | `#199AF0` |
| `outline-accent` | hover | `#0B7ECB` | `#199AF0` | `#0087CD` | `#1F9EEB` | `#0058A2` | `#199AF0` |
| `outline-accent` | hover2 | `#0B7ECB` | `#199AF0` | `#0087CD` | `#1F9EEB` | `#0058A2` | `#199AF0` |
| `outline-accent` | active | `#0B7ECB` | `#199AF0` | `#0087CD` | `#1F9EEB` | `#0058A2` | `#199AF0` |
| `outline-accent` | hoverActive | `#0B7ECB` | `#199AF0` | `#0087CD` | `#1F9EEB` | `#0058A2` | `#199AF0` |
| `outline-solid-primary` | rest | `#D5DFE6` | `#23292D` | `#CFDBE4` | `#262626` | `#C4CFD7` | `#23292D` |
| `outline-solid-primary` | hover | `#D5DFE6` | `#23292D` | `#CFDBE4` | `#262626` | `#C4CFD7` | `#23292D` |
| `outline-solid-primary` | hover2 | `#D5DFE6` | `#23292D` | `#CFDBE4` | `#262626` | `#C4CFD7` | `#23292D` |
| `outline-solid-primary` | active | `#D5DFE6` | `#23292D` | `#CFDBE4` | `#262626` | `#C4CFD7` | `#23292D` |
| `outline-solid-primary` | hoverActive | `#D5DFE6` | `#23292D` | `#CFDBE4` | `#262626` | `#C4CFD7` | `#23292D` |
| `surface-negative` | rest | `#FF293E` | `#FF293E` | `#F81C42` | `#F81C42` | `#E7002F` | `#FF293E` |
| `surface-negative` | hover | `#FB0033` | `#FF4C51` | `#F1003B` | `#FF364E` | `#DC002C` | `#FF4C51` |
| `surface-negative` | hover2 | `#F00030` | `#FF6463` | `#E60038` | `#FF545F` | `#D10029` | `#FF6463` |
| `surface-negative` | active | `#E23552` | `#CF3D5E` | `#DA2A54` | `#C63360` | `#CB0E43` | `#CF3D5E` |
| `surface-negative` | hoverActive | `#DE1F49` | `#DD4265` | `#D60C4B` | `#D43767` | `#C1003E` | `#DD4265` |
| `surface-transparent-accent` | rest | `#E2F1FB` | `#082436` | `#E0F2FB` | `#052536` | `#E0EEFA` | `#082436` |
| `surface-transparent-accent` | hover | `#D5EBF9` | `#0B2B40` | `#D2ECF9` | `#072D40` | `#D3E7F8` | `#0B2B40` |
| `surface-transparent-accent` | hover2 | `#C7E5F7` | `#0E334A` | `#C4E6F7` | `#09354A` | `#C6E0F6` | `#0E334A` |
| `surface-transparent-accent` | active | `#C9E5F8` | `#0A3958` | `#C5E6F7` | `#043A57` | `#C5DFF5` | `#0A3958` |
| `surface-transparent-accent` | hoverActive | `#BBDEF6` | `#0D4163` | `#B7E0F5` | `#054262` | `#B9D8F3` | `#0D4163` |
| `surface-transparent-positive` | rest | `#E3F3E6` | `#0A2814` | `#E4F3E7` | `#0B2816` | `#E3F1E0` | `#0A2814` |
| `surface-transparent-positive` | hover | `#D7EEDB` | `#0E3019` | `#D8EEDC` | `#0F301B` | `#D8EBD4` | `#0E3019` |
| `surface-transparent-positive` | hover2 | `#CBE9D0` | `#12381E` | `#CCE9D1` | `#133821` | `#CDE5C8` | `#12381E` |
| `surface-transparent-positive` | active | `#C9E6E5` | `#0B3C3D` | `#C8E7E5` | `#093D3D` | `#C7E2DE` | `#0B3C3D` |
| `surface-transparent-positive` | hoverActive | `#BBE0DF` | `#0E4546` | `#BAE1DF` | `#0C4646` | `#BADCD7` | `#0E4546` |
| `surface-transparent-warning` | rest | `#FEECE1` | `#371B0B` | `#FBEAE0` | `#32190A` | `#FAEBE0` | `#371B0B` |
| `surface-transparent-warning` | hover | `#FDE3D3` | `#41210F` | `#F9E1D2` | `#3C1F0E` | `#F8E2D2` | `#41210F` |
| `surface-transparent-warning` | hover2 | `#FCDAC5` | `#4B2713` | `#F7D8C4` | `#462512` | `#F6D9C4` | `#4B2713` |
| `surface-transparent-warning` | active | `#E1E0E1` | `#2F3235` | `#DCDFDF` | `#283134` | `#DCDDDE` | `#2F3235` |
| `surface-transparent-warning` | hoverActive | `#CFDAE5` | `#363A3D` | `#C7D9E7` | `#2F393C` | `#D4D5D6` | `#363A3D` |
| `surface-positive-minor` | rest | `#9EFAAF` | `#0A2B10` | `#AFFFB1` | `#0F2D11` | — | `#0A2B10` |
| `surface-positive-minor` | hover | `#8CF9A2` | `#0D3314` | `#9FFEA3` | `#133515` | — | `#0D3314` |
| `surface-positive-minor` | hover2 | `#78F895` | `#103B18` | `#8EFD95` | `#173D19` | — | `#103B18` |
| `surface-positive-minor` | active | `#8DEDB5` | `#0B3E39` | `#9AF2B6` | `#0C4139` | — | `#0B3E39` |
| `surface-positive-minor` | hoverActive | `#79EAAA` | `#0E4741` | `#87F0AB` | `#0F4A41` | — | `#0E4741` |
| `surface-negative-minor` | rest | `#FFE0E3` | `#4A0D13` | `#FEDFDE` | `#480B11` | — | `#4A0D13` |
| `surface-negative-minor` | hover | `#FED6DA` | `#561117` | `#FDD5D4` | `#540E15` | — | `#561117` |
| `surface-negative-minor` | hover2 | `#FDCCD1` | `#62151B` | `#FCCBCA` | `#601119` | — | `#62151B` |
| `surface-negative-minor` | active | `#E2D6E3` | `#3F263C` | `#DFD5DE` | `#3A2639` | — | `#3F263C` |
| `surface-negative-minor` | hoverActive | `#DCCDDD` | `#482C45` | `#D8CCD7` | `#432C42` | — | `#482C45` |
| `surface-warning-minor` | rest | `#FEE2D2` | `#3D1D0A` | `#FEE1D6` | `#3C1C0F` | — | `#3D1D0A` |
| `surface-warning-minor` | hover | `#FDD9C4` | `#47230D` | `#FDD7C9` | `#462213` | — | `#47230D` |
| `surface-warning-minor` | hover2 | `#FCD0B6` | `#512910` | `#FCCDBC` | `#502817` | — | `#512910` |
| `surface-warning-minor` | active | `#E1D8D4` | `#343335` | `#DFD7D6` | `#303338` | — | `#343335` |
| `surface-warning-minor` | hoverActive | `#DACFCB` | `#333D43` | `#D8CECD` | `#373B40` | — | `#333D43` |
| `surface-info-minor` | rest | `#CFECFF` | `#0C283B` | `#D3EBFF` | `#09283D` | — | `#0C283B` |
| `surface-info-minor` | hover | `#C0E6FF` | `#103045` | `#C5E5FF` | `#0C3048` | — | `#103045` |
| `surface-info-minor` | hover2 | `#B1E0FF` | `#14384F` | `#B7DFFF` | `#0F3853` | — | `#14384F` |
| `surface-info-minor` | active | `#B8E0FB` | `#0D3C5C` | `#B9E0FB` | `#073D5C` | — | `#0D3C5C` |
| `surface-info-minor` | hoverActive | `#AADAFA` | `#104467` | `#ABDAFA` | `#094567` | — | `#104467` |
| `data-yellow-light` | rest | `#FFE4AE` | `#211807` | — | — | — | `#211807` |
| `data-yellow-light` | hover | `#FFDD99` | `#291F0A` | — | — | — | `#291F0A` |
| `data-yellow-light` | hover2 | `#FFD683` | `#31260E` | — | — | — | `#31260E` |
| `data-yellow-light` | active | `#E2D9B4` | `#1E2F32` | — | — | — | `#1E2F32` |
| `data-yellow-light` | hoverActive | `#DCD2A5` | `#24373A` | — | — | — | `#24373A` |
| `data-blue-light` | rest | `#EDF8FF` | `#0A1924` | — | — | — | `#0A1924` |
| `data-blue-light` | hover | `#DEF2FF` | `#0E202D` | — | — | — | `#0E202D` |
| `data-blue-light` | hover2 | `#CFECFF` | `#122736` | — | — | — | `#122736` |
| `data-blue-light` | active | `#D2EBFB` | `#0B3049` | — | — | — | `#0B3049` |
| `data-blue-light` | hoverActive | `#C4E5FA` | `#0E3854` | — | — | — | `#0E3854` |
| `data-yellow` | rest | `#F3A912` | `#A16B00` | `#E9A431` | `#9A6700` | `#D49100` | `#A16B00` |
| `data-yellow` | hover | `#ECA300` | `#AC7300` | `#E69C00` | `#A56F00` | `#CB8B00` | `#AC7300` |
| `data-yellow` | hover2 | `#E49D00` | `#B77B00` | `#DD9600` | `#B07700` | `#C28500` | `#B77B00` |
| `data-yellow` | active | `#D8A52B` | `#84722D` | `#CDA246` | `#7B6F2C` | `#BA8E1A` | `#84722D` |
| `data-yellow` | hoverActive | `#D39D00` | `#8E7B31` | `#C99A2F` | `#847830` | `#B38700` | `#8E7B31` |
| `text-primary` | rest | `#13181BF5` | `#F2F5F8F5` | `#14191DF5` | `#F3F7FAF5` | `#13181BF5` | `#F2F5F8F5` |
| `text-primary` | hover | `#13181B93` | `#F2F5F893` | `#151A1E93` | `#F4F8FA93` | `#13181B93` | `#F2F5F893` |
| `text-primary` | hover2 | `#13181B93` | `#F2F5F893` | `#151A1E93` | `#F4F8FA93` | `#13181B93` | `#F2F5F893` |
| `text-primary` | active | `#13181BC4` | `#F2F5F8C4` | `#151A1EC4` | `#F4F8FAC4` | `#13181BC4` | `#F2F5F8C4` |
| `text-primary` | hoverActive | `#13181BC4` | `#F2F5F8C4` | `#151A1EC4` | `#F4F8FAC4` | `#13181BC4` | `#F2F5F8C4` |
