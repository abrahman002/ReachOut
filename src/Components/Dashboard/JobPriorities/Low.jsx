import React from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';


const data = [
    { name: 'High', value: 80 },
    { name: '', value: 5 },


];
const COLORS = ['#EFF4FA', '#0C579B'];

const Low = () => {
    return (
        <div>
            <div className=' items-center bg-white lg:h-60 w-[80%] lg:w-full  p-2 lg:mt-0 mt-5 rounded-lg lg:ml-5 ml-8'>
                <div>
                    <div>
                        <PieChart lg:width={200} lg:height={200} width={200} height={200} className='ml-7 lg:ml-0'>
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
                                                Low {value}
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
                </div>
            </div>
        </div>
    );
};

export default Low;