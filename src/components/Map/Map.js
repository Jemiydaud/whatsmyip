import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "./Map.css"
//import "leaflet/dist/leaflet.css";


export default function Map({lat, lng}) {
  const position = [lat,lng] 


    return (
      <div id = "mapid">
    <MapContainer className="mapContainer" center={position} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={position}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
      </div>
    );
  }