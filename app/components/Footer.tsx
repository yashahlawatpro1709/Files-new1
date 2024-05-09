import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
    <div className='text-xs'>
    <div className='flex py-10 bg-black text-white w-full justify-center relative border' style={{ gap: '200px' }}>
    <div className="absolute top-0 left-0 w-full h-full border-t border-b border-l border-black rounded-full" style={{ borderRadius: '100%' }}></div>
      <div className=''>
        <h1 className='font-bold px-5 mx-5 py-10 text-2xl'>How can we help you?</h1>
        <div className='py-4 mx-5 text-center'>
        <button className='w-50 h-12 bg-blue-600 rounded-full text-lg text-white px-5 hover:bg-gray-400'>contact us</button>
        </div>
        <div></div>
        <div className='flex py-4 space-x-4'>
            <FacebookIcon/>
            <XIcon/>
            <LinkedInIcon/>
            <YouTubeIcon/>
            <InstagramIcon/>
        </div>
      </div>
      <div className='grid'>
        <h1 className='font-bold'>Products</h1>
        <Link href={""}>Sprinklr Services</Link>
        <Link href={""}>Sprinklr Insights</Link>
        <Link href={""}>Sprinklr Marketing</Link>
        <Link href={""}>Sprinklr Social</Link>
        <Link href={""}>Unified CXM Platform</Link>
      </div>
      <div className='grid'>
        <h1 className='font-bold'>Solutions</h1>
        <Link href={""}>Industries</Link>
        <Link href={""}>CPG</Link>
        <Link href={""}>Financial Services</Link>
        <Link href={""}>Retail</Link>
        <Link href={""}>Technology</Link>
        <Link href={""}>Telecommunication</Link>
        <Link href={""}>Travel & Hospitality</Link>
        <h1 className='font-bold'>TEAMS</h1>
        <Link href={""}>Marketing</Link>
        <Link href={""}>Customer Service</Link>
      </div>
      <div className='grid'>
        <h1 className='font-bold'>Company</h1>
        <Link href={""}>Our Story</Link>
        <Link href={""}>Newsroom</Link>
        <Link href={""}>Partners</Link>
        <Link href={""}>Careers</Link>
        <Link href={""}>Culture & Talent</Link>
        <Link href={""}>Investor Relations</Link>
        <Link href={""}>Security & Privacy</Link>
        <Link href={""}>Customer Stories</Link>
        <h1 className='font-bold py-5'>SUPPORT</h1>
        <Link href={""}>Developer Portal</Link>
        <Link href={""}>Integrations</Link>
        <Link href={""}>Help Center</Link>
        <Link href={""}>Contact Us</Link>

      </div>
      <div className='grid'>
        <h1 className='font-bold py-3'>Resources</h1>
        <Link href={""}>Analyst Reports</Link>
        <Link href={""}>Product Demos</Link>
        <Link href={""}>Podcasts</Link>
        <Link href={""}>Blog</Link>
        <Link href={""}>Guides</Link>
        <Link href={""}>eBooks</Link>
        <Link href={""}>Events & Webinars</Link>
        <Link href={""}>Masterclass</Link>
        <Link href={""}>Services</Link>
        <Link href={""}>Training</Link>
      </div>
      <div className='grid'>
        <div className='mr-10 -ml-10 y-space-5'>
        <h1 className='font-bold text-xl'>Social Media Topics</h1>
        <Link href={""}>Social Listening Guide</Link>
        <Link href={""}>Social Media Monitoring</Link>
        <Link href={""}>Social Media Management</Link>
        <h1 className='font-bold text-xl py-5'>Customer Service Topics</h1>
        <Link href={""}>CCaaS Guide</Link>
        <Link href={""}>Customer Service</Link>
        <Link href={""}>Contact Center AI (CCAI)</Link>
        </div>
      </div>

      </div>
      </div>
    </>
  )
}
