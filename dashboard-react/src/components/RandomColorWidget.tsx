import { CSSProperties, FC } from 'react';

export const RandomColorWidget: FC = () => {
  const backgroundColor = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
  const color = `color-contrast(${backgroundColor} vs black, white)`; // This'll be cool once its supported by all browsers.
  return (
    <div style={{ ...style, backgroundColor: backgroundColor, color: color }}>
      Placeholder widget
    </div>
  )
}

const style: CSSProperties = {
  backgroundColor: 'yellow',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.5em',
}