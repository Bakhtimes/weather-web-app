import type { HourlyForecast } from "../types/weather";

interface HourlyForecastProps {
  hourlyForecast: HourlyForecast[];
}

export const WeatherForecast = ({ hourlyForecast }: HourlyForecastProps) => {
  const first24Hours = hourlyForecast.slice(0, 24);

  const formatHour = (datetime: string) => {
    const hour = datetime.split(":")[0];
    return `${hour}:00`;
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <p className="">
        HourlyForecast
      </p>

      <div className="flex flex-col items-center gap-3 border-2 p-2 h-80 overflow-auto pr-4">
        {first24Hours.map((hour, index) => (
          <div key={index} className="border-2 w-md p-2 bg-">
            <p>{formatHour(hour.datetime)}</p>
            <p>{Math.round(hour.temp)}°C</p>
            <p>{hour.conditions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
