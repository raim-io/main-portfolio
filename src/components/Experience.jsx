import React from 'react'
import { styles } from '../styles'
import { experiences } from '../constants'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

const ExperienceCard = ({ experience, index }) => (
  <VerticalTimelineElement
    contentStyle={{background: '#1d1836', color: '#fff'}}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div
        className='w-full h-full items-center justify-center flex'
      >
        <img
          src={experience.icon}
          alt={experience.company_name}
          className='object-contain w-[60%] h-[60%]'
        />
      </div>
    }
  >
    <div>
      <h3
        className='font-bold text-white text-[24px]'
      >
        {experience.title} 
      </h3>

      <p
        className='font-semibold text-secondary text-[16px]'
        style={{margin: 0}}
      >
        {experience.company_name}
      </p>
    </div>

    <ul
      className='ml-5 mt-5 space-y-2 list-disc'
    >
      {experience.points.map((point, index) => (
        <li
          className='text-[14px] text-white-100 pl-1 tracking-wider'
          key={`experience-point-${index}`}
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={styles.sectionSubText}
        >
          What have I been up to??
        </p>
        <h2
          className={styles.sectionHeadText}
        >
          Experience
        </h2>
      </motion.div>

      <div className='mt-2 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")