import { useState, CSSProperties, FC, useEffect, ReactElement } from 'react';
import { DailyWeatherWidget } from './DailyWeatherWidget';
import { RandomColorWidget } from './RandomColorWidget';

interface Widget {
  sortOrder: number,
  component: FC,
}

export const Dashboard = () => {
  const [widgets, setWidgets] = useState<Widget[]>([]);
  useEffect(() => {
    const randomWidgets: Widget[] = makeRandomWidgets();

    // Add a DailyWeatherWidget to the random widgets
    randomWidgets.push({ sortOrder: 5, component: DailyWeatherWidget });
    randomWidgets.sort((a, b) => a.sortOrder - b.sortOrder);

    setWidgets(randomWidgets);
  }, []);
  return (
    <section style={styles.dashboardWrapper}>
      {[...widgets]
        .map((widget: Widget, i: number) => <DashboardWidget key={i}><widget.component /></DashboardWidget>)
      }
    </section>
  )

  function makeRandomWidgets(numberOfWidgets = 25): Widget[] {
    return [...Array(numberOfWidgets)].map<Widget>((_, i) => ({ sortOrder: i, component: RandomColorWidget, }));
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
  console.log("children is", props.children)
  return <>
    <section style={style}>
      {props.children}
    </section>
  </>
}
