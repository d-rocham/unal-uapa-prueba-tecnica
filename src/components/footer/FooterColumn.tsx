import React from 'react';
import { FooterColumnInfo } from './FooterColumnInfo';

type Props = {
    info: FooterColumnInfo;
};

function FooterColumn({ info }: Props) {
    return (
        <div className="FooterColumnContainer flex flex-col text-white">
            <h1 className="ColumnTitle font-semibold text-lg text-center xl:text-justify pb-6">
                {info.title}
            </h1>
            <div className="ItemsContainer flex flex-col gap-4 items-center xl:items-start">
                {info.items.map((item) => (
                    <p className="ColumnItem font-thin">{item}</p>
                ))}
            </div>
        </div>
    );
}

export default FooterColumn;
