import React from 'react';

const ProvideServicesText = ({Text, Description}) => {
    return (
        <div className='flex flex-col gap-3'>
            <h1 className='text-black font-bold text-4xl'>{Text}</h1>
            <p className='text-xl'>{Description}</p>
        </div>
    );
};

export default ProvideServicesText;