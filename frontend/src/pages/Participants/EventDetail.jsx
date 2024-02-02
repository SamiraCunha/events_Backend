import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';


export default function EventDetail() {
    const {id} = useParams();
    const [events, setEvents] = useState({
      id: id,
      title: '',
      description: '',
      start_date: '',
      end_date: '',
      location: '',
    })
    const [subscribedEvents, setSubscribedEvents] = useState([]);

    const getEvents = async () => {
      const response = await axios.get('http://127.0.0.1:8000/events/api/v2/event/'+id)
      setEvents(response.data)
    }
  
    useEffect(()=>{
      getEvents(); 
    }, [])
  const navigate = useNavigate()
  const handleRegistration = () => {
    setSubscribedEvents([...subscribedEvents, events]);
    console.log(`Participante se inscreveu no evento: ${events.title}`);
    navigate('/subscribed-events/')
  };
  return (
    <>
     <div >
        <h1>Event Details</h1>
        <p>Title: {events.title}</p>
        <p>Description: {events.description}</p>
        <p>Start Date: {events.start_date}</p>
        <p>End Date: {events.end_date}</p>
        <p>Location: {events.location}</p>

        {/* Botão de Inscrição */}
      <button onClick={handleRegistration}>Inscrever-se no Evento</button>
      
     </div>
    </>
  );
}
