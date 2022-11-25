import React from 'react';

const Newsletter = () => {
    return (
        <div className="p-8 my-4 rounded-lg" style={{background: "#efdbb4"}}>
            <h1 className="text-5xl font-bold pb-4 text-center">Newsletter</h1>
            <p className='text-center'>Great to see you ! We value your demand. If you are looking for old and gold things you can subscribe. We will send notifications for new uploaded products.</p>
            <div className="py-8">
                <form>
                    <div className='text-center max-w-md mx-auto'>
                        <input className='p-2 mb-2 lg:mr-4 rounded-md w-full' type="text" placeholder='Enter Name' />
                        <input className='p-2 lg:mr-4 rounded-md w-full' type="email" placeholder='Enter email' />
                        <button className="btn px-12 mt-2 rounded-lg btn-primary">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;