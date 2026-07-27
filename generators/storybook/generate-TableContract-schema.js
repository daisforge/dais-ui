/* eslint-disable no-console */
import * as fs from 'fs';
import * as path from 'path';
import { createGenerator } from 'ts-json-schema-generator';

function main() {
  const repoRoot = process.cwd();

  const configFrom = {
    path: path.join(
      repoRoot,
      'packages',
      'ui-kit',
      'src',
      'components',
      'TableContract',
      'types.contractResponse.ts'
    ),
    tsconfig: path.join(repoRoot, 'tsconfig.base.json'),
    type: 'ContractResponse',
    // discriminatorType?: "json-schema" | "open-api";
  };
  let schema;
  let openApiSchema;
  try {
    schema = createGenerator(configFrom).createSchema('ContractResponse');
    openApiSchema = createGenerator({
      ...configFrom,
      discriminatorType: 'open-api',
    }).createSchema('ContractResponse');
  } catch (err) {
    console.log('-----Ошибка при вызове createGenerator', err);
  }
  if (!schema && !openApiSchema) {
    return;
  }

  const configTo = [
    {
      path: path.join(
        repoRoot,
        'packages',
        'storybook',
        'src',
        'stories',
        'TableContract',
        'types.schema.json'
      ),
      schema,
    },
    // {
    //   path: path.join(
    //     repoRoot,
    //     'packages',
    //     'storybook',
    //     'src',
    //     'stories',
    //     'TableContract',
    //     'types.open-api-schema.json'
    //   ),
    //   schema: openApiSchema,
    // },
  ];

  try {
    configTo.forEach((conf) => {
      fs.writeFile(
        conf.path,
        JSON.stringify(conf.schema, null, 2),
        'utf8',
        (writeErr) => {
          if (writeErr) {
            console.error(`Ошибка записи файла ${conf.path}:`);
          } else {
            console.log(`Файл ${conf.path} успешно обновлён.`);
          }
        }
      );
    });
  } catch (err) {
    console.error(`-----Ошибка во время создания схем:\n`, err);
  }
}

main();
