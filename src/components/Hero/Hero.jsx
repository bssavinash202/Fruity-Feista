import React from 'react'
import { IoBagHandleOutline } from 'react-icons/io5'
import HeroPng from '../../assets/fruit-plate.png'
import Leaf from '../../assets/leaf.png'
import { motion } from 'framer-motion'
import { FadeRight } from '../../utility/animation'
const Hero = () => {
  return (
   <section >
    {/* brand info */}
    <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
    <div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
        <div className='text-center md:text-left py-14 space-y-6 lg:max-w-[400px]'>
            <motion.h1
            variants={FadeRight(0.3)}
            initial='hidden'
            animate='visible'
            className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-jost'>Healthy <br/>Fresh <span className='text-secondary'>Fruits!</span></motion.h1>
        <motion.p  
        variants={FadeRight(0.6)}
        initial='hidden'
        animate='visible'
        className='text-2xl tracking-wide'>Order now for Fresh Healthy Life</motion.p>
        <motion.p 
         variants={FadeRight(0.7)}
         initial='hidden'
         animate='visible'
        className='text-gray-400'>Healthy and yummy food for fresh morning breakfast. Eat Daily for Good Health and mind order now and get 28% off on your Firsr Order</motion.p>
       {/* order now */}
       <motion.div
        variants={FadeRight(0.9)}
        initial='hidden'
        animate='visible'
       className='flex justify-center md:justify-start'>
       <button className='primary-button flex items-center gap-2'>
        <span>
            <IoBagHandleOutline/>
        </span>
            Order now
        </button>
       </motion.div>
        </div>
    </div>
    {/* hero img */}
    <div className='flex justify-center items-center'>
        <motion.img 
        initial={{opacity:0, x:200, rotate:75}}
        animate={{opacity:1, x:0, rotate:0}}
        transition={{duration:1, delay:0.5}}
        src={HeroPng} alt="" className='w-[350px] md:w-[550px] drop-shadow' />
    </div>
    <div className='absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-45'>
        <motion.img 
        initial={{opacity:0, y:-200, rotate:75}}
        animate={{opacity:1, y:0, rotate:0}}
        transition={{duration:1, delay:0.9}}
        src={Leaf} alt="" className='w-full md:max-w-[300px]' />
    </div>
    </div>
   </section>
  )
}

export default Hero
