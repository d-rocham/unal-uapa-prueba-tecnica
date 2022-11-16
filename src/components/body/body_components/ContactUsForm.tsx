import React from 'react';
import { Button } from '../../utils/Utils';

function ContactUsForm() {
    return (
        <div className="border-[#E8E8E8] border rounded-md shadow-md p-4 xl:order-first">
            <form className="flex flex-col gap-5 xl:py-5">
                <h4 className="text-center text-lg mb-6 font-black text-secondary-dark">
                    Contact Us
                </h4>
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Your Name"
                    className="rounded-3xl border-[#E8E8E8] bg-[#F5F5F5] placeholder:text-dark"
                />
                <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Your Email"
                    className="rounded-3xl border-[#E8E8E8] bg-[#F5F5F5] placeholder:text-dark"
                />
                <textarea
                    name=""
                    id=""
                    placeholder="Your Message"
                    className="border-[#E8E8E8] bg-[#F5F5F5] placeholder:text-dark h-44"
                />
                <Button description="Send" />
            </form>
        </div>
    );
}

export default ContactUsForm;
