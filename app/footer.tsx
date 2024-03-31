function Footer() {
    return (
      <div className="w-full mt-auto bg-slate-500 h-[20vh] font-bold">
         <div className='px-0 py-5 inset-x-0 top-0 z-50 grid items-center justify-between p-4 w-9/12 mx-auto' style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: '0' }}>
          
          <div className='bg-purple-400 border text-left'>
            <h3>Murdoch badminton club
            <br></br><br></br>Sporting arena
            <br></br>Murdoch University
            <br></br>90 South St, Murdoch WA 6150</h3>
          </div>
  
          
            <div className="justify-start bg-yellow-400 border grid grid-rows-2">
                  
              <div className='flex justify-center'>
  
                <div className='mx-2'>
                  <a href="https://www.facebook.com/groups/342258320002/" target="_blank" >
  
                  <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#1877f2]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                      
                      <path
                        d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                  </span>
                  </a>
                </div>
                <div className='mx-2'>
                  <a href="https://www.instagram.com/themubc/" target="_blank" rel="noopener noreferrer">
                  
                        <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    
                    <path
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </span>
  
                  </a>
  
                  </div>
              </div>
  
                  
                  <div className='bg-purple-400 border flex justify-center'>
                  <a target="_blank" href="https://www.murdochguild.com.au/"><img className="h-10" src="guild.png" alt="logo"></img></a>
                  </div>
  
  
  
            </div>
         
  
  
          <div className='bg-purple-400 border text-left'>
          <h3> Enquiries <br></br>youremail@gmail.com</h3>
          <br></br>
          <p>© themubc 2024<br></br>made by <a className="underline text-black-700" href="https://github.com/jasonkeo">jasonkeo</a></p>
          </div>
  
        </div>
      </div>
    );
  }
  
  export default Footer;