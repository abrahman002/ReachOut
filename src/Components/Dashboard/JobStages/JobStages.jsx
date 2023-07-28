import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Initial',
        pv: 1750,
       
    },
    {
        name: 'Intake',
        pv: 1500,
        
    },
    {
        name: 'Sourcing',
        pv: 1200,
        
    },
    {
        name: 'Interview',
        pv: 1100,
        
    },
    {
        name: 'Offer',
        pv: 700,
        
    },
    // Add more data here...
];

const JobStages = () => {

    return (
        <div>
            <h1 className='text-md mt-5 mb-5 ml-3'>Job Stages</h1>
            <div className='bg-white lg:h-60 w-[80%] lg:w-full  p-2  rounded-lg lg:ml-0 ml-8'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={50}
                        height={50}
                        data={data}
                        margin={{
                            top: 5,
                            right: 5,
                            left: 5,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>

            </div>
        </div>
    );
};

export default JobStages;