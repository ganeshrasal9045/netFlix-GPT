import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-full aspect-video pt-[12%] px-[5%] absolute text-white bg-gradient-to-r from-black'>
        <div className='inline-block max-w-md rounded-md'>
        <div className='pt-5'>
            <h1 className='text-5xl font-semibold py-3 '>{title}</h1>
            <p className='text-base py-3'>{overview}</p>
        </div>
        <div className='my-4'>
            <button className='mx-1 px-8 py-1 bg-white text-black hover:bg-opacity-70 rounded-md'><span className='text-black'>▶️</span> Play</button>
            <button className='mx-1 px-4 py-1  bg-gray-600 hover:bg-opacity-50 text-white rounded-md'>ⓘ More Info</button>
        </div>
        </div>
    </div>
  )
}

export default VideoTitle