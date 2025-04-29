import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {

    return (
        <div>
            <div className={`${isSellerPath ? "" : 'px-6 md:px-16 lg:px-24 xl:px-32'}`}>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </div>

        </div>
    )
}

export default App;
