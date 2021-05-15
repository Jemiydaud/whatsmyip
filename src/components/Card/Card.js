import React from "react";
import { Card } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Card.css";
import { DateTime } from "luxon";


export default function InfoCard({ipAddress, city, flag, country}){
    const Calender = DateTime.now();
    const Clock = DateTime.now();
    return(
<div className = "card">

<Card border="success" style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg" />
    <Card.Body>
    <Card.Title>{country}</Card.Title>
    <Card.Text>
     You are currently Located in {city}
    </Card.Text>
    <Card.Img src={Calender} alt="" style={{height:'20px', width:'20px'}} />Today is {DateTime.now().toFormat('D')} <br/>
    <Card.Img src={Clock} alt ="" style={{height:'20px', width:'20px'}} /> The Local Time is {DateTime.now().toFormat('t')}
   </Card.Body>
   
</Card>
        </div>
    );
}