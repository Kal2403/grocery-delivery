import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext';

const Navbar = () => {

    const [open, setOpen] = React.useState(false);
    const { user, setUser, setShowUserLogin, navigate } = useAppContext();

    const logout = async () => {
        setUser(null)
        navigate("/")
    }

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <NavLink to="/" onClick={() => setOpen(false)}>
                <img className="h-9" src={assets.logo} alt="logo" />
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <NavLink to="/"><a href="#">Home</a></NavLink>
                <NavLink to="/products"><a href="#">All Product</a></NavLink>
                <NavLink to="/"><a href="#">Contact</a></NavLink>

                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <input src={assets.search_icon} alt='search' className='w-4 h-4' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
