import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-black text-base-content">
                <div>
                    <span className="footer-title text-white">Services</span>
                    <p className='text-white'>Far far away, behind the word <br /> mountains, far from the countries <br /> Vokalia and Consonantia, there live <br /> the blind texts.</p>
                </div>
                <div>
                    <span className="footer-title text-white">Employers</span>
                    <a href='#' className="link link-hover text-white">How it works</a>
                    <a href='#' className="link link-hover text-white">Register</a>
                    <a className="link link-hover text-white">Jobs</a>
                    <a className="link link-hover text-white">Press kit</a>
                </div>
                <div>
                    <span className="footer-title text-white">Workers</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
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
        </div>
    );
};

export default Footer;