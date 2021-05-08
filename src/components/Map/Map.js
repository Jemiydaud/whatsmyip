import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "./Map.css"


export default function Map({lng, lat}) {
    //console.log(ipAddress)

    return (
      <div>
    <MapContainer className="mapContainer" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
      </div>
    );
  }