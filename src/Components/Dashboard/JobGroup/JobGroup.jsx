import React from 'react';

const JobGroup = () => {
    return (
        <div className='lg:grid grid-cols-3  lg:ml-5 ml-10 '>
            <div className='w-60 rounded-md p-5 bg-white mt-5 '>
                <div className='flex gap-5 items-center'>
                    <div>
                        <img src="https://i.ibb.co/Hnh2fxc/solar-suitcase-tag-bold-duotone.png" alt="" />
                    </div>
                    <h1>Total Jobs</h1>
                </div>
                <div className='flex justify-end'>
                    <h1 className='text-blue-600 font-bold'>50</h1>
                </div>
            </div>
            <div className='w-60 rounded-md p-5 bg-white mt-5'>
                <div className='flex gap-5 items-center'>
                    <div>
                        <img src="https://i.ibb.co/wynxGsd/fluent-briefcase-search-24-regular.png" alt="" />
                    </div>
                    <h1>Open Jobs</h1>
                </div>
                <div className='flex justify-end'>
                    <h1 className='text-blue-600 font-bold'>10</h1>
                </div>
            </div>
            <div className='w-60 rounded-md p-5 bg-white mt-5'>
                <div className='flex gap-5 items-center'>
                    <div>
                        <img src="https://i.ibb.co/wynxGsd/fluent-briefcase-search-24-regular.png" alt="" />
                    </div>
                    <h1>Urgent Jobs</h1>
                </div>
                <div className='flex justify-end'>
                    <h1 className='text-blue-600 font-bold'>04</h1>
                </div>
            </div>
        </div>
    );
};

export default JobGroup;