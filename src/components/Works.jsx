import React from 'react'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { github, website } from '../assets'
import { Tilt } from 'react-tilt'
import { fadeIn, textVariant } from '../utils/motion'
import { motion } from 'framer-motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        className='w-full p-5 bg-tertiary rounded-[5px] sm:w-[360px]'
        options={{
          max: 8,
          scale: 1,
          speed: 10
        }}
      >
        <div className='w-full relative h-[250px]'>
          <img 
            src={image} 
            alt={name} 
            className='w-full h-full object-cover rounded-[5px]'
          />
          
          <div 
            className='absolute flex justify-end m-3 inset-0 card-img_hover gap-1'
          >
          </div>
        </div>

        <div className='mt-4'>
          <h3 className='font-bold text-white text-[24px]'>
            {name}
          </h3>
          <p className='text-[14px] mt-3 text-secondary'>
            {description}
          </p>
        </div>

        <div className='flex justify-between'>
          <div className='flex flex-wrap gap-3 mt-3'>
            {tags.map((tag) => (
              <p 
                className={`${tag.color} text-[13px]`} 
                key={tag.name}
              >
               {tag.name}* 
              </p>
            ))}
            
          </div>
          {/* live url icon */}
          <div className='flex gap-5'>
            <div 
              className='flex bg-white w-10 h-10 rounded-full cursor-pointer items-center justify-center'
              onClick={
                () => window.open(site_link, "_blank")
              }
            >
                <img 
                  src={website} 
                  alt="Website"
                  className='object-fit'
                />
            </div>
            {/* remote repository icon */}
            <div 
              className='flex black-gradient w-10 h-10 rounded-full cursor-pointer items-center justify-center'
              onClick={
                () => window.open(source_code_link, "_blank")
              }
            >
              <img 
                src={github} 
                alt="GitHub"
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={styles.sectionSubText}
        >
          Wanna see my works??
        </p>
        <h2
          className={styles.sectionHeadText}
        >
          Projects
        </h2>

        <div className='flex w-full'>
          <motion.p
            className='text-[17px] text-secondary mt-4 max-w-3xl leading-[30px]'
            variants={fadeIn("", "", 0.1, 0.1)}
          >
            Here is a display of my skills and experiences through various examples of my projects. Within each project tile lies a brief description of the project and a link to it's github repository, as well as a live demo.
            <br />
            These projects are a mirror of my ability to solve complex problems, manage projects, and make use of various technologies.
          </motion.p>
        </div>

        <div className='flex flex-wrap gap-5 mt-20 justify-center'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`}
              index={index}
              {...project}
            />
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Works, "work")