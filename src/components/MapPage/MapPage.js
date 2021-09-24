import React from 'react'
import SimpleMap from '../GoogleMap'
import styled from '@emotion/styled'

const MapPage = () => {
    return (
        <MapContainer>
            <SimpleMap />
        </MapContainer>
    )
}

const MapContainer = styled.div`
   height: 94vh;
`



export default MapPage
