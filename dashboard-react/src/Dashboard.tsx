import { useState, CSSProperties, FC, useEffect } from 'react';
import { DailyWeatherWidget } from './DailyWeatherWidget';

interface Widget {
  sortOrder: number,
  component: JSX.Element,
}

export const Dashboard = () => {
  const [widgets, setWidgets] = useState<Widget[]>([]);
  useEffect(() => {
    const randomWidgets = makeRandomWidgets();
    const dww: Widget = { sortOrder: 5, component: <DashboardWidget><DailyWeatherWidget /></DashboardWidget> };
    setWidgets([...randomWidgets, dww]);
  }, []);
  return (
    <section style={styles.dashboardWrapper}>
      {[...widgets]
        .sort((a: Widget, b: Widget) => a.sortOrder - b.sortOrder)
        .map((widget: Widget) => widget.component)}
    </section>
  )

  function makeRandomWidgets(numberOfWidgets = 25): Widget[] {
    return [...Array(numberOfWidgets)].map<Widget>((_, i) => ({ sortOrder: i, component: <DashboardWidget key={i} />, }));
  }
}
const styles: { [Name: string]: CSSProperties } = {
  dashboardWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  }
}

const DashboardWidget: FC = (props) => {
  const style: CSSProperties = {
    flexBasis: '300px',
    aspectRatio: '16 / 9',
    flexGrow: 1,
    margin: 5,
  };
  return <>
    <section style={style}>
      {props.children || <RandomColorWidget />}
    </section>
  </>
}
const RandomColorWidget: FC = () => {
  const style: CSSProperties = {
    backgroundColor: '#' + Math.floor(Math.random() * 0xffffff).toString(16),
    height: '100%',
  };
  return <div style={style}>
    Placeholder widget
  </div>
}