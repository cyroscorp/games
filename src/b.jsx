import React, { useState, useEffect } from 'react';

const LoadingComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className={`relative ${loading ? 'overflow-hidden' : ''}`}>
     
      {loading && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-md flex justify-center items-center">
          <div className="text-red-500 text-5xl font-extrabold animate-pulse"> {/* Increased font size and added animation */}
            Teleporting You To Best Program .......
          </div>
        </div>
      )}

   
      {loading && (
        <div className="absolute bottom-5 left-0 right-0">
          <div className="w-full bg-gray-300 h-2 rounded">
            <div
              className="bg-red-500 h-2 rounded transition-all duration-200"
              style={{ width: '100%' }} 
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingComponent;
