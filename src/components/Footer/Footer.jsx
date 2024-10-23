import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLeaf } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
   <footer  className='py-12 md:py-12 mt-12 bg-gradient-to-l from-primary/50 to-transparent'>
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1, delay:0.2}}
    className="container flex justify-between items-center">
        {/* logo section */}
        <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
            <p className='text-primary'>Fruity</p>
            <p className='text-secondary'>Fiesta</p>
            <FaLeaf className='text-green-600'/>
        </div>
        {/* social section */}
        <div className='text-3xl flex gap-4 mt-6 text-gray-700'>
            <FaFacebookF/>
            <FaTwitter/>
            <FaInstagram/>
        </div>
    </motion.div>
    <div className='items-center text-center text-gray-700'>
    © 2024 Fruity Feista @ Bathala Shivasai Avinash, India, Inc. All rights reserved.
    </div>

   </footer>
  )
}

export default Footer
