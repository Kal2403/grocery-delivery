import React from 'react'
import { assets } from '../../assets/assets';
import { Link, Outlet } from 'react-router-dom';

const SellerLayout = () => {

    return (
        <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white">
                <Link to='/'>
                    <img className="cursor-pointer w-34 md:w-38" src={assets.logo} alt="logo" />
                </Link>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <button onClick={logout} className='border rounded-full text-sm px-4 py-1'>Logout</button>
                </div>
            </div>
            <div className='flex'>
                <div className="md:w-64 w-16 border-r h-[550px] text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
                    
                </div>
                <Outlet />
            </div>
        </>
    );
};

export default SellerLayout;
