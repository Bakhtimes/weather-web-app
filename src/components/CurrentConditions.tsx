import type { CurrentWeather} from '../types/weather'

type CurrentConditionsProps = {
    currentWeather: CurrentWeather
}

export const CurrentConditions = ({
    currentWeather
}: CurrentConditionsProps) => {
  return (
    <div>
        CurrentConditions
        <div>
            Current temperature: {currentWeather.temp} C
        </div>
    </div>
  )
}
