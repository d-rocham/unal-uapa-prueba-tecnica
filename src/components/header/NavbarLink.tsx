import React from 'react';

type Props = {
    text: String;
};
function NavbarLink({ text }: Props) {
    return (
        <div className="text-white font-light text-base hidden xl:block">
            {text}
        </div>
    );
}

export default NavbarLink;
