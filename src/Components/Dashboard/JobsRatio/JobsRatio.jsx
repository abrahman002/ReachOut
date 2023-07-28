import React from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';

const data = [
    { name: 'Closed', value: 40 },
    { name: 'Open', value: 10 },
    { name: 'Urgent', value: 4 },
];
const COLORS = ['#EFF4FA', '#0088FE', '#FFBB28'];

const JobsRatio = () => {
    return (
        <div>
            <h1 className='text-md mt-5 mb-5 ml-3'>Jobs Ratio</h1>

            <div className='flex lg:flex-row flex-col items-center bg-white lg:h-60 w-[80%] lg:w-full  p-2  rounded-lg lg:ml-0 ml-8'>

                <div>
                    <PieChart lg:width={200} lg:height={200} width={200} height={200}>
                        <Pie
                            data={data}
                            lg:cx={100}
                            lg:cy={100}
                            innerRadius={80}
                            outerRadius={100}
                            paddingAngle={1}
                            dataKey="value"
                            labelLine={false}
                            label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
                                if (index === 1) {
                                    return (
                                        <text x={cx} y={cy} fill="#000" textAnchor="middle" dominantBaseline="central">
                                            Open {value}
                                        </text>
                                    );
                                } else {
                                    return (
                                        <Label
                                            x={cx}
                                            y={cy}
                                            angle={midAngle}
                                            fill="#000"
                                            textAnchor="middle"
                                            dominantBaseline="central"
                                        >
                                            {data[index].name}
                                        </Label>
                                    );
                                }
                            }}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
                <div className='mt-10 lg:mt-0 items-center ml-5'>
                    <ul>
                        <div className='flex gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                                <circle cx="11" cy="11.5" r="11" fill="#EFF4FA" />
                            </svg>
                            <li>40 Closed Jobs</li>
                        </div>
                        <div className='flex gap-3 mt-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                                <circle cx="11" cy="11.5" r="11" fill="#0C579B" />
                            </svg>
                            <li>6 Open Jobs</li>
                        </div>
                        <div className='flex gap-3 mt-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                                <circle cx="11" cy="11.5" r="11" fill="#FFA412" />
                            </svg>
                            <li>4 Urgent Jobs</li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default JobsRatio;
