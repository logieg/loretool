interface TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'p',
  bold?: boolean,
  noPadding?: boolean,
  children: React.ReactNode,
}

/** Multipurpose styled text component */
const Text = ({
  variant = 'p',
  bold = false,
  noPadding = false,
  children
}: TextProps) => {
  let fontSize, paddingBottom;

  switch (variant) {
    case 'h1':
      fontSize = '34px';
      paddingBottom = '12px';
      break;
    case 'h2':
      fontSize = '28px';
      paddingBottom = '10px';
      break;
    case 'h3':
      fontSize = '22px';
      paddingBottom = '8px';
      break;
    case 'p':
      fontSize = '16px';
      paddingBottom = '6px';
      break;
  }

  return (
    <span
      style={{
        display: 'block',
        fontSize,
        fontWeight: bold ? 'bold' : 'inherit',
        paddingBottom: noPadding ? '' : paddingBottom,
      }}
    >
      {children}
    </span>
  );
}

export default Text;
