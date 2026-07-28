/* eslint-disable no-console */
/* eslint-disable import/extensions */
import fs from 'fs';
import path from 'path';

import {
  aquaColorUnderlineStyle,
  boldStyle,
  greenColor,
  italicStyle,
  redColor,
  resetStyles,
  whiteBgColorBlackTxtColor,
} from '../utils.js';

const { dirname } = import.meta;

const pathToContributingMd = path.join(dirname, '../', 'Contributing.md');

const commitMsgPath = process.argv[2];
const fullCommitMsg = fs.readFileSync(commitMsgPath, 'utf8').trim();

// Игнорируем строки Co-authored-by при проверке формата
// Берём только первую строку (subject) для проверки паттерна
const commitMsg = fullCommitMsg.split('\n')[0].trim();

// ----------------------------- 1. Паттерн для проверки на соответствие
const allowedPattern =
  /^(feat|fix|refactor|test|docs|ci|nfp-feat|nfp-fix|nfp-refactor|nfp-test|nfp-docs|nfp-ci)(\(.+\))?: (.+)$/;

// ----------------------------- 2. Проверка commit-а на соответствие паттерну
if (!allowedPattern.test(commitMsg)) {
  console.error(`
    ${redColor}🚨 Неправильно заполненный commit 🚨${resetStyles}

    ${boldStyle}Сообщения коммитов должны быть следующего формата:${resetStyles}
    ${whiteBgColorBlackTxtColor}<тип>(контекст): <опционально JIRA-ID> <описание>${resetStyles}

    ${boldStyle}Текущий коммит:${resetStyles}
    ${redColor}${commitMsg}${resetStyles}

    ${boldStyle}Примеры корректных commit-ов:${resetStyles}
    ${italicStyle}Публикуемые в changelog изменения.${resetStyles}
    ${greenColor}feat(Table): добавлен новый функционал MassActionPanel${resetStyles}

    ${italicStyle}Непубликуемые (nfp - not for publish) в changelog изменения.${resetStyles}
    ${greenColor}nfp-feat(DrawerDF): убраны ненужные импорты в файле${resetStyles}

    ${boldStyle}Доступные типы commit-ов:${resetStyles}
    ${italicStyle}feat|fix|refactor|test|docs|ci|
    nfp-feat|nfp-fix|nfp-refactor|nfp-test|nfp-docs|nfp-ci${resetStyles}

    ${boldStyle}Подробнее можешь ознакомиться в файле Contributing.md${resetStyles}
    ${aquaColorUnderlineStyle}${pathToContributingMd}${resetStyles}
  `);
  process.exit(1); // Abort the commit
}

// ----------------------------- 3. Проверка формата BREAKING CHANGE (если есть) в теле коммита
// Критические изменения больше не тип в заголовке — заголовок остаётся обычным (feat/fix/...),
// а сама breaking-часть описывается отдельной строкой в теле коммита: `BREAKING CHANGE: <описание>`.
// Именно в таком формате её распознаёт lerna/conventional-changelog-angular при подсчёте major-версии.
const bodyLines = fullCommitMsg.split('\n').slice(1);
const breakingChangeLineRegex = /^\s*BREAKING CHANGE/i;
const validBreakingChangeLineRegex = /^BREAKING CHANGE: .+$/;

const invalidBreakingChangeLine = bodyLines.find(
  (line) => breakingChangeLineRegex.test(line) && !validBreakingChangeLineRegex.test(line.trim()),
);

if (invalidBreakingChangeLine) {
  console.error(`
    ${redColor}🚨 Неправильно оформлено критическое изменение (BREAKING CHANGE) 🚨${resetStyles}

    ${boldStyle}Найдена строка:${resetStyles}
    ${redColor}${invalidBreakingChangeLine}${resetStyles}

    ${boldStyle}Критические изменения описываются НЕ в заголовке, а отдельной строкой в теле коммита, строго в формате:${resetStyles}
    ${whiteBgColorBlackTxtColor}BREAKING CHANGE: <описание>${resetStyles}

    ${boldStyle}Пример корректного коммита:${resetStyles}
    ${greenColor}feat(Table): убран deprecated-проп colorScheme

BREAKING CHANGE: проп colorScheme больше не поддерживается, используйте theme${resetStyles}

    ${boldStyle}Подробнее можешь ознакомиться в файле Contributing.md${resetStyles}
    ${aquaColorUnderlineStyle}${pathToContributingMd}${resetStyles}
  `);
  process.exit(1); // Abort the commit
}
