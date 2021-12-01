import { useEffect, useState, FC, CSSProperties } from 'react';
import { codes } from './weatherCodes';

export const DailyWeatherWidget: FC = () => {
  const [forecasts, setForecasts] = useState<Forecast[]>([])
  useEffect(() => {
    (async function () {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=32.98&longitude=-96.68&daily=weathercode&timezone=UTC`;
      const daily = await fetch(url)
        .then<ForecastResponse>(res => res.json())
        .then(res => res.daily)
      setForecasts(daily.time.slice(0, 5).map((time, i) => ({ time, weatherCode: daily.weathercode[i] })))
    })()
  }, []);
  console.log("forecasts", forecasts)
  return (
    <section style={styles.widgetWrapper}>
      <h1>5 day weather forecast</h1>
      <section style={styles.daysWrapper}>
        {forecasts.map((forecast: Forecast) => <ForecastFC forecast={forecast} key={forecast.time} />)}
      </section>
    </section>
  )
}
interface ForecastFCProps {
  forecast: Forecast;
}
const ForecastFC: FC<ForecastFCProps> = ({ forecast }) => {
  const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(forecast.time))
  return (
    <div style={styles.forecastWrapper}>
      <span style={styles.dayOfWeek}>{dayOfWeek}</span>
      <img src={`/images/${forecast.weatherCode}.png`} alt={codes[forecast.weatherCode]} style={styles.icon} />
      <span style={styles.description}>{codes[forecast.weatherCode]}</span>
    </div>
  )
}

const styles: { [Name: string]: CSSProperties } = {
  widgetWrapper: {
    textAlign: "center",
    height: '100%',
  },
  daysWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  forecastWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 2,
    padding: "4px 2px 2px 2px",
  },
  dayOfWeek: {
    fontWeight: 'bold',
  },
  icon: {
    width: 50,
  }
}

interface Forecast {
  time: string
  weatherCode: number
}
interface ForecastResponse {
  daily: {
    time: string[],
    weathercode: number[],
  },
}