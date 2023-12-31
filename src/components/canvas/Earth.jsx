import React from 'react'
import { Canvas } from '@react-three/fiber'
import CanvasLoader from '../Loader'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')

  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      camera={{
        fov: 53,
        near: 1,
        far: 500,
        position: [-4, 3, 11]
      }}
      frameloop='demand'
      shadows
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>

    </Canvas>

  )
}
export default EarthCanvas