import React from 'react';
import './Effects.css';
import { motion } from 'framer-motion';

const Transition = () => {
  return (
    <>
      <motion.div className='screen_transition1'
      initial = {{x: "100%", width: "100%"}}
      animate={{x: "0%", width: "0%"}}
      // exit={{x: ["0%", "100%"], width: ["0%", "100%"]}}
      transition={{duration: 0.6, ease:"easeInOut"}} />
      <motion.div className='screen_transition2'
      initial = {{x: "100%", width: "100%"}}
      animate={{x: "0%", width: "0%"}}
      transition={{delay: 0.2, duration: 0.6, ease:"easeInOut"}} />
      <motion.div className='screen_transition3'
      initial = {{x: "100%", width: "100%"}}
      animate={{x: "0%", width: "0%"}}
      transition={{delay: 0.3, duration: 0.6, ease:"easeInOut"}} />
    </>
  )
}

export default Transition