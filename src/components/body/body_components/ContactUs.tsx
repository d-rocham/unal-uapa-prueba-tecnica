import React from 'react';
import {
    MdOutlineLocationOn,
    MdOutlinePhoneIphone,
    MdOutlineEmail
} from 'react-icons/md';
import { SocialIcons, IconInfo, useWindowWidth } from '../../utils/Utils';
import {
    BodySection,
    SectionDescription,
    ContactUsForm
} from './BodyComponents';

function ContactUs() {
    const windowWidth = useWindowWidth();

    return (
        <BodySection>
            <>
                <SectionDescription
                    title="Contact Us"
                    description="Most calendars are designed for teams."
                    responsiveText={
                        windowWidth >= 768
                            ? ' Slate is designed for freelancers'
                            : undefined
                    }
                />
                <div className="md:hidden">
                    <SocialIcons primary />
                </div>
                <div className="flex flex-col items-center gap-7 md:flex-row md:order-last">
                    <div className="flex flex-col gap-6 justify-center items-center">
                        <div className="ContactInfoIcons flex flex-col justify-start gap-4 md:flex-row">
                            <IconInfo
                                icon={<MdOutlineLocationOn />}
                                primary
                                text="6386 Spring St Anchorage, Georgia 12473 United States"
                                wraps={windowWidth >= 768}
                            />
                            <IconInfo
                                icon={<MdOutlinePhoneIphone />}
                                primary
                                text="(843) 555-0130"
                                wraps={windowWidth >= 768}
                            />
                            <IconInfo
                                icon={<MdOutlineEmail />}
                                primary
                                text="willie.jennings@example.com"
                                wraps={windowWidth >= 768}
                            />
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7524163956427!2d-74.0862350856184!3d4.638199143488746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bd14943c13b%3A0x3de530667d9ff6b0!2sUniversidad%20Nacional%20de%20Colombia!5e0!3m2!1sen!2sco!4v1668561991078!5m2!1sen!2sco"
                            width="600"
                            height="450"
                            loading="lazy"
                            className="hidden md:block md:h-72 md:w-9/12"
                        />
                        <div className="hidden md:block md:self-start">
                            <SocialIcons primary />
                        </div>
                    </div>

                    <ContactUsForm />
                </div>
            </>
        </BodySection>
    );
}

export default ContactUs;
