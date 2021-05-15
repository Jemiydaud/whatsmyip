import React, { useEffect, useState } from 'react';
import axios from  'axios'; 
import './App.css';
import Ip from './components/IP/IP.js';
import Map from './components/Map/Map.js';
import InfoCard from './components/Card/Card.js'





function App() {
  const [ipAddress, setIpAddress] = useState("")
  const [isLoading, setLoading] = useState(true)
  const [lat,setLat] = useState("")
  const [lng,setLng] = useState("")
  const [country, setCountry] = useState ("");
  const [city, setCity] = useState ("");
  const [flag, setFlag] = useState ("");

  

 const  API_KEY = process.env.REACT_APP_IPFY_API_KEY ;
    
  

  
  useEffect(() => {
    async function fetchIp() {
      setLoading(true)
      try {
           axios.get(`https://geo.ipify.org/api/v1?apiKey=${API_KEY}
           `).then((result) => {
           
            
            setIpAddress(result.data.ip);
            setLat(result.data.location.lat);
            setLng(result.data.location.lng);
            setCountry(result.data.location.country);
            setCity(result.data.location.city);
            setFlag(result.data.location.flag);
            setLoading(false);
            return;
          });
        } catch (error) {
          alert("No results");
        }
      }
    
      fetchIp();
    
    },[]);

    
    
    return (
      <div className="App">

        {isLoading ? (
          <div>
          <p>Loading......</p>
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          </div>
        ):(<div>
          <header className="App-header">
          <h1>
            Whats My IP Address
          </h1>
          </header> 
         <div id = "container"> 
          <InfoCard ipAddress={ipAddress} city={city} flag={flag} country={country}/>
          
          <Map lat={lat} lng={lng} />
        </div>
        </div>)
        }
        
      </div>
    );
  };
  
  export default App;