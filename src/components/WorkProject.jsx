import React from 'react';

// import images


function WorkProject(props) {
    return (
        <div className="latest-work">
            <h2>{props.title}</h2>
            <p>{props.projectDescription}</p>
        </div>
    )
}

export default WorkProject;