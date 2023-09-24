import React from 'react'
import Image from 'next/image'

const Carousel = () => {
  return (
    <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full">
      <Image src="/logo.png" className="w-full" width={300} height={600} alt=''/>

    </div> 
    <div id="slide2" className="carousel-item relative w-full">
      <Image src="/logo.png" className="w-full" width={300} height={600} alt='' />

    </div> 
    <div id="slide3" className="carousel-item relative w-full">
      <Image src="/logo.png" className="w-full" width={300} height={600} alt='' />
    </div> 
    <div id="slide4" className="carousel-item relative w-full">
      <Image src="/logo.png" className="w-full" width={300} height={600} alt='' />

    </div> 
  </div>
  )
}

export default Carousel