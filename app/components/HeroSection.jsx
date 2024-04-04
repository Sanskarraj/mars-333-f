"use client";

import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'
import React from 'react';




const HeroSection = () => {



    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-7 place-self-center '>
                    <h1 className='text-white mb-4 text-2xl lg:text-6xl uppercase font-extrabold lg:text-left text-center'>Mars {" "}
                        <br />

                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                "Youtube",
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                "Shorts",
                                1000,
                                "",
                                300,
                            ]}
                            wrapper="span"
                            speed={40}
                            repeat={Infinity}
                            className='text-red-200'
                        />
                        <br />
                        Downloader
                    </h1>
                    <p className='text-[#ADB7BE] text-xs font-mono lg:font-normal lg:text-xl'>Download videos from YouTube quickly and easily in High quality
                    </p>
                </div>
                <div className='col-span-5 ml-10 p-5'>
                    {/* 
                    <div className=" place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-yellow-200 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-yellow-200 after:via-yellow-400 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-yellow-700 before:dark:opacity-10 after:dark:from-yellow-900 after:dark:via-[#F4D03F] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div> */}

                    <div class="relative z-10 flex items-center justify-center w-5/6 h-[300px] sm:h-[300px] lg:h-[300px]">
                        <div class="absolute inset-0 w-full h-full bg-gradient-to-tl from-transparent to-red-600 sm:bg-gradient-radial sm:from-red-600 sm:to-transparent lg:bg-gradient-radial lg:from-red-600 lg:to-transparent blur-3xl rounded-full"></div>
                    </div>

                    <div className='justify-center flex '>
                        <div className='lg:inline-block'>
                            <Link href="#legal" className='text-neutral-400 underline text-sm lg:text-white hover:text-red-400'>Legal Advisory</Link>
                        </div>
                        <div className='lg:inline-block lg:ml-5 ml-2'>
                            <Link href="#disclaimer" className='underline text-sm text-neutral-400 lg:text-white hover:text-red-400'>Disclaimer</Link>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    )
}

export default HeroSection