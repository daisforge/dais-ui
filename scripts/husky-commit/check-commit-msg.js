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
  /^(feat|fix|BREAKING CHANGE|refactor|test|docs|ci|nfp-feat|nfp-fix|nfp-BREAKING CHANGE|nfp-refactor|nfp-test|nfp-docs|nfp-ci)(\(.+\))?: (.+)$/;

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
    ${italicStyle}feat|fix|BREAKING CHANGE|refactor|test|docs|ci|
    nfp-feat|nfp-fix|nfp-BREAKING CHANGE|nfp-refactor|nfp-test|nfp-docs|nfp-ci${resetStyles}

    ${boldStyle}Подробнее можешь ознакомиться в файле Contributing.md${resetStyles}
    ${aquaColorUnderlineStyle}${pathToContributingMd}${resetStyles}
  `);
  process.exit(1); // Abort the commit
}
