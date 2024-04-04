
"use client";

import Link from 'next/link'
import React from 'react'

const Footersection = () => {
    return (
        <section className='mt-24'>
            <div>

                <div>© 2024 YouTube Downloader, made by MarsDownloader.
                </div>
                <div>
                    <div className='lg:inline-block'>
                        <Link href="/terms" className='text-neutral-400 hover:underline text-sm '>Terms of Service</Link>
                    </div>
                    <div className='lg:inline-block lg:ml-3'>
                        <Link href="/privacy" className='hover:underline text-sm text-neutral-400 '>Privacy Policy</Link>
                    </div>
                    <div className='lg:inline-block lg:ml-3'>
                        <Link href="/about" className='hover:underline text-sm text-neutral-400 '>About Us</Link>
                    </div>
                    <div className='lg:inline-block lg:ml-3'>
                        <Link href="/contact" className='hover:underline text-sm text-neutral-400 '>Contact Us</Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footersection