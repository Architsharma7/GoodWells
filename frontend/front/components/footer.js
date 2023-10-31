import React from 'react'

const Footer = () => {
  return (
    <div className="w-screen flex">
    <div className="w-1/3 bg-yellow-500">
      <footer className="p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-white sm:text-center">
          Made By <span><a href="https://twitter.com/0xdhruva" target="_blank" className="text-white">@0xdhruva</a></span> & <span><a href="https://twitter.com/Arcsh7" target="_blank" className="text-white">@Arcsh7</a></span>
        </span>
        
      </footer>
    </div>
    <div className="w-2/3 bg-green-800">
    <ul className="flex flex-wrap items-center mt-7 ml-96 text-sm text-white">
          <li>
            <a href="" className="hover:underline">
              Github
            </a>
          </li>
        </ul>
    </div>
    </div>
  )
}

export default Footer;