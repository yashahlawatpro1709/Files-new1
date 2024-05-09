import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
interface Props{
    heading:string,
    subheading:string,
    texts:string
}

function Pagedata({heading,subheading,texts}:Props) {
  return (
    <>
    <div className='base-file'>
        <div className='main'>
            <div className='file'>
                <h1 className='font-bold text-5xl py-3'>{heading}</h1>
                <h2 className='font-bold text-2xl py-1'>{subheading}</h2>
                <p className='py-8 text-lg'>{texts}</p>
                <span className='arrow text-blue-500'><ArrowForwardIcon/></span><button>LEARN MORE</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Pagedata
