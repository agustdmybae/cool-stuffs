import './App.css';
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

function App() {
  const [, setOverlayPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 100);
      setOverlayPosition({ x, y });

      gsap.to('.overlay2', {
        '--x': `${x}%`,
        '--y': `${y}%`,
        duration: 0.3,
        ease: 'sine.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);



  return (
    <div className="App">
      <section class="overlay1">
        <h1>WELCOME TO MY WORLD</h1>
      </section>

      <section class="overlay2">
        <h1>WELCOME TO MY WORLD</h1>
      </section>
    </div>
  );
}

export default App;
