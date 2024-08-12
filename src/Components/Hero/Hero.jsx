import React from "react";
import "./Hero.css";
import Header from "../Header/Header";

//? images
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png'

import { motion } from "framer-motion";
function Hero() {

  const transition={type:'string', duration:3}
  return (
    <>
      <div className="Hero" id="home">

         <div className="blur hero-blur" ></div>
        <div className="left-h">
          <Header />

          <div className="the-best-ad">
            <motion.div initial={{left:'238px'}} whileInView={{left:'8px'}}
            transition={{...transition,type:'tween'}}>
                
            </motion.div>
            <span>The best fitness club in the town </span>
          </div>

          <div className="hero-text">
            <div>
              <span className="stroke-text">Shape</span>
              <span>Your</span>
            </div>
            <div>
              <span>Ideal body</span>
            </div>
            <div>
              <span>
                in here we will help you to shape and build your ideal body and
                live up your life to fullest
              </span>
            </div>
          </div>
        

        {/* ====Figures ====*/}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
         {/* ======== hero-buttton ========= */}
         <div className="hero-button">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
         </div>
        </div>
        <div className="Right-h">
            <button className="btn">Join Now</button>


            <motion.div initial={{right:'-1rem'}} 
            whileInView={{right:'4rem'}} transition={transition}className="heart-rate">
                <img src={heart} alt="" />
                <span>Heart Rate</span>
                <span className="sp">116 bpm</span>
            </motion.div>

            {/* ============ hero-images ============ */}
              
             
             <img src={hero_image} alt="" className="hero-image" />
             <motion.img initial={{right:'11rem'}} 
            whileInView={{right:'20rem'}} transition={transition} src={hero_image_back} alt="" className="hero-image-back" />
              {/* ============ calories ============ */}
              <motion.div initial={{right:'37rem'}} 
            whileInView={{right:'28rem'}} transition={transition} className="calories">
                <img src={calories} alt="" />
                <div>
                <span>Calories Burned</span>
                <span>1200 kcal</span>
                </div>
               </motion.div>
        </div>
      </div>
    </>
  );
}

export default Hero;
