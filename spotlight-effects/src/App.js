import './App.css';
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

function App() {
  const [overlayPosition, setOverlayPosition] = useState({ x: 0, y: 0 });
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 100);
      setOverlayPosition({ x, y });

      gsap.to('.overlay', {
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

  const handleOverlayClick = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };


  return (
    <div className="App">
      <section>
        <h1>EXPECT SICK SH*T FROM HERE ON OUT.</h1>
        <span class="hover-btn">
            <svg viewBox="0 0 62 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M61.0607 13.0607C61.6465 12.4749 61.6465 11.5251 61.0607 10.9393L51.5147 1.3934C50.9289 0.807612 49.9792 0.807612 49.3934 1.3934C48.8076 1.97918 48.8076 2.92893 49.3934 3.51472L57.8787 12L49.3934 20.4853C48.8076 21.0711 48.8076 22.0208 49.3934 22.6066C49.9792 23.1924 50.9289 23.1924 51.5147 22.6066L61.0607 13.0607ZM0 13.5H60V10.5H0V13.5Z" />
            </svg>
        </span>
    </section>

    <section class="overlay">
        <h1>EXPECT SICK SH*T FROM HERE ON OUT.</h1>
        <span class="hover-btn2">
            <svg viewBox="0 0 62 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M61.0607 13.0607C61.6465 12.4749 61.6465 11.5251 61.0607 10.9393L51.5147 1.3934C50.9289 0.807612 49.9792 0.807612 49.3934 1.3934C48.8076 1.97918 48.8076 2.92893 49.3934 3.51472L57.8787 12L49.3934 20.4853C48.8076 21.0711 48.8076 22.0208 49.3934 22.6066C49.9792 23.1924 50.9289 23.1924 51.5147 22.6066L61.0607 13.0607ZM0 13.5H60V10.5H0V13.5Z" />
            </svg>
        </span>
    </section>
    </div>
  );
}

export default App;
