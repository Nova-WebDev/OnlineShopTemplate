import { Outlet } from 'react-router';
import { Navbar } from '../Navbar';

export const Layout = () => (
    
    <>
        <Navbar />
        <Outlet />
        
    </>
);
