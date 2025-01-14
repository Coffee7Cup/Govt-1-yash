import React from "react"
import MODI from '../assets/modi.png'

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-orange-500 via-white to-green-600 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">
              <div>सबका साथ</div>
              <div>सबका विकास</div>
              <div>सबका विश्वास</div>
              <div>सबका प्रयास</div>
            </h1>
          </div>
          <div className="relative h-[300px] ">
            <div className="flex justify-center items-center absolute -top-[8em]">
            <img
              src={MODI}
              alt="75 Years Celebration"
              className="w-full h- object-contain"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

