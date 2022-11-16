import React, { ReactElement } from 'react';

type Props = {
    icon: ReactElement;
    text: string;
    subtitle?: string | undefined;
    wraps?: boolean;
    primary: boolean;
};

function IconInfo({
    icon,
    text,
    subtitle = undefined,
    wraps = false,
    primary
}: Props) {
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
            {subtitle ? <span className="font-medium">{subtitle}</span> : ''}
            <p
                className={`Description ${
                    primary ? 'text-secondary-dark text-xs' : 'text-white'
                }`}
            >
                {text}
            </p>
        </div>
    );
}

export default IconInfo;
