'use client'
import React from 'react'
import Carousel from '../Carousel/carousel'

const Hero = () => {
    const [slide, setSlide] = React.useState(1)    

    const slidePlus = () => {
        if(slide === 4){
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
    <div className=' w-full flex flex-row h-[100vh]  top-0 bg-black z-0'>
        <div className='flex flex-col w-full justify-center items-center gap-6'>
            <div>Selam</div>
        <div className=" flex gap-12 transform ">
        <a onClick={slideMinus} href={`#slide${slide}`} className="btn btn-circle ">❮</a> 
        <a onClick={slidePlus} href={`#slide${slide}`} className="btn btn-circle">❯</a>
      </div>
        </div>
        <Carousel/>
    </div>
  )
}

export default Hero