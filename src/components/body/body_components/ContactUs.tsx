import React from 'react';
import {
    MdOutlineLocationOn,
    MdOutlinePhoneIphone,
    MdOutlineEmail
} from 'react-icons/md';
import { SocialIcons, IconInfo } from '../../utils/Utils';
import {
    BodySection,
    SectionDescription,
    ContactUsForm
} from './BodyComponents';

function ContactUs() {
    return (
        <BodySection>
            <>
                <SectionDescription
                    title="Contact Us"
                    description="Most calendars are designed for teams. Slate is designed for freelancers."
                />
                <div className="xl:hidden">
                    <SocialIcons primary />
                </div>
                <div className="ContactInfoIcons flex flex-col justify-start gap-4">
                    <IconInfo
                        icon={<MdOutlineLocationOn />}
                        primary
                        text="6386 Spring St Anchorage, Georgia 12473 United States"
                    />
                    <IconInfo
                        icon={<MdOutlinePhoneIphone />}
                        primary
                        text="(843) 555-0130"
                    />
                    <IconInfo
                        icon={<MdOutlineEmail />}
                        primary
                        text="willie.jennings@example.com"
                    />
                </div>
                <ContactUsForm />
            </>
        </BodySection>
    );
}

export default ContactUs;
