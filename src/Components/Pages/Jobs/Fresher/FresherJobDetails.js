import React from 'react';
import { BsLayersFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

const FresherJobDetails = () => {
    return (
        <div className='m-7'>
            <div className='block lg:flex justify-between border-2 py-2'>
                <div className='ml-2'>
                    <h1 className='text-2xl font-semibold'>Frontend Development</h1>
                    <div className='flex '>
                        <span className='mt-1'><BsLayersFill></BsLayersFill></span><p className='ml-1'>Premium Labels Limited</p>
                        <span className='ml-6 mt-1'><FaMapMarkerAlt></FaMapMarkerAlt> </span><p className='ml-1'>56/8, Panthapath Dhaka</p>
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
                    <div className='flex'>
                        <span className='mt-1'><BsLayersFill></BsLayersFill></span><p className='ml-1'>iBos Limited</p>
                        <span className='ml-6 mt-1'><FaMapMarkerAlt></FaMapMarkerAlt> </span><p className='ml-1'>6/2, Lalmatia Dhaka</p>
                    </div>
                </div>
                <div className='flex mr-3'>
                    <span className='mt-0 p-5 mr-2  rounded-full' style={{ backgroundColor: '#ffe5e0', color: '#ff6347' }}><AiFillHeart></AiFillHeart></span>
                    <button className="btn" style={{ backgroundColor: '#6c63ff', border: '1px solid #6c63ff' }}>Apply</button>
                </div>
            </div>
            <div className='block lg:flex justify-between border-2 py-2 mt-4'>
                <div className='ml-2'>
                    <h1 className='text-2xl font-semibold'>Web Developer</h1>
                    <div className='flex '>
                        <span className='mt-1'><BsLayersFill></BsLayersFill></span><p className='ml-1'>Spondon IT</p>
                        <span className='ml-6 mt-1'><FaMapMarkerAlt></FaMapMarkerAlt> </span><p className='ml-1'>89/2, Panthapath Dhaka</p>
                    </div>
                </div>
                <div className='flex mr-3'>
                    <span className='mt-0 p-5 mr-2  rounded-full' style={{ backgroundColor: '#ffe5e0', color: '#ff6347' }}><AiFillHeart></AiFillHeart></span>
                    <button className="btn" style={{ backgroundColor: '#6c63ff', border: '1px solid #6c63ff' }}>Apply</button>
                </div>
            </div>
            <div className='block lg:flex justify-between border-2 py-2 mt-4'>
                <div className='ml-2'>
                    <h1 className='text-2xl font-semibold'>Frontend Development</h1>
                    <div className='flex '>
                        <span className='mt-1'><BsLayersFill></BsLayersFill></span><p className='ml-1'>CPA IT</p>
                        <span className='ml-6 mt-1'><FaMapMarkerAlt></FaMapMarkerAlt> </span><p className='ml-1'>32, Dhanmondhi Dhaka</p>
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
                        <span className='mt-1'><BsLayersFill></BsLayersFill></span><p className='ml-1'>PrimeTech Ltd</p>
                        <span className='ml-6 mt-1'><FaMapMarkerAlt></FaMapMarkerAlt> </span><p className='ml-1'>23, Kawran Bazar Dhaka</p>
                    </div>
                </div>
                <div className='flex mr-3'>
                    <span className='mt-0 p-5 mr-2  rounded-full' style={{ backgroundColor: '#ffe5e0', color: '#ff6347' }}><AiFillHeart></AiFillHeart></span>
                    <button className="btn" style={{ backgroundColor: '#6c63ff', border: '1px solid #6c63ff' }}>Apply</button>
                </div>
            </div>
            <div className='block lg:flex justify-between border-2 py-2 mt-4'>
                <div className='ml-2'>
                    <h1 className='text-2xl font-semibold'>Web Designer</h1>
                    <div className='flex '>
                        <span className='mt-1'><BsLayersFill></BsLayersFill></span><p className='ml-1'>TechVillage Ltd</p>
                        <span className='ml-6 mt-1'><FaMapMarkerAlt></FaMapMarkerAlt> </span><p className='ml-1'>20, Uttara Dhaka</p>
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

export default FresherJobDetails;