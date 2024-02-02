import React from 'react';
import SidenavParticipants from '../../componentes/compParticipants/SidenavParticipants';
import NavBar from '../../componentes/compParticipants/NavBar';

const SubscribedEvents = ({ subscribedEvents }) => {
  return (
    <>
      <NavBar />
      <SidenavParticipants />
      <div>
        <h1>Eventos Inscritos</h1>
        {subscribedEvents.map((event) => (
          <div key={event.id}>
            <p>Title: {event.title}</p>
            <p>Description: {event.description}</p>
            <p>Start Date: {event.start_date}</p>
            <p>End Date: {event.end_date}</p>
            <p>Location: {event.location}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SubscribedEvents;