import React from 'react';

type Props = {
    children: JSX.Element;
};
function BodySection({ children }: Props) {
    return (
        <div className="flex flex-col items-center gap-14 mx-5 xl:mx-64 mb-16">
            {children}
        </div>
    );
}

export default BodySection;
