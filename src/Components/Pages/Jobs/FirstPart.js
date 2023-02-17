import React from 'react';

const FirstPart = () => {
    return (
        <div className='m-7'>
            <div>
                <p className='text-white lg:py-3 rounded-t-md lg:text-center  lg:text-lg' style={{ backgroundColor: '#6c63ff', marginRight: '90%' }}>Find a Job</p>
            </div>
            <div className='py-6 px-3 rounded-r-md rounded-b-md grid grid-cols-1 lg:grid-cols-4 gap-3' style={{ backgroundColor: '#6c63ff' }}>
                <input type="text" placeholder="eg. Graphic. Web Developer" className="input rounded w-full max-w-xs" />
                <input type="text" placeholder="Category" className="input rounded w-full max-w-xs" />
                <input type="text" placeholder="Location" className="input rounded w-full max-w-xs" />
                <button type="submit" className='p-3 text-white text-lg rounded w-full max-w-xs' style={{ backgroundColor: '#ff6347' }}>Search</button>
            </div>
        </div>
    );
};

export default FirstPart;