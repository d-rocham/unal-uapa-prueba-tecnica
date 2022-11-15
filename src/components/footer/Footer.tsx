import React from 'react';
import FooterColumn from './FooterColumn';
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
        <div className="Footer fixed left-0 bottom-0 w-full flex flex-col gap-8 xl:flex-row xl:justify-center xl:gap-16 p-10 bg-background-dark">
            {FOOTER_COLUMNS_DATA.map((footerColumn) => (
                <FooterColumn info={footerColumn} />
            ))}
        </div>
    );
}

export default Footer;
