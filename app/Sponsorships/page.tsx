
'use client'
import React,{ useEffect } from 'react';

function Sponsorships() {
  useEffect(() => {
    document.title = 'Sponsorship | Murdoch Badminton Club';
  }, []);

    return (
      <main className="relative flex-grow grid grid-rows-1 gap-4 border-4 border-black-900 w-9/12 mx-auto">
      <div className='bg-blue-500'>
        <h1 className='text-3xl font-bond font-medium'>Sponsorship</h1>
      
      </div>

      
    

  </main>
    );
  }
  
  export default Sponsorships;
  
  