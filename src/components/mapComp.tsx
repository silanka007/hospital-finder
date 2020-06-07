import React from 'react';
import { Map, Marker, GoogleApiWrapper, Circle } from "google-maps-react";
import { mapAPIKey } from '../constant';

const customStyle = {
  mapComp: {
      width: '85%',
      height: '65%',

  }
}

const MapComp = (props:any):JSX.Element => {

  const onMarkerClick = () => {
    
  }

  return(
        <Map google={props.google} initialCenter={props.latlng} center={props.latlng} zoom={10} style={customStyle.mapComp}>
           <Marker onClick={onMarkerClick} position={props.latlng} />

          {/* <InfoWindow onClose={onInfoWindowClose}>
            <div>
              <h1>{props.address}</h1>
            </div>
          </InfoWindow> */}
          <Circle
            radius={props.inputGeoFencing}
            center={props.latlng}
            onMouseover={() => console.log('mouseover')}
            onClick={() => console.log('click')}
            onMouseout={() => console.log('mouseout')}
            strokeColor='transparent'
            strokeOpacity={0}
            strokeWeight={5}
            fillColor='#FF0000'
            fillOpacity={0.2}
          />
      </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: mapAPIKey,
})(MapComp);
