import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";

const ForeignIT = () => {
    return (
        <div className='m-3 lg:m-7'>
            <p className='text-center mt-4 lg:mt-12' style={{ color: '#ff6347' }}>Top 3 IT Companies in the World.</p>
            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 lg:mt-8'>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title" style={{ color: '#6c63ff' }}>Microsoft Corporation</h2>
                        <div className='flex'>
                            <span className='mt-1'><FaMapMarkerAlt></FaMapMarkerAlt></span>
                            <p className='ml-2'>Redmond, Washington</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn" style={{ backgroundColor: '#ff6347', border: '1px solid #ff6347' }}>View Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title" style={{ color: '#6c63ff' }}>IBM</h2>
                        <div className='flex'>
                            <span className='mt-1'><FaMapMarkerAlt></FaMapMarkerAlt></span>
                            <p className='ml-2'>Armonk, Future York</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn" style={{ backgroundColor: '#ff6347', border: '1px solid #ff6347' }}>View Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title" style={{ color: '#6c63ff' }}>Tata Consultancy Services</h2>
                        <div className='flex'>
                            <span className='mt-1'><FaMapMarkerAlt></FaMapMarkerAlt></span>
                            <p className='ml-2'>Mumbai, India</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn" style={{ backgroundColor: '#ff6347', border: '1px solid #ff6347' }}>View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForeignIT;