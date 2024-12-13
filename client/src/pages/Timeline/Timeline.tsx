
import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import AlertModal from './Popup';
import { BounceLoader } from 'react-spinners';

const Timeline = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedVisit, setSelectedVisit] = useState(null)

    const [data, setData] = useState([{
        time: "12 December 2024 10 AM",
        doctorName: "Doctor1",
        hospitalName: "Hospital1",
        address: "",
        location: "",
        status: "pending"
    },
    {
        time: "12 December 2024 12 PM",
        doctorName: "Doctor2",
        hospitalName: "Hospital2",
        address: "",
        location: "",
        status: "pending"
    },
    {
        time: "12 December 2024 3 PM",
        doctorName: "Doctor3",
        hospitalName: "Hospital3",
        address: "",
        location: "",
        status: "pending"
    }
        ,
    {
        time: "12 December 2024 5 PM",
        doctorName: "Doctor4",
        hospitalName: "Hospital4",
        address: "",
        location: "",
        status: "pending"
    }]);

    const handleStatus = (status, i) => {
        let arr = data;
        arr[i].status = status;
        setData([...arr])
        setModalOpen(false)
    }
    return (
        <>
            <h3 className="ml-8 text-lg font-semibold text-gray-900 dark:text-white mb-4">Time Sheet for today</h3>
            <div className="grid grid-cols-1 gap-9 ml-4">
                <ol className="relative border-s border-gray-400 dark:border-gray-700">
                    {data.map((e, i) =>
                        <li className={`ms-4 ${i !== data.length - 1 ? "mb-10" : null}`}>
                            <div className={`absolute ${(i !== 0 && data[i - 1].status === "pending") ? " mt-1.5 -start-1.5 w-3 h-3 bg-gray-400 rounded-full border border-white dark:border-gray-900 dark:bg-gray-700" : "-start-3"}`}>
                                {(i === 0 && data[i].status === "pending") || (i !== 0 && data[i - 1].status !== "pending" && data[i].status === "pending") ? <BounceLoader color={"#a47e1b"} size={20} /> : data[i].status === "done" ?
                                    <svg fill="#568203" className='w-6 h-6' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z" /></svg> : data[i].status === "cancel" ?
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#CC0000" className='w-6 h-6' viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" /></svg> : null}
                            </div>
                            <div className="ml-2 items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                                <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-300">{e.time}</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{e.doctorName}</h3>
                                <h4 className="text-md font-medium text-gray-900 dark:text-white">{e.hospitalName}</h4>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{e.address}</p>
                                <div className='flex items-center justify-between w-full xl:w-36'>
                                    <a href="https://www.google.com/maps/dir/37.7749,-122.4194/36.7783,-119.4179/34.0522,-118.2437" target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Map
                                        <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg></a>
                                    {(i === 0 && e.status === "pending") || (i !== 0 && e.status === "pending" && data[i - 1].status !== "pending") ?
                                        <button className="inline-flex items-center px-4 py-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700" onClick={() => {
                                            setModalOpen(true);
                                            setSelectedVisit(i);
                                        }}><svg className="w-3 h-3" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 14.5C13.1046 14.5 14 13.6046 14 12.5C14 11.3954 13.1046 10.5 12 10.5C10.8954 10.5 10 11.3954 10 12.5C10 13.6046 10.8954 14.5 12 14.5Z" stroke="currentColor" stroke-miterlimit="10" />
                                                <path d="M19.5 14.5C20.6046 14.5 21.5 13.6046 21.5 12.5C21.5 11.3954 20.6046 10.5 19.5 10.5C18.3954 10.5 17.5 11.3954 17.5 12.5C17.5 13.6046 18.3954 14.5 19.5 14.5Z" stroke="currentColor" stroke-miterlimit="10" />
                                                <path d="M4.5 14.5C5.60457 14.5 6.5 13.6046 6.5 12.5C6.5 11.3954 5.60457 10.5 4.5 10.5C3.39543 10.5 2.5 11.3954 2.5 12.5C2.5 13.6046 3.39543 14.5 4.5 14.5Z" stroke="currentColor" stroke-miterlimit="10" />
                                            </svg>
                                        </button> : null}
                                </div>
                            </div>
                        </li>)}
                </ol>
            </div>
            <AlertModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} handleStatus={handleStatus} selectedVisit={selectedVisit} />
        </>
    );
};

export default Timeline;
