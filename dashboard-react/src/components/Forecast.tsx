/*
This is one 'day' forecast. It receives the date and weatherCode
and outputs a day of week with an icon of the weather that day.<template>
There will be five of these side-by-side in one DailyWeatherWidget.
*/
import { FC, CSSProperties } from 'react';
import { Forecast } from '../types/Forecast';
import { codes } from '../weatherCodes';

interface ForecastFCProps {
  forecast: Forecast;
}
export const ForecastFC: FC<ForecastFCProps> = ({ forecast }) => {
  const dayOfWeek = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
  }).format(new Date(forecast.time))
  return (
    <div style={styles.forecastWrapper}>
      <span style={styles.dayOfWeek}>{dayOfWeek}</span>
      <img
        src={`/images/${forecast.weatherCode}.png`}
        alt={codes[forecast.weatherCode]}
        style={styles.icon}
      />
      <span style={styles.description}>{codes[forecast.weatherCode]}</span>
    </div>
  )
}

const styles: { [Name: string]: CSSProperties } = {
  forecastWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 2,
  },
  dayOfWeek: {
    fontWeight: 'bold',
  },
  icon: {
    width: 50,
  },
  description: {
    fontWeight: 100,
    width: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
}

