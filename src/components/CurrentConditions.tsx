import type { CurrentWeather } from "../types/weather";

type CurrentConditionsProps = {
  currentWeather: CurrentWeather;
};

export const CurrentConditions = ({
  currentWeather,
}: CurrentConditionsProps) => {
  return (
    <div className=" flex flex-row justify-between">
      <div className="w-sm max-w-md">
        <p className="text-lg">CurrentConditions</p>
        <p className="text-4xl font-bold text-zinc-600">{currentWeather.temp}°C</p>
        <p className="text-lg">{currentWeather.conditions}</p>
      </div>
      <div>
        <p>Wind speed: {currentWeather.windspeed} km/h</p>
        <p>Wind speed: {currentWeather.humidity} %</p>
        <p>Wind speed: {currentWeather.precipprob} %</p>
      </div>
    </div>
  );
};
