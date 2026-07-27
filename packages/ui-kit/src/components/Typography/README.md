## Архитектура компонента

### Определение переполнения текста

Компонент использует DOM-метрики для определения, обрезан ли текст:

```typescript
// Для однострочного текста
scrollWidth > clientWidth;

// Для многострочного текста
scrollHeight > clientHeight || scrollWidth > clientWidth;
```

Проверка происходит в `checkIsOverflowed()` при наведении курсора. Tooltip показывается **только** если текст действительно обрезан.

#### Sub-pixel overflow (однострочный текст)

Для однострочного текста используется micro-scroll test: при переполнении &lt; 1px CSS уже показывает троеточие, но `scrollWidth > clientWidth` может вернуть `false` из-за округления. Пробуем прокрутить на 1px — если `scrollLeft > 0`, overflow есть. Для многострочного текста micro-scroll **не** используется (даёт ложные срабатывания из-за font metrics).

### Управление жизненным циклом tooltip

1. **Открытие**: При `onMouseEnter` проверяется переполнение, затем таймер с задержкой `mouseEnterDelay` (500ms по умолчанию)
2. **Закрытие**: При `onMouseLeave` таймер очищается, tooltip закрывается с задержкой `mouseLeaveDelay` (0ms по умолчанию)
3. **Очистка**: После закрытия вызывается `schedule()` из `usePopoverCleanup` для удаления пустых контейнеров

### Изолированный контейнер (usePopoverCleanup)

Все tooltip'ы от `TypographyWithAutoTooltip` рендерятся в контейнер `typography-with-auto-tooltip-root` (prop `frame`), чтобы при очистке пустых `plasma-popover-root*` не затронуть остальные Tooltip в приложении.

## Технические детали

### Стилизация

- `truncateText({ lines })` — применяет CSS для обрезки текста
- `StyleTooltipWrapper` — `display: flex`, `align-items: center`, `min-width: 0` для корректной работы в flex-контекстах
