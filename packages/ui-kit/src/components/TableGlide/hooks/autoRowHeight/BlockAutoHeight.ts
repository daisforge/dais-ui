import type { CellHeightReporter } from '../../cellRenderer';

/**
 * Автовысота для ячеек блоков по строкам: ячейка блока высоту строки не задаёт.
 *
 * Обычная ячейка получает свой приёмник высоты. Ячейка блока на несколько строк
 * приёмника не получает, а прежние замеры всех строк блока в её колонке
 * забываются: если ячейка раньше была обычной и высокой, её замер держал бы
 * строку высокой и после объединения. Забываем сразу все строки блока, потому
 * что glide спрашивает только главную ячейку блока, покрытые строки сами не
 * придут.
 *
 * Строки блока обходятся один раз на блок, а не на каждую отрисовку: glide
 * спрашивает ячейку блока при каждом наведении и перерисовке, а блок бывает на
 * сотню тысяч строк. Блоки колонки обходятся снова, когда в ней появился новый
 * замер обычной ячейки: ячейку могли разъединить и объединить заново. На новые
 * строки или колонки заводится новый экземпляр.
 */
export class BlockAutoHeight {
  /** Блоки, чьи строки уже забыты, по колонкам */
  private readonly forgotten = new Map<string, Set<string>>();

  reporterFor(
    reporter: CellHeightReporter,
    columnId: string,
    spanRows: readonly [number, number] | null | undefined,
    forgetRow: (rowIndex: number) => void,
  ): CellHeightReporter | undefined {
    if (!spanRows || spanRows[0] === spanRows[1]) {
      return {
        ...reporter,
        report: (width, height) => {
          this.forgotten.delete(columnId);
          reporter.report(width, height);
        },
      };
    }

    const blockKey = `${spanRows[0]}:${spanRows[1]}`;
    let blocks = this.forgotten.get(columnId);
    if (!blocks) {
      blocks = new Set();
      this.forgotten.set(columnId, blocks);
    }
    if (!blocks.has(blockKey)) {
      blocks.add(blockKey);
      for (let rowIndex = spanRows[0]; rowIndex <= spanRows[1]; rowIndex += 1) {
        forgetRow(rowIndex);
      }
    }
    return undefined;
  }
}
