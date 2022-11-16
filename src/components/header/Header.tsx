import React from 'react';
import { Button, SocialIcons } from '../utils/Utils';
import Navbar from './Navbar';

function Header() {
    return (
        <div className="bg-hero-image bg-cover clip flex flex-col items-center justify-center gap-10 pb-44 pt-9">
            <div className="TopBar flex flex-row justify-between w-full px-32 pb-24">
                <Navbar />
                <SocialIcons />
            </div>
            <h1 className="text-white text-center text-5xl font-bold">
                The best products start with Figma
            </h1>
            <p className="text-white text-center ">
                Most calendars are designed for teams. Slate is designed for
                freelancers
            </p>
            <Button description="Try for Free" />
        </div>
    );
}

export default Header;
