import React from "react"
import zed from '../../assets/zed-logo.png'

export function Certification() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={zed}
              alt="ZED MSME Certification"
              width={400}
              height={400}
              className="w-full h-[20em] object-contain"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Empowering MSMEs with ZED Certification – A Key Initiative by ILCS</h2>
            <p className="text-gray-600">
              In today's competitive business landscape, Micro, Small, and Medium Enterprises (MSMEs) play a pivotal role in driving economic growth and job creation. However, to thrive in this environment, MSMEs need to adopt world-class practices in quality and sustainability. Recognizing this, the Indian Labour Cooperative Society (ILCS) has taken an important step by partnering with the Ministry of Micro, Small, and Medium Enterprises (MSME) and the Quality Council of India (QCI) to promote the ZED (Zero Defect, Zero Effect) Certification Scheme.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

