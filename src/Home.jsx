import React from "react";
import "./Home.css";
import Frame from "./Frame.svg";
import User from "./user.png"
import { useState } from "react";


// setTravellersCount

const Home = ({handleRenderTab,travellersCount,setTravellersCount}) => {
  


  function handleCount(travellersCount){
    if(travellersCount<=9){
      setTravellersCount(Array(travellersCount).fill(null));
    }
  }


  return (
    // 
          <div className="home">
            {/* <p>Get Your Best Travel Travel Insurance</p> */}
            <p>How Many People Are Travelling ?</p>
            <div className="rows">
              <div className="row-1">
                <div className="count one" onClick={()=>{handleCount(1)}}>
                  1
                </div>
                <div className="count two" onClick={()=>{handleCount(2)}}>
                  2
                </div>
                <div className="count three" onClick={()=>{handleCount(3)}}>
                  3
                </div>
                <div className="count more" onClick={()=>{handleCount(travellersCount.length+1)}}>
                  +
                </div>
              </div>
              <div className="row-2">
                {travellersCount.map((e, i) => (
                  <div className='demo' key={i}>
                  <div>
                    Traveller-{i+1}
                  </div>
                  <div>
                    <img src={User} alt="" />
                  </div>
                </div>
                ))}
              </div>
              <div className="row-3">
              <button className="space-btn" onClick={()=>{handleRenderTab('next')}}>Next<i className="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
    // 
    
  );
};

export default Home;
