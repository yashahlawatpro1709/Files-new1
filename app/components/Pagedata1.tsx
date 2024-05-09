import React from 'react'
import Pagedata from './Pagedata'

function Pagedata1() {
  return (
    <>
    <div className='whole-segment'>
  <div className='bg-gradient-to-t from-black to-transparent rounded-lg h-full overflow-hidden'>
    <div className='bg-gradient-to-b from-black to-transparent rounded-lg h-full overflow-hidden'>
      <h1 className='text-center text-white py-10 font-bold text-3xl'>Why we're different</h1>
      <div className='flex justify-center items-center space-x-20 mb-20 ml-24 mr-24 text-white'>
      <div className='grid w-1 bg-gradient-to-b from-blue-500 to-green-500 h-40 mx-8 rounded-full my-1'></div>
        <Pagedata heading="01" subheading='Unified platform' texts="A unified workspace for front-office teams, providing a true omnichannel customer experience engine with centralized governance across various markets and business units." />
        <div className='grid w-1 bg-gradient-to-b from-blue-500 to-green-500 h-40 mx-8 rounded-full my-1'></div>
        <Pagedata heading="02" subheading='Next-gen AI' texts="Customized AI models, augmented by generative AI and enriched by five years of annotation, optimization, and feedback built on the back of customer experience data." />
        <div className='grid w-1 bg-gradient-to-b from-blue-500 to-green-500 h-40 mx-8 rounded-full my-1'></div>
        <Pagedata heading="03" subheading='Enterprise-grade' texts="A proven track record of success with the world’s largest enterprises powered by rapid innovation, extensive customizability and seamless integrations with third-party tools and systems." />
      </div>
    </div>
  </div>
</div>
  </>
  )
}

export default Pagedata1
