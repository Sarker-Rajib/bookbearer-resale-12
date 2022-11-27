import React from 'react';
import { Dna } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='fixed top-0 left-0 right-0'>
            <div className='min-h-screen bg-amber-600 bg-opacity-30 absolute w-full flex items-center justify-center'>
                <Dna
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                />
            </div>
        </div>
    );
};

export default Loader;