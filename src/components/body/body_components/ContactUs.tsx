import React from 'react';
import { SocialIcons } from '../../utils/Utils';
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
            </>
        </BodySection>
    );
}

export default ContactUs;
