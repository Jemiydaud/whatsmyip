import React, { useEffect, useState } from 'react';
import axios from  'axios'; 
import './App.css';
import Ip from './components/IP/IP.js';
import Map from './components/Map/Map.js';



function App() {
  const [ipAddress, setIpAddress] = useState([])
  //const [isLoading, setLoading] = useState(true)
  const [lat,setLat] = useState([])
  const [lng,setLng] = useState([])

 const  API_KEY = process.env.REACT_APP_IPFY_API_KEY ;
    console.log(API_KEY)
  

  
  useEffect(() => {
    async function fetchIp() {
      try {
           axios.get(`https://geo.ipify.org/api/v1?apiKey=${API_KEY}
           `).then((result) => {
            console.log(result.data)
            const userIp = result.data.ip;
            const userLng = result.data.location.lng;
            const userLat = result.data.location.lat;
            setIpAddress(userIp);
            setLat(result.data.location.lat);
            console.log(lat)
            setLng(result.data.location.lng);
            console.log(lng);
            //setIsLoading(false);
            console.log(userLng);
            console.log(userLat);
          });
        } catch (error) {
          alert("No results");
        }
      }
    
      fetchIp();
    
    },[lng, lat, ipAddress]);
    
    
    return (
      <div className="App">
    
        <h1>
          Whats My IP Address
        </h1>
    
        <Ip ipAddress={ipAddress}  />
        <Map lat={lat} lng={lng} />
    
    
    
      </div>
    );
  };
  
  export default App;