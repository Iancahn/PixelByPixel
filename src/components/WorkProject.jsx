import React from 'react';

// import images


function WorkProject(props) {
    return (
        <div className='project-outbox'>
            <div className='project-inbox'>
                <div className="latest-work">
                    <h3 className="big-h3">{props.title}</h3>
                    <p>{props.projectDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default WorkProject;