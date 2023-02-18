import React from 'react';

const Footer = () => {
    return (
        <div className='mt-16'>
            <footer className="footer p-16 bg-black text-base-content">
                <div>
                    <span className="footer-title text-white">Services</span>
                    <p className='text-white font-medium'>Far far away, behind the word <br /> mountains, far from the countries <br /> Vokalia and Consonantia, there live <br /> the blind texts.</p>
                </div>
                <div>
                    <span className="footer-title text-white">Employers</span>
                    <a href='works' className="link link-hover text-white font-medium">How it works</a>
                    <a href='reg' className="link link-hover text-white font-medium">Register</a>
                    <a href='post' className="link link-hover text-white font-medium">Post a Job</a>
                    <a href='skill' className="link link-hover text-white font-medium">Advance Skill Search</a>
                    <a href='recruit' className="link link-hover text-white font-medium">Recruiting Search</a>
                </div>
                <div>
                    <span className="footer-title text-white">Workers</span>
                    <a href='works' className="link link-hover text-white font-medium">How it works</a>
                    <a href='reg' className="link link-hover text-white font-medium">Register</a>
                    <a href='skill' className="link link-hover text-white font-medium">Post Your Skills</a>
                    <a href='skill' className="link link-hover text-white font-medium">Job Search</a>
                    <a href='skill' className="link link-hover text-white font-medium">Employer Search</a>
                </div>
                <div>
                    <span className="footer-title text-white">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>

            </footer>
            <div className='card-actions justify-center bg-black '>
                <p className='text-white'>Copyright © 2023 - All right reserved |</p>
            </div>
        </div>
    );
};

export default Footer;