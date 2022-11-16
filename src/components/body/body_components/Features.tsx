import React from 'react';
import { MdOutlineDraw } from 'react-icons/md';
import { FaPaintBrush } from 'react-icons/fa';
import { IoShapesSharp } from 'react-icons/io5';
import { IconInfo, useWindowWidth } from '../../utils/Utils';

import { BodySection, SectionDescription } from './BodyComponents';

function Features() {
    const windowWidth = useWindowWidth();

    return (
        <BodySection>
            <>
                <SectionDescription
                    title="Features"
                    description="Most calendars are designed for teams."
                    responsiveText={
                        windowWidth >= 768
                            ? ' Slate is designed for freelancers'
                            : undefined
                    }
                />
                <video
                    controls
                    autoPlay
                    className="rounded-lg shadow-lg w-9/12 md:order-last"
                    poster="https://ingenieria.bogota.unal.edu.co/images/recursos/noticias/viejito-01.png"
                />
                <div className="flex flex-col md:flex-row gap-9 pt-2">
                    <IconInfo
                        icon={<IoShapesSharp />}
                        subtitle="OpenType features. Variable fonts"
                        text="Slate helps you see how many more days you need to work to reach your financial goal."
                        primary
                        wraps
                    />
                    <IconInfo
                        icon={<MdOutlineDraw />}
                        subtitle="Design with real data"
                        text="Slate helps you see how many more days you need to work to reach your financial goal."
                        primary
                        wraps
                    />
                    <IconInfo
                        icon={<FaPaintBrush />}
                        subtitle="Fastest way to take action"
                        text="Slate helps you see how many more days you need to work to reach your financial goal."
                        primary
                        wraps
                    />
                </div>
            </>
        </BodySection>
    );
}

export default Features;
