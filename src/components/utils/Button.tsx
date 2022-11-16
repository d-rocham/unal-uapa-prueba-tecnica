/* react react/button-has-type: [0] */

import React from 'react';

type Props = {
    type?: 'button' | 'submit' | 'reset' | undefined;
    onClick?: Function | undefined;
    description: string;
};
function Button({ type = undefined, onClick = undefined, description }: Props) {
    return (
        <button
            type={type}
            className="bg-primary text-white font-light px-7 py-2 mb-3 max-w-min rounded-3xl whitespace-nowrap"
            onClick={onClick ? () => onClick() : undefined}
        >
            {description}
        </button>
    );
}

export default Button;
