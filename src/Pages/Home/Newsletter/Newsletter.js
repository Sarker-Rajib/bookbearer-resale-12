import React from 'react';

const Newsletter = () => {
    return (
        <div className='pt-24 pb-12'>
            <div className="p-2 my-4"
                style={{ borderRadius: "15px", boxShadow: "0px 0px 10px 10px #533cda46" }}>
                <div className="p-6 bg-slate-50">
                    <h2 className='text-2xl lg:text-5xl font-bold text-center pb-2'>Newsletter</h2>
                    <p className='text-center'>Great to see you ! We value your demand. If you are looking for old and gold things you can subscribe. We will send notifications for new uploaded products.</p>
                    <div className="py-8">
                        <form>
                            <div className='text-center max-w-md mx-auto'>
                                <input className='p-2 border mb-2 lg:mr-4 rounded-md w-full' type="text" placeholder='Enter Name' />
                                <input className='p-2 border lg:mr-4 rounded-md w-full' type="email" placeholder='Enter email' />
                                <button className="btn px-12 mt-2 rounded-lg btn-primary">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;