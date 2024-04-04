

"use client"

import Link from 'next/link'

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
                        <h1 className="text-5xl text-left">Terms Of Service</h1>
                        <p className="mt-12  text-white">
                            Please review these terms and conditions of use carefully before using our website and services. This document states the terms and conditions (“Terms”) upon which marsyoutube.com (“we” or “us”) will provide service to you on its website, applications and related services (collectively, the “Service”). As used in this document, the terms “you” or “your” refers to you, any entity you represent, your or its representatives, successors, assigns and affiliates, and any of your or their devices.

                            By visiting, accessing, using, downloading, copying, installing and/or joining (collectively “using”) the Service, you express your understanding and acceptance of these Terms. We may, in our sole discretion, modify or update these Terms from time to time, and you should review this page periodically. Your continued use of the Service after any such change means your acceptance of the new Terms. If you do not agree with the Terms, do not use or access (or continue to access) the Service. We retain a separate Privacy Policy and your assent to these Terms also signifies that you have read and understand our Privacy Policy.
                        </p>

                        <div className="flex flex-col mt-20 text-[#ADB7BE]">
                            <h1 className="text-2xl  text-white">1. General Terms</h1>
                            <p className="mt-2">You may use the Service only if you can form a binding contract with us, and only in compliance with these Terms and all applicable local, state, national, and international laws, rules, and regulations. By using the Service, you represent and warrant that you have the full right, power and authority to enter into these Terms and to fully perform all of your obligations hereunder.

                                You must be at least eighteen (18) years of age to use the Service. If you are under eighteen (18) years old, you are not permitted to use the Service and you must immediately cease using the Service, regardless of parental authorization. Any use or access to the Service by anyone under the permitted age is strictly prohibited.

                                Use of the Service is not permitted where prohibited by law. All or part of the Service may not be available to Users from certain countries for technical reasons or due to local regulations. We may, without prior notice, change the Service, stop providing the Service or features of the Service, or create usage limits for the Service.

                                You may only access and use the Service for your personal and noncommercial use. The grant to use the Service is terminable by us at will for any reason and at our sole discretion, with or without prior notice. You agree not to use or attempt to use the Service after said termination. Upon termination, the grant to use the Service shall terminate, but all other portions of these Terms shall survive.

                                In addition to the terms set forth herein, your use of the Service shall be limited by the rules, features and technical restrictions of the Service, which may change from time to time in our sole discretion. You shall not attempt to use the Service in any manner in which the Service is not intended or permitted to be used.

                                You acknowledge that from time to time the Service may automatically check for and install updates on your device. You agree and accept that the Service may make updates without your confirmation or consent. Any updates to the Service will be deemed part of the Service. However, we have no obligation to provide you with any updates to the Service.</p>
                        </div>

                        <div className="flex flex-col mt-10 text-[#ADB7BE]">
                            <h1 className="text-2xl  text-white">2. Intellectual Property</h1>
                            <p className="mt-2">All rights, title, and interest in and to the Service, including our existing or future applications, our APIs, databases and other parts of the Service are owned by us and/or licensed to us. Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to use our Service. We reserve all rights not expressly granted herein in the Service and may terminate this license at any time for any reason or no reason.

                                You understand and acknowledge that the Service does not have any control over nor are we responsible for any third party content. Third parties retain all rights to third party content and therefore are responsible for protecting their rights as they deem necessary. It is your responsibility to make sure that you have all required permissions to access and download third party content. Except as otherwise explicitly permitted, you agree not to copy, modify, publish, transmit, distribute, participate in the transfer or sale of, create derivative works of, or in any other way exploit, in whole or in part, any parts of the Service and / or third party content.

                                The content that we deliver to you is only accessible per your request and a copy of such content is not maintained on our system for longer than is reasonably necessary for you to download the copy. We do not sell access or subscription services to copyrighted works; own or operate servers which store access to copyrighted material; share or communicate copyrighted material to the public; provide access to privately available media or media available on payment basis.</p>
                        </div>




                        <div className="flex flex-col mt-10 text-[#ADB7BE]">
                            <h1 className="text-2xl  text-white">3. Your Representations</h1>
                            <p className="mt-2">You agree that while using our Service you shall not download, upload, submit, create, transmit, modify, or otherwise make available materials that:

                                i. are copyrighted, protected by trade secret or trademark laws, or otherwise subject to third party proprietary rights, including privacy and publicity rights, unless you are the owner of such rights, have explicit permission from the rightful owner to submit the material and to grant us all of the license rights granted herein, or have other legal and effective basis to the material and to grant us all of the license rights granted herein;

                                ii. are obscene, vulgar, illegal, unlawful, defamatory, fraudulent, libelous, harmful, harassing, abusive, threatening, invasive of privacy or publicity rights, hateful, racially or ethnically offensive, inflammatory, or otherwise inappropriate as decided by us in our sole discretion;

                                iii. depict illegal activities, promotes or depicts physical harm or injury against any group or individual, or promotes or depicts any act of cruelty to animals;

                                iv. impersonate any person or entity or otherwise misrepresents you in any way, including creating a false identity;

                                v. would constitute, encourage or provide instructions for a criminal offense, a violation of the rights of any party, or that would otherwise create liability or violate any local, state, national or international law; or

                                vi. are unsolicited or unauthorized advertising, promotion, “spam” or any other form of solicitation.

                                You shall be solely responsible for any and all consequences of uploading, downloading, submitting, modifying, transmitting, creating or otherwise making available materials, including any sound files, video files, or photographs, in connection with your use of the Service.

                                You represent and warrant that you have the right to upload, download, modify, access, transmit, create or otherwise make available materials using the Service, and that your use of the Service will not infringe upon any other party’s rights or your contractual obligations to other parties.

                                Without limiting the other indemnification provisions herein, you agree to defend us against any claim, demand, suit or proceeding made or brought against us by a third-party alleging that your use of the Service in violation of these Terms infringes or misappropriate the intellectual property rights of any third-party or violates applicable law and you shall indemnify us for any and all damages against us.</p>
                        </div>



                        <div className="flex flex-col mt-10 text-[#ADB7BE]">
                            <h1 className="text-2xl  text-white">4. Third Party Links</h1>
                            <p className="mt-2">The Service may contain links to third party websites, advertisers, services, special offers or other activities that are not owned or controlled by us. We don’t endorse or assume any responsibility for any such third party sites, information, materials, products, or services. If you access any third party website, service, or content from the Service, you do so at your own risk and you agree that we have no liability arising from your use of or access to any third party website, service, or content.

                                You understand and acknowledge that using our Service you may be exposed to content that is inaccurate, offensive, indecent or otherwise objectionable or may cause harm to your computer systems and, without limiting the other limitation of liability provisions herein, you agree to waive, and hereby do waive, any legal or equitable rights or remedies you may have against us with respect thereto. You understand and acknowledge that we may at our sole discretion refuse to publish, remove, or block access to any content for any reason, or for no reason at all, with or without notice.

                            </p>
                        </div>




                        <div className="flex flex-col mt-10 text-[#ADB7BE]">
                            <h1 className="text-2xl  text-white">5. Use of the Service</h1>
                            <p className="mt-2">You acknowledge that the Service is a general-purpose tool. Specifically, but without limitation, the Service allows you to access media on multiple other platforms and to, among other things, download and/or convert that media. The Service may only be used in accordance with law. We do not encourage, condone, induce, or allow any use of the Service that may be in violation of any law. We explicitly prohibit the use of the Service to download any content in violation of copyright laws.

                                You may only use the Service consistent with these Terms and any and all agreements under which the Service is provided to you (including, for example, any app store agreement). You agree to abide by all applicable local, state, national and international laws and regulations. You agree that you are solely responsible for all acts and omissions that occur as a result of your use of the Service.

                                You agree not to use the Service for any unlawful purpose or in any way that is prohibited by these Terms. You agree not to engage in any of the following prohibited activities:

                                (1) copying, distributing, or disclosing any part of the Service, including without limitation by any automated or non-automated “scraping”;

                                (2) using any automated system, including without limitation “robots,” “spiders,” “offline readers,” etc., to access the Service;

                                (3) transmitting spam, chain letters, or other unsolicited email;

                                (4) attempting to interfere with, compromise the system integrity or security or decipher any transmissions to or from the servers running the Service;

                                (5) taking any action that imposes, or may impose at our sole discretion an unreasonable or disproportionately large load on our infrastructure;

                                (6) uploading invalid data, viruses, worms, or other software agents through the Service;

                                (7) using the Service for any commercial solicitation purposes;

                                (8) interfering with the proper working of the Service;

                                (9) accessing any content through any technology or means other than those provided or authorized by the Service;

                                (10) bypassing the measures we may use to prevent or restrict access to the Service;

                                (11) copying, imitating or using, in whole or in part of the Service without the prior written consent of the Service;

                                (12) framing or hotlinking to the Service or any content other than your own without the prior written consent of the Service.

                                We reserve the right to take appropriate action against any user for any unauthorized use of the Service, including civil, criminal and injunctive redress and the termination of any user’s use of the Service.</p>
                        </div>





                        <div className="flex flex-col mt-10 text-[#ADB7BE]">
                            <h1 className="text-2xl  text-white">6. Copyright Claims</h1>
                            <p className="mt-2">It is our policy to respond to notices of alleged copyright infringement that comply with applicable international intellectual property law, including, the Digital Millennium Copyright Act (“DMCA”). If you believe that any of your copyrighted material is being infringed, please let us know by submitting your claim to contact@marsyoutube.com. To submit your claim successfully, you must provide us with the following information:

                                i. Identification of the copyrighted work that is believed to be infringed. Please describe the work and, where possible, include a copy or the location (e.g., a URL) of an authorized version of the work;

                                ii. Identification of the material that is believed to be infringing and its location or, for search results, identification of the reference or link to material or activity claimed to be infringing. Please describe the material and provide a URL or any other pertinent information that will allow us to locate the material on the Service or on the Internet;

                                iii. Information that will allow us to contact you, including your address, telephone number and, if available, your e-mail address;

                                iv. A statement that you have a good faith belief that the use of the material complained of is not authorized by you, your agent or the law;

                                v. A statement that the information in the notification is accurate and that under penalty of perjury that you are the owner or are authorized to act on behalf of the owner of the work that is allegedly infringed; and

                                vi. A physical or electronic signature from the copyright holder or an authorized representative.</p>
                        </div>




                        <div className="flex flex-col mt-10 text-[#ADB7BE]">
                            <h1 className="text-2xl  text-white">7. Limitation of Liability and No Warranty.</h1>
                            <p className="mt-2">The Service is provided on “as is” and “as available” basis. We make no representations or warranties about the suitability, reliability, availability, timeliness, security, lack of errors, or accuracy of the Service, and expressly disclaim any warranties or conditions, including the implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. We make no warranty that you will obtain specific results from use of the Service. Your use of the Service is entirely at your own risk.

                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE, INCLUDING WITHOUT LIMITATION, ANY DEFAMATORY, OFFENSIVE OR ILLEGAL CONDUCT OF OTHER USERS OR THIRD PARTIES; OR (C) UNAUTHORIZED ACCESS, USE OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT. WITHOUT LIMITING THE FOREGOING, IN NO CASE SHALL THE MAXIMUM LIABILITY OF US ARISING FROM OR RELATING TO YOUR USE OF THE SERVICE EXCEED $100.</p>
                        </div>




                        <div className="flex flex-col mt-10 text-[#ADB7BE]">
                            <h1 className="text-2xl  text-white">8. Indemnity.</h1>
                            <p className="mt-2">You agree to defend, indemnify and hold harmless the Service and its subsidiaries, agents, licensors, managers, and other affiliated companies, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses arising from: (1) your use of and access to the Service, including any data or content transmitted or received by you; (2) your violation of any part of this Terms, including without limitation your breach of any of the representations and warranties above; (3) your violation of any third-party right, applicable law, rule, or regulation. We will not bear responsibility for any damages, claims, liabilities, losses and other expenses, whether or not a lawsuit or other proceeding is filed, that arise out of the User's breach of these Terms. To the maximum extent permitted by the applicable law, you and we agree not under any circumstances to bring or participate in a class or representative action, private attorney general action or collective arbitration.</p>
                        </div>




                        <div className="flex flex-col mt-10 text-[#ADB7BE]">
                            <h1 className="text-2xl  text-white">9. Miscellaneous.</h1>
                            <p className="mt-2">These Terms, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by us without restriction. Any attempted transfer or assignment in violation hereof shall be null and void. If any provision of these Terms is deemed invalid, then that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions of these Terms will remain in full force and effect. No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any other term, and our failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision. Only the English version of this document has legal effect. Any translations of this document to other languages are provided for your convenience only. In case of any issues related to these Terms, please use the e-mail address contact@marsyoutube.com to contact us.</p>
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

export default TermsPage