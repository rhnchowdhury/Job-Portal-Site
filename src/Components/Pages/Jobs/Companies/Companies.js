import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";

const Companies = () => {
    return (
        <div className='m-7'>
            <h1 className='text-4xl font-bold mt-5'>IT Companies</h1>
            <p className='font-light text-center mt-8'>Top 3 IT Companies in Bangladesh .</p>
            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Brain Station 23</h2>
                        <div className='flex'>
                            <span className='mt-1'><FaMapMarkerAlt></FaMapMarkerAlt></span>
                            <p className='ml-2'>2 Bir Uttam AK Khandakar Road, Dhaka</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">iBOS Limited</h2>
                        <div className='flex'>
                            <span className='mt-1'><FaMapMarkerAlt></FaMapMarkerAlt></span>
                            <p className='ml-2'>6/2 Kazi Nazrul Islam Rd, Dhaka</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Enosis Solution</h2>
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

export default Companies;