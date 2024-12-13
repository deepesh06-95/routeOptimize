import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex
                        items-center justify-center
                        bg-black bg-opacity-50">
            <div className="bg-white rounded-lg
                            shadow-lg p-6 max-w-md
                            w-full relative overflow-y-auto max-h-[75vh] w-[85vw] dark:bg-boxdark">
                <button
                    className="absolute top-2 right-2
                               text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    &#x2715; {/* Close button */}
                </button>
                {children}
            </div>
        </div >
    );
};

const AlertModal = ({ isOpen, onClose, handleStatus, selectedVisit }) => {
    const [selectedRadio, setSelectedRadio] = useState("")
    const handleChange = (e) => {
        console.log("eee", e.target.value)
        setSelectedRadio(e.target.value)
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="grid grid-cols-1 gap-9">

                <div className="flex flex-col gap-9">
                    {/* <!-- Contact Form --> */}
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Feedback Form
                            </h3>
                        </div>
                        <div className='p-2'>
                            <h3 className="font-medium text-black dark:text-white mb-4">
                                Have you met the HCP?
                            </h3>
                            <div className="flex items-center mb-4">
                                <input checked={selectedRadio === "Yes"} id="default-radio-1" type="radio" value="Yes" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={handleChange} />
                                <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input checked={selectedRadio === "No"} id="default-radio-2" type="radio" value="No" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={handleChange} />
                                <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                            </div>
                            {/* <div className="flex items-center">
                                <input checked={selectedRadio === "Others"} id="default-radio-2" type="radio" value="Others" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={handleChange} />
                                <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Others</label>
                            </div> */}
                            {selectedRadio === "Yes" ?
                                <form action="#">
                                    <div className="px-6.5">
                                        <div className="mb-4.5">
                                            <div className="w-full">
                                                <label className="mb-2.5 block text-black dark:text-white">
                                                    How many brands were promoted during the visit?
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter No. of Brands"
                                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                                />

                                            </div>
                                        </div>
                                        <div className="mb-4.5">

                                            <div className="w-full">
                                                <label className="mb-2.5 block text-black dark:text-white">
                                                    What positives did you take away from this meeting?
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter here"
                                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                                />
                                            </div>
                                        </div>

                                        <div className="mb-4.5">
                                            <label className="mb-2.5 block text-black dark:text-white">
                                                Did the HCP show interest in any specific brand or product? <span className="text-meta-1">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter here"
                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                            />
                                        </div>

                                        <div className="mb-4.5">
                                            <label className="mb-2.5 block text-black dark:text-white">
                                                Is follow-up required?
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter here"
                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                            />
                                        </div>

                                        <div className="mb-6">
                                            <label className="mb-2.5 block text-black dark:text-white">
                                                Any additional comments?
                                            </label>
                                            <textarea
                                                rows={3}
                                                placeholder="Type your comments"
                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                            ></textarea>
                                        </div>
                                    </div>
                                </form> : null}

                            {selectedRadio === "No" ?
                                <form action="#">
                                    <div className="p-6.5">
                                        <div className="mb-4.5">
                                            <div className="w-full">
                                                <label className="mb-2.5 block text-black dark:text-white">
                                                    Reason for not meeting the HCP
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Reason"
                                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-4.5">
                                            <div className="w-full">
                                                <label className="mb-2.5 block text-black dark:text-white">
                                                    Was the HCP informed about the visit?
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter here"
                                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                                />
                                            </div>
                                        </div>

                                        <div className="mb-4.5">
                                            <label className="mb-2.5 block text-black dark:text-white">
                                                Next steps planned for this HCP? <span className="text-meta-1">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter here"
                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                            />
                                        </div>

                                        <div className="mb-4.5">
                                            <label className="mb-2.5 block text-black dark:text-white">
                                                Any challenges faced during this visit?
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter here"
                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                            />
                                        </div>

                                        <div className="mb-6">
                                            <label className="mb-2.5 block text-black dark:text-white">
                                                Any additional comments?
                                            </label>
                                            <textarea
                                                rows={3}
                                                placeholder="Type your comments"
                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                            ></textarea>
                                        </div>
                                    </div>
                                </form> : null}
                        </div>
                    </div>
                </div>


            </div>
            <button
                className="mt-4 px-4 py-2
                           bg-blue-500 text-white
                           rounded-lg mr-4"
                onClick={() => {
                    handleStatus(selectedRadio === "Yes" ? "done" : "cancel", selectedVisit)
                }}
            >
                Save
            </button>
            <button
                className="mt-4 px-4 py-2
                           bg-blue-500 text-white
                           rounded-lg"
                onClick={onClose}
            >
                OK
            </button>
        </Modal>
    );
};

export default AlertModal;