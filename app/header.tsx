'use client'
import React from 'react';
import Button from "./button";
import Link from 'next/link'


function Header() {
    return (

      <header className="sticky top-0 z-50">
          <nav className='px-0 py-3 w-full bg-white grid items-center justify-between p-4' style={{ gridTemplateColumns: '2% 12.5% 3fr 1fr 20%', gap: '0' }}>
          
          <div className='bg-purple-400 border flex justify-center'>
          
          </div>
  
          <div className='bg-purple-400 border flex justify-center'>
          <Link href="../"><img src="image.png" alt="logo"></img></Link>
          </div>
  
          
          <div className="flex justify-between items-center bg-yellow-400 border">
            <div></div>
            
            <Link href="./About"><Button text='About' ></Button></Link>
            <Link href="./Event"><Button text='Event' ></Button></Link>
            <Link href="./Sponsorships"><Button text='Sponsorships'></Button></Link>
            <Link href="./Memberships"><Button text='Memberships'></Button></Link>
            <div></div>
        
          </div>
          
          <div></div>
  
    
  
          <div className='bg-purple-400 border'>
          <a target="_blank" href="https://www.facebook.com/groups/342258320002/"><button className='font-bold p-4 rounded-xl bg-[#1877f2] text-white justify-start' id="facebook_button">Join our facebook</button></a>
  
  
          </div>

          
      </nav>
      </header>
    );
  }
  
  export default Header;
  
  