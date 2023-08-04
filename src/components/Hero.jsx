import React, {useContext} from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { socials } from '../constants'
import { ComputersCanvas } from './canvas'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto bottom-0'>
      {/* text and logo */}
      <div className='mt-5 flex xl:flex-row flex-col-reverse justify-center items-center'>
        {/* text div */}
        <div className={`${styles.paddingX} flex items-center gap-5`}>
          <div className='justify-center items-center flex flex-col mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#24c7a4]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient'/>
          </div>

          <div className='flex flex-col'>
            <h1 className={`${styles.heroHeadText} text-white`}>
              SWE 
              <span className='text-[#24c7a4]'> || </span> 
              DevOps
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Hi, I'm Raheem Oluwatobiloba, <br className='sm: block hidden'/>unleashing creativity by transforming <br className='sm:block hidden'/>visions into captivating realities...
            </p>

            <div className='mt-10'>
              <ul
                className='list-none flex flex-row gap-10'
              >
                {socials.map((social, id) => (
                  <li
                    key={ social.id }
                    className='hover:text-white cursor-pointer'
                  >
                    <a href={social.url} target="_blank">
                      <img 
                        src={social.icon} 
                        alt={id} 
                        className='object-contain h-10 w-10 hover:opacity-50'
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* render logo div */}
        <div className='relative flex justify-center items-center'>
          {/* <Canvas
            camera={{fov: 25, position: [5, 5, 5]}}
          >
            <OrbitControls
              enableZoom = {false}
              // autoRotate
            >
              <ambientLight intensity = {1} />
              <directionalLight position = {[3, 2, 1]} />
              <Sphere 
                args = {[1, 100, 200]}
                scale={1}
              />
              <MeshDistortMaterial />
            </OrbitControls>
          </Canvas> */}
          <img src="./logo_transparent.png" alt="logo" className='w-[400px] h-[400px] md:w-200px md:h-100px object-contain top-0 bottom-0 right-0 left-0 m-auto animate-bouncing1' />
        </div>
      </div>

      {/* render scroller */}
      <div 
        className='absolute hidden sm:flex w-full justify-center bottom-0 xl:bottom-20 md:-bottom-20'
      >
        <a href="#about">
          <div 
            className='rounded-3xl border-2 border-secondary w-[21px] h-[50px] flex items-start justify-center p-1'
          >

            <motion.div  
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-1 h-2 bg-[#24c7a4] rounded-3xl mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero