import { getWeatherData } from "./services/weatherService";
import { WeatherSearch } from "./components/ui/WeatherSearch";
import { useState } from "react";
import type { WeatherData } from "./types/weather";
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
      <button onClick={() => {console.log(getWeatherData('Bangkok'))}} className="border-2 w-80">Click</button>
    </div>
  )
}
