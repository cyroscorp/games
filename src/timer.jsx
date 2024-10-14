import React, { useState, useEffect } from 'react';

const TimerComponent = () => {
  const [timeLeft, setTimeLeft] = useState(600); 


  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [timeLeft]);


  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="flex items-center justify-center h-32 bg-black">
      <div className="text-center">
       
        <div className="text-red-600 text-6xl font-mono">
          {formatTime(timeLeft)}
        </div>
      
        <p className="mt-2 text-gray-400 uppercase text-xs">Time's Ticking Register Fast</p>
      </div>
    </div>
  );
};

export default TimerComponent;
