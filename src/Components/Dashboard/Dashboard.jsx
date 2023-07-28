import React from 'react';
import './dashboard.css'
import JobGroup from './JobGroup/JobGroup';
import JobsRatio from './JobsRatio/JobsRatio';
import JobStages from './JobStages/JobStages';
import JobPriorities from './JobPriorities/JobPriorities';


const Dashboard = () => {
    return (
        <div className='p-1'>
            <JobGroup></JobGroup>
            <div className='lg:grid grid-cols-2 gap-1 lg:ml-5'>
                <JobsRatio></JobsRatio>
                <JobStages></JobStages>
            </div>
            <JobPriorities></JobPriorities>
        </div>
    );
};

export default Dashboard;