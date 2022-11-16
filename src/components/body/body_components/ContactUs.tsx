import React from 'react';
import {
    MdOutlineLocationOn,
    MdOutlinePhoneIphone,
    MdOutlineEmail
} from 'react-icons/md';
import { SocialIcons, IconInfo } from '../../utils/Utils';
import { BodySection, SectionDescription } from './BodyComponents';

function ContactUs() {
    return (
        <BodySection>
            <>
                <SectionDescription
                    title="Contact Us"
                    description="Most calendars are designed for teams. Slate is designed for freelancers."
                />
                <SocialIcons primary />
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
                <form>
                    <h4>Contact Us</h4>
                    <input type="text" name="" id="" />
                    <input type="email" name="" id="" />
                    <textarea name="" id="" cols={30} rows={10} />
                    <input type="submit" value="" />
                </form>
            </>
        </BodySection>
    );
}

export default ContactUs;
