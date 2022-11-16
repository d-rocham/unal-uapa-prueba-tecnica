import React, { ReactElement } from 'react';

type Props = {
    icon: ReactElement;
    text: string;
    wraps?: boolean;
    primary: boolean;
};

function IconInfo({ icon, text, wraps = false, primary }: Props) {
    return (
        <div
            className={`IconInfoContainer flex ${
                wraps ? 'flex-col items-center text-center' : 'flex-row'
            } gap-2 font-thin`}
        >
            <div
                className={`Icon ${
                    primary ? 'text-primary' : 'text-white'
                } text-3xl`}
            >
                {icon}
            </div>
            <p
                className={`Description ${
                    primary ? 'text-secondary-dark' : 'text-white'
                }`}
            >
                {text}
            </p>
        </div>
    );
}

export default IconInfo;
