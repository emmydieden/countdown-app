
import React from 'react';
import { EventCard } from './EventCard';


const EventList = ({ events, onDeleteEvent }) => {
  const sortedEvents = events.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const handleDelete = (_id) => {
    console.log('Deleting event with id:', events);
    // Pass the id to the onDeleteEvent callback
    onDeleteEvent(_id);
  };

  return (
    <div>
      <h2>Event List</h2>
     
       <EventCard events={sortedEvents} handleDelete={handleDelete}/>
    
    </div>
  );
};

export default EventList;