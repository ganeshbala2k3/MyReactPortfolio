import React from 'react';
import { delay, motion } from "framer-motion"
import { HERO_CONTENT } from '../constants';
import ProfilePic from "../assets/file.png";

const container =(delay,initialtrasition,finaltransition)=>(
  {
    hidden:{x:initialtrasition,opacity:0},
    visible:{
      x:finaltransition,
      opacity:1,
      transition :{duration:1 ,delay:delay},
    },
    
  })
const Hero = () => {
    
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col items-center lg:items-start">
              
                <motion.h1 
                variants={container(0,-1000,0)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                  Ganesh Bala
                </motion.h1>
                <motion.span
                variants={container(0,-1000,0)}
                initial="hidden"
                animate="visible"
                 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                  Full Stack Developer
                </motion.span>
                <motion.p 
                variants={container(1,-1000,0)}
                initial="hidden"
                animate="visible"
                className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                  {HERO_CONTENT}
                </motion.p>
              </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
              <motion.div 
              initial={{x:3000}}
              animate={{x:0}}
              transition={{duration:1,delay:1}}
              className='flex justify-center'>
                <img src={ProfilePic} alt="Profile picture" />
              </motion.div>
            </div>
          </div>
        </div>
      );
}

export default Hero;
