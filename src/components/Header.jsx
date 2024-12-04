import React from 'react'
import {FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'
// import {motion} from 'framer-motion'
import Image from '../assets/logo.jpg'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
  
    <section className='section'>
    <div className='container mx-auto '>
      <div>
          <div className='text-gradient-to-r from-slate-200 to-slate-300 '> 
            <h1>OREOLUWA <span>OGUNDIMU</span></h1>
            <div className='mb-6 text-[36px] lg:text-[60px] font-semibold uppercase leading-[1]'>
              <span className='text-blue mr-4'>I am a</span>
           <TypeAnimation sequence={[
               'Web-Developer',
              2000,
               'Front-End-Developer',
               2000,
               ]}
                speed={50}
               className='text-accent'
                 wrapper='span'
               repeat={Infinity}
            />
            </div>
           <p className=''>i am oreoluwa..uiriuirewiijrfiu rwiuhuhuf
            rhufhuhuij
           eijroijfrijrehuh uhuhurehyuhyu 
            uieryeu u3iu4hyuv ui3ygyuf</p>
           <div> 
               <button className='btn btn-lg'>Contact me</button>
            <Link to="" className='text-gradient btn-link'>
             My Portfolio
          </Link>
           </div>
             <div className='flex gap-x-6 max-w-max mx-auto lg:mx-0'>
               <Link to="">
               <FaGithub className='text-4xl text-blue mr-4'/>
             </Link>
              <Link>
              <FaLinkedinIn className='text-4xl text-blue mr-4'/>
              </Link>
               <Link>
             <FaInstagram className='text-4xl text-blue mr-4'/>
              </Link>
             </div>
           </div>
           <div>
             <img src={Image} alt='' className='h-[500px] rounded-full'/>
           </div>
        </div>
       </div>
     </section>
 )
}

export default Header