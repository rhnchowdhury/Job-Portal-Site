import React from 'react';
import { Link } from 'react-router-dom';

const FresherJobs = () => {
    return (
        <div className='m-3 lg:m-7'>
            <div className='mt-5 lg:mt-28'>
                <h1 className='text-2xl lg:text-4xl font-bold text-center'>Featured Job Categories</h1>
                <p className='lg:font-light text-center'>Who are in extremely love with eco friendly system.</p>
            </div>
            <h1 className='text-4xl font-bold mt-5'>Fresher Jobs</h1>
            <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
                <div className="indicator ">
                    <div className="indicator-item indicator-bottom">
                        <Link to='/login'><button className="btn" style={{ backgroundColor: '#6c63ff', border: '1px solid #6c63ff' }}>Apply</button></Link>
                    </div>
                    <div className="card border">
                        <div className="card-body">
                            <h2 className="card-title text-lg lg:text-2xl">Frontend Development</h2>
                            <span className="badge badge-success text-white">Internship</span>
                        </div>
                    </div>
                </div>
                <div className="indicator">
                    <div className="indicator-item indicator-bottom">
                        <Link to='/login'> <button className="btn" style={{ backgroundColor: '#6c63ff', border: '1px solid #6c63ff' }}>Apply</button></Link>
                    </div>
                    <div className="card border">
                        <div className="card-body">
                            <h2 className="card-title lg:text-2xl">Full Stack Developer</h2>
                            <span className="badge badge-success text-white">Internship</span>
                        </div>
                    </div>
                </div>
                <div className="indicator">
                    <div className="indicator-item indicator-bottom">
                        <Link to='/login'><button className="btn" style={{ backgroundColor: '#6c63ff', border: '1px solid #6c63ff' }}>Apply</button></Link>
                    </div>
                    <div className="card border">
                        <div className="card-body">
                            <h2 className="card-title lg:text-2xl">Web Developer</h2>
                            <span className="badge badge-success text-white">Internship</span>
                        </div>
                    </div>
                </div>
                <div className="indicator">
                    <div className="indicator-item indicator-bottom">
                        <Link to='/login'><button className="btn" style={{ backgroundColor: '#6c63ff', border: '1px solid #6c63ff' }}>Apply</button></Link>
                    </div>
                    <div className="card border">
                        <div className="card-body">
                            <h2 className="card-title text-lg lg:text-2xl">Frontend Development</h2>
                            <span className="badge badge-success text-white">Internship</span>
                        </div>
                    </div>
                </div>
                <div className="indicator">
                    <div className="indicator-item indicator-bottom">
                        <Link to='/login'><button className="btn" style={{ backgroundColor: '#6c63ff', border: '1px solid #6c63ff' }}>Apply</button></Link>
                    </div>
                    <div className="card border">
                        <div className="card-body">
                            <h2 className="card-title lg:text-2xl">Full Stack Developer</h2>
                            <span className="badge badge-success text-white">Internship</span>
                        </div>
                    </div>
                </div>
                <div className="indicator">
                    <div className="indicator-item indicator-bottom">
                        <Link to='/login'><button className="btn" style={{ backgroundColor: '#6c63ff', border: '1px solid #6c63ff' }}>Apply</button></Link>
                    </div>
                    <div className="card border">
                        <div className="card-body">
                            <h2 className="card-title lg:text-2xl">Web Designer</h2>
                            <span className="badge badge-success text-white">Internship</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-16 card-actions justify-center'>
                <Link to='/fresher'><button className="btn" style={{ backgroundColor: '#ff6347', border: '2px solid #ff6347' }}>See All Jobs</button></Link>
            </div>
        </div>
    );
};

export default FresherJobs;