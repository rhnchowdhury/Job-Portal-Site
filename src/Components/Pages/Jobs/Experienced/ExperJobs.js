import React from 'react';
import { Link } from 'react-router-dom';

const ExperJobs = () => {
    return (
        <div className='m-7 mt-4'>
            <h1 className='text-4xl font-bold'>Experienced Jobs</h1>
            <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
                <div className="indicator">
                    <div className="indicator-item indicator-bottom">
                        <button className="btn" style={{ backgroundColor: '#ff6347', border: '1px solid #ff6347' }}>Apply</button>
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
                        <button className="btn" style={{ backgroundColor: '#ff6347', border: '1px solid #ff6347' }}>Apply</button>                    </div>
                    <div className="card border">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">JavaScript Developer</h2>
                            <span className="badge badge-warning text-white" >Full time</span>
                        </div>
                    </div>
                </div>
                <div className="indicator">
                    <div className="indicator-item indicator-bottom">
                        <button className="btn" style={{ backgroundColor: '#ff6347', border: '1px solid #ff6347' }}>Apply</button>                    </div>
                    <div className="card border">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Backend Developer</h2>
                            <span className="badge badge-warning text-white" >Full time</span>
                        </div>
                    </div>
                </div>
                <div className="indicator">
                    <div className="indicator-item indicator-bottom">
                        <button className="btn" style={{ backgroundColor: '#ff6347', border: '1px solid #ff6347' }}>Apply</button>                    </div>
                    <div className="card border">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Full Stack Developer</h2>
                            <span className="badge badge-warning text-white" >Full time</span>
                        </div>
                    </div>
                </div>
                <div className="indicator">
                    <div className="indicator-item indicator-bottom">
                        <button className="btn" style={{ backgroundColor: '#ff6347', border: '1px solid #ff6347' }}>Apply</button>                    </div>
                    <div className="card border">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">JavaScript Developer</h2>
                            <span className="badge badge-warning text-white" >Full time</span>
                        </div>
                    </div>
                </div>
                <div className="indicator">
                    <div className="indicator-item indicator-bottom">
                        <button className="btn" style={{ backgroundColor: '#ff6347', border: '1px solid #ff6347' }}>Apply</button>                    </div>
                    <div className="card border">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Backend Developer</h2>
                            <span className="badge badge-warning text-white" >Full time</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-16 card-actions justify-center'>
                <Link to='/fresher'><button className="btn" style={{ backgroundColor: '#6c63ff', border: '2px solid #6c63ff' }}>See All Jobs</button></Link>
            </div>
        </div>
    );
};

export default ExperJobs;