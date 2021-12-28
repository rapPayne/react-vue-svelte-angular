import { CSSProperties, FC } from 'react';



export const RandomColorWidget: FC = () => {
  const style: CSSProperties = {
    backgroundColor: '#' + Math.floor(Math.random() * 0xffffff).toString(16),
    height: '100%',
  };
  return <div style={style}>
    Placeholder widget
  </div>
}