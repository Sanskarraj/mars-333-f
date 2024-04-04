import React from 'react'

const FAQsection = () => {
    return (
        <div>
            <div className='p-10 mb-10 bg-gradient-to-b from-[#000000] to-[#ffffff23] rounded-lg'>
                <h1 className='lg:text-[2vw] text-2xl leading-none font-sans font-extrabold text-center'>FAQ's</h1>

                <div className="flex flex-col mt-8 text-[#ADB7BE]">
                    <h1 className="lg:text-2xl  text-white">Is it safe and secure to download videos from YouTube using this YouTube Downloader tool?

                    </h1>
                    <p className="mt-2 text-sm">Yes, This Downloader totally safe from Malware and virus. We don't collect any information from user and this tool is secure with a security layer.</p>
                </div>
                <div className="flex flex-col mt-8 text-[#ADB7BE]">
                    <h1 className="lg:text-2xl  text-white">Is this YouTube Video Downloader Compatible with All Devices?


                    </h1>
                    <p className="mt-2 text-sm">Absolutely, Mars Downloader is Online YouTube Downloader so This is work on All types of Devices smoothly such as computers, Mobile, and tablets. You just need a web browser and an internet connection.</p>
                </div>

                <div className="flex flex-col mt-6 text-[#ADB7BE]">
                    <h1 className="lg:text-2xl  text-white">Can I use unlimited times for free?
                    </h1>
                    <p className="mt-2 text-sm">Yes, Mars YouTube Downloader offers to convert and download unlimited Youtube videos and Audio 100 Free of cost and you don't have to pay for anything.</p>
                </div>
            </div>
        </div>
    )
}

export default FAQsection