
'use client'
import React,{ useEffect } from 'react';

function About() {
  useEffect(() => {
    document.title = 'About | Murdoch Badminton Club';
  }, []);

    return (
        
        <main className="relative flex-grow grid grid-rows-1 gap-4 w-full custom:w-9/12 mx-auto">
          <div className=''>
            <h1 className='text-3xl font-bond font-medium'>About</h1>
          
          </div>

          
        
  
      </main>
    );
  }
  
  export default About;
  
  