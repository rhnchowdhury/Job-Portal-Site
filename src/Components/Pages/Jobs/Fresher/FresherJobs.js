import React from 'react';
import { Link } from 'react-router-dom';

const FresherJobs = () => {
    return (
        <div>
            <div className='mt-32'>
                <h1 className='text-4xl font-bold text-center'>Featured Job Categories</h1>
                <p className='font-light text-center'>Who are in extremely love with eco friendly system.</p>
            </div>
            <h1 className='text-4xl font-bold'>Fresher Jobs</h1>
            <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="indicator">
                    <div className="indicator-item indicator-bottom">
                        <button className="btn" style={{ backgroundColor: '#6c63ff', border: '1px solid #6c63ff' }}>Apply</button>
                    </div>
                    <div className="card border">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Frontend Development</h2>
                            <span className="badge" style={{ backgroundColor: '#6c63ff', border: '1px solid #6c63ff' }}>Part time</span>
                        </div>
                    </div>
                </div>
                <div className="indicator">
                    <div className="indicator-item indicator-bottom">
                        <button className="btn" style={{ backgroundColor: '#6c63ff', border: '1px solid #6c63ff' }}>Apply</button>
                    </div>
                    <div className="card border">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Full Stack Developer</h2>
                            <span className="badge badge-warning text-white" >Full time</span>
                        </div>
                    </div>
                </div>
                <div className="indicator">
                    <div className="indicator-item indicator-bottom">
                        <button className="btn" style={{ backgroundColor: '#6c63ff', border: '1px solid #6c63ff' }}>Apply</button>
                    </div>
                    <div className="card border">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Web Developer</h2>
                            <span className="badge badge-success text-white">Full time</span>
                        </div>
                    </div>
                </div>
                <div className="indicator">
                    <div className="indicator-item indicator-bottom">
                        <button className="btn" style={{ backgroundColor: '#6c63ff', border: '1px solid #6c63ff' }}>Apply</button>
                    </div>
                    <div className="card border">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Frontend Development</h2>
                            <span className="badge text-white">Internship</span>
                        </div>
                    </div>
                </div>
                <div className="indicator">
                    <div className="indicator-item indicator-bottom">
                        <button className="btn" style={{ backgroundColor: '#6c63ff', border: '1px solid #6c63ff' }}>Apply</button>
                    </div>
                    <div className="card border">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Full Stack Developer</h2>
                            <span className="badge badge-info text-white">Freelance</span>
                        </div>
                    </div>
                </div>
                <div className="indicator">
                    <div className="indicator-item indicator-bottom">
                        <button className="btn" style={{ backgroundColor: '#6c63ff', border: '1px solid #6c63ff' }}>Apply</button>
                    </div>
                    <div className="card border">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Web Designer</h2>
                            <span className="badge badge-error text-white">Temporary</span>
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