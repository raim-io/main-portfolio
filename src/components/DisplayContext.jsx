import React, {createContext, useState, useEffect} from 'react'

export const DisplayContext = createContext();

export const DisplayProvider = ({children}) => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
    
    useEffect(() => {
      const handleResize = () => {
        setIsDesktop(window.innerWidth > 1024);
      }

      window.addEventListener('resize', handleResize);

      //cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }, [])

  return (
    <DisplayContext.Provider value={isDesktop}>
        {children}
    </DisplayContext.Provider>
  )
  }

export default DisplayContext