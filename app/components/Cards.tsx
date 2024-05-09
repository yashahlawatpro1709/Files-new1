"use client"
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';

interface CardData {
  header: string;
  subHeader: string;
  imageSrc: string;
  body: string;
  buttonBody: string;
}

interface Style {
  transform: string;
  transition: string;
}

const cardDataset: CardData[] = [
  {
    header: "CHALLENGER",
    subHeader: "2023 Gartner Magic Quadrant",
    imageSrc: "https://images.ctfassets.net/ukazlt65o6hl/6jS3Rm28ey1N41EGukC6pG/30aa6902462dc48908ee8c76ffd69247/Figure1.webp?w=3840&q=50&fm=webp",
    body: "Enterprise Conversational AI Platforms",
    buttonBody: "EXPLORE"
  },
  {
    header: "LEADER",
    subHeader: "The Forrester Wave",
    imageSrc: "https://images.ctfassets.net/ukazlt65o6hl/2KN8CMnnEUjFWTtKfaUI2y/c07d7cfa82ebb60c3dcbc77cf7d5ddfd/Social-Suites-720.png?w=1920&q=50&fm=webp",
    body: "Social Suites, Q3 2021",
    buttonBody: "EXPLORE"
  },
  {
    header: "A LEADER",
    subHeader: "Content Marketing Platforms, 2023",
    imageSrc: "https://images.ctfassets.net/ukazlt65o6hl/4aH9ZUHQebwWWNaqd0HTvC/8876769b4ce12aabe0b52ff590d40422/figure1.png?w=3840&q=50&fm=webp",
    body: "Enterprise Conversational AI Platforms",
    buttonBody: "EXPLORE"
  },
  {
    header: "LEADER",
    subHeader: "The Forrester Wave",
    imageSrc: "https://images.ctfassets.net/ukazlt65o6hl/1gKJQRC4Ot6OAalqHXBALr/8bb1d75927a676c587b3193202dff2fe/2021-Q1_sales-social-engagement.svg?w=750&q=50",
    body: "Sales Social Engagement Solutions, Q1 2021",
    buttonBody: "EXPLORE"
  },
  {
    header: "AWARD",
    subHeader: "G2 Summer' 23 rankings",
    imageSrc: "https://images.ctfassets.net/ukazlt65o6hl/5pRYRHGCAuHHekTmNvGuCO/0d9bfdbc3e52bac77a80c04a2446dcc1/ContactCenter_Leader_Leader.png?w=1920&q=50&fm=webp",
    body: "Sprinklr Service named Contact-Center leader of G2!",
    buttonBody: "EXPLORE"
  },
  {
    header: "AWARD",
    subHeader: "TrustRadius Top Rated Awards",
    imageSrc: "https://images.ctfassets.net/ukazlt65o6hl/1NYoidue4EmVdvhLTCB93a/f4f417823558ac4461c196a0dbdd2a75/top-rated-2023-gradient-1_1__1_.svg?w=640&q=50",
    body: "Sprinklr Insights Is Top Rated on TrustRadius",
    buttonBody: "EXPLORE"
  }
];

const Cards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardDataset.length);
    }, 3000); // Change the interval time as needed

    return () => clearInterval(interval);
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '20px'
        }
      }
    ]
  };

  return (
    <div className="flex flex-col overflow-hidden py-24 mb-24">
      <Slider {...settings}>
        {cardDataset.map((card, index) => (
          <div key={index}>
            <Card
              index={index}
              header={card.header}
              subHeader={card.subHeader}
              imageSrc={card.imageSrc}
              body={card.body}
              buttonBody={card.buttonBody}
              isActive={currentIndex === index}
            />
          </div>
        ))}
      </Slider>
      <div className="flex justify-center mt-20 py-24">
        {cardDataset.map((_, index) => (
          <button
            key={_.imageSrc}
            className={`w-24 h-3 bg-gray-500 rounded-full ${currentIndex === index ? 'bg-gray-900' : ''} mx-1`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
