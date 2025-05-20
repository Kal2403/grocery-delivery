import React, { useState } from 'react';
import { assets } from '../assets/assets';

const AddAddress = () => {

    const [address, setAddress] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: "",
    })

    return (
        <div className='mt-16 pb-16'>
            
        </div>
    )
}

export default AddAddress;
