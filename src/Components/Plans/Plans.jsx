import React from "react";
import "./Plans.css";
import { RiHeartAdd2Line } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbPremiumRights } from "react-icons/tb";
import { SiPolymerproject } from "react-icons/si";
import tick from "../../assets/whiteTick.png";
function Plans() {
  return (
    <div>
      <div className="plans" id="plans">
     
        <div className="plans-header">
          <span className="stroke-text">READY TO START</span>
          <span>YOUR JOURNEY</span>
          <span className="stroke-text">NOW WITHUS </span>
        </div>
      

      <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
        <div className="card-1">
          <RiHeartAdd2Line className="icon" />
          <h1 className="heading">BASIC PLAN</h1>
          <p className="price">$ 25</p>
          <div className="taxt-area">
            <div>
              <img src={tick} alt="" />
              <span>2 hours of excercises </span>
            </div>

            <div>
              <img src={tick} alt="" />
              <span>Free consultaion to coaches</span>
            </div>

            <div>
              <img src={tick} alt="" />
              <span>Access to The Community</span>
            </div>
          </div>
          <p>
            See more benefits <FaArrowRightLong />
          </p>
          <button className="btn">Join Now</button>
        </div>

        <div className="card-2">
          <TbPremiumRights className="icon" />
          <h1 className="heading">PRIMIUM PLAN</h1>
          <p className="price">$ 30</p>
          <div className="taxt-area">
            <div>
              <img src={tick} alt="" />
              <span>5 hour of excercises</span>
            </div>

            <div>
              <img src={tick} alt="" />
              <span>Free consultaion of Coaches</span>
            </div>

            <div>
              <img src={tick} alt="" />
              <span>Accessto minibar</span>
            </div>
          </div>
          <p>
            See more benefits <FaArrowRightLong />
          </p>
          <button className="btn">Join Now</button>
        </div>
        <div className="card-3">
          <SiPolymerproject className="icon" />
          <h1 className="heading">PRO PLAN</h1>
          <p className="price">$ 25</p>
          <div className="taxt-area">
            <div>
              <img src={tick} alt="" />
              <span>8 hours of excercises</span>
            </div>

            <div>
              <img src={tick} alt="" />
              <span>Consultation of Private Coach</span>
            </div>

            <div>
              <img src={tick} alt="" />
              <span>Free Fitness Merchandises</span>
            </div>
          </div>
          <p>
            See more benefits <FaArrowRightLong />
          </p>
          <button className="btn">Join Now</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Plans;
