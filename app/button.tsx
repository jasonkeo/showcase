

import React, { useRef } from 'react';
import "./globals.css";

function Button({text}: {text:any}) {
  /*const spanRef = useRef(null);*/
  const spanRef = useRef<HTMLSpanElement | null>(null);

  return (
    <button 
      className="text-2xl font-bold p-1 mx-3 relative overflow-hidden"
      style={{
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        backgroundSize: '200% 100%',
        backgroundPosition: '-100%',
        transition: 'all 0.3s ease-in-out'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.backgroundPosition = '0%';
        if (spanRef.current) {
          spanRef.current.style.width = '100%';
        }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.backgroundPosition = '-100%';
        if (spanRef.current) {
          spanRef.current.style.width = '0%';
        }
      }}
    >
      {text}
      <span 
        ref={spanRef}
        className="absolute bottom-0 left-0 h-[3px] bg-red-600 w-0 transition-all duration-300 ease-in-out"
        style={{
          content: '""',
          zIndex: '0',
          background: 'red',
          transition: 'all 0.3s ease-in-out'
        }}
      />
    </button>
  );
}

export default Button;