import React from "react";

export function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <img
              src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-13%20at%2019.40.43_2a7c2a38.jpg-FAre0gF9KwiTlNwTOa2nNrHO1rglg3.jpeg`}
              alt="Ministry Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <span className="text-lg font-semibold">Ministry of Labour & Employment</span>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li><a href="/" className="text-orange-600 hover:text-orange-700">Home</a></li>
              <li><a href="/about" className="text-orange-600 hover:text-orange-700">About</a></li>
              <li><a href="/projects" className="text-orange-600 hover:text-orange-700">Our Projects</a></li>
              <li><a href="/gallery" className="text-orange-600 hover:text-orange-700">Gallery</a></li>
              <li><a href="/service" className="text-orange-600 hover:text-orange-700">Service</a></li>
              <li><a href="/contact" className="text-orange-600 hover:text-orange-700">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

