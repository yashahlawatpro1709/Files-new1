"use-client"
import React from 'react';
interface Card1Props {
    isActive: boolean;
  }

const Card1 = ({ isActive }:Card1Props) => {
    const scaled=isActive?"scaled":"";
  return (
    <div className={`card w-100 glass mx-4 ${scaled?"scale-125":""}`}>
      <div className='dataset'>
        <h1 className='text-center text-xl font-bold'>CHALLENGER</h1>
        <h1 className='text-center text-xl font-bold'>2023 Gartner Magic Quadrant</h1>
        <div className="card-body text-center">
          <figure className="flex justify-center">
            <img
              src="https://images.ctfassets.net/ukazlt65o6hl/6jS3Rm28ey1N41EGukC6pG/30aa6902462dc48908ee8c76ffd69247/Figure1.webp?w=3840&q=50&fm=webp"
              alt="car!"
              className="max-w-xs mx-auto"
            />
          </figure>
        </div>
        <div className="card-body text-center">
          <p className="text-lg font-bold">Enterprise Conversational AI Platforms</p>
          <div className="card-actions flex justify-center">
            <a href="/gartner-cmp-2023/" className="mt-6 tablet:mt-10 desktop-sm:mt-6 desktop-lg:mt-8 flex items-center gap-3 text-baseBlack dark:text-white hover:text-primaryOceanBlue hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" className="fill-primaryOceanBlue h-[18px] w-[18px]">
                <g clipPath="url(#arrow_svg__a)">
                  <path d="M.93 6.511h8.38L5.65 9.98a.692.692 0 0 0-.22.503c0 .188.08.369.22.502a.77.77 0 0 0 .53.208.77.77 0 0 0 .53-.208l4.864-4.61a.791.791 0 0 0 .25-.574.791.791 0 0 0-.25-.574L6.709.616A.771.771 0 0 0 6.18.413a.77.77 0 0 0-.527.208.692.692 0 0 0-.219.5c0 .188.078.368.217.501L9.31 5.09H.93a.772.772 0 0 0-.53.208.692.692 0 0 0-.22.502c0 .189.079.37.22.503.14.133.33.208.53.208Z"></path>
                  <path d="M.93 6.511h8.38L5.65 9.98a.692.692 0 0 0-.22.503c0 .188.08.369.22.502a.77.77 0 0 0 .53.208.77.77 0 0 0 .53-.208l4.864-4.61a.791.791 0 0 0 .25-.574.791.791 0 0 0-.25-.574L6.709.616A.771.771 0 0 0 6.18.413a.77.77 0 0 0-.527.208.692.692 0 0 0-.219.5c0 .188.078.368.217.501L9.31 5.09H.93a.772.772 0 0 0-.53.208.692.692 0 0 0-.22.502c0 .189.079.37.22.503.14.133.33.208.53.208Z"></path>
                </g>
                <defs>
                  <clipPath id="arrow_svg__a">
                    <path d="M0 .114h12v11.371H0z"></path>
                  </clipPath>
                </defs>
              </svg>
              <span className="whitespace-nowrap uppercase font-bold">Explore</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
