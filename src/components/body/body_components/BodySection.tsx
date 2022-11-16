import React from 'react';

type Props = {
    children: JSX.Element;
};
function BodySection({ children }: Props) {
    return <div className="flex flex-col items-center gap-5">{children}</div>;
}

export default BodySection;
