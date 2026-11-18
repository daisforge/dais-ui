/** All diagnostics matter. Global/config errors invalidate scoring, never disappear. */
export function checkConsumer(ts, file, code) {
  const program = ts.createProgram([file], {
    target: ts.ScriptTarget.ES2020,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    jsx: ts.JsxEmit.ReactJSX,
    strict: true,
    noEmit: true,
    skipLibCheck: true,
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    types: ['react', 'react-dom'],
  });
  const diagnostics = ts.getPreEmitDiagnostics(program).map((d) => ({
    file: d.file?.fileName,
    code: d.code,
    line:
      d.file && d.start !== undefined
        ? d.file.getLineAndCharacterOfPosition(d.start).line + 1
        : null,
    message: ts.flattenDiagnosticMessageText(d.messageText, '\n'),
  }));
  const unrelated = diagnostics.filter((d) => d.file !== file);
  if (unrelated.length)
    throw new Error(
      `Scoring infrastructure diagnostics: ${JSON.stringify(unrelated)}`,
    );
  const source = program.getSourceFile(file);
  if (!source) throw new Error('Consumer source was not loaded');
  const imported = [];
  const localNames = new Set();
  let explicitAny = 0;
  let assertions = 0;
  let libraryJsx = 0;
  let namedExport = false;
  source.statements.forEach((node) => {
    if (
      ts.isImportDeclaration(node) &&
      ts.isStringLiteral(node.moduleSpecifier) &&
      /^@daisforge\/ui(?:\/|$)/.test(node.moduleSpecifier.text)
    ) {
      const bindings = node.importClause?.namedBindings;
      if (bindings && ts.isNamedImports(bindings))
        bindings.elements.forEach((e) => {
          imported.push(e.propertyName?.text ?? e.name.text);
          if (!e.isTypeOnly && !node.importClause.isTypeOnly)
            localNames.add(e.name.text);
        });
      if (bindings && ts.isNamespaceImport(bindings))
        localNames.add(bindings.name.text);
    }
    if (
      node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword) &&
      !node.modifiers?.some((m) => m.kind === ts.SyntaxKind.DefaultKeyword) &&
      (ts.isFunctionDeclaration(node) || ts.isVariableStatement(node))
    )
      namedExport = true;
  });
  const visit = (node) => {
    if (node.kind === ts.SyntaxKind.AnyKeyword) explicitAny += 1;
    if (ts.isAsExpression(node) || ts.isTypeAssertionExpression(node)) {
      if (node.type.getText(source) !== 'const') assertions += 1;
    }
    if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
      const root = node.tagName.getText(source).split('.')[0];
      if (localNames.has(root)) libraryJsx += 1;
    }
    ts.forEachChild(node, visit);
  };
  visit(source);
  const suppressions = (
    code.match(/@ts-(?:ignore|expect-error|nocheck)\b/g) || []
  ).length;
  return {
    diagnostics,
    tscPass: diagnostics.length === 0,
    imported,
    explicitAny,
    assertions,
    suppressions,
    libraryJsx,
    namedExport,
  };
}
