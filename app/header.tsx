'use client'
import React, {useState} from 'react';
import Button from "./button";
import Link from 'next/link'


function Header() {
  const [dropdownActive, setDropdownActive] = useState(false);
  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
};



    return (

      <header className="sticky top-0 z-50">
          <nav className='px-0 py-3 w-full grid bg-white items-center justify-between p-4 nav-grid'>
          
          <div className= 'bg-purple-400 border justify-center hidden custom:flex'>
          
          </div>
  
          <div className='bg-purple-400 border flex justify-center w-[170px] mx-10 custom:mx-0'>
          <Link href="../"><img src="image.png" alt="logo"></img></Link>
          </div>
  
          
          <div className="justify-between items-center bg-yellow-400 border hidden custom:flex">
            <div></div>
            
            <Link href="./About"><Button text='About' ></Button></Link>
            <Link href="./Event"><Button text='Event' ></Button></Link>
            <Link href="./Sponsorships"><Button text='Sponsorships'></Button></Link>
            <Link href="./Memberships"><Button text='Memberships'></Button></Link>
            <div></div>
        
          </div>
          
          <div></div>
  
    
  
          <div className='bg-purple-400 border hidden custom:flex'>
          <a target="_blank" href="https://www.facebook.com/groups/342258320002/"><button className='font-bold p-4 rounded-xl bg-[#1877f2] text-white justify-start' id="facebook_button">Join our facebook</button></a>
          
        
  
          </div>

          <div className='bg-purple-400 border justify-center inline-block custom:hidden w-[40px] mx-10'>
          <button onClick={toggleDropdown}><img src="burger.webp" alt="dropmenu"></img></button>
          </div>

          
      </nav>

      <nav className={`dropdown ${dropdownActive ? 'active' : ''}`}>
        <Link href="./About" onClick={toggleDropdown} className='flex custom:hidden'><Button text='About'></Button></Link>
        <Link href="./Event" onClick={toggleDropdown} className='flex custom:hidden'><Button text='Event' ></Button></Link>
        <Link href="./Sponsorships" onClick={toggleDropdown} className='flex custom:hidden'><Button text='Sponsorships'></Button></Link>
        <Link href="./Memberships" onClick={toggleDropdown} className='flex custom:hidden'><Button text='Memberships'></Button></Link>
        <div className='bg-purple-400 border flex custom:hidden'>
          <a target="_blank" href="https://www.facebook.com/groups/342258320002/"><button className='font-bold p-4 rounded-xl bg-[#1877f2] text-white justify-start' id="facebook_button">Join our facebook</button></a>
          
      
          </div>
      </nav>
      </header>
    );
  }
  
  export default Header;
  
  