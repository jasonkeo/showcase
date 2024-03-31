'use client';
import React, { useState, useEffect } from 'react';

const ImageSlider: React.FC = () => {
    // Step 2: Define an array of image URLs
    const images = ['1.jpg', '2.jpg', '3.jpg'];

    // Step 3: Create a state variable to keep track of the current image index
    const [current, setCurrent] = useState(0);

    // Step 4: Change the current image after a certain interval
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % images.length);
        }, 5000); // Change image every 2 seconds

        return () => clearInterval(timer); // Clean up on component unmount
    }, []);

    // Step 5: Display the current image and buttons to manually change the current image
    return (
        <div className="w-4/5 h-3/5 bg-yellow-500 text-center rounded-lg bg-cover" style={{ backgroundImage: `url(${images[current]})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
        </div>
    );
        
};

export default ImageSlider;

/*

<img src={images[current]} alt="Slide" />

<button className="p-5 bg-blue-500" onClick={() => {
                setCurrent(prev => (prev - 1 + images.length) % images.length);
                console.log('Previous button clicked');
            }}>Previous</button>

            <button className="p-5 bg-red-500 " onClick={() => {
                setCurrent(prev => (prev + 1) % images.length);
                console.log('Next button clicked');
            }}>Next</button>
*/

