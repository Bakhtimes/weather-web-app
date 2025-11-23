import type { HourlyForecast } from "../types/weather"

interface HourlyForecastProps {
    hourlyForecast: HourlyForecast[];
}

export const WeatherForecast = ({ hourlyForecast }: HourlyForecastProps) => {
  const first24Hours = hourlyForecast.slice(0, 24);

  const formatHour = (datetime: string) => {
    const hour = datetime.split(':')[0];
    return `${hour}:00`
  };

  return (
    <div className="flex flex-col justify-center">
      <p className="m-auto">HourlyForecast</p>
      {first24Hours.map((hour, index) => (
        <div className="border-2 w-md m-auto"> 
          <p>
            {formatHour(hour.datetime)}
          </p>
          <p>
            {Math.round(hour.temp)}°C
          </p>
          <p>
            {hour.conditions}
          </p>
        </div>
      ))}
    </div>
  )
}