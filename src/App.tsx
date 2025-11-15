import { getWeatherData } from "./services/weatherService";
import { WeatherSearch } from "./components/WeatherSearch";
import { useState } from "react";
import type { WeatherData } from "./types/weather";
import { CurrentConditions } from "./components/CurrentConditions";
export function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  return (
    <div className="flex justify-center flex-col">
      <WeatherSearch 
        onSearch={async (city) => {
          const data = await getWeatherData(city)
          setWeatherData(data)
          await new Promise(resolve => setTimeout(resolve, 300))
          console.log(weatherData)
          }
        }
        onGetCurrentLocation={
          async (position) => {
            const { latitude, longitude } = position.coords;
            const data = await getWeatherData(`${latitude},${longitude}`);
            setWeatherData(data);
            await new Promise(resolve => setTimeout(resolve, 300))
            console.log(weatherData)
          }
        }
        isLoading={false} 
      />
      {weatherData && <CurrentConditions currentWeather={weatherData.currentConditions} />}
    </div>
  )
}
