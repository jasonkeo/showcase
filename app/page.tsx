import ImageSlider from './imageslider';
import React from 'react';




export default function Home() {
  return (
    <main className="flex-grow grid grid-cols-1 custom:grid-cols-2 gap-4 w-full custom:w-9/12 mx-auto">
      <div className="w-full h-[90vh]  flex items-center justify-center">
        <div className="w-60/100 text-center">
          <h1 className='text-4xl md:text-7xl font-bold'> Join our Social <br></br> Sessions!</h1>
          <br></br>
          <p>Every Saturday  (10:00am-1:00pm) and <br></br>Wednesday(7:00pm to 9:30pm).</p>
          <br></br>
          <button className='bg-red-500 p-4 text-white'>Register Now</button>
        </div>
      </div>

      <div className="w-full h-[90vh] flex items-center justify-center"> 
        <ImageSlider></ImageSlider>
      </div>
      
      <div className="w-full h-[60vh]  flex items-center justify-center">
        <div className="w-4/5 h-4/5  text-center rounded-lg bg-cover" style={{ backgroundImage: `url(${'/group.jpg'})` , backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
        </div>
      </div>
      <div className="w-full  flex items-center justify-center h-[60vh]">
        <div className="w-4/5  text-center">
          <h1 className='text-2xl md:text-4xl font-bold text-center'> Who are we?</h1>
          <br></br>
          <p className='text-center'>
            The Murdoch Badminton Club fosters a vibrant badminton community at Murdoch University.
            Our club welcomes students and non-students passionate about badminton.
            <br></br><br></br>
            Whether seasoned or beginner, we offer events and services for all.
            From friendly matches to competitive tournaments, there&apos;s something for everyone.
            <br></br><br></br>
            Membership is open to all, regardless of student status.
            Our committee members are always available to assist, often found on campus. 
          </p>
        </div>
      </div>
    </main>
  );
}