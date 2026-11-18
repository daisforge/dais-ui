#!/usr/bin/env node
import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

import { pairedBootstrap } from './lib/compare.mjs';
import { parseArgs } from './lib/paths.mjs';

const args = parseArgs(process.argv.slice(2));
const out = path.resolve(args.out);
const manifest = JSON.parse(
  fs.readFileSync(path.join(out, 'manifest.json'), 'utf8'),
);
const { consumer } = manifest.after;
const { rows: typeResults } = JSON.parse(
  fs.readFileSync(path.join(out, 'results.json'), 'utf8'),
);
const require = createRequire(path.join(consumer, 'package.json'));
const { createServer } = require('vite');
const { chromium } = require('playwright');

const root = path.join(consumer, 'browser-smoke');
fs.mkdirSync(path.join(root, 'cases'), { recursive: true });
for (const job of manifest.jobs) {
  const stem = `${job.taskId}--${job.repeat}--${job.arm}`;
  const file = path.join(out, `${stem}.tsx`);
  if (fs.existsSync(file))
    fs.copyFileSync(file, path.join(root, 'cases', `${stem}.tsx`));
}
fs.writeFileSync(
  path.join(root, 'cases/__good.tsx'),
  "import { Button } from '@daisforge/ui'; export const Good=()=> <Button>Проверка стенда</Button>;\n",
);
fs.writeFileSync(
  path.join(root, 'cases/__form.tsx'),
  "import { FormProvider, useForm } from 'react-hook-form'; import { FormTextField } from '@daisforge/ui'; export function FormProbe(){const form=useForm({defaultValues:{name:''}});return <FormProvider {...form}><FormTextField name=\"name\" label=\"Проверка формы\"/></FormProvider>}\n",
);
fs.writeFileSync(
  path.join(root, 'cases/__broken.tsx'),
  "export function Broken(){throw new Error('EXPECTED_RENDER_FAILURE')}\n",
);
fs.writeFileSync(
  path.join(root, 'index.html'),
  '<html><body><div id="root"></div><script type="module" src="/main.tsx"></script></body></html>',
);
fs.writeFileSync(
  path.join(root, 'main.tsx'),
  `
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyle } from '@daisforge/ui';
const modules = import.meta.glob('./cases/*.tsx');
class Boundary extends React.Component {
  state={error:null};
  static getDerivedStateFromError(error){return {error:String(error)}}
  componentDidCatch(error){window.mcpBenchmarkError=String(error)}
  render(){return this.state.error ? <div data-render-error>{this.state.error}</div> : this.props.children}
}
function Ready(){useEffect(()=>{window.mcpBenchmarkReady=true},[]);return null}
function App(){
  const [Component,setComponent]=useState(null);
  useEffect(()=>{
    const key='./cases/'+new URLSearchParams(location.search).get('case')+'.tsx';
    const load=modules[key];
    if(!load){window.mcpBenchmarkError='No generated source';return}
    load().then(mod=>{
      const name=Object.keys(mod).find(name=>/^[A-Z]/.test(name)&&typeof mod[name]==='function');
      if(!name)throw new Error('No named React component');
      setComponent(()=>mod[name]);
    }).catch(error=>{window.mcpBenchmarkError=String(error)});
  },[]);
  return <Boundary><GlobalStyle theme="light"/>{Component&&<><div id="subject" style={{width:1100,minHeight:300,padding:20}}><Component/></div><Ready/></>}</Boundary>
}
createRoot(document.getElementById('root')).render(<App/>);
`,
);
const server = await createServer({
  configFile: false,
  root,
  logLevel: 'error',
  cacheDir: path.join(root, '.vite'),
  esbuild: { jsx: 'automatic' },
  server: {
    host: '127.0.0.1',
    port: 0,
    fs: {
      allow: [
        consumer,
        `${fs.realpathSync(path.join(consumer, 'node_modules/react'))}/..`,
      ],
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom/client',
      '@daisforge/ui',
      'styled-components',
      // Prebundle the allowed consumer dependencies before measuring any answer.
      // A late Vite optimizer restart can mix React module instances in one page.
      'react-hook-form',
      '@hookform/resolvers/zod',
      'zod',
      '@daisforge/ui/styles',
      '@daisforge/ui/icons',
      '@daisforge/ui/components/TableCanvas',
      'react/jsx-dev-runtime',
    ],
  },
});
await server.listen();
const base = `http://127.0.0.1:${server.httpServer.address().port}`;
let browser;
try {
  browser = await chromium.launch({
    headless: true,
    ...(args.browser ? { executablePath: path.resolve(args.browser) } : {}),
  });
} catch (error) {
  await server.close();
  throw new Error('Unable to launch browser smoke environment', {
    cause: error,
  });
}

async function inspect(stem, taskId) {
  const context = await browser.newContext({
    viewport: { width: 1365, height: 1000 },
    serviceWorkers: 'block',
  });
  const page = await context.newPage();
  const errors = [];
  const blocked = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await context.route('**/*', (route) => {
    const url = route.request().url();
    if (
      url.startsWith(`${base}/`) ||
      url.startsWith('data:') ||
      url.startsWith('blob:')
    )
      return route.continue();
    blocked.push(url);
    return route.abort();
  });
  let initialRenderPass = false;
  let overlayPass = null;
  let text = '';
  try {
    await page.goto(`${base}/?case=${encodeURIComponent(stem)}`, {
      timeout: 45_000,
    });
    await page.waitForFunction(
      () => window.mcpBenchmarkReady || window.mcpBenchmarkError,
      undefined,
      {
        timeout: 30_000,
      },
    );
    await page.waitForTimeout(750);
    const error = await page.evaluate(() => window.mcpBenchmarkError);
    if (error) errors.push(error);
    const nodes = (await page.locator('#subject').count())
      ? await page.locator('#subject').locator('*').count()
      : 0;
    initialRenderPass = !errors.length && nodes > 0;
    if (
      initialRenderPass &&
      ['modal-confirm', 'modal-table-canvas', 'drawer-table'].includes(taskId)
    ) {
      const open =
        taskId === 'modal-confirm'
          ? page.getByRole('button', { name: 'Удалить договор', exact: true })
          : taskId === 'modal-table-canvas'
          ? page.getByRole('button', { name: 'Реестр сделок', exact: true })
          : page.locator('#subject').getByRole('button').first();
      await open.click({ timeout: 5000 });
      const expected = taskId === 'modal-confirm' ? 'Отмена' : 'Закрыть';
      await page
        .getByRole('button', { name: expected, exact: true })
        .first()
        .waitFor({ state: 'visible', timeout: 5000 });
      if (taskId === 'drawer-table')
        await page
          .getByRole('button', { name: 'Скачать', exact: true })
          .first()
          .waitFor({ state: 'visible', timeout: 5000 });
      await page.waitForTimeout(750);
      const overlayError = await page.evaluate(() => window.mcpBenchmarkError);
      if (overlayError) errors.push(overlayError);
      overlayPass = !errors.length;
    }
    text = (await page.locator('body').innerText()).slice(0, 1500);
  } catch (error) {
    errors.push(error.message);
    if (initialRenderPass) overlayPass = false;
  } finally {
    await context.close();
  }
  return {
    initialRenderPass,
    overlayPass,
    errors: [...new Set(errors)],
    blockedRequests: blocked,
    text,
  };
}

try {
  const good = await inspect('__good');
  const form = await inspect('__form');
  const broken = await inspect('__broken');
  if (
    !good.initialRenderPass ||
    !form.initialRenderPass ||
    broken.initialRenderPass ||
    !broken.errors.some((s) => s.includes('EXPECTED_RENDER_FAILURE'))
  )
    throw new Error(
      `Browser scorer selfcheck failed: ${JSON.stringify({ good, broken })}`,
    );
  const rows = [];
  for (const job of manifest.jobs) {
    const stem = `${job.taskId}--${job.repeat}--${job.arm}`;
    const result = await inspect(stem, job.taskId);
    const typeResult = typeResults.find(
      (row) =>
        row.arm === job.arm &&
        row.repeat === job.repeat &&
        row.taskId === job.taskId,
    );
    if (!typeResult) throw new Error(`Missing TypeScript result for ${stem}`);
    rows.push({
      ...job,
      ...result,
      tscAndRenderPass: result.initialRenderPass && typeResult.tscPass,
    });
    console.log(
      `${stem}: render ${result.initialRenderPass ? 'OK' : 'FAIL'}, overlay ${
        result.overlayPass
      }`,
    );
  }
  const summary = ['before', 'after'].map((arm) => {
    const group = rows.filter((row) => row.arm === arm);
    const overlays = group.filter((row) =>
      ['modal-confirm', 'modal-table-canvas', 'drawer-table'].includes(
        row.taskId,
      ),
    );
    return {
      arm,
      attempts: group.length,
      initialRenderPasses: group.filter((row) => row.initialRenderPass).length,
      tscAndRenderPasses: group.filter((row) => row.tscAndRenderPass).length,
      overlayAttempts: overlays.length,
      overlayPasses: overlays.filter((row) => row.overlayPass).length,
    };
  });
  fs.writeFileSync(
    path.join(out, 'render-results.json'),
    `${JSON.stringify(
      {
        browser: browser.version(),
        playwright: require('playwright/package.json').version,
        selfcheck: { good, form, broken },
        summary,
        intervals: {
          initialRenderPass: pairedBootstrap(rows, 'initialRenderPass'),
          tscAndRenderPass: pairedBootstrap(rows, 'tscAndRenderPass'),
        },
        rows,
      },
      null,
      2,
    )}\n`,
  );
} finally {
  await browser.close();
  await server.close();
}
