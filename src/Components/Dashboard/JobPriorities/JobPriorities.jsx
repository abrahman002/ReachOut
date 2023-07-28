import React from 'react';
import High from './High';
import Medium from './Medium';
import Low from './Low';
import OnHold from './OnHold';



const JobPriorities = () => {
    return (
        <div className=''>
            <h1 className='text-md mt-5 mb-5 ml-3'>Job Priorities</h1>

            <div className='lg:grid grid-cols-4 gap-2 w-[100%] items-center'>
                <High></High>
                <Medium></Medium>
                <Low></Low>
               <OnHold></OnHold>
            </div>
        </div>

    );
};

export default JobPriorities;
