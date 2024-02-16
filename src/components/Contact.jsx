import React from 'react'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import emailjs from '@emailjs/browser'
import { useState, useRef } from 'react'
import { EarthCanvas } from './canvas'
import { slideIn } from '../utils/motion'
import { motion } from 'framer-motion'

// template id = template_2riwkmn
// service id = service_or6i3ai
// public key = IxWhCPZYQKjjTTLgV

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const formRef = useRef()

  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_or6i3ai',
      'template_2riwkmn',
      {
        from_name: form.name,
        from_email: form.email,
        to_name: 'raim.io',
        to_email: 'raim.tobi@gmail.com',
        message: form.message
      },
      'IxWhCPZYQKjjTTLgV'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you for reaching out. I will get back to you as soon as possible');

      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error) => {
      setLoading(false);
      console.log(error);

      alert('oops, somthing went wrong while sending message')
    })
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value})
  }
  
  return (
      <motion.div
        className='p-8 bg-black-100 rounded-xl flex-[0.75]'
        variants={slideIn('bottom', 'tween', 0.2, 1)}
      >
        <p className={styles.sectionSubText}>
          Wanna get in touch with me??
        </p>
        <h3 className={styles.sectionHeadText}>
          Contact
        </h3>

        <form ref={formRef} onSubmit={handleSubmit}
          className='flex flex-col gap-8 mt-12'
        >
          <label className='flex flex-col'>
            <span className='font-medium text-white mb-4'>
              Name
            </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name"
              className='py-4 px-6 bg-tertiary text-white font-medium rounded-lg border-none outline-none placeholder:text-secondary placeholder:opacity-50'
            >
            </input>
          </label>

          <label className='flex flex-col'>
            <span className='font-medium text-white mb-4'>
              E-mail
            </span>
            <input 
              type='email' 
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="e.g johndoe@example.com"
              className='py-4 px-6 bg-tertiary text-white font-medium rounded-lg border-none outline-none placeholder:text-secondary placeholder:opacity-50'
            >
            </input>
          </label>

          <label className='flex flex-col'>
            <span className='font-medium text-white mb-4'>
              Message
            </span>
            <textarea 
              rows='7'
              type='text'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message"
              className='py-4 px-6 bg-tertiary text-white font-medium rounded-lg border-none outline-none placeholder:text-secondary placeholder:opacity-50'
            >
            </textarea>
          </label>

          <button
            type='submit'
            className='bg-tertiary px-8 py-3 text-white outline-none rounded-xl shadow-primary font-bold w-fit hover:opacity-50'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>

      </motion.div>
  )
}

export default SectionWrapper(Contact, "contact")