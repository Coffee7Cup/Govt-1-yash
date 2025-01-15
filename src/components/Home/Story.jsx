import React from "react"
import MODI from '../../assets/Hero.png'
import ppl1 from '../../assets/ppl1.jpg'
import ppl2 from '../../assets/ppl2.jpg'

export function Story() {
  const stats = [
    { value: "30k+", label: "Experience" },
    { value: "50k+", label: "Projects" },
    { value: "45+", label: "WorldWide" },
    { value: "30+", label: "Ongoing" },
  ]

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Indian Labour Cooperative Society Ltd</h2>
            <p className="text-gray-600">
              Indian Labour Cooperative Society Ltd. is a organization dedicated to the empowerment and welfare of workforce accross India. Established in 1994 with the vision of fostering economic and social growth for the labor community, our cooperative society operates on the principle of mutual aid, self-help, and collective responsibility.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <img
              src={ppl1}
              alt="Workers in field"
              width={600}
              height={400}
              className="rounded-lg w-full h-[15em] object-cover"
            />
            <img
              src={ppl2}
              alt="Workers in factory"
              width={600}
              height={400}
              className="rounded-lg w-full h-[15em] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

