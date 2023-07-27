import React, { useEffect, useState, Suspense } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei' //drawing helpers
extend({OrbitControls})
import CanvasLoader from '../Loader'

const Computers = ({isMobile}) => {
  // import GLTF model
  //*const computer = useGLTF('./desktop_pc/scene.gltf')

  const computer = useGLTF('./desktop_pc/scene.gltf')
  
  return (
    <group dispose={null}>
      <mesh>
        <hemisphereLight intensity={0.15}
          groundColor="black" />
        <pointLight intensity={.3} />
        <spotLight 
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.5 : 0.7}
          position={isMobile ? [0, -3.2, -2.2] : [0, -3.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    </group>
  )
}

// useGLTF.preload('./desktop_pc/scene.gltf')

const ComputersCanvas = () => {

  // establish useState to set value for mobile view
  const [isMobile, setIsMobile] = useState(false)

  //change isMobile variable
  useEffect(() => {
    //establish variable to listen to screen size changes
    const mediaQuery = window.matchMedia('(max-width: 700px)');

    //set initial value of isMobile state var
    setIsMobile(mediaQuery.matches);

    //define function to handle changes in the mediaQuery (i.e screen size)
    const handleChangeInMediaQuery = (e) => {
      setIsMobile(e.matches);
    }

    //add the handleChangeInMediaQuery() to listen to changes in the mediaQuery
    mediaQuery.addEventListener('change', handleChangeInMediaQuery);

    //remove listener when the useEffect is exited.
    return () => {
      mediaQuery.removeEventListener('change', handleChangeInMediaQuery);
    }
  }, [])
  

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}> {/* normally: fallback={null} */}
        <OrbitControls enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas