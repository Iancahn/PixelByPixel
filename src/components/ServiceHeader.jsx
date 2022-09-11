import React from 'react';
// import Animation
// import { motion } from "framer-motion";
// import components

// import images


function ServiceHeader(props) {
    return (
        <div className="service-header">
            <div>
                <p className="service-type">{props.type}</p>
                <div className="width-test">
                    <h1 className="service-title">{props.title}</h1>
                </div>
            </div>
        </div>
    )
}

export default ServiceHeader;