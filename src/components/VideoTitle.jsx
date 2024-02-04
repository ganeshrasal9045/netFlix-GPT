import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-full aspect-video pt-[10%] px-[4%] absolute text-white bg-gradient-to-r from-black'>
        <div className='md:inline-block md:max-w-lg rounded-md'>
        <div className='pt-3'>
            <h1 className='hidden md:inline-block py-1 md:text-5xl md:font-semibold md:py-3 '>{title}</h1>
            <p className='hidden md:inline-block text-base py-3'>{overview}</p>
        </div>
        <div className='pt-[30%] md:pt-0 md:my-4'>
            <button className='mr-1 px-4 md:px-8 py-1 bg-white text-black hover:bg-opacity-70 rounded-md'><span className='text-black'>▶️</span> Play</button>
            <button className='mr-1 px-2 md:px-4 py-1 hidden md:inline-block bg-gray-600 hover:bg-opacity-50 text-white rounded-md'>ⓘ More Info</button>
        </div>
        </div>
    </div>
  );
}

export default VideoTitle