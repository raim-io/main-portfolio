import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'

const SectionWrapper = (Component, idName) => {
  
    function HOC() {
        return (
            <section
                initial="hidden"
                variants={staggerContainer()}
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl z-0 mx-auto relative`}
            >
                <span className='hash-span' id={idName}>
                    &nbsp;
                </span>
                <Component />
            </section>
        )
    }

    return HOC;
}

export default SectionWrapper