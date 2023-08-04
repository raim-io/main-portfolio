import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='w-full xs:w-[200px]'>
      <motion.div
        className='w-full green-pink-gradient p-[1px] shadow-card rounded-[5px]'
        variants={fadeIn("right", "spring", 0.5 * index, 0.7)}
      >
        
        <div
          className='bg-tertiary rounded-[5px] py-5 px-12 min-h-[280px] flex flex-col items-center justify-evenly'
          options={{
            scale: 1,
            speed: 450,
            max: 45
          }}
        >
          <img src={icon} alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3
            className='text-center text-white text-[20px] font-bold'
          >
            {title}
          </h3>
          
        </div>
      </motion.div>
    </Tilt>
    // <p>{title}</p>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()} className='mt-5'>
    <p className={styles.sectionSubText}>
    Wanna know more about me??
    </p>
    <h2 className={styles.sectionHeadText}>
    Summary</h2>
    </motion.div>
    
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[16px] max-width-3xl leading-[30px]'>
        Fueling my passion for technology and coding,
        I embark on a relentless quest for growth and
        strive to succeed in my professional journey.
        With a deep love for innovation and problem-solving,
        I spend most of my days constantly learning,
        staying up to date with the latest trends in the
        dynamic tech industry, and honing my skills to
        deliver high-quality solutions in some fields like DevOps.
        <br />
        I seek opportunities to expand my knowledge, collaborate
        with like-minded professionals, and contribute to
        impactful projects. Let's connect and together, let's
        shape the future of technology as we unravel its limitless
        possibilities.
      </motion.p>

      <div
        className='mt-20 flex flex-wrap gap-10 justify-center'
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
    )
}

export default SectionWrapper(About, "about")