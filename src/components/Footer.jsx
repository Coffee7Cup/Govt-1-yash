import React from 'react'

function Footer() {
  return (
    <>
        <footer className="bg-gray-900 text-white p-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">
              Indian Labour Cooperative Society Ltd.
            </h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400">
                Facebook
              </a>
              <a href="#" className="hover:text-pink-400">
                Instagram
              </a>
              <a href="#" className="hover:text-blue-300">
                Twitter
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Address</h3>
            <p>14-D, Atma Ram House, 1-Tolstoy Road, New Delhi - 110001</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">For Every Updates</h3>
            <div className="space-y-4">
              <input
                placeholder="Enter Your Email"
                className="bg-white block p-2 rounded-lg w-[100%]"
              />
              <button variant="destructive" className="w-full  bg-red-600 block p-2 text-white font-blod rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer