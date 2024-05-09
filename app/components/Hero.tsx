import React from 'react';

export default function Hero() {
  return (
    <>
      <div className='py-20 relative bg-white '>
        <img src="https://d1io3yog0oux5.cloudfront.net/_9ae3c3d057f4151f560bf14aa9005003/sprinklr/db/1929/17219/social_image_resized.jpg" alt="Sprinklr" className='w-full h-100 ' />
        <div className="absolute top-60 left-0 w-full py-1 pb-20 text-center text-white font-bold text-6xl">Unparalleled AI. Unmatched Productivity.</div>
        <div className="absolute top-80 left-0 w-full py-1 text-center text-white font-bold text-6xl">Unified Customer Experience
        <div className="absolute  bottom-200 top-500 py-20 pt-20  right-14 pb-100 flex justify-center items-center text-black" style={{marginTop:"200px"}}>
        <button className="text-2xl py-2 px-10 font-bold bg-blue-600 text-white rounded-full" style={{ marginRight: '600px' }}>LEARN MORE</button>
         </div>

      </div>
      </div>
    </>
  );
}

