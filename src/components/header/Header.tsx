import React from 'react';

const heroImage = require('../../assets/hero.jpg');

function Header() {
    return <img src={heroImage} alt="" className="clip w-full" />;
}

export default Header;
