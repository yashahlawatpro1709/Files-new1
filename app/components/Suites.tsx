import ArrowForward from '@mui/icons-material/ArrowForward'
import Diversity1Icon from '@mui/icons-material/Diversity1';
import ShareIcon from '@mui/icons-material/Share';
import SearchIcon from '@mui/icons-material/Search';
import EdgesensorLowIcon from '@mui/icons-material/EdgesensorLow';
import React from 'react'

export default function Suites() {
  return (
    <>
    <div className='main bg-white justify-center text-black'>
        <h1 className='heading-1 font-bold text-5xl text-center py-10'>Four AI-powered product suites.</h1>
        <h1 className='heading-2 font-bold text-5xl text-center'>One unified platform</h1>
        <div className='main-2 flex text-center p-10 space-x-6'>
            <div className='section-1'>
            <div className='mx-8 py-5'><Diversity1Icon className='text-7xl mr-16'/></div>
            <h1 className='text-2xl font-bold py-3'>Sprinklr Service</h1>
            <div className='h-1 bg-gradient-to-r from-blue-500 to-green-500 w-1/2 mx-8 rounded-full my-1'></div>
            <p className='text-lg py-7'>Empower your customer service teams to deliver consistently delightful experiences across every touchpoint.</p>
            <span className='text-blue-600'><ArrowForward/></span><button className='text-bold text-center text-lg'>LEARN MORE</button>
            </div>
            <div className='section-2'>
            <div className='mx-8 py-5'><ShareIcon className='text-7xl mr-16'/></div>
            <h1 className='text-2xl font-bold py-3'>Sprinklr Social</h1>
            <div className='h-1 bg-gradient-to-r from-blue-500 to-green-500 w-1/2 mx-8 rounded-full my-1'></div>
            <p className='text-lg py-7'>Reach, engage, and listen to customers across 30+ digital and social channels to maximize engagement and drive revenue.</p>
            <span className='text-blue-600'><ArrowForward/></span><button className='text-bold text-center text-lg'>LEARN MORE</button>
            </div>
            <div className='section-3'>
                <div className='mx-8 py-5'><SearchIcon className='text-7xl mr-16'/></div>
                <h1 className='text-2xl font-bold py-3'>Sprinklr Insights</h1>
                <div className='h-1 bg-gradient-to-r from-blue-500 to-green-500 w-1/2 mx-8 rounded-full my-1'></div>
                <p className='text-lg py-7'>Uncover real-time consumer, product, and market insights to build great products, drive brand loyalty and deliver great customer experiences.</p>
                <span className='text-blue-600'><ArrowForward/></span><button className='text-bold text-center text-lg'>LEARN MORE</button>
            </div>
            <div className='section-4'>
                <div className='mx-8 py-5'><EdgesensorLowIcon className='text-7xl mr-16'/></div>
                <h1 className='text-2xl font-bold py-3'>Sprinklr Marketing</h1>
                <div className='h-1 bg-gradient-to-r from-blue-500 to-green-500 w-1/2 mx-8 rounded-full my-1'></div>
                <p className='text-lg py-7'>Orchestrate on-brand global marketing campaigns across social, digital and traditional channels to drive higher marketing ROI.</p>
                <span className='text-blue-600'><ArrowForward/></span><button className='text-bold text-center text-lg'>LEARN MORE</button>
            </div>
        </div>
    </div>
    </>
  )
}

