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
        <nav>
        </nav>
    )
}

export default Navbar;
