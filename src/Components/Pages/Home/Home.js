import React from 'react';
import BanIT from '../Jobs/Companies/BanIT';
import ForeignIT from '../Jobs/Companies/ForeignIT';
import ExpertJobs from '../Jobs/Experienced/ExpertJobs';
import FirstPart from '../Jobs/FirstPart';
import FresherJobs from '../Jobs/Fresher/FresherJobs';

const Home = () => {
    return (
        <div>
            <FirstPart></FirstPart>
            <FresherJobs></FresherJobs>
            <ExpertJobs></ExpertJobs>
            <BanIT></BanIT>
            <ForeignIT></ForeignIT>
        </div>
    );
};

export default Home;