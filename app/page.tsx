import React from "react";
import Cards from "./components/Cards";
import Card from "./components/Card";
import Pagedata from "./components/Pagedata";
import Pagedata1 from "./components/Pagedata1";
import Suites from "./components/Suites";
import Customer from "./components/Customer";
import Supercharge from "./components/Supercharge";
import Press from "./components/Socialproof";
import VerticalCarousel from "./components/IconicBrands";
import Hero from "./components/Hero";
import Data from "./components/Data";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


const page = () => {
  return (
    <div>
      <Hero/>
      <Press/>
      <Supercharge/>
      <Customer/>
      <Suites/>
      <VerticalCarousel/>
      <Pagedata1 />


      <h2 className="py-10 whitespace-pre-line max-w-mobile-limit tablet:max-w-tablet-limit desktop-sm:max-w-desktop-small-limit desktop-lg:max-w-limit text-center text-mobile/heading-3 tablet:text-tablet/heading-3 desktop-lg:text-desktop/heading-3 dark:text-white font-bold text-4xl">
        See what analysts and your peers are saying
      </h2>
      <Cards />
      <Data/>
      <Footer/>
    </div>
  );
};

export default page;
