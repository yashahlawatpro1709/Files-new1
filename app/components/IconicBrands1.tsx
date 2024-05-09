"use client"
import React from 'react';
import { useState } from 'react';
import ArrowForward from '@mui/icons-material/ArrowForward';

interface Props {
    image: string;
    heading: string;
    content: string;
    name: string;
    designation: string;
    digits: string;
    subheading: string;
}

const IconicBrands1: React.FC<Props> = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const data = [
        {
          image: "https://images.ctfassets.net/ukazlt65o6hl/4On0geF1nkjWu6oVgCojIY/2378f01a04c115170e32e679b05d4ef7/ikea-customer-story.jpg?w=3840&q=50&fm=webp",
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

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);
    };

    const nextSlide = () => {
        setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {data.map((_, index) => (
                        <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index} className={currentIndex === index ? 'active' : ''}></li>
                    ))}
                </ol>
                <div className="carousel-inner">
                    {data.map((item, index) => (
                        <div key={index} className={`carousel-item ${currentIndex === index ? 'active' : ''}`}>
                            <div className='left-side'>
                                <img className="w-40 h-full -ml-10 p-4" src={item.image} alt="None" />
                            </div>
                            <div className='right-side'>
                                <h1 className='font-bold text-3xl py-4 ml-40 -mr-40 '>{item.heading}</h1>
                                <p className='py-2 text-2xl px-4 ml-40 -mr-40'>{item.content}</p>
                                <h3 className='font-bold py-2'>{item.name}</h3>
                                <h4 className='py-2'>{item.designation}</h4>
                                <span className='text-blue-500'><ArrowForward /></span>
                                <button>READ FULL STORY</button>
                            </div>
                            {item.digits && item.subheading && (
                                <div className='extreme-rightside'>
                                    <h1 className='py-4 font-bold text-4xl'>{item.digits}</h1>
                                    <h2>{item.subheading}</h2>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" onClick={prevSlide}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" onClick={nextSlide}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default IconicBrands1;




