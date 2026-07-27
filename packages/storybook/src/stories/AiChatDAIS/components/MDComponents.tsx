import { Link } from '@ui-kit/components/Link';
import { BodyS, H2, H3, H4, H5 } from '@ui-kit/components/Typography';
import { textTertiary } from '@ui-kit/tokens';
import { Components } from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import cssLang from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';

import { CopyCodeAbsoluteButton } from './CopyCodeAbsoluteButton';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('ts', typescript);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('js', javascript);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('css', cssLang);

export const MD_COMPONENTS = {
  h1: styled(H2)({ marginBlock: '6px 10px' }) as React.FC,
  h2: styled(H3)({ marginBlock: '6px 8px' }) as React.FC,
  h3: styled(H4)({ marginBlock: '4px 6px' }) as React.FC,
  h4: styled(H5)({ marginBlock: '4px 6px' }) as React.FC,
  h5: styled(H5)({ marginBlock: '2px 4px' }) as React.FC,
  p: styled(BodyS)({ marginBlock: '2px 2px' }) as React.FC,
  a: ({ children, ...props }) => (
    <Link view="accent" target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </Link>
  ),
  table: styled.table({
    width: '100%',
    marginBlock: 10,
    borderSpacing: 0,
    borderRadius: 6,
    boxShadow: `0 0 0 0.5px ${textTertiary}`,
    overflow: 'hidden',
    'th, td': {
      padding: '12px',
      textAlign: 'left',
      borderBottom: `0.5px solid ${textTertiary}`,
      borderRight: `0.5px solid ${textTertiary}`
    },
    'th:last-child, td:last-child': {
      borderRight: 'none'
    },
    'tr:last-child td': {
      borderBottom: 'none'
    },
    th: {
      backgroundColor: '#ECF6FC',
      fontWeight: 'bold'
    }
  }),
  code({ className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    const language = match ? match[1] : '';
    const codeString = String(children).replace(/\n$/, '');

    if (language) {
      return (
        <div style={{ position: 'relative' }}>
          <SyntaxHighlighter
            style={vscDarkPlus}
            language={language}
            PreTag="div"
            customStyle={{
              margin: '8px 0',
              padding: '12px 16px',
              borderRadius: '8px',
              fontSize: '13px',
              lineHeight: '1.5'
            }}
          >
            {codeString}
          </SyntaxHighlighter>
          <CopyCodeAbsoluteButton code={codeString} />
        </div>
      );
    }

    return (
      <code
        className={className}
        style={{
          background: 'rgba(0,0,0,0.08)',
          padding: '1px 5px',
          borderRadius: '4px',
          fontSize: '13px'
        }}
        {...props}
      >
        {children}
      </code>
    );
  }
} satisfies Components;
