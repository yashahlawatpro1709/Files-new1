import React from 'react';

export default function Hero() {
  return (
    <>
      <div className=' py-10 relative bg-white mt-10'>
        <img src="https://d1io3yog0oux5.cloudfront.net/_9ae3c3d057f4151f560bf14aa9005003/sprinklr/db/1929/17219/social_image_resized.jpg" alt="Sprinklr" className='w-full h-100 ' />
        <div className="absolute top-60 left-0 w-full py-4 text-center text-white font-bold text-6xl">Unparalleled AI. Unmatched Productivity.</div>
        <div className="absolute top-80 left-0 w-full py-5 text-center text-white font-bold text-6xl">Unified Customer Experience
        <div className='py-80 mt-20'>
        <button className=' block mx-auto mt-20 w-40 h-10 bg-blue-600 font-bold rounded-full text-lg text-white px-3 hover:bg-gray-400'>LEARN MORE</button>
        </div>
        </div>

      </div>
    </>
  );
}

