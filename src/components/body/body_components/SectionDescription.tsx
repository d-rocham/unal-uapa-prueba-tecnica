import React from 'react';

type Props = {
    title: string;
    description: string;
    responsiveText?: string | undefined;
};

function SectionDescription({
    title,
    description,
    responsiveText = undefined
}: Props) {
    return (
        <div className="text-center">
            <h2 className="text-4xl text-dark pb-3">{title}</h2>
            <p className="text-base text-secondary-dark">{description}</p>
            {responsiveText ? (
                <p className="text-base text-secondary-dark">
                    {responsiveText}
                </p>
            ) : (
                ''
            )}
        </div>
    );
}

export default SectionDescription;
