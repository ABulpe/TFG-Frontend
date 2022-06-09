import Geocode from "react-geocode"
import {googleMapKey} from '../env/env'

const geocodeAddress = (address) => {

    // no funciona porque hay que agregar la cuenta del banco para utilizar Geocoding API
    Geocode.setApiKey(googleMapKey)
    Geocode.setLanguage('es')

    Geocode.fromAddress(address).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location
          console.log(lat, lng)

          return ({ lat: lat, lng: lng})
        },
        (error) => {
          console.error(error)
        }
    )
}

export default geocodeAddress