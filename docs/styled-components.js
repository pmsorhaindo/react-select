// @flow

import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/prism-light';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import { tomorrow } from 'react-syntax-highlighter/styles/prism';

const customTomorrow = {
  ...tomorrow,
  'code[class*="language-"]': {
    ...tomorrow['code[class*="language-"]'],
    fontFamily: null, // inherit from css
  },
  'pre[class*="language-"]': {
    ...tomorrow['pre[class*="language-"]'],
    fontFamily: null, // inherit from css
  },
};

registerLanguage('jsx', jsx);

export const Hr = () => (
  <div
    style={{
      backgroundColor: 'hsl(0, 0%, 90%)',
      height: 2,
      marginBottom: '2em',
      marginTop: '2em',
    }}
  />
);

export const Note = ({ Tag = 'div', ...props }: { Tag?: string }) => (
  <Tag
    style={{
      color: 'hsl(0, 0%, 40%)',
      display: 'inline-block',
      fontSize: 12,
      fontStyle: 'italic',
      marginTop: '1em',
    }}
    {...props}
  />
);

export const H1 = (props: any) => <h1 style={{ marginTop: 0 }} {...props} />;
export const H2 = (props: any) => <h2 style={{ marginTop: '2em' }} {...props} />;

export const ColorSample = ({
  name,
  color,
}: {
  color: string,
  name: string,
}) => (
  <div
    style={{
      display: 'inline-flex',
      marginBottom: '0.5em',
      alignItems: 'center',
      minWidth: '10em',
    }}
  >
    <span
      title={color}
      style={{
        marginRight: '0.5em',
        display: 'inline-block',
        borderRadius: 3,
        width: '1em',
        height: '1em',
        backgroundColor: color,
      }}
    />
    <Code>{name}</Code>
  </div>
);

// ==============================
// Code
// ==============================

export const Code = (props: {}) => (
  <code
    style={{
      backgroundColor: 'rgba(38, 132, 255, 0.08)',
      // color: '#0747A6',
      fontSize: '85%',
      padding: '1px 5px 2px',
      borderRadius: 4,
    }}
    {...props}
  />
);

type PreProps = { children: string, language: string };

export const CodeBlock = ({ children, language, ...props }: PreProps) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={customTomorrow}
      customStyle={{
        borderRadius: 4,
        fontSize: 13,
        marginBottom: '1em',
        marginTop: '1em',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
      }}
      {...props}
    >
      {children}
    </SyntaxHighlighter>
  );
};
CodeBlock.defaultProps = { language: 'jsx' };
