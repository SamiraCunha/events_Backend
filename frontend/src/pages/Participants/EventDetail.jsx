import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function EventDetail() {
    const [events, setEvents] = useState([])

    const getEvents = async () => {
      const response = await axios.get('http://localhost:8000/events/api/v2/event/')
      setEvents(response.data)
    }
  
    useEffect(()=>{
      getEvents(); 
    }, [])

  return (
    <>
    {events.map((eventt, index) => (
      <div>
        <h1>Event Details</h1>
        <p>Title: {eventt.title}</p>
        <p>Description: {eventt.description}</p>
        <p>Start Date: {eventt.start_date}</p>
        <p>End Date: {eventt.end_date}</p>
        <p>Location: {eventt.location}</p>
        <p>Shaper: {eventt.shaper}</p>
        <p>Speakers: {eventt.speakers}</p>
        {/* Adicionar botao para inscricao */}
      </div>
      ))}
    </>
  );
}
