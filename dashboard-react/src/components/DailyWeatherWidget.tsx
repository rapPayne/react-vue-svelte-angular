import { useEffect, useState, FC, CSSProperties } from 'react';
import { Forecast } from '../types/Forecast';
import { ForecastFC } from './Forecast';

export const DailyWeatherWidget: FC = () => {
  const [forecasts, setForecasts] = useState<Forecast[]>([])
  useEffect(() => {
    (async function () {
      const url: RequestInfo = `https://api.open-meteo.com/v1/forecast?latitude=32.98&longitude=-96.68&daily=weathercode&timezone=UTC`;
      const forecasts: Forecast[] = await fetch(url)
        .then<ForecastResponse>((res: Response) => res.json())
        .then(res => res.daily)
        .then<any>(daily => daily.time.slice(0, 5).map((time: String, i: number) => ({ time, weatherCode: daily.weathercode[i] })))
      setForecasts(forecasts)
    })()
  }, []);
  console.log("forecasts", forecasts)
  return (
    <section style={styles.widgetWrapper}>
      <h1 style={styles.title}>5 day weather forecast</h1>
      <section style={styles.daysWrapper}>
        {forecasts.map((forecast: Forecast) => <ForecastFC forecast={forecast} key={forecast.time} />)}
      </section>
    </section>
  )
}


const styles: { [Name: string]: CSSProperties } = {
  title: {
    fontSize: 24,
    textTransform: 'uppercase',
  },
  widgetWrapper: {
    textAlign: "center",
    height: '100%',
  },
  daysWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
  },
}


interface ForecastResponse {
  daily: {
    time: string[],
    weathercode: number[],
  },
}