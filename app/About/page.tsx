
'use client'
import React,{ useEffect } from 'react';

function About() {
  useEffect(() => {
    document.title = 'About | Murdoch Badminton Club';
  }, []);

    return (
        
        <main className="relative flex-grow grid grid-rows-1 gap-4 border-4 border-black-900 w-full custom:w-9/12 mx-auto">
          <div className='bg-blue-500'>
            <h1 className='text-3xl font-bond font-medium'>About</h1>
          
          </div>

          
        
  
      </main>
    );
  }
  
  export default About;
  
  