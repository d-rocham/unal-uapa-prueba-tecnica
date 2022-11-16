import React from 'react';
import { MdOutlineLocationOn, MdOutlinePhoneIphone } from 'react-icons/md';
import FooterColumn from './FooterColumn';
import { IconInfo, SocialIcons } from '../utils/Utils';
import { FooterColumnInfo } from './FooterColumnInfo';

function Footer() {
    const FOOTER_COLUMNS_DATA: FooterColumnInfo[] = [
        {
            title: 'Pages',
            items: ['Home', 'Product', 'Pricing', 'About', 'Contact']
        },
        {
            title: 'Tomothy',
            items: [
                'Eleanor Edwards',
                'Ted Robertson',
                'Annette Russell',
                'Jennie Mckinney',
                'Gloria Richards'
            ]
        },
        {
            title: 'Jane Black',
            items: [
                'Philip Jones',
                'Product',
                'Colleen Russell',
                'Marvin Hawkins',
                'Bruce Simmmons'
            ]
        }
    ];

    return (
        <div className="Footer w-full flex flex-col gap-8 md:flex-row md:justify-center md:gap-16 p-10 py-16 xl:py-36 bg-dark">
            {FOOTER_COLUMNS_DATA.map((footerColumn) => (
                <FooterColumn info={footerColumn} />
            ))}
            <div className="LastColumn flex flex-col gap-4 md:justify-center items-center md:items-start">
                <IconInfo
                    text="7480 Mockingbird Hill"
                    icon={<MdOutlineLocationOn />}
                    primary={false}
                />
                <IconInfo
                    text="(239) 555-0108"
                    icon={<MdOutlinePhoneIphone />}
                    primary={false}
                />
                <SocialIcons />
            </div>
        </div>
    );
}

export default Footer;
