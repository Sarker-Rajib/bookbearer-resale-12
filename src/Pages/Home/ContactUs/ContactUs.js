import React from 'react';
import map from '../../../Assets/Images/map.png';

const ContactUs = () => {
    return (
        <div className=" p-8 bg-amber-50 my-4 rounded-lg">
            <h1 className="text-5xl font-bold pb-4 text-center">Contact Us</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="addImage text-center lg:p-4">
                    <img src={map} alt="map" />
                </div>
                <div className="py-8">
                    <p>Phone: +880 798 654 3546</p>
                    <p>Email : bookbbra434@bdbook.biz</p>
                    <p className='pt-2'>Address : Nilkhet , Dhaka, Bangladesh</p>
                    <p className="pt-6 pb-2">Send your message</p>
                    <form>
                        <input className='p-2 mb-2 lg:mr-4 rounded-md w-full' type="text" placeholder='Enter Name' />
                        <input className='p-2 lg:mr-4 rounded-md w-full' type="email" placeholder='Enter email' />
                        <textarea className='w-full mt-2' cols="30" rows="5"></textarea>
                        <button className="btn px-12 mt-2 rounded-lg btn-primary">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;