import React from 'react'
import Target from '../assets/target.png'

export function Mission({ bgColor, textColor }) {
    return (
      <div className={`${bgColor} ${textColor} rounded-lg p-6 relative`}>
        <div className="absolute -right-3 -top-[6em]">
          <img src={Target} className="w-[10em] opacity-90" />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">OUR MISSION</h3>
          <p>
            The Indian Labour Cooperative Society Ltd. aims to provide a collective voice to workers, ensuring they receive fair treatment and opportunities for growth. We believe in the power of unity and cooperation to bring about positive change in the labor sector.
          </p>
        </div>
      </div>
    )
  }
  
  