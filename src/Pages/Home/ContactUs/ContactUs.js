import React from 'react';

const ContactUs = () => {
    return (
        <div className='pt-24'>
            <div className="p-2  my-4"
                style={{ borderRadius: "15px", boxShadow: "0px 0px 10px 10px #533cda46" }}>
                <div className="p-6 bg-slate-50">
                    <h2 className='text-2xl lg:text-5xl font-bold text-center pb-2'>Contact Us</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="addImage text-center lg:p-4 ">
                            <iframe title='map' className='w-full h-full border rounded overflow-hidden p-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7304.805182152633!2d90.37953598662578!3d23.73301887817607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b84e57dd8b19%3A0xd66f294182e721e8!2sDhaka%20New%20Market!5e0!3m2!1sen!2sbd!4v1671780238600!5m2!1sen!2sbd" loading="lazy"></iframe>
                        </div>
                        <div className="py-8">
                            <p>Phone: +880 798 654 3546</p>
                            <p>Email : bookbbra434@bdbook.biz</p>
                            <p className='pt-2'>Address : Nilkhet , Dhaka, Bangladesh</p>
                            <p className="pt-6 pb-2">Send your message</p>
                            <form>
                                <input className='p-2 border mb-2 lg:mr-4 rounded-md w-full' type="text" placeholder='Enter Name' />
                                <input className='p-2 border lg:mr-4 rounded-md w-full' type="email" placeholder='Enter email' />
                                <textarea className='w-full border rounded mt-2' cols="30" rows="5"></textarea>
                                <button className="btn px-12 mt-2 rounded-lg btn-primary">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;