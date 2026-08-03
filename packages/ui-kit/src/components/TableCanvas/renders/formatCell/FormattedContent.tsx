import { CanvasContent, isCanvasEl } from '../../TableGlideInstance';
import { ContentFormat } from '../../TableGlideInstance/type';
import { formatCellValue } from './formatCellContent';

export const FormattedContent = (
  value: unknown,
  format?: ContentFormat,
): CanvasContent => {
  if (isCanvasEl(value)) {
    return value;
  }

  const formattedValue = formatCellValue(value, format);

  // TODO title  для тултипа
  // const title = typeof formattedValue === 'string' ? formattedValue : undefined;

  return formattedValue;
  // alignContent перемещено в GlideInstane
  // const alignContent = getAlignment(format);

  // if (alignContent === 'left') {
  //   return formattedValue;
  // }
  // return (
  //   <Canvas.Container
  //     justifyContent={justifyContentMapper[alignContent]}
  //     style={{ width: '100%' }}
  //   >
  //     <Canvas.Text>{formattedValue}</Canvas.Text>
  //   </Canvas.Container>
  // );
};
