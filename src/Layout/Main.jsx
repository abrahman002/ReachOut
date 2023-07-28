import React from 'react';
import Navber from '../Components/Navber/Navber';
import { Outlet } from 'react-router-dom';
import LeftNav from '../Components/LeftNav/LeftNav';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <LeftNav></LeftNav>
        </div>
    );
};

export default Main;