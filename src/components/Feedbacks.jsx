import React from 'react'
import { testimonials } from '../constants'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    className='p-10 bg-black-200 rounded-[5px] w-full xs:w-[320px]'
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
  >
    <p className='text-[48px] text-white font-black'>
      "
    </p>
    <div className='mt-1'>
      <p className='text-[18px] text-white tracking-wider'>
        {testimonial}
      </p>
    
      <div className='flex items-center justify-between mt-7 gap-1'>
        <div className='flex flex-1 flex-col'>
          <p className='text-[16px] text-white font-medium'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='text-[12px] text-secondary mt-1'>
            {designation} of {company}
          </p>
        </div>

        <img src={image} alt={`feedback-by-${name}`}
          className='w-12 h-12 rounded-full object-contain'
        />
      </div>
    </div>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className='bg-black-100 rounded-[5px] mt-12'>
      <div className={`${styles.padding} bg-tertiary min-h-[300px] rounde-[2xl]`}>
        <motion.div variants={textVariant}>
          <p className={styles.sectionSubText}>
            what they say about me??
          </p>
          <h2 className={styles.sectionHeadText}>
            Testimonials
          </h2>
        </motion.div>
      </div>

          <div className={`${styles.paddingX} flex flex-wrap gap-7 -mt-20 pb-14 justify-center`}>
            {testimonials.map((testimonial, index) => (
              <FeedbackCard index={index} key={testimonial.name} {...testimonial} />
            ))}
          </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "")