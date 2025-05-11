import React from 'react';

const Login = () => {

    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center text-sm text-gray-600 bg-black/50'>
            <form className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white">
                <p className="text-2xl font-medium m-auto">
                    <span className="text-primary">User</span> {state === "login" ? "Login" : "Sign Up"}
                </p>
            </form>
        </div>
    )
}

export default Login;
