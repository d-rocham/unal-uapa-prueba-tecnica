import React from 'react';

type Props = {
    title: string;
    description: string;
};

function SectionDescription({ title, description }: Props) {
    return (
        <div>
            <h2 className="text-xl">{title}</h2>
            <p className="text-base">{description}</p>
        </div>
    );
}

export default SectionDescription;
