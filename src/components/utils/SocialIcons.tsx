import React from 'react';

import { GrLinkedin, GrTwitter, GrFacebook } from 'react-icons/gr';

type Props = {
    primary?: boolean;
};
function SocialIcons({ primary = false }: Props) {
    return (
        <div
            className={`SocialIcons flex flex-row gap-5 text-xl ${
                primary ? 'text-primary' : 'text-white'
            }`}
        >
            <GrTwitter />
            <GrFacebook />
            <GrLinkedin />
        </div>
    );
}

export default SocialIcons;
