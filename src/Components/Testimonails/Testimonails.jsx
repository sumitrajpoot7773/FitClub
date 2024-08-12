import React, { useState } from 'react'
import  './Testimonails.css'
import rightArrow from '../../assets/rightArrow.png'
import leftArrow from '../../assets/leftArrow.png'
import {testimonialsData} from '../../data/testimonialsData'

import { motion } from "framer-motion";
function Testimonails() {
  const transition={type:'string', duration:2}

  const [selected,setSelected]=useState(0);
  const length=testimonialsData.length;


  function left(){
    selected===0?setSelected(length-1):setSelected((prev)=>prev-1);
    console.log(left);
  }

  function right(){
    selected===length-1?setSelected(0):setSelected((prev)=>prev+1);
    console.log('right');
  }
  return (
    <>
        <div className="testimonails">
            <div className="left-t">
                  <span>Testimonails</span>
                  <span className='stroke-text'>what they</span>
                  <span>say about us</span>

                  <motion.span
                    key={selected}
                  initial={{opacity:1, x:-100}}
               animate={{opacity:1,x:0}}
               exit={{opacity:0 ,x:100}} 
               transition={transition}
                    > {testimonialsData[selected].review}
                  </motion.span>

                 <span>
                 <span style={{color:'var(--orange)'}}>
                    {testimonialsData[selected].name}
                  </span>{" "}
                  -{testimonialsData[selected].status}
                 </span>
            </div>
            <div className="right-t">
               <motion.div initial={{opacity:0,x:-100}} 
            whileInView={{opacity:1,x:0}} transition={{...transition,duration:2}}></motion.div>
               <motion.div
               initial={{opacity:0,x:-100}} 
               whileInView={{opacity:1,x:0}} transition={{...transition,duration:2}}></motion.div>

               <motion.img  key={selected}
               initial={{opacity:1, x:100}}
               animate={{opacity:1,x:0}}
               exit={{opacity:0 ,x:-100}} 
               transition={transition} src={testimonialsData[selected].image} alt="" />

               <div className="arrows">
                  <img onClick={(()=>left())} src={leftArrow} alt="" />
                  <img onClick={(()=>right())} src={rightArrow} alt="" />
               </div>
            </div>
        </div>
    </>
  )
}

export default Testimonails