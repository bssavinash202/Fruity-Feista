import React, { useState } from 'react'
import { FaLeaf } from 'react-icons/fa'
import { MdMenu, MdOutlineShoppingCart } from 'react-icons/md';
import ResponsiveMenu from './ResponsiveMenu';
import { motion } from 'framer-motion';
const NavbarMenu =[
    {
    id: 1,
    title: 'Home',
    link:'/',
    },
    {
    id: 2,
    title: 'Products',
    link:'#',
    },
    {
    id: 3,
    title: 'About',
    link:'#',
    },
    {
    id: 4,
    title: 'Shop',
    link:'#',
    },
    {
    id: 5,
    title: 'Contacts',
    link:'#',
    } 
];

const Navbar = () =>{
    const [open, setOpen] = useState(false);
  return (
    <>
<nav className='bg-gradient-to-b from-primary/25 to-transparent'>
    <motion.div  
    initial={{opacity:1}}
    visible={{opacity:0}}
    transition={{duration:1, delay:1}}
    className='container flex justify-between items-center py-4 md:pt-4'>
        {/* logo */}
        <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
            <p className='text-primary'>Fruity</p>
            <p className='text-secondary'>Fiesta</p>
            <FaLeaf className='text-green-500'/>
        </div>
        {/* menu */}
        <div className='hidden md:block'>
            <ul className='flex items-center gap-6 text-gray-800'>
                {
                    NavbarMenu.map((menu)=>(
                        <li key={menu.id} className='text-xl text-amber-950'>
                            <a href={menu.link} className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold'>{menu.title}</a>
                        </li>
                    ))
                }
                <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
                    <MdOutlineShoppingCart/>
                </button>
            </ul>
        </div>
        <div className='md:hidden' onClick={()=>setOpen(!open)}>
            <MdMenu className='text-4xl cursor-pointer'/>
        </div>
    </motion.div>
</nav>
    {/*mobile menu section*/}
    <ResponsiveMenu open = {open}/>
</>

)
}

export default Navbar
