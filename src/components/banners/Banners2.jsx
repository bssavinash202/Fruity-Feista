import React from 'react'
import BannerPng from '../../assets/fruit-plate2.png'
import { motion } from 'framer-motion'
import { FadeUp } from '../../utility/animation'
const Banners2 = () => {
  return (
    <section className=''>
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24 mb-14">
           
            {/* Banner info */}
            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                    <motion.h1
                    variants={FadeUp(0.5)}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}

                    className='text-3xl lg:text-6xl font-bold uppercase'>Online Fruit store</motion.h1>
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
                            Download the App
                            </button>
                        </motion.div>
                </div>
            </div>
             {/* Banner Image */}
             <div className='flex justify-center items-center'>
            <motion.img
            initial={{opacity:0, x:200, rotate:75}}
            animate={{opacity:1, x:0, rotate:0}}
            transition={{duration:1, delay:0.5}}
            src={BannerPng} alt="" className='w-[350px] md:max-w-[500px] h-full object-cover drop-shadow'/>
            </div>
        </div>
    </section>
  )
}

export default Banners2;
