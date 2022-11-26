import React from 'react';
import { Dna } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='min-h-screen bg-purple-600 bg-opacity-80 absolute w-full flex items-center justify-center'>
            <Dna
                visible={true}
                height="150"
                width="150"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    );
};

export default Loader;