"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const press = {
  "Superdry": "https://images.ctfassets.net/ukazlt65o6hl/1muyZoaOPFYJ6bYEHRPWSQ/cc0b0800093dc5140a086ea7a9e759d5/Superdry.svg?w=256&q=50",
  "Puma": "https://images.ctfassets.net/ukazlt65o6hl/6mJSRqBfP5AdRYGLlgz8m9/71d3524cc21485ed932a210937e5c9e1/Puma.svg?w=256&q=50",
  "StandardChartered": "https://images.ctfassets.net/ukazlt65o6hl/TicB8r5QskBELRQ9C6xHq/91f96fd562b2964f429b3dd1a2fd0927/Standard_Chartered.svg?w=256&q=50",
  "Latam": "https://images.ctfassets.net/ukazlt65o6hl/6OWYAruUbjyeOZSAsBnOaR/df2388f39ca08e02e0dc11098aa99cb0/LATAM.svg?w=256&q=50",
  "LG": "https://images.ctfassets.net/ukazlt65o6hl/5XSrBdQoG17wTkr7NXtxiC/fabbfc780f6af7610bc74c07ea472b1f/LG_Electronics.svg?w=256&q=50",
  "Keurig": "https://images.ctfassets.net/ukazlt65o6hl/4UGbFbCdWMnmh4aHzg6Icx/a8e6bf82c28835ce3262d14921525db7/Keurig.svg?w=256&q=50",
  "Infosys": "https://images.ctfassets.net/ukazlt65o6hl/6snAzY1kK5T4kkN9JLDkbg/f2894e7f3e91a98af2e996ea32e85f98/Infosys.svg?w=256&q=50",
  "Acer": "https://images.ctfassets.net/ukazlt65o6hl/4hdl0K3YwDuG8IfQQn1MtK/50787c2c45f64445463c459c8ff8e782/Acer.svg?w=256&q=50",
  "IKEA": "https://images.ctfassets.net/ukazlt65o6hl/3PArJij74xFdusfbdQrUok/44649a4585712b17e95d6e4a120511ce/Ikea.svg?w=256&q=50",
  "Ford": "https://images.ctfassets.net/ukazlt65o6hl/1rYsCRjfMEL1pKO50IrT6b/bef227bb1ec4be3ca93683a294eec1c4/Ford.svg?w=256&q=50",
  "Prada": "https://images.ctfassets.net/ukazlt65o6hl/5idEMlMp1jpnFUMYg89iUY/2d1ef6b763adacb1708c372f5ca5f0d4/Prada.svg?w=256&q=50",
  "WebMd":"https://images.ctfassets.net/ukazlt65o6hl/4wlP4Hz7vmi9q1qaY5qczH/867847a91312d013750826f3d598591f/WebMD.svg?w=640&q=50",
  "Pepsi":"https://images.ctfassets.net/ukazlt65o6hl/5OooshVsk3FIfc5bGTiLyj/6d2b2b21297d3db3f0d6c19e38ad9501/Pepsi.svg?w=640&q=50",
  "Honda":"https://images.ctfassets.net/ukazlt65o6hl/5qSAon2SsKJDu9HPL6s4o6/679d0069504c7052a7a975ef92d4152c/Honda.svg?w=640&q=50",
};

export default function Press() {
  return (
    <section id="press" className="py-14 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h3 className="text-center py-5 text-2xl font-bold bg-white">
        9 OUT OF THE 10 MOST VALUABLE BRANDS TRUST SPRINKLR
        </h3>
        <div className="relative w-full mt-6">
          <Slider
            infinite={true}
            slidesToShow={8}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={100}
            arrows={false}
            dots={false}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            {Object.entries(press).map(([name, url], idx) => (
              <img
                key={idx}
                src={url}
                className="h-25 w-full px-2"
                alt={`logo-${name}`}
              />
            ))}
          </Slider>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3"></div>
        </div>
      </div>
    </section>
  );
}
