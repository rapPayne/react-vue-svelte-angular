/*
This thing is a single thing displayed in the dashboard. It is one
widget in the dashboard. It is a wrapper, wrapping the component itself
which as of now will be a RandomColorWidget or the WeatherWidget. 
*/
import { CSSProperties, FC } from 'react';

export const DashboardWidget: FC = (props) => {
  return <>
    <section style={style}>
      {props.children}
    </section>
  </>
}

const style: CSSProperties = {
  flexBasis: '400px',
  aspectRatio: '16 / 9',
  flexGrow: 1,
  margin: 5,
};