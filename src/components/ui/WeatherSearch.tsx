import React from 'react'
import 'tailwindcss'

type WeatherSearchProps = {
  onSearch: (city: string) => void;
  onGetCurrentLocation: () => void;
  isLoading: boolean;
}

export const WeatherSearch = (props: WeatherSearchProps) => {
  return (
    <form>
      <input className='m-2 border-2 w-80' placeholder='Enter your city' />
    </form>
  )
}