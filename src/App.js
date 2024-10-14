import React from 'react';
import Timer from './timer';
import Nav from './nav';
import A from './assets/a.png'
import B from './b'
function App() {
  return (
   
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* Background circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-20 h-96 w-96 rounded-full border-2 border-red-600 opacity-40"></div>
        <div className="absolute top-40 left-20 h-72 w-72 rounded-full border-2 border-red-600 opacity-30"></div>
        <div className="absolute bottom-20 right-40 h-64 w-64 rounded-full border-2 border-red-600 opacity-20"></div>
      </div>
      <B />
      <Nav />
     

      <main className="flex flex-col items-center justify-center text-center mt-10">
      <div className="flex items-center space-x-4"> 
      <img 
        src={A}
       
        className="w-5 h-auto" 
      />
      <div>
        <h1 className="text-xl font-bold">Codingal Presents</h1>
        
      </div>
    </div>
        <h1 style={{ color: 'red' }} className="text-5xl font-bold mb-4">Antaragni'24</h1>
        <h2 className="text-xl mb-6">Campus Ambassador Program</h2>
        <p className="text-gray-400 max-w-xl">
          Come join us to experience this spectacular cultural festival of IIT Kanpur.
        </p>
        <button className="mt-8 bg-red-600 hover:bg-red-500 text-white py-3 px-6 rounded-full text-lg">
          Register Now
        </button>
        <div className="flex space-x-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600">70+</div>
            <p className="text-gray-400">Competitions</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600">350+</div>
            <p className="text-gray-400">Colleges</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600">10+</div>
            <p className="text-gray-400">Professional Shows</p>
          </div>
        </div>
      </main>
<Timer />
<footer className="bg-black text-white py-4 text-center">
      <p className="text-sm">
        Made by Arjun Kumar Dubey 
        <a href="https://portfolioakd.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"> Click here</a> to see my portfolio
      </p>
    </footer>
    </div>
  );
}

export default App;
