import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {

    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24 bg-primary/10">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                <div>
                    <img className="w-34 md:w-32" src={assets.logo} alt="logo" />
                    <p className="max-w-[410px] mt-6">We deliver fresh groceries and snack stright to your door. Trusted by thousands, we aim to make your shopping experience simple and affordable.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
