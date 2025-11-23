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
    <div className='w-full max-w-md mx-auto space-y-4'>
      <form onSubmit={(event) => {
            event.preventDefault();
            onSearch(searchTerm.trim());
            console.log(`Search input: ${searchTerm.trim()}`);
          }
        }>
        <input 
          type='text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Enter your city' 
          className='m-2 border-2 pl-2'
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
        className='m-2 border-2 ps-4 pe-4'
      >
        Use my current location
      </button>
    </div>
  )
}