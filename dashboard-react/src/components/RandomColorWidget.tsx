import { CSSProperties, FC } from 'react';

export const RandomColorWidget: FC = () => {
  const backgroundColor = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
  return (
    <div style={{ ...style, backgroundColor: backgroundColor }}>
      Placeholder widget
    </div>
  )
}

const style: CSSProperties = {
  backgroundColor: 'yellow',
  height: '100%',
}