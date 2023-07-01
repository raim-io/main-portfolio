import React from 'react'
import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
  const { progress } = useProgress()
  
  return (
    <Html>
      <span className='canvas-load'></span>
      <p
        style={{
          fontSize: 15,
          color: '#24c7a4',
          fontWeight: 800,
          marginTop: 40
        }}
      >{ progress.toFixed(2) }%</p>
    </Html>
  )
}

export default Loader