import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/Header';

//{/* {children} */}
// const Layout = ({ children }) => {
const Layout = () => {
    return (
        <div className="Layout">
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;
