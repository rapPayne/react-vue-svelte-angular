import { useState, CSSProperties, FC, useEffect } from 'react';
import { DashboardWidget } from './DashboardWidget';
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
    randomWidgets.push({ sortOrder: 3, component: DailyWeatherWidget });
    randomWidgets.sort((a, b) => a.sortOrder - b.sortOrder);

    setWidgets(randomWidgets);
  }, []);
  return (
    <section style={styles.dashboardWrapper}>
      {[...widgets]
        .map((widget: Widget, i: number) => (
          <DashboardWidget key={i}>
            <widget.component />
          </DashboardWidget>
        )
        )
      }
    </section>
  )

  /// Create the array of widgets for the dashboard
  function makeRandomWidgets(numberOfWidgets = 25): Widget[] {
    return [...Array(numberOfWidgets)].map<Widget>((_, i) => ({
      sortOrder: i,
      component: RandomColorWidget,
    }));
  }
}
const styles: { [Name: string]: CSSProperties } = {
  dashboardWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  }
}