import React from 'react';

// import images


function WorkProject(props) {
    return (
        <div className='project-outbox'>
            <div className='project-inbox'>
                <div className="latest-work">
                    <h2>{props.title}</h2>
                    <p>{props.projectDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default WorkProject;