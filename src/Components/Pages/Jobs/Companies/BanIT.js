import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";

const BanIT = () => {
    return (
        <div className='m-3 lg:m-7'>
            <h1 className='text-4xl font-bold mt-5'>IT Companies</h1>
            <p className=' text-center mt-4 lg:mt-8' style={{ color: '#6c63ff' }}>Top 3 IT Companies in Bangladesh.</p>
            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 lg:mt-8'>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title" style={{ color: '#ff6347' }}>Brain Station 23</h2>
                        <div className='flex'>
                            <span className='mt-1'><FaMapMarkerAlt></FaMapMarkerAlt></span>
                            <p className='ml-2'>2 Bir Uttam AK Khandakar Road, Dhaka</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title" style={{ color: '#ff6347' }}>iBOS Limited</h2>
                        <div className='flex'>
                            <span className='mt-1'><FaMapMarkerAlt></FaMapMarkerAlt></span>
                            <p className='ml-2'>6/2 Kazi Nazrul Islam Rd, Dhaka</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title" style={{ color: '#ff6347' }}>Enosis Solution</h2>
                        <div className='flex'>
                            <span className='mt-1'><FaMapMarkerAlt></FaMapMarkerAlt></span>
                            <p className='ml-2'>House-28, Road-8, Gulshan, Dhaka</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BanIT;