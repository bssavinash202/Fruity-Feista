import React from 'react'
import apple from '../../assets/fruits/apple.png'
import oranges from '../../assets/fruits/orange.png'
import avocado from '../../assets/fruits/avocado.png'
import cherries from '../../assets/fruits/cherry.png'
import { motion } from 'framer-motion'
import { FadeLeft } from '../../utility/animation'
const MenusData =[
    {
        id:1,
        title:'Fresh Red Apple',
        link:'/',
        price:'$2.37',
        img: apple,
        delay:0.3
    },
    {
        id:2,
        title:'Fresh Oranges',
        link:'/',
        price:'$1.47',
        img: oranges,
        delay:0.6
    },
    {
        id:3,
        title:'Fresh Avocado',
        link:'/',
        price:'$4.65',
        img: avocado,
        delay:0.9
    },
    {
        id:4,
        title:'Fresh Cherries',
        link:'/',
        price:'$3.14',
        img: cherries,
        delay:1.2
    },
]
const Menu = () => {
  return (
    <section>
        <div className="container pt-12 pb-20">
            <motion.h1
            initial={{opacity:0, x:-200}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1, delay:0.3}}
            className='text-2xl font-bold text-left pb-10 uppercase'>Our Menu</motion.h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
            {MenusData.map((menu)=>(
                <motion.div 
                variants={FadeLeft(menu.delay)}
                initial='hidden'
                whileInView={'visible'}
                whileHover={{scale:1.1}}
                className='bg-white cursor-pointer rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.40)] flex flex-row justify-around items-center gap-3'>
                    <img src={menu.img} alt="" className='w-[60px] mb-3 scale-110 transform -translate-y-6' />
                    <div>
                        <h1 className='text-lg font-semibold'>{menu.title}</h1>
                        <p className='text-lg font-semibold text-secondary'>{menu.price}</p>
                    </div>
                </motion.div>
            ))}
        </div>
        </div>
       
    </section>
  )
}

export default Menu
