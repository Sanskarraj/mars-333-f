"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';


const TermsPage = () => {
    const [showProgress, setShowProgress] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowProgress(false);
        }, 700);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {showProgress ? (
                <div className="flex justify-center items-center h-screen">
                    <CircularProgress sx={{ color: 'white', animationDuration: '650ms' }} size={200} />
                </div>
            ) : (
                <FromComponent />
            )}
        </div>
    );
};

const FromComponent = () => {
    return (
        <div>
            <div className="bg-black w-full h-full">
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-96 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
                    <div className="relative z-10 flex items-center justify-center w-full h-[100px] sm:h-[100px] lg:h-[100px]">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-tl from-transparent to-red-100 sm:bg-gradient-radial sm:from-red-100 sm:to-transparent lg:bg-gradient-radial lg:from-red-100 lg:to-transparent blur-3xl rounded-full"></div>
                    </div>
                    <div className="flex flex-col gap-12 justify-center text-white">
                        <h1 className="text-4xl">Contact US</h1>
                        <p>If you have any questions, complaints, or claims with respect to the our Services, please send us a message to: <a className='underline hover:text-red-400' href="mailto:contact@marsyoutube.com">contact@marsyoutube.com</a></p>
                    </div>
                    <section>
                        <div>
                            <div>© 2024 YouTube Downloader, made by MarsDownloader.</div>
                            <div>
                                <div className="lg:inline-block">
                                    <Link href="/terms" className="text-neutral-400 hover:underline text-sm ">Terms of Service</Link>
                                </div>
                                <div className="lg:inline-block lg:ml-3">
                                    <Link href="/privacy" className="hover:underline text-sm text-neutral-400 ">Privacy Policy</Link>
                                </div>
                                <div className="lg:inline-block lg:ml-3">
                                    <Link href="/about" className="hover:underline text-sm text-neutral-400 ">About Us</Link>
                                </div>
                                <div className="lg:inline-block lg:ml-3">
                                    <Link href="/contact" className="hover:underline text-sm text-neutral-400 ">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
