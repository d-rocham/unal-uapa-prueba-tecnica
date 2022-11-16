import React from 'react';
import { Button, SocialIcons } from '../utils/Utils';
import Navbar from './Navbar';

const hamburguer = require('../../assets/hamburger.png');

function Header() {
    return (
        <div className="bg-hero-image bg-cover clip flex flex-col items-center justify-center gap-10 pb-64 pt-9">
            <div className="TopBar flex flex-row justify-between items-center w-full lg:px-52 px-4 pb-24">
                <Navbar />
                <div className="hidden lg:block">
                    <SocialIcons />
                </div>
                <img src={hamburguer} alt="" className="block lg:hidden" />
            </div>
            <h1 className="text-white text-center text-4xl mx-4 xl:text-5xl md:font-extrabold xl:mx-96 -mb-6">
                The best products start with Figma
            </h1>
            <p className="text-white text-center mb-5 mx-4">
                Most calendars are designed for teams. Slate is designed for
                freelancers
            </p>
            <Button description="Try for Free" />
        </div>
    );
}

export default Header;
