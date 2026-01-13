import { useState } from "react";

type WeatherSearchProps = {
  onSearch: (city: string) => void;
  onGetCurrentLocation: (position: GeolocationPosition) => void;
  isLoading: boolean;
};

export const WeatherSearch = ({
  onSearch,
  onGetCurrentLocation,
}: WeatherSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="border-2 w-lg p-2 flex flex-col gap-2 items-center">
      <h1>Weather Application</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSearch(searchTerm.trim());
          console.log(`Search input: ${searchTerm.trim()}`);
        }}
        className="w-sm"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter your city"
          className="border-2 w-full pl-2 pb-1"
        />
      </form>
      <button
        type="button"
        onClick={() => {
          navigator.geolocation.getCurrentPosition(
            onGetCurrentLocation,
            (error: GeolocationPositionError) => {
              console.error(error);
            },
            {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 0,
            }
          );
        }}
        className="border-2 w-sm p-2"
      >
        Use my current location
      </button>
    </div>
  );
};
