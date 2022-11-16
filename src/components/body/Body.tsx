import React from 'react';
import { ContactUs, Features } from './body_components/BodyComponents';

function Body() {
    return (
        <div className="flex flex-col justify-center mb-12">
            <Features />
            <ContactUs />
        </div>
    );
}

export default Body;
