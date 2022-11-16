import React from 'react';
import { Button } from '../utils/Utils';

function Header() {
    return (
        <div className="bg-hero-image bg-cover clip flex flex-col items-center justify-center gap-7 py-44">
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
