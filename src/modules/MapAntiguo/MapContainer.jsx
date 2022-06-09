import { React } from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { googleMapKey } from '../../env/env'
import Map from './Map'

const render = (status) => {
  switch (status) {
    case Status.LOADING:
      // return <Spinner />;
      return <div>cargando</div>
    case Status.FAILURE:
      // return <ErrorComponent />;
      return <div>error</div>
    case Status.SUCCESS:
      return (
        <Map 
          zoom={15} 
          center={{ lat: 36.514210437505575, lng: -6.2763813733612315 }} 
        />
      )
    }
};

const MapContainer = () => {
    return (
        <Wrapper 
            apiKey={googleMapKey} 
            render={render} 
        />
    )
}

export default MapContainer;