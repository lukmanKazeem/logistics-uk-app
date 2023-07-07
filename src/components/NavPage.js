import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Drivers from '../pages/Drivers';
import Vehicles from '../pages/Vehicles';

const NavPage = () => {
    return (
        <React.Fragment>
            <section>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Drivers" element={<Drivers />} />
                    <Route path="/Vehicles" element={<Vehicles />} />
                    <Route />
                </Routes>
            </section>
        </React.Fragment>
    )
}

export default NavPage