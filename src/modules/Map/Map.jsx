import React from 'react'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'
import { googleMapKey } from '../../env/env'

const Map = ({coords}) => {

    const filteredCoords = coords.filter(coord => {
        return coord.lat !== undefined || coord.lng !== undefined
    })

    const markers = filteredCoords.map(coord => {
        return (
            <Marker
                key={coord.id}
                lat={coord.lat}
                lng={coord.lng}
                tooltip={coord.name}
                id={coord.id}
                urlPath={coord.urlPath}
            />
        )
    })


    return (
        <GoogleMapReact
            bootstrapURLKeys={{key: googleMapKey}}
            defaultCenter={{
                lat: 36.514210437505575,
                lng: -6.2763813733612315
            }}
            defaultZoom={15}
        >
            {markers}
        </GoogleMapReact>
    )
}

export default Map