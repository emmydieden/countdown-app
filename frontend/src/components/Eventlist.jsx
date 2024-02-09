
import React from 'react';
import CountdownTimer from './CountdownTimer';


const EventList = ({ events, onDeleteEvent }) => {
  const handleDelete = (_id) => {
    console.log('Deleting event with id:', events);
    // Pass the id to the onDeleteEvent callback
    onDeleteEvent(_id);
  };

  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {events.map((event) => (
        
          <li key={event._id}>
            <strong>{event.name}</strong> - {event.date.toLocaleString()}{' '}
            <CountdownTimer eventDate={event.date} />
            <button onClick={() => handleDelete(event._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;