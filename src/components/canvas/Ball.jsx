import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import CanvasLoader from '../Loader'
import { OrbitControls, Preload, Float, useTexture, Decal } from '@react-three/drei'

const Ball = (props) => {
  // define Ball texture
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.7} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 0, 0]} />

      <mesh scale={2.5} receiveShadow castShadow>
        <icosahedronGeometry args={[1.1, 0]} />
        
        <meshStandardMaterial
          flatShading
          color="#ffff8eb"
          polygonOffset
          polygonOffsetFactor={1}
        />

        //implement Ball texture
        <Decal
          flatShading
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
        />
      </mesh>
    </Float>
  )
}

// define Ball canvas
const BallCanvas = ({ icon }) => {

  return (
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}> {/* normally: fallback={null} */}
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas