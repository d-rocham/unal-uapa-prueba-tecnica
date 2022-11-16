import React from 'react';
import NavbarLink from './NavbarLink';

const figmaLand = require('../../assets/figmalogo.png');

function Navbar() {
    const NAVBAR_LINKS = ['Home', 'Product', 'About', 'Contact'];

    return (
        <div className="flex flex-row gap-10 items-center justify-center">
            {NAVBAR_LINKS.map((link) => (
                <NavbarLink text={link} />
            ))}
            <img
                src={figmaLand}
                alt=""
                className="h-10 min-w-min self-center"
            />
        </div>
    );
}

export default Navbar;
