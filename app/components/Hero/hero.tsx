'use client'
import React from 'react'
import Carousel from '../Carousel/carousel'
import data from '@/data/data.json'

const Hero = () => {
    const [slide, setSlide] = React.useState(1)    
    const artists = data.artists;
    const slidePlus = () => {
        if(slide === artists.length){
            setSlide(1)
        }
        else setSlide(slide + 1)
    }
    const slideMinus = () => {
        if(slide === 1){
            setSlide(4)
        }
        else setSlide(slide - 1)
    }

  return (
    <div className=' w-full flex flex-row h-[100vh] justify-center top-0 bg-black z-0'>
        <div className='flex flex-row w-full justify-start items-center '>
            <div className='flex flex-row justify-start items-center'>
                <div>Photos </div>
                <div className='flex flex-col justify-center items-center gap-8 pt-12'>
                <h1 className='text-2xl'>Artist</h1>
                <div className=' text-4xl'>
                    {artists[slide-1].name}
                </div>
                <div className='flex justify-center items-center rounded-full border-white border p-2 gap-2'>
                <a  className="rounded-full border w-6 h-6 text-center text-black bg-white">❮</a> 
                    <div>View Porfolio</div>
                </div>
                <div className=" flex gap-12 transform ">
                    <a onClick={slideMinus} href={`#slide${slide}`} className="btn btn-circle ">❮</a> 
                    <a onClick={slidePlus} href={`#slide${slide}`} className="btn btn-circle">❯</a>
                </div>
                </div>
            </div>
        </div>
        <Carousel/>
    </div>
  )
}

export default Hero