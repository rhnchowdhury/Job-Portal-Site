import React from 'react';
import ExperJobs from '../Jobs/Experienced/ExperJobs';
import FirstPart from '../Jobs/FirstPart';
import FresherJobs from '../Jobs/Fresher/FresherJobs';

const Home = () => {
    return (
        <div>
            <FirstPart></FirstPart>
            <FresherJobs></FresherJobs>
            <ExperJobs></ExperJobs>
        </div>
    );
};

export default Home;