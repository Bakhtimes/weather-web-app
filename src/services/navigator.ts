export function getCurrentLocation(successCallback: () => void, errorCallback: () => void) {
    navigator.geolocation.getCurrentPosition(
        successCallback, 
        errorCallback, 
        {
            enableHighAccuracy:true,
            timeout: 5000,
            maximumAge: 0
        }
    )
}