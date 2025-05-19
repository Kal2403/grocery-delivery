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

    const getCart = () => {
        let tempArray = [];
        for (const key in cartItems) {
            const product = products.find((item) => item._id === key)
            product.quantity = cartItems[key]
            tempArray.push(product);
        }
        setCartArray(tempArray);
    }

    const placeOrder = async () => {
        
    }

    useEffect(() => {
        if (products.length > 0 && cartItems) {
            getCart();
        }
    }, [products, cartItems])

    return products.length > 0 && cartItems ? (
        <div className="flex flex-col md:flex-row mt-16">
            <div className='flex-1 max-w-4xl'>
                <h1 className="text-3xl font-medium mb-6">
                    Shopping Cart <span className="text-sm text-primary">{getCartCount()} Items</span>
                </h1>

                <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
                    <p className="text-left">Product Details</p>
                    <p className="text-center">Subtotal</p>
                    <p className="text-center">Action</p>
                </div>
            </div>
        </div>
    ) : null
}

export default Cart;
