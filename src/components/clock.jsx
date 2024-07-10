import React, { useEffect, useState } from 'react';
import '../App.css';
import { motion, } from "framer-motion";
import { FaMoon, FaSun } from 'react-icons/fa';
import { WiSunrise, WiSunset } from 'react-icons/wi';
const Clock = () => {
    const [second, setSecond] = useState(new Date().getSeconds());


    const [sun, setSun] = useState(false);
    const [sunrise, setSunrise] = useState(false);
    const [sunset, setSunset] = useState(false);
    const [moon, setMoon] = useState(false);
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();


    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const currMonth = months[month];

    useEffect(() => {
        if (hour >= 8 && hour < 17) {
            setSun(true);
            setSunrise(false);
            setSunset(false);
            setMoon(false);
        } else if (hour >= 5 && hour < 8) {
            setSun(false);
            setSunrise(true);
            setSunset(false);
            setMoon(false);
        } else if (hour >= 17 && hour < 19) {
            setSun(false);
            setSunrise(false);
            setSunset(true);
            setMoon(false);
        } else {
            setSun(false);
            setSunrise(false);
            setSunset(false);
            setMoon(true);
        }
    }, [hour]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSecond(new Date().getSeconds());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);


  return (
    <div>
        <div className='flex  justify-center items-center w-full h-full mt-2 '>
                            <div className='w-1/6 h-full flex justify-end items-center '>
                                <motion.span
                                initial={{rotate:0}}
                                animate={{rotate:360,transition:{duration:3.5,repeat:Infinity, repeatType: "loop",ease:"linear"}}}
                                className={` mb-28  ${sun ? 'flex' : 'hidden'} text-[#ffa200]`} ><FaSun className='text-4xl' /></motion.span>
                                <motion.span 
                                animate={{y:[0,-10,0],transition:{duration:2,repeat:Infinity, repeatType: "reverse",ease:"easeInOut"}}}
                                className={`mb-28 ${sunrise ? 'flex' : 'hidden'} text-[#ff7b00]`}><WiSunrise className='text-6xl' /></motion.span>
                                <motion.span 
                                animate={{y:[0,10,0],transition:{duration:2,repeat:Infinity, repeatType: "reverse",ease:"easeInOut"}}}
                                className={`mb-28 ${sunset ? 'flex' : 'hidden'} text-[#ff7b00]`}><WiSunset className='text-6xl' /></motion.span>
                                <motion.span 
                                animate={{y:[0,10,0],transition:{duration:2,repeat:Infinity, repeatType: "reverse",ease:"easeInOut"}}}
                                className={`mb-28  ${moon ? 'flex' : 'hidden'} `}><FaMoon className='text-4xl' /></motion.span>
                            </div>
                            <div 
                            className={`text-9xl font-[numbers]  `}>{day}</div>
                            <div className={`w-1/4 ml-1 mt-3 flex font-[highlight] lowercase flex-col `}>
                                <span 
                                className='text-3xl'>{currMonth}</span>
                                <div 
                                >
                                    <span className='text-lg'>{hour}:</span>
                                    <span className='text-lg'>{minute}:</span>
                                    <span
                                    className='text-lg text-red-700 '>{second}</span>
                                </div>
                            </div>
                        </div>
    </div>
  )
}

export default Clock