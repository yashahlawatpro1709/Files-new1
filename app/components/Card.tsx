import React from 'react';


type CardProps = {
  header: string;
  subHeader: string;
  imageSrc: string;
  body: string;
  buttonBody: string;
  isActive: boolean;
  index: number;
};

const Card = ({ header, subHeader, imageSrc, body, buttonBody, isActive, index }: CardProps) => {
  const scaled = isActive || index === 1 ? "scale-110" : ""; // Apply scaling to active or center card
  const transitionClass = isActive || index === 1 ? "transition-transform" : ""; // Apply transition only to active or center card
  const sizeClass = isActive ? "h-[630px] w-[650.01px]" : "h-[570.73px] w-[650.01px]"; // Adjust size based on active or center card

  return (
    <div className={`px-5 py-20 text-center ${scaled} ${transitionClass}`} style={{ marginRight: '40px', marginLeft: '40px' }}>
      <div className={`flex flex-col items-center bg-white p-6 tablet:p-10 desktop:p-14 rounded-[12px] glass ${sizeClass}`} style={{ 
        border: "8px solid transparent", // Border style set to transparent
        borderRadius: "20px", // Curved border radius
        borderImage: "linear-gradient(135deg, #118acb 35%, #56b174 75%, #f3e137 85%, #faa21b) 1", // Rainbow border gradient
        borderImageSlice: "1", // Ensure the border image covers the entire border
        padding: "1px 25px", // Padding
        margin: '0 20px', // Adjust the margin for equal spacing
      }}>
        <div className='dataset h-25 w-22'>
          <h1 className='text-center text-xl py-1.5 px-2.5 text-gray-500 font-bold'>{header}</h1>
          <h1 className='text-center text-xl font-bold font-24px proximanova 118.37 x 24 contrast 5.83'>{subHeader}</h1>
          <div className="card-body text-center">
            <figure className="flex justify-center">
              <img
                src={imageSrc}
                alt="car!"
                className="max-w-[400px] max-h-[250px]" // Set maximum width and height for the image
              />
            </figure>
          </div>
          <div className="card-body text-center">
            <p className="text-lg font-bold">{body}</p>
            <div className="card-actions flex justify-center">
              <a href="/gartner-cmp-2023/" className="mt-6 tablet:mt-10 desktop:mt-8 flex items-center gap-3 text-baseBlack dark:text-white hover:text-primaryOceanBlue hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" className="fill-primaryOceanBlue h-[18px] w-[18px]">
                  <g clipPath="url(#arrow_svg__a)">
                    <path className="fill-current dark-blue" d="M.93 6.511h8.38L5.65 9.98a.692.692 0 0 0-.22.503c0 .188.08.369.22.502a.77.77 0 0 0 .53.208.77.77 0 0 0 .53-.208l4.864-4.61a.791.791 0 0 0 .25-.574.791.791 0 0 0-.25-.574L6.709.616A.771.771 0 0 0 6.18.413a.77.77 0 0 0-.527.208.692.692 0 0 0-.219.5c0 .188.078.368.217.501L9.31 5.09H.93a.772.772 0 0 0-.53.208.692.692 0 0 0-.22.502c0 .189.079.37.22.503.14.133.33.208.53.208Z"></path>
                    <path className="fill-current dark-blue" d="M.93 6.511h8.38L5.65 9.98a.692.692 0 0 0-.22.503c0 .188.08.369.22.502a.77.77 0 0 0 .53.208.77.77 0 0 0 .53-.208l4.864-4.61a.791.791 0 0 0 .25-.574.791.791 0 0 0-.25-.574L6.709.616A.771.771 0 0 0 6.18.413a.77.77 0 0 0-.527.208.692.692 0 0 0-.219.5c0 .188.078.368.217.501L9.31 5.09H.93a.772.772 0 0 0-.53.208.692.692 0 0 0-.22.502c0 .189.079.37.22.503.14.133.33.208.53.208Z"></path>
                  </g>
                  <defs>
                    <clipPath id="arrow_svg__a">
                      <path d="M0 .114h12v11.371H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
                <span className="whitespace-nowrap uppercase text-xs">{buttonBody}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
