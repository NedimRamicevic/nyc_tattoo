import React from 'react'
import Image from 'next/image'
import data from '@/data/data.json'

const Carousel = () => {
  const artists = data.artists;
  return (
    <div className="carousel w-full">
    {
      artists.map((artist, index) => (
        <div key={index} id={`slide${artist.id}`} className="carousel-item relative w-full">
      <Image src={artist.tattooes.tattoo_photos[0].url} className="w-full" width={300} height={600} alt=''/>
    </div> 
      ))  
    }
  </div>
  )
}

export default Carousel