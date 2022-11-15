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
        <div className="Footer fixed left-0 bottom-0 w-full flex flex-col gap-8 xl:flex-row xl:justify-center xl:gap-16 p-10 bg-dark">
            {FOOTER_COLUMNS_DATA.map((footerColumn) => (
                <FooterColumn info={footerColumn} />
            ))}
            <div className="LastColumn flex flex-col gap-4 xl:justify-center items-center xl:items-start mt-8 xl:mt-0">
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
