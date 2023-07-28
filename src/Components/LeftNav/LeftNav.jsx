import React from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import './leftnev.css'
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';


const LeftNav = () => {
    return (
        <div>
            <div className="drawer  lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col  ">
                    <Dashboard></Dashboard>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-white text-base-content ">

                        <li ><Link className=' btn-success rounded-full w-52 text-white normal-case'>Create New Job <AiOutlinePlus /></Link></li>
                        <li className=' btn-ghost rounded-full w-52 mt-2 normal-case '> <Link className='flex gap-2 items-center'>
                            <div className='text-xl'>
                                <img src="https://i.ibb.co/CW0FyYk/Group-2.png" alt="" />
                            </div>
                            My Jobs</Link></li>
                        <li className=' btn-ghost rounded-full w-52 mt-2 normal-case'> <Link className='flex gap-2 items-center' to='/dashboard'>
                            <div className='text-xl'>
                                <img src="https://i.ibb.co/VTxNFJ4/Group-1.png" alt="" />
                            </div>
                            Dashboard</Link></li>
                        <li className=' btn-ghost rounded-full w-52 mt-2 normal-case'> <Link className='flex gap-2 items-center'>
                            <div>
                                <img src="https://i.ibb.co/GxGxzjM/Group.png" alt="" />
                            </div>
                            Candidate R3achout</Link></li>
                        <li className=' btn-ghost rounded-full w-52 mt-2 normal-case'> <Link className='flex gap-2 items-center'>
                            <div>
                                <img src="https://i.ibb.co/bzgc8Jj/Group-3.png" alt="" />
                            </div>
                            Search Assistant</Link></li>
                        <li className=' btn-ghost rounded-full w-52 mt-2 normal-case'> <Link className='flex gap-2 items-center'>
                            <div>
                                <img src="https://i.ibb.co/vm651NJ/Group-4.png" alt="" />
                            </div>
                            Interview</Link></li>
                        <li className=' btn-ghost rounded-full w-52 mt-2 normal-case'> <Link className='flex gap-2 items-center'>
                            <div>
                                <img src="https://i.ibb.co/pPjNXtV/Group-5.png" alt="" />
                            </div>
                            Intake</Link></li>
                        <li className=' btn-ghost rounded-full w-52 mt-2 normal-case'> <Link className='flex gap-2 items-center'>
                            <div>
                                <img src="https://i.ibb.co/bJBN8GL/Group-6.png" alt="" />
                            </div>
                            Job description</Link></li>
                        <div className='upgrade  lg:mt-14 lg:p-5 text-white w-60'>
                            <h1 className='text-xl'>Upgrade your account</h1>
                            <p className='textsm mt-2'>Increase your usage and get early access to new features</p>
                            <button className=' btn-success w-36 rounded-full mt-3 text-center text-white normal-case p-2 '>Upgrade</button>

                        </div>
                    </ul>

                </div>

            </div>

        </div>
    );
};

export default LeftNav;