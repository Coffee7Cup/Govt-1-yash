import React from "react";
import MODI from '../assets/Hero.png'
import msme from '../assets/msme-seeklogo.png'
import g20 from '../assets/g20.png'
import zed from '../assets/zed-logo.png'
import epr from '../assets/epr.png'

export function Partners() {

  const images = [
    {
      _img : msme,
      _alt: 'Bharat Entrepreneurship Summit'
    },
    {
      _img : g20,
      _alt: 'Bharat Entrepreneurship Summit'
    },
    {
      _img : zed,
      _alt: 'Bharat Entrepreneurship Summit'
    },
    {
      _img : epr,
      _alt: 'Bharat Entrepreneurship Summit'
    },
    
  ]

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {
            images.map((image, index) => (
              <img
                key={index}
                src={image._img}
                alt={image._alt}
                width={200}
                height={100}
                className="w-full h-auto"
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

