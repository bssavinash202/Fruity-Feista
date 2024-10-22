import React from 'react'
import BannerPng from '../../assets/fruits-splash.png'
import { motion } from 'framer-motion'
import { FadeUp } from '../../utility/animation'
const Banners = () => {
  return (
    <section className='bg-secondary/15'>
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
            {/* Banner Image */}
            <div className='flex justify-center items-center'>
            <motion.img
            initial={{opacity:0, scale:0.5}}
            whileInView={{opacity:1, scale:1}}
            transition={{type:'spring', stiffness:100, delay:0.2}}
            viewport={{once:true}}
            src={BannerPng} alt="" className='w-[300px] md:max-w-[400px] h-full object-cover drop-shadow'/>
            </div>
            {/* Banner info */}
            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                    <motion.h1
                    variants={FadeUp(0.5)}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}

                    className='text-3xl lg:text-6xl font-bold uppercase'>Brand Info</motion.h1>
                    <motion.p
                     variants={FadeUp(0.7)}
                     initial='hidden'
                     whileInView='visible'
                     viewport={{once:true}}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, consectetur ad ipsam ducimus quae ratione animi laudantium aperiam quibusdam sed, iure harum quia architecto possimus reiciendis asperiores necessitatibus unde sit.
                    </motion.p>
                    <motion.p
                     variants={FadeUp(0.9)}
                     initial='hidden'
                     whileInView='visible'
                     viewport={{once:true}}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta optio perspiciatis voluptates officia quas adipisci.
                    </motion.p>
                    <motion.div
                        variants={FadeUp(0.4)}
                        initial='hidden'
                        whileInView='visible'
                        className='flex justify-center md:justify-start'>
                            <button className='primary-button'>
                            Learn More
                            </button>
                        </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banners
