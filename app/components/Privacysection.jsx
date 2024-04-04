"use client";
import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Link from 'next/link'

const PrivacyPage = () => {
    const [showProgress, setShowProgress] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowProgress(false);
        }, 700);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div >
            {showProgress && (
                <div className="flex justify-center items-center h-screen">
                    <CircularProgress sx={{ color: 'white', animationDuration: '650ms' }} size={200} />
                </div>
            )}
            {!showProgress && <FromComponent />}
        </div>
    );
};






const FromComponent = () => {

    return (
        <div>
            <div className="bg-black w-full h-full">
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-96 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
                    <div class="relative z-10 flex items-center justify-center w-full h-[100px] sm:h-[100px] lg:h-[100px]">
                        <div class="absolute inset-0 w-full h-full bg-gradient-to-tl from-transparent to-red-500 sm:bg-gradient-radial sm:from-red-500 sm:to-transparent lg:bg-gradient-radial lg:from-red-500 lg:to-transparent blur-2xl rounded-full"></div>
                    </div>

                    <div className="flex flex-col justify-center text-justify text-sm text-white">
                        <h1 className="text-5xl">Privacy-Policy</h1>
                        <p className="mt-12">
                            This Privacy Policy explains how we collect, use and share your personal information while you use the Service. By using the Service you agree to the collection and use of your personal information in accordance with the Privacy Policy. This Privacy Policy forms part of our Terms of Service. We will review and may update this Privacy Policy from time to time. Any changes to this Privacy Policy will become effective when we post the revised Privacy Policy on this page.                   </p>

                        <div className="flex flex-col mt-20  text-[#ADB7BE]">
                            <h1 className="text-2xl  text-white">1. Data We Collect</h1>
                            <p className="mt-2">The information we collect can be generally placed in following categories: data on how you use our Service and aggregate data on content you engage with. We may use this information to personalize and improve our services, to fulfill your requests and to analyze how you use our Service. We may provide this information to our partners, so that they, too, can provide you with an optimal experience, but we never disclose information to a partner in a manner that would identify you personally.

                                Unless stated otherwise in this Privacy Policy, the personal data that you provide us will only be stored for as long as it is necessary for us to fulfill our obligations in respect of the provision of the Service. We processes your personal data only if you have provided consent to the processing of such data; or processing of the personal data is necessary for the execution of the agreement with the you; or the relevant personal data are made publicly available and are in the public domain; or the processing of the personal data should be carried out in accordance with the requirements of applicable law, a resolution of a court or a competent state or municipal authority.

                                We take technical, organizational and other measures or ensure their adoption to protect your personal data from unauthorized or accidental access, collection, storage, use, transfer, blocking or destruction, as well as from other illegal actions or accidental leaks. A secure HTTPS connection is used, providing a high degree of data security.</p>                     </div>

                        <div className="flex flex-col mt-10  text-[#ADB7BE]">
                            <h1 className="text-2xl  text-white">2. Purpose Of Collection</h1>
                            <p className="mt-2">We use the information we collect about you to analyse the performance of the Service for marketing and strategic development purposes and maintain, improve or modify the Service, target and personalize advertisements that we display on the Service and other websites. We rely on its legitimate interests, described above, to process your data. We may also use information provided by you directly to us in order to correspond with you and to address any issues you raise about the Service. We do not collect or process any special categories of personal data. We do not undertake automated decision making or profiling on the data which are provided to us.</p>
                        </div>




                        <div className="flex flex-col mt-10  text-[#ADB7BE]">
                            <h1 className="text-2xl  text-white">3. Use Of Cookies</h1>
                            <p className="mt-2">We use cookies and similar technologies like web beacons, pixel tags, or local shared objects (“flash cookies”), to deliver, measure, and improve the Service in various ways. A cookie is a small text file that identifies your computer on our server. Cookies in themselves do not identify the individual user, only the computer being used. Cookies are not used to gather personal information. You may, at any time, configure his computer to accept all cookies, to notify him when a cookie is issued, and to reject the reception of any cookies. The way to do this depends on the web browser being used (please consult the “Help” function of your browser). You may choose to decline all cookies on your computer, but if you do choose to decline cookies, then you may be limited to certain areas of the Service. We also work with a number of analytics partners, who use cookies and similar technologies to help us analyze how users use the Service. By using our Service you agree to our use of cookies.</p>
                        </div>



                        <div className="flex flex-col mt-10  text-[#ADB7BE]">
                            <h1 className="text-2xl  text-white">4. Children's Protection</h1>
                            <p className="mt-2">If we learn that we’ve collected personal data from a child, we will take reasonable steps to delete it. Parents or legal guardians who believe that we may have collected personal data from a child can submit a request that it be removed, please contact us directly at contact@marsyoutube.com.
                            </p>
                        </div>




                        <div className="flex flex-col mt-10  text-[#ADB7BE]">
                            <h1 className="text-2xl  text-white">5. Parties we may share your data with</h1>
                            <p className="mt-2">We may share your personal data with our affiliates which may access your personal data to help us develop, maintain and provide our Service and help manage our customer relationships and service providers provide us support for the Service. We may share certain information such as your location, browser and cookie data and other data relating to your use of the Service with our business partners to deliver personalized advertisements that may be of interest to you. We may also share non-personal data with interested third parties to help them understand the usage patterns for certain services or conduct independent research based on such anonymous usage data. Within our Service, there may be links to third-party websites or applications. We are not responsible for the content or privacy compliance of third party websites or applications. You should check those websites or applications for their privacy statements and applicable terms.</p>
                        </div>





                        <div className="flex flex-col mt-10  text-[#ADB7BE]">
                            <h1 className="text-2xl text-white">6. Rights under GDPR</h1>
                            <p className="mt-2">If you reside in the EEA under the General Data Protection Regulation (“GDPR”) you have rights to have access to your personal information and ask us to rectify, erase and restrict the use of your personal information. You also have rights to object to your personal information being used, to ask for the transfer of personal information you have made available to us and to withdraw consent to the use of your personal information, the right to restrict our use of information that constitutes your personal data for marketing purposes and lodge a complaint or direct questions to the data protection authority. In the event your personal information is transferred, stored or processed outside of the EEA, we will take all steps reasonably necessary to ensure that your personal information is treated securely and in accordance with this Privacy Policy and GDPR.</p>
                        </div>




                        <div className="flex flex-col mt-10 text-[#ADB7BE]">
                            <h1 className="text-2xl text-white">7. Rights under CCPA</h1>
                            <p className="mt-2">The California Consumer Privacy Act (“CCPA”) provides additional rights to California residents to know, delete and opt-out, and requires businesses collecting or disclosing personal information to provide notices and means to exercise rights. We do not generally sell information as the term “sell” is traditionally understood. To the extent “sale” under the CCPA is interpreted to include the activities set out in this Privacy Policy, we will comply with applicable law as to such activity. You have the right to know certain details about our data practices and the right to delete the personal information we have collected from you.</p>
                        </div>




                        <div className="flex flex-col mt-10 text-[#ADB7BE]">
                            <h1 className="text-2xl text-white">8. Contact information</h1>
                            <p className="mt-2">If you would like to exercise your rights, please send your request at contact@marsyoutube.com. In the request, please specify which right you are seeking to exercise and the scope of the request. This email may also be used in case you have any questions regarding your personal data use or about this Privacy Policy.</p>
                        </div>


                        <div className="text-1xl flex flex-col mt-5">
                            <h1>Effective April 1, 2024</h1>
                        </div>


                    </div>


                    <section className=''>
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
                </div>

            </div>


        </div>
    )
}

export default PrivacyPage