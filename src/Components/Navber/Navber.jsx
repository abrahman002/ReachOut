import React from 'react';
import { AiOutlineLeft } from "react-icons/ai";
import './navber.css'

const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                    <img src="https://i.ibb.co/JRgR0gx/Logo.png" alt="" />
                </div>
                <div className="navbar-start hidden lg:flex items-center ">
                    <div className='text-md mr-3 left-icon'>
                        <AiOutlineLeft />
                    </div>
                    <h1>Dashboard</h1>
                </div>
                <div className="navbar-end gap-5">
                    <div className='hidden lg:flex gap-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 6L13.434 8.77725L16.5 9.22275L14.25 11.25L15 14.25L12 12.5625L9 14.25L9.75 11.25L7.5 9.22275L10.65 8.77725L12 6Z" fill="#0C579B" />
                            <path d="M13.6761 21.8455C13.4697 22.2066 13.0092 22.3313 12.6488 22.1237C12.2901 21.9171 12.1661 21.4593 12.3715 21.0999L15 16.5H19.5C19.6971 16.5003 19.8923 16.4617 20.0744 16.3864C20.2565 16.3111 20.422 16.2007 20.5613 16.0613C20.7007 15.922 20.8111 15.7565 20.8864 15.5744C20.9617 15.3923 21.0003 15.1971 21 15V6C21.0003 5.80293 20.9617 5.60775 20.8864 5.42562C20.8111 5.2435 20.7007 5.07803 20.5613 4.93868C20.422 4.79933 20.2565 4.68885 20.0744 4.61358C19.8923 4.5383 19.6971 4.4997 19.5 4.5H4.5C4.30293 4.4997 4.10775 4.5383 3.92562 4.61358C3.7435 4.68885 3.57803 4.79933 3.43868 4.93868C3.29933 5.07803 3.18885 5.2435 3.11358 5.42562C3.0383 5.60775 2.9997 5.80293 3 6V15C2.9997 15.1971 3.0383 15.3923 3.11358 15.5744C3.18885 15.7565 3.29933 15.922 3.43868 16.0613C3.57803 16.2007 3.7435 16.3111 3.92562 16.3864C4.10775 16.4617 4.30293 16.5003 4.5 16.5H10.5C10.9142 16.5 11.25 16.8358 11.25 17.25C11.25 17.6642 10.9142 18 10.5 18H4.5C3.70435 18 2.94129 17.6839 2.37868 17.1213C1.81607 16.5587 1.5 15.7956 1.5 15V6C1.4999 5.60601 1.57743 5.21585 1.72816 4.85183C1.87889 4.48781 2.09986 4.15706 2.37846 3.87846C2.65706 3.59986 2.98781 3.37889 3.35183 3.22816C3.71585 3.07743 4.10601 2.9999 4.5 3H19.5C19.894 2.9999 20.2841 3.07743 20.6482 3.22816C21.0122 3.37889 21.3429 3.59986 21.6215 3.87846C21.9001 4.15706 22.1211 4.48781 22.2718 4.85183C22.4226 5.21585 22.5001 5.60601 22.5 6V15C22.5 15.7956 22.1839 16.5587 21.6213 17.1213C21.0587 17.6839 20.2956 18 19.5 18H15.8738L13.6761 21.8455Z" fill="#23B574" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M13.73 21C13.5544 21.3033 13.3021 21.5552 12.9985 21.7302C12.6949 21.9053 12.3505 21.9974 12 21.9974C11.6495 21.9974 11.3052 21.9053 11.0015 21.7302C10.6979 21.5552 10.4456 21.3033 10.27 21M19 8C19.7957 8 20.5587 7.68393 21.1213 7.12132C21.6839 6.55871 22 5.79565 22 5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7957 2 19 2C18.2044 2 17.4413 2.31607 16.8787 2.87868C16.3161 3.44129 16 4.20435 16 5C16 5.79565 16.3161 6.55871 16.8787 7.12132C17.4413 7.68393 18.2044 8 19 8Z" stroke="#0C579B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.134 11C18.715 16.375 21 18 21 18H3C3 18 6 15.867 6 8.4C6 6.703 6.632 5.075 7.757 3.875C8.883 2.675 10.41 2 12 2C12.337 2 12.672 2.03 13 2.09" stroke="#23B574" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avata">
                        <div className="w-10 rounded-full ">
                            <img src="data:image/png;base64,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" />
                        </div>
                    </label>
                    <div className='text-xs'>
                        <h1>Malida Lyne</h1>
                        <p>Recruiter</p>
                    </div>
                    <div className='hidden lg:flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                            <g clip-path="url(#clip0_9745_2239)">
                                <path d="M8 6.99999C7.93442 7.00079 7.86941 6.98786 7.80913 6.96202C7.74885 6.93619 7.69465 6.89803 7.65 6.84999L3.15 2.34999C2.95 2.14999 2.95 1.83999 3.15 1.63999C3.35 1.43999 3.66 1.43999 3.86 1.63999L8.01 5.78999L12.15 1.64999C12.35 1.44999 12.66 1.44999 12.86 1.64999C13.06 1.84999 13.06 2.15999 12.86 2.35999L8.36 6.85999C8.26 6.95999 8.13 7.00999 8.01 7.00999L8 6.99999Z" fill="#556571" />
                            </g>
                            <defs>
                                <clipPath id="clip0_9745_2239">
                                    <rect width="16" height="7" fill="white" transform="translate(0 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;