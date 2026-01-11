import type { CurrentWeather } from "../types/weather";

type CurrentConditionsProps = {
  currentWeather: CurrentWeather;
};

export const CurrentConditions = ({
  currentWeather,
}: CurrentConditionsProps) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <p className="text-lg">CurrentConditions</p>
      <p className="text-4xl font-bold text-zinc-600">{currentWeather.temp}°C</p>
      <p className="text-lg">{currentWeather.conditions}</p>
    </div>
  );
};
