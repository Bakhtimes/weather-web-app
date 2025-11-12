import { useState } from 'react'

type WeatherSearchProps = {
  onSearch: (city: string) => void;
  onGetCurrentLocation: (position:GeolocationPosition) => void;
  isLoading: boolean;
}

export const WeatherSearch = ({
  onSearch,
  onGetCurrentLocation
}: WeatherSearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div>
      <form onSubmit={(event) => {
            event.preventDefault();
            onSearch(searchTerm.trim())
            console.log(`Search input: ${searchTerm.trim()}`)
          }
        }>
        <input 
          type='text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Enter your city' 
          className='m-2 border-2 w-80'
        />
      </form>
      <button
        type='button'
        onClick={
          () => {
            navigator.geolocation.getCurrentPosition(
                onGetCurrentLocation, 
                (error: GeolocationPositionError) => {
                  console.error(error)
                },
                {
                  enableHighAccuracy:true,
                  timeout: 5000,
                  maximumAge: 0
                }
              )
          }
        }
      >
        Use my current location
      </button>
    </div>
  )
}