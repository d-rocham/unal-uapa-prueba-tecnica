import React from 'react';

type Props = {
    title: string;
    description: string;
};

function SectionDescription({ title, description }: Props) {
    return (
        <div className="text-center">
            <h2 className="text-xl text-dark">{title}</h2>
            <p className="text-base text-secondary-dark">{description}</p>
        </div>
    );
}

export default SectionDescription;
