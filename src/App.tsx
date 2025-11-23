import { getWeatherData } from "./services/weatherService";
import { WeatherSearch } from "./components/WeatherSearch";
import { useState } from "react";
import type { WeatherData } from "./types/weather";
import { CurrentConditions } from "./components/CurrentConditions";
import { WeatherForecast } from "./components/WeatherForecast";
export function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  return (
    <div className="max-w-4xl mx-auto">
      <WeatherSearch 
        onSearch={async (city) => {
          const data = await getWeatherData(city);
          console.log(data);
          setWeatherData(data);
          }
        }
        onGetCurrentLocation={
          async (position) => {
            const { latitude, longitude } = position.coords;
            const data = await getWeatherData(`${latitude},${longitude}`);
            console.log(data);
            setWeatherData(data);
          }
        }
        isLoading={false} 
      />
      {weatherData && <CurrentConditions currentWeather={weatherData.currentConditions} />}

      {weatherData && (<WeatherForecast hourlyForecast={weatherData.hours} />)}
    </div>
  )
}
