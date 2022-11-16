import React from 'react';

type Props = {
    text: String;
};
function NavbarLink({ text }: Props) {
    return (
        <div className="text-white font-light text-base hidden lg:block">
            {text}
        </div>
    );
}

export default NavbarLink;
