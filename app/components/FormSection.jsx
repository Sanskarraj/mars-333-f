"use client";
import React, { useState, useRef } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import io from 'socket.io-client'; // Import io object from socket.io-client
import Link from 'next/link'



const ENDPOINT = 'http://192.168.1.10:8000';



const FormSection = () => {
    const scrollToRef = useRef(null);
    const scrollToRefData = useRef(null);
    const scrollToRefPhase = useRef(null);
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [imageData, setImageData] = useState(null);
    const [sTitle, setTitle] = useState(null);
    const [error, setError] = useState(null);
    const [responseData, setResponseData] = useState(null);
    const [bigLoading, setBigLoading] = useState(false);
    const [ID, setID] = useState(null);
    // const [FileDown, setFileDownload] = useState(null);

    const [phases, setPhases] = useState([]);
    const [isExecutionCompleted, setIsExecutionCompleted] = useState(false);
    const [urlError, setURLError] = useState(false);



    // const downloadFile = async () => {
    //     try {
    //         const response = await fetch('http://localhost:4000/download'); // Replace with your actual server URL
    //         const blob = await response.blob();
    //         const url = window.URL.createObjectURL(blob);
    //         const link = document.createElement('a');
    //         link.href = url;
    //         link.setAttribute('download', 'op.mkv');
    //         document.body.appendChild(link);
    //         link.click();
    //         link.parentNode.removeChild(link);
    //     } catch (error) {
    //         console.error('Error downloading file:', error);
    //     }
    // }




    const handleSubmit = async (indexData) => {
        let Fname = '';
        const transports = ["websocket"];
        const clientId = uuidv4();
        const socket = io(ENDPOINT, {
            query: { clientId, indexData },
            transports
        });


        // initiate downlaod code implementation which sends requests to backend download endpoint
        const initiateDownload = async () => {
            // console.log(FileDown);
            console.log("Fname", Fname);
            // setTimeout(() => {
            // const downloadUrl = `${ENDPOINT}/download?Fname=${Fname}`; // Replace with actual download endpoint
            // window.open(`${ENDPOINT}/download?Fname=${Fname}`, '_blank');

            // try {
            //     const response = await axios.get(`${ENDPOINT}/download?Fname=${Fname}`, {
            //         responseType: 'blob', // Important: Set responseType to 'blob' to handle binary data
            //     });
            const downloadUrl = `${ENDPOINT}/download?Fname=${Fname}`; // Replace with actual download endpoint
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = Fname; // Change the filename if needed
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);



            // }, 1000); // 10 seconds delay
        };







        socket.on('phase_executed', ({ phase, indexData }) => {
            setPhases((prevPhases) => [...prevPhases, { phase, indexData }]);
            // scrollToRefPhase.current.scrollIntoView({ behavior: 'smooth' });

        });

        socket.on('execution_completed', () => {
            setIsExecutionCompleted(true);
            socket.disconnect(); // Disconnect socket after execution completion
            initiateDownload();
            setBigLoading(false);

        });


        setPhases([]);
        setIsExecutionCompleted(false);
        setBigLoading(true);
        let avdata = data[indexData].AV;
        let formdata = data[indexData].Format;
        socket.emit('start_execution', { message: url + " " + avdata + "_" + formdata });
        if (parseInt(avdata)) {
            Fname = 'Download ' + clientId + '.' + formdata;
            console.log(Fname);
            // setFileDownload(Fname);
        }
        else {
            Fname = clientId + '.' + 'aac';
            console.log(Fname);
            // setFileDownload(Fname);
        }
        await new Promise(resolve => setTimeout(resolve, 200));
        scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    };



    const handleInputChange = (event) => {
        const link = event.target.value;
        setUrl(link);
        // console.log("hii", url);

        // console.log("qweregerbnebnreibn");
        // fetchData();

    }

    React.useEffect(() => {
        if (url) {
            fetchData();
        }
    }, [url]);


    const removeBlankSpaces = () => {
        // console.log("remove blank spaces ke andar")

        setUrl(url.trim());
    };
    const isValidUrl = () => {
        const youtubeShortenedRegex = /^https:\/\/youtu\.be\//;
        const youtubeShortsRegex = /^https:\/\/(?:www\.)?youtube\.com\/shorts\//;
        const youtubeVideoRegex = /^https:\/\/(?:www\.)?youtube\.com\/watch\?v=/;

        if (youtubeShortenedRegex.test(url) || youtubeShortsRegex.test(url) || youtubeVideoRegex.test(url)) {
            return true;
        }

        return false;
    };




    const handleError = () => {
        // console.log("handle error ke andar")
        setURLError(true);
        // Vibrate the input by adding animation directly in className
        setTimeout(() => {
            setURLError(false);
        }, 1500); // Remove the error state after 1 second
    };



    const fetchData = async () => {
        // console.log("fetch data ke andar")
        removeBlankSpaces();
        setURLError(false); // Reset error state
        if (!isValidUrl()) {
            // console.log("error sapadla")
            handleError();
            setUrl('');
            return;
        }



        setLoading(true);
        setError(null);
        setIsExecutionCompleted(false);
        setPhases([]);
        try {
            await new Promise(resolve => setTimeout(resolve, 100));
            scrollToRefData.current.scrollIntoView({ behavior: 'smooth' });
            setData(null);
            // const response = await fetch(`api/.as?url=${url}`);
            // if (!response.ok) {
            //     throw new Error('Failed to fetch data');
            // }
            // console.log("hii")
            // const requestData = await response.json();
            // setData(requestData.data);


            const response = await axios.get(`${ENDPOINT}/data?url=${url}`);
            // console.log(response)
            // console.log(response.data[0].formatData);

            setData(response.data[0].formatData);
            setImageData(response.data[0].imageUrl);
            setTitle(response.data[0].videoTitle);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            {/* <h1 className='text-center text-4xl font-semibold'>hiii</h1> */}
            <div className='lg:mt-10 flex-col flex items-center'>
                {/* <div className="text-yellow-100">
                    <button className='p-10' onClick={downloadFile}>Download File</button>
                </div> */}
                <input
                    type="text"
                    onChange={handleInputChange}
                    // onBlur={removeBlankSpaces}
                    value={url}
                    name="url"
                    placeholder="Enter youtube video link here..."
                    // style={{ border: `${error ? '1px solid red' : '1px solid #CBD5E0'}`, animation: `${error ? 'vibrate 0.3s ease infinite' : 'none'}` }}
                    ref={scrollToRefData}
                    className={`font-sans w-72 lg:w-1/2 border ${urlError ? 'border-red-500 animate-vibrate' : 'border-slate-200'} rounded-lg py-2 px-3 outline-none	bg-transparent transition-colors duration-300 ${urlError ? 'animate-shake' : ''}`} />
                {urlError && <div style={{ width: '200px', height: '15px', color: 'red', fontSize: '13px' }}>Please check the copied URL.</div>}

                <button
                    onClick={fetchData} disabled={loading}
                    className="mt-2 inline-flex items-center justify-center px-6 font-sans font-semibold tracking-wide text-gray-700 bg-white rounded-lg py-2">
                    {loading ? (
                        <CircularProgress style={{ color: 'black' }} size={24} />
                    ) : (
                        'GO'
                    )}

                </button>
            </div>
            {/* data from backend for indexing */}
            <div className="flex flex-col items-center justify-center text-sm">
                <div className="h-10"></div>
                {loading && <CircularProgress style={{ color: 'white' }} size={80} />}
                {data && (
                    <div>   <div className='p-10'> <img src={`${imageData}`} height={108} width={192} alt="" className='justify-center' />
                        <p className='mt-2 text-xs lg:text-sm'>{sTitle}</p></div>
                        <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>

                            <p className='text-[#ADB7BE] text-sm font-mono lg:font-normal text-center'>Select the Video format to download
                            </p>
                            <div className="underline flex flex-row justify-evenly pb-4 pt-3 font-mono">
                                <div className="ml-5 mr-10">Format</div>
                                <div className="mr-14">Quality</div>
                                <div className="mr-10">Size</div>
                            </div>
                            {data.map((item, index) => (
                                <button key={index}
                                    className='flex flex-row justify-around rounded-lg border border-transparent px-1 py-3 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
                                    onClick={() => handleSubmit(index)} disabled={bigLoading}
                                >
                                    <div style={{ marginRight: '30px' }}> {item.Format}</div>
                                    <div style={{ marginRight: '25px' }}> {item.Quality}</div>
                                    <div>
                                        {item.Size >= 1000 ? `${(item.Size / 1000).toFixed(1)} GB` : `${item.Size} MB`}
                                    </div>
                                    {/* <div>AV: {item.userId}</div> */}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
                {bigLoading && <CircularProgress ref={scrollToRef} className='absolute z-20' style={{ color: 'white', animationDuration: '800ms' }} size={250} />}
                <div className="h-10"></div>
                {phases.length > 0 && bigLoading && (
                    <div>
                        {/* <h3>Execution Phases:</h3> */}
                        <ul ref={scrollToRefPhase}>
                            {phases.map((phase, index) => (
                                <li key={index}>{phase.phase}...</li>
                            ))}
                        </ul>
                        {/* <div>Loading...</div> */}
                    </div>
                )}
                {isExecutionCompleted && (
                    <div>
                        <h3>Execution Completed</h3>
                        {/* Add any completion message or action here */}
                    </div>
                )}
            </div>




            <p className='text-[#ADB7BE] text-center p-10 lg:p-0 text-sm font-mono lg:font-normal'>Secured by AI based malware detector
            </p>
            <div className='justify-center flex flex-col items-center'>
                <div className='lg:inline-block'>
                    <Link href="/terms" className='text-neutral-400 hover:underline text-sm lg:text-white'>Terms of Service</Link>
                </div>
                <div className='lg:inline-block lg:ml-3'>
                    <Link href="/privacy" className='hover:underline text-sm text-neutral-400 lg:text-white'>Privacy Policy</Link>
                </div>
            </div>
        </>
    )
}

export default FormSection