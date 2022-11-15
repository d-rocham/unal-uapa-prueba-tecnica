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
                wraps ? 'flex-col' : 'flex-row'
            } gap-2 font-thin`}
        >
            <div
                className={`Icon ${
                    primary ? 'text-primary' : 'text-white'
                } text-lg`}
            >
                {icon}
            </div>
            <p
                className={`Description ${
                    primary ? 'text-secondary-text' : 'text-white'
                }`}
            >
                {text}
            </p>
        </div>
    );
}

export default IconInfo;
