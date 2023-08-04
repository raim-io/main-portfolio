import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'

import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {

  // keep track of the current position on screen
  const [Active, setActive] = useState("");
  const [sidebar, setSidebar] = useState(false);


  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-8 top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          className='flex items-center gap-5'
          to='/'
          onClick={() => {
            setPosition("");
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt="logo-text"
          className='w-40 lg:w-50 xl:w-50 md:w-50 h-20 object-contain'
          />

        </Link>
        <ul
          className='list-none hidden sm:flex flex-row gap-10'
        >
          {navLinks.map((link) => (
            <li
              key={ link.id }
              className={`${Active === link.title ?
                  "text-white" : "text-secondary"
                } hover:text-white hover:opacity-50 text-[18px]
              font-medium
              cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        
        {/* mobile navigation view */}
        <div className='sm:hidden flex flex-1 justify-end items-end items-center'>
          <img src={sidebar ? close : menu} alt="side-bar"
            className='w-[22px] h-[22px] cursor-pointer object-contain'
            onClick={() => setSidebar(!sidebar)}
          />

          <div className={`${!sidebar ? 'hidden' : 'flex'} p-6 absolute top-20 right-0 black-gradient mx-4 min-w-[150px] rounded-xl`}>
            <ul
              className='list-none flex justify-end items-start flex-col gap-4'
            >
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${Active === link.title ?
                    "text-white" : "text-secondary"
                    } hover:text-white text-[16px]
                  font-medium font-poppings
                  cursor-pointer`}
                  onClick={() => {
                    setSidebar(!sidebar); {/* you could also use setSidebar(!Sidebar) */}
                    setActive(link.title)
                  }}
                >
                  <a href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar