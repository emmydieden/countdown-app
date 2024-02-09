import React, { useState, useEffect } from 'react';
import { differenceInMilliseconds } from 'date-fns';

const CountdownTimer = ({ eventDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(differenceInMilliseconds(eventDate, new Date()));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(differenceInMilliseconds(eventDate, new Date()));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [eventDate]);

  const seconds = Math.floor(timeRemaining / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return (
    <div>
      <p>{days} dagar</p>
      <p>{hours % 24} timmar</p>
      <p>{minutes % 60} minuter</p>
      <p>{seconds % 60} sekunder</p>
    </div>
  );
};

export default CountdownTimer;