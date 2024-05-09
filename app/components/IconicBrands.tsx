"use client"
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowForward from '@mui/icons-material/ArrowForward';


function IconicBrands1() {
  const data = [
    {
      image: "https://images.ctfassets.net/ukazlt65o6hl/3JRTzZDwdYAweIfi9nSoKn/70a96349a3db6d0206a3ad10b0ecfd30/standard-chartered-customer-story.jpg?w=3840&q=50&fm=webp",
      heading: "How Aalishaan’s team scaled their omnichannel customer service",
      content: "“The shift to digital is inevitable. Consumers do everything on their mobile phones… We think omnichannel CX, coupled with AI and analytics, is the only way forward.”",
      name: "Aalishaan Zaidi",
      designation: "Global Head of Personal Banking",
      digits: "10x",
      subheading: "YOY INCREASE IN SOCIAL CARE INTERACTIONS"
    },
    {
      image: "https://images.ctfassets.net/ukazlt65o6hl/4GVJnwohFhI9luM98pFXLC/6270de17f20da40cc169afe9b251045c/uber-customer-story.jpg?w=3840&q=50&fm=webp",
      heading: "How John’s team manages and publishes branded content globally",
      content: "“...engage with and serve our global customers, at scale, so that we have a singular brand voice…”",
      name: "John Marston",
      designation: "Global Head of Social Media Care, External Tools and Systems Administration",
      digits: "",
      subheading: ""
    },
    {
      image: "https://images.ctfassets.net/ukazlt65o6hl/4On0geF1nkjWu6oVgCojIY/2378f01a04c115170e32e679b05d4ef7/ikea-customer-story.jpg?w=3840&q=50&fm=webp",
      heading: "How Ferencz unified insights across 460 stores in 62 markets",
      content: "“IKEA is a huge ecosystem, lots of things are happening in lots of places, constantly. And I wanted to connect all the dots and feed those insights back to our teams...\"",
      name: "Ferencz Thuroczy",
      designation: "",
      digits: "10x",
      subheading: "YOY INCREASE IN SOCIAL CARE INTERACTIONS"
    },
    {
      image: "https://images.ctfassets.net/ukazlt65o6hl/77rfICzWBQ3ipG1gRjtkNd/7473426773ff8f4819aa66de66b4e93b/ead663971d2f3b11f29cc400c094c249?w=3840&q=50&fm=webp",
      heading: "How Annika’s team brought efficiencies in advertising workflow",
      content: "“...we didn’t have a platform that combines the process, creates automated reports, automatically boosts postings. Prior to Sprinklr, we did this all manually...”",
      name: "Annika Laurien",
      designation: "Senior Digital Media Manager",
      digits: "34",
      subheading: "WORKDAYS SAVED WITH AUTOMATION"
    },
    {
      image: "https://images.ctfassets.net/ukazlt65o6hl/38oOEc9JQgaL0FzlyaS8f9/6fe396ba3853375ae40374c3bb534d4f/acer-customer-story.jpg?w=3840&q=50&fm=webp",
      heading: "How Manolo’s team engages with their global customers effectively",
      content: "“…connecting different aspects from social listening to customer service metrics and creative performance on one platform.”",
      name: "Manolo Winkler",
      designation: "Head of Global Social Media",
      digits: "50%",
      subheading: "INCREASE IN MARKETING ASSET RE-USE"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false
  };

  return (
    <>
    <div>
        <h1 className='font-bold py-10 text-4xl text-center bg-gray-100 text-black'>Why the most iconic brands chose Sprinklr</h1>
    </div>

    <div>
      <Slider {...settings} lazyLoad='ondemand'>
        {data.map((item, index) => (
          <div key={index} className={` text-black bg-gray-100 carousel-item ${currentIndex === index ? 'active' : ''}`}>
            <div className=' px-20 bg-white mx-24 -mx-18 my-10  flex rounded-{50px}' style={{ height: '450px' }}>
            <div className='left-side w-100 h-50 mx-2'>
              <img className="w-95 h-full mr-18 -ml-20 p-2 mx-10" src={item.image} alt="None" />
            </div>
            <div className='right-side p-10'>
              <h1 className='font-bold text-3xl py-7 mr-24 -ml-10'>{item.heading}</h1>
              <p className='py-5 text-2xl mr-24 -ml-10'>{item.content}</p>
              <h3 className='font-bold py-2 px-16 mr-24 -ml-20'>{item.name}</h3>
              <h4 className='py-6 px-16 -ml-32 mr-5'> {item.designation} </h4>
              <span className='text-blue-500'><ArrowForward /></span>
              <button>READ FULL STORY</button>
            </div>
            
            {item.digits && item.subheading && (
              <div className='extreme-rightside'>
                <h1 className='py-24 font-bold text-4xl'>{item.digits}</h1>
                <h2 className=''>{item.subheading}</h2>
              </div>
              
            )}
            </div>
          </div>
        ))}
      </Slider>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" onClick={prevSlide}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" onClick={nextSlide}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    </>
  );
}

export default IconicBrands1;
