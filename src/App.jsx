import React from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Partners } from './components/Partners'
import { Story } from './components/Story'
import { Mission } from './components/Mission'
import { Certification } from './components/Certification'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Partners />
        <Story />
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 py-12">
          <Mission 
            bgColor="bg-orange-500" 
            textColor="text-white"
          />
          <Mission 
            bgColor="bg-green-600" 
            textColor="text-white"
          />
        </div>
        <Certification />
      </main>
    </div>
  )
}

export default App;