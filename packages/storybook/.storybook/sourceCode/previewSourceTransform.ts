import * as prettier from 'prettier/standalone';
import * as prettierParserTypescript from 'prettier/parser-typescript';
import { getRenderFuncFuncDecl } from './getRenderFuncFuncDecl';

export function previewSourceTransform(source: string, options: any) {
  try {
    const isTransformableStory =
      !options.originalStoryFn?.toString()?.startWith?.('args') &&
      source?.startsWith?.('{'); // если есть args, то не трансформируемый. Storybook сам красиво код отобразит.

    if (!isTransformableStory) return source; // Storybook сам красиво код отобразит.

    const prettySourceDisabled =
      options.parameters?.code?.source?.prettySource === false; // кастомный переключатель.

    // кейс когда собственный рендер и без args у Story
    if (prettySourceDisabled) return source;

    const preCode = options?.parameters?.docs?.source?.preCode ?? '';

    const getPrettierFormatted = (str: string) =>
      prettier.format(str, {
        parser: 'typescript',
        plugins: [prettierParserTypescript],
      });

    // нужно для корректной работы parser-ов
    const preStr = 'const ExampleStory = ';
    const formattedStr = getPrettierFormatted(preStr + source) as string;

    const startSearchStr = 'render: ';
    const endSearchStr = `>`;

    const startIndex = formattedStr.indexOf(startSearchStr);
    const endIndex = formattedStr.lastIndexOf(endSearchStr);

    if (startIndex === -1 || endIndex === -1) {
      const renderFuncInFuncDecl = getRenderFuncFuncDecl(
        formattedStr,
        'Example'
      );
      if (!renderFuncInFuncDecl) {
        return getPrettierFormatted(preCode + formattedStr);
      }

      return getPrettierFormatted(preCode + renderFuncInFuncDecl);
    }

    const correctSlicedSource = formattedStr.slice(
      startIndex + startSearchStr.length,
      endIndex + endSearchStr.length
    );
    const isHaveReturnAndBody = correctSlicedSource.includes('return');
    const startStr = 'const ExampleStory = ';
    let endStr = '';

    if (isHaveReturnAndBody) {
      endStr = ');\n};';
    } else {
      const isHaveOpeningRoundBrackets = correctSlicedSource.includes('=> (');
      if (isHaveOpeningRoundBrackets) {
        endStr = '\n);';
      } else {
        endStr = ';';
      }
    }
    const res = preCode + startStr + correctSlicedSource + endStr;

    return getPrettierFormatted(res);
  } catch (error) {
    console.error('Ошибка во время трансформации source-кода', error);
    return source;
  }
}
