import React from 'react';
import { BsLayersFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

const JobDetails = () => {
    return (
        <div className='m-7'>
            <div className='block lg:flex justify-between border-2 py-2'>
                <div className='ml-2'>
                    <h1 className='text-2xl font-semibold'>Full Stack Developer</h1>
                    <div className='flex '>
                        <span className='mt-1'><BsLayersFill></BsLayersFill></span><p className='ml-1'>MM IT Soft</p>
                        <span className='ml-6 mt-1'><FaMapMarkerAlt></FaMapMarkerAlt> </span><p className='ml-1'>20, Zigatola Dhaka</p>
                    </div>
                </div>
                <div className='flex mr-3'>
                    <span className='mt-0 p-5 mr-2  rounded-full' style={{ backgroundColor: '#ffe5e0', color: '#ff6347' }}><AiFillHeart></AiFillHeart></span>
                    <button className="btn" style={{ backgroundColor: '#6c63ff', border: '1px solid #6c63ff' }}>Apply</button>
                </div>
            </div>
            <div className='block lg:flex justify-between border-2 py-2 mt-4'>
                <div className='ml-2'>
                    <h1 className='text-2xl font-semibold'>JavaScript Developer</h1>
                    <div className='flex'>
                        <span className='mt-1'><BsLayersFill></BsLayersFill></span><p className='ml-1'>BJIT Limited</p>
                        <span className='ml-6 mt-1'><FaMapMarkerAlt></FaMapMarkerAlt> </span><p className='ml-1'>6, Gulshan-1 Dhaka</p>
                    </div>
                </div>
                <div className='flex mr-3'>
                    <span className='mt-0 p-5 mr-2  rounded-full' style={{ backgroundColor: '#ffe5e0', color: '#ff6347' }}><AiFillHeart></AiFillHeart></span>
                    <button className="btn" style={{ backgroundColor: '#6c63ff', border: '1px solid #6c63ff' }}>Apply</button>
                </div>
            </div>
            <div className='block lg:flex justify-between border-2 py-2 mt-4'>
                <div className='ml-2'>
                    <h1 className='text-2xl font-semibold'>Backend Developer</h1>
                    <div className='flex '>
                        <span className='mt-1'><BsLayersFill></BsLayersFill></span><p className='ml-1'>Brain Station</p>
                        <span className='ml-6 mt-1'><FaMapMarkerAlt></FaMapMarkerAlt> </span><p className='ml-1'>12, Mohakhali Dhaka</p>
                    </div>
                </div>
                <div className='flex mr-3'>
                    <span className='mt-0 p-5 mr-2  rounded-full' style={{ backgroundColor: '#ffe5e0', color: '#ff6347' }}><AiFillHeart></AiFillHeart></span>
                    <button className="btn" style={{ backgroundColor: '#6c63ff', border: '1px solid #6c63ff' }}>Apply</button>
                </div>
            </div>
            <div className='block lg:flex justify-between border-2 py-2 mt-4'>
                <div className='ml-2'>
                    <h1 className='text-2xl font-semibold'>Full Stack Developer</h1>
                    <div className='flex '>
                        <span className='mt-1'><BsLayersFill></BsLayersFill></span><p className='ml-1'>Selise Ltd</p>
                        <span className='ml-6 mt-1'><FaMapMarkerAlt></FaMapMarkerAlt> </span><p className='ml-1'>13, Gulshan-2 Dhaka</p>
                    </div>
                </div>
                <div className='flex mr-3'>
                    <span className='mt-0 p-5 mr-2  rounded-full' style={{ backgroundColor: '#ffe5e0', color: '#ff6347' }}><AiFillHeart></AiFillHeart></span>
                    <button className="btn" style={{ backgroundColor: '#6c63ff', border: '1px solid #6c63ff' }}>Apply</button>
                </div>
            </div>
            <div className='block lg:flex justify-between border-2 py-2 mt-4'>
                <div className='ml-2'>
                    <h1 className='text-2xl font-semibold'>JavaScript Developer</h1>
                    <div className='flex '>
                        <span className='mt-1'><BsLayersFill></BsLayersFill></span><p className='ml-1'>MasterKey Tech</p>
                        <span className='ml-6 mt-1'><FaMapMarkerAlt></FaMapMarkerAlt> </span><p className='ml-1'>25, Banani Dhaka</p>
                    </div>
                </div>
                <div className='flex mr-3'>
                    <span className='mt-0 p-5 mr-2  rounded-full' style={{ backgroundColor: '#ffe5e0', color: '#ff6347' }}><AiFillHeart></AiFillHeart></span>
                    <button className="btn" style={{ backgroundColor: '#6c63ff', border: '1px solid #6c63ff' }}>Apply</button>
                </div>
            </div>
            <div className='block lg:flex justify-between border-2 py-2 mt-4'>
                <div className='ml-2'>
                    <h1 className='text-2xl font-semibold'>Backend Developer</h1>
                    <div className='flex '>
                        <span className='mt-1'><BsLayersFill></BsLayersFill></span><p className='ml-1'>Synesis IT</p>
                        <span className='ml-6 mt-1'><FaMapMarkerAlt></FaMapMarkerAlt> </span><p className='ml-1'>15, Banani Dhaka</p>
                    </div>
                </div>
                <div className='flex mr-3'>
                    <span className='mt-0 p-5 mr-2  rounded-full' style={{ backgroundColor: '#ffe5e0', color: '#ff6347' }}><AiFillHeart></AiFillHeart></span>
                    <button className="btn" style={{ backgroundColor: '#6c63ff', border: '1px solid #6c63ff' }}>Apply</button>
                </div>
            </div>
        </div >
    );
};

export default JobDetails;