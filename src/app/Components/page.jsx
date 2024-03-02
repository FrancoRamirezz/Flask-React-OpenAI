'use client'
import React from "react";
import Image from "next/image";
import {TypeAnimation} from 'react-type-animation';
import Link from "next/link";



 export const HeroSection = () =>{
return(
<section className = "lg:py-16">

<div className="grid grid-cols-1 sm:grid-cols-12">
Hello I'm Francisco
<motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"></motion.div>

<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              &apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Francisco Ramirez",
                1000,
                "Software Developer",
                1000,
                "Cloud Engineer",
                1000,
                "Data Analyst",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              Persevere, Discplience, Enjoment, and Tech lover
</p>



</div>
</section>


);
};