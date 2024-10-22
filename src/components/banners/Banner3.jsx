import React from 'react'
import BannerPng from '../../assets/banner-bg.jpg'
import { motion } from 'framer-motion'
import { FadeLeft } from '../../utility/animation'
const bgStyle ={
    backgroundImage:`url(${BannerPng})`,
    backgroundPosition:'center',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    

}
const Banner3 = () => {
  return (
    <section className=''>
        <div style={bgStyle} className="container rounded-3xl grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
            {/* blank div */}
            <div></div>
            {/* Banner info */}
            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                    <motion.h1
                    variants={FadeLeft(0.5)}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}
                    className='text-3xl lg:text-6xl font-bold uppercase'>Get Fresh fruits today</motion.h1>
                    <motion.p
                     variants={FadeLeft(0.7)}
                     initial='hidden'
                     whileInView='visible'
                     viewport={{once:true}}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, consectetur ad ipsam ducimus quae ratione animi laudantium aperiam quibusdam sed, iure harum quia architecto possimus reiciendis asperiores necessitatibus unde sit.
                    </motion.p>
                
                    <motion.div
                        variants={FadeLeft(0.4)}
                        initial='hidden'
                        whileInView='visible'
                        className='flex justify-center md:justify-start'>
                            <button className='primary-button'>
                            Order Now
                            </button>
                        </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner3;
