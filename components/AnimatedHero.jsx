"use client"

import React, { useEffect } from "react";
// import { neonCursor } from "threejs-toys";
import Logo from "../assets/portfolio/IT-Proshikkhon-Logo.png"
import "./AnimatedHero.css";
const AnimatedHero = ({ setToggle }) => {
  // useEffect(() => {
  //   neonCursor({
  //     el: document.getElementById('app'),
  //     shaderPoints: 16,
  //     curvePoints: 80,
  //     curveLerp: 0.5,
  //     radius1: 5,
  //     radius2: 30,
  //     velocityTreshold: 10,
  //     sleepRadiusX: 100,
  //     sleepRadiusY: 100,
  //     sleepTimeCoefX: 0.0025,
  //     sleepTimeCoefY: 0.0025
  //   })
  // }, []);
  return (
      <div className="w-full h-screen">
           <div className="" id="app">
      <div id="hero">
        <img className="animate-pulse" src={Logo} alt="" />
        <button className="border px-4 py-2" onClick={()=>setToggle(true)}>Click And Explore Website</button>
      </div>
    </div>
      </div>
  );
};

export default AnimatedHero;
