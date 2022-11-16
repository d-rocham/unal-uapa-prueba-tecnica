import React from 'react';
import NavbarLink from './NavbarLink';

function Navbar() {
    const NAVBAR_LINKS = ['Home', 'Product', 'About', 'Contact'];

    return (
        <div className="flex flex-row gap-10">
            {NAVBAR_LINKS.map((link) => (
                <NavbarLink text={link} />
            ))}
        </div>
    );
}

export default Navbar;
