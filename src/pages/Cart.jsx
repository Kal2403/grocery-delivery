import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { assets, dummyAddress } from '../assets/assets';

const Cart = () => {

    const { products, currency, cartItems, removeFromCart, getCartCount, updateCartitem, navigate, getCartAmount } = useAppContext();
    const [cartArray, setCartArray] = useState([]);
    const [addresses, setAddresses] = useState(dummyAddress);
    const [showAddress, setShowAddress] = useState(false);
    const [selectedAddress, setSlectedAddresses] = useState(dummyAddress[0]);
    const [paymentOption, setPaymentOption] = useState("COD");
    
    return (
        <div>

        </div>
    )
}

export default Cart;
