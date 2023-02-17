import React from 'react';
import { BsLayersFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

const FresherJobDetails = () => {
    return (
        <div>
            <div>
                <div>
                    <h1>Frontend Development</h1>
                    <p><span><BsLayersFill></BsLayersFill></span></p>
                    <p><span><FaMapMarkerAlt></FaMapMarkerAlt></span></p>
                </div>
                <div>
                    <button className="btn" style={{ backgroundColor: '#6c63ff', border: '1px solid #6c63ff' }}>Apply</button>
                </div>
            </div>
        </div>
    );
};

export default FresherJobDetails;